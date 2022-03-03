"use strict";(self.webpackChunkhot_gate_docs=self.webpackChunkhot_gate_docs||[]).push([[314],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u="FastRouter",c={unversionedId:"Routers/FastRouter",id:"Routers/FastRouter",isDocsHomePage:!1,title:"FastRouter",description:"Code",source:"@site/docs-smart-contracts/Routers/FastRouter.md",sourceDirName:"Routers",slug:"/Routers/FastRouter",permalink:"/smart-contracts-docs/Routers/FastRouter",tags:[],version:"current",frontMatter:{},sidebar:"whitepaperSidebar",previous:{title:"ExchangeRouter",permalink:"/smart-contracts-docs/Routers/ExchangeRouter"},next:{title:"InstantRouter",permalink:"/smart-contracts-docs/Routers/InstantRouter"}},l=[{value:"Code",id:"code",children:[]},{value:"Events",id:"events",children:[{value:"FastTransfer",id:"fasttransfer",children:[]}]},{value:"Read-Only Functions",id:"read-only-functions",children:[{value:"bitcoinFastPool",id:"bitcoinfastpool",children:[]},{value:"ccTransferRouter",id:"cctransferrouter",children:[]},{value:"getNeededConfirmations",id:"getneededconfirmations",children:[]}]},{value:"State-Changing Functions",id:"state-changing-functions",children:[{value:"fastTransfer",id:"fasttransfer-1",children:[]},{value:"addLiquidity",id:"addliquidity",children:[]},{value:"removeLiquidity",id:"removeliquidity",children:[]}]}],d={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fastrouter"},"FastRouter"),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/HotGate-Finance/HotGate-SmartContracts/blob/master/contracts/Target/routers/FastRouter.sol"},"FastRouter.sol")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"fasttransfer"},"FastTransfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event FastTransfer(address indexed owner, address indexed spender, uint value);\n")),(0,o.kt)("p",null,"Emitted each time a fast transfer takes place."),(0,o.kt)("h2",{id:"read-only-functions"},"Read-Only Functions"),(0,o.kt)("h3",{id:"bitcoinfastpool"},"bitcoinFastPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function bitcoinFastPool() external view returns(address);\n")),(0,o.kt)("p",null,"Returns address of bitcoin fast pool contract."),(0,o.kt)("h3",{id:"cctransferrouter"},"ccTransferRouter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function ccTransferRouter() external view returns(address);\n")),(0,o.kt)("p",null,"Returns address of cross-chain transfer contract."),(0,o.kt)("h3",{id:"getneededconfirmations"},"getNeededConfirmations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getNeededConfirmations() public view override returns(uint);\n")),(0,o.kt)("p",null,"Returns the needed confirmations for a fast transfer request to get executed."),(0,o.kt)("h2",{id:"state-changing-functions"},"State-Changing Functions"),(0,o.kt)("h3",{id:"fasttransfer-1"},"fastTransfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function fastTransfer(\n    address receiver,\n    uint amount,\n    uint blockNumber\n) external returns(bool);\n")),(0,o.kt)("p",null,"Transfer ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," of wrapped bitcoin to the ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver")," from the fast pool."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blockNumber")," is number of block that fast transfer takes place.")),(0,o.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function addLiquidity(uint fastTokenAmount) external returns(bool);\n")),(0,o.kt)("p",null,"Adds ",(0,o.kt)("inlineCode",{parentName:"p"},"fastTokenAmount")," of wrapped bitcoin to the fast pool."),(0,o.kt)("h3",{id:"removeliquidity"},"removeLiquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function removeLiquidity(uint fastTokenAmount) external returns(bool);\n")))}f.isMDXComponent=!0}}]);