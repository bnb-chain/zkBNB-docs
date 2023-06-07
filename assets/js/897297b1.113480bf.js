"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[9460],{20356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>u,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),o=a(94891),n=a(75190),l=a(47507),c=a(24310),m=a(63303),p=(a(75035),a(85162));const d={id:"get-rollbacks",title:"Get rollbacks",description:"Get rollbacks",sidebar_label:"Get rollbacks",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Rollbacks"],operationId:"GetRollbacks",parameters:[{name:"from_block_height",in:"query",description:"The starting block height for performing the rollback operation.",required:!0,schema:{type:"integer",format:"int64"}},{name:"offset",in:"query",description:"The query offset to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Rollbacks",required:["rollbacks","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},rollbacks:{type:"array",items:{title:"Rollback",required:["created_at","from_block_height","from_tx_hash","id"],type:"object",properties:{from_block_height:{type:"integer",format:"int64"},from_tx_hash:{type:"string"},id:{type:"integer",format:"int32"},created_at:{type:"integer",format:"int64"}}}}}}}}}},description:"Get rollbacks",method:"get",path:"/api/v1/rollbacks",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get rollbacks",description:{type:"text/plain"},url:{path:["api","v1","rollbacks"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The starting block height for performing the rollback operation.",type:"text/plain"},key:"from_block_height",value:""},{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the pending transactions data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the pending transactions data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},b=void 0,h={unversionedId:"zkbnb/get-rollbacks",id:"zkbnb/get-rollbacks",title:"Get rollbacks",description:"Get rollbacks",source:"@site/docs/zkbnb/get-rollbacks.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/get-rollbacks",permalink:"/zkBNB-docs/docs/zkbnb/get-rollbacks",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-rollbacks",title:"Get rollbacks",description:"Get rollbacks",sidebar_label:"Get rollbacks",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Rollbacks"],operationId:"GetRollbacks",parameters:[{name:"from_block_height",in:"query",description:"The starting block height for performing the rollback operation.",required:!0,schema:{type:"integer",format:"int64"}},{name:"offset",in:"query",description:"The query offset to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Rollbacks",required:["rollbacks","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},rollbacks:{type:"array",items:{title:"Rollback",required:["created_at","from_block_height","from_tx_hash","id"],type:"object",properties:{from_block_height:{type:"integer",format:"int64"},from_tx_hash:{type:"string"},id:{type:"integer",format:"int32"},created_at:{type:"integer",format:"int64"}}}}}}}}}},description:"Get rollbacks",method:"get",path:"/api/v1/rollbacks",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get rollbacks",description:{type:"text/plain"},url:{path:["api","v1","rollbacks"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The starting block height for performing the rollback operation.",type:"text/plain"},key:"from_block_height",value:""},{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the pending transactions data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the pending transactions data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get merged transactions(including tx and pool_tx) of a specific account",permalink:"/zkBNB-docs/docs/zkbnb/get-merged-account-txs"}},k={},g=[{value:"Get rollbacks",id:"get-rollbacks",level:2}],f={toc:g};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-rollbacks"},"Get rollbacks"),(0,r.kt)("p",null,"Get rollbacks"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"from_block_height",in:"query",description:"The starting block height for performing the rollback operation.",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"offset",in:"query",description:"The query offset to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"}),(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The query limit size to get some specific range of the pending transactions data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"total",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"rollbacks"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(c.Z,{collapsible:!1,name:"from_block_height",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"from_tx_hash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"created_at",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "total": 0,\n  "rollbacks": [\n    {\n      "from_block_height": 0,\n      "from_tx_hash": "string",\n      "id": 0,\n      "created_at": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}u.isMDXComponent=!0}}]);