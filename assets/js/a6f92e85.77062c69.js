"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[5603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Platform FAQs"},i=void 0,s={unversionedId:"faqs/platform",id:"faqs/platform",title:"Platform FAQs",description:"What is zkBNB?",source:"@site/docs/faqs/platform.md",sourceDirName:"faqs",slug:"/faqs/platform",permalink:"/zkBNB-docs/docs/faqs/platform",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/faqs/platform.md",tags:[],version:"current",frontMatter:{title:"Platform FAQs"},sidebar:"faqSidebar",previous:{title:"FAQs",permalink:"/zkBNB-docs/docs/faqs/zkbnb-faqs"},next:{title:"Tokenomics FAQs",permalink:"/zkBNB-docs/docs/faqs/tokenomics"}},l={},p=[{value:"What is zkBNB?",id:"what-is-zkbnb",level:2},{value:"What are Zero Knowledge (zk) Rollups?",id:"what-are-zero-knowledge-zk-rollups",level:2},{value:"What is the connection between zkBNB and BNB Smart Chain?",id:"what-is-the-connection-between-zkbnb-and-bnb-smart-chain",level:2},{value:"What is the TPS of zkBNB?",id:"what-is-the-tps-of-zkbnb",level:2},{value:"What is the difference between zkBNB and opBNB?",id:"what-is-the-difference-between-zkbnb-and-opbnb",level:2},{value:"What kind of security does zkBNB provide?",id:"what-kind-of-security-does-zkbnb-provide",level:2},{value:"Does zkBNB support EVM?",id:"does-zkbnb-support-evm",level:2},{value:"What advantages does zkBNB have over BNB Smart Chain?",id:"what-advantages-does-zkbnb-have-over-bnb-smart-chain",level:2},{value:"What advantages does zkBNB have over the optimistic rollup services?",id:"what-advantages-does-zkbnb-have-over-the-optimistic-rollup-services",level:2},{value:"What advantages does zkBNB have over other types of zero knowledge rollup services, such as STARK?",id:"what-advantages-does-zkbnb-have-over-other-types-of-zero-knowledge-rollup-services-such-as-stark",level:2},{value:"How expensive will zkBNB be at launch?",id:"how-expensive-will-zkbnb-be-at-launch",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-zkbnb"},"What is zkBNB?"),(0,r.kt)("p",null,"zkBNB is a zero-knowledge scalability solution, or L2, which focuses on straightforward token operations and built-in marketplaces for Gaming and Social use cases. It serves as a scalability solution for the BNB Smart Chain by bundling multiple transactions into a single transaction, reducing costs for on-chain transactions. The Zero Knowledge proof system used in zkBNB ensures a much faster finality time of the L2 transactions, that helps improve the user experience. "),(0,r.kt)("h2",{id:"what-are-zero-knowledge-zk-rollups"},"What are Zero Knowledge (zk) Rollups?"),(0,r.kt)("p",null,"Zero Knowledge Rollups are Layer 2 scheme that moves computation off-chain. It provides L1 security by rolling up multiple transactions into a single one and submitting validity proof back to L1. zk Rollups only require valid proof of the final state, makingthem more private and storage-efficient comparing to storing all transaction data on L1."),(0,r.kt)("h2",{id:"what-is-the-connection-between-zkbnb-and-bnb-smart-chain"},"What is the connection between zkBNB and BNB Smart Chain?"),(0,r.kt)("p",null,"zkBNB serves as a scalability solution for the BNB Smart Chain. It bundles multiple transactions into a single transaction and posts it on the BSC, thereby reducing the cost of on-chain transactions. Once the transactions are rolled up and posted on the BSC block, only the transaction data is stored on the BSC, which can be verified using cryptographic primitives."),(0,r.kt)("h2",{id:"what-is-the-tps-of-zkbnb"},"What is the TPS of zkBNB?"),(0,r.kt)("p",null,"TPS is around 3000"),(0,r.kt)("h2",{id:"what-is-the-difference-between-zkbnb-and-opbnb"},"What is the difference between zkBNB and opBNB?"),(0,r.kt)("p",null,"zkBNB is a zero-knowledge proof layer 2 chain that targets to provide the NFT and Token Transactions for gaming and high frequent derivatives. It is not EVM-comptible. "),(0,r.kt)("p",null,"opBNB is a EVM-compatible layer 2 chain that targets to provide more flexibility to applications that want to be a open platform & ecosystem."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metrics"),(0,r.kt)("th",{parentName:"tr",align:"left"},"zkBNB"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Optimistic Rollup"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"June, 2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"June/July,2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas Token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EVM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TPS*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5K (Target in 2023)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5-10K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas Fee/Gasless"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.006$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"<0.005$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Withdraw/Finality"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minutes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Security"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure/Elegant Exit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure/Elegant Exit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Validators"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TBD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recommendation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"More suitable for NFT and Token transactions, e.g., Gaming, and high frequent derivatives (DyDx or LoopRing). More suitable for Applications with massive users but focused and dedicated functions that can be translated to efficient ZKP circuits. Great chain for Web2 devs since they only have to use SDKs. zkBNB is very suitable for games that want smooth user experience and that do not require smart contracts to be deployed in their ecosystem."),(0,r.kt)("td",{parentName:"tr",align:"left"},"More suitable for Applications that want to be an open platform & ecosystem but still enjoy the similar security level as L1 and an easy way to exit running. Game studios & engines might prefer Optimistic rollup over zkBNB because it allows them to create an ecosystem of developers, smart contracts and project to build on top of their chain. This is not the case with zkBNB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Examples"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hooked\uff0cTiny World, Gameta, MOBOX ",(0,r.kt)("br",null)," High frequent trading: Apolox"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Game Studio, Game Engine \uff08Cocos, Unity\uff09Era7")))),(0,r.kt)("h2",{id:"what-kind-of-security-does-zkbnb-provide"},"What kind of security does zkBNB provide?"),(0,r.kt)("p",null,"zkBNB shares the same level of security as BNB Smart Chain, guaranteed by the Succinct Non-interactive Argument of Knowledge (SNARK) cryptography proofs. For all the built-in operations in zkBNB, designated atomic cryptographic circuits were designed to support super-fast finality and unparalleled security."),(0,r.kt)("h2",{id:"does-zkbnb-support-evm"},"Does zkBNB support EVM?"),(0,r.kt)("p",null,"zkEVM is a virtual machine that simulates an environment like Ethereum, allowing Ethereum smart contracts to be deployed on a zkRollup. Generating zero-knowledge proofs is a resource-intensive process that requires specialized hardware and significant investment in time, money, and effort. This significantly increases the costs, which eventually are distributed across the rolled-up transactions. "),(0,r.kt)("p",null,"On the contrary, zkBNB was designed to support mass adoption and the already thriving BNB Chain ecosystem. As such, instead of focusing on general-purpose EVM compatibility, zkBNB specifically focuses on the most used operation by the dApps - supported by any programming language. These include token transfers, and a built-in NFT marketplace."),(0,r.kt)("p",null,"By providing web-based API services, developers can build a new application or easily extend the existing codebase using their favorite programming language and skillset."),(0,r.kt)("h2",{id:"what-advantages-does-zkbnb-have-over-bnb-smart-chain"},"What advantages does zkBNB have over BNB Smart Chain?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metrics"),(0,r.kt)("th",{parentName:"tr",align:"left"},"BSC"),(0,r.kt)("th",{parentName:"tr",align:"left"},"zkBNB"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ready"),(0,r.kt)("td",{parentName:"tr",align:"left"},"June, 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas Token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BNB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"BNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EVM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TPS*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.2K (Target 5K in 2023)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5K (Target in 2023)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas Fee/Gasless"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.03$"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.006$")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Withdraw/Finality"),(0,r.kt)("td",{parentName:"tr",align:"left"},"33 seconds (6 secs after fast finality)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Security"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure/Elegant Exit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Validators"),(0,r.kt)("td",{parentName:"tr",align:"left"},"26 (21 cabinet, 5 candidates (20 soon))"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recommendation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DeFi Hub and Lego ",(0,r.kt)("br",null)," dApp with <100K DAU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"More suitable for NFT and Token transactions, e.g., Gaming, and high frequent derivatives (DyDx or LoopRing). ",(0,r.kt)("br",null),"More suitable for Applications with massive users but focused and dedicated functions that can be translated to efficient ZKP circuits. ",(0,r.kt)("br",null)," Great chain for Web2 devs since they only have to use SDKs. ",(0,r.kt)("br",null)," zkBNB is very suitable for games that want smooth user experience and that do not require smart contracts to be deployed in their ecosystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Examples"),(0,r.kt)("td",{parentName:"tr",align:"left"},"New DeFi Projects \uff08Low/Medium frequent trading\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hooked\uff0cTiny World, Gameta, MOBOX ",(0,r.kt)("br",null)," High frequent trading\uff1a Apolox")))),(0,r.kt)("p",null,"zkBNB and BSC serve different purposes and augment each other rather than competitors. On the one hand, BSC is an EVM-compatible programmable platform to support general-purpose blockchain decentralized applications. As such, the development team has to possess the skill set of blockchain development using Solidity or other EVM languages. On the other hand, zkBNB provides a set of web-based services, which can be called by any programming language."),(0,r.kt)("p",null,"Also, being a general-purpose framework, developers can write any possible logic and deploy it on BSC. While it allows any possible use case, the generality does impair performance. On the contrary, a handful of the most used use cases were atomically programmed onto zkBNB cryptographic circuits to enable ultra-fast performance."),(0,r.kt)("h2",{id:"what-advantages-does-zkbnb-have-over-the-optimistic-rollup-services"},"What advantages does zkBNB have over the optimistic rollup services?"),(0,r.kt)("p",null,"Optimistic rollups and zero-knowledge rollups are both second-layer scaling solutions for blockchain networks that aim to increase the transaction throughput of the base layer. "),(0,r.kt)("p",null,"Optimistic rollups use fraud proofs to ensure the correctness of the transactions being processed on the rollup layer. This means that the rollup layer can process transactions faster than the base layer, but the base layer still needs to validate the transactions, which can be time-consuming. Examples of Ethereum L2s that leverage optimistic rollups include Arbitrum, Optimism, and Boba Network."),(0,r.kt)("p",null,"On the other hand, zero-knowledge rollups use zero-knowledge proofs to validate the transactions on the rollup layer without revealing any details about the transactions to the base layer. This allows the rollup layer to process transactions faster without requiring the base layer to validate them, which can lead to an even greater increase in transaction throughput. "),(0,r.kt)("p",null,"As such, zkBNB, being a zero-knowledge-based rollup, provides much greater scalability, lower costs, and privacy for users since the details of their transactions are not revealed to the base layer."),(0,r.kt)("h2",{id:"what-advantages-does-zkbnb-have-over-other-types-of-zero-knowledge-rollup-services-such-as-stark"},"What advantages does zkBNB have over other types of zero knowledge rollup services, such as STARK?"),(0,r.kt)("p",null,"STARKs (Scalable Transparent Arguments of Knowledge) and SNARKs (Succinct Non-Interactive Arguments of Knowledge) are both types of zero-knowledge proof systems that can be used to validate transactions on a blockchain without revealing any information about the transactions themselves. Examples of products that leverage STARK rollups include Starknet, Dydx, and ImmutableX."),(0,r.kt)("p",null,"One key difference between STARKs and SNARKs is the size of the generated cryptographic proofs. SNARKs are known for generating very small proof sizes, which makes them well-suited for use in blockchain applications where space is limited, and speed is of paramount importance. Also, the non-interactive nature of SNARKs can make them faster to generate and verify than other types of zero-knowledge proof systems. "),(0,r.kt)("p",null,"STARKs, on the other hand, generally produce much larger proof sizes and, as such work much slower. However, STARKs are considered transparent proofs and don\u2019t require a common reference string (CRS) and a setup process."),(0,r.kt)("p",null,"To account for the CRS setup process, zkBNB uses a well-proven multi-party computation (MPC) - a process in which multiple players donate their own randomness, which they destroy afterward. Being widely studied and well-understood by the research community makes SNARK a well-trusted zero-knowledge proof system.\n."),(0,r.kt)("h2",{id:"how-expensive-will-zkbnb-be-at-launch"},"How expensive will zkBNB be at launch?"),(0,r.kt)("p",null,"The transaction price in the rollup largely varies whether the rollup can fill the whole block on the L1, to which it rolls up the transactions. As such, the price will be determined by a number of variables related to the usage of the zkBNB services. It\u2019s difficult to predict before launch. However, a few design elements of the network help support zkBNB as a cheap, scalable alternative to the BNB Smart Chain."),(0,r.kt)("p",null,"The design prefers simplicity's first principle over other considerations. Simple solutions are not only easy to implement, run, maintain, and extend but also friendly to software performance, which is the main goal of the design. For example, generic computing-intensive zk proof, like what ZkSync adopts, is ruled out according to this principle. "),(0,r.kt)("p",null,"zkBNB targets beyond the existing BNB Chain applications but also traditional Web2 users and developers. The system design tries to be as compatible as possible with popular Web2 and Web3 standards. "),(0,r.kt)("admonition",{title:"Don't see your question?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/"},"BNB forum"),", so you can get the answers you need and make us aware of new FAQ items.")))}c.isMDXComponent=!0}}]);