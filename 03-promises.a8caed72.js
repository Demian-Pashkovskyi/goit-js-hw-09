function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");i("iQIUW");document.querySelector(".form");(function(e,o){const t={position:e,delay:o},n=Math.random()>.3;return new Promise(((e,i)=>{setTimeout((()=>{n?e(t):i(t)}),o)}))})().then(((o,t)=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`,{timeout:5e3})})).catch(((o,t)=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`,{timeout:5e3})}));
//# sourceMappingURL=03-promises.a8caed72.js.map
