"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[8066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,u=h["".concat(c,".").concat(m)]||h[m]||f[m]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Minting and Royalities FAQs"},i=void 0,s={unversionedId:"faqs/minting-and-royalities",id:"faqs/minting-and-royalities",title:"Minting and Royalities FAQs",description:"How do I mint a token after registering a collection?",source:"@site/docs/faqs/minting-and-royalities.md",sourceDirName:"faqs",slug:"/faqs/minting-and-royalities",permalink:"/zkBNB-docs/docs/faqs/minting-and-royalities",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/zkBNB-docs/docs/faqs/minting-and-royalities.md",tags:[],version:"current",frontMatter:{title:"Minting and Royalities FAQs"},sidebar:"faqSidebar",previous:{title:"Smart Contracts FAQs",permalink:"/zkBNB-docs/docs/faqs/contract"},next:{title:"Asset Management FAQs",permalink:"/zkBNB-docs/docs/faqs/asset-management"}},c={},l=[{value:"How do I mint a token after registering a collection?",id:"how-do-i-mint-a-token-after-registering-a-collection",level:2},{value:"Are there any minting limits?",id:"are-there-any-minting-limits",level:2},{value:"How do I set royalties for my collection?",id:"how-do-i-set-royalties-for-my-collection",level:2},{value:"Can I call the mint method from the front end?",id:"can-i-call-the-mint-method-from-the-front-end",level:2},{value:"I have NFTs on the BSC chain, so why can&#39;t I see them via zkBNB L1?",id:"i-have-nfts-on-the-bsc-chain-so-why-cant-i-see-them-via-zkbnb-l1",level:2},{value:"What are the different transactions on zkBNB? Which of these are charged?",id:"what-are-the-different-transactions-on-zkbnb-which-of-these-are-charged",level:2}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-do-i-mint-a-token-after-registering-a-collection"},"How do I mint a token after registering a collection?"),(0,o.kt)("p",null,"On the ",(0,o.kt)("a",{parentName:"p",href:"https://zkbnb.bnbchain.org/market/collection/create"},(0,o.kt)("inlineCode",{parentName:"a"},"/market/asset/create"))," page of various environments, you can mint NFTs."),(0,o.kt)("h2",{id:"are-there-any-minting-limits"},"Are there any minting limits?"),(0,o.kt)("p",null,"Minting is not allowed for illegal content such as pornography, drugs, and piracy."),(0,o.kt)("h2",{id:"how-do-i-set-royalties-for-my-collection"},"How do I set royalties for my collection?"),(0,o.kt)("p",null,"Cannot set royalties for collection. But you can set royalty when minting NFT."),(0,o.kt)("h2",{id:"can-i-call-the-mint-method-from-the-front-end"},"Can I call the mint method from the front end?"),(0,o.kt)("p",null,"Yes\uff0c you can do it by our js sdk on the front end"),(0,o.kt)("h2",{id:"i-have-nfts-on-the-bsc-chain-so-why-cant-i-see-them-via-zkbnb-l1"},"I have NFTs on the BSC chain, so why can't I see them via zkBNB L1?"),(0,o.kt)("p",null,"Currently, we only support the NFTs created via zkBNB; users can deposit and withdraw between BSC and zkBNB and transfer between two zkBNB accounts. Withdrawing NFTs from your L1 account to another L1 account is not allowed. And you also can't see your NFTs created via L1 on zk Wallet."),(0,o.kt)("h2",{id:"what-are-the-different-transactions-on-zkbnb-which-of-these-are-charged"},"What are the different transactions on zkBNB? Which of these are charged?"),(0,o.kt)("p",null,"We have like token transfer, withdraw, deposit token, NFT transfer etc"),(0,o.kt)("admonition",{title:"Don't see your question?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/"},"BNB forum"),", so you can get the answers you need and make us aware of new FAQ items.")))}h.isMDXComponent=!0}}]);