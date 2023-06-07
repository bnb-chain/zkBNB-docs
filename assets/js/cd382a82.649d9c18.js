"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[5809],{95837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),c=a(75190),r=a(47507),l=a(24310),p=a(63303),m=(a(75035),a(85162));const d={id:"get-accounts",title:"Get accounts",description:"Get accounts",sidebar_label:"Get accounts",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account"],operationId:"GetAccounts",parameters:[{name:"offset",in:"query",description:"The query offset to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Accounts",required:["accounts","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},accounts:{type:"array",items:{title:"SimpleAccount",required:["index","l1_address","pk"],type:"object",properties:{index:{type:"integer",format:"int64"},l1_address:{type:"string"},pk:{type:"string"}}}}}}}}}},description:"Get accounts",method:"get",path:"/api/v1/accounts",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get accounts",description:{type:"text/plain"},url:{path:["api","v1","accounts"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the account list data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the account list data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},u=void 0,y={unversionedId:"zkbnb/get-accounts",id:"zkbnb/get-accounts",title:"Get accounts",description:"Get accounts",source:"@site/docs/zkbnb/get-accounts.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/get-accounts",permalink:"/zkBNB-docs/docs/zkbnb/get-accounts",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-accounts",title:"Get accounts",description:"Get accounts",sidebar_label:"Get accounts",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account"],operationId:"GetAccounts",parameters:[{name:"offset",in:"query",description:"The query offset to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Accounts",required:["accounts","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},accounts:{type:"array",items:{title:"SimpleAccount",required:["index","l1_address","pk"],type:"object",properties:{index:{type:"integer",format:"int64"},l1_address:{type:"string"},pk:{type:"string"}}}}}}}}}},description:"Get accounts",method:"get",path:"/api/v1/accounts",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get accounts",description:{type:"text/plain"},url:{path:["api","v1","accounts"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the account list data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the account list data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get account by account's l1_address, index",permalink:"/zkBNB-docs/docs/zkbnb/get-account"},next:{title:"Get pending transactions of a specific account",permalink:"/zkBNB-docs/docs/zkbnb/get-account-pending-txs"}},f={},g=[{value:"Get accounts",id:"get-accounts",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-accounts"},"Get accounts"),(0,s.kt)("p",null,"Get accounts"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"offset",in:"query",description:"The query offset to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"}),(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The query limit size to get some specific range of the account list data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"total",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"accounts"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"l1_address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"pk",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "total": 0,\n  "accounts": [\n    {\n      "index": 0,\n      "l1_address": "string",\n      "pk": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);