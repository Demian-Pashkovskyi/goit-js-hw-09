!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc");i("h6c0i");var a=document.querySelector(".form");a.addEventListener("submit",(function(t){var n=function(t){var n,o;(n=t,o=i,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:o}):t({position:n,delay:o})}),o)}))).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{timeout:4e3})})).catch((function(n){var o=n.position,i=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(i,"ms"),{timeout:4e3}),i+=u*t}))};t.preventDefault();for(var o=new FormData(a),i=parseInt(o.get("delay")),u=parseInt(o.get("step")),c=parseInt(o.get("amount")),f=1;f<c;f++)n(f)}))}();
//# sourceMappingURL=03-promises.ac12c2c0.js.map
