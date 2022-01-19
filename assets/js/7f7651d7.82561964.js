"use strict";(self.webpackChunkhot_gate_docs=self.webpackChunkhot_gate_docs||[]).push([[201],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1738:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:2},c="Participants",p={unversionedId:"Participants",id:"Participants",isDocsHomePage:!1,title:"Participants",description:"---",source:"@site/docs/Participants.md",sourceDirName:".",slug:"/Participants",permalink:"/whitepaper-docs/Participants",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"whitepaperSidebar",previous:{title:"Introduction",permalink:"/whitepaper-docs/Introduction"},next:{title:"Pools",permalink:"/whitepaper-docs/Pools"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Relayers",id:"relayers",children:[]},{value:"Teleporters",id:"teleporters",children:[]},{value:"Liquidity Pool Providers",id:"liquidity-pool-providers",children:[]},{value:"Fast Pool Providers",id:"fast-pool-providers",children:[]},{value:"Instant Pool Providers",id:"instant-pool-providers",children:[]},{value:"TDT Stakers",id:"tdt-stakers",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"participants"},"Participants"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("font",{size:"4"},"TeleportDAO has six main participants: relayers, teleporters, liquidity pool providers, fast pool providers, instant pool providers, and TDT stakers."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../static/img/TeleportDAO_Participants.jpg"})),(0,i.kt)("h2",{id:"relayers"},"Relayers"),(0,i.kt)("font",{size:"4"},"Relayers get data from the source chain and submit them to the target chain. Then, the relay contract checks the correctness of the submitted data and sends rewards to the relayer who provided the valid data faster. Anyone can become a relayer in our system and compete to collect rewards that are paid in TDT. As long as one honest relayer exists in the system, users can perform cross-chain transfers and cross-chain exchanges successfully."),(0,i.kt)("h2",{id:"teleporters"},"Teleporters"),(0,i.kt)("font",{size:"4"},"To create a better user experience, we introduce teleporters. Teleporters are parties who transfer users' cross-chain transfer and cross-chain exchange requests to the target chain. So users can perform cross-chain settlements by only interacting with the source chain. Teleporters receive fees in return for their service."),(0,i.kt)("h2",{id:"liquidity-pool-providers"},"Liquidity Pool Providers"),(0,i.kt)("font",{size:"4"},"These parties provide liquidity for liquidity pools of TeleportDAO. Anyone can become a liquidity pool provider and receive a portion of exchange fees."),(0,i.kt)("h2",{id:"fast-pool-providers"},"Fast Pool Providers"),(0,i.kt)("font",{size:"4"},"These parties provide liquidity for fast pools of TeleportDAO. Anyone can become a fast pool provider and receive a portion of fast settlement fees."),(0,i.kt)("h2",{id:"instant-pool-providers"},"Instant Pool Providers"),(0,i.kt)("font",{size:"4"},"These parties provide liquidity for instant pools of TeleportDAO. Anyone can become an instant pool provider and receive a portion of instant settlement fees."),(0,i.kt)("h2",{id:"tdt-stakers"},"TDT Stakers"),(0,i.kt)("font",{size:"4"},"Users can stake their TDT in TeleportDAO. After staking TDT, they can participate in TeleportDAO governance, receive a portion of protocol fees, and perform instant settlements."))}u.isMDXComponent=!0}}]);