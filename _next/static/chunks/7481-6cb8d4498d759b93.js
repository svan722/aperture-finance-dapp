"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7481],{10661:function(e,n,t){t.d(n,{t:function(){return l}});var o=t(79570),i=t(69987);let l=e=>{let{commonTokens:n,selectedToken:t=null,selectToken:l,selectUnknownToken:r,handleUnknownAddress:a,customClose:s,onClose:d}=e;return(0,o.jsx)(i.Cou,{commonTokens:n,selectedToken:t,selectToken:l,selectUnknownToken:r,handleUnknownAddress:a,customClose:s,onClose:d})}},2706:function(e,n,t){t.d(n,{n:function(){return a}});var o=t(62942),i=t(89011),l=t(28388),r=t(2303);function a(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"UNISWAP_V3",a=arguments.length>3?arguments[3]:void 0,{networkId:s}=(0,o.L)(),[d,c]=[e.toLowerCase(),n.toLowerCase()].sort(),u=t&&(0,i.B2)(null!=a?a:s)&&-1===[d,c].indexOf("0x");return(0,r.Z)(u?"fee-tier-distribution-".concat(t,"-").concat(null!=a?a:s,"-").concat(d,"-").concat(c):null,()=>l.viem.getFeeTierDistribution(null!=a?a:s,t,e,n))}},27481:function(e,n,t){t.d(n,{U:function(){return ec}});var o=t(79570),i=t(62942),l=t(20346),r=t(47521),a=t(48803),s=t(70502),d=t(94865),c=t(85464),u=t(59426),v=t(69987),m=t(9485),p=t(44850),k=t.n(p),g=t(16405),h=t(31900),f=t(89192),x=t(24002),T=t(92228),j=t(66886),b=t(17510),w=t(41738),y=t(10996),L=t(25590),A=t(28388),C=t(58694),I=t(15229),P=t(92321);function E(){let e=(0,T.Z)(["\n  width: 520px;\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 20px;\n"]);return E=function(){return e},e}function M(){let e=(0,T.Z)(["\n  background-color: ",";\n  color: ",";\n\n  :hover {\n    background-color: ",";\n    opacity: 0.8;\n  }\n"]);return M=function(){return e},e}function N(){let e=(0,T.Z)(["\n  color: ",";\n  background-color: ",";\n\n  :hover {\n    background-color: ",";\n    opacity: 0.8;\n  }\n"]);return N=function(){return e},e}let S=C.ZP.div.withConfig({componentId:"sc-5b85e54f-0"})(E()),O=(0,C.ZP)(v.zxk).withConfig({componentId:"sc-5b85e54f-1"})(M(),e=>{let{theme:n}=e;return n.colors.global.background.BG3},e=>{let{theme:n}=e;return n.colors.global.text.T1},e=>{let{theme:n}=e;return n.colors.global.background.BG3}),B=(0,C.ZP)(v.zxk).withConfig({componentId:"sc-5b85e54f-2"})(N(),e=>{let{theme:n}=e;return n.colors.global.textAlt.T1},e=>{let{theme:n}=e;return n.colors.global.primary},e=>{let{theme:n}=e;return n.colors.global.primary}),_=e=>{var n;let{pool:t,baseToken:l,tokenInfo:r,tokenPrice:s,total:d,poolKey:c,feeTier:m,priceRange:p,txnSetting:k,zapTokenInfo:h,cancel:f=()=>{},back:T}=e,j=!!h,{address:y}=(0,P.m)(),{ammEnum:L,networkId:C,publicClient:E}=(0,i.L)(),M=A.viem.getNativeCurrency(C),[N,B]=(0,g.useState)(),[_,R]=(0,g.useState)(),[F,U]=(0,g.useState)(),[K,W]=(0,g.useState)(),q=Array.isArray(h),Q=!!h&&(q?h[0]:h),z=!!h&&(q?h[1]:void 0),{swapInfo:Y,selectedSolver:Z}=(0,x.Dn)();return(0,g.useEffect)(()=>{if(j&&C&&y){if(null==Y?void 0:Y[Z]){var e,n;let o={walletAddress:null!=y?y:"0x",tokenA:Q,tokenB:Q.address===r[0].address?r[1]:r[0],tokenAAmount:null!==(e=null==Q?void 0:Q.amount)&&void 0!==e?e:"0",tokenBAmount:null!==(n=null==z?void 0:z.amount)&&void 0!==n?n:"0",poolKey:c,tickLower:p.tickLower,tickUpper:p.tickUpper,slippage:k.slippage,swapDataHex:null==Y?void 0:Y[Z].swapDataHex,liquidity:null==Y?void 0:Y[Z].liquidity,token0FeeAmount:null==Y?void 0:Y[Z].token0FeeAmount,token1FeeAmount:null==Y?void 0:Y[Z].token1FeeAmount,sqrtPriceX96:null==Y?void 0:Y[Z].sqrtPriceX96};(0,a.HV)(L,C,Q,o.tokenB,o.tokenAAmount,o.tokenBAmount,c,p.tickLower,p.tickUpper,o.walletAddress,k.deadline,k.slippage,o.swapDataHex,o.liquidity,E,o.token0FeeAmount,o.token1FeeAmount).then(e=>{let{tx:n,amounts:o}=e,i=(0,I.b)(BigInt(o.amount0Min),t.token0.decimals),l=(0,I.b)(BigInt(o.amount1Min),t.token1.decimals);W(t.token0.address===r[0].address?[i,l]:[l,i]),(0,b.Q)(n,C,E).then(e=>{let{totalGasCost:t,gasCost:o,l2GasAmount:i}=e;B({...n,gas:(0,u.yC)(i)}),R(null!=t?t:o)}).catch(e=>{(0,A.getLogger)().error("NewPosition.PreviewLPModal.getOptimalMintTx.EstimateGasError ",{error:e.message}),U(e.details)})}).catch(e=>{(0,A.getLogger)().error("NewPosition.PreviewLPModal.getOptimalMintTx.Error ",{ammEnum:L,networkId:C,...o,error:null==e?void 0:e.message}),U(e.message)})}else f()}},[Y]),(0,w.o)(()=>{f()}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.hDR,{amm:L,baseToken:l,tokenInfo:r,tokenPrice:s,total:d,poolKey:c,feeTier:m,priceRange:p,zapTokenInfo:h,slippage:100*k.slippage,amounts:K,estimatedGas:"".concat(null!==(n=_&&(0,I.b)(_,M.decimals))&&void 0!==n?n:"-"," ").concat(M.symbol),swapInfo:null==Y?void 0:Y[Z]}),(0,o.jsxs)(S,{children:[(0,o.jsx)(O,{width:"250px",variant:"contained",size:"lg",onClick:f,children:"Cancel"}),(0,o.jsx)(D,{tokenInfo:r,poolKey:c,priceRange:p,txnSetting:k,pool:t,zapIn:j,zapInTx:N,zapInError:F,back:e=>{f(),T(e)}})]})]})},D=e=>{let{tokenInfo:n,poolKey:t,priceRange:l,txnSetting:r,back:s,pool:d,zapIn:c,zapInTx:m,zapInError:p}=e,{address:k}=(0,P.m)(),{ammEnum:h,networkId:f,publicClient:x}=(0,i.L)(),[T,b]=(0,g.useState)(void 0),[w,C]=(0,g.useState)(void 0),{addSnackbar:I}=(0,j.D)(),{addPositionSnackbar:E}=(0,y.A)(),M={walletAddress:null!=k?k:"0x",chainId:f,tokenAAddress:n[0].address,tokenBAddress:n[1].address,tokenAAmount:n[0].amount&&""!==n[0].amount?n[0].amount:"0",tokenBAmount:n[1].amount&&""!==n[1].amount?n[1].amount:"0",poolFee:t,tickLower:l.tickLower,tickUpper:l.tickUpper,slippage:r.slippage,deadline:""===r.deadline?"30":r.deadline,useNative:n[0].native||n[1].native};(0,g.useEffect)(()=>{c||(0,a.Yt)(h,M,d,x).then(e=>{x.estimateGas({...e,account:k}).then(n=>{b({...e,gas:(0,u.yC)(n)})}).catch(e=>{(0,A.getLogger)().error("NewPosition.PreviewLPModal.CreatePositionTx.EstimateGasError ",{error:e.message}),C(e.details)})}).catch(e=>{(0,A.getLogger)().error("NewPosition.PreviewLPModal.CreatePositionTx.Error ",{ammEnum:h,lpDetails:M,pool:d,error:e.message}),C(e.message)})},[]);let{ready:N,data:S,sendTransaction:O,isError:_,isPending:D,isSuccess:R}=(0,L.i)(c?m:T);return(0,g.useEffect)(()=>{_&&I("Your open position request has failed.","failed")},[_]),(0,g.useEffect)(()=>{R&&((0,A.getLogger)().info("NewPosition.PreviewLPModal.ClickConfirm.Succeed",{hash:S,ammEnum:h}),E({info:"Your open position request has been sent.",status:"completed",url:void 0,transaction:{hash:S,successMsg:"Your ".concat(n[0].ticker,"-").concat(n[1].ticker," position has been successfully created.")}}),s(S))},[R]),(0,o.jsx)(B,{onClick:()=>{(0,A.getLogger)().info("NewPosition.PreviewLPModal.ClickConfirm.Start",{ammEnum:h}),null==O||O()},variant:"contained",color:"primary",size:"lg",invalid:!1,disabled:(c?!m:!T)||!N||!!w||!!p||D||R,width:"250px",children:w||(c&&p?p:D?(0,o.jsx)(v.$jN,{}):"Confirm Open Position")})};var R=t(97163),F=t(33841),U=t(88139);let K=e=>{var n,t;let{back:r}=e,{isConnected:a,address:s}=(0,P.m)(),{ammEnum:d,networkId:c,isChainSupported:u}=(0,i.L)(),{showModal:m,hideModal:p}=(0,v.ddY)(),{tokensPrice:h,poolKey:T,feeTier:j,selectedTokenA:b,selectedTokenB:w,tokenAAmount:y,tokenBAmount:L,baseTokenIdx:C,txnSetting:I,lowPrice:E,highPrice:M,totalPrice:N,pool:S,isPoolInitialization:O,isSyncing:B,setTotalPrice:D}=(0,l.M)(),[K,W]=(0,g.useState)(!1),[q,Q]=(0,g.useState)(!1),[z,Y]=(0,g.useState)(["0","0"]),[Z]=C?[w,b]:[b,w],{tickLower:G,tickUpper:V,zapTokenAAmount:H,zapTokenBAmount:X}=(0,R.Rd)(),$="number"==typeof G&&"number"==typeof V&&Boolean(G>=V),J=(0,U.p)($,H,null==b?void 0:b.amount),ee=(0,U.p)($,X,null==w?void 0:w.amount),{swapInfo:en,noNeedSwap:et}=(0,x.Dn)(),eo=O||et,ei=()=>{var e,n,t;let o=[{token:b,amount:H},{token:w,amount:X}].map(n=>{let{token:t,amount:o}=n;return{Icon:null==t?void 0:t.Icon,ticker:null==t?void 0:t.ticker,amount:o?k().round(null!=o?o:0,null!==(e=t.decimals)&&void 0!==e?e:18,k().RoundingModes.DOWN):"0",address:null==t?void 0:t.address,decimals:null==t?void 0:t.decimals,native:null==t?void 0:t.native}}),i=[{Icon:null==b?void 0:b.Icon,ticker:null==b?void 0:b.ticker,amount:y?k().round(null!=y?y:0,null!==(n=b.decimals)&&void 0!==n?n:18,k().RoundingModes.DOWN):"0",address:null==b?void 0:b.address,native:null==b?void 0:b.native,decimals:null==b?void 0:b.decimals},{Icon:null==w?void 0:w.Icon,ticker:null==w?void 0:w.ticker,amount:L?k().round(null!=L?L:0,null!==(t=w.decimals)&&void 0!==t?t:18,k().RoundingModes.DOWN):"0",address:null==w?void 0:w.address,native:null==w?void 0:w.native,decimals:null==w?void 0:w.decimals}],l={min:k().compareTo(E,0)>0&&0===k().compareTo(k().divide(1,E,18),0)?"∞":E,max:k().compareTo(M,0)>0&&0===k().compareTo(k().divide(1,M,18),0)?"∞":M,swapMin:0===Number(M)?"∞":k().divide("1",M,18),swapMax:0===Number(E)?"∞":k().divide("1",E,18),tickLower:G,tickUpper:V};(0,A.getLogger)().info("OpenPosition.OpenPreviewLPModal",{ammEnum:d,isV2:!0}),m(_,{padding:20,pool:S,baseToken:Z,tokenInfo:eo?i:o,zapTokenInfo:eo?void 0:o,tokenPrice:z,total:N,poolKey:T,feeTier:j,priceRange:l,txnSetting:I,cancel:p,back:r})},el=b&&!$&&!(null==b?void 0:b.native)&&k().compareTo(H,"0")>0,er=w&&!$&&!(null==w?void 0:w.native)&&k().compareTo(X,"0")>0;(0,g.useEffect)(()=>{D(((e,n,t,o)=>{if(!h)return"-";{let i,l;let r=null==t?void 0:t.address,a=null==o?void 0:o.address;return i=t&&(null==h?void 0:h[r])?k().multiply(null==h?void 0:h[r].price,e):"0",l=o&&(null==h?void 0:h[a])?k().multiply(null==h?void 0:h[a].price,n):"0",k().add(i,l)}})(H,X,b,w)),Y(((e,n)=>{var t,o,i,l;let[r,a]=[null==e?void 0:e.address,null==n?void 0:n.address];return h?[null!==(i=null===(t=h[r])||void 0===t?void 0:t.price)&&void 0!==i?i:"0",null!==(l=null===(o=h[a])||void 0===o?void 0:o.price)&&void 0!==l?l:"0"]:["0","0"]})(b,w))},[h,b,w,H,X,D]);let ea=eo?null===(n=(0,A.getChainInfo)(c).amms[d])||void 0===n?void 0:n.nonfungiblePositionManager:null===(t=(0,A.getChainInfo)(c).amms[d])||void 0===t?void 0:t.apertureAutomanV3;return(0,o.jsxs)(F.W4,{children:[a&&u&&(el||er)&&(0,o.jsxs)(F.hE,{children:[el&&(0,o.jsx)(f.B,{token:b,contractAddress:ea,amount:H,canBeZero:!!H,approveOnChange:e=>W(e),useNative:b.native}),er&&(0,o.jsx)(f.B,{token:w,contractAddress:ea,amount:X,canBeZero:!!X,approveOnChange:e=>Q(e),useNative:w.native})]}),(0,o.jsx)(F.KN,{variant:"contained",size:"lg",width:"100%",onClick:ei,disabled:!a||!T||$||B||!(s&&b&&w&&T&&!$&&!J&&!ee&&("0"!==H||"0"!==X))||!O&&!(null==en?void 0:en.length)||el&&!K||J||er&&!q||ee,children:a&&J?"Insufficient ".concat(null==b?void 0:b.ticker," Balance"):a&&ee?"Insufficient ".concat(null==w?void 0:w.ticker," Balance"):"Open Position"})]})};var W=t(2706),q=t(3344);let Q=e=>{var n,t;let{hide:r}=e,{availableASPools:a,selectedTokenA:s,selectedTokenB:d,poolKey:c,setPoolKeyUrl:u,zapIn:m,marketPrice:p,marketPriceLoading:k}=(0,l.M)(),{ammEnum:h}=(0,i.L)(),{data:f,isLoading:x}=(0,W.n)(null!==(n=null==s?void 0:s.address)&&void 0!==n?n:"0x",null!==(t=null==d?void 0:d.address)&&void 0!==t?t:"0x",h),T=!s||!d||k,[j,b]=(0,g.useState)(!0),w=(0,g.useMemo)(()=>{let e={};return p&&Object.keys(p).forEach(n=>{e[n]=!!(null==p?void 0:p[n])}),e},[p]),y=!!(null==w?void 0:w[c]),L=(0,q.Z)(!k&&!y&&c&&s&&d&&!m,{wait:200}),A=(0,g.useMemo)(()=>"SLIPSTREAM"===h?a.map(e=>({key:e.tickSpacing,label:e.fee})):v.Npi[h].map(e=>({key:e,label:e})),[h,a]);(0,g.useEffect)(()=>{if(x||!f)return;let e=G(f);e&&u(e)},[x]),(0,g.useEffect)(()=>{var e;if(!p||!j||(b(!1),c&&(null==w?void 0:w[c])))return;let n=(null==A?void 0:A.length)>0?(null===(e=A.find(e=>null==w?void 0:w[e.key]))||void 0===e?void 0:e.key)||A[0].key:void 0;u(n)},[p]),(null==A?void 0:A.length)||!c?(null==A?void 0:A.length)===1&&c!==A[0].key&&u(A[0].key):u(void 0);let C=(0,g.useMemo)(()=>"SLIPSTREAM"!==h?"":T?"Please select tokens first":a.length?void 0:"No available fee tiers",[h,a.length,T]);return r?null:(0,o.jsxs)(F.ec,{flexDirection:"column",children:[(0,o.jsx)(F.H5,{disabled:T,children:"Fee Tier"}),(0,o.jsx)(v.UPX,{disabled:T,tiers:f,createdStatus:w,selected:c,onSelect:u,disableNotCreated:m,options:A,tips:C}),L&&(0,o.jsx)(Y,{})]})},z=()=>{let{selectedTokenA:e,selectedTokenB:n,baseTokenIdx:t,startPrice:i,setStartPrice:r}=(0,l.M)(),[a,s]=t?[n,e]:[e,n];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.P_k,{variant:"warning",text:"This pool must be initialized before you can add liquidity. \n                  To initialize, select a starting price for the pool. \n                  Then, enter your liquidity price range and deposit amount. \n                  Gas fees will be higher than usual due to the initialization transaction.",showIcon:!1}),(0,o.jsx)(v.qgL,{align:"right",type:"number",value:i,onValueChange:r,base:null==a?void 0:a.ticker,ticker:"".concat(null==s?void 0:s.ticker," per ").concat(null==a?void 0:a.ticker),decimalScale:18})]})},Y=(0,g.memo)(z),Z=(0,g.memo)(Q),G=e=>Number(Object.entries(e).reduce((e,n)=>{let[t,o]=e,[i,l]=n;return l>o?[i,l]:[t,o]},["0",0])[0]);var V=t(10661),H=t(60152),X=t(47574),$=t(5112),J=t(16312),ee=t(5685);let en=()=>{let{selectedTokenA:e,selectedTokenB:n,tickLower:t,tickUpper:r,commonTokens:a,setZapTokenAAmount:d,setZapTokenBAmount:m,setTokenAAmount:p,setTokenBAmount:k,setSelectedToken:h,setZapInUrl:f,selectedZapInToken:x,setSelectedZapInToken:T}=(0,l.M)(),{networkId:j,ammEnum:b,publicClient:w}=(0,i.L)(),{address:y,isConnected:L}=(0,P.m)(),{state:A,setModalState:C}=(0,ee.dd)(),{isOpen:I}=A[ee.yI.TOKEN_SELECT_MODAL],[E,M]=(0,g.useState)(),{isOpen:N}=A[ee.yI.TOKEN_WARNING_MODAL],[S,O]=(0,g.useState)(),{mutateWarningTokens:B}=(0,J.q)(),_=(e,n)=>{d(""),m(""),T(void 0),x&&e&&n&&(Array.isArray(x)?T([e,n]):(0,u.TD)(e.address,x.address,"Equivalent")?T(e):(0,u.TD)(n.address,x.address,"Equivalent")&&T(n))},D=e=>{let t=n;(0,u.TD)(e,n)&&(h(c.cQ.TOKEN_B,null),k(""),t=null),h(c.cQ.TOKEN_A,e),p(""),_(e,t)},R=n=>{let t=e;(0,u.TD)(n,e)&&(h(c.cQ.TOKEN_A,null),p(""),t=null),h(c.cQ.TOKEN_B,n),k(""),_(t,n)},F=async e=>await (0,X.lp)(e,j,w,L,y),U=e=>{C(ee.yI.TOKEN_SELECT_MODAL,e)},K=e=>{C(ee.yI.TOKEN_WARNING_MODAL,e)};(0,s.$)(e=>{f(e),T(void 0),d(""),m("")});let W="Token Pair ".concat((0,u.H0)()?"":": Lower:".concat(t||""," Upper:").concat(r||""));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eo,{title:W,selectedTokenA:e,selectedTokenB:n,handleOpenTokenSelectModal:e=>{M(e),U(!0)}}),(0,o.jsx)(ee.u_,{isModalOpen:I,onClose:()=>U(!1),padding:20,closeIcon:!1,children:(0,o.jsx)(V.t,{commonTokens:a,selectedToken:E?e:n,selectToken:e=>{E?D(e):R(e),U(!1)},selectUnknownToken:e=>{O({token:e,isTokenA:E}),K(!0)},handleUnknownAddress:F,customClose:!0,onClose:()=>U(!1)})}),(0,o.jsx)(ee.u_,{isModalOpen:N,onClose:()=>K(!1),closeIcon:!1,children:(0,o.jsx)(v.fj1,{amm:b,token:null==S?void 0:S.token,exploreURL:(0,H.DI)(j),confirmClick:e=>{(null==S?void 0:S.isTokenA)?D(e):R(e),B(j,new $.Token(j,e.address,e.decimals,e.ticker,e.name)),K(!1),U(!1)},cancelClick:()=>K(!1)})})]})},et=e=>{let{title:n,selectedTokenA:t,selectedTokenB:i,handleOpenTokenSelectModal:l}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ee.tu,{children:(0,o.jsx)(ee.kC,{justifyContent:"space-between",alignItems:"center",children:(0,o.jsx)(v.Bpc,{children:n})})}),(0,o.jsxs)(F.Y_,{children:[(0,o.jsxs)(F.OY,{onClick:()=>l(!0),children:[t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(F.VC,{children:t.Icon}),(0,o.jsx)(v.Bpc,{children:t.ticker})]}):(0,o.jsx)(v.Bpc,{children:"Select A Token"}),(0,o.jsx)(F.sl,{children:(0,o.jsx)(F.K5,{})})]}),(0,o.jsxs)(F.OY,{onClick:()=>l(!1),children:[i?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(F.VC,{children:i.Icon}),(0,o.jsx)(v.Bpc,{children:i.ticker})]}):(0,o.jsx)(v.Bpc,{children:"Select A Token"}),(0,o.jsx)(F.sl,{children:(0,o.jsx)(F.K5,{})})]})]})]})},eo=(0,g.memo)(et),ei=(0,g.memo)(en),el=()=>{let{globalSlippage:e,setGlobalSlippage:n}=(0,x.DK)(),{txnSetting:t,setTxnSetting:r}=(0,l.M)(),{networkId:a}=(0,i.L)();return(0,o.jsxs)(F.c_,{height:16,children:[(0,o.jsx)(v.Bpc,{children:"Transaction Settings"}),(0,o.jsx)(v.oVd,{defaultSlippage:u.zI,globalSlippage:e,warningSlippage:u.NX,settingsForm:t,dropdownPosition:"bottomRight",buttonSize:"large",onFormChange:e=>r(e),setGlobalSlippage:e=>n(n=>({...n,[a]:e}))})]})},er=()=>{let{address:e}=(0,P.m)(),{tokenAAmount:n,tokenBAmount:t,setTokenAAmount:i,setTokenBAmount:r,poolKey:s,selectedTokenA:d,selectedTokenB:c,lowPrice:u,highPrice:m,tickLower:p,tickUpper:h,pool:f,isPoolInitialization:T}=(0,l.M)(),{zapTokenAAmount:j,zapTokenBAmount:b}=(0,R.Rd)(),{resetSolver:w}=(0,x.Dn)(),y="number"==typeof p&&"number"==typeof h&&Boolean(p>=h);(0,g.useEffect)(()=>{T&&!y&&(""!==n&&Number(n)>=0?L(n,!0):""!==t&&Number(t)>=0&&L(t,!1))},[y,p,h]);let L=(e,n)=>{let t=n?r:i;if((n?i:r)(e),f&&k().compareTo(e,0)>0)try{let o=(0,a.ye)(n?d.address:c.address,e,p,h,f).toExact();t(o)}catch(e){console.log("Failed on getOtherTokenAmount",e),t("")}else t("")},A=(e,n,t,o)=>{var i;let l=(0,U.p)(y,n,null==e?void 0:e.amount);return{ticker:null==e?void 0:e.ticker,placeholder:"0.00",defaultValue:n,subTitle:"-"===(i=null==e?void 0:e.price)?"-":k().multiply(null!=i?i:"0",n),balance:null==e?void 0:e.amount,displayBalance:null==e?void 0:e.formatAmount,onChange:e=>{e&&w(),T?L(e,o):t(e)},onMaxClick:e=>{e&&w(),T?L(e,o):t(e)},disabled:!e||""===u||""===m,warning:l}},C=A(d,n,i,!0),I=A(c,t,r,!1),E=(0,g.useMemo)(()=>(0,U.p)(y,j,null==d?void 0:d.amount)||(0,U.p)(y,b,null==c?void 0:c.amount),[y,null==d?void 0:d.amount,null==c?void 0:c.amount,j,b]),M=e&&d&&c&&s&&!y&&!E&&(k().compareTo(j,0)>0||k().compareTo(b,0)>0);return(0,g.useEffect)(()=>{T&&!f&&(i(""),r(""))},[f,T]),(0,o.jsxs)(F.W2,{children:[(0,o.jsxs)(F.VY,{flexDirection:"column",children:[(0,o.jsx)(ei,{}),(0,o.jsx)(Z,{},"".concat(null==d?void 0:d.address,"-").concat(null==c?void 0:c.address)),(0,o.jsxs)(F.Rj,{gap:"lg",children:[(0,o.jsx)(F.H5,{disabled:!d||!c||!s,children:"Token Amounts"}),(0,o.jsxs)(F.Y_,{children:[(0,o.jsx)(F.qC,{disabled:C.disabled,children:(0,o.jsx)(v.ZFv,{...C},"selectedTokenA-".concat(null==d?void 0:d.ticker))}),(0,o.jsx)(F.qC,{disabled:I.disabled,children:(0,o.jsx)(v.ZFv,{...I},"selectedTokenB-".concat(null==c?void 0:c.ticker))})]})]}),!T&&M&&(0,o.jsx)(R.pA,{})]}),(0,o.jsx)(el,{})]})};var ea=t(17963);function es(e){return e}let ed=e=>{var n,t,i,p;let{back:f}=e,{poolKey:x,tickSpacing:T,selectedTokenA:j,selectedTokenB:b,selectedTokenList:w,tickLower:y,tickUpper:L,setTickUrl:A,isSettingChanged:C,marketPrice:I,marketPriceLoading:P,baseTokenIdx:E,setBaseTokenIdx:M,startPrice:N,lowPrice:S,setLowPrice:O,highPrice:B,setHighPrice:_,pool:D}=(0,l.M)(),[R,U]=E?[b,j]:[j,b],W=!(0,u.TD)(null==w?void 0:w.token0,R),{startingPrice:q}=(0,ea.Yy)(N,w,W),{data:Q,isLoading:z,error:Y}=(0,d.M)(null!==(n=null==w?void 0:w.token0.address)&&void 0!==n?n:null,null!==(t=null==w?void 0:w.token1.address)&&void 0!==t?t:null,x),Z=(0,g.useMemo)(()=>{var e,n,t,o;if(!R||!U||!x)return{tickerA:"",tickerB:"",price:"0"};let i=null!==(e=null==R?void 0:R.ticker)&&void 0!==e?e:"",l=null!==(n=null==U?void 0:U.ticker)&&void 0!==n?n:"",r="0";return(null==I?void 0:I[x])?r=E?null!==(t=I[x].tokenB)&&void 0!==t?t:"0":null!==(o=I[x].tokenA)&&void 0!==o?o:"0":q&&(r=W?q.invert().toSignificant(18):q.toSignificant(18)),{tickerA:i,tickerB:l,price:r}},[E,R,U,x,I,q,W]),G=(e,n)=>{let t="low"===n?O:_;if("number"==typeof e&&w)try{let o=(0,m.tickToPrice)(w.token0,w.token1,e);(0,u.TD)(j,b,"Sorted"),W?("low"===n?_:O)(o.invert().toFixed(18)):t(o.toFixed(18))}catch(e){t("")}else t("")},V=(0,s.$)((e,n)=>{if(w&&T&&R){let t=(0,a.eX)(w.token0,w.token1,e,T,!W);"Left"===n?A(W?c.cQ.TICK_UPPER:c.cQ.TICK_LOWER,t):A(W?c.cQ.TICK_LOWER:c.cQ.TICK_UPPER,t)}}),H=e=>{let n=(0,r.Tp)(e,y,L,W,T,D);"getDecrementLower"===e||"getIncrementLower"===e?A(W?c.cQ.TICK_UPPER:c.cQ.TICK_LOWER,n):A(W?c.cQ.TICK_LOWER:c.cQ.TICK_UPPER,n)};(0,g.useEffect)(()=>{G(y,"low")},[y]),(0,g.useEffect)(()=>{G(L,"high")},[L]);let X=(0,s.$)(()=>{"0"===Z.price||!C&&y&&L||(V(k().multiply(Z.price,.9),"Left"),V(k().multiply(Z.price,1.1),"Right"))});(0,g.useEffect)(()=>{D&&!P&&X()},[D,P,X]),(0,g.useEffect)(()=>{N||D||(O(""),_(""))},[N,D]);let $=e=>{if("number"==typeof y&&"number"==typeof L){try{let n=(0,m.tickToPrice)(w.token0,w.token1,y);e?_(n.invert().toFixed(18)):O(n.toFixed(18))}catch(e){A(c.cQ.TICK_LOWER,void 0)}try{let n=(0,m.tickToPrice)(w.token0,w.token1,L);e?O(n.invert().toFixed(18)):_(n.toFixed(18))}catch(e){A(c.cQ.TICK_UPPER,void 0)}}};(0,h.D)(w,()=>{$(W)});let J=e=>{e!==E&&(M(e),$(!W))};return(0,o.jsxs)(F.im,{mt:32,children:[(0,o.jsx)(er,{}),(0,o.jsxs)(F.W2,{children:[(0,o.jsxs)(F.c_,{height:25,style:{gap:16,marginTop:0},children:[(0,o.jsx)(v.Bpc,{children:"Price Range"}),j&&b&&x&&(0,o.jsx)(F.aW,{width:140,menu:[null!==(i=null==j?void 0:j.ticker)&&void 0!==i?i:"",null!==(p=null==b?void 0:b.ticker)&&void 0!==p?p:""],defaultSelected:E,onSelect:e=>{J(e===(null==j?void 0:j.ticker)?0:1)}})]}),(0,o.jsx)(F.hF,{children:(0,o.jsx)(v.Yyu,{price:Number(Z.price),priceLower:S,priceUpper:B,warningMsg:k().compareTo(S,B)>=0?"Invalid range selected. The min price must be lower than the max price.":"Your position will not earn fees or be used in trades until the market price moves into your range.",validate:es,getDecrementLower:()=>{H("getDecrementLower")},getIncrementLower:()=>{H("getIncrementLower")},getDecrementUpper:()=>{H("getDecrementUpper")},getIncrementUpper:()=>{H("getIncrementUpper")},onLeftRangeInput:e=>{V(e,"Left")},onRightRangeInput:e=>{V(e,"Right")},feeAmount:x,currencyA:Z.tickerA,currencyB:Z.tickerB,ticksAtLimit:{LOWER:!0,UPPER:!0},interactive:!!D,chartHeight:200,dataState:{isLoading:z,error:Y,formattedData:Q&&(W?Q.tokenB:Q.tokenA)}})}),(0,o.jsx)(K,{back:f})]})]})},ec=e=>{let{back:n}=e,{networkId:t}=(0,i.L)();return(0,o.jsx)(l.a,{children:(0,o.jsx)(ed,{back:n})},t)}}}]);
//# sourceMappingURL=7481-6cb8d4498d759b93.js.map