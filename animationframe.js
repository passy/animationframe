// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// https://gist.github.com/paulirish/1579671

// requestAnimationFrame polyfill by Erik Möller. Fixes from Paul Irish,
// Tino Zijdel and Pascal Hartig.

// MIT license
(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals, mixes in returned object.
        _.extend(root, factory());
    }
}(this, function () {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    var exports = {};

    exports = {
        requestAnimationFrame: window.requestAnimationFrame,
        cancelAnimationFrame: window.cancelAnimationFrame
    };

    for (var x = 0; x < vendors.length && !exports.requestAnimationFrame; x += 1) {
        exports.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        exports.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!exports.requestAnimationFrame) {
        exports.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
            timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!exports.cancelAnimationFrame) {
        exports.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }

    return exports;
}));
