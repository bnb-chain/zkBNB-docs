"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[7075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"zkBNB Architecture"},o="zkBNB Architecture",s={unversionedId:"guide/core-concepts/zkbnb-arch",id:"guide/core-concepts/zkbnb-arch",title:"zkBNB Architecture",description:"zkBNB is a zero-knowledge scalability solution, or L2, which focuses on straightforward token operations and built-in marketplaces for Gaming and Social use cases. It serves as a scalability solution for the BNB Smart Chain by bundling multiple transactions into a single transaction, reducing costs for on-chain transactions. The Zero Knowledge proof system used in zkBNB ensures a much faster finality time of the L2 transactions, that helps improve the user experience. zkBNB is essentially built on the zk-Rollup architecture.",source:"@site/docs/guide/core-concepts/zkbnb-arch.md",sourceDirName:"guide/core-concepts",slug:"/guide/core-concepts/zkbnb-arch",permalink:"/zkBNB-docs/docs/guide/core-concepts/zkbnb-arch",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/docs/guide/core-concepts/zkbnb-arch.md",tags:[],version:"current",frontMatter:{title:"zkBNB Architecture"},sidebar:"guideSidebar",previous:{title:"zkBNB Overview",permalink:"/zkBNB-docs/docs/guide/core-concepts/overview"},next:{title:"zkBNB Protocol",permalink:"/zkBNB-docs/docs/guide/core-concepts/protocol"}},c={},l=[{value:"zk-Rollup Architecture",id:"zk-rollup-architecture",level:2},{value:"Maximum throughput",id:"maximum-throughput",level:2},{value:"Data Availability",id:"data-availability",level:2},{value:"Transaction Finality",id:"transaction-finality",level:2},{value:"Instant confirmation ZkBS",id:"instant-confirmation-zkbs",level:2},{value:"Censorship resistance",id:"censorship-resistance",level:2}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zkbnb-architecture"},"zkBNB Architecture"),(0,a.kt)("p",null,"zkBNB is a zero-knowledge scalability solution, or L2, which focuses on straightforward token operations and built-in marketplaces for Gaming and Social use cases. It serves as a scalability solution for the BNB Smart Chain by bundling multiple transactions into a single transaction, reducing costs for on-chain transactions. The Zero Knowledge proof system used in zkBNB ensures a much faster finality time of the L2 transactions, that helps improve the user experience. zkBNB is essentially built on the zk-Rollup architecture."),(0,a.kt)("h2",{id:"zk-rollup-architecture"},"zk-Rollup Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Framework",src:n(95865).Z,width:"1256",height:"623"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"committer"),". Committer executes transactions and produce consecutive blocks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"monitor"),". Monitor tracks events on BSC, and translates them into ",(0,a.kt)("strong",{parentName:"li"},"transactions")," on zkBNB."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"witness"),". Witness re-executes the transactions within the block and generates witness materials."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prover"),". Prover generates cryptographic proof based on the witness materials."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sender"),". The sender rollups the compressed l2 blocks to L1, and submit proof to verify it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"api server"),". The api server is the access endpoints for most users, it provides rich data, including\ndigital assets, blocks, transactions, gas fees."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"recovery"),". A tool to recover the sparse merkle tree in kv-rocks based on the state world in postgresql.")),(0,a.kt)("h2",{id:"maximum-throughput"},"Maximum throughput"),(0,a.kt)("p",null,"Pending benchmark..."),(0,a.kt)("h2",{id:"data-availability"},"Data Availability"),(0,a.kt)("p",null,"zkBNB publish state data for every transaction processed off-chain to BSC. With this data, it is possible for\nindividuals or businesses to reproduce the rollup\u2019s state and validate the chain themselves. BSC makes this data\navailable to all participants of the network as calldata."),(0,a.kt)("p",null,"zkBNB don't need to publish much transaction data on-chain because validity proofs already verify the authenticity\nof state transitions. Nevertheless, storing data on-chain is still important because it allows permissionless,\nindependent verification of the L2 chain's state which in turn allows anyone to submit batches of transactions,\npreventing malicious committer from censoring or freezing the chain."),(0,a.kt)("p",null,"zkBNB will provide a default client to replay all state on Layer2 based on these call data."),(0,a.kt)("h2",{id:"transaction-finality"},"Transaction Finality"),(0,a.kt)("p",null,"BSC acts as a settlement layer for zkBNB: L2 transactions are finalized only if the L1 contract accepts the validity\nproof and execute the txs. This eliminates the risk of malicious operators corrupting the chain\n(e.g., stealing rollup funds) since every transaction must be approved on Mainnet. Also, BSC guarantees that user\noperations cannot be reversed once finalized on L1."),(0,a.kt)("p",null,"zkBNB provides relative fast finality speed within 10 minutes."),(0,a.kt)("h2",{id:"instant-confirmation-zkbs"},"Instant confirmation ZkBS"),(0,a.kt)("p",null,"Even though time to finality is about 10 minutes, it does not affect the usability of the network. The state transition\nhappens immediately once the block been proposed on zkBNB. The rollup operations are totally transparent to most users,\nusers can make further transfers without waiting."),(0,a.kt)("h2",{id:"censorship-resistance"},"Censorship resistance"),(0,a.kt)("p",null,"Committer will execute transactions, produce batches. While this ensures efficiency, it increases the risk of censorship\n: malicious zk-rollup committer can censor users by refusing to include their transactions in batches."),(0,a.kt)("p",null,"As a security measure, zkBNB allow users to submit transactions directly to the rollup contract on Mainnet if\nthey think they are being censored by the operator. This allows users to force an exit from the zk-rollup to BSC without\nhaving to rely on the commiter's permission."))}p.isMDXComponent=!0},95865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Frame_work-1a3d215981b65edc041142ce917433d3.png"}}]);