"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[4660],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(y,c(c({ref:t},d),{},{components:o})):n.createElement(y,c({ref:t},d))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8538:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Smart Contracts FAQs"},c=void 0,i={unversionedId:"faqs/contract",id:"faqs/contract",title:"Smart Contracts FAQs",description:"How do I deploy a smart contract to zkBNB?",source:"@site/docs/faqs/contract.md",sourceDirName:"faqs",slug:"/faqs/contract",permalink:"/zkBNB-docs/docs/faqs/contract",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/faqs/contract.md",tags:[],version:"current",frontMatter:{title:"Smart Contracts FAQs"},sidebar:"faqSidebar",previous:{title:"Onboarding FAQs",permalink:"/zkBNB-docs/docs/faqs/onboarding"},next:{title:"Minting and Royalities FAQs",permalink:"/zkBNB-docs/docs/faqs/minting-and-royalities"}},s={},l=[{value:"How do I deploy a smart contract to zkBNB?",id:"how-do-i-deploy-a-smart-contract-to-zkbnb",level:2},{value:"How do I interact with my smart contract on zkBNB?",id:"how-do-i-interact-with-my-smart-contract-on-zkbnb",level:2},{value:"How do I get approved to launch on zkBNB?",id:"how-do-i-get-approved-to-launch-on-zkbnb",level:2},{value:"What token standards are supported?",id:"what-token-standards-are-supported",level:2},{value:"What are the contract-level requirements? How do I make my contract compatible?",id:"what-are-the-contract-level-requirements-how-do-i-make-my-contract-compatible",level:2},{value:"How do I deploy an ERC20 token?",id:"how-do-i-deploy-an-erc20-token",level:2}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-i-deploy-a-smart-contract-to-zkbnb"},"How do I deploy a smart contract to zkBNB?"),(0,r.kt)("p",null,"There is no way to deploy any smart contracts in zkBNB. It is not an EVM-compatible L2 solution. "),(0,r.kt)("h2",{id:"how-do-i-interact-with-my-smart-contract-on-zkbnb"},"How do I interact with my smart contract on zkBNB?"),(0,r.kt)("p",null,"There are no smart contracts on zkBNB. It is not EVM compatible L2 solution. User can send their request by invoke our apiserver service to do the mint, transfer, withdraw function etc."),(0,r.kt)("h2",{id:"how-do-i-get-approved-to-launch-on-zkbnb"},"How do I get approved to launch on zkBNB?"),(0,r.kt)("p",null,"It is permissionless L2, and you do not need to get any approval for your dApp deployment."),(0,r.kt)("h2",{id:"what-token-standards-are-supported"},"What token standards are supported?"),(0,r.kt)("p",null,"BNB and BEP20 created on BSC can flow freely between BSC and zkBNB. BEP721 minted on zkBNB can flow freely between BSC and ZkBNB."),(0,r.kt)("h2",{id:"what-are-the-contract-level-requirements-how-do-i-make-my-contract-compatible"},"What are the contract-level requirements? How do I make my contract compatible?"),(0,r.kt)("p",null,"zkBNB is not EVM compatible"),(0,r.kt)("h2",{id:"how-do-i-deploy-an-erc20-token"},"How do I deploy an ERC20 token?"),(0,r.kt)("p",null,"zkBNB is not EVM compatible"),(0,r.kt)("admonition",{title:"Don't see your question?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/"},"BNB forum"),", so you can get the answers you need and make us aware of new FAQ items.")))}p.isMDXComponent=!0}}]);