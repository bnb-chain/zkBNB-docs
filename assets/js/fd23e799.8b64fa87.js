"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[1621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"zkBNB Overview"},s=void 0,i={unversionedId:"guide/core-concepts/overview",id:"guide/core-concepts/overview",title:"zkBNB Overview",description:"Key Features",source:"@site/docs/guide/core-concepts/overview.md",sourceDirName:"guide/core-concepts",slug:"/guide/core-concepts/overview",permalink:"/zkBNB-docs/docs/guide/core-concepts/overview",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/guide/core-concepts/overview.md",tags:[],version:"current",frontMatter:{title:"zkBNB Overview"},sidebar:"guideSidebar",previous:{title:"Fee Structure",permalink:"/zkBNB-docs/docs/guide/introduction/fee-structure"},next:{title:"zkBNB Architecture",permalink:"/zkBNB-docs/docs/guide/core-concepts/zkbnb-arch"}},c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Digital Asset Management",id:"digital-asset-management",level:3},{value:"NFT Management and Marketplace",id:"nft-management-and-marketplace",level:3},{value:"Seamless L1 Wallet Management",id:"seamless-l1-wallet-management",level:3}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("h3",{id:"digital-asset-management"},"Digital Asset Management"),(0,r.kt)("p",null,"The zkBNB will serve as an alternative marketplace for issuing, using, paying and exchanging digital assets in a\ndecentralized manner. zkBNB and BSC share the same token universe for BNB, BEP2 and NFT tokens. This defines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The same token can circulate on both networks, and flow between them bi-directionally via L1 <",">"," L2 communication."),(0,r.kt)("li",{parentName:"ul"},"The total circulation of the same token should be managed across the two networks, i.e. the total effective supply\nof a token should be the sum of the token's total effective supply on both BSC and BC."),(0,r.kt)("li",{parentName:"ul"},"The tokens can only be initially created on BSC in BEP20, then pegged to the zkBNB. It is permissionless to peg token onto zkBNB.")),(0,r.kt)("p",null,"User can ",(0,r.kt)("strong",{parentName:"p"},"deposit, transfer, and withdraw")," both non-fungible token and fungible token on zkBNB."),(0,r.kt)("p",null,"Users enter the zk-rollup by ",(0,r.kt)("strong",{parentName:"p"},"depositing tokens")," in the rollup's contract deployed on the BSC. The zkBNB monitor will track deposits and submit it as a layer2 transaction, once committer verifies the transaction, users get funds on their account, they can start transacting by sending transactions to the committer for processing."),(0,r.kt)("p",null,"User can ",(0,r.kt)("strong",{parentName:"p"},"transfer")," any amount of funds to any existed accounts on zkBNB by sending a signed transaction to the network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Withdrawing")," from zkBNB to BSC is straightforward. The user initiates the withdrawal transaction, the fund will be\nburned on zkBNB. Once the transaction in the next batch been rolluped, a related amount of token will be unlocked from\nrollup contract to target account. "),(0,r.kt)("h3",{id:"nft-management-and-marketplace"},"NFT Management and Marketplace"),(0,r.kt)("p",null,"We target to provide an opensource NFT marketplace for users to browse, buy, sell or create their own NFT.\nThe meta-data of NFT on zkBNB sticks to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/nft-metadata-standard/"},"BSC standard"),".\nThe ERC721 standard NFT can be seamlessly deposited on zkBNB, or in reverse."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Marketplace framework",src:n(50041).Z,width:"1366",height:"832"})),(0,r.kt)("p",null,"Above diagram shows the framework of Nft Marketplace and zkBNB. All the buy/sell offer, meta-data of NFT/Collection,\nmedium resources, account profiles are store in the backend of NFT marketplace, only the ",(0,r.kt)("strong",{parentName:"p"},"contendHash"),",\n",(0,r.kt)("strong",{parentName:"p"},"ownership"),", ",(0,r.kt)("strong",{parentName:"p"},"creatorTreasuryRate")," and few other fields are recorded on zkBNB. To encourage price discovery, anyone\ncan place buy/sell offer in the marketplace without paying any fees since the offer is cached in the backend instead of\nbeing sent to the zkBNB. Once the offer is matched, an ",(0,r.kt)("strong",{parentName:"p"},"AtomicMatch")," transaction that consist of buy and sell offer\nwill be sent to zkBNB to make the trade happen. Users can also cancel an offer manually by sending a cancel offer\ntransaction to disable the backend cached offer."),(0,r.kt)("h3",{id:"seamless-l1-wallet-management"},"Seamless L1 Wallet Management"),(0,r.kt)("p",null,"zkBNB natively supports ECDSA signatures and follows ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md"},"EIP712")," signing structure, which means most of the Ethereum wallets can seamless support zkBNB. There is no extra effort for BSC users to leverage zkBNB."))}d.isMDXComponent=!0},50041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NFT_Marketplace-7fae7442cd7f34d901e9e49bc591d6fc.png"}}]);