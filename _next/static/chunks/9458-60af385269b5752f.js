"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9458],{89458:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(46216),t),o(r(34612),t),o(r(95927),t),o(r(45551),t)},4820:function(e,t){var r,n;function o(e){switch(e){case r.Day:return 1;case r.Week:return 7;case r.Month:return 30;case r.Year:return 365}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.convertRate=t.RateInterval=void 0,(n=r=t.RateInterval||(t.RateInterval={})).Day="day",n.Week="week",n.Month="month",n.Year="year",t.convertRate=function(e,t,n=r.Day){return(1+e)**(o(t)/o(n))-1}},85133:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(4820),t)},25041:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},46216:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(85133),t),o(r(25041),t),o(r(16510),t),o(r(60493),t),o(r(16305),t)},16510:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(18501),t)},18501:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.irr=void 0;let n=r(34612),o=r(95927);t.irr=function(e,t={}){let r=new n.Polynomial(e),i=r.findRoot((0,o.getRootFinderOptionsWithDefaults)(t));return i.converged?i.value-1:NaN}},60493:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(10054),t)},10054:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.transform=void 0;let r=[/^(\d{4})[-/]?(\d{2})[-/]?(\d{2})$/];function n(e){if(e instanceof Date)return e;let t=r.find(t=>t.test(e));if(!t)throw Error(`Invalid date pattern: ${e}`);let[,n,o,i]=e.match(t);return new Date(parseInt(n,10),parseInt(o,10)-1,parseInt(i,10))}t.transform=function(e){if(0===e.length)return[];let{date:t}=e[0],r=e.map(e=>{var r;return{amount:e.amount,day:(r=e.date,function(e,t){let r=Math.floor(e.valueOf()/864e5),n=Math.floor(t.valueOf()/864e5);return n-r}(n(t),n(r)))}});return r}},16305:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(8447),t)},8447:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.xirr=void 0;let n=r(16510),o=r(60493),i=r(45551);t.xirr=function(e,t={}){let r=(0,o.transform)(e),a=r.map(e=>e.day),c=Math.max(...a)-Math.min(...a)+1,u=(0,i.zeros)(c);return r.forEach(({amount:e,day:t})=>u[t]+=e),{days:c,rate:(0,n.irr)(u,t)}}},67308:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},34612:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(67308),t),o(r(72838),t),o(r(45417),t)},72838:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(16096),t)},16096:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Line=void 0,t.Line=class{constructor(e,t){this.m=e,this.k=t}calculate(e){return this.m*e+this.k}findRoot(){return{converged:!0,iterations:0,value:-this.k/this.m}}getK(){return this.k}getM(){return this.m}}},45417:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(92011),t)},92011:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Polynomial=void 0;let n=r(95927),o=r(72838);class i{constructor(e){this.coefficients=e,this.derivative=null}getDegree(){return this.coefficients.length-1}calculate(e){let t=this.getDegree(),r=1,n=0;for(let o=t;o>=0;o--)n+=r*this.coefficients[o],r*=e;return n}differentiate(){if(this.derivative)return this.derivative;let e=this.getDegree(),t=[];return this.coefficients.forEach((r,n)=>{n!==e&&t.push(r*(e-n))}),this.derivative=new i(t)}findRoot(e){let t=new n.RootFinderFactory(e),r=t.make(e.method),o=r.findRoot(this);if(e.fallbackMethod&&!o.converged&&e.method!==e.fallbackMethod){let r=t.make(e.fallbackMethod);return r.findRoot(this)}return o}getCoefficients(){return this.coefficients}getTangentAt(e){let t=this.differentiate(),r=t.calculate(e),n=this.calculate(e)-r*e;return new o.Line(r,n)}}t.Polynomial=i},37101:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.BisectionRootFinder=void 0;let n=r(45551);t.BisectionRootFinder=class{constructor(e){this.options=e}findUpperLimit(e){let t=this.options.maxIterations,r=0,n=1;for(;r++<t;){let t=e.calculate(n);if(t<0)return n;n*=2}return NaN}findRoot(e){let t=this.findUpperLimit(e);if(!(0,n.isValidRoot)(t))return{converged:!1,iterations:0,value:NaN};let r=[0,t],o=this.options.epsilon,i=this.options.maxIterations,a=0,c=0;for(;a++<i;){let t=Math.abs(r[0]-r[1]);if(c=(r[0]+r[1])/2,t<o)return{converged:!0,iterations:a,value:c};let n=e.calculate(c);n<0?r[1]=c:r[0]=c}return{converged:!1,iterations:a-1,value:c}}}},94241:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(37101),t)},14453:function(e,t){var r,n;Object.defineProperty(t,"__esModule",{value:!0}),t.getRootFinderOptionsWithDefaults=t.DEFAULT_ROOT_FINDER_OPTIONS=t.RootFinderMethod=void 0,(n=r=t.RootFinderMethod||(t.RootFinderMethod={})).Bisection="bisection",n.Newton="newton",t.DEFAULT_ROOT_FINDER_OPTIONS={estimate:"auto",epsilon:1e-8,fallbackMethod:r.Bisection,maxIterations:100,method:r.Newton},t.getRootFinderOptionsWithDefaults=function(e){return Object.assign({},t.DEFAULT_ROOT_FINDER_OPTIONS,e)}},9730:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.RootFinderFactory=void 0;let n=r(14453),o=r(94241),i=r(66915);t.RootFinderFactory=class{constructor(e){this.options=e}make(e){switch(e){case n.RootFinderMethod.Bisection:return new o.BisectionRootFinder(this.options);case n.RootFinderMethod.Newton:return new i.NewtonRootFinder(this.options);default:throw Error(`RootFinderFactory ${e} not implemented.`)}}}},46655:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(9730),t)},95927:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(94241),t),o(r(14453),t),o(r(46655),t),o(r(66915),t)},66915:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(69346),t)},69346:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.NewtonRootFinder=void 0;let n=r(45551);t.NewtonRootFinder=class{constructor(e){this.options=e}autoEstimate(e){let t=e.getCoefficients(),{length:r}=t,n=0,o=0;return t.forEach(e=>{e>0?n+=e:o-=e}),(n/o-1)/r+1}findRoot(e){let t=this.options.epsilon,{estimate:r}=this.options,o=this.options.maxIterations,i=0,a="auto"===r?this.autoEstimate(e):r;for(;i++<o;){let r=e.getTangentAt(a),o=r.findRoot().value,c=Math.abs(o-a);if(a=o,c<t)return{converged:!0,iterations:i,value:a};if(!(0,n.isValidRoot)(a))return{converged:!1,iterations:i,value:a}}return{converged:!1,iterations:i-1,value:a}}}},45551:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(65727),t),o(r(71054),t)},65727:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(69968),t)},69968:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isValidRoot=void 0,t.isValidRoot=function(e){return!isNaN(e)&&isFinite(e)&&e>=0}},71054:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(25867),t)},25867:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.zeros=void 0,t.zeros=function(e){return Array(e).fill(0)}}}]);
//# sourceMappingURL=9458-60af385269b5752f.js.map