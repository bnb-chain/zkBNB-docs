"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[3374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Overview"},c=void 0,s={unversionedId:"guide/zkbnb-marketplace/overview",id:"guide/zkbnb-marketplace/overview",title:"Overview",description:"zkBNB Marketplace is targetted to be an opensource NFT marketplace for users to browse, buy, sell or create their own NFT. The meta-data of NFT on zkBNB sticks to the BSC standard. The ERC721 standard NFT can be seamlessly deposited on zkBNB, or in reverse.",source:"@site/docs/guide/zkbnb-marketplace/overview.md",sourceDirName:"guide/zkbnb-marketplace",slug:"/guide/zkbnb-marketplace/overview",permalink:"/zkBNB-docs/docs/guide/zkbnb-marketplace/overview",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/zkBNB-docs/docs/guide/zkbnb-marketplace/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"guideSidebar",previous:{title:"Fund zkBNB Wallet",permalink:"/zkBNB-docs/docs/guide/zkbnb-wallet/get-test-tokens"},next:{title:"Resources",permalink:"/zkBNB-docs/docs/guide/build-on-zkbnb/resources"}},i={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://test.zkbnbchain.org/market"},"zkBNB Marketplace")," is targetted to be an opensource NFT marketplace for users to browse, buy, sell or create their own NFT. The meta-data of NFT on zkBNB sticks to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/nft-metadata-standard/"},"BSC standard"),". The ERC721 standard NFT can be seamlessly deposited on zkBNB, or in reverse."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Marketplace framework",src:r(50041).Z,width:"1366",height:"832"})),(0,a.kt)("p",null,"Above diagram shows the framework of Nft Marketplace and zkBNB. All the buy/sell offer, meta-data of NFT/Collection, medium resources, account profiles are store in the backend of NFT marketplace, only the ",(0,a.kt)("strong",{parentName:"p"},"contendHash"),", ",(0,a.kt)("strong",{parentName:"p"},"ownership"),", ",(0,a.kt)("strong",{parentName:"p"},"creatorTreasuryRate")," and few other fields are recorded on zkBNB. To encourage price discovery, anyone can place buy/sell offer in the marketplace without paying any fees since the offer is cached in the backend instead of being sent to the zkBNB. Once the offer is matched, an ",(0,a.kt)("strong",{parentName:"p"},"AtomicMatch")," transaction that consist of buy and sell offer will be sent to zkBNB to make the trade happen. Users can also cancel an offer manually by sending a cancel offer transaction to disable the backend cached offer."))}d.isMDXComponent=!0},50041:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/NFT_Marketplace-7fae7442cd7f34d901e9e49bc591d6fc.png"}}]);