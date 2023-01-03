(function () {
    'use strict';

    /**
     *  A jQuery plugin to display numeric values with a nice animation.
     * 
     *  Usage:
     *      Instead of 
     *          `$(<selector>).val((int)nr);`
     *      use
     *          `$(<selector>).counto((int)nr, timeout, ondone);`
     *      
     *      where `ondone.call(this, nr, old_val)`
     *
     *
     *  @git https://github.com/duzun/jquery.counto
     *
     *  @author Dumitru Uzun (DUzun.Me)
     *  @version 1.1.0
     */
    function init($) {
      // ---------------------------------------------------------------------------
      /// Nice count to nr (by DUzun)
      function counto(nr, dl, done) {
        if (!dl) dl = 400;
        var start = $.now(),
            end = start + dl,
            delay = 10,
            rwm = parseFloat,
            rwc,
            fx = String(nr).split('.');

        if (typeof xNumber == 'function') {
          rwm = xNumber;
          rwc = xNumber;
        }

        fx = fx.length > 1 ? fx[1].length : 0;
        nr = rwm(nr);
        this.each(function (i, e) {
          var $this = $(e),
              data = $this.data(),
              mh = $this.is(':input') ? 'val' : 'text',
              v = $this[mh](),
              val = rwc ? new rwc(v) : rwm(v),
              ofs = Number(val),
              last = ofs,
              inter = ofs - nr,
              sv = function sv() {
            if (data._cto) clearTimeout(data._cto);
            var now = $.now(),
                v;

            if (now < end && last != nr) {
              v = (ofs - (now - start) / dl * inter).toFixed(fx);
              data._cto = setTimeout(sv, delay);
            } else {
              v = fx ? nr.toFixed(fx) : nr;
              delete data._cto;
            }

            if (v != last) {
              last = v;
              rwc ? val.value = v : val = v;
              $this[mh](val);
            }

            if (!data._cto) {
              if (typeof done === 'function') done.call(e, nr, val);
            }
          };

          sv();
        });
      }

      return $.fn.counto = counto;
    }

    if (typeof window !== 'undefined') {
      var $ = window.jQuery || window.Zepto;
      if ($) init($);
    }

    return init;

}());
//# sourceMappingURL=counto.js.map
