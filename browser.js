// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var i=Math.floor;function o(r){return i(r)===r}function a(r){return o(r/2)}function f(r){return a(r>0?r-1:r+1)}var u=Math.sqrt;function c(r){return Math.abs(r)}var y="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function l(r){return"number"==typeof r}function s(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function v(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,e&&(r="-"+r)),r}var d=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function g(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!l(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=v(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=v(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):d.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(r){return"string"==typeof r}var A=Math.abs,U=String.prototype.toLowerCase,b=String.prototype.toUpperCase,m=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,j=/^(\d+)$/,I=/^(\d+)e/,S=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function F(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":A(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=m.call(t,k,"$1e"),t=m.call(t,x,"e"),t=m.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=m.call(t,E,"e+0$1"),t=m.call(t,_,"e-0$1"),r.alternate&&(t=m.call(t,j,"$1."),t=m.call(t,I,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):U.call(t)}function T(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function N(r,n,t){var e=n-r.length;return e<0?r:r=t?r+T(e):T(e)+r}var O=String.fromCharCode,V=isNaN,H=Array.isArray;function G(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function W(r){var n,t,e,i,o,a,f,u,c;if(!H(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(h(e=r[u]))a+=e;else{if(n=void 0!==e.precision,!(e=G(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,V(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,V(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=g(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!V(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=V(o)?String(e.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=F(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=v(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=N(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function C(r){var n,t,e,i;for(t=[],i=0,e=$.exec(r);e;)(n=r.slice(i,$.lastIndex-e[0].length)).length&&t.push(n),t.push(L(e)),i=$.lastIndex,e=$.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function P(r){return"string"==typeof r}function R(r){var n,t,e;if(!P(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=C(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return W.apply(null,t)}var M=Object.prototype,Z=M.toString,X=M.__defineGetter__,Y=M.__defineSetter__,q=M.__lookupGetter__,z=M.__lookupSetter__,B=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?p:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,n)||z.call(r,n)?(e=r.__proto__,r.__proto__=M,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&X&&X.call(r,n,t.get),a&&Y&&Y.call(r,n,t.set),r};function D(r,n,t){B(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",er=K&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,o;if(null==r)return Q.call(r);t=r[tr],o=tr,n=null!=(i=r)&&rr.call(i,o);try{r[tr]=void 0}catch(n){return Q.call(r)}return e=Q.call(r),n?r[tr]=t:delete r[tr],e}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var fr,ur=J,cr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,sr=fr,vr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(vr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var gr,hr=lr,Ar="function"==typeof Uint16Array,Ur="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,t;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Er={uint16:gr,uint8:hr};(mr=new Er.uint16(1))[0]=4660;var _r,jr,Ir=52===new Er.uint8(mr.buffer)[0];!0===Ir?(_r=1,jr=0):(_r=0,jr=1);var Sr={HIGH:_r,LOW:jr},xr=new sr(1),kr=new ur(xr.buffer),Fr=Sr.HIGH,Tr=Sr.LOW;function Nr(r,n,t,e){return xr[0]=r,n[e]=kr[Fr],n[e+t]=kr[Tr],n}function Or(r){return Nr(r,[0,0],1,0)}D(Or,"assign",Nr);var Vr,Hr="function"==typeof Uint32Array,Gr="function"==typeof Uint32Array?Uint32Array:null,Wr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,n,t;if("function"!=typeof Gr)return!1;try{n=new Gr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Hr&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var $r,Lr=Vr,Cr="function"==typeof Uint8Array,Pr="function"==typeof Uint8Array?Uint8Array:null,Rr="function"==typeof Uint8Array?Uint8Array:void 0;$r=function(){var r,n,t;if("function"!=typeof Pr)return!1;try{n=new Pr(n=[1,3.14,-3.14,256,257]),t=n,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr,Zr=$r,Xr="function"==typeof Uint16Array,Yr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Mr=function(){var r,n,t;if("function"!=typeof Yr)return!1;try{n=new Yr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Xr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Br={uint16:Mr,uint8:Zr};zr=function(){var r;return(r=new Br.uint16(1))[0]=4660,52===new Br.uint8(r.buffer)[0]}();var Dr=!0===zr?0:1,Jr=new sr(1),Kr=new Lr(Jr.buffer);function Qr(r,n){return Jr[0]=r,Kr[Dr]=n>>>0,Jr[0]}function rn(r){return 0|r}var nn,tn,en=2147483647,on=!0===Ir?1:0,an=new sr(1),fn=new ur(an.buffer);function un(r){return an[0]=r,fn[on]}!0===Ir?(nn=1,tn=0):(nn=0,tn=1);var cn={HIGH:nn,LOW:tn},yn=new sr(1),pn=new ur(yn.buffer),ln=cn.HIGH,sn=cn.LOW;function vn(r,n){return pn[ln]=r,pn[sn]=n,yn[0]}var dn=[0,0];function wn(r,n){var t,e;return Or.assign(r,dn,1,0),t=dn[0],t&=en,e=un(n),vn(t|=e&=2147483648,dn[1])}var gn,hn="function"==typeof Uint32Array,An="function"==typeof Uint32Array?Uint32Array:null,Un="function"==typeof Uint32Array?Uint32Array:void 0;gn=function(){var r,n,t;if("function"!=typeof An)return!1;try{n=new An(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(hn&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Un:function(){throw new Error("not implemented")};var bn,mn=gn,En="function"==typeof Uint8Array,_n="function"==typeof Uint8Array?Uint8Array:null,jn="function"==typeof Uint8Array?Uint8Array:void 0;bn=function(){var r,n,t;if("function"!=typeof _n)return!1;try{n=new _n(n=[1,3.14,-3.14,256,257]),t=n,r=(En&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?jn:function(){throw new Error("not implemented")};var In,Sn=bn,xn="function"==typeof Uint16Array,kn="function"==typeof Uint16Array?Uint16Array:null,Fn="function"==typeof Uint16Array?Uint16Array:void 0;In=function(){var r,n,t;if("function"!=typeof kn)return!1;try{n=new kn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(xn&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Fn:function(){throw new Error("not implemented")};var Tn,Nn={uint16:In,uint8:Sn};Tn=function(){var r;return(r=new Nn.uint16(1))[0]=4660,52===new Nn.uint8(r.buffer)[0]}();var On=!0===Tn?1:0,Vn=new sr(1),Hn=new mn(Vn.buffer);function Gn(r,n){return Vn[0]=r,Hn[On]=n>>>0,Vn[0]}var Wn=1023,$n=1048576,Ln=[1,1.5],Cn=[0,.5849624872207642],Pn=[0,1.350039202129749e-8],Rn=1023;function Mn(n,t,i,o){return r(n)||e(n)?(t[o]=n,t[o+i]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+i]=-52,t):(t[o]=n,t[o+i]=0,t)}D((function(r){return Mn(r,[0,0],1,0)}),"assign",Mn);var Zn=[0,0],Xn=[0,0];function Yn(i,o){var a,f;return 0===o||0===i||r(i)||e(i)?i:(Mn(i,Zn,1,0),o+=Zn[1],o+=function(r){var n=un(r);return(n=(2146435072&n)>>>20)-Wn|0}(i=Zn[0]),o<-1074?wn(0,i):o>Rn?i<0?t:n:(o<=-1023?(o+=52,f=2220446049250313e-31):f=1,Or.assign(i,Xn,1,0),a=Xn[0],a&=2148532223,f*vn(a|=o+Wn<<20,Xn[1])))}var qn=1048575,zn=1048576,Bn=1083179008,Dn=1e300,Jn=1e-300,Kn=[0,0],Qn=[0,0];function rt(i,a){var y,p,l,s,v,d,w,g,h,A,U,b,m,E;if(r(i)||r(a))return NaN;if(Or.assign(a,Kn,1,0),v=Kn[0],0===Kn[1]){if(0===a)return 1;if(1===a)return i;if(-1===a)return 1/i;if(.5===a)return u(i);if(-.5===a)return 1/u(i);if(2===a)return i*i;if(3===a)return i*i*i;if(4===a)return(i*=i)*i;if(e(a))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(i,a)}if(Or.assign(i,Kn,1,0),s=Kn[0],0===Kn[1]){if(0===s)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?wn(n,r):n}(i,a);if(1===i)return 1;if(-1===i&&f(a))return-1;if(e(i))return i===t?rt(-0,-a):a<0?0:n}if(i<0&&!1===o(a))return(i-i)/(i-i);if(l=c(i),y=s&en|0,p=v&en|0,w=v>>>31|0,d=(d=s>>>31|0)&&f(a)?-1:1,p>1105199104){if(p>1139802112)return function(r,n){return(un(r)&en)<=1072693247?n<0?1/0:0:n>0?1/0:0}(i,a);if(y<1072693247)return 1===w?d*Dn*Dn:d*Jn*Jn;if(y>1072693248)return 0===w?d*Dn*Dn:d*Jn*Jn;U=function(r,n){var t,e,i,o,a,f;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Qr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Qn,l)}else U=function(r,n,t){var e,i,o,a,f,u,c,y,p,l,s,v,d,w,g,h,A,U,b,m,E;return U=0,t<$n&&(U-=53,t=un(n*=9007199254740992)),U+=(t>>20)-Wn|0,t=1072693248|(b=1048575&t|0),b<=235662?m=0:b<767610?m=1:(m=0,U+=1,t-=$n),a=Qr(i=(h=(n=Gn(n,t))-(c=Ln[m]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),u=Gn(0,e+=m<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),u=Qr(u=3+(o=a*a)+(g+=(f=A*(h-a*u-a*(n-(u-c))))*(a+i)),0),d=(s=-7.028461650952758e-9*(p=Qr(p=(h=a*u)+(A=f*u+(g-(u-3-o))*i),0))+.9617966939259756*(A-(p-h))+Pn[m])-((v=Qr(v=(l=.9617967009544373*p)+s+(y=Cn[m])+(w=U),0))-w-y-l),r[0]=v,r[1]=d,r}(Qn,l,y);if(b=(A=(a-(g=Qr(a,0)))*U[0]+a*U[1])+(h=g*U[0]),Or.assign(b,Kn,1,0),m=rn(Kn[0]),E=rn(Kn[1]),m>=Bn){if(0!=(m-Bn|E))return d*Dn*Dn;if(A+8008566259537294e-32>b-h)return d*Dn*Dn}else if((m&en)>=1083231232){if(0!=(m-3230714880|E))return d*Jn*Jn;if(A<=b-h)return d*Jn*Jn}return b=function(r,n,t){var e,i,o,a,f,u,c,y,p,l;return p=((y=r&en|0)>>20)-Wn|0,c=0,y>1071644672&&(i=Gn(0,((c=r+(zn>>p+1)>>>0)&~(qn>>(p=((c&en)>>20)-Wn|0)))>>>0),c=(c&qn|zn)>>20-p>>>0,r<0&&(c=-c),n-=i),r=rn(r=un(u=1-((u=(o=.6931471824645996*(i=Qr(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?Yn(u,c):Gn(u,r)}(m,h,A),d*b}var nt,tt=Math.ceil,et="function"==typeof Uint32Array,it="function"==typeof Uint32Array?Uint32Array:null,ot="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var r,n,t;if("function"!=typeof it)return!1;try{n=new it(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(et&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var at,ft=nt,ut="function"==typeof Uint8Array,ct="function"==typeof Uint8Array?Uint8Array:null,yt="function"==typeof Uint8Array?Uint8Array:void 0;at=function(){var r,n,t;if("function"!=typeof ct)return!1;try{n=new ct(n=[1,3.14,-3.14,256,257]),t=n,r=(ut&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yt:function(){throw new Error("not implemented")};var pt,lt=at,st="function"==typeof Uint16Array,vt="function"==typeof Uint16Array?Uint16Array:null,dt="function"==typeof Uint16Array?Uint16Array:void 0;pt=function(){var r,n,t;if("function"!=typeof vt)return!1;try{n=new vt(n=[1,3.14,-3.14,65536,65537]),t=n,r=(st&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var wt,gt={uint16:pt,uint8:lt};wt=function(){var r;return(r=new gt.uint16(1))[0]=4660,52===new gt.uint8(r.buffer)[0]}();var ht,At,Ut=wt,bt=!0===Ut?1:0,mt=new sr(1),Et=new ft(mt.buffer);function _t(r){return mt[0]=r,Et[bt]}!0===Ut?(ht=1,At=0):(ht=0,At=1);var jt={HIGH:ht,LOW:At},It=new sr(1),St=new ft(It.buffer),xt=jt.HIGH,kt=jt.LOW;function Ft(r,n,t,e){return It[0]=r,n[e]=St[xt],n[e+t]=St[kt],n}function Tt(r){return Ft(r,[0,0],1,0)}D(Tt,"assign",Ft);var Nt=1048575,Ot=1.4426950407214463,Vt=[0,0];function Ht(n){var e,i,o,a,f;if(r(n)||n<0)return NaN;if(Tt.assign(n,Vt,1,0),f=0,(i=Vt[0])<1048576){if(0==(2147483647&i|Vt[1]))return t;f-=54,i=_t(n*=0x40000000000000)}return i>=2146435072?n+n:(f+=(i>>20)-1023|0,f+=(a=614244+(i&=qn)&1048576|0)>>20|0,o=function(r){var n,t,e,i,o,a,f,u,c,y,p;return i=_t(r),o=r-1,(Nt&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(y=(i&=Nt)-398458|0,p=440401-i|0,t=(c=(f=(a=o/(2+o))*a)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),u=e+t,(y|=p)>0?a*((n=.5*o*o)+u)-n:a*(u-o))}(n=Gn(n,i|1072693248^a)),1.6751713164886512e-10*((n-=1)+o)+(n-(e=Qr(n,0))+o)*Ot+e*Ot+f)}var Gt=rt(2,Rn),Wt=Gt/2;return function(t){var o,a,f,u,c,y;return r(t)||e(t)||0===t?t:(t<0?(t=-t,o=-1):o=1,-1074===(y=Ht(t))?t:(a=i(y),f=tt(y),a===Rn?t-Gt>=Wt?o*n:o*Gt:(u=rt(2,a))+((c=rt(2,f))-u)/2>t?o*u:o*c))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).round2=n();
//# sourceMappingURL=browser.js.map
