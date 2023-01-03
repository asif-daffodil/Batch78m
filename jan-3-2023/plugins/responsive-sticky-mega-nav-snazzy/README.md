<h1 align="center">snazzyMenu.js</h1>

<p align="center">Responsive, lightweight, mega menu plugin written in jQuery and SCSS.</p>

<p align="center">Click <a href="https://teloe.me/snazzymenu/">here</a> to see snazzyMenu in action.</p>

<p align="center">
    <a href="https://github.com/teloe/snazzymenu/blob/main/LICENSE"><img src="https://img.shields.io/github/license/teloe/snazzymenu?style=flat-square" /></a>
</p>

## Features

-   Responsive
-   Fully customizable
-   Sticky menu for both mobile and desktop

## Installation

Download/clone this repo and include the files located in the `dist` directory in your project:<br>
`dist/js/snazzymenu.min.js `
and
`dist/css/style.css`

### CSS

Include `style.css`

```html
<link rel="stylesheet" href="PATH_TO/css/style.css" />
```

### JS

Include `snazzymenu.min.js` and call `snazzyMenu()` to initialize.

```html
<script type="text/javascript" src="PATH_TO/js/snazzymenu.min.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $('.snazzymenu').snazzyMenu({
            // options
        });
    });
</script>
```

## Usage

snazzyMenu is designed to work well with WordPress sites and can be implemented in other environments by following this markup in your HTML.

```html
<div class="snazzymenu">
    <ul class="menu">
        <li class="menu-item-has-children">
            <a href="">Nav Item</a>
            <ul class="sub-menu">
                <li class="menu-item-has-children">
                    <a href="">Column Title</a>
                    <ul class="sub-menu">
                        <li><a href="">Menu Item</a></li>
                        <li><a href="">Menu Item</a></li>
                        <li><a href="">Menu Item</a></li>
                    </ul>
                </li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
                <li><a href="">Column Title</a></li>
            </ul>
        </li>
    </ul>
</div>
```

### Adding custom elements inside the mega menu

You can add custom elements (images, videos, etc.) by setting the `colClasses` value to `true`. This will add unique class names to each `li` element in the order in which they appear in your markup. You will see "colomn-1", "column-2", "column-3", etc. class names for the `li` elements inside the mega menu container.

_Example Markup_

```html
<ul class="sub-menu mega-menu">
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-1">
        <a href="">Column Title</a>
    </li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-2">
        <a href="">Column Title</a>
    </li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-3">
        <a href="">Column Title</a>
    </li>
    <li id="" class="menu-item menu-item-type-post_type menu-item-object-page column-title column-4">
        <a href="">Column Title</a>
    </li>
</ul>
```

You can then easily target those elements by class name and use jQuery `prepend()` or `append()` methods to add any element you'd like.

\*Example

```javascript
// Add an image before (above) the nav items
jQuery('.column-1').prepend(
    '<img class="img-resp" src"PATH_TO/images/image1.jpg">'
);
// Add an image after (below) the nav items
jQuery('.column-2').append(
    '<img class="img-resp" src"PATH_TO/images/image2.jpg">'
);
```

## Options

### List of available settings

\*Example usage on snazzyMenu init

```javascript
jQuery('.snazzymenu').snazzyMenu({
    theme: 'dark', // adds default color to nav (light, dark)
    breakpoint: 1024, // number in pixels to determine when the nav should turn mobile friendly
    sticky: true, // makes nav sticky on scroll (desktop only)
    menuBtn: true, // show hamburger menu button/ top level controls/ logo image (top-level menu items will be visible on click)
    toggleBtn: 'caret', // options: 'caret' or 'plus'. Make the .toggle dropdown icons either a caret or a plus sign for mobile viewports
    homeBtn:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>', // set a custom image like a logo that routes to homepage
    phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
    phoneLabel: 'Call Us', // label for the phone button
    locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
    locationLabel: 'Location', // label for the location button
    colClasses: false, // fixes horizontal scrollbar issue on very long navs
});
```

### Reference

| Attribute       | Type      | Default                                                                                                                                                                             | Description                                                                                                    |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `theme`         | _String_  | 'dark'                                                                                                                                                                              | Adds default color to nav (light, dark)                                                                        |
| `breakpoint`    | _Integer_ | 1024                                                                                                                                                                                | Number in pixels to determine when the nav should turn mobile friendly                                         |
| `sticky`        | _Boolean_ | true                                                                                                                                                                                | Makes the nav sticky on scroll                                                                                 |
| `menuBtn`       | _Boolean_ | true                                                                                                                                                                                | Show hamburger menu button/ top level controls/ logo image (top-level menu items will be visible on click)     |
| `toggleBtn`     | _String_  | 'caret'                                                                                                                                                                             | Options: 'caret' or 'plus'. Make the .toggle dropdown icons either a caret or a plus sign for mobile viewports |
| `homeBtn`       | _String_  | '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>' | Set a custom image like a logo that routes to homepage                                                         |
| `phoneBtn`      | _String_  | ''                                                                                                                                                                                  | Adds a click-to-call phone link to the top of menu - i.e.: "18009084500"                                       |
| `phoneLabel`    | _String_  | 'Call'                                                                                                                                                                              | Label (text) for the phone button                                                                              |
| `locationBtn`   | _String_  | ''                                                                                                                                                                                  | Adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"                    |
| `locationLabel` | _String_  | 'Location'                                                                                                                                                                          | Label (text) for the location button                                                                           |
| `colClasses`    | _Boolean_ | false                                                                                                                                                                               | Adds unique class names to each list item (column) in the mega menu in the order in which they appear          |

### theme

By default, the theme for snazzyMenu is set to `'dark'`. You may change the value of this option to `'light'`. This will change the background color from black to white.

### breakpoint

Define the number in pixels you would like to have snazzyMenu change from mobile to desktop version.

### toggleBtn

For mobile viewports, there are dropdown icons to toggle sub-menus. By default, these icons are carets. You can change this option to `'plus'` if you'd prefer these icons to be plus signs.

### homeBtn

By default, a home icon svg will display on the left hand side of the menu. Add your logo or other image with the correct path to your image.

### phoneBtn

Add a phone number to your menu that users can click to call.

### phoneLabel

The default lable is 'Call'. You can include your full phone number by adding the string value.

### locationBtn

Add a location link to your menu that users can click to open a new tab with your location.

### locationLabel

The default lable is 'Location'. You can dislplay your full address by adding the string value.

### colClasses

By default, this is set to `false`. If you set to `true`, the `li` elements will have unique class names that you can target.
