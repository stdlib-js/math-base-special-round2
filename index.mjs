// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log2@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent-subnormal@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var o=s,l=t,j=e,p=i,h=n,b=m,c=d,f=r,x=a,v=j(2,c),g=v/2;var u=function(s){var t,e,i,n,m,d;return o(s)||l(s)||0===s?s:(s<0?(s=-s,t=-1):t=1,(d=b(s))===f?s:(e=p(d),i=h(d),e===c?s-v>=g?t*x:t*v:(n=j(2,e))+((m=j(2,i))-n)/2>s?t*n:t*m))};export{u as default};
//# sourceMappingURL=index.mjs.map
