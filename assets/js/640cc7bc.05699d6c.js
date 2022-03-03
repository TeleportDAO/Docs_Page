"use strict";(self.webpackChunkhot_gate_docs=self.webpackChunkhot_gate_docs||[]).push([[540],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,k=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:2},s="BitcoinRelay",u={unversionedId:"Relay/BitcoinRelay",id:"Relay/BitcoinRelay",isDocsHomePage:!1,title:"BitcoinRelay",description:"Code",source:"@site/docs-smart-contracts/Relay/BitcoinRelay.md",sourceDirName:"Relay",slug:"/Relay/BitcoinRelay",permalink:"/smart-contracts-docs/Relay/BitcoinRelay",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"whitepaperSidebar",previous:{title:"LiquidityPoolFactory",permalink:"/smart-contracts-docs/Pools/LiquidityPoolFactory"},next:{title:"CCExchangeRouter",permalink:"/smart-contracts-docs/Routers/CCExchangeRouter"}},d=[{value:"Code",id:"code",children:[]},{value:"Events",id:"events",children:[]},{value:"Read-Only Functions",id:"read-only-functions",children:[{value:"getCurrentEpochDifficulty",id:"getcurrentepochdifficulty",children:[]},{value:"getPrevEpochDifficulty",id:"getprevepochdifficulty",children:[]},{value:"getRelayGenesis",id:"getrelaygenesis",children:[]},{value:"getBestKnownDigest",id:"getbestknowndigest",children:[]},{value:"getLastReorgCommonAncestor",id:"getlastreorgcommonancestor",children:[]},{value:"finalizationParameter",id:"finalizationparameter",children:[]},{value:"epochLength",id:"epochlength",children:[]},{value:"lastEpochQueries",id:"lastepochqueries",children:[]},{value:"baseQueries",id:"basequeries",children:[]},{value:"initialHeight",id:"initialheight",children:[]},{value:"lastSubmittedHeight",id:"lastsubmittedheight",children:[]},{value:"HotGateToken",id:"hotgatetoken",children:[]},{value:"ExchangeRouter",id:"exchangerouter",children:[]},{value:"WAVAX",id:"wavax",children:[]},{value:"submissionGasUsed",id:"submissiongasused",children:[]},{value:"feeRatio",id:"feeratio",children:[]},{value:"availableHGT",id:"availablehgt",children:[]},{value:"availableTNT",id:"availabletnt",children:[]},{value:"lastBuyBack",id:"lastbuyback",children:[]},{value:"buyBackPeriod",id:"buybackperiod",children:[]},{value:"Deadline",id:"deadline",children:[]},{value:"numberOfKeepers",id:"numberofkeepers",children:[]},{value:"redeemScript",id:"redeemscript",children:[]},{value:"redeemScriptHash",id:"redeemscripthash",children:[]},{value:"multiSigAddress",id:"multisigaddress",children:[]}]},{value:"State-Changing Functions",id:"state-changing-functions",children:[{value:"addHeaders",id:"addheaders",children:[]},{value:"addHeadersWithRetarget",id:"addheaderswithretarget",children:[]},{value:"markNewHeaviest",id:"marknewheaviest",children:[]},{value:"checkTxProof",id:"checktxproof",children:[]},{value:"addKeeper",id:"addkeeper",children:[]},{value:"removeKeeper",id:"removekeeper",children:[]}]}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitcoinrelay"},"BitcoinRelay"),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/HotGate-Finance/HotGate-SmartContracts/blob/master/contracts/Relay/relay/Relay.sol"},"BitcoinRelay.sol")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h2",{id:"read-only-functions"},"Read-Only Functions"),(0,i.kt)("h3",{id:"getcurrentepochdifficulty"},"getCurrentEpochDifficulty"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getCurrentEpochDifficulty() external view returns (uint256);\n")),(0,i.kt)("p",null,"Returns difficulty target of block headers in current epoch.  "),(0,i.kt)("h3",{id:"getprevepochdifficulty"},"getPrevEpochDifficulty"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getPrevEpochDifficulty() external view returns (uint256);\n")),(0,i.kt)("p",null,"Returns difficulty target of block headers in previous epoch.  "),(0,i.kt)("h3",{id:"getrelaygenesis"},"getRelayGenesis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getRelayGenesis() external view returns (bytes32);\n")),(0,i.kt)("p",null,"Returns hash of the first submitted block header on the relay."),(0,i.kt)("h3",{id:"getbestknowndigest"},"getBestKnownDigest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getBestKnownDigest() external view returns (bytes32);\n")),(0,i.kt)("h3",{id:"getlastreorgcommonancestor"},"getLastReorgCommonAncestor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getLastReorgCommonAncestor() external view returns (bytes32);\n")),(0,i.kt)("h3",{id:"finalizationparameter"},"finalizationParameter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function finalizationParameter() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns finalization parameter of the source block chain."),(0,i.kt)("h3",{id:"epochlength"},"epochLength"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function epochLength() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the length of epoch where the number of queries is counted."),(0,i.kt)("h3",{id:"lastepochqueries"},"lastEpochQueries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function lastEpochQueries() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns number of transaction inclusion queries in the last epoch."),(0,i.kt)("h3",{id:"basequeries"},"baseQueries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function baseQueries() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the base number of queries in epochs."),(0,i.kt)("h3",{id:"initialheight"},"initialHeight"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialHeight() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns height of the first submmited block header to the relay. "),(0,i.kt)("h3",{id:"lastsubmittedheight"},"lastSubmittedHeight"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function lastSubmittedHeight() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns maximum height of submmited block headers. "),(0,i.kt)("h3",{id:"hotgatetoken"},"HotGateToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function HotGateToken() external view returns(address);\n")),(0,i.kt)("p",null,"Returns address of HotGate token contract."),(0,i.kt)("h3",{id:"exchangerouter"},"ExchangeRouter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function ExchangeRouter() external view returns(address);\n")),(0,i.kt)("p",null,"Returns address of NDEXRouter contract."),(0,i.kt)("h3",{id:"wavax"},"WAVAX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function WAVAX() external view returns(address);\n")),(0,i.kt)("p",null,"Returns address of WAVAX contract."),(0,i.kt)("h3",{id:"submissiongasused"},"submissionGasUsed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function submissionGasUsed() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns amount of gas which is need for submitting a new block header. "),(0,i.kt)("h3",{id:"feeratio"},"feeRatio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function feeRatio() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the ratio of relayer fee to block header submission cost."),(0,i.kt)("h3",{id:"availablehgt"},"availableHGT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function availableHGT() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns available HGT balance of relay."),(0,i.kt)("h3",{id:"availabletnt"},"availableTNT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function availableTNT() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns available TNT balance of relay."),(0,i.kt)("h3",{id:"lastbuyback"},"lastBuyBack"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function lastBuyBack() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the block number that last buy back happened. "),(0,i.kt)("h3",{id:"buybackperiod"},"buyBackPeriod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function buyBackPeriod() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the period that buy back takes place."),(0,i.kt)("h3",{id:"deadline"},"Deadline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function DEADLINE() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns the deadline number which relay passes when it calls exchange router contract."),(0,i.kt)("h3",{id:"numberofkeepers"},"numberOfKeepers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function numberOfKeepers() external view returns(uint);\n")),(0,i.kt)("p",null,"Returns number of keepers."),(0,i.kt)("h3",{id:"redeemscript"},"redeemScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemScript() external view returns(bytes memory);\n")),(0,i.kt)("p",null,"Returns the redeem script of the keepers."),(0,i.kt)("h3",{id:"redeemscripthash"},"redeemScriptHash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemScriptHash() external view returns(bytes memory);\n")),(0,i.kt)("p",null,"Returns the redeem script hash of the keepers."),(0,i.kt)("h3",{id:"multisigaddress"},"multiSigAddress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function multiSigAddress() external view returns(address);\n")),(0,i.kt)("p",null,"Returns the multi-signature address of the keepers."),(0,i.kt)("h2",{id:"state-changing-functions"},"State-Changing Functions"),(0,i.kt)("h3",{id:"addheaders"},"addHeaders"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function addHeaders(bytes calldata _anchor, bytes calldata _headers) external returns (bool);\n")),(0,i.kt)("p",null,"Adds new block headers to storage after validating."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_headers")," is the chain of new block headers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_anchor")," is the block header immediately preceeding the new block headers")),(0,i.kt)("h3",{id:"addheaderswithretarget"},"addHeadersWithRetarget"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function addHeadersWithRetarget(\n  bytes calldata _oldPeriodStartHeader,\n  bytes calldata _oldPeriodEndHeader,\n  bytes calldata _headers\n) external returns (bool);\n")),(0,i.kt)("h3",{id:"marknewheaviest"},"markNewHeaviest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function markNewHeaviest(\n  bytes32 _ancestor,\n  bytes calldata _currentBest,\n  bytes calldata _newBest,\n  uint256 _limit\n) external returns (bool);\n")),(0,i.kt)("h3",{id:"checktxproof"},"checkTxProof"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function checkTxProof(\n  bytes32 txid,\n  uint blockHeight,\n  bytes calldata intermediateNodes,\n  uint index,\n  bool payWithHGT,\n  uint neededConfirmations\n) external returns (bool);\n")),(0,i.kt)("p",null,"Checks inclusion of ",(0,i.kt)("inlineCode",{parentName:"p"},"txid")," in the block header of height ",(0,i.kt)("inlineCode",{parentName:"p"},"blockHeight"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockHeight")," is height of block that includes ",(0,i.kt)("inlineCode",{parentName:"li"},"txid"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intermediateNodes")," is the merkle inclusion proof of transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index")," is the position of transaction in the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payWithHGT")," is true if user wants to pay relay fee using HGT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"neededConfirmations")," is the required number of confirmations of ",(0,i.kt)("inlineCode",{parentName:"li"},"txid"),".")),(0,i.kt)("h3",{id:"addkeeper"},"addKeeper"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function addKeeper (bytes memory keeperAddress) external returns(bool);\n")),(0,i.kt)("p",null,"Adds ",(0,i.kt)("inlineCode",{parentName:"p"},"keeperAddress")," to the list of keepers."),(0,i.kt)("h3",{id:"removekeeper"},"removeKeeper"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function removeKeeper (uint keeperIndex) external returns(bool);\n")),(0,i.kt)("p",null,"Removes keeper with the index ",(0,i.kt)("inlineCode",{parentName:"p"},"keeperIndex")," from the keepers list."))}p.isMDXComponent=!0}}]);