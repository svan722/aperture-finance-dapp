"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1324],{11324:function(t,e,n){n.d(e,{B8:function(){return g},LP:function(){return D},R0:function(){return b},Zd:function(){return w},d0:function(){return h},d2:function(){return N},fl:function(){return k}});var o=n(48803),r=n(28388),i=n(9485),a=n(5112),c=n(87066),l=n(34244),u=n.n(l),s=n(72558),d=n(64095),p=n(1473);let m=async(t,e)=>{let{data:n}=await (0,c.Z)({url:t,method:"post",data:{query:e}}),o=n.errors;if(o&&o.length>0)throw Error("Uniswap Subgraph Errors: ".concat(JSON.stringify(o)));return n.data},g=async function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,{poolDayDatas:o}=await m(t,"{\n    poolDayDatas(skip: 1, first: ".concat(n,', orderBy: date, orderDirection: desc, where:{pool: "').concat(e,'"}) {\n      volumeUSD\n    }\n  }'));return o},h=async(t,e,n,c,l,d,m,g,h,k)=>{let f=[],{amount0:w,amount1:y}=(0,p.tk)(n,c,l,m,d,Number(g)),D=(0,p.D9)(n,c,l,w,y,Number((null==h?void 0:h.decimals)||18),Number((null==k?void 0:k.decimals)||18)),b=new a.Token(t,e.token0.address,e.token0.decimals),S=new a.Token(t,e.token1.address,e.token1.decimals),N=(0,o.eX)(b,S,new s.Z(c).toFixed(),e.tickSpacing,!0),L=(0,o.eX)(b,S,new s.Z(l).toFixed(),e.tickSpacing,!0);if(N===L)return[];let v=new i.Position({pool:e,liquidity:D.toFixed(0),tickLower:Math.min(N,L),tickUpper:Math.max(N,L)}),U=Math.pow(10,e.token1.decimals-e.token0.decimals);for(let t=1;t<=200;t++)try{let e=r.viem.getPositionAtPrice(v,new(u())(n*U*t/100));f.push({price:n*t/100,token0Amount:Number(e.amount0.toExact()),token1Amount:Number(e.amount1.toExact())})}catch(t){console.log(t),(0,r.getLogger)().error("Failed to getPositionAtPrice: ".concat(JSON.stringify(t)))}return f},k=async function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,o=await g(t,e,n),r=o.map(t=>Number(t.volumeUSD));return(0,p.cQ)(r)},f=async(t,e,n)=>{try{let o=await m(t,"{\n    ticks(first: 1000, skip: ".concat(1e3*n,', where: { poolAddress: "').concat(e,'" }, orderBy: tickIdx) {\n      tickIdx\n      liquidityNet\n      price0\n      price1\n    }\n  }'));return o.ticks}catch(t){return(0,r.getLogger)().warn("Failed to get pool ticks",{error:t.message}),[]}},w=async(t,e)=>{let n=[],o=0;for(;;){let[r,i,a]=await Promise.all([f(t,e,o),f(t,e,o+1),f(t,e,o+2)]);if(n=[...n,...r,...i,...a],0===r.length||0===i.length||0===a.length)break;o+=3}return n},y=t=>t,D=async(t,e)=>{let n=await m(t,'{\n    token(id: "'.concat(e.toLowerCase(),'") {\n      id\n      name\n      symbol\n      volumeUSD\n      decimals\n    }\n  }'));return null!==n.token&&(n.token=y(n.token)),n.token},b=async(t,e,n,o)=>{let r=(0,d.xT)(e,n),i="feeGrowthGlobal0X128\nfeeGrowthGlobal1X128";o&&(i="");let{pools:a}=await m(t,'{\n    pools(orderBy: feeTier, where: {\n        token0: "'.concat(r[0].id,'",\n        token1: "').concat(r[1].id,'"}) {\n      id\n      tick\n      sqrtPrice\n      feeTier\n      liquidity\n      token0Price\n      token1Price\n      ').concat(i,"\n    }\n  }"));return a},S=async(t,e)=>{let n=await m(t,"{\n    tokens(where: {id_in: [".concat(e.map(t=>'"'.concat(t,'"')).join(","),"]}) {\n      id\n      name\n      symbol\n      volumeUSD\n      decimals\n      totalValueLockedUSD\n      tokenDayData(first: 1, orderBy: date, orderDirection: desc) {\n        priceUSD\n      }\n    }\n  }"));return null!==n.tokens&&(n.tokens=n.tokens.map(y)),n.tokens},N=async(t,e,n)=>{try{let o=await m(t,"{\n      pools (first: 300, orderBy: totalValueLockedUSD, orderDirection: desc, where: {liquidity_gt: 0, totalValueLockedUSD_gte: ".concat(e,", volumeUSD_gte: ").concat(n,"}) {\n        id\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n        feeTier\n        liquidity\n        tick\n        totalValueLockedUSD\n        poolDayData(first: 90, skip: 1, orderBy: date, orderDirection: desc) {\n          date\n          volumeUSD\n          open \n          high\n          low\n          close\n        }\n      }\n    }"));if(void 0===o||0===o.pools.length)return{pools:[],tokens:[]};let r=(0,d.Q7)(o.pools.reduce((t,e)=>[...t,e.token0.id,e.token1.id],[])),i=Math.ceil(r.length/100),a=await Promise.all(Array.from({length:i},(e,n)=>{let o=100*n;return S(t,r.slice(o,o+100))})).then(t=>t.flat());a.sort((t,e)=>Number(e.volumeUSD)-Number(t.volumeUSD));let c=o.pools.reduce((t,e)=>(t[e.token0.id]=(t[e.token0.id]||0)+1,t[e.token1.id]=(t[e.token1.id]||0)+1,t),{}),l=a.map(t=>({...t,poolCount:c[t.id]})),u=l.reduce((t,e)=>(t[e.id]=e,t),{}),s=o.pools.map(t=>({...t,token0:u[t.token0.id],token1:u[t.token1.id]})).map(t=>{let e=[];for(let n=0;n<t.poolDayData.length-1;++n)t.poolDayData[n].open=t.poolDayData[n+1].close,e.push(t.poolDayData[n]);return t.poolDayData=e,t}).filter(t=>t.poolDayData.length>=14);return{pools:s,tokens:a}}catch(t){return{pools:[],tokens:[]}}}},64095:function(t,e,n){n.d(e,{A7:function(){return c},Gh:function(){return p},Q7:function(){return s},Rr:function(){return a},Y8:function(){return k},_m:function(){return h},fL:function(){return m},fo:function(){return f},vT:function(){return g},xT:function(){return u},yF:function(){return l}});var o=n(5685),r=n(5112),i=n(1473);let a=o.Rw.Uniswap,c=t=>!!o.TM[t.name],l=t=>"100"===t?1e-4:"500"===t?5e-4:"3000"===t?.003:"10000"===t?.01:0,u=(t,e)=>t.id<e.id?[t,e]:[e,t],s=t=>t.filter((t,e,n)=>n.indexOf(t)===e),d="f9ed9810e15cd166e224bf88fe4d5b61",p={[o.Rw.Uniswap]:{[o.HL.ETHEREUM]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV"),[o.HL.ARBITRUM]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM"),[o.HL.OPTIMISM]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj"),[o.HL.POLYGON]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm"),[o.HL.BASE]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG"),[o.HL.BNB]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/G5MUbSBM7Nsrm9tH2tGQUiAF4SZDGf2qeo1xPLYjKr7K"),[o.HL.AVALANCHE]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/GVH9h9KZ9CqheUEL93qMbq7QwgoBu32QXQDPR6bev4Eo"),[o.HL.SCROLL]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/5ixVdGDt3MtSPZdzqE4TdhJuFBfQZPcmAkgTctt5eAZv")},[o.Rw.PancakeSwap]:{[o.HL.ETHEREUM]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/CJYGNhb7RvnhfBDjqpRnD3oxgyhibzc7fkAMa38YV3oS"),[o.HL.BNB]:"https://gateway.thegraph.com/api/".concat(d,"/subgraphs/id/A1fvJWQLBeUAggX2WQTMm3FKjXTekNXo77ZySun4YN2m")},[o.Rw.ApertureSwap]:{[o.HL.MANTA]:"https://api.goldsky.com/api/public/project_clnz7akg41cv72ntv0uhyd3ai/subgraphs/aperture-manta-pacific/uniswap-v3/gn"}},m=(t,e,n)=>{let o=Number.MAX_SAFE_INTEGER,r=1/Number.MAX_SAFE_INTEGER,a=(0,i.t0)(o,t.decimals,e.decimals),c=(0,i.t0)(r,t.decimals,e.decimals);return[{tickIdx:String(a),price0:String(o),price1:String(r),liquidityNet:n.liquidity},{tickIdx:String(c),price0:String(r),price1:String(o),liquidityNet:"-"+n.liquidity}]},g={[o.HL.ETHEREUM]:{totalValueLockedUSD_gte:1e6,volumeUSD_gte:5e5},[o.HL.POLYGON]:{totalValueLockedUSD_gte:1e5,volumeUSD_gte:5e4},[o.HL.OPTIMISM]:{totalValueLockedUSD_gte:1e6,volumeUSD_gte:5e5},[o.HL.ARBITRUM]:{totalValueLockedUSD_gte:0,volumeUSD_gte:0},[o.HL.BNB]:{totalValueLockedUSD_gte:1e5,volumeUSD_gte:5e4}},h={totalValueLockedUSD_gte:1e5,volumeUSD_gte:5e4},k=(t,e)=>{let n=new r.Token(e,t.id,Number(t.decimals));return n},f=(t,e)=>({ticker:t.symbol,decimals:Number(t.decimals),price:e.currentPriceUSD.toFixed(2)})},1473:function(t,e,n){n.d(e,{D9:function(){return p},cQ:function(){return w},gr:function(){return c},n9:function(){return g},t0:function(){return a},tk:function(){return l},uQ:function(){return m}});var o=n(72558),r=n(64095);o.Z.config({EXPONENTIAL_AT:999999,DECIMAL_PLACES:40});let i=new o.Z(2).pow(96);new o.Z(2).pow(128),new o.Z(0);let a=(t,e,n)=>{let o=k(t,Number(e)),r=k(1,Number(n)),i=h(r).div(h(o));return Math.log(i.toNumber())/Math.log(Math.sqrt(1.0001))},c=(t,e,n)=>{let r=new o.Z(Math.pow(Math.sqrt(1.0001),t)).multipliedBy(new o.Z(2).pow(96)),a=k(1,Number(e)),c=k(1,Number(n)),l=f(h(a),h(c),i),u=f(l,i,r).div(new o.Z(2).pow(96)).div(new o.Z(10).pow(e)).pow(2);return u.toNumber()},l=(t,e,n,o,r,i)=>{let a=0,c=0,l=0,u=Math.sqrt(t),s=Math.sqrt(e),d=Math.sqrt(n),p=0!==u?1/u:0,m=0!==d?1/d:0,g=(u-s)*r+(p-m)*o;return 0!==g&&isFinite(g)&&(a=i/g),!isFinite(c=a*(u-s))||isNaN(c)||c*r<0?c=0:c*r>i&&(c=i/r),!isFinite(l=a*(p-m))||isNaN(l)||l*o<0?l=0:l*o>i&&(l=i/o),{amount0:l,amount1:c,liquidityDelta:a}},u=(t,e,n)=>{let o=f(e,t,i);return f(n,o,e.minus(t))},s=(t,e,n)=>f(n,i,e.minus(t)),d=(t,e,n)=>{let o=k(t,e),r=k(1,n);return o.div(r).sqrt().multipliedBy(i)},p=(t,e,n,r,i,a,c)=>{let l;let p=k(r,c),m=k(i,a),g=d(t,a,c),h=d(e,a,c),f=d(n,a,c);if(g.lte(h))l=u(h,f,p);else if(g.lt(f)){let t=u(g,f,p),e=s(h,g,m);l=o.Z.min(t,e)}else l=s(h,f,m);return l},m=(t,e,n,o)=>{let i=(0,r.yF)(o),a=t.div(e.plus(t)).toNumber();return i*n*a},g=(t,e)=>{let n=new o.Z(0);for(let i=0;i<t.length-1;++i){var r;n=n.plus(new o.Z(t[i].liquidityNet));let a=Number(t[i].tickIdx),c=Number(null===(r=t[i+1])||void 0===r?void 0:r.tickIdx);if(a<=e&&e<=c)break}return n},h=t=>new o.Z(t).sqrt().multipliedBy(i).integerValue(3),k=(t,e)=>new o.Z(t).multipliedBy(new o.Z(10).pow(e)),f=(t,e,n)=>t.multipliedBy(e).div(n),w=t=>t.length<1?0:t.reduce((t,e)=>t+e,0)/t.length}}]);
//# sourceMappingURL=1324-4b5e0749f6f0b025.js.map