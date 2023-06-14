"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[6981],{74803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=(n(75190),n(47507)),d=n(24310),p=n(63303),l=(n(75035),n(85162));const c={id:"send-tx",title:"Send raw transaction",description:"Send raw transaction",sidebar_label:"Send raw transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction"],operationId:"SendTx",requestBody:{description:"The transaction request body to send the transaction to the system.",content:{"application/json":{schema:{title:"ReqSendTx",required:["tx_info","tx_type"],type:"object",properties:{tx_type:{type:"integer",format:"int32"},tx_info:{type:"string"}}}}},required:!0},responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"TxHash",required:["tx_hash"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},tx_hash:{type:"string"}}}}}}},"x-codegen-request-body-name":"body",description:"Send raw transaction",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/api/v1/sendTx",servers:[{url:"https://testapi.zkbnbchain.org/"}],jsonRequestBodyExample:{tx_type:0,tx_info:"string"},info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Send raw transaction",description:{type:"text/plain"},url:{path:["api","v1","sendTx"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},m=void 0,u={unversionedId:"zkbnb/send-tx",id:"zkbnb/send-tx",title:"Send raw transaction",description:"Send raw transaction",source:"@site/docs/zkbnb/send-tx.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/send-tx",permalink:"/zkBNB-docs/docs/zkbnb/send-tx",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"send-tx",title:"Send raw transaction",description:"Send raw transaction",sidebar_label:"Send raw transaction",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction"],operationId:"SendTx",requestBody:{description:"The transaction request body to send the transaction to the system.",content:{"application/json":{schema:{title:"ReqSendTx",required:["tx_info","tx_type"],type:"object",properties:{tx_type:{type:"integer",format:"int32"},tx_info:{type:"string"}}}}},required:!0},responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"TxHash",required:["tx_hash"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},tx_hash:{type:"string"}}}}}}},"x-codegen-request-body-name":"body",description:"Send raw transaction",extensions:[{key:"x-codegen-request-body-name",value:"body"}],method:"post",path:"/api/v1/sendTx",servers:[{url:"https://testapi.zkbnbchain.org/"}],jsonRequestBodyExample:{tx_type:0,tx_info:"string"},info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Send raw transaction",description:{type:"text/plain"},url:{path:["api","v1","sendTx"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get pending transactions",permalink:"/zkBNB-docs/docs/zkbnb/get-pending-txs"},next:{title:"Get transaction by hash",permalink:"/zkBNB-docs/docs/zkbnb/get-tx"}},b={},y=[{value:"Send raw transaction",id:"send-raw-transaction",level:2}],h={toc:y};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"send-raw-transaction"},"Send raw transaction"),(0,s.kt)("p",null,"Send raw transaction"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"The transaction request body to send the transaction to the system."))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"tx_type",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"tx_info",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"tx_hash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "tx_hash": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);