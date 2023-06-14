"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[8206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=l(n),u=s,b=k["".concat(c,".").concat(u)]||k[u]||d[u]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[k]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={title:"zkBNB Web SDK"},o="Quickstart",i={unversionedId:"sdks/zkbnb-web-sdk/quickstart",id:"sdks/zkbnb-web-sdk/quickstart",title:"zkBNB Web SDK",description:"zkBNB Web SDK provides API for interacting with zkBNB L2 component in the node environment.",source:"@site/docs/sdks/zkbnb-web-sdk/quickstart.md",sourceDirName:"sdks/zkbnb-web-sdk",slug:"/sdks/zkbnb-web-sdk/quickstart",permalink:"/zkBNB-docs/docs/sdks/zkbnb-web-sdk/quickstart",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/sdks/zkbnb-web-sdk/quickstart.md",tags:[],version:"current",frontMatter:{title:"zkBNB Web SDK"},sidebar:"sdkSidebar",previous:{title:"zkBNB TypeScript SDK",permalink:"/zkBNB-docs/docs/sdks/zkbnb-ts-sdk/quickstart"},next:{title:"zkBNB Reactjs Integration Example",permalink:"/zkBNB-docs/docs/sdks/tutorials/reactjs-integration-example/"}},c={},l=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Browser",id:"browser",level:3},{value:"ESM",id:"esm",level:3},{value:"Install",id:"install-1",level:4},{value:"Interfaces",id:"interfaces",level:2}],p={toc:l};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quickstart"},"Quickstart"),(0,s.kt)("p",null,"zkBNB Web SDK provides API for interacting with zkBNB L2 component in the node environment.\nThe SDK offers various L2 operations such as get account details, get gas fees etc.\nTo understand the entire scope of operations available, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/zkbnb-api"},"API Reference"),".\nIn addition, SDK comes with a crypto component for signing txs and sending signed txs to zkBNB L2."),(0,s.kt)("p",null,"This SDK does not provide methods to interact with zkBNB L1."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)("p",null,"Using jsDelivr CDN:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"><\/script>\n')),(0,s.kt)("p",null,"Using unpkg CDN:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"><\/script>\n')),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"browser"},"Browser"),(0,s.kt)("p",null,"Use directly in the browser via script tag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <script src="https://cdn.jsdelivr.net/npm/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"><\/script>\n</head>\n<body>\n  <script>\n    const client = new Zk.Client(\'https://testapi.zkbnbchain.org\');\n\n    (async () => {\n      const res = await client.getAccountInfoByAccountIndex(1);\n      console.log(res)\n    })()\n  <\/script>\n</body>\n</html>\n')),(0,s.kt)("h3",{id:"esm"},"ESM"),(0,s.kt)("p",null,"If you use module bundler such as ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),", ",(0,s.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"Rollup"),", etc:"),(0,s.kt)("h4",{id:"install-1"},"Install"),(0,s.kt)("p",null,"Using npm:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> npm install @bnb-chain/zkbnb-js-sdk\n")),(0,s.kt)("p",null,"Using yarn:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> yarn add @bnb-chain/zkbnb-js-sdk\n")),(0,s.kt)("p",null,"Using pnpm:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> pnpm add @bnb-chain/zkbnb-js-sdk\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Client } from '@bnb-chain/zkbnb-js-sdk';\n\nconst client = new Client('https://testapi.zkbnbchain.org');\n\n(async () => {\n  const res = await client.getAccountInfoByAccountIndex(1);\n  console.log(res)\n})()\n")),(0,s.kt)("h2",{id:"interfaces"},"Interfaces"),(0,s.kt)("p",null,"For More Documents, Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/zkBNB-docs/docs/sdks/zkbnb-js-sdk/quickstart"},"JS SDK")))}k.isMDXComponent=!0}}]);