var sp=Object.defineProperty;var op=(n,e,t)=>e in n?sp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var me=(n,e,t)=>(op(n,typeof e!="symbol"?e+"":e,t),t);import{D as lp,E as cp,F as ja,G as up,s as $t,I as Hr,f as nt,g as it,h as vt,d as fe,J as ni,K as bc,i as Le,x as At,B as P,L as Ns,M as sf,l as Nn,m as Dn,n as or,H as dp,e as ct,v as fp,r as hp,y as pp,z as mp,A as _p,N as of,b as gp,O as cn,j as Ne,a as Mn,c as wn,k as Ec,P as io,o as ro,p as Xl,Q as oi,R as lf,S as vp,w as cf}from"../chunks/scheduler.7880eec4.js";import{g as ui,t as tt,c as di,a as Xe,S as Jt,i as Qt,b as Hn,d as Gn,m as Vn,e as Wn}from"../chunks/index.7066c242.js";import{w as xp}from"../chunks/index.80d85932.js";function Et(n,e){const t=e.token={};function i(r,a,s,o){if(e.token!==t)return;e.resolved=o;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=o);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==a&&f&&(ui(),tt(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),di())}):e.block.d(1),l.c(),Xe(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[a]=l),u&&up()}if(lp(n)){const r=cp();if(n.then(a=>{ja(r),i(e.then,1,e.value,a),ja(null)},a=>{if(ja(r),i(e.catch,2,e.error,a),ja(null),!e.hasCatch)throw a}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,n),!0;e.resolved=n}}function Tn(n,e,t){const i=e.slice(),{resolved:r}=n;n.current===n.then&&(i[n.value]=r),n.current===n.catch&&(i[n.error]=r),n.block.p(i,t)}function Ii(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function uf(n,e){const t={},i={},r={$$scope:1};let a=n.length;for(;a--;){const s=n[a],o=e[a];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(t[c]=o[c],r[c]=1);n[a]=o}else for(const c in s)r[c]=1}for(const s in i)s in t||(t[s]=void 0);return t}function bp(n){return typeof n=="object"&&n!==null?n:{}}const Ep=!0,$T=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ep},Symbol.toStringTag,{value:"Module"})),df=xp();var xa;(n=>{function e(t,i,r="0x"){return`${r}${t.toString(16).toUpperCase().padStart(i*2,"0")}`}n.hex=e})(xa||(xa={}));const Ya={Uint8:1,Int8:1,Uint16:2,Int16:2,Uint32:4,Int32:4,BigUint64:8,BigInt64:8,Float32:4,Float64:8},xi=class xi{constructor(e){me(this,"view",new DataView(new ArrayBuffer(0)));me(this,"pointer",0);me(this,"endianness",xi.LITTLE_ENDIAN);e!==void 0&&(e instanceof xi&&(e=e.buffer),this.loadData(e))}get length(){return this.view.byteLength}get buffer(){return this.view.buffer}get eof(){return this.pointer>=this.length}get dataLeft(){return this.length-this.pointer}loadData(e,t=0){e instanceof ArrayBuffer||(e=e.buffer),this.view=new DataView(e),this.pointer=t}to(){let e=arguments[0];return typeof e=="function"&&(e=new e),e.loadData(this.buffer,this.pointer),e}peek(e,t=0,...i){const r=this.pointer;this.pointer+=t;const a=e.call(this,...i);return this.pointer=r,a}readBuffer(e){const t=this.buffer.slice(this.pointer,this.pointer+e);return this.pointer+=e,t}readBufferFast(e){const t=new Uint8Array(this.buffer,this.pointer,e);return this.pointer+=e,t}readNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=Ya[e],t}readBigNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=Ya[e],t}readCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==xi.LITTLE_ENDIAN&&(i=i.reverse());let r=0;for(let a=0;a<i.length;a++)r<<=8,r|=i[a];return t&&r&2<<e*8-1&&(r&=(2<<e*8-1)-1,r=-r),r}readBigCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==xi.LITTLE_ENDIAN&&(i=i.reverse());let r=0n;for(let a=0;a<i.length;a++)r<<=8n,r|=BigInt(i[a]);return t&&r&2n<<BigInt(e)*8n-1n&&(r&=(2n<<BigInt(e)*8n-1n)-1n,r=-r),r}readString(e,t="utf-8"){const i=this.readBuffer(e);return new TextDecoder(t).decode(i)}readNullString(e="utf-8"){let t=this.pointer;for(;this.view.getUint8(t++)!=0;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder(e).decode(i)}readArray(e,t,...i){let r=new Array(t);for(let a=0;a<t;a++)r[a]=e.call(this,...i);return r}readArrayWhile(e,t,...i){let r=new Array;do r.push(e.call(this,...i));while(t(r[r.length-1],r.length-1,r));return r}readArrayTuple(e,t,...i){return this.readArray(e,t,...i)}readArrayUntilEnd(e,...t){return this.readArrayWhile(e,()=>!this.eof,...t)}assertMagic(e,t){if(typeof e=="string"){const i=this.readString(e.length,"ascii");if(i!=e)throw new Error(`DataReader.assertMagic: Strings do not match. expected: "${e}" got: "${i}"`)}else if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));if(i.some((a,s)=>a!=r[s]))throw new Error("DataReader.assertMagic: Buffers do not match.")}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));if(e.some((r,a)=>r!=i[a]))throw new Error("DataReader.assertMagic: Arrays do not match.")}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");const i=typeof e=="number"?this.readNumber(t):this.readBigNumber(t);if(i!=e)throw new Error(`DataReader.assertMagic: Magic number does not match. expected: ${xa.hex(e,Ya[t])} got: ${xa.hex(i,Ya[t])}`)}else throw new Error("DataReader.assertMagic: Invalid arguments.")}magic(e,t){if(typeof e=="string")return this.readString(e.length,"ascii")==e;if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));return i.every((a,s)=>a==r[s])}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));return e.every((r,a)=>r==i[a])}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");return(typeof e=="number"?this.readNumber(t):this.readBigNumber(t))==e}else throw new Error("DataReader.magic: Invalid arguments.")}};me(xi,"BIG_ENDIAN",!1),me(xi,"LITTLE_ENDIAN",!0);let jt=xi;var fl;(n=>{function e(a){return new Promise(s=>setTimeout(s,a))}n.wait=e;const t=` 
	\\=+-/*:[](){}`.split("").map(a=>a.charCodeAt(0)),i=8;function r(a){if(a.byteLength==0)throw new Error("isBinary was called with no data.");const s=new jt(a);let o=[],c=0;for(;!s.eof;){const u=s.readNumber("Uint8");t.includes(u)?(c>0&&o.push(c),c=0):c++}return o.reduce((u,f)=>u+=f/o.length,0)>i}n.isBinary=r})(fl||(fl={}));function yp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ff(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(e=>{const t=n[e],i=typeof t;(i==="object"||i==="function")&&!Object.isFrozen(t)&&ff(t)}),n}let yc=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function hf(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ei(n,...e){const t=Object.create(null);for(const i in n)t[i]=n[i];return e.forEach(function(i){for(const r in i)t[r]=i[r]}),t}const Sp="</span>",Sc=n=>!!n.scope,Mp=(n,{prefix:e})=>{if(n.startsWith("language:"))return n.replace("language:","language-");if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((i,r)=>`${i}${"_".repeat(r+1)}`)].join(" ")}return`${e}${n}`};class wp{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=hf(e)}openNode(e){if(!Sc(e))return;const t=Mp(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){Sc(e)&&(this.buffer+=Sp)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const Mc=(n={})=>{const e={children:[]};return Object.assign(e,n),e};class Zl{constructor(){this.rootNode=Mc(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=Mc({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(i=>this._walk(e,i)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Zl._collapse(t)}))}}class Tp extends Zl{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const i=e.root;t&&(i.scope=`language:${t}`),this.add(i)}toHTML(){return new wp(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function ba(n){return n?typeof n=="string"?n:n.source:null}function pf(n){return lr("(?=",n,")")}function Ap(n){return lr("(?:",n,")*")}function Rp(n){return lr("(?:",n,")?")}function lr(...n){return n.map(t=>ba(t)).join("")}function Cp(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function jl(...n){return"("+(Cp(n).capture?"":"?:")+n.map(i=>ba(i)).join("|")+")"}function mf(n){return new RegExp(n.toString()+"|").exec("").length-1}function Lp(n,e){const t=n&&n.exec(e);return t&&t.index===0}const Np=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Yl(n,{joinWith:e}){let t=0;return n.map(i=>{t+=1;const r=t;let a=ba(i),s="";for(;a.length>0;){const o=Np.exec(a);if(!o){s+=a;break}s+=a.substring(0,o.index),a=a.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?s+="\\"+String(Number(o[1])+r):(s+=o[0],o[0]==="("&&t++)}return s}).map(i=>`(${i})`).join(e)}const Dp=/\b\B/,_f="[a-zA-Z]\\w*",ql="[a-zA-Z_]\\w*",gf="\\b\\d+(\\.\\d+)?",vf="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",xf="\\b(0b[01]+)",Ip="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Up=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=lr(e,/.*\b/,n.binary,/\b.*/)),Ei({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,i)=>{t.index!==0&&i.ignoreMatch()}},n)},Ea={begin:"\\\\[\\s\\S]",relevance:0},Pp={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ea]},kp={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ea]},Op={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ao=function(n,e,t={}){const i=Ei({scope:"comment",begin:n,end:e,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=jl("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:lr(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},Fp=ao("//","$"),Bp=ao("/\\*","\\*/"),zp=ao("#","$"),Hp={scope:"number",begin:gf,relevance:0},Gp={scope:"number",begin:vf,relevance:0},Vp={scope:"number",begin:xf,relevance:0},Wp={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Ea,{begin:/\[/,end:/\]/,relevance:0,contains:[Ea]}]}]},$p={scope:"title",begin:_f,relevance:0},Xp={scope:"title",begin:ql,relevance:0},Zp={begin:"\\.\\s*"+ql,relevance:0},jp=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var qa=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Dp,IDENT_RE:_f,UNDERSCORE_IDENT_RE:ql,NUMBER_RE:gf,C_NUMBER_RE:vf,BINARY_NUMBER_RE:xf,RE_STARTERS_RE:Ip,SHEBANG:Up,BACKSLASH_ESCAPE:Ea,APOS_STRING_MODE:Pp,QUOTE_STRING_MODE:kp,PHRASAL_WORDS_MODE:Op,COMMENT:ao,C_LINE_COMMENT_MODE:Fp,C_BLOCK_COMMENT_MODE:Bp,HASH_COMMENT_MODE:zp,NUMBER_MODE:Hp,C_NUMBER_MODE:Gp,BINARY_NUMBER_MODE:Vp,REGEXP_MODE:Wp,TITLE_MODE:$p,UNDERSCORE_TITLE_MODE:Xp,METHOD_GUARD:Zp,END_SAME_AS_BEGIN:jp});function Yp(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function qp(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function Kp(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Yp,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function Jp(n,e){Array.isArray(n.illegal)&&(n.illegal=jl(...n.illegal))}function Qp(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function em(n,e){n.relevance===void 0&&(n.relevance=1)}const tm=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(i=>{delete n[i]}),n.keywords=t.keywords,n.begin=lr(t.beforeMatch,pf(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},nm=["of","and","for","in","not","or","if","then","parent","list","value"],im="keyword";function bf(n,e,t=im){const i=Object.create(null);return typeof n=="string"?r(t,n.split(" ")):Array.isArray(n)?r(t,n):Object.keys(n).forEach(function(a){Object.assign(i,bf(n[a],e,a))}),i;function r(a,s){e&&(s=s.map(o=>o.toLowerCase())),s.forEach(function(o){const c=o.split("|");i[c[0]]=[a,rm(c[0],c[1])]})}}function rm(n,e){return e?Number(e):am(n)?0:1}function am(n){return nm.includes(n.toLowerCase())}const wc={},qi=n=>{console.error(n)},Tc=(n,...e)=>{console.log(`WARN: ${n}`,...e)},fr=(n,e)=>{wc[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),wc[`${n}/${e}`]=!0)},Ds=new Error;function Ef(n,e,{key:t}){let i=0;const r=n[t],a={},s={};for(let o=1;o<=e.length;o++)s[o+i]=r[o],a[o+i]=!0,i+=mf(e[o-1]);n[t]=s,n[t]._emit=a,n[t]._multi=!0}function sm(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw qi("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ds;if(typeof n.beginScope!="object"||n.beginScope===null)throw qi("beginScope must be object"),Ds;Ef(n,n.begin,{key:"beginScope"}),n.begin=Yl(n.begin,{joinWith:""})}}function om(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw qi("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ds;if(typeof n.endScope!="object"||n.endScope===null)throw qi("endScope must be object"),Ds;Ef(n,n.end,{key:"endScope"}),n.end=Yl(n.end,{joinWith:""})}}function lm(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function cm(n){lm(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),sm(n),om(n)}function um(n){function e(s,o){return new RegExp(ba(s),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(o?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,o]),this.matchAt+=mf(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(c=>c[1]);this.matcherRe=e(Yl(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(o);if(!c)return null;const l=c.findIndex((f,d)=>d>0&&f!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const c=new t;return this.rules.slice(o).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[o]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,c){this.rules.push([o,c]),c.type==="begin"&&this.count++}exec(o){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(o);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(o)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function r(s){const o=new i;return s.contains.forEach(c=>o.addRule(c.begin,{rule:c,type:"begin"})),s.terminatorEnd&&o.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&o.addRule(s.illegal,{type:"illegal"}),o}function a(s,o){const c=s;if(s.isCompiled)return c;[qp,Qp,cm,tm].forEach(u=>u(s,o)),n.compilerExtensions.forEach(u=>u(s,o)),s.__beforeBegin=null,[Kp,Jp,em].forEach(u=>u(s,o)),s.isCompiled=!0;let l=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),l=s.keywords.$pattern,delete s.keywords.$pattern),l=l||/\w+/,s.keywords&&(s.keywords=bf(s.keywords,n.case_insensitive)),c.keywordPatternRe=e(l,!0),o&&(s.begin||(s.begin=/\B|\b/),c.beginRe=e(c.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(c.endRe=e(c.end)),c.terminatorEnd=ba(c.end)||"",s.endsWithParent&&o.terminatorEnd&&(c.terminatorEnd+=(s.end?"|":"")+o.terminatorEnd)),s.illegal&&(c.illegalRe=e(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(u){return dm(u==="self"?s:u)})),s.contains.forEach(function(u){a(u,c)}),s.starts&&a(s.starts,o),c.matcher=r(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Ei(n.classNameAliases||{}),a(n)}function yf(n){return n?n.endsWithParent||yf(n.starts):!1}function dm(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return Ei(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:yf(n)?Ei(n,{starts:n.starts?Ei(n.starts):null}):Object.isFrozen(n)?Ei(n):n}var fm="11.8.0";class hm extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const bo=hf,Ac=Ei,Rc=Symbol("nomatch"),pm=7,Sf=function(n){const e=Object.create(null),t=Object.create(null),i=[];let r=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Tp};function c(C){return o.noHighlightRe.test(C)}function l(C){let N=C.className+" ";N+=C.parentNode?C.parentNode.className:"";const W=o.languageDetectRe.exec(N);if(W){const Y=x(W[1]);return Y||(Tc(a.replace("{}",W[1])),Tc("Falling back to no-highlight mode for this block.",C)),Y?W[1]:"no-highlight"}return N.split(/\s+/).find(Y=>c(Y)||x(Y))}function u(C,N,W){let Y="",U="";typeof N=="object"?(Y=C,W=N.ignoreIllegals,U=N.language):(fr("10.7.0","highlight(lang, code, ...args) has been deprecated."),fr("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),U=C,Y=N),W===void 0&&(W=!0);const K={code:Y,language:U};D("before:highlight",K);const ae=K.result?K.result:f(K.language,K.code,W);return ae.code=K.code,D("after:highlight",ae),ae}function f(C,N,W,Y){const U=Object.create(null);function K(k,X){return k.keywords[X]}function ae(){if(!se.keywords){Je.addText(Fe);return}let k=0;se.keywordPatternRe.lastIndex=0;let X=se.keywordPatternRe.exec(Fe),ne="";for(;X;){ne+=Fe.substring(k,X.index);const te=Se.case_insensitive?X[0].toLowerCase():X[0],V=K(se,te);if(V){const[ve,ye]=V;if(Je.addText(ne),ne="",U[te]=(U[te]||0)+1,U[te]<=pm&&(T+=ye),ve.startsWith("_"))ne+=X[0];else{const Me=Se.classNameAliases[ve]||ve;xe(X[0],Me)}}else ne+=X[0];k=se.keywordPatternRe.lastIndex,X=se.keywordPatternRe.exec(Fe)}ne+=Fe.substring(k),Je.addText(ne)}function ue(){if(Fe==="")return;let k=null;if(typeof se.subLanguage=="string"){if(!e[se.subLanguage]){Je.addText(Fe);return}k=f(se.subLanguage,Fe,!0,lt[se.subLanguage]),lt[se.subLanguage]=k._top}else k=h(Fe,se.subLanguage.length?se.subLanguage:null);se.relevance>0&&(T+=k.relevance),Je.__addSublanguage(k._emitter,k.language)}function le(){se.subLanguage!=null?ue():ae(),Fe=""}function xe(k,X){k!==""&&(Je.startScope(X),Je.addText(k),Je.endScope())}function Ue(k,X){let ne=1;const te=X.length-1;for(;ne<=te;){if(!k._emit[ne]){ne++;continue}const V=Se.classNameAliases[k[ne]]||k[ne],ve=X[ne];V?xe(ve,V):(Fe=ve,ae(),Fe=""),ne++}}function Re(k,X){return k.scope&&typeof k.scope=="string"&&Je.openNode(Se.classNameAliases[k.scope]||k.scope),k.beginScope&&(k.beginScope._wrap?(xe(Fe,Se.classNameAliases[k.beginScope._wrap]||k.beginScope._wrap),Fe=""):k.beginScope._multi&&(Ue(k.beginScope,X),Fe="")),se=Object.create(k,{parent:{value:se}}),se}function rt(k,X,ne){let te=Lp(k.endRe,ne);if(te){if(k["on:end"]){const V=new yc(k);k["on:end"](X,V),V.isMatchIgnored&&(te=!1)}if(te){for(;k.endsParent&&k.parent;)k=k.parent;return k}}if(k.endsWithParent)return rt(k.parent,X,ne)}function kt(k){return se.matcher.regexIndex===0?(Fe+=k[0],1):(ie=!0,0)}function He(k){const X=k[0],ne=k.rule,te=new yc(ne),V=[ne.__beforeBegin,ne["on:begin"]];for(const ve of V)if(ve&&(ve(k,te),te.isMatchIgnored))return kt(X);return ne.skip?Fe+=X:(ne.excludeBegin&&(Fe+=X),le(),!ne.returnBegin&&!ne.excludeBegin&&(Fe=X)),Re(ne,k),ne.returnBegin?0:X.length}function G(k){const X=k[0],ne=N.substring(k.index),te=rt(se,k,ne);if(!te)return Rc;const V=se;se.endScope&&se.endScope._wrap?(le(),xe(X,se.endScope._wrap)):se.endScope&&se.endScope._multi?(le(),Ue(se.endScope,k)):V.skip?Fe+=X:(V.returnEnd||V.excludeEnd||(Fe+=X),le(),V.excludeEnd&&(Fe=X));do se.scope&&Je.closeNode(),!se.skip&&!se.subLanguage&&(T+=se.relevance),se=se.parent;while(se!==te.parent);return te.starts&&Re(te.starts,k),V.returnEnd?0:X.length}function Lt(){const k=[];for(let X=se;X!==Se;X=X.parent)X.scope&&k.unshift(X.scope);k.forEach(X=>Je.openNode(X))}let Ae={};function Oe(k,X){const ne=X&&X[0];if(Fe+=k,ne==null)return le(),0;if(Ae.type==="begin"&&X.type==="end"&&Ae.index===X.index&&ne===""){if(Fe+=N.slice(X.index,X.index+1),!r){const te=new Error(`0 width match regex (${C})`);throw te.languageName=C,te.badRule=Ae.rule,te}return 1}if(Ae=X,X.type==="begin")return He(X);if(X.type==="illegal"&&!W){const te=new Error('Illegal lexeme "'+ne+'" for mode "'+(se.scope||"<unnamed>")+'"');throw te.mode=se,te}else if(X.type==="end"){const te=G(X);if(te!==Rc)return te}if(X.type==="illegal"&&ne==="")return 1;if($>1e5&&$>X.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Fe+=ne,ne.length}const Se=x(C);if(!Se)throw qi(a.replace("{}",C)),new Error('Unknown language: "'+C+'"');const ht=um(Se);let $e="",se=Y||ht;const lt={},Je=new o.__emitter(o);Lt();let Fe="",T=0,b=0,$=0,ie=!1;try{if(Se.__emitTokens)Se.__emitTokens(N,Je);else{for(se.matcher.considerAll();;){$++,ie?ie=!1:se.matcher.considerAll(),se.matcher.lastIndex=b;const k=se.matcher.exec(N);if(!k)break;const X=N.substring(b,k.index),ne=Oe(X,k);b=k.index+ne}Oe(N.substring(b))}return Je.finalize(),$e=Je.toHTML(),{language:C,value:$e,relevance:T,illegal:!1,_emitter:Je,_top:se}}catch(k){if(k.message&&k.message.includes("Illegal"))return{language:C,value:bo(N),illegal:!0,relevance:0,_illegalBy:{message:k.message,index:b,context:N.slice(b-100,b+100),mode:k.mode,resultSoFar:$e},_emitter:Je};if(r)return{language:C,value:bo(N),illegal:!1,relevance:0,errorRaised:k,_emitter:Je,_top:se};throw k}}function d(C){const N={value:bo(C),illegal:!1,relevance:0,_top:s,_emitter:new o.__emitter(o)};return N._emitter.addText(C),N}function h(C,N){N=N||o.languages||Object.keys(e);const W=d(C),Y=N.filter(x).filter(O).map(le=>f(le,C,!1));Y.unshift(W);const U=Y.sort((le,xe)=>{if(le.relevance!==xe.relevance)return xe.relevance-le.relevance;if(le.language&&xe.language){if(x(le.language).supersetOf===xe.language)return 1;if(x(xe.language).supersetOf===le.language)return-1}return 0}),[K,ae]=U,ue=K;return ue.secondBest=ae,ue}function _(C,N,W){const Y=N&&t[N]||W;C.classList.add("hljs"),C.classList.add(`language-${Y}`)}function g(C){let N=null;const W=l(C);if(c(W))return;if(D("before:highlightElement",{el:C,language:W}),C.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),o.throwUnescapedHTML))throw new hm("One of your code blocks includes unescaped HTML.",C.innerHTML);N=C;const Y=N.textContent,U=W?u(Y,{language:W,ignoreIllegals:!0}):h(Y);C.innerHTML=U.value,_(C,W,U.language),C.result={language:U.language,re:U.relevance,relevance:U.relevance},U.secondBest&&(C.secondBest={language:U.secondBest.language,relevance:U.secondBest.relevance}),D("after:highlightElement",{el:C,result:U,text:Y})}function m(C){o=Ac(o,C)}const p=()=>{E(),fr("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function y(){E(),fr("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let v=!1;function E(){if(document.readyState==="loading"){v=!0;return}document.querySelectorAll(o.cssSelector).forEach(g)}function w(){v&&E()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",w,!1);function R(C,N){let W=null;try{W=N(n)}catch(Y){if(qi("Language definition for '{}' could not be registered.".replace("{}",C)),r)qi(Y);else throw Y;W=s}W.name||(W.name=C),e[C]=W,W.rawDefinition=N.bind(null,n),W.aliases&&S(W.aliases,{languageName:C})}function A(C){delete e[C];for(const N of Object.keys(t))t[N]===C&&delete t[N]}function z(){return Object.keys(e)}function x(C){return C=(C||"").toLowerCase(),e[C]||e[t[C]]}function S(C,{languageName:N}){typeof C=="string"&&(C=[C]),C.forEach(W=>{t[W.toLowerCase()]=N})}function O(C){const N=x(C);return N&&!N.disableAutodetect}function ee(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=N=>{C["before:highlightBlock"](Object.assign({block:N.el},N))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=N=>{C["after:highlightBlock"](Object.assign({block:N.el},N))})}function B(C){ee(C),i.push(C)}function I(C){const N=i.indexOf(C);N!==-1&&i.splice(N,1)}function D(C,N){const W=C;i.forEach(function(Y){Y[W]&&Y[W](N)})}function Z(C){return fr("10.7.0","highlightBlock will be removed entirely in v12.0"),fr("10.7.0","Please use highlightElement now."),g(C)}Object.assign(n,{highlight:u,highlightAuto:h,highlightAll:E,highlightElement:g,highlightBlock:Z,configure:m,initHighlighting:p,initHighlightingOnLoad:y,registerLanguage:R,unregisterLanguage:A,listLanguages:z,getLanguage:x,registerAliases:S,autoDetection:O,inherit:Ac,addPlugin:B,removePlugin:I}),n.debugMode=function(){r=!1},n.safeMode=function(){r=!0},n.versionString=fm,n.regex={concat:lr,lookahead:pf,either:jl,optional:Rp,anyNumberOfTimes:Ap};for(const C in qa)typeof qa[C]=="object"&&ff(qa[C]);return Object.assign(n,qa),n},Gr=Sf({});Gr.newInstance=()=>Sf({});var mm=Gr;Gr.HighlightJS=Gr;Gr.default=Gr;const Cc=yp(mm);function _m(n){let e;return{c(){e=Nn(n[2])},l(t){e=Dn(t,n[2])},m(t,i){Le(t,e,i)},p(t,i){i&4&&or(e,t[2])},d(t){t&&fe(e)}}}function gm(n){let e,t;return{c(){e=new dp(!1),t=ct(),this.h()},l(i){e=fp(i,!1),t=ct(),this.h()},h(){e.a=t},m(i,r){e.m(n[1],i,r),Le(i,t,r)},p(i,r){r&2&&e.p(i[1])},d(i){i&&(fe(t),e.d())}}}function vm(n){let e,t;function i(c,l){return c[1]?gm:_m}let r=i(n),a=r(n),s=[{"data-language":n[3]},n[4]],o={};for(let c=0;c<s.length;c+=1)o=Hr(o,s[c]);return{c(){e=nt("pre"),t=nt("code"),a.c(),this.h()},l(c){e=it(c,"PRE",{"data-language":!0});var l=vt(e);t=it(l,"CODE",{});var u=vt(t);a.l(u),u.forEach(fe),l.forEach(fe),this.h()},h(){ni(t,"hljs",!0),bc(e,o),ni(e,"langtag",n[0]),ni(e,"svelte-11sh29b",!0)},m(c,l){Le(c,e,l),At(e,t),a.m(t,null)},p(c,[l]){r===(r=i(c))&&a?a.p(c,l):(a.d(1),a=r(c),a&&(a.c(),a.m(t,null))),bc(e,o=uf(s,[l&8&&{"data-language":c[3]},l&16&&c[4]])),ni(e,"langtag",c[0]),ni(e,"svelte-11sh29b",!0)},i:P,o:P,d(c){c&&fe(e),a.d()}}}function xm(n,e,t){const i=["langtag","highlighted","code","languageName"];let r=Ns(e,i),{langtag:a=!1}=e,{highlighted:s}=e,{code:o}=e,{languageName:c="plaintext"}=e;return n.$$set=l=>{e=Hr(Hr({},e),sf(l)),t(4,r=Ns(e,i)),"langtag"in l&&t(0,a=l.langtag),"highlighted"in l&&t(1,s=l.highlighted),"code"in l&&t(2,o=l.code),"languageName"in l&&t(3,c=l.languageName)},[a,s,o,c,r]}class bm extends Jt{constructor(e){super(),Qt(this,e,xm,vm,$t,{langtag:0,highlighted:1,code:2,languageName:3})}}const Em=bm,ym=n=>({highlighted:n&8}),Lc=n=>({highlighted:n[3]});function Sm(n){let e,t;const i=[n[4],{languageName:n[0].name},{langtag:n[2]},{highlighted:n[3]},{code:n[1]}];let r={};for(let a=0;a<i.length;a+=1)r=Hr(r,i[a]);return e=new Em({props:r}),{c(){Hn(e.$$.fragment)},l(a){Gn(e.$$.fragment,a)},m(a,s){Vn(e,a,s),t=!0},p(a,s){const o=s&31?uf(i,[s&16&&bp(a[4]),s&1&&{languageName:a[0].name},s&4&&{langtag:a[2]},s&8&&{highlighted:a[3]},s&2&&{code:a[1]}]):{};e.$set(o)},i(a){t||(Xe(e.$$.fragment,a),t=!0)},o(a){tt(e.$$.fragment,a),t=!1},d(a){Wn(e,a)}}}function Mm(n){let e;const t=n[6].default,i=hp(t,n,n[5],Lc),r=i||Sm(n);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,s){r&&r.m(a,s),e=!0},p(a,[s]){i?i.p&&(!e||s&40)&&pp(i,t,a,a[5],e?_p(t,a[5],s,ym):mp(a[5]),Lc):r&&r.p&&(!e||s&31)&&r.p(a,e?s:-1)},i(a){e||(Xe(r,a),e=!0)},o(a){tt(r,a),e=!1},d(a){r&&r.d(a)}}}function wm(n,e,t){const i=["language","code","langtag"];let r=Ns(e,i),{$$slots:a={},$$scope:s}=e,{language:o}=e,{code:c}=e,{langtag:l=!1}=e;const u=of();let f="";return gp(()=>{f&&u("highlight",{highlighted:f})}),n.$$set=d=>{e=Hr(Hr({},e),sf(d)),t(4,r=Ns(e,i)),"language"in d&&t(0,o=d.language),"code"in d&&t(1,c=d.code),"langtag"in d&&t(2,l=d.langtag),"$$scope"in d&&t(5,s=d.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&(Cc.registerLanguage(o.name,o.register),t(3,f=Cc.highlight(c,{language:o.name}).value))},[o,c,l,f,r,s,a]}class Tm extends Jt{constructor(e){super(),Qt(this,e,wm,Mm,$t,{language:0,code:1,langtag:2})}}const so=Tm;function Am(n){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const Rm={name:"plaintext",register:Am},Cm=Rm;function Lm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Nm(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Um,then:Im,catch:Dm,value:2,blocks:[,,,]};return Et(t=n[1].text(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,s){n=a,r.ctx=n,s&1&&t!==(t=n[1].text())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function Dm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Im(n){let e,t;return e=new so({props:{language:Cm,code:n[2]}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.code=i[2]),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function Um(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Pm(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function km(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Pm,then:Nm,catch:Lm,value:1,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,[s]){n=a,r.ctx=n,s&1&&t!==(t=n[0].blob())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function Om(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Fm extends Jt{constructor(e){super(),Qt(this,e,Om,km,$t,{entry:0})}}const Bm={namespace:"text",priority:0,isValid:async n=>n.type!=ut.File?!1:(await n.blob()).size==0?!0:!fl.isBinary(await(await n.blob()).slice(0,1024).arrayBuffer()),createViewer:async(n,e)=>{if(n.type==ut.File)new Fm({target:e,props:{entry:n}});else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-text.svg"};function zm(n){return{c:P,l:P,m:P,p:P,d:P}}function Hm(n){let e,t,i;return{c(){e=nt("img"),this.h()},l(r){e=it(r,"IMG",{src:!0,alt:!0}),this.h()},h(){cn(e.src,t=URL.createObjectURL(n[1]))||Ne(e,"src",t),Ne(e,"alt",i=n[0].name)},m(r,a){Le(r,e,a)},p(r,a){a&1&&!cn(e.src,t=URL.createObjectURL(r[1]))&&Ne(e,"src",t),a&1&&i!==(i=r[0].name)&&Ne(e,"alt",i)},d(r){r&&fe(e)}}}function Gm(n){return{c:P,l:P,m:P,p:P,d:P}}function Vm(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:Gm,then:Hm,catch:zm,value:1};return Et(t=n[0].blob(),i),{c(){e=ct(),i.block.c()},l(r){e=ct(),i.block.l(r)},m(r,a){Le(r,e,a),i.block.m(r,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e},p(r,[a]){n=r,i.ctx=n,a&1&&t!==(t=n[0].blob())&&Et(t,i)||Tn(i,n,a)},i:P,o:P,d(r){r&&fe(e),i.block.d(r),i.token=null,i=null}}}function Wm(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}let $m=class extends Jt{constructor(e){super(),Qt(this,e,Wm,Vm,$t,{entry:0})}};const Xm={namespace:"image",priority:1,isValid:async n=>n.type==ut.File&&["png","jpg","jpeg","jfif","tiff","webp","gif","svg","bmp"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==ut.File)new $m({target:e,props:{entry:n}});else throw new Error("Tried to create image viewer with directory.")},getIcon:async n=>n.type==ut.File?URL.createObjectURL(await n.blob()):null};function Zm(n){return{c:P,l:P,m:P,p:P,d:P}}function jm(n){let e,t;return{c(){e=nt("video"),this.h()},l(i){e=it(i,"VIDEO",{src:!0}),vt(e).forEach(fe),this.h()},h(){cn(e.src,t=URL.createObjectURL(n[1]))||Ne(e,"src",t),e.controls=!0},m(i,r){Le(i,e,r)},p(i,r){r&1&&!cn(e.src,t=URL.createObjectURL(i[1]))&&Ne(e,"src",t)},d(i){i&&fe(e)}}}function Ym(n){return{c:P,l:P,m:P,p:P,d:P}}function qm(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:Ym,then:jm,catch:Zm,value:1};return Et(t=n[0].blob(),i),{c(){e=ct(),i.block.c()},l(r){e=ct(),i.block.l(r)},m(r,a){Le(r,e,a),i.block.m(r,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e},p(r,[a]){n=r,i.ctx=n,a&1&&t!==(t=n[0].blob())&&Et(t,i)||Tn(i,n,a)},i:P,o:P,d(r){r&&fe(e),i.block.d(r),i.token=null,i=null}}}function Km(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Jm extends Jt{constructor(e){super(),Qt(this,e,Km,qm,$t,{entry:0})}}const Qm={namespace:"video",priority:1,isValid:async n=>n.type==ut.File&&["mp4","mov","webm"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==ut.File)new Jm({target:e,props:{entry:n}});else throw new Error("Tried to create video viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-play.svg"};function e_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function t_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:r_,then:i_,catch:n_,value:3,blocks:[,,,]};return Et(t=n[2].text(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,s){n=a,r.ctx=n,s&1&&t!==(t=n[2].text())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function n_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function i_(n){let e,t;return e=new so({props:{language:n[1],code:n[3]}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&2&&(a.language=i[1]),r&1&&(a.code=i[3]),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function r_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function a_(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function s_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:a_,then:t_,catch:e_,value:2,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,[s]){n=a,r.ctx=n,s&1&&t!==(t=n[0].blob())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function o_(n,e,t){let{entry:i}=e,{language:r}=e;return n.$$set=a=>{"entry"in a&&t(0,i=a.entry),"language"in a&&t(1,r=a.language)},[i,r]}class l_ extends Jt{constructor(e){super(),Qt(this,e,o_,s_,$t,{entry:0,language:1})}}const Nc="[A-Za-z$_][0-9A-Za-z$_]*",c_=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],u_=["true","false","null","undefined","NaN","Infinity"],Mf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],wf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Tf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],d_=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],f_=[].concat(Tf,Mf,wf);function h_(n){const e=n.regex,t=(N,{after:W})=>{const Y="</"+N[0].slice(1);return N.input.indexOf(Y,W)!==-1},i=Nc,r={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(N,W)=>{const Y=N[0].length+N.index,U=N.input[Y];if(U==="<"||U===","){W.ignoreMatch();return}U===">"&&(t(N,{after:Y})||W.ignoreMatch());let K;const ae=N.input.substring(Y);if(K=ae.match(/^\s*=/)){W.ignoreMatch();return}if((K=ae.match(/^\s+extends\s+/))&&K.index===0){W.ignoreMatch();return}}},o={$pattern:Nc,keyword:c_,literal:u_,built_in:f_,"variable.language":d_},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,{match:/\$\d+/},f];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const E=[].concat(y,d.contains),w=E.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(E)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Mf,...wf]}},x={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(N){return e.concat("(?!",N.join("|"),")")}const B={match:e.concat(/\b/,ee([...Tf,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},I={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),x,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,y,{match:/\$\d+/},f,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:a},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},B,O,A,D,{match:/\$[(.]/}]}}const p_={name:"javascript",register:h_},m_=p_,Is="[A-Za-z$_][0-9A-Za-z$_]*",Af=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Rf=["true","false","null","undefined","NaN","Infinity"],Cf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Lf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Nf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Df=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],If=[].concat(Nf,Cf,Lf);function __(n){const e=n.regex,t=(N,{after:W})=>{const Y="</"+N[0].slice(1);return N.input.indexOf(Y,W)!==-1},i=Is,r={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(N,W)=>{const Y=N[0].length+N.index,U=N.input[Y];if(U==="<"||U===","){W.ignoreMatch();return}U===">"&&(t(N,{after:Y})||W.ignoreMatch());let K;const ae=N.input.substring(Y);if(K=ae.match(/^\s*=/)){W.ignoreMatch();return}if((K=ae.match(/^\s+extends\s+/))&&K.index===0){W.ignoreMatch();return}}},o={$pattern:Is,keyword:Af,literal:Rf,built_in:If,"variable.language":Df},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,{match:/\$\d+/},f];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const E=[].concat(y,d.contains),w=E.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(E)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Cf,...Lf]}},x={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(N){return e.concat("(?!",N.join("|"),")")}const B={match:e.concat(/\b/,ee([...Nf,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},I={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),x,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,h,_,g,m,y,{match:/\$\d+/},f,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:a},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},B,O,A,D,{match:/\$[(.]/}]}}function g_(n){const e=__(n),t=Is,i=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},a={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:i},contains:[e.exports.CLASS_REFERENCE]},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},o=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],c={$pattern:Is,keyword:Af.concat(o),literal:Rf,built_in:If.concat(i),"variable.language":Df},l={className:"meta",begin:"@"+t},u=(d,h,_)=>{const g=d.contains.findIndex(m=>m.label===h);if(g===-1)throw new Error("can not find mode to replace");d.contains.splice(g,1,_)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(l),e.contains=e.contains.concat([l,r,a]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",s);const f=e.contains.find(d=>d.label==="func.def");return f.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}const v_={name:"typescript",register:g_},x_=v_;function b_(n){const e={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],r={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[e,t,n.QUOTE_STRING_MODE,r,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const E_={name:"json",register:b_},y_=E_;function S_(n){const e=n.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},s=n.inherit(a,{begin:/\(/,end:/\)/}),o=n.inherit(n.APOS_STRING_MODE,{className:"string"}),c=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[a,c,o,s,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[a,s,c,o]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const M_={name:"xml",register:S_},Kl=M_;function w_(n){const e=n.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},r={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},a={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},s={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:e.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},f=n.inherit(l,{contains:[]}),d=n.inherit(u,{contains:[]});l.contains.push(d),u.contains.push(f);let h=[t,c];return[l,u,f,d].forEach(m=>{m.contains=m.contains.concat(h)}),h=h.concat(l,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:h},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:h}]}]},t,a,l,u,{className:"quote",begin:"^>\\s+",contains:h,end:"$"},r,i,c,s]}}const T_={name:"markdown",register:w_},Uf=T_;function A_(n){const e=n.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},f={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,c,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,c,u,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,l]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",h=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,_=`\\b|${i.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${_})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`},{begin:`\\b(${d})[jJ](?=${_})`}]},m={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",c,g,f,n.HASH_COMMENT_MODE]}]};return l.contains=[f,g,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[c,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},f,m,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,f]}]}}const R_={name:"python",register:A_},Jl=R_;function C_(n){const e=n.regex,t={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:e.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},a={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,t,r]};r.contains.push(s);const o={className:"",begin:/\\"/},c={className:"string",begin:/'/,end:/'/},l={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,t]},u=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],f=n.SHEBANG({binary:`(${u.join("|")})`,relevance:10}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},h=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],_=["true","false"],g={match:/(\/[a-z._-]+)+/},m=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],p=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],y=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],v=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:h,literal:_,built_in:[...m,...p,"set","shopt",...y,...v]},contains:[f,n.SHEBANG(),d,l,n.HASH_COMMENT_MODE,a,g,s,o,c,t]}}const L_={name:"bash",register:C_},N_=L_;let mn={};mn.js=m_;mn.ts=x_;mn.json=y_;mn.xml=Kl;mn.html=Kl;mn.svelte=Kl;mn.md=Uf;mn.MD=Uf;mn.py=Jl;mn.sh=N_;const D_={namespace:"code",priority:1,isValid:async n=>n.type==ut.File&&mn[n.name.split(".").pop()??""]!=null,createViewer:async(n,e)=>{if(n.type==ut.File){const t=mn[n.name.split(".").pop()??""];if(t==null)throw new Error("Catastrophic error that should never happen, language does not exist but validation passed?");new l_({target:e,props:{entry:n,language:t}})}else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-code.svg"};var Us;(n=>{function e(r){const a=new Image;return a.src=URL.createObjectURL(new Blob([r])),new Promise((s,o)=>{function c(){a.removeEventListener("load",c),a.removeEventListener("error",l),s(a)}function l(u){o(u.message),a.removeEventListener("load",c),a.removeEventListener("error",l)}a.addEventListener("load",c),a.addEventListener("error",l)})}n.imgBuffer2img=e;async function t(r){const a=await e(r),s=document.createElement("canvas");s.width=a.width,s.height=a.height;const o=s.getContext("2d");if(o==null)throw new Error("2d canvas context not supported on browser or machine.");return o.drawImage(a,0,0),o.getImageData(0,0,a.width,a.height)}n.imgBuffer2imgData=t;function i(r){const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const s=a.getContext("2d");if(s==null)throw new Error("2d canvas context not supported on browser or machine.");return s.putImageData(r,0,0),a.toDataURL("image/webp",1)}n.imgData2url=i})(Us||(Us={}));var Dc;(n=>{function e(t){return t!=null}n.isNotNull=e})(Dc||(Dc={}));class I_ extends jt{constructor(t){super();me(this,"blob");me(this,"blobPointer",0);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer<this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}async load(t,i=this.blobPointer){this.loadData(await this.blob.slice(i,i+t).arrayBuffer()),this.blobPointer=i+t}}class U_ extends I_{async readDOSHeader(){return await this.load(64),this.assertMagic(23117,"Uint16"),{bytesOnLastPageOfFile:this.readNumber("Uint16"),pagesInFile:this.readNumber("Uint16"),relocations:this.readNumber("Uint16"),sizeOfHeaderParagraphs:this.readNumber("Uint16"),minExtraParagraphsNeeded:this.readNumber("Uint16"),maxExtraParagraphsNeeded:this.readNumber("Uint16"),initialRelSSValue:this.readNumber("Uint16"),initialSPValue:this.readNumber("Uint16"),checksum:this.readNumber("Uint16"),initialIPValue:this.readNumber("Uint16"),initialRelCSValue:this.readNumber("Uint16"),fileAddressOfRelocationTable:this.readNumber("Uint16"),overlayNumber:this.readNumber("Uint16"),reserved1:this.readBuffer(8),OEMIdentifier:this.readNumber("Uint16"),OEMInformation:this.readNumber("Uint16"),reserved2:this.readBuffer(20),fileAddressOfNewExeHeader:this.readNumber("Uint32")}}async readFileHeader(){return await this.load(24),this.assertMagic(17744,"Uint32"),{machine:this.readNumber("Uint16"),sectionsCount:this.readNumber("Uint16"),timeDateStamp:this.readNumber("Uint32"),ptrToSymbolTable:this.readNumber("Uint32"),numSymbols:this.readNumber("Uint32"),sizeOfOptionalHeader:this.readNumber("Uint16"),characteristics:this.readNumber("Uint16")}}readOffsetSize(){return{offset:this.readNumber("Uint32"),size:this.readNumber("Uint32")}}readNT32Header(){return{type:"NT32",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),baseOfData:this.readNumber("Uint32"),imageBase:this.readNumber("Uint32"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readNumber("Uint32"),sizeOfStackCommit:this.readNumber("Uint32"),sizeOfHeapReserve:this.readNumber("Uint32"),sizeOfHeapCommit:this.readNumber("Uint32"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readNT64Header(){return{type:"NT64",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),imageBase:this.readBigNumber("BigUint64"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readBigNumber("BigUint64"),sizeOfStackCommit:this.readBigNumber("BigUint64"),sizeOfHeapReserve:this.readBigNumber("BigUint64"),sizeOfHeapCommit:this.readBigNumber("BigUint64"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readOptionalHeader(){switch(this.readNumber("Uint16")){case 267:return this.readNT32Header();case 523:return this.readNT64Header();default:throw new Error("Unknown optional header type.")}}readSectionHeaders(e){return this.readArray(()=>({name:this.readString(8),physicalAddressOrVirtualSize:this.readNumber("Uint32"),virtualAddress:this.readNumber("Uint32"),sizeOfRawData:this.readNumber("Uint32"),pointerToRawData:this.readNumber("Uint32"),pointerToRelocations:this.readNumber("Uint32"),pointerToLinenumbers:this.readNumber("Uint32"),numberOfRelocations:this.readNumber("Uint16"),numberOfLinenumbers:this.readNumber("Uint16"),characteristics:this.readNumber("Uint32")}),e)}readResources(e=this.pointer,t){t!==void 0&&(this.pointer=e+t);const i=this.readNumber("Uint32"),r=this.readNumber("Uint32"),a=this.readNumber("Uint16"),s=this.readNumber("Uint16"),o=this.readNumber("Uint16"),c=this.readNumber("Uint16"),l=this.readArray(()=>({type:this.readNumber("Uint32"),offset:this.readNumber("Uint32")}),o+c).map(u=>{let f=u.type;const d=!!(f&2147483648);f&=2147483647;let h=u.offset;const _=!!(h&2147483648);return h&=2147483647,_?{isStr:d,type:f,isDir:!0,dir:this.readResources(e,h)}:{isStr:d,type:f,isDir:!1,offset:h}});return{characteristics:i,timeDateStamp:r,majorVersion:a,minorVersion:s,numberOfNamedEntries:o,numberOfIdEntries:c,entries:l}}}var Ps;(n=>{async function e(r){const a=await r.readDOSHeader();r.blobPointer=a.fileAddressOfNewExeHeader;const s=await r.readFileHeader();await r.load(s.sizeOfOptionalHeader);const o=r.readOptionalHeader();await r.load(o.sizeOfHeaders);const c=r.readSectionHeaders(s.sectionsCount);return[a,s,o,c]}n.getHeaders=e;function t(r,a,s=0){for(const o of r)if(o.name==a||o.name.replaceAll("\0","")==a){if(s<=0)return o;s--}return null}n.getSectionHeader=t;class i{constructor(a){me(this,"sections");this.sections=a}toVirtual(a){for(const s of this.sections)if(a>=s.pointerToRawData&&a<s.pointerToRawData+s.sizeOfRawData)return a-s.pointerToRawData+s.virtualAddress;return-1}toRaw(a){for(const s of this.sections)if(a>=s.virtualAddress&&a<s.virtualAddress+s.physicalAddressOrVirtualSize)return a-s.virtualAddress+s.pointerToRawData;return-1}}n.VirtualMemeorySpace=i})(Ps||(Ps={}));async function P_(n){const e=new jt(n);if(e.magic([137,80,78,71,13,10,26,10]))return URL.createObjectURL(new Blob([e.buffer]));{e.pointer=0;const t=e.readNumber("Uint32"),i=new DataView(new ArrayBuffer(e.length+14));i.setUint8(0,66),i.setUint8(1,77),i.setUint32(2,i.byteLength,!0),i.setUint32(10,14+t,!0),new Uint8Array(i.buffer).set(new Uint8Array(e.buffer),14);const r=await Us.imgBuffer2imgData(i.buffer),a=new ImageData(r.width,r.height>>1);return a.data.set(r.data.slice(r.width*(r.height>>1)*4)),Us.imgData2url(a)}}async function k_(n){const e=new U_(n),[t,i,r,a]=await Ps.getHeaders(e),s=new Ps.VirtualMemeorySpace(a);if(r.resourceDirectory.offset==0||r.resourceDirectory.size==0)return;await e.load(r.resourceDirectory.size,s.toRaw(r.resourceDirectory.offset));const o=e.readResources();function c(g){if(!g||!g.isDir)throw new Error("readOffsetSize entry is not dir.");const m=g.dir.entries[0];if(!m||m.isDir)throw new Error("readOffsetSize data entry is invalid.");return e.pointer=m.offset,{id:g.type,offset:e.readNumber("Uint32"),size:e.readNumber("Uint32"),codePage:e.readNumber("Uint32"),reserved:e.readNumber("Uint32")}}const l=o.entries.find(g=>g.type==3);if(!l||!l.isDir)return;const u=l.dir.entries.map(c),f=o.entries.find(g=>g.type==14);if(!f||!f.isDir)return;const h=(await Promise.all(f.dir.entries.map(c).map(async g=>{await e.load(g.size,s.toRaw(g.offset));const m=e.readBuffer(2),p=e.readNumber("Uint16"),y=e.readNumber("Uint16");function v(w){return w==0?255:w}let E=[];for(let w=0;w<y;w++)E.push({width:v(e.readNumber("Uint8")),height:v(e.readNumber("Uint8")),colorCount:e.readNumber("Uint8"),reserved:e.readBuffer(1),planes:e.readNumber("Uint16"),bitCount:e.readNumber("Uint16"),bytesInRes:e.readNumber("Uint32"),id:e.readNumber("Uint16")});return{reserved:m,type:p,count:y,entries:E}})))[0].entries.reduce((g,m)=>g===void 0||m.width>g.width&&m.height>g.height?m:g),_=u.find(g=>g.id==h.id);if(!_)throw new Error("Catastrophic error, Icon ID was not found.");return await e.load(_.size,s.toRaw(_.offset)),await P_(e.readBuffer(e.dataLeft))}const O_={namespace:"executable",priority:1,isValid:async n=>n.type==ut.File&&n.name.endsWith(".exe"),getIcon:async n=>{if(n.type==ut.File){const e=await k_(await n.blob());return e||"/asset-viewer/bootstrap-icons/filetype-exe.svg"}return null}};/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const F_=4,Ic=0,Uc=1,B_=2;function Qr(n){let e=n.length;for(;--e>=0;)n[e]=0}const z_=0,Pf=1,H_=2,G_=3,V_=258,Ql=29,ka=256,ya=ka+1+Ql,Or=30,ec=19,kf=2*ya+1,Zi=15,Eo=16,W_=7,tc=256,Of=16,Ff=17,Bf=18,hl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Ts=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),$_=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),zf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),X_=512,ei=new Array((ya+2)*2);Qr(ei);const pa=new Array(Or*2);Qr(pa);const Sa=new Array(X_);Qr(Sa);const Ma=new Array(V_-G_+1);Qr(Ma);const nc=new Array(Ql);Qr(nc);const ks=new Array(Or);Qr(ks);function yo(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Hf,Gf,Vf;function So(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Wf=n=>n<256?Sa[n]:Sa[256+(n>>>7)],wa=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},Yt=(n,e,t)=>{n.bi_valid>Eo-t?(n.bi_buf|=e<<n.bi_valid&65535,wa(n,n.bi_buf),n.bi_buf=e>>Eo-n.bi_valid,n.bi_valid+=t-Eo):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Ln=(n,e,t)=>{Yt(n,t[e*2],t[e*2+1])},$f=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},Z_=n=>{n.bi_valid===16?(wa(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},j_=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,a=e.stat_desc.has_stree,s=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,f,d,h,_,g=0;for(d=0;d<=Zi;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<kf;l++)u=n.heap[l],d=t[t[u*2+1]*2+1]+1,d>c&&(d=c,g++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,h=0,u>=o&&(h=s[u-o]),_=t[u*2],n.opt_len+=_*(d+h),a&&(n.static_len+=_*(r[u*2+1]+h)));if(g!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,g-=2}while(g>0);for(d=c;d!==0;d--)for(u=n.bl_count[d];u!==0;)f=n.heap[--l],!(f>i)&&(t[f*2+1]!==d&&(n.opt_len+=(d-t[f*2+1])*t[f*2],t[f*2+1]=d),u--)}},Xf=(n,e,t)=>{const i=new Array(Zi+1);let r=0,a,s;for(a=1;a<=Zi;a++)r=r+t[a-1]<<1,i[a]=r;for(s=0;s<=e;s++){let o=n[s*2+1];o!==0&&(n[s*2]=$f(i[o]++,o))}},Y_=()=>{let n,e,t,i,r;const a=new Array(Zi+1);for(t=0,i=0;i<Ql-1;i++)for(nc[i]=t,n=0;n<1<<hl[i];n++)Ma[t++]=i;for(Ma[t-1]=i,r=0,i=0;i<16;i++)for(ks[i]=r,n=0;n<1<<Ts[i];n++)Sa[r++]=i;for(r>>=7;i<Or;i++)for(ks[i]=r<<7,n=0;n<1<<Ts[i]-7;n++)Sa[256+r++]=i;for(e=0;e<=Zi;e++)a[e]=0;for(n=0;n<=143;)ei[n*2+1]=8,n++,a[8]++;for(;n<=255;)ei[n*2+1]=9,n++,a[9]++;for(;n<=279;)ei[n*2+1]=7,n++,a[7]++;for(;n<=287;)ei[n*2+1]=8,n++,a[8]++;for(Xf(ei,ya+1,a),n=0;n<Or;n++)pa[n*2+1]=5,pa[n*2]=$f(n,5);Hf=new yo(ei,hl,ka+1,ya,Zi),Gf=new yo(pa,Ts,0,Or,Zi),Vf=new yo(new Array(0),$_,0,ec,W_)},Zf=n=>{let e;for(e=0;e<ya;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Or;e++)n.dyn_dtree[e*2]=0;for(e=0;e<ec;e++)n.bl_tree[e*2]=0;n.dyn_ltree[tc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},jf=n=>{n.bi_valid>8?wa(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Pc=(n,e,t,i)=>{const r=e*2,a=t*2;return n[r]<n[a]||n[r]===n[a]&&i[e]<=i[t]},Mo=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Pc(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Pc(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},kc=(n,e,t)=>{let i,r,a=0,s,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+a++]&255,i+=(n.pending_buf[n.sym_buf+a++]&255)<<8,r=n.pending_buf[n.sym_buf+a++],i===0?Ln(n,r,e):(s=Ma[r],Ln(n,s+ka+1,e),o=hl[s],o!==0&&(r-=nc[s],Yt(n,r,o)),i--,s=Wf(i),Ln(n,s,t),o=Ts[s],o!==0&&(i-=ks[s],Yt(n,i,o)));while(a<n.sym_next);Ln(n,tc,e)},pl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,a=e.stat_desc.elems;let s,o,c=-1,l;for(n.heap_len=0,n.heap_max=kf,s=0;s<a;s++)t[s*2]!==0?(n.heap[++n.heap_len]=c=s,n.depth[s]=0):t[s*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,s=n.heap_len>>1;s>=1;s--)Mo(n,t,s);l=a;do s=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Mo(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=s,n.heap[--n.heap_max]=o,t[l*2]=t[s*2]+t[o*2],n.depth[l]=(n.depth[s]>=n.depth[o]?n.depth[s]:n.depth[o])+1,t[s*2+1]=t[o*2+1]=l,n.heap[1]=l++,Mo(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],j_(n,e),Xf(t,c,n.bl_count)},Oc=(n,e,t)=>{let i,r=-1,a,s=e[0*2+1],o=0,c=7,l=4;for(s===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)a=s,s=e[(i+1)*2+1],!(++o<c&&a===s)&&(o<l?n.bl_tree[a*2]+=o:a!==0?(a!==r&&n.bl_tree[a*2]++,n.bl_tree[Of*2]++):o<=10?n.bl_tree[Ff*2]++:n.bl_tree[Bf*2]++,o=0,r=a,s===0?(c=138,l=3):a===s?(c=6,l=3):(c=7,l=4))},Fc=(n,e,t)=>{let i,r=-1,a,s=e[0*2+1],o=0,c=7,l=4;for(s===0&&(c=138,l=3),i=0;i<=t;i++)if(a=s,s=e[(i+1)*2+1],!(++o<c&&a===s)){if(o<l)do Ln(n,a,n.bl_tree);while(--o!==0);else a!==0?(a!==r&&(Ln(n,a,n.bl_tree),o--),Ln(n,Of,n.bl_tree),Yt(n,o-3,2)):o<=10?(Ln(n,Ff,n.bl_tree),Yt(n,o-3,3)):(Ln(n,Bf,n.bl_tree),Yt(n,o-11,7));o=0,r=a,s===0?(c=138,l=3):a===s?(c=6,l=3):(c=7,l=4)}},q_=n=>{let e;for(Oc(n,n.dyn_ltree,n.l_desc.max_code),Oc(n,n.dyn_dtree,n.d_desc.max_code),pl(n,n.bl_desc),e=ec-1;e>=3&&n.bl_tree[zf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},K_=(n,e,t,i)=>{let r;for(Yt(n,e-257,5),Yt(n,t-1,5),Yt(n,i-4,4),r=0;r<i;r++)Yt(n,n.bl_tree[zf[r]*2+1],3);Fc(n,n.dyn_ltree,e-1),Fc(n,n.dyn_dtree,t-1)},J_=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Ic;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Uc;for(t=32;t<ka;t++)if(n.dyn_ltree[t*2]!==0)return Uc;return Ic};let Bc=!1;const Q_=n=>{Bc||(Y_(),Bc=!0),n.l_desc=new So(n.dyn_ltree,Hf),n.d_desc=new So(n.dyn_dtree,Gf),n.bl_desc=new So(n.bl_tree,Vf),n.bi_buf=0,n.bi_valid=0,Zf(n)},Yf=(n,e,t,i)=>{Yt(n,(z_<<1)+(i?1:0),3),jf(n),wa(n,t),wa(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},eg=n=>{Yt(n,Pf<<1,3),Ln(n,tc,ei),Z_(n)},tg=(n,e,t,i)=>{let r,a,s=0;n.level>0?(n.strm.data_type===B_&&(n.strm.data_type=J_(n)),pl(n,n.l_desc),pl(n,n.d_desc),s=q_(n),r=n.opt_len+3+7>>>3,a=n.static_len+3+7>>>3,a<=r&&(r=a)):r=a=t+5,t+4<=r&&e!==-1?Yf(n,e,t,i):n.strategy===F_||a===r?(Yt(n,(Pf<<1)+(i?1:0),3),kc(n,ei,pa)):(Yt(n,(H_<<1)+(i?1:0),3),K_(n,n.l_desc.max_code+1,n.d_desc.max_code+1,s+1),kc(n,n.dyn_ltree,n.dyn_dtree)),Zf(n),i&&jf(n)},ng=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Ma[t]+ka+1)*2]++,n.dyn_dtree[Wf(e)*2]++),n.sym_next===n.sym_end);var ig=Q_,rg=Yf,ag=tg,sg=ng,og=eg,lg={_tr_init:ig,_tr_stored_block:rg,_tr_flush_block:ag,_tr_tally:sg,_tr_align:og};const cg=(n,e,t,i)=>{let r=n&65535|0,a=n>>>16&65535|0,s=0;for(;t!==0;){s=t>2e3?2e3:t,t-=s;do r=r+e[i++]|0,a=a+r|0;while(--s);r%=65521,a%=65521}return r|a<<16|0};var Ta=cg;const ug=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},dg=new Uint32Array(ug()),fg=(n,e,t,i)=>{const r=dg,a=i+t;n^=-1;for(let s=i;s<a;s++)n=n>>>8^r[(n^e[s])&255];return n^-1};var Dt=fg,tr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},cr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:hg,_tr_stored_block:ml,_tr_flush_block:pg,_tr_tally:wi,_tr_align:mg}=lg,{Z_NO_FLUSH:Ti,Z_PARTIAL_FLUSH:_g,Z_FULL_FLUSH:gg,Z_FINISH:pn,Z_BLOCK:zc,Z_OK:It,Z_STREAM_END:Hc,Z_STREAM_ERROR:In,Z_DATA_ERROR:vg,Z_BUF_ERROR:wo,Z_DEFAULT_COMPRESSION:xg,Z_FILTERED:bg,Z_HUFFMAN_ONLY:Ka,Z_RLE:Eg,Z_FIXED:yg,Z_DEFAULT_STRATEGY:Sg,Z_UNKNOWN:Mg,Z_DEFLATED:oo}=cr,wg=9,Tg=15,Ag=8,Rg=29,Cg=256,_l=Cg+1+Rg,Lg=30,Ng=19,Dg=2*_l+1,Ig=15,et=3,yi=258,Un=yi+et+1,Ug=32,Vr=42,ic=57,gl=69,vl=73,xl=91,bl=103,ji=113,ua=666,Vt=1,ea=2,nr=3,ta=4,Pg=3,Yi=(n,e)=>(n.msg=tr[e],e),Gc=n=>n*2-(n>4?9:0),bi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},kg=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let Og=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Ai=Og;const an=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},sn=(n,e)=>{pg(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,an(n.strm)},st=(n,e)=>{n.pending_buf[n.pending++]=e},ra=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},El=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ta(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Dt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},qf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,a,s=n.prev_length,o=n.nice_match;const c=n.strstart>n.w_size-Un?n.strstart-(n.w_size-Un):0,l=n.window,u=n.w_mask,f=n.prev,d=n.strstart+yi;let h=l[i+s-1],_=l[i+s];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(l[r+s]!==_||l[r+s-1]!==h||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<d);if(a=yi-(d-i),i=d-yi,a>s){if(n.match_start=e,s=a,a>=o)break;h=l[i+s-1],_=l[i+s]}}while((e=f[e&u])>c&&--t!==0);return s<=n.lookahead?s:n.lookahead},Wr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Un)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),kg(n),i+=e),n.strm.avail_in===0)break;if(t=El(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=et)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Ai(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Ai(n,n.ins_h,n.window[r+et-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<et)););}while(n.lookahead<Un&&n.strm.avail_in!==0)},Kf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,a,s=0,o=n.strm.avail_in;do{if(i=65535,a=n.bi_valid+42>>3,n.strm.avail_out<a||(a=n.strm.avail_out-a,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>a&&(i=a),i<t&&(i===0&&e!==pn||e===Ti||i!==r+n.strm.avail_in)))break;s=e===pn&&i===r+n.strm.avail_in?1:0,ml(n,0,0,s),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,an(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(El(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(s===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),s?ta:e!==Ti&&e!==pn&&n.strm.avail_in===0&&n.strstart===n.block_start?ea:(a=n.window_size-n.strstart,n.strm.avail_in>a&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,a+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),a>n.strm.avail_in&&(a=n.strm.avail_in),a&&(El(n.strm,n.window,n.strstart,a),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.high_water<n.strstart&&(n.high_water=n.strstart),a=n.bi_valid+42>>3,a=n.pending_buf_size-a>65535?65535:n.pending_buf_size-a,t=a>n.w_size?n.w_size:a,r=n.strstart-n.block_start,(r>=t||(r||e===pn)&&e!==Ti&&n.strm.avail_in===0&&r<=a)&&(i=r>a?a:r,s=e===pn&&n.strm.avail_in===0&&i===r?1:0,ml(n,n.block_start,i,s),n.block_start+=i,an(n.strm)),s?nr:Vt)},To=(n,e)=>{let t,i;for(;;){if(n.lookahead<Un){if(Wr(n),n.lookahead<Un&&e===Ti)return Vt;if(n.lookahead===0)break}if(t=0,n.lookahead>=et&&(n.ins_h=Ai(n,n.ins_h,n.window[n.strstart+et-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Un&&(n.match_length=qf(n,t)),n.match_length>=et)if(i=wi(n,n.strstart-n.match_start,n.match_length-et),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=et){n.match_length--;do n.strstart++,n.ins_h=Ai(n,n.ins_h,n.window[n.strstart+et-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Ai(n,n.ins_h,n.window[n.strstart+1]);else i=wi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(sn(n,!1),n.strm.avail_out===0))return Vt}return n.insert=n.strstart<et-1?n.strstart:et-1,e===pn?(sn(n,!0),n.strm.avail_out===0?nr:ta):n.sym_next&&(sn(n,!1),n.strm.avail_out===0)?Vt:ea},hr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Un){if(Wr(n),n.lookahead<Un&&e===Ti)return Vt;if(n.lookahead===0)break}if(t=0,n.lookahead>=et&&(n.ins_h=Ai(n,n.ins_h,n.window[n.strstart+et-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=et-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Un&&(n.match_length=qf(n,t),n.match_length<=5&&(n.strategy===bg||n.match_length===et&&n.strstart-n.match_start>4096)&&(n.match_length=et-1)),n.prev_length>=et&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-et,i=wi(n,n.strstart-1-n.prev_match,n.prev_length-et),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Ai(n,n.ins_h,n.window[n.strstart+et-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=et-1,n.strstart++,i&&(sn(n,!1),n.strm.avail_out===0))return Vt}else if(n.match_available){if(i=wi(n,0,n.window[n.strstart-1]),i&&sn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Vt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=wi(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<et-1?n.strstart:et-1,e===pn?(sn(n,!0),n.strm.avail_out===0?nr:ta):n.sym_next&&(sn(n,!1),n.strm.avail_out===0)?Vt:ea},Fg=(n,e)=>{let t,i,r,a;const s=n.window;for(;;){if(n.lookahead<=yi){if(Wr(n),n.lookahead<=yi&&e===Ti)return Vt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=et&&n.strstart>0&&(r=n.strstart-1,i=s[r],i===s[++r]&&i===s[++r]&&i===s[++r])){a=n.strstart+yi;do;while(i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&r<a);n.match_length=yi-(a-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=et?(t=wi(n,1,n.match_length-et),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=wi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(sn(n,!1),n.strm.avail_out===0))return Vt}return n.insert=0,e===pn?(sn(n,!0),n.strm.avail_out===0?nr:ta):n.sym_next&&(sn(n,!1),n.strm.avail_out===0)?Vt:ea},Bg=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Wr(n),n.lookahead===0)){if(e===Ti)return Vt;break}if(n.match_length=0,t=wi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(sn(n,!1),n.strm.avail_out===0))return Vt}return n.insert=0,e===pn?(sn(n,!0),n.strm.avail_out===0?nr:ta):n.sym_next&&(sn(n,!1),n.strm.avail_out===0)?Vt:ea};function Rn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const da=[new Rn(0,0,0,0,Kf),new Rn(4,4,8,4,To),new Rn(4,5,16,8,To),new Rn(4,6,32,32,To),new Rn(4,4,16,16,hr),new Rn(8,16,32,32,hr),new Rn(8,16,128,128,hr),new Rn(8,32,128,256,hr),new Rn(32,128,258,1024,hr),new Rn(32,258,258,4096,hr)],zg=n=>{n.window_size=2*n.w_size,bi(n.head),n.max_lazy_match=da[n.level].max_lazy,n.good_match=da[n.level].good_length,n.nice_match=da[n.level].nice_length,n.max_chain_length=da[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=et-1,n.match_available=0,n.ins_h=0};function Hg(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=oo,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(Dg*2),this.dyn_dtree=new Uint16Array((2*Lg+1)*2),this.bl_tree=new Uint16Array((2*Ng+1)*2),bi(this.dyn_ltree),bi(this.dyn_dtree),bi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Ig+1),this.heap=new Uint16Array(2*_l+1),bi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*_l+1),bi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Oa=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Vr&&e.status!==ic&&e.status!==gl&&e.status!==vl&&e.status!==xl&&e.status!==bl&&e.status!==ji&&e.status!==ua?1:0},Jf=n=>{if(Oa(n))return Yi(n,In);n.total_in=n.total_out=0,n.data_type=Mg;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?ic:e.wrap?Vr:ji,n.adler=e.wrap===2?0:1,e.last_flush=-2,hg(e),It},Qf=n=>{const e=Jf(n);return e===It&&zg(n.state),e},Gg=(n,e)=>Oa(n)||n.state.wrap!==2?In:(n.state.gzhead=e,It),eh=(n,e,t,i,r,a)=>{if(!n)return In;let s=1;if(e===xg&&(e=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),r<1||r>wg||t!==oo||i<8||i>15||e<0||e>9||a<0||a>yg||i===8&&s!==1)return Yi(n,In);i===8&&(i=9);const o=new Hg;return n.state=o,o.strm=n,o.status=Vr,o.wrap=s,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+et-1)/et),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=a,o.method=t,Qf(n)},Vg=(n,e)=>eh(n,e,oo,Tg,Ag,Sg),Wg=(n,e)=>{if(Oa(n)||e>zc||e<0)return n?Yi(n,In):In;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===ua&&e!==pn)return Yi(n,n.avail_out===0?wo:In);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(an(n),n.avail_out===0)return t.last_flush=-1,It}else if(n.avail_in===0&&Gc(e)<=Gc(i)&&e!==pn)return Yi(n,wo);if(t.status===ua&&n.avail_in!==0)return Yi(n,wo);if(t.status===Vr&&t.wrap===0&&(t.status=ji),t.status===Vr){let r=oo+(t.w_bits-8<<4)<<8,a=-1;if(t.strategy>=Ka||t.level<2?a=0:t.level<6?a=1:t.level===6?a=2:a=3,r|=a<<6,t.strstart!==0&&(r|=Ug),r+=31-r%31,ra(t,r),t.strstart!==0&&(ra(t,n.adler>>>16),ra(t,n.adler&65535)),n.adler=1,t.status=ji,an(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===ic){if(n.adler=0,st(t,31),st(t,139),st(t,8),t.gzhead)st(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),st(t,t.gzhead.time&255),st(t,t.gzhead.time>>8&255),st(t,t.gzhead.time>>16&255),st(t,t.gzhead.time>>24&255),st(t,t.level===9?2:t.strategy>=Ka||t.level<2?4:0),st(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(st(t,t.gzhead.extra.length&255),st(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Dt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=gl;else if(st(t,0),st(t,0),st(t,0),st(t,0),st(t,0),st(t,t.level===9?2:t.strategy>=Ka||t.level<2?4:0),st(t,Pg),t.status=ji,an(n),t.pending!==0)return t.last_flush=-1,It}if(t.status===gl){if(t.gzhead.extra){let r=t.pending,a=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+a>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,an(n),t.pending!==0)return t.last_flush=-1,It;r=0,a-=o}let s=new Uint8Array(t.gzhead.extra);t.pending_buf.set(s.subarray(t.gzindex,t.gzindex+a),t.pending),t.pending+=a,t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=vl}if(t.status===vl){if(t.gzhead.name){let r=t.pending,a;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),an(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.name.length?a=t.gzhead.name.charCodeAt(t.gzindex++)&255:a=0,st(t,a)}while(a!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=xl}if(t.status===xl){if(t.gzhead.comment){let r=t.pending,a;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r)),an(n),t.pending!==0)return t.last_flush=-1,It;r=0}t.gzindex<t.gzhead.comment.length?a=t.gzhead.comment.charCodeAt(t.gzindex++)&255:a=0,st(t,a)}while(a!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Dt(n.adler,t.pending_buf,t.pending-r,r))}t.status=bl}if(t.status===bl){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(an(n),t.pending!==0))return t.last_flush=-1,It;st(t,n.adler&255),st(t,n.adler>>8&255),n.adler=0}if(t.status=ji,an(n),t.pending!==0)return t.last_flush=-1,It}if(n.avail_in!==0||t.lookahead!==0||e!==Ti&&t.status!==ua){let r=t.level===0?Kf(t,e):t.strategy===Ka?Bg(t,e):t.strategy===Eg?Fg(t,e):da[t.level].func(t,e);if((r===nr||r===ta)&&(t.status=ua),r===Vt||r===nr)return n.avail_out===0&&(t.last_flush=-1),It;if(r===ea&&(e===_g?mg(t):e!==zc&&(ml(t,0,0,!1),e===gg&&(bi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),an(n),n.avail_out===0))return t.last_flush=-1,It}return e!==pn?It:t.wrap<=0?Hc:(t.wrap===2?(st(t,n.adler&255),st(t,n.adler>>8&255),st(t,n.adler>>16&255),st(t,n.adler>>24&255),st(t,n.total_in&255),st(t,n.total_in>>8&255),st(t,n.total_in>>16&255),st(t,n.total_in>>24&255)):(ra(t,n.adler>>>16),ra(t,n.adler&65535)),an(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?It:Hc)},$g=n=>{if(Oa(n))return In;const e=n.state.status;return n.state=null,e===ji?Yi(n,vg):It},Xg=(n,e)=>{let t=e.length;if(Oa(n))return In;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Vr||i.lookahead)return In;if(r===1&&(n.adler=Ta(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(bi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const a=n.avail_in,s=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Wr(i);i.lookahead>=et;){let c=i.strstart,l=i.lookahead-(et-1);do i.ins_h=Ai(i,i.ins_h,i.window[c+et-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=et-1,Wr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=et-1,i.match_available=0,n.next_in=s,n.input=o,n.avail_in=a,i.wrap=r,It};var Zg=Vg,jg=eh,Yg=Qf,qg=Jf,Kg=Gg,Jg=Wg,Qg=$g,ev=Xg,tv="pako deflate (from Nodeca project)",ma={deflateInit:Zg,deflateInit2:jg,deflateReset:Yg,deflateResetKeep:qg,deflateSetHeader:Kg,deflate:Jg,deflateEnd:Qg,deflateSetDictionary:ev,deflateInfo:tv};const nv=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var iv=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)nv(t,i)&&(n[i]=t[i])}}return n},rv=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,a=n.length;i<a;i++){let s=n[i];t.set(s,r),r+=s.length}return t},lo={assign:iv,flattenChunks:rv};let th=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{th=!1}const Aa=new Uint8Array(256);for(let n=0;n<256;n++)Aa[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Aa[254]=Aa[254]=1;var av=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,a,s=n.length,o=0;for(r=0;r<s;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<s&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),a=0,r=0;a<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<s&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[a++]=t:t<2048?(e[a++]=192|t>>>6,e[a++]=128|t&63):t<65536?(e[a++]=224|t>>>12,e[a++]=128|t>>>6&63,e[a++]=128|t&63):(e[a++]=240|t>>>18,e[a++]=128|t>>>12&63,e[a++]=128|t>>>6&63,e[a++]=128|t&63);return e};const sv=(n,e)=>{if(e<65534&&n.subarray&&th)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var ov=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const a=new Array(t*2);for(r=0,i=0;i<t;){let s=n[i++];if(s<128){a[r++]=s;continue}let o=Aa[s];if(o>4){a[r++]=65533,i+=o-1;continue}for(s&=o===2?31:o===3?15:7;o>1&&i<t;)s=s<<6|n[i++]&63,o--;if(o>1){a[r++]=65533;continue}s<65536?a[r++]=s:(s-=65536,a[r++]=55296|s>>10&1023,a[r++]=56320|s&1023)}return sv(a,r)},lv=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Aa[n[t]]>e?t:e},Ra={string2buf:av,buf2string:ov,utf8border:lv};function cv(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var nh=cv;const ih=Object.prototype.toString,{Z_NO_FLUSH:uv,Z_SYNC_FLUSH:dv,Z_FULL_FLUSH:fv,Z_FINISH:hv,Z_OK:Os,Z_STREAM_END:pv,Z_DEFAULT_COMPRESSION:mv,Z_DEFAULT_STRATEGY:_v,Z_DEFLATED:gv}=cr;function Fa(n){this.options=lo.assign({level:mv,method:gv,chunkSize:16384,windowBits:15,memLevel:8,strategy:_v},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new nh,this.strm.avail_out=0;let t=ma.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Os)throw new Error(tr[t]);if(e.header&&ma.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Ra.string2buf(e.dictionary):ih.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=ma.deflateSetDictionary(this.strm,i),t!==Os)throw new Error(tr[t]);this._dict_set=!0}}Fa.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,a;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?hv:uv,typeof n=="string"?t.input=Ra.string2buf(n):ih.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(a===dv||a===fv)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=ma.deflate(t,a),r===pv)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=ma.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===Os;if(t.avail_out===0){this.onData(t.output);continue}if(a>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Fa.prototype.onData=function(n){this.chunks.push(n)};Fa.prototype.onEnd=function(n){n===Os&&(this.result=lo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function rc(n,e){const t=new Fa(e);if(t.push(n,!0),t.err)throw t.msg||tr[t.err];return t.result}function vv(n,e){return e=e||{},e.raw=!0,rc(n,e)}function xv(n,e){return e=e||{},e.gzip=!0,rc(n,e)}var bv=Fa,Ev=rc,yv=vv,Sv=xv,Mv=cr,wv={Deflate:bv,deflate:Ev,deflateRaw:yv,gzip:Sv,constants:Mv};const Ja=16209,Tv=16191;var Av=function(e,t){let i,r,a,s,o,c,l,u,f,d,h,_,g,m,p,y,v,E,w,R,A,z,x,S;const O=e.state;i=e.next_in,x=e.input,r=i+(e.avail_in-5),a=e.next_out,S=e.output,s=a-(t-e.avail_out),o=a+(e.avail_out-257),c=O.dmax,l=O.wsize,u=O.whave,f=O.wnext,d=O.window,h=O.hold,_=O.bits,g=O.lencode,m=O.distcode,p=(1<<O.lenbits)-1,y=(1<<O.distbits)-1;e:do{_<15&&(h+=x[i++]<<_,_+=8,h+=x[i++]<<_,_+=8),v=g[h&p];t:for(;;){if(E=v>>>24,h>>>=E,_-=E,E=v>>>16&255,E===0)S[a++]=v&65535;else if(E&16){w=v&65535,E&=15,E&&(_<E&&(h+=x[i++]<<_,_+=8),w+=h&(1<<E)-1,h>>>=E,_-=E),_<15&&(h+=x[i++]<<_,_+=8,h+=x[i++]<<_,_+=8),v=m[h&y];n:for(;;){if(E=v>>>24,h>>>=E,_-=E,E=v>>>16&255,E&16){if(R=v&65535,E&=15,_<E&&(h+=x[i++]<<_,_+=8,_<E&&(h+=x[i++]<<_,_+=8)),R+=h&(1<<E)-1,R>c){e.msg="invalid distance too far back",O.mode=Ja;break e}if(h>>>=E,_-=E,E=a-s,R>E){if(E=R-E,E>u&&O.sane){e.msg="invalid distance too far back",O.mode=Ja;break e}if(A=0,z=d,f===0){if(A+=l-E,E<w){w-=E;do S[a++]=d[A++];while(--E);A=a-R,z=S}}else if(f<E){if(A+=l+f-E,E-=f,E<w){w-=E;do S[a++]=d[A++];while(--E);if(A=0,f<w){E=f,w-=E;do S[a++]=d[A++];while(--E);A=a-R,z=S}}}else if(A+=f-E,E<w){w-=E;do S[a++]=d[A++];while(--E);A=a-R,z=S}for(;w>2;)S[a++]=z[A++],S[a++]=z[A++],S[a++]=z[A++],w-=3;w&&(S[a++]=z[A++],w>1&&(S[a++]=z[A++]))}else{A=a-R;do S[a++]=S[A++],S[a++]=S[A++],S[a++]=S[A++],w-=3;while(w>2);w&&(S[a++]=S[A++],w>1&&(S[a++]=S[A++]))}}else if(E&64){e.msg="invalid distance code",O.mode=Ja;break e}else{v=m[(v&65535)+(h&(1<<E)-1)];continue n}break}}else if(E&64)if(E&32){O.mode=Tv;break e}else{e.msg="invalid literal/length code",O.mode=Ja;break e}else{v=g[(v&65535)+(h&(1<<E)-1)];continue t}break}}while(i<r&&a<o);w=_>>3,i-=w,_-=w<<3,h&=(1<<_)-1,e.next_in=i,e.next_out=a,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=a<o?257+(o-a):257-(a-o),O.hold=h,O.bits=_};const pr=15,Vc=852,Wc=592,$c=0,Ao=1,Xc=2,Rv=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Cv=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Lv=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Nv=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Dv=(n,e,t,i,r,a,s,o)=>{const c=o.bits;let l=0,u=0,f=0,d=0,h=0,_=0,g=0,m=0,p=0,y=0,v,E,w,R,A,z=null,x;const S=new Uint16Array(pr+1),O=new Uint16Array(pr+1);let ee=null,B,I,D;for(l=0;l<=pr;l++)S[l]=0;for(u=0;u<i;u++)S[e[t+u]]++;for(h=c,d=pr;d>=1&&S[d]===0;d--);if(h>d&&(h=d),d===0)return r[a++]=1<<24|64<<16|0,r[a++]=1<<24|64<<16|0,o.bits=1,0;for(f=1;f<d&&S[f]===0;f++);for(h<f&&(h=f),m=1,l=1;l<=pr;l++)if(m<<=1,m-=S[l],m<0)return-1;if(m>0&&(n===$c||d!==1))return-1;for(O[1]=0,l=1;l<pr;l++)O[l+1]=O[l]+S[l];for(u=0;u<i;u++)e[t+u]!==0&&(s[O[e[t+u]]++]=u);if(n===$c?(z=ee=s,x=20):n===Ao?(z=Rv,ee=Cv,x=257):(z=Lv,ee=Nv,x=0),y=0,u=0,l=f,A=a,_=h,g=0,w=-1,p=1<<h,R=p-1,n===Ao&&p>Vc||n===Xc&&p>Wc)return 1;for(;;){B=l-g,s[u]+1<x?(I=0,D=s[u]):s[u]>=x?(I=ee[s[u]-x],D=z[s[u]-x]):(I=32+64,D=0),v=1<<l-g,E=1<<_,f=E;do E-=v,r[A+(y>>g)+E]=B<<24|I<<16|D|0;while(E!==0);for(v=1<<l-1;y&v;)v>>=1;if(v!==0?(y&=v-1,y+=v):y=0,u++,--S[l]===0){if(l===d)break;l=e[t+s[u]]}if(l>h&&(y&R)!==w){for(g===0&&(g=h),A+=f,_=l-g,m=1<<_;_+g<d&&(m-=S[_+g],!(m<=0));)_++,m<<=1;if(p+=1<<_,n===Ao&&p>Vc||n===Xc&&p>Wc)return 1;w=y&R,r[w]=h<<24|_<<16|A-a|0}}return y!==0&&(r[A+y]=l-g<<24|64<<16|0),o.bits=h,0};var _a=Dv;const Iv=0,rh=1,ah=2,{Z_FINISH:Zc,Z_BLOCK:Uv,Z_TREES:Qa,Z_OK:ir,Z_STREAM_END:Pv,Z_NEED_DICT:kv,Z_STREAM_ERROR:_n,Z_DATA_ERROR:sh,Z_MEM_ERROR:oh,Z_BUF_ERROR:Ov,Z_DEFLATED:jc}=cr,co=16180,Yc=16181,qc=16182,Kc=16183,Jc=16184,Qc=16185,eu=16186,tu=16187,nu=16188,iu=16189,Fs=16190,Xn=16191,Ro=16192,ru=16193,Co=16194,au=16195,su=16196,ou=16197,lu=16198,es=16199,ts=16200,cu=16201,uu=16202,du=16203,fu=16204,hu=16205,Lo=16206,pu=16207,mu=16208,_t=16209,lh=16210,ch=16211,Fv=852,Bv=592,zv=15,Hv=zv,_u=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Gv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const ur=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<co||e.mode>ch?1:0},uh=n=>{if(ur(n))return _n;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=co,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(Fv),e.distcode=e.distdyn=new Int32Array(Bv),e.sane=1,e.back=-1,ir},dh=n=>{if(ur(n))return _n;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,uh(n)},fh=(n,e)=>{let t;if(ur(n))return _n;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?_n:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,dh(n))},hh=(n,e)=>{if(!n)return _n;const t=new Gv;n.state=t,t.strm=n,t.window=null,t.mode=co;const i=fh(n,e);return i!==ir&&(n.state=null),i},Vv=n=>hh(n,Hv);let gu=!0,No,Do;const Wv=n=>{if(gu){No=new Int32Array(512),Do=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(_a(rh,n.lens,0,288,No,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;_a(ah,n.lens,0,32,Do,0,n.work,{bits:5}),gu=!1}n.lencode=No,n.lenbits=9,n.distcode=Do,n.distbits=5},ph=(n,e,t,i)=>{let r;const a=n.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),i>=a.wsize?(a.window.set(e.subarray(t-a.wsize,t),0),a.wnext=0,a.whave=a.wsize):(r=a.wsize-a.wnext,r>i&&(r=i),a.window.set(e.subarray(t-i,t-i+r),a.wnext),i-=r,i?(a.window.set(e.subarray(t-i,t),0),a.wnext=i,a.whave=a.wsize):(a.wnext+=r,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=r))),0},$v=(n,e)=>{let t,i,r,a,s,o,c,l,u,f,d,h,_,g,m=0,p,y,v,E,w,R,A,z;const x=new Uint8Array(4);let S,O;const ee=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ur(n)||!n.output||!n.input&&n.avail_in!==0)return _n;t=n.state,t.mode===Xn&&(t.mode=Ro),s=n.next_out,r=n.output,c=n.avail_out,a=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,f=o,d=c,z=ir;e:for(;;)switch(t.mode){case co:if(t.wrap===0){t.mode=Ro;break}for(;u<16;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0),l=0,u=0,t.mode=Yc;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=_t;break}if((l&15)!==jc){n.msg="unknown compression method",t.mode=_t;break}if(l>>>=4,u-=4,A=(l&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){n.msg="invalid window size",t.mode=_t;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?iu:Xn,l=0,u=0;break;case Yc:for(;u<16;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==jc){n.msg="unknown compression method",t.mode=_t;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=_t;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,u=0,t.mode=qc;case qc:for(;u<32;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,x[2]=l>>>16&255,x[3]=l>>>24&255,t.check=Dt(t.check,x,4,0)),l=0,u=0,t.mode=Kc;case Kc:for(;u<16;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,u=0,t.mode=Jc;case Jc:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(x[0]=l&255,x[1]=l>>>8&255,t.check=Dt(t.check,x,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=Qc;case Qc:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(a,a+h),A)),t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,a)),o-=h,a+=h,t.length-=h),t.length))break e;t.length=0,t.mode=eu;case eu:if(t.flags&2048){if(o===0)break e;h=0;do A=i[a+h++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,a)),o-=h,a+=h,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=tu;case tu:if(t.flags&4096){if(o===0)break e;h=0;do A=i[a+h++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Dt(t.check,i,h,a)),o-=h,a+=h,A)break e}else t.head&&(t.head.comment=null);t.mode=nu;case nu:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=_t;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Xn;break;case iu:for(;u<32;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}n.adler=t.check=_u(l),l=0,u=0,t.mode=Fs;case Fs:if(t.havedict===0)return n.next_out=s,n.avail_out=c,n.next_in=a,n.avail_in=o,t.hold=l,t.bits=u,kv;n.adler=t.check=1,t.mode=Xn;case Xn:if(e===Uv||e===Qa)break e;case Ro:if(t.last){l>>>=u&7,u-=u&7,t.mode=Lo;break}for(;u<3;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=ru;break;case 1:if(Wv(t),t.mode=es,e===Qa){l>>>=2,u-=2;break e}break;case 2:t.mode=su;break;case 3:n.msg="invalid block type",t.mode=_t}l>>>=2,u-=2;break;case ru:for(l>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=_t;break}if(t.length=l&65535,l=0,u=0,t.mode=Co,e===Qa)break e;case Co:t.mode=au;case au:if(h=t.length,h){if(h>o&&(h=o),h>c&&(h=c),h===0)break e;r.set(i.subarray(a,a+h),s),o-=h,a+=h,c-=h,s+=h,t.length-=h;break}t.mode=Xn;break;case su:for(;u<14;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=_t;break}t.have=0,t.mode=ou;case ou:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.lens[ee[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[ee[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,S={bits:t.lenbits},z=_a(Iv,t.lens,0,19,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid code lengths set",t.mode=_t;break}t.have=0,t.mode=lu;case lu:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(v<16)l>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(O=p+2;u<O;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(l>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=_t;break}A=t.lens[t.have-1],h=3+(l&3),l>>>=2,u-=2}else if(v===17){for(O=p+3;u<O;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}l>>>=p,u-=p,A=0,h=3+(l&7),l>>>=3,u-=3}else{for(O=p+7;u<O;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}l>>>=p,u-=p,A=0,h=11+(l&127),l>>>=7,u-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=_t;break}for(;h--;)t.lens[t.have++]=A}}if(t.mode===_t)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=_t;break}if(t.lenbits=9,S={bits:t.lenbits},z=_a(rh,t.lens,0,t.nlen,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid literal/lengths set",t.mode=_t;break}if(t.distbits=6,t.distcode=t.distdyn,S={bits:t.distbits},z=_a(ah,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,S),t.distbits=S.bits,z){n.msg="invalid distances set",t.mode=_t;break}if(t.mode=es,e===Qa)break e;case es:t.mode=ts;case ts:if(o>=6&&c>=258){n.next_out=s,n.avail_out=c,n.next_in=a,n.avail_in=o,t.hold=l,t.bits=u,Av(n,d),s=n.next_out,r=n.output,c=n.avail_out,a=n.next_in,i=n.input,o=n.avail_in,l=t.hold,u=t.bits,t.mode===Xn&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(y&&!(y&240)){for(E=p,w=y,R=v;m=t.lencode[R+((l&(1<<E+w)-1)>>E)],p=m>>>24,y=m>>>16&255,v=m&65535,!(E+p<=u);){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}l>>>=E,u-=E,t.back+=E}if(l>>>=p,u-=p,t.back+=p,t.length=v,y===0){t.mode=hu;break}if(y&32){t.back=-1,t.mode=Xn;break}if(y&64){n.msg="invalid literal/length code",t.mode=_t;break}t.extra=y&15,t.mode=cu;case cu:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=uu;case uu:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,y=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(!(y&240)){for(E=p,w=y,R=v;m=t.distcode[R+((l&(1<<E+w)-1)>>E)],p=m>>>24,y=m>>>16&255,v=m&65535,!(E+p<=u);){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}l>>>=E,u-=E,t.back+=E}if(l>>>=p,u-=p,t.back+=p,y&64){n.msg="invalid distance code",t.mode=_t;break}t.offset=v,t.extra=y&15,t.mode=du;case du:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=_t;break}t.mode=fu;case fu:if(c===0)break e;if(h=d-c,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=_t;break}h>t.wnext?(h-=t.wnext,_=t.wsize-h):_=t.wnext-h,h>t.length&&(h=t.length),g=t.window}else g=r,_=s-t.offset,h=t.length;h>c&&(h=c),c-=h,t.length-=h;do r[s++]=g[_++];while(--h);t.length===0&&(t.mode=ts);break;case hu:if(c===0)break e;r[s++]=t.length,c--,t.mode=ts;break;case Lo:if(t.wrap){for(;u<32;){if(o===0)break e;o--,l|=i[a++]<<u,u+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Dt(t.check,r,d,s-d):Ta(t.check,r,d,s-d)),d=c,t.wrap&4&&(t.flags?l:_u(l))!==t.check){n.msg="incorrect data check",t.mode=_t;break}l=0,u=0}t.mode=pu;case pu:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,l+=i[a++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=_t;break}l=0,u=0}t.mode=mu;case mu:z=Pv;break e;case _t:z=sh;break e;case lh:return oh;case ch:default:return _n}return n.next_out=s,n.avail_out=c,n.next_in=a,n.avail_in=o,t.hold=l,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<_t&&(t.mode<Lo||e!==Zc))&&ph(n,n.output,n.next_out,d-n.avail_out),f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Dt(t.check,r,d,n.next_out-d):Ta(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Xn?128:0)+(t.mode===es||t.mode===Co?256:0),(f===0&&d===0||e===Zc)&&z===ir&&(z=Ov),z},Xv=n=>{if(ur(n))return _n;let e=n.state;return e.window&&(e.window=null),n.state=null,ir},Zv=(n,e)=>{if(ur(n))return _n;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,ir):_n},jv=(n,e)=>{const t=e.length;let i,r,a;return ur(n)||(i=n.state,i.wrap!==0&&i.mode!==Fs)?_n:i.mode===Fs&&(r=1,r=Ta(r,e,t,0),r!==i.check)?sh:(a=ph(n,e,t,t),a?(i.mode=lh,oh):(i.havedict=1,ir))};var Yv=dh,qv=fh,Kv=uh,Jv=Vv,Qv=hh,e0=$v,t0=Xv,n0=Zv,i0=jv,r0="pako inflate (from Nodeca project)",ti={inflateReset:Yv,inflateReset2:qv,inflateResetKeep:Kv,inflateInit:Jv,inflateInit2:Qv,inflate:e0,inflateEnd:t0,inflateGetHeader:n0,inflateSetDictionary:i0,inflateInfo:r0};function a0(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var s0=a0;const mh=Object.prototype.toString,{Z_NO_FLUSH:o0,Z_FINISH:l0,Z_OK:Ca,Z_STREAM_END:Io,Z_NEED_DICT:Uo,Z_STREAM_ERROR:c0,Z_DATA_ERROR:vu,Z_MEM_ERROR:u0}=cr;function Ba(n){this.options=lo.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new nh,this.strm.avail_out=0;let t=ti.inflateInit2(this.strm,e.windowBits);if(t!==Ca)throw new Error(tr[t]);if(this.header=new s0,ti.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Ra.string2buf(e.dictionary):mh.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=ti.inflateSetDictionary(this.strm,e.dictionary),t!==Ca)))throw new Error(tr[t])}Ba.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let a,s,o;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?l0:o0,mh.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),a=ti.inflate(t,s),a===Uo&&r&&(a=ti.inflateSetDictionary(t,r),a===Ca?a=ti.inflate(t,s):a===vu&&(a=Uo));t.avail_in>0&&a===Io&&t.state.wrap>0&&n[t.next_in]!==0;)ti.inflateReset(t),a=ti.inflate(t,s);switch(a){case c0:case vu:case Uo:case u0:return this.onEnd(a),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||a===Io))if(this.options.to==="string"){let c=Ra.utf8border(t.output,t.next_out),l=t.next_out-c,u=Ra.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(a===Ca&&o===0)){if(a===Io)return a=ti.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Ba.prototype.onData=function(n){this.chunks.push(n)};Ba.prototype.onEnd=function(n){n===Ca&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=lo.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function ac(n,e){const t=new Ba(e);if(t.push(n),t.err)throw t.msg||tr[t.err];return t.result}function d0(n,e){return e=e||{},e.raw=!0,ac(n,e)}var f0=Ba,h0=ac,p0=d0,m0=ac,_0=cr,g0={Inflate:f0,inflate:h0,inflateRaw:p0,ungzip:m0,constants:_0};const{Deflate:v0,deflate:x0,deflateRaw:b0,gzip:E0}=wv,{Inflate:y0,inflate:S0,inflateRaw:M0,ungzip:w0}=g0;var T0=v0,A0=x0,R0=b0,C0=E0,L0=y0,N0=S0,D0=M0,I0=w0,U0=cr,La={Deflate:T0,deflate:A0,deflateRaw:R0,gzip:C0,Inflate:L0,inflate:N0,inflateRaw:D0,ungzip:I0,constants:U0},yl=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.Protocol0=0]="Protocol0",n[n.Protocol1=1]="Protocol1",n[n.Protocol2=2]="Protocol2",n[n.Protocol3=3]="Protocol3",n[n.Protocol4=4]="Protocol4",n[n.Protocol5=5]="Protocol5",n))(yl||{}),As=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.MARK=40]="MARK",n[n.STOP=46]="STOP",n[n.POP=48]="POP",n[n.POP_MARK=49]="POP_MARK",n[n.DUP=50]="DUP",n[n.FLOAT=70]="FLOAT",n[n.INT=73]="INT",n[n.BININT=74]="BININT",n[n.BININT1=75]="BININT1",n[n.LONG=76]="LONG",n[n.BININT2=77]="BININT2",n[n.NONE=78]="NONE",n[n.PERSID=80]="PERSID",n[n.BINPERSID=81]="BINPERSID",n[n.REDUCE=82]="REDUCE",n[n.STRING=83]="STRING",n[n.BINSTRING=84]="BINSTRING",n[n.SHORT_BINSTRING=85]="SHORT_BINSTRING",n[n.UNICODE=86]="UNICODE",n[n.BINUNICODE=88]="BINUNICODE",n[n.APPEND=97]="APPEND",n[n.BUILD=98]="BUILD",n[n.GLOBAL=99]="GLOBAL",n[n.DICT=100]="DICT",n[n.EMPTY_DICT=125]="EMPTY_DICT",n[n.APPENDS=101]="APPENDS",n[n.GET=103]="GET",n[n.BINGET=104]="BINGET",n[n.INST=105]="INST",n[n.LONG_BINGET=106]="LONG_BINGET",n[n.LIST=108]="LIST",n[n.EMPTY_LIST=93]="EMPTY_LIST",n[n.OBJ=111]="OBJ",n[n.PUT=112]="PUT",n[n.BINPUT=113]="BINPUT",n[n.LONG_BINPUT=114]="LONG_BINPUT",n[n.SETITEM=115]="SETITEM",n[n.TUPLE=116]="TUPLE",n[n.EMPTY_TUPLE=41]="EMPTY_TUPLE",n[n.SETITEMS=117]="SETITEMS",n[n.BINFLOAT=71]="BINFLOAT",n[n.PROTO=128]="PROTO",n[n.NEWOBJ=129]="NEWOBJ",n[n.EXT1=130]="EXT1",n[n.EXT2=131]="EXT2",n[n.EXT4=132]="EXT4",n[n.TUPLE1=133]="TUPLE1",n[n.TUPLE2=134]="TUPLE2",n[n.TUPLE3=135]="TUPLE3",n[n.NEWTRUE=136]="NEWTRUE",n[n.NEWFALSE=137]="NEWFALSE",n[n.LONG1=138]="LONG1",n[n.LONG4=139]="LONG4",n[n.BINBYTES=66]="BINBYTES",n[n.SHORT_BINBYTES=67]="SHORT_BINBYTES",n[n.SHORT_BINUNICODE=140]="SHORT_BINUNICODE",n[n.BINUNICODE8=141]="BINUNICODE8",n[n.BINBYTES8=142]="BINBYTES8",n[n.EMPTY_SET=143]="EMPTY_SET",n[n.ADDITEMS=144]="ADDITEMS",n[n.FROZENSET=145]="FROZENSET",n[n.NEWOBJ_EX=146]="NEWOBJ_EX",n[n.STACK_GLOBAL=147]="STACK_GLOBAL",n[n.MEMOIZE=148]="MEMOIZE",n[n.FRAME=149]="FRAME",n[n.BYTEARRAY8=150]="BYTEARRAY8",n[n.NEXT_BUFFER=151]="NEXT_BUFFER",n[n.READONLY_BUFFER=152]="READONLY_BUFFER",n))(As||{});class P0{constructor(e,...t){me(this,"module");me(this,"args");me(this,"state");this.module=e,this.args=t}}class xu{constructor(e,t){me(this,"module");me(this,"name");this.module=e,this.name=t}make(...e){return new P0(this,...e)}}const no=class no{constructor(){me(this,"stack",[])}append(e){this.stack.push(e)}pop(){return this.stack.pop()}get last(){return this.stack[this.stack.length-1]}set last(e){this.stack[this.stack.length-1]=e}popMark(){let e=[];for(var t=this.stack.length-1;t>=0;t--)if(this.stack[t]===no.MARK){this.pop();break}else e.unshift(this.pop());return e}};me(no,"MARK",Symbol("Mark"));let Bs=no;class k0{constructor(){me(this,"memo",[])}get(e){return this.memo[e]}set(e,t){this.memo[t]=e}append(e){this.memo.push(e)}get lastMemo(){return this.memo[this.memo.length-1]}}class uo extends jt{constructor(t,i=!1){super(t);me(this,"debug");me(this,"operTime",{});me(this,"protocol",-1);me(this,"stack",new Bs);me(this,"memo",new k0);this.debug=i}findClass(t,i){return new xu(t,i)}readOperation(){const t=this.debug?performance.now():0;if(this.eof)throw new Error("Depickler.readOperation: Reached end of pickle data without STOP opcode.");const i=this.readNumber("Uint8");switch(i){case 46:break;case 128:{if(this.protocol=this.readNumber("Uint8"),!(this.protocol in yl))throw new Error(`Depickler.readPicke: Unknown protocol. ${this.protocol}`);if(![2,3,4,5].includes(this.protocol))throw new Error(`Depickler.readPickle: Unsupported protocol. ${yl[this.protocol]}`);break}case 149:{this.readBigNumber("BigUint64");break}case 125:{this.stack.append({});break}case 148:{this.memo.append(this.stack.last);break}case 40:{this.stack.append(Bs.MARK);break}case 140:{this.stack.append(this.readString(this.readNumber("Uint8"),"utf-8"));break}case 93:{this.stack.append([]);break}case 74:{this.stack.append(this.readNumber("Int32"));break}case 67:{const r=this.readNumber("Uint8"),a=new Uint8Array(this.readBuffer(r));this.stack.append(a);break}case 135:{this.stack.append([this.stack.pop(),this.stack.pop(),this.stack.pop()].reverse());break}case 97:{const r=this.stack.pop();this.stack.last.push(r);break}case 104:{const r=this.readNumber("Uint8");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 117:{const r=this.stack.popMark();if(r.length%2!=0)throw new Error("Depickler.readPickle: Can not set an odd number of items.");const a=this.stack.last;for(let s=0;s<r.length;s+=2)a[r[s+0]]=r[s+1];break}case 77:{this.stack.append(this.readNumber("Uint16"));break}case 113:{const r=this.readNumber("Uint8");this.memo.set(this.stack.last,r);break}case 88:{const r=this.readNumber("Uint32");this.stack.append(this.readString(r,"utf-8"));break}case 138:{const r=this.readNumber("Uint8");this.stack.append(this.readCustomNumber(r,!0));break}case 85:{const r=this.readNumber("Uint8");this.stack.append(this.readString(r,"utf-8"));break}case 114:{const r=this.readNumber("Uint32");this.memo.set(this.stack.last,r);break}case 99:{const r=this.readUntilNewline(),a=this.readUntilNewline();this.stack.append(this.findClass(r,a));break}case 41:{this.stack.append([]);break}case 129:{const r=this.stack.pop(),a=this.stack.pop();this.stack.append(a.make(...r));break}case 78:{this.stack.append(null);break}case 75:{this.stack.append(this.readNumber("Uint8"));break}case 116:{this.stack.append([...this.stack.popMark()].reverse());break}case 134:{this.stack.append([this.stack.pop(),this.stack.pop()].reverse());break}case 98:{const r=this.stack.pop(),a=this.stack.last;a.state=r;break}case 137:{this.stack.append(!1);break}case 136:{this.stack.append(!0);break}case 101:{const r=this.stack.popMark();this.stack.last.push(...r);break}case 133:{this.stack.append([this.stack.pop()]);break}case 106:{const r=this.readNumber("Uint32");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 115:{const r=this.stack.pop(),a=this.stack.pop();this.stack.last[a]=r;break}case 82:{const r=this.stack.pop(),a=this.stack.last;a instanceof xu?this.stack.last=a.make(...r):this.stack.last=a(...r);break}default:throw As[i]===void 0?new Error(`Depicker.readPickle: Unknown opcode. ${xa.hex(i,1)}`):new Error(`Depicker.readPickle: Unimplemented opcode. ${As[i]}`)}if(this.debug){const r=performance.now()-t;this.operTime[i]=(this.operTime[i]??0)+r}return i}readPickle(){for(this.debug&&console.time("Depickle");this.readOperation()!=46;);if(this.debug){console.timeEnd("Depickle");const t=Object.fromEntries(Object.entries(this.operTime).map(r=>[As[parseInt(r[0])],r[1]])),i=Object.keys(t).reduce((r,a)=>Math.max(r,a.length),0);for(const[r,a]of Object.entries(t))console.log(`${r.padEnd(i," ")} with ${Math.round(a)}ms`)}return this.stack.stack}static depickle(t,i=!1){return new uo(t,i).readPickle()}readUntilNewline(){let t=this.pointer;for(;this.view.getUint8(t++)!=10;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder("ascii").decode(i)}}const O0=34,F0="RPA-3.0";class B0{constructor(e,t,i,r){me(this,"type",ut.File);me(this,"viewer",null);me(this,"name");me(this,"parent");me(this,"_blob");me(this,"sections");this._blob=e,this.sections=t,this.name=i,this.parent=r}async blob(){return new Blob(this.sections.map(e=>this._blob.slice(e.offset,e.offset+e.length)))}async buffer(){return await(await this.blob()).arrayBuffer()}}class z0 extends jt{constructor(t){super();me(this,"blob");me(this,"blobPointer",0);me(this,"key",-1);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}getSlice(t,i=this.blobPointer){this.blobPointer=i;const r=this.blob.slice(this.blobPointer,this.blobPointer+t);return this.blobPointer+=t,r}async load(t,i=this.blobPointer){this.loadData(await this.getSlice(t,i).arrayBuffer())}async readHeader(){await this.load(O0);const t=this.readString(this.dataLeft);if(!t.endsWith(`
`))throw new Error("ArchiveReader.readHeader: Archive header does not end with newline.");const i=t.split(" ");if(i.length!=3)throw new Error("ArchiveReader.readHeader: Invalid header.");if(i[0]!=F0)throw new Error(`ArchiveReader.readHeader: Signature does not match. got: ${i[0]} expected: ${i[1]}`);const r=Number.parseInt(i[1],16);if(Number.isNaN(r))throw new Error("ArchiveReader.readHeader: Index offset is invalid.");if(this.key=Number.parseInt(i[2],16),Number.isNaN(this.key))throw new Error("ArchiveReader.readHeader: Key is invalid.");return r}async readArchive(){const t=await this.readHeader();this.blobPointer=t,await this.load(this.blobDataLeft);const i=this.buffer,r=La.inflate(i),a=uo.depickle(r),s=new zn.fsDirectory_Container("UNSET",null),o=a[0];for(const[c,l]of Object.entries(o)){const u=l.map(h=>({offset:h[0]^this.key,length:h[1]^this.key})),f=c.split("/").pop();if(f==null)throw new Error("Catastrophic error that should never happen.");const d=new B0(this.blob,u,f,null);await zn.setDeep(s,c,d)}return s}}const H0={namespace:"renpy.archive",priority:10,isValid:async n=>n.type==ut.File&&n.name.endsWith(".rpa"),transform:async n=>{if(n.type!=ut.File)throw new Error("Tried to create renpy archive viewer with invalid entry type.");const t=await new z0(await n.blob()).readArchive();return t.name=n.name,t.parent=n.parent,t}};function G0(n){const e=n.module;if(e.module!==fo.RenPy)throw new Error("parseRenPyClass: This function is only for parsing RenPy module classes.");switch(e.name){case"Init":return n.state[1].block.map(we).join(`
`);case"Define":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`define ${t[1].varname} ${t[1].operator} ${we(t[1].code)}
`:`define ${t[1].store.split(".").pop()??""}.${t[1].varname} ${t[1].operator} ${we(t[1].code)}
`}case"PyCode":{const t=n.state;let i;for(let r=0;r<t.length;r++){const a=t[r];if(i===void 0)typeof a=="string"&&(i=a);else{if(typeof a=="string")return a;if(!Array.isArray(a)&&typeof a!="number")return we(a)}}throw new Error("parseRenPyClass: Failed to parse PyCode.")}case"PyExpr":{const t=n.args;return t[3]??t[0]}case"Default":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`default ${t[1].varname} = ${we(t[1].code)}
`:`default ${t[1].store.split(".").pop()??""}.${t[1].varname} = ${we(t[1].code)}
`}case"Python":{const t=n.state,i=we(t[1].code);let r=[];for(let a=0;a!=-1;a=i.indexOf(`
`,a+1))r.push(a);return r.every(a=>a==0||a==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${Qe(i)}
`}case"Return":return"";case"Label":{const t=n.state;let i="";for(const r of t[1].block)i+=we(r);return i=Qe(i),`label ${t[1].name}:
${i}`}case"Screen":{const t=n.state;return we(t[1].screen)}case"ParameterInfo":return n.state.parameters.map(i=>`${i[1]==null?i[0]:`${i[0]}=${typeof i[1]=="string"?i[1]:we(i[1])}`}`).join(", ");case"Image":{const t=n.state;if(t[1].code!=null)return`image ${t[1].imgname.join(", ")} = ${we(t[1].code)}
`;if(t[1].atl!=null)return`image ${t[1].imgname.join(", ")}:
${Qe(we(t[1].atl))}
`;throw new Error("parseRenPyClass: Invalid image.")}case"Style":{const t=n.state;return`style ${t[1].style_name}:
${Qe(Object.entries(t[1].properties).map(i=>`${i[0]} ${we(i[1])}`).join(`
`))}
`}case"Transform":{const t=n.state;return`transform ${t[1].varname}${t[1].parameters==null?"":`(${we(t[1].parameters)})`}:
${Qe(we(t[1].atl))}
`}case"Jump":return`jump ${n.state[1].target}
`;case"UserStatement":return`${n.state[1].line}
`;case"Say":{const t=n.state;return`${t[1].who===null?"":`${t[1].who} `}"${t[1].what}"
`}case"Show":return`show ${n.state[1].imspec[6].join(" ")}
`;case"With":{const t=n.state;if(t[1].expr=="None"){if(t[1].paired==null)throw new Error("parseRenPyClass: With without any args.");return`with ${we(t[1].paired)}`}else return`with ${typeof t[1].expr=="string"?t[1].expr:we(t[1].expr)}
`}case"If":{const t=n.state;let i="";for(let r=0;r<t[1].entries.length;r++){const a=t[1].entries[r];r==0?i+=`if ${typeof a[0]=="string"?a[0]:we(a[0])}:
${Qe(a[1].map(we).join(`
`))}
`:a[0]!=null&&a[0]!="True"?i+=`elif ${typeof a[0]=="string"?a[0]:we(a[0])}:
${Qe(a[1].map(we).join(`
`))}
`:i+=`else:
${Qe(a[1].map(we).join(`
`))}
`}return i}case"Menu":{const t=n.state;let i=`menu${t[1].arguments==null?"":`(${we(t[1].arguments)})`}:
`;for(const r of t[1].items)if(i+=Qe(`"${r[0]}"`),r[1]!="True"&&r[1]!=null&&(i+=" if ",typeof r[1]=="string"?i+=r[1]:i+=we(r[1])),r[2]==null)i+=`
`;else{i+=`:
`;for(const a of r[2])i+=`${Qe(we(a),2)}
`}return i}case"Scene":return`scene ${n.state[1].imspec[6].join(" ")}
`;case"Hide":return`hide ${n.state[1].imspec[6].join(" ")}
`;case"While":{const t=n.state;return`while ${we(t[1].condition)}:
${Qe(t[1].block.map(we).join(`
`))}
`}case"Pass":return`pass
`;case"Call":return`call ${n.state[1].label} from `;default:throw new Error(`parseRenPyClass: Unknown class "${e.name}"`)}}function V0(n){const e=n.module;if(e.module!==fo.RenPy_ATL)throw new Error("parseRenPyATLClass: This function is only for parsing RenPy_ATL module classes.");switch(e.name){case"RawBlock":return`${n.state.statements.map(we).join("")}`;case"RawMultipurpose":{const t=n.state;let i="";t.duration!="0"&&(i+=(typeof t.duration=="string"||typeof t.duration=="number"?t.duration:we(t.duration))+`
`);for(const r of t.expressions)i+=`${we(r[0])}
`;for(const r of t.properties)i+=`${r[0]} ${we(r[1])}
`;return i}case"RawRepeat":{const t=n.state;return`repeat${t.repeats==null?"":` ${typeof t.repeats=="number"?t.repeats:we(t.repeats)}`}
`}case"RawOn":{const t=n.state;let i="";for(const[r,a]of Object.entries(t.handlers))i+=`on ${r}:
${Qe(we(a))}
`;return i}case"RawParallel":{const t=n.state;return`parallel:
${Qe(t.blocks.map(we).join(`
`))}`}default:throw new Error(`parseRenPyATLClass: Unknown class "${e.name}"`)}}function W0(n){const e=n.module;if(e.module!==fo.RenPy_SL2)throw new Error("parseRenPySL2Class: This function is only for parsing RenPy_SL2 module classes.");switch(e.name){case"SLScreen":{const t=n.state;return`screen ${t.name}${t.parameters==null?"":`(${we(t.parameters)})`}:
${Qe((t.tag==null?"":t.tag)+`
`+t.keyword.map(i=>`${i[0]} ${we(i[1])}
`).join(`
`)+t.children.map(we).join(""))}
`}case"SLDisplayable":{let t=function(s,o=`
`,c=""){return s.length==0?"":c+s.map(l=>`${l[0]} ${we(l[1])}`).join(o)},i=function(s){return s.map(we).join(" ")},r=function(s){return s.map(we).join(`
`)};const a=n.state;switch(`${a.displayable.module}:${a.displayable.name}`){case"renpy.sl2.sldisplayables:sl2add":return`add ${i(a.positional)} ${a.keyword.map(s=>`${s[0]} ${we(s[1])}`).join(" ")}
`;case"renpy.display.layout:Grid":return`grid ${i(a.positional)}:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.ui:_textbutton":return`textbutton ${i(a.positional)}:
${Qe(t(a.keyword))}
`;case"renpy.display.layout:Null":return`null${t(a.keyword," "," ")}
`;case"renpy.display.layout:MultiBox":return`${a.style}${t(a.keyword," "," ")}:
${Qe(r(a.children))}
`;case"renpy.text.text:Text":return`text ${i(a.positional)}${t(a.keyword," "," ")}
`;case"renpy.ui:_imagemap":return`imagemap:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.ui:_hotspot":return`${a.name}${i(a.positional)} ${t(a.keyword)}`;case"renpy.ui:_imagebutton":return`imagebutton:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.display.layout:Window":return`${a.name}${a.positional.length==0?"":` ${i(a.positional)}`}:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.display.behavior:Input":return`input ${t(a.keyword)}
`;case"renpy.sl2.sldisplayables:sl2viewport":return`viewport:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.sl2.sldisplayables:sl2vpgrid":return`vpgrid:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.ui:_label":return`label ${i(a.positional)}
`;case"renpy.ui:_key":return`key ${i(a.positional)}${t(a.keyword," "," ")}
`;case"renpy.display.behavior:Timer":return`timer ${i(a.positional)}${t(a.keyword," "," ")}
`;case"renpy.sl2.sldisplayables:sl2bar":return`bar:
${Qe(t(a.keyword))}
${Qe(r(a.children))}
`;case"renpy.display.behavior:Button":return`button ${i(a.positional)}${t(a.keyword," "," ")}:
${r(a.children)}`;case"renpy.display.behavior:OnEvent":return`on ${i(a.positional)}${t(a.keyword," "," ")}
`;default:throw new Error(`parseRenPySL2Class: Unsupported displayable module: ${a.displayable.module}:${a.displayable.name}`)}}case"SLPython":{const t=n.state,i=we(t.code);let r=[];for(let a=0;a!=-1;a=i.indexOf(`
`,a+1))r.push(a);return r.every(a=>a==0||a==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${Qe(i)}
`}case"SLIf":{const t=n.state;let i="";for(let r=0;r<t.entries.length;r++){const a=t.entries[r];r==0?i+=`if ${typeof a[0]=="string"?a[0]:we(a[0])}:
${Qe(we(a[1]))}
`:a[0]!=null?i+=`elif ${typeof a[0]=="string"?a[0]:we(a[0])}:
${Qe(we(a[1]))}
`:i+=`else:
${Qe(we(a[1]))}
`}return i}case"SLBlock":{const t=n.state;let i="";for(const r of t.children)i+=we(r);for(const r of t.keyword)i+=`${r[0]} ${we(r[1])}
`;return i.length==0&&(i+=`pass
`),i}case"SLFor":{const t=n.state;return`for ${t.variable} in ${we(t.expression)}:
${Qe(t.children.map(we).join(""))}`}case"SLUse":return`use ${n.state.target}`;case"SLTransclude":return`transclude
`;case"SLDefault":{const t=n.state;return`default ${t.variable} = ${we(t.expression)}`}default:throw new Error(`parseRenPySL2Class: Unknown class "${e.name}"`)}}const bu="RENPY RPC2";var _h=(n=>(n[n.Legacy=-1]="Legacy",n[n.End=0]="End",n[n.BeforeStaticTransforms=1]="BeforeStaticTransforms",n[n.AfterStaticTransforms=2]="AfterStaticTransforms",n))(_h||{});function $0(n){const e=new jt(n);if(e.readString(bu.length,"ascii")!=bu){console.warn("decompileScript: Legacy format may not decompile correctly."),e.pointer=0;const a=e.readBuffer(e.length),s=La.inflate(a);return[{slot:-1,offset:0,length:e.length,data:s}]}let i=[];for(;;){const a=e.readNumber("Uint32"),s=e.readNumber("Uint32"),o=e.readNumber("Uint32");if(a==0)break;i.push({slot:a,offset:s,length:o})}return i.map(a=>{e.pointer=a.offset;const s=e.readBuffer(a.length),o=La.inflate(s);return{...a,data:o}})}function Eu(n){return $0(n)}var fo=(n=>(n.RenPy="renpy.ast",n.RenPy_SL2="renpy.sl2.slast",n.RenPy_ATL="renpy.atl",n))(fo||{});function Qe(n,e=1){return n.split(`
`).map(t=>"    ".repeat(e)+t).join(`
`)}const X0=100;let ns=[];function Z0(n){const e=n.module;switch(e.module){case"renpy.ast":return G0(n);case"renpy.sl2.slast":return W0(n);case"renpy.atl":return V0(n);default:throw new Error(`parseClass: Unknown module. "${e.module}"`)}}function we(n){{ns.push(n),ns.length>X0&&ns.shift();try{return Z0(n)}catch(e){for(const t of ns)console.log(t);throw e}}}function yu(n,e={}){const t=n.find(l=>l.slot==_h.BeforeStaticTransforms);if(t===void 0)throw new Error("decompileScript: Could not find script chunk.");const r=uo.depickle(t.data)[0],a=r[0];if(a.version!==5003e3)throw new Error(`decompileScript: Unknown header version. ${a.version}`);let s="";s+=`# Ren'Py decompiled script.
`,s+=`# Decompiled with renpy-asset-viewer
`,s+=`# Decompiled on ${new Date}
`,s+=`# Script Header:
`;for(const[l,u]of Object.entries(a))s+=`#     ${l}: ${u}
`;s+=`# Decompilation is in very early alpha, so please give feedback on bugs!
`,s+=`


`;let o="";const c=r[1];for(const l of c)o+=we(l),o+=`
`;return(e.cleanOutput??!0)&&(o=j0(o)),s+o}function j0(n){return n=n.replace(/\s+(?=(\n|$))/g,""),n}function Y0(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function q0(n){let e,t,i,r,a,s;const o=[J0,K0],c=[];function l(u,f){return f&1&&(e=null),f&1&&(t=null),e==null&&(e=!!u[0].name.endsWith(".rpyc")),e?0:(t==null&&(t=!!u[0].name.endsWith(".rpy")),t?1:-1)}return~(i=l(n,-1))&&(r=c[i]=o[i](n)),{c(){r&&r.c(),a=ct()},l(u){r&&r.l(u),a=ct()},m(u,f){~i&&c[i].m(u,f),Le(u,a,f),s=!0},p(u,f){let d=i;i=l(u,f),i===d?~i&&c[i].p(u,f):(r&&(ui(),tt(c[d],1,1,()=>{c[d]=null}),di()),~i?(r=c[i],r?r.p(u,f):(r=c[i]=o[i](u),r.c()),Xe(r,1),r.m(a.parentNode,a)):r=null)},i(u){s||(Xe(r),s=!0)},o(u){tt(r),s=!1},d(u){u&&fe(a),~i&&c[i].d(u)}}}function K0(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:tx,then:ex,catch:Q0,value:3,blocks:[,,,]};return Et(t=n[1].text(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,s){n=a,r.ctx=n,s&1&&t!==(t=n[1].text())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function J0(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:rx,then:ix,catch:nx,value:2,blocks:[,,,]};return Et(t=n[1].arrayBuffer(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,s){n=a,r.ctx=n,s&1&&t!==(t=n[1].arrayBuffer())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function Q0(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function ex(n){let e,t;return e=new so({props:{language:Jl,code:n[3]}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.code=i[3]),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function tx(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function nx(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function ix(n){let e,t;return e=new so({props:{language:Jl,code:yu(Eu(n[2]))}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&1&&(a.code=yu(Eu(i[2]))),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function rx(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function ax(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function sx(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:ax,then:q0,catch:Y0,value:1,blocks:[,,,]};return Et(t=n[0].blob(),r),{c(){e=ct(),r.block.c()},l(a){e=ct(),r.block.l(a)},m(a,s){Le(a,e,s),r.block.m(a,r.anchor=s),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(a,[s]){n=a,r.ctx=n,s&1&&t!==(t=n[0].blob())&&Et(t,r)||Tn(r,n,s)},i(a){i||(Xe(r.block),i=!0)},o(a){for(let s=0;s<3;s+=1){const o=r.blocks[s];tt(o)}i=!1},d(a){a&&fe(e),r.block.d(a),r.token=null,r=null}}}function ox(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class lx extends Jt{constructor(e){super(),Qt(this,e,ox,sx,$t,{entry:0})}}const cx={namespace:"renpy.script",priority:2,isValid:async n=>n.type!=ut.File?!1:n.name.endsWith(".rpyc")||n.name.endsWith(".rpy"),createViewer:async(n,e)=>{if(n.type==ut.File)new lx({target:e,props:{entry:n}});else throw new Error("Tried to create renpy.script viewer with directory.")}};var rn=(n=>(n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.Byte_Array=7]="Byte_Array",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.Int_Array=11]="Int_Array",n[n.Long_Array=12]="Long_Array",n))(rn||{});function gh(n){const e=new jt(n);e.endianness=jt.BIG_ENDIAN;const t=i=>{switch(i){default:case 0:throw new Error("Malformed NBT data.");case 1:return{tag:i,value:e.readNumber("Int8")};case 2:return{tag:i,value:e.readNumber("Int16")};case 3:return{tag:i,value:e.readNumber("Int32")};case 4:return{tag:i,value:e.readBigNumber("BigInt64")};case 5:return{tag:i,value:e.readNumber("Float32")};case 6:return{tag:i,value:e.readNumber("Float64")};case 7:return{tag:i,value:new Int8Array(e.readBuffer(e.readNumber("Int32")))};case 8:return{tag:i,value:e.readString(e.readNumber("Uint16"),"utf-8")};case 9:{const r=e.readNumber("Int8"),a=e.readNumber("Int32"),s=new Array(a);for(let o=0;o<a;o++)s[o]=t(r);return{tag:i,listTag:r,value:s}}case 10:{let r={};for(;;){const a=e.readNumber("Uint8");if(a==0)break;const s=e.readString(e.readNumber("Uint16"),"utf-8");r[s]=t(a)}return{tag:i,value:r}}case 11:return{tag:i,value:new Int32Array(e.readArray(e.readNumber,e.readNumber("Int32"),"Int32"))};case 12:return{tag:i,value:new BigInt64Array(e.readArray(e.readBigNumber,e.readNumber("Int32"),"BigInt64"))}}};if(e.readNumber("Uint8")!=10)throw new Error("NBT data doesn't start with compound tag.");if(e.readNumber("Uint16")!=0)throw new Error("First NBT tag must have no name.");return t(10)}function Sl(n){switch(n.tag){default:case 0:throw new Error("failed to simplify nbt object.");case 1:case 2:case 3:case 4:case 5:case 6:return n.value;case 8:return n.value;case 9:return n.value.map(Sl);case 10:return Object.fromEntries(Object.entries(n.value).map(([e,t])=>[e,Sl(t)]));case 7:case 11:case 12:return n.value}}function Su(n,e,t){const i=n.slice();return i[2]=e[t],i}function Mu(n,e,t){const i=n.slice();return i[2]=e[t],i}function wu(n,e,t){const i=n.slice();return i[1]=e[t][0],i[2]=e[t][1],i}function ux(n){let e,t=Ii(n[0].value),i=[];for(let r=0;r<t.length;r+=1)i[r]=Tu(Su(n,t,r));return{c(){e=nt("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=it(r,"DIV",{class:!0});var a=vt(e);for(let s=0;s<i.length;s+=1)i[s].l(a);a.forEach(fe),this.h()},h(){Ne(e,"class","nbt-list svelte-jf5zdg")},m(r,a){Le(r,e,a);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null)},p(r,a){if(a&1){t=Ii(r[0].value);let s;for(s=0;s<t.length;s+=1){const o=Su(r,t,s);i[s]?i[s].p(o,a):(i[s]=Tu(o),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=t.length}},i:P,o:P,d(r){r&&fe(e),io(i,r)}}}function dx(n){let e,t,i=Ii(n[0].value),r=[];for(let s=0;s<i.length;s+=1)r[s]=Au(Mu(n,i,s));const a=s=>tt(r[s],1,1,()=>{r[s]=null});return{c(){e=nt("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=it(s,"DIV",{class:!0});var o=vt(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(fe),this.h()},h(){Ne(e,"class","nbt-list svelte-jf5zdg")},m(s,o){Le(s,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,o){if(o&1){i=Ii(s[0].value);let c;for(c=0;c<i.length;c+=1){const l=Mu(s,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=Au(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(ui(),c=i.length;c<r.length;c+=1)a(c);di()}},i(s){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)tt(r[o]);t=!1},d(s){s&&fe(e),io(r,s)}}}function fx(n){let e,t,i=Ii(Object.entries(n[0].value)),r=[];for(let s=0;s<i.length;s+=1)r[s]=Ru(wu(n,i,s));const a=s=>tt(r[s],1,1,()=>{r[s]=null});return{c(){e=nt("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=it(s,"DIV",{class:!0});var o=vt(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(fe),this.h()},h(){Ne(e,"class","nbt-compound svelte-jf5zdg")},m(s,o){Le(s,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,o){if(o&1){i=Ii(Object.entries(s[0].value));let c;for(c=0;c<i.length;c+=1){const l=wu(s,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=Ru(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(ui(),c=i.length;c<r.length;c+=1)a(c);di()}},i(s){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)tt(r[o]);t=!1},d(s){s&&fe(e),io(r,s)}}}function hx(n){let e,t=n[0].value+"",i,r;return{c(){e=Nn('"'),i=Nn(t),r=Nn('"')},l(a){e=Dn(a,'"'),i=Dn(a,t),r=Dn(a,'"')},m(a,s){Le(a,e,s),Le(a,i,s),Le(a,r,s)},p(a,s){s&1&&t!==(t=a[0].value+"")&&or(i,t)},i:P,o:P,d(a){a&&(fe(e),fe(i),fe(r))}}}function px(n){let e=n[0].value+"",t;return{c(){t=Nn(e)},l(i){t=Dn(i,e)},m(i,r){Le(i,t,r)},p(i,r){r&1&&e!==(e=i[0].value+"")&&or(t,e)},i:P,o:P,d(i){i&&fe(t)}}}function Tu(n){let e,t=n[2]+"",i,r;return{c(){e=nt("div"),i=Nn(t),r=Mn(),this.h()},l(a){e=it(a,"DIV",{class:!0});var s=vt(e);i=Dn(s,t),r=wn(s),s.forEach(fe),this.h()},h(){Ne(e,"class","nbt-list-item svelte-jf5zdg")},m(a,s){Le(a,e,s),At(e,i),At(e,r)},p(a,s){s&1&&t!==(t=a[2]+"")&&or(i,t)},d(a){a&&fe(e)}}}function Au(n){let e,t,i,r;return t=new sc({props:{entry:n[2]}}),{c(){e=nt("div"),Hn(t.$$.fragment),i=Mn(),this.h()},l(a){e=it(a,"DIV",{class:!0});var s=vt(e);Gn(t.$$.fragment,s),i=wn(s),s.forEach(fe),this.h()},h(){Ne(e,"class","nbt-list-item svelte-jf5zdg")},m(a,s){Le(a,e,s),Vn(t,e,null),At(e,i),r=!0},p(a,s){const o={};s&1&&(o.entry=a[2]),t.$set(o)},i(a){r||(Xe(t.$$.fragment,a),r=!0)},o(a){tt(t.$$.fragment,a),r=!1},d(a){a&&fe(e),Wn(t)}}}function Ru(n){let e,t=n[1]+"",i,r,a,s,o;return a=new sc({props:{entry:n[2]}}),{c(){e=nt("div"),i=Nn(t),r=Nn(": "),Hn(a.$$.fragment),s=Mn(),this.h()},l(c){e=it(c,"DIV",{class:!0});var l=vt(e);i=Dn(l,t),r=Dn(l,": "),Gn(a.$$.fragment,l),s=wn(l),l.forEach(fe),this.h()},h(){Ne(e,"class","nbt-compound-kv svelte-jf5zdg")},m(c,l){Le(c,e,l),At(e,i),At(e,r),Vn(a,e,null),At(e,s),o=!0},p(c,l){(!o||l&1)&&t!==(t=c[1]+"")&&or(i,t);const u={};l&1&&(u.entry=c[2]),a.$set(u)},i(c){o||(Xe(a.$$.fragment,c),o=!0)},o(c){tt(a.$$.fragment,c),o=!1},d(c){c&&fe(e),Wn(a)}}}function mx(n){let e,t,i,r,a,s;const o=[px,hx,fx,dx,ux],c=[];function l(u,f){return u[0].tag==rn.Byte||u[0].tag==rn.Short||u[0].tag==rn.Int||u[0].tag==rn.Long||u[0].tag==rn.Float||u[0].tag==rn.Double?0:u[0].tag==rn.String?1:u[0].tag==rn.Compound?2:u[0].tag==rn.List?3:u[0].tag==rn.Byte_Array||u[0].tag==rn.Int_Array||u[0].tag==rn.Long_Array?4:-1}return~(r=l(n))&&(a=c[r]=o[r](n)),{c(){e=nt("div"),t=nt("span"),i=Mn(),a&&a.c(),this.h()},l(u){e=it(u,"DIV",{class:!0});var f=vt(e);t=it(f,"SPAN",{class:!0,style:!0}),vt(t).forEach(fe),i=wn(f),a&&a.l(f),f.forEach(fe),this.h()},h(){Ne(t,"class","nbt-icon svelte-jf5zdg"),Ec(t,"background-position-y","-"+n[0].tag+"rem"),Ne(e,"class","nbt-container svelte-jf5zdg")},m(u,f){Le(u,e,f),At(e,t),At(e,i),~r&&c[r].m(e,null),s=!0},p(u,[f]){(!s||f&1)&&Ec(t,"background-position-y","-"+u[0].tag+"rem");let d=r;r=l(u),r===d?~r&&c[r].p(u,f):(a&&(ui(),tt(c[d],1,1,()=>{c[d]=null}),di()),~r?(a=c[r],a?a.p(u,f):(a=c[r]=o[r](u),a.c()),Xe(a,1),a.m(e,null)):a=null)},i(u){s||(Xe(a),s=!0)},o(u){tt(a),s=!1},d(u){u&&fe(e),~r&&c[r].d()}}}function _x(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class sc extends Jt{constructor(e){super(),Qt(this,e,_x,mx,$t,{entry:0})}}function gx(n){let e;return{c(){e=nt("div")},l(t){e=it(t,"DIV",{}),vt(e).forEach(fe)},m(t,i){Le(t,e,i),n[2](e)},p:P,i:P,o:P,d(t){t&&fe(e),n[2](null)}}}function vx(n,e,t){let{entry:i}=e,r;ro(async()=>{const s=gh(La.ungzip(await i.buffer()));new sc({target:r,props:{entry:s}})});function a(s){Xl[s?"unshift":"push"](()=>{r=s,t(0,r)})}return n.$$set=s=>{"entry"in s&&t(1,i=s.entry)},[r,i,a]}class xx extends Jt{constructor(e){super(),Qt(this,e,vx,gx,$t,{entry:1})}}const bx={namespace:"minecraft.nbt",priority:2,isValid:async n=>{if(n.type!=ut.File||!n.name.includes(".dat"))return!1;const e=await n.blob();if(e.size==0)return!0;const t=await e.slice(0,2).arrayBuffer();return new DataView(t).getUint16(0,!1)==8075},createViewer:async(n,e)=>{if(n.type==ut.File)new xx({target:e,props:{entry:n}});else throw new Error("Tried to create nbt viewer with directory.")}};var ot;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const a={};for(const s of r)a[s]=s;return a},n.getValidEnumValues=r=>{const a=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),s={};for(const o of a)s[o]=r[o];return n.objectValues(s)},n.objectValues=r=>n.objectKeys(r).map(function(a){return r[a]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const a=[];for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&a.push(s);return a},n.find=(r,a)=>{for(const s of r)if(a(s))return s},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,a=" | "){return r.map(s=>typeof s=="string"?`'${s}'`:s).join(a)}n.joinValues=i,n.jsonStringifyReplacer=(r,a)=>typeof a=="bigint"?a.toString():a})(ot||(ot={}));var Cu;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Cu||(Cu={}));const pe=ot.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),$i=n=>{switch(typeof n){case"undefined":return pe.undefined;case"string":return pe.string;case"number":return isNaN(n)?pe.nan:pe.number;case"boolean":return pe.boolean;case"function":return pe.function;case"bigint":return pe.bigint;case"symbol":return pe.symbol;case"object":return Array.isArray(n)?pe.array:n===null?pe.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?pe.promise:typeof Map<"u"&&n instanceof Map?pe.map:typeof Set<"u"&&n instanceof Set?pe.set:typeof Date<"u"&&n instanceof Date?pe.date:pe.object;default:return pe.unknown}},re=ot.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Pn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(a){return a.message},i={_errors:[]},r=a=>{for(const s of a.issues)if(s.code==="invalid_union")s.unionErrors.map(r);else if(s.code==="invalid_return_type")r(s.returnTypeError);else if(s.code==="invalid_arguments")r(s.argumentsError);else if(s.path.length===0)i._errors.push(t(s));else{let o=i,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(s))):o[l]=o[l]||{_errors:[]},o=o[l],c++}}};return r(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,ot.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Pn.create=n=>new Pn(n);const zs=(n,e)=>{let t;switch(n.code){case re.invalid_type:n.received===pe.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case re.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,ot.jsonStringifyReplacer)}`;break;case re.unrecognized_keys:t=`Unrecognized key(s) in object: ${ot.joinValues(n.keys,", ")}`;break;case re.invalid_union:t="Invalid input";break;case re.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${ot.joinValues(n.options)}`;break;case re.invalid_enum_value:t=`Invalid enum value. Expected ${ot.joinValues(n.options)}, received '${n.received}'`;break;case re.invalid_arguments:t="Invalid function arguments";break;case re.invalid_return_type:t="Invalid function return type";break;case re.invalid_date:t="Invalid date";break;case re.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:ot.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case re.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case re.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case re.custom:t="Invalid input";break;case re.invalid_intersection_types:t="Intersection results could not be merged";break;case re.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case re.not_finite:t="Number must be finite";break;default:t=e.defaultError,ot.assertNever(n)}return{message:t}};let Ex=zs;function Ml(){return Ex}const wl=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,a=[...t,...r.path||[]],s={...r,path:a};let o="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)o=l(s,{data:e,defaultError:o}).message;return{...r,path:a,message:r.message||o}};function _e(n,e){const t=wl({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ml(),zs].filter(i=>!!i)});n.common.issues.push(t)}class Wt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return ze;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t)i.push({key:await r.key,value:await r.value});return Wt.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:a,value:s}=r;if(a.status==="aborted"||s.status==="aborted")return ze;a.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof s.value<"u"||r.alwaysSet)&&(i[a.value]=s.value)}return{status:e.value,value:i}}}const ze=Object.freeze({status:"aborted"}),yx=n=>({status:"dirty",value:n}),Kt=n=>({status:"valid",value:n}),Lu=n=>n.status==="aborted",Nu=n=>n.status==="dirty",Hs=n=>n.status==="valid",Tl=n=>typeof Promise<"u"&&n instanceof Promise;var Te;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Te||(Te={}));class Fn{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Du=(n,e)=>{if(Hs(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Pn(n.common.issues);return this._error=t,this._error}}};function Be(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(s,o)=>s.code!=="invalid_type"?{message:o.defaultError}:typeof o.data>"u"?{message:i??o.defaultError}:{message:t??o.defaultError},description:r}}class qe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return $i(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:$i(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Wt,ctx:{common:e.parent.common,data:e.data,parsedType:$i(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Tl(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$i(e)},a=this._parseSync({data:e,path:r.path,parent:r});return Du(r,a)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:$i(e)},r=this._parse({data:e,path:i.path,parent:i}),a=await(Tl(r)?r:Promise.resolve(r));return Du(i,a)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,a)=>{const s=e(r),o=()=>a.addIssue({code:re.custom,...i(r)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(o(),!1)):s?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new ci({schema:this,typeName:De.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Ri.create(this,this._def)}nullable(){return jr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kn.create(this,this._def)}promise(){return Ia.create(this,this._def)}or(e){return Ws.create([this,e],this._def)}and(e){return $s.create(this,e,this._def)}transform(e){return new ci({...Be(this._def),schema:this,typeName:De.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new qs({...Be(this._def),innerType:this,defaultValue:t,typeName:De.ZodDefault})}brand(){return new Ux({typeName:De.ZodBranded,type:this,...Be(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Dl({...Be(this._def),innerType:this,catchValue:t,typeName:De.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ho.create(this,e)}readonly(){return Ul.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Sx=/^c[^\s-]{8,}$/i,Mx=/^[a-z][a-z0-9]*$/,wx=/[0-9A-HJKMNP-TV-Z]{26}/,Tx=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ax=/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Rx=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Cx=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Lx=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Nx=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):n.precision===0?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Dx(n,e){return!!((e==="v4"||!e)&&Cx.test(n)||(e==="v6"||!e)&&Lx.test(n))}class ri extends qe{constructor(){super(...arguments),this._regex=(e,t,i)=>this.refinement(r=>e.test(r),{validation:t,code:re.invalid_string,...Te.errToObj(i)}),this.nonempty=e=>this.min(1,Te.errToObj(e)),this.trim=()=>new ri({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new ri({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new ri({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==pe.string){const a=this._getOrReturnCtx(e);return _e(a,{code:re.invalid_type,expected:pe.string,received:a.parsedType}),ze}const i=new Wt;let r;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const s=e.data.length>a.value,o=e.data.length<a.value;(s||o)&&(r=this._getOrReturnCtx(e,r),s?_e(r,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&_e(r,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Ax.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"email",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Rx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"emoji",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Tx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"uuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Sx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"cuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Mx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"cuid2",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")wx.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"ulid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),_e(r,{validation:"url",code:re.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"regex",code:re.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(r=this._getOrReturnCtx(e,r),_e(r,{code:re.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(r=this._getOrReturnCtx(e,r),_e(r,{code:re.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(r=this._getOrReturnCtx(e,r),_e(r,{code:re.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Nx(a).test(e.data)||(r=this._getOrReturnCtx(e,r),_e(r,{code:re.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Dx(e.data,a.version)||(r=this._getOrReturnCtx(e,r),_e(r,{validation:"ip",code:re.invalid_string,message:a.message}),i.dirty()):ot.assertNever(a);return{status:i.value,value:e.data}}_addCheck(e){return new ri({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Te.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Te.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Te.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Te.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Te.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Te.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Te.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Te.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...Te.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Te.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Te.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Te.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Te.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Te.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Te.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Te.errToObj(t)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ri.create=n=>{var e;return new ri({checks:[],typeName:De.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};function Ix(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,a=parseInt(n.toFixed(r).replace(".","")),s=parseInt(e.toFixed(r).replace(".",""));return a%s/Math.pow(10,r)}class $r extends qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==pe.number){const a=this._getOrReturnCtx(e);return _e(a,{code:re.invalid_type,expected:pe.number,received:a.parsedType}),ze}let i;const r=new Wt;for(const a of this._def.checks)a.kind==="int"?ot.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),_e(i,{code:re.invalid_type,expected:"integer",received:"float",message:a.message}),r.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):a.kind==="multipleOf"?Ix(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),_e(i,{code:re.not_finite,message:a.message}),r.dirty()):ot.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Te.toString(t))}setLimit(e,t,i,r){return new $r({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Te.toString(r)}]})}_addCheck(e){return new $r({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Te.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Te.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Te.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Te.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Te.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ot.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}$r.create=n=>new $r({checks:[],typeName:De.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class Xr extends qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==pe.bigint){const a=this._getOrReturnCtx(e);return _e(a,{code:re.invalid_type,expected:pe.bigint,received:a.parsedType}),ze}let i;const r=new Wt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),_e(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):ot.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Te.toString(t))}setLimit(e,t,i,r){return new Xr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Te.toString(r)}]})}_addCheck(e){return new Xr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Te.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Xr.create=n=>{var e;return new Xr({checks:[],typeName:De.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Be(n)})};class Al extends qe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==pe.boolean){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.boolean,received:i.parsedType}),ze}return Kt(e.data)}}Al.create=n=>new Al({typeName:De.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Be(n)});class Na extends qe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==pe.date){const a=this._getOrReturnCtx(e);return _e(a,{code:re.invalid_type,expected:pe.date,received:a.parsedType}),ze}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return _e(a,{code:re.invalid_date}),ze}const i=new Wt;let r;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:re.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(r=this._getOrReturnCtx(e,r),_e(r,{code:re.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):ot.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Na({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Te.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Te.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Na.create=n=>new Na({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:De.ZodDate,...Be(n)});class Rl extends qe{_parse(e){if(this._getType(e)!==pe.symbol){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.symbol,received:i.parsedType}),ze}return Kt(e.data)}}Rl.create=n=>new Rl({typeName:De.ZodSymbol,...Be(n)});class Gs extends qe{_parse(e){if(this._getType(e)!==pe.undefined){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.undefined,received:i.parsedType}),ze}return Kt(e.data)}}Gs.create=n=>new Gs({typeName:De.ZodUndefined,...Be(n)});class Vs extends qe{_parse(e){if(this._getType(e)!==pe.null){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.null,received:i.parsedType}),ze}return Kt(e.data)}}Vs.create=n=>new Vs({typeName:De.ZodNull,...Be(n)});class Da extends qe{constructor(){super(...arguments),this._any=!0}_parse(e){return Kt(e.data)}}Da.create=n=>new Da({typeName:De.ZodAny,...Be(n)});class Fr extends qe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Kt(e.data)}}Fr.create=n=>new Fr({typeName:De.ZodUnknown,...Be(n)});class Ui extends qe{_parse(e){const t=this._getOrReturnCtx(e);return _e(t,{code:re.invalid_type,expected:pe.never,received:t.parsedType}),ze}}Ui.create=n=>new Ui({typeName:De.ZodNever,...Be(n)});class Cl extends qe{_parse(e){if(this._getType(e)!==pe.undefined){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.void,received:i.parsedType}),ze}return Kt(e.data)}}Cl.create=n=>new Cl({typeName:De.ZodVoid,...Be(n)});class kn extends qe{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==pe.array)return _e(t,{code:re.invalid_type,expected:pe.array,received:t.parsedType}),ze;if(r.exactLength!==null){const s=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(s||o)&&(_e(t,{code:s?re.too_big:re.too_small,minimum:o?r.exactLength.value:void 0,maximum:s?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(_e(t,{code:re.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(_e(t,{code:re.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((s,o)=>r.type._parseAsync(new Fn(t,s,t.path,o)))).then(s=>Wt.mergeArray(i,s));const a=[...t.data].map((s,o)=>r.type._parseSync(new Fn(t,s,t.path,o)));return Wt.mergeArray(i,a)}get element(){return this._def.type}min(e,t){return new kn({...this._def,minLength:{value:e,message:Te.toString(t)}})}max(e,t){return new kn({...this._def,maxLength:{value:e,message:Te.toString(t)}})}length(e,t){return new kn({...this._def,exactLength:{value:e,message:Te.toString(t)}})}nonempty(e){return this.min(1,e)}}kn.create=(n,e)=>new kn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:De.ZodArray,...Be(e)});function Ur(n){if(n instanceof bt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=Ri.create(Ur(i))}return new bt({...n._def,shape:()=>e})}else return n instanceof kn?new kn({...n._def,type:Ur(n.element)}):n instanceof Ri?Ri.create(Ur(n.unwrap())):n instanceof jr?jr.create(Ur(n.unwrap())):n instanceof li?li.create(n.items.map(e=>Ur(e))):n}class bt extends qe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=ot.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==pe.object){const l=this._getOrReturnCtx(e);return _e(l,{code:re.invalid_type,expected:pe.object,received:l.parsedType}),ze}const{status:i,ctx:r}=this._processInputParams(e),{shape:a,keys:s}=this._getCached(),o=[];if(!(this._def.catchall instanceof Ui&&this._def.unknownKeys==="strip"))for(const l in r.data)s.includes(l)||o.push(l);const c=[];for(const l of s){const u=a[l],f=r.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Fn(r,f,r.path,l)),alwaysSet:l in r.data})}if(this._def.catchall instanceof Ui){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of o)c.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(l==="strict")o.length>0&&(_e(r,{code:re.unrecognized_keys,keys:o}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of o){const f=r.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Fn(r,f,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const f=await u.key;l.push({key:f,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>Wt.mergeObjectSync(i,l)):Wt.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return Te.errToObj,new bt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,a,s,o;const c=(s=(a=(r=this._def).errorMap)===null||a===void 0?void 0:a.call(r,t,i).message)!==null&&s!==void 0?s:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=Te.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new bt({...this._def,unknownKeys:"strip"})}passthrough(){return new bt({...this._def,unknownKeys:"passthrough"})}extend(e){return new bt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new bt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:De.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new bt({...this._def,catchall:e})}pick(e){const t={};return ot.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new bt({...this._def,shape:()=>t})}omit(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new bt({...this._def,shape:()=>t})}deepPartial(){return Ur(this)}partial(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new bt({...this._def,shape:()=>t})}required(e){const t={};return ot.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof Ri;)a=a._def.innerType;t[i]=a}}),new bt({...this._def,shape:()=>t})}keyof(){return vh(ot.objectKeys(this.shape))}}bt.create=(n,e)=>new bt({shape:()=>n,unknownKeys:"strip",catchall:Ui.create(),typeName:De.ZodObject,...Be(e)});bt.strictCreate=(n,e)=>new bt({shape:()=>n,unknownKeys:"strict",catchall:Ui.create(),typeName:De.ZodObject,...Be(e)});bt.lazycreate=(n,e)=>new bt({shape:n,unknownKeys:"strip",catchall:Ui.create(),typeName:De.ZodObject,...Be(e)});class Ws extends qe{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const s=a.map(o=>new Pn(o.ctx.common.issues));return _e(t,{code:re.invalid_union,unionErrors:s}),ze}if(t.common.async)return Promise.all(i.map(async a=>{const s={...t,common:{...t.common,issues:[]},parent:null};return{result:await a._parseAsync({data:t.data,path:t.path,parent:s}),ctx:s}})).then(r);{let a;const s=[];for(const c of i){const l={...t,common:{...t.common,issues:[]},parent:null},u=c._parseSync({data:t.data,path:t.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!a&&(a={result:u,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(a)return t.common.issues.push(...a.ctx.common.issues),a.result;const o=s.map(c=>new Pn(c));return _e(t,{code:re.invalid_union,unionErrors:o}),ze}}get options(){return this._def.options}}Ws.create=(n,e)=>new Ws({options:n,typeName:De.ZodUnion,...Be(e)});const Rs=n=>n instanceof Zs?Rs(n.schema):n instanceof ci?Rs(n.innerType()):n instanceof js?[n.value]:n instanceof rr?n.options:n instanceof Ys?Object.keys(n.enum):n instanceof qs?Rs(n._def.innerType):n instanceof Gs?[void 0]:n instanceof Vs?[null]:null;class oc extends qe{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==pe.object)return _e(t,{code:re.invalid_type,expected:pe.object,received:t.parsedType}),ze;const i=this.discriminator,r=t.data[i],a=this.optionsMap.get(r);return a?t.common.async?a._parseAsync({data:t.data,path:t.path,parent:t}):a._parseSync({data:t.data,path:t.path,parent:t}):(_e(t,{code:re.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ze)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const a of t){const s=Rs(a.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of s){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,a)}}return new oc({typeName:De.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...Be(i)})}}function Ll(n,e){const t=$i(n),i=$i(e);if(n===e)return{valid:!0,data:n};if(t===pe.object&&i===pe.object){const r=ot.objectKeys(e),a=ot.objectKeys(n).filter(o=>r.indexOf(o)!==-1),s={...n,...e};for(const o of a){const c=Ll(n[o],e[o]);if(!c.valid)return{valid:!1};s[o]=c.data}return{valid:!0,data:s}}else if(t===pe.array&&i===pe.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let a=0;a<n.length;a++){const s=n[a],o=e[a],c=Ll(s,o);if(!c.valid)return{valid:!1};r.push(c.data)}return{valid:!0,data:r}}else return t===pe.date&&i===pe.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class $s extends qe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(a,s)=>{if(Lu(a)||Lu(s))return ze;const o=Ll(a.value,s.value);return o.valid?((Nu(a)||Nu(s))&&t.dirty(),{status:t.value,value:o.data}):(_e(i,{code:re.invalid_intersection_types}),ze)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,s])=>r(a,s)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}$s.create=(n,e,t)=>new $s({left:n,right:e,typeName:De.ZodIntersection,...Be(t)});class li extends qe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.array)return _e(i,{code:re.invalid_type,expected:pe.array,received:i.parsedType}),ze;if(i.data.length<this._def.items.length)return _e(i,{code:re.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ze;!this._def.rest&&i.data.length>this._def.items.length&&(_e(i,{code:re.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const a=[...i.data].map((s,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new Fn(i,s,i.path,o)):null}).filter(s=>!!s);return i.common.async?Promise.all(a).then(s=>Wt.mergeArray(t,s)):Wt.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new li({...this._def,rest:e})}}li.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new li({items:n,typeName:De.ZodTuple,rest:null,...Be(e)})};class Xs extends qe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.object)return _e(i,{code:re.invalid_type,expected:pe.object,received:i.parsedType}),ze;const r=[],a=this._def.keyType,s=this._def.valueType;for(const o in i.data)r.push({key:a._parse(new Fn(i,o,i.path,o)),value:s._parse(new Fn(i,i.data[o],i.path,o))});return i.common.async?Wt.mergeObjectAsync(t,r):Wt.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof qe?new Xs({keyType:e,valueType:t,typeName:De.ZodRecord,...Be(i)}):new Xs({keyType:ri.create(),valueType:e,typeName:De.ZodRecord,...Be(t)})}}class Nl extends qe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.map)return _e(i,{code:re.invalid_type,expected:pe.map,received:i.parsedType}),ze;const r=this._def.keyType,a=this._def.valueType,s=[...i.data.entries()].map(([o,c],l)=>({key:r._parse(new Fn(i,o,i.path,[l,"key"])),value:a._parse(new Fn(i,c,i.path,[l,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return ze;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of s){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return ze;(l.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(l.value,u.value)}return{status:t.value,value:o}}}}Nl.create=(n,e,t)=>new Nl({valueType:e,keyType:n,typeName:De.ZodMap,...Be(t)});class Zr extends qe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==pe.set)return _e(i,{code:re.invalid_type,expected:pe.set,received:i.parsedType}),ze;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(_e(i,{code:re.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(_e(i,{code:re.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const a=this._def.valueType;function s(c){const l=new Set;for(const u of c){if(u.status==="aborted")return ze;u.status==="dirty"&&t.dirty(),l.add(u.value)}return{status:t.value,value:l}}const o=[...i.data.values()].map((c,l)=>a._parse(new Fn(i,c,i.path,l)));return i.common.async?Promise.all(o).then(c=>s(c)):s(o)}min(e,t){return new Zr({...this._def,minSize:{value:e,message:Te.toString(t)}})}max(e,t){return new Zr({...this._def,maxSize:{value:e,message:Te.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Zr.create=(n,e)=>new Zr({valueType:n,minSize:null,maxSize:null,typeName:De.ZodSet,...Be(e)});class ga extends qe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==pe.function)return _e(t,{code:re.invalid_type,expected:pe.function,received:t.parsedType}),ze;function i(o,c){return wl({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ml(),zs].filter(l=>!!l),issueData:{code:re.invalid_arguments,argumentsError:c}})}function r(o,c){return wl({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ml(),zs].filter(l=>!!l),issueData:{code:re.invalid_return_type,returnTypeError:c}})}const a={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof Ia){const o=this;return Kt(async function(...c){const l=new Pn([]),u=await o._def.args.parseAsync(c,a).catch(h=>{throw l.addIssue(i(c,h)),l}),f=await Reflect.apply(s,this,u);return await o._def.returns._def.type.parseAsync(f,a).catch(h=>{throw l.addIssue(r(f,h)),l})})}else{const o=this;return Kt(function(...c){const l=o._def.args.safeParse(c,a);if(!l.success)throw new Pn([i(c,l.error)]);const u=Reflect.apply(s,this,l.data),f=o._def.returns.safeParse(u,a);if(!f.success)throw new Pn([r(u,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ga({...this._def,args:li.create(e).rest(Fr.create())})}returns(e){return new ga({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new ga({args:e||li.create([]).rest(Fr.create()),returns:t||Fr.create(),typeName:De.ZodFunction,...Be(i)})}}class Zs extends qe{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Zs.create=(n,e)=>new Zs({getter:n,typeName:De.ZodLazy,...Be(e)});class js extends qe{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return _e(t,{received:t.data,code:re.invalid_literal,expected:this._def.value}),ze}return{status:"valid",value:e.data}}get value(){return this._def.value}}js.create=(n,e)=>new js({value:n,typeName:De.ZodLiteral,...Be(e)});function vh(n,e){return new rr({values:n,typeName:De.ZodEnum,...Be(e)})}class rr extends qe{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return _e(t,{expected:ot.joinValues(i),received:t.parsedType,code:re.invalid_type}),ze}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),i=this._def.values;return _e(t,{received:t.data,code:re.invalid_enum_value,options:i}),ze}return Kt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return rr.create(e)}exclude(e){return rr.create(this.options.filter(t=>!e.includes(t)))}}rr.create=vh;class Ys extends qe{_parse(e){const t=ot.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==pe.string&&i.parsedType!==pe.number){const r=ot.objectValues(t);return _e(i,{expected:ot.joinValues(r),received:i.parsedType,code:re.invalid_type}),ze}if(t.indexOf(e.data)===-1){const r=ot.objectValues(t);return _e(i,{received:i.data,code:re.invalid_enum_value,options:r}),ze}return Kt(e.data)}get enum(){return this._def.values}}Ys.create=(n,e)=>new Ys({values:n,typeName:De.ZodNativeEnum,...Be(e)});class Ia extends qe{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==pe.promise&&t.common.async===!1)return _e(t,{code:re.invalid_type,expected:pe.promise,received:t.parsedType}),ze;const i=t.parsedType===pe.promise?t.data:Promise.resolve(t.data);return Kt(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Ia.create=(n,e)=>new Ia({type:n,typeName:De.ZodPromise,...Be(e)});class ci extends qe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===De.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,a={addIssue:s=>{_e(i,s),s.fatal?t.abort():t.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),r.type==="preprocess"){const s=r.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(s).then(o=>this._def.schema._parseAsync({data:o,path:i.path,parent:i})):this._def.schema._parseSync({data:s,path:i.path,parent:i})}if(r.type==="refinement"){const s=o=>{const c=r.refinement(o,a);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ze:(o.status==="dirty"&&t.dirty(),s(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?ze:(o.status==="dirty"&&t.dirty(),s(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const s=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Hs(s))return s;const o=r.transform(s.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(s=>Hs(s)?Promise.resolve(r.transform(s.value,a)).then(o=>({status:t.value,value:o})):s);ot.assertNever(r)}}ci.create=(n,e,t)=>new ci({schema:n,typeName:De.ZodEffects,effect:e,...Be(t)});ci.createWithPreprocess=(n,e,t)=>new ci({schema:e,effect:{type:"preprocess",transform:n},typeName:De.ZodEffects,...Be(t)});class Ri extends qe{_parse(e){return this._getType(e)===pe.undefined?Kt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ri.create=(n,e)=>new Ri({innerType:n,typeName:De.ZodOptional,...Be(e)});class jr extends qe{_parse(e){return this._getType(e)===pe.null?Kt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}jr.create=(n,e)=>new jr({innerType:n,typeName:De.ZodNullable,...Be(e)});class qs extends qe{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===pe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}qs.create=(n,e)=>new qs({innerType:n,typeName:De.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Be(e)});class Dl extends qe{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Tl(r)?r.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Dl.create=(n,e)=>new Dl({innerType:n,typeName:De.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Be(e)});class Il extends qe{_parse(e){if(this._getType(e)!==pe.nan){const i=this._getOrReturnCtx(e);return _e(i,{code:re.invalid_type,expected:pe.nan,received:i.parsedType}),ze}return{status:"valid",value:e.data}}}Il.create=n=>new Il({typeName:De.ZodNaN,...Be(n)});class Ux extends qe{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class ho extends qe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ze:a.status==="dirty"?(t.dirty(),yx(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?ze:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new ho({in:e,out:t,typeName:De.ZodPipeline})}}class Ul extends qe{_parse(e){const t=this._def.innerType._parse(e);return Hs(t)&&(t.value=Object.freeze(t.value)),t}}Ul.create=(n,e)=>new Ul({innerType:n,typeName:De.ZodReadonly,...Be(e)});const Px=(n,e={},t)=>n?Da.create().superRefine((i,r)=>{var a,s;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(s=(a=o.fatal)!==null&&a!==void 0?a:t)!==null&&s!==void 0?s:!0,l=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...l,fatal:c})}}):Da.create();bt.lazycreate;var De;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(De||(De={}));const kx=(n,e={message:`Input not instance of ${n.name}`})=>Px(t=>t instanceof n,e),Ks=ri.create,pi=$r.create;Il.create;const Ox=Xr.create;Al.create;Na.create;Rl.create;Gs.create;Vs.create;const Fx=Da.create;Fr.create;Ui.create;Cl.create;const Po=kn.create,fa=bt.create;bt.strictCreate;Ws.create;oc.create;$s.create;li.create;const Bx=Xs.create;Nl.create;Zr.create;ga.create;Zs.create;const zx=js.create;rr.create;Ys.create;Ia.create;ci.create;const Pl=Ri.create;jr.create;ci.createWithPreprocess;ho.create;const Hx=fa({Name:Ks(),Properties:Pl(Bx(Ks(),Fx()))}),mr={Name:"minecraft:air"},Gx=fa({DataVersion:pi().int().min(0),xPos:pi().int(),yPos:pi().int(),zPos:pi().int(),Status:zx("full").or(Ks()),LastUpdate:Ox().min(0n),sections:Po(fa({Y:pi().int(),block_states:Pl(fa({palette:Po(Hx),data:Pl(kx(BigInt64Array))}))})),block_entities:Po(fa({x:pi().int(),y:pi().int(),z:pi().int(),id:Ks()}))});class Js{constructor(e){me(this,"data");me(this,"cx");me(this,"cz");me(this,"sections");this.data=Gx.parse(e),this.cx=this.data.xPos,this.cz=this.data.zPos,this.sections=new Array(this.data.sections.length);for(let t=0;t<this.data.sections.length;t++)this.sections[t]={y:this.data.sections[t].Y*16,type:"unset"}}deserializeSection(e){if(this.sections[e].type!="unset")return;const t=this.data.sections[e].block_states;if(t==null){this.sections[e]={y:this.sections[e].y,type:"empty"};return}const i=t.data;if(t.palette.length==0){this.sections[e]={y:this.sections[e].y,type:"fill",fill:mr};return}if(t.palette.length==1||i==null){this.sections[e]={y:this.sections[e].y,type:"fill",fill:t.palette[0]};return}const r=Math.max(Math.ceil(Math.log2(t.palette.length)),4),a=BigInt((1<<r)-1),s=new Array(4096);let o=0,c=0;for(let l=0;l<4096;l++){const u=Number(i[o]>>BigInt(c)&a);if(u>=t.palette.length)throw new Error(`Error while deserializing section, palette index {${u}} is outside of palette {${t.palette.length}}.`);s[l]=t.palette[u],c+=r,c>=64&&(c=0,o++)}this.sections[e]={y:this.sections[e].y,type:"blocks",blocks:s}}getSection(e){return this.sections[e]==null?null:(this.sections[e].type=="unset"&&this.deserializeSection(e),this.sections[e])}static getBlockSectionIndex(e,t,i){return(t&15)<<8|(i&15)<<4|e&15}getBlock(e,t,i){if(e<0||e>=16||i<0||i>=16)return mr;const r=this.sections.findIndex(s=>t>=s.y&&t<s.y+16),a=this.getSection(r);if(a==null)return mr;switch(a.type){case"unset":throw new Error("Deserialization failed.");case"empty":return mr;case"fill":return a.fill;case"blocks":{const s=Js.getBlockSectionIndex(e,t,i);return a.blocks[s]}}}forEachBlock(e){for(let t=0;t<this.sections.length;t++){const i=this.getSection(t);if(i==null)throw new Error("Failed to get section.");switch(i.type){case"unset":throw new Error("Deserialization failed.");case"empty":break;case"fill":{const r=i.fill;if(r.Name==mr.Name)break;for(let a=0;a<16;a++)for(let s=0;s<16;s++)for(let o=0;o<16;o++)e(a,i.y+s,o,r);break}case"blocks":{for(let r=0;r<16;r++)for(let a=0;a<16;a++)for(let s=0;s<16;s++){const o=Js.getBlockSectionIndex(r,a,s),c=i.blocks[o];c.Name!=mr.Name&&e(r,i.y+a,s,c)}break}}}}}const kl=32,is=kl*kl,Iu=4096;class Vx{constructor(e,t,i){me(this,"file");me(this,"rx");me(this,"rz");me(this,"offsets",new Uint32Array(is));me(this,"lengths",new Uint8Array(is));this.file=e,this.rx=t,this.rz=i}async init(){const e=new jt(await(await this.file.blob()).slice(0,4*is).arrayBuffer());e.endianness=jt.BIG_ENDIAN;for(let t=0;t<is;t++)this.offsets[t]=e.readNumber("Uint8")<<16|e.readNumber("Uint8")<<8|e.readNumber("Uint8"),this.lengths[t]=e.readNumber("Uint8")}async getChunk(e,t){const i=(e&31)+(t&31)*kl,r=this.offsets[i]*Iu,a=this.lengths[i]*Iu;if(r==0||a==0)return null;const s=new jt(await(await this.file.blob()).slice(r,r+a).arrayBuffer());s.endianness=jt.BIG_ENDIAN;const o=s.readNumber("Uint32");if(s.readNumber("Uint8")!=2)throw new Error("Invalid chunk compression method.");const l=Sl(gh(La.inflate(s.readBuffer(o-1))));return new Js(l)}}class Wx{constructor(e){me(this,"dir");this.dir=e}async getRegion(e,t){const i=await zn.getDeep(this.dir,`region/r.${e}.${t}.mca`);return i==null||i.type!=ut.File?null:new Vx(i,e,t)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="155",$x=0,Uu=1,Xx=2,xh=1,Zx=2,Qn=3,Pi=0,qt=1,ii=2,Ci=0,Br=1,Pu=2,ku=3,Ou=4,jx=5,Pr=100,Yx=101,qx=102,Fu=103,Bu=104,Kx=200,Jx=201,Qx=202,eb=203,bh=204,Eh=205,tb=206,nb=207,ib=208,rb=209,ab=210,sb=0,ob=1,lb=2,Ol=3,cb=4,ub=5,db=6,fb=7,yh=0,hb=1,pb=2,Li=0,mb=1,_b=2,gb=3,vb=4,xb=5,Sh=300,Yr=301,qr=302,Fl=303,Bl=304,po=306,zl=1e3,yn=1001,Hl=1002,Gt=1003,zu=1004,ko=1005,fn=1006,bb=1007,Ua=1008,Ni=1009,Eb=1010,yb=1011,cc=1012,Mh=1013,Si=1014,Mi=1015,Pa=1016,wh=1017,Th=1018,Ki=1020,Sb=1021,Sn=1023,Mb=1024,wb=1025,Ji=1026,Kr=1027,Tb=1028,Ah=1029,Ab=1030,Rh=1031,Ch=1033,Oo=33776,Fo=33777,Bo=33778,zo=33779,Hu=35840,Gu=35841,Vu=35842,Wu=35843,Rb=36196,$u=37492,Xu=37496,Zu=37808,ju=37809,Yu=37810,qu=37811,Ku=37812,Ju=37813,Qu=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,ad=37820,sd=37821,Ho=36492,Cb=36283,od=36284,ld=36285,cd=36286,Lh=3e3,Qi=3001,Lb=3200,Nb=3201,Nh=0,Db=1,er="",We="srgb",Bn="srgb-linear",Dh="display-p3",Go=7680,Ib=519,Ub=512,Pb=513,kb=514,Ob=515,Fb=516,Bb=517,zb=518,Hb=519,ud=35044,dd="300 es",Gl=1035,ai=2e3,Qs=2001;let dr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}};const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vo=Math.PI/180,Vl=180/Math.PI;function za(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function Gb(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function fd(n){return(n&n-1)===0&&n!==0}function Wl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,a,s,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l)}set(e,t,i,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],g=r[0],m=r[3],p=r[6],y=r[1],v=r[4],E=r[7],w=r[2],R=r[5],A=r[8];return a[0]=s*g+o*y+c*w,a[3]=s*m+o*v+c*R,a[6]=s*p+o*E+c*A,a[1]=l*g+u*y+f*w,a[4]=l*m+u*v+f*R,a[7]=l*p+u*E+f*A,a[2]=d*g+h*y+_*w,a[5]=d*m+h*v+_*R,a[8]=d*p+h*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-i*a*u+i*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,d=o*c-u*a,h=l*a-s*c,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*l-u*i)*g,e[2]=(o*i-r*s)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*a-o*t)*g,e[6]=h*g,e[7]=(i*c-l*t)*g,e[8]=(s*t-i*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ze;function Ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const hd={};function va(n){n in hd||(hd[n]=!0,console.warn(n))}function zr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vb=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wb=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function $b(n){return n.convertSRGBToLinear().applyMatrix3(Wb)}function Xb(n){return n.applyMatrix3(Vb).convertLinearToSRGB()}const Zb={[Bn]:n=>n,[We]:n=>n.convertSRGBToLinear(),[Dh]:$b},jb={[Bn]:n=>n,[We]:n=>n.convertLinearToSRGB(),[Dh]:Xb},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Bn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zb[e],r=jb[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let _r;class Uh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=eo("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=zr(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zr(t[i]/255)*255):t[i]=zr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yb=0;class Ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=za(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Zo(r[s].image)):a.push(Zo(r[s]))}else a=Zo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qb=0;class on extends dr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=yn,r=yn,a=fn,s=Ua,o=Sn,c=Ni,l=on.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=za(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qi?We:er),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Qi:Lh}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?We:er}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Sh;on.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(h+1)/2,w=(p+1)/2,R=(u+d)/4,A=(f+g)/4,z=(_+m)/4;return v>E&&v>w?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=R/i,a=A/i):E>w?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=R/r,a=z/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=A/a,r=z/a),this.set(i,r,a,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(d-u)/y,this.w=Math.acos((l+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kb extends dr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qi?We:er),this.texture=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ph(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Kb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kh extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jb extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=a[s+0],h=a[s+1],_=a[s+2],g=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f!==g||c!==d||l!==h||u!==_){let m=1-o;const p=c*d+l*h+u*_+f*g,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),R=Math.atan2(w,p*y);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const E=o*y;if(c=c*m+d*E,l=l*m+h*E,u=u*m+_*E,f=f*m+g*E,m===1-o){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=a[s],d=a[s+1],h=a[s+2],_=a[s+3];return e[t]=o*_+u*f+c*h-l*d,e[t+1]=c*_+u*d+l*f-o*h,e[t+2]=l*_+u*h+o*d-c*f,e[t+3]=u*_-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(a/2),d=c(i/2),h=c(r/2),_=c(a/2);switch(s){case"XYZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f+d*h*_;break;case"YZX":this._x=d*u*f+l*h*_,this._y=l*h*f+d*u*_,this._z=l*u*_-d*h*f,this._w=l*u*f-d*h*_;break;case"XZY":this._x=d*u*f-l*h*_,this._y=l*h*f-d*u*_,this._z=l*u*_+d*h*f,this._w=l*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(a-l)*h,this._z=(s-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(a-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(s-r)/h,this._x=(a+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-i*l,this._z=a*u+s*l+i*c-r*o,this._w=s*u-i*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=c*t+s*r-o*i,u=c*i+o*t-a*r,f=c*r+a*i-s*t,d=-a*t-s*i-o*r;return this.x=l*c+d*-a+u*-o-f*-s,this.y=u*c+d*-s+f*-a-l*-o,this.z=f*c+d*-o+l*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new j,pd=new Ha;class Ga{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox),gr.applyMatrix4(e.matrixWorld),this.union(gr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let s=0,o=a.count;s<o;s++)jn.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else r.boundingBox===null&&r.computeBoundingBox(),gr.copy(r.boundingBox),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),rs.subVectors(this.max,sa),vr.subVectors(e.a,sa),xr.subVectors(e.b,sa),br.subVectors(e.c,sa),mi.subVectors(xr,vr),_i.subVectors(br,xr),Bi.subVectors(vr,br);let t=[0,-mi.z,mi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Yo(t,vr,xr,br,rs)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,vr,xr,br,rs))?!1:(as.crossVectors(mi,_i),t=[as.x,as.y,as.z],Yo(t,vr,xr,br,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new j,new j,new j,new j,new j,new j,new j,new j],jn=new j,gr=new Ga,vr=new j,xr=new j,br=new j,mi=new j,_i=new j,Bi=new j,sa=new j,rs=new j,as=new j,zi=new j;function Yo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){zi.fromArray(n,a);const o=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Qb=new Ga,oa=new j,qo=new j;class uc{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qb.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(qo)),this.expandByPoint(oa.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new j,Ko=new j,ss=new j,gi=new j,Jo=new j,os=new j,Qo=new j;class eE{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ko.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Ko);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ss),o=gi.dot(this.direction),c=-gi.dot(ss),l=gi.lengthSq(),u=Math.abs(1-s*s);let f,d,h,_;if(u>0)if(f=s*c-o,d=s*o-c,_=a*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+s*d+2*o)+d*(s*f+d+2*c)+l}else d=a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*c)+l;else d=-a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-c),a),h=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-a,-c),a),h=d*(d+2*c)+l):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-c),a),h=-f*f+d*(d+2*c)+l);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ko).addScaledVector(ss,d),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,a){Jo.subVectors(t,e),os.subVectors(i,e),Qo.crossVectors(Jo,os);let s=this.direction.dot(Qo),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(os.crossVectors(gi,os));if(c<0)return null;const l=o*this.direction.dot(Jo.cross(gi));if(l<0||c+l>s)return null;const u=-o*gi.dot(Qo);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,a,s,o,c,l,u,f,d,h,_,g,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,l,u,f,d,h,_,g,m)}set(e,t,i,r,a,s,o,c,l,u,f,d,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),a=1/Er.setFromMatrixColumn(e,1).length(),s=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*u,h=s*f,_=o*u,g=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+_*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=_+h*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,_=l*u,g=l*f;t[0]=d+g*o,t[4]=_*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=h*o-_,t[6]=g+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,_=l*u,g=l*f;t[0]=d-g*o,t[4]=-s*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,h=s*f,_=o*u,g=o*f;t[0]=c*u,t[4]=_*l-h,t[8]=d*l+g,t[1]=c*f,t[5]=g*l+d,t[9]=h*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,h=s*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-d*f,t[8]=_*f+h,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=s*c,h=s*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+g,t[5]=s*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(i,tn),vi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(i,tn)),vi.normalize(),ls.crossVectors(tn,vi),r[0]=vi.x,r[4]=ls.x,r[8]=tn.x,r[1]=vi.y,r[5]=ls.y,r[9]=tn.y,r[2]=vi.z,r[6]=ls.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],v=i[7],E=i[11],w=i[15],R=r[0],A=r[4],z=r[8],x=r[12],S=r[1],O=r[5],ee=r[9],B=r[13],I=r[2],D=r[6],Z=r[10],C=r[14],N=r[3],W=r[7],Y=r[11],U=r[15];return a[0]=s*R+o*S+c*I+l*N,a[4]=s*A+o*O+c*D+l*W,a[8]=s*z+o*ee+c*Z+l*Y,a[12]=s*x+o*B+c*C+l*U,a[1]=u*R+f*S+d*I+h*N,a[5]=u*A+f*O+d*D+h*W,a[9]=u*z+f*ee+d*Z+h*Y,a[13]=u*x+f*B+d*C+h*U,a[2]=_*R+g*S+m*I+p*N,a[6]=_*A+g*O+m*D+p*W,a[10]=_*z+g*ee+m*Z+p*Y,a[14]=_*x+g*B+m*C+p*U,a[3]=y*R+v*S+E*I+w*N,a[7]=y*A+v*O+E*D+w*W,a[11]=y*z+v*ee+E*Z+w*Y,a[15]=y*x+v*B+E*C+w*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+a*c*f-r*l*f-a*o*d+i*l*d+r*o*h-i*c*h)+g*(+t*c*h-t*l*d+a*s*d-r*s*h+r*l*u-a*c*u)+m*(+t*l*f-t*o*h-a*s*f+i*s*h+a*o*u-i*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*s*f-i*s*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=f*m*l-g*d*l+g*c*h-o*m*h-f*c*p+o*d*p,v=_*d*l-u*m*l-_*c*h+s*m*h+u*c*p-s*d*p,E=u*g*l-_*f*l+_*o*h-s*g*h-u*o*p+s*f*p,w=_*f*c-u*g*c-_*o*d+s*g*d+u*o*m-s*f*m,R=t*y+i*v+r*E+a*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(g*d*a-f*m*a-g*r*h+i*m*h+f*r*p-i*d*p)*A,e[2]=(o*m*a-g*c*a+g*r*l-i*m*l-o*r*p+i*c*p)*A,e[3]=(f*c*a-o*d*a-f*r*l+i*d*l+o*r*h-i*c*h)*A,e[4]=v*A,e[5]=(u*m*a-_*d*a+_*r*h-t*m*h-u*r*p+t*d*p)*A,e[6]=(_*c*a-s*m*a-_*r*l+t*m*l+s*r*p-t*c*p)*A,e[7]=(s*d*a-u*c*a+u*r*l-t*d*l-s*r*h+t*c*h)*A,e[8]=E*A,e[9]=(_*f*a-u*g*a-_*i*h+t*g*h+u*i*p-t*f*p)*A,e[10]=(s*g*a-_*o*a+_*i*l-t*g*l-s*i*p+t*o*p)*A,e[11]=(u*o*a-s*f*a-u*i*l+t*f*l+s*i*h-t*o*h)*A,e[12]=w*A,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*A,e[14]=(_*o*r-s*g*r-_*i*c+t*g*c+s*i*m-t*o*m)*A,e[15]=(s*f*r-u*o*r+u*i*c-t*f*c-s*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,f=o+o,d=a*l,h=a*u,_=a*f,g=s*u,m=s*f,p=o*f,y=c*l,v=c*u,E=c*f,w=i.x,R=i.y,A=i.z;return r[0]=(1-(g+p))*w,r[1]=(h+E)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(h-E)*R,r[5]=(1-(d+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(m-y)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Er.set(r[0],r[1],r[2]).length();const s=Er.set(r[4],r[5],r[6]).length(),o=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const l=1/a,u=1/s,f=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=ai){const c=this.elements,l=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,_;if(o===ai)h=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Qs)h=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ai){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(s-a),d=(t+e)*l,h=(i+r)*u;let _,g;if(o===ai)_=(s+a)*f,g=-2*f;else if(o===Qs)_=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new j,vn=new Pt,tE=new j(0,0,0),nE=new j(1,1,1),vi=new j,ls=new j,tn=new j,md=new Pt,_d=new Ha;class Va{constructor(e=0,t=0,i=0,r=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const gd=new j,yr=new Ha,qn=new Pt,cs=new j,la=new j,rE=new j,aE=new Ha,vd=new j(1,0,0),xd=new j(0,1,0),bd=new j(0,0,1),sE={type:"added"},Ed={type:"removed"};class ln extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new j,t=new Va,i=new Ha,r=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(la,cs,this.up):qn.lookAt(cs,la,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(qn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ed)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,aE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),h=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new j(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new j,Kn=new j,el=new j,Jn=new j,Sr=new j,Mr=new j,yd=new j,tl=new j,nl=new j,il=new j;let us=!1;class En{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){xn.subVectors(r,t),Kn.subVectors(i,t),el.subVectors(e,t);const s=xn.dot(xn),o=xn.dot(Kn),c=xn.dot(el),l=Kn.dot(Kn),u=Kn.dot(el),f=s*l-o*o;if(f===0)return a.set(-2,-1,-1);const d=1/f,h=(l*c-o*u)*d,_=(s*u-o*c)*d;return a.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,r,a,s,o,c){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,i,r,a,s,o,c)}static getInterpolation(e,t,i,r,a,s,o,c){return this.getBarycoord(e,t,i,r,Jn),c.setScalar(0),c.addScaledVector(a,Jn.x),c.addScaledVector(s,Jn.y),c.addScaledVector(o,Jn.z),c}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),Kn.subVectors(e,t),xn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),xn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),En.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Sr.subVectors(r,i),Mr.subVectors(a,i),tl.subVectors(e,i);const c=Sr.dot(tl),l=Mr.dot(tl);if(c<=0&&l<=0)return t.copy(i);nl.subVectors(e,r);const u=Sr.dot(nl),f=Mr.dot(nl);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Sr,s);il.subVectors(e,a);const h=Sr.dot(il),_=Mr.dot(il);if(_>=0&&h<=_)return t.copy(a);const g=h*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Mr,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return yd.subVectors(a,r),o=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(yd,o);const p=1/(m+g+d);return s=g*p,o=d*p,t.copy(i).addScaledVector(Sr,s).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let oE=0;class Wa extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Br,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Eh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ib,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gn.workingColorSpace){return this.r=e,this.g=t,this.b=i,gn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gn.workingColorSpace){if(e=Gb(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=rl(s,a,e+1/3),this.g=rl(s,a,e),this.b=rl(s,a,e-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(e,t=We){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const i=Fh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return gn.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Zt(Ft.r*255,0,255))*65536+Math.round(Zt(Ft.g*255,0,255))*256+Math.round(Zt(Ft.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gn.workingColorSpace){gn.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,a=Ft.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case i:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-i)/f+2;break;case a:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gn.workingColorSpace){return gn.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=We){gn.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==We?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),bn.h+=e,bn.s+=t,bn.l+=i,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ds);const i=Wo(bn.h,ds.h,t),r=Wo(bn.s,ds.s,t),a=Wo(bn.l,ds.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new mt;mt.NAMES=Fh;class Bh extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,fs=new dt;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ud,this.updateRange={offset:0,count:-1},this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zh extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hh extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Di extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lE=0;const dn=new Pt,al=new ln,wr=new j,nn=new Ga,ca=new Ga,Nt=new j;class ki extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?Hh:zh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(nn.min,ca.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,ca.max),nn.expandByPoint(Nt)):(nn.expandByPoint(ca.min),nn.expandByPoint(ca.max))}nn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Nt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(wr.fromBufferAttribute(e,l),Nt.add(wr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<o;S++)l[S]=new j,u[S]=new j;const f=new j,d=new j,h=new j,_=new dt,g=new dt,m=new dt,p=new j,y=new j;function v(S,O,ee){f.fromArray(r,S*3),d.fromArray(r,O*3),h.fromArray(r,ee*3),_.fromArray(s,S*2),g.fromArray(s,O*2),m.fromArray(s,ee*2),d.sub(f),h.sub(f),g.sub(_),m.sub(_);const B=1/(g.x*m.y-m.x*g.y);isFinite(B)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(B),y.copy(h).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(B),l[S].add(p),l[O].add(p),l[ee].add(p),u[S].add(y),u[O].add(y),u[ee].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let S=0,O=E.length;S<O;++S){const ee=E[S],B=ee.start,I=ee.count;for(let D=B,Z=B+I;D<Z;D+=3)v(i[D+0],i[D+1],i[D+2])}const w=new j,R=new j,A=new j,z=new j;function x(S){A.fromArray(a,S*3),z.copy(A);const O=l[S];w.copy(O),w.sub(A.multiplyScalar(A.dot(O))).normalize(),R.crossVectors(z,O);const B=R.dot(u[S])<0?-1:1;c[S*4]=w.x,c[S*4+1]=w.y,c[S*4+2]=w.z,c[S*4+3]=B}for(let S=0,O=E.length;S<O;++S){const ee=E[S],B=ee.start,I=ee.count;for(let D=B,Z=B+I;D<Z;D+=3)x(i[D+0]),x(i[D+1]),x(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new j,a=new j,s=new j,o=new j,c=new j,l=new j,u=new j,f=new j;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?h=c[g]*o.data.stride+o.offset:h=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[h++]}return new On(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ki,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],f=a[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new Pt,Hi=new eE,hs=new uc,Md=new j,Tr=new j,Ar=new j,Rr=new j,sl=new j,ps=new j,ms=new dt,_s=new dt,gs=new dt,wd=new j,Td=new j,Ad=new j,vs=new j,xs=new j;class si extends ln{constructor(e=new ki,t=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ps.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],f=a[c];u!==0&&(sl.fromBufferAttribute(f,e),s?ps.addScaledVector(sl,u):ps.addScaledVector(sl.sub(t),u))}t.add(ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(a),Hi.copy(e.ray).recast(e.near),!(hs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(hs,Md)===null||Hi.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(Sd.copy(a).invert(),Hi.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=s[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,w=v;E<w;E+=3){const R=o.getX(E),A=o.getX(E+1),z=o.getX(E+2);r=bs(this,p,e,i,l,u,f,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=bs(this,s,e,i,l,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=s[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,w=v;E<w;E+=3){const R=E,A=E+1,z=E+2;r=bs(this,p,e,i,l,u,f,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=m,v=m+1,E=m+2;r=bs(this,s,e,i,l,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cE(n,e,t,i,r,a,s,o){let c;if(e.side===qt?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side===Pi,o),c===null)return null;xs.copy(o),xs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xs);return l<t.near||l>t.far?null:{distance:l,point:xs.clone(),object:n}}function bs(n,e,t,i,r,a,s,o,c,l){n.getVertexPosition(o,Tr),n.getVertexPosition(c,Ar),n.getVertexPosition(l,Rr);const u=cE(n,e,t,i,Tr,Ar,Rr,vs);if(u){r&&(ms.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,c),gs.fromBufferAttribute(r,l),u.uv=En.getInterpolation(vs,Tr,Ar,Rr,ms,_s,gs,new dt)),a&&(ms.fromBufferAttribute(a,o),_s.fromBufferAttribute(a,c),gs.fromBufferAttribute(a,l),u.uv1=En.getInterpolation(vs,Tr,Ar,Rr,ms,_s,gs,new dt),u.uv2=u.uv1),s&&(wd.fromBufferAttribute(s,o),Td.fromBufferAttribute(s,c),Ad.fromBufferAttribute(s,l),u.normal=En.getInterpolation(vs,Tr,Ar,Rr,wd,Td,Ad,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new j,materialIndex:0};En.getNormal(Tr,Ar,Rr,f.normal),u.face=f}return u}class $a extends ki{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,s,a,0),_("z","y","x",1,-1,i,t,-e,s,a,1),_("x","z","y",1,1,e,i,t,r,s,2),_("x","z","y",1,-1,e,i,-t,r,s,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Di(l,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(f,2));function _(g,m,p,y,v,E,w,R,A,z,x){const S=E/A,O=w/z,ee=E/2,B=w/2,I=R/2,D=A+1,Z=z+1;let C=0,N=0;const W=new j;for(let Y=0;Y<Z;Y++){const U=Y*O-B;for(let K=0;K<D;K++){const ae=K*S-ee;W[g]=ae*y,W[m]=U*v,W[p]=I,l.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),f.push(K/A),f.push(1-Y/z),C+=1}}for(let Y=0;Y<z;Y++)for(let U=0;U<A;U++){const K=d+U+D*Y,ae=d+U+D*(Y+1),ue=d+(U+1)+D*(Y+1),le=d+(U+1)+D*Y;c.push(K,ae,le),c.push(ae,ue,le),N+=6}o.addGroup(h,N,x),h+=N,d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Jr(n[t]);for(const r in i)e[r]=i[r]}return e}function uE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gh(n){return n.getRenderTarget()===null?n.outputColorSpace:Bn}const dE={clone:Jr,merge:Ht};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vh extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Vh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Lr=1;class pE extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(Cr,Lr,e,t);r.layers=this.layers,this.add(r);const a=new hn(Cr,Lr,e,t);a.layers=this.layers,this.add(a);const s=new hn(Cr,Lr,e,t);s.layers=this.layers,this.add(s);const o=new hn(Cr,Lr,e,t);o.layers=this.layers,this.add(o);const c=new hn(Cr,Lr,e,t);c.layers=this.layers,this.add(c);const l=new hn(Cr,Lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,s,o,c,l]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Wh extends on{constructor(e,t,i,r,a,s,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mE extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?We:er),this.texture=new Wh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $a(5,5,5),a=new sr({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Ci});a.uniforms.tEquirect.value=t;const s=new si(r,a),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=fn),new pE(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const ol=new j,_E=new j,gE=new Ze;class Vi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ol.subVectors(i,t).cross(_E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gE.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new uc,Es=new j;class $h{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,a=new Vi,s=new Vi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],_=r[9],g=r[10],m=r[11],p=r[12],y=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,d-l,m-h,E-p).normalize(),i[1].setComponents(c+a,d+l,m+h,E+p).normalize(),i[2].setComponents(c+s,d+u,m+_,E+y).normalize(),i[3].setComponents(c-s,d-u,m-_,E-y).normalize(),i[4].setComponents(c-o,d-f,m-g,E-v).normalize(),t===ai)i[5].setComponents(c+o,d+f,m+g,E+v).normalize();else if(t===Qs)i[5].setComponents(o,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function vE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,d=l.usage,h=n.createBuffer();n.bindBuffer(u,h),n.bufferData(u,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function a(l,u,f){const d=u.array,h=u.updateRange;n.bindBuffer(f,l),h.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(a(f.buffer,l,u),f.version=l.version)}return{get:s,remove:o,update:c}}class dc extends ki{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*d-s;for(let v=0;v<l;v++){const E=v*f-a;_.push(E,-y,0),g.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const v=y+l*p,E=y+l*(p+1),w=y+1+l*(p+1),R=y+1+l*p;h.push(v,E,R),h.push(E,w,R)}this.setIndex(h),this.setAttribute("position",new Di(_,3)),this.setAttribute("normal",new Di(g,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
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
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zE=`#define PI 3.141592653589793
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
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
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
}`,ay=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
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
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
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
#endif`,_y=`struct PhysicalMaterial {
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
}`,gy=`
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,My=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ay=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
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
#endif`,Dy=`#ifdef USE_MORPHTARGETS
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
#endif`,Iy=`#ifdef USE_MORPHTARGETS
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
#endif`,Uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,By=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,MS=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,CS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,PS=`#define MATCAP
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
}`,kS=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,VS=`#define TOON
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
}`,WS=`uniform float size;
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
}`,$S=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,ZS=`uniform vec3 color;
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
}`,jS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:xE,alphahash_pars_fragment:bE,alphamap_fragment:EE,alphamap_pars_fragment:yE,alphatest_fragment:SE,alphatest_pars_fragment:ME,aomap_fragment:wE,aomap_pars_fragment:TE,begin_vertex:AE,beginnormal_vertex:RE,bsdfs:CE,iridescence_fragment:LE,bumpmap_pars_fragment:NE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:UE,clipping_planes_vertex:PE,color_fragment:kE,color_pars_fragment:OE,color_pars_vertex:FE,color_vertex:BE,common:zE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:WE,emissivemap_fragment:$E,emissivemap_pars_fragment:XE,colorspace_fragment:ZE,colorspace_pars_fragment:jE,envmap_fragment:YE,envmap_common_pars_fragment:qE,envmap_pars_fragment:KE,envmap_pars_vertex:JE,envmap_physical_pars_fragment:uy,envmap_vertex:QE,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_fragment:ay,lightmap_pars_fragment:sy,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ly,lights_pars_begin:cy,lights_toon_fragment:dy,lights_toon_pars_fragment:fy,lights_phong_fragment:hy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:_y,lights_fragment_begin:gy,lights_fragment_maps:vy,lights_fragment_end:xy,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:Sy,map_fragment:My,map_pars_fragment:wy,map_particle_fragment:Ty,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Cy,morphcolor_vertex:Ly,morphnormal_vertex:Ny,morphtarget_pars_vertex:Dy,morphtarget_vertex:Iy,normal_fragment_begin:Uy,normal_fragment_maps:Py,normal_pars_fragment:ky,normal_pars_vertex:Oy,normal_vertex:Fy,normalmap_pars_fragment:By,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Vy,opaque_fragment:Wy,packing:$y,premultiplied_alpha_fragment:Xy,project_vertex:Zy,dithering_fragment:jy,dithering_pars_fragment:Yy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:Qy,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:aS,specularmap_fragment:sS,specularmap_pars_fragment:oS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:_S,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:xS,cube_vert:bS,cube_frag:ES,depth_vert:yS,depth_frag:SS,distanceRGBA_vert:MS,distanceRGBA_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:CS,meshbasic_vert:LS,meshbasic_frag:NS,meshlambert_vert:DS,meshlambert_frag:IS,meshmatcap_vert:US,meshmatcap_frag:PS,meshnormal_vert:kS,meshnormal_frag:OS,meshphong_vert:FS,meshphong_frag:BS,meshphysical_vert:zS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:WS,points_frag:$S,shadow_vert:XS,shadow_frag:ZS,sprite_vert:jS,sprite_frag:YS},ce={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Cn={basic:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([ce.common,ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([ce.lights,ce.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Cn.physical={uniforms:Ht([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ys={r:0,b:0,g:0};function qS(n,e,t,i,r,a,s){const o=new mt(0);let c=a===!0?0:1,l,u,f=null,d=0,h=null;function _(m,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),y=!0),n.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),y=!0;break}(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===po)?(u===void 0&&(u=new si(new $a(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Jr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==We,(f!==v||d!==v.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new si(new dc(2,2),new sr({name:"BackgroundMaterial",uniforms:Jr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==We,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(ys,Gh(n)),i.buffers.color.setClear(ys.r,ys.g,ys.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:_}}function KS(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},c=m(null);let l=c,u=!1;function f(I,D,Z,C,N){let W=!1;if(s){const Y=g(C,Z,D);l!==Y&&(l=Y,h(l.object)),W=p(I,C,Z,N),W&&y(I,C,Z,N)}else{const Y=D.wireframe===!0;(l.geometry!==C.id||l.program!==Z.id||l.wireframe!==Y)&&(l.geometry=C.id,l.program=Z.id,l.wireframe=Y,W=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,z(I,D,Z,C),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function h(I){return i.isWebGL2?n.bindVertexArray(I):a.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function g(I,D,Z){const C=Z.wireframe===!0;let N=o[I.id];N===void 0&&(N={},o[I.id]=N);let W=N[D.id];W===void 0&&(W={},N[D.id]=W);let Y=W[C];return Y===void 0&&(Y=m(d()),W[C]=Y),Y}function m(I){const D=[],Z=[],C=[];for(let N=0;N<r;N++)D[N]=0,Z[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:C,object:I,attributes:{},index:null}}function p(I,D,Z,C){const N=l.attributes,W=D.attributes;let Y=0;const U=Z.getAttributes();for(const K in U)if(U[K].location>=0){const ue=N[K];let le=W[K];if(le===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),ue===void 0||ue.attribute!==le||le&&ue.data!==le.data)return!0;Y++}return l.attributesNum!==Y||l.index!==C}function y(I,D,Z,C){const N={},W=D.attributes;let Y=0;const U=Z.getAttributes();for(const K in U)if(U[K].location>=0){let ue=W[K];ue===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const le={};le.attribute=ue,ue&&ue.data&&(le.data=ue.data),N[K]=le,Y++}l.attributes=N,l.attributesNum=Y,l.index=C}function v(){const I=l.newAttributes;for(let D=0,Z=I.length;D<Z;D++)I[D]=0}function E(I){w(I,0)}function w(I,D){const Z=l.newAttributes,C=l.enabledAttributes,N=l.attributeDivisors;Z[I]=1,C[I]===0&&(n.enableVertexAttribArray(I),C[I]=1),N[I]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),N[I]=D)}function R(){const I=l.newAttributes,D=l.enabledAttributes;for(let Z=0,C=D.length;Z<C;Z++)D[Z]!==I[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function A(I,D,Z,C,N,W,Y){Y===!0?n.vertexAttribIPointer(I,D,Z,N,W):n.vertexAttribPointer(I,D,Z,C,N,W)}function z(I,D,Z,C){if(i.isWebGL2===!1&&(I.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=C.attributes,W=Z.getAttributes(),Y=D.defaultAttributeValues;for(const U in W){const K=W[U];if(K.location>=0){let ae=N[U];if(ae===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){const ue=ae.normalized,le=ae.itemSize,xe=t.get(ae);if(xe===void 0)continue;const Ue=xe.buffer,Re=xe.type,rt=xe.bytesPerElement,kt=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||ae.gpuType===Mh);if(ae.isInterleavedBufferAttribute){const He=ae.data,G=He.stride,Lt=ae.offset;if(He.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)w(K.location+Ae,He.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)E(K.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Ae=0;Ae<K.locationSize;Ae++)A(K.location+Ae,le/K.locationSize,Re,ue,G*rt,(Lt+le/K.locationSize*Ae)*rt,kt)}else{if(ae.isInstancedBufferAttribute){for(let He=0;He<K.locationSize;He++)w(K.location+He,ae.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<K.locationSize;He++)E(K.location+He);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let He=0;He<K.locationSize;He++)A(K.location+He,le/K.locationSize,Re,ue,le*rt,le/K.locationSize*He*rt,kt)}}else if(Y!==void 0){const ue=Y[U];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(K.location,ue);break;case 3:n.vertexAttrib3fv(K.location,ue);break;case 4:n.vertexAttrib4fv(K.location,ue);break;default:n.vertexAttrib1fv(K.location,ue)}}}}R()}function x(){ee();for(const I in o){const D=o[I];for(const Z in D){const C=D[Z];for(const N in C)_(C[N].object),delete C[N];delete D[Z]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;const D=o[I.id];for(const Z in D){const C=D[Z];for(const N in C)_(C[N].object),delete C[N];delete D[Z]}delete o[I.id]}function O(I){for(const D in o){const Z=o[D];if(Z[I.id]===void 0)continue;const C=Z[I.id];for(const N in C)_(C[N].object),delete C[N];delete Z[I.id]}}function ee(){B(),u=!0,l!==c&&(l=c,h(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:B,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function JS(n,e,t,i){const r=i.isWebGL2;let a;function s(l){a=l}function o(l,u){n.drawArrays(a,l,u),t.update(u,a,1)}function c(l,u,f){if(f===0)return;let d,h;if(r)d=n,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](a,l,u,f),t.update(u,a,f)}this.setMode=s,this.render=o,this.renderInstances=c}function QS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=s||e.has("OES_texture_float"),w=v&&E,R=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:R}}function eM(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Vi,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||a&&!m)a?u(null):l();else{const y=a?0:i,v=y*4;let E=p.clippingState||null;c.value=E,E=u(_,d,v,h);for(let w=0;w!==v;++w)E[w]=t[w];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=h+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=h;v!==g;++v,E+=4)s.copy(f[v]).applyMatrix4(y,o),s.normal.toArray(m,E),m[E+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tM(n){let e=new WeakMap;function t(s,o){return o===Fl?s.mapping=Yr:o===Bl&&(s.mapping=qr),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Fl||o===Bl)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new mE(c.height/2);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class nM extends Vh{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,Rd=[.125,.215,.35,.446,.526,.582],Xi=20,ll=new nM,Cd=new mt;let cl=null;const Wi=(1+Math.sqrt(5))/2,Nr=1/Wi,Ld=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Wi,Nr),new j(0,Wi,-Nr),new j(Nr,0,Wi),new j(-Nr,0,Wi),new j(Wi,Nr,0),new j(-Wi,Nr,0)];class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){cl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Pa,format:Sn,colorSpace:Bn,depthBuffer:!1},r=Dd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iM(a)),this._blurMaterial=rM(a,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,i,r){const o=new hn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Cd),u.toneMapping=Li,u.autoClear=!1;const h=new Bh({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new si(new $a,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(Cd),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ss(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ld[(r-1)%Ld.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new si(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Xi-1),g=a/_,m=isFinite(a)?1+Math.floor(u*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let y=0;for(let A=0;A<Xi;++A){const z=A/g,x=Math.exp(-z*z/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const E=this._sizeLods[r],w=3*E*(r>v-kr?r-v+kr:0),R=4*(this._cubeSize-E);Ss(t,w,R,3*E,2*E),c.setRenderTarget(t),c.render(f,ll)}}function iM(n){const e=[],t=[],i=[];let r=n;const a=n-kr+1+Rd.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>n-kr?c=Rd[s-n+kr-1]:s===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*h),v=new Float32Array(m*_*h),E=new Float32Array(p*_*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,z=R>2?0:-1,x=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];y.set(x,g*_*R),v.set(d,m*_*R);const S=[R,R,R,R,R,R];E.set(S,p*_*R)}const w=new ki;w.setAttribute("position",new On(y,g)),w.setAttribute("uv",new On(v,m)),w.setAttribute("faceIndex",new On(E,p)),e.push(w),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dd(n,e,t){const i=new ar(n,e,t);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rM(n,e,t){const i=new Float32Array(Xi),r=new j(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Id(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ud(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function aM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fl||c===Bl,u=c===Yr||c===qr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Nd(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Nd(n));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oM(n,e,t,i){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",s),delete r[d.id];const h=a.get(d);h&&(e.remove(h),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const g=h[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let v=0,E=y.length;v<E;v+=3){const w=y[v+0],R=y[v+1],A=y[v+2];d.push(w,R,R,A,A,w)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const w=v+0,R=v+1,A=v+2;d.push(w,R,R,A,A,w)}}else return;const m=new(Ih(d)?Hh:zh)(d,1);m.version=g;const p=a.get(f);p&&e.remove(p),a.set(f,m)}function u(f){const d=a.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function lM(n,e,t,i){const r=i.isWebGL2;let a;function s(d){a=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,h){n.drawElements(a,h,o,d*c),t.update(h,a,1)}function f(d,h,_){if(_===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,h,o,d*c,_),t.update(h,a,_)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=f}function cM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uM(n,e){return n[0]-e[0]}function dM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fM(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new Ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=h!==void 0?h.length:0;let g=a.get(u);if(g===void 0||g.count!==_){let I=function(){ee.dispose(),a.delete(u),u.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let z=0;y===!0&&(z=1),v===!0&&(z=2),E===!0&&(z=3);let x=u.attributes.position.count*z,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const O=new Float32Array(x*S*4*_),ee=new kh(O,x,S,_);ee.type=Mi,ee.needsUpdate=!0;const B=z*4;for(let D=0;D<_;D++){const Z=w[D],C=R[D],N=A[D],W=x*S*4*D;for(let Y=0;Y<Z.count;Y++){const U=Y*B;y===!0&&(s.fromBufferAttribute(Z,Y),O[W+U+0]=s.x,O[W+U+1]=s.y,O[W+U+2]=s.z,O[W+U+3]=0),v===!0&&(s.fromBufferAttribute(C,Y),O[W+U+4]=s.x,O[W+U+5]=s.y,O[W+U+6]=s.z,O[W+U+7]=0),E===!0&&(s.fromBufferAttribute(N,Y),O[W+U+8]=s.x,O[W+U+9]=s.y,O[W+U+10]=s.z,O[W+U+11]=N.itemSize===4?s.w:1)}}g={count:_,texture:ee,size:new dt(x,S)},a.set(u,g),u.addEventListener("dispose",I)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==h){_=[];for(let v=0;v<h;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<h;v++){const E=_[v];E[0]=v,E[1]=d[v]}_.sort(dM);for(let v=0;v<8;v++)v<h&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(uM);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const E=o[v],w=E[0],R=E[1];w!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+v)!==g[w]&&u.setAttribute("morphTarget"+v,g[w]),m&&u.getAttribute("morphNormal"+v)!==m[w]&&u.setAttribute("morphNormal"+v,m[w]),r[v]=R,p+=R):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function hM(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const Zh=new on,jh=new kh,Yh=new Jb,qh=new Wh,Pd=[],kd=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function na(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Pd[r];if(a===void 0&&(a=new Float32Array(r),Pd[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mo(n,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),Ct(t,i)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),Ct(t,i)}}function bM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),Ct(t,i)}}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function wM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zh,r)}function LM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yh,r)}function NM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qh,r)}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jh,r)}function IM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return _M;case 35666:return gM;case 35674:return vM;case 35675:return xM;case 35676:return bM;case 5124:case 35670:return EM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return TM;case 36295:return AM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return DM}}function UM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){const t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function kM(n,e){const t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){const t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function FM(n,e){const t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BM(n,e){const t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zM(n,e){const t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HM(n,e){n.uniform1iv(this.addr,e)}function GM(n,e){n.uniform2iv(this.addr,e)}function VM(n,e){n.uniform3iv(this.addr,e)}function WM(n,e){n.uniform4iv(this.addr,e)}function $M(n,e){n.uniform1uiv(this.addr,e)}function XM(n,e){n.uniform2uiv(this.addr,e)}function ZM(n,e){n.uniform3uiv(this.addr,e)}function jM(n,e){n.uniform4uiv(this.addr,e)}function YM(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Zh,a[s])}function qM(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Yh,a[s])}function KM(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||qh,a[s])}function JM(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);Rt(i,a)||(n.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||jh,a[s])}function QM(n){switch(n){case 5126:return UM;case 35664:return PM;case 35665:return kM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return GM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return $M;case 36294:return XM;case 36295:return ZM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return JM}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=IM(t.type)}}class tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=QM(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function zd(n,e){n.seq.push(e),n.map[e.id]=e}function iw(n,e,t){const i=n.name,r=i.length;for(ul.lastIndex=0;;){const a=ul.exec(i),s=ul.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){zd(t,l===void 0?new ew(o,n,e):new tw(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new nw(o),zd(t,f)),t=f}}}class Cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);iw(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let rw=0;function aw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function sw(n){switch(n){case Bn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Gd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+aw(n.getShaderSource(e),s)}else return r}function ow(n,e){const t=sw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lw(n,e){let t;switch(e){case mb:t="Linear";break;case _b:t="Reinhard";break;case gb:t="OptimizedCineon";break;case vb:t="ACESFilmic";break;case xb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ha).join(`
`)}function uw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function ha(n){return n!==""}function Vd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(fw,pw)}const hw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pw(n,e){let t=Ve[e];if(t===void 0){const i=hw.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(n){return n.replace(mw,_w)}function _w(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case qr:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case hb:e="ENVMAP_BLENDING_MIX";break;case pb:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yw(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=gw(t),l=vw(t),u=xw(t),f=bw(t),d=Ew(t),h=t.isWebGL2?"":cw(t),_=uw(a),g=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[h,Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Li?lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),s=$l(s),s=Vd(s,t),s=Wd(s,t),o=$l(o),o=Vd(o,t),o=Wd(o,t),s=$d(s),o=$d(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+s,E=y+p+o,w=Hd(r,r.VERTEX_SHADER,v),R=Hd(r,r.FRAGMENT_SHADER,E);if(r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const x=r.getProgramInfoLog(g).trim(),S=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(R).trim();let ee=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,R);else{const I=Gd(r,w,"vertex"),D=Gd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+D)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(S===""||O==="")&&(B=!1);B&&(this.diagnostics={runnable:ee,programLog:x,vertexShader:{log:S,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(w),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new Cs(r,g)),A};let z;return this.getAttributes=function(){return z===void 0&&(z=dw(r,g)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let Sw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ww(e),t.set(e,i)),i}}class ww{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}}function Tw(n,e,t,i,r,a,s){const o=new Oh,c=new Mw,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,S,O,ee,B){const I=ee.fog,D=B.geometry,Z=x.isMeshStandardMaterial?ee.environment:null,C=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),N=C&&C.mapping===po?C.image.height:null,W=_[x.type];x.precision!==null&&(h=r.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,U=Y!==void 0?Y.length:0;let K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let ae,ue,le,xe;if(W){const pt=Cn[W];ae=pt.vertexShader,ue=pt.fragmentShader}else ae=x.vertexShader,ue=x.fragmentShader,c.update(x),le=c.getVertexShaderID(x),xe=c.getFragmentShaderID(x);const Ue=n.getRenderTarget(),Re=B.isInstancedMesh===!0,rt=!!x.map,kt=!!x.matcap,He=!!C,G=!!x.aoMap,Lt=!!x.lightMap,Ae=!!x.bumpMap,Oe=!!x.normalMap,Se=!!x.displacementMap,ht=!!x.emissiveMap,$e=!!x.metalnessMap,se=!!x.roughnessMap,lt=x.anisotropy>0,Je=x.clearcoat>0,Fe=x.iridescence>0,T=x.sheen>0,b=x.transmission>0,$=lt&&!!x.anisotropyMap,ie=Je&&!!x.clearcoatMap,k=Je&&!!x.clearcoatNormalMap,X=Je&&!!x.clearcoatRoughnessMap,ne=Fe&&!!x.iridescenceMap,te=Fe&&!!x.iridescenceThicknessMap,V=T&&!!x.sheenColorMap,ve=T&&!!x.sheenRoughnessMap,ye=!!x.specularMap,Me=!!x.specularColorMap,be=!!x.specularIntensityMap,Ee=b&&!!x.transmissionMap,je=b&&!!x.thicknessMap,ft=!!x.gradientMap,L=!!x.alphaMap,de=x.alphaTest>0,q=!!x.alphaHash,oe=!!x.extensions,he=!!D.attributes.uv1,at=!!D.attributes.uv2,gt=!!D.attributes.uv3;let St=Li;return x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(St=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:ue,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,instancing:Re,instancingColor:Re&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Bn,map:rt,matcap:kt,envMap:He,envMapMode:He&&C.mapping,envMapCubeUVHeight:N,aoMap:G,lightMap:Lt,bumpMap:Ae,normalMap:Oe,displacementMap:d&&Se,emissiveMap:ht,normalMapObjectSpace:Oe&&x.normalMapType===Db,normalMapTangentSpace:Oe&&x.normalMapType===Nh,metalnessMap:$e,roughnessMap:se,anisotropy:lt,anisotropyMap:$,clearcoat:Je,clearcoatMap:ie,clearcoatNormalMap:k,clearcoatRoughnessMap:X,iridescence:Fe,iridescenceMap:ne,iridescenceThicknessMap:te,sheen:T,sheenColorMap:V,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:Me,specularIntensityMap:be,transmission:b,transmissionMap:Ee,thicknessMap:je,gradientMap:ft,opaque:x.transparent===!1&&x.blending===Br,alphaMap:L,alphaTest:de,alphaHash:q,combine:x.combine,mapUv:rt&&g(x.map.channel),aoMapUv:G&&g(x.aoMap.channel),lightMapUv:Lt&&g(x.lightMap.channel),bumpMapUv:Ae&&g(x.bumpMap.channel),normalMapUv:Oe&&g(x.normalMap.channel),displacementMapUv:Se&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:$e&&g(x.metalnessMap.channel),roughnessMapUv:se&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:k&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:V&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:Me&&g(x.specularColorMap.channel),specularIntensityMapUv:be&&g(x.specularIntensityMap.channel),transmissionMapUv:Ee&&g(x.transmissionMap.channel),thicknessMapUv:je&&g(x.thicknessMap.channel),alphaMapUv:L&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Oe||lt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:at,vertexUv3s:gt,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(rt||L),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,useLegacyLights:n._useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)S.push(O),S.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(y(S,x),v(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),x.push(o.mask)}function E(x){const S=_[x.type];let O;if(S){const ee=Cn[S];O=dE.clone(ee.uniforms)}else O=x.uniforms;return O}function w(x,S){let O;for(let ee=0,B=l.length;ee<B;ee++){const I=l[ee];if(I.cacheKey===S){O=I,++O.usedTimes;break}}return O===void 0&&(O=new yw(n,S,x,a),l.push(O)),O}function R(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:z}}function Aw(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Rw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jd(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(f,d,h,_,g,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,d,h,_,g,m){const p=s(f,d,h,_,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,_,g,m){const p=s(f,d,h,_,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||Rw),i.length>1&&i.sort(d||Zd),r.length>1&&r.sort(d||Zd)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function Cw(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new jd,n.set(i,[s])):r>=a.length?(s=new jd,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function Nw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dw=0;function Iw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uw(n,e){const t=new Lw,i=Nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new j);const a=new j,s=new Pt,o=new Pt;function c(u,f){let d=0,h=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,p=0,y=0,v=0,E=0,w=0,R=0,A=0,z=0;u.sort(Iw);const x=f===!0?Math.PI:1;for(let O=0,ee=u.length;O<ee;O++){const B=u[O],I=B.color,D=B.intensity,Z=B.distance,C=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=I.r*D*x,h+=I.g*D*x,_+=I.b*D*x;else if(B.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(B.sh.coefficients[N],D);else if(B.isDirectionalLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*x),B.castShadow){const W=B.shadow,Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[g]=Y,r.directionalShadowMap[g]=C,r.directionalShadowMatrix[g]=B.shadow.matrix,E++}r.directional[g]=N,g++}else if(B.isSpotLight){const N=t.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(I).multiplyScalar(D*x),N.distance=Z,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,r.spot[p]=N;const W=B.shadow;if(B.map&&(r.spotLightMap[A]=B.map,A++,W.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[p]=W.matrix,B.castShadow){const Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=C,R++}p++}else if(B.isRectAreaLight){const N=t.get(B);N.color.copy(I).multiplyScalar(D),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=N,y++}else if(B.isPointLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity*x),N.distance=B.distance,N.decay=B.decay,B.castShadow){const W=B.shadow,Y=i.get(B);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=C,r.pointShadowMatrix[m]=B.shadow.matrix,w++}r.point[m]=N,m++}else if(B.isHemisphereLight){const N=t.get(B);N.skyColor.copy(B.color).multiplyScalar(D*x),N.groundColor.copy(B.groundColor).multiplyScalar(D*x),r.hemi[v]=N,v++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=_;const S=r.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==y||S.hemiLength!==v||S.numDirectionalShadows!==E||S.numPointShadows!==w||S.numSpotShadows!==R||S.numSpotMaps!==A)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=R+A-z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=z,S.directionalLength=g,S.pointLength=m,S.spotLength=p,S.rectAreaLength=y,S.hemiLength=v,S.numDirectionalShadows=E,S.numPointShadows=w,S.numSpotShadows=R,S.numSpotMaps=A,r.version=Dw++)}function l(u,f){let d=0,h=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),d++}else if(E.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const w=r.point[h];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:r}}function Yd(n,e){const t=new Uw(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:s,pushShadow:o}}function Pw(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let c;return o===void 0?(c=new Yd(n,e),t.set(a,[c])):s>=o.length?(c=new Yd(n,e),o.push(c)):c=o[s],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class kw extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function zw(n,e,t){let i=new $h;const r=new dt,a=new dt,s=new Ut,o=new kw({depthPacking:Nb}),c=new Ow,l={},u=t.maxTextureSize,f={[Pi]:qt,[qt]:Pi,[ii]:ii},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Fw,fragmentShader:Bw}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new ki;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new si(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(w,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const z=n.getRenderTarget(),x=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const ee=p!==Qn&&this.type===Qn,B=p===Qn&&this.type!==Qn;for(let I=0,D=w.length;I<D;I++){const Z=w[I],C=Z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const N=C.getFrameExtents();if(r.multiply(N),a.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/N.x),r.x=a.x*N.x,C.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/N.y),r.y=a.y*N.y,C.mapSize.y=a.y)),C.map===null||ee===!0||B===!0){const Y=this.type!==Qn?{minFilter:Gt,magFilter:Gt}:{};C.map!==null&&C.map.dispose(),C.map=new ar(r.x,r.y,Y),C.map.texture.name=Z.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const W=C.getViewportCount();for(let Y=0;Y<W;Y++){const U=C.getViewport(Y);s.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),O.viewport(s),C.updateMatrices(Z,Y),i=C.getFrustum(),E(R,A,C.camera,Z,this.type)}C.isPointLightShadow!==!0&&this.type===Qn&&y(C,A),C.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(z,x,S)};function y(w,R){const A=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ar(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,A,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,A,h,g,null)}function v(w,R,A,z){let x=null;const S=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)x=S;else if(x=A.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=x.uuid,ee=R.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let I=B[ee];I===void 0&&(I=x.clone(),B[ee]=I),x=I}if(x.visible=R.visible,x.wireframe=R.wireframe,z===Qn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=A}return x}function E(w,R,A,z,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Qn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),B=w.material;if(Array.isArray(B)){const I=ee.groups;for(let D=0,Z=I.length;D<Z;D++){const C=I[D],N=B[C.materialIndex];if(N&&N.visible){const W=v(w,N,z,x);n.renderBufferDirect(A,null,ee,W,w,C)}}}else if(B.visible){const I=v(w,B,z,x);n.renderBufferDirect(A,null,ee,I,w,null)}}const O=w.children;for(let ee=0,B=O.length;ee<B;ee++)E(O[ee],R,A,z,x)}}function Hw(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const de=new Ut;let q=null;const oe=new Ut(0,0,0,0);return{setMask:function(he){q!==he&&!L&&(n.colorMask(he,he,he,he),q=he)},setLocked:function(he){L=he},setClear:function(he,at,gt,St,hi){hi===!0&&(he*=St,at*=St,gt*=St),de.set(he,at,gt,St),oe.equals(de)===!1&&(n.clearColor(he,at,gt,St),oe.copy(de))},reset:function(){L=!1,q=null,oe.set(-1,0,0,0)}}}function a(){let L=!1,de=null,q=null,oe=null;return{setTest:function(he){he?Ue(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(he){de!==he&&!L&&(n.depthMask(he),de=he)},setFunc:function(he){if(q!==he){switch(he){case sb:n.depthFunc(n.NEVER);break;case ob:n.depthFunc(n.ALWAYS);break;case lb:n.depthFunc(n.LESS);break;case Ol:n.depthFunc(n.LEQUAL);break;case cb:n.depthFunc(n.EQUAL);break;case ub:n.depthFunc(n.GEQUAL);break;case db:n.depthFunc(n.GREATER);break;case fb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=he}},setLocked:function(he){L=he},setClear:function(he){oe!==he&&(n.clearDepth(he),oe=he)},reset:function(){L=!1,de=null,q=null,oe=null}}}function s(){let L=!1,de=null,q=null,oe=null,he=null,at=null,gt=null,St=null,hi=null;return{setTest:function(pt){L||(pt?Ue(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(pt){de!==pt&&!L&&(n.stencilMask(pt),de=pt)},setFunc:function(pt,An,Bt){(q!==pt||oe!==An||he!==Bt)&&(n.stencilFunc(pt,An,Bt),q=pt,oe=An,he=Bt)},setOp:function(pt,An,Bt){(at!==pt||gt!==An||St!==Bt)&&(n.stencilOp(pt,An,Bt),at=pt,gt=An,St=Bt)},setLocked:function(pt){L=pt},setClear:function(pt){hi!==pt&&(n.clearStencil(pt),hi=pt)},reset:function(){L=!1,de=null,q=null,oe=null,he=null,at=null,gt=null,St=null,hi=null}}}const o=new r,c=new a,l=new s,u=new WeakMap,f=new WeakMap;let d={},h={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,E=null,w=null,R=null,A=null,z=null,x=!1,S=null,O=null,ee=null,B=null,I=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,C=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(N)[1]),Z=C>=1):N.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Z=C>=2);let W=null,Y={};const U=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ae=new Ut().fromArray(U),ue=new Ut().fromArray(K);function le(L,de,q,oe){const he=new Uint8Array(4),at=n.createTexture();n.bindTexture(L,at),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<q;gt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(de+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return at}const xe={};xe[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(n.DEPTH_TEST),c.setFunc(Ol),Se(!1),ht(Uu),Ue(n.CULL_FACE),Ae(Ci);function Ue(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function rt(L,de){return h[L]!==de?(n.bindFramebuffer(L,de),h[L]=de,i&&(L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function kt(L,de){let q=g,oe=!1;if(L)if(q=_.get(de),q===void 0&&(q=[],_.set(de,q)),L.isWebGLMultipleRenderTargets){const he=L.texture;if(q.length!==he.length||q[0]!==n.COLOR_ATTACHMENT0){for(let at=0,gt=he.length;at<gt;at++)q[at]=n.COLOR_ATTACHMENT0+at;q.length=he.length,oe=!0}}else q[0]!==n.COLOR_ATTACHMENT0&&(q[0]=n.COLOR_ATTACHMENT0,oe=!0);else q[0]!==n.BACK&&(q[0]=n.BACK,oe=!0);oe&&(t.isWebGL2?n.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function He(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const G={[Pr]:n.FUNC_ADD,[Yx]:n.FUNC_SUBTRACT,[qx]:n.FUNC_REVERSE_SUBTRACT};if(i)G[Fu]=n.MIN,G[Bu]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(G[Fu]=L.MIN_EXT,G[Bu]=L.MAX_EXT)}const Lt={[Kx]:n.ZERO,[Jx]:n.ONE,[Qx]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[ab]:n.SRC_ALPHA_SATURATE,[ib]:n.DST_COLOR,[tb]:n.DST_ALPHA,[eb]:n.ONE_MINUS_SRC_COLOR,[Eh]:n.ONE_MINUS_SRC_ALPHA,[rb]:n.ONE_MINUS_DST_COLOR,[nb]:n.ONE_MINUS_DST_ALPHA};function Ae(L,de,q,oe,he,at,gt,St){if(L===Ci){p===!0&&(Re(n.BLEND),p=!1);return}if(p===!1&&(Ue(n.BLEND),p=!0),L!==jx){if(L!==y||St!==x){if((v!==Pr||R!==Pr)&&(n.blendEquation(n.FUNC_ADD),v=Pr,R=Pr),St)switch(L){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pu:n.blendFunc(n.ONE,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,A=null,z=null,y=L,x=St}return}he=he||de,at=at||q,gt=gt||oe,(de!==v||he!==R)&&(n.blendEquationSeparate(G[de],G[he]),v=de,R=he),(q!==E||oe!==w||at!==A||gt!==z)&&(n.blendFuncSeparate(Lt[q],Lt[oe],Lt[at],Lt[gt]),E=q,w=oe,A=at,z=gt),y=L,x=!1}function Oe(L,de){L.side===ii?Re(n.CULL_FACE):Ue(n.CULL_FACE);let q=L.side===qt;de&&(q=!q),Se(q),L.blending===Br&&L.transparent===!1?Ae(Ci):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const oe=L.stencilWrite;l.setTest(oe),oe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function ht(L){L!==$x?(Ue(n.CULL_FACE),L!==O&&(L===Uu?n.cullFace(n.BACK):L===Xx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),O=L}function $e(L){L!==ee&&(Z&&n.lineWidth(L),ee=L)}function se(L,de,q){L?(Ue(n.POLYGON_OFFSET_FILL),(B!==de||I!==q)&&(n.polygonOffset(de,q),B=de,I=q)):Re(n.POLYGON_OFFSET_FILL)}function lt(L){L?Ue(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Je(L){L===void 0&&(L=n.TEXTURE0+D-1),W!==L&&(n.activeTexture(L),W=L)}function Fe(L,de,q){q===void 0&&(W===null?q=n.TEXTURE0+D-1:q=W);let oe=Y[q];oe===void 0&&(oe={type:void 0,texture:void 0},Y[q]=oe),(oe.type!==L||oe.texture!==de)&&(W!==q&&(n.activeTexture(q),W=q),n.bindTexture(L,de||xe[L]),oe.type=L,oe.texture=de)}function T(){const L=Y[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function be(L){ue.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function Ee(L,de){let q=f.get(de);q===void 0&&(q=new WeakMap,f.set(de,q));let oe=q.get(L);oe===void 0&&(oe=n.getUniformBlockIndex(de,L.name),q.set(L,oe))}function je(L,de){const oe=f.get(de).get(L);u.get(de)!==oe&&(n.uniformBlockBinding(de,oe,L.__bindingPointIndex),u.set(de,oe))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},W=null,Y={},h={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,E=null,w=null,R=null,A=null,z=null,x=!1,S=null,O=null,ee=null,B=null,I=null,ae.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ue,disable:Re,bindFramebuffer:rt,drawBuffers:kt,useProgram:He,setBlending:Ae,setMaterial:Oe,setFlipSided:Se,setCullFace:ht,setLineWidth:$e,setPolygonOffset:se,setScissorTest:lt,activeTexture:Je,bindTexture:Fe,unbindTexture:T,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:ve,texImage3D:ye,updateUBOMapping:Ee,uniformBlockBinding:je,texStorage2D:te,texStorage3D:V,texSubImage2D:ie,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:ne,scissor:Me,viewport:be,reset:ft}}function Gw(n,e,t,i,r,a,s){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,b){return p?new OffscreenCanvas(T,b):eo("canvas")}function v(T,b,$,ie){let k=1;if((T.width>ie||T.height>ie)&&(k=ie/Math.max(T.width,T.height)),k<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const X=b?Wl:Math.floor,ne=X(k*T.width),te=X(k*T.height);g===void 0&&(g=y(ne,te));const V=$?y(ne,te):g;return V.width=ne,V.height=te,V.getContext("2d").drawImage(T,0,0,ne,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ne+"x"+te+")."),V}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return fd(T.width)&&fd(T.height)}function w(T){return o?!1:T.wrapS!==yn||T.wrapT!==yn||T.minFilter!==Gt&&T.minFilter!==fn}function R(T,b){return T.generateMipmaps&&b&&T.minFilter!==Gt&&T.minFilter!==fn}function A(T){n.generateMipmap(T)}function z(T,b,$,ie,k=!1){if(o===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=b;return b===n.RED&&($===n.FLOAT&&(X=n.R32F),$===n.HALF_FLOAT&&(X=n.R16F),$===n.UNSIGNED_BYTE&&(X=n.R8)),b===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(X=n.R8UI),$===n.UNSIGNED_SHORT&&(X=n.R16UI),$===n.UNSIGNED_INT&&(X=n.R32UI),$===n.BYTE&&(X=n.R8I),$===n.SHORT&&(X=n.R16I),$===n.INT&&(X=n.R32I)),b===n.RG&&($===n.FLOAT&&(X=n.RG32F),$===n.HALF_FLOAT&&(X=n.RG16F),$===n.UNSIGNED_BYTE&&(X=n.RG8)),b===n.RGBA&&($===n.FLOAT&&(X=n.RGBA32F),$===n.HALF_FLOAT&&(X=n.RGBA16F),$===n.UNSIGNED_BYTE&&(X=ie===We&&k===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)),(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(T,b,$){return R(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function S(T){return T===Gt||T===zu||T===ko?n.NEAREST:n.LINEAR}function O(T){const b=T.target;b.removeEventListener("dispose",O),B(b),b.isVideoTexture&&_.delete(b)}function ee(T){const b=T.target;b.removeEventListener("dispose",ee),D(b)}function B(T){const b=i.get(T);if(b.__webglInit===void 0)return;const $=T.source,ie=m.get($);if(ie){const k=ie[b.__cacheKey];k.usedTimes--,k.usedTimes===0&&I(T),Object.keys(ie).length===0&&m.delete($)}i.remove(T)}function I(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const $=T.source,ie=m.get($);delete ie[b.__cacheKey],s.memory.textures--}function D(T){const b=T.texture,$=i.get(T),ie=i.get(b);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray($.__webglFramebuffer[k]))for(let X=0;X<$.__webglFramebuffer[k].length;X++)n.deleteFramebuffer($.__webglFramebuffer[k][X]);else n.deleteFramebuffer($.__webglFramebuffer[k]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[k])}else{if(Array.isArray($.__webglFramebuffer))for(let k=0;k<$.__webglFramebuffer.length;k++)n.deleteFramebuffer($.__webglFramebuffer[k]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let k=0;k<$.__webglColorRenderbuffer.length;k++)$.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[k]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let k=0,X=b.length;k<X;k++){const ne=i.get(b[k]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),s.memory.textures--),i.remove(b[k])}i.remove(b),i.remove(T)}let Z=0;function C(){Z=0}function N(){const T=Z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Z+=1,T}function W(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function Y(T,b){const $=i.get(T);if(T.isVideoTexture&&Je(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt($,T,b);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+b)}function U(T,b){const $=i.get(T);if(T.version>0&&$.__version!==T.version){rt($,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+b)}function K(T,b){const $=i.get(T);if(T.version>0&&$.__version!==T.version){rt($,T,b);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+b)}function ae(T,b){const $=i.get(T);if(T.version>0&&$.__version!==T.version){kt($,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+b)}const ue={[zl]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},le={[Gt]:n.NEAREST,[zu]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[bb]:n.LINEAR_MIPMAP_NEAREST,[Ua]:n.LINEAR_MIPMAP_LINEAR},xe={[Ub]:n.NEVER,[Hb]:n.ALWAYS,[Pb]:n.LESS,[Ob]:n.LEQUAL,[kb]:n.EQUAL,[zb]:n.GEQUAL,[Fb]:n.GREATER,[Bb]:n.NOTEQUAL};function Ue(T,b,$){if($?(n.texParameteri(T,n.TEXTURE_WRAP_S,ue[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ue[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ue[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,le[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,le[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==yn||b.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,S(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Gt&&b.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Gt||b.minFilter!==ko&&b.minFilter!==Ua||b.type===Mi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Re(T,b){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",O));const ie=b.source;let k=m.get(ie);k===void 0&&(k={},m.set(ie,k));const X=W(b);if(X!==T.__cacheKey){k[X]===void 0&&(k[X]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,$=!0),k[X].usedTimes++;const ne=k[T.__cacheKey];ne!==void 0&&(k[T.__cacheKey].usedTimes--,ne.usedTimes===0&&I(b)),T.__cacheKey=X,T.__webglTexture=k[X].texture}return $}function rt(T,b,$){let ie=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=n.TEXTURE_3D);const k=Re(T,b),X=b.source;t.bindTexture(ie,T.__webglTexture,n.TEXTURE0+$);const ne=i.get(X);if(X.version!==ne.__version||k===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=w(b)&&E(b.image)===!1;let V=v(b.image,te,!1,u);V=Fe(b,V);const ve=E(V)||o,ye=a.convert(b.format,b.colorSpace);let Me=a.convert(b.type),be=z(b.internalFormat,ye,Me,b.colorSpace);Ue(ie,b,ve);let Ee;const je=b.mipmaps,ft=o&&b.isVideoTexture!==!0,L=ne.__version===void 0||k===!0,de=x(b,V,ve);if(b.isDepthTexture)be=n.DEPTH_COMPONENT,o?b.type===Mi?be=n.DEPTH_COMPONENT32F:b.type===Si?be=n.DEPTH_COMPONENT24:b.type===Ki?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:b.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ji&&be===n.DEPTH_COMPONENT&&b.type!==cc&&b.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Si,Me=a.convert(b.type)),b.format===Kr&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,b.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ki,Me=a.convert(b.type))),L&&(ft?t.texStorage2D(n.TEXTURE_2D,1,be,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,be,V.width,V.height,0,ye,Me,null));else if(b.isDataTexture)if(je.length>0&&ve){ft&&L&&t.texStorage2D(n.TEXTURE_2D,de,be,je[0].width,je[0].height);for(let q=0,oe=je.length;q<oe;q++)Ee=je[q],ft?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Me,Ee.data):t.texImage2D(n.TEXTURE_2D,q,be,Ee.width,Ee.height,0,ye,Me,Ee.data);b.generateMipmaps=!1}else ft?(L&&t.texStorage2D(n.TEXTURE_2D,de,be,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,ye,Me,V.data)):t.texImage2D(n.TEXTURE_2D,0,be,V.width,V.height,0,ye,Me,V.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ft&&L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,be,je[0].width,je[0].height,V.depth);for(let q=0,oe=je.length;q<oe;q++)Ee=je[q],b.format!==Sn?ye!==null?ft?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,V.depth,ye,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,be,Ee.width,Ee.height,V.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,V.depth,ye,Me,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,be,Ee.width,Ee.height,V.depth,0,ye,Me,Ee.data)}else{ft&&L&&t.texStorage2D(n.TEXTURE_2D,de,be,je[0].width,je[0].height);for(let q=0,oe=je.length;q<oe;q++)Ee=je[q],b.format!==Sn?ye!==null?ft?t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,q,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ee.width,Ee.height,ye,Me,Ee.data):t.texImage2D(n.TEXTURE_2D,q,be,Ee.width,Ee.height,0,ye,Me,Ee.data)}else if(b.isDataArrayTexture)ft?(L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,be,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ye,Me,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,V.width,V.height,V.depth,0,ye,Me,V.data);else if(b.isData3DTexture)ft?(L&&t.texStorage3D(n.TEXTURE_3D,de,be,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ye,Me,V.data)):t.texImage3D(n.TEXTURE_3D,0,be,V.width,V.height,V.depth,0,ye,Me,V.data);else if(b.isFramebufferTexture){if(L)if(ft)t.texStorage2D(n.TEXTURE_2D,de,be,V.width,V.height);else{let q=V.width,oe=V.height;for(let he=0;he<de;he++)t.texImage2D(n.TEXTURE_2D,he,be,q,oe,0,ye,Me,null),q>>=1,oe>>=1}}else if(je.length>0&&ve){ft&&L&&t.texStorage2D(n.TEXTURE_2D,de,be,je[0].width,je[0].height);for(let q=0,oe=je.length;q<oe;q++)Ee=je[q],ft?t.texSubImage2D(n.TEXTURE_2D,q,0,0,ye,Me,Ee):t.texImage2D(n.TEXTURE_2D,q,be,ye,Me,Ee);b.generateMipmaps=!1}else ft?(L&&t.texStorage2D(n.TEXTURE_2D,de,be,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Me,V)):t.texImage2D(n.TEXTURE_2D,0,be,ye,Me,V);R(b,ve)&&A(ie),ne.__version=X.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function kt(T,b,$){if(b.image.length!==6)return;const ie=Re(T,b),k=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+$);const X=i.get(k);if(k.version!==X.__version||ie===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,V=[];for(let q=0;q<6;q++)!ne&&!te?V[q]=v(b.image[q],!1,!0,l):V[q]=te?b.image[q].image:b.image[q],V[q]=Fe(b,V[q]);const ve=V[0],ye=E(ve)||o,Me=a.convert(b.format,b.colorSpace),be=a.convert(b.type),Ee=z(b.internalFormat,Me,be,b.colorSpace),je=o&&b.isVideoTexture!==!0,ft=X.__version===void 0||ie===!0;let L=x(b,ve,ye);Ue(n.TEXTURE_CUBE_MAP,b,ye);let de;if(ne){je&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Ee,ve.width,ve.height);for(let q=0;q<6;q++){de=V[q].mipmaps;for(let oe=0;oe<de.length;oe++){const he=de[oe];b.format!==Sn?Me!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,he.width,he.height,Me,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,0,0,he.width,he.height,Me,be,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe,Ee,he.width,he.height,0,Me,be,he.data)}}}else{de=b.mipmaps,je&&ft&&(de.length>0&&L++,t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Ee,V[0].width,V[0].height));for(let q=0;q<6;q++)if(te){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,V[q].width,V[q].height,Me,be,V[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ee,V[q].width,V[q].height,0,Me,be,V[q].data);for(let oe=0;oe<de.length;oe++){const at=de[oe].image[q].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,at.width,at.height,Me,be,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,Ee,at.width,at.height,0,Me,be,at.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,be,V[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ee,Me,be,V[q]);for(let oe=0;oe<de.length;oe++){const he=de[oe];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,0,0,Me,be,he.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,oe+1,Ee,Me,be,he.image[q])}}}R(b,ye)&&A(n.TEXTURE_CUBE_MAP),X.__version=k.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function He(T,b,$,ie,k,X){const ne=a.convert($.format,$.colorSpace),te=a.convert($.type),V=z($.internalFormat,ne,te,$.colorSpace);if(!i.get(b).__hasExternalTextures){const ye=Math.max(1,b.width>>X),Me=Math.max(1,b.height>>X);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,X,V,ye,Me,b.depth,0,ne,te,null):t.texImage2D(k,X,V,ye,Me,0,ne,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),lt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,k,i.get($).__webglTexture,0,se(b)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,k,i.get($).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(T,b,$){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if($||lt(b)){const k=b.depthTexture;k&&k.isDepthTexture&&(k.type===Mi?ie=n.DEPTH_COMPONENT32F:k.type===Si&&(ie=n.DEPTH_COMPONENT24));const X=se(b);lt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,ie,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,ie,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const ie=se(b);$&&lt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,b.width,b.height):lt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let k=0;k<ie.length;k++){const X=ie[k],ne=a.convert(X.format,X.colorSpace),te=a.convert(X.type),V=z(X.internalFormat,ne,te,X.colorSpace),ve=se(b);$&&lt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,V,b.width,b.height):lt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,V,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,V,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const ie=i.get(b.depthTexture).__webglTexture,k=se(b);if(b.depthTexture.format===Ji)lt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Kr)lt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const b=i.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Lt(b.__webglFramebuffer,T)}else if($){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=n.createRenderbuffer(),G(b.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),G(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,b,$){const ie=i.get(T);b!==void 0&&He(ie.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ae(T)}function Se(T){const b=T.texture,$=i.get(T),ie=i.get(b);T.addEventListener("dispose",ee),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=b.version,s.memory.textures++);const k=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,ne=E(T)||o;if(k){$.__webglFramebuffer=[];for(let te=0;te<6;te++)if(o&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[te]=[];for(let V=0;V<b.mipmaps.length;V++)$.__webglFramebuffer[te][V]=n.createFramebuffer()}else $.__webglFramebuffer[te]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)$.__webglFramebuffer[te]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const te=T.texture;for(let V=0,ve=te.length;V<ve;V++){const ye=i.get(te[V]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&lt(T)===!1){const te=X?b:[b];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<te.length;V++){const ve=te[V];$.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const ye=a.convert(ve.format,ve.colorSpace),Me=a.convert(ve.type),be=z(ve.internalFormat,ye,Me,ve.colorSpace,T.isXRRenderTarget===!0),Ee=se(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,$.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),G($.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,b,ne);for(let te=0;te<6;te++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let V=0;V<b.mipmaps.length;V++)He($.__webglFramebuffer[te][V],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,V);else He($.__webglFramebuffer[te],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);R(b,ne)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const te=T.texture;for(let V=0,ve=te.length;V<ve;V++){const ye=te[V],Me=i.get(ye);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),Ue(n.TEXTURE_2D,ye,ne),He($.__webglFramebuffer,T,ye,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),R(ye,ne)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ie.__webglTexture),Ue(te,b,ne),o&&b.mipmaps&&b.mipmaps.length>0)for(let V=0;V<b.mipmaps.length;V++)He($.__webglFramebuffer[V],T,b,n.COLOR_ATTACHMENT0,te,V);else He($.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,te,0);R(b,ne)&&A(te),t.unbindTexture()}T.depthBuffer&&Ae(T)}function ht(T){const b=E(T)||o,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,k=$.length;ie<k;ie++){const X=$[ie];if(R(X,b)){const ne=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(X).__webglTexture;t.bindTexture(ne,te),A(ne),t.unbindTexture()}}}function $e(T){if(o&&T.samples>0&&lt(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,ie=T.height;let k=n.COLOR_BUFFER_BIT;const X=[],ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(T),V=T.isWebGLMultipleRenderTargets===!0;if(V)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){X.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&X.push(ne);const ye=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(ye===!1&&(T.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[ve]),ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ne])),V){const Me=i.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,$,ie,0,0,$,ie,k,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const ye=i.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function se(T){return Math.min(f,T.samples)}function lt(T){const b=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(T){const b=s.render.frame;_.get(T)!==b&&(_.set(T,b),T.update())}function Fe(T,b){const $=T.colorSpace,ie=T.format,k=T.type;return T.isCompressedTexture===!0||T.format===Gl||$!==Bn&&$!==er&&($===We?o===!1?e.has("EXT_sRGB")===!0&&ie===Sn?(T.format=Gl,T.minFilter=fn,T.generateMipmaps=!1):b=Uh.sRGBToLinear(b):(ie!==Sn||k!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=Y,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=ae,this.rebindTextures=Oe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=He,this.useMultisampledRTT=lt}function Vw(n,e,t){const i=t.isWebGL2;function r(a,s=er){let o;if(a===Ni)return n.UNSIGNED_BYTE;if(a===wh)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Th)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Eb)return n.BYTE;if(a===yb)return n.SHORT;if(a===cc)return n.UNSIGNED_SHORT;if(a===Mh)return n.INT;if(a===Si)return n.UNSIGNED_INT;if(a===Mi)return n.FLOAT;if(a===Pa)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Sb)return n.ALPHA;if(a===Sn)return n.RGBA;if(a===Mb)return n.LUMINANCE;if(a===wb)return n.LUMINANCE_ALPHA;if(a===Ji)return n.DEPTH_COMPONENT;if(a===Kr)return n.DEPTH_STENCIL;if(a===Gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Tb)return n.RED;if(a===Ah)return n.RED_INTEGER;if(a===Ab)return n.RG;if(a===Rh)return n.RG_INTEGER;if(a===Ch)return n.RGBA_INTEGER;if(a===Oo||a===Fo||a===Bo||a===zo)if(s===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Hu||a===Gu||a===Vu||a===Wu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Hu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Gu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Vu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rb)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===$u||a===Xu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===$u)return s===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Xu)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Zu||a===ju||a===Yu||a===qu||a===Ku||a===Ju||a===Qu||a===ed||a===td||a===nd||a===id||a===rd||a===ad||a===sd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Zu)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ju)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yu)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qu)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ku)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ju)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qu)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ed)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===td)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===nd)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===id)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rd)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ad)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===sd)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Ho)return s===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Cb||a===od||a===ld||a===cd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ho)return o.COMPRESSED_RED_RGTC1_EXT;if(a===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ld)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===cd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ki?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class Ww extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ms extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $w={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;l.inputState.pinching&&d>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($w)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xw extends on{constructor(e,t,i,r,a,s,o,c,l,u){if(u=u!==void 0?u:Ji,u!==Ji&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ji&&(i=Si),i===void 0&&u===Kr&&(i=Ki),super(null,r,a,s,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zw extends dr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const y=[],v=[],E=new hn;E.layers.enable(1),E.viewport=new Ut;const w=new hn;w.layers.enable(2),w.viewport=new Ut;const R=[E,w],A=new Ww;A.layers.enable(1),A.layers.enable(2);let z=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let K=y[U];return K===void 0&&(K=new dl,y[U]=K),K.getTargetRaySpace()},this.getControllerGrip=function(U){let K=y[U];return K===void 0&&(K=new dl,y[U]=K),K.getGripSpace()},this.getHand=function(U){let K=y[U];return K===void 0&&(K=new dl,y[U]=K),K.getHandSpace()};function S(U){const K=v.indexOf(U.inputSource);if(K===-1)return;const ae=y[K];ae!==void 0&&(ae.update(U.inputSource,U.frame,l||s),ae.dispatchEvent({type:U.type,data:U.inputSource}))}function O(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",ee);for(let U=0;U<y.length;U++){const K=v[U];K!==null&&(v[U]=null,y[U].disconnect(K))}z=null,x=null,e.setRenderTarget(m),h=null,d=null,f=null,r=null,p=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",O),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),p=new ar(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Kr:Ji,ae=g.stencil?Ki:Si);const le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),p=new ar(d.textureWidth,d.textureHeight,{format:Sn,type:Ni,depthTexture:new Xw(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(U){for(let K=0;K<U.removed.length;K++){const ae=U.removed[K],ue=v.indexOf(ae);ue>=0&&(v[ue]=null,y[ue].disconnect(ae))}for(let K=0;K<U.added.length;K++){const ae=U.added[K];let ue=v.indexOf(ae);if(ue===-1){for(let xe=0;xe<y.length;xe++)if(xe>=v.length){v.push(ae),ue=xe;break}else if(v[xe]===null){v[xe]=ae,ue=xe;break}if(ue===-1)break}const le=y[ue];le&&le.connect(ae)}}const B=new j,I=new j;function D(U,K,ae){B.setFromMatrixPosition(K.matrixWorld),I.setFromMatrixPosition(ae.matrixWorld);const ue=B.distanceTo(I),le=K.projectionMatrix.elements,xe=ae.projectionMatrix.elements,Ue=le[14]/(le[10]-1),Re=le[14]/(le[10]+1),rt=(le[9]+1)/le[5],kt=(le[9]-1)/le[5],He=(le[8]-1)/le[0],G=(xe[8]+1)/xe[0],Lt=Ue*He,Ae=Ue*G,Oe=ue/(-He+G),Se=Oe*-He;K.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Se),U.translateZ(Oe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ht=Ue+Oe,$e=Re+Oe,se=Lt-Se,lt=Ae+(ue-Se),Je=rt*Re/$e*ht,Fe=kt*Re/$e*ht;U.projectionMatrix.makePerspective(se,lt,Je,Fe,ht,$e),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Z(U,K){K===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(K.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;A.near=w.near=E.near=U.near,A.far=w.far=E.far=U.far,(z!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,x=A.far);const K=U.parent,ae=A.cameras;Z(A,K);for(let ue=0;ue<ae.length;ue++)Z(ae[ue],K);ae.length===2?D(A,E,w):A.projectionMatrix.copy(E.projectionMatrix),C(U,A,K)};function C(U,K,ae){ae===null?U.matrix.copy(K.matrixWorld):(U.matrix.copy(ae.matrixWorld),U.matrix.invert(),U.matrix.multiply(K.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const ue=U.children;for(let le=0,xe=ue.length;le<xe;le++)ue[le].updateMatrixWorld(!0);U.projectionMatrix.copy(K.projectionMatrix),U.projectionMatrixInverse.copy(K.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Vl*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)};let N=null;function W(U,K){if(u=K.getViewerPose(l||s),_=K,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ue=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,ue=!0);for(let le=0;le<ae.length;le++){const xe=ae[le];let Ue=null;if(h!==null)Ue=h.getViewport(xe);else{const rt=f.getViewSubImage(d,xe);Ue=rt.viewport,le===0&&(e.setRenderTargetTextures(p,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(p))}let Re=R[le];Re===void 0&&(Re=new hn,Re.layers.enable(le),Re.viewport=new Ut,R[le]=Re),Re.matrix.fromArray(xe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(xe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),le===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ue===!0&&A.cameras.push(Re)}}for(let ae=0;ae<y.length;ae++){const ue=v[ae],le=y[ae];ue!==null&&le!==void 0&&le.update(ue,K,l||s)}N&&N(U,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Y=new Xh;Y.setAnimationLoop(W),this.setAnimationLoop=function(U){N=U},this.dispose=function(){}}}function jw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(a(m,p),_(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),g(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yw(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const E=v.program;i.uniformBlockBinding(y,E)}function l(y,v){let E=r[y.id];E===void 0&&(_(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(y,w);const R=e.render.frame;a[y.id]!==R&&(d(y),a[y.id]=R)}function u(y){const v=f();y.__bindingPointIndex=v;const E=n.createBuffer(),w=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],E=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=E.length;R<A;R++){const z=E[R];if(h(z,R,w)===!0){const x=z.__offset,S=Array.isArray(z.value)?z.value:[z.value];let O=0;for(let ee=0;ee<S.length;ee++){const B=S[ee],I=g(B);typeof B=="number"?(z.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,x+O,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=B.elements[0],z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=B.elements[0],z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=B.elements[0]):(B.toArray(z.__data,O),O+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,v,E){const w=y.value;if(E[v]===void 0){if(typeof w=="number")E[v]=w;else{const R=Array.isArray(w)?w:[w],A=[];for(let z=0;z<R.length;z++)A.push(R[z].clone());E[v]=A}return!0}else if(typeof w=="number"){if(E[v]!==w)return E[v]=w,!0}else{const R=Array.isArray(E[v])?E[v]:[E[v]],A=Array.isArray(w)?w:[w];for(let z=0;z<R.length;z++){const x=R[z];if(x.equals(A[z])===!1)return x.copy(A[z]),!0}}return!1}function _(y){const v=y.uniforms;let E=0;const w=16;let R=0;for(let A=0,z=v.length;A<z;A++){const x=v[A],S={boundary:0,storage:0},O=Array.isArray(x.value)?x.value:[x.value];for(let ee=0,B=O.length;ee<B;ee++){const I=O[ee],D=g(I);S.boundary+=D.boundary,S.storage+=D.storage}if(x.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,A>0){R=E%w;const ee=w-R;R!==0&&ee-S.boundary<0&&(E+=w-R,x.__offset=E)}E+=S.storage}return R=E%w,R>0&&(E+=w-R),y.__size=E,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:c,update:l,dispose:p}}function qw(){const n=eo("canvas");return n.style.display="block",n}class Kh{constructor(e={}){const{canvas:t=qw(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let E=!1,w=0,R=0,A=null,z=-1,x=null;const S=new Ut,O=new Ut;let ee=null;const B=new mt(0);let I=0,D=t.width,Z=t.height,C=1,N=null,W=null;const Y=new Ut(0,0,D,Z),U=new Ut(0,0,D,Z);let K=!1;const ae=new $h;let ue=!1,le=!1,xe=null;const Ue=new Pt,Re=new dt,rt=new j,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?C:1}let G=i;function Lt(M,H){for(let Q=0;Q<M.length;Q++){const F=M[Q],J=t.getContext(F,H);if(J!==null)return J}return null}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",oe,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),G=Lt(H,M),G===null)throw Lt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,Oe,Se,ht,$e,se,lt,Je,Fe,T,b,$,ie,k,X,ne,te,V,ve,ye,Me,be,Ee,je;function ft(){Ae=new sM(G),Oe=new QS(G,Ae,e),Ae.init(Oe),be=new Vw(G,Ae,Oe),Se=new Hw(G,Ae,Oe),ht=new cM(G),$e=new Aw,se=new Gw(G,Ae,Se,$e,Oe,be,ht),lt=new tM(v),Je=new aM(v),Fe=new vE(G,Oe),Ee=new KS(G,Ae,Fe,Oe),T=new oM(G,Fe,ht,Ee),b=new hM(G,T,Fe,ht),ve=new fM(G,Oe,se),ne=new eM($e),$=new Tw(v,lt,Je,Ae,Oe,Ee,ne),ie=new jw(v,$e),k=new Cw,X=new Pw(Ae,Oe),V=new qS(v,lt,Je,Se,b,d,c),te=new zw(v,b,Oe),je=new Yw(G,ht,Oe,Se),ye=new JS(G,Ae,ht,Oe),Me=new lM(G,Ae,ht,Oe),ht.programs=$.programs,v.capabilities=Oe,v.extensions=Ae,v.properties=$e,v.renderLists=k,v.shadowMap=te,v.state=Se,v.info=ht}ft();const L=new Zw(v,G);this.xr=L,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(M){M!==void 0&&(C=M,this.setSize(D,Z,!1))},this.getSize=function(M){return M.set(D,Z)},this.setSize=function(M,H,Q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,Z=H,t.width=Math.floor(M*C),t.height=Math.floor(H*C),Q===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(D*C,Z*C).floor()},this.setDrawingBufferSize=function(M,H,Q){D=M,Z=H,C=Q,t.width=Math.floor(M*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,H,Q,F){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,H,Q,F),Se.viewport(S.copy(Y).multiplyScalar(C).floor())},this.getScissor=function(M){return M.copy(U)},this.setScissor=function(M,H,Q,F){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,H,Q,F),Se.scissor(O.copy(U).multiplyScalar(C).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(M){Se.setScissorTest(K=M)},this.setOpaqueSort=function(M){N=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,H=!0,Q=!0){let F=0;if(M){let J=!1;if(A!==null){const ge=A.texture.format;J=ge===Ch||ge===Rh||ge===Ah}if(J){const ge=A.texture.type,Ce=ge===Ni||ge===Si||ge===cc||ge===Ki||ge===wh||ge===Th,Pe=V.getClearColor(),ke=V.getClearAlpha(),Ye=Pe.r,Ie=Pe.g,Ge=Pe.b;Ce?(h[0]=Ye,h[1]=Ie,h[2]=Ge,h[3]=ke,G.clearBufferuiv(G.COLOR,0,h)):(_[0]=Ye,_[1]=Ie,_[2]=Ge,_[3]=ke,G.clearBufferiv(G.COLOR,0,_))}else F|=G.COLOR_BUFFER_BIT}H&&(F|=G.DEPTH_BUFFER_BIT),Q&&(F|=G.STENCIL_BUFFER_BIT),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),k.dispose(),X.dispose(),$e.dispose(),lt.dispose(),Je.dispose(),b.dispose(),Ee.dispose(),je.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",pt),L.removeEventListener("sessionend",An),xe&&(xe.dispose(),xe=null),Bt.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=ht.autoReset,H=te.enabled,Q=te.autoUpdate,F=te.needsUpdate,J=te.type;ft(),ht.autoReset=M,te.enabled=H,te.autoUpdate=Q,te.needsUpdate=F,te.type=J}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const H=M.target;H.removeEventListener("dispose",he),at(H)}function at(M){gt(M),$e.remove(M)}function gt(M){const H=$e.get(M).programs;H!==void 0&&(H.forEach(function(Q){$.releaseProgram(Q)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,Q,F,J,ge){H===null&&(H=kt);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Pe=np(M,H,Q,F,J);Se.setMaterial(F,Ce);let ke=Q.index,Ye=1;if(F.wireframe===!0){if(ke=T.getWireframeAttribute(Q),ke===void 0)return;Ye=2}const Ie=Q.drawRange,Ge=Q.attributes.position;let xt=Ie.start*Ye,yt=(Ie.start+Ie.count)*Ye;ge!==null&&(xt=Math.max(xt,ge.start*Ye),yt=Math.min(yt,(ge.start+ge.count)*Ye)),ke!==null?(xt=Math.max(xt,0),yt=Math.min(yt,ke.count)):Ge!=null&&(xt=Math.max(xt,0),yt=Math.min(yt,Ge.count));const un=yt-xt;if(un<0||un===1/0)return;Ee.setup(J,F,Pe,Q,ke);let $n,Mt=ye;if(ke!==null&&($n=Fe.get(ke),Mt=Me,Mt.setIndex($n)),J.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*He()),Mt.setMode(G.LINES)):Mt.setMode(G.TRIANGLES);else if(J.isLine){let Ke=F.linewidth;Ke===void 0&&(Ke=1),Se.setLineWidth(Ke*He()),J.isLineSegments?Mt.setMode(G.LINES):J.isLineLoop?Mt.setMode(G.LINE_LOOP):Mt.setMode(G.LINE_STRIP)}else J.isPoints?Mt.setMode(G.POINTS):J.isSprite&&Mt.setMode(G.TRIANGLES);if(J.isInstancedMesh)Mt.renderInstances(xt,un,J.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_o=Math.min(Q.instanceCount,Ke);Mt.renderInstances(xt,un,_o)}else Mt.render(xt,un)},this.compile=function(M,H){function Q(F,J,ge){F.transparent===!0&&F.side===ii&&F.forceSinglePass===!1?(F.side=qt,F.needsUpdate=!0,Za(F,J,ge),F.side=Pi,F.needsUpdate=!0,Za(F,J,ge),F.side=ii):Za(F,J,ge)}m=X.get(M),m.init(),y.push(m),M.traverseVisible(function(F){F.isLight&&F.layers.test(H.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights),M.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let ge=0;ge<J.length;ge++){const Ce=J[ge];Q(Ce,M,F)}else Q(J,M,F)}),y.pop(),m=null};let St=null;function hi(M){St&&St(M)}function pt(){Bt.stop()}function An(){Bt.start()}const Bt=new Xh;Bt.setAnimationLoop(hi),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(M){St=M,L.setAnimationLoop(M),M===null?Bt.stop():Bt.start()},L.addEventListener("sessionstart",pt),L.addEventListener("sessionend",An),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,H,A),m=X.get(M,y.length),m.init(),y.push(m),Ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(Ue),le=this.localClippingEnabled,ue=ne.init(this.clippingPlanes,le),g=k.get(M,p.length),g.init(),p.push(g),pc(M,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,W),this.info.render.frame++,ue===!0&&ne.beginShadows();const Q=m.state.shadowsArray;if(te.render(Q,M,H),ue===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(g,M),m.setupLights(v._useLegacyLights),H.isArrayCamera){const F=H.cameras;for(let J=0,ge=F.length;J<ge;J++){const Ce=F[J];mc(g,M,Ce,Ce.viewport)}}else mc(g,M,H);A!==null&&(se.updateMultisampleRenderTarget(A),se.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,H),Ee.resetDefaultState(),z=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function pc(M,H,Q,F){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ae.intersectsSprite(M)){F&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ue);const Ce=b.update(M),Pe=M.material;Pe.visible&&g.push(M,Ce,Pe,Q,rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ae.intersectsObject(M))){const Ce=b.update(M),Pe=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),rt.copy(Ce.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(Ue)),Array.isArray(Pe)){const ke=Ce.groups;for(let Ye=0,Ie=ke.length;Ye<Ie;Ye++){const Ge=ke[Ye],xt=Pe[Ge.materialIndex];xt&&xt.visible&&g.push(M,Ce,xt,Q,rt.z,Ge)}}else Pe.visible&&g.push(M,Ce,Pe,Q,rt.z,null)}}const ge=M.children;for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++)pc(ge[Ce],H,Q,F)}function mc(M,H,Q,F){const J=M.opaque,ge=M.transmissive,Ce=M.transparent;m.setupLightsView(Q),ue===!0&&ne.setGlobalState(v.clippingPlanes,Q),ge.length>0&&tp(J,ge,H,Q),F&&Se.viewport(S.copy(F)),J.length>0&&Xa(J,H,Q),ge.length>0&&Xa(ge,H,Q),Ce.length>0&&Xa(Ce,H,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function tp(M,H,Q,F){const J=Oe.isWebGL2;xe===null&&(xe=new ar(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Pa:Ni,minFilter:Ua,samples:J?4:0})),v.getDrawingBufferSize(Re),J?xe.setSize(Re.x,Re.y):xe.setSize(Wl(Re.x),Wl(Re.y));const ge=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(B),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Li,Xa(M,Q,F),se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe);let Pe=!1;for(let ke=0,Ye=H.length;ke<Ye;ke++){const Ie=H[ke],Ge=Ie.object,xt=Ie.geometry,yt=Ie.material,un=Ie.group;if(yt.side===ii&&Ge.layers.test(F.layers)){const $n=yt.side;yt.side=qt,yt.needsUpdate=!0,_c(Ge,Q,F,xt,yt,un),yt.side=$n,yt.needsUpdate=!0,Pe=!0}}Pe===!0&&(se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe)),v.setRenderTarget(ge),v.setClearColor(B,I),v.toneMapping=Ce}function Xa(M,H,Q){const F=H.isScene===!0?H.overrideMaterial:null;for(let J=0,ge=M.length;J<ge;J++){const Ce=M[J],Pe=Ce.object,ke=Ce.geometry,Ye=F===null?Ce.material:F,Ie=Ce.group;Pe.layers.test(Q.layers)&&_c(Pe,H,Q,ke,Ye,Ie)}}function _c(M,H,Q,F,J,ge){M.onBeforeRender(v,H,Q,F,J,ge),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(v,H,Q,F,M,ge),J.transparent===!0&&J.side===ii&&J.forceSinglePass===!1?(J.side=qt,J.needsUpdate=!0,v.renderBufferDirect(Q,H,F,J,M,ge),J.side=Pi,J.needsUpdate=!0,v.renderBufferDirect(Q,H,F,J,M,ge),J.side=ii):v.renderBufferDirect(Q,H,F,J,M,ge),M.onAfterRender(v,H,Q,F,J,ge)}function Za(M,H,Q){H.isScene!==!0&&(H=kt);const F=$e.get(M),J=m.state.lights,ge=m.state.shadowsArray,Ce=J.state.version,Pe=$.getParameters(M,J.state,ge,H,Q),ke=$.getProgramCacheKey(Pe);let Ye=F.programs;F.environment=M.isMeshStandardMaterial?H.environment:null,F.fog=H.fog,F.envMap=(M.isMeshStandardMaterial?Je:lt).get(M.envMap||F.environment),Ye===void 0&&(M.addEventListener("dispose",he),Ye=new Map,F.programs=Ye);let Ie=Ye.get(ke);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===Ce)return gc(M,Pe),Ie}else Pe.uniforms=$.getUniforms(M),M.onBuild(Q,Pe,v),M.onBeforeCompile(Pe,v),Ie=$.acquireProgram(Pe,ke),Ye.set(ke,Ie),F.uniforms=Pe.uniforms;const Ge=F.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=ne.uniform),gc(M,Pe),F.needsLights=rp(M),F.lightsStateVersion=Ce,F.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMap.value=J.state.directionalShadowMap,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotShadowMap.value=J.state.spotShadowMap,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMap.value=J.state.pointShadowMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix);const xt=Ie.getUniforms(),yt=Cs.seqWithValue(xt.seq,Ge);return F.currentProgram=Ie,F.uniformsList=yt,Ie}function gc(M,H){const Q=$e.get(M);Q.outputColorSpace=H.outputColorSpace,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function np(M,H,Q,F,J){H.isScene!==!0&&(H=kt),se.resetTextureUnits();const ge=H.fog,Ce=F.isMeshStandardMaterial?H.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bn,ke=(F.isMeshStandardMaterial?Je:lt).get(F.envMap||Ce),Ye=F.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ie=!!Q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ge=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let un=Li;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(un=v.toneMapping);const $n=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mt=$n!==void 0?$n.length:0,Ke=$e.get(F),_o=m.state.lights;if(ue===!0&&(le===!0||M!==x)){const en=M===x&&F.id===z;ne.setState(F,M,en)}let wt=!1;F.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==_o.state.version||Ke.outputColorSpace!==Pe||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||J.isInstancedMesh&&Ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ke.instancingColor===!1&&J.instanceColor!==null||Ke.envMap!==ke||F.fog===!0&&Ke.fog!==ge||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ne.numPlanes||Ke.numIntersection!==ne.numIntersection)||Ke.vertexAlphas!==Ye||Ke.vertexTangents!==Ie||Ke.morphTargets!==Ge||Ke.morphNormals!==xt||Ke.morphColors!==yt||Ke.toneMapping!==un||Oe.isWebGL2===!0&&Ke.morphTargetsCount!==Mt)&&(wt=!0):(wt=!0,Ke.__version=F.version);let Oi=Ke.currentProgram;wt===!0&&(Oi=Za(F,H,J));let vc=!1,ia=!1,go=!1;const zt=Oi.getUniforms(),Fi=Ke.uniforms;if(Se.useProgram(Oi.program)&&(vc=!0,ia=!0,go=!0),F.id!==z&&(z=F.id,ia=!0),vc||x!==M){if(zt.setValue(G,"projectionMatrix",M.projectionMatrix),Oe.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),x!==M&&(x=M,ia=!0,go=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const en=zt.map.cameraPosition;en!==void 0&&en.setValue(G,rt.setFromMatrixPosition(M.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&zt.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&zt.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(J.isSkinnedMesh){zt.setOptional(G,J,"bindMatrix"),zt.setOptional(G,J,"bindMatrixInverse");const en=J.skeleton;en&&(Oe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),zt.setValue(G,"boneTexture",en.boneTexture,se),zt.setValue(G,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vo=Q.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0&&Oe.isWebGL2===!0)&&ve.update(J,Q,Oi),(ia||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,zt.setValue(G,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Fi.envMap.value=ke,Fi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ia&&(zt.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&ip(Fi,go),ge&&F.fog===!0&&ie.refreshFogUniforms(Fi,ge),ie.refreshMaterialUniforms(Fi,F,C,Z,xe),Cs.upload(G,Ke.uniformsList,Fi,se)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Cs.upload(G,Ke.uniformsList,Fi,se),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&zt.setValue(G,"center",J.center),zt.setValue(G,"modelViewMatrix",J.modelViewMatrix),zt.setValue(G,"normalMatrix",J.normalMatrix),zt.setValue(G,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const en=F.uniformsGroups;for(let xo=0,ap=en.length;xo<ap;xo++)if(Oe.isWebGL2){const xc=en[xo];je.update(xc,Oi),je.bind(xc,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function ip(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function rp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,H,Q){$e.get(M.texture).__webglTexture=H,$e.get(M.depthTexture).__webglTexture=Q;const F=$e.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Q===void 0,F.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,H){const Q=$e.get(M);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,Q=0){A=M,w=H,R=Q;let F=!0,J=null,ge=!1,Ce=!1;if(M){const ke=$e.get(M);ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(G.FRAMEBUFFER,null),F=!1):ke.__webglFramebuffer===void 0?se.setupRenderTarget(M):ke.__hasExternalTextures&&se.rebindTextures(M,$e.get(M.texture).__webglTexture,$e.get(M.depthTexture).__webglTexture);const Ye=M.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const Ie=$e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[H])?J=Ie[H][Q]:J=Ie[H],ge=!0):Oe.isWebGL2&&M.samples>0&&se.useMultisampledRTT(M)===!1?J=$e.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?J=Ie[Q]:J=Ie,S.copy(M.viewport),O.copy(M.scissor),ee=M.scissorTest}else S.copy(Y).multiplyScalar(C).floor(),O.copy(U).multiplyScalar(C).floor(),ee=K;if(Se.bindFramebuffer(G.FRAMEBUFFER,J)&&Oe.drawBuffers&&F&&Se.drawBuffers(M,J),Se.viewport(S),Se.scissor(O),Se.setScissorTest(ee),ge){const ke=$e.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,Q)}else if(Ce){const ke=$e.get(M.texture),Ye=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,Q||0,Ye)}z=-1},this.readRenderTargetPixels=function(M,H,Q,F,J,ge,Ce){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){Se.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const ke=M.texture,Ye=ke.format,Ie=ke.type;if(Ye!==Sn&&be.convert(Ye)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ie===Pa&&(Ae.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ie!==Ni&&be.convert(Ie)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Mi&&(Oe.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-F&&Q>=0&&Q<=M.height-J&&G.readPixels(H,Q,F,J,be.convert(Ye),be.convert(Ie),ge)}finally{const ke=A!==null?$e.get(A).__webglFramebuffer:null;Se.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(M,H,Q=0){const F=Math.pow(2,-Q),J=Math.floor(H.image.width*F),ge=Math.floor(H.image.height*F);se.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,M.x,M.y,J,ge),Se.unbindTexture()},this.copyTextureToTexture=function(M,H,Q,F=0){const J=H.image.width,ge=H.image.height,Ce=be.convert(Q.format),Pe=be.convert(Q.type);se.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,F,M.x,M.y,J,ge,Ce,Pe,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,F,M.x,M.y,H.mipmaps[0].width,H.mipmaps[0].height,Ce,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,F,M.x,M.y,Ce,Pe,H.image),F===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,H,Q,F,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=M.max.x-M.min.x+1,Ce=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,ke=be.convert(F.format),Ye=be.convert(F.type);let Ie;if(F.isData3DTexture)se.setTexture3D(F,0),Ie=G.TEXTURE_3D;else if(F.isDataArrayTexture)se.setTexture2DArray(F,0),Ie=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,F.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,F.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),xt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),yt=G.getParameter(G.UNPACK_SKIP_PIXELS),un=G.getParameter(G.UNPACK_SKIP_ROWS),$n=G.getParameter(G.UNPACK_SKIP_IMAGES),Mt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Mt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,M.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,M.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,M.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(Ie,J,H.x,H.y,H.z,ge,Ce,Pe,ke,Ye,Mt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ie,J,H.x,H.y,H.z,ge,Ce,Pe,ke,Mt.data)):G.texSubImage3D(Ie,J,H.x,H.y,H.z,ge,Ce,Pe,ke,Ye,Mt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,un),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$n),J===0&&F.generateMipmaps&&G.generateMipmap(Ie),Se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?se.setTextureCube(M,0):M.isData3DTexture?se.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?se.setTexture2DArray(M,0):se.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,Se.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?Qi:Lh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?We:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Kw extends Kh{}Kw.prototype.isWebGL1Renderer=!0;class Jw extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qw extends Wa{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const Dr=new Va(0,0,0,"YXZ"),Ir=new j,eT={type:"change"},tT={type:"lock"},nT={type:"unlock"},qd=Math.PI/2;class iT extends dr{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=rT.bind(this),this._onPointerlockChange=aT.bind(this),this._onPointerlockError=sT.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Ir.setFromMatrixColumn(t.matrix,0),Ir.crossVectors(t.up,Ir),t.position.addScaledVector(Ir,e)}moveRight(e){const t=this.camera;Ir.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ir,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function rT(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;Dr.setFromQuaternion(i.quaternion),Dr.y-=e*.002*this.pointerSpeed,Dr.x-=t*.002*this.pointerSpeed,Dr.x=Math.max(qd-this.maxPolarAngle,Math.min(qd-this.minPolarAngle,Dr.x)),i.quaternion.setFromEuler(Dr),this.dispatchEvent(eT)}function aT(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(tT),this.isLocked=!0):(this.dispatchEvent(nT),this.isLocked=!1)}function sT(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}let Kd=0;class oT{constructor(){me(this,"destroyed",!1);me(this,"listeners",new Map)}addEventListener(e,t,i=!1){var r;if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");return this.listeners.has(e)||this.listeners.set(e,[]),(r=this.listeners.get(e))==null||r.push({callbackfn:t,once:i,id:Kd}),Kd++}removeEventListener(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");if(typeof arguments[0]=="number"){for(const e of this.listeners.values())for(let t=0;t<e.length;t++)if(e[t].id==arguments[0])return e.splice(t,1),!0;return!1}else{const e=arguments[0],t=arguments[1],i=arguments[2],r=this.listeners.get(e);if(r===void 0)return!1;for(let a=0;a<r.length;a++){const s=r[a];if(s.callbackfn===t&&s.once===i)return r.splice(a,1),!0}return!1}}dispatchEvent(e,...t){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");const i=this.listeners.get(e);i!==void 0&&i.forEach(r=>{r.callbackfn(...t),r.once&&this.removeEventListener(e,r.callbackfn,r.once)})}destroyDispatcher(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");this.destroyed=!0,this.listeners.forEach((e,t)=>{this.listeners.delete(t)})}}function ws(n,e,t,i){return Math.sqrt((n-t)**2+(e-i)**2)}class lT extends oT{constructor(t,i,r){super();me(this,"world");me(this,"renderDistance");me(this,"unloadDistance");me(this,"chunks",[]);me(this,"regions",[]);me(this,"isUpdating",!1);this.world=t,this.renderDistance=i,this.unloadDistance=r}async getRegion(t,i){const r=this.regions.find(s=>s.rx==t&&s.rz==i);if(r!=null)return r;const a=await this.world.getRegion(t,i);if(a==null){const s={rx:t,rz:i,file:null};return this.regions.push(s),s}return await a.init(),this.regions.push(a),a}async loadChunk(t,i){if(this.chunks.some(s=>s.cx==t&&s.cz==i))return;const r=await this.getRegion(Math.floor(t/32),Math.floor(i/32));if(r.file==null)return;const a=await r.getChunk(t,i);if(a==null){this.chunks.push({cx:t,cz:i,data:null});return}this.chunks.push(a),this.dispatchEvent("loadchunk",a)}async update(t,i){if(this.isUpdating)return;this.isUpdating=!0,this.chunks=this.chunks.filter(a=>ws(t,i,a.cx,a.cz)>this.unloadDistance?(a.data!=null&&this.dispatchEvent("unloadchunk",a),!1):!0);let r=[];for(let a=-this.renderDistance;a<this.renderDistance;a++)for(let s=-this.renderDistance;s<this.renderDistance;s++){const o=t+a,c=i+s;ws(t,i,o,c)>this.renderDistance||this.chunks.some(l=>l.cx==o&&l.cz==c)||r.push({cx:o,cz:c})}for(;r.length>0;){const a=r.reduce((s,o)=>s==null||ws(t,i,o.cx,o.cz)<ws(t,i,s.cx,s.cz)?o:s);r.splice(r.indexOf(a),1),await this.loadChunk(a.cx,a.cz)}this.isUpdating=!1}}function cT(n){let e,t,i,r;return{c(){e=Mn(),t=nt("canvas"),this.h()},l(a){e=wn(a),t=it(a,"CANVAS",{class:!0}),vt(t).forEach(fe),this.h()},h(){Ne(t,"class","svelte-rotshb")},m(a,s){Le(a,e,s),Le(a,t,s),n[5](t),i||(r=[oi(document.body,"keydown",n[2]),oi(document.body,"keyup",n[3]),oi(t,"click",n[6])],i=!0)},p:P,i:P,o:P,d(a){a&&(fe(e),fe(t)),n[5](null),i=!1,lf(r)}}}function uT(n,e,t){let{entry:i}=e,r,a,s,o=-1,c=-1,l,u,f,d,h=new Set;function _(y){h.add(y.code)}function g(y){h.delete(y.code)}ro(async()=>{const y=new Wx(i);l=new Kh({canvas:r,antialias:!0}),u=new Jw,f=new hn(91,1,.1,2e3),t(1,d=new iT(f,r)),f.position.set(0,100,0);function v(O=1){let ee=new j,B=.1;const I=f.getWorldDirection(new j),D=f.up,Z=new j().crossVectors(I,D);h.has("KeyW")&&ee.add(I),h.has("KeyS")&&ee.addScaledVector(I,-1),h.has("KeyD")&&ee.add(Z),h.has("KeyA")&&ee.addScaledVector(Z,-1),h.has("Space")&&ee.add(D),h.has("ControlLeft")&&ee.addScaledVector(D,-1),f.position.addScaledVector(ee.normalize(),B*O)}a=new ResizeObserver(()=>{t(0,r.width=r.clientWidth,r),t(0,r.height=r.clientHeight,r),l.setSize(r.width,r.height),f.aspect=r.width/r.height,f.updateProjectionMatrix()}),a.observe(r);function E(O){let ee=[];O.forEachBlock((I,D,Z,C)=>{O.getBlock(I+1,D,Z).Name=="minecraft:air"&&ee.push(I+1,D,Z,I+1,D+1,Z,I+1,D,Z+1,I+1,D+1,Z,I+1,D+1,Z+1,I+1,D,Z+1),O.getBlock(I-1,D,Z).Name=="minecraft:air"&&ee.push(I,D+1,Z,I,D,Z,I,D,Z+1,I,D+1,Z+1,I,D+1,Z,I,D,Z+1),O.getBlock(I,D+1,Z).Name=="minecraft:air"&&ee.push(I+1,D+1,Z,I,D+1,Z,I,D+1,Z+1,I+1,D+1,Z+1,I+1,D+1,Z,I,D+1,Z+1),O.getBlock(I,D-1,Z).Name=="minecraft:air"&&ee.push(I,D,Z,I+1,D,Z,I,D,Z+1,I+1,D,Z,I+1,D,Z+1,I,D,Z+1),O.getBlock(I,D,Z+1).Name=="minecraft:air"&&ee.push(I,D,Z+1,I+1,D,Z+1,I,D+1,Z+1,I+1,D,Z+1,I+1,D+1,Z+1,I,D+1,Z+1),O.getBlock(I,D,Z-1).Name=="minecraft:air"&&ee.push(I+1,D,Z,I,D,Z,I,D+1,Z,I+1,D+1,Z,I+1,D,Z,I,D+1,Z)});const B=new ki;return B.setAttribute("position",new Di(ee,3)),B}let w=[];s=new lT(y,8,10),s.addEventListener("loadchunk",O=>{const ee=E(O);ee.computeVertexNormals();const B=new si(ee,new Qw);B.translateX(O.cx*16),B.translateZ(O.cz*16),u.add(B),w.push({mesh:B,chunk:O})}),s.addEventListener("unloadchunk",O=>{const ee=w.find(B=>B.chunk==O);if(ee==null)throw new Error("Error while unloading chunk.");ee.mesh.clear(),ee.mesh.removeFromParent(),w=w.filter(B=>B!=ee)});let R,A;async function z(){const O=Math.floor(f.position.x/16),ee=Math.floor(f.position.z/16);(O!=R||ee!=A)&&(await s.update(O,ee),R=O,A=ee),clearTimeout(c),c=setTimeout(()=>z(),500)}z();let x=Date.now();async function S(){d.isLocked&&v(Date.now()-x),l.render(u,f),x=Date.now(),clearTimeout(o),o=setTimeout(()=>S(),1e3/60)}S()}),vp(()=>{s.destroyDispatcher(),u.clear(),d.dispose(),clearTimeout(c),clearTimeout(o),a.disconnect()});function m(y){Xl[y?"unshift":"push"](()=>{r=y,t(0,r)})}const p=()=>d.lock();return n.$$set=y=>{"entry"in y&&t(4,i=y.entry)},[r,d,_,g,i,m,p]}class dT extends Jt{constructor(e){super(),Qt(this,e,uT,cT,$t,{entry:4})}}const fT={namespace:"minecraft.world",priority:2,isValid:async n=>n.type!=ut.Directory?!1:await n.get("level.dat")!==null,createViewer:async(n,e)=>{if(n.type==ut.Directory)new dT({target:e,props:{entry:n}});else throw new Error("Tried to create world viewer with file.")},getIcon:async n=>{if(n.type==ut.Directory){const e=await n.get("icon.png");return e==null?"/asset-viewer/bootstrap-icons/boxes.svg":e.type==ut.Directory?null:URL.createObjectURL(await e.blob())}return null}};let Ls=[];function fi(n){Ls.push(n),Ls=Ls.sort((e,t)=>t.priority-e.priority)}async function Jd(n){if(n.viewer==null){for(const e of Ls)if(await e.isValid(n)){n.viewer=e;break}if(n.viewer!=null&&(console.debug(`Found viewer "${n.viewer.namespace}" for "${zn.getPath(n)}"`),n.viewer.transform)){const e=await n.viewer.transform(n);await zn.transform(n,e)}}}let Jh;df.subscribe(n=>{Jh=n});function Qh(n){const e=n.viewer;e!=null&&e.createViewer&&(console.debug(`Opening viewer for "${zn.getPath(n)}"`,n),e.createViewer(n,Jh))}async function to(n){const e=n.viewer;return e==null?null:e.getIcon?await e.getIcon(n):null}fi(Bm);fi(Xm);fi(Qm);fi(D_);fi(O_);fi(H0);fi(cx);fi(bx);fi(fT);function hT(n){return{c:P,l:P,m:P,p:P,d:P}}function pT(n){let e;function t(a,s){return a[2]==null?_T:mT}let i=t(n),r=i(n);return{c(){e=nt("div"),r.c(),this.h()},l(a){e=it(a,"DIV",{class:!0});var s=vt(e);r.l(s),s.forEach(fe),this.h()},h(){Ne(e,"class","icon-container svelte-6m6qam")},m(a,s){Le(a,e,s),r.m(e,null)},p(a,s){i===(i=t(a))&&r?r.p(a,s):(r.d(1),r=i(a),r&&(r.c(),r.m(e,null)))},d(a){a&&fe(e),r.d()}}}function mT(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t=n[2])||Ne(e,"src",t),Ne(e,"alt","File Icon"),Ne(e,"class","svelte-6m6qam")},m(i,r){Le(i,e,r)},p(i,r){r&1&&!cn(e.src,t=i[2])&&Ne(e,"src",t)},d(i){i&&fe(e)}}}function _T(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t="/asset-viewer/bootstrap-icons/file-earmark.svg")||Ne(e,"src",t),Ne(e,"alt","File Icon"),Ne(e,"class","svelte-6m6qam")},m(i,r){Le(i,e,r)},p:P,d(i){i&&fe(e)}}}function gT(n){return{c:P,l:P,m:P,p:P,d:P}}function vT(n){let e,t,i,r,a,s=n[0].name+"",o,c,l,u={ctx:n,current:null,token:null,hasCatch:!1,pending:gT,then:pT,catch:hT,value:2};return Et(i=to(n[0]),u),{c(){e=nt("div"),t=nt("div"),u.block.c(),r=Mn(),a=nt("div"),o=Nn(s),this.h()},l(f){e=it(f,"DIV",{class:!0});var d=vt(e);t=it(d,"DIV",{class:!0});var h=vt(t);u.block.l(h),r=wn(h),a=it(h,"DIV",{class:!0});var _=vt(a);o=Dn(_,s),_.forEach(fe),h.forEach(fe),d.forEach(fe),this.h()},h(){Ne(a,"class","name svelte-6m6qam"),Ne(t,"class","title svelte-6m6qam"),Ne(e,"class","container svelte-6m6qam")},m(f,d){Le(f,e,d),At(e,t),u.block.m(t,u.anchor=null),u.mount=()=>t,u.anchor=r,At(t,r),At(t,a),At(a,o),c||(l=oi(t,"click",n[1]),c=!0)},p(f,[d]){n=f,u.ctx=n,d&1&&i!==(i=to(n[0]))&&Et(i,u)||Tn(u,n,d),d&1&&s!==(s=n[0].name+"")&&or(o,s)},i:P,o:P,d(f){f&&fe(e),u.block.d(),u.token=null,u=null,c=!1,l()}}}function xT(n,e,t){let{file:i}=e;const r=()=>Qh(i);return n.$$set=a=>{"file"in a&&t(0,i=a.file)},[i,r]}class bT extends Jt{constructor(e){super(),Qt(this,e,xT,vT,$t,{file:0})}}function Qd(n,e,t){const i=n.slice();return i[8]=e[t],i}function ET(n){return{c:P,l:P,m:P,p:P,d:P}}function yT(n){let e;function t(a,s){return a[11]==null?MT:ST}let i=t(n),r=i(n);return{c(){e=nt("div"),r.c(),this.h()},l(a){e=it(a,"DIV",{class:!0});var s=vt(e);r.l(s),s.forEach(fe),this.h()},h(){Ne(e,"class","icon-container svelte-135cnfs")},m(a,s){Le(a,e,s),r.m(e,null)},p(a,s){i===(i=t(a))&&r?r.p(a,s):(r.d(1),r=i(a),r&&(r.c(),r.m(e,null)))},d(a){a&&fe(e),r.d()}}}function ST(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t=n[11])||Ne(e,"src",t),Ne(e,"alt","Directory Icon"),Ne(e,"class","svelte-135cnfs")},m(i,r){Le(i,e,r)},p(i,r){r&2&&!cn(e.src,t=i[11])&&Ne(e,"src",t)},d(i){i&&fe(e)}}}function MT(n){let e;function t(a,s){return a[3]?a[0]?wT:TT:AT}let i=t(n),r=i(n);return{c(){r.c(),e=ct()},l(a){r.l(a),e=ct()},m(a,s){r.m(a,s),Le(a,e,s)},p(a,s){i===(i=t(a))&&r?r.p(a,s):(r.d(1),r=i(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){a&&fe(e),r.d(a)}}}function wT(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t="/asset-viewer/bootstrap-icons/archive.svg")||Ne(e,"src",t),Ne(e,"alt","Directory Archive Icon"),Ne(e,"class","svelte-135cnfs")},m(i,r){Le(i,e,r)},p:P,d(i){i&&fe(e)}}}function TT(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t="/asset-viewer/bootstrap-icons/archive-fill.svg")||Ne(e,"src",t),Ne(e,"alt","Directory Collapsed Archive Icon"),Ne(e,"class","svelte-135cnfs")},m(i,r){Le(i,e,r)},p:P,d(i){i&&fe(e)}}}function AT(n){let e;function t(a,s){return a[0]?RT:CT}let i=t(n),r=i(n);return{c(){r.c(),e=ct()},l(a){r.l(a),e=ct()},m(a,s){r.m(a,s),Le(a,e,s)},p(a,s){i!==(i=t(a))&&(r.d(1),r=i(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){a&&fe(e),r.d(a)}}}function RT(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t="/asset-viewer/bootstrap-icons/folder.svg")||Ne(e,"src",t),Ne(e,"alt","Directory Icon"),Ne(e,"class","svelte-135cnfs")},m(i,r){Le(i,e,r)},d(i){i&&fe(e)}}}function CT(n){let e,t;return{c(){e=nt("img"),this.h()},l(i){e=it(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){cn(e.src,t="/asset-viewer/bootstrap-icons/folder-fill.svg")||Ne(e,"src",t),Ne(e,"alt","Directory Collapsed Icon"),Ne(e,"class","svelte-135cnfs")},m(i,r){Le(i,e,r)},d(i){i&&fe(e)}}}function LT(n){return{c:P,l:P,m:P,p:P,d:P}}function ef(n){let e,t='<img src="/asset-viewer/bootstrap-icons/eye.svg" alt="Open Viewer Icon" class="svelte-135cnfs"/>',i,r;return{c(){e=nt("div"),e.innerHTML=t,this.h()},l(a){e=it(a,"DIV",{class:!0,"data-svelte-h":!0}),cf(e)!=="svelte-1fphaay"&&(e.innerHTML=t),this.h()},h(){Ne(e,"class","create-viewer-icon-container svelte-135cnfs")},m(a,s){Le(a,e,s),i||(r=oi(e,"click",n[6]),i=!0)},p:P,d(a){a&&fe(e),i=!1,r()}}}function tf(n){let e,t,i=Ii(n[4]),r=[];for(let s=0;s<i.length;s+=1)r[s]=nf(Qd(n,i,s));const a=s=>tt(r[s],1,1,()=>{r[s]=null});return{c(){e=nt("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=it(s,"DIV",{class:!0});var o=vt(e);for(let c=0;c<r.length;c+=1)r[c].l(o);o.forEach(fe),this.h()},h(){Ne(e,"class","dir-entries svelte-135cnfs"),ni(e,"hidden",!n[0])},m(s,o){Le(s,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);t=!0},p(s,o){if(o&16){i=Ii(s[4]);let c;for(c=0;c<i.length;c+=1){const l=Qd(s,i,c);r[c]?(r[c].p(l,o),Xe(r[c],1)):(r[c]=nf(l),r[c].c(),Xe(r[c],1),r[c].m(e,null))}for(ui(),c=i.length;c<r.length;c+=1)a(c);di()}(!t||o&1)&&ni(e,"hidden",!s[0])},i(s){if(!t){for(let o=0;o<i.length;o+=1)Xe(r[o]);t=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)tt(r[o]);t=!1},d(s){s&&fe(e),io(r,s)}}}function NT(n){let e,t;return e=new ep({props:{dir:n[8]}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&16&&(a.dir=i[8]),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function DT(n){let e,t;return e=new bT({props:{file:n[8]}}),{c(){Hn(e.$$.fragment)},l(i){Gn(e.$$.fragment,i)},m(i,r){Vn(e,i,r),t=!0},p(i,r){const a={};r&16&&(a.file=i[8]),e.$set(a)},i(i){t||(Xe(e.$$.fragment,i),t=!0)},o(i){tt(e.$$.fragment,i),t=!1},d(i){Wn(e,i)}}}function nf(n){let e,t,i,r;const a=[DT,NT],s=[];function o(c,l){return c[8].type==ut.File?0:c[8].type==ut.Directory?1:-1}return~(e=o(n))&&(t=s[e]=a[e](n)),{c(){t&&t.c(),i=ct()},l(c){t&&t.l(c),i=ct()},m(c,l){~e&&s[e].m(c,l),Le(c,i,l),r=!0},p(c,l){let u=e;e=o(c),e===u?~e&&s[e].p(c,l):(t&&(ui(),tt(s[u],1,1,()=>{s[u]=null}),di()),~e?(t=s[e],t?t.p(c,l):(t=s[e]=a[e](c),t.c()),Xe(t,1),t.m(i.parentNode,i)):t=null)},i(c){r||(Xe(t),r=!0)},o(c){tt(t),r=!1},d(c){c&&fe(i),~e&&s[e].d(c)}}}function rf(n){var m,p;let e,t,i,r,a,s=n[1].name+"",o,c,l,u,f,d,h={ctx:n,current:null,token:null,hasCatch:!1,pending:LT,then:yT,catch:ET,value:11};Et(i=to(n[1]),h);let _=((p=(m=n[1])==null?void 0:m.viewer)==null?void 0:p.createViewer)&&ef(n),g=n[4]&&n[2]&&tf(n);return{c(){e=nt("div"),t=nt("div"),h.block.c(),r=Mn(),a=nt("div"),o=Nn(s),c=Mn(),_&&_.c(),l=Mn(),g&&g.c(),this.h()},l(y){e=it(y,"DIV",{class:!0});var v=vt(e);t=it(v,"DIV",{class:!0});var E=vt(t);h.block.l(E),r=wn(E),a=it(E,"DIV",{class:!0});var w=vt(a);o=Dn(w,s),w.forEach(fe),c=wn(E),_&&_.l(E),E.forEach(fe),l=wn(v),g&&g.l(v),v.forEach(fe),this.h()},h(){Ne(a,"class","name svelte-135cnfs"),Ne(t,"class","title svelte-135cnfs"),Ne(e,"class","container svelte-135cnfs")},m(y,v){Le(y,e,v),At(e,t),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=r,At(t,r),At(t,a),At(a,o),At(t,c),_&&_.m(t,null),At(e,l),g&&g.m(e,null),u=!0,f||(d=oi(t,"click",n[7]),f=!0)},p(y,v){var E,w;n=y,h.ctx=n,v&2&&i!==(i=to(n[1]))&&Et(i,h)||Tn(h,n,v),(!u||v&2)&&s!==(s=n[1].name+"")&&or(o,s),(w=(E=n[1])==null?void 0:E.viewer)!=null&&w.createViewer?_?_.p(n,v):(_=ef(n),_.c(),_.m(t,null)):_&&(_.d(1),_=null),n[4]&&n[2]?g?(g.p(n,v),v&20&&Xe(g,1)):(g=tf(n),g.c(),Xe(g,1),g.m(e,null)):g&&(ui(),tt(g,1,1,()=>{g=null}),di())},i(y){u||(Xe(g),u=!0)},o(y){tt(g),u=!1},d(y){y&&fe(e),h.block.d(),h.token=null,h=null,_&&_.d(),g&&g.d(),f=!1,d()}}}function IT(n){let e=n[5],t,i,r=rf(n);return{c(){r.c(),t=ct()},l(a){r.l(a),t=ct()},m(a,s){r.m(a,s),Le(a,t,s),i=!0},p(a,[s]){s&32&&$t(e,e=a[5])?(ui(),tt(r,1,1,P),di(),r=rf(a),r.c(),Xe(r,1),r.m(t.parentNode,t)):r.p(a,s)},i(a){i||(Xe(r),i=!0)},o(a){tt(r),i=!1},d(a){a&&fe(t),r.d(a)}}}function UT(n,e,t){let{dir:i}=e,r,{expanded:a=!1}=e,s=!1,o,c=0;ro(async()=>{i.parent==null&&(await Jd(i),t(5,c++,c));const f=Object.values(await i.list());await Promise.all(f.map(d=>Jd(d))),t(4,o=Object.values(await i.list()).sort((d,h)=>d.name.localeCompare(h.name)+(h.type-d.type)*1e3))});const l=f=>{f.stopPropagation(),Qh(i)},u=()=>{t(0,a=!a)};return n.$$set=f=>{"dir"in f&&t(1,i=f.dir),"expanded"in f&&t(0,a=f.expanded)},n.$$.update=()=>{var f;n.$$.dirty&2&&t(3,r=((f=i.viewer)==null?void 0:f.transform)!=null),n.$$.dirty&5&&a&&!s&&t(2,s=!0)},[a,i,s,r,o,c,l,u]}class ep extends Jt{constructor(e){super(),Qt(this,e,UT,IT,$t,{dir:1,expanded:0})}}var ut=(n=>(n[n.File=1]="File",n[n.Directory=2]="Directory",n))(ut||{}),zn;(n=>{function e(u){return u.parent==null?u.type==2?u:null:e(u)}n.root=e;function t(u){return u.parent==null?"":i(`${t(u.parent)}/${u.name}`)}n.getPath=t;function i(u){for(u=u.replace(/[\\\/]/g,"/");u.startsWith("/");)u=u.slice(1);for(;u.endsWith("/");)u=u.slice(0,-1);return u}n.fixPath=i;async function r(u,f){let d=i(f).split("/"),h=u;for(;d.length>1;){const g=d.shift();if(g==null)throw new Error("Catastrophic error that should never happen.");const m=await u.get(g);if(m==null||m.type!=2)return null;h=m}const _=d.shift();if(_==null)throw new Error("Catastrophic error that should never happen.");return await h.get(_)}n.getDeep=r;async function a(u,f,d){const h=i(f).split("/"),_=h.shift();if(_==null)throw new Error("setDeep empty path.");if(h.length==0)await u.set(_,d);else{let g=await u.get(_);if(g==null)g=new l(_,u),await u.set(_,g);else if(g.type!=2)throw new Error("setDeep encountered a file.");await a(g,h.join("/"),d)}}n.setDeep=a;async function s(u,f){if(u.parent==null)throw new Error("Could not transform, Entry has no parent.");return f==null?await u.parent.set(u.name,null):(f.viewer=u.viewer,f.name=u.name,f.parent=u.parent,await u.parent.set(u.name,f)),f}n.transform=s;async function o(u,f){let d=[u];for(;d.length>0;){const h=d.pop();if(h==null)break;const _=Object.entries(await h.list());for(const[g,m]of _){const p=n.getPath(m),y=await f(p,m),v=await h.get(g);v!=null&&v.type==2&&(y===void 0||y===!0)&&d.push(v)}}}n.forEachDeep=o;class c{constructor(f,d,h){me(this,"viewer",null);me(this,"type",1);me(this,"name");me(this,"parent");me(this,"_blob");this._blob=f,this.name=d,this.parent=h}async blob(){return this._blob}async buffer(){return await this._blob.arrayBuffer()}}n.fsFile_Blob=c;class l{constructor(f,d){me(this,"viewer",null);me(this,"type",2);me(this,"name");me(this,"parent");me(this,"entries",{});this.name=f,this.parent=d}async list(){return{...this.entries}}async get(f){return this.entries[f]??null}async set(f,d){d==null?delete this.entries[f]:(d.parent=this,this.entries[f]=d)}}n.fsDirectory_Container=l})(zn||(zn={}));async function PT(n){const e=n.createReader();let t={},i=0;do{let r=await new Promise(a=>{e.readEntries(a)});i=r.length;for(const a of r)t[a.name]=a}while(i>0);return t}class hc{constructor(e,t="ROOT",i=null){me(this,"type",ut.Directory);me(this,"viewer",null);me(this,"evaluated",!1);me(this,"name");me(this,"parent");me(this,"transfer");me(this,"initialized",!1);me(this,"entries",{});this.transfer=e,this.name=t,this.parent=i}async init(){if(this.initialized)return;const e=await PT(this.transfer);this.entries={};for(const t in e){const i=e[t];if(i.isFile){const r=await new Promise(a=>i.file(a));this.entries[t]=new zn.fsFile_Blob(r,t,this)}else if(i.isDirectory){const r=i;this.entries[t]=new hc(r,t,this)}}this.initialized=!0}async list(){return this.initialized||await this.init(),{...this.entries}}async get(e){return this.initialized||await this.init(),this.entries[e]??null}async set(e,t){this.initialized||await this.init(),t==null?delete this.entries[e]:(t.parent=this,this.entries[e]=t)}}function kT(n){let e,t,i=`<div class="dropzone-content svelte-r6lkz9"><div class="dropzone-text svelte-r6lkz9">File Dropzone
            <br/></div></div>`,r,a;return{c(){e=Mn(),t=nt("div"),t.innerHTML=i,this.h()},l(s){e=wn(s),t=it(s,"DIV",{class:!0,"data-svelte-h":!0}),cf(t)!=="svelte-16pzcnp"&&(t.innerHTML=i),this.h()},h(){Ne(t,"class","file-dropzone svelte-r6lkz9"),ni(t,"visible",n[0])},m(s,o){Le(s,e,o),Le(s,t,o),r||(a=[oi(document.body,"dragover",n[1]),oi(document.body,"dragleave",n[2]),oi(document.body,"drop",n[3])],r=!0)},p(s,[o]){o&1&&ni(t,"visible",s[0])},i:P,o:P,d(s){s&&(fe(e),fe(t)),r=!1,lf(a)}}}function af(n){return n==null?!1:n.types.length==1&&n.types[0]=="Files"}function OT(n,e,t){const i=of();let r=!1;function a(c){c.dataTransfer!=null&&af(c.dataTransfer)&&(c.preventDefault(),t(0,r=!0))}function s(c){c.fromElement==null&&t(0,r=!1)}async function o(c){c.preventDefault(),t(0,r=!1);const l=c.dataTransfer;if(l==null||!af(l))return;const u=l.items[0].webkitGetAsEntry();if(u!=null){if(u.isDirectory){const f=u;i("dropentry",new hc(f,f.name))}else if(u.isFile){const f=await new Promise(d=>u.file(d));i("dropentry",new zn.fsFile_Blob(f,f.name,null))}}}return[r,a,s,o]}class FT extends Jt{constructor(e){super(),Qt(this,e,OT,kT,$t,{})}}function BT(n){let e,t,i,r;return e=new FT({}),e.$on("dropentry",n[1]),{c(){Hn(e.$$.fragment),t=Mn(),i=nt("div")},l(a){Gn(e.$$.fragment,a),t=wn(a),i=it(a,"DIV",{}),vt(i).forEach(fe)},m(a,s){Vn(e,a,s),Le(a,t,s),Le(a,i,s),n[2](i),r=!0},p:P,i(a){r||(Xe(e.$$.fragment,a),r=!0)},o(a){tt(e.$$.fragment,a),r=!1},d(a){a&&(fe(t),fe(i)),Wn(e,a),n[2](null)}}}function zT(n,e,t){let i;ro(()=>{df.set(i)});function r(s){const o=s.detail;if(o.type!=ut.Directory){console.warn("Drop entry must be directory.");return}console.log(o),new ep({target:i,props:{dir:o}})}function a(s){Xl[s?"unshift":"push"](()=>{i=s,t(0,i)})}return[i,r,a]}class YT extends Jt{constructor(e){super(),Qt(this,e,zT,BT,$t,{})}}export{YT as component,$T as universal};
