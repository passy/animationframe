# animationframe

A UMD module for a {request,cancel}AnimationFrame polyfill based on
[this gist](https://gist.github.com/paulirish/1579671).

## Usage

`bower install --save animationframe`

**As AMD module**

```
require('animationframe').requestAnimationFrame(function () {
    /* animate stuff */
});
```

**As global**

```
<script src="animationframe.js"></script>

window.requestAnimationFrame(function () {
    /* sparkly stuff */
});
```

## License

MIT
