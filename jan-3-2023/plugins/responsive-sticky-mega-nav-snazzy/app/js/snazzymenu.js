/**
 * snazzymenu.js
 * Responsive, lightweight, mega menu plugin
 * Copyright (c) 2021 Tom Eloe - https://teloe.me
 * Released under the MIT license
 */

(function ($) {
    $.fn.snazzyMenu = function (options, breakpoint) {
        const nav = $(this);

        // Default settings
        const settings = $.extend(
            {
                theme: 'dark', // adds default color to nav (light, dark)
                breakpoint: 1024, // number in pixels to determine when the nav should turn mobile friendly
                sticky: true, // makes nav sticky on scroll
                toggleBtn: 'caret', // options: 'caret' or 'plus'. Make the .toggle dropdown icons either a caret or a plus sign for mobile viewports
                homeBtn:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>', // add a custom logo image that routes to homepage or use default home icon
                phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
                phoneLabel: 'Call', // label for the phone button
                locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
                locationLabel: 'Location', // label for the location button
                colClasses: false, // adds unique class names to each list item (column) in the mega menu in the order in which they appear
            },
            options
        );

        return this.each(function () {
            // defines dark or light themes
            if (settings.theme === 'light' || settings.theme) {
                nav.addClass(settings.theme);
            }

            if (settings.breakpoint) {
                breakpoint = settings.breakpoint;
            }

            // Makes nav sticky on scroll
            if (settings.sticky) {
                const navPos = nav.offset().top;
                $(window).on('scroll', function () {
                    nav.addClass('fixed');
                    if ($(window).scrollTop() <= navPos) {
                        nav.removeClass('fixed');
                    }
                });
            }

            if (
                settings.toggleBtn === 'caret' ||
                settings.toggleBtn === 'plus'
            ) {
                nav.find('.menu').addClass(settings.toggleBtn);
            }

            if (settings.homeBtn) {
                homeBtn = settings.homeBtn;
            } else {
                homeBtn = '';
            }

            if (settings.phoneLabel) {
                phoneLabel = settings.phoneLabel;
            } else {
                phoneLabel = '';
            }

            if (settings.locationLabel) {
                locationLabel = settings.locationLabel;
            } else {
                locationLabel = '';
            }

            // Load .cta/ .controls/ .close-overlay dynamically
            nav.find('.menu').before(
                '<div class="controls"><div class="logo"><a href="/" title="" aria-label="Home">' +
                    homeBtn +
                    '</a></div><div class="cta"><button class="menu-toggle" aria-label="Menu"></button></div></div>'
            );
            nav.after('<div class="close-overlay"></div>');

            // Add .has-sub class to li dropdowns
            if (nav.find('li.menu-item-has-children')) {
                $('li.menu-item-has-children').addClass('has-sub');
            }

            // Adds a location page link to the beginning of nav
            if (settings.locationBtn) {
                const btn =
                    '<a href="' +
                    settings.locationBtn +
                    '" class="location-btn-mobile ' +
                    '" target="_blank" aria-label="Location"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> <span>' +
                    locationLabel +
                    '</span></a>';
                nav.find('.cta').prepend(btn);
            }

            // Adds a click-to-call link
            if (settings.phoneBtn) {
                const btn =
                    '<a href="tel:' +
                    settings.phoneBtn +
                    '" class="call-btn-mobile ' +
                    '" aria-label="Call"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg> <span>' +
                    phoneLabel +
                    '</span></a>';
                nav.find('.cta').prepend(btn);
            }

            // Open menu
            $('.menu-toggle').on('click', function () {
                $(this).toggleClass('active');
                nav.find('.menu').toggleClass('open');
                $('.close-overlay').toggleClass('active');
                nav.toggleClass('scroll');
            });

            // Close menu
            function closeMenu() {
                $('.menu-toggle').removeClass('active');
                nav.find('.menu').removeClass('open');
                $('.close-overlay').removeClass('active');
                nav.removeClass('scroll');
            }
            closeMenu();

            $('.close-overlay').on('click', closeMenu);

            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    return closeMenu();
                }
            });

            // Hide all .sub-menus
            nav.find('.menu .sub-menu')
                .css({
                    display: 'flex',
                    'flex-direction': 'column',
                })
                .hide();

            // First main nav list item has active class
            nav.find('.menu > li:first-child').addClass('active');

            // Add .mega-menu class to first sub-menus
            nav.find('.menu > li.has-sub > .sub-menu').addClass('mega-menu');

            // Add .column-title class to first li elements in mega menu
            nav.find('.mega-menu > li').addClass('column-title');

            // Add unique class to mega menu columns
            if (settings.colClasses) {
                nav.find('.mega-menu .column-title').each(function (i) {
                    $(this).addClass('column' + '-' + (i + 1));
                });
            }

            // Top level nav item click functionality
            nav.find('.menu > li a').on('click', function (e) {
                if ($(this).parent().hasClass('has-sub')) {
                    e.preventDefault();
                }
                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            });

            // Adds toggle button to li items that have children
            nav.find('li a').each(function () {
                if ($(this).parent().hasClass('has-sub')) {
                    $(this).parent().append('<a class="toggle" href="#"></a>');
                }
            });

            // Expands the dropdown menu on each click
            nav.find('li .toggle').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.sub-menu').slideToggle(250);
                $(this).parent('li').toggleClass('open');
            });

            // Check window width
            function checkWidth() {
                const browserWidth = window.innerWidth;

                if (browserWidth <= breakpoint) {
                    nav.addClass('mobile');
                    nav.removeClass('desktop');
                } else {
                    nav.removeClass('mobile');
                    nav.addClass('desktop');
                    nav.find('.menu .sub-menu').hide();
                    nav.find('.has-sub').removeClass('open');
                }
            }
            checkWidth();

            $(window).on('resize', checkWidth);
        });
    };
})(jQuery);
