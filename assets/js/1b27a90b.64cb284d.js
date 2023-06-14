"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[2816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),i=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),k=a,g=p["".concat(c,".").concat(k)]||p[k]||u[k]||r;return n?s.createElement(g,o(o({ref:t},d),{},{components:n})):s.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<r;i++)o[i]=n[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var s=n(87462),a=(n(67294),n(3905));const r={title:"zkBNB Javascript SDK"},o="Quickstart",l={unversionedId:"sdks/zkbnb-js-sdk/quickstart",id:"sdks/zkbnb-js-sdk/quickstart",title:"zkBNB Javascript SDK",description:"zkBNB JavaScript SDK provides API for interacting with zkBNB L2 component in the node environment.",source:"@site/docs/sdks/zkbnb-js-sdk/quickstart.md",sourceDirName:"sdks/zkbnb-js-sdk",slug:"/sdks/zkbnb-js-sdk/quickstart",permalink:"/zkBNB-docs/docs/sdks/zkbnb-js-sdk/quickstart",draft:!1,editUrl:"https://github.com/bnb-chain/zkBNB-docs/blob/master/docs/sdks/zkbnb-js-sdk/quickstart.md",tags:[],version:"current",frontMatter:{title:"zkBNB Javascript SDK"},sidebar:"sdkSidebar",previous:{title:"zkBNB Go SDK",permalink:"/zkBNB-docs/docs/sdks/zkbnb-go-sdk/quickstart"},next:{title:"zkBNB TypeScript SDK",permalink:"/zkBNB-docs/docs/sdks/zkbnb-ts-sdk/quickstart"}},c={},i=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Init zkClient and zkCrypto",id:"init-zkclient-and-zkcrypto",level:3},{value:"Simple queries",id:"simple-queries",level:3},{value:"Sign and send txs to zkBNB L2",id:"sign-and-send-txs-to-zkbnb-l2",level:3},{value:"Transfer demo",id:"transfer-demo",level:4},{value:"System",id:"system",level:3},{value:"Get zkbnb general info",id:"get-zkbnb-general-info",level:4},{value:"Get gas fee asset",id:"get-gas-fee-asset",level:4},{value:"Get gas fee",id:"get-gas-fee",level:4},{value:"Get gas account",id:"get-gas-account",level:4},{value:"Asset",id:"asset",level:3},{value:"Get asset by id",id:"get-asset-by-id",level:4},{value:"Get assets",id:"get-assets",level:4},{value:"Get asset by symbol",id:"get-asset-by-symbol",level:4},{value:"Get assets",id:"get-assets-1",level:4},{value:"Account",id:"account",level:3},{value:"Get accounts",id:"get-accounts",level:4},{value:"Get account by l1 address",id:"get-account-by-l1-address",level:4},{value:"Get account by account&#39;s index",id:"get-account-by-accounts-index",level:4},{value:"Get next nonce",id:"get-next-nonce",level:4},{value:"Get maxOfferId",id:"get-maxofferid",level:4},{value:"Get nfts by account index",id:"get-nfts-by-account-index",level:4},{value:"Block",id:"block",level:3},{value:"GET current Height",id:"get-current-height",level:4},{value:"Get block by its commitment",id:"get-block-by-its-commitment",level:4},{value:"Get block by its height",id:"get-block-by-its-height",level:4},{value:"Get blocks",id:"get-blocks",level:4},{value:"Transaction",id:"transaction",level:3},{value:"Get transactions in a block",id:"get-transactions-in-a-block",level:4},{value:"Get tx by hash",id:"get-tx-by-hash",level:4},{value:"Send raw transaction",id:"send-raw-transaction",level:4},{value:"Get Tx by hash",id:"get-tx-by-hash-1",level:4},{value:"Get txs by l1 address",id:"get-txs-by-l1-address",level:4},{value:"Get txs by account index",id:"get-txs-by-account-index",level:4},{value:"Get txs",id:"get-txs",level:4},{value:"zkBNB L1 Client",id:"zkbnb-l1-client",level:2},{value:"Install",id:"install-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Init",id:"init",level:4},{value:"Sign message",id:"sign-message",level:4},{value:"Get Current User Address",id:"get-current-user-address",level:4},{value:"Get Asset Address By Asset Id",id:"get-asset-address-by-asset-id",level:4},{value:"Get Asset Id By Asset Address",id:"get-asset-id-by-asset-address",level:4},{value:"Add Asset",id:"add-asset",level:4},{value:"Whether The BEP20 Token Is Approved For Deposit",id:"whether-the-bep20-token-is-approved-for-deposit",level:4},{value:"Approve BEP20 Token For Deposit",id:"approve-bep20-token-for-deposit",level:4},{value:"Deposit BNB",id:"deposit-bnb",level:4},{value:"Deposit BEP20",id:"deposit-bep20",level:4},{value:"Approve NFT For Deposit",id:"approve-nft-for-deposit",level:4},{value:"Deposit NFT",id:"deposit-nft",level:4},{value:"FullExit",id:"fullexit",level:4},{value:"FullExit Nft",id:"fullexit-nft",level:4},{value:"Register A Dedicated NFT Contract For A Collection",id:"register-a-dedicated-nft-contract-for-a-collection",level:4},{value:"Get NFT Address By Collection&#39;s Creator Address And Collection ID",id:"get-nft-address-by-collections-creator-address-and-collection-id",level:4},{value:"Get Nft TokenURI",id:"get-nft-tokenuri",level:4},{value:"Get Pending Balance",id:"get-pending-balance",level:4}],d={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"zkBNB JavaScript SDK provides API for interacting with zkBNB L2 component in the node environment.\nThe SDK offers various L2 operations such as get account details, get gas fees etc.\nTo understand the entire scope of operations available, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/zkbnb-api"},"API Reference"),".\nIn addition, SDK comes with a crypto component for signing txs and sending signed txs to zkBNB L2."),(0,a.kt)("p",null,"This SDK does not provide methods to interact with zkBNB L1."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm install @bnb-chain/zkbnb-js-sdk\n")),(0,a.kt)("p",null,"Using yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> yarn add @bnb-chain/zkbnb-js-sdk\n")),(0,a.kt)("p",null,"Using pnpm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> pnpm add @bnb-chain/zkbnb-js-sdk\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"init-zkclient-and-zkcrypto"},"Init zkClient and zkCrypto"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { Client } = require('@bnb-chain/zkbnb-js-sdk');\n    const { ZkCrypto } = require('@bnb-chain/zkbnb-js-sdk/zkCrypto/web')\n    \n    const client = new Client('https://api-testnet.zkbnbchain.org');\n    \n    let ZK\n    \n    async function initZk() {\n      if (!ZK) {\n        ZK = await ZkCrypto()\n      }\n    \n      return ZK\n    }\n")),(0,a.kt)("h3",{id:"simple-queries"},"Simple queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const res = await client.getAccountInfoByAccountIndex(1);\n    console.log(res)\n/* Response\n{\n    status: 1,\n        index: 2,\n    name: 'sher.legend',\n    pk: 'b0b6f7466154578ec66d51a335ead65ffd6a7210567fad9e68b6df8a5ce5dd85',\n    nonce: 0,\n    assets: [\n    {\n        id: 0,\n        name: 'BNB',\n        balance: '100000000000000000',\n        price: '0E+00'\n    },\n    {\n        id: 1,\n        name: 'BUSD',\n        balance: '100000000000000000000',\n        price: '0E+00'\n    },\n    {\n        id: 2,\n        name: 'LEG',\n        balance: '100000000000000000000',\n        price: '0E+00'\n    },\n    {\n        id: 3,\n        name: 'REY',\n        balance: '100000000000000000000',\n        price: '0E+00'\n    }\n],\n    total_asset_value: '0'\n}*/\n\n")),(0,a.kt)("h3",{id:"sign-and-send-txs-to-zkbnb-l2"},"Sign and send txs to zkBNB L2"),(0,a.kt)("p",null,"Currently, we only support sending tx by seed. the seed is a random hex string which you used in register ZNS"),(0,a.kt)("admonition",{title:"Generate your seed",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ufe0fif you want to use the same account as ",(0,a.kt)("a",{parentName:"p",href:"https://test.zkbnbchain.org/wallet"},"zk-wallet"),", you can use below methods to generate your Seed."),(0,a.kt)("h4",{parentName:"admonition",id:"web3"},"Web3"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    import * as util from 'util';\n    import Web3 from \"web3\";\n    \n    const privateKey = 'your private key';\n    const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97\n    const message = util.format(\"Access zkbnb account.\\n\\nOnly sign this message for a trusted client!\\nChain ID: %s.\", chainId);\n    const web3 = new Web3()\n    const { signature: seed } = web3.eth.accounts.sign(message, privateKey);\n    console.log(seed.substring(2))\n")),(0,a.kt)("h4",{parentName:"admonition",id:"ethers"},"Ethers"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    import * as util from 'util';\n    import { ethers } from \"ethers\";\n    \n    const privateKey = 'your private key';\n    const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97\n    const message = util.format(\"Access zkbnb account.\\n\\nOnly sign this message for a trusted client!\\nChain ID: %s.\", chainId);\n    const wallet = new ethers.Wallet(privateKey);\n    const seed = await wallet.signMessage(message);\n    console.log(seed.substring(2))\n"))),(0,a.kt)("h4",{id:"transfer-demo"},"Transfer demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { Client, TxType } = require('@bnb-chain/zkbnb-js-sdk');\n    const { ZkCrypto } = require('@bnb-chain/zkbnb-js-sdk/zkCrypto/web')\n    const util =  require('util');\n    const { ethers } = require(\"ethers\");\n    \n    const client = new Client('https://api-testnet.zkbnbchain.org');\n    \n    let ZK\n    \n    async function initZk() {\n      if (!ZK) {\n        ZK = await ZkCrypto()\n      }\n    \n      return ZK\n    }\n    \n    // Generate seed\n    async function generateSeed() {\n      const privateKey = 'your private key';\n      const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97\n      const message = util.format(\"Access zkbnb account.\\n\\nOnly sign this message for a trusted client!\\nChain ID: %s.\", chainId);\n      const wallet = new ethers.Wallet(privateKey);\n      const seed = await wallet.signMessage(message);\n      return seed.substring(2);\n    }\n    \n    // Get account\n    async function getAccount(seed) {\n      const pubKey = ZK.getEddsaCompressedPublicKey(seed)\n      const account = await client.getAccountByPubKey(pubKey);\n      return account;\n    }\n    \n    // Create transfer tx\n    async function transfer() {\n      const seed = await generateSeed();\n      const fromAccount = await getAccount(seed);\n      const { nonce: fromAccountNonce } = await client.getNextNonce(fromAccount.index)\n      const gasAccount = await client.getGasAccount()\n      const toAccountNameHash = 'account name hash'\n      const txInfo = {\n        from_account_index: fromAccount.index,\n        to_account_index: gasAccount.index,\n        to_account_name: toAccountNameHash,\n        asset_id: 0,   // Payment asset Id. 0 means BNB\n        asset_amount: ethers.utils.parseEther(\"0.0001\").toString(),\n        gas_account_index: gasAccount.index,\n        gas_fee_asset_id: 0,  // BNB as gas fee\n        gas_fee_asset_amount: ethers.utils.parseEther(\"0.0001\").toString(),\n        memo: 'transfer BNB to John',\n        call_data: `${500}`,\n        expired_at: Date.now() + 7200000,\n        nonce: fromAccountNonce,\n      };\n    \n      //Sign tx with the seed phrase using zkBNB crypto component\n      const signedTx = ZK.signTransfer(seed, JSON.stringify(txInfo))\n    \n      //Send signed tx to zkBNB L2\n      const txHash = await client.sendRawTx(TxType.TxTypeTransfer.toString(), signedTx)\n      return txHash\n    }\n    \n    initZk()\n      .then(() => transfer())\n      .then(console.log)\n      .catch(console.error)\n")),(0,a.kt)("h3",{id:"system"},"System"),(0,a.kt)("h4",{id:"get-zkbnb-general-info"},"Get zkbnb general info"),(0,a.kt)("p",null,"Get zkbnb general info, including contract address, and count of transactions and active users"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const layer2BasicInfo = client.getLayer2BasicInfo()\n")),(0,a.kt)("h4",{id:"get-gas-fee-asset"},"Get gas fee asset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const asset = client.getGasFeeAssets()\n")),(0,a.kt)("h4",{id:"get-gas-fee"},"Get gas fee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const gasFee = client.getGasFee(assetId, txType)\n")),(0,a.kt)("h4",{id:"get-gas-account"},"Get gas account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const gasAccount = client.getGasAccount()\n")),(0,a.kt)("h3",{id:"asset"},"Asset"),(0,a.kt)("h4",{id:"get-asset-by-id"},"Get asset by id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const asset = client.getAssetById(assetId)\n")),(0,a.kt)("h4",{id:"get-assets"},"Get assets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const assets = client.getAssets(offset, limit)\n")),(0,a.kt)("h4",{id:"get-asset-by-symbol"},"Get asset by symbol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const asset = client.getAssetBySymbol(symbol)\n")),(0,a.kt)("h4",{id:"get-assets-1"},"Get assets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const assets = client.getAssetBySymbol(offset, limit)\n")),(0,a.kt)("h3",{id:"account"},"Account"),(0,a.kt)("h4",{id:"get-accounts"},"Get accounts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const accounts = client.getAccounts(offset, limit)\n")),(0,a.kt)("h4",{id:"get-account-by-l1-address"},"Get account by l1 address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const account = client.getAccountByL1Address(l1Address)\n")),(0,a.kt)("h4",{id:"get-account-by-accounts-index"},"Get account by account's index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const account = client.getAccountByIndex(accountIndex)\n")),(0,a.kt)("h4",{id:"get-next-nonce"},"Get next nonce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const nonce = client.getNextNonce(accountIndex)\n")),(0,a.kt)("h4",{id:"get-maxofferid"},"Get maxOfferId"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const maxOfferId = client.getMaxOfferId(accountIndex)\n")),(0,a.kt)("h4",{id:"get-nfts-by-account-index"},"Get nfts by account index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const nfts = client.getNftsByAccountIndex(accountIndex)\n")),(0,a.kt)("h3",{id:"block"},"Block"),(0,a.kt)("h4",{id:"get-current-height"},"GET current Height"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const currentHeight = client.getCurrentHeight()\n")),(0,a.kt)("h4",{id:"get-block-by-its-commitment"},"Get block by its commitment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const block = client.getBlockByCommitment(blockCommitment)\n")),(0,a.kt)("h4",{id:"get-block-by-its-height"},"Get block by its height"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const block = client.getBlockByHeight(blockHeight)\n")),(0,a.kt)("h4",{id:"get-blocks"},"Get blocks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const blocks = client.getBlocks(offset, limit)\n")),(0,a.kt)("h3",{id:"transaction"},"Transaction"),(0,a.kt)("h4",{id:"get-transactions-in-a-block"},"Get transactions in a block"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const txs = client.getTxsByBlockHeight(blockHeight)\n")),(0,a.kt)("h4",{id:"get-tx-by-hash"},"Get tx by hash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const tx = client.getTxByHash(txHash)\n")),(0,a.kt)("h4",{id:"send-raw-transaction"},"Send raw transaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const txHash = client.sendRawTx(txType, txInfo)\n")),(0,a.kt)("h4",{id:"get-tx-by-hash-1"},"Get Tx by hash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const tx = client.getTx(txHash)\n")),(0,a.kt)("h4",{id:"get-txs-by-l1-address"},"Get txs by l1 address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const txs = client.getTxsByL1Address({\n      l1Address,\n      types,\n      offset,\n      limit,\n    })\n")),(0,a.kt)("h4",{id:"get-txs-by-account-index"},"Get txs by account index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const txs = client.getTxsByAccountIndex({\n      accountIndex,\n      types,\n      offset,\n      limit,\n    })\n")),(0,a.kt)("h4",{id:"get-txs"},"Get txs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    const txs = client.getTxs(offset, limit)\n")),(0,a.kt)("h2",{id:"zkbnb-l1-client"},"zkBNB L1 Client"),(0,a.kt)("h3",{id:"install-1"},"Install"),(0,a.kt)("p",null,"Using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> npm install @bnb-chain/zkbnb-js-l1-sdk\n")),(0,a.kt)("p",null,"Using yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> yarn add @bnb-chain/zkbnb-js-l1-sdk\n")),(0,a.kt)("p",null,"Using pnpm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> pnpm add @bnb-chain/zkbnb-js-l1-sdk\n")),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("h4",{id:"init"},"Init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Wallet, Provider, getZkBNBDefaultProvider } from '@bnb-chain/zkbnb-js-l1-sdk';\n\nconst rpcEndpoint = 'https://data-seed-prebsc-2-s1.binance.org:8545'; // bsc testnest rpc\nconst ethWallet = new ethers.Wallet(\n  'your private key',\n  new ethers.providers.JsonRpcProvider(rpcEndpoint)\n);\nconst provider = getZkBNBDefaultProvider('bscTestnet'); // bsc or bscTestnet\n// or by this method\n// const testEndpoint = 'https://api-testnet.zkbnbchain.org'; // bsc testnest\n// const provider = await Provider.newHttpProvider(testEndpoint);\nconst wallet = await Wallet.fromZkBNBSigner(ethWallet, provider);\n")),(0,a.kt)("h4",{id:"sign-message"},"Sign message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// this is used sign message by \nconst result = await provider.ethMessageSigner().getEthMessageSignature("message");\n')),(0,a.kt)("h4",{id:"get-current-user-address"},"Get Current User Address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const address = provider.address();\n")),(0,a.kt)("h4",{id:"get-asset-address-by-asset-id"},"Get Asset Address By Asset Id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const assetAddress = await wallet.resolveTokenAddress('asset id');\n")),(0,a.kt)("h4",{id:"get-asset-id-by-asset-address"},"Get Asset Id By Asset Address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const assetId = await wallet.resolveTokenId('asset address');\n")),(0,a.kt)("h4",{id:"add-asset"},"Add Asset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const tokenAddress = 'BEP20 token address';\n// Before adding, it is recommended to check whether the asset exists and whether it can be added.\nawait wallet.addAsset({ tokenAddress });\n")),(0,a.kt)("h4",{id:"whether-the-bep20-token-is-approved-for-deposit"},"Whether The BEP20 Token Is Approved For Deposit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const isApproved = await wallet.isBEP20DepositsApproved('BEP20 asset address', 'BEP20 approve amount');\n")),(0,a.kt)("h4",{id:"approve-bep20-token-for-deposit"},"Approve BEP20 Token For Deposit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await wallet.approveBEP20TokenDeposits('BEP20 address');\n// You can check if it is successful approved by the following method\nconst isApproved = await wallet.isBEP20DepositsApproved('BEP20 asset address', 'BEP20 approve amount');\n")),(0,a.kt)("h4",{id:"deposit-bnb"},"Deposit BNB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const tokenAddress = await wallet.resolveTokenAddress(0);\nconst result = await wallet.deposit({\n  to: wallet.address(),\n  tokenAddress: \"0x0000000000000000000000000000000000000000\",\n  amount: ethers.utils.parseEther('0.001'),\n});\n")),(0,a.kt)("h4",{id:"deposit-bep20"},"Deposit BEP20"),(0,a.kt)("p",null,"Deposit funds from the BSC to the zkBNB."),(0,a.kt)("p",null,'To do the BEP20 token transfer, this token transfer should be approved. User can make BEP20 deposits approved forever using approveBEP20TokenDeposits("token address"), or the user can approve the exact amount (required for a deposit) upon each deposit using approveBEP20TokenDeposits("token address", "exact amount"), but this is not recommended.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await wallet.deposit({\n  to: wallet.address(),\n  tokenAddress: 'BEP20 Address',\n  amount: ethers.utils.parseEther('0.001'),\n});\n")),(0,a.kt)("h4",{id:"approve-nft-for-deposit"},"Approve NFT For Deposit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const approveTx = await this.approveForAllERC721TokenDeposits('nft address');\n// You can check if it is successful approved by the following method\nconst isApproved = await this.isERC721DepositsApprovedForAll('nft address');\n\n")),(0,a.kt)("h4",{id:"deposit-nft"},"Deposit NFT"),(0,a.kt)("p",null,"Deposit NFT from BSC to zkBNB, Only supports the nft created by zkBNB."),(0,a.kt)("p",null,'To do the NFT transfer, this transfer should be approved by approveForAllERC721TokenDeposits("nft address") once.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const depositResult = await wallet.depositNFT({\n    to: 'wallet address', // which address to deposit to\n    tokenAddress: 'nft address',\n    tokenId: 'nft ID',\n});\n")),(0,a.kt)("h4",{id:"fullexit"},"FullExit"),(0,a.kt)("p",null,"Withdraw BNB or BEP20 from zkBNB to BSC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await wallet.requestFullExit({\n    tokenAddress: 'asset address',\n    accountIndex: 'account index',\n});\n")),(0,a.kt)("h4",{id:"fullexit-nft"},"FullExit Nft"),(0,a.kt)("p",null,"Withdraw NFT from zkBNB to BSC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const requestResult = await wallet.requestFullExitNft({\n    tokenId: 'nft ID',\n    accountIndex: 'account index',\n});\n")),(0,a.kt)("h4",{id:"register-a-dedicated-nft-contract-for-a-collection"},"Register A Dedicated NFT Contract For A Collection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const name = 'collection name';\nconst symbol = 'collection symbol';\nconst collectionId = 'collection Id';\nawait wallet.deployAndRegisterNFTFactory({\n    collectionId,\n    name,\n    symbol,\n});\n")),(0,a.kt)("h4",{id:"get-nft-address-by-collections-creator-address-and-collection-id"},"Get NFT Address By Collection's Creator Address And Collection ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const creatorAddress = 'collection creator\\'s wallet address';\nconst collectionId = 1;\n// if zero address is returned, it means a dedicated nft address can be bound\nconst nftAddress = await wallet.getNFTAddress(creatorAddress, collectionId);\n")),(0,a.kt)("h4",{id:"get-nft-tokenuri"},"Get Nft TokenURI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const nftContentType = 0; // 0-ipfs, 1-Greenfield\nconst nftContentHash = 'nft content hash';\nconst tokenURI = await wallet.getNftTokenURI(nftContentType, nftContentHash);\n")),(0,a.kt)("h4",{id:"get-pending-balance"},"Get Pending Balance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Please change the value of the parameter according to the actual situation\nconst address = 'wallet address';\nconst assetAddress = 'asset address';\n\nconst pendingBalance = await wallet.getPendingBalance(address, assetAddress);\n")))}p.isMDXComponent=!0}}]);