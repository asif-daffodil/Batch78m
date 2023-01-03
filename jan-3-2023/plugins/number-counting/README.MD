# A jQuery plugin to change numeric values with a counting animation

## Install

First, include it after the `jQuery` script:

```html
<script src="https://unpkg.com/jquery.counto"></script>
```

or import/require it and init on a `jQuery` instance:

```js
import init_counto from 'jquery.counto';

init_counto(jQuery);
```

## Usage

Instead of

```js
$('#my-number').text(number);
```

use

```js
$(`#my-number`).counto(number, timeout, ondone);
```

where

```js
ondone.call(this, number, old_number);
```

### xNumber

If you include `xNumber.js`, `counto` will automatically use it to parse formated numbers.

### Alternatives

- [countUp.js](https://inorganik.github.io/countUp.js/)
