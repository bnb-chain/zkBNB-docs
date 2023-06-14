"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[4674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||s;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Tokenomics"},i="Tokenomics",a={unversionedId:"guide/economics/tokenomics",id:"guide/economics/tokenomics",title:"Tokenomics",description:"One thing users need to be aware of is the tokenomics of the projects. Each of the previously described projects uses its own token, which solely serves as a utility token of the particular project.",source:"@site/docs/guide/economics/tokenomics.md",sourceDirName:"guide/economics",slug:"/guide/economics/tokenomics",permalink:"/zkBNB-docs/docs/guide/economics/tokenomics",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/docs/guide/economics/tokenomics.md",tags:[],version:"current",frontMatter:{title:"Tokenomics"},sidebar:"guideSidebar",previous:{title:"Gas and Fees",permalink:"/zkBNB-docs/docs/guide/economics/gas-and-fees"},next:{title:"Overview",permalink:"/zkBNB-docs/docs/guide/zkbnb-wallet/overview"}},c={},l=[{value:"Supported Tokens",id:"supported-tokens",level:2},{value:"List Token",id:"list-token",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tokenomics"},"Tokenomics"),(0,r.kt)("p",null,"One thing users need to be aware of is the tokenomics of the projects. Each of the previously described projects uses its own token, which solely serves as a utility token of the particular project. "),(0,r.kt)("p",null,"This is very different from zkBNB, which uses the BNB token as the utility token. One of the unique benefits of the BNB token is that it has a limited supply, which means no one can create more BNB tokens just to prop their balance sheet. Moreover, the BNB token is also deflationary and is periodically burned or moved out of circulation during the block creation of the BNB Smart Chain. Lastly, the BNB token is used for all the projects within the BNB Chain ecosystem, including all the storage and scaling solutions."),(0,r.kt)("p",null,"All these make BNB tokens extremely versatile, having no correlation with any specific domain, and ideal for financial project planning and COGS predictability."),(0,r.kt)("h2",{id:"supported-tokens"},"Supported Tokens"),(0,r.kt)("p",null,"zkBNB can be used to transfer BNB, BEP20 and BEP721 tokens. zkBNB supports a maximum of 65535 BEP20 tokens and 1099511627775 BEP721 tokens. For BEP20 tokens, each supported token need to be listed on zkBNB L1 contract first. For BEP721 tokens, there are two sources: one is to deposit BEP721 token from BSC network to zkBNB, another is to directly mint on zkBNB."),(0,r.kt)("p",null,"zkBNB is not responsible for security of supported token contract. Please use any token on your own risk."),(0,r.kt)("h2",{id:"list-token"},"List Token"),(0,r.kt)("p",null,"zkBNB use ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetGovernance")," contract to manage supported tokens. To list token on zkBNB, call function ",(0,r.kt)("inlineCode",{parentName:"p"},"addAsset(address _assetAddress)")," of AssetGovernance contract."),(0,r.kt)("p",null,"Notice there is a listing fee for listing token, and fees are denominated using a specific token. The listing fee and fee token can be retrived by calling function ",(0,r.kt)("inlineCode",{parentName:"p"},"listingFee")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listingFeeToken"),". Make sure the sender that calls ",(0,r.kt)("inlineCode",{parentName:"p"},"addAsset")," has enough fee token balance."),(0,r.kt)("p",null,"In zkBNB the cost of every transaction comes from two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"L2 part"),": every transaction needs to read or write state storage, and zkBNB prover needs to generate a SNARK proof for every transaction. This part depends on the use of hardware resources and is therefor invariable;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"L1 part"),": zkBNB must pay BNB gas to commit, verify and execute L2 blocks by sending corresponding L1 transaction. The L1 fees need to be averaged per L2 transaction which is orders of magnitude cheaper than the cost of normal BNB/BEP20 transfers. In addition, for the special transaction types which need to be executed on contract such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Withdraw")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WithdrawNft"),", there is extra gas cost to be covered."))),(0,r.kt)("p",null,"Users can easily get fee cost of every transaction type using rpc method provided by zkBNB, then pay transaction fees in multi fee tokens supported by zkBNB. For example, suppose zkBNB supports BNB/USDT, when users make a transaction, users can use BNB or USDT to pay transaction fees for their own convenience."))}d.isMDXComponent=!0}}]);