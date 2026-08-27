"use strict";var l=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var p=l(function(d,o){
var c=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-infinite/dist'),t=require('@stdlib/math-base-special-pow/dist'),_=require('@stdlib/math-base-special-floor/dist'),A=require('@stdlib/math-base-special-ceil/dist'),H=require('@stdlib/math-base-special-log2/dist'),s=require('@stdlib/constants-float64-max-base2-exponent/dist'),I=require('@stdlib/constants-float64-min-base2-exponent-subnormal/dist'),M=require('@stdlib/constants-float64-pinf/dist'),f=t(2,s),N=f/2;function P(r){var e,i,v,q,a,n,u;return c(r)||E(r)||r===0||(r<0?(r=-r,e=-1):e=1,u=H(r),u===I)?r:(v=_(u),q=A(u),v===s?r-f>=N?e*M:e*f:(a=t(2,v),n=t(2,q),i=(n-a)/2,a+i>r?e*a:e*n))}o.exports=P
});var U=p();module.exports=U;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
