!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNull=t()}(this,(function(){"use strict";const e="bigint",t="boolean",r="null",a="number",o="undefined",n="string",b="symbol",c="object",i="element",j={"[object Null]":r,"[object Set]":"set","[object WeakSet]":"weakset","[object Map]":"map","[object WeakMap]":"weakmap","[object Array]":"array","[object Arguments]":"arguments","[object DataView]":"dataview","[object ArrayBuffer]":"arraybuffer","[object Int8Array]":"int8array","[object Uint8Array]":"uint8array","[object Uint8ClampedArray]":"uint8clampedarray","[object Int16Array]":"int16array","[object Uint16Array]":"uint16array","[object Int32Array]":"int32array","[object Uint32Array]":"uint32array","[object Float32Array]":"float32array","[object Float64Array]":"float64array","[object BigInt64Array]":"bigint64array","[object BigUint64Array]":"biguint64array","[object Object]":c,"[object Boolean]":c,"[object String]":c,"[object Number]":c,"[object Date]":"date","[object Error]":"error","[object DocumentFragment]":"fragment","[object Function]":"function","[object NodeList]":"collection","[object Promise]":"promise","[object RegExp]":"regexp","[object Text]":"text"};return c=>(r=>{const c=Object.prototype.toString.apply(r),y=typeof r;let l;if(r?.tagName&&1===r.nodeType)l=i;else switch(y){case"bigint":l=e;break;case"string":l=n;break;case"number":l=a;break;case"boolean":l=t;break;case"undefined":l=o;break;case"symbol":l=b;break;default:l=j[c]}return l||c})(c)===r}));
//# sourceMappingURL=isNull.js.map