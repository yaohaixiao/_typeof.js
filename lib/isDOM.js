!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isDOM=t()}(this,(function(){"use strict";const e="bigint",t="boolean",r="number",a="undefined",o="string",n="symbol",b="object",c="collection",i="element",y="fragment",j="function",u="text",s={"[object Null]":"null","[object Set]":"set","[object WeakSet]":"weakset","[object Map]":"map","[object WeakMap]":"weakmap","[object Array]":"array","[object Arguments]":"arguments","[object DataView]":"dataview","[object ArrayBuffer]":"arraybuffer","[object Int8Array]":"int8array","[object Uint8Array]":"uint8array","[object Uint8ClampedArray]":"uint8clampedarray","[object Int16Array]":"int16array","[object Uint16Array]":"uint16array","[object Int32Array]":"int32array","[object Uint32Array]":"uint32array","[object Float32Array]":"float32array","[object Float64Array]":"float64array","[object BigInt64Array]":"bigint64array","[object BigUint64Array]":"biguint64array","[object Object]":b,"[object Boolean]":b,"[object String]":b,"[object Number]":b,"[object Date]":"date","[object Error]":"error","[object DocumentFragment]":y,"[object Function]":j,"[object NodeList]":c,"[object Promise]":"promise","[object RegExp]":"regexp","[object Text]":u},l=b=>{const c=Object.prototype.toString.apply(b),y=typeof b;let j;if(b?.tagName&&1===b.nodeType)j=i;else switch(y){case"bigint":j=e;break;case"string":j=o;break;case"number":j=r;break;case"boolean":j=t;break;case"undefined":j=a;break;case"symbol":j=n;break;default:j=s[c]}return j||c},f=e=>!(!e||typeof e!==b&&!(e=>l(e)===j)(e));return e=>{return f(e)&&(!(!f(t=e)||l(t)!==i)||(e=>!(!f(e)||l(e)!==c))(e)||(e=>!(!f(e)||l(e)!==y))(e)||(e=>!(!f(e)||!(l(e)===u||e.tagName&&3===e.nodeType)))(e));var t}}));
//# sourceMappingURL=isDOM.js.map