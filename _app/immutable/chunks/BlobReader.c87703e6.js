var i=Object.defineProperty;var a=(o,b,t)=>b in o?i(o,b,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[b]=t;var r=(o,b,t)=>(a(o,typeof b!="symbol"?b+"":b,t),t);import{D as l}from"./2.ec27719f.js";class h extends l{constructor(t){super();r(this,"blob");r(this,"blobPointer",0);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}async load(t,e=this.blobPointer){this.loadData(await this.blob.slice(e,e+t).arrayBuffer()),this.blobPointer=e+t}}export{h as B};
