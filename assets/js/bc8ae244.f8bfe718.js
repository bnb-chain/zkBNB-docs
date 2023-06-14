"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[6153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(b,i(i({ref:t},k),{},{components:n})):a.createElement(b,i({ref:t},k))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Fund zkBNB Wallet"},i="Fund zkBNB Wallet with Test BNB",s={unversionedId:"guide/zkbnb-wallet/get-test-tokens",id:"guide/zkbnb-wallet/get-test-tokens",title:"Fund zkBNB Wallet",description:"zkBNB Wallet provides seamless integration with BNB Smart Chain (Layer 1) and zkBNB (Layer 2). Furthermore, you can use the same wallet address for both zkBNB and the BSC chain, hence, making it more convenient for users to manage their assets.",source:"@site/docs/guide/zkbnb-wallet/get-test-tokens.md",sourceDirName:"guide/zkbnb-wallet",slug:"/guide/zkbnb-wallet/get-test-tokens",permalink:"/zkBNB-docs/docs/guide/zkbnb-wallet/get-test-tokens",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/guide/zkbnb-wallet/get-test-tokens.md",tags:[],version:"current",frontMatter:{title:"Fund zkBNB Wallet"},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/zkBNB-docs/docs/guide/zkbnb-wallet/overview"},next:{title:"Overview",permalink:"/zkBNB-docs/docs/guide/zkbnb-marketplace/overview"}},l={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Steps to Fund your zkBNB",id:"steps-to-fund-your-zkbnb",level:2},{value:"Step#1: Creating a BNB Wallet and funding it with BNB Test Tokens",id:"step1-creating-a-bnb-wallet-and-funding-it-with-bnb-test-tokens",level:3},{value:"Step#2: Transfering Test BNB tokens onto zkBNB using the Bridge",id:"step2-transfering-test-bnb-tokens-onto-zkbnb-using-the-bridge",level:3},{value:"Step#3: Verify the transfer",id:"step3-verify-the-transfer",level:3},{value:"Congratulations \ud83c\udf89",id:"congratulations-",level:5}],k={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fund-zkbnb-wallet-with-test-bnb"},"Fund zkBNB Wallet with Test BNB"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://test.zkBNBchain.org/wallet"},"zkBNB Wallet")," provides seamless integration with BNB Smart Chain (Layer 1) and zkBNB (Layer 2). Furthermore, you can use the same wallet address for both zkBNB and the BSC chain, hence, making it more convenient for users to manage their assets."),(0,r.kt)("p",null,"As of now, there is no faucet available, however, you can get test BNB tokens from the ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bnbchain.org/faucet-smart"},"BSC Test Faucet")," into your BSC account and then bridge them into zkBNB using the zkBNB Wallet web application."),(0,r.kt)("p",null,"In this tutorial, we provide a step-by-step guide on how to use the zkBNB wallet to bridge your assets into zkBNB."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask Web Extension"))),(0,r.kt)("h2",{id:"steps-to-fund-your-zkbnb"},"Steps to Fund your zkBNB"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial is based on transferring BNB Tokens from BSC Testnet to zkBNB Testnet. However, the steps are same for the mainnet as well.")),(0,r.kt)("h3",{id:"step1-creating-a-bnb-wallet-and-funding-it-with-bnb-test-tokens"},"Step#1: Creating a BNB Wallet and funding it with BNB Test Tokens"),(0,r.kt)("p",null,"For this tutorial, we will be using Metamask Web Wallet. As a first step, follow ",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"this user guide")," to configure your Metamask Wallet with BSC Testnet and fund it with Test BNB tokens."),(0,r.kt)("h3",{id:"step2-transfering-test-bnb-tokens-onto-zkbnb-using-the-bridge"},"Step#2: Transfering Test BNB tokens onto zkBNB using the Bridge"),(0,r.kt)("p",null,"In order to officially use the zkBNB chain, we need to have some BNB test tokens in our zkBNB Wallet. After acquirign some test tokens in your BSC account, it is then time to transfer these into zkBNB Wallet. For this, we'll be bridging our test BNB tokens over to zkBNB using a Bridge that connects the zkBNB chain with the BNB Smart Chain."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the zkBNB Wallet homepage, click on ",(0,r.kt)("em",{parentName:"li"},"Connect Wallet")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zkbnb-wallet-welcome",src:n(82694).Z,width:"1331",height:"642"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Select Metamask from the popup.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zkbnb-wallet-select",src:n(98539).Z,width:"407",height:"347"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Bridge Assets to L2")," to deposit BNB tokens on the zkBNB. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"walet-asset-page",src:n(43770).Z,width:"475",height:"426"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the type of token you\u2019d like to transfer. You may transfer any BEP20/721/1155 token. For this tutorial, we will select the BNB token. Also, specify the amount of tokens to transfer. Remember, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"0.00015 BNB"))," is the minimum amount allowed to bridge onto zkBNB from BSC.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zkbnb-bridge-token-amount",src:n(92803).Z,width:"493",height:"645"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("em",{parentName:"p"},"Deposit")," button after confirming the amount to transfer from BSC to zkBNB.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you click the Deposit button, Metamask notification will pop up asking for confimation to proceed the transaction. Click on ",(0,r.kt)("em",{parentName:"p"},"Confirm"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wallet-confirm-transfer",src:n(6559).Z,width:"330",height:"605"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Upon successful transfer, you will see a pop after transaction confirmation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"success-transfer",src:n(71055).Z,width:"406",height:"366"})),(0,r.kt)("h3",{id:"step3-verify-the-transfer"},"Step#3: Verify the transfer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You may now check the status of your transaction by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Activities")," tab on the left side of the zkBNB Wallet homepage.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the activities, you will be able to see the transaction on zkBNB's block explorer ",(0,r.kt)("a",{parentName:"p",href:"https://explorer-test.zkbnbchain.org/"},(0,r.kt)("em",{parentName:"a"},"ZKTRACE")),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"activities-zkbnb",src:n(24335).Z,width:"1349",height:"329"})),(0,r.kt)("h5",{id:"congratulations-"},"Congratulations \ud83c\udf89"),(0,r.kt)("p",null,"You have successfully completed transfer of BNB Tokens from BNB Smart Chain to zkBNB Transfer. You may now take full advantage of the zkBNB Marketplace, while spending less in fee's on any zkBNB dApp on BNB Smart Chain. All transactions will be up to >=95% cheaper, and >95% faster."))}p.isMDXComponent=!0},24335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/activities-zkbnb-c4bf2abee83ea648e064a1647f75380f.PNG"},71055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/success-transfer-afed53b868ab0c0b9966beca5d1627c4.PNG"},43770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wallet-asset-page-e4b96bdf31718e200fbfa1e797eb3595.PNG"},6559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wallet-confirm-transfer-19a5cf87bf337646a2f5b5ea75ac5f2d.PNG"},92803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zkbnb-bridge-token-amount-7e452442ec1b7212ddfb5e3224f28b8f.PNG"},98539:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zkbnb-wallet-select-2ae315a970b1a5db993f91497b6e5920.png"},82694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zkbnb-wallet-welcome-a619682c21a0f145bda58f3a57e396c4.PNG"}}]);