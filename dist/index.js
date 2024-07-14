"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=l(function(d,o){
var c=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-infinite/dist'),n=require('@stdlib/math-base-special-pow/dist'),_=require('@stdlib/math-base-special-floor/dist'),A=require('@stdlib/math-base-special-ceil/dist'),H=require('@stdlib/math-base-special-log2/dist'),s=require('@stdlib/constants-float64-max-base2-exponent/dist'),I=require('@stdlib/constants-float64-min-base2-exponent-subnormal/dist'),M=require('@stdlib/constants-float64-pinf/dist'),t=n(2,s),N=t/2;function P(r){var e,f,u,q,i,v,a;return c(r)||E(r)||r===0||(r<0?(r=-r,e=-1):e=1,a=H(r),a===I)?r:(u=_(a),q=A(a),u===s?r-t>=N?e*M:e*t:(i=n(2,u),v=n(2,q),f=(v-i)/2,i+f>r?e*i:e*v))}o.exports=P
});var U=p();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
