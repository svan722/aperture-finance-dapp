"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7183],{9489:function(t,e,n){n.d(e,{j:function(){return r}});async function r(t,e){let n={};return await Promise.all(Array.from(t).map(async t=>{let r=parseInt(t.toString());try{n[r]=await e(r)}catch(t){console.error("Error: Failed to fetch data for chain ".concat(r,":"),t.message)}})),n}},47521:function(t,e,n){n.d(e,{Tp:function(){return a},Zx:function(){return i},jw:function(){return c},pj:function(){return o}});var r=n(9485);function a(t,e,n,r,a,i){switch(t){case"getDecrementLower":return r?o(n,"Increment",a,i):o(e,"Decrement",a,i);case"getIncrementLower":return r?o(n,"Decrement",a,i):o(e,"Increment",a,i);case"getDecrementUpper":return r?o(e,"Increment",a,i):o(n,"Decrement",a,i);case"getIncrementUpper":return r?o(e,"Decrement",a,i):o(n,"Increment",a,i);default:return null}}function o(t,e,n,a){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;if(a&&n){let i="number"==typeof t?t:a.tickCurrent,c=i+("Decrement"===e?-1:1)*n*Math.ceil(o/2);return c<r.TickMath.MIN_TICK?c+=n:c>r.TickMath.MAX_TICK&&(c-=n),c}return null}function i(t,e,n){return Math.round(Math.log((t=Math.round(100*t)/100)<=e?Math.round((100+e)*100)/1e4+1/1e7:void 0!==n&&t>=n?Math.round((100+n)*100)/1e4:Math.round((100+t)*100)/1e4)/Math.log(1.0001))}function c(t,e){let n=1.0001**t*1e4-1e4;return e&&(n=Math.abs(n)),(Math.round(n)/100).toFixed(2)}},41738:function(t,e,n){n.d(e,{o:function(){return u}});var r=n(62942),a=n(70502),o=n(23255),i=n(16405),c=n(92321);let u=t=>{let{address:e}=(0,c.m)(),{ammEnum:n,networkId:u,isChainSupported:l}=(0,r.L)(),s=(0,a.$)(t);(0,o.Z)(()=>{s()},[e,u,n]),(0,i.useEffect)(()=>{l||s()},[s,l])}},16312:function(t,e,n){n.d(e,{q:function(){return l}});var r=n(24002),a=n(62942),o=n(69758),i=n(28388),c=n(70502),u=n(42732);let l=()=>{let{networkId:t}=(0,a.L)(),{mutate:e}=(0,u.u)(),{updateTokenPriceMap:n,updateTokenMap:l}=(0,r.jB)(),s=(0,c.$)(async(r,a)=>{let o=Array.isArray(a)?a:[a];l({chainId:r,tokens:o}),await n({chainId:r,tokens:o}),r===t&&await e()}),d=(0,c.$)(async(t,e)=>{let n=Array.isArray(e)?e:[e],r=await Promise.all(n.map(async e=>i.viem.getToken(e,t,(0,o.u)(t),void 0,!0)));return s(t,r)});return{mutateWarningTokens:s,mutateWarningTokensByAddress:d}}},23609:function(t,e,n){n.d(e,{M:function(){return m},d:function(){return f}});var r=n(24002),a=n(62942),o=n(48803),i=n(65195),c=n(16405),u=n(92321),l=n(87076),s=n(16312),d=n(45796);let f=t=>{var e,n;let{networkId:u,ammEnum:f}=(0,a.L)(),{mutateWarningTokensByAddress:m}=(0,s.q)(),{currentTokenMap:h,currentTokenPrice:v}=(0,l.P)(),{state:{rawAllPositionMap:p},updatePositionMap:g}=(0,r.jB)(),y=null==p?void 0:null===(e=p[t])||void 0===e?void 0:null===(n=e[f])||void 0===n?void 0:n[u];return(0,c.useEffect)(()=>{f&&t&&g({amm:f,chainId:u,walletAddress:t,isInitialization:!0})},[u,f,g,t]),(0,c.useEffect)(()=>{if(!y||!h)return;let t=(0,d.M)(y,h);t.length>0&&m(u,t)},[y,h,m,u]),(0,c.useMemo)(()=>{if(!y||!h)return{positionMap:{},positionList:[]};let t=(0,o.b)(y,h,u,v),e=(0,o.A5)(t);return{positionMap:(0,i.keyBy)(e,t=>t.positionId),positionList:e}},[y,h,u,v])},m=()=>{let{networkId:t,ammEnum:e}=(0,a.L)(),{address:n}=(0,u.m)(),{updatePositionMap:o}=(0,r.jB)(),i=(0,c.useCallback)(()=>{o({amm:e,chainId:t,walletAddress:n})},[e,t,o,n]);return{mutatePositionMap:i}}},17035:function(t,e,n){n.d(e,{q:function(){return l}});var r=n(62942),a=n(9489),o=n(89011),i=n(28388),c=n(33504),u=n(2303);function l(t){let{data:e,isLoading:n}=function(t){let{amm:e,isChainSupported:n}=(0,r.L)();return(0,u.Z)(e&&t&&n?"user-chains-with-positions-number-".concat(e.name,"-").concat(t):null,()=>{let n=(0,c.C7)(e).map(t=>(0,o.$D)(t));return(0,a.j)(n,async n=>i.viem.getNumberOfPositionsOwnedByOwner(t,n,(0,c.GP)(e)))})}(t),l=(0,o.I5)(),s=!n&&e?Object.entries(e).reduce((t,e)=>{let[n,r]=e;return l.includes(parseInt(n))&&r>0&&t.push(parseInt(n)),t},[]).flat():void 0;return{data:s,isLoading:n||!s}}},64928:function(t,e,n){n.d(e,{w:function(){return l}});var r=n(62942),a=n(76793),o=n(33504),i=n(2303),c=n(92321),u=n(17035);function l(t){let{address:e,isConnected:n}=(0,c.m)(),{amm:a,isChainSupported:o}=(0,r.L)(),{data:l}=(0,u.q)(e),d=n&&a&&e&&o&&(null==l?void 0:l.length)>0;return(0,i.Z)(d?"user-all-chains-triggers-".concat(a.name,"-").concat(e,"-").concat(l.join("-"),"-lo:").concat(!!t):null,async()=>s(a,e,l,!!t))}let s=async(t,e,n,r)=>{let i={};return await Promise.all(n.map(async n=>{try{let c=await (0,a.sm)((0,o.GP)(t),e,n,r);i[n]=c}catch(t){console.log("Error: Failed to fetch triggers ",t.message)}})),i}},45796:function(t,e,n){n.d(e,{M:function(){return m},b:function(){return d}});var r=n(62942),a=n(24002),o=n(41378),i=n(16405),c=n(16312),u=n(17035),l=n(92321),s=n(31900);function d(t){var e;let{ammEnum:n}=(0,r.L)(),{data:d}=(0,u.q)(t),{state:{rawAllTokenPriceMap:h,rawAllPositionMap:v,rawAllTokenMap:p}}=(0,a.jB)(),{mutateWarningTokensByAddress:g}=(0,c.q)();!function(){let{address:t}=(0,l.m)(),{data:e}=(0,u.q)(t),{networkId:n}=(0,r.L)(),{updateTokenPriceMap:o,state:{rawAllTokenMap:i}}=(0,a.jB)();(0,s.D)(i&&e,()=>{[n].concat(null!=e?e:[]).map(t=>{o({chainId:t,tokens:Object.values(i[t]),isInitialization:!0})})})}(),f(n,t);let y=null==v?void 0:null===(e=v[t])||void 0===e?void 0:e[n];(0,i.useEffect)(()=>{y&&Object.entries(y).forEach(t=>{let[e,n]=t,r=parseInt(e),a=null==p?void 0:p[r],o=m(n,a);o.length>0&&g(r,o)})},[y,g,p]);let M=!!d&&0===d.length,I=!M&&(!y||!p),k=(0,i.useMemo)(()=>{if(I)return{};let t={};return Object.entries(null!=y?y:{}).forEach(e=>{let[n,r]=e,a=parseInt(n),i=null==p?void 0:p[a],c=(0,o.b)(r,i,a,null==h?void 0:h[a]);t[a]=(0,o.A)(c)}),t},[y,I,p,h]);return{data:k,isLoading:I}}let f=(t,e)=>{let{updatePositionMap:n}=(0,a.jB)(),{data:r}=(0,u.q)(e);(0,i.useEffect)(()=>{t&&e&&(null==r||r.forEach(r=>{n({amm:t,chainId:r,walletAddress:e,isInitialization:!0})}))},[t,r,n,e])},m=(t,e)=>{let n=new Set;for(let r of Object.values(t)){let{token0:t,token1:a}=r.pool;[t.address,a.address].forEach(t=>{(null==e?void 0:e[t])||n.has(t)||n.add(t)})}return Array.from(n)}},48747:function(t,e,n){n.d(e,{d:function(){return s},m:function(){return l}});var r=n(62942),a=n(64953),o=n(69758),i=n(5685),c=n(28388),u=n(2303);function l(t,e){var n;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=!(arguments.length>3)||void 0===arguments[3]||arguments[3],{ammEnum:c,networkId:l,publicClient:s}=(0,r.L)();"SLIPSTREAM"!==c&&(a=i.Np[c]);let f=t&&e&&c&&o&&l===(null===(n=s.chain)||void 0===n?void 0:n.id);return(0,u.Z)(f?"tokens-market-price-".concat(c,"-").concat(l,"-").concat(t,"-").concat(e):null,()=>d(c,l,t,e,a,s),{refreshInterval:3e4})}function s(t,e,n,r){var c;let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=!(arguments.length>5)||void 0===arguments[5]||arguments[5],f=(0,a.iC)(),m=(0,o.u)(e,f);"SLIPSTREAM"!==t&&(l=i.Np[t]);let h=n&&r&&t&&s&&e===(null===(c=m.chain)||void 0===c?void 0:c.id);return(0,u.Z)(h?"calc-tokens-market-price-".concat(t,"-").concat(e,"-").concat(n,"-").concat(r):null,()=>d(t,e,n,r,l,m),{refreshInterval:3e4})}async function d(t,e,n,r,a,o){let i={};return await Promise.all(a.map(async a=>{try{let u=await c.viem.getPool(n,r,a,e,t,o);i[a]=u.token0.address===n?{tokenA:u.token0Price.toFixed(18),tokenB:u.token1Price.toFixed(18)}:{tokenA:u.token1Price.toFixed(18),tokenB:u.token0Price.toFixed(18)}}catch(t){console.debug("Error: unsupported pool: ",a,t.message)}})),i}},8768:function(t,e,n){n.d(e,{Q:function(){return l}});var r=n(87686),a=n(22980),o=n(81946),i=n(78855);async function c(t,e){let n;let{account:r,connector:c,...u}=e;n="object"==typeof r&&"local"===r.type?t.getClient():await (0,i.e)(t,{account:r,connector:c});let l=(0,o.s)(n,a.l,"signMessage");return l({...u,...r?{account:r}:{}})}var u=n(37122);function l(t={}){let{mutation:e}=t,n=(0,u.Z)(t),{mutate:a,mutateAsync:o,...i}=(0,r.D)({...e,mutationFn:t=>c(n,t),mutationKey:["signMessage"]});return{...i,signMessage:a,signMessageAsync:o}}}}]);
//# sourceMappingURL=7183-eed02d16624d3bcb.js.map