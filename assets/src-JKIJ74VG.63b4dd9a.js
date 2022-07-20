import{S as we,m as ge,d as W,C as ye,o as pe,T as ve,N as Se}from"./chunk-5DDUYYQJ.8f4365dc.js";import{T as Ae,L as me}from"./chunk-ESWWT2WX.d7c9735c.js";import{E as Te,F as q,z as P,I as V,O as Ee,a as G,n as z,B as U,C as X,e as $,_ as Me}from"./chunk-FWDXYBZH.d10b4b47.js";import{y as Ce,x as M,t as S,A as L,s as R,r as C,w as I,z as De}from"./index.e3071d68.js";(function(e){e&&(e.global===void 0&&(e.global=e),e.globalThis===void 0&&(e.globalThis=e),e.process===void 0&&(e.process={env:{NODE_ENV:"production"}}))})(typeof window!="undefined"?window:void 0);var B=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.safeDeploymentsL1ChainIds=e.safeDeploymentsVersions=e.SAFE_BASE_VERSION=e.SAFE_LAST_VERSION=void 0,e.SAFE_LAST_VERSION="1.3.0",e.SAFE_BASE_VERSION="1.1.1",e.safeDeploymentsVersions={"1.3.0":{safeMasterCopyVersion:"1.3.0",safeMasterCopyL2Version:"1.3.0",safeProxyFactoryVersion:"1.3.0",multiSendVersion:"1.3.0"},"1.2.0":{safeMasterCopyVersion:"1.2.0",safeMasterCopyL2Version:void 0,safeProxyFactoryVersion:"1.1.1",multiSendVersion:"1.1.1"},"1.1.1":{safeMasterCopyVersion:"1.1.1",safeMasterCopyL2Version:void 0,safeProxyFactoryVersion:"1.1.1",multiSendVersion:"1.1.1"}},e.safeDeploymentsL1ChainIds=[1]}),J=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getMultiSendContract=e.getProxyFactoryContract=e.getSafeContract=e.getSafeProxyFactoryContractDeployment=e.getMultiSendContractDeployment=e.getSafeContractDeployment=void 0;var c=ye(),t=B();function u(r,i,s=!1){let d={version:t.safeDeploymentsVersions[r].safeMasterCopyVersion,network:i.toString(),released:!0};return t.safeDeploymentsL1ChainIds.includes(i)||s?(0,c.getSafeSingletonDeployment)(d):(0,c.getSafeL2SingletonDeployment)(d)}S(u,"getSafeContractDeployment"),e.getSafeContractDeployment=u;function o(r,i){let s=t.safeDeploymentsVersions[r].multiSendVersion;return(0,c.getMultiSendDeployment)({version:s,network:i.toString(),released:!0})}S(o,"getMultiSendContractDeployment"),e.getMultiSendContractDeployment=o;function f(r,i){let s=t.safeDeploymentsVersions[r].safeProxyFactoryVersion;return(0,c.getProxyFactoryDeployment)({version:s,network:i.toString(),released:!0})}S(f,"getSafeProxyFactoryContractDeployment"),e.getSafeProxyFactoryContractDeployment=f;async function g({ethAdapter:r,safeVersion:i,chainId:s,customSafeAddress:d,isL1SafeMasterCopy:h,customContracts:p}){let E=u(i,s,h),A=r.getSafeContract({safeVersion:i,chainId:s,singletonDeployment:E,customContractAddress:d!=null?d:p==null?void 0:p.safeMasterCopyAddress,customContractAbi:p==null?void 0:p.safeMasterCopyAbi});if(!await r.isContractDeployed(A.getAddress()))throw new Error("Safe Proxy contract is not deployed on the current network");return A}S(g,"getSafeContract"),e.getSafeContract=g;async function w({ethAdapter:r,safeVersion:i,chainId:s,customContracts:d}){let h=f(i,s),p=await r.getSafeProxyFactoryContract({safeVersion:i,chainId:s,singletonDeployment:h,customContractAddress:d==null?void 0:d.safeProxyFactoryAddress,customContractAbi:d==null?void 0:d.safeProxyFactoryAbi});if(!await r.isContractDeployed(p.getAddress()))throw new Error("Safe Proxy Factory contract is not deployed on the current network");return p}S(w,"getProxyFactoryContract"),e.getProxyFactoryContract=w;async function a({ethAdapter:r,safeVersion:i,chainId:s,customContracts:d}){let h=o(i,s),p=await r.getMultiSendContract({safeVersion:i,chainId:s,singletonDeployment:h,customContractAddress:d==null?void 0:d.multiSendAddress,customContractAbi:d==null?void 0:d.multiSendAbi});if(!await r.isContractDeployed(p.getAddress()))throw new Error("Multi Send contract is not deployed on the current network");return p}S(a,"getMultiSendContract"),e.getMultiSendContract=a}),Y=M(e=>{var c=e&&e.__classPrivateFieldSet||function(i,s,d,h,p){if(h==="m")throw new TypeError("Private method is not writable");if(h==="a"&&!p)throw new TypeError("Private accessor was defined without a setter");if(typeof s=="function"?i!==s||!p:!s.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return h==="a"?p.call(i,d):p?p.value=d:s.set(i,d),d},t=e&&e.__classPrivateFieldGet||function(i,s,d,h){if(d==="a"&&!h)throw new TypeError("Private accessor was defined without a getter");if(typeof s=="function"?i!==s||!h:!s.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return d==="m"?h:d==="a"?h.call(i):h?h.value:s.get(i)},u,o,f,g;Object.defineProperty(e,"__esModule",{value:!0});var w=B(),a=J(),r=S(class K{constructor(){u.set(this,void 0),o.set(this,void 0),f.set(this,void 0),g.set(this,void 0)}static async create({ethAdapter:s,safeAddress:d,isL1SafeMasterCopy:h,contractNetworks:p}){let E=new K;return await E.init({ethAdapter:s,safeAddress:d,isL1SafeMasterCopy:h,contractNetworks:p}),E}async init({ethAdapter:s,safeAddress:d,isL1SafeMasterCopy:h,contractNetworks:p}){let E=await s.getChainId(),A=p==null?void 0:p[E];c(this,u,p,"f"),c(this,o,h,"f");let T=await(await(0,a.getSafeContract)({ethAdapter:s,safeVersion:w.SAFE_LAST_VERSION,chainId:E,isL1SafeMasterCopy:h,customSafeAddress:d,customContracts:A})).getVersion();c(this,f,await(0,a.getSafeContract)({ethAdapter:s,safeVersion:T,chainId:E,isL1SafeMasterCopy:h,customSafeAddress:d,customContracts:A}),"f"),c(this,g,await(0,a.getMultiSendContract)({ethAdapter:s,safeVersion:T,chainId:E,customContracts:A}),"f")}get contractNetworks(){return t(this,u,"f")}get isL1SafeMasterCopy(){return t(this,o,"f")}get safeContract(){return t(this,f,"f")}get multiSendContract(){return t(this,g,"f")}},"ContractManager");u=new WeakMap,o=new WeakMap,f=new WeakMap,g=new WeakMap,e.default=r}),k=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SENTINEL_ADDRESS=e.EMPTY_DATA=e.ZERO_ADDRESS=void 0,e.ZERO_ADDRESS=`0x${"0".repeat(40)}`,e.EMPTY_DATA="0x",e.SENTINEL_ADDRESS="0x0000000000000000000000000000000000000001"}),F=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isMetaTransactionArray=e.isRestrictedAddress=e.sameString=void 0;var c=k();function t(w,a){return w.toLowerCase()===a.toLowerCase()}S(t,"sameString"),e.sameString=t;function u(w){return w===c.ZERO_ADDRESS}S(u,"isZeroAddress");function o(w){return w===c.SENTINEL_ADDRESS}S(o,"isSentinelAddress");function f(w){return u(w)||o(w)}S(f,"isRestrictedAddress"),e.isRestrictedAddress=f;function g(w){return(w==null?void 0:w.length)!==void 0}S(g,"isMetaTransactionArray"),e.isMetaTransactionArray=g}),_e=M(e=>{var c=e&&e.__classPrivateFieldSet||function(a,r,i,s,d){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!d)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?a!==r||!d:!r.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?d.call(a,i):d?d.value=i:r.set(a,i),i},t=e&&e.__classPrivateFieldGet||function(a,r,i,s){if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?a!==r||!s:!r.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?s:i==="a"?s.call(a):s?s.value:r.get(a)},u,o;Object.defineProperty(e,"__esModule",{value:!0});var f=F(),g=k(),w=S(class{constructor(a,r){u.set(this,void 0),o.set(this,void 0),c(this,u,a,"f"),c(this,o,r,"f")}validateModuleAddress(a){if(!t(this,u,"f").isAddress(a)||(0,f.isRestrictedAddress)(a))throw new Error("Invalid module address provided")}validateModuleIsNotEnabled(a,r){if(r.findIndex(i=>(0,f.sameString)(i,a))>=0)throw new Error("Module provided is already enabled")}validateModuleIsEnabled(a,r){let i=r.findIndex(s=>(0,f.sameString)(s,a));if(!(i>=0))throw new Error("Module provided is not enabled already");return i}async getModules(){return t(this,o,"f").getModules()}async isModuleEnabled(a){return t(this,o,"f").isModuleEnabled(a)}async encodeEnableModuleData(a){this.validateModuleAddress(a);let r=await this.getModules();return this.validateModuleIsNotEnabled(a,r),t(this,o,"f").encode("enableModule",[a])}async encodeDisableModuleData(a){this.validateModuleAddress(a);let r=await this.getModules(),i=this.validateModuleIsEnabled(a,r),s=i===0?g.SENTINEL_ADDRESS:r[i-1];return t(this,o,"f").encode("disableModule",[s,a])}},"ModuleManager");u=new WeakMap,o=new WeakMap,e.default=w}),be=M(e=>{var c=e&&e.__classPrivateFieldSet||function(a,r,i,s,d){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!d)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?a!==r||!d:!r.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?d.call(a,i):d?d.value=i:r.set(a,i),i},t=e&&e.__classPrivateFieldGet||function(a,r,i,s){if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?a!==r||!s:!r.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return i==="m"?s:i==="a"?s.call(a):s?s.value:r.get(a)},u,o;Object.defineProperty(e,"__esModule",{value:!0});var f=F(),g=k(),w=S(class{constructor(a,r){u.set(this,void 0),o.set(this,void 0),c(this,u,a,"f"),c(this,o,r,"f")}validateOwnerAddress(a,r){if(!t(this,u,"f").isAddress(a)||(0,f.isRestrictedAddress)(a))throw new Error(r||"Invalid owner address provided")}validateThreshold(a,r){if(a<=0)throw new Error("Threshold needs to be greater than 0");if(a>r)throw new Error("Threshold cannot exceed owner count")}validateAddressIsNotOwner(a,r,i){if(r.findIndex(s=>(0,f.sameString)(s,a))>=0)throw new Error(i||"Address provided is already an owner")}validateAddressIsOwner(a,r,i){let s=r.findIndex(d=>(0,f.sameString)(d,a));if(!(s>=0))throw new Error(i||"Address provided is not an owner");return s}async getOwners(){return[...await t(this,o,"f").getOwners()]}async getThreshold(){return t(this,o,"f").getThreshold()}async isOwner(a){return t(this,o,"f").isOwner(a)}async encodeAddOwnerWithThresholdData(a,r){this.validateOwnerAddress(a);let i=await this.getOwners();this.validateAddressIsNotOwner(a,i);let s=r!=null?r:await this.getThreshold();return this.validateThreshold(s,i.length+1),t(this,o,"f").encode("addOwnerWithThreshold",[a,s])}async encodeRemoveOwnerData(a,r){this.validateOwnerAddress(a);let i=await this.getOwners(),s=this.validateAddressIsOwner(a,i),d=r!=null?r:await this.getThreshold()-1;this.validateThreshold(d,i.length-1);let h=s===0?g.SENTINEL_ADDRESS:i[s-1];return t(this,o,"f").encode("removeOwner",[h,a,d])}async encodeSwapOwnerData(a,r){this.validateOwnerAddress(r,"Invalid new owner address provided"),this.validateOwnerAddress(a,"Invalid old owner address provided");let i=await this.getOwners();this.validateAddressIsNotOwner(r,i,"New address provided is already an owner");let s=this.validateAddressIsOwner(a,i,"Old address provided is not an owner"),d=s===0?g.SENTINEL_ADDRESS:i[s-1];return t(this,o,"f").encode("swapOwner",[d,a,r])}async encodeChangeThresholdData(a){let r=await this.getOwners();return this.validateThreshold(a,r.length),t(this,o,"f").encode("changeThreshold",[a])}},"OwnerManager");u=new WeakMap,o=new WeakMap,e.default=w}),Q=M(e=>{Object.defineProperty(e,"__esModule",{value:!0});var c=S(class{constructor(t,u){this.signer=t,this.data=u}staticPart(){return this.data}dynamicPart(){return""}},"EthSignSignature");e.default=c}),Oe=M(e=>{var c=e&&e.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(e,"__esModule",{value:!0}),e.generateSignature=e.adjustVInSignature=e.isTxHashSignedWithPrefix=e.generatePreValidatedSignature=void 0;var t=Ae(),u=F(),o=c(Q());function f(r){let i="0x000000000000000000000000"+r.slice(2)+"000000000000000000000000000000000000000000000000000000000000000001";return new o.default(r,i)}S(f,"generatePreValidatedSignature"),e.generatePreValidatedSignature=f;function g(r,i,s){let d;try{let h={r:Buffer.from(i.slice(2,66),"hex"),s:Buffer.from(i.slice(66,130),"hex"),v:parseInt(i.slice(130,132),16)},p=(0,t.ecrecover)(Buffer.from(r.slice(2),"hex"),h.v,h.r,h.s),E=(0,t.bufferToHex)((0,t.pubToAddress)(p));d=!(0,u.sameString)(E,s)}catch{d=!0}return d}S(g,"isTxHashSignedWithPrefix"),e.isTxHashSignedWithPrefix=g;function w(r,i){let s=[0,1,27,28],d=27,h=parseInt(r.slice(-2),16);if(!s.includes(h))throw new Error("Invalid signature");return h<d&&(h+=d),i&&(h+=4),r=r.slice(0,-2)+h.toString(16),r}S(w,"adjustVInSignature"),e.adjustVInSignature=w;async function a(r,i){let s=await r.getSignerAddress(),d=await r.signMessage(i),h=g(i,d,s);return d=w(d,h),new o.default(s,d)}S(a,"generateSignature"),e.generateSignature=a}),Pe=M(e=>{Object.defineProperty(e,"__esModule",{value:!0});var c=S(class{constructor(t){this.signatures=new Map,this.data=t}addSignature(t){this.signatures.set(t.signer.toLowerCase(),t)}encodedSignatures(){let t=Array.from(this.signatures.keys()).sort();t.length*65;let u="",o="";return t.forEach(f=>{let g=this.signatures.get(f);u+=g==null?void 0:g.staticPart().slice(2),o+=g==null?void 0:g.dynamicPart()}),"0x"+u+o}},"EthSafeTransaction");e.default=c}),ee,xe=I(()=>{ee="sha2/5.6.1"});function te(e){return"0x"+ae.default.sha256().update(P(e)).digest("hex")}var ae,Ie=I(()=>{ae=De(me()),G(),U(),xe(),new X(ee),S(te,"sha256")}),ke=I(()=>{Ie()}),re,Le=I(()=>{re="solidity/5.6.1"}),se={};Ce(se,{keccak256:()=>ne,pack:()=>N,sha256:()=>ie});function H(e,c,t){switch(e){case"address":return t?V(c,32):P(c);case"string":return ge(c);case"bytes":return P(c);case"bool":return c=c?"0x01":"0x00",t?V(c,32):P(c)}let u=e.match(de);if(u){let o=parseInt(u[2]||"256");return(u[2]&&String(o)!==u[2]||o%8!==0||o===0||o>256)&&O.throwArgumentError("invalid number type","type",e),t&&(o=256),c=Ee.from(c).toTwos(o),V(c,o/8)}if(u=e.match(oe),u){let o=parseInt(u[1]);return(String(o)!==u[1]||o===0||o>32)&&O.throwArgumentError("invalid bytes type","type",e),P(c).byteLength!==o&&O.throwArgumentError(`invalid value for ${e}`,"value",c),t?P((c+le).substring(0,66)):c}if(u=e.match(ce),u&&Array.isArray(c)){let o=u[1];parseInt(u[2]||String(c.length))!=c.length&&O.throwArgumentError(`invalid array length for ${e}`,"value",c);let f=[];return c.forEach(function(g){f.push(H(o,g,!0))}),q(f)}return O.throwArgumentError("invalid type","type",e)}function N(e,c){e.length!=c.length&&O.throwArgumentError("wrong number of values; expected ${ types.length }","values",c);let t=[];return e.forEach(function(u,o){t.push(H(u,c[o]))}),Te(q(t))}function ne(e,c){return we(N(e,c))}function ie(e,c){return te(N(e,c))}var oe,de,ce,le,O,Fe=I(()=>{z(),G(),pe(),ke(),ve(),U(),Le(),oe=new RegExp("^bytes([0-9]+)$"),de=new RegExp("^(u?int)([0-9]*)$"),ce=new RegExp("^(.*)\\[([0-9]*)\\]$"),le="0000000000000000000000000000000000000000000000000000000000000000",O=new X(re),S(H,"_pack"),S(N,"pack"),S(ne,"keccak256"),S(ie,"sha256")}),Ne=M(e=>{var c=e&&e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.hasFeature=e.enabledFeatures=e.FEATURES=void 0;var t=c(Se()),u;(function(a){a[a.SAFE_TX_GAS_OPTIONAL=0]="SAFE_TX_GAS_OPTIONAL"})(u=e.FEATURES||(e.FEATURES={}));var o={[u.SAFE_TX_GAS_OPTIONAL]:">=1.3.0"},f=S((a,r)=>a in o?(0,t.default)(r,o[a]):!0,"isEnabledByVersion"),g=S(a=>Object.values(u).filter(r=>f(r,a)),"enabledFeatures");e.enabledFeatures=g;var w=S((a,r)=>(0,e.enabledFeatures)(r).includes(a),"hasFeature");e.hasFeature=w}),Ve=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.estimateTxGas=void 0;var c=(z(),L($)),t=W();function u(f){let g=S((w,a)=>a==="0x"?w+0:a==="00"?w+4:w+16,"reducer");return f.match(/.{2}/g).reduce(g,0)}S(u,"estimateDataGasCosts");async function o(f,g,w,a,r,i){let s=0,d=f.getAddress(),h=f.encode("requiredTxGas",[w,a,r,i]);try{let p=(await g.estimateGas({to:d,from:d,data:h})).toString();s=c.BigNumber.from("0x"+p.substring(138)).toNumber()+1e4}catch{}if(s>0){let p=u(h),E=1e4;for(let A=0;A<10;A++){try{if(await g.call({to:d,from:d,data:h,gasPrice:0,gasLimit:s+p+E})!=="0x")break}catch{}s+=E,E*=2}return s+E}try{return await g.estimateGas({to:w,from:d,value:a,data:r})}catch(p){return i===t.OperationType.DelegateCall?0:Promise.reject(p)}}S(o,"estimateTxGas"),e.estimateTxGas=o}),ue=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.encodeMultiSendData=e.standardizeSafeTransactionData=e.standardizeMetaTransactionData=void 0;var c=(G(),L(Me)),t=(Fe(),L(se)),u=W(),o=k(),f=Ne(),g=Ve();function w(s){var d;return R(C({},s),{operation:(d=s.operation)!==null&&d!==void 0?d:u.OperationType.Call})}S(w,"standardizeMetaTransactionData"),e.standardizeMetaTransactionData=w;async function a(s,d,h){var p,E,A,T,v;let n={to:h.to,value:h.value,data:h.data,operation:(p=h.operation)!==null&&p!==void 0?p:u.OperationType.Call,baseGas:(E=h.baseGas)!==null&&E!==void 0?E:0,gasPrice:(A=h.gasPrice)!==null&&A!==void 0?A:0,gasToken:h.gasToken||o.ZERO_ADDRESS,refundReceiver:h.refundReceiver||o.ZERO_ADDRESS,nonce:(T=h.nonce)!==null&&T!==void 0?T:await s.getNonce()},l,y=await s.getVersion();return(0,f.hasFeature)(f.FEATURES.SAFE_TX_GAS_OPTIONAL,y)&&n.gasPrice===0?l=0:l=(v=h.safeTxGas)!==null&&v!==void 0?v:await(0,g.estimateTxGas)(s,d,n.to,n.value,n.data,n.operation),R(C({},n),{safeTxGas:l})}S(a,"standardizeSafeTransactionData"),e.standardizeSafeTransactionData=a;function r(s){let d=(0,c.arrayify)(s.data);return(0,t.pack)(["uint8","address","uint256","uint256","bytes"],[s.operation,s.to,s.value,d.length,d]).slice(2)}S(r,"encodeMetaTransaction");function i(s){return"0x"+s.map(d=>r(d)).join("")}S(i,"encodeMultiSendData"),e.encodeMultiSendData=i}),fe=M(e=>{var c=e&&e.__classPrivateFieldSet||function(v,n,l,y,m){if(y==="m")throw new TypeError("Private method is not writable");if(y==="a"&&!m)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?v!==n||!m:!n.has(v))throw new TypeError("Cannot write private member to an object whose class did not declare it");return y==="a"?m.call(v,l):m?m.value=l:n.set(v,l),l},t=e&&e.__classPrivateFieldGet||function(v,n,l,y){if(l==="a"&&!y)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?v!==n||!y:!n.has(v))throw new TypeError("Cannot read private member from an object whose class did not declare it");return l==="m"?y:l==="a"?y.call(v):y?y.value:n.get(v)},u=e&&e.__importDefault||function(v){return v&&v.__esModule?v:{default:v}},o,f,g,w;Object.defineProperty(e,"__esModule",{value:!0});var a=(z(),L($)),r=W(),i=u(Y()),s=u(_e()),d=u(be()),h=F(),p=Oe(),E=u(Pe()),A=ue(),T=S(class j{constructor(){o.set(this,void 0),f.set(this,void 0),g.set(this,void 0),w.set(this,void 0)}static async create({ethAdapter:n,safeAddress:l,isL1SafeMasterCopy:y,contractNetworks:m}){let D=new j;return await D.init({ethAdapter:n,safeAddress:l,isL1SafeMasterCopy:y,contractNetworks:m}),D}async init({ethAdapter:n,safeAddress:l,isL1SafeMasterCopy:y,contractNetworks:m}){c(this,o,n,"f"),c(this,f,await i.default.create({ethAdapter:t(this,o,"f"),safeAddress:l,isL1SafeMasterCopy:y,contractNetworks:m}),"f"),c(this,g,new d.default(t(this,o,"f"),t(this,f,"f").safeContract),"f"),c(this,w,new s.default(t(this,o,"f"),t(this,f,"f").safeContract),"f")}async connect({ethAdapter:n,safeAddress:l,isL1SafeMasterCopy:y,contractNetworks:m}){return await j.create({ethAdapter:n||t(this,o,"f"),safeAddress:l||this.getAddress(),isL1SafeMasterCopy:y||t(this,f,"f").isL1SafeMasterCopy,contractNetworks:m||t(this,f,"f").contractNetworks})}getAddress(){return t(this,f,"f").safeContract.getAddress()}getContractManager(){return t(this,f,"f")}getEthAdapter(){return t(this,o,"f")}getMultiSendAddress(){return t(this,f,"f").multiSendContract.getAddress()}async getContractVersion(){return t(this,f,"f").safeContract.getVersion()}async getOwners(){return t(this,g,"f").getOwners()}async getNonce(){return t(this,f,"f").safeContract.getNonce()}async getThreshold(){return t(this,g,"f").getThreshold()}async getChainId(){return t(this,o,"f").getChainId()}async getBalance(){return t(this,o,"f").getBalance(this.getAddress())}async getModules(){return t(this,w,"f").getModules()}async isModuleEnabled(n){return t(this,w,"f").isModuleEnabled(n)}async isOwner(n){return t(this,g,"f").isOwner(n)}async createTransaction(n,l){if((0,h.isMetaTransactionArray)(n)&&n.length===0)throw new Error("Invalid empty array of transactions");let y;if((0,h.isMetaTransactionArray)(n)&&n.length>1){let D=(0,A.encodeMultiSendData)(n.map(A.standardizeMetaTransactionData));y=R(C({},l),{to:t(this,f,"f").multiSendContract.getAddress(),value:"0",data:t(this,f,"f").multiSendContract.encode("multiSend",[D]),operation:r.OperationType.DelegateCall})}else y=(0,h.isMetaTransactionArray)(n)?C(C({},l),n[0]):n;let m=await(0,A.standardizeSafeTransactionData)(t(this,f,"f").safeContract,t(this,o,"f"),y);return new E.default(m)}async createRejectionTransaction(n){return this.createTransaction({to:this.getAddress(),nonce:n,value:"0",data:"0x",safeTxGas:0})}async getTransactionHash(n){let l=n.data;return await t(this,f,"f").safeContract.getTransactionHash(l)}async signTransactionHash(n){let l=await this.getOwners(),y=await t(this,o,"f").getSignerAddress();if(!l.find(m=>y&&(0,h.sameString)(m,y)))throw new Error("Transactions can only be signed by Safe owners");return(0,p.generateSignature)(t(this,o,"f"),n)}async signTransaction(n){let l=await this.getTransactionHash(n),y=await this.signTransactionHash(l);n.addSignature(y)}async approveTransactionHash(n,l){let y=await this.getOwners(),m=await t(this,o,"f").getSignerAddress();if(!y.find(D=>m&&(0,h.sameString)(D,m)))throw new Error("Transaction hashes can only be approved by Safe owners");if((l==null?void 0:l.gas)&&(l==null?void 0:l.gasLimit))throw new Error("Cannot specify gas and gasLimit together in transaction options");return t(this,f,"f").safeContract.approveHash(n,C({from:m},l))}async getOwnersWhoApprovedTx(n){let l=await this.getOwners(),y=[];for(let m of l)(await t(this,f,"f").safeContract.approvedHashes(m,n)).gt(0)&&y.push(m);return y}async getEnableModuleTx(n,l){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,w,"f").encodeEnableModuleData(n)},l))}async getDisableModuleTx(n,l){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,w,"f").encodeDisableModuleData(n)},l))}async getAddOwnerTx({ownerAddress:n,threshold:l},y){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,g,"f").encodeAddOwnerWithThresholdData(n,l)},y))}async getRemoveOwnerTx({ownerAddress:n,threshold:l},y){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,g,"f").encodeRemoveOwnerData(n,l)},y))}async getSwapOwnerTx({oldOwnerAddress:n,newOwnerAddress:l},y){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,g,"f").encodeSwapOwnerData(n,l)},y))}async getChangeThresholdTx(n,l){return await this.createTransaction(C({to:this.getAddress(),value:"0",data:await t(this,g,"f").encodeChangeThresholdData(n)},l))}async executeTransaction(n,l){let y=await this.getTransactionHash(n),m=await this.getOwnersWhoApprovedTx(y);for(let b of m)n.addSignature((0,p.generatePreValidatedSignature)(b));let D=await this.getOwners(),_=await t(this,o,"f").getSignerAddress();D.includes(_)&&n.addSignature((0,p.generatePreValidatedSignature)(_));let x=await this.getThreshold();if(x>n.signatures.size){let b=x-n.signatures.size;throw new Error(`There ${b>1?"are":"is"} ${b} signature${b>1?"s":""} missing`)}let Z=a.BigNumber.from(n.data.value);if(!Z.isZero()){let b=await this.getBalance();if(Z.gt(a.BigNumber.from(b)))throw new Error("Not enough Ether funds")}if((l==null?void 0:l.gas)&&(l==null?void 0:l.gasLimit))throw new Error("Cannot specify gas and gasLimit together in transaction options");return await t(this,f,"f").safeContract.execTransaction(n,C({from:_},l))}},"Safe");o=new WeakMap,f=new WeakMap,g=new WeakMap,w=new WeakMap,e.default=T}),Re=M(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.validateSafeAccountConfig=void 0;var c=S(({owners:t,threshold:u})=>{if(t.length<=0)throw new Error("Owner list must have at least one owner");if(u<=0)throw new Error("Threshold must be greater than or equal to 1");if(u>t.length)throw new Error("Threshold must be lower than or equal to owners length")},"validateSafeAccountConfig");e.validateSafeAccountConfig=c}),je=M(e=>{var c=e&&e.__classPrivateFieldSet||function(A,T,v,n,l){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof T=="function"?A!==T||!l:!T.has(A))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?l.call(A,v):l?l.value=v:T.set(A,v),v},t=e&&e.__classPrivateFieldGet||function(A,T,v,n){if(v==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof T=="function"?A!==T||!n:!T.has(A))throw new TypeError("Cannot read private member from an object whose class did not declare it");return v==="m"?n:v==="a"?n.call(A):n?n.value:T.get(A)},u=e&&e.__importDefault||function(A){return A&&A.__esModule?A:{default:A}},o,f,g,w,a,r;Object.defineProperty(e,"__esModule",{value:!0});var i=B(),s=J(),d=u(fe()),h=k(),p=Re(),E=S(class he{constructor(){o.set(this,void 0),f.set(this,void 0),g.set(this,void 0),w.set(this,void 0),a.set(this,void 0),r.set(this,void 0)}static async create({ethAdapter:T,safeVersion:v=i.SAFE_LAST_VERSION,isL1SafeMasterCopy:n=!1,contractNetworks:l}){let y=new he;return await y.init({ethAdapter:T,safeVersion:v,isL1SafeMasterCopy:n,contractNetworks:l}),y}async init({ethAdapter:T,safeVersion:v,isL1SafeMasterCopy:n,contractNetworks:l}){c(this,w,T,"f"),c(this,g,v,"f"),c(this,f,n,"f"),c(this,o,l,"f");let y=await t(this,w,"f").getChainId(),m=l==null?void 0:l[y];c(this,a,await(0,s.getProxyFactoryContract)({ethAdapter:T,safeVersion:v,chainId:y,customContracts:m}),"f"),c(this,r,await(0,s.getSafeContract)({ethAdapter:T,safeVersion:v,chainId:y,isL1SafeMasterCopy:n,customContracts:m}),"f")}getEthAdapter(){return t(this,w,"f")}getSafeVersion(){return t(this,g,"f")}getAddress(){return t(this,a,"f").getAddress()}async getChainId(){return t(this,w,"f").getChainId()}async encodeSetupCallData({owners:T,threshold:v,to:n=h.ZERO_ADDRESS,data:l=h.EMPTY_DATA,fallbackHandler:y=h.ZERO_ADDRESS,paymentToken:m=h.ZERO_ADDRESS,payment:D=0,paymentReceiver:_=h.ZERO_ADDRESS}){return t(this,r,"f").encode("setup",[T,v,n,l,y,m,D,_])}async deploySafe({safeAccountConfig:T,safeDeploymentConfig:v,options:n,callback:l}){var y;(0,p.validateSafeAccountConfig)(T);let m=await t(this,w,"f").getSignerAddress(),D=await this.encodeSetupCallData(T),_=(y=v==null?void 0:v.saltNonce)!==null&&y!==void 0?y:Date.now()*1e3+Math.floor(Math.random()*1e3);if((n==null?void 0:n.gas)&&(n==null?void 0:n.gasLimit))throw new Error("Cannot specify gas and gasLimit together in transaction options");let x=await t(this,a,"f").createProxy({safeMasterCopyAddress:t(this,r,"f").getAddress(),initializer:D,saltNonce:_,options:C({from:m},n),callback:l});if(!await t(this,w,"f").isContractDeployed(x))throw new Error("Safe Proxy contract is not deployed on the current network");return await d.default.create({ethAdapter:t(this,w,"f"),safeAddress:x,isL1SafeMasterCopy:t(this,f,"f"),contractNetworks:t(this,o,"f")})}},"SafeFactory");o=new WeakMap,f=new WeakMap,g=new WeakMap,w=new WeakMap,a=new WeakMap,r=new WeakMap,e.default=E}),We=M(e=>{var c=e&&e.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(e,"__esModule",{value:!0}),e.standardizeSafeTransactionData=e.EthSignSignature=e.SafeFactory=e.ContractManager=void 0;var t=c(Y());e.ContractManager=t.default;var u=c(fe()),o=c(je());e.SafeFactory=o.default;var f=c(Q());e.EthSignSignature=f.default;var g=ue();Object.defineProperty(e,"standardizeSafeTransactionData",{enumerable:!0,get:function(){return g.standardizeSafeTransactionData}}),e.default=u.default}),Ze=We();export{Ze as default};
