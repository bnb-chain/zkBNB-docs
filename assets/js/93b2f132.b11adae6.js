"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[2336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,k=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Guide"},i="\ud83d\udc68\u200d\ud83d\udcbb Getting Started",l={unversionedId:"guide/introduction/getting-started",id:"guide/introduction/getting-started",title:"Guide",description:"The zkBNB is an infrastructure for developers that helps them to build large-scale BSC-based apps with higher throughput and much lower or even zero transaction fees.",source:"@site/docs/guide/introduction/getting-started.md",sourceDirName:"guide/introduction",slug:"/guide/introduction/getting-started",permalink:"/zkBNB-docs/docs/guide/introduction/getting-started",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/guide/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Guide"},sidebar:"guideSidebar",next:{title:"What is zkBNB?",permalink:"/zkBNB-docs/docs/guide/introduction/overview"}},s={},u=[{value:"\ud83d\udcd4 Learn about zkBNB",id:"-learn-about-zkbnb",level:2},{value:"\ud83d\udc53 Explore zkBNB",id:"-explore-zkbnb",level:2},{value:"\ud83d\udc68\u200d\ud83d\udd27 Building Dapps on zkBNB",id:"-building-dapps-on-zkbnb",level:2},{value:"\ud83d\ude4b\u200d\u2640\ufe0f Help &amp; Support",id:"\ufe0f-help--support",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-getting-started"},"\ud83d\udc68\u200d\ud83d\udcbb Getting Started"),(0,o.kt)("p",null,"The zkBNB is an infrastructure for developers that helps them to build large-scale BSC-based apps with higher throughput and much lower or even zero transaction fees."),(0,o.kt)("p",null,'zkBNB is built on zk-Rollup architecture. zkBNB bundles (or "roll-up") hundreds of transactions off-chain and generates cryptographic proof. These proofs can come in the form of SNARKs (succinct non-interactive argument of knowledge) which can prove the validity of every single transaction in the Rollup Block.'),(0,o.kt)("p",null,"zkBNB focuses on straightforward token operations and built-in marketplaces for Gaming and Social use cases. It serves as a scalability solution for the BNB Smart Chain by bundling multiple transactions into a single transaction, reducing costs for on-chain transactions. The Zero Knowledge proof system used in zkBNB ensures a much faster finality time of the L2 transactions, which helps improve the user experience. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"banner",src:n(32437).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"-learn-about-zkbnb"},"\ud83d\udcd4 Learn about zkBNB"),(0,o.kt)("p",null,"Dive into what is zkBNB and start the journey with Greenfield."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkBNB-docs/docs/guide/introduction/overview"},"An overview about zkBNB ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkBNB-docs/docs/guide/tutorials/fund-zkbnb-wallet"},"Get Started with detailed tutorials"))),(0,o.kt)("h2",{id:"-explore-zkbnb"},"\ud83d\udc53 Explore zkBNB"),(0,o.kt)("p",null,"Get familiar with the zkBNB and explore its main modules."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkBNB-docs/docs/guide/core-concepts/overview"},"Explore core concepts of zkBNB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zkBNB-docs/docs/guide/storage/storage-layout"},"An overview about Storage Layout"))),(0,o.kt)("h2",{id:"-building-dapps-on-zkbnb"},"\ud83d\udc68\u200d\ud83d\udd27 Building Dapps on zkBNB"),(0,o.kt)("p",null,"Start building dapps to create value based on the data assets and their related economy."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fund your zkBNB Wallet (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Coming Soon")),"\u23f0)"),(0,o.kt)("li",{parentName:"ul"},"Build a dapp with zkBNB API (",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Coming Soon")),"\u23f0)")),(0,o.kt)("h2",{id:"\ufe0f-help--support"},"\ud83d\ude4b\u200d\u2640\ufe0f Help & Support"),(0,o.kt)("p",null,"Check out the zkBNB Developer Discord for technical support. (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"TBA"))," \ud83d\udce2)"))}p.isMDXComponent=!0},32437:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zkBNB-banner-5d13608104d26b43ca47173ace811abe.jpg"}}]);