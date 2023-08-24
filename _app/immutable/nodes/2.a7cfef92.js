var bp=Object.defineProperty;var xp=(n,e,t)=>e in n?bp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ne=(n,e,t)=>(xp(n,typeof e!="symbol"?e+"":e,t),t);import{D as Ep,E as yp,F as na,G as oi,s as Ot,f as je,a as dn,l as Rn,g as Ke,h as ht,c as fn,m as Cn,d as ce,j as ye,I as cn,i as Me,x as St,J as kn,n as Bi,B as P,o as Vs,K as Yt,p as Ts,L as Xr,M as Rc,N as Ba,O as gf,H as Sp,e as ut,v as Mp,r as wp,y as Tp,z as Ap,A as Rp,P as vf,b as Cp,k as Cc,Q as fo,R as bf,S as Lp,w as xf}from"../chunks/scheduler.ccc0f0ee.js";import{g as pi,t as it,c as mi,a as Xe,S as Ht,i as Gt,b as $n,d as Xn,m as Zn,e as qn}from"../chunks/index.99fcc0a6.js";import{w as Np}from"../chunks/index.a385c19d.js";function Et(n,e){const t=e.token={};function i(r,s,a,o){if(e.token!==t)return;e.resolved=o;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=o);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==s&&f&&(pi(),it(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),mi())}):e.block.d(1),l.c(),Xe(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&oi()}if(Ep(n)){const r=yp();if(n.then(s=>{na(r),i(e.then,1,e.value,s),na(null)},s=>{if(na(r),i(e.catch,2,e.error,s),na(null),!e.hasCatch)throw s}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,n),!0;e.resolved=n}}function Ln(n,e,t){const i=e.slice(),{resolved:r}=n;n.current===n.then&&(i[n.value]=r),n.current===n.catch&&(i[n.error]=r),n.block.p(i,t)}function ki(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ef(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const a=n[s],o=e[s];if(o){for(const c in a)c in o||(i[c]=1);for(const c in o)r[c]||(t[c]=o[c],r[c]=1);n[s]=o}else for(const c in a)r[c]=1}for(const a in i)a in t||(t[a]=void 0);return t}function Dp(n){return typeof n=="object"&&n!==null?n:{}}const Up=!0,b1=Object.freeze(Object.defineProperty({__proto__:null,prerender:Up},Symbol.toStringTag,{value:"Module"}));var Zr;(n=>{function e(t,i,r="0x"){return`${r}${t.toString(16).toUpperCase().padStart(i*2,"0")}`}n.hex=e})(Zr||(Zr={}));const ia={Uint8:1,Int8:1,Uint16:2,Int16:2,Uint32:4,Int32:4,BigUint64:8,BigInt64:8,Float32:4,Float64:8},yi=class yi{constructor(e){ne(this,"view",new DataView(new ArrayBuffer(0)));ne(this,"pointer",0);ne(this,"endianness",yi.LITTLE_ENDIAN);e!==void 0&&(e instanceof yi&&(e=e.buffer),this.loadData(e))}get length(){return this.view.byteLength}get buffer(){return this.view.buffer}get eof(){return this.pointer>=this.length}get dataLeft(){return this.length-this.pointer}loadData(e,t=0){e instanceof ArrayBuffer||(e=e.buffer),this.view=new DataView(e),this.pointer=t}to(){let e=arguments[0];return typeof e=="function"&&(e=new e),e.loadData(this.buffer,this.pointer),e}peek(e,t=0,...i){const r=this.pointer;this.pointer+=t;const s=e.call(this,...i);return this.pointer=r,s}readBuffer(e){const t=this.buffer.slice(this.pointer,this.pointer+e);return this.pointer+=e,t}readBufferFast(e){const t=new Uint8Array(this.buffer,this.pointer,e);return this.pointer+=e,t}readNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=ia[e],t}readBigNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=ia[e],t}readCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==yi.LITTLE_ENDIAN&&(i=i.reverse());let r=0;for(let s=0;s<i.length;s++)r<<=8,r|=i[s];return t&&r&2<<e*8-1&&(r&=(2<<e*8-1)-1,r=-r),r}readBigCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==yi.LITTLE_ENDIAN&&(i=i.reverse());let r=0n;for(let s=0;s<i.length;s++)r<<=8n,r|=BigInt(i[s]);return t&&r&2n<<BigInt(e)*8n-1n&&(r&=(2n<<BigInt(e)*8n-1n)-1n,r=-r),r}readString(e,t="utf-8"){const i=this.readBuffer(e);return new TextDecoder(t).decode(i)}readNullString(e="utf-8"){let t=this.pointer;for(;this.view.getUint8(t++)!=0;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder(e).decode(i)}readArray(e,t,...i){let r=new Array(t);for(let s=0;s<t;s++)r[s]=e.call(this,...i);return r}readArrayWhile(e,t,...i){let r=new Array;do r.push(e.call(this,...i));while(t(r[r.length-1],r.length-1,r));return r}readArrayTuple(e,t,...i){return this.readArray(e,t,...i)}readArrayUntilEnd(e,...t){return this.readArrayWhile(e,()=>!this.eof,...t)}assertMagic(e,t){if(typeof e=="string"){const i=this.readString(e.length,"ascii");if(i!=e)throw new Error(`DataReader.assertMagic: Strings do not match. expected: "${e}" got: "${i}"`)}else if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));if(i.some((s,a)=>s!=r[a]))throw new Error("DataReader.assertMagic: Buffers do not match.")}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));if(e.some((r,s)=>r!=i[s]))throw new Error("DataReader.assertMagic: Arrays do not match.")}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");const i=typeof e=="number"?this.readNumber(t):this.readBigNumber(t);if(i!=e)throw new Error(`DataReader.assertMagic: Magic number does not match. expected: ${Zr.hex(e,ia[t])} got: ${Zr.hex(i,ia[t])}`)}else throw new Error("DataReader.assertMagic: Invalid arguments.")}magic(e,t){if(typeof e=="string")return this.readString(e.length,"ascii")==e;if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));return i.every((s,a)=>s==r[a])}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));return e.every((r,s)=>r==i[s])}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");return(typeof e=="number"?this.readNumber(t):this.readBigNumber(t))==e}else throw new Error("DataReader.magic: Invalid arguments.")}};ne(yi,"BIG_ENDIAN",!1),ne(yi,"LITTLE_ENDIAN",!0);let Zt=yi;var Gn;(n=>{function e(l){return new Promise(u=>setTimeout(u,l))}n.wait=e;const t=` 
	\\=+-/*:[](){}`.split("").map(l=>l.charCodeAt(0)),i=8;function r(l){if(l.byteLength==0)throw new Error("isBinary was called with no data.");const u=new Zt(l);let f=[],d=0;for(;!u.eof;){const _=u.readNumber("Uint8");t.includes(_)?(d>0&&f.push(d),d=0):d++}return f.reduce((_,g)=>_+=g/f.length,0)>i}n.isBinary=r;function s(l){return l instanceof ArrayBuffer?l:l.buffer}n.getBuffer=s;function a(l,u){let f=new Array(l);for(let d=0;d<l;d++)f[d]=u(d);return f}n.initArray=a;let o=0;function c(){return o++}n.getID=c})(Gn||(Gn={}));function Lc(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t=n[2])||ye(e,"src",t),ye(e,"alt","Tab List Icon"),ye(e,"class","svelte-1txv76s")},m(i,r){Me(i,e,r)},p(i,r){r&4&&!Yt(e.src,t=i[2])&&ye(e,"src",t)},d(i){i&&ce(e)}}}function Ip(n){let e,t,i,r,s,a=n[2]&&Lc(n);return{c(){e=je("div"),a&&a.c(),t=dn(),i=Rn(n[1]),this.h()},l(o){e=Ke(o,"DIV",{class:!0});var c=ht(e);a&&a.l(c),t=fn(c),i=Cn(c,n[1]),c.forEach(ce),this.h()},h(){ye(e,"class","tab-list-item svelte-1txv76s"),cn(e,"selected",n[3])},m(o,c){Me(o,e,c),a&&a.m(e,null),St(e,t),St(e,i),r||(s=kn(e,"click",n[5]),r=!0)},p(o,[c]){o[2]?a?a.p(o,c):(a=Lc(o),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&2&&Bi(i,o[1]),c&8&&cn(e,"selected",o[3])},i:P,o:P,d(o){o&&ce(e),a&&a.d(),r=!1,s()}}}function Pp(n,e,t){let{id:i=Gn.getID()}=e,{name:r}=e,{icon:s=null}=e,{selected:a=!1}=e,{onSelect:o}=e;Vs(()=>{a&&o(i)});const c=()=>o(i);return n.$$set=l=>{"id"in l&&t(0,i=l.id),"name"in l&&t(1,r=l.name),"icon"in l&&t(2,s=l.icon),"selected"in l&&t(3,a=l.selected),"onSelect"in l&&t(4,o=l.onSelect)},[i,r,s,a,o,c]}class bl extends Ht{constructor(e){super(),Gt(this,e,Pp,Ip,Ot,{id:0,name:1,icon:2,selected:3,onSelect:4})}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),oi()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),oi()}get icon(){return this.$$.ctx[2]}set icon(e){this.$$set({icon:e}),oi()}get selected(){return this.$$.ctx[3]}set selected(e){this.$$set({selected:e}),oi()}get onSelect(){return this.$$.ctx[4]}set onSelect(e){this.$$set({onSelect:e}),oi()}}function kp(n){let e;return{c(){e=je("div"),this.h()},l(t){e=Ke(t,"DIV",{class:!0}),ht(e).forEach(ce),this.h()},h(){ye(e,"class","tab-content-item svelte-195j8un"),cn(e,"selected",n[1])},m(t,i){Me(t,e,i),n[3](e)},p(t,[i]){i&2&&cn(e,"selected",t[1])},i:P,o:P,d(t){t&&ce(e),n[3](null)}}}function Op(n,e,t){let{id:i}=e,{selected:r=!1}=e,{slot:s=void 0}=e;function a(o){Ts[o?"unshift":"push"](()=>{s=o,t(0,s)})}return n.$$set=o=>{"id"in o&&t(2,i=o.id),"selected"in o&&t(1,r=o.selected),"slot"in o&&t(0,s=o.slot)},[s,r,i,a]}class xl extends Ht{constructor(e){super(),Gt(this,e,Op,kp,Ot,{id:2,selected:1,slot:0})}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),oi()}get selected(){return this.$$.ctx[1]}set selected(e){this.$$set({selected:e}),oi()}get slot(){return this.$$.ctx[0]}set slot(e){this.$$set({slot:e}),oi()}}const yf=Np();function Fp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Sf(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(e=>{const t=n[e],i=typeof t;(i==="object"||i==="function")&&!Object.isFrozen(t)&&Sf(t)}),n}let Nc=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function Mf(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Mi(n,...e){const t=Object.create(null);for(const i in n)t[i]=n[i];return e.forEach(function(i){for(const r in i)t[r]=i[r]}),t}const Bp="</span>",Dc=n=>!!n.scope,zp=(n,{prefix:e})=>{if(n.startsWith("language:"))return n.replace("language:","language-");if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((i,r)=>`${i}${"_".repeat(r+1)}`)].join(" ")}return`${e}${n}`};class Hp{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Mf(e)}openNode(e){if(!Dc(e))return;const t=zp(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){Dc(e)&&(this.buffer+=Bp)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Uc=(n={})=>{const e={children:[]};return Object.assign(e,n),e};class ec{constructor(){this.rootNode=Uc(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Uc({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(i=>this._walk(e,i)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{ec._collapse(t)}))}}class Gp extends ec{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const i=e.root;t&&(i.scope=`language:${t}`),this.add(i)}toHTML(){return new Hp(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function As(n){return n?typeof n=="string"?n:n.source:null}function wf(n){return fr("(?=",n,")")}function Vp(n){return fr("(?:",n,")*")}function Wp(n){return fr("(?:",n,")?")}function fr(...n){return n.map(t=>As(t)).join("")}function $p(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function tc(...n){return"("+($p(n).capture?"":"?:")+n.map(i=>As(i)).join("|")+")"}function Tf(n){return new RegExp(n.toString()+"|").exec("").length-1}function Xp(n,e){const t=n&&n.exec(e);return t&&t.index===0}const Zp=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function nc(n,{joinWith:e}){let t=0;return n.map(i=>{t+=1;const r=t;let s=As(i),a="";for(;s.length>0;){const o=Zp.exec(s);if(!o){a+=s;break}a+=s.substring(0,o.index),s=s.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?a+="\\"+String(Number(o[1])+r):(a+=o[0],o[0]==="("&&t++)}return a}).map(i=>`(${i})`).join(e)}const qp=/\b\B/,Af="[a-zA-Z]\\w*",ic="[a-zA-Z_]\\w*",Rf="\\b\\d+(\\.\\d+)?",Cf="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Lf="\\b(0b[01]+)",Yp="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",jp=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=fr(e,/.*\b/,n.binary,/\b.*/)),Mi({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,i)=>{t.index!==0&&i.ignoreMatch()}},n)},Rs={begin:"\\\\[\\s\\S]",relevance:0},Kp={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Rs]},Jp={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Rs]},Qp={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ho=function(n,e,t={}){const i=Mi({scope:"comment",begin:n,end:e,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=tc("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:fr(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},em=ho("//","$"),tm=ho("/\\*","\\*/"),nm=ho("#","$"),im={scope:"number",begin:Rf,relevance:0},rm={scope:"number",begin:Cf,relevance:0},sm={scope:"number",begin:Lf,relevance:0},am={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Rs,{begin:/\[/,end:/\]/,relevance:0,contains:[Rs]}]}]},om={scope:"title",begin:Af,relevance:0},lm={scope:"title",begin:ic,relevance:0},cm={begin:"\\.\\s*"+ic,relevance:0},um=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var ra=Object.freeze({__proto__:null,MATCH_NOTHING_RE:qp,IDENT_RE:Af,UNDERSCORE_IDENT_RE:ic,NUMBER_RE:Rf,C_NUMBER_RE:Cf,BINARY_NUMBER_RE:Lf,RE_STARTERS_RE:Yp,SHEBANG:jp,BACKSLASH_ESCAPE:Rs,APOS_STRING_MODE:Kp,QUOTE_STRING_MODE:Jp,PHRASAL_WORDS_MODE:Qp,COMMENT:ho,C_LINE_COMMENT_MODE:em,C_BLOCK_COMMENT_MODE:tm,HASH_COMMENT_MODE:nm,NUMBER_MODE:im,C_NUMBER_MODE:rm,BINARY_NUMBER_MODE:sm,REGEXP_MODE:am,TITLE_MODE:om,UNDERSCORE_TITLE_MODE:lm,METHOD_GUARD:cm,END_SAME_AS_BEGIN:um});function dm(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function fm(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function hm(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=dm,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function pm(n,e){Array.isArray(n.illegal)&&(n.illegal=tc(...n.illegal))}function mm(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function _m(n,e){n.relevance===void 0&&(n.relevance=1)}const gm=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(i=>{delete n[i]}),n.keywords=t.keywords,n.begin=fr(t.beforeMatch,wf(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},vm=["of","and","for","in","not","or","if","then","parent","list","value"],bm="keyword";function Nf(n,e,t=bm){const i=Object.create(null);return typeof n=="string"?r(t,n.split(" ")):Array.isArray(n)?r(t,n):Object.keys(n).forEach(function(s){Object.assign(i,Nf(n[s],e,s))}),i;function r(s,a){e&&(a=a.map(o=>o.toLowerCase())),a.forEach(function(o){const c=o.split("|");i[c[0]]=[s,xm(c[0],c[1])]})}}function xm(n,e){return e?Number(e):Em(n)?0:1}function Em(n){return vm.includes(n.toLowerCase())}const Ic={},tr=n=>{console.error(n)},Pc=(n,...e)=>{console.log(`WARN: ${n}`,...e)},gr=(n,e)=>{Ic[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),Ic[`${n}/${e}`]=!0)},za=new Error;function Df(n,e,{key:t}){let i=0;const r=n[t],s={},a={};for(let o=1;o<=e.length;o++)a[o+i]=r[o],s[o+i]=!0,i+=Tf(e[o-1]);n[t]=a,n[t]._emit=s,n[t]._multi=!0}function ym(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw tr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),za;if(typeof n.beginScope!="object"||n.beginScope===null)throw tr("beginScope must be object"),za;Df(n,n.begin,{key:"beginScope"}),n.begin=nc(n.begin,{joinWith:""})}}function Sm(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw tr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),za;if(typeof n.endScope!="object"||n.endScope===null)throw tr("endScope must be object"),za;Df(n,n.end,{key:"endScope"}),n.end=nc(n.end,{joinWith:""})}}function Mm(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function wm(n){Mm(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),ym(n),Sm(n)}function Tm(n){function e(a,o){return new RegExp(As(a),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(o?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,o]),this.matchAt+=Tf(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(c=>c[1]);this.matcherRe=e(nc(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(o);if(!c)return null;const l=c.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const c=new t;return this.rules.slice(o).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[o]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,c){this.rules.push([o,c]),c.type==="begin"&&this.count++}exec(o){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(o);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(o)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function r(a){const o=new i;return a.contains.forEach(c=>o.addRule(c.begin,{rule:c,type:"begin"})),a.terminatorEnd&&o.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&o.addRule(a.illegal,{type:"illegal"}),o}function s(a,o){const c=a;if(a.isCompiled)return c;[fm,mm,wm,gm].forEach(u=>u(a,o)),n.compilerExtensions.forEach(u=>u(a,o)),a.__beforeBegin=null,[hm,pm,_m].forEach(u=>u(a,o)),a.isCompiled=!0;let l=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),l=a.keywords.$pattern,delete a.keywords.$pattern),l=l||/\w+/,a.keywords&&(a.keywords=Nf(a.keywords,n.case_insensitive)),c.keywordPatternRe=e(l,!0),o&&(a.begin||(a.begin=/\B|\b/),c.beginRe=e(c.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(c.endRe=e(c.end)),c.terminatorEnd=As(c.end)||"",a.endsWithParent&&o.terminatorEnd&&(c.terminatorEnd+=(a.end?"|":"")+o.terminatorEnd)),a.illegal&&(c.illegalRe=e(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(u){return Am(u==="self"?a:u)})),a.contains.forEach(function(u){s(u,c)}),a.starts&&s(a.starts,o),c.matcher=r(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Mi(n.classNameAliases||{}),s(n)}function Uf(n){return n?n.endsWithParent||Uf(n.starts):!1}function Am(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return Mi(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:Uf(n)?Mi(n,{starts:n.starts?Mi(n.starts):null}):Object.isFrozen(n)?Mi(n):n}var Rm="11.8.0";class Cm extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const Ao=Mf,kc=Mi,Oc=Symbol("nomatch"),Lm=7,If=function(n){const e=Object.create(null),t=Object.create(null),i=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Gp};function c(C){return o.noHighlightRe.test(C)}function l(C){let N=C.className+" ";N+=C.parentNode?C.parentNode.className:"";const W=o.languageDetectRe.exec(N);if(W){const Y=b(W[1]);return Y||(Pc(s.replace("{}",W[1])),Pc("Falling back to no-highlight mode for this block.",C)),Y?W[1]:"no-highlight"}return N.split(/\s+/).find(Y=>c(Y)||b(Y))}function u(C,N,W){let Y="",I="";typeof N=="object"?(Y=C,W=N.ignoreIllegals,I=N.language):(gr("10.7.0","highlight(lang, code, ...args) has been deprecated."),gr("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),I=C,Y=N),W===void 0&&(W=!0);const K={code:Y,language:I};D("before:highlight",K);const ae=K.result?K.result:f(K.language,K.code,W);return ae.code=K.code,D("after:highlight",ae),ae}function f(C,N,W,Y){const I=Object.create(null);function K(k,X){return k.keywords[X]}function ae(){if(!oe.keywords){et.addText(Fe);return}let k=0;oe.keywordPatternRe.lastIndex=0;let X=oe.keywordPatternRe.exec(Fe),ie="";for(;X;){ie+=Fe.substring(k,X.index);const te=we.case_insensitive?X[0].toLowerCase():X[0],V=K(oe,te);if(V){const[ve,Se]=V;if(et.addText(ie),ie="",I[te]=(I[te]||0)+1,I[te]<=Lm&&(T+=Se),ve.startsWith("_"))ie+=X[0];else{const Te=we.classNameAliases[ve]||ve;be(X[0],Te)}}else ie+=X[0];k=oe.keywordPatternRe.lastIndex,X=oe.keywordPatternRe.exec(Fe)}ie+=Fe.substring(k),et.addText(ie)}function fe(){if(Fe==="")return;let k=null;if(typeof oe.subLanguage=="string"){if(!e[oe.subLanguage]){et.addText(Fe);return}k=f(oe.subLanguage,Fe,!0,ct[oe.subLanguage]),ct[oe.subLanguage]=k._top}else k=h(Fe,oe.subLanguage.length?oe.subLanguage:null);oe.relevance>0&&(T+=k.relevance),et.__addSublanguage(k._emitter,k.language)}function ue(){oe.subLanguage!=null?fe():ae(),Fe=""}function be(k,X){k!==""&&(et.startScope(X),et.addText(k),et.endScope())}function Ie(k,X){let ie=1;const te=X.length-1;for(;ie<=te;){if(!k._emit[ie]){ie++;continue}const V=we.classNameAliases[k[ie]]||k[ie],ve=X[ie];V?be(ve,V):(Fe=ve,ae(),Fe=""),ie++}}function Le(k,X){return k.scope&&typeof k.scope=="string"&&et.openNode(we.classNameAliases[k.scope]||k.scope),k.beginScope&&(k.beginScope._wrap?(be(Fe,we.classNameAliases[k.beginScope._wrap]||k.beginScope._wrap),Fe=""):k.beginScope._multi&&(Ie(k.beginScope,X),Fe="")),oe=Object.create(k,{parent:{value:oe}}),oe}function rt(k,X,ie){let te=Xp(k.endRe,ie);if(te){if(k["on:end"]){const V=new Nc(k);k["on:end"](X,V),V.isMatchIgnored&&(te=!1)}if(te){for(;k.endsParent&&k.parent;)k=k.parent;return k}}if(k.endsWithParent)return rt(k.parent,X,ie)}function Ft(k){return oe.matcher.regexIndex===0?(Fe+=k[0],1):(re=!0,0)}function He(k){const X=k[0],ie=k.rule,te=new Nc(ie),V=[ie.__beforeBegin,ie["on:begin"]];for(const ve of V)if(ve&&(ve(k,te),te.isMatchIgnored))return Ft(X);return ie.skip?Fe+=X:(ie.excludeBegin&&(Fe+=X),ue(),!ie.returnBegin&&!ie.excludeBegin&&(Fe=X)),Le(ie,k),ie.returnBegin?0:X.length}function G(k){const X=k[0],ie=N.substring(k.index),te=rt(oe,k,ie);if(!te)return Oc;const V=oe;oe.endScope&&oe.endScope._wrap?(ue(),be(X,oe.endScope._wrap)):oe.endScope&&oe.endScope._multi?(ue(),Ie(oe.endScope,k)):V.skip?Fe+=X:(V.returnEnd||V.excludeEnd||(Fe+=X),ue(),V.excludeEnd&&(Fe=X));do oe.scope&&et.closeNode(),!oe.skip&&!oe.subLanguage&&(T+=oe.relevance),oe=oe.parent;while(oe!==te.parent);return te.starts&&Le(te.starts,k),V.returnEnd?0:X.length}function Nt(){const k=[];for(let X=oe;X!==we;X=X.parent)X.scope&&k.unshift(X.scope);k.forEach(X=>et.openNode(X))}let Ce={};function Oe(k,X){const ie=X&&X[0];if(Fe+=k,ie==null)return ue(),0;if(Ce.type==="begin"&&X.type==="end"&&Ce.index===X.index&&ie===""){if(Fe+=N.slice(X.index,X.index+1),!r){const te=new Error(`0 width match regex (${C})`);throw te.languageName=C,te.badRule=Ce.rule,te}return 1}if(Ce=X,X.type==="begin")return He(X);if(X.type==="illegal"&&!W){const te=new Error('Illegal lexeme "'+ie+'" for mode "'+(oe.scope||"<unnamed>")+'"');throw te.mode=oe,te}else if(X.type==="end"){const te=G(X);if(te!==Oc)return te}if(X.type==="illegal"&&ie==="")return 1;if($>1e5&&$>X.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Fe+=ie,ie.length}const we=b(C);if(!we)throw tr(s.replace("{}",C)),new Error('Unknown language: "'+C+'"');const pt=Tm(we);let $e="",oe=Y||pt;const ct={},et=new o.__emitter(o);Nt();let Fe="",T=0,x=0,$=0,re=!1;try{if(we.__emitTokens)we.__emitTokens(N,et);else{for(oe.matcher.considerAll();;){$++,re?re=!1:oe.matcher.considerAll(),oe.matcher.lastIndex=x;const k=oe.matcher.exec(N);if(!k)break;const X=N.substring(x,k.index),ie=Oe(X,k);x=k.index+ie}Oe(N.substring(x))}return et.finalize(),$e=et.toHTML(),{language:C,value:$e,relevance:T,illegal:!1,_emitter:et,_top:oe}}catch(k){if(k.message&&k.message.includes("Illegal"))return{language:C,value:Ao(N),illegal:!0,relevance:0,_illegalBy:{message:k.message,index:x,context:N.slice(x-100,x+100),mode:k.mode,resultSoFar:$e},_emitter:et};if(r)return{language:C,value:Ao(N),illegal:!1,relevance:0,errorRaised:k,_emitter:et,_top:oe};throw k}}function d(C){const N={value:Ao(C),illegal:!1,relevance:0,_top:a,_emitter:new o.__emitter(o)};return N._emitter.addText(C),N}function h(C,N){N=N||o.languages||Object.keys(e);const W=d(C),Y=N.filter(b).filter(O).map(ue=>f(ue,C,!1));Y.unshift(W);const I=Y.sort((ue,be)=>{if(ue.relevance!==be.relevance)return be.relevance-ue.relevance;if(ue.language&&be.language){if(b(ue.language).supersetOf===be.language)return 1;if(b(be.language).supersetOf===ue.language)return-1}return 0}),[K,ae]=I,fe=K;return fe.secondBest=ae,fe}function _(C,N,W){const Y=N&&t[N]||W;C.classList.add("hljs"),C.classList.add(`language-${Y}`)}function g(C){let N=null;const W=l(C);if(c(W))return;if(D("before:highlightElement",{el:C,language:W}),C.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),o.throwUnescapedHTML))throw new Cm("One of your code blocks includes unescaped HTML.",C.innerHTML);N=C;const Y=N.textContent,I=W?u(Y,{language:W,ignoreIllegals:!0}):h(Y);C.innerHTML=I.value,_(C,W,I.language),C.result={language:I.language,re:I.relevance,relevance:I.relevance},I.secondBest&&(C.secondBest={language:I.secondBest.language,relevance:I.secondBest.relevance}),D("after:highlightElement",{el:C,result:I,text:Y})}function m(C){o=kc(o,C)}const p=()=>{E(),gr("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function y(){E(),gr("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let v=!1;function E(){if(document.readyState==="loading"){v=!0;return}document.querySelectorAll(o.cssSelector).forEach(g)}function w(){v&&E()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",w,!1);function R(C,N){let W=null;try{W=N(n)}catch(Y){if(tr("Language definition for '{}' could not be registered.".replace("{}",C)),r)tr(Y);else throw Y;W=a}W.name||(W.name=C),e[C]=W,W.rawDefinition=N.bind(null,n),W.aliases&&S(W.aliases,{languageName:C})}function A(C){delete e[C];for(const N of Object.keys(t))t[N]===C&&delete t[N]}function z(){return Object.keys(e)}function b(C){return C=(C||"").toLowerCase(),e[C]||e[t[C]]}function S(C,{languageName:N}){typeof C=="string"&&(C=[C]),C.forEach(W=>{t[W.toLowerCase()]=N})}function O(C){const N=b(C);return N&&!N.disableAutodetect}function ee(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=N=>{C["before:highlightBlock"](Object.assign({block:N.el},N))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=N=>{C["after:highlightBlock"](Object.assign({block:N.el},N))})}function B(C){ee(C),i.push(C)}function U(C){const N=i.indexOf(C);N!==-1&&i.splice(N,1)}function D(C,N){const W=C;i.forEach(function(Y){Y[W]&&Y[W](N)})}function Z(C){return gr("10.7.0","highlightBlock will be removed entirely in v12.0"),gr("10.7.0","Please use highlightElement now."),g(C)}Object.assign(n,{highlight:u,highlightAuto:h,highlightAll:E,highlightElement:g,highlightBlock:Z,configure:m,initHighlighting:p,initHighlightingOnLoad:y,registerLanguage:R,unregisterLanguage:A,listLanguages:z,getLanguage:b,registerAliases:S,autoDetection:O,inherit:kc,addPlugin:B,removePlugin:U}),n.debugMode=function(){r=!1},n.safeMode=function(){r=!0},n.versionString=Rm,n.regex={concat:fr,lookahead:wf,either:tc,optional:Wp,anyNumberOfTimes:Vp};for(const C in ra)typeof ra[C]=="object"&&Sf(ra[C]);return Object.assign(n,ra),n},qr=If({});qr.newInstance=()=>If({});var Nm=qr;qr.HighlightJS=qr;qr.default=qr;const Fc=Fp(Nm);function Dm(n){let e;return{c(){e=Rn(n[2])},l(t){e=Cn(t,n[2])},m(t,i){Me(t,e,i)},p(t,i){i&4&&Bi(e,t[2])},d(t){t&&ce(e)}}}function Um(n){let e,t;return{c(){e=new Sp(!1),t=ut(),this.h()},l(i){e=Mp(i,!1),t=ut(),this.h()},h(){e.a=t},m(i,r){e.m(n[1],i,r),Me(i,t,r)},p(i,r){r&2&&e.p(i[1])},d(i){i&&(ce(t),e.d())}}}function Im(n){let e,t;function i(c,l){return c[1]?Um:Dm}let r=i(n),s=r(n),a=[{"data-language":n[3]},n[4]],o={};for(let c=0;c<a.length;c+=1)o=Xr(o,a[c]);return{c(){e=je("pre"),t=je("code"),s.c(),this.h()},l(c){e=Ke(c,"PRE",{"data-language":!0});var l=ht(e);t=Ke(l,"CODE",{});var u=ht(t);s.l(u),u.forEach(ce),l.forEach(ce),this.h()},h(){cn(t,"hljs",!0),Rc(e,o),cn(e,"langtag",n[0]),cn(e,"svelte-11sh29b",!0)},m(c,l){Me(c,e,l),St(e,t),s.m(t,null)},p(c,[l]){r===(r=i(c))&&s?s.p(c,l):(s.d(1),s=r(c),s&&(s.c(),s.m(t,null))),Rc(e,o=Ef(a,[l&8&&{"data-language":c[3]},l&16&&c[4]])),cn(e,"langtag",c[0]),cn(e,"svelte-11sh29b",!0)},i:P,o:P,d(c){c&&ce(e),s.d()}}}function Pm(n,e,t){const i=["langtag","highlighted","code","languageName"];let r=Ba(e,i),{langtag:s=!1}=e,{highlighted:a}=e,{code:o}=e,{languageName:c="plaintext"}=e;return n.$$set=l=>{e=Xr(Xr({},e),gf(l)),t(4,r=Ba(e,i)),"langtag"in l&&t(0,s=l.langtag),"highlighted"in l&&t(1,a=l.highlighted),"code"in l&&t(2,o=l.code),"languageName"in l&&t(3,c=l.languageName)},[s,a,o,c,r]}class km extends Ht{constructor(e){super(),Gt(this,e,Pm,Im,Ot,{langtag:0,highlighted:1,code:2,languageName:3})}}const Om=km,Fm=n=>({highlighted:n&8}),Bc=n=>({highlighted:n[3]});function Bm(n){let e,t;const i=[n[4],{languageName:n[0].name},{langtag:n[2]},{highlighted:n[3]},{code:n[1]}];let r={};for(let s=0;s<i.length;s+=1)r=Xr(r,i[s]);return e=new Om({props:r}),{c(){$n(e.$$.fragment)},l(s){Xn(e.$$.fragment,s)},m(s,a){Zn(e,s,a),t=!0},p(s,a){const o=a&31?Ef(i,[a&16&&Dp(s[4]),a&1&&{languageName:s[0].name},a&4&&{langtag:s[2]},a&8&&{highlighted:s[3]},a&2&&{code:s[1]}]):{};e.$set(o)},i(s){t||(Xe(e.$$.fragment,s),t=!0)},o(s){it(e.$$.fragment,s),t=!1},d(s){qn(e,s)}}}function zm(n){let e;const t=n[6].default,i=wp(t,n,n[5],Bc),r=i||Bm(n);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,a){r&&r.m(s,a),e=!0},p(s,[a]){i?i.p&&(!e||a&40)&&Tp(i,t,s,s[5],e?Rp(t,s[5],a,Fm):Ap(s[5]),Bc):r&&r.p&&(!e||a&31)&&r.p(s,e?a:-1)},i(s){e||(Xe(r,s),e=!0)},o(s){it(r,s),e=!1},d(s){r&&r.d(s)}}}function Hm(n,e,t){const i=["language","code","langtag"];let r=Ba(e,i),{$$slots:s={},$$scope:a}=e,{language:o}=e,{code:c}=e,{langtag:l=!1}=e;const u=vf();let f="";return Cp(()=>{f&&u("highlight",{highlighted:f})}),n.$$set=d=>{e=Xr(Xr({},e),gf(d)),t(4,r=Ba(e,i)),"language"in d&&t(0,o=d.language),"code"in d&&t(1,c=d.code),"langtag"in d&&t(2,l=d.langtag),"$$scope"in d&&t(5,a=d.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&(Fc.registerLanguage(o.name,o.register),t(3,f=Fc.highlight(c,{language:o.name}).value))},[o,c,l,f,r,a,s]}class Gm extends Ht{constructor(e){super(),Gt(this,e,Hm,zm,Ot,{language:0,code:1,langtag:2})}}const po=Gm;function Vm(n){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Wm={name:"plaintext",register:Vm},$m=Wm;function Xm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Zm(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:jm,then:Ym,catch:qm,value:2,blocks:[,,,]};return Et(t=n[1].text(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].text())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function qm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Ym(n){let e,t;return e=new po({props:{language:$m,code:n[2]}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=i[2]),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function jm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Km(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Jm(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Km,then:Zm,catch:Xm,value:1,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function Qm(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Pf extends Ht{constructor(e){super(),Gt(this,e,Qm,Jm,Ot,{entry:0})}}const e_={namespace:"text",priority:0,isValid:async n=>{var e;return n.type==lt.File&&["txt","gitignore","npmrc","LICENSE","cfg","properties"].includes(((e=n.name.split(".").pop())==null?void 0:e.toLowerCase())??"")},createViewer:async(n,e)=>{if(n.type==lt.File)new Pf({target:e,props:{entry:n}});else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-text.svg"};function t_(n){return{c:P,l:P,m:P,p:P,d:P}}function n_(n){let e,t,i;return{c(){e=je("img"),this.h()},l(r){e=Ke(r,"IMG",{src:!0,alt:!0}),this.h()},h(){Yt(e.src,t=URL.createObjectURL(n[1]))||ye(e,"src",t),ye(e,"alt",i=n[0].name)},m(r,s){Me(r,e,s)},p(r,s){s&1&&!Yt(e.src,t=URL.createObjectURL(r[1]))&&ye(e,"src",t),s&1&&i!==(i=r[0].name)&&ye(e,"alt",i)},d(r){r&&ce(e)}}}function i_(n){return{c:P,l:P,m:P,p:P,d:P}}function r_(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:i_,then:n_,catch:t_,value:1};return Et(t=n[0].blob(),i),{c(){e=ut(),i.block.c()},l(r){e=ut(),i.block.l(r)},m(r,s){Me(r,e,s),i.block.m(r,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e},p(r,[s]){n=r,i.ctx=n,s&1&&t!==(t=n[0].blob())&&Et(t,i)||Ln(i,n,s)},i:P,o:P,d(r){r&&ce(e),i.block.d(r),i.token=null,i=null}}}function s_(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}let a_=class extends Ht{constructor(e){super(),Gt(this,e,s_,r_,Ot,{entry:0})}};const o_={namespace:"image",priority:1,isValid:async n=>n.type==lt.File&&["png","jpg","jpeg","jfif","tiff","webp","gif","svg","bmp"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==lt.File)new a_({target:e,props:{entry:n}});else throw new Error("Tried to create image viewer with directory.")},getIcon:async n=>n.type==lt.File?URL.createObjectURL(await n.blob()):null};function l_(n){return{c:P,l:P,m:P,p:P,d:P}}function c_(n){let e,t;return{c(){e=je("video"),this.h()},l(i){e=Ke(i,"VIDEO",{src:!0}),ht(e).forEach(ce),this.h()},h(){Yt(e.src,t=URL.createObjectURL(n[1]))||ye(e,"src",t),e.controls=!0},m(i,r){Me(i,e,r)},p(i,r){r&1&&!Yt(e.src,t=URL.createObjectURL(i[1]))&&ye(e,"src",t)},d(i){i&&ce(e)}}}function u_(n){return{c:P,l:P,m:P,p:P,d:P}}function d_(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:u_,then:c_,catch:l_,value:1};return Et(t=n[0].blob(),i),{c(){e=ut(),i.block.c()},l(r){e=ut(),i.block.l(r)},m(r,s){Me(r,e,s),i.block.m(r,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e},p(r,[s]){n=r,i.ctx=n,s&1&&t!==(t=n[0].blob())&&Et(t,i)||Ln(i,n,s)},i:P,o:P,d(r){r&&ce(e),i.block.d(r),i.token=null,i=null}}}function f_(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class h_ extends Ht{constructor(e){super(),Gt(this,e,f_,d_,Ot,{entry:0})}}const p_={namespace:"video",priority:1,isValid:async n=>n.type==lt.File&&["mp4","mov","webm"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==lt.File)new h_({target:e,props:{entry:n}});else throw new Error("Tried to create video viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-play.svg"};function m_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function __(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:b_,then:v_,catch:g_,value:3,blocks:[,,,]};return Et(t=n[2].text(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[2].text())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function g_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function v_(n){let e,t;return e=new po({props:{language:n[1],code:n[3]}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&2&&(s.language=i[1]),r&1&&(s.code=i[3]),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function b_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function x_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function E_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:x_,then:__,catch:m_,value:2,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function y_(n,e,t){let{entry:i}=e,{language:r}=e;return n.$$set=s=>{"entry"in s&&t(0,i=s.entry),"language"in s&&t(1,r=s.language)},[i,r]}class S_ extends Ht{constructor(e){super(),Gt(this,e,y_,E_,Ot,{entry:0,language:1})}}const zc="[A-Za-z$_][0-9A-Za-z$_]*",M_=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],w_=["true","false","null","undefined","NaN","Infinity"],kf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Of=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ff=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],T_=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],A_=[].concat(Ff,kf,Of);function R_(n){const e=n.regex,t=(N,{after:W})=>{const Y="</"+N[0].slice(1);return N.input.indexOf(Y,W)!==-1},i=zc,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(N,W)=>{const Y=N[0].length+N.index,I=N.input[Y];if(I==="<"||I===","){W.ignoreMatch();return}I===">"&&(t(N,{after:Y})||W.ignoreMatch());let K;const ae=N.input.substring(Y);if(K=ae.match(/^\s*=/)){W.ignoreMatch();return}if((K=ae.match(/^\s+extends\s+/))&&K.index===0){W.ignoreMatch();return}}},o={$pattern:zc,keyword:M_,literal:w_,built_in:A_,"variable.language":T_},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,{match:/\$\d+/},f];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const E=[].concat(y,d.contains),w=E.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(E)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...kf,...Of]}},b={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(N){return e.concat("(?!",N.join("|"),")")}const B={match:e.concat(/\b/,ee([...Ff,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),b,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,y,{match:/\$\d+/},f,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},B,O,A,D,{match:/\$[(.]/}]}}const C_={name:"javascript",register:R_},L_=C_,Ha="[A-Za-z$_][0-9A-Za-z$_]*",Bf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],zf=["true","false","null","undefined","NaN","Infinity"],Hf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Gf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Vf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Wf=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],$f=[].concat(Vf,Hf,Gf);function N_(n){const e=n.regex,t=(N,{after:W})=>{const Y="</"+N[0].slice(1);return N.input.indexOf(Y,W)!==-1},i=Ha,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(N,W)=>{const Y=N[0].length+N.index,I=N.input[Y];if(I==="<"||I===","){W.ignoreMatch();return}I===">"&&(t(N,{after:Y})||W.ignoreMatch());let K;const ae=N.input.substring(Y);if(K=ae.match(/^\s*=/)){W.ignoreMatch();return}if((K=ae.match(/^\s+extends\s+/))&&K.index===0){W.ignoreMatch();return}}},o={$pattern:Ha,keyword:Bf,literal:zf,built_in:$f,"variable.language":Wf},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,{match:/\$\d+/},f];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const E=[].concat(y,d.contains),w=E.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(E)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Hf,...Gf]}},b={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(N){return e.concat("(?!",N.join("|"),")")}const B={match:e.concat(/\b/,ee([...Vf,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},U={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),b,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,y,{match:/\$\d+/},f,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},U,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},B,O,A,D,{match:/\$[(.]/}]}}function D_(n){const e=N_(n),t=Ha,i=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:i},contains:[e.exports.CLASS_REFERENCE]},a={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},o=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],c={$pattern:Ha,keyword:Bf.concat(o),literal:zf,built_in:$f.concat(i),"variable.language":Wf},l={className:"meta",begin:"@"+t},u=(d,h,_)=>{const g=d.contains.findIndex(m=>m.label===h);if(g===-1)throw new Error("can not find mode to replace");d.contains.splice(g,1,_)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(l),e.contains=e.contains.concat([l,r,s]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",a);const f=e.contains.find(d=>d.label==="func.def");return f.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}const U_={name:"typescript",register:D_},I_=U_;function P_(n){const e={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],r={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[e,t,n.QUOTE_STRING_MODE,r,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const k_={name:"json",register:P_},O_=k_;function F_(n){const e=n.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=n.inherit(s,{begin:/\(/,end:/\)/}),o=n.inherit(n.APOS_STRING_MODE,{className:"string"}),c=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,o,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,a,c,o]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const B_={name:"xml",register:F_},rc=B_;function z_(n){const e=n.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},r={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:e.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},f=n.inherit(l,{contains:[]}),d=n.inherit(u,{contains:[]});l.contains.push(d),u.contains.push(f);let h=[t,c];return[l,u,f,d].forEach(m=>{m.contains=m.contains.concat(h)}),h=h.concat(l,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:h},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:h}]}]},t,s,l,u,{className:"quote",begin:"^>\\s+",contains:h,end:"$"},r,i,c,a]}}const H_={name:"markdown",register:z_},Xf=H_;function G_(n){const e=n.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},f={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c,u,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,l]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",h=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,_=`\\b|${i.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${_})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`},{begin:`\\b(${d})[jJ](?=${_})`}]},m={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",c,g,f,n.HASH_COMMENT_MODE]}]};return l.contains=[f,g,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[c,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},f,m,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,f]}]}}const V_={name:"python",register:G_},sc=V_;function W_(n){const e=n.regex,t={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:e.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,t,r]};r.contains.push(a);const o={className:"",begin:/\\"/},c={className:"string",begin:/'/,end:/'/},l={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,t]},u=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],f=n.SHEBANG({binary:`(${u.join("|")})`,relevance:10}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},h=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],_=["true","false"],g={match:/(\/[a-z._-]+)+/},m=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],p=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],y=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],v=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:h,literal:_,built_in:[...m,...p,"set","shopt",...y,...v]},contains:[f,n.SHEBANG(),d,l,n.HASH_COMMENT_MODE,s,g,a,o,c,t]}}const $_={name:"bash",register:W_},X_=$_;function Z_(n){const e=n.regex,t=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",s="<[^<>]+>",a="(?!struct)("+i+"|"+e.optional(r)+"[a-zA-Z_]\\w*"+e.optional(s)+")",o={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",l={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+c+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},f={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(l,{className:"string"}),{className:"string",begin:/<.*?>/},t,n.C_BLOCK_COMMENT_MODE]},d={className:"title",begin:e.optional(r)+n.IDENT_RE,relevance:0},h=e.optional(r)+n.IDENT_RE+"\\s*\\(",_=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],g=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],m=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],p=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],E={type:g,keyword:_,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:m},w={className:"function.dispatch",relevance:0,keywords:{_hint:p},begin:e.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,e.lookahead(/(<[^<>]+>|)\s*\(/))},R=[w,f,o,t,n.C_BLOCK_COMMENT_MODE,u,l],A={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:E,contains:R.concat([{begin:/\(/,end:/\)/,keywords:E,contains:R.concat(["self"]),relevance:0}]),relevance:0},z={className:"function",begin:"("+a+"[\\*&\\s]+)+"+h,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:E,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:E,relevance:0},{begin:h,returnBegin:!0,contains:[d],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[l,u]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[t,n.C_BLOCK_COMMENT_MODE,l,u,o,{begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:["self",t,n.C_BLOCK_COMMENT_MODE,l,u,o]}]},o,t,n.C_BLOCK_COMMENT_MODE,f]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:E,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(A,z,w,R,[f,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:E,contains:["self",o]},{begin:n.IDENT_RE+"::",keywords:E},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}const q_={name:"cpp",register:Z_},hr=q_;let Rt={};Rt.js=L_;Rt.ts=I_;Rt.json=O_;Rt.xml=rc;Rt.html=rc;Rt.svelte=rc;Rt.md=Xf;Rt.MD=Xf;Rt.py=sc;Rt.sh=X_;Rt.c=hr;Rt.cpp=hr;Rt.h=hr;Rt.hpp=hr;Rt.glsl=hr;Rt.vsh=hr;Rt.fsh=hr;const Y_={namespace:"code",priority:1,isValid:async n=>n.type==lt.File&&Rt[n.name.split(".").pop()??""]!=null,createViewer:async(n,e)=>{if(n.type==lt.File){const t=Rt[n.name.split(".").pop()??""];if(t==null)throw new Error("Catastrophic error that should never happen, language does not exist but validation passed?");new S_({target:e,props:{entry:n,language:t}})}else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-code.svg"};class ac extends Zt{constructor(t){super();ne(this,"blob");ne(this,"blobPointer",0);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}async load(t,i=this.blobPointer){this.loadData(await this.blob.slice(i,i+t).arrayBuffer()),this.blobPointer=i+t}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const j_=4,Hc=0,Gc=1,K_=2;function ss(n){let e=n.length;for(;--e>=0;)n[e]=0}const J_=0,Zf=1,Q_=2,eg=3,tg=258,oc=29,Ws=256,Cs=Ws+1+oc,Gr=30,lc=19,qf=2*Cs+1,Ki=15,Ro=16,ng=7,cc=256,Yf=16,jf=17,Kf=18,El=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Ia=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),ig=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Jf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rg=512,si=new Array((Cs+2)*2);ss(si);const xs=new Array(Gr*2);ss(xs);const Ls=new Array(rg);ss(Ls);const Ns=new Array(tg-eg+1);ss(Ns);const uc=new Array(oc);ss(uc);const Ga=new Array(Gr);ss(Ga);function Co(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Qf,eh,th;function Lo(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const nh=n=>n<256?Ls[n]:Ls[256+(n>>>7)],Ds=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},Qt=(n,e,t)=>{n.bi_valid>Ro-t?(n.bi_buf|=e<<n.bi_valid&65535,Ds(n,n.bi_buf),n.bi_buf=e>>Ro-n.bi_valid,n.bi_valid+=t-Ro):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Pn=(n,e,t)=>{Qt(n,t[e*2],t[e*2+1])},ih=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},sg=n=>{n.bi_valid===16?(Ds(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},ag=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,f,d,h,_,g=0;for(d=0;d<=Ki;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<qf;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,g++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,h=0,u>=o&&(h=a[u-o]),_=t[u*2],n.opt_len+=_*(d+h),s&&(n.static_len+=_*(r[u*2+1]+h)));if(g!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,g-=2}while(g>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)f=n.heap[--l],!(f>i)&&(t[f*2+1]!==d&&(n.opt_len+=(d-t[f*2+1])*t[f*2],t[f*2+1]=d),u--)}},rh=(n,e,t)=>{const i=new Array(Ki+1);let r=0,s,a;for(s=1;s<=Ki;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=ih(i[o]++,o))}},og=()=>{let n,e,t,i,r;const s=new Array(Ki+1);for(t=0,i=0;i<oc-1;i++)for(uc[i]=t,n=0;n<1<<El[i];n++)Ns[t++]=i;for(Ns[t-1]=i,r=0,i=0;i<16;i++)for(Ga[i]=r,n=0;n<1<<Ia[i];n++)Ls[r++]=i;for(r>>=7;i<Gr;i++)for(Ga[i]=r<<7,n=0;n<1<<Ia[i]-7;n++)Ls[256+r++]=i;for(e=0;e<=Ki;e++)s[e]=0;for(n=0;n<=143;)si[n*2+1]=8,n++,s[8]++;for(;n<=255;)si[n*2+1]=9,n++,s[9]++;for(;n<=279;)si[n*2+1]=7,n++,s[7]++;for(;n<=287;)si[n*2+1]=8,n++,s[8]++;for(rh(si,Cs+1,s),n=0;n<Gr;n++)xs[n*2+1]=5,xs[n*2]=ih(n,5);Qf=new Co(si,El,Ws+1,Cs,Ki),eh=new Co(xs,Ia,0,Gr,Ki),th=new Co(new Array(0),ig,0,lc,ng)},sh=n=>{let e;for(e=0;e<Cs;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Gr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<lc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[cc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},ah=n=>{n.bi_valid>8?Ds(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Vc=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},No=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Vc(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Vc(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Wc=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Pn(n,r,e):(a=Ns[r],Pn(n,a+Ws+1,e),o=El[a],o!==0&&(r-=uc[a],Qt(n,r,o)),i--,a=nh(i),Pn(n,a,t),o=Ia[a],o!==0&&(i-=Ga[a],Qt(n,i,o)));while(s<n.sym_next);Pn(n,cc,e)},yl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,c=-1,l;for(n.heap_len=0,n.heap_max=qf,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,a=n.heap_len>>1;a>=1;a--)No(n,t,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],No(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[l*2]=t[a*2]+t[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=l,n.heap[1]=l++,No(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],ag(n,e),rh(t,c,n.bl_count)},$c=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Yf*2]++):o<=10?n.bl_tree[jf*2]++:n.bl_tree[Kf*2]++,o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4))},Xc=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<c&&s===a)){if(o<l)do Pn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Pn(n,s,n.bl_tree),o--),Pn(n,Yf,n.bl_tree),Qt(n,o-3,2)):o<=10?(Pn(n,jf,n.bl_tree),Qt(n,o-3,3)):(Pn(n,Kf,n.bl_tree),Qt(n,o-11,7));o=0,r=s,a===0?(c=138,l=3):s===a?(c=6,l=3):(c=7,l=4)}},lg=n=>{let e;for($c(n,n.dyn_ltree,n.l_desc.max_code),$c(n,n.dyn_dtree,n.d_desc.max_code),yl(n,n.bl_desc),e=lc-1;e>=3&&n.bl_tree[Jf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},cg=(n,e,t,i)=>{let r;for(Qt(n,e-257,5),Qt(n,t-1,5),Qt(n,i-4,4),r=0;r<i;r++)Qt(n,n.bl_tree[Jf[r]*2+1],3);Xc(n,n.dyn_ltree,e-1),Xc(n,n.dyn_dtree,t-1)},ug=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Hc;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Gc;for(t=32;t<Ws;t++)if(n.dyn_ltree[t*2]!==0)return Gc;return Hc};let Zc=!1;const dg=n=>{Zc||(og(),Zc=!0),n.l_desc=new Lo(n.dyn_ltree,Qf),n.d_desc=new Lo(n.dyn_dtree,eh),n.bl_desc=new Lo(n.bl_tree,th),n.bi_buf=0,n.bi_valid=0,sh(n)},oh=(n,e,t,i)=>{Qt(n,(J_<<1)+(i?1:0),3),ah(n),Ds(n,t),Ds(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},fg=n=>{Qt(n,Zf<<1,3),Pn(n,cc,si),sg(n)},hg=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===K_&&(n.strm.data_type=ug(n)),yl(n,n.l_desc),yl(n,n.d_desc),a=lg(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?oh(n,e,t,i):n.strategy===j_||s===r?(Qt(n,(Zf<<1)+(i?1:0),3),Wc(n,si,xs)):(Qt(n,(Q_<<1)+(i?1:0),3),cg(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Wc(n,n.dyn_ltree,n.dyn_dtree)),sh(n),i&&ah(n)},pg=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ns[t]+Ws+1)*2]++,n.dyn_dtree[nh(e)*2]++),n.sym_next===n.sym_end);var mg=dg,_g=oh,gg=hg,vg=pg,bg=fg,xg={_tr_init:mg,_tr_stored_block:_g,_tr_flush_block:gg,_tr_tally:vg,_tr_align:bg};const Eg=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Us=Eg;const yg=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},Sg=new Uint32Array(yg()),Mg=(n,e,t,i)=>{const r=Sg,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Ut=Mg,ar={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},pr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:wg,_tr_stored_block:Sl,_tr_flush_block:Tg,_tr_tally:Ri,_tr_align:Ag}=xg,{Z_NO_FLUSH:Ci,Z_PARTIAL_FLUSH:Rg,Z_FULL_FLUSH:Cg,Z_FINISH:bn,Z_BLOCK:qc,Z_OK:It,Z_STREAM_END:Yc,Z_STREAM_ERROR:On,Z_DATA_ERROR:Lg,Z_BUF_ERROR:Do,Z_DEFAULT_COMPRESSION:Ng,Z_FILTERED:Dg,Z_HUFFMAN_ONLY:sa,Z_RLE:Ug,Z_FIXED:Ig,Z_DEFAULT_STRATEGY:Pg,Z_UNKNOWN:kg,Z_DEFLATED:mo}=pr,Og=9,Fg=15,Bg=8,zg=29,Hg=256,Ml=Hg+1+zg,Gg=30,Vg=19,Wg=2*Ml+1,$g=15,nt=3,wi=258,Fn=wi+nt+1,Xg=32,Yr=42,dc=57,wl=69,Tl=73,Al=91,Rl=103,Ji=113,_s=666,qt=1,as=2,or=3,os=4,Zg=3,Qi=(n,e)=>(n.msg=ar[e],e),jc=n=>n*2-(n>4?9:0),Si=n=>{let e=n.length;for(;--e>=0;)n[e]=0},qg=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let Yg=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Li=Yg;const ln=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},un=(n,e)=>{Tg(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,ln(n.strm)},at=(n,e)=>{n.pending_buf[n.pending++]=e},us=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Cl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Us(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Ut(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},lh=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Fn?n.strstart-(n.w_size-Fn):0,l=n.window,u=n.w_mask,f=n.prev,d=n.strstart+wi;let h=l[i+a-1],_=l[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+a]!==_||l[r+a-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(s=wi-(d-i),i=d-wi,s>a){if(n.match_start=e,a=s,s>=o)break;h=l[i+a-1],_=l[i+a]}}while((e=f[e&u])>c&&--t!==0);return a<=n.lookahead?a:n.lookahead},jr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Fn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),qg(n),i+=e),n.strm.avail_in===0)break;if(t=Cl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=nt)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Li(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Li(n,n.ins_h,n.window[r+nt-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<nt)););}while(n.lookahead<Fn&&n.strm.avail_in!==0)},ch=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==bn||e===Ci||i!==r+n.strm.avail_in)))break;a=e===bn&&i===r+n.strm.avail_in?1:0,Sl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,ln(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Cl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?os:e!==Ci&&e!==bn&&n.strm.avail_in===0&&n.strstart===n.block_start?as:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Cl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===bn)&&e!==Ci&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===bn&&n.strm.avail_in===0&&i===r?1:0,Sl(n,n.block_start,i,a),n.block_start+=i,ln(n.strm)),a?or:qt)},Uo=(n,e)=>{let t,i;for(;;){if(n.lookahead<Fn){if(jr(n),n.lookahead<Fn&&e===Ci)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=nt&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+nt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Fn&&(n.match_length=lh(n,t)),n.match_length>=nt)if(i=Ri(n,n.strstart-n.match_start,n.match_length-nt),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=nt){n.match_length--;do n.strstart++,n.ins_h=Li(n,n.ins_h,n.window[n.strstart+nt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Li(n,n.ins_h,n.window[n.strstart+1]);else i=Ri(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(un(n,!1),n.strm.avail_out===0))return qt}return n.insert=n.strstart<nt-1?n.strstart:nt-1,e===bn?(un(n,!0),n.strm.avail_out===0?or:os):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?qt:as},vr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Fn){if(jr(n),n.lookahead<Fn&&e===Ci)return qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=nt&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+nt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=nt-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Fn&&(n.match_length=lh(n,t),n.match_length<=5&&(n.strategy===Dg||n.match_length===nt&&n.strstart-n.match_start>4096)&&(n.match_length=nt-1)),n.prev_length>=nt&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-nt,i=Ri(n,n.strstart-1-n.prev_match,n.prev_length-nt),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Li(n,n.ins_h,n.window[n.strstart+nt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=nt-1,n.strstart++,i&&(un(n,!1),n.strm.avail_out===0))return qt}else if(n.match_available){if(i=Ri(n,0,n.window[n.strstart-1]),i&&un(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return qt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ri(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<nt-1?n.strstart:nt-1,e===bn?(un(n,!0),n.strm.avail_out===0?or:os):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?qt:as},jg=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=wi){if(jr(n),n.lookahead<=wi&&e===Ci)return qt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=nt&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+wi;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=wi-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=nt?(t=Ri(n,1,n.match_length-nt),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ri(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(un(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===bn?(un(n,!0),n.strm.avail_out===0?or:os):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?qt:as},Kg=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(jr(n),n.lookahead===0)){if(e===Ci)return qt;break}if(n.match_length=0,t=Ri(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(un(n,!1),n.strm.avail_out===0))return qt}return n.insert=0,e===bn?(un(n,!0),n.strm.avail_out===0?or:os):n.sym_next&&(un(n,!1),n.strm.avail_out===0)?qt:as};function Dn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const gs=[new Dn(0,0,0,0,ch),new Dn(4,4,8,4,Uo),new Dn(4,5,16,8,Uo),new Dn(4,6,32,32,Uo),new Dn(4,4,16,16,vr),new Dn(8,16,32,32,vr),new Dn(8,16,128,128,vr),new Dn(8,32,128,256,vr),new Dn(32,128,258,1024,vr),new Dn(32,258,258,4096,vr)],Jg=n=>{n.window_size=2*n.w_size,Si(n.head),n.max_lazy_match=gs[n.level].max_lazy,n.good_match=gs[n.level].good_length,n.nice_match=gs[n.level].nice_length,n.max_chain_length=gs[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=nt-1,n.match_available=0,n.ins_h=0};function Qg(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(Wg*2),this.dyn_dtree=new Uint16Array((2*Gg+1)*2),this.bl_tree=new Uint16Array((2*Vg+1)*2),Si(this.dyn_ltree),Si(this.dyn_dtree),Si(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array($g+1),this.heap=new Uint16Array(2*Ml+1),Si(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ml+1),Si(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const $s=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Yr&&e.status!==dc&&e.status!==wl&&e.status!==Tl&&e.status!==Al&&e.status!==Rl&&e.status!==Ji&&e.status!==_s?1:0},uh=n=>{if($s(n))return Qi(n,On);n.total_in=n.total_out=0,n.data_type=kg;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?dc:e.wrap?Yr:Ji,n.adler=e.wrap===2?0:1,e.last_flush=-2,wg(e),It},dh=n=>{const e=uh(n);return e===It&&Jg(n.state),e},ev=(n,e)=>$s(n)||n.state.wrap!==2?On:(n.state.gzhead=e,It),fh=(n,e,t,i,r,s)=>{if(!n)return On;let a=1;if(e===Ng&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>Og||t!==mo||i<8||i>15||e<0||e>9||s<0||s>Ig||i===8&&a!==1)return Qi(n,On);i===8&&(i=9);const o=new Qg;return n.state=o,o.strm=n,o.status=Yr,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+nt-1)/nt),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,dh(n)},tv=(n,e)=>fh(n,e,mo,Fg,Bg,Pg),nv=(n,e)=>{if($s(n)||e>qc||e<0)return n?Qi(n,On):On;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===_s&&e!==bn)return Qi(n,n.avail_out===0?Do:On);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(ln(n),n.avail_out===0)return t.last_flush=-1,It}else if(n.avail_in===0&&jc(e)<=jc(i)&&e!==bn)return Qi(n,Do);if(t.status===_s&&n.avail_in!==0)return Qi(n,Do);if(t.status===Yr&&t.wrap===0&&(t.status=Ji),t.status===Yr){let r=mo+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=sa||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=Xg),r+=31-r%31,us(t,r),t.strstart!==0&&(us(t,n.adler>>>16),us(t,n.adler&65535)),n.adler=1,t.status=Ji,ln(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===dc){if(n.adler=0,at(t,31),at(t,139),at(t,8),t.gzhead)at(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),at(t,t.gzhead.time&255),at(t,t.gzhead.time>>8&255),at(t,t.gzhead.time>>16&255),at(t,t.gzhead.time>>24&255),at(t,t.level===9?2:t.strategy>=sa||t.level<2?4:0),at(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(at(t,t.gzhead.extra.length&255),at(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Ut(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=wl;else if(at(t,0),at(t,0),at(t,0),at(t,0),at(t,0),at(t,t.level===9?2:t.strategy>=sa||t.level<2?4:0),at(t,Zg),t.status=Ji,ln(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===wl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,ln(n),t.pending!==0)return t.last_flush=-1,It;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Tl}if(t.status===Tl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r)),ln(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,at(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Al}if(t.status===Al){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r)),ln(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,at(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Ut(n.adler,t.pending_buf,t.pending-r,r))}t.status=Rl}if(t.status===Rl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(ln(n),t.pending!==0))return t.last_flush=-1,It;at(t,n.adler&255),at(t,n.adler>>8&255),n.adler=0}if(t.status=Ji,ln(n),t.pending!==0)return t.last_flush=-1,It}if(n.avail_in!==0||t.lookahead!==0||e!==Ci&&t.status!==_s){let r=t.level===0?ch(t,e):t.strategy===sa?Kg(t,e):t.strategy===Ug?jg(t,e):gs[t.level].func(t,e);if((r===or||r===os)&&(t.status=_s),r===qt||r===or)return n.avail_out===0&&(t.last_flush=-1),It;if(r===as&&(e===Rg?Ag(t):e!==qc&&(Sl(t,0,0,!1),e===Cg&&(Si(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),ln(n),n.avail_out===0))return t.last_flush=-1,It}return e!==bn?It:t.wrap<=0?Yc:(t.wrap===2?(at(t,n.adler&255),at(t,n.adler>>8&255),at(t,n.adler>>16&255),at(t,n.adler>>24&255),at(t,n.total_in&255),at(t,n.total_in>>8&255),at(t,n.total_in>>16&255),at(t,n.total_in>>24&255)):(us(t,n.adler>>>16),us(t,n.adler&65535)),ln(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?It:Yc)},iv=n=>{if($s(n))return On;const e=n.state.status;return n.state=null,e===Ji?Qi(n,Lg):It},rv=(n,e)=>{let t=e.length;if($s(n))return On;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Yr||i.lookahead)return On;if(r===1&&(n.adler=Us(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Si(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,jr(i);i.lookahead>=nt;){let c=i.strstart,l=i.lookahead-(nt-1);do i.ins_h=Li(i,i.ins_h,i.window[c+nt-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=nt-1,jr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=nt-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,It};var sv=tv,av=fh,ov=dh,lv=uh,cv=ev,uv=nv,dv=iv,fv=rv,hv="pako deflate (from Nodeca project)",Es={deflateInit:sv,deflateInit2:av,deflateReset:ov,deflateResetKeep:lv,deflateSetHeader:cv,deflate:uv,deflateEnd:dv,deflateSetDictionary:fv,deflateInfo:hv};const pv=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var mv=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)pv(t,i)&&(n[i]=t[i])}}return n},_v=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},_o={assign:mv,flattenChunks:_v};let hh=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{hh=!1}const Is=new Uint8Array(256);for(let n=0;n<256;n++)Is[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Is[254]=Is[254]=1;var gv=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const vv=(n,e)=>{if(e<65534&&n.subarray&&hh)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var bv=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=Is[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return vv(s,r)},xv=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Is[n[t]]>e?t:e},Ps={string2buf:gv,buf2string:bv,utf8border:xv};function Ev(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var ph=Ev;const mh=Object.prototype.toString,{Z_NO_FLUSH:yv,Z_SYNC_FLUSH:Sv,Z_FULL_FLUSH:Mv,Z_FINISH:wv,Z_OK:Va,Z_STREAM_END:Tv,Z_DEFAULT_COMPRESSION:Av,Z_DEFAULT_STRATEGY:Rv,Z_DEFLATED:Cv}=pr;function Xs(n){this.options=_o.assign({level:Av,method:Cv,chunkSize:16384,windowBits:15,memLevel:8,strategy:Rv},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ph,this.strm.avail_out=0;let t=Es.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Va)throw new Error(ar[t]);if(e.header&&Es.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Ps.string2buf(e.dictionary):mh.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Es.deflateSetDictionary(this.strm,i),t!==Va)throw new Error(ar[t]);this._dict_set=!0}}Xs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?wv:yv,typeof n=="string"?t.input=Ps.string2buf(n):mh.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===Sv||s===Mv)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Es.deflate(t,s),r===Tv)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Es.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Va;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Xs.prototype.onData=function(n){this.chunks.push(n)};Xs.prototype.onEnd=function(n){n===Va&&(this.result=_o.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function fc(n,e){const t=new Xs(e);if(t.push(n,!0),t.err)throw t.msg||ar[t.err];return t.result}function Lv(n,e){return e=e||{},e.raw=!0,fc(n,e)}function Nv(n,e){return e=e||{},e.gzip=!0,fc(n,e)}var Dv=Xs,Uv=fc,Iv=Lv,Pv=Nv,kv=pr,Ov={Deflate:Dv,deflate:Uv,deflateRaw:Iv,gzip:Pv,constants:kv};const aa=16209,Fv=16191;var Bv=function(e,t){let i,r,s,a,o,c,l,u,f,d,h,_,g,m,p,y,v,E,w,R,A,z,b,S;const O=e.state;i=e.next_in,b=e.input,r=i+(e.avail_in-5),s=e.next_out,S=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),c=O.dmax,l=O.wsize,u=O.whave,f=O.wnext,d=O.window,h=O.hold,_=O.bits,g=O.lencode,m=O.distcode,p=(1<<O.lenbits)-1,y=(1<<O.distbits)-1;e:do{_<15&&(h+=b[i++]<<_,_+=8,h+=b[i++]<<_,_+=8),v=g[h&p];t:for(;;){if(E=v>>>24,h>>>=E,_-=E,E=v>>>16&255,E===0)S[s++]=v&65535;else if(E&16){w=v&65535,E&=15,E&&(_<E&&(h+=b[i++]<<_,_+=8),w+=h&(1<<E)-1,h>>>=E,_-=E),_<15&&(h+=b[i++]<<_,_+=8,h+=b[i++]<<_,_+=8),v=m[h&y];n:for(;;){if(E=v>>>24,h>>>=E,_-=E,E=v>>>16&255,E&16){if(R=v&65535,E&=15,_<E&&(h+=b[i++]<<_,_+=8,_<E&&(h+=b[i++]<<_,_+=8)),R+=h&(1<<E)-1,R>c){e.msg="invalid distance too far back",O.mode=aa;break e}if(h>>>=E,_-=E,E=s-a,R>E){if(E=R-E,E>u&&O.sane){e.msg="invalid distance too far back",O.mode=aa;break e}if(A=0,z=d,f===0){if(A+=l-E,E<w){w-=E;do S[s++]=d[A++];while(--E);A=s-R,z=S}}else if(f<E){if(A+=l+f-E,E-=f,E<w){w-=E;do S[s++]=d[A++];while(--E);if(A=0,f<w){E=f,w-=E;do S[s++]=d[A++];while(--E);A=s-R,z=S}}}else if(A+=f-E,E<w){w-=E;do S[s++]=d[A++];while(--E);A=s-R,z=S}for(;w>2;)S[s++]=z[A++],S[s++]=z[A++],S[s++]=z[A++],w-=3;w&&(S[s++]=z[A++],w>1&&(S[s++]=z[A++]))}else{A=s-R;do S[s++]=S[A++],S[s++]=S[A++],S[s++]=S[A++],w-=3;while(w>2);w&&(S[s++]=S[A++],w>1&&(S[s++]=S[A++]))}}else if(E&64){e.msg="invalid distance code",O.mode=aa;break e}else{v=m[(v&65535)+(h&(1<<E)-1)];continue n}break}}else if(E&64)if(E&32){O.mode=Fv;break e}else{e.msg="invalid literal/length code",O.mode=aa;break e}else{v=g[(v&65535)+(h&(1<<E)-1)];continue t}break}}while(i<r&&s<o);w=_>>3,i-=w,_-=w<<3,h&=(1<<_)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),O.hold=h,O.bits=_};const br=15,Kc=852,Jc=592,Qc=0,Io=1,eu=2,zv=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Hv=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Gv=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Vv=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Wv=(n,e,t,i,r,s,a,o)=>{const c=o.bits;let l=0,u=0,f=0,d=0,h=0,_=0,g=0,m=0,p=0,y=0,v,E,w,R,A,z=null,b;const S=new Uint16Array(br+1),O=new Uint16Array(br+1);let ee=null,B,U,D;for(l=0;l<=br;l++)S[l]=0;for(u=0;u<i;u++)S[e[t+u]]++;for(h=c,d=br;d>=1&&S[d]===0;d--);if(h>d&&(h=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&S[f]===0;f++);for(h<f&&(h=f),m=1,l=1;l<=br;l++)if(m<<=1,m-=S[l],m<0)return-1;if(m>0&&(n===Qc||d!==1))return-1;for(O[1]=0,l=1;l<br;l++)O[l+1]=O[l]+S[l];for(u=0;u<i;u++)e[t+u]!==0&&(a[O[e[t+u]]++]=u);if(n===Qc?(z=ee=a,b=20):n===Io?(z=zv,ee=Hv,b=257):(z=Gv,ee=Vv,b=0),y=0,u=0,l=f,A=s,_=h,g=0,w=-1,p=1<<h,R=p-1,n===Io&&p>Kc||n===eu&&p>Jc)return 1;for(;;){B=l-g,a[u]+1<b?(U=0,D=a[u]):a[u]>=b?(U=ee[a[u]-b],D=z[a[u]-b]):(U=32+64,D=0),v=1<<l-g,E=1<<_,f=E;do E-=v,r[A+(y>>g)+E]=B<<24|U<<16|D|0;while(E!==0);for(v=1<<l-1;y&v;)v>>=1;if(v!==0?(y&=v-1,y+=v):y=0,u++,--S[l]===0){if(l===d)break;l=e[t+a[u]]}if(l>h&&(y&R)!==w){for(g===0&&(g=h),A+=f,_=l-g,m=1<<_;_+g<d&&(m-=S[_+g],!(m<=0));)_++,m<<=1;if(p+=1<<_,n===Io&&p>Kc||n===eu&&p>Jc)return 1;w=y&R,r[w]=h<<24|_<<16|A-s|0}}return y!==0&&(r[A+y]=l-g<<24|64<<16|0),o.bits=h,0};var ys=Wv;const $v=0,_h=1,gh=2,{Z_FINISH:tu,Z_BLOCK:Xv,Z_TREES:oa,Z_OK:lr,Z_STREAM_END:Zv,Z_NEED_DICT:qv,Z_STREAM_ERROR:xn,Z_DATA_ERROR:vh,Z_MEM_ERROR:bh,Z_BUF_ERROR:Yv,Z_DEFLATED:nu}=pr,go=16180,iu=16181,ru=16182,su=16183,au=16184,ou=16185,lu=16186,cu=16187,uu=16188,du=16189,Wa=16190,Kn=16191,Po=16192,fu=16193,ko=16194,hu=16195,pu=16196,mu=16197,_u=16198,la=16199,ca=16200,gu=16201,vu=16202,bu=16203,xu=16204,Eu=16205,Oo=16206,yu=16207,Su=16208,gt=16209,xh=16210,Eh=16211,jv=852,Kv=592,Jv=15,Qv=Jv,Mu=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function e0(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const mr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<go||e.mode>Eh?1:0},yh=n=>{if(mr(n))return xn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=go,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(jv),e.distcode=e.distdyn=new Int32Array(Kv),e.sane=1,e.back=-1,lr},Sh=n=>{if(mr(n))return xn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,yh(n)},Mh=(n,e)=>{let t;if(mr(n))return xn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?xn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,Sh(n))},wh=(n,e)=>{if(!n)return xn;const t=new e0;n.state=t,t.strm=n,t.window=null,t.mode=go;const i=Mh(n,e);return i!==lr&&(n.state=null),i},t0=n=>wh(n,Qv);let wu=!0,Fo,Bo;const n0=n=>{if(wu){Fo=new Int32Array(512),Bo=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(ys(_h,n.lens,0,288,Fo,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;ys(gh,n.lens,0,32,Bo,0,n.work,{bits:5}),wu=!1}n.lencode=Fo,n.lenbits=9,n.distcode=Bo,n.distbits=5},Th=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},i0=(n,e)=>{let t,i,r,s,a,o,c,l,u,f,d,h,_,g,m=0,p,y,v,E,w,R,A,z;const b=new Uint8Array(4);let S,O;const ee=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(mr(n)||!n.output||!n.input&&n.avail_in!==0)return xn;t=n.state,t.mode===Kn&&(t.mode=Po),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,f=o,d=c,z=lr;e:for(;;)switch(t.mode){case go:if(t.wrap===0){t.mode=Po;break}for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,b[0]=l&255,b[1]=l>>>8&255,t.check=Ut(t.check,b,2,0),l=0,u=0,t.mode=iu;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=gt;break}if((l&15)!==nu){n.msg="unknown compression method",t.mode=gt;break}if(l>>>=4,u-=4,A=(l&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){n.msg="invalid window size",t.mode=gt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?du:Kn,l=0,u=0;break;case iu:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==nu){n.msg="unknown compression method",t.mode=gt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=gt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Ut(t.check,b,2,0)),l=0,u=0,t.mode=ru;case ru:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,b[2]=l>>>16&255,b[3]=l>>>24&255,t.check=Ut(t.check,b,4,0)),l=0,u=0,t.mode=su;case su:for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Ut(t.check,b,2,0)),l=0,u=0,t.mode=au;case au:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(b[0]=l&255,b[1]=l>>>8&255,t.check=Ut(t.check,b,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=ou;case ou:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+h),A)),t.flags&512&&t.wrap&4&&(t.check=Ut(t.check,i,h,s)),o-=h,s+=h,t.length-=h),t.length))break e;t.length=0,t.mode=lu;case lu:if(t.flags&2048){if(o===0)break e;h=0;do A=i[s+h++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Ut(t.check,i,h,s)),o-=h,s+=h,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=cu;case cu:if(t.flags&4096){if(o===0)break e;h=0;do A=i[s+h++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Ut(t.check,i,h,s)),o-=h,s+=h,A)break e}else t.head&&(t.head.comment=null);t.mode=uu;case uu:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=gt;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Kn;break;case du:for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}n.adler=t.check=Mu(l),l=0,u=0,t.mode=Wa;case Wa:if(t.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,qv;n.adler=t.check=1,t.mode=Kn;case Kn:if(e===Xv||e===oa)break e;case Po:if(t.last){l>>>=u&7,u-=u&7,t.mode=Oo;break}for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=fu;break;case 1:if(n0(t),t.mode=la,e===oa){l>>>=2,u-=2;break e}break;case 2:t.mode=pu;break;case 3:n.msg="invalid block type",t.mode=gt}l>>>=2,u-=2;break;case fu:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=gt;break}if(t.length=l&65535,l=0,u=0,t.mode=ko,e===oa)break e;case ko:t.mode=hu;case hu:if(h=t.length,h){if(h>o&&(h=o),h>c&&(h=c),h===0)break e;r.set(i.subarray(s,s+h),a),o-=h,s+=h,c-=h,a+=h,t.length-=h;break}t.mode=Kn;break;case pu:for(;u<14;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=gt;break}t.have=0,t.mode=mu;case mu:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.lens[ee[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[ee[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,S={bits:t.lenbits},z=ys($v,t.lens,0,19,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid code lengths set",t.mode=gt;break}t.have=0,t.mode=_u;case _u:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(v<16)l>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(O=p+2;u<O;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=gt;break}A=t.lens[t.have-1],h=3+(l&3),l>>>=2,u-=2}else if(v===17){for(O=p+3;u<O;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,A=0,h=3+(l&7),l>>>=3,u-=3}else{for(O=p+7;u<O;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=p,u-=p,A=0,h=11+(l&127),l>>>=7,u-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=gt;break}for(;h--;)t.lens[t.have++]=A}}if(t.mode===gt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=gt;break}if(t.lenbits=9,S={bits:t.lenbits},z=ys(_h,t.lens,0,t.nlen,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid literal/lengths set",t.mode=gt;break}if(t.distbits=6,t.distcode=t.distdyn,S={bits:t.distbits},z=ys(gh,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,S),t.distbits=S.bits,z){n.msg="invalid distances set",t.mode=gt;break}if(t.mode=la,e===oa)break e;case la:t.mode=ca;case ca:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,Bv(n,d),a=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===Kn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(y&&!(y&240)){for(E=p,w=y,R=v;m=t.lencode[R+((l&(1<<E+w)-1)>>E)],p=m>>>24,y=m>>>16&255,v=m&65535,!(E+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=E,u-=E,t.back+=E}if(l>>>=p,u-=p,t.back+=p,t.length=v,y===0){t.mode=Eu;break}if(y&32){t.back=-1,t.mode=Kn;break}if(y&64){n.msg="invalid literal/length code",t.mode=gt;break}t.extra=y&15,t.mode=gu;case gu:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=vu;case vu:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(!(y&240)){for(E=p,w=y,R=v;m=t.distcode[R+((l&(1<<E+w)-1)>>E)],p=m>>>24,y=m>>>16&255,v=m&65535,!(E+p<=u);){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}l>>>=E,u-=E,t.back+=E}if(l>>>=p,u-=p,t.back+=p,y&64){n.msg="invalid distance code",t.mode=gt;break}t.offset=v,t.extra=y&15,t.mode=bu;case bu:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=gt;break}t.mode=xu;case xu:if(c===0)break e;if(h=d-c,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=gt;break}h>t.wnext?(h-=t.wnext,_=t.wsize-h):_=t.wnext-h,h>t.length&&(h=t.length),g=t.window}else g=r,_=a-t.offset,h=t.length;h>c&&(h=c),c-=h,t.length-=h;do r[a++]=g[_++];while(--h);t.length===0&&(t.mode=ca);break;case Eu:if(c===0)break e;r[a++]=t.length,c--,t.mode=ca;break;case Oo:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[s++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Ut(t.check,r,d,a-d):Us(t.check,r,d,a-d)),d=c,t.wrap&4&&(t.flags?l:Mu(l))!==t.check){n.msg="incorrect data check",t.mode=gt;break}l=0,u=0}t.mode=yu;case yu:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=gt;break}l=0,u=0}t.mode=Su;case Su:z=Zv;break e;case gt:z=vh;break e;case xh:return bh;case Eh:default:return xn}return n.next_out=a,n.avail_out=c,n.next_in=s,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<gt&&(t.mode<Oo||e!==tu))&&Th(n,n.output,n.next_out,d-n.avail_out),f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Ut(t.check,r,d,n.next_out-d):Us(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Kn?128:0)+(t.mode===la||t.mode===ko?256:0),(f===0&&d===0||e===tu)&&z===lr&&(z=Yv),z},r0=n=>{if(mr(n))return xn;let e=n.state;return e.window&&(e.window=null),n.state=null,lr},s0=(n,e)=>{if(mr(n))return xn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,lr):xn},a0=(n,e)=>{const t=e.length;let i,r,s;return mr(n)||(i=n.state,i.wrap!==0&&i.mode!==Wa)?xn:i.mode===Wa&&(r=1,r=Us(r,e,t,0),r!==i.check)?vh:(s=Th(n,e,t,t),s?(i.mode=xh,bh):(i.havedict=1,lr))};var o0=Sh,l0=Mh,c0=yh,u0=t0,d0=wh,f0=i0,h0=r0,p0=s0,m0=a0,_0="pako inflate (from Nodeca project)",ai={inflateReset:o0,inflateReset2:l0,inflateResetKeep:c0,inflateInit:u0,inflateInit2:d0,inflate:f0,inflateEnd:h0,inflateGetHeader:p0,inflateSetDictionary:m0,inflateInfo:_0};function g0(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var v0=g0;const Ah=Object.prototype.toString,{Z_NO_FLUSH:b0,Z_FINISH:x0,Z_OK:ks,Z_STREAM_END:zo,Z_NEED_DICT:Ho,Z_STREAM_ERROR:E0,Z_DATA_ERROR:Tu,Z_MEM_ERROR:y0}=pr;function Zs(n){this.options=_o.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ph,this.strm.avail_out=0;let t=ai.inflateInit2(this.strm,e.windowBits);if(t!==ks)throw new Error(ar[t]);if(this.header=new v0,ai.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Ps.string2buf(e.dictionary):Ah.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=ai.inflateSetDictionary(this.strm,e.dictionary),t!==ks)))throw new Error(ar[t])}Zs.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?x0:b0,Ah.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=ai.inflate(t,a),s===Ho&&r&&(s=ai.inflateSetDictionary(t,r),s===ks?s=ai.inflate(t,a):s===Tu&&(s=Ho));t.avail_in>0&&s===zo&&t.state.wrap>0&&n[t.next_in]!==0;)ai.inflateReset(t),s=ai.inflate(t,a);switch(s){case E0:case Tu:case Ho:case y0:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===zo))if(this.options.to==="string"){let c=Ps.utf8border(t.output,t.next_out),l=t.next_out-c,u=Ps.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===ks&&o===0)){if(s===zo)return s=ai.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Zs.prototype.onData=function(n){this.chunks.push(n)};Zs.prototype.onEnd=function(n){n===ks&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=_o.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function hc(n,e){const t=new Zs(e);if(t.push(n),t.err)throw t.msg||ar[t.err];return t.result}function S0(n,e){return e=e||{},e.raw=!0,hc(n,e)}var M0=Zs,w0=hc,T0=S0,A0=hc,R0=pr,C0={Inflate:M0,inflate:w0,inflateRaw:T0,ungzip:A0,constants:R0};const{Deflate:L0,deflate:N0,deflateRaw:D0,gzip:U0}=Ov,{Inflate:I0,inflate:P0,inflateRaw:k0,ungzip:O0}=C0;var F0=L0,B0=N0,z0=D0,H0=U0,G0=I0,V0=P0,Rh=k0,W0=O0,$0=pr,Os={Deflate:F0,deflate:B0,deflateRaw:z0,gzip:H0,Inflate:G0,inflate:V0,inflateRaw:Rh,ungzip:W0,constants:$0};class X0{constructor(e){ne(this,"data");ne(this,"pos");this.data=new Uint8Array(Gn.getBuffer(e)),this.pos=0}readByte(){return this.data[this.pos++]}}class Z0{constructor(e,t){ne(this,"windowBuffer");ne(this,"pos",0);ne(this,"streamPos",0);ne(this,"outputPos",0);this.windowSize=e,this.outputBuffer=t,this.windowBuffer=new Uint8Array(this.windowSize)}flush(){let e=this.pos-this.streamPos;e!==0&&(this.outputBuffer.set(this.windowBuffer.subarray(0,e),this.outputPos),this.outputPos+=e,this.pos>=this.windowSize&&(this.pos=0),this.streamPos=this.pos)}copyBlock(e,t){let i=this.pos-e-1;for(i<0&&(i+=this.windowSize);t--;)i>=this.windowSize&&(i=0),this.windowBuffer[this.pos++]=this.windowBuffer[i++],this.pos>=this.windowSize&&this.flush()}putByte(e){this.windowBuffer[this.pos++]=e,this.pos>=this.windowSize&&this.flush()}getByte(e){let t=this.pos-e-1;return t<0&&(t+=this.windowSize),this.windowBuffer[t]}}class q0{constructor(e){ne(this,"code",0);ne(this,"range",-1);this.stream=e;for(let t=0;t<5;t++)this.code=this.code<<8|this.stream.readByte()}decodeDirectBits(e){var t=0,i;for(let r=0;r<e;r++)this.range>>>=1,i=this.code-this.range>>>31,this.code-=this.range&i-1,t=t<<1|1-i,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8);return t}decodeBit(e,t){var i=e[t],r=(this.range>>>11)*i;return(this.code^2147483648)<(r^2147483648)?(this.range=r,e[t]+=2048-i>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),0):(this.range-=r,this.code-=r,e[t]-=i>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),1)}}function Un(n){return Gn.initArray(n,()=>1024)}class Ss{constructor(e){ne(this,"models");this.numBitLevels=e,this.models=Un(1<<this.numBitLevels)}decode(e){for(var t=1,i=this.numBitLevels;i--;)t=t<<1|e.decodeBit(this.models,t);return t-(1<<this.numBitLevels)}reverseDecode(e){for(var t=1,i=0,r=0,s;r<this.numBitLevels;++r)s=e.decodeBit(this.models,t),t=t<<1|s,i|=s<<r;return i}}function Y0(n,e,t,i){for(var r=1,s=0,a=0,o;a<i;++a)o=t.decodeBit(n,e+r),r=r<<1|o,s|=o<<a;return s}class Au{constructor(e){ne(this,"choice",Un(2));ne(this,"lowCoder");ne(this,"midCoder");ne(this,"highCoder",new Ss(8));this.numPosStates=e,this.lowCoder=Gn.initArray(this.numPosStates,()=>new Ss(3)),this.midCoder=Gn.initArray(this.numPosStates,()=>new Ss(3))}decode(e,t){return e.decodeBit(this.choice,0)===0?this.lowCoder[t].decode(e):e.decodeBit(this.choice,1)===0?8+this.midCoder[t].decode(e):16+this.highCoder.decode(e)}}class j0{constructor(){ne(this,"decoders",Un(768))}decodeNormal(e){let t=1;do t=t<<1|e.decodeBit(this.decoders,t);while(t<256);return t&255}decodeWithMatchByte(e,t){let i=1,r,s;do if(r=t>>7&1,t<<=1,s=e.decodeBit(this.decoders,(1+r<<8)+i),i=i<<1|s,r!==s){for(;i<256;)i=i<<1|e.decodeBit(this.decoders,i);break}while(i<256);return i&255}}class K0{constructor(e,t){ne(this,"posMask",0);ne(this,"coders");this.numPosBits=e,this.numPrevBits=t,this.posMask=(1<<this.numPosBits)-1;const i=1<<this.numPrevBits+this.numPosBits;this.coders=Gn.initArray(i,()=>new j0)}getDecoder(e,t){return this.coders[((e&this.posMask)<<this.numPrevBits)+((t&255)>>>8-this.numPrevBits)]}}class J0{constructor(e){ne(this,"isMatchDecoders",Un(192));ne(this,"isRep0LongDecoders",Un(192));ne(this,"isRepDecoders",Un(12));ne(this,"isRepG0Decoders",Un(12));ne(this,"isRepG1Decoders",Un(12));ne(this,"isRepG2Decoders",Un(12));ne(this,"posDecoders",Un(114));ne(this,"posSlotDecoder",Gn.initArray(4,()=>new Ss(6)));ne(this,"posAlignDecoder",new Ss(4));ne(this,"lenDecoder");ne(this,"repLenDecoder");ne(this,"literalDecoder");ne(this,"dictionarySize",-1);ne(this,"dictionarySizeCheck",-1);ne(this,"posStateMask",0);if(this.dictionarySize=e.dictionarySize,this.dictionarySize==0)throw new Error("LZMA decoder initialized with invalid dictionary size.");this.dictionarySizeCheck=Math.max(this.dictionarySize,1);const t=e.lc,i=e.lp,r=e.pb,s=1<<r;if(!(t<=8&&i<=4&&r<=4))throw new Error("LZMA decoder initialized with invalid properties.");this.literalDecoder=new K0(i,t),this.lenDecoder=new Au(s),this.repLenDecoder=new Au(s),this.posStateMask=s-1}decodeBody(e,t,i){let r=0,s=0,a=0,o=0,c=0,l=0,u=0,f,d,h,_,g,m;const p=new q0(e);if(t.byteLength<i)throw new Error("LZMA decoder read body with invalid size.");const y=new Z0(Math.max(this.dictionarySizeCheck,4096),t);for(;i<0||l<i;)if(f=l&this.posStateMask,p.decodeBit(this.isMatchDecoders,(r<<4)+f)===0)d=this.literalDecoder.getDecoder(l++,u),r>=7?u=d.decodeWithMatchByte(p,y.getByte(s)):u=d.decodeNormal(p),y.putByte(u),r=r<4?0:r-(r<10?3:6);else{if(p.decodeBit(this.isRepDecoders,r)===1)h=0,p.decodeBit(this.isRepG0Decoders,r)===0?p.decodeBit(this.isRep0LongDecoders,(r<<4)+f)===0&&(r=r<7?9:11,h=1):(p.decodeBit(this.isRepG1Decoders,r)===0?_=a:(p.decodeBit(this.isRepG2Decoders,r)===0?_=o:(_=c,c=o),o=a),a=s,s=_),h===0&&(h=2+this.repLenDecoder.decode(p,f),r=r<7?8:11);else if(c=o,o=a,a=s,h=2+this.lenDecoder.decode(p,f),r=r<7?7:10,g=this.posSlotDecoder[h<=5?h-2:3].decode(p),g>=4){if(m=(g>>1)-1,s=(2|g&1)<<m,g<14)s+=Y0(this.posDecoders,s-g-1,p,m);else if(s+=p.decodeDirectBits(m-4)<<4,s+=this.posAlignDecoder.reverseDecode(p),s<0){if(s===-1)break;return!1}}else s=g;if(s>=l||s>=this.dictionarySizeCheck)return!1;y.copyBlock(s,h),l+=h,u=y.getByte(0)}return y.flush(),!0}}function Q0(n){const e=new DataView(Gn.getBuffer(n));let t=e.getUint8(0);const i=t%9;t=~~(t/9);const r=t%5,s=~~(t/5),a=e.getUint32(1,!0);return{lc:i,lp:r,pb:s,dictionarySize:a}}function eb(n,e,t){const i=new X0(n),r=new Uint8Array(t);if(!new J0(e).decodeBody(i,r,t))throw new Error("LZMA failed decompressing.");return r.buffer}var Ch=(n=>(n[n.none=0]="none",n[n.shrunk=1]="shrunk",n[n.reduced_1=2]="reduced_1",n[n.reduced_2=3]="reduced_2",n[n.reduced_3=4]="reduced_3",n[n.reduced_4=5]="reduced_4",n[n.imploded=6]="imploded",n[n.deflated=8]="deflated",n[n.enhanced_deflated=9]="enhanced_deflated",n[n.pkware_dcl_imploded=10]="pkware_dcl_imploded",n[n.bzip2=12]="bzip2",n[n.lzma=14]="lzma",n[n.ibm_terse=18]="ibm_terse",n[n.ibm_lz77_z=19]="ibm_lz77_z",n[n.zstandard=93]="zstandard",n[n.mp3=94]="mp3",n[n.xz=95]="xz",n[n.jpeg=96]="jpeg",n[n.wavpack=97]="wavpack",n[n.ppmd=98]="ppmd",n[n.aex_encryption_marker=99]="aex_encryption_marker",n))(Ch||{});class Ru{constructor(e,t,i,r=null){ne(this,"viewer",null);ne(this,"type",lt.File);ne(this,"name");ne(this,"parent");ne(this,"zip");ne(this,"options");ne(this,"loadedBlob",null);this.zip=e,this.options=t,this.name=i,this.parent=r}async blob(){if(this.loadedBlob!=null)return this.loadedBlob;let e,t,i,r;if(this.options.type=="fileheader")e=this.options.compressionMethod,t=this.options.offset,i=this.options.compressedSize,r=this.options.uncompressedSize;else if(this.options.type=="centralfileheader"){const a=new ac(this.zip);await a.load(30,this.options.offsetToLocalHeader),a.assertMagic("PK"),a.assertMagic(1027,"Uint16"),a.readNumber("Uint16"),a.readNumber("Uint16"),e=a.readNumber("Uint16"),a.readNumber("Uint32"),a.readNumber("Uint32"),i=a.readNumber("Uint32"),r=a.readNumber("Uint32");const o=a.readNumber("Uint16"),c=a.readNumber("Uint16");await a.load(o+c),a.readString(o,"utf-8"),a.readBuffer(c),t=a.blobPointer}else throw new Error("Zip file invalid options.");e!=0&&console.debug(`Decompressing file ${this.name} with ${Ch[e]??Zr.hex(e,2)} compression method`);const s=this.zip.slice(t,t+i);switch(e){case 0:{this.loadedBlob=s;break}case 8:{const a=await s.arrayBuffer(),o=Rh(a);this.loadedBlob=new Blob([o]);break}case 14:{const a=await s.arrayBuffer(),o=new Zt(a);o.readNumber("Uint8"),o.readNumber("Uint8");const c=o.readNumber("Uint16"),l=o.readBuffer(c),u=eb(o.readBuffer(o.dataLeft),Q0(l),r);this.loadedBlob=new Blob([u]);break}default:throw new Error("Unknown zip file compression method.")}if(this.loadedBlob==null)throw new Error("Could not decompress zip file.");return this.loadedBlob}async buffer(){return await(await this.blob()).arrayBuffer()}}async function tb(n){const i=[{start:Math.max(0,n.size-128),end:n.size},{start:Math.max(0,n.size-65558),end:n.size}],r=19280|1541<<16;for(const s of i){const a=n.slice(s.start,s.end),o=new DataView(await a.arrayBuffer());for(let c=o.byteLength-4;c>0;c--)if(o.getUint32(c,!0)==r)return n.size-(s.end-s.start)+c}return-1}async function nb(n){const e=await n.blob(),t=new ac(e),i=new tn.fsDirectory_Container(n.name,n.parent),r=await tb(await n.blob());if(r==-1)for(console.warn("Reading ZIP file without central directory.");!t.blobEof;){await t.load(4),t.assertMagic("PK");const s=t.readNumber("Uint16");switch(s){case 513:{await t.load(42),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32"),t.readNumber("Uint32"),t.readNumber("Uint32");const a=t.readNumber("Uint16"),o=t.readNumber("Uint16"),c=t.readNumber("Uint16");t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32"),await t.load(a+o+c),t.readString(a,"utf-8"),t.readBuffer(o),t.readString(c,"utf-8");break}case 1027:{await t.load(26),t.readNumber("Uint16"),t.readNumber("Uint16");const a=t.readNumber("Uint16");t.readNumber("Uint32"),t.readNumber("Uint32");const o=t.readNumber("Uint32"),c=t.readNumber("Uint32"),l=t.readNumber("Uint16"),u=t.readNumber("Uint16");await t.load(l+u);const f=t.readString(l,"utf-8");t.readBuffer(u),t.blobPointer;const d=f.split("/").pop();if(d==null)throw new Error("Failed to read filename in zip file.");if(o>0){const h=new Ru(e,{type:"fileheader",compressionMethod:a,offset:t.blobPointer,compressedSize:o,uncompressedSize:c},d);await tn.setDeep(i,f,h)}t.blobPointer+=o;break}case 2055:{t.blobPointer+=12;break}case 1541:return i;default:throw new Error(`Invalid ZIP section type. ${s} at ${t.blobPointer-2}`)}}else{await t.load(22,r),t.assertMagic("PK"),t.assertMagic(1541,"Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16");const s=t.readNumber("Uint32"),a=t.readNumber("Uint32"),o=t.readNumber("Uint16");for(await t.load(o),t.readString(t.dataLeft),await t.load(s,a);!t.eof;){t.assertMagic("PK"),t.assertMagic(513,"Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32");const c=t.readNumber("Uint32");t.readNumber("Uint32");const l=t.readNumber("Uint16"),u=t.readNumber("Uint16"),f=t.readNumber("Uint16");t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32");const d=t.readNumber("Uint32"),h=t.readString(l,"utf-8");t.readBuffer(u),t.readString(f,"utf-8");const _=h.split("/").pop();if(_==null)throw new Error("Failed to read filename in zip file.");if(c>0){const g=new Ru(e,{type:"centralfileheader",offsetToLocalHeader:d},_);await tn.setDeep(i,h,g)}}}return i}const ib={namespace:"zip",priority:1,isValid:async n=>n.type==lt.File&&n.name.endsWith(".zip"),transform:async n=>{if(n.type!=lt.File)throw new Error("Tried to create zip archive viewer with invalid entry type.");return await nb(n)}};var $a;(n=>{function e(r){const s=new Image;return s.src=URL.createObjectURL(new Blob([r])),new Promise((a,o)=>{function c(){s.removeEventListener("load",c),s.removeEventListener("error",l),a(s)}function l(u){o(u.message),s.removeEventListener("load",c),s.removeEventListener("error",l)}s.addEventListener("load",c),s.addEventListener("error",l)})}n.imgBuffer2img=e;async function t(r){const s=await e(r),a=document.createElement("canvas");a.width=s.width,a.height=s.height;const o=a.getContext("2d");if(o==null)throw new Error("2d canvas context not supported on browser or machine.");return o.drawImage(s,0,0),o.getImageData(0,0,s.width,s.height)}n.imgBuffer2imgData=t;function i(r){const s=document.createElement("canvas");s.width=r.width,s.height=r.height;const a=s.getContext("2d");if(a==null)throw new Error("2d canvas context not supported on browser or machine.");return a.putImageData(r,0,0),s.toDataURL("image/webp",1)}n.imgData2url=i})($a||($a={}));var Cu;(n=>{function e(t){return t!=null}n.isNotNull=e})(Cu||(Cu={}));class rb extends ac{async readDOSHeader(){return await this.load(64),this.assertMagic(23117,"Uint16"),{bytesOnLastPageOfFile:this.readNumber("Uint16"),pagesInFile:this.readNumber("Uint16"),relocations:this.readNumber("Uint16"),sizeOfHeaderParagraphs:this.readNumber("Uint16"),minExtraParagraphsNeeded:this.readNumber("Uint16"),maxExtraParagraphsNeeded:this.readNumber("Uint16"),initialRelSSValue:this.readNumber("Uint16"),initialSPValue:this.readNumber("Uint16"),checksum:this.readNumber("Uint16"),initialIPValue:this.readNumber("Uint16"),initialRelCSValue:this.readNumber("Uint16"),fileAddressOfRelocationTable:this.readNumber("Uint16"),overlayNumber:this.readNumber("Uint16"),reserved1:this.readBuffer(8),OEMIdentifier:this.readNumber("Uint16"),OEMInformation:this.readNumber("Uint16"),reserved2:this.readBuffer(20),fileAddressOfNewExeHeader:this.readNumber("Uint32")}}async readFileHeader(){return await this.load(24),this.assertMagic(17744,"Uint32"),{machine:this.readNumber("Uint16"),sectionsCount:this.readNumber("Uint16"),timeDateStamp:this.readNumber("Uint32"),ptrToSymbolTable:this.readNumber("Uint32"),numSymbols:this.readNumber("Uint32"),sizeOfOptionalHeader:this.readNumber("Uint16"),characteristics:this.readNumber("Uint16")}}readOffsetSize(){return{offset:this.readNumber("Uint32"),size:this.readNumber("Uint32")}}readNT32Header(){return{type:"NT32",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),baseOfData:this.readNumber("Uint32"),imageBase:this.readNumber("Uint32"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readNumber("Uint32"),sizeOfStackCommit:this.readNumber("Uint32"),sizeOfHeapReserve:this.readNumber("Uint32"),sizeOfHeapCommit:this.readNumber("Uint32"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readNT64Header(){return{type:"NT64",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),imageBase:this.readBigNumber("BigUint64"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readBigNumber("BigUint64"),sizeOfStackCommit:this.readBigNumber("BigUint64"),sizeOfHeapReserve:this.readBigNumber("BigUint64"),sizeOfHeapCommit:this.readBigNumber("BigUint64"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readOptionalHeader(){switch(this.readNumber("Uint16")){case 267:return this.readNT32Header();case 523:return this.readNT64Header();default:throw new Error("Unknown optional header type.")}}readSectionHeaders(e){return this.readArray(()=>({name:this.readString(8),physicalAddressOrVirtualSize:this.readNumber("Uint32"),virtualAddress:this.readNumber("Uint32"),sizeOfRawData:this.readNumber("Uint32"),pointerToRawData:this.readNumber("Uint32"),pointerToRelocations:this.readNumber("Uint32"),pointerToLinenumbers:this.readNumber("Uint32"),numberOfRelocations:this.readNumber("Uint16"),numberOfLinenumbers:this.readNumber("Uint16"),characteristics:this.readNumber("Uint32")}),e)}readResources(e=this.pointer,t){t!==void 0&&(this.pointer=e+t);const i=this.readNumber("Uint32"),r=this.readNumber("Uint32"),s=this.readNumber("Uint16"),a=this.readNumber("Uint16"),o=this.readNumber("Uint16"),c=this.readNumber("Uint16"),l=this.readArray(()=>({type:this.readNumber("Uint32"),offset:this.readNumber("Uint32")}),o+c).map(u=>{let f=u.type;const d=!!(f&2147483648);f&=2147483647;let h=u.offset;const _=!!(h&2147483648);return h&=2147483647,_?{isStr:d,type:f,isDir:!0,dir:this.readResources(e,h)}:{isStr:d,type:f,isDir:!1,offset:h}});return{characteristics:i,timeDateStamp:r,majorVersion:s,minorVersion:a,numberOfNamedEntries:o,numberOfIdEntries:c,entries:l}}}var Xa;(n=>{async function e(r){const s=await r.readDOSHeader();r.blobPointer=s.fileAddressOfNewExeHeader;const a=await r.readFileHeader();await r.load(a.sizeOfOptionalHeader);const o=r.readOptionalHeader();await r.load(o.sizeOfHeaders);const c=r.readSectionHeaders(a.sectionsCount);return[s,a,o,c]}n.getHeaders=e;function t(r,s,a=0){for(const o of r)if(o.name==s||o.name.replaceAll("\0","")==s){if(a<=0)return o;a--}return null}n.getSectionHeader=t;class i{constructor(s){ne(this,"sections");this.sections=s}toVirtual(s){for(const a of this.sections)if(s>=a.pointerToRawData&&s<a.pointerToRawData+a.sizeOfRawData)return s-a.pointerToRawData+a.virtualAddress;return-1}toRaw(s){for(const a of this.sections)if(s>=a.virtualAddress&&s<a.virtualAddress+a.physicalAddressOrVirtualSize)return s-a.virtualAddress+a.pointerToRawData;return-1}}n.VirtualMemeorySpace=i})(Xa||(Xa={}));async function sb(n){const e=new Zt(n);if(e.magic([137,80,78,71,13,10,26,10]))return URL.createObjectURL(new Blob([e.buffer]));{e.pointer=0;const t=e.readNumber("Uint32"),i=new DataView(new ArrayBuffer(e.length+14));i.setUint8(0,66),i.setUint8(1,77),i.setUint32(2,i.byteLength,!0),i.setUint32(10,14+t,!0),new Uint8Array(i.buffer).set(new Uint8Array(e.buffer),14);const r=await $a.imgBuffer2imgData(i.buffer),s=new ImageData(r.width,r.height>>1);return s.data.set(r.data.slice(r.width*(r.height>>1)*4)),$a.imgData2url(s)}}async function ab(n){const e=new rb(n),[t,i,r,s]=await Xa.getHeaders(e),a=new Xa.VirtualMemeorySpace(s);if(r.resourceDirectory.offset==0||r.resourceDirectory.size==0)return;await e.load(r.resourceDirectory.size,a.toRaw(r.resourceDirectory.offset));const o=e.readResources();function c(g){if(!g||!g.isDir)throw new Error("readOffsetSize entry is not dir.");const m=g.dir.entries[0];if(!m||m.isDir)throw new Error("readOffsetSize data entry is invalid.");return e.pointer=m.offset,{id:g.type,offset:e.readNumber("Uint32"),size:e.readNumber("Uint32"),codePage:e.readNumber("Uint32"),reserved:e.readNumber("Uint32")}}const l=o.entries.find(g=>g.type==3);if(!l||!l.isDir)return;const u=l.dir.entries.map(c),f=o.entries.find(g=>g.type==14);if(!f||!f.isDir)return;const h=(await Promise.all(f.dir.entries.map(c).map(async g=>{await e.load(g.size,a.toRaw(g.offset));const m=e.readBuffer(2),p=e.readNumber("Uint16"),y=e.readNumber("Uint16");function v(w){return w==0?255:w}let E=[];for(let w=0;w<y;w++)E.push({width:v(e.readNumber("Uint8")),height:v(e.readNumber("Uint8")),colorCount:e.readNumber("Uint8"),reserved:e.readBuffer(1),planes:e.readNumber("Uint16"),bitCount:e.readNumber("Uint16"),bytesInRes:e.readNumber("Uint32"),id:e.readNumber("Uint16")});return{reserved:m,type:p,count:y,entries:E}})))[0].entries.reduce((g,m)=>g===void 0||m.width>g.width&&m.height>g.height?m:g),_=u.find(g=>g.id==h.id);if(!_)throw new Error("Catastrophic error, Icon ID was not found.");return await e.load(_.size,a.toRaw(_.offset)),await sb(e.readBuffer(e.dataLeft))}const ob={namespace:"executable",priority:1,isValid:async n=>n.type==lt.File&&n.name.endsWith(".exe"),getIcon:async n=>{if(n.type==lt.File){const e=await ab(await n.blob());return e||"/asset-viewer/bootstrap-icons/filetype-exe.svg"}return null}};var Ll=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.Protocol0=0]="Protocol0",n[n.Protocol1=1]="Protocol1",n[n.Protocol2=2]="Protocol2",n[n.Protocol3=3]="Protocol3",n[n.Protocol4=4]="Protocol4",n[n.Protocol5=5]="Protocol5",n))(Ll||{}),Pa=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.MARK=40]="MARK",n[n.STOP=46]="STOP",n[n.POP=48]="POP",n[n.POP_MARK=49]="POP_MARK",n[n.DUP=50]="DUP",n[n.FLOAT=70]="FLOAT",n[n.INT=73]="INT",n[n.BININT=74]="BININT",n[n.BININT1=75]="BININT1",n[n.LONG=76]="LONG",n[n.BININT2=77]="BININT2",n[n.NONE=78]="NONE",n[n.PERSID=80]="PERSID",n[n.BINPERSID=81]="BINPERSID",n[n.REDUCE=82]="REDUCE",n[n.STRING=83]="STRING",n[n.BINSTRING=84]="BINSTRING",n[n.SHORT_BINSTRING=85]="SHORT_BINSTRING",n[n.UNICODE=86]="UNICODE",n[n.BINUNICODE=88]="BINUNICODE",n[n.APPEND=97]="APPEND",n[n.BUILD=98]="BUILD",n[n.GLOBAL=99]="GLOBAL",n[n.DICT=100]="DICT",n[n.EMPTY_DICT=125]="EMPTY_DICT",n[n.APPENDS=101]="APPENDS",n[n.GET=103]="GET",n[n.BINGET=104]="BINGET",n[n.INST=105]="INST",n[n.LONG_BINGET=106]="LONG_BINGET",n[n.LIST=108]="LIST",n[n.EMPTY_LIST=93]="EMPTY_LIST",n[n.OBJ=111]="OBJ",n[n.PUT=112]="PUT",n[n.BINPUT=113]="BINPUT",n[n.LONG_BINPUT=114]="LONG_BINPUT",n[n.SETITEM=115]="SETITEM",n[n.TUPLE=116]="TUPLE",n[n.EMPTY_TUPLE=41]="EMPTY_TUPLE",n[n.SETITEMS=117]="SETITEMS",n[n.BINFLOAT=71]="BINFLOAT",n[n.PROTO=128]="PROTO",n[n.NEWOBJ=129]="NEWOBJ",n[n.EXT1=130]="EXT1",n[n.EXT2=131]="EXT2",n[n.EXT4=132]="EXT4",n[n.TUPLE1=133]="TUPLE1",n[n.TUPLE2=134]="TUPLE2",n[n.TUPLE3=135]="TUPLE3",n[n.NEWTRUE=136]="NEWTRUE",n[n.NEWFALSE=137]="NEWFALSE",n[n.LONG1=138]="LONG1",n[n.LONG4=139]="LONG4",n[n.BINBYTES=66]="BINBYTES",n[n.SHORT_BINBYTES=67]="SHORT_BINBYTES",n[n.SHORT_BINUNICODE=140]="SHORT_BINUNICODE",n[n.BINUNICODE8=141]="BINUNICODE8",n[n.BINBYTES8=142]="BINBYTES8",n[n.EMPTY_SET=143]="EMPTY_SET",n[n.ADDITEMS=144]="ADDITEMS",n[n.FROZENSET=145]="FROZENSET",n[n.NEWOBJ_EX=146]="NEWOBJ_EX",n[n.STACK_GLOBAL=147]="STACK_GLOBAL",n[n.MEMOIZE=148]="MEMOIZE",n[n.FRAME=149]="FRAME",n[n.BYTEARRAY8=150]="BYTEARRAY8",n[n.NEXT_BUFFER=151]="NEXT_BUFFER",n[n.READONLY_BUFFER=152]="READONLY_BUFFER",n))(Pa||{});class lb{constructor(e,...t){ne(this,"module");ne(this,"args");ne(this,"state");this.module=e,this.args=t}}class Lu{constructor(e,t){ne(this,"module");ne(this,"name");this.module=e,this.name=t}make(...e){return new lb(this,...e)}}const uo=class uo{constructor(){ne(this,"stack",[])}append(e){this.stack.push(e)}pop(){return this.stack.pop()}get last(){return this.stack[this.stack.length-1]}set last(e){this.stack[this.stack.length-1]=e}popMark(){let e=[];for(var t=this.stack.length-1;t>=0;t--)if(this.stack[t]===uo.MARK){this.pop();break}else e.unshift(this.pop());return e}};ne(uo,"MARK",Symbol("Mark"));let Za=uo;class cb{constructor(){ne(this,"memo",[])}get(e){return this.memo[e]}set(e,t){this.memo[t]=e}append(e){this.memo.push(e)}get lastMemo(){return this.memo[this.memo.length-1]}}class vo extends Zt{constructor(t,i=!1){super(t);ne(this,"debug");ne(this,"operTime",{});ne(this,"protocol",-1);ne(this,"stack",new Za);ne(this,"memo",new cb);this.debug=i}findClass(t,i){return new Lu(t,i)}readOperation(){const t=this.debug?performance.now():0;if(this.eof)throw new Error("Depickler.readOperation: Reached end of pickle data without STOP opcode.");const i=this.readNumber("Uint8");switch(i){case 46:break;case 128:{if(this.protocol=this.readNumber("Uint8"),!(this.protocol in Ll))throw new Error(`Depickler.readPicke: Unknown protocol. ${this.protocol}`);if(![2,3,4,5].includes(this.protocol))throw new Error(`Depickler.readPickle: Unsupported protocol. ${Ll[this.protocol]}`);break}case 149:{this.readBigNumber("BigUint64");break}case 125:{this.stack.append({});break}case 148:{this.memo.append(this.stack.last);break}case 40:{this.stack.append(Za.MARK);break}case 140:{this.stack.append(this.readString(this.readNumber("Uint8"),"utf-8"));break}case 93:{this.stack.append([]);break}case 74:{this.stack.append(this.readNumber("Int32"));break}case 67:{const r=this.readNumber("Uint8"),s=new Uint8Array(this.readBuffer(r));this.stack.append(s);break}case 135:{this.stack.append([this.stack.pop(),this.stack.pop(),this.stack.pop()].reverse());break}case 97:{const r=this.stack.pop();this.stack.last.push(r);break}case 104:{const r=this.readNumber("Uint8");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 117:{const r=this.stack.popMark();if(r.length%2!=0)throw new Error("Depickler.readPickle: Can not set an odd number of items.");const s=this.stack.last;for(let a=0;a<r.length;a+=2)s[r[a+0]]=r[a+1];break}case 77:{this.stack.append(this.readNumber("Uint16"));break}case 113:{const r=this.readNumber("Uint8");this.memo.set(this.stack.last,r);break}case 88:{const r=this.readNumber("Uint32");this.stack.append(this.readString(r,"utf-8"));break}case 138:{const r=this.readNumber("Uint8");this.stack.append(this.readCustomNumber(r,!0));break}case 85:{const r=this.readNumber("Uint8");this.stack.append(this.readString(r,"utf-8"));break}case 114:{const r=this.readNumber("Uint32");this.memo.set(this.stack.last,r);break}case 99:{const r=this.readUntilNewline(),s=this.readUntilNewline();this.stack.append(this.findClass(r,s));break}case 41:{this.stack.append([]);break}case 129:{const r=this.stack.pop(),s=this.stack.pop();this.stack.append(s.make(...r));break}case 78:{this.stack.append(null);break}case 75:{this.stack.append(this.readNumber("Uint8"));break}case 116:{this.stack.append([...this.stack.popMark()].reverse());break}case 134:{this.stack.append([this.stack.pop(),this.stack.pop()].reverse());break}case 98:{const r=this.stack.pop(),s=this.stack.last;s.state=r;break}case 137:{this.stack.append(!1);break}case 136:{this.stack.append(!0);break}case 101:{const r=this.stack.popMark();this.stack.last.push(...r);break}case 133:{this.stack.append([this.stack.pop()]);break}case 106:{const r=this.readNumber("Uint32");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 115:{const r=this.stack.pop(),s=this.stack.pop();this.stack.last[s]=r;break}case 82:{const r=this.stack.pop(),s=this.stack.last;s instanceof Lu?this.stack.last=s.make(...r):this.stack.last=s(...r);break}default:throw Pa[i]===void 0?new Error(`Depicker.readPickle: Unknown opcode. ${Zr.hex(i,1)}`):new Error(`Depicker.readPickle: Unimplemented opcode. ${Pa[i]}`)}if(this.debug){const r=performance.now()-t;this.operTime[i]=(this.operTime[i]??0)+r}return i}readPickle(){for(this.debug&&console.time("Depickle");this.readOperation()!=46;);if(this.debug){console.timeEnd("Depickle");const t=Object.fromEntries(Object.entries(this.operTime).map(r=>[Pa[parseInt(r[0])],r[1]])),i=Object.keys(t).reduce((r,s)=>Math.max(r,s.length),0);for(const[r,s]of Object.entries(t))console.log(`${r.padEnd(i," ")} with ${Math.round(s)}ms`)}return this.stack.stack}static depickle(t,i=!1){return new vo(t,i).readPickle()}readUntilNewline(){let t=this.pointer;for(;this.view.getUint8(t++)!=10;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder("ascii").decode(i)}}const ub=34,db="RPA-3.0";class fb{constructor(e,t,i,r){ne(this,"type",lt.File);ne(this,"viewer",null);ne(this,"name");ne(this,"parent");ne(this,"_blob");ne(this,"sections");this._blob=e,this.sections=t,this.name=i,this.parent=r}async blob(){return new Blob(this.sections.map(e=>this._blob.slice(e.offset,e.offset+e.length)))}async buffer(){return await(await this.blob()).arrayBuffer()}}class hb extends Zt{constructor(t){super();ne(this,"blob");ne(this,"blobPointer",0);ne(this,"key",-1);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}getSlice(t,i=this.blobPointer){this.blobPointer=i;const r=this.blob.slice(this.blobPointer,this.blobPointer+t);return this.blobPointer+=t,r}async load(t,i=this.blobPointer){this.loadData(await this.getSlice(t,i).arrayBuffer())}async readHeader(){await this.load(ub);const t=this.readString(this.dataLeft);if(!t.endsWith(`
`))throw new Error("ArchiveReader.readHeader: Archive header does not end with newline.");const i=t.split(" ");if(i.length!=3)throw new Error("ArchiveReader.readHeader: Invalid header.");if(i[0]!=db)throw new Error(`ArchiveReader.readHeader: Signature does not match. got: ${i[0]} expected: ${i[1]}`);const r=Number.parseInt(i[1],16);if(Number.isNaN(r))throw new Error("ArchiveReader.readHeader: Index offset is invalid.");if(this.key=Number.parseInt(i[2],16),Number.isNaN(this.key))throw new Error("ArchiveReader.readHeader: Key is invalid.");return r}async readArchive(){const t=await this.readHeader();this.blobPointer=t,await this.load(this.blobDataLeft);const i=this.buffer,r=Os.inflate(i),s=vo.depickle(r),a=new tn.fsDirectory_Container("UNSET",null),o=s[0];for(const[c,l]of Object.entries(o)){const u=l.map(h=>({offset:h[0]^this.key,length:h[1]^this.key})),f=c.split("/").pop();if(f==null)throw new Error("Catastrophic error that should never happen.");const d=new fb(this.blob,u,f,null);await tn.setDeep(a,c,d)}return a}}const pb={namespace:"renpy.archive",priority:10,isValid:async n=>n.type==lt.File&&n.name.endsWith(".rpa"),transform:async n=>{if(n.type!=lt.File)throw new Error("Tried to create renpy archive viewer with invalid entry type.");const t=await new hb(await n.blob()).readArchive();return t.name=n.name,t.parent=n.parent,t}};function mb(n){const e=n.module;if(e.module!==bo.RenPy)throw new Error("parseRenPyClass: This function is only for parsing RenPy module classes.");switch(e.name){case"Init":return n.state[1].block.map(Ae).join(`
`);case"Define":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`define ${t[1].varname} ${t[1].operator} ${Ae(t[1].code)}
`:`define ${t[1].store.split(".").pop()??""}.${t[1].varname} ${t[1].operator} ${Ae(t[1].code)}
`}case"PyCode":{const t=n.state;let i;for(let r=0;r<t.length;r++){const s=t[r];if(i===void 0)typeof s=="string"&&(i=s);else{if(typeof s=="string")return s;if(!Array.isArray(s)&&typeof s!="number")return Ae(s)}}throw new Error("parseRenPyClass: Failed to parse PyCode.")}case"PyExpr":{const t=n.args;return t[3]??t[0]}case"Default":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`default ${t[1].varname} = ${Ae(t[1].code)}
`:`default ${t[1].store.split(".").pop()??""}.${t[1].varname} = ${Ae(t[1].code)}
`}case"Python":{const t=n.state,i=Ae(t[1].code);let r=[];for(let s=0;s!=-1;s=i.indexOf(`
`,s+1))r.push(s);return r.every(s=>s==0||s==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${tt(i)}
`}case"Return":return"";case"Label":{const t=n.state;let i="";for(const r of t[1].block)i+=Ae(r);return i=tt(i),`label ${t[1].name}:
${i}`}case"Screen":{const t=n.state;return Ae(t[1].screen)}case"ParameterInfo":return n.state.parameters.map(i=>`${i[1]==null?i[0]:`${i[0]}=${typeof i[1]=="string"?i[1]:Ae(i[1])}`}`).join(", ");case"Image":{const t=n.state;if(t[1].code!=null)return`image ${t[1].imgname.join(", ")} = ${Ae(t[1].code)}
`;if(t[1].atl!=null)return`image ${t[1].imgname.join(", ")}:
${tt(Ae(t[1].atl))}
`;throw new Error("parseRenPyClass: Invalid image.")}case"Style":{const t=n.state;return`style ${t[1].style_name}:
${tt(Object.entries(t[1].properties).map(i=>`${i[0]} ${Ae(i[1])}`).join(`
`))}
`}case"Transform":{const t=n.state;return`transform ${t[1].varname}${t[1].parameters==null?"":`(${Ae(t[1].parameters)})`}:
${tt(Ae(t[1].atl))}
`}case"Jump":return`jump ${n.state[1].target}
`;case"UserStatement":return`${n.state[1].line}
`;case"Say":{const t=n.state;return`${t[1].who===null?"":`${t[1].who} `}"${t[1].what}"
`}case"Show":return`show ${n.state[1].imspec[6].join(" ")}
`;case"With":{const t=n.state;if(t[1].expr=="None"){if(t[1].paired==null)throw new Error("parseRenPyClass: With without any args.");return`with ${Ae(t[1].paired)}`}else return`with ${typeof t[1].expr=="string"?t[1].expr:Ae(t[1].expr)}
`}case"If":{const t=n.state;let i="";for(let r=0;r<t[1].entries.length;r++){const s=t[1].entries[r];r==0?i+=`if ${typeof s[0]=="string"?s[0]:Ae(s[0])}:
${tt(s[1].map(Ae).join(`
`))}
`:s[0]!=null&&s[0]!="True"?i+=`elif ${typeof s[0]=="string"?s[0]:Ae(s[0])}:
${tt(s[1].map(Ae).join(`
`))}
`:i+=`else:
${tt(s[1].map(Ae).join(`
`))}
`}return i}case"Menu":{const t=n.state;let i=`menu${t[1].arguments==null?"":`(${Ae(t[1].arguments)})`}:
`;for(const r of t[1].items)if(i+=tt(`"${r[0]}"`),r[1]!="True"&&r[1]!=null&&(i+=" if ",typeof r[1]=="string"?i+=r[1]:i+=Ae(r[1])),r[2]==null)i+=`
`;else{i+=`:
`;for(const s of r[2])i+=`${tt(Ae(s),2)}
`}return i}case"Scene":return`scene ${n.state[1].imspec[6].join(" ")}
`;case"Hide":return`hide ${n.state[1].imspec[6].join(" ")}
`;case"While":{const t=n.state;return`while ${Ae(t[1].condition)}:
${tt(t[1].block.map(Ae).join(`
`))}
`}case"Pass":return`pass
`;case"Call":return`call ${n.state[1].label} from `;default:throw new Error(`parseRenPyClass: Unknown class "${e.name}"`)}}function _b(n){const e=n.module;if(e.module!==bo.RenPy_ATL)throw new Error("parseRenPyATLClass: This function is only for parsing RenPy_ATL module classes.");switch(e.name){case"RawBlock":return`${n.state.statements.map(Ae).join("")}`;case"RawMultipurpose":{const t=n.state;let i="";t.duration!="0"&&(i+=(typeof t.duration=="string"||typeof t.duration=="number"?t.duration:Ae(t.duration))+`
`);for(const r of t.expressions)i+=`${Ae(r[0])}
`;for(const r of t.properties)i+=`${r[0]} ${Ae(r[1])}
`;return i}case"RawRepeat":{const t=n.state;return`repeat${t.repeats==null?"":` ${typeof t.repeats=="number"?t.repeats:Ae(t.repeats)}`}
`}case"RawOn":{const t=n.state;let i="";for(const[r,s]of Object.entries(t.handlers))i+=`on ${r}:
${tt(Ae(s))}
`;return i}case"RawParallel":{const t=n.state;return`parallel:
${tt(t.blocks.map(Ae).join(`
`))}`}default:throw new Error(`parseRenPyATLClass: Unknown class "${e.name}"`)}}function gb(n){const e=n.module;if(e.module!==bo.RenPy_SL2)throw new Error("parseRenPySL2Class: This function is only for parsing RenPy_SL2 module classes.");switch(e.name){case"SLScreen":{const t=n.state;return`screen ${t.name}${t.parameters==null?"":`(${Ae(t.parameters)})`}:
${tt((t.tag==null?"":t.tag)+`
`+t.keyword.map(i=>`${i[0]} ${Ae(i[1])}
`).join(`
`)+t.children.map(Ae).join(""))}
`}case"SLDisplayable":{let t=function(a,o=`
`,c=""){return a.length==0?"":c+a.map(l=>`${l[0]} ${Ae(l[1])}`).join(o)},i=function(a){return a.map(Ae).join(" ")},r=function(a){return a.map(Ae).join(`
`)};const s=n.state;switch(`${s.displayable.module}:${s.displayable.name}`){case"renpy.sl2.sldisplayables:sl2add":return`add ${i(s.positional)} ${s.keyword.map(a=>`${a[0]} ${Ae(a[1])}`).join(" ")}
`;case"renpy.display.layout:Grid":return`grid ${i(s.positional)}:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.ui:_textbutton":return`textbutton ${i(s.positional)}:
${tt(t(s.keyword))}
`;case"renpy.display.layout:Null":return`null${t(s.keyword," "," ")}
`;case"renpy.display.layout:MultiBox":return`${s.style}${t(s.keyword," "," ")}:
${tt(r(s.children))}
`;case"renpy.text.text:Text":return`text ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.ui:_imagemap":return`imagemap:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.ui:_hotspot":return`${s.name}${i(s.positional)} ${t(s.keyword)}`;case"renpy.ui:_imagebutton":return`imagebutton:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.display.layout:Window":return`${s.name}${s.positional.length==0?"":` ${i(s.positional)}`}:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.display.behavior:Input":return`input ${t(s.keyword)}
`;case"renpy.sl2.sldisplayables:sl2viewport":return`viewport:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.sl2.sldisplayables:sl2vpgrid":return`vpgrid:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.ui:_label":return`label ${i(s.positional)}
`;case"renpy.ui:_key":return`key ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.display.behavior:Timer":return`timer ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.sl2.sldisplayables:sl2bar":return`bar:
${tt(t(s.keyword))}
${tt(r(s.children))}
`;case"renpy.display.behavior:Button":return`button ${i(s.positional)}${t(s.keyword," "," ")}:
${r(s.children)}`;case"renpy.display.behavior:OnEvent":return`on ${i(s.positional)}${t(s.keyword," "," ")}
`;default:throw new Error(`parseRenPySL2Class: Unsupported displayable module: ${s.displayable.module}:${s.displayable.name}`)}}case"SLPython":{const t=n.state,i=Ae(t.code);let r=[];for(let s=0;s!=-1;s=i.indexOf(`
`,s+1))r.push(s);return r.every(s=>s==0||s==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${tt(i)}
`}case"SLIf":{const t=n.state;let i="";for(let r=0;r<t.entries.length;r++){const s=t.entries[r];r==0?i+=`if ${typeof s[0]=="string"?s[0]:Ae(s[0])}:
${tt(Ae(s[1]))}
`:s[0]!=null?i+=`elif ${typeof s[0]=="string"?s[0]:Ae(s[0])}:
${tt(Ae(s[1]))}
`:i+=`else:
${tt(Ae(s[1]))}
`}return i}case"SLBlock":{const t=n.state;let i="";for(const r of t.children)i+=Ae(r);for(const r of t.keyword)i+=`${r[0]} ${Ae(r[1])}
`;return i.length==0&&(i+=`pass
`),i}case"SLFor":{const t=n.state;return`for ${t.variable} in ${Ae(t.expression)}:
${tt(t.children.map(Ae).join(""))}`}case"SLUse":return`use ${n.state.target}`;case"SLTransclude":return`transclude
`;case"SLDefault":{const t=n.state;return`default ${t.variable} = ${Ae(t.expression)}`}default:throw new Error(`parseRenPySL2Class: Unknown class "${e.name}"`)}}const Nu="RENPY RPC2";var Lh=(n=>(n[n.Legacy=-1]="Legacy",n[n.End=0]="End",n[n.BeforeStaticTransforms=1]="BeforeStaticTransforms",n[n.AfterStaticTransforms=2]="AfterStaticTransforms",n))(Lh||{});function vb(n){const e=new Zt(n);if(e.readString(Nu.length,"ascii")!=Nu){console.warn("decompileScript: Legacy format may not decompile correctly."),e.pointer=0;const s=e.readBuffer(e.length),a=Os.inflate(s);return[{slot:-1,offset:0,length:e.length,data:a}]}let i=[];for(;;){const s=e.readNumber("Uint32"),a=e.readNumber("Uint32"),o=e.readNumber("Uint32");if(s==0)break;i.push({slot:s,offset:a,length:o})}return i.map(s=>{e.pointer=s.offset;const a=e.readBuffer(s.length),o=Os.inflate(a);return{...s,data:o}})}function Du(n){return vb(n)}var bo=(n=>(n.RenPy="renpy.ast",n.RenPy_SL2="renpy.sl2.slast",n.RenPy_ATL="renpy.atl",n))(bo||{});function tt(n,e=1){return n.split(`
`).map(t=>"    ".repeat(e)+t).join(`
`)}const bb=100;let ua=[];function xb(n){const e=n.module;switch(e.module){case"renpy.ast":return mb(n);case"renpy.sl2.slast":return gb(n);case"renpy.atl":return _b(n);default:throw new Error(`parseClass: Unknown module. "${e.module}"`)}}function Ae(n){{ua.push(n),ua.length>bb&&ua.shift();try{return xb(n)}catch(e){for(const t of ua)console.log(t);throw e}}}function Uu(n,e={}){const t=n.find(l=>l.slot==Lh.BeforeStaticTransforms);if(t===void 0)throw new Error("decompileScript: Could not find script chunk.");const r=vo.depickle(t.data)[0],s=r[0];if(s.version!==5003e3)throw new Error(`decompileScript: Unknown header version. ${s.version}`);let a="";a+=`# Ren'Py decompiled script.
`,a+=`# Decompiled with renpy-asset-viewer
`,a+=`# Decompiled on ${new Date}
`,a+=`# Script Header:
`;for(const[l,u]of Object.entries(s))a+=`#     ${l}: ${u}
`;a+=`# Decompilation is in very early alpha, so please give feedback on bugs!
`,a+=`


`;let o="";const c=r[1];for(const l of c)o+=Ae(l),o+=`
`;return(e.cleanOutput??!0)&&(o=Eb(o)),a+o}function Eb(n){return n=n.replace(/\s+(?=(\n|$))/g,""),n}function yb(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Sb(n){let e,t,i,r,s,a;const o=[wb,Mb],c=[];function l(u,f){return f&1&&(e=null),f&1&&(t=null),e==null&&(e=!!u[0].name.endsWith(".rpyc")),e?0:(t==null&&(t=!!u[0].name.endsWith(".rpy")),t?1:-1)}return~(i=l(n,-1))&&(r=c[i]=o[i](n)),{c(){r&&r.c(),s=ut()},l(u){r&&r.l(u),s=ut()},m(u,f){~i&&c[i].m(u,f),Me(u,s,f),a=!0},p(u,f){let d=i;i=l(u,f),i===d?~i&&c[i].p(u,f):(r&&(pi(),it(c[d],1,1,()=>{c[d]=null}),mi()),~i?(r=c[i],r?r.p(u,f):(r=c[i]=o[i](u),r.c()),Xe(r,1),r.m(s.parentNode,s)):r=null)},i(u){a||(Xe(r),a=!0)},o(u){it(r),a=!1},d(u){u&&ce(s),~i&&c[i].d(u)}}}function Mb(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Rb,then:Ab,catch:Tb,value:3,blocks:[,,,]};return Et(t=n[1].text(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].text())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function wb(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Nb,then:Lb,catch:Cb,value:2,blocks:[,,,]};return Et(t=n[1].arrayBuffer(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].arrayBuffer())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function Tb(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Ab(n){let e,t;return e=new po({props:{language:sc,code:n[3]}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=i[3]),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function Rb(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Cb(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Lb(n){let e,t;return e=new po({props:{language:sc,code:Uu(Du(n[2]))}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=Uu(Du(i[2]))),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function Nb(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Db(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Ub(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Db,then:Sb,catch:yb,value:1,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ut(),r.block.c()},l(s){e=ut(),r.block.l(s)},m(s,a){Me(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&Et(t,r)||Ln(r,n,a)},i(s){i||(Xe(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];it(o)}i=!1},d(s){s&&ce(e),r.block.d(s),r.token=null,r=null}}}function Ib(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Pb extends Ht{constructor(e){super(),Gt(this,e,Ib,Ub,Ot,{entry:0})}}const kb={namespace:"renpy.script",priority:2,isValid:async n=>n.type!=lt.File?!1:n.name.endsWith(".rpyc")||n.name.endsWith(".rpy"),createViewer:async(n,e)=>{if(n.type==lt.File)new Pb({target:e,props:{entry:n}});else throw new Error("Tried to create renpy.script viewer with directory.")}};var on=(n=>(n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.Byte_Array=7]="Byte_Array",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.Int_Array=11]="Int_Array",n[n.Long_Array=12]="Long_Array",n))(on||{});function Nh(n){const e=new Zt(n);e.endianness=Zt.BIG_ENDIAN;const t=i=>{switch(i){default:case 0:throw new Error("Malformed NBT data.");case 1:return{tag:i,value:e.readNumber("Int8")};case 2:return{tag:i,value:e.readNumber("Int16")};case 3:return{tag:i,value:e.readNumber("Int32")};case 4:return{tag:i,value:e.readBigNumber("BigInt64")};case 5:return{tag:i,value:e.readNumber("Float32")};case 6:return{tag:i,value:e.readNumber("Float64")};case 7:return{tag:i,value:new Int8Array(e.readBuffer(e.readNumber("Int32")))};case 8:return{tag:i,value:e.readString(e.readNumber("Uint16"),"utf-8")};case 9:{const r=e.readNumber("Int8"),s=e.readNumber("Int32"),a=new Array(s);for(let o=0;o<s;o++)a[o]=t(r);return{tag:i,listTag:r,value:a}}case 10:{let r={};for(;;){const s=e.readNumber("Uint8");if(s==0)break;const a=e.readString(e.readNumber("Uint16"),"utf-8");r[a]=t(s)}return{tag:i,value:r}}case 11:return{tag:i,value:new Int32Array(e.readArray(e.readNumber,e.readNumber("Int32"),"Int32"))};case 12:return{tag:i,value:new BigInt64Array(e.readArray(e.readBigNumber,e.readNumber("Int32"),"BigInt64"))}}};if(e.readNumber("Uint8")!=10)throw new Error("NBT data doesn't start with compound tag.");if(e.readNumber("Uint16")!=0)throw new Error("First NBT tag must have no name.");return t(10)}function Nl(n){switch(n.tag){default:case 0:throw new Error("failed to simplify nbt object.");case 1:case 2:case 3:case 4:case 5:case 6:return n.value;case 8:return n.value;case 9:return n.value.map(Nl);case 10:return Object.fromEntries(Object.entries(n.value).map(([e,t])=>[e,Nl(t)]));case 7:case 11:case 12:return n.value}}function Iu(n,e,t){const i=n.slice();return i[2]=e[t],i}function Pu(n,e,t){const i=n.slice();return i[2]=e[t],i}function ku(n,e,t){const i=n.slice();return i[1]=e[t][0],i[2]=e[t][1],i}function Ob(n){let e,t=ki(n[0].value),i=[];for(let r=0;r<t.length;r+=1)i[r]=Ou(Iu(n,t,r));return{c(){e=je("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=Ke(r,"DIV",{class:!0});var s=ht(e);for(let a=0;a<i.length;a+=1)i[a].l(s);s.forEach(ce),this.h()},h(){ye(e,"class","nbt-list svelte-jf5zdg")},m(r,s){Me(r,e,s);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,s){if(s&1){t=ki(r[0].value);let a;for(a=0;a<t.length;a+=1){const o=Iu(r,t,a);i[a]?i[a].p(o,s):(i[a]=Ou(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},i:P,o:P,d(r){r&&ce(e),fo(i,r)}}}function Fb(n){let e,t,i=ki(n[0].value),r=[];for(let a=0;a<i.length;a+=1)r[a]=Fu(Pu(n,i,a));const s=a=>it(r[a],1,1,()=>{r[a]=null});return{c(){e=je("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ke(a,"DIV",{class:!0});var o=ht(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(ce),this.h()},h(){ye(e,"class","nbt-list svelte-jf5zdg")},m(a,o){Me(a,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(a,o){if(o&1){i=ki(a[0].value);let c;for(c=0;c<i.length;c+=1){const l=Pu(a,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=Fu(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(pi(),c=i.length;c<r.length;c+=1)s(c);mi()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)it(r[o]);t=!1},d(a){a&&ce(e),fo(r,a)}}}function Bb(n){let e,t,i=ki(Object.entries(n[0].value)),r=[];for(let a=0;a<i.length;a+=1)r[a]=Bu(ku(n,i,a));const s=a=>it(r[a],1,1,()=>{r[a]=null});return{c(){e=je("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ke(a,"DIV",{class:!0});var o=ht(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(ce),this.h()},h(){ye(e,"class","nbt-compound svelte-jf5zdg")},m(a,o){Me(a,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(a,o){if(o&1){i=ki(Object.entries(a[0].value));let c;for(c=0;c<i.length;c+=1){const l=ku(a,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=Bu(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(pi(),c=i.length;c<r.length;c+=1)s(c);mi()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)it(r[o]);t=!1},d(a){a&&ce(e),fo(r,a)}}}function zb(n){let e,t=n[0].value+"",i,r;return{c(){e=Rn('"'),i=Rn(t),r=Rn('"')},l(s){e=Cn(s,'"'),i=Cn(s,t),r=Cn(s,'"')},m(s,a){Me(s,e,a),Me(s,i,a),Me(s,r,a)},p(s,a){a&1&&t!==(t=s[0].value+"")&&Bi(i,t)},i:P,o:P,d(s){s&&(ce(e),ce(i),ce(r))}}}function Hb(n){let e=n[0].value+"",t;return{c(){t=Rn(e)},l(i){t=Cn(i,e)},m(i,r){Me(i,t,r)},p(i,r){r&1&&e!==(e=i[0].value+"")&&Bi(t,e)},i:P,o:P,d(i){i&&ce(t)}}}function Ou(n){let e,t=n[2]+"",i,r;return{c(){e=je("div"),i=Rn(t),r=dn(),this.h()},l(s){e=Ke(s,"DIV",{class:!0});var a=ht(e);i=Cn(a,t),r=fn(a),a.forEach(ce),this.h()},h(){ye(e,"class","nbt-list-item svelte-jf5zdg")},m(s,a){Me(s,e,a),St(e,i),St(e,r)},p(s,a){a&1&&t!==(t=s[2]+"")&&Bi(i,t)},d(s){s&&ce(e)}}}function Fu(n){let e,t,i,r;return t=new pc({props:{entry:n[2]}}),{c(){e=je("div"),$n(t.$$.fragment),i=dn(),this.h()},l(s){e=Ke(s,"DIV",{class:!0});var a=ht(e);Xn(t.$$.fragment,a),i=fn(a),a.forEach(ce),this.h()},h(){ye(e,"class","nbt-list-item svelte-jf5zdg")},m(s,a){Me(s,e,a),Zn(t,e,null),St(e,i),r=!0},p(s,a){const o={};a&1&&(o.entry=s[2]),t.$set(o)},i(s){r||(Xe(t.$$.fragment,s),r=!0)},o(s){it(t.$$.fragment,s),r=!1},d(s){s&&ce(e),qn(t)}}}function Bu(n){let e,t=n[1]+"",i,r,s,a,o;return s=new pc({props:{entry:n[2]}}),{c(){e=je("div"),i=Rn(t),r=Rn(": "),$n(s.$$.fragment),a=dn(),this.h()},l(c){e=Ke(c,"DIV",{class:!0});var l=ht(e);i=Cn(l,t),r=Cn(l,": "),Xn(s.$$.fragment,l),a=fn(l),l.forEach(ce),this.h()},h(){ye(e,"class","nbt-compound-kv svelte-jf5zdg")},m(c,l){Me(c,e,l),St(e,i),St(e,r),Zn(s,e,null),St(e,a),o=!0},p(c,l){(!o||l&1)&&t!==(t=c[1]+"")&&Bi(i,t);const u={};l&1&&(u.entry=c[2]),s.$set(u)},i(c){o||(Xe(s.$$.fragment,c),o=!0)},o(c){it(s.$$.fragment,c),o=!1},d(c){c&&ce(e),qn(s)}}}function Gb(n){let e,t,i,r,s,a;const o=[Hb,zb,Bb,Fb,Ob],c=[];function l(u,f){return u[0].tag==on.Byte||u[0].tag==on.Short||u[0].tag==on.Int||u[0].tag==on.Long||u[0].tag==on.Float||u[0].tag==on.Double?0:u[0].tag==on.String?1:u[0].tag==on.Compound?2:u[0].tag==on.List?3:u[0].tag==on.Byte_Array||u[0].tag==on.Int_Array||u[0].tag==on.Long_Array?4:-1}return~(r=l(n))&&(s=c[r]=o[r](n)),{c(){e=je("div"),t=je("span"),i=dn(),s&&s.c(),this.h()},l(u){e=Ke(u,"DIV",{class:!0});var f=ht(e);t=Ke(f,"SPAN",{class:!0,style:!0}),ht(t).forEach(ce),i=fn(f),s&&s.l(f),f.forEach(ce),this.h()},h(){ye(t,"class","nbt-icon svelte-jf5zdg"),Cc(t,"background-position-y","-"+n[0].tag+"rem"),ye(e,"class","nbt-container svelte-jf5zdg")},m(u,f){Me(u,e,f),St(e,t),St(e,i),~r&&c[r].m(e,null),a=!0},p(u,[f]){(!a||f&1)&&Cc(t,"background-position-y","-"+u[0].tag+"rem");let d=r;r=l(u),r===d?~r&&c[r].p(u,f):(s&&(pi(),it(c[d],1,1,()=>{c[d]=null}),mi()),~r?(s=c[r],s?s.p(u,f):(s=c[r]=o[r](u),s.c()),Xe(s,1),s.m(e,null)):s=null)},i(u){a||(Xe(s),a=!0)},o(u){it(s),a=!1},d(u){u&&ce(e),~r&&c[r].d()}}}function Vb(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class pc extends Ht{constructor(e){super(),Gt(this,e,Vb,Gb,Ot,{entry:0})}}function Wb(n){let e;return{c(){e=je("div")},l(t){e=Ke(t,"DIV",{}),ht(e).forEach(ce)},m(t,i){Me(t,e,i),n[2](e)},p:P,i:P,o:P,d(t){t&&ce(e),n[2](null)}}}function $b(n,e,t){let{entry:i}=e,r;Vs(async()=>{const a=Nh(Os.ungzip(await i.buffer()));new pc({target:r,props:{entry:a}})});function s(a){Ts[a?"unshift":"push"](()=>{r=a,t(0,r)})}return n.$$set=a=>{"entry"in a&&t(1,i=a.entry)},[r,i,s]}class Xb extends Ht{constructor(e){super(),Gt(this,e,$b,Wb,Ot,{entry:1})}}const Zb={namespace:"minecraft.nbt",priority:2,isValid:async n=>{if(n.type!=lt.File||!n.name.includes(".dat"))return!1;const e=await n.blob();if(e.size==0)return!0;const t=await e.slice(0,2).arrayBuffer();return new DataView(t).getUint16(0,!1)==8075},createViewer:async(n,e)=>{if(n.type==lt.File)new Xb({target:e,props:{entry:n}});else throw new Error("Tried to create nbt viewer with directory.")}};var ot;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(ot||(ot={}));var zu;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(zu||(zu={}));const me=ot.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Yi=n=>{switch(typeof n){case"undefined":return me.undefined;case"string":return me.string;case"number":return isNaN(n)?me.nan:me.number;case"boolean":return me.boolean;case"function":return me.function;case"bigint":return me.bigint;case"symbol":return me.symbol;case"object":return Array.isArray(n)?me.array:n===null?me.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?me.promise:typeof Map<"u"&&n instanceof Map?me.map:typeof Set<"u"&&n instanceof Set?me.set:typeof Date<"u"&&n instanceof Date?me.date:me.object;default:return me.unknown}},se=ot.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Bn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,c=0;for(;c<a.path.length;){const l=a.path[c];c===a.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(a))):o[l]=o[l]||{_errors:[]},o=o[l],c++}}};return r(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,ot.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Bn.create=n=>new Bn(n);const qa=(n,e)=>{let t;switch(n.code){case se.invalid_type:n.received===me.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case se.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,ot.jsonStringifyReplacer)}`;break;case se.unrecognized_keys:t=`Unrecognized key(s) in object: ${ot.joinValues(n.keys,", ")}`;break;case se.invalid_union:t="Invalid input";break;case se.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ot.joinValues(n.options)}`;break;case se.invalid_enum_value:t=`Invalid enum value. Expected ${ot.joinValues(n.options)}, received '${n.received}'`;break;case se.invalid_arguments:t="Invalid function arguments";break;case se.invalid_return_type:t="Invalid function return type";break;case se.invalid_date:t="Invalid date";break;case se.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:ot.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case se.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case se.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case se.custom:t="Invalid input";break;case se.invalid_intersection_types:t="Intersection results could not be merged";break;case se.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case se.not_finite:t="Number must be finite";break;default:t=e.defaultError,ot.assertNever(n)}return{message:t}};let qb=qa;function Dl(){return qb}const Ul=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};let o="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)o=l(a,{data:e,defaultError:o}).message;return{...r,path:s,message:r.message||o}};function _e(n,e){const t=Ul({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Dl(),qa].filter(i=>!!i)});n.common.issues.push(t)}class jt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return ze;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t)i.push({key:await r.key,value:await r.value});return jt.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return ze;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const ze=Object.freeze({status:"aborted"}),Yb=n=>({status:"dirty",value:n}),nn=n=>({status:"valid",value:n}),Hu=n=>n.status==="aborted",Gu=n=>n.status==="dirty",Ya=n=>n.status==="valid",Il=n=>typeof Promise<"u"&&n instanceof Promise;var Re;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Re||(Re={}));class Vn{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Vu=(n,e)=>{if(Ya(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Bn(n.common.issues);return this._error=t,this._error}}};function Be(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>a.code!=="invalid_type"?{message:o.defaultError}:typeof o.data>"u"?{message:i??o.defaultError}:{message:t??o.defaultError},description:r}}class Je{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Yi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Yi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new jt,ctx:{common:e.parent.common,data:e.data,parsedType:Yi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Il(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Yi(e)},s=this._parseSync({data:e,path:r.path,parent:r});return Vu(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Yi(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Il(r)?r:Promise.resolve(r));return Vu(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:se.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new hi({schema:this,typeName:De.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Ni.create(this,this._def)}nullable(){return es.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return zn.create(this,this._def)}promise(){return zs.create(this,this._def)}or(e){return Ja.create([this,e],this._def)}and(e){return Qa.create(this,e,this._def)}transform(e){return new hi({...Be(this._def),schema:this,typeName:De.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new ro({...Be(this._def),innerType:this,defaultValue:t,typeName:De.ZodDefault})}brand(){return new ox({typeName:De.ZodBranded,type:this,...Be(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new zl({...Be(this._def),innerType:this,catchValue:t,typeName:De.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return xo.create(this,e)}readonly(){return Gl.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const jb=/^c[^\s-]{8,}$/i,Kb=/^[a-z][a-z0-9]*$/,Jb=/[0-9A-HJKMNP-TV-Z]{26}/,Qb=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,ex=/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,tx=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,nx=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,ix=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,rx=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):n.precision===0?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function sx(n,e){return!!((e==="v4"||!e)&&nx.test(n)||(e==="v6"||!e)&&ix.test(n))}class ci extends Je{constructor(){super(...arguments),this._regex=(e,t,i)=>this.refinement(r=>e.test(r),{validation:t,code:se.invalid_string,...Re.errToObj(i)}),this.nonempty=e=>this.min(1,Re.errToObj(e)),this.trim=()=>new ci({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new ci({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new ci({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==me.string){const s=this._getOrReturnCtx(e);return _e(s,{code:se.invalid_type,expected:me.string,received:s.parsedType}),ze}const i=new jt;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:se.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:se.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?_e(r,{code:se.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&_e(r,{code:se.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")ex.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"email",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")tx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"emoji",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")Qb.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"uuid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")jb.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"cuid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")Kb.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"cuid2",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")Jb.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"ulid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),_e(r,{validation:"url",code:se.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"regex",code:se.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),_e(r,{code:se.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),_e(r,{code:se.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),_e(r,{code:se.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?rx(s).test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{code:se.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="ip"?sx(e.data,s.version)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"ip",code:se.invalid_string,message:s.message}),i.dirty()):ot.assertNever(s);return{status:i.value,value:e.data}}_addCheck(e){return new ci({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Re.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Re.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Re.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Re.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Re.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Re.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Re.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Re.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...Re.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Re.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Re.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Re.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Re.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Re.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Re.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Re.errToObj(t)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ci.create=n=>{var e;return new ci({checks:[],typeName:De.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};function ax(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class Kr extends Je{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==me.number){const s=this._getOrReturnCtx(e);return _e(s,{code:se.invalid_type,expected:me.number,received:s.parsedType}),ze}let i;const r=new jt;for(const s of this._def.checks)s.kind==="int"?ot.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),_e(i,{code:se.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?ax(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),_e(i,{code:se.not_finite,message:s.message}),r.dirty()):ot.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Re.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Re.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Re.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Re.toString(t))}setLimit(e,t,i,r){return new Kr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Re.toString(r)}]})}_addCheck(e){return new Kr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Re.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Re.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Re.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Re.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Re.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Re.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ot.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Kr.create=n=>new Kr({checks:[],typeName:De.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class Jr extends Je{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==me.bigint){const s=this._getOrReturnCtx(e);return _e(s,{code:se.invalid_type,expected:me.bigint,received:s.parsedType}),ze}let i;const r=new jt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:se.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):ot.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Re.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Re.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Re.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Re.toString(t))}setLimit(e,t,i,r){return new Jr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Re.toString(r)}]})}_addCheck(e){return new Jr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Re.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Re.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Re.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Re.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Re.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Jr.create=n=>{var e;return new Jr({checks:[],typeName:De.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};class Pl extends Je{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==me.boolean){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.boolean,received:i.parsedType}),ze}return nn(e.data)}}Pl.create=n=>new Pl({typeName:De.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class Fs extends Je{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==me.date){const s=this._getOrReturnCtx(e);return _e(s,{code:se.invalid_type,expected:me.date,received:s.parsedType}),ze}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return _e(s,{code:se.invalid_date}),ze}const i=new jt;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:se.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:se.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):ot.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Fs({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Re.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Re.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Fs.create=n=>new Fs({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:De.ZodDate,...Be(n)});class kl extends Je{_parse(e){if(this._getType(e)!==me.symbol){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.symbol,received:i.parsedType}),ze}return nn(e.data)}}kl.create=n=>new kl({typeName:De.ZodSymbol,...Be(n)});class ja extends Je{_parse(e){if(this._getType(e)!==me.undefined){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.undefined,received:i.parsedType}),ze}return nn(e.data)}}ja.create=n=>new ja({typeName:De.ZodUndefined,...Be(n)});class Ka extends Je{_parse(e){if(this._getType(e)!==me.null){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.null,received:i.parsedType}),ze}return nn(e.data)}}Ka.create=n=>new Ka({typeName:De.ZodNull,...Be(n)});class Bs extends Je{constructor(){super(...arguments),this._any=!0}_parse(e){return nn(e.data)}}Bs.create=n=>new Bs({typeName:De.ZodAny,...Be(n)});class Vr extends Je{constructor(){super(...arguments),this._unknown=!0}_parse(e){return nn(e.data)}}Vr.create=n=>new Vr({typeName:De.ZodUnknown,...Be(n)});class Oi extends Je{_parse(e){const t=this._getOrReturnCtx(e);return _e(t,{code:se.invalid_type,expected:me.never,received:t.parsedType}),ze}}Oi.create=n=>new Oi({typeName:De.ZodNever,...Be(n)});class Ol extends Je{_parse(e){if(this._getType(e)!==me.undefined){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.void,received:i.parsedType}),ze}return nn(e.data)}}Ol.create=n=>new Ol({typeName:De.ZodVoid,...Be(n)});class zn extends Je{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==me.array)return _e(t,{code:se.invalid_type,expected:me.array,received:t.parsedType}),ze;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(_e(t,{code:a?se.too_big:se.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(_e(t,{code:se.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(_e(t,{code:se.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new Vn(t,a,t.path,o)))).then(a=>jt.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new Vn(t,a,t.path,o)));return jt.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new zn({...this._def,minLength:{value:e,message:Re.toString(t)}})}max(e,t){return new zn({...this._def,maxLength:{value:e,message:Re.toString(t)}})}length(e,t){return new zn({...this._def,exactLength:{value:e,message:Re.toString(t)}})}nonempty(e){return this.min(1,e)}}zn.create=(n,e)=>new zn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:De.ZodArray,...Be(e)});function Br(n){if(n instanceof xt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=Ni.create(Br(i))}return new xt({...n._def,shape:()=>e})}else return n instanceof zn?new zn({...n._def,type:Br(n.element)}):n instanceof Ni?Ni.create(Br(n.unwrap())):n instanceof es?es.create(Br(n.unwrap())):n instanceof fi?fi.create(n.items.map(e=>Br(e))):n}class xt extends Je{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ot.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==me.object){const l=this._getOrReturnCtx(e);return _e(l,{code:se.invalid_type,expected:me.object,received:l.parsedType}),ze}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Oi&&this._def.unknownKeys==="strip"))for(const l in r.data)a.includes(l)||o.push(l);const c=[];for(const l of a){const u=s[l],f=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Vn(r,f,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Oi){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of o)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")o.length>0&&(_e(r,{code:se.unrecognized_keys,keys:o}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of o){const f=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Vn(r,f,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const f=await u.key;l.push({key:f,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>jt.mergeObjectSync(i,l)):jt.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return Re.errToObj,new xt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const c=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=Re.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new xt({...this._def,unknownKeys:"strip"})}passthrough(){return new xt({...this._def,unknownKeys:"passthrough"})}extend(e){return new xt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new xt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:De.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new xt({...this._def,catchall:e})}pick(e){const t={};return ot.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new xt({...this._def,shape:()=>t})}omit(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new xt({...this._def,shape:()=>t})}deepPartial(){return Br(this)}partial(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new xt({...this._def,shape:()=>t})}required(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Ni;)s=s._def.innerType;t[i]=s}}),new xt({...this._def,shape:()=>t})}keyof(){return Dh(ot.objectKeys(this.shape))}}xt.create=(n,e)=>new xt({shape:()=>n,unknownKeys:"strip",catchall:Oi.create(),typeName:De.ZodObject,...Be(e)});xt.strictCreate=(n,e)=>new xt({shape:()=>n,unknownKeys:"strict",catchall:Oi.create(),typeName:De.ZodObject,...Be(e)});xt.lazycreate=(n,e)=>new xt({shape:n,unknownKeys:"strip",catchall:Oi.create(),typeName:De.ZodObject,...Be(e)});class Ja extends Je{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Bn(o.ctx.common.issues));return _e(t,{code:se.invalid_union,unionErrors:a}),ze}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const c of i){const l={...t,common:{...t.common,issues:[]},parent:null},u=c._parseSync({data:t.data,path:t.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(c=>new Bn(c));return _e(t,{code:se.invalid_union,unionErrors:o}),ze}}get options(){return this._def.options}}Ja.create=(n,e)=>new Ja({options:n,typeName:De.ZodUnion,...Be(e)});const ka=n=>n instanceof to?ka(n.schema):n instanceof hi?ka(n.innerType()):n instanceof no?[n.value]:n instanceof cr?n.options:n instanceof io?Object.keys(n.enum):n instanceof ro?ka(n._def.innerType):n instanceof ja?[void 0]:n instanceof Ka?[null]:null;class mc extends Je{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==me.object)return _e(t,{code:se.invalid_type,expected:me.object,received:t.parsedType}),ze;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(_e(t,{code:se.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ze)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=ka(s.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new mc({typeName:De.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...Be(i)})}}function Fl(n,e){const t=Yi(n),i=Yi(e);if(n===e)return{valid:!0,data:n};if(t===me.object&&i===me.object){const r=ot.objectKeys(e),s=ot.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const c=Fl(n[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(t===me.array&&i===me.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],c=Fl(a,o);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return t===me.date&&i===me.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class Qa extends Je{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(Hu(s)||Hu(a))return ze;const o=Fl(s.value,a.value);return o.valid?((Gu(s)||Gu(a))&&t.dirty(),{status:t.value,value:o.data}):(_e(i,{code:se.invalid_intersection_types}),ze)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Qa.create=(n,e,t)=>new Qa({left:n,right:e,typeName:De.ZodIntersection,...Be(t)});class fi extends Je{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==me.array)return _e(i,{code:se.invalid_type,expected:me.array,received:i.parsedType}),ze;if(i.data.length<this._def.items.length)return _e(i,{code:se.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ze;!this._def.rest&&i.data.length>this._def.items.length&&(_e(i,{code:se.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new Vn(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>jt.mergeArray(t,a)):jt.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new fi({...this._def,rest:e})}}fi.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new fi({items:n,typeName:De.ZodTuple,rest:null,...Be(e)})};class eo extends Je{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==me.object)return _e(i,{code:se.invalid_type,expected:me.object,received:i.parsedType}),ze;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new Vn(i,o,i.path,o)),value:a._parse(new Vn(i,i.data[o],i.path,o))});return i.common.async?jt.mergeObjectAsync(t,r):jt.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof Je?new eo({keyType:e,valueType:t,typeName:De.ZodRecord,...Be(i)}):new eo({keyType:ci.create(),valueType:e,typeName:De.ZodRecord,...Be(t)})}}class Bl extends Je{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==me.map)return _e(i,{code:se.invalid_type,expected:me.map,received:i.parsedType}),ze;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,c],l)=>({key:r._parse(new Vn(i,o,i.path,[l,"key"])),value:s._parse(new Vn(i,c,i.path,[l,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return ze;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of a){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return ze;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}}}}Bl.create=(n,e,t)=>new Bl({valueType:e,keyType:n,typeName:De.ZodMap,...Be(t)});class Qr extends Je{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==me.set)return _e(i,{code:se.invalid_type,expected:me.set,received:i.parsedType}),ze;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(_e(i,{code:se.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(_e(i,{code:se.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(c){const l=new Set;for(const u of c){if(u.status==="aborted")return ze;u.status==="dirty"&&t.dirty(),l.add(u.value)}return{status:t.value,value:l}}const o=[...i.data.values()].map((c,l)=>s._parse(new Vn(i,c,i.path,l)));return i.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,t){return new Qr({...this._def,minSize:{value:e,message:Re.toString(t)}})}max(e,t){return new Qr({...this._def,maxSize:{value:e,message:Re.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Qr.create=(n,e)=>new Qr({valueType:n,minSize:null,maxSize:null,typeName:De.ZodSet,...Be(e)});class Ms extends Je{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==me.function)return _e(t,{code:se.invalid_type,expected:me.function,received:t.parsedType}),ze;function i(o,c){return Ul({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Dl(),qa].filter(l=>!!l),issueData:{code:se.invalid_arguments,argumentsError:c}})}function r(o,c){return Ul({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Dl(),qa].filter(l=>!!l),issueData:{code:se.invalid_return_type,returnTypeError:c}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof zs){const o=this;return nn(async function(...c){const l=new Bn([]),u=await o._def.args.parseAsync(c,s).catch(h=>{throw l.addIssue(i(c,h)),l}),f=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(f,s).catch(h=>{throw l.addIssue(r(f,h)),l})})}else{const o=this;return nn(function(...c){const l=o._def.args.safeParse(c,s);if(!l.success)throw new Bn([i(c,l.error)]);const u=Reflect.apply(a,this,l.data),f=o._def.returns.safeParse(u,s);if(!f.success)throw new Bn([r(u,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ms({...this._def,args:fi.create(e).rest(Vr.create())})}returns(e){return new Ms({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new Ms({args:e||fi.create([]).rest(Vr.create()),returns:t||Vr.create(),typeName:De.ZodFunction,...Be(i)})}}class to extends Je{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}to.create=(n,e)=>new to({getter:n,typeName:De.ZodLazy,...Be(e)});class no extends Je{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return _e(t,{received:t.data,code:se.invalid_literal,expected:this._def.value}),ze}return{status:"valid",value:e.data}}get value(){return this._def.value}}no.create=(n,e)=>new no({value:n,typeName:De.ZodLiteral,...Be(e)});function Dh(n,e){return new cr({values:n,typeName:De.ZodEnum,...Be(e)})}class cr extends Je{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return _e(t,{expected:ot.joinValues(i),received:t.parsedType,code:se.invalid_type}),ze}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),i=this._def.values;return _e(t,{received:t.data,code:se.invalid_enum_value,options:i}),ze}return nn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return cr.create(e)}exclude(e){return cr.create(this.options.filter(t=>!e.includes(t)))}}cr.create=Dh;class io extends Je{_parse(e){const t=ot.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==me.string&&i.parsedType!==me.number){const r=ot.objectValues(t);return _e(i,{expected:ot.joinValues(r),received:i.parsedType,code:se.invalid_type}),ze}if(t.indexOf(e.data)===-1){const r=ot.objectValues(t);return _e(i,{received:i.data,code:se.invalid_enum_value,options:r}),ze}return nn(e.data)}get enum(){return this._def.values}}io.create=(n,e)=>new io({values:n,typeName:De.ZodNativeEnum,...Be(e)});class zs extends Je{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==me.promise&&t.common.async===!1)return _e(t,{code:se.invalid_type,expected:me.promise,received:t.parsedType}),ze;const i=t.parsedType===me.promise?t.data:Promise.resolve(t.data);return nn(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}zs.create=(n,e)=>new zs({type:n,typeName:De.ZodPromise,...Be(e)});class hi extends Je{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===De.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{_e(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(a).then(o=>this._def.schema._parseAsync({data:o,path:i.path,parent:i})):this._def.schema._parseSync({data:a,path:i.path,parent:i})}if(r.type==="refinement"){const a=o=>{const c=r.refinement(o,s);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ze:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?ze:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ya(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>Ya(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);ot.assertNever(r)}}hi.create=(n,e,t)=>new hi({schema:n,typeName:De.ZodEffects,effect:e,...Be(t)});hi.createWithPreprocess=(n,e,t)=>new hi({schema:e,effect:{type:"preprocess",transform:n},typeName:De.ZodEffects,...Be(t)});class Ni extends Je{_parse(e){return this._getType(e)===me.undefined?nn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ni.create=(n,e)=>new Ni({innerType:n,typeName:De.ZodOptional,...Be(e)});class es extends Je{_parse(e){return this._getType(e)===me.null?nn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}es.create=(n,e)=>new es({innerType:n,typeName:De.ZodNullable,...Be(e)});class ro extends Je{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===me.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ro.create=(n,e)=>new ro({innerType:n,typeName:De.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Be(e)});class zl extends Je{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Il(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}zl.create=(n,e)=>new zl({innerType:n,typeName:De.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Be(e)});class Hl extends Je{_parse(e){if(this._getType(e)!==me.nan){const i=this._getOrReturnCtx(e);return _e(i,{code:se.invalid_type,expected:me.nan,received:i.parsedType}),ze}return{status:"valid",value:e.data}}}Hl.create=n=>new Hl({typeName:De.ZodNaN,...Be(n)});class ox extends Je{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class xo extends Je{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?ze:s.status==="dirty"?(t.dirty(),Yb(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?ze:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new xo({in:e,out:t,typeName:De.ZodPipeline})}}class Gl extends Je{_parse(e){const t=this._def.innerType._parse(e);return Ya(t)&&(t.value=Object.freeze(t.value)),t}}Gl.create=(n,e)=>new Gl({innerType:n,typeName:De.ZodReadonly,...Be(e)});const lx=(n,e={},t)=>n?Bs.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,l=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...l,fatal:c})}}):Bs.create();xt.lazycreate;var De;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(De||(De={}));const cx=(n,e={message:`Input not instance of ${n.name}`})=>lx(t=>t instanceof n,e),so=ci.create,gi=Kr.create;Hl.create;const ux=Jr.create;Pl.create;Fs.create;kl.create;ja.create;Ka.create;const dx=Bs.create;Vr.create;Oi.create;Ol.create;const Go=zn.create,vs=xt.create;xt.strictCreate;Ja.create;mc.create;Qa.create;fi.create;const fx=eo.create;Bl.create;Qr.create;Ms.create;to.create;const hx=no.create;cr.create;io.create;zs.create;hi.create;const Vl=Ni.create;es.create;hi.createWithPreprocess;xo.create;const px=vs({Name:so(),Properties:Vl(fx(so(),dx()))}),xr={Name:"minecraft:air"},mx=vs({DataVersion:gi().int().min(0),xPos:gi().int(),yPos:gi().int(),zPos:gi().int(),Status:hx("full").or(so()),LastUpdate:ux().min(0n),sections:Go(vs({Y:gi().int(),block_states:Vl(vs({palette:Go(px),data:Vl(cx(BigInt64Array))}))})),block_entities:Go(vs({x:gi().int(),y:gi().int(),z:gi().int(),id:so()}))});class ao{constructor(e){ne(this,"data");ne(this,"cx");ne(this,"cz");ne(this,"sections");this.data=mx.parse(e),this.cx=this.data.xPos,this.cz=this.data.zPos,this.sections=new Array(this.data.sections.length);for(let t=0;t<this.data.sections.length;t++)this.sections[t]={y:this.data.sections[t].Y*16,type:"unset"}}deserializeSection(e){if(this.sections[e].type!="unset")return;if(this.data.DataVersion<2529){console.warn(`Chunk ${this.cx} ${this.cz} with unsupported data version.`),this.sections[e]={y:this.sections[e].y,type:"empty"};return}const t=this.data.sections[e].block_states;if(t==null){this.sections[e]={y:this.sections[e].y,type:"empty"};return}const i=t.data;if(t.palette.length==0){this.sections[e]={y:this.sections[e].y,type:"fill",fill:xr};return}if(t.palette.length==1||i==null){this.sections[e]={y:this.sections[e].y,type:"fill",fill:t.palette[0]};return}const r=new Array(4096),s=Math.max(Math.ceil(Math.log2(t.palette.length)),4),a=BigInt((1<<s)-1),o=Math.floor(64/s);for(let c=0;c<4096;c++){const l=Math.floor(c/o),u=(c-l*o)*s,f=Number(i[l]>>BigInt(u)&a);if(f>=t.palette.length)throw new Error(`Error while deserializing section, palette index {${f}} is outside of palette {${t.palette.length}}.`);r[c]=t.palette[f]}this.sections[e]={y:this.sections[e].y,type:"blocks",blocks:r}}getSection(e){return this.sections[e]==null?null:(this.sections[e].type=="unset"&&this.deserializeSection(e),this.sections[e])}static getBlockSectionIndex(e,t,i){return(t&15)<<8|(i&15)<<4|e&15}getBlock(e,t,i){if(e<0||e>=16||i<0||i>=16)return xr;const r=this.sections.findIndex(a=>t>=a.y&&t<a.y+16),s=this.getSection(r);if(s==null)return xr;switch(s.type){case"unset":throw new Error("Deserialization failed.");case"empty":return xr;case"fill":return s.fill;case"blocks":{const a=ao.getBlockSectionIndex(e,t,i);return s.blocks[a]}}}forEachBlock(e){for(let t=0;t<this.sections.length;t++){const i=this.getSection(t);if(i==null)throw new Error("Failed to get section.");switch(i.type){case"unset":throw new Error("Deserialization failed.");case"empty":break;case"fill":{const r=i.fill;if(r.Name==xr.Name)break;for(let s=0;s<16;s++)for(let a=0;a<16;a++)for(let o=0;o<16;o++)e(s,i.y+a,o,r);break}case"blocks":{for(let r=0;r<16;r++)for(let s=0;s<16;s++)for(let a=0;a<16;a++){const o=ao.getBlockSectionIndex(r,s,a),c=i.blocks[o];c.Name!=xr.Name&&e(r,i.y+s,a,c)}break}}}}}const Wl=32,da=Wl*Wl,Wu=4096;class _x{constructor(e,t,i){ne(this,"file");ne(this,"rx");ne(this,"rz");ne(this,"offsets",new Uint32Array(da));ne(this,"lengths",new Uint8Array(da));this.file=e,this.rx=t,this.rz=i}async init(){const e=new Zt(await(await this.file.blob()).slice(0,4*da).arrayBuffer());e.endianness=Zt.BIG_ENDIAN;for(let t=0;t<da;t++)this.offsets[t]=e.readNumber("Uint8")<<16|e.readNumber("Uint8")<<8|e.readNumber("Uint8"),this.lengths[t]=e.readNumber("Uint8")}async getChunk(e,t){const i=(e&31)+(t&31)*Wl,r=this.offsets[i]*Wu,s=this.lengths[i]*Wu;if(r==0||s==0)return null;const a=new Zt(await(await this.file.blob()).slice(r,r+s).arrayBuffer());a.endianness=Zt.BIG_ENDIAN;const o=a.readNumber("Uint32");if(a.readNumber("Uint8")!=2)throw new Error("Invalid chunk compression method.");const l=Nl(Nh(Os.inflate(a.readBuffer(o-1))));return new ao(l)}}class gx{constructor(e){ne(this,"dir");this.dir=e}async getRegion(e,t){const i=await tn.getDeep(this.dir,`region/r.${e}.${t}.mca`);return i==null||i.type!=lt.File?null:new _x(i,e,t)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="155",vx=0,$u=1,bx=2,Uh=1,xx=2,ri=3,Fi=0,en=1,li=2,Di=0,Wr=1,Xu=2,Zu=3,qu=4,Ex=5,zr=100,yx=101,Sx=102,Yu=103,ju=104,Mx=200,wx=201,Tx=202,Ax=203,Ih=204,Ph=205,Rx=206,Cx=207,Lx=208,Nx=209,Dx=210,Ux=0,Ix=1,Px=2,$l=3,kx=4,Ox=5,Fx=6,Bx=7,kh=0,zx=1,Hx=2,Ui=0,Gx=1,Vx=2,Wx=3,$x=4,Xx=5,Oh=300,ts=301,ns=302,Xl=303,Zl=304,Eo=306,ql=1e3,Tn=1001,Yl=1002,Xt=1003,Ku=1004,Vo=1005,gn=1006,Zx=1007,Hs=1008,Ii=1009,qx=1010,Yx=1011,gc=1012,Fh=1013,Ti=1014,Ai=1015,Gs=1016,Bh=1017,zh=1018,nr=1020,jx=1021,An=1023,Kx=1024,Jx=1025,ir=1026,is=1027,Qx=1028,Hh=1029,eE=1030,Gh=1031,Vh=1033,Wo=33776,$o=33777,Xo=33778,Zo=33779,Ju=35840,Qu=35841,ed=35842,td=35843,tE=36196,nd=37492,id=37496,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,dd=37815,fd=37816,hd=37817,pd=37818,md=37819,_d=37820,gd=37821,qo=36492,nE=36283,vd=36284,bd=36285,xd=36286,Wh=3e3,rr=3001,iE=3200,rE=3201,$h=0,sE=1,sr="",We="srgb",Wn="srgb-linear",Xh="display-p3",Yo=7680,aE=519,oE=512,lE=513,cE=514,uE=515,dE=516,fE=517,hE=518,pE=519,Ed=35044,yd="300 es",jl=1035,ui=2e3,oo=2001;let _r=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Kl=180/Math.PI;function qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function mE(n,e){return(n%e+e)%e}function Ko(n,e,t){return(1-t)*n+t*e}function Sd(n){return(n&n-1)===0&&n!==0}function Jl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],g=r[0],m=r[3],p=r[6],y=r[1],v=r[4],E=r[7],w=r[2],R=r[5],A=r[8];return s[0]=a*g+o*y+c*w,s[3]=a*m+o*v+c*R,s[6]=a*p+o*E+c*A,s[1]=l*g+u*y+f*w,s[4]=l*m+u*v+f*R,s[7]=l*p+u*E+f*A,s[2]=d*g+h*y+_*w,s[5]=d*m+h*v+_*R,s[8]=d*p+h*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*l-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=h*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new Ze;function Zh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Md={};function ws(n){n in Md||(Md[n]=!0,console.warn(n))}function $r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _E=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gE=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vE(n){return n.convertSRGBToLinear().applyMatrix3(gE)}function bE(n){return n.applyMatrix3(_E).convertLinearToSRGB()}const xE={[Wn]:n=>n,[We]:n=>n.convertSRGBToLinear(),[Xh]:vE},EE={[Wn]:n=>n,[We]:n=>n.convertLinearToSRGB(),[Xh]:bE},En={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Wn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xE[e],r=EE[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Er;class qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=lo("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$r(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($r(t[i]/255)*255):t[i]=$r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yE=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(el(r[a].image)):s.push(el(r[a]))}else s=el(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function el(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;class hn extends _r{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Tn,r=Tn,s=gn,a=Hs,o=An,c=Ii,l=hn.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=qs(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===rr?We:sr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ql:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ql:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?rr:Wh}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rr?We:sr}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Oh;hn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(h+1)/2,w=(p+1)/2,R=(u+d)/4,A=(f+g)/4,z=(_+m)/4;return v>E&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=z/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=z/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(d-u)/y,this.w=Math.acos((l+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ME extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===rr?We:sr),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends ME{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jh extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wE extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f!==g||c!==d||l!==h||u!==_){let m=1-o;const p=c*d+l*h+u*_+f*g,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),R=Math.atan2(w,p*y);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const E=o*y;if(c=c*m+d*E,l=l*m+h*E,u=u*m+_*E,f=f*m+g*E,m===1-o){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*f+c*h-l*d,e[t+1]=c*_+u*d+l*f-o*h,e[t+2]=l*_+u*h+o*d-c*f,e[t+3]=u*_-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"YZX":this._x=d*u*f+l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f-d*h*_;break;case"XZY":this._x=d*u*f-l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*i,u=c*i+o*t-s*r,f=c*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=l*c+d*-s+u*-o-f*-a,this.y=u*c+d*-a+f*-s-l*-o,this.z=f*c+d*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new q,wd=new Ys;class js{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox),yr.applyMatrix4(e.matrixWorld),this.union(yr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Qn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else r.boundingBox===null&&r.computeBoundingBox(),yr.copy(r.boundingBox),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),fa.subVectors(this.max,fs),Sr.subVectors(e.a,fs),Mr.subVectors(e.b,fs),wr.subVectors(e.c,fs),vi.subVectors(Mr,Sr),bi.subVectors(wr,Mr),Vi.subVectors(Sr,wr);let t=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,bi.z,0,-bi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-Vi.y,Vi.x,0];return!nl(t,Sr,Mr,wr,fa)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Sr,Mr,wr,fa))?!1:(ha.crossVectors(vi,bi),t=[ha.x,ha.y,ha.z],nl(t,Sr,Mr,wr,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new q,new q,new q,new q,new q,new q,new q,new q],Qn=new q,yr=new js,Sr=new q,Mr=new q,wr=new q,vi=new q,bi=new q,Vi=new q,fs=new q,fa=new q,ha=new q,Wi=new q;function nl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const TE=new js,hs=new q,il=new q;class vc{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(il)),this.expandByPoint(hs.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new q,rl=new q,pa=new q,xi=new q,sl=new q,ma=new q,al=new q;class AE{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rl.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=xi.dot(this.direction),c=-xi.dot(pa),l=xi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*c-o,d=a*o-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(rl).addScaledVector(pa,d),h}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,r,s){sl.subVectors(t,e),ma.subVectors(i,e),al.crossVectors(sl,ma);let a=this.direction.dot(al),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const c=o*this.direction.dot(ma.crossVectors(xi,ma));if(c<0)return null;const l=o*this.direction.dot(sl.cross(xi));if(l<0||c+l>a)return null;const u=-o*xi.dot(al);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,_,g,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,_,g,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,g=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+_*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=_+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,_=l*u,g=l*f;t[0]=d+g*o,t[4]=_*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,_=l*u,g=l*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,g=o*f;t[0]=c*u,t[4]=_*l-h,t[8]=d*l+g,t[1]=c*f,t[5]=g*l+d,t[9]=h*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*c,h=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+g,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,CE)}lookAt(e,t,i){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Ei.crossVectors(i,sn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Ei.crossVectors(i,sn)),Ei.normalize(),_a.crossVectors(sn,Ei),r[0]=Ei.x,r[4]=_a.x,r[8]=sn.x,r[1]=Ei.y,r[5]=_a.y,r[9]=sn.y,r[2]=Ei.z,r[6]=_a.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],v=i[7],E=i[11],w=i[15],R=r[0],A=r[4],z=r[8],b=r[12],S=r[1],O=r[5],ee=r[9],B=r[13],U=r[2],D=r[6],Z=r[10],C=r[14],N=r[3],W=r[7],Y=r[11],I=r[15];return s[0]=a*R+o*S+c*U+l*N,s[4]=a*A+o*O+c*D+l*W,s[8]=a*z+o*ee+c*Z+l*Y,s[12]=a*b+o*B+c*C+l*I,s[1]=u*R+f*S+d*U+h*N,s[5]=u*A+f*O+d*D+h*W,s[9]=u*z+f*ee+d*Z+h*Y,s[13]=u*b+f*B+d*C+h*I,s[2]=_*R+g*S+m*U+p*N,s[6]=_*A+g*O+m*D+p*W,s[10]=_*z+g*ee+m*Z+p*Y,s[14]=_*b+g*B+m*C+p*I,s[3]=y*R+v*S+E*U+w*N,s[7]=y*A+v*O+E*D+w*W,s[11]=y*z+v*ee+E*Z+w*Y,s[15]=y*b+v*B+E*C+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*h-i*c*h)+g*(+t*c*h-t*l*d+s*a*d-r*a*h+r*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+i*a*h+s*o*u-i*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=f*m*l-g*d*l+g*c*h-o*m*h-f*c*p+o*d*p,v=_*d*l-u*m*l-_*c*h+a*m*h+u*c*p-a*d*p,E=u*g*l-_*f*l+_*o*h-a*g*h-u*o*p+a*f*p,w=_*f*c-u*g*c-_*o*d+a*g*d+u*o*m-a*f*m,R=t*y+i*v+r*E+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*A,e[2]=(o*m*s-g*c*s+g*r*l-i*m*l-o*r*p+i*c*p)*A,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*h-i*c*h)*A,e[4]=v*A,e[5]=(u*m*s-_*d*s+_*r*h-t*m*h-u*r*p+t*d*p)*A,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*p-t*c*p)*A,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*A,e[8]=E*A,e[9]=(_*f*s-u*g*s-_*i*h+t*g*h+u*i*p-t*f*p)*A,e[10]=(a*g*s-_*o*s+_*i*l-t*g*l-a*i*p+t*o*p)*A,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*h-t*o*h)*A,e[12]=w*A,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*A,e[14]=(_*o*r-a*g*r-_*i*c+t*g*c+a*i*m-t*o*m)*A,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,_=s*f,g=a*u,m=a*f,p=o*f,y=c*l,v=c*u,E=c*f,w=i.x,R=i.y,A=i.z;return r[0]=(1-(g+p))*w,r[1]=(h+E)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(h-E)*R,r[5]=(1-(d+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(m-y)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const a=Tr.set(r[4],r[5],r[6]).length(),o=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const l=1/s,u=1/a,f=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ui){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,_;if(o===ui)h=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===oo)h=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ui){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*l,h=(i+r)*u;let _,g;if(o===ui)_=(a+s)*f,g=-2*f;else if(o===oo)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tr=new q,yn=new kt,RE=new q(0,0,0),CE=new q(1,1,1),Ei=new q,_a=new q,sn=new q,Td=new kt,Ad=new Ys;class Ks{constructor(e=0,t=0,i=0,r=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const Rd=new q,Ar=new Ys,ti=new kt,ga=new q,ps=new q,NE=new q,DE=new Ys,Cd=new q(1,0,0),Ld=new q(0,1,0),Nd=new q(0,0,1),UE={type:"added"},Dd={type:"removed"};class pn extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new q,t=new Ks,i=new Ys,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ps,ga,this.up):ti.lookAt(ga,ps,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ti),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(UE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,DE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new q,ni=new q,ol=new q,ii=new q,Rr=new q,Cr=new q,Ud=new q,ll=new q,cl=new q,ul=new q;let va=!1;class wn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),ni.subVectors(i,t),ol.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(ni),c=Sn.dot(ol),l=ni.dot(ni),u=ni.dot(ol),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,h=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,i,r,s,a,o,c){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ii),c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),ni.subVectors(e,t),Sn.cross(ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Sn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,i),Cr.subVectors(s,i),ll.subVectors(e,i);const c=Rr.dot(ll),l=Cr.dot(ll);if(c<=0&&l<=0)return t.copy(i);cl.subVectors(e,r);const u=Rr.dot(cl),f=Cr.dot(cl);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Rr,a);ul.subVectors(e,s);const h=Rr.dot(ul),_=Cr.dot(ul);if(_>=0&&h<=_)return t.copy(s);const g=h*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Cr,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return Ud.subVectors(s,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(Ud,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Rr,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let IE=0;class Js extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Wr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Ph,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ba={h:0,s:0,l:0};function dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=En.workingColorSpace){return this.r=e,this.g=t,this.b=i,En.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=En.workingColorSpace){if(e=mE(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=dl(a,s,e+1/3),this.g=dl(a,s,e),this.b=dl(a,s,e-1/3)}return En.toWorkingColorSpace(this,r),this}setStyle(e,t=We){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return En.fromWorkingColorSpace(zt.copy(this),e),Math.round(Jt(zt.r*255,0,255))*65536+Math.round(Jt(zt.g*255,0,255))*256+Math.round(Jt(zt.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=We){En.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==We?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(ba);const i=Ko(Mn.h,ba.h,t),r=Ko(Mn.s,ba.s,t),s=Ko(Mn.l,ba.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new _t;_t.NAMES=Jh;class Qh extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new q,xa=new dt;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ed,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ed&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ep extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tp extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pi extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PE=0;const _n=new kt,fl=new pn,Lr=new q,an=new js,ms=new js,Dt=new q;class zi extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?tp:ep)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(an.min,ms.min),an.expandByPoint(Dt),Dt.addVectors(an.max,ms.max),an.expandByPoint(Dt)):(an.expandByPoint(ms.min),an.expandByPoint(ms.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),Dt.add(Lr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<o;S++)l[S]=new q,u[S]=new q;const f=new q,d=new q,h=new q,_=new dt,g=new dt,m=new dt,p=new q,y=new q;function v(S,O,ee){f.fromArray(r,S*3),d.fromArray(r,O*3),h.fromArray(r,ee*3),_.fromArray(a,S*2),g.fromArray(a,O*2),m.fromArray(a,ee*2),d.sub(f),h.sub(f),g.sub(_),m.sub(_);const B=1/(g.x*m.y-m.x*g.y);isFinite(B)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(B),y.copy(h).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(B),l[S].add(p),l[O].add(p),l[ee].add(p),u[S].add(y),u[O].add(y),u[ee].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let S=0,O=E.length;S<O;++S){const ee=E[S],B=ee.start,U=ee.count;for(let D=B,Z=B+U;D<Z;D+=3)v(i[D+0],i[D+1],i[D+2])}const w=new q,R=new q,A=new q,z=new q;function b(S){A.fromArray(s,S*3),z.copy(A);const O=l[S];w.copy(O),w.sub(A.multiplyScalar(A.dot(O))).normalize(),R.crossVectors(z,O);const B=R.dot(u[S])<0?-1:1;c[S*4]=w.x,c[S*4+1]=w.y,c[S*4+2]=w.z,c[S*4+3]=B}for(let S=0,O=E.length;S<O;++S){const ee=E[S],B=ee.start,U=ee.count;for(let D=B,Z=B+U;D<Z;D+=3)b(i[D+0]),b(i[D+1]),b(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,a=new q,o=new q,c=new q,l=new q,u=new q,f=new q;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?h=c[g]*o.data.stride+o.offset:h=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[h++]}return new Hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Id=new kt,$i=new AE,Ea=new vc,Pd=new q,Nr=new q,Dr=new q,Ur=new q,hl=new q,ya=new q,Sa=new dt,Ma=new dt,wa=new dt,kd=new q,Od=new q,Fd=new q,Ta=new q,Aa=new q;class di extends pn{constructor(e=new zi,t=new Qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(hl.fromBufferAttribute(f,e),a?ya.addScaledVector(hl,u):ya.addScaledVector(hl.sub(t),u))}t.add(ya)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Ea.containsPoint($i.origin)===!1&&($i.intersectSphere(Ea,Pd)===null||$i.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Id.copy(s).invert(),$i.copy(e.ray).applyMatrix4(Id),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,w=v;E<w;E+=3){const R=o.getX(E),A=o.getX(E+1),z=o.getX(E+2);r=Ra(this,p,e,i,l,u,f,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=Ra(this,a,e,i,l,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,w=v;E<w;E+=3){const R=E,A=E+1,z=E+2;r=Ra(this,p,e,i,l,u,f,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=m,v=m+1,E=m+2;r=Ra(this,a,e,i,l,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kE(n,e,t,i,r,s,a,o){let c;if(e.side===en?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Fi,o),c===null)return null;Aa.copy(o),Aa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Aa);return l<t.near||l>t.far?null:{distance:l,point:Aa.clone(),object:n}}function Ra(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Nr),n.getVertexPosition(c,Dr),n.getVertexPosition(l,Ur);const u=kE(n,e,t,i,Nr,Dr,Ur,Ta);if(u){r&&(Sa.fromBufferAttribute(r,o),Ma.fromBufferAttribute(r,c),wa.fromBufferAttribute(r,l),u.uv=wn.getInterpolation(Ta,Nr,Dr,Ur,Sa,Ma,wa,new dt)),s&&(Sa.fromBufferAttribute(s,o),Ma.fromBufferAttribute(s,c),wa.fromBufferAttribute(s,l),u.uv1=wn.getInterpolation(Ta,Nr,Dr,Ur,Sa,Ma,wa,new dt),u.uv2=u.uv1),a&&(kd.fromBufferAttribute(a,o),Od.fromBufferAttribute(a,c),Fd.fromBufferAttribute(a,l),u.normal=wn.getInterpolation(Ta,Nr,Dr,Ur,kd,Od,Fd,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new q,materialIndex:0};wn.getNormal(Nr,Dr,Ur,f.normal),u.face=f}return u}class Qs extends zi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pi(l,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(f,2));function _(g,m,p,y,v,E,w,R,A,z,b){const S=E/A,O=w/z,ee=E/2,B=w/2,U=R/2,D=A+1,Z=z+1;let C=0,N=0;const W=new q;for(let Y=0;Y<Z;Y++){const I=Y*O-B;for(let K=0;K<D;K++){const ae=K*S-ee;W[g]=ae*y,W[m]=I*v,W[p]=U,l.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),f.push(K/A),f.push(1-Y/z),C+=1}}for(let Y=0;Y<z;Y++)for(let I=0;I<A;I++){const K=d+I+D*Y,ae=d+I+D*(Y+1),fe=d+(I+1)+D*(Y+1),ue=d+(I+1)+D*Y;c.push(K,ae,ue),c.push(ae,fe,ue),N+=6}o.addGroup(h,N,b),h+=N,d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=rs(n[t]);for(const r in i)e[r]=i[r]}return e}function OE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){return n.getRenderTarget()===null?n.outputColorSpace:Wn}const FE={clone:rs,merge:$t};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ip extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends ip{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Pr=1;class HE extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new vn(Ir,Pr,e,t);r.layers=this.layers,this.add(r);const s=new vn(Ir,Pr,e,t);s.layers=this.layers,this.add(s);const a=new vn(Ir,Pr,e,t);a.layers=this.layers,this.add(a);const o=new vn(Ir,Pr,e,t);o.layers=this.layers,this.add(o);const c=new vn(Ir,Pr,e,t);c.layers=this.layers,this.add(c);const l=new vn(Ir,Pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class rp extends hn{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rr?We:sr),this.texture=new rp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qs(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Di});s.uniforms.tEquirect.value=t;const a=new di(r,s),o=t.minFilter;return t.minFilter===Hs&&(t.minFilter=gn),new HE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const pl=new q,VE=new q,WE=new Ze;class Zi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pl.subVectors(i,t).cross(VE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||WE.getNormalMatrix(e),r=this.coplanarPoint(pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new vc,Ca=new q;class sp{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],_=r[9],g=r[10],m=r[11],p=r[12],y=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-s,d-l,m-h,E-p).normalize(),i[1].setComponents(c+s,d+l,m+h,E+p).normalize(),i[2].setComponents(c+a,d+u,m+_,E+y).normalize(),i[3].setComponents(c-a,d-u,m-_,E-y).normalize(),i[4].setComponents(c-o,d-f,m-g,E-v).normalize(),t===ui)i[5].setComponents(c+o,d+f,m+g,E+v).normalize();else if(t===oo)i[5].setComponents(o,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $E(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,d=l.usage,h=n.createBuffer();n.bindBuffer(u,h),n.bufferData(u,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,h=u.updateRange;n.bindBuffer(f,l),h.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class bc extends zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let v=0;v<l;v++){const E=v*f-s;_.push(E,-y,0),g.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const v=y+l*p,E=y+l*(p+1),w=y+1+l*(p+1),R=y+1+l*p;h.push(v,E,R),h.push(E,w,R)}this.setIndex(h),this.setAttribute("position",new Pi(_,3)),this.setAttribute("normal",new Pi(g,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ey=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ky=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,NS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,KS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:XE,alphahash_pars_fragment:ZE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:jE,alphatest_pars_fragment:KE,aomap_fragment:JE,aomap_pars_fragment:QE,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:hy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:_y,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:by,colorspace_fragment:xy,colorspace_pars_fragment:Ey,envmap_fragment:yy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Oy,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Ly,gradientmap_pars_fragment:Ny,lightmap_fragment:Dy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Py,lights_pars_begin:ky,lights_toon_fragment:Fy,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Wy,lights_fragment_maps:$y,lights_fragment_end:Xy,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:jy,map_fragment:Ky,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:aS,normal_fragment_begin:oS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:dS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:_S,opaque_fragment:gS,packing:vS,premultiplied_alpha_fragment:bS,project_vertex:xS,dithering_fragment:ES,dithering_pars_fragment:yS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:RS,skinbase_vertex:CS,skinning_pars_vertex:LS,skinning_vertex:NS,skinnormal_vertex:DS,specularmap_fragment:US,specularmap_pars_fragment:IS,tonemapping_fragment:PS,tonemapping_pars_fragment:kS,transmission_fragment:OS,transmission_pars_fragment:FS,uv_pars_fragment:BS,uv_pars_vertex:zS,uv_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,backgroundCube_vert:$S,backgroundCube_frag:XS,cube_vert:ZS,cube_frag:qS,depth_vert:YS,depth_frag:jS,distanceRGBA_vert:KS,distanceRGBA_frag:JS,equirect_vert:QS,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:aM,meshmatcap_vert:oM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:dM,meshphong_frag:fM,meshphysical_vert:hM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:_M,points_vert:gM,points_frag:vM,shadow_vert:bM,shadow_frag:xM,sprite_vert:EM,sprite_frag:yM},de={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},In={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};In.physical={uniforms:$t([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const La={r:0,b:0,g:0};function SM(n,e,t,i,r,s,a){const o=new _t(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function _(m,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),y=!0),n.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),y=!0;break}(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Eo)?(u===void 0&&(u=new di(new Qs(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:rs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==We,(f!==v||d!==v.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new di(new bc(2,2),new dr({name:"BackgroundMaterial",uniforms:rs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(La,np(n)),i.buffers.color.setClear(La.r,La.g,La.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:_}}function MM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function f(U,D,Z,C,N){let W=!1;if(a){const Y=g(C,Z,D);l!==Y&&(l=Y,h(l.object)),W=p(U,C,Z,N),W&&y(U,C,Z,N)}else{const Y=D.wireframe===!0;(l.geometry!==C.id||l.program!==Z.id||l.wireframe!==Y)&&(l.geometry=C.id,l.program=Z.id,l.wireframe=Y,W=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,z(U,D,Z,C),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,D,Z){const C=Z.wireframe===!0;let N=o[U.id];N===void 0&&(N={},o[U.id]=N);let W=N[D.id];W===void 0&&(W={},N[D.id]=W);let Y=W[C];return Y===void 0&&(Y=m(d()),W[C]=Y),Y}function m(U){const D=[],Z=[],C=[];for(let N=0;N<r;N++)D[N]=0,Z[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:C,object:U,attributes:{},index:null}}function p(U,D,Z,C){const N=l.attributes,W=D.attributes;let Y=0;const I=Z.getAttributes();for(const K in I)if(I[K].location>=0){const fe=N[K];let ue=W[K];if(ue===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),fe===void 0||fe.attribute!==ue||ue&&fe.data!==ue.data)return!0;Y++}return l.attributesNum!==Y||l.index!==C}function y(U,D,Z,C){const N={},W=D.attributes;let Y=0;const I=Z.getAttributes();for(const K in I)if(I[K].location>=0){let fe=W[K];fe===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(fe=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(fe=U.instanceColor));const ue={};ue.attribute=fe,fe&&fe.data&&(ue.data=fe.data),N[K]=ue,Y++}l.attributes=N,l.attributesNum=Y,l.index=C}function v(){const U=l.newAttributes;for(let D=0,Z=U.length;D<Z;D++)U[D]=0}function E(U){w(U,0)}function w(U,D){const Z=l.newAttributes,C=l.enabledAttributes,N=l.attributeDivisors;Z[U]=1,C[U]===0&&(n.enableVertexAttribArray(U),C[U]=1),N[U]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,D),N[U]=D)}function R(){const U=l.newAttributes,D=l.enabledAttributes;for(let Z=0,C=D.length;Z<C;Z++)D[Z]!==U[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function A(U,D,Z,C,N,W,Y){Y===!0?n.vertexAttribIPointer(U,D,Z,N,W):n.vertexAttribPointer(U,D,Z,C,N,W)}function z(U,D,Z,C){if(i.isWebGL2===!1&&(U.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=C.attributes,W=Z.getAttributes(),Y=D.defaultAttributeValues;for(const I in W){const K=W[I];if(K.location>=0){let ae=N[I];if(ae===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){const fe=ae.normalized,ue=ae.itemSize,be=t.get(ae);if(be===void 0)continue;const Ie=be.buffer,Le=be.type,rt=be.bytesPerElement,Ft=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||ae.gpuType===Fh);if(ae.isInterleavedBufferAttribute){const He=ae.data,G=He.stride,Nt=ae.offset;if(He.isInstancedInterleavedBuffer){for(let Ce=0;Ce<K.locationSize;Ce++)w(K.location+Ce,He.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)E(K.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ce=0;Ce<K.locationSize;Ce++)A(K.location+Ce,ue/K.locationSize,Le,fe,G*rt,(Nt+ue/K.locationSize*Ce)*rt,Ft)}else{if(ae.isInstancedBufferAttribute){for(let He=0;He<K.locationSize;He++)w(K.location+He,ae.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<K.locationSize;He++)E(K.location+He);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let He=0;He<K.locationSize;He++)A(K.location+He,ue/K.locationSize,Le,fe,ue*rt,ue/K.locationSize*He*rt,Ft)}}else if(Y!==void 0){const fe=Y[I];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(K.location,fe);break;case 3:n.vertexAttrib3fv(K.location,fe);break;case 4:n.vertexAttrib4fv(K.location,fe);break;default:n.vertexAttrib1fv(K.location,fe)}}}}R()}function b(){ee();for(const U in o){const D=o[U];for(const Z in D){const C=D[Z];for(const N in C)_(C[N].object),delete C[N];delete D[Z]}delete o[U]}}function S(U){if(o[U.id]===void 0)return;const D=o[U.id];for(const Z in D){const C=D[Z];for(const N in C)_(C[N].object),delete C[N];delete D[Z]}delete o[U.id]}function O(U){for(const D in o){const Z=o[D];if(Z[U.id]===void 0)continue;const C=Z[U.id];for(const N in C)_(C[N].object),delete C[N];delete Z[U.id]}}function ee(){B(),u=!0,l!==c&&(l=c,h(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function wM(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,h;if(r)d=n,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function TM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),w=v&&E,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function AM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zi,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const y=s?0:i,v=y*4;let E=p.clippingState||null;c.value=E,E=u(_,d,v,h);for(let w=0;w!==v;++w)E[w]=t[w];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=h+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=h;v!==g;++v,E+=4)a.copy(f[v]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function RM(n){let e=new WeakMap;function t(a,o){return o===Xl?a.mapping=ts:o===Zl&&(a.mapping=ns),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Xl||o===Zl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new GE(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CM extends ip{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,Bd=[.125,.215,.35,.446,.526,.582],ji=20,ml=new CM,zd=new _t;let _l=null;const qi=(1+Math.sqrt(5))/2,kr=1/qi,Hd=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,qi,kr),new q(0,qi,-kr),new q(kr,0,qi),new q(-kr,0,qi),new q(qi,kr,0),new q(-qi,kr,0)];class Gd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_l=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l),e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Gs,format:An,colorSpace:Wn,depthBuffer:!1},r=Vd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(s)),this._blurMaterial=NM(s,e,t)}return r}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,i,r){const o=new vn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zd),u.toneMapping=Ui,u.autoClear=!1;const h=new Qh({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new di(new Qs,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(zd),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Na(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new di(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ml)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hd[(r-1)%Hd.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new di(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ji-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):ji;m>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let y=0;for(let A=0;A<ji;++A){const z=A/g,b=Math.exp(-z*z/2);p.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const E=this._sizeLods[r],w=3*E*(r>v-Hr?r-v+Hr:0),R=4*(this._cubeSize-E);Na(t,w,R,3*E,2*E),c.setRenderTarget(t),c.render(f,ml)}}function LM(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+Bd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Hr?c=Bd[a-n+Hr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*h),v=new Float32Array(m*_*h),E=new Float32Array(p*_*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,z=R>2?0:-1,b=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];y.set(b,g*_*R),v.set(d,m*_*R);const S=[R,R,R,R,R,R];E.set(S,p*_*R)}const w=new zi;w.setAttribute("position",new Hn(y,g)),w.setAttribute("uv",new Hn(v,m)),w.setAttribute("faceIndex",new Hn(E,p)),e.push(w),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vd(n,e,t){const i=new ur(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function NM(n,e,t){const i=new Float32Array(ji),r=new q(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Wd(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function $d(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Xl||c===Zl,u=c===ts||c===ns;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Gd(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Gd(n));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function UM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IM(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const g=h[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let v=0,E=y.length;v<E;v+=3){const w=y[v+0],R=y[v+1],A=y[v+2];d.push(w,R,R,A,A,w)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const w=v+0,R=v+1,A=v+2;d.push(w,R,R,A,A,w)}}else return;const m=new(Zh(d)?tp:ep)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function PM(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,h){n.drawElements(s,h,o,d*c),t.update(h,s,1)}function f(d,h,_){if(_===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,h,o,d*c,_),t.update(h,s,_)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function kM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function OM(n,e){return n[0]-e[0]}function FM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function BM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=h!==void 0?h.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let U=function(){ee.dispose(),s.delete(u),u.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let z=0;y===!0&&(z=1),v===!0&&(z=2),E===!0&&(z=3);let b=u.attributes.position.count*z,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*S*4*_),ee=new jh(O,b,S,_);ee.type=Ai,ee.needsUpdate=!0;const B=z*4;for(let D=0;D<_;D++){const Z=w[D],C=R[D],N=A[D],W=b*S*4*D;for(let Y=0;Y<Z.count;Y++){const I=Y*B;y===!0&&(a.fromBufferAttribute(Z,Y),O[W+I+0]=a.x,O[W+I+1]=a.y,O[W+I+2]=a.z,O[W+I+3]=0),v===!0&&(a.fromBufferAttribute(C,Y),O[W+I+4]=a.x,O[W+I+5]=a.y,O[W+I+6]=a.z,O[W+I+7]=0),E===!0&&(a.fromBufferAttribute(N,Y),O[W+I+8]=a.x,O[W+I+9]=a.y,O[W+I+10]=a.z,O[W+I+11]=N.itemSize===4?a.w:1)}}g={count:_,texture:ee,size:new dt(b,S)},s.set(u,g),u.addEventListener("dispose",U)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==h){_=[];for(let v=0;v<h;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<h;v++){const E=_[v];E[0]=v,E[1]=d[v]}_.sort(FM);for(let v=0;v<8;v++)v<h&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(OM);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const E=o[v],w=E[0],R=E[1];w!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+v)!==g[w]&&u.setAttribute("morphTarget"+v,g[w]),m&&u.getAttribute("morphNormal"+v)!==m[w]&&u.setAttribute("morphNormal"+v,m[w]),r[v]=R,p+=R):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function zM(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const op=new hn,lp=new jh,cp=new wE,up=new rp,Xd=[],Zd=[],qd=new Float32Array(16),Yd=new Float32Array(9),jd=new Float32Array(4);function ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xd[r];if(s===void 0&&(s=new Float32Array(r),Xd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yo(n,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;jd.set(i),n.uniformMatrix2fv(this.addr,!1,jd),Lt(t,i)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Yd.set(i),n.uniformMatrix3fv(this.addr,!1,Yd),Lt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;qd.set(i),n.uniformMatrix4fv(this.addr,!1,qd),Lt(t,i)}}function qM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function JM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function nw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||op,r)}function iw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cp,r)}function rw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||up,r)}function sw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lp,r)}function aw(n){switch(n){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return $M;case 35675:return XM;case 35676:return ZM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return jM;case 35669:case 35673:return KM;case 5125:return JM;case 36294:return QM;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function ow(n,e){n.uniform1fv(this.addr,e)}function lw(n,e){const t=ls(e,this.size,2);n.uniform2fv(this.addr,t)}function cw(n,e){const t=ls(e,this.size,3);n.uniform3fv(this.addr,t)}function uw(n,e){const t=ls(e,this.size,4);n.uniform4fv(this.addr,t)}function dw(n,e){const t=ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fw(n,e){const t=ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hw(n,e){const t=ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pw(n,e){n.uniform1iv(this.addr,e)}function mw(n,e){n.uniform2iv(this.addr,e)}function _w(n,e){n.uniform3iv(this.addr,e)}function gw(n,e){n.uniform4iv(this.addr,e)}function vw(n,e){n.uniform1uiv(this.addr,e)}function bw(n,e){n.uniform2uiv(this.addr,e)}function xw(n,e){n.uniform3uiv(this.addr,e)}function Ew(n,e){n.uniform4uiv(this.addr,e)}function yw(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||op,s[a])}function Sw(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cp,s[a])}function Mw(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||up,s[a])}function ww(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||lp,s[a])}function Tw(n){switch(n){case 5126:return ow;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return _w;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return bw;case 36295:return xw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return ww}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=aw(t.type)}}class Rw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Tw(t.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Kd(n,e){n.seq.push(e),n.map[e.id]=e}function Lw(n,e,t){const i=n.name,r=i.length;for(gl.lastIndex=0;;){const s=gl.exec(i),a=gl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Kd(t,l===void 0?new Aw(o,n,e):new Rw(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Cw(o),Kd(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Lw(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Jd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Nw=0;function Dw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Uw(n){switch(n){case Wn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Qd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dw(n.getShaderSource(e),a)}else return r}function Iw(n,e){const t=Uw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Pw(n,e){let t;switch(e){case Gx:t="Linear";break;case Vx:t="Reinhard";break;case Wx:t="OptimizedCineon";break;case $x:t="ACESFilmic";break;case Xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function Ow(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function bs(n){return n!==""}function ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(Bw,Hw)}const zw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hw(n,e){let t=Ve[e];if(t===void 0){const i=zw.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}const Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(Gw,Vw)}function Vw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ww(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Zw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case zx:e="ENVMAP_BLENDING_MIX";break;case Hx:e="ENVMAP_BLENDING_ADD";break}return e}function qw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yw(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ww(t),l=$w(t),u=Xw(t),f=Zw(t),d=qw(t),h=t.isWebGL2?"":kw(t),_=Ow(s),g=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[h,rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Iw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Ql(a),a=ef(a,t),a=tf(a,t),o=Ql(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,E=y+p+o,w=Jd(r,r.VERTEX_SHADER,v),R=Jd(r,r.FRAGMENT_SHADER,E);if(r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(g).trim(),S=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(R).trim();let ee=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,R);else{const U=Qd(r,w,"vertex"),D=Qd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+U+`
`+D)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(S===""||O==="")&&(B=!1);B&&(this.diagnostics={runnable:ee,programLog:b,vertexShader:{log:S,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(w),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new Oa(r,g)),A};let z;return this.getAttributes=function(){return z===void 0&&(z=Fw(r,g)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let jw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jw(e),t.set(e,i)),i}}class Jw{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function Qw(n,e,t,i,r,s,a){const o=new Kh,c=new Kw,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,S,O,ee,B){const U=ee.fog,D=B.geometry,Z=b.isMeshStandardMaterial?ee.environment:null,C=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),N=C&&C.mapping===Eo?C.image.height:null,W=_[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,I=Y!==void 0?Y.length:0;let K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let ae,fe,ue,be;if(W){const mt=In[W];ae=mt.vertexShader,fe=mt.fragmentShader}else ae=b.vertexShader,fe=b.fragmentShader,c.update(b),ue=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);const Ie=n.getRenderTarget(),Le=B.isInstancedMesh===!0,rt=!!b.map,Ft=!!b.matcap,He=!!C,G=!!b.aoMap,Nt=!!b.lightMap,Ce=!!b.bumpMap,Oe=!!b.normalMap,we=!!b.displacementMap,pt=!!b.emissiveMap,$e=!!b.metalnessMap,oe=!!b.roughnessMap,ct=b.anisotropy>0,et=b.clearcoat>0,Fe=b.iridescence>0,T=b.sheen>0,x=b.transmission>0,$=ct&&!!b.anisotropyMap,re=et&&!!b.clearcoatMap,k=et&&!!b.clearcoatNormalMap,X=et&&!!b.clearcoatRoughnessMap,ie=Fe&&!!b.iridescenceMap,te=Fe&&!!b.iridescenceThicknessMap,V=T&&!!b.sheenColorMap,ve=T&&!!b.sheenRoughnessMap,Se=!!b.specularMap,Te=!!b.specularColorMap,xe=!!b.specularIntensityMap,Ee=x&&!!b.transmissionMap,qe=x&&!!b.thicknessMap,ft=!!b.gradientMap,L=!!b.alphaMap,he=b.alphaTest>0,j=!!b.alphaHash,le=!!b.extensions,pe=!!D.attributes.uv1,st=!!D.attributes.uv2,vt=!!D.attributes.uv3;let Mt=Ui;return b.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Mt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:ae,fragmentShader:fe,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,instancing:Le,instancingColor:Le&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Wn,map:rt,matcap:Ft,envMap:He,envMapMode:He&&C.mapping,envMapCubeUVHeight:N,aoMap:G,lightMap:Nt,bumpMap:Ce,normalMap:Oe,displacementMap:d&&we,emissiveMap:pt,normalMapObjectSpace:Oe&&b.normalMapType===sE,normalMapTangentSpace:Oe&&b.normalMapType===$h,metalnessMap:$e,roughnessMap:oe,anisotropy:ct,anisotropyMap:$,clearcoat:et,clearcoatMap:re,clearcoatNormalMap:k,clearcoatRoughnessMap:X,iridescence:Fe,iridescenceMap:ie,iridescenceThicknessMap:te,sheen:T,sheenColorMap:V,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:Te,specularIntensityMap:xe,transmission:x,transmissionMap:Ee,thicknessMap:qe,gradientMap:ft,opaque:b.transparent===!1&&b.blending===Wr,alphaMap:L,alphaTest:he,alphaHash:j,combine:b.combine,mapUv:rt&&g(b.map.channel),aoMapUv:G&&g(b.aoMap.channel),lightMapUv:Nt&&g(b.lightMap.channel),bumpMapUv:Ce&&g(b.bumpMap.channel),normalMapUv:Oe&&g(b.normalMap.channel),displacementMapUv:we&&g(b.displacementMap.channel),emissiveMapUv:pt&&g(b.emissiveMap.channel),metalnessMapUv:$e&&g(b.metalnessMap.channel),roughnessMapUv:oe&&g(b.roughnessMap.channel),anisotropyMapUv:$&&g(b.anisotropyMap.channel),clearcoatMapUv:re&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:k&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:V&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(b.sheenRoughnessMap.channel),specularMapUv:Se&&g(b.specularMap.channel),specularColorMapUv:Te&&g(b.specularColorMap.channel),specularIntensityMapUv:xe&&g(b.specularIntensityMap.channel),transmissionMapUv:Ee&&g(b.transmissionMap.channel),thicknessMapUv:qe&&g(b.thicknessMap.channel),alphaMapUv:L&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Oe||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:st,vertexUv3s:vt,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(rt||L),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,useLegacyLights:n._useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===li,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:le&&b.extensions.derivatives===!0,extensionFragDepth:le&&b.extensions.fragDepth===!0,extensionDrawBuffers:le&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)S.push(O),S.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),b.push(o.mask)}function E(b){const S=_[b.type];let O;if(S){const ee=In[S];O=FE.clone(ee.uniforms)}else O=b.uniforms;return O}function w(b,S){let O;for(let ee=0,B=l.length;ee<B;ee++){const U=l[ee];if(U.cacheKey===S){O=U,++O.usedTimes;break}}return O===void 0&&(O=new Yw(n,S,b,s),l.push(O)),O}function R(b){if(--b.usedTimes===0){const S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function A(b){c.remove(b)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:z}}function eT(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function tT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function af(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,_,g,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,d,h,_,g,m){const p=a(f,d,h,_,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,_,g,m){const p=a(f,d,h,_,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||tT),i.length>1&&i.sort(d||sf),r.length>1&&r.sort(d||sf)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function nT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new af,n.set(i,[a])):r>=s.length?(a=new af,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new _t};break;case"SpotLight":t={position:new q,direction:new q,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function rT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sT=0;function aT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oT(n,e){const t=new iT,i=rT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,a=new kt,o=new kt;function c(u,f){let d=0,h=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,p=0,y=0,v=0,E=0,w=0,R=0,A=0,z=0;u.sort(aT);const b=f===!0?Math.PI:1;for(let O=0,ee=u.length;O<ee;O++){const B=u[O],U=B.color,D=B.intensity,Z=B.distance,C=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=U.r*D*b,h+=U.g*D*b,_+=U.b*D*b;else if(B.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(B.sh.coefficients[N],D);else if(B.isDirectionalLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const W=B.shadow,Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[g]=Y,r.directionalShadowMap[g]=C,r.directionalShadowMatrix[g]=B.shadow.matrix,E++}r.directional[g]=N,g++}else if(B.isSpotLight){const N=t.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(U).multiplyScalar(D*b),N.distance=Z,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,r.spot[p]=N;const W=B.shadow;if(B.map&&(r.spotLightMap[A]=B.map,A++,W.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[p]=W.matrix,B.castShadow){const Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=C,R++}p++}else if(B.isRectAreaLight){const N=t.get(B);N.color.copy(U).multiplyScalar(D),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=N,y++}else if(B.isPointLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*b),N.distance=B.distance,N.decay=B.decay,B.castShadow){const W=B.shadow,Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=C,r.pointShadowMatrix[m]=B.shadow.matrix,w++}r.point[m]=N,m++}else if(B.isHemisphereLight){const N=t.get(B);N.skyColor.copy(B.color).multiplyScalar(D*b),N.groundColor.copy(B.groundColor).multiplyScalar(D*b),r.hemi[v]=N,v++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=_;const S=r.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==y||S.hemiLength!==v||S.numDirectionalShadows!==E||S.numPointShadows!==w||S.numSpotShadows!==R||S.numSpotMaps!==A)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+A-z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=z,S.directionalLength=g,S.pointLength=m,S.spotLength=p,S.rectAreaLength=y,S.hemiLength=v,S.numDirectionalShadows=E,S.numPointShadows=w,S.numSpotShadows=R,S.numSpotMaps=A,r.version=sT++)}function l(u,f){let d=0,h=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(E.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(E.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const w=r.point[h];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:r}}function of(n,e){const t=new oT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function lT(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new of(n,e),t.set(s,[c])):a>=o.length?(c=new of(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class cT extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uT extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hT(n,e,t){let i=new sp;const r=new dt,s=new dt,a=new Pt,o=new cT({depthPacking:rE}),c=new uT,l={},u=t.maxTextureSize,f={[Fi]:en,[en]:Fi,[li]:li},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dT,fragmentShader:fT}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new zi;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new di(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(w,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const z=n.getRenderTarget(),b=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Di),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const ee=p!==ri&&this.type===ri,B=p===ri&&this.type!==ri;for(let U=0,D=w.length;U<D;U++){const Z=w[U],C=Z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const N=C.getFrameExtents();if(r.multiply(N),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/N.x),r.x=s.x*N.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/N.y),r.y=s.y*N.y,C.mapSize.y=s.y)),C.map===null||ee===!0||B===!0){const Y=this.type!==ri?{minFilter:Xt,magFilter:Xt}:{};C.map!==null&&C.map.dispose(),C.map=new ur(r.x,r.y,Y),C.map.texture.name=Z.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const W=C.getViewportCount();for(let Y=0;Y<W;Y++){const I=C.getViewport(Y);a.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),O.viewport(a),C.updateMatrices(Z,Y),i=C.getFrustum(),E(R,A,C.camera,Z,this.type)}C.isPointLightShadow!==!0&&this.type===ri&&y(C,A),C.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(z,b,S)};function y(w,R){const A=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ur(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,A,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,A,h,g,null)}function v(w,R,A,z){let b=null;const S=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)b=S;else if(b=A.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=b.uuid,ee=R.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let U=B[ee];U===void 0&&(U=b.clone(),B[ee]=U),b=U}if(b.visible=R.visible,b.wireframe=R.wireframe,z===ri?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=A}return b}function E(w,R,A,z,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ri)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),B=w.material;if(Array.isArray(B)){const U=ee.groups;for(let D=0,Z=U.length;D<Z;D++){const C=U[D],N=B[C.materialIndex];if(N&&N.visible){const W=v(w,N,z,b);n.renderBufferDirect(A,null,ee,W,w,C)}}}else if(B.visible){const U=v(w,B,z,b);n.renderBufferDirect(A,null,ee,U,w,null)}}const O=w.children;for(let ee=0,B=O.length;ee<B;ee++)E(O[ee],R,A,z,b)}}function pT(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const he=new Pt;let j=null;const le=new Pt(0,0,0,0);return{setMask:function(pe){j!==pe&&!L&&(n.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){L=pe},setClear:function(pe,st,vt,Mt,_i){_i===!0&&(pe*=Mt,st*=Mt,vt*=Mt),he.set(pe,st,vt,Mt),le.equals(he)===!1&&(n.clearColor(pe,st,vt,Mt),le.copy(he))},reset:function(){L=!1,j=null,le.set(-1,0,0,0)}}}function s(){let L=!1,he=null,j=null,le=null;return{setTest:function(pe){pe?Ie(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(pe){he!==pe&&!L&&(n.depthMask(pe),he=pe)},setFunc:function(pe){if(j!==pe){switch(pe){case Ux:n.depthFunc(n.NEVER);break;case Ix:n.depthFunc(n.ALWAYS);break;case Px:n.depthFunc(n.LESS);break;case $l:n.depthFunc(n.LEQUAL);break;case kx:n.depthFunc(n.EQUAL);break;case Ox:n.depthFunc(n.GEQUAL);break;case Fx:n.depthFunc(n.GREATER);break;case Bx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=pe}},setLocked:function(pe){L=pe},setClear:function(pe){le!==pe&&(n.clearDepth(pe),le=pe)},reset:function(){L=!1,he=null,j=null,le=null}}}function a(){let L=!1,he=null,j=null,le=null,pe=null,st=null,vt=null,Mt=null,_i=null;return{setTest:function(mt){L||(mt?Ie(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(mt){he!==mt&&!L&&(n.stencilMask(mt),he=mt)},setFunc:function(mt,Nn,Vt){(j!==mt||le!==Nn||pe!==Vt)&&(n.stencilFunc(mt,Nn,Vt),j=mt,le=Nn,pe=Vt)},setOp:function(mt,Nn,Vt){(st!==mt||vt!==Nn||Mt!==Vt)&&(n.stencilOp(mt,Nn,Vt),st=mt,vt=Nn,Mt=Vt)},setLocked:function(mt){L=mt},setClear:function(mt){_i!==mt&&(n.clearStencil(mt),_i=mt)},reset:function(){L=!1,he=null,j=null,le=null,pe=null,st=null,vt=null,Mt=null,_i=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let d={},h={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,E=null,w=null,R=null,A=null,z=null,b=!1,S=null,O=null,ee=null,B=null,U=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,C=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(N)[1]),Z=C>=1):N.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Z=C>=2);let W=null,Y={};const I=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ae=new Pt().fromArray(I),fe=new Pt().fromArray(K);function ue(L,he,j,le){const pe=new Uint8Array(4),st=n.createTexture();n.bindTexture(L,st),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<j;vt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(he+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return st}const be={};be[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(n.DEPTH_TEST),c.setFunc($l),we(!1),pt($u),Ie(n.CULL_FACE),Ce(Di);function Ie(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Le(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function rt(L,he){return h[L]!==he?(n.bindFramebuffer(L,he),h[L]=he,i&&(L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function Ft(L,he){let j=g,le=!1;if(L)if(j=_.get(he),j===void 0&&(j=[],_.set(he,j)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if(j.length!==pe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let st=0,vt=pe.length;st<vt;st++)j[st]=n.COLOR_ATTACHMENT0+st;j.length=pe.length,le=!0}}else j[0]!==n.COLOR_ATTACHMENT0&&(j[0]=n.COLOR_ATTACHMENT0,le=!0);else j[0]!==n.BACK&&(j[0]=n.BACK,le=!0);le&&(t.isWebGL2?n.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function He(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const G={[zr]:n.FUNC_ADD,[yx]:n.FUNC_SUBTRACT,[Sx]:n.FUNC_REVERSE_SUBTRACT};if(i)G[Yu]=n.MIN,G[ju]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(G[Yu]=L.MIN_EXT,G[ju]=L.MAX_EXT)}const Nt={[Mx]:n.ZERO,[wx]:n.ONE,[Tx]:n.SRC_COLOR,[Ih]:n.SRC_ALPHA,[Dx]:n.SRC_ALPHA_SATURATE,[Lx]:n.DST_COLOR,[Rx]:n.DST_ALPHA,[Ax]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[Nx]:n.ONE_MINUS_DST_COLOR,[Cx]:n.ONE_MINUS_DST_ALPHA};function Ce(L,he,j,le,pe,st,vt,Mt){if(L===Di){p===!0&&(Le(n.BLEND),p=!1);return}if(p===!1&&(Ie(n.BLEND),p=!0),L!==Ex){if(L!==y||Mt!==b){if((v!==zr||R!==zr)&&(n.blendEquation(n.FUNC_ADD),v=zr,R=zr),Mt)switch(L){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xu:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,A=null,z=null,y=L,b=Mt}return}pe=pe||he,st=st||j,vt=vt||le,(he!==v||pe!==R)&&(n.blendEquationSeparate(G[he],G[pe]),v=he,R=pe),(j!==E||le!==w||st!==A||vt!==z)&&(n.blendFuncSeparate(Nt[j],Nt[le],Nt[st],Nt[vt]),E=j,w=le,A=st,z=vt),y=L,b=!1}function Oe(L,he){L.side===li?Le(n.CULL_FACE):Ie(n.CULL_FACE);let j=L.side===en;he&&(j=!j),we(j),L.blending===Wr&&L.transparent===!1?Ce(Di):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const le=L.stencilWrite;l.setTest(le),le&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function pt(L){L!==vx?(Ie(n.CULL_FACE),L!==O&&(L===$u?n.cullFace(n.BACK):L===bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),O=L}function $e(L){L!==ee&&(Z&&n.lineWidth(L),ee=L)}function oe(L,he,j){L?(Ie(n.POLYGON_OFFSET_FILL),(B!==he||U!==j)&&(n.polygonOffset(he,j),B=he,U=j)):Le(n.POLYGON_OFFSET_FILL)}function ct(L){L?Ie(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function et(L){L===void 0&&(L=n.TEXTURE0+D-1),W!==L&&(n.activeTexture(L),W=L)}function Fe(L,he,j){j===void 0&&(W===null?j=n.TEXTURE0+D-1:j=W);let le=Y[j];le===void 0&&(le={type:void 0,texture:void 0},Y[j]=le),(le.type!==L||le.texture!==he)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(L,he||be[L]),le.type=L,le.texture=he)}function T(){const L=Y[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function xe(L){fe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function Ee(L,he){let j=f.get(he);j===void 0&&(j=new WeakMap,f.set(he,j));let le=j.get(L);le===void 0&&(le=n.getUniformBlockIndex(he,L.name),j.set(L,le))}function qe(L,he){const le=f.get(he).get(L);u.get(he)!==le&&(n.uniformBlockBinding(he,le,L.__bindingPointIndex),u.set(he,le))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},W=null,Y={},h={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,E=null,w=null,R=null,A=null,z=null,b=!1,S=null,O=null,ee=null,B=null,U=null,ae.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ie,disable:Le,bindFramebuffer:rt,drawBuffers:Ft,useProgram:He,setBlending:Ce,setMaterial:Oe,setFlipSided:we,setCullFace:pt,setLineWidth:$e,setPolygonOffset:oe,setScissorTest:ct,activeTexture:et,bindTexture:Fe,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:ve,texImage3D:Se,updateUBOMapping:Ee,uniformBlockBinding:qe,texStorage2D:te,texStorage3D:V,texSubImage2D:re,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:ie,scissor:Te,viewport:xe,reset:ft}}function mT(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return p?new OffscreenCanvas(T,x):lo("canvas")}function v(T,x,$,re){let k=1;if((T.width>re||T.height>re)&&(k=re/Math.max(T.width,T.height)),k<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const X=x?Jl:Math.floor,ie=X(k*T.width),te=X(k*T.height);g===void 0&&(g=y(ie,te));const V=$?y(ie,te):g;return V.width=ie,V.height=te,V.getContext("2d").drawImage(T,0,0,ie,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ie+"x"+te+")."),V}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return Sd(T.width)&&Sd(T.height)}function w(T){return o?!1:T.wrapS!==Tn||T.wrapT!==Tn||T.minFilter!==Xt&&T.minFilter!==gn}function R(T,x){return T.generateMipmaps&&x&&T.minFilter!==Xt&&T.minFilter!==gn}function A(T){n.generateMipmap(T)}function z(T,x,$,re,k=!1){if(o===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;return x===n.RED&&($===n.FLOAT&&(X=n.R32F),$===n.HALF_FLOAT&&(X=n.R16F),$===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(X=n.R8UI),$===n.UNSIGNED_SHORT&&(X=n.R16UI),$===n.UNSIGNED_INT&&(X=n.R32UI),$===n.BYTE&&(X=n.R8I),$===n.SHORT&&(X=n.R16I),$===n.INT&&(X=n.R32I)),x===n.RG&&($===n.FLOAT&&(X=n.RG32F),$===n.HALF_FLOAT&&(X=n.RG16F),$===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RGBA&&($===n.FLOAT&&(X=n.RGBA32F),$===n.HALF_FLOAT&&(X=n.RGBA16F),$===n.UNSIGNED_BYTE&&(X=re===We&&k===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)),(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(T,x,$){return R(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function S(T){return T===Xt||T===Ku||T===Vo?n.NEAREST:n.LINEAR}function O(T){const x=T.target;x.removeEventListener("dispose",O),B(x),x.isVideoTexture&&_.delete(x)}function ee(T){const x=T.target;x.removeEventListener("dispose",ee),D(x)}function B(T){const x=i.get(T);if(x.__webglInit===void 0)return;const $=T.source,re=m.get($);if(re){const k=re[x.__cacheKey];k.usedTimes--,k.usedTimes===0&&U(T),Object.keys(re).length===0&&m.delete($)}i.remove(T)}function U(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const $=T.source,re=m.get($);delete re[x.__cacheKey],a.memory.textures--}function D(T){const x=T.texture,$=i.get(T),re=i.get(x);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray($.__webglFramebuffer[k]))for(let X=0;X<$.__webglFramebuffer[k].length;X++)n.deleteFramebuffer($.__webglFramebuffer[k][X]);else n.deleteFramebuffer($.__webglFramebuffer[k]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[k])}else{if(Array.isArray($.__webglFramebuffer))for(let k=0;k<$.__webglFramebuffer.length;k++)n.deleteFramebuffer($.__webglFramebuffer[k]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let k=0;k<$.__webglColorRenderbuffer.length;k++)$.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[k]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let k=0,X=x.length;k<X;k++){const ie=i.get(x[k]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(x[k])}i.remove(x),i.remove(T)}let Z=0;function C(){Z=0}function N(){const T=Z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Z+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const $=i.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt($,T,x);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+x)}function I(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){rt($,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+x)}function K(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){rt($,T,x);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+x)}function ae(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Ft($,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+x)}const fe={[ql]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},ue={[Xt]:n.NEAREST,[Ku]:n.NEAREST_MIPMAP_NEAREST,[Vo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Zx]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},be={[oE]:n.NEVER,[pE]:n.ALWAYS,[lE]:n.LESS,[uE]:n.LEQUAL,[cE]:n.EQUAL,[hE]:n.GEQUAL,[dE]:n.GREATER,[fE]:n.NOTEQUAL};function Ie(T,x,$){if($?(n.texParameteri(T,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,fe[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[x.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Tn||x.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,S(x.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,S(x.minFilter)),x.minFilter!==Xt&&x.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Xt||x.minFilter!==Vo&&x.minFilter!==Hs||x.type===Ai&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Gs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Le(T,x){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",O));const re=x.source;let k=m.get(re);k===void 0&&(k={},m.set(re,k));const X=W(x);if(X!==T.__cacheKey){k[X]===void 0&&(k[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),k[X].usedTimes++;const ie=k[T.__cacheKey];ie!==void 0&&(k[T.__cacheKey].usedTimes--,ie.usedTimes===0&&U(x)),T.__cacheKey=X,T.__webglTexture=k[X].texture}return $}function rt(T,x,$){let re=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=n.TEXTURE_3D);const k=Le(T,x),X=x.source;t.bindTexture(re,T.__webglTexture,n.TEXTURE0+$);const ie=i.get(X);if(X.version!==ie.__version||k===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=w(x)&&E(x.image)===!1;let V=v(x.image,te,!1,u);V=Fe(x,V);const ve=E(V)||o,Se=s.convert(x.format,x.colorSpace);let Te=s.convert(x.type),xe=z(x.internalFormat,Se,Te,x.colorSpace);Ie(re,x,ve);let Ee;const qe=x.mipmaps,ft=o&&x.isVideoTexture!==!0,L=ie.__version===void 0||k===!0,he=b(x,V,ve);if(x.isDepthTexture)xe=n.DEPTH_COMPONENT,o?x.type===Ai?xe=n.DEPTH_COMPONENT32F:x.type===Ti?xe=n.DEPTH_COMPONENT24:x.type===nr?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:x.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ir&&xe===n.DEPTH_COMPONENT&&x.type!==gc&&x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ti,Te=s.convert(x.type)),x.format===is&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,x.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=nr,Te=s.convert(x.type))),L&&(ft?t.texStorage2D(n.TEXTURE_2D,1,xe,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,xe,V.width,V.height,0,Se,Te,null));else if(x.isDataTexture)if(qe.length>0&&ve){ft&&L&&t.texStorage2D(n.TEXTURE_2D,he,xe,qe[0].width,qe[0].height);for(let j=0,le=qe.length;j<le;j++)Ee=qe[j],ft?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Se,Te,Ee.data):t.texImage2D(n.TEXTURE_2D,j,xe,Ee.width,Ee.height,0,Se,Te,Ee.data);x.generateMipmaps=!1}else ft?(L&&t.texStorage2D(n.TEXTURE_2D,he,xe,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,Se,Te,V.data)):t.texImage2D(n.TEXTURE_2D,0,xe,V.width,V.height,0,Se,Te,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ft&&L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,qe[0].width,qe[0].height,V.depth);for(let j=0,le=qe.length;j<le;j++)Ee=qe[j],x.format!==An?Se!==null?ft?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,V.depth,Se,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,xe,Ee.width,Ee.height,V.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,V.depth,Se,Te,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,xe,Ee.width,Ee.height,V.depth,0,Se,Te,Ee.data)}else{ft&&L&&t.texStorage2D(n.TEXTURE_2D,he,xe,qe[0].width,qe[0].height);for(let j=0,le=qe.length;j<le;j++)Ee=qe[j],x.format!==An?Se!==null?ft?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,j,xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Se,Te,Ee.data):t.texImage2D(n.TEXTURE_2D,j,xe,Ee.width,Ee.height,0,Se,Te,Ee.data)}else if(x.isDataArrayTexture)ft?(L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Se,Te,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,V.width,V.height,V.depth,0,Se,Te,V.data);else if(x.isData3DTexture)ft?(L&&t.texStorage3D(n.TEXTURE_3D,he,xe,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Se,Te,V.data)):t.texImage3D(n.TEXTURE_3D,0,xe,V.width,V.height,V.depth,0,Se,Te,V.data);else if(x.isFramebufferTexture){if(L)if(ft)t.texStorage2D(n.TEXTURE_2D,he,xe,V.width,V.height);else{let j=V.width,le=V.height;for(let pe=0;pe<he;pe++)t.texImage2D(n.TEXTURE_2D,pe,xe,j,le,0,Se,Te,null),j>>=1,le>>=1}}else if(qe.length>0&&ve){ft&&L&&t.texStorage2D(n.TEXTURE_2D,he,xe,qe[0].width,qe[0].height);for(let j=0,le=qe.length;j<le;j++)Ee=qe[j],ft?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Se,Te,Ee):t.texImage2D(n.TEXTURE_2D,j,xe,Se,Te,Ee);x.generateMipmaps=!1}else ft?(L&&t.texStorage2D(n.TEXTURE_2D,he,xe,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Te,V)):t.texImage2D(n.TEXTURE_2D,0,xe,Se,Te,V);R(x,ve)&&A(re),ie.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ft(T,x,$){if(x.image.length!==6)return;const re=Le(T,x),k=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+$);const X=i.get(k);if(k.version!==X.__version||re===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ie=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,V=[];for(let j=0;j<6;j++)!ie&&!te?V[j]=v(x.image[j],!1,!0,l):V[j]=te?x.image[j].image:x.image[j],V[j]=Fe(x,V[j]);const ve=V[0],Se=E(ve)||o,Te=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),Ee=z(x.internalFormat,Te,xe,x.colorSpace),qe=o&&x.isVideoTexture!==!0,ft=X.__version===void 0||re===!0;let L=b(x,ve,Se);Ie(n.TEXTURE_CUBE_MAP,x,Se);let he;if(ie){qe&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Ee,ve.width,ve.height);for(let j=0;j<6;j++){he=V[j].mipmaps;for(let le=0;le<he.length;le++){const pe=he[le];x.format!==An?Te!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,pe.width,pe.height,Te,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,pe.width,pe.height,Te,xe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Ee,pe.width,pe.height,0,Te,xe,pe.data)}}}else{he=x.mipmaps,qe&&ft&&(he.length>0&&L++,t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Ee,V[0].width,V[0].height));for(let j=0;j<6;j++)if(te){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,V[j].width,V[j].height,Te,xe,V[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,V[j].width,V[j].height,0,Te,xe,V[j].data);for(let le=0;le<he.length;le++){const st=he[le].image[j].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,st.width,st.height,Te,xe,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Ee,st.width,st.height,0,Te,xe,st.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,xe,V[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,Te,xe,V[j]);for(let le=0;le<he.length;le++){const pe=he[le];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Te,xe,pe.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Ee,Te,xe,pe.image[j])}}}R(x,Se)&&A(n.TEXTURE_CUBE_MAP),X.__version=k.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function He(T,x,$,re,k,X){const ie=s.convert($.format,$.colorSpace),te=s.convert($.type),V=z($.internalFormat,ie,te,$.colorSpace);if(!i.get(x).__hasExternalTextures){const Se=Math.max(1,x.width>>X),Te=Math.max(1,x.height>>X);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,X,V,Se,Te,x.depth,0,ie,te,null):t.texImage2D(k,X,V,Se,Te,0,ie,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ct(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,k,i.get($).__webglTexture,0,oe(x)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,k,i.get($).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(T,x,$){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let re=n.DEPTH_COMPONENT16;if($||ct(x)){const k=x.depthTexture;k&&k.isDepthTexture&&(k.type===Ai?re=n.DEPTH_COMPONENT32F:k.type===Ti&&(re=n.DEPTH_COMPONENT24));const X=oe(x);ct(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,re,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,re,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const re=oe(x);$&&ct(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,x.width,x.height):ct(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const re=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let k=0;k<re.length;k++){const X=re[k],ie=s.convert(X.format,X.colorSpace),te=s.convert(X.type),V=z(X.internalFormat,ie,te,X.colorSpace),ve=oe(x);$&&ct(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,V,x.width,x.height):ct(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const re=i.get(x.depthTexture).__webglTexture,k=oe(x);if(x.depthTexture.format===ir)ct(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===is)ct(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const x=i.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Nt(x.__webglFramebuffer,T)}else if($){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]=n.createRenderbuffer(),G(x.__webglDepthbuffer[re],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),G(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,x,$){const re=i.get(T);x!==void 0&&He(re.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ce(T)}function we(T){const x=T.texture,$=i.get(T),re=i.get(x);T.addEventListener("dispose",ee),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=x.version,a.memory.textures++);const k=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,ie=E(T)||o;if(k){$.__webglFramebuffer=[];for(let te=0;te<6;te++)if(o&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[te]=[];for(let V=0;V<x.mipmaps.length;V++)$.__webglFramebuffer[te][V]=n.createFramebuffer()}else $.__webglFramebuffer[te]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let te=0;te<x.mipmaps.length;te++)$.__webglFramebuffer[te]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const te=T.texture;for(let V=0,ve=te.length;V<ve;V++){const Se=i.get(te[V]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ct(T)===!1){const te=X?x:[x];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<te.length;V++){const ve=te[V];$.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const Se=s.convert(ve.format,ve.colorSpace),Te=s.convert(ve.type),xe=z(ve.internalFormat,Se,Te,ve.colorSpace,T.isXRRenderTarget===!0),Ee=oe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,$.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),G($.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,x,ie);for(let te=0;te<6;te++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)He($.__webglFramebuffer[te][V],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,V);else He($.__webglFramebuffer[te],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);R(x,ie)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const te=T.texture;for(let V=0,ve=te.length;V<ve;V++){const Se=te[V],Te=i.get(Se);t.bindTexture(n.TEXTURE_2D,Te.__webglTexture),Ie(n.TEXTURE_2D,Se,ie),He($.__webglFramebuffer,T,Se,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),R(Se,ie)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),Ie(te,x,ie),o&&x.mipmaps&&x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)He($.__webglFramebuffer[V],T,x,n.COLOR_ATTACHMENT0,te,V);else He($.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,te,0);R(x,ie)&&A(te),t.unbindTexture()}T.depthBuffer&&Ce(T)}function pt(T){const x=E(T)||o,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,k=$.length;re<k;re++){const X=$[re];if(R(X,x)){const ie=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(X).__webglTexture;t.bindTexture(ie,te),A(ie),t.unbindTexture()}}}function $e(T){if(o&&T.samples>0&&ct(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,re=T.height;let k=n.COLOR_BUFFER_BIT;const X=[],ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(T),V=T.isWebGLMultipleRenderTargets===!0;if(V)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){X.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&X.push(ie);const Se=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(Se===!1&&(T.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[ve]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ie])),V){const Te=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,$,re,0,0,$,re,k,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const Se=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function oe(T){return Math.min(f,T.samples)}function ct(T){const x=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(T){const x=a.render.frame;_.get(T)!==x&&(_.set(T,x),T.update())}function Fe(T,x){const $=T.colorSpace,re=T.format,k=T.type;return T.isCompressedTexture===!0||T.format===jl||$!==Wn&&$!==sr&&($===We?o===!1?e.has("EXT_sRGB")===!0&&re===An?(T.format=jl,T.minFilter=gn,T.generateMipmaps=!1):x=qh.sRGBToLinear(x):(re!==An||k!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=Y,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=ae,this.rebindTextures=Oe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ct}function _T(n,e,t){const i=t.isWebGL2;function r(s,a=sr){let o;if(s===Ii)return n.UNSIGNED_BYTE;if(s===Bh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===zh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===qx)return n.BYTE;if(s===Yx)return n.SHORT;if(s===gc)return n.UNSIGNED_SHORT;if(s===Fh)return n.INT;if(s===Ti)return n.UNSIGNED_INT;if(s===Ai)return n.FLOAT;if(s===Gs)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===jx)return n.ALPHA;if(s===An)return n.RGBA;if(s===Kx)return n.LUMINANCE;if(s===Jx)return n.LUMINANCE_ALPHA;if(s===ir)return n.DEPTH_COMPONENT;if(s===is)return n.DEPTH_STENCIL;if(s===jl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qx)return n.RED;if(s===Hh)return n.RED_INTEGER;if(s===eE)return n.RG;if(s===Gh)return n.RG_INTEGER;if(s===Vh)return n.RGBA_INTEGER;if(s===Wo||s===$o||s===Xo||s===Zo)if(a===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ju||s===Qu||s===ed||s===td)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ju)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===td)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nd||s===id)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nd)return a===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===id)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rd||s===sd||s===ad||s===od||s===ld||s===cd||s===ud||s===dd||s===fd||s===hd||s===pd||s===md||s===_d||s===gd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===od)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ld)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ud)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gd)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===qo)return a===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===nE||s===vd||s===bd||s===xd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===qo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class gT extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Da extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vT={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;l.inputState.pinching&&d>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vT)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bT extends hn{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:ir,u!==ir&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ir&&(i=Ti),i===void 0&&u===is&&(i=nr),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xT extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const y=[],v=[],E=new vn;E.layers.enable(1),E.viewport=new Pt;const w=new vn;w.layers.enable(2),w.viewport=new Pt;const R=[E,w],A=new gT;A.layers.enable(1),A.layers.enable(2);let z=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let K=y[I];return K===void 0&&(K=new vl,y[I]=K),K.getTargetRaySpace()},this.getControllerGrip=function(I){let K=y[I];return K===void 0&&(K=new vl,y[I]=K),K.getGripSpace()},this.getHand=function(I){let K=y[I];return K===void 0&&(K=new vl,y[I]=K),K.getHandSpace()};function S(I){const K=v.indexOf(I.inputSource);if(K===-1)return;const ae=y[K];ae!==void 0&&(ae.update(I.inputSource,I.frame,l||a),ae.dispatchEvent({type:I.type,data:I.inputSource}))}function O(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",ee);for(let I=0;I<y.length;I++){const K=v[I];K!==null&&(v[I]=null,y[I].disconnect(K))}z=null,b=null,e.setRenderTarget(m),h=null,d=null,f=null,r=null,p=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",O),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),p=new ur(h.framebufferWidth,h.framebufferHeight,{format:An,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?is:ir,ae=g.stencil?nr:Ti);const ue={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),p=new ur(d.textureWidth,d.textureHeight,{format:An,type:Ii,depthTexture:new bT(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const be=e.properties.get(p);be.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(I){for(let K=0;K<I.removed.length;K++){const ae=I.removed[K],fe=v.indexOf(ae);fe>=0&&(v[fe]=null,y[fe].disconnect(ae))}for(let K=0;K<I.added.length;K++){const ae=I.added[K];let fe=v.indexOf(ae);if(fe===-1){for(let be=0;be<y.length;be++)if(be>=v.length){v.push(ae),fe=be;break}else if(v[be]===null){v[be]=ae,fe=be;break}if(fe===-1)break}const ue=y[fe];ue&&ue.connect(ae)}}const B=new q,U=new q;function D(I,K,ae){B.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(ae.matrixWorld);const fe=B.distanceTo(U),ue=K.projectionMatrix.elements,be=ae.projectionMatrix.elements,Ie=ue[14]/(ue[10]-1),Le=ue[14]/(ue[10]+1),rt=(ue[9]+1)/ue[5],Ft=(ue[9]-1)/ue[5],He=(ue[8]-1)/ue[0],G=(be[8]+1)/be[0],Nt=Ie*He,Ce=Ie*G,Oe=fe/(-He+G),we=Oe*-He;K.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(we),I.translateZ(Oe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const pt=Ie+Oe,$e=Le+Oe,oe=Nt-we,ct=Ce+(fe-we),et=rt*Le/$e*pt,Fe=Ft*Le/$e*pt;I.projectionMatrix.makePerspective(oe,ct,et,Fe,pt,$e),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function Z(I,K){K===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(K.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;A.near=w.near=E.near=I.near,A.far=w.far=E.far=I.far,(z!==A.near||b!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,b=A.far);const K=I.parent,ae=A.cameras;Z(A,K);for(let fe=0;fe<ae.length;fe++)Z(ae[fe],K);ae.length===2?D(A,E,w):A.projectionMatrix.copy(E.projectionMatrix),C(I,A,K)};function C(I,K,ae){ae===null?I.matrix.copy(K.matrixWorld):(I.matrix.copy(ae.matrixWorld),I.matrix.invert(),I.matrix.multiply(K.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const fe=I.children;for(let ue=0,be=fe.length;ue<be;ue++)fe[ue].updateMatrixWorld(!0);I.projectionMatrix.copy(K.projectionMatrix),I.projectionMatrixInverse.copy(K.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Kl*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(I){c=I,d!==null&&(d.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)};let N=null;function W(I,K){if(u=K.getViewerPose(l||a),_=K,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let fe=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,fe=!0);for(let ue=0;ue<ae.length;ue++){const be=ae[ue];let Ie=null;if(h!==null)Ie=h.getViewport(be);else{const rt=f.getViewSubImage(d,be);Ie=rt.viewport,ue===0&&(e.setRenderTargetTextures(p,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(p))}let Le=R[ue];Le===void 0&&(Le=new vn,Le.layers.enable(ue),Le.viewport=new Pt,R[ue]=Le),Le.matrix.fromArray(be.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(be.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ue===0&&(A.matrix.copy(Le.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),fe===!0&&A.cameras.push(Le)}}for(let ae=0;ae<y.length;ae++){const fe=v[ae],ue=y[ae];fe!==null&&ue!==void 0&&ue.update(fe,K,l||a)}N&&N(I,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Y=new ap;Y.setAnimationLoop(W),this.setAnimationLoop=function(I){N=I},this.dispose=function(){}}}function ET(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,np(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yT(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const E=v.program;i.uniformBlockBinding(y,E)}function l(y,v){let E=r[y.id];E===void 0&&(_(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(y,w);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){const v=f();y.__bindingPointIndex=v;const E=n.createBuffer(),w=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],E=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=E.length;R<A;R++){const z=E[R];if(h(z,R,w)===!0){const b=z.__offset,S=Array.isArray(z.value)?z.value:[z.value];let O=0;for(let ee=0;ee<S.length;ee++){const B=S[ee],U=g(B);typeof B=="number"?(z.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,b+O,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=B.elements[0],z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=B.elements[0],z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=B.elements[0]):(B.toArray(z.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,v,E){const w=y.value;if(E[v]===void 0){if(typeof w=="number")E[v]=w;else{const R=Array.isArray(w)?w:[w],A=[];for(let z=0;z<R.length;z++)A.push(R[z].clone());E[v]=A}return!0}else if(typeof w=="number"){if(E[v]!==w)return E[v]=w,!0}else{const R=Array.isArray(E[v])?E[v]:[E[v]],A=Array.isArray(w)?w:[w];for(let z=0;z<R.length;z++){const b=R[z];if(b.equals(A[z])===!1)return b.copy(A[z]),!0}}return!1}function _(y){const v=y.uniforms;let E=0;const w=16;let R=0;for(let A=0,z=v.length;A<z;A++){const b=v[A],S={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let ee=0,B=O.length;ee<B;ee++){const U=O[ee],D=g(U);S.boundary+=D.boundary,S.storage+=D.storage}if(b.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=E,A>0){R=E%w;const ee=w-R;R!==0&&ee-S.boundary<0&&(E+=w-R,b.__offset=E)}E+=S.storage}return R=E%w,R>0&&(E+=w-R),y.__size=E,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}function ST(){const n=lo("canvas");return n.style.display="block",n}class dp{constructor(e={}){const{canvas:t=ST(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;const v=this;let E=!1,w=0,R=0,A=null,z=-1,b=null;const S=new Pt,O=new Pt;let ee=null;const B=new _t(0);let U=0,D=t.width,Z=t.height,C=1,N=null,W=null;const Y=new Pt(0,0,D,Z),I=new Pt(0,0,D,Z);let K=!1;const ae=new sp;let fe=!1,ue=!1,be=null;const Ie=new kt,Le=new dt,rt=new q,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?C:1}let G=i;function Nt(M,H){for(let Q=0;Q<M.length;Q++){const F=M[Q],J=t.getContext(F,H);if(J!==null)return J}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),G=Nt(H,M),G===null)throw Nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ce,Oe,we,pt,$e,oe,ct,et,Fe,T,x,$,re,k,X,ie,te,V,ve,Se,Te,xe,Ee,qe;function ft(){Ce=new UM(G),Oe=new TM(G,Ce,e),Ce.init(Oe),xe=new _T(G,Ce,Oe),we=new pT(G,Ce,Oe),pt=new kM(G),$e=new eT,oe=new mT(G,Ce,we,$e,Oe,xe,pt),ct=new RM(v),et=new DM(v),Fe=new $E(G,Oe),Ee=new MM(G,Ce,Fe,Oe),T=new IM(G,Fe,pt,Ee),x=new zM(G,T,Fe,pt),ve=new BM(G,Oe,oe),ie=new AM($e),$=new Qw(v,ct,et,Ce,Oe,Ee,ie),re=new ET(v,$e),k=new nT,X=new lT(Ce,Oe),V=new SM(v,ct,et,we,x,d,c),te=new hT(v,x,Oe),qe=new yT(G,pt,Oe,we),Se=new wM(G,Ce,pt,Oe),Te=new PM(G,Ce,pt,Oe),pt.programs=$.programs,v.capabilities=Oe,v.extensions=Ce,v.properties=$e,v.renderLists=k,v.shadowMap=te,v.state=we,v.info=pt}ft();const L=new xT(v,G);this.xr=L,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(M){M!==void 0&&(C=M,this.setSize(D,Z,!1))},this.getSize=function(M){return M.set(D,Z)},this.setSize=function(M,H,Q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,Z=H,t.width=Math.floor(M*C),t.height=Math.floor(H*C),Q===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(D*C,Z*C).floor()},this.setDrawingBufferSize=function(M,H,Q){D=M,Z=H,C=Q,t.width=Math.floor(M*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,H,Q,F){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,H,Q,F),we.viewport(S.copy(Y).multiplyScalar(C).floor())},this.getScissor=function(M){return M.copy(I)},this.setScissor=function(M,H,Q,F){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,H,Q,F),we.scissor(O.copy(I).multiplyScalar(C).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(M){we.setScissorTest(K=M)},this.setOpaqueSort=function(M){N=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,H=!0,Q=!0){let F=0;if(M){let J=!1;if(A!==null){const ge=A.texture.format;J=ge===Vh||ge===Gh||ge===Hh}if(J){const ge=A.texture.type,Ne=ge===Ii||ge===Ti||ge===gc||ge===nr||ge===Bh||ge===zh,Pe=V.getClearColor(),ke=V.getClearAlpha(),Ye=Pe.r,Ue=Pe.g,Ge=Pe.b;Ne?(h[0]=Ye,h[1]=Ue,h[2]=Ge,h[3]=ke,G.clearBufferuiv(G.COLOR,0,h)):(_[0]=Ye,_[1]=Ue,_[2]=Ge,_[3]=ke,G.clearBufferiv(G.COLOR,0,_))}else F|=G.COLOR_BUFFER_BIT}H&&(F|=G.DEPTH_BUFFER_BIT),Q&&(F|=G.STENCIL_BUFFER_BIT),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",le,!1),k.dispose(),X.dispose(),$e.dispose(),ct.dispose(),et.dispose(),x.dispose(),Ee.dispose(),qe.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",mt),L.removeEventListener("sessionend",Nn),be&&(be.dispose(),be=null),Vt.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=pt.autoReset,H=te.enabled,Q=te.autoUpdate,F=te.needsUpdate,J=te.type;ft(),pt.autoReset=M,te.enabled=H,te.autoUpdate=Q,te.needsUpdate=F,te.type=J}function le(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pe(M){const H=M.target;H.removeEventListener("dispose",pe),st(H)}function st(M){vt(M),$e.remove(M)}function vt(M){const H=$e.get(M).programs;H!==void 0&&(H.forEach(function(Q){$.releaseProgram(Q)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,Q,F,J,ge){H===null&&(H=Ft);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,Pe=mp(M,H,Q,F,J);we.setMaterial(F,Ne);let ke=Q.index,Ye=1;if(F.wireframe===!0){if(ke=T.getWireframeAttribute(Q),ke===void 0)return;Ye=2}const Ue=Q.drawRange,Ge=Q.attributes.position;let bt=Ue.start*Ye,yt=(Ue.start+Ue.count)*Ye;ge!==null&&(bt=Math.max(bt,ge.start*Ye),yt=Math.min(yt,(ge.start+ge.count)*Ye)),ke!==null?(bt=Math.max(bt,0),yt=Math.min(yt,ke.count)):Ge!=null&&(bt=Math.max(bt,0),yt=Math.min(yt,Ge.count));const mn=yt-bt;if(mn<0||mn===1/0)return;Ee.setup(J,F,Pe,Q,ke);let jn,wt=Se;if(ke!==null&&(jn=Fe.get(ke),wt=Te,wt.setIndex(jn)),J.isMesh)F.wireframe===!0?(we.setLineWidth(F.wireframeLinewidth*He()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(J.isLine){let Qe=F.linewidth;Qe===void 0&&(Qe=1),we.setLineWidth(Qe*He()),J.isLineSegments?wt.setMode(G.LINES):J.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else J.isPoints?wt.setMode(G.POINTS):J.isSprite&&wt.setMode(G.TRIANGLES);if(J.isInstancedMesh)wt.renderInstances(bt,mn,J.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,So=Math.min(Q.instanceCount,Qe);wt.renderInstances(bt,mn,So)}else wt.render(bt,mn)},this.compile=function(M,H){function Q(F,J,ge){F.transparent===!0&&F.side===li&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,ta(F,J,ge),F.side=Fi,F.needsUpdate=!0,ta(F,J,ge),F.side=li):ta(F,J,ge)}m=X.get(M),m.init(),y.push(m),M.traverseVisible(function(F){F.isLight&&F.layers.test(H.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights),M.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let ge=0;ge<J.length;ge++){const Ne=J[ge];Q(Ne,M,F)}else Q(J,M,F)}),y.pop(),m=null};let Mt=null;function _i(M){Mt&&Mt(M)}function mt(){Vt.stop()}function Nn(){Vt.start()}const Vt=new ap;Vt.setAnimationLoop(_i),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(M){Mt=M,L.setAnimationLoop(M),M===null?Vt.stop():Vt.start()},L.addEventListener("sessionstart",mt),L.addEventListener("sessionend",Nn),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,H,A),m=X.get(M,y.length),m.init(),y.push(m),Ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(Ie),ue=this.localClippingEnabled,fe=ie.init(this.clippingPlanes,ue),g=k.get(M,p.length),g.init(),p.push(g),yc(M,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,W),this.info.render.frame++,fe===!0&&ie.beginShadows();const Q=m.state.shadowsArray;if(te.render(Q,M,H),fe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(g,M),m.setupLights(v._useLegacyLights),H.isArrayCamera){const F=H.cameras;for(let J=0,ge=F.length;J<ge;J++){const Ne=F[J];Sc(g,M,Ne,Ne.viewport)}}else Sc(g,M,H);A!==null&&(oe.updateMultisampleRenderTarget(A),oe.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,H),Ee.resetDefaultState(),z=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function yc(M,H,Q,F){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ae.intersectsSprite(M)){F&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const Ne=x.update(M),Pe=M.material;Pe.visible&&g.push(M,Ne,Pe,Q,rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ae.intersectsObject(M))){const Ne=x.update(M),Pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),rt.copy(Ne.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(Pe)){const ke=Ne.groups;for(let Ye=0,Ue=ke.length;Ye<Ue;Ye++){const Ge=ke[Ye],bt=Pe[Ge.materialIndex];bt&&bt.visible&&g.push(M,Ne,bt,Q,rt.z,Ge)}}else Pe.visible&&g.push(M,Ne,Pe,Q,rt.z,null)}}const ge=M.children;for(let Ne=0,Pe=ge.length;Ne<Pe;Ne++)yc(ge[Ne],H,Q,F)}function Sc(M,H,Q,F){const J=M.opaque,ge=M.transmissive,Ne=M.transparent;m.setupLightsView(Q),fe===!0&&ie.setGlobalState(v.clippingPlanes,Q),ge.length>0&&pp(J,ge,H,Q),F&&we.viewport(S.copy(F)),J.length>0&&ea(J,H,Q),ge.length>0&&ea(ge,H,Q),Ne.length>0&&ea(Ne,H,Q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pp(M,H,Q,F){const J=Oe.isWebGL2;be===null&&(be=new ur(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Gs:Ii,minFilter:Hs,samples:J?4:0})),v.getDrawingBufferSize(Le),J?be.setSize(Le.x,Le.y):be.setSize(Jl(Le.x),Jl(Le.y));const ge=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(B),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Ui,ea(M,Q,F),oe.updateMultisampleRenderTarget(be),oe.updateRenderTargetMipmap(be);let Pe=!1;for(let ke=0,Ye=H.length;ke<Ye;ke++){const Ue=H[ke],Ge=Ue.object,bt=Ue.geometry,yt=Ue.material,mn=Ue.group;if(yt.side===li&&Ge.layers.test(F.layers)){const jn=yt.side;yt.side=en,yt.needsUpdate=!0,Mc(Ge,Q,F,bt,yt,mn),yt.side=jn,yt.needsUpdate=!0,Pe=!0}}Pe===!0&&(oe.updateMultisampleRenderTarget(be),oe.updateRenderTargetMipmap(be)),v.setRenderTarget(ge),v.setClearColor(B,U),v.toneMapping=Ne}function ea(M,H,Q){const F=H.isScene===!0?H.overrideMaterial:null;for(let J=0,ge=M.length;J<ge;J++){const Ne=M[J],Pe=Ne.object,ke=Ne.geometry,Ye=F===null?Ne.material:F,Ue=Ne.group;Pe.layers.test(Q.layers)&&Mc(Pe,H,Q,ke,Ye,Ue)}}function Mc(M,H,Q,F,J,ge){M.onBeforeRender(v,H,Q,F,J,ge),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(v,H,Q,F,M,ge),J.transparent===!0&&J.side===li&&J.forceSinglePass===!1?(J.side=en,J.needsUpdate=!0,v.renderBufferDirect(Q,H,F,J,M,ge),J.side=Fi,J.needsUpdate=!0,v.renderBufferDirect(Q,H,F,J,M,ge),J.side=li):v.renderBufferDirect(Q,H,F,J,M,ge),M.onAfterRender(v,H,Q,F,J,ge)}function ta(M,H,Q){H.isScene!==!0&&(H=Ft);const F=$e.get(M),J=m.state.lights,ge=m.state.shadowsArray,Ne=J.state.version,Pe=$.getParameters(M,J.state,ge,H,Q),ke=$.getProgramCacheKey(Pe);let Ye=F.programs;F.environment=M.isMeshStandardMaterial?H.environment:null,F.fog=H.fog,F.envMap=(M.isMeshStandardMaterial?et:ct).get(M.envMap||F.environment),Ye===void 0&&(M.addEventListener("dispose",pe),Ye=new Map,F.programs=Ye);let Ue=Ye.get(ke);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===Ne)return wc(M,Pe),Ue}else Pe.uniforms=$.getUniforms(M),M.onBuild(Q,Pe,v),M.onBeforeCompile(Pe,v),Ue=$.acquireProgram(Pe,ke),Ye.set(ke,Ue),F.uniforms=Pe.uniforms;const Ge=F.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=ie.uniform),wc(M,Pe),F.needsLights=gp(M),F.lightsStateVersion=Ne,F.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMap.value=J.state.directionalShadowMap,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotShadowMap.value=J.state.spotShadowMap,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMap.value=J.state.pointShadowMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix);const bt=Ue.getUniforms(),yt=Oa.seqWithValue(bt.seq,Ge);return F.currentProgram=Ue,F.uniformsList=yt,Ue}function wc(M,H){const Q=$e.get(M);Q.outputColorSpace=H.outputColorSpace,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function mp(M,H,Q,F,J){H.isScene!==!0&&(H=Ft),oe.resetTextureUnits();const ge=H.fog,Ne=F.isMeshStandardMaterial?H.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wn,ke=(F.isMeshStandardMaterial?et:ct).get(F.envMap||Ne),Ye=F.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ue=!!Q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ge=!!Q.morphAttributes.position,bt=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let mn=Ui;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mn=v.toneMapping);const jn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,wt=jn!==void 0?jn.length:0,Qe=$e.get(F),So=m.state.lights;if(fe===!0&&(ue===!0||M!==b)){const rn=M===b&&F.id===z;ie.setState(F,M,rn)}let Tt=!1;F.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==So.state.version||Qe.outputColorSpace!==Pe||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||Qe.envMap!==ke||F.fog===!0&&Qe.fog!==ge||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ie.numPlanes||Qe.numIntersection!==ie.numIntersection)||Qe.vertexAlphas!==Ye||Qe.vertexTangents!==Ue||Qe.morphTargets!==Ge||Qe.morphNormals!==bt||Qe.morphColors!==yt||Qe.toneMapping!==mn||Oe.isWebGL2===!0&&Qe.morphTargetsCount!==wt)&&(Tt=!0):(Tt=!0,Qe.__version=F.version);let Hi=Qe.currentProgram;Tt===!0&&(Hi=ta(F,H,J));let Tc=!1,cs=!1,Mo=!1;const Wt=Hi.getUniforms(),Gi=Qe.uniforms;if(we.useProgram(Hi.program)&&(Tc=!0,cs=!0,Mo=!0),F.id!==z&&(z=F.id,cs=!0),Tc||b!==M){if(Wt.setValue(G,"projectionMatrix",M.projectionMatrix),Oe.logarithmicDepthBuffer&&Wt.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,cs=!0,Mo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const rn=Wt.map.cameraPosition;rn!==void 0&&rn.setValue(G,rt.setFromMatrixPosition(M.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Wt.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&Wt.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(J.isSkinnedMesh){Wt.setOptional(G,J,"bindMatrix"),Wt.setOptional(G,J,"bindMatrixInverse");const rn=J.skeleton;rn&&(Oe.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Wt.setValue(G,"boneTexture",rn.boneTexture,oe),Wt.setValue(G,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wo=Q.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&Oe.isWebGL2===!0)&&ve.update(J,Q,Hi),(cs||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Wt.setValue(G,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Gi.envMap.value=ke,Gi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),cs&&(Wt.setValue(G,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&_p(Gi,Mo),ge&&F.fog===!0&&re.refreshFogUniforms(Gi,ge),re.refreshMaterialUniforms(Gi,F,C,Z,be),Oa.upload(G,Qe.uniformsList,Gi,oe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Oa.upload(G,Qe.uniformsList,Gi,oe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Wt.setValue(G,"center",J.center),Wt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Wt.setValue(G,"normalMatrix",J.normalMatrix),Wt.setValue(G,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const rn=F.uniformsGroups;for(let To=0,vp=rn.length;To<vp;To++)if(Oe.isWebGL2){const Ac=rn[To];qe.update(Ac,Hi),qe.bind(Ac,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function _p(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function gp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,H,Q){$e.get(M.texture).__webglTexture=H,$e.get(M.depthTexture).__webglTexture=Q;const F=$e.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Q===void 0,F.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,H){const Q=$e.get(M);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,Q=0){A=M,w=H,R=Q;let F=!0,J=null,ge=!1,Ne=!1;if(M){const ke=$e.get(M);ke.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(G.FRAMEBUFFER,null),F=!1):ke.__webglFramebuffer===void 0?oe.setupRenderTarget(M):ke.__hasExternalTextures&&oe.rebindTextures(M,$e.get(M.texture).__webglTexture,$e.get(M.depthTexture).__webglTexture);const Ye=M.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const Ue=$e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?J=Ue[H][Q]:J=Ue[H],ge=!0):Oe.isWebGL2&&M.samples>0&&oe.useMultisampledRTT(M)===!1?J=$e.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?J=Ue[Q]:J=Ue,S.copy(M.viewport),O.copy(M.scissor),ee=M.scissorTest}else S.copy(Y).multiplyScalar(C).floor(),O.copy(I).multiplyScalar(C).floor(),ee=K;if(we.bindFramebuffer(G.FRAMEBUFFER,J)&&Oe.drawBuffers&&F&&we.drawBuffers(M,J),we.viewport(S),we.scissor(O),we.setScissorTest(ee),ge){const ke=$e.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,Q)}else if(Ne){const ke=$e.get(M.texture),Ye=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,Q||0,Ye)}z=-1},this.readRenderTargetPixels=function(M,H,Q,F,J,ge,Ne){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){we.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const ke=M.texture,Ye=ke.format,Ue=ke.type;if(Ye!==An&&xe.convert(Ye)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ue===Gs&&(Ce.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ue!==Ii&&xe.convert(Ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Ai&&(Oe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-F&&Q>=0&&Q<=M.height-J&&G.readPixels(H,Q,F,J,xe.convert(Ye),xe.convert(Ue),ge)}finally{const ke=A!==null?$e.get(A).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(M,H,Q=0){const F=Math.pow(2,-Q),J=Math.floor(H.image.width*F),ge=Math.floor(H.image.height*F);oe.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,M.x,M.y,J,ge),we.unbindTexture()},this.copyTextureToTexture=function(M,H,Q,F=0){const J=H.image.width,ge=H.image.height,Ne=xe.convert(Q.format),Pe=xe.convert(Q.type);oe.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,F,M.x,M.y,J,ge,Ne,Pe,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,F,M.x,M.y,H.mipmaps[0].width,H.mipmaps[0].height,Ne,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,F,M.x,M.y,Ne,Pe,H.image),F===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,H,Q,F,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=M.max.x-M.min.x+1,Ne=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,ke=xe.convert(F.format),Ye=xe.convert(F.type);let Ue;if(F.isData3DTexture)oe.setTexture3D(F,0),Ue=G.TEXTURE_3D;else if(F.isDataArrayTexture)oe.setTexture2DArray(F,0),Ue=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,F.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,F.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),bt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),yt=G.getParameter(G.UNPACK_SKIP_PIXELS),mn=G.getParameter(G.UNPACK_SKIP_ROWS),jn=G.getParameter(G.UNPACK_SKIP_IMAGES),wt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,M.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,M.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,M.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(Ue,J,H.x,H.y,H.z,ge,Ne,Pe,ke,Ye,wt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ue,J,H.x,H.y,H.z,ge,Ne,Pe,ke,wt.data)):G.texSubImage3D(Ue,J,H.x,H.y,H.z,ge,Ne,Pe,ke,Ye,wt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jn),J===0&&F.generateMipmaps&&G.generateMipmap(Ue),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?oe.setTextureCube(M,0):M.isData3DTexture?oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?oe.setTexture2DArray(M,0):oe.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,we.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?rr:Wh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rr?We:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MT extends dp{}MT.prototype.isWebGL1Renderer=!0;class wT extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class TT extends Js{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const Or=new Ks(0,0,0,"YXZ"),Fr=new q,AT={type:"change"},RT={type:"lock"},CT={type:"unlock"},lf=Math.PI/2;class LT extends _r{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=NT.bind(this),this._onPointerlockChange=DT.bind(this),this._onPointerlockError=UT.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Fr.setFromMatrixColumn(t.matrix,0),Fr.crossVectors(t.up,Fr),t.position.addScaledVector(Fr,e)}moveRight(e){const t=this.camera;Fr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Fr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function NT(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;Or.setFromQuaternion(i.quaternion),Or.y-=e*.002*this.pointerSpeed,Or.x-=t*.002*this.pointerSpeed,Or.x=Math.max(lf-this.maxPolarAngle,Math.min(lf-this.minPolarAngle,Or.x)),i.quaternion.setFromEuler(Or),this.dispatchEvent(AT)}function DT(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(RT),this.isLocked=!0):(this.dispatchEvent(CT),this.isLocked=!1)}function UT(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}let cf=0;class IT{constructor(){ne(this,"destroyed",!1);ne(this,"listeners",new Map)}addEventListener(e,t,i=!1){var r;if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");return this.listeners.has(e)||this.listeners.set(e,[]),(r=this.listeners.get(e))==null||r.push({callbackfn:t,once:i,id:cf}),cf++}removeEventListener(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");if(typeof arguments[0]=="number"){for(const e of this.listeners.values())for(let t=0;t<e.length;t++)if(e[t].id==arguments[0])return e.splice(t,1),!0;return!1}else{const e=arguments[0],t=arguments[1],i=arguments[2],r=this.listeners.get(e);if(r===void 0)return!1;for(let s=0;s<r.length;s++){const a=r[s];if(a.callbackfn===t&&a.once===i)return r.splice(s,1),!0}return!1}}dispatchEvent(e,...t){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");const i=this.listeners.get(e);i!==void 0&&i.forEach(r=>{r.callbackfn(...t),r.once&&this.removeEventListener(e,r.callbackfn,r.once)})}destroyDispatcher(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");this.destroyed=!0,this.listeners.forEach((e,t)=>{this.listeners.delete(t)})}}function Ua(n,e,t,i){return Math.sqrt((n-t)**2+(e-i)**2)}class PT extends IT{constructor(t,i,r){super();ne(this,"world");ne(this,"renderDistance");ne(this,"unloadDistance");ne(this,"chunks",[]);ne(this,"regions",[]);ne(this,"isUpdating",!1);this.world=t,this.renderDistance=i,this.unloadDistance=r}async getRegion(t,i){const r=this.regions.find(o=>o.rx==t&&o.rz==i);if(r!=null)return r;const s=await this.world.getRegion(t,i);if(s==null){const o={type:"empty",rx:t,rz:i};return this.regions.push(o),o}await s.init();const a={type:"loaded",rx:t,rz:i,data:s};return this.regions.push(a),a}async loadChunk(t,i){if(this.chunks.some(a=>a.cx==t&&a.cz==i))return;const r=await this.getRegion(Math.floor(t/32),Math.floor(i/32));if(r.type!="loaded")return;const s=await r.data.getChunk(t,i);if(s==null){this.chunks.push({type:"empty",cx:t,cz:i});return}this.chunks.push({type:"loaded",cx:t,cz:i,data:s}),this.dispatchEvent("loadchunk",s)}async update(t,i){if(this.isUpdating)return;this.isUpdating=!0,this.chunks=this.chunks.filter(s=>Ua(t,i,s.cx,s.cz)>this.unloadDistance?(s.type=="loaded"&&this.dispatchEvent("unloadchunk",s.data),!1):!0);let r=[];for(let s=-this.renderDistance;s<this.renderDistance;s++)for(let a=-this.renderDistance;a<this.renderDistance;a++){const o=t+s,c=i+a;Ua(t,i,o,c)>this.renderDistance||this.chunks.some(l=>l.cx==o&&l.cz==c)||r.push({cx:o,cz:c})}for(;r.length>0;){const s=r.reduce((a,o)=>a==null||Ua(t,i,o.cx,o.cz)<Ua(t,i,a.cx,a.cz)?o:a);r.splice(r.indexOf(s),1),await this.loadChunk(s.cx,s.cz)}this.isUpdating=!1}}function kT(n){let e,t,i,r;return{c(){e=dn(),t=je("canvas"),this.h()},l(s){e=fn(s),t=Ke(s,"CANVAS",{class:!0}),ht(t).forEach(ce),this.h()},h(){ye(t,"class","svelte-rotshb")},m(s,a){Me(s,e,a),Me(s,t,a),n[5](t),i||(r=[kn(document.body,"keydown",n[2]),kn(document.body,"keyup",n[3]),kn(t,"click",n[6])],i=!0)},p:P,i:P,o:P,d(s){s&&(ce(e),ce(t)),n[5](null),i=!1,bf(r)}}}function OT(n,e,t){let{entry:i}=e,r,s,a,o=-1,c=-1,l,u,f,d,h=new Set;function _(y){h.add(y.code)}function g(y){h.delete(y.code)}Vs(async()=>{const y=new gx(i);l=new dp({canvas:r,antialias:!0}),u=new wT,f=new vn(91,1,.1,2e3),t(1,d=new LT(f,r)),f.position.set(0,100,0);function v(O=1){let ee=new q,B=.1;const U=f.getWorldDirection(new q),D=f.up,Z=new q().crossVectors(U,D);h.has("KeyW")&&ee.add(U),h.has("KeyS")&&ee.addScaledVector(U,-1),h.has("KeyD")&&ee.add(Z),h.has("KeyA")&&ee.addScaledVector(Z,-1),h.has("Space")&&ee.add(D),h.has("ControlLeft")&&ee.addScaledVector(D,-1),f.position.addScaledVector(ee.normalize(),B*O)}s=new ResizeObserver(()=>{t(0,r.width=r.clientWidth,r),t(0,r.height=r.clientHeight,r),l.setSize(r.width,r.height),f.aspect=r.width/r.height,f.updateProjectionMatrix()}),s.observe(r);function E(O){let ee=[];O.forEachBlock((U,D,Z,C)=>{O.getBlock(U+1,D,Z).Name=="minecraft:air"&&ee.push(U+1,D,Z,U+1,D+1,Z,U+1,D,Z+1,U+1,D+1,Z,U+1,D+1,Z+1,U+1,D,Z+1),O.getBlock(U-1,D,Z).Name=="minecraft:air"&&ee.push(U,D+1,Z,U,D,Z,U,D,Z+1,U,D+1,Z+1,U,D+1,Z,U,D,Z+1),O.getBlock(U,D+1,Z).Name=="minecraft:air"&&ee.push(U+1,D+1,Z,U,D+1,Z,U,D+1,Z+1,U+1,D+1,Z+1,U+1,D+1,Z,U,D+1,Z+1),O.getBlock(U,D-1,Z).Name=="minecraft:air"&&ee.push(U,D,Z,U+1,D,Z,U,D,Z+1,U+1,D,Z,U+1,D,Z+1,U,D,Z+1),O.getBlock(U,D,Z+1).Name=="minecraft:air"&&ee.push(U,D,Z+1,U+1,D,Z+1,U,D+1,Z+1,U+1,D,Z+1,U+1,D+1,Z+1,U,D+1,Z+1),O.getBlock(U,D,Z-1).Name=="minecraft:air"&&ee.push(U+1,D,Z,U,D,Z,U,D+1,Z,U+1,D+1,Z,U+1,D,Z,U,D+1,Z)});const B=new zi;return B.setAttribute("position",new Pi(ee,3)),B}let w=[];a=new PT(y,8,10),a.addEventListener("loadchunk",O=>{const ee=E(O);ee.computeVertexNormals();const B=new di(ee,new TT);B.translateX(O.cx*16),B.translateZ(O.cz*16),u.add(B),w.push({mesh:B,chunk:O})}),a.addEventListener("unloadchunk",O=>{const ee=w.find(B=>B.chunk==O);if(ee==null)throw new Error("Error while unloading chunk.");ee.mesh.clear(),ee.mesh.removeFromParent(),w=w.filter(B=>B!=ee)});let R,A;async function z(){const O=Math.floor(f.position.x/16),ee=Math.floor(f.position.z/16);(O!=R||ee!=A)&&(await a.update(O,ee),R=O,A=ee),clearTimeout(c),c=setTimeout(()=>z(),500)}z();let b=Date.now();async function S(){d.isLocked&&v(Date.now()-b),l.render(u,f),b=Date.now(),clearTimeout(o),o=setTimeout(()=>S(),1e3/60)}S()}),Lp(()=>{a.destroyDispatcher(),u.clear(),d.dispose(),clearTimeout(c),clearTimeout(o),s.disconnect()});function m(y){Ts[y?"unshift":"push"](()=>{r=y,t(0,r)})}const p=()=>d.lock();return n.$$set=y=>{"entry"in y&&t(4,i=y.entry)},[r,d,_,g,i,m,p]}class FT extends Ht{constructor(e){super(),Gt(this,e,OT,kT,Ot,{entry:4})}}const BT={namespace:"minecraft.world",priority:2,isValid:async n=>n.type!=lt.Directory||n.parent!=null&&n.parent.name!="saves"?!1:await n.get("level.dat")!==null,createViewer:async(n,e)=>{if(n.type==lt.Directory)new FT({target:e,props:{entry:n}});else throw new Error("Tried to create world viewer with file.")},getIcon:async n=>{if(n.type==lt.Directory){const e=await n.get("icon.png");return e==null?"/asset-viewer/bootstrap-icons/boxes.svg":e.type==lt.Directory?null:URL.createObjectURL(await e.blob())}return null}};let Fa=[];function Yn(n){Fa.push(n),Fa=Fa.sort((e,t)=>t.priority-e.priority)}async function uf(n){if(n.viewer==null){for(const e of Fa)if(await e.isValid(n)){n.viewer=e;break}if(n.viewer!=null&&(console.debug(`Found viewer "${n.viewer.namespace}" for "${tn.getPath(n)}"`),n.viewer.transform)){const e=await n.viewer.transform(n);await tn.transform(n,e)}}}let er;yf.subscribe(n=>er=n);function zT(n){er.listItems.forEach(e=>{e.selected=e.id==n}),er.contentItems.forEach(e=>{e.selected=e.id==n})}async function fp(n){const e=n.viewer;if(e!=null&&e.createViewer){console.debug(`Opening viewer for "${tn.getPath(n)}"`,n);const t=new bl({target:er.listContainer,props:{name:n.name,icon:e.getIcon?await e.getIcon(n):null,onSelect:zT,selected:!0}}),i=new xl({target:er.contentContainer,props:{id:t.id,selected:!0}});e.createViewer(n,i.slot),er.listItems.push(t),er.contentItems.push(i)}}async function co(n){const e=n.viewer;return e==null?null:e.getIcon?await e.getIcon(n):null}Yn(e_);Yn(o_);Yn(p_);Yn(Y_);Yn(ib);Yn(ob);Yn(pb);Yn(kb);Yn(Zb);Yn(BT);function HT(n){return{c:P,l:P,m:P,p:P,d:P}}function GT(n){let e;function t(s,a){return s[2]==null?WT:VT}let i=t(n),r=i(n);return{c(){e=je("div"),r.c(),this.h()},l(s){e=Ke(s,"DIV",{class:!0});var a=ht(e);r.l(a),a.forEach(ce),this.h()},h(){ye(e,"class","icon-container svelte-6m6qam")},m(s,a){Me(s,e,a),r.m(e,null)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null)))},d(s){s&&ce(e),r.d()}}}function VT(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t=n[2])||ye(e,"src",t),ye(e,"alt","File Icon"),ye(e,"class","svelte-6m6qam")},m(i,r){Me(i,e,r)},p(i,r){r&1&&!Yt(e.src,t=i[2])&&ye(e,"src",t)},d(i){i&&ce(e)}}}function WT(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t="/asset-viewer/bootstrap-icons/file-earmark.svg")||ye(e,"src",t),ye(e,"alt","File Icon"),ye(e,"class","svelte-6m6qam")},m(i,r){Me(i,e,r)},p:P,d(i){i&&ce(e)}}}function $T(n){return{c:P,l:P,m:P,p:P,d:P}}function XT(n){let e,t,i,r,s,a=n[0].name+"",o,c,l,u={ctx:n,current:null,token:null,hasCatch:!1,pending:$T,then:GT,catch:HT,value:2};return Et(i=co(n[0]),u),{c(){e=je("div"),t=je("div"),u.block.c(),r=dn(),s=je("div"),o=Rn(a),this.h()},l(f){e=Ke(f,"DIV",{class:!0});var d=ht(e);t=Ke(d,"DIV",{class:!0});var h=ht(t);u.block.l(h),r=fn(h),s=Ke(h,"DIV",{class:!0});var _=ht(s);o=Cn(_,a),_.forEach(ce),h.forEach(ce),d.forEach(ce),this.h()},h(){ye(s,"class","name svelte-6m6qam"),ye(t,"class","title svelte-6m6qam"),ye(e,"class","container svelte-6m6qam")},m(f,d){Me(f,e,d),St(e,t),u.block.m(t,u.anchor=null),u.mount=()=>t,u.anchor=r,St(t,r),St(t,s),St(s,o),c||(l=kn(t,"click",n[1]),c=!0)},p(f,[d]){n=f,u.ctx=n,d&1&&i!==(i=co(n[0]))&&Et(i,u)||Ln(u,n,d),d&1&&a!==(a=n[0].name+"")&&Bi(o,a)},i:P,o:P,d(f){f&&ce(e),u.block.d(),u.token=null,u=null,c=!1,l()}}}function ZT(n,e,t){let{file:i}=e;const r=()=>fp(i);return n.$$set=s=>{"file"in s&&t(0,i=s.file)},[i,r]}class qT extends Ht{constructor(e){super(),Gt(this,e,ZT,XT,Ot,{file:0})}}function df(n,e,t){const i=n.slice();return i[8]=e[t],i}function YT(n){return{c:P,l:P,m:P,p:P,d:P}}function jT(n){let e;function t(s,a){return s[11]==null?JT:KT}let i=t(n),r=i(n);return{c(){e=je("div"),r.c(),this.h()},l(s){e=Ke(s,"DIV",{class:!0});var a=ht(e);r.l(a),a.forEach(ce),this.h()},h(){ye(e,"class","icon-container svelte-135cnfs")},m(s,a){Me(s,e,a),r.m(e,null)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null)))},d(s){s&&ce(e),r.d()}}}function KT(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t=n[11])||ye(e,"src",t),ye(e,"alt","Directory Icon"),ye(e,"class","svelte-135cnfs")},m(i,r){Me(i,e,r)},p(i,r){r&2&&!Yt(e.src,t=i[11])&&ye(e,"src",t)},d(i){i&&ce(e)}}}function JT(n){let e;function t(s,a){return s[3]?s[0]?QT:e1:t1}let i=t(n),r=i(n);return{c(){r.c(),e=ut()},l(s){r.l(s),e=ut()},m(s,a){r.m(s,a),Me(s,e,a)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&ce(e),r.d(s)}}}function QT(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t="/asset-viewer/bootstrap-icons/archive.svg")||ye(e,"src",t),ye(e,"alt","Directory Archive Icon"),ye(e,"class","svelte-135cnfs")},m(i,r){Me(i,e,r)},p:P,d(i){i&&ce(e)}}}function e1(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t="/asset-viewer/bootstrap-icons/archive-fill.svg")||ye(e,"src",t),ye(e,"alt","Directory Collapsed Archive Icon"),ye(e,"class","svelte-135cnfs")},m(i,r){Me(i,e,r)},p:P,d(i){i&&ce(e)}}}function t1(n){let e;function t(s,a){return s[0]?n1:i1}let i=t(n),r=i(n);return{c(){r.c(),e=ut()},l(s){r.l(s),e=ut()},m(s,a){r.m(s,a),Me(s,e,a)},p(s,a){i!==(i=t(s))&&(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&ce(e),r.d(s)}}}function n1(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t="/asset-viewer/bootstrap-icons/folder.svg")||ye(e,"src",t),ye(e,"alt","Directory Icon"),ye(e,"class","svelte-135cnfs")},m(i,r){Me(i,e,r)},d(i){i&&ce(e)}}}function i1(n){let e,t;return{c(){e=je("img"),this.h()},l(i){e=Ke(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Yt(e.src,t="/asset-viewer/bootstrap-icons/folder-fill.svg")||ye(e,"src",t),ye(e,"alt","Directory Collapsed Icon"),ye(e,"class","svelte-135cnfs")},m(i,r){Me(i,e,r)},d(i){i&&ce(e)}}}function r1(n){return{c:P,l:P,m:P,p:P,d:P}}function ff(n){let e,t='<img src="/asset-viewer/bootstrap-icons/eye.svg" alt="Open Viewer Icon" class="svelte-135cnfs"/>',i,r;return{c(){e=je("div"),e.innerHTML=t,this.h()},l(s){e=Ke(s,"DIV",{class:!0,"data-svelte-h":!0}),xf(e)!=="svelte-1fphaay"&&(e.innerHTML=t),this.h()},h(){ye(e,"class","create-viewer-icon-container svelte-135cnfs")},m(s,a){Me(s,e,a),i||(r=kn(e,"click",n[6]),i=!0)},p:P,d(s){s&&ce(e),i=!1,r()}}}function hf(n){let e,t,i=ki(n[4]),r=[];for(let a=0;a<i.length;a+=1)r[a]=pf(df(n,i,a));const s=a=>it(r[a],1,1,()=>{r[a]=null});return{c(){e=je("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ke(a,"DIV",{class:!0});var o=ht(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(ce),this.h()},h(){ye(e,"class","dir-entries svelte-135cnfs"),cn(e,"hidden",!n[0])},m(a,o){Me(a,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(a,o){if(o&16){i=ki(a[4]);let c;for(c=0;c<i.length;c+=1){const l=df(a,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=pf(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(pi(),c=i.length;c<r.length;c+=1)s(c);mi()}(!t||o&1)&&cn(e,"hidden",!a[0])},i(a){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)it(r[o]);t=!1},d(a){a&&ce(e),fo(r,a)}}}function s1(n){let e,t;return e=new hp({props:{dir:n[8]}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&16&&(s.dir=i[8]),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function a1(n){let e,t;return e=new qT({props:{file:n[8]}}),{c(){$n(e.$$.fragment)},l(i){Xn(e.$$.fragment,i)},m(i,r){Zn(e,i,r),t=!0},p(i,r){const s={};r&16&&(s.file=i[8]),e.$set(s)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){it(e.$$.fragment,i),t=!1},d(i){qn(e,i)}}}function pf(n){let e,t,i,r;const s=[a1,s1],a=[];function o(c,l){return c[8].type==lt.File?0:c[8].type==lt.Directory?1:-1}return~(e=o(n))&&(t=a[e]=s[e](n)),{c(){t&&t.c(),i=ut()},l(c){t&&t.l(c),i=ut()},m(c,l){~e&&a[e].m(c,l),Me(c,i,l),r=!0},p(c,l){let u=e;e=o(c),e===u?~e&&a[e].p(c,l):(t&&(pi(),it(a[u],1,1,()=>{a[u]=null}),mi()),~e?(t=a[e],t?t.p(c,l):(t=a[e]=s[e](c),t.c()),Xe(t,1),t.m(i.parentNode,i)):t=null)},i(c){r||(Xe(t),r=!0)},o(c){it(t),r=!1},d(c){c&&ce(i),~e&&a[e].d(c)}}}function mf(n){var m,p;let e,t,i,r,s,a=n[1].name+"",o,c,l,u,f,d,h={ctx:n,current:null,token:null,hasCatch:!1,pending:r1,then:jT,catch:YT,value:11};Et(i=co(n[1]),h);let _=((p=(m=n[1])==null?void 0:m.viewer)==null?void 0:p.createViewer)&&ff(n),g=n[4]&&n[2]&&hf(n);return{c(){e=je("div"),t=je("div"),h.block.c(),r=dn(),s=je("div"),o=Rn(a),c=dn(),_&&_.c(),l=dn(),g&&g.c(),this.h()},l(y){e=Ke(y,"DIV",{class:!0});var v=ht(e);t=Ke(v,"DIV",{class:!0});var E=ht(t);h.block.l(E),r=fn(E),s=Ke(E,"DIV",{class:!0});var w=ht(s);o=Cn(w,a),w.forEach(ce),c=fn(E),_&&_.l(E),E.forEach(ce),l=fn(v),g&&g.l(v),v.forEach(ce),this.h()},h(){ye(s,"class","name svelte-135cnfs"),ye(t,"class","title svelte-135cnfs"),ye(e,"class","container svelte-135cnfs")},m(y,v){Me(y,e,v),St(e,t),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=r,St(t,r),St(t,s),St(s,o),St(t,c),_&&_.m(t,null),St(e,l),g&&g.m(e,null),u=!0,f||(d=kn(t,"click",n[7]),f=!0)},p(y,v){var E,w;n=y,h.ctx=n,v&2&&i!==(i=co(n[1]))&&Et(i,h)||Ln(h,n,v),(!u||v&2)&&a!==(a=n[1].name+"")&&Bi(o,a),(w=(E=n[1])==null?void 0:E.viewer)!=null&&w.createViewer?_?_.p(n,v):(_=ff(n),_.c(),_.m(t,null)):_&&(_.d(1),_=null),n[4]&&n[2]?g?(g.p(n,v),v&20&&Xe(g,1)):(g=hf(n),g.c(),Xe(g,1),g.m(e,null)):g&&(pi(),it(g,1,1,()=>{g=null}),mi())},i(y){u||(Xe(g),u=!0)},o(y){it(g),u=!1},d(y){y&&ce(e),h.block.d(),h.token=null,h=null,_&&_.d(),g&&g.d(),f=!1,d()}}}function o1(n){let e=n[5],t,i,r=mf(n);return{c(){r.c(),t=ut()},l(s){r.l(s),t=ut()},m(s,a){r.m(s,a),Me(s,t,a),i=!0},p(s,[a]){a&32&&Ot(e,e=s[5])?(pi(),it(r,1,1,P),mi(),r=mf(s),r.c(),Xe(r,1),r.m(t.parentNode,t)):r.p(s,a)},i(s){i||(Xe(r),i=!0)},o(s){it(r),i=!1},d(s){s&&ce(t),r.d(s)}}}function l1(n,e,t){let{dir:i}=e,r,{expanded:s=!1}=e,a=!1,o,c=0;Vs(async()=>{i.parent==null&&(await uf(i),t(5,c++,c));const f=Object.values(await i.list());await Promise.all(f.map(async d=>{try{await uf(d)}catch(h){console.error(h)}})),t(4,o=Object.values(await i.list()).sort((d,h)=>d.name.localeCompare(h.name)+(h.type-d.type)*1e3))});const l=f=>{f.stopPropagation(),fp(i)},u=()=>{t(0,s=!s)};return n.$$set=f=>{"dir"in f&&t(1,i=f.dir),"expanded"in f&&t(0,s=f.expanded)},n.$$.update=()=>{var f;n.$$.dirty&2&&t(3,r=((f=i.viewer)==null?void 0:f.transform)!=null),n.$$.dirty&5&&s&&!a&&t(2,a=!0)},[s,i,a,r,o,c,l,u]}class hp extends Ht{constructor(e){super(),Gt(this,e,l1,o1,Ot,{dir:1,expanded:0})}}var lt=(n=>(n[n.File=1]="File",n[n.Directory=2]="Directory",n))(lt||{}),tn;(n=>{function e(u){return u.parent==null?u.type==2?u:null:e(u)}n.root=e;function t(u){return u.parent==null?"":i(`${t(u.parent)}/${u.name}`)}n.getPath=t;function i(u){for(u=u.replace(/[\\\/]/g,"/");u.startsWith("/");)u=u.slice(1);for(;u.endsWith("/");)u=u.slice(0,-1);return u}n.fixPath=i;async function r(u,f){let d=i(f).split("/"),h=u;for(;d.length>1;){const g=d.shift();if(g==null)throw new Error("Catastrophic error that should never happen.");const m=await u.get(g);if(m==null||m.type!=2)return null;h=m}const _=d.shift();if(_==null)throw new Error("Catastrophic error that should never happen.");return await h.get(_)}n.getDeep=r;async function s(u,f,d){const h=i(f).split("/"),_=h.shift();if(_==null)throw new Error("setDeep empty path.");if(h.length==0)await u.set(_,d);else{let g=await u.get(_);if(g==null)g=new l(_,u),await u.set(_,g);else if(g.type!=2)throw new Error("setDeep encountered a file.");await s(g,h.join("/"),d)}}n.setDeep=s;async function a(u,f){if(u.parent==null)throw new Error("Could not transform, Entry has no parent.");return f==null?await u.parent.set(u.name,null):(f.viewer=u.viewer,f.name=u.name,f.parent=u.parent,await u.parent.set(u.name,f)),f}n.transform=a;async function o(u,f){let d=[u];for(;d.length>0;){const h=d.pop();if(h==null)break;const _=Object.entries(await h.list());for(const[g,m]of _){const p=n.getPath(m),y=await f(p,m),v=await h.get(g);v!=null&&v.type==2&&(y===void 0||y===!0)&&d.push(v)}}}n.forEachDeep=o;class c{constructor(f,d,h){ne(this,"viewer",null);ne(this,"type",1);ne(this,"name");ne(this,"parent");ne(this,"_blob");this._blob=f,this.name=d,this.parent=h}async blob(){return this._blob}async buffer(){return await this._blob.arrayBuffer()}}n.fsFile_Blob=c;class l{constructor(f,d){ne(this,"viewer",null);ne(this,"type",2);ne(this,"name");ne(this,"parent");ne(this,"entries",{});this.name=f,this.parent=d}async list(){return{...this.entries}}async get(f){return this.entries[f]??null}async set(f,d){d==null?delete this.entries[f]:(d.parent=this,this.entries[f]=d)}}n.fsDirectory_Container=l})(tn||(tn={}));async function c1(n){const e=n.createReader();let t={},i=0;do{let r=await new Promise(s=>{e.readEntries(s)});i=r.length;for(const s of r)t[s.name]=s}while(i>0);return t}class Ec{constructor(e,t="ROOT",i=null){ne(this,"type",lt.Directory);ne(this,"viewer",null);ne(this,"evaluated",!1);ne(this,"name");ne(this,"parent");ne(this,"transfer");ne(this,"initialized",!1);ne(this,"entries",{});this.transfer=e,this.name=t,this.parent=i}async init(){if(this.initialized)return;const e=await c1(this.transfer);this.entries={};for(const t in e){const i=e[t];if(i.isFile){const r=await new Promise(s=>i.file(s));this.entries[t]=new tn.fsFile_Blob(r,t,this)}else if(i.isDirectory){const r=i;this.entries[t]=new Ec(r,t,this)}}this.initialized=!0}async list(){return this.initialized||await this.init(),{...this.entries}}async get(e){return this.initialized||await this.init(),this.entries[e]??null}async set(e,t){this.initialized||await this.init(),t==null?delete this.entries[e]:(t.parent=this,this.entries[e]=t)}}function u1(n){let e,t,i=`<div class="dropzone-content svelte-r6lkz9"><div class="dropzone-text svelte-r6lkz9">File Dropzone
            <br/></div></div>`,r,s;return{c(){e=dn(),t=je("div"),t.innerHTML=i,this.h()},l(a){e=fn(a),t=Ke(a,"DIV",{class:!0,"data-svelte-h":!0}),xf(t)!=="svelte-16pzcnp"&&(t.innerHTML=i),this.h()},h(){ye(t,"class","file-dropzone svelte-r6lkz9"),cn(t,"visible",n[0])},m(a,o){Me(a,e,o),Me(a,t,o),r||(s=[kn(document.body,"dragover",n[1]),kn(document.body,"dragleave",n[2]),kn(document.body,"drop",n[3])],r=!0)},p(a,[o]){o&1&&cn(t,"visible",a[0])},i:P,o:P,d(a){a&&(ce(e),ce(t)),r=!1,bf(s)}}}function _f(n){return n==null?!1:n.types.length==1&&n.types[0]=="Files"}function d1(n,e,t){const i=vf();let r=!1;function s(c){c.dataTransfer!=null&&_f(c.dataTransfer)&&(c.preventDefault(),t(0,r=!0))}function a(c){c.fromElement==null&&t(0,r=!1)}async function o(c){c.preventDefault(),t(0,r=!1);const l=c.dataTransfer;if(l==null||!_f(l))return;const u=l.items[0].webkitGetAsEntry();if(u!=null){if(u.isDirectory){const f=u;i("dropentry",new Ec(f,f.name))}else if(u.isFile){const f=await new Promise(d=>u.file(d));i("dropentry",new tn.fsFile_Blob(f,f.name,null))}}}return[r,s,a,o]}class f1 extends Ht{constructor(e){super(),Gt(this,e,d1,u1,Ot,{})}}function h1(n){let e,t,i,r,s,a;return e=new f1({}),e.$on("dropentry",n[2]),{c(){$n(e.$$.fragment),t=dn(),i=je("div"),r=dn(),s=je("div"),this.h()},l(o){Xn(e.$$.fragment,o),t=fn(o),i=Ke(o,"DIV",{class:!0}),ht(i).forEach(ce),r=fn(o),s=Ke(o,"DIV",{class:!0}),ht(s).forEach(ce),this.h()},h(){ye(i,"class","tab-list-container svelte-b92idw"),ye(s,"class","tab-content-container")},m(o,c){Zn(e,o,c),Me(o,t,c),Me(o,i,c),n[3](i),Me(o,r,c),Me(o,s,c),n[4](s),a=!0},p:P,i(o){a||(Xe(e.$$.fragment,o),a=!0)},o(o){it(e.$$.fragment,o),a=!1},d(o){o&&(ce(t),ce(i),ce(r),ce(s)),qn(e,o),n[3](null),n[4](null)}}}function p1(n,e,t){let i,r,s=[],a=[];Vs(()=>{yf.set({listContainer:i,contentContainer:r,listItems:s,contentItems:a});const f="Drag and drop a directory onto the page.",d=new bl({target:i,props:{name:"Information",onSelect:o,selected:!0}}),h=new xl({target:r,props:{id:d.id,selected:!0}});new Pf({target:h.slot,props:{entry:new tn.fsFile_Blob(new Blob([f]),"information.txt",null)}}),s.push(d),a.push(h)});function o(f){s.forEach(d=>{d.selected=d.id==f}),a.forEach(d=>{d.selected=d.id==f})}function c(f){const d=f.detail;if(d.type!=lt.Directory){console.warn("Drop entry must be directory.");return}const h=new bl({target:i,props:{name:d.name,icon:"/asset-viewer/bootstrap-icons/folder-fill.svg",onSelect:o,selected:!0}}),_=new xl({target:r,props:{id:h.id,selected:!0}});new hp({target:_.slot,props:{dir:d}}),s.push(h),a.push(_)}function l(f){Ts[f?"unshift":"push"](()=>{i=f,t(0,i)})}function u(f){Ts[f?"unshift":"push"](()=>{r=f,t(1,r)})}return[i,r,c,l,u]}class S1 extends Ht{constructor(e){super(),Gt(this,e,p1,h1,Ot,{})}}export{S1 as component,b1 as universal};
