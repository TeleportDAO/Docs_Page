"use strict";(self.webpackChunkhot_gate_docs=self.webpackChunkhot_gate_docs||[]).push([[6657],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],o={},u="LiquidityPool",s={unversionedId:"Pools/LiquidityPool",id:"Pools/LiquidityPool",isDocsHomePage:!1,title:"LiquidityPool",description:"Code",source:"@site/docs-smart-contracts/Pools/LiquidityPool.md",sourceDirName:"Pools",slug:"/Pools/LiquidityPool",permalink:"/smart-contracts-docs/Pools/LiquidityPool",tags:[],version:"current",frontMatter:{},sidebar:"whitepaperSidebar",previous:{title:"InstantPool",permalink:"/smart-contracts-docs/Pools/InstantPool"},next:{title:"LiquidityPoolFactory",permalink:"/smart-contracts-docs/Pools/LiquidityPoolFactory"}},d=[{value:"Code",id:"code",children:[]},{value:"Events",id:"events",children:[{value:"Mint",id:"mint",children:[]},{value:"Burn",id:"burn",children:[]},{value:"Swap",id:"swap",children:[]}]},{value:"Read-Only Functions",id:"read-only-functions",children:[{value:"MINIMUM_LIQUIDITY",id:"minimum_liquidity",children:[]},{value:"factory",id:"factory",children:[]},{value:"token0",id:"token0",children:[]},{value:"token1",id:"token1",children:[]},{value:"getReserves",id:"getreserves",children:[]},{value:"price0CumulativeLast",id:"price0cumulativelast",children:[]},{value:"price1CumulativeLast",id:"price1cumulativelast",children:[]},{value:"kLast",id:"klast",children:[]},{value:"HotGateToken",id:"hotgatetoken",children:[]}]},{value:"State-Changing Functions",id:"state-changing-functions",children:[{value:"mint",id:"mint-1",children:[]},{value:"burn",id:"burn-1",children:[]},{value:"swap",id:"swap-1",children:[]},{value:"skim",id:"skim",children:[]},{value:"sync",id:"sync",children:[]},{value:"initialize",id:"initialize",children:[]}]}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"liquiditypool"},"LiquidityPool"),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/HotGate-Finance/HotGate-SmartContracts/blob/master/contracts/Source/factories/LiquidityPool.sol"},"LiquidityPool.sol")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"mint"},"Mint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Mint(address indexed sender, uint amount0, uint amount1);\n")),(0,a.kt)("p",null,"Emitted each time liquidity is added to liquidity pool."),(0,a.kt)("h3",{id:"burn"},"Burn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n")),(0,a.kt)("p",null,"Emitted each time liquidity is removed from liquidity pool."),(0,a.kt)("h3",{id:"swap"},"Swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event Swap(\n    address indexed sender,\n    uint amount0In,\n    uint amount1In,\n    uint amount0Out,\n    uint amount1Out,\n    address indexed to\n);\n")),(0,a.kt)("p",null,"Emitted each time a swap occurs."),(0,a.kt)("h2",{id:"read-only-functions"},"Read-Only Functions"),(0,a.kt)("h3",{id:"minimum_liquidity"},"MINIMUM_LIQUIDITY"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function MINIMUM_LIQUIDITY() external pure returns (uint);\n")),(0,a.kt)("p",null,"Returns minimum liquidity that can be added to liquidity pool."),(0,a.kt)("h3",{id:"factory"},"factory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function factory() external view returns (address);\n")),(0,a.kt)("p",null,"Returns address of liquidity pool factory contract."),(0,a.kt)("h3",{id:"token0"},"token0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function token0() external view returns (address);\n")),(0,a.kt)("p",null,"Returns address of the liquidity pool token with higher order."),(0,a.kt)("h3",{id:"token1"},"token1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function token1() external view returns (address);\n")),(0,a.kt)("p",null,"Returns address of the liquidity pool token with lower order."),(0,a.kt)("h3",{id:"getreserves"},"getReserves"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n")),(0,a.kt)("p",null,"Returns available balance of each of the liquidity pool tokens. "),(0,a.kt)("h3",{id:"price0cumulativelast"},"price0CumulativeLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function price0CumulativeLast() external view returns (uint);\n")),(0,a.kt)("h3",{id:"price1cumulativelast"},"price1CumulativeLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function price1CumulativeLast() external view returns (uint);\n")),(0,a.kt)("h3",{id:"klast"},"kLast"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function kLast() external view returns (uint);\n")),(0,a.kt)("h3",{id:"hotgatetoken"},"HotGateToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function HotGateToken() external view returns (address);\n")),(0,a.kt)("p",null,"Returns HotGate token address."),(0,a.kt)("h2",{id:"state-changing-functions"},"State-Changing Functions"),(0,a.kt)("h3",{id:"mint-1"},"mint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(address to) external returns (uint liquidity);\n")),(0,a.kt)("p",null,"Mints liquidity pool tokens for user ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#mint"},"Mint"))),(0,a.kt)("h3",{id:"burn-1"},"burn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(address to) external returns (uint amount0, uint amount1);\n")),(0,a.kt)("p",null,"Burns liquidity pool tokens of user ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#burn"},"Burn"))),(0,a.kt)("h3",{id:"swap-1"},"swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n")),(0,a.kt)("p",null,"Swaps token0 and token1. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emits ",(0,a.kt)("a",{parentName:"li",href:"#swap"},"Swap"))),(0,a.kt)("h3",{id:"skim"},"skim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function skim(address to) external;\n")),(0,a.kt)("h3",{id:"sync"},"sync"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function sync() external;\n")),(0,a.kt)("h3",{id:"initialize"},"initialize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialize(address, address) external;\n")))}p.isMDXComponent=!0}}]);