"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var n=s(function(h,u){
var a=require('@stdlib/array-base-resolve-getter/dist');function f(r,t){return typeof r[t]=="function"}function o(r,t){var e;if(f(r,"at"))return r.at(t);if(t<0){if(t+=r.length,t<0)return}else if(t>=r.length)return;return e=a(r),e(r,t)}u.exports=o
});var i=n();module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
