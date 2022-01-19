"use strict";(self.webpackChunkhot_gate_docs=self.webpackChunkhot_gate_docs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},l="Introduction",c={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"---",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/whitepaper-docs/Introduction",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"whitepaperSidebar",next:{title:"Participants",permalink:"/whitepaper-docs/Participants"}},p=[{value:"What is TeleportDAO?",id:"what-is-teleportdao",children:[]},{value:"Why Do We Need TeleportDAO?",id:"why-do-we-need-teleportdao",children:[{value:"Transfer",id:"transfer",children:[]},{value:"Exchange",id:"exchange",children:[]}]},{value:"How Does TeleportDAO Work?",id:"how-does-teleportdao-work",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-is-teleportdao"},"What is TeleportDAO?"),(0,o.kt)("p",null,"TeleportDAO is a cross-chain settlement protocol with three promising features: ",(0,o.kt)("strong",{parentName:"p"},"trustless"),", ",(0,o.kt)("strong",{parentName:"p"},"high speed"),", and ",(0,o.kt)("strong",{parentName:"p"},"simple UX"),". The main functionalities of TeleportDAO are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-Chain Transfer"),": users can transfer their assets (tokens, NFTs, and data) from one blockchain (called ",(0,o.kt)("strong",{parentName:"li"},"source chain"),") to another blockchain (called ",(0,o.kt)("strong",{parentName:"li"},"target chain"),"). This process is two-way, so users can move back their assets from the target chain to the source chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-Chain Exchange"),": users can exchange their assets on the source chain for other assets on the target chain. We use automated market maker (AMM) as the price-discovery mechanism.")),(0,o.kt)("p",null,"To deploy TeleportDAO smart contracts, the target chain needs be to programmable, however, the source chain can be programmable or non-programmable. In our protocol, every data is verified by the smart contracts, so TeleportDAO has blockchain-level security."),(0,o.kt)("p",null,"TeleportDAO has two special types of settlement:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast Settlement")," is a non-collateral-based solution that ables users to perform cross-chain settlement before their transaction gets finalized on the source chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instant Settlement")," is a collateral-based solution that ables users to perform cross-chain settlement before instantly.")),(0,o.kt)("p",null,"TeleportDAO token is called ",(0,o.kt)("strong",{parentName:"p"},"TDT"),". TDT is a governance token that is also used to pay rewards to TeleportDAO's participants."),(0,o.kt)("h2",{id:"why-do-we-need-teleportdao"},"Why Do We Need TeleportDAO?"),(0,o.kt)("p",null,"Suppose that Alice has token A on chain A. Now consider the following scenarios:"),(0,o.kt)("h3",{id:"transfer"},"Transfer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alice wants to pay Bob, a merchant who only accepts token A on chain B."),(0,o.kt)("li",{parentName:"ul"},"Alice wants to use a dApp that accepts token A, but it only exists on chain B. "),(0,o.kt)("li",{parentName:"ul"},"There is a staking pool of token A on chain B that offers better APY in comparison to staking pools of token A on chain A."),(0,o.kt)("li",{parentName:"ul"},"There is no dApp on chain A (the case of Bitcoin, Dash, etc.), so Alice wants to leverage chain B dApps. ")),(0,o.kt)("h3",{id:"exchange"},"Exchange"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alice wants to pay Bob, a merchant who only accepts token B on chain B."),(0,o.kt)("li",{parentName:"ul"},"Alice wants to leverage a dApp on chain B that accepts token B."),(0,o.kt)("li",{parentName:"ul"},"There is a staking pool of token B on chain B that offers better APY in comparison to staking pools of token B on chain A.")),(0,o.kt)("p",null,"In all these cases, Alice needs a cross-chain settlement protocol.  "),(0,o.kt)("h2",{id:"how-does-teleportdao-work"},"How Does TeleportDAO Work?"),(0,o.kt)("p",null,"In TeleportDAO, users submit their cross-chain transfer and exchange requests on the source chain. Parties called ",(0,o.kt)("strong",{parentName:"p"},"teleporters")," collect users' requests from the source chain and submit them on the target chain. The validity of the submitted requests is checked by the ",(0,o.kt)("strong",{parentName:"p"},"relay")," smart contract. Then validated requests get executed by TeleportDAO smart contracts. "),(0,o.kt)("p",null,"Relay is a secure, decentralized, and universal blockchain interoperability solution. In this solution, parties called ",(0,o.kt)("strong",{parentName:"p"},"relayers")," submit data of the source chain on the target chain, and relay smart contract checks the correctness of the data. By referencing the submitted data, users can prove that they have locked assets on the source chain to mint an equal amount of assets on the target chain, or prove that they have burnt assets on the target chain to redeem an equal amount of assets on the source chain. "),(0,o.kt)("p",null,"In TeleportDAO, three types of pools exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Liquidity Pool")," is a double asset pool that is used for executing exchange requests. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast Pool")," is a single asset pool that is used for executing fast cross-chain transfer and exchange requests. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instant Pool")," is a single asset pool that is used for executing instant cross-chain transfer and cross-chain exchange requests. To use an instant pool, users need to lock the proper amount of TDT. ")),(0,o.kt)("p",null,"The proper incentive mechanism is designed to incentive all participants including teleporters, relayers, liquidity pool providers, fast pool providers, and instant pool providers to collaborate in TeleportDAO."))}h.isMDXComponent=!0}}]);