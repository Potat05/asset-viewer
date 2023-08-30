var tm=Object.defineProperty;var nm=(n,e,t)=>e in n?tm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var q=(n,e,t)=>(nm(n,typeof e!="symbol"?e+"":e,t),t),im=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var $o=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var fa=(n,e,t)=>(im(n,e,"access private method"),t);import{D as rm,E as sm,F as pa,G as pi,s as Bt,I as es,f as qe,g as Ye,h as mt,d as ae,J as pn,K as Jc,i as we,x as Tt,B as L,L as Qa,M as Xh,l as In,m as Un,n as Xi,H as Zh,e as ot,v as qh,r as am,y as om,z as lm,A as cm,N as Yh,b as um,O as en,j as Se,o as ps,P as jh,p as ts,a as _n,c as gn,k as Qc,Q as No,R as Wn,S as Kh,w as Jh}from"../chunks/scheduler.600889ac.js";import{g as yi,t as at,c as Ei,a as je,S as Gt,i as Vt,b as Qn,d as ei,m as ti,e as ni}from"../chunks/index.c6af4572.js";import{w as dm}from"../chunks/index.90f543f3.js";function vt(n,e){const t=e.token={};function i(r,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=r&&(e.current=r)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(yi(),at(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Ei())}):e.block.d(1),c.c(),je(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&pi()}if(rm(n)){const r=sm();if(n.then(s=>{pa(r),i(e.then,1,e.value,s),pa(null)},s=>{if(pa(r),i(e.catch,2,e.error,s),pa(null),!e.hasCatch)throw s}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,n),!0;e.resolved=n}}function xn(n,e,t){const i=e.slice(),{resolved:r}=n;n.current===n.then&&(i[n.value]=r),n.current===n.catch&&(i[n.error]=r),n.block.p(i,t)}function Vi(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Qh(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const a=n[s],o=e[s];if(o){for(const l in a)l in o||(i[l]=1);for(const l in o)r[l]||(t[l]=o[l],r[l]=1);n[s]=o}else for(const l in a)r[l]=1}for(const a in i)a in t||(t[a]=void 0);return t}function hm(n){return typeof n=="object"&&n!==null?n:{}}const fm=!0,NA=Object.freeze(Object.defineProperty({__proto__:null,prerender:fm},Symbol.toStringTag,{value:"Module"}));function pm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ef(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(e=>{const t=n[e],i=typeof t;(i==="object"||i==="function")&&!Object.isFrozen(t)&&ef(t)}),n}let eu=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function tf(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Li(n,...e){const t=Object.create(null);for(const i in n)t[i]=n[i];return e.forEach(function(i){for(const r in i)t[r]=i[r]}),t}const mm="</span>",tu=n=>!!n.scope,_m=(n,{prefix:e})=>{if(n.startsWith("language:"))return n.replace("language:","language-");if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((i,r)=>`${i}${"_".repeat(r+1)}`)].join(" ")}return`${e}${n}`};class gm{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=tf(e)}openNode(e){if(!tu(e))return;const t=_m(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){tu(e)&&(this.buffer+=mm)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const nu=(n={})=>{const e={children:[]};return Object.assign(e,n),e};class xc{constructor(){this.rootNode=nu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=nu({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(i=>this._walk(e,i)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{xc._collapse(t)}))}}class vm extends xc{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const i=e.root;t&&(i.scope=`language:${t}`),this.add(i)}toHTML(){return new gm(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Bs(n){return n?typeof n=="string"?n:n.source:null}function nf(n){return br("(?=",n,")")}function bm(n){return br("(?:",n,")*")}function xm(n){return br("(?:",n,")?")}function br(...n){return n.map(t=>Bs(t)).join("")}function ym(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function yc(...n){return"("+(ym(n).capture?"":"?:")+n.map(i=>Bs(i)).join("|")+")"}function rf(n){return new RegExp(n.toString()+"|").exec("").length-1}function Em(n,e){const t=n&&n.exec(e);return t&&t.index===0}const Sm=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ec(n,{joinWith:e}){let t=0;return n.map(i=>{t+=1;const r=t;let s=Bs(i),a="";for(;s.length>0;){const o=Sm.exec(s);if(!o){a+=s;break}a+=s.substring(0,o.index),s=s.substring(o.index+o[0].length),o[0][0]==="\\"&&o[1]?a+="\\"+String(Number(o[1])+r):(a+=o[0],o[0]==="("&&t++)}return a}).map(i=>`(${i})`).join(e)}const wm=/\b\B/,sf="[a-zA-Z]\\w*",Sc="[a-zA-Z_]\\w*",af="\\b\\d+(\\.\\d+)?",of="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",lf="\\b(0b[01]+)",Mm="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Tm=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=br(e,/.*\b/,n.binary,/\b.*/)),Li({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,i)=>{t.index!==0&&i.ignoreMatch()}},n)},Fs={begin:"\\\\[\\s\\S]",relevance:0},Am={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Fs]},Rm={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Fs]},Cm={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Lo=function(n,e,t={}){const i=Li({scope:"comment",begin:n,end:e,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=yc("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:br(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},Nm=Lo("//","$"),Lm=Lo("/\\*","\\*/"),km=Lo("#","$"),Dm={scope:"number",begin:af,relevance:0},Im={scope:"number",begin:of,relevance:0},Um={scope:"number",begin:lf,relevance:0},Pm={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Fs,{begin:/\[/,end:/\]/,relevance:0,contains:[Fs]}]}]},Om={scope:"title",begin:sf,relevance:0},Bm={scope:"title",begin:Sc,relevance:0},Fm={begin:"\\.\\s*"+Sc,relevance:0},zm=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var ma=Object.freeze({__proto__:null,MATCH_NOTHING_RE:wm,IDENT_RE:sf,UNDERSCORE_IDENT_RE:Sc,NUMBER_RE:af,C_NUMBER_RE:of,BINARY_NUMBER_RE:lf,RE_STARTERS_RE:Mm,SHEBANG:Tm,BACKSLASH_ESCAPE:Fs,APOS_STRING_MODE:Am,QUOTE_STRING_MODE:Rm,PHRASAL_WORDS_MODE:Cm,COMMENT:Lo,C_LINE_COMMENT_MODE:Nm,C_BLOCK_COMMENT_MODE:Lm,HASH_COMMENT_MODE:km,NUMBER_MODE:Dm,C_NUMBER_MODE:Im,BINARY_NUMBER_MODE:Um,REGEXP_MODE:Pm,TITLE_MODE:Om,UNDERSCORE_TITLE_MODE:Bm,METHOD_GUARD:Fm,END_SAME_AS_BEGIN:zm});function Hm(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function Gm(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function Vm(n,e){e&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=Hm,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function Wm(n,e){Array.isArray(n.illegal)&&(n.illegal=yc(...n.illegal))}function $m(n,e){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function Xm(n,e){n.relevance===void 0&&(n.relevance=1)}const Zm=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(i=>{delete n[i]}),n.keywords=t.keywords,n.begin=br(t.beforeMatch,nf(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},qm=["of","and","for","in","not","or","if","then","parent","list","value"],Ym="keyword";function cf(n,e,t=Ym){const i=Object.create(null);return typeof n=="string"?r(t,n.split(" ")):Array.isArray(n)?r(t,n):Object.keys(n).forEach(function(s){Object.assign(i,cf(n[s],e,s))}),i;function r(s,a){e&&(a=a.map(o=>o.toLowerCase())),a.forEach(function(o){const l=o.split("|");i[l[0]]=[s,jm(l[0],l[1])]})}}function jm(n,e){return e?Number(e):Km(n)?0:1}function Km(n){return qm.includes(n.toLowerCase())}const iu={},or=n=>{console.error(n)},ru=(n,...e)=>{console.log(`WARN: ${n}`,...e)},Mr=(n,e)=>{iu[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),iu[`${n}/${e}`]=!0)},eo=new Error;function uf(n,e,{key:t}){let i=0;const r=n[t],s={},a={};for(let o=1;o<=e.length;o++)a[o+i]=r[o],s[o+i]=!0,i+=rf(e[o-1]);n[t]=a,n[t]._emit=s,n[t]._multi=!0}function Jm(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw or("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),eo;if(typeof n.beginScope!="object"||n.beginScope===null)throw or("beginScope must be object"),eo;uf(n,n.begin,{key:"beginScope"}),n.begin=Ec(n.begin,{joinWith:""})}}function Qm(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw or("skip, excludeEnd, returnEnd not compatible with endScope: {}"),eo;if(typeof n.endScope!="object"||n.endScope===null)throw or("endScope must be object"),eo;uf(n,n.end,{key:"endScope"}),n.end=Ec(n.end,{joinWith:""})}}function e_(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function t_(n){e_(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),Jm(n),Qm(n)}function n_(n){function e(a,o){return new RegExp(Bs(a),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(o?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(o,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,o]),this.matchAt+=rf(o)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const o=this.regexes.map(l=>l[1]);this.matcherRe=e(Ec(o,{joinWith:"|"}),!0),this.lastIndex=0}exec(o){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(o);if(!l)return null;const c=l.findIndex((h,d)=>d>0&&h!==void 0),u=this.matchIndexes[c];return l.splice(0,c),Object.assign(l,u)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(o){if(this.multiRegexes[o])return this.multiRegexes[o];const l=new t;return this.rules.slice(o).forEach(([c,u])=>l.addRule(c,u)),l.compile(),this.multiRegexes[o]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(o,l){this.rules.push([o,l]),l.type==="begin"&&this.count++}exec(o){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let c=l.exec(o);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(o)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function r(a){const o=new i;return a.contains.forEach(l=>o.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&o.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&o.addRule(a.illegal,{type:"illegal"}),o}function s(a,o){const l=a;if(a.isCompiled)return l;[Gm,$m,t_,Zm].forEach(u=>u(a,o)),n.compilerExtensions.forEach(u=>u(a,o)),a.__beforeBegin=null,[Vm,Wm,Xm].forEach(u=>u(a,o)),a.isCompiled=!0;let c=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),c=a.keywords.$pattern,delete a.keywords.$pattern),c=c||/\w+/,a.keywords&&(a.keywords=cf(a.keywords,n.case_insensitive)),l.keywordPatternRe=e(c,!0),o&&(a.begin||(a.begin=/\B|\b/),l.beginRe=e(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=e(l.end)),l.terminatorEnd=Bs(l.end)||"",a.endsWithParent&&o.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+o.terminatorEnd)),a.illegal&&(l.illegalRe=e(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(u){return i_(u==="self"?a:u)})),a.contains.forEach(function(u){s(u,l)}),a.starts&&s(a.starts,o),l.matcher=r(l),l}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Li(n.classNameAliases||{}),s(n)}function df(n){return n?n.endsWithParent||df(n.starts):!1}function i_(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return Li(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:df(n)?Li(n,{starts:n.starts?Li(n.starts):null}):Object.isFrozen(n)?Li(n):n}var r_="11.8.0";class s_ extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const Xo=tf,su=Li,au=Symbol("nomatch"),a_=7,hf=function(n){const e=Object.create(null),t=Object.create(null),i=[];let r=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let o={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:vm};function l(C){return o.noHighlightRe.test(C)}function c(C){let k=C.className+" ";k+=C.parentNode?C.parentNode.className:"";const W=o.languageDetectRe.exec(k);if(W){const j=b(W[1]);return j||(ru(s.replace("{}",W[1])),ru("Falling back to no-highlight mode for this block.",C)),j?W[1]:"no-highlight"}return k.split(/\s+/).find(j=>l(j)||b(j))}function u(C,k,W){let j="",U="";typeof k=="object"?(j=C,W=k.ignoreIllegals,U=k.language):(Mr("10.7.0","highlight(lang, code, ...args) has been deprecated."),Mr("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),U=C,j=k),W===void 0&&(W=!0);const J={code:j,language:U};D("before:highlight",J);const oe=J.result?J.result:h(J.language,J.code,W);return oe.code=J.code,D("after:highlight",oe),oe}function h(C,k,W,j){const U=Object.create(null);function J(P,X){return P.keywords[X]}function oe(){if(!le.keywords){it.addText(ze);return}let P=0;le.keywordPatternRe.lastIndex=0;let X=le.keywordPatternRe.exec(ze),ie="";for(;X;){ie+=ze.substring(P,X.index);const ne=Ae.case_insensitive?X[0].toLowerCase():X[0],V=J(le,ne);if(V){const[be,Me]=V;if(it.addText(ie),ie="",U[ne]=(U[ne]||0)+1,U[ne]<=a_&&(T+=Me),be.startsWith("_"))ie+=X[0];else{const Re=Ae.classNameAliases[be]||be;xe(X[0],Re)}}else ie+=X[0];P=le.keywordPatternRe.lastIndex,X=le.keywordPatternRe.exec(ze)}ie+=ze.substring(P),it.addText(ie)}function he(){if(ze==="")return;let P=null;if(typeof le.subLanguage=="string"){if(!e[le.subLanguage]){it.addText(ze);return}P=h(le.subLanguage,ze,!0,ht[le.subLanguage]),ht[le.subLanguage]=P._top}else P=f(ze,le.subLanguage.length?le.subLanguage:null);le.relevance>0&&(T+=P.relevance),it.__addSublanguage(P._emitter,P.language)}function ue(){le.subLanguage!=null?he():oe(),ze=""}function xe(P,X){P!==""&&(it.startScope(X),it.addText(P),it.endScope())}function Pe(P,X){let ie=1;const ne=X.length-1;for(;ie<=ne;){if(!P._emit[ie]){ie++;continue}const V=Ae.classNameAliases[P[ie]]||P[ie],be=X[ie];V?xe(be,V):(ze=be,oe(),ze=""),ie++}}function ke(P,X){return P.scope&&typeof P.scope=="string"&&it.openNode(Ae.classNameAliases[P.scope]||P.scope),P.beginScope&&(P.beginScope._wrap?(xe(ze,Ae.classNameAliases[P.beginScope._wrap]||P.beginScope._wrap),ze=""):P.beginScope._multi&&(Pe(P.beginScope,X),ze="")),le=Object.create(P,{parent:{value:le}}),le}function lt(P,X,ie){let ne=Em(P.endRe,ie);if(ne){if(P["on:end"]){const V=new eu(P);P["on:end"](X,V),V.isMatchIgnored&&(ne=!1)}if(ne){for(;P.endsParent&&P.parent;)P=P.parent;return P}}if(P.endsWithParent)return lt(P.parent,X,ie)}function Wt(P){return le.matcher.regexIndex===0?(ze+=P[0],1):(re=!0,0)}function Ve(P){const X=P[0],ie=P.rule,ne=new eu(ie),V=[ie.__beforeBegin,ie["on:begin"]];for(const be of V)if(be&&(be(P,ne),ne.isMatchIgnored))return Wt(X);return ie.skip?ze+=X:(ie.excludeBegin&&(ze+=X),ue(),!ie.returnBegin&&!ie.excludeBegin&&(ze=X)),ke(ie,P),ie.returnBegin?0:X.length}function G(P){const X=P[0],ie=k.substring(P.index),ne=lt(le,P,ie);if(!ne)return au;const V=le;le.endScope&&le.endScope._wrap?(ue(),xe(X,le.endScope._wrap)):le.endScope&&le.endScope._multi?(ue(),Pe(le.endScope,P)):V.skip?ze+=X:(V.returnEnd||V.excludeEnd||(ze+=X),ue(),V.excludeEnd&&(ze=X));do le.scope&&it.closeNode(),!le.skip&&!le.subLanguage&&(T+=le.relevance),le=le.parent;while(le!==ne.parent);return ne.starts&&ke(ne.starts,P),V.returnEnd?0:X.length}function Ut(){const P=[];for(let X=le;X!==Ae;X=X.parent)X.scope&&P.unshift(X.scope);P.forEach(X=>it.openNode(X))}let Le={};function Fe(P,X){const ie=X&&X[0];if(ze+=P,ie==null)return ue(),0;if(Le.type==="begin"&&X.type==="end"&&Le.index===X.index&&ie===""){if(ze+=k.slice(X.index,X.index+1),!r){const ne=new Error(`0 width match regex (${C})`);throw ne.languageName=C,ne.badRule=Le.rule,ne}return 1}if(Le=X,X.type==="begin")return Ve(X);if(X.type==="illegal"&&!W){const ne=new Error('Illegal lexeme "'+ie+'" for mode "'+(le.scope||"<unnamed>")+'"');throw ne.mode=le,ne}else if(X.type==="end"){const ne=G(X);if(ne!==au)return ne}if(X.type==="illegal"&&ie==="")return 1;if($>1e5&&$>X.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ze+=ie,ie.length}const Ae=b(C);if(!Ae)throw or(s.replace("{}",C)),new Error('Unknown language: "'+C+'"');const bt=n_(Ae);let Ze="",le=j||bt;const ht={},it=new o.__emitter(o);Ut();let ze="",T=0,x=0,$=0,re=!1;try{if(Ae.__emitTokens)Ae.__emitTokens(k,it);else{for(le.matcher.considerAll();;){$++,re?re=!1:le.matcher.considerAll(),le.matcher.lastIndex=x;const P=le.matcher.exec(k);if(!P)break;const X=k.substring(x,P.index),ie=Fe(X,P);x=P.index+ie}Fe(k.substring(x))}return it.finalize(),Ze=it.toHTML(),{language:C,value:Ze,relevance:T,illegal:!1,_emitter:it,_top:le}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:C,value:Xo(k),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:x,context:k.slice(x-100,x+100),mode:P.mode,resultSoFar:Ze},_emitter:it};if(r)return{language:C,value:Xo(k),illegal:!1,relevance:0,errorRaised:P,_emitter:it,_top:le};throw P}}function d(C){const k={value:Xo(C),illegal:!1,relevance:0,_top:a,_emitter:new o.__emitter(o)};return k._emitter.addText(C),k}function f(C,k){k=k||o.languages||Object.keys(e);const W=d(C),j=k.filter(b).filter(O).map(ue=>h(ue,C,!1));j.unshift(W);const U=j.sort((ue,xe)=>{if(ue.relevance!==xe.relevance)return xe.relevance-ue.relevance;if(ue.language&&xe.language){if(b(ue.language).supersetOf===xe.language)return 1;if(b(xe.language).supersetOf===ue.language)return-1}return 0}),[J,oe]=U,he=J;return he.secondBest=oe,he}function _(C,k,W){const j=k&&t[k]||W;C.classList.add("hljs"),C.classList.add(`language-${j}`)}function g(C){let k=null;const W=c(C);if(l(W))return;if(D("before:highlightElement",{el:C,language:W}),C.children.length>0&&(o.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),o.throwUnescapedHTML))throw new s_("One of your code blocks includes unescaped HTML.",C.innerHTML);k=C;const j=k.textContent,U=W?u(j,{language:W,ignoreIllegals:!0}):f(j);C.innerHTML=U.value,_(C,W,U.language),C.result={language:U.language,re:U.relevance,relevance:U.relevance},U.secondBest&&(C.secondBest={language:U.secondBest.language,relevance:U.secondBest.relevance}),D("after:highlightElement",{el:C,result:U,text:j})}function m(C){o=su(o,C)}const p=()=>{y(),Mr("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function E(){y(),Mr("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let v=!1;function y(){if(document.readyState==="loading"){v=!0;return}document.querySelectorAll(o.cssSelector).forEach(g)}function M(){v&&y()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",M,!1);function R(C,k){let W=null;try{W=k(n)}catch(j){if(or("Language definition for '{}' could not be registered.".replace("{}",C)),r)or(j);else throw j;W=a}W.name||(W.name=C),e[C]=W,W.rawDefinition=k.bind(null,n),W.aliases&&S(W.aliases,{languageName:C})}function A(C){delete e[C];for(const k of Object.keys(t))t[k]===C&&delete t[k]}function z(){return Object.keys(e)}function b(C){return C=(C||"").toLowerCase(),e[C]||e[t[C]]}function S(C,{languageName:k}){typeof C=="string"&&(C=[C]),C.forEach(W=>{t[W.toLowerCase()]=k})}function O(C){const k=b(C);return k&&!k.disableAutodetect}function te(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=k=>{C["before:highlightBlock"](Object.assign({block:k.el},k))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=k=>{C["after:highlightBlock"](Object.assign({block:k.el},k))})}function F(C){te(C),i.push(C)}function I(C){const k=i.indexOf(C);k!==-1&&i.splice(k,1)}function D(C,k){const W=C;i.forEach(function(j){j[W]&&j[W](k)})}function Z(C){return Mr("10.7.0","highlightBlock will be removed entirely in v12.0"),Mr("10.7.0","Please use highlightElement now."),g(C)}Object.assign(n,{highlight:u,highlightAuto:f,highlightAll:y,highlightElement:g,highlightBlock:Z,configure:m,initHighlighting:p,initHighlightingOnLoad:E,registerLanguage:R,unregisterLanguage:A,listLanguages:z,getLanguage:b,registerAliases:S,autoDetection:O,inherit:su,addPlugin:F,removePlugin:I}),n.debugMode=function(){r=!1},n.safeMode=function(){r=!0},n.versionString=r_,n.regex={concat:br,lookahead:nf,either:yc,optional:xm,anyNumberOfTimes:bm};for(const C in ma)typeof ma[C]=="object"&&ef(ma[C]);return Object.assign(n,ma),n},ns=hf({});ns.newInstance=()=>hf({});var o_=ns;ns.HighlightJS=ns;ns.default=ns;const ou=pm(o_);function l_(n){let e;return{c(){e=In(n[2])},l(t){e=Un(t,n[2])},m(t,i){we(t,e,i)},p(t,i){i&4&&Xi(e,t[2])},d(t){t&&ae(e)}}}function c_(n){let e,t;return{c(){e=new Zh(!1),t=ot(),this.h()},l(i){e=qh(i,!1),t=ot(),this.h()},h(){e.a=t},m(i,r){e.m(n[1],i,r),we(i,t,r)},p(i,r){r&2&&e.p(i[1])},d(i){i&&(ae(t),e.d())}}}function u_(n){let e,t;function i(l,c){return l[1]?c_:l_}let r=i(n),s=r(n),a=[{"data-language":n[3]},n[4]],o={};for(let l=0;l<a.length;l+=1)o=es(o,a[l]);return{c(){e=qe("pre"),t=qe("code"),s.c(),this.h()},l(l){e=Ye(l,"PRE",{"data-language":!0});var c=mt(e);t=Ye(c,"CODE",{});var u=mt(t);s.l(u),u.forEach(ae),c.forEach(ae),this.h()},h(){pn(t,"hljs",!0),Jc(e,o),pn(e,"langtag",n[0]),pn(e,"svelte-11sh29b",!0)},m(l,c){we(l,e,c),Tt(e,t),s.m(t,null)},p(l,[c]){r===(r=i(l))&&s?s.p(l,c):(s.d(1),s=r(l),s&&(s.c(),s.m(t,null))),Jc(e,o=Qh(a,[c&8&&{"data-language":l[3]},c&16&&l[4]])),pn(e,"langtag",l[0]),pn(e,"svelte-11sh29b",!0)},i:L,o:L,d(l){l&&ae(e),s.d()}}}function d_(n,e,t){const i=["langtag","highlighted","code","languageName"];let r=Qa(e,i),{langtag:s=!1}=e,{highlighted:a}=e,{code:o}=e,{languageName:l="plaintext"}=e;return n.$$set=c=>{e=es(es({},e),Xh(c)),t(4,r=Qa(e,i)),"langtag"in c&&t(0,s=c.langtag),"highlighted"in c&&t(1,a=c.highlighted),"code"in c&&t(2,o=c.code),"languageName"in c&&t(3,l=c.languageName)},[s,a,o,l,r]}class h_ extends Gt{constructor(e){super(),Vt(this,e,d_,u_,Bt,{langtag:0,highlighted:1,code:2,languageName:3})}}const f_=h_,p_=n=>({highlighted:n&8}),lu=n=>({highlighted:n[3]});function m_(n){let e,t;const i=[n[4],{languageName:n[0].name},{langtag:n[2]},{highlighted:n[3]},{code:n[1]}];let r={};for(let s=0;s<i.length;s+=1)r=es(r,i[s]);return e=new f_({props:r}),{c(){Qn(e.$$.fragment)},l(s){ei(e.$$.fragment,s)},m(s,a){ti(e,s,a),t=!0},p(s,a){const o=a&31?Qh(i,[a&16&&hm(s[4]),a&1&&{languageName:s[0].name},a&4&&{langtag:s[2]},a&8&&{highlighted:s[3]},a&2&&{code:s[1]}]):{};e.$set(o)},i(s){t||(je(e.$$.fragment,s),t=!0)},o(s){at(e.$$.fragment,s),t=!1},d(s){ni(e,s)}}}function __(n){let e;const t=n[6].default,i=am(t,n,n[5],lu),r=i||m_(n);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,a){r&&r.m(s,a),e=!0},p(s,[a]){i?i.p&&(!e||a&40)&&om(i,t,s,s[5],e?cm(t,s[5],a,p_):lm(s[5]),lu):r&&r.p&&(!e||a&31)&&r.p(s,e?a:-1)},i(s){e||(je(r,s),e=!0)},o(s){at(r,s),e=!1},d(s){r&&r.d(s)}}}function g_(n,e,t){const i=["language","code","langtag"];let r=Qa(e,i),{$$slots:s={},$$scope:a}=e,{language:o}=e,{code:l}=e,{langtag:c=!1}=e;const u=Yh();let h="";return um(()=>{h&&u("highlight",{highlighted:h})}),n.$$set=d=>{e=es(es({},e),Xh(d)),t(4,r=Qa(e,i)),"language"in d&&t(0,o=d.language),"code"in d&&t(1,l=d.code),"langtag"in d&&t(2,c=d.langtag),"$$scope"in d&&t(5,a=d.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&(ou.registerLanguage(o.name,o.register),t(3,h=ou.highlight(l,{language:o.name}).value))},[o,l,c,h,r,a,s]}class v_ extends Gt{constructor(e){super(),Vt(this,e,g_,__,Bt,{language:0,code:1,langtag:2})}}const ko=v_;function b_(n){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}const x_={name:"plaintext",register:b_},y_=x_;function E_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function S_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:T_,then:M_,catch:w_,value:2,blocks:[,,,]};return vt(t=n[1].text(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].text())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function w_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function M_(n){let e,t;return e=new ko({props:{language:y_,code:n[2]}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=i[2]),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function T_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function A_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function R_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:A_,then:S_,catch:E_,value:1,blocks:[,,,]};return vt(t=n[0].blob(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function C_(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class N_ extends Gt{constructor(e){super(),Vt(this,e,C_,R_,Bt,{entry:0})}}const L_={namespace:"text",priority:0,isValid:async n=>{var e;return n.type==nt.File&&["txt","gitignore","npmrc","license","cfg","properties","url"].includes(((e=n.name.split(".").pop())==null?void 0:e.toLowerCase())??"")},createViewer:async(n,e)=>{if(n.type==nt.File)new N_({target:e,props:{entry:n}});else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-text.svg"};function k_(n){return{c:L,l:L,m:L,p:L,d:L}}function D_(n){let e,t,i;return{c(){e=qe("img"),this.h()},l(r){e=Ye(r,"IMG",{src:!0,alt:!0}),this.h()},h(){en(e.src,t=URL.createObjectURL(n[1]))||Se(e,"src",t),Se(e,"alt",i=n[0].name)},m(r,s){we(r,e,s)},p(r,s){s&1&&!en(e.src,t=URL.createObjectURL(r[1]))&&Se(e,"src",t),s&1&&i!==(i=r[0].name)&&Se(e,"alt",i)},d(r){r&&ae(e)}}}function I_(n){return{c:L,l:L,m:L,p:L,d:L}}function U_(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:I_,then:D_,catch:k_,value:1};return vt(t=n[0].blob(),i),{c(){e=ot(),i.block.c()},l(r){e=ot(),i.block.l(r)},m(r,s){we(r,e,s),i.block.m(r,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e},p(r,[s]){n=r,i.ctx=n,s&1&&t!==(t=n[0].blob())&&vt(t,i)||xn(i,n,s)},i:L,o:L,d(r){r&&ae(e),i.block.d(r),i.token=null,i=null}}}function P_(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}let O_=class extends Gt{constructor(e){super(),Vt(this,e,P_,U_,Bt,{entry:0})}};const B_={namespace:"image",priority:1,isValid:async n=>n.type==nt.File&&["png","jpg","jpeg","jfif","tiff","webp","gif","svg","bmp"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==nt.File)new O_({target:e,props:{entry:n}});else throw new Error("Tried to create image viewer with directory.")},getIcon:async n=>n.type==nt.File?URL.createObjectURL(await n.blob()):null};function F_(n){return{c:L,l:L,m:L,p:L,d:L}}function z_(n){let e,t;return{c(){e=qe("video"),this.h()},l(i){e=Ye(i,"VIDEO",{src:!0}),mt(e).forEach(ae),this.h()},h(){en(e.src,t=URL.createObjectURL(n[1]))||Se(e,"src",t),e.controls=!0},m(i,r){we(i,e,r)},p(i,r){r&1&&!en(e.src,t=URL.createObjectURL(i[1]))&&Se(e,"src",t)},d(i){i&&ae(e)}}}function H_(n){return{c:L,l:L,m:L,p:L,d:L}}function G_(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:H_,then:z_,catch:F_,value:1};return vt(t=n[0].blob(),i),{c(){e=ot(),i.block.c()},l(r){e=ot(),i.block.l(r)},m(r,s){we(r,e,s),i.block.m(r,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e},p(r,[s]){n=r,i.ctx=n,s&1&&t!==(t=n[0].blob())&&vt(t,i)||xn(i,n,s)},i:L,o:L,d(r){r&&ae(e),i.block.d(r),i.token=null,i=null}}}function V_(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class W_ extends Gt{constructor(e){super(),Vt(this,e,V_,G_,Bt,{entry:0})}}const $_={namespace:"video",priority:1,isValid:async n=>n.type==nt.File&&["mp4","mov","webm"].includes(n.name.split(".").pop()??""),createViewer:async(n,e)=>{if(n.type==nt.File)new W_({target:e,props:{entry:n}});else throw new Error("Tried to create video viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-play.svg"};function X_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Z_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:j_,then:Y_,catch:q_,value:3,blocks:[,,,]};return vt(t=n[2].text(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[2].text())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function q_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Y_(n){let e,t;return e=new ko({props:{language:n[1],code:n[3]}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&2&&(s.language=i[1]),r&1&&(s.code=i[3]),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function j_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function K_(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function J_(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:K_,then:Z_,catch:X_,value:2,blocks:[,,,]};return vt(t=n[0].blob(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function Q_(n,e,t){let{entry:i}=e,{language:r}=e;return n.$$set=s=>{"entry"in s&&t(0,i=s.entry),"language"in s&&t(1,r=s.language)},[i,r]}class eg extends Gt{constructor(e){super(),Vt(this,e,Q_,J_,Bt,{entry:0,language:1})}}const cu="[A-Za-z$_][0-9A-Za-z$_]*",tg=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ng=["true","false","null","undefined","NaN","Infinity"],ff=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],pf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ig=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],rg=[].concat(mf,ff,pf);function sg(n){const e=n.regex,t=(k,{after:W})=>{const j="</"+k[0].slice(1);return k.input.indexOf(j,W)!==-1},i=cu,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(k,W)=>{const j=k[0].length+k.index,U=k.input[j];if(U==="<"||U===","){W.ignoreMatch();return}U===">"&&(t(k,{after:j})||W.ignoreMatch());let J;const oe=k.input.substring(j);if(J=oe.match(/^\s*=/)){W.ignoreMatch();return}if((J=oe.match(/^\s+extends\s+/))&&J.index===0){W.ignoreMatch();return}}},o={$pattern:cu,keyword:tg,literal:ng,built_in:rg,"variable.language":ig},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},E={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,_,g,m,{match:/\$\d+/},h];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const y=[].concat(E,d.contains),M=y.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(y)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:M},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ff,...pf]}},b={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(k){return e.concat("(?!",k.join("|"),")")}const F={match:e.concat(/\b/,te([...mf,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},I={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),b,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,_,g,m,E,{match:/\$\d+/},h,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[E,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},F,O,A,D,{match:/\$[(.]/}]}}const ag={name:"javascript",register:sg},og=ag,to="[A-Za-z$_][0-9A-Za-z$_]*",_f=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],gf=["true","false","null","undefined","NaN","Infinity"],vf=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],bf=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],xf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],yf=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ef=[].concat(xf,vf,bf);function lg(n){const e=n.regex,t=(k,{after:W})=>{const j="</"+k[0].slice(1);return k.input.indexOf(j,W)!==-1},i=to,r={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(k,W)=>{const j=k[0].length+k.index,U=k.input[j];if(U==="<"||U===","){W.ignoreMatch();return}U===">"&&(t(k,{after:j})||W.ignoreMatch());let J;const oe=k.input.substring(j);if(J=oe.match(/^\s*=/)){W.ignoreMatch();return}if((J=oe.match(/^\s+extends\s+/))&&J.index===0){W.ignoreMatch();return}}},o={$pattern:to,keyword:_f,literal:gf,built_in:Ef,"variable.language":yf},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},m={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},E={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},v=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,_,g,m,{match:/\$\d+/},h];d.contains=v.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(v)});const y=[].concat(E,d.contains),M=y.concat([{begin:/\(/,end:/\)/,keywords:o,contains:["self"].concat(y)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:M},A={variants:[{match:[/class/,/\s+/,i,/\s+/,/extends/,/\s+/,e.concat(i,"(",e.concat(/\./,i),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,i],scope:{1:"keyword",3:"title.class"}}]},z={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...vf,...bf]}},b={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S={variants:[{match:[/function/,/\s+/,i,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},O={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(k){return e.concat("(?!",k.join("|"),")")}const F={match:e.concat(/\b/,te([...xf,"super","import"]),i,e.lookahead(/\(/)),className:"title.function",relevance:0},I={begin:e.concat(/\./,e.lookahead(e.concat(i,/(?![0-9A-Za-z$_(])/))),end:i,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},D={match:[/get|set/,/\s+/,i,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,i,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:z},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),b,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,f,_,g,m,E,{match:/\$\d+/},h,z,{className:"attr",begin:i+e.lookahead(":"),relevance:0},C,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[E,n.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:s},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,n.inherit(n.TITLE_MODE,{begin:i,className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+i,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},F,O,A,D,{match:/\$[(.]/}]}}function cg(n){const e=lg(n),t=to,i=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},s={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:i},contains:[e.exports.CLASS_REFERENCE]},a={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},o=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],l={$pattern:to,keyword:_f.concat(o),literal:gf,built_in:Ef.concat(i),"variable.language":yf},c={className:"meta",begin:"@"+t},u=(d,f,_)=>{const g=d.contains.findIndex(m=>m.label===f);if(g===-1)throw new Error("can not find mode to replace");d.contains.splice(g,1,_)};Object.assign(e.keywords,l),e.exports.PARAMS_CONTAINS.push(c),e.contains=e.contains.concat([c,r,s]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",a);const h=e.contains.find(d=>d.label==="func.def");return h.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}const ug={name:"typescript",register:cg},dg=ug;function hg(n){const e={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],r={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[e,t,n.QUOTE_STRING_MODE,r,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const fg={name:"json",register:hg},pg=fg;function mg(n){const e=n.regex,t=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=n.inherit(s,{begin:/\(/,end:/\)/}),o=n.inherit(n.APOS_STRING_MODE,{className:"string"}),l=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,o,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,a,l,o]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const _g={name:"xml",register:mg},wc=_g;function gg(n){const e=n.regex,t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},r={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:e.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},c={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},h=n.inherit(c,{contains:[]}),d=n.inherit(u,{contains:[]});c.contains.push(d),u.contains.push(h);let f=[t,l];return[c,u,h,d].forEach(m=>{m.contains=m.contains.concat(f)}),f=f.concat(c,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:f},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:f}]}]},t,s,c,u,{className:"quote",begin:"^>\\s+",contains:f,end:"$"},r,i,l,a]}}const vg={name:"markdown",register:gg},bg=vg;function xg(n){const e=n.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},h={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l,u,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,c]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},d="[0-9](_?[0-9])*",f=`(\\b(${d}))?\\.(${d})|\\b(${d})\\.`,_=`\\b|${i.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${d})|(${f}))[eE][+-]?(${d})[jJ]?(?=${_})`},{begin:`(${f})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`},{begin:`\\b(${d})[jJ](?=${_})`}]},m={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},p={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",l,g,h,n.HASH_COMMENT_MODE]}]};return c.contains=[h,g,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[l,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},h,m,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[p]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,p,h]}]}}const yg={name:"python",register:xg},Mc=yg;function Eg(n){const e=n.regex,t={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:e.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,t,r]};r.contains.push(a);const o={className:"",begin:/\\"/},l={className:"string",begin:/'/,end:/'/},c={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,t]},u=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],h=n.SHEBANG({binary:`(${u.join("|")})`,relevance:10}),d={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},f=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],_=["true","false"],g={match:/(\/[a-z._-]+)+/},m=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],p=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],E=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],v=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:f,literal:_,built_in:[...m,...p,"set","shopt",...E,...v]},contains:[h,n.SHEBANG(),d,c,n.HASH_COMMENT_MODE,s,g,a,o,l,t]}}const Sg={name:"bash",register:Eg},wg=Sg;function Mg(n){const e=n.regex,t=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",s="<[^<>]+>",a="(?!struct)("+i+"|"+e.optional(r)+"[a-zA-Z_]\\w*"+e.optional(s)+")",o={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},l="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+l+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},h={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},t,n.C_BLOCK_COMMENT_MODE]},d={className:"title",begin:e.optional(r)+n.IDENT_RE,relevance:0},f=e.optional(r)+n.IDENT_RE+"\\s*\\(",_=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],g=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],m=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],p=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],y={type:g,keyword:_,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:m},M={className:"function.dispatch",relevance:0,keywords:{_hint:p},begin:e.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,e.lookahead(/(<[^<>]+>|)\s*\(/))},R=[M,h,o,t,n.C_BLOCK_COMMENT_MODE,u,c],A={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:y,contains:R.concat([{begin:/\(/,end:/\)/,keywords:y,contains:R.concat(["self"]),relevance:0}]),relevance:0},z={className:"function",begin:"("+a+"[\\*&\\s]+)+"+f,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:y,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:y,relevance:0},{begin:f,returnBegin:!0,contains:[d],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,u]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:y,relevance:0,contains:[t,n.C_BLOCK_COMMENT_MODE,c,u,o,{begin:/\(/,end:/\)/,keywords:y,relevance:0,contains:["self",t,n.C_BLOCK_COMMENT_MODE,c,u,o]}]},o,t,n.C_BLOCK_COMMENT_MODE,h]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:y,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(A,z,M,R,[h,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:y,contains:["self",o]},{begin:n.IDENT_RE+"::",keywords:y},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}const Tg={name:"cpp",register:Mg},xr=Tg;function Ag(n){const e=n.regex,t={className:"title.function.invoke",relevance:0,begin:e.concat(/\b/,/(?!let\b)/,n.IDENT_RE,e.lookahead(/\s*\(/))},i="([ui](8|16|32|64|128|size)|f(32|64))?",r=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],s=["true","false","Some","None","Ok","Err"],a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],o=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:n.IDENT_RE+"!?",type:o,keyword:r,literal:s,built_in:a},illegal:"</",contains:[n.C_LINE_COMMENT_MODE,n.COMMENT("/\\*","\\*/",{contains:["self"]}),n.inherit(n.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+i},{begin:"\\b0o([0-7_]+)"+i},{begin:"\\b0x([A-Fa-f0-9_]+)"+i},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+i}],relevance:0},{begin:[/fn/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:n.IDENT_RE+"::",keywords:{keyword:"Self",built_in:a,type:o}},{className:"punctuation",begin:"->"},t]}}const Rg={name:"rust",register:Ag},Cg=Rg;let kt={};kt.js=og;kt.ts=dg;kt.json=pg;kt.xml=wc;kt.html=wc;kt.svelte=wc;kt.md=bg;kt.py=Mc;kt.sh=wg;kt.c=xr;kt.cpp=xr;kt.h=xr;kt.hpp=xr;kt.glsl=xr;kt.vsh=xr;kt.fsh=xr;kt.rs=Cg;const Ng={namespace:"code",priority:1,isValid:async n=>n.type==nt.File&&kt[n.name.split(".").pop()??""]!=null,createViewer:async(n,e)=>{var t;if(n.type==nt.File){const i=kt[((t=n.name.split(".").pop())==null?void 0:t.toLowerCase())??""];if(i==null)throw new Error("Catastrophic error that should never happen, language does not exist but validation passed?");new eg({target:e,props:{entry:n,language:i}})}else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-code.svg"};var is;(n=>{function e(t,i,r="0x"){return`${r}${t.toString(16).toUpperCase().padStart(i*2,"0")}`}n.hex=e})(is||(is={}));const _a={Uint8:1,Int8:1,Uint16:2,Int16:2,Uint32:4,Int32:4,BigUint64:8,BigInt64:8,Float32:4,Float64:8},Ci=class Ci{constructor(e){q(this,"view",new DataView(new ArrayBuffer(0)));q(this,"pointer",0);q(this,"endianness",Ci.LITTLE_ENDIAN);e!==void 0&&(e instanceof Ci&&(e=e.buffer),this.loadData(e))}get length(){return this.view.byteLength}get buffer(){return this.view.buffer}get eof(){return this.pointer>=this.length}get dataLeft(){return this.length-this.pointer}loadData(e,t=0){e instanceof ArrayBuffer||(e=e.buffer),this.view=new DataView(e),this.pointer=t}to(){let e=arguments[0];return typeof e=="function"&&(e=new e),e.loadData(this.buffer,this.pointer),e}peek(e,t=0,...i){const r=this.pointer;this.pointer+=t;const s=e.call(this,...i);return this.pointer=r,s}readBuffer(e){const t=this.buffer.slice(this.pointer,this.pointer+e);return this.pointer+=e,t}readBufferFast(e){const t=new Uint8Array(this.buffer,this.pointer,e);return this.pointer+=e,t}readNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=_a[e],t}readBigNumber(e){const t=this.view[`get${e}`](this.pointer,this.endianness);return this.pointer+=_a[e],t}readCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==Ci.LITTLE_ENDIAN&&(i=i.reverse());let r=0;for(let s=0;s<i.length;s++)r<<=8,r|=i[s];return t&&r&2<<e*8-1&&(r&=(2<<e*8-1)-1,r=-r),r}readBigCustomNumber(e,t){let i=new Uint8Array(this.readBuffer(e));this.endianness==Ci.LITTLE_ENDIAN&&(i=i.reverse());let r=0n;for(let s=0;s<i.length;s++)r<<=8n,r|=BigInt(i[s]);return t&&r&2n<<BigInt(e)*8n-1n&&(r&=(2n<<BigInt(e)*8n-1n)-1n,r=-r),r}readString(e,t="utf-8"){const i=this.readBuffer(e);return new TextDecoder(t).decode(i)}readNullString(e="utf-8"){let t=this.pointer;for(;this.view.getUint8(t++)!=0;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder(e).decode(i)}readArray(e,t,...i){let r=new Array(t);for(let s=0;s<t;s++)r[s]=e.call(this,...i);return r}readArrayWhile(e,t,...i){let r=new Array;do r.push(e.call(this,...i));while(t(r[r.length-1],r.length-1,r));return r}readArrayTuple(e,t,...i){return this.readArray(e,t,...i)}readArrayUntilEnd(e,...t){return this.readArrayWhile(e,()=>!this.eof,...t)}assertMagic(e,t){if(typeof e=="string"){const i=this.readString(e.length,"ascii");if(i!=e)throw new Error(`DataReader.assertMagic: Strings do not match. expected: "${e}" got: "${i}"`)}else if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));if(i.some((s,a)=>s!=r[a]))throw new Error("DataReader.assertMagic: Buffers do not match.")}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));if(e.some((r,s)=>r!=i[s]))throw new Error("DataReader.assertMagic: Arrays do not match.")}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");const i=typeof e=="number"?this.readNumber(t):this.readBigNumber(t);if(i!=e)throw new Error(`DataReader.assertMagic: Magic number does not match. expected: ${is.hex(e,_a[t])} got: ${is.hex(i,_a[t])}`)}else throw new Error("DataReader.assertMagic: Invalid arguments.")}magic(e,t){if(typeof e=="string")return this.readString(e.length,"ascii")==e;if(e instanceof ArrayBuffer){const i=new Uint8Array(e),r=new Uint8Array(this.readBuffer(i.length));return i.every((s,a)=>s==r[a])}else if(Array.isArray(e)){const i=new Uint8Array(this.readBuffer(e.length));return e.every((r,s)=>r==i[s])}else if(typeof e=="number"||typeof e=="bigint"){if(t===void 0)throw new Error("DataReader.magic: Must provide type for number.");return(typeof e=="number"?this.readNumber(t):this.readBigNumber(t))==e}else throw new Error("DataReader.magic: Invalid arguments.")}};q(Ci,"BIG_ENDIAN",!1),q(Ci,"LITTLE_ENDIAN",!0);let Jt=Ci;class Tc extends Jt{constructor(t){super();q(this,"blob");q(this,"blobPointer",0);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}async load(t,i=this.blobPointer){this.loadData(await this.blob.slice(i,i+t).arrayBuffer()),this.blobPointer=i+t}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Lg=4,uu=0,du=1,kg=2;function ms(n){let e=n.length;for(;--e>=0;)n[e]=0}const Dg=0,Sf=1,Ig=2,Ug=3,Pg=258,Ac=29,ta=256,zs=ta+1+Ac,jr=30,Rc=19,wf=2*zs+1,rr=15,Zo=16,Og=7,Cc=256,Mf=16,Tf=17,Af=18,Bl=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Za=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Bg=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Rf=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fg=512,hi=new Array((zs+2)*2);ms(hi);const Ns=new Array(jr*2);ms(Ns);const Hs=new Array(Fg);ms(Hs);const Gs=new Array(Pg-Ug+1);ms(Gs);const Nc=new Array(Ac);ms(Nc);const no=new Array(jr);ms(no);function qo(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Cf,Nf,Lf;function Yo(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const kf=n=>n<256?Hs[n]:Hs[256+(n>>>7)],Vs=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},sn=(n,e,t)=>{n.bi_valid>Zo-t?(n.bi_buf|=e<<n.bi_valid&65535,Vs(n,n.bi_buf),n.bi_buf=e>>Zo-n.bi_valid,n.bi_valid+=t-Zo):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Hn=(n,e,t)=>{sn(n,t[e*2],t[e*2+1])},Df=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},zg=n=>{n.bi_valid===16?(Vs(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},Hg=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let c,u,h,d,f,_,g=0;for(d=0;d<=rr;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,c=n.heap_max+1;c<wf;c++)u=n.heap[c],d=t[t[u*2+1]*2+1]+1,d>l&&(d=l,g++),t[u*2+1]=d,!(u>i)&&(n.bl_count[d]++,f=0,u>=o&&(f=a[u-o]),_=t[u*2],n.opt_len+=_*(d+f),s&&(n.static_len+=_*(r[u*2+1]+f)));if(g!==0){do{for(d=l-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[l]--,g-=2}while(g>0);for(d=l;d!==0;d--)for(u=n.bl_count[d];u!==0;)h=n.heap[--c],!(h>i)&&(t[h*2+1]!==d&&(n.opt_len+=(d-t[h*2+1])*t[h*2],t[h*2+1]=d),u--)}},If=(n,e,t)=>{const i=new Array(rr+1);let r=0,s,a;for(s=1;s<=rr;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Df(i[o]++,o))}},Gg=()=>{let n,e,t,i,r;const s=new Array(rr+1);for(t=0,i=0;i<Ac-1;i++)for(Nc[i]=t,n=0;n<1<<Bl[i];n++)Gs[t++]=i;for(Gs[t-1]=i,r=0,i=0;i<16;i++)for(no[i]=r,n=0;n<1<<Za[i];n++)Hs[r++]=i;for(r>>=7;i<jr;i++)for(no[i]=r<<7,n=0;n<1<<Za[i]-7;n++)Hs[256+r++]=i;for(e=0;e<=rr;e++)s[e]=0;for(n=0;n<=143;)hi[n*2+1]=8,n++,s[8]++;for(;n<=255;)hi[n*2+1]=9,n++,s[9]++;for(;n<=279;)hi[n*2+1]=7,n++,s[7]++;for(;n<=287;)hi[n*2+1]=8,n++,s[8]++;for(If(hi,zs+1,s),n=0;n<jr;n++)Ns[n*2+1]=5,Ns[n*2]=Df(n,5);Cf=new qo(hi,Bl,ta+1,zs,rr),Nf=new qo(Ns,Za,0,jr,rr),Lf=new qo(new Array(0),Bg,0,Rc,Og)},Uf=n=>{let e;for(e=0;e<zs;e++)n.dyn_ltree[e*2]=0;for(e=0;e<jr;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Rc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Cc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Pf=n=>{n.bi_valid>8?Vs(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},hu=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},jo=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&hu(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!hu(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},fu=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Hn(n,r,e):(a=Gs[r],Hn(n,a+ta+1,e),o=Bl[a],o!==0&&(r-=Nc[a],sn(n,r,o)),i--,a=kf(i),Hn(n,a,t),o=Za[a],o!==0&&(i-=no[a],sn(n,i,o)));while(s<n.sym_next);Hn(n,Cc,e)},Fl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,l=-1,c;for(n.heap_len=0,n.heap_max=wf,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=l=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)c=n.heap[++n.heap_len]=l<2?++l:0,t[c*2]=1,n.depth[c]=0,n.opt_len--,r&&(n.static_len-=i[c*2+1]);for(e.max_code=l,a=n.heap_len>>1;a>=1;a--)jo(n,t,a);c=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],jo(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[c*2]=t[a*2]+t[o*2],n.depth[c]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=c,n.heap[1]=c++,jo(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],Hg(n,e),If(t,l,n.bl_count)},pu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<l&&s===a)&&(o<c?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Mf*2]++):o<=10?n.bl_tree[Tf*2]++:n.bl_tree[Af*2]++,o=0,r=s,a===0?(l=138,c=3):s===a?(l=6,c=3):(l=7,c=4))},mu=(n,e,t)=>{let i,r=-1,s,a=e[0*2+1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<l&&s===a)){if(o<c)do Hn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Hn(n,s,n.bl_tree),o--),Hn(n,Mf,n.bl_tree),sn(n,o-3,2)):o<=10?(Hn(n,Tf,n.bl_tree),sn(n,o-3,3)):(Hn(n,Af,n.bl_tree),sn(n,o-11,7));o=0,r=s,a===0?(l=138,c=3):s===a?(l=6,c=3):(l=7,c=4)}},Vg=n=>{let e;for(pu(n,n.dyn_ltree,n.l_desc.max_code),pu(n,n.dyn_dtree,n.d_desc.max_code),Fl(n,n.bl_desc),e=Rc-1;e>=3&&n.bl_tree[Rf[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},Wg=(n,e,t,i)=>{let r;for(sn(n,e-257,5),sn(n,t-1,5),sn(n,i-4,4),r=0;r<i;r++)sn(n,n.bl_tree[Rf[r]*2+1],3);mu(n,n.dyn_ltree,e-1),mu(n,n.dyn_dtree,t-1)},$g=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return uu;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return du;for(t=32;t<ta;t++)if(n.dyn_ltree[t*2]!==0)return du;return uu};let _u=!1;const Xg=n=>{_u||(Gg(),_u=!0),n.l_desc=new Yo(n.dyn_ltree,Cf),n.d_desc=new Yo(n.dyn_dtree,Nf),n.bl_desc=new Yo(n.bl_tree,Lf),n.bi_buf=0,n.bi_valid=0,Uf(n)},Of=(n,e,t,i)=>{sn(n,(Dg<<1)+(i?1:0),3),Pf(n),Vs(n,t),Vs(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},Zg=n=>{sn(n,Sf<<1,3),Hn(n,Cc,hi),zg(n)},qg=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===kg&&(n.strm.data_type=$g(n)),Fl(n,n.l_desc),Fl(n,n.d_desc),a=Vg(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Of(n,e,t,i):n.strategy===Lg||s===r?(sn(n,(Sf<<1)+(i?1:0),3),fu(n,hi,Ns)):(sn(n,(Ig<<1)+(i?1:0),3),Wg(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),fu(n,n.dyn_ltree,n.dyn_dtree)),Uf(n),i&&Pf(n)},Yg=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Gs[t]+ta+1)*2]++,n.dyn_dtree[kf(e)*2]++),n.sym_next===n.sym_end);var jg=Xg,Kg=Of,Jg=qg,Qg=Yg,e0=Zg,t0={_tr_init:jg,_tr_stored_block:Kg,_tr_flush_block:Jg,_tr_tally:Qg,_tr_align:e0};const n0=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Ws=n0;const i0=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},r0=new Uint32Array(i0()),s0=(n,e,t,i)=>{const r=r0,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Ot=s0,hr={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},yr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:a0,_tr_stored_block:zl,_tr_flush_block:o0,_tr_tally:Ui,_tr_align:l0}=t0,{Z_NO_FLUSH:Pi,Z_PARTIAL_FLUSH:c0,Z_FULL_FLUSH:u0,Z_FINISH:Mn,Z_BLOCK:gu,Z_OK:Ft,Z_STREAM_END:vu,Z_STREAM_ERROR:$n,Z_DATA_ERROR:d0,Z_BUF_ERROR:Ko,Z_DEFAULT_COMPRESSION:h0,Z_FILTERED:f0,Z_HUFFMAN_ONLY:ga,Z_RLE:p0,Z_FIXED:m0,Z_DEFAULT_STRATEGY:_0,Z_UNKNOWN:g0,Z_DEFLATED:Do}=yr,v0=9,b0=15,x0=8,y0=29,E0=256,Hl=E0+1+y0,S0=30,w0=19,M0=2*Hl+1,T0=15,st=3,ki=258,Xn=ki+st+1,A0=32,rs=42,Lc=57,Gl=69,Vl=73,Wl=91,$l=103,sr=113,Ts=666,Qt=1,_s=2,fr=3,gs=4,R0=3,ar=(n,e)=>(n.msg=hr[e],e),bu=n=>n*2-(n>4?9:0),Ni=n=>{let e=n.length;for(;--e>=0;)n[e]=0},C0=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let N0=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Oi=N0;const fn=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},mn=(n,e)=>{o0(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,fn(n.strm)},ut=(n,e)=>{n.pending_buf[n.pending++]=e},xs=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Xl=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ws(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Ot(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},Bf=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const l=n.strstart>n.w_size-Xn?n.strstart-(n.w_size-Xn):0,c=n.window,u=n.w_mask,h=n.prev,d=n.strstart+ki;let f=c[i+a-1],_=c[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(c[r+a]!==_||c[r+a-1]!==f||c[r]!==c[i]||c[++r]!==c[i+1])){i+=2,r++;do;while(c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&i<d);if(s=ki-(d-i),i=d-ki,s>a){if(n.match_start=e,a=s,s>=o)break;f=c[i+a-1],_=c[i+a]}}while((e=h[e&u])>l&&--t!==0);return a<=n.lookahead?a:n.lookahead},ss=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Xn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),C0(n),i+=e),n.strm.avail_in===0)break;if(t=Xl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=st)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=Oi(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=Oi(n,n.ins_h,n.window[r+st-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<st)););}while(n.lookahead<Xn&&n.strm.avail_in!==0)},Ff=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==Mn||e===Pi||i!==r+n.strm.avail_in)))break;a=e===Mn&&i===r+n.strm.avail_in?1:0,zl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,fn(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Xl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?gs:e!==Pi&&e!==Mn&&n.strm.avail_in===0&&n.strstart===n.block_start?_s:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Xl(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===Mn)&&e!==Pi&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===Mn&&n.strm.avail_in===0&&i===r?1:0,zl(n,n.block_start,i,a),n.block_start+=i,fn(n.strm)),a?fr:Qt)},Jo=(n,e)=>{let t,i;for(;;){if(n.lookahead<Xn){if(ss(n),n.lookahead<Xn&&e===Pi)return Qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=st&&(n.ins_h=Oi(n,n.ins_h,n.window[n.strstart+st-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Xn&&(n.match_length=Bf(n,t)),n.match_length>=st)if(i=Ui(n,n.strstart-n.match_start,n.match_length-st),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=st){n.match_length--;do n.strstart++,n.ins_h=Oi(n,n.ins_h,n.window[n.strstart+st-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Oi(n,n.ins_h,n.window[n.strstart+1]);else i=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(mn(n,!1),n.strm.avail_out===0))return Qt}return n.insert=n.strstart<st-1?n.strstart:st-1,e===Mn?(mn(n,!0),n.strm.avail_out===0?fr:gs):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?Qt:_s},Tr=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Xn){if(ss(n),n.lookahead<Xn&&e===Pi)return Qt;if(n.lookahead===0)break}if(t=0,n.lookahead>=st&&(n.ins_h=Oi(n,n.ins_h,n.window[n.strstart+st-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=st-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Xn&&(n.match_length=Bf(n,t),n.match_length<=5&&(n.strategy===f0||n.match_length===st&&n.strstart-n.match_start>4096)&&(n.match_length=st-1)),n.prev_length>=st&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-st,i=Ui(n,n.strstart-1-n.prev_match,n.prev_length-st),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=Oi(n,n.ins_h,n.window[n.strstart+st-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=st-1,n.strstart++,i&&(mn(n,!1),n.strm.avail_out===0))return Qt}else if(n.match_available){if(i=Ui(n,0,n.window[n.strstart-1]),i&&mn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Qt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ui(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<st-1?n.strstart:st-1,e===Mn?(mn(n,!0),n.strm.avail_out===0?fr:gs):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?Qt:_s},L0=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=ki){if(ss(n),n.lookahead<=ki&&e===Pi)return Qt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=st&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+ki;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=ki-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=st?(t=Ui(n,1,n.match_length-st),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(mn(n,!1),n.strm.avail_out===0))return Qt}return n.insert=0,e===Mn?(mn(n,!0),n.strm.avail_out===0?fr:gs):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?Qt:_s},k0=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(ss(n),n.lookahead===0)){if(e===Pi)return Qt;break}if(n.match_length=0,t=Ui(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(mn(n,!1),n.strm.avail_out===0))return Qt}return n.insert=0,e===Mn?(mn(n,!0),n.strm.avail_out===0?fr:gs):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?Qt:_s};function Bn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const As=[new Bn(0,0,0,0,Ff),new Bn(4,4,8,4,Jo),new Bn(4,5,16,8,Jo),new Bn(4,6,32,32,Jo),new Bn(4,4,16,16,Tr),new Bn(8,16,32,32,Tr),new Bn(8,16,128,128,Tr),new Bn(8,32,128,256,Tr),new Bn(32,128,258,1024,Tr),new Bn(32,258,258,4096,Tr)],D0=n=>{n.window_size=2*n.w_size,Ni(n.head),n.max_lazy_match=As[n.level].max_lazy,n.good_match=As[n.level].good_length,n.nice_match=As[n.level].nice_length,n.max_chain_length=As[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=st-1,n.match_available=0,n.ins_h=0};function I0(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Do,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(M0*2),this.dyn_dtree=new Uint16Array((2*S0+1)*2),this.bl_tree=new Uint16Array((2*w0+1)*2),Ni(this.dyn_ltree),Ni(this.dyn_dtree),Ni(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(T0+1),this.heap=new Uint16Array(2*Hl+1),Ni(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Hl+1),Ni(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const na=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==rs&&e.status!==Lc&&e.status!==Gl&&e.status!==Vl&&e.status!==Wl&&e.status!==$l&&e.status!==sr&&e.status!==Ts?1:0},zf=n=>{if(na(n))return ar(n,$n);n.total_in=n.total_out=0,n.data_type=g0;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Lc:e.wrap?rs:sr,n.adler=e.wrap===2?0:1,e.last_flush=-2,a0(e),Ft},Hf=n=>{const e=zf(n);return e===Ft&&D0(n.state),e},U0=(n,e)=>na(n)||n.state.wrap!==2?$n:(n.state.gzhead=e,Ft),Gf=(n,e,t,i,r,s)=>{if(!n)return $n;let a=1;if(e===h0&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>v0||t!==Do||i<8||i>15||e<0||e>9||s<0||s>m0||i===8&&a!==1)return ar(n,$n);i===8&&(i=9);const o=new I0;return n.state=o,o.strm=n,o.status=rs,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+st-1)/st),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,Hf(n)},P0=(n,e)=>Gf(n,e,Do,b0,x0,_0),O0=(n,e)=>{if(na(n)||e>gu||e<0)return n?ar(n,$n):$n;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===Ts&&e!==Mn)return ar(n,n.avail_out===0?Ko:$n);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(fn(n),n.avail_out===0)return t.last_flush=-1,Ft}else if(n.avail_in===0&&bu(e)<=bu(i)&&e!==Mn)return ar(n,Ko);if(t.status===Ts&&n.avail_in!==0)return ar(n,Ko);if(t.status===rs&&t.wrap===0&&(t.status=sr),t.status===rs){let r=Do+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=ga||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=A0),r+=31-r%31,xs(t,r),t.strstart!==0&&(xs(t,n.adler>>>16),xs(t,n.adler&65535)),n.adler=1,t.status=sr,fn(n),t.pending!==0)return t.last_flush=-1,Ft}if(t.status===Lc){if(n.adler=0,ut(t,31),ut(t,139),ut(t,8),t.gzhead)ut(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),ut(t,t.gzhead.time&255),ut(t,t.gzhead.time>>8&255),ut(t,t.gzhead.time>>16&255),ut(t,t.gzhead.time>>24&255),ut(t,t.level===9?2:t.strategy>=ga||t.level<2?4:0),ut(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(ut(t,t.gzhead.extra.length&255),ut(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Ot(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Gl;else if(ut(t,0),ut(t,0),ut(t,0),ut(t,0),ut(t,0),ut(t,t.level===9?2:t.strategy>=ga||t.level<2?4:0),ut(t,R0),t.status=sr,fn(n),t.pending!==0)return t.last_flush=-1,Ft}if(t.status===Gl){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,fn(n),t.pending!==0)return t.last_flush=-1,Ft;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Vl}if(t.status===Vl){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r)),fn(n),t.pending!==0)return t.last_flush=-1,Ft;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,ut(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Wl}if(t.status===Wl){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r)),fn(n),t.pending!==0)return t.last_flush=-1,Ft;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,ut(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Ot(n.adler,t.pending_buf,t.pending-r,r))}t.status=$l}if(t.status===$l){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(fn(n),t.pending!==0))return t.last_flush=-1,Ft;ut(t,n.adler&255),ut(t,n.adler>>8&255),n.adler=0}if(t.status=sr,fn(n),t.pending!==0)return t.last_flush=-1,Ft}if(n.avail_in!==0||t.lookahead!==0||e!==Pi&&t.status!==Ts){let r=t.level===0?Ff(t,e):t.strategy===ga?k0(t,e):t.strategy===p0?L0(t,e):As[t.level].func(t,e);if((r===fr||r===gs)&&(t.status=Ts),r===Qt||r===fr)return n.avail_out===0&&(t.last_flush=-1),Ft;if(r===_s&&(e===c0?l0(t):e!==gu&&(zl(t,0,0,!1),e===u0&&(Ni(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),fn(n),n.avail_out===0))return t.last_flush=-1,Ft}return e!==Mn?Ft:t.wrap<=0?vu:(t.wrap===2?(ut(t,n.adler&255),ut(t,n.adler>>8&255),ut(t,n.adler>>16&255),ut(t,n.adler>>24&255),ut(t,n.total_in&255),ut(t,n.total_in>>8&255),ut(t,n.total_in>>16&255),ut(t,n.total_in>>24&255)):(xs(t,n.adler>>>16),xs(t,n.adler&65535)),fn(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Ft:vu)},B0=n=>{if(na(n))return $n;const e=n.state.status;return n.state=null,e===sr?ar(n,d0):Ft},F0=(n,e)=>{let t=e.length;if(na(n))return $n;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==rs||i.lookahead)return $n;if(r===1&&(n.adler=Ws(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(Ni(i.head),i.strstart=0,i.block_start=0,i.insert=0);let l=new Uint8Array(i.w_size);l.set(e.subarray(t-i.w_size,t),0),e=l,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,ss(i);i.lookahead>=st;){let l=i.strstart,c=i.lookahead-(st-1);do i.ins_h=Oi(i,i.ins_h,i.window[l+st-1]),i.prev[l&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=l,l++;while(--c);i.strstart=l,i.lookahead=st-1,ss(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=st-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,Ft};var z0=P0,H0=Gf,G0=Hf,V0=zf,W0=U0,$0=O0,X0=B0,Z0=F0,q0="pako deflate (from Nodeca project)",Ls={deflateInit:z0,deflateInit2:H0,deflateReset:G0,deflateResetKeep:V0,deflateSetHeader:W0,deflate:$0,deflateEnd:X0,deflateSetDictionary:Z0,deflateInfo:q0};const Y0=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var j0=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)Y0(t,i)&&(n[i]=t[i])}}return n},K0=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},Io={assign:j0,flattenChunks:K0};let Vf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Vf=!1}const $s=new Uint8Array(256);for(let n=0;n<256;n++)$s[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;$s[254]=$s[254]=1;var J0=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const Q0=(n,e)=>{if(e<65534&&n.subarray&&Vf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var ev=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=$s[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return Q0(s,r)},tv=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+$s[n[t]]>e?t:e},Xs={string2buf:J0,buf2string:ev,utf8border:tv};function nv(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Wf=nv;const $f=Object.prototype.toString,{Z_NO_FLUSH:iv,Z_SYNC_FLUSH:rv,Z_FULL_FLUSH:sv,Z_FINISH:av,Z_OK:io,Z_STREAM_END:ov,Z_DEFAULT_COMPRESSION:lv,Z_DEFAULT_STRATEGY:cv,Z_DEFLATED:uv}=yr;function ia(n){this.options=Io.assign({level:lv,method:uv,chunkSize:16384,windowBits:15,memLevel:8,strategy:cv},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Wf,this.strm.avail_out=0;let t=Ls.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==io)throw new Error(hr[t]);if(e.header&&Ls.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Xs.string2buf(e.dictionary):$f.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Ls.deflateSetDictionary(this.strm,i),t!==io)throw new Error(hr[t]);this._dict_set=!0}}ia.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?av:iv,typeof n=="string"?t.input=Xs.string2buf(n):$f.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===rv||s===sv)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=Ls.deflate(t,s),r===ov)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=Ls.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===io;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};ia.prototype.onData=function(n){this.chunks.push(n)};ia.prototype.onEnd=function(n){n===io&&(this.result=Io.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function kc(n,e){const t=new ia(e);if(t.push(n,!0),t.err)throw t.msg||hr[t.err];return t.result}function dv(n,e){return e=e||{},e.raw=!0,kc(n,e)}function hv(n,e){return e=e||{},e.gzip=!0,kc(n,e)}var fv=ia,pv=kc,mv=dv,_v=hv,gv=yr,vv={Deflate:fv,deflate:pv,deflateRaw:mv,gzip:_v,constants:gv};const va=16209,bv=16191;var xv=function(e,t){let i,r,s,a,o,l,c,u,h,d,f,_,g,m,p,E,v,y,M,R,A,z,b,S;const O=e.state;i=e.next_in,b=e.input,r=i+(e.avail_in-5),s=e.next_out,S=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),l=O.dmax,c=O.wsize,u=O.whave,h=O.wnext,d=O.window,f=O.hold,_=O.bits,g=O.lencode,m=O.distcode,p=(1<<O.lenbits)-1,E=(1<<O.distbits)-1;e:do{_<15&&(f+=b[i++]<<_,_+=8,f+=b[i++]<<_,_+=8),v=g[f&p];t:for(;;){if(y=v>>>24,f>>>=y,_-=y,y=v>>>16&255,y===0)S[s++]=v&65535;else if(y&16){M=v&65535,y&=15,y&&(_<y&&(f+=b[i++]<<_,_+=8),M+=f&(1<<y)-1,f>>>=y,_-=y),_<15&&(f+=b[i++]<<_,_+=8,f+=b[i++]<<_,_+=8),v=m[f&E];n:for(;;){if(y=v>>>24,f>>>=y,_-=y,y=v>>>16&255,y&16){if(R=v&65535,y&=15,_<y&&(f+=b[i++]<<_,_+=8,_<y&&(f+=b[i++]<<_,_+=8)),R+=f&(1<<y)-1,R>l){e.msg="invalid distance too far back",O.mode=va;break e}if(f>>>=y,_-=y,y=s-a,R>y){if(y=R-y,y>u&&O.sane){e.msg="invalid distance too far back",O.mode=va;break e}if(A=0,z=d,h===0){if(A+=c-y,y<M){M-=y;do S[s++]=d[A++];while(--y);A=s-R,z=S}}else if(h<y){if(A+=c+h-y,y-=h,y<M){M-=y;do S[s++]=d[A++];while(--y);if(A=0,h<M){y=h,M-=y;do S[s++]=d[A++];while(--y);A=s-R,z=S}}}else if(A+=h-y,y<M){M-=y;do S[s++]=d[A++];while(--y);A=s-R,z=S}for(;M>2;)S[s++]=z[A++],S[s++]=z[A++],S[s++]=z[A++],M-=3;M&&(S[s++]=z[A++],M>1&&(S[s++]=z[A++]))}else{A=s-R;do S[s++]=S[A++],S[s++]=S[A++],S[s++]=S[A++],M-=3;while(M>2);M&&(S[s++]=S[A++],M>1&&(S[s++]=S[A++]))}}else if(y&64){e.msg="invalid distance code",O.mode=va;break e}else{v=m[(v&65535)+(f&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){O.mode=bv;break e}else{e.msg="invalid literal/length code",O.mode=va;break e}else{v=g[(v&65535)+(f&(1<<y)-1)];continue t}break}}while(i<r&&s<o);M=_>>3,i-=M,_-=M<<3,f&=(1<<_)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),O.hold=f,O.bits=_};const Ar=15,xu=852,yu=592,Eu=0,Qo=1,Su=2,yv=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Ev=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Sv=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),wv=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Mv=(n,e,t,i,r,s,a,o)=>{const l=o.bits;let c=0,u=0,h=0,d=0,f=0,_=0,g=0,m=0,p=0,E=0,v,y,M,R,A,z=null,b;const S=new Uint16Array(Ar+1),O=new Uint16Array(Ar+1);let te=null,F,I,D;for(c=0;c<=Ar;c++)S[c]=0;for(u=0;u<i;u++)S[e[t+u]]++;for(f=l,d=Ar;d>=1&&S[d]===0;d--);if(f>d&&(f=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(h=1;h<d&&S[h]===0;h++);for(f<h&&(f=h),m=1,c=1;c<=Ar;c++)if(m<<=1,m-=S[c],m<0)return-1;if(m>0&&(n===Eu||d!==1))return-1;for(O[1]=0,c=1;c<Ar;c++)O[c+1]=O[c]+S[c];for(u=0;u<i;u++)e[t+u]!==0&&(a[O[e[t+u]]++]=u);if(n===Eu?(z=te=a,b=20):n===Qo?(z=yv,te=Ev,b=257):(z=Sv,te=wv,b=0),E=0,u=0,c=h,A=s,_=f,g=0,M=-1,p=1<<f,R=p-1,n===Qo&&p>xu||n===Su&&p>yu)return 1;for(;;){F=c-g,a[u]+1<b?(I=0,D=a[u]):a[u]>=b?(I=te[a[u]-b],D=z[a[u]-b]):(I=32+64,D=0),v=1<<c-g,y=1<<_,h=y;do y-=v,r[A+(E>>g)+y]=F<<24|I<<16|D|0;while(y!==0);for(v=1<<c-1;E&v;)v>>=1;if(v!==0?(E&=v-1,E+=v):E=0,u++,--S[c]===0){if(c===d)break;c=e[t+a[u]]}if(c>f&&(E&R)!==M){for(g===0&&(g=f),A+=h,_=c-g,m=1<<_;_+g<d&&(m-=S[_+g],!(m<=0));)_++,m<<=1;if(p+=1<<_,n===Qo&&p>xu||n===Su&&p>yu)return 1;M=E&R,r[M]=f<<24|_<<16|A-s|0}}return E!==0&&(r[A+E]=c-g<<24|64<<16|0),o.bits=f,0};var ks=Mv;const Tv=0,Xf=1,Zf=2,{Z_FINISH:wu,Z_BLOCK:Av,Z_TREES:ba,Z_OK:pr,Z_STREAM_END:Rv,Z_NEED_DICT:Cv,Z_STREAM_ERROR:Tn,Z_DATA_ERROR:qf,Z_MEM_ERROR:Yf,Z_BUF_ERROR:Nv,Z_DEFLATED:Mu}=yr,Uo=16180,Tu=16181,Au=16182,Ru=16183,Cu=16184,Nu=16185,Lu=16186,ku=16187,Du=16188,Iu=16189,ro=16190,ri=16191,el=16192,Uu=16193,tl=16194,Pu=16195,Ou=16196,Bu=16197,Fu=16198,xa=16199,ya=16200,zu=16201,Hu=16202,Gu=16203,Vu=16204,Wu=16205,nl=16206,$u=16207,Xu=16208,Et=16209,jf=16210,Kf=16211,Lv=852,kv=592,Dv=15,Iv=Dv,Zu=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Uv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Er=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<Uo||e.mode>Kf?1:0},Jf=n=>{if(Er(n))return Tn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=Uo,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(Lv),e.distcode=e.distdyn=new Int32Array(kv),e.sane=1,e.back=-1,pr},Qf=n=>{if(Er(n))return Tn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,Jf(n)},ep=(n,e)=>{let t;if(Er(n))return Tn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Tn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,Qf(n))},tp=(n,e)=>{if(!n)return Tn;const t=new Uv;n.state=t,t.strm=n,t.window=null,t.mode=Uo;const i=ep(n,e);return i!==pr&&(n.state=null),i},Pv=n=>tp(n,Iv);let qu=!0,il,rl;const Ov=n=>{if(qu){il=new Int32Array(512),rl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(ks(Xf,n.lens,0,288,il,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;ks(Zf,n.lens,0,32,rl,0,n.work,{bits:5}),qu=!1}n.lencode=il,n.lenbits=9,n.distcode=rl,n.distbits=5},np=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},Bv=(n,e)=>{let t,i,r,s,a,o,l,c,u,h,d,f,_,g,m=0,p,E,v,y,M,R,A,z;const b=new Uint8Array(4);let S,O;const te=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Er(n)||!n.output||!n.input&&n.avail_in!==0)return Tn;t=n.state,t.mode===ri&&(t.mode=el),a=n.next_out,r=n.output,l=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,c=t.hold,u=t.bits,h=o,d=l,z=pr;e:for(;;)switch(t.mode){case Uo:if(t.wrap===0){t.mode=el;break}for(;u<16;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(t.wrap&2&&c===35615){t.wbits===0&&(t.wbits=15),t.check=0,b[0]=c&255,b[1]=c>>>8&255,t.check=Ot(t.check,b,2,0),c=0,u=0,t.mode=Tu;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((c&255)<<8)+(c>>8))%31){n.msg="incorrect header check",t.mode=Et;break}if((c&15)!==Mu){n.msg="unknown compression method",t.mode=Et;break}if(c>>>=4,u-=4,A=(c&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){n.msg="invalid window size",t.mode=Et;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=c&512?Iu:ri,c=0,u=0;break;case Tu:for(;u<16;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(t.flags=c,(t.flags&255)!==Mu){n.msg="unknown compression method",t.mode=Et;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=Et;break}t.head&&(t.head.text=c>>8&1),t.flags&512&&t.wrap&4&&(b[0]=c&255,b[1]=c>>>8&255,t.check=Ot(t.check,b,2,0)),c=0,u=0,t.mode=Au;case Au:for(;u<32;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.head&&(t.head.time=c),t.flags&512&&t.wrap&4&&(b[0]=c&255,b[1]=c>>>8&255,b[2]=c>>>16&255,b[3]=c>>>24&255,t.check=Ot(t.check,b,4,0)),c=0,u=0,t.mode=Ru;case Ru:for(;u<16;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=c&255,t.head.os=c>>8),t.flags&512&&t.wrap&4&&(b[0]=c&255,b[1]=c>>>8&255,t.check=Ot(t.check,b,2,0)),c=0,u=0,t.mode=Cu;case Cu:if(t.flags&1024){for(;u<16;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.length=c,t.head&&(t.head.extra_len=c),t.flags&512&&t.wrap&4&&(b[0]=c&255,b[1]=c>>>8&255,t.check=Ot(t.check,b,2,0)),c=0,u=0}else t.head&&(t.head.extra=null);t.mode=Nu;case Nu:if(t.flags&1024&&(f=t.length,f>o&&(f=o),f&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+f),A)),t.flags&512&&t.wrap&4&&(t.check=Ot(t.check,i,f,s)),o-=f,s+=f,t.length-=f),t.length))break e;t.length=0,t.mode=Lu;case Lu:if(t.flags&2048){if(o===0)break e;f=0;do A=i[s+f++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Ot(t.check,i,f,s)),o-=f,s+=f,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=ku;case ku:if(t.flags&4096){if(o===0)break e;f=0;do A=i[s+f++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&f<o);if(t.flags&512&&t.wrap&4&&(t.check=Ot(t.check,i,f,s)),o-=f,s+=f,A)break e}else t.head&&(t.head.comment=null);t.mode=Du;case Du:if(t.flags&512){for(;u<16;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(t.wrap&4&&c!==(t.check&65535)){n.msg="header crc mismatch",t.mode=Et;break}c=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ri;break;case Iu:for(;u<32;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}n.adler=t.check=Zu(c),c=0,u=0,t.mode=ro;case ro:if(t.havedict===0)return n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=u,Cv;n.adler=t.check=1,t.mode=ri;case ri:if(e===Av||e===ba)break e;case el:if(t.last){c>>>=u&7,u-=u&7,t.mode=nl;break}for(;u<3;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}switch(t.last=c&1,c>>>=1,u-=1,c&3){case 0:t.mode=Uu;break;case 1:if(Ov(t),t.mode=xa,e===ba){c>>>=2,u-=2;break e}break;case 2:t.mode=Ou;break;case 3:n.msg="invalid block type",t.mode=Et}c>>>=2,u-=2;break;case Uu:for(c>>>=u&7,u-=u&7;u<32;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if((c&65535)!==(c>>>16^65535)){n.msg="invalid stored block lengths",t.mode=Et;break}if(t.length=c&65535,c=0,u=0,t.mode=tl,e===ba)break e;case tl:t.mode=Pu;case Pu:if(f=t.length,f){if(f>o&&(f=o),f>l&&(f=l),f===0)break e;r.set(i.subarray(s,s+f),a),o-=f,s+=f,l-=f,a+=f,t.length-=f;break}t.mode=ri;break;case Ou:for(;u<14;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(t.nlen=(c&31)+257,c>>>=5,u-=5,t.ndist=(c&31)+1,c>>>=5,u-=5,t.ncode=(c&15)+4,c>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=Et;break}t.have=0,t.mode=Bu;case Bu:for(;t.have<t.ncode;){for(;u<3;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.lens[te[t.have++]]=c&7,c>>>=3,u-=3}for(;t.have<19;)t.lens[te[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,S={bits:t.lenbits},z=ks(Tv,t.lens,0,19,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid code lengths set",t.mode=Et;break}t.have=0,t.mode=Fu;case Fu:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[c&(1<<t.lenbits)-1],p=m>>>24,E=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(v<16)c>>>=p,u-=p,t.lens[t.have++]=v;else{if(v===16){for(O=p+2;u<O;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(c>>>=p,u-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=Et;break}A=t.lens[t.have-1],f=3+(c&3),c>>>=2,u-=2}else if(v===17){for(O=p+3;u<O;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}c>>>=p,u-=p,A=0,f=3+(c&7),c>>>=3,u-=3}else{for(O=p+7;u<O;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}c>>>=p,u-=p,A=0,f=11+(c&127),c>>>=7,u-=7}if(t.have+f>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=Et;break}for(;f--;)t.lens[t.have++]=A}}if(t.mode===Et)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=Et;break}if(t.lenbits=9,S={bits:t.lenbits},z=ks(Xf,t.lens,0,t.nlen,t.lencode,0,t.work,S),t.lenbits=S.bits,z){n.msg="invalid literal/lengths set",t.mode=Et;break}if(t.distbits=6,t.distcode=t.distdyn,S={bits:t.distbits},z=ks(Zf,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,S),t.distbits=S.bits,z){n.msg="invalid distances set",t.mode=Et;break}if(t.mode=xa,e===ba)break e;case xa:t.mode=ya;case ya:if(o>=6&&l>=258){n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=u,xv(n,d),a=n.next_out,r=n.output,l=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,c=t.hold,u=t.bits,t.mode===ri&&(t.back=-1);break}for(t.back=0;m=t.lencode[c&(1<<t.lenbits)-1],p=m>>>24,E=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(E&&!(E&240)){for(y=p,M=E,R=v;m=t.lencode[R+((c&(1<<y+M)-1)>>y)],p=m>>>24,E=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}c>>>=y,u-=y,t.back+=y}if(c>>>=p,u-=p,t.back+=p,t.length=v,E===0){t.mode=Wu;break}if(E&32){t.back=-1,t.mode=ri;break}if(E&64){n.msg="invalid literal/length code",t.mode=Et;break}t.extra=E&15,t.mode=zu;case zu:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.length+=c&(1<<t.extra)-1,c>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Hu;case Hu:for(;m=t.distcode[c&(1<<t.distbits)-1],p=m>>>24,E=m>>>16&255,v=m&65535,!(p<=u);){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(!(E&240)){for(y=p,M=E,R=v;m=t.distcode[R+((c&(1<<y+M)-1)>>y)],p=m>>>24,E=m>>>16&255,v=m&65535,!(y+p<=u);){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}c>>>=y,u-=y,t.back+=y}if(c>>>=p,u-=p,t.back+=p,E&64){n.msg="invalid distance code",t.mode=Et;break}t.offset=v,t.extra=E&15,t.mode=Gu;case Gu:if(t.extra){for(O=t.extra;u<O;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}t.offset+=c&(1<<t.extra)-1,c>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=Et;break}t.mode=Vu;case Vu:if(l===0)break e;if(f=d-l,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=Et;break}f>t.wnext?(f-=t.wnext,_=t.wsize-f):_=t.wnext-f,f>t.length&&(f=t.length),g=t.window}else g=r,_=a-t.offset,f=t.length;f>l&&(f=l),l-=f,t.length-=f;do r[a++]=g[_++];while(--f);t.length===0&&(t.mode=ya);break;case Wu:if(l===0)break e;r[a++]=t.length,l--,t.mode=ya;break;case nl:if(t.wrap){for(;u<32;){if(o===0)break e;o--,c|=i[s++]<<u,u+=8}if(d-=l,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Ot(t.check,r,d,a-d):Ws(t.check,r,d,a-d)),d=l,t.wrap&4&&(t.flags?c:Zu(c))!==t.check){n.msg="incorrect data check",t.mode=Et;break}c=0,u=0}t.mode=$u;case $u:if(t.wrap&&t.flags){for(;u<32;){if(o===0)break e;o--,c+=i[s++]<<u,u+=8}if(t.wrap&4&&c!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=Et;break}c=0,u=0}t.mode=Xu;case Xu:z=Rv;break e;case Et:z=qf;break e;case jf:return Yf;case Kf:default:return Tn}return n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=u,(t.wsize||d!==n.avail_out&&t.mode<Et&&(t.mode<nl||e!==wu))&&np(n,n.output,n.next_out,d-n.avail_out),h-=n.avail_in,d-=n.avail_out,n.total_in+=h,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Ot(t.check,r,d,n.next_out-d):Ws(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ri?128:0)+(t.mode===xa||t.mode===tl?256:0),(h===0&&d===0||e===wu)&&z===pr&&(z=Nv),z},Fv=n=>{if(Er(n))return Tn;let e=n.state;return e.window&&(e.window=null),n.state=null,pr},zv=(n,e)=>{if(Er(n))return Tn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,pr):Tn},Hv=(n,e)=>{const t=e.length;let i,r,s;return Er(n)||(i=n.state,i.wrap!==0&&i.mode!==ro)?Tn:i.mode===ro&&(r=1,r=Ws(r,e,t,0),r!==i.check)?qf:(s=np(n,e,t,t),s?(i.mode=jf,Yf):(i.havedict=1,pr))};var Gv=Qf,Vv=ep,Wv=Jf,$v=Pv,Xv=tp,Zv=Bv,qv=Fv,Yv=zv,jv=Hv,Kv="pako inflate (from Nodeca project)",fi={inflateReset:Gv,inflateReset2:Vv,inflateResetKeep:Wv,inflateInit:$v,inflateInit2:Xv,inflate:Zv,inflateEnd:qv,inflateGetHeader:Yv,inflateSetDictionary:jv,inflateInfo:Kv};function Jv(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Qv=Jv;const ip=Object.prototype.toString,{Z_NO_FLUSH:eb,Z_FINISH:tb,Z_OK:Zs,Z_STREAM_END:sl,Z_NEED_DICT:al,Z_STREAM_ERROR:nb,Z_DATA_ERROR:Yu,Z_MEM_ERROR:ib}=yr;function ra(n){this.options=Io.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Wf,this.strm.avail_out=0;let t=fi.inflateInit2(this.strm,e.windowBits);if(t!==Zs)throw new Error(hr[t]);if(this.header=new Qv,fi.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Xs.string2buf(e.dictionary):ip.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=fi.inflateSetDictionary(this.strm,e.dictionary),t!==Zs)))throw new Error(hr[t])}ra.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?tb:eb,ip.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=fi.inflate(t,a),s===al&&r&&(s=fi.inflateSetDictionary(t,r),s===Zs?s=fi.inflate(t,a):s===Yu&&(s=al));t.avail_in>0&&s===sl&&t.state.wrap>0&&n[t.next_in]!==0;)fi.inflateReset(t),s=fi.inflate(t,a);switch(s){case nb:case Yu:case al:case ib:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===sl))if(this.options.to==="string"){let l=Xs.utf8border(t.output,t.next_out),c=t.next_out-l,u=Xs.buf2string(t.output,l);t.next_out=c,t.avail_out=i-c,c&&t.output.set(t.output.subarray(l,l+c),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===Zs&&o===0)){if(s===sl)return s=fi.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};ra.prototype.onData=function(n){this.chunks.push(n)};ra.prototype.onEnd=function(n){n===Zs&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Io.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Dc(n,e){const t=new ra(e);if(t.push(n),t.err)throw t.msg||hr[t.err];return t.result}function rb(n,e){return e=e||{},e.raw=!0,Dc(n,e)}var sb=ra,ab=Dc,ob=rb,lb=Dc,cb=yr,ub={Inflate:sb,inflate:ab,inflateRaw:ob,ungzip:lb,constants:cb};const{Deflate:db,deflate:hb,deflateRaw:fb,gzip:pb}=vv,{Inflate:mb,inflate:_b,inflateRaw:gb,ungzip:vb}=ub;var bb=db,xb=hb,yb=fb,Eb=pb,Sb=mb,wb=_b,rp=gb,Mb=vb,Tb=yr,qs={Deflate:bb,deflate:xb,deflateRaw:yb,gzip:Eb,Inflate:Sb,inflate:wb,inflateRaw:rp,ungzip:Mb,constants:Tb},jn;(n=>{function e(c){return new Promise(u=>setTimeout(u,c))}n.wait=e;const t=` 
	\\=+-/*:[](){}`.split("").map(c=>c.charCodeAt(0)),i=8;function r(c){if(c.byteLength==0)throw new Error("isBinary was called with no data.");const u=new Jt(c);let h=[],d=0;for(;!u.eof;){const _=u.readNumber("Uint8");t.includes(_)?(d>0&&h.push(d),d=0):d++}return h.reduce((_,g)=>_+=g/h.length,0)>i}n.isBinary=r;function s(c){return c instanceof ArrayBuffer?c:c.buffer}n.getBuffer=s;function a(c,u){let h=new Array(c);for(let d=0;d<c;d++)h[d]=u(d);return h}n.initArray=a;let o=0;function l(){return o++}n.getID=l})(jn||(jn={}));class Ab{constructor(e){q(this,"data");q(this,"pos");this.data=new Uint8Array(jn.getBuffer(e)),this.pos=0}readByte(){return this.data[this.pos++]}}class Rb{constructor(e,t){q(this,"windowBuffer");q(this,"pos",0);q(this,"streamPos",0);q(this,"outputPos",0);this.windowSize=e,this.outputBuffer=t,this.windowBuffer=new Uint8Array(this.windowSize)}flush(){let e=this.pos-this.streamPos;e!==0&&(this.outputBuffer.set(this.windowBuffer.subarray(0,e),this.outputPos),this.outputPos+=e,this.pos>=this.windowSize&&(this.pos=0),this.streamPos=this.pos)}copyBlock(e,t){let i=this.pos-e-1;for(i<0&&(i+=this.windowSize);t--;)i>=this.windowSize&&(i=0),this.windowBuffer[this.pos++]=this.windowBuffer[i++],this.pos>=this.windowSize&&this.flush()}putByte(e){this.windowBuffer[this.pos++]=e,this.pos>=this.windowSize&&this.flush()}getByte(e){let t=this.pos-e-1;return t<0&&(t+=this.windowSize),this.windowBuffer[t]}}class Cb{constructor(e){q(this,"code",0);q(this,"range",-1);this.stream=e;for(let t=0;t<5;t++)this.code=this.code<<8|this.stream.readByte()}decodeDirectBits(e){var t=0,i;for(let r=0;r<e;r++)this.range>>>=1,i=this.code-this.range>>>31,this.code-=this.range&i-1,t=t<<1|1-i,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8);return t}decodeBit(e,t){var i=e[t],r=(this.range>>>11)*i;return(this.code^2147483648)<(r^2147483648)?(this.range=r,e[t]+=2048-i>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),0):(this.range-=r,this.code-=r,e[t]-=i>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),1)}}function Fn(n){return jn.initArray(n,()=>1024)}class Ds{constructor(e){q(this,"models");this.numBitLevels=e,this.models=Fn(1<<this.numBitLevels)}decode(e){for(var t=1,i=this.numBitLevels;i--;)t=t<<1|e.decodeBit(this.models,t);return t-(1<<this.numBitLevels)}reverseDecode(e){for(var t=1,i=0,r=0,s;r<this.numBitLevels;++r)s=e.decodeBit(this.models,t),t=t<<1|s,i|=s<<r;return i}}function Nb(n,e,t,i){for(var r=1,s=0,a=0,o;a<i;++a)o=t.decodeBit(n,e+r),r=r<<1|o,s|=o<<a;return s}class ju{constructor(e){q(this,"choice",Fn(2));q(this,"lowCoder");q(this,"midCoder");q(this,"highCoder",new Ds(8));this.numPosStates=e,this.lowCoder=jn.initArray(this.numPosStates,()=>new Ds(3)),this.midCoder=jn.initArray(this.numPosStates,()=>new Ds(3))}decode(e,t){return e.decodeBit(this.choice,0)===0?this.lowCoder[t].decode(e):e.decodeBit(this.choice,1)===0?8+this.midCoder[t].decode(e):16+this.highCoder.decode(e)}}class Lb{constructor(){q(this,"decoders",Fn(768))}decodeNormal(e){let t=1;do t=t<<1|e.decodeBit(this.decoders,t);while(t<256);return t&255}decodeWithMatchByte(e,t){let i=1,r,s;do if(r=t>>7&1,t<<=1,s=e.decodeBit(this.decoders,(1+r<<8)+i),i=i<<1|s,r!==s){for(;i<256;)i=i<<1|e.decodeBit(this.decoders,i);break}while(i<256);return i&255}}class kb{constructor(e,t){q(this,"posMask",0);q(this,"coders");this.numPosBits=e,this.numPrevBits=t,this.posMask=(1<<this.numPosBits)-1;const i=1<<this.numPrevBits+this.numPosBits;this.coders=jn.initArray(i,()=>new Lb)}getDecoder(e,t){return this.coders[((e&this.posMask)<<this.numPrevBits)+((t&255)>>>8-this.numPrevBits)]}}class Db{constructor(e){q(this,"isMatchDecoders",Fn(192));q(this,"isRep0LongDecoders",Fn(192));q(this,"isRepDecoders",Fn(12));q(this,"isRepG0Decoders",Fn(12));q(this,"isRepG1Decoders",Fn(12));q(this,"isRepG2Decoders",Fn(12));q(this,"posDecoders",Fn(114));q(this,"posSlotDecoder",jn.initArray(4,()=>new Ds(6)));q(this,"posAlignDecoder",new Ds(4));q(this,"lenDecoder");q(this,"repLenDecoder");q(this,"literalDecoder");q(this,"dictionarySize",-1);q(this,"dictionarySizeCheck",-1);q(this,"posStateMask",0);if(this.dictionarySize=e.dictionarySize,this.dictionarySize==0)throw new Error("LZMA decoder initialized with invalid dictionary size.");this.dictionarySizeCheck=Math.max(this.dictionarySize,1);const t=e.lc,i=e.lp,r=e.pb,s=1<<r;if(!(t<=8&&i<=4&&r<=4))throw new Error("LZMA decoder initialized with invalid properties.");this.literalDecoder=new kb(i,t),this.lenDecoder=new ju(s),this.repLenDecoder=new ju(s),this.posStateMask=s-1}decodeBody(e,t,i){let r=0,s=0,a=0,o=0,l=0,c=0,u=0,h,d,f,_,g,m;const p=new Cb(e);if(t.byteLength<i)throw new Error("LZMA decoder read body with invalid size.");const E=new Rb(Math.max(this.dictionarySizeCheck,4096),t);for(;i<0||c<i;)if(h=c&this.posStateMask,p.decodeBit(this.isMatchDecoders,(r<<4)+h)===0)d=this.literalDecoder.getDecoder(c++,u),r>=7?u=d.decodeWithMatchByte(p,E.getByte(s)):u=d.decodeNormal(p),E.putByte(u),r=r<4?0:r-(r<10?3:6);else{if(p.decodeBit(this.isRepDecoders,r)===1)f=0,p.decodeBit(this.isRepG0Decoders,r)===0?p.decodeBit(this.isRep0LongDecoders,(r<<4)+h)===0&&(r=r<7?9:11,f=1):(p.decodeBit(this.isRepG1Decoders,r)===0?_=a:(p.decodeBit(this.isRepG2Decoders,r)===0?_=o:(_=l,l=o),o=a),a=s,s=_),f===0&&(f=2+this.repLenDecoder.decode(p,h),r=r<7?8:11);else if(l=o,o=a,a=s,f=2+this.lenDecoder.decode(p,h),r=r<7?7:10,g=this.posSlotDecoder[f<=5?f-2:3].decode(p),g>=4){if(m=(g>>1)-1,s=(2|g&1)<<m,g<14)s+=Nb(this.posDecoders,s-g-1,p,m);else if(s+=p.decodeDirectBits(m-4)<<4,s+=this.posAlignDecoder.reverseDecode(p),s<0){if(s===-1)break;return!1}}else s=g;if(s>=c||s>=this.dictionarySizeCheck)return!1;E.copyBlock(s,f),c+=f,u=E.getByte(0)}return E.flush(),!0}}function Ib(n){const e=new DataView(jn.getBuffer(n));let t=e.getUint8(0);const i=t%9;t=~~(t/9);const r=t%5,s=~~(t/5),a=e.getUint32(1,!0);return{lc:i,lp:r,pb:s,dictionarySize:a}}function Ub(n,e,t){const i=new Ab(n),r=new Uint8Array(t);if(!new Db(e).decodeBody(i,r,t))throw new Error("LZMA failed decompressing.");return r.buffer}var sp=(n=>(n[n.none=0]="none",n[n.shrunk=1]="shrunk",n[n.reduced_1=2]="reduced_1",n[n.reduced_2=3]="reduced_2",n[n.reduced_3=4]="reduced_3",n[n.reduced_4=5]="reduced_4",n[n.imploded=6]="imploded",n[n.deflated=8]="deflated",n[n.enhanced_deflated=9]="enhanced_deflated",n[n.pkware_dcl_imploded=10]="pkware_dcl_imploded",n[n.bzip2=12]="bzip2",n[n.lzma=14]="lzma",n[n.ibm_terse=18]="ibm_terse",n[n.ibm_lz77_z=19]="ibm_lz77_z",n[n.zstandard=93]="zstandard",n[n.mp3=94]="mp3",n[n.xz=95]="xz",n[n.jpeg=96]="jpeg",n[n.wavpack=97]="wavpack",n[n.ppmd=98]="ppmd",n[n.aex_encryption_marker=99]="aex_encryption_marker",n))(sp||{});class Ku{constructor(e,t,i,r=null){q(this,"viewer",null);q(this,"type",nt.File);q(this,"name");q(this,"parent");q(this,"zip");q(this,"options");q(this,"loadedBlob",null);this.zip=e,this.options=t,this.name=i,this.parent=r}async blob(){if(this.loadedBlob!=null)return this.loadedBlob;let e,t,i,r;if(this.options.type=="fileheader")e=this.options.compressionMethod,t=this.options.offset,i=this.options.compressedSize,r=this.options.uncompressedSize;else if(this.options.type=="centralfileheader"){const a=new Tc(this.zip);await a.load(30,this.options.offsetToLocalHeader),a.assertMagic("PK"),a.assertMagic(1027,"Uint16"),a.readNumber("Uint16"),a.readNumber("Uint16"),e=a.readNumber("Uint16"),a.readNumber("Uint32"),a.readNumber("Uint32"),i=a.readNumber("Uint32"),r=a.readNumber("Uint32");const o=a.readNumber("Uint16"),l=a.readNumber("Uint16");await a.load(o+l),a.readString(o,"utf-8"),a.readBuffer(l),t=a.blobPointer}else throw new Error("Zip file invalid options.");e!=0&&console.debug(`Decompressing file ${this.name} with ${sp[e]??is.hex(e,2)} compression method`);const s=this.zip.slice(t,t+i);switch(e){case 0:{this.loadedBlob=s;break}case 8:{const a=await s.arrayBuffer(),o=rp(a);this.loadedBlob=new Blob([o]);break}case 14:{const a=await s.arrayBuffer(),o=new Jt(a);o.readNumber("Uint8"),o.readNumber("Uint8");const l=o.readNumber("Uint16"),c=o.readBuffer(l),u=Ub(o.readBuffer(o.dataLeft),Ib(c),r);this.loadedBlob=new Blob([u]);break}default:throw new Error("Unknown zip file compression method.")}if(this.loadedBlob==null)throw new Error("Could not decompress zip file.");return this.loadedBlob}async buffer(){return await(await this.blob()).arrayBuffer()}}async function Pb(n){const i=[{start:Math.max(0,n.size-128),end:n.size},{start:Math.max(0,n.size-65558),end:n.size}],r=19280|1541<<16;for(const s of i){const a=n.slice(s.start,s.end),o=new DataView(await a.arrayBuffer());for(let l=o.byteLength-4;l>0;l--)if(o.getUint32(l,!0)==r)return n.size-(s.end-s.start)+l}return-1}async function Ob(n){const e=await n.blob(),t=new Tc(e),i=new on.fsDirectory_Container(n.name,n.parent),r=await Pb(await n.blob());if(r==-1)for(console.warn("Reading ZIP file without central directory.");!t.blobEof;){await t.load(4),t.assertMagic("PK");const s=t.readNumber("Uint16");switch(s){case 513:{await t.load(42),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32"),t.readNumber("Uint32"),t.readNumber("Uint32");const a=t.readNumber("Uint16"),o=t.readNumber("Uint16"),l=t.readNumber("Uint16");t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32"),await t.load(a+o+l),t.readString(a,"utf-8"),t.readBuffer(o),t.readString(l,"utf-8");break}case 1027:{await t.load(26),t.readNumber("Uint16"),t.readNumber("Uint16");const a=t.readNumber("Uint16");t.readNumber("Uint32"),t.readNumber("Uint32");const o=t.readNumber("Uint32"),l=t.readNumber("Uint32"),c=t.readNumber("Uint16"),u=t.readNumber("Uint16");await t.load(c+u);const h=t.readString(c,"utf-8");t.readBuffer(u),t.blobPointer;const d=h.split("/").pop();if(d==null)throw new Error("Failed to read filename in zip file.");if(o>0){const f=new Ku(e,{type:"fileheader",compressionMethod:a,offset:t.blobPointer,compressedSize:o,uncompressedSize:l},d);await on.setDeep(i,h,f)}t.blobPointer+=o;break}case 2055:{t.blobPointer+=12;break}case 1541:return i;default:throw new Error(`Invalid ZIP section type. ${s} at ${t.blobPointer-2}`)}}else{await t.load(22,r),t.assertMagic("PK"),t.assertMagic(1541,"Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16");const s=t.readNumber("Uint32"),a=t.readNumber("Uint32"),o=t.readNumber("Uint16");for(await t.load(o),t.readString(t.dataLeft),await t.load(s,a);!t.eof;){t.assertMagic("PK"),t.assertMagic(513,"Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32"),t.readNumber("Uint32");const l=t.readNumber("Uint32");t.readNumber("Uint32");const c=t.readNumber("Uint16"),u=t.readNumber("Uint16"),h=t.readNumber("Uint16");t.readNumber("Uint16"),t.readNumber("Uint16"),t.readNumber("Uint32");const d=t.readNumber("Uint32"),f=t.readString(c,"utf-8");t.readBuffer(u),t.readString(h,"utf-8");const _=f.split("/").pop();if(_==null)throw new Error("Failed to read filename in zip file.");if(l>0){const g=new Ku(e,{type:"centralfileheader",offsetToLocalHeader:d},_);await on.setDeep(i,f,g)}}}return i}const Bb={namespace:"zip",priority:1,isValid:async n=>n.type==nt.File&&n.name.endsWith(".zip"),transform:async n=>{if(n.type!=nt.File)throw new Error("Tried to create zip archive viewer with invalid entry type.");return await Ob(n)}};function Ic(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Sr=Ic();function ap(n){Sr=n}const op=/[&<>"']/,Fb=new RegExp(op.source,"g"),lp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,zb=new RegExp(lp.source,"g"),Hb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ju=n=>Hb[n];function Zt(n,e){if(e){if(op.test(n))return n.replace(Fb,Ju)}else if(lp.test(n))return n.replace(zb,Ju);return n}const Gb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cp(n){return n.replace(Gb,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Vb=/(^|[^\[])\^/g;function pt(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(i,r)=>(r=typeof r=="object"&&"source"in r?r.source:r,r=r.replace(Vb,"$1"),n=n.replace(i,r),t),getRegex:()=>new RegExp(n,e)};return t}const Wb=/[^\w:]/g,$b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Qu(n,e,t){if(n){let i;try{i=decodeURIComponent(cp(t)).replace(Wb,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!$b.test(t)&&(t=Yb(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ea={},Xb=/^[^:]+:\/*[^/]*$/,Zb=/^([^:]+:)[\s\S]*$/,qb=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Yb(n,e){Ea[" "+n]||(Xb.test(n)?Ea[" "+n]=n+"/":Ea[" "+n]=qa(n,"/",!0)),n=Ea[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(Zb,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(qb,"$1")+e:n+e}const so={exec:()=>null};function ed(n,e){const t=n.replace(/\|/g,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function qa(n,e,t){const i=n.length;if(i===0)return"";let r=0;for(;r<i;){const s=n.charAt(i-r-1);if(s===e&&!t)r++;else if(s!==e&&t)r++;else break}return n.slice(0,i-r)}function jb(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return-1}function Kb(n,e){!n||n.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(n.sanitize||n.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(n.highlight||n.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),n.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),n.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),n.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),n.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(n.headerIds||n.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function td(n,e,t,i){const r=e.href,s=e.title?Zt(e.title):null,a=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const o={type:"link",raw:t,href:r,title:s,text:a,tokens:i.inlineTokens(a)};return i.state.inLink=!1,o}return{type:"image",raw:t,href:r,title:s,text:Zt(a)}}function Jb(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[a]=s;return a.length>=i.length?r.slice(i.length):r}).join(`
`)}class ao{constructor(e){q(this,"options");q(this,"rules");q(this,"lexer");this.options=e||Sr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:qa(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=Jb(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const r=qa(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:s,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim();const r=i.length>1,s={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const a=new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",c=!1;for(;e;){let u=!1;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,p=>" ".repeat(3*p.length)),d=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=h.trimLeft()):(f=t[2].search(/[^ ]/),f=f>4?1:f,l=h.slice(f),f+=t[1].length);let _=!1;if(!h&&/^ *$/.test(d)&&(o+=d+`
`,e=e.substring(d.length+1),u=!0),!u){const p=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),E=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),v=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const M=e.split(`
`,1)[0];if(d=M,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),v.test(d)||y.test(d)||p.test(d)||E.test(e))break;if(d.search(/[^ ]/)>=f||!d.trim())l+=`
`+d.slice(f);else{if(_||h.search(/[^ ]/)>=4||v.test(h)||y.test(h)||E.test(h))break;l+=`
`+d}!_&&!d.trim()&&(_=!0),o+=M+`
`,e=e.substring(M.length+1),h=d.slice(f)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(o)&&(c=!0));let g=null,m;this.options.gfm&&(g=/^\[[ xX]\] /.exec(l),g&&(m=g[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!g,checked:m,loose:!1,text:l,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimRight(),s.items[s.items.length-1].text=l.trimRight(),s.raw=s.raw.trimRight();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const h=s.items[u].tokens.filter(f=>f.type==="space"),d=h.length>0&&h.some(f=>/\n.*\n/.test(f.raw));s.loose=d}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t){const i={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):Zt(t[0]),s=i;s.type="paragraph",s.text=r,s.tokens=this.lexer.inline(r)}return i}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){const i={type:"table",raw:t[0],header:ed(t[1]).map(r=>({text:r,tokens:[]})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){let r=i.align.length,s,a,o,l;for(s=0;s<r;s++){const c=i.align[s];c&&(/^ *-+: *$/.test(c)?i.align[s]="right":/^ *:-+: *$/.test(c)?i.align[s]="center":/^ *:-+ *$/.test(c)?i.align[s]="left":i.align[s]=null)}for(r=i.rows.length,s=0;s<r;s++)i.rows[s]=ed(i.rows[s],i.header.length).map(c=>({text:c,tokens:[]}));for(r=i.header.length,a=0;a<r;a++)i.header[a].tokens=this.lexer.inline(i.header[a].text);for(r=i.rows.length,a=0;a<r;a++)for(l=i.rows[a],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return i}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Zt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Zt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const a=qa(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{const a=jb(t[2],"()");if(a>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);a&&(r=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),td(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return td(i,r,i[0],this.lexer)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const a=[...r[0]].length-1;let o,l,c=a,u=0;const h=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+a);(r=h.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=[...o].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=[...e].slice(0,a+r.index+l+1).join("");if(Math.min(a,l)%2){const _=d.slice(1,-1);return{type:"em",raw:d,text:_,tokens:this.lexer.inlineTokens(_)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=Zt(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let r,s;return i[2]==="@"?(r=Zt(this.options.mangle?t(i[1]):i[1]),s="mailto:"+r):(r=Zt(i[1]),s=r),{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let r,s;if(i[2]==="@")r=Zt(this.options.mangle?t(i[0]):i[0]),s="mailto:"+r;else{let a;do a=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(a!==i[0]);r=Zt(i[0]),i[1]==="www."?s="http://"+i[0]:s=i[0]}return{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Zt(i[0]):i[0]:r=Zt(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}}const Te={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:so,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Te._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;Te._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;Te.def=pt(Te.def).replace("label",Te._label).replace("title",Te._title).getRegex();Te.bullet=/(?:[*+-]|\d{1,9}[.)])/;Te.listItemStart=pt(/^( *)(bull) */).replace("bull",Te.bullet).getRegex();Te.list=pt(Te.list).replace(/bull/g,Te.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Te.def.source+")").getRegex();Te._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";Te._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;Te.html=pt(Te.html,"i").replace("comment",Te._comment).replace("tag",Te._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();Te.lheading=pt(Te.lheading).replace(/bull/g,Te.bullet).getRegex();Te.paragraph=pt(Te._paragraph).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex();Te.blockquote=pt(Te.blockquote).replace("paragraph",Te.paragraph).getRegex();Te.normal={...Te};Te.gfm={...Te.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};Te.gfm.table=pt(Te.gfm.table).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex();Te.gfm.paragraph=pt(Te._paragraph).replace("hr",Te.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Te.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Te._tag).getRegex();Te.pedantic={...Te.normal,html:pt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Te._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:so,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:pt(Te.normal._paragraph).replace("hr",Te.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Te.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const pe={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:so,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:so,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};pe._punctuation="\\p{P}$+<=>`^|~";pe.punctuation=pt(pe.punctuation,"u").replace(/punctuation/g,pe._punctuation).getRegex();pe.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;pe.anyPunctuation=/\\[punct]/g;pe._escapes=/\\([punct])/g;pe._comment=pt(Te._comment).replace("(?:-->|$)","-->").getRegex();pe.emStrong.lDelim=pt(pe.emStrong.lDelim,"u").replace(/punct/g,pe._punctuation).getRegex();pe.emStrong.rDelimAst=pt(pe.emStrong.rDelimAst,"gu").replace(/punct/g,pe._punctuation).getRegex();pe.emStrong.rDelimUnd=pt(pe.emStrong.rDelimUnd,"gu").replace(/punct/g,pe._punctuation).getRegex();pe.anyPunctuation=pt(pe.anyPunctuation,"gu").replace(/punct/g,pe._punctuation).getRegex();pe._escapes=pt(pe._escapes,"gu").replace(/punct/g,pe._punctuation).getRegex();pe._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;pe._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;pe.autolink=pt(pe.autolink).replace("scheme",pe._scheme).replace("email",pe._email).getRegex();pe._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;pe.tag=pt(pe.tag).replace("comment",pe._comment).replace("attribute",pe._attribute).getRegex();pe._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;pe._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;pe._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;pe.link=pt(pe.link).replace("label",pe._label).replace("href",pe._href).replace("title",pe._title).getRegex();pe.reflink=pt(pe.reflink).replace("label",pe._label).replace("ref",Te._label).getRegex();pe.nolink=pt(pe.nolink).replace("ref",Te._label).getRegex();pe.reflinkSearch=pt(pe.reflinkSearch,"g").replace("reflink",pe.reflink).replace("nolink",pe.nolink).getRegex();pe.normal={...pe};pe.pedantic={...pe.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:pt(/^!?\[(label)\]\((.*?)\)/).replace("label",pe._label).getRegex(),reflink:pt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pe._label).getRegex()};pe.gfm={...pe.normal,escape:pt(pe.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};pe.gfm.url=pt(pe.gfm.url,"i").replace("email",pe.gfm._extended_email).getRegex();pe.breaks={...pe.gfm,br:pt(pe.br).replace("{2,}","*").getRegex(),text:pt(pe.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Qb(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function nd(n){let e="";for(let t=0;t<n.length;t++){const i=Math.random()>.5?"x"+n.charCodeAt(t).toString(16):n.charCodeAt(t).toString();e+="&#"+i+";"}return e}class Gn{constructor(e){q(this,"tokens");q(this,"options");q(this,"state");q(this,"tokenizer");q(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Sr,this.options.tokenizer=this.options.tokenizer||new ao,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Te.normal,inline:pe.normal};this.options.pedantic?(t.block=Te.pedantic,t.inline=pe.pedantic):this.options.gfm&&(t.block=Te.gfm,this.options.breaks?t.inline=pe.breaks:t.inline=pe.gfm),this.tokenizer.rules=t}static get rules(){return{block:Te,inline:pe}}static lex(e,t){return new Gn(t).lex(e)}static lexInline(e,t){return new Gn(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,c)=>l+"    ".repeat(c.length));let i,r,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=t[t.length-1],a&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i),a=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r,s,a=e,o,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,o.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,a,c)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e,nd)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,nd))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s,Qb)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class oo{constructor(e){q(this,"options");this.options=e||Sr}code(e,t,i){var s;const r=(s=(t||"").match(/^\S*/))==null?void 0:s[0];if(this.options.highlight){const a=this.options.highlight(e,r);a!=null&&a!==e&&(i=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+Zt(r)+'">'+(i?e:Zt(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:Zt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,i,r){if(this.options.headerIds){const s=this.options.headerPrefix+r.slug(i);return`<h${t} id="${s}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,i){const r=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e,t,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,i){const r=Qu(this.options.sanitize,this.options.baseUrl,e);if(r===null)return i;e=r;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){const r=Qu(this.options.sanitize,this.options.baseUrl,e);if(r===null)return i;e=r;let s=`<img src="${e}" alt="${i}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class Uc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class Pc{constructor(){q(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,r=0;if(this.seen.hasOwnProperty(i)){r=this.seen[e];do r++,i=e+"-"+r;while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=r,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class Vn{constructor(e){q(this,"options");q(this,"renderer");q(this,"textRenderer");q(this,"slugger");this.options=e||Sr,this.options.renderer=this.options.renderer||new oo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Uc,this.slugger=new Pc}static parse(e,t){return new Vn(t).parse(e)}static parseInline(e,t){return new Vn(t).parseInline(e)}parse(e,t=!0){let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=s,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){i+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const a=s;i+=this.renderer.heading(this.parseInline(a.tokens),a.depth,cp(this.parseInline(a.tokens,this.textRenderer)),this.slugger);continue}case"code":{const a=s;i+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=s;let o="",l="";for(let u=0;u<a.header.length;u++)l+=this.renderer.tablecell(this.parseInline(a.header[u].tokens),{header:!0,align:a.align[u]});o+=this.renderer.tablerow(l);let c="";for(let u=0;u<a.rows.length;u++){const h=a.rows[u];l="";for(let d=0;d<h.length;d++)l+=this.renderer.tablecell(this.parseInline(h[d].tokens),{header:!1,align:a.align[d]});c+=this.renderer.tablerow(l)}i+=this.renderer.table(o,c);continue}case"blockquote":{const a=s,o=this.parse(a.tokens);i+=this.renderer.blockquote(o);continue}case"list":{const a=s,o=a.ordered,l=a.start,c=a.loose;let u="";for(let h=0;h<a.items.length;h++){const d=a.items[h],f=d.checked,_=d.task;let g="";if(d.task){const m=this.renderer.checkbox(!!f);c?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=m+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=m+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:m}):g+=m}g+=this.parse(d.tokens,c),u+=this.renderer.listitem(g,_,!!f)}i+=this.renderer.list(u,o,l);continue}case"html":{const a=s;i+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=s;i+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=s,o=a.tokens?this.parseInline(a.tokens):a.text;for(;r+1<e.length&&e[r+1].type==="text";)a=e[++r],o+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);i+=t?this.renderer.paragraph(o):o;continue}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(e,t){t=t||this.renderer;let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=a||"";continue}}switch(s.type){case"escape":{const a=s;i+=t.text(a.text);break}case"html":{const a=s;i+=t.html(a.text);break}case"link":{const a=s;i+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break}case"image":{const a=s;i+=t.image(a.href,a.title,a.text);break}case"strong":{const a=s;i+=t.strong(this.parseInline(a.tokens,t));break}case"em":{const a=s;i+=t.em(this.parseInline(a.tokens,t));break}case"codespan":{const a=s;i+=t.codespan(a.text);break}case"br":{i+=t.br();break}case"del":{const a=s;i+=t.del(this.parseInline(a.tokens,t));break}case"text":{const a=s;i+=t.text(a.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}}class Is{constructor(e){q(this,"options");this.options=e||Sr}preprocess(e){return e}postprocess(e){return e}}q(Is,"passThroughHooks",new Set(["preprocess","postprocess"]));var ea,Zl,Ro,up;class ex{constructor(...e){$o(this,ea);$o(this,Ro);q(this,"defaults",Ic());q(this,"options",this.setOptions);q(this,"parse",fa(this,ea,Zl).call(this,Gn.lex,Vn.parse));q(this,"parseInline",fa(this,ea,Zl).call(this,Gn.lexInline,Vn.parseInline));q(this,"Parser",Vn);q(this,"parser",Vn.parse);q(this,"Renderer",oo);q(this,"TextRenderer",Uc);q(this,"Lexer",Gn);q(this,"lexer",Gn.lex);q(this,"Tokenizer",ao);q(this,"Slugger",Pc);q(this,"Hooks",Is);this.use(...e)}walkTokens(e,t){var r,s;let i=[];for(const a of e)switch(i=i.concat(t.call(this,a)),a.type){case"table":{const o=a;for(const l of o.header)i=i.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const c of l)i=i.concat(this.walkTokens(c.tokens,t));break}case"list":{const o=a;i=i.concat(this.walkTokens(o.items,t));break}default:{const o=a;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{i=i.concat(this.walkTokens(o[l],t))}):o.tokens&&(i=i.concat(this.walkTokens(o.tokens,t)))}}return i}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=t.renderers[s.name];a?t.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=t[s.level];a?a.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),i.renderer){const s=this.defaults.renderer||new oo(this.defaults);for(const a in i.renderer){const o=i.renderer[a],l=a,c=s[l];s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new ao(this.defaults);for(const a in i.tokenizer){const o=i.tokenizer[a],l=a,c=s[l];s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new Is;for(const a in i.hooks){const o=i.hooks[a],l=a,c=s[l];Is.passThroughHooks.has(a)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(s,u)).then(d=>c.call(s,d));const h=o.call(s,u);return c.call(s,h)}:s[l]=(...u)=>{let h=o.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens,a=i.walkTokens;r.walkTokens=function(o){let l=[];return l.push(a.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}ea=new WeakSet,Zl=function(e,t){return(i,r,s)=>{typeof r=="function"&&(s=r,r=null);const a={...r},o={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const l=fa(this,Ro,up).call(this,!!o.silent,!!o.async,s);if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(Kb(o,s),o.hooks&&(o.hooks.options=o),s){const c=s,u=o.highlight;let h;try{o.hooks&&(i=o.hooks.preprocess(i)),h=e(i,o)}catch(_){return l(_)}const d=_=>{let g;if(!_)try{o.walkTokens&&this.walkTokens(h,o.walkTokens),g=t(h,o),o.hooks&&(g=o.hooks.postprocess(g))}catch(m){_=m}return o.highlight=u,_?l(_):c(null,g)};if(!u||u.length<3||(delete o.highlight,!h.length))return d();let f=0;this.walkTokens(h,_=>{_.type==="code"&&(f++,setTimeout(()=>{u(_.text,_.lang,(g,m)=>{if(g)return d(g);m!=null&&m!==_.text&&(_.text=m,_.escaped=!0),f--,f===0&&d()})},0))}),f===0&&d();return}if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(c=>e(c,o)).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>t(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(l);try{o.hooks&&(i=o.hooks.preprocess(i));const c=e(i,o);o.walkTokens&&this.walkTokens(c,o.walkTokens);let u=t(c,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(c){return l(c)}}},Ro=new WeakSet,up=function(e,t,i){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+Zt(r.message+"",!0)+"</pre>";if(t)return Promise.resolve(s);if(i){i(null,s);return}return s}if(t)return Promise.reject(r);if(i){i(r);return}throw r}};const mr=new ex;function ft(n,e,t){return mr.parse(n,e,t)}ft.options=ft.setOptions=function(n){return mr.setOptions(n),ft.defaults=mr.defaults,ap(ft.defaults),ft};ft.getDefaults=Ic;ft.defaults=Sr;ft.use=function(...n){return mr.use(...n),ft.defaults=mr.defaults,ap(ft.defaults),ft};ft.walkTokens=function(n,e){return mr.walkTokens(n,e)};ft.parseInline=mr.parseInline;ft.Parser=Vn;ft.parser=Vn.parse;ft.Renderer=oo;ft.TextRenderer=Uc;ft.Lexer=Gn;ft.lexer=Gn.lex;ft.Tokenizer=ao;ft.Slugger=Pc;ft.Hooks=Is;ft.parse=ft;ft.options;ft.setOptions;ft.use;ft.walkTokens;ft.parseInline;const id=ft;Vn.parse;Gn.lex;function tx(n){return{c:L,l:L,m:L,p:L,d:L}}function nx(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:sx,then:rx,catch:ix,value:5};return vt(t=n[4].text(),i),{c(){e=ot(),i.block.c()},l(r){e=ot(),i.block.l(r)},m(r,s){we(r,e,s),i.block.m(r,i.anchor=s),i.mount=()=>e.parentNode,i.anchor=e},p(r,s){n=r,i.ctx=n,s&1&&t!==(t=n[4].text())&&vt(t,i)||xn(i,n,s)},d(r){r&&ae(e),i.block.d(r),i.token=null,i=null}}}function ix(n){return{c:L,l:L,m:L,p:L,d:L}}function rx(n){let e,t=id(n[5])+"",i;return{c(){e=new Zh(!1),i=ot(),this.h()},l(r){e=qh(r,!1),i=ot(),this.h()},h(){e.a=i},m(r,s){e.m(t,r,s),we(r,i,s)},p(r,s){s&1&&t!==(t=id(r[5])+"")&&e.p(t)},d(r){r&&(ae(i),e.d())}}}function sx(n){return{c:L,l:L,m:L,p:L,d:L}}function ax(n){return{c:L,l:L,m:L,p:L,d:L}}function ox(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:ax,then:nx,catch:tx,value:4};return vt(i=n[0].blob(),r),{c(){e=qe("div"),t=qe("div"),r.block.c(),this.h()},l(s){e=Ye(s,"DIV",{class:!0});var a=mt(e);t=Ye(a,"DIV",{class:!0});var o=mt(t);r.block.l(o),o.forEach(ae),a.forEach(ae),this.h()},h(){Se(t,"class","markdown-scroll svelte-1hmj7qw"),Se(e,"class","markdown-container svelte-1hmj7qw")},m(s,a){we(s,e,a),Tt(e,t),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null,n[2](t)},p(s,[a]){n=s,r.ctx=n,a&1&&i!==(i=n[0].blob())&&vt(i,r)||xn(r,n,a)},i:L,o:L,d(s){s&&ae(e),r.block.d(),r.token=null,r=null,n[2](null)}}}function lx(n,e,t){let{entry:i}=e,r,s;ps(()=>{s=new MutationObserver(()=>{r.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(l=>{l.id=l.innerText.toLowerCase()})}),s.observe(r,{childList:!0})}),jh(()=>{s==null||s.disconnect()});function a(o){ts[o?"unshift":"push"](()=>{r=o,t(1,r)})}return n.$$set=o=>{"entry"in o&&t(0,i=o.entry)},[i,r,a]}class dp extends Gt{constructor(e){super(),Vt(this,e,lx,ox,Bt,{entry:0})}}const cx={namespace:"markdown",priority:2,isValid:async n=>n.type==nt.File&&n.name.toLowerCase().endsWith(".md"),createViewer:async(n,e)=>{if(n.type==nt.File)new dp({target:e,props:{entry:n}});else throw new Error("Tried to create markdown viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/markdown.svg"};var lo;(n=>{function e(r){const s=new Image;return s.src=URL.createObjectURL(new Blob([r])),new Promise((a,o)=>{function l(){s.removeEventListener("load",l),s.removeEventListener("error",c),a(s)}function c(u){o(u.message),s.removeEventListener("load",l),s.removeEventListener("error",c)}s.addEventListener("load",l),s.addEventListener("error",c)})}n.imgBuffer2img=e;async function t(r){const s=await e(r),a=document.createElement("canvas");a.width=s.width,a.height=s.height;const o=a.getContext("2d");if(o==null)throw new Error("2d canvas context not supported on browser or machine.");return o.drawImage(s,0,0),o.getImageData(0,0,s.width,s.height)}n.imgBuffer2imgData=t;function i(r){const s=document.createElement("canvas");s.width=r.width,s.height=r.height;const a=s.getContext("2d");if(a==null)throw new Error("2d canvas context not supported on browser or machine.");return a.putImageData(r,0,0),s.toDataURL("image/webp",1)}n.imgData2url=i})(lo||(lo={}));var rd;(n=>{function e(t){return t!=null}n.isNotNull=e})(rd||(rd={}));class ux extends Tc{async readDOSHeader(){return await this.load(64),this.assertMagic(23117,"Uint16"),{bytesOnLastPageOfFile:this.readNumber("Uint16"),pagesInFile:this.readNumber("Uint16"),relocations:this.readNumber("Uint16"),sizeOfHeaderParagraphs:this.readNumber("Uint16"),minExtraParagraphsNeeded:this.readNumber("Uint16"),maxExtraParagraphsNeeded:this.readNumber("Uint16"),initialRelSSValue:this.readNumber("Uint16"),initialSPValue:this.readNumber("Uint16"),checksum:this.readNumber("Uint16"),initialIPValue:this.readNumber("Uint16"),initialRelCSValue:this.readNumber("Uint16"),fileAddressOfRelocationTable:this.readNumber("Uint16"),overlayNumber:this.readNumber("Uint16"),reserved1:this.readBuffer(8),OEMIdentifier:this.readNumber("Uint16"),OEMInformation:this.readNumber("Uint16"),reserved2:this.readBuffer(20),fileAddressOfNewExeHeader:this.readNumber("Uint32")}}async readFileHeader(){return await this.load(24),this.assertMagic(17744,"Uint32"),{machine:this.readNumber("Uint16"),sectionsCount:this.readNumber("Uint16"),timeDateStamp:this.readNumber("Uint32"),ptrToSymbolTable:this.readNumber("Uint32"),numSymbols:this.readNumber("Uint32"),sizeOfOptionalHeader:this.readNumber("Uint16"),characteristics:this.readNumber("Uint16")}}readOffsetSize(){return{offset:this.readNumber("Uint32"),size:this.readNumber("Uint32")}}readNT32Header(){return{type:"NT32",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),baseOfData:this.readNumber("Uint32"),imageBase:this.readNumber("Uint32"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readNumber("Uint32"),sizeOfStackCommit:this.readNumber("Uint32"),sizeOfHeapReserve:this.readNumber("Uint32"),sizeOfHeapCommit:this.readNumber("Uint32"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readNT64Header(){return{type:"NT64",linkerVerMajor:this.readNumber("Uint8"),linkerVerMinor:this.readNumber("Uint8"),sizeOfCode:this.readNumber("Uint32"),sizeOfInitializedData:this.readNumber("Uint32"),sizeOfUninitializedData:this.readNumber("Uint32"),entryPoint:this.readNumber("Uint32"),baseOfCode:this.readNumber("Uint32"),imageBase:this.readBigNumber("BigUint64"),sectionAlignment:this.readNumber("Uint32"),fileAlignment:this.readNumber("Uint32"),osVerMajor:this.readNumber("Uint16"),osVerMinor:this.readNumber("Uint16"),imageVerMajor:this.readNumber("Uint16"),imageVerMinor:this.readNumber("Uint16"),subSystemVerMajor:this.readNumber("Uint16"),subSystemVerMinor:this.readNumber("Uint16"),win32VersionValue:this.readNumber("Uint32"),sizeOfImage:this.readNumber("Uint32"),sizeOfHeaders:this.readNumber("Uint32"),_checksum:this.readNumber("Uint32"),subSystem:this.readNumber("Uint16"),dllCharacteristics:this.readNumber("Uint16"),sizeOfStackReserve:this.readBigNumber("BigUint64"),sizeOfStackCommit:this.readBigNumber("BigUint64"),sizeOfHeapReserve:this.readBigNumber("BigUint64"),sizeOfHeapCommit:this.readBigNumber("BigUint64"),loaderFlags:this.readNumber("Uint32"),numberOfRVAsAndSizes:this.readNumber("Uint32"),exportDirectory:this.readOffsetSize(),importDirectory:this.readOffsetSize(),resourceDirectory:this.readOffsetSize(),exceptionDirectory:this.readOffsetSize(),securityDirectory:this.readOffsetSize(),baseRelocationTable:this.readOffsetSize(),debugDirectory:this.readOffsetSize(),architectureSpecificData:this.readOffsetSize(),RVAOfGlobalPTR:this.readOffsetSize(),TLSDirectory:this.readOffsetSize(),loadConfigurationDirectory:this.readOffsetSize(),boundImportDirectory:this.readOffsetSize(),importAddressTable:this.readOffsetSize(),delayLoadImportDescriptors:this.readOffsetSize(),netHeader:this.readOffsetSize()}}readOptionalHeader(){switch(this.readNumber("Uint16")){case 267:return this.readNT32Header();case 523:return this.readNT64Header();default:throw new Error("Unknown optional header type.")}}readSectionHeaders(e){return this.readArray(()=>({name:this.readString(8),physicalAddressOrVirtualSize:this.readNumber("Uint32"),virtualAddress:this.readNumber("Uint32"),sizeOfRawData:this.readNumber("Uint32"),pointerToRawData:this.readNumber("Uint32"),pointerToRelocations:this.readNumber("Uint32"),pointerToLinenumbers:this.readNumber("Uint32"),numberOfRelocations:this.readNumber("Uint16"),numberOfLinenumbers:this.readNumber("Uint16"),characteristics:this.readNumber("Uint32")}),e)}readResources(e=this.pointer,t){t!==void 0&&(this.pointer=e+t);const i=this.readNumber("Uint32"),r=this.readNumber("Uint32"),s=this.readNumber("Uint16"),a=this.readNumber("Uint16"),o=this.readNumber("Uint16"),l=this.readNumber("Uint16"),c=this.readArray(()=>({type:this.readNumber("Uint32"),offset:this.readNumber("Uint32")}),o+l).map(u=>{let h=u.type;const d=!!(h&2147483648);h&=2147483647;let f=u.offset;const _=!!(f&2147483648);return f&=2147483647,_?{isStr:d,type:h,isDir:!0,dir:this.readResources(e,f)}:{isStr:d,type:h,isDir:!1,offset:f}});return{characteristics:i,timeDateStamp:r,majorVersion:s,minorVersion:a,numberOfNamedEntries:o,numberOfIdEntries:l,entries:c}}}var co;(n=>{async function e(r){const s=await r.readDOSHeader();r.blobPointer=s.fileAddressOfNewExeHeader;const a=await r.readFileHeader();await r.load(a.sizeOfOptionalHeader);const o=r.readOptionalHeader();await r.load(o.sizeOfHeaders);const l=r.readSectionHeaders(a.sectionsCount);return[s,a,o,l]}n.getHeaders=e;function t(r,s,a=0){for(const o of r)if(o.name==s||o.name.replaceAll("\0","")==s){if(a<=0)return o;a--}return null}n.getSectionHeader=t;class i{constructor(s){q(this,"sections");this.sections=s}toVirtual(s){for(const a of this.sections)if(s>=a.pointerToRawData&&s<a.pointerToRawData+a.sizeOfRawData)return s-a.pointerToRawData+a.virtualAddress;return-1}toRaw(s){for(const a of this.sections)if(s>=a.virtualAddress&&s<a.virtualAddress+a.physicalAddressOrVirtualSize)return s-a.virtualAddress+a.pointerToRawData;return-1}}n.VirtualMemeorySpace=i})(co||(co={}));async function dx(n){const e=new Jt(n);if(e.magic([137,80,78,71,13,10,26,10]))return URL.createObjectURL(new Blob([e.buffer]));{e.pointer=0;const t=e.readNumber("Uint32"),i=new DataView(new ArrayBuffer(e.length+14));i.setUint8(0,66),i.setUint8(1,77),i.setUint32(2,i.byteLength,!0),i.setUint32(10,14+t,!0),new Uint8Array(i.buffer).set(new Uint8Array(e.buffer),14);const r=await lo.imgBuffer2imgData(i.buffer),s=new ImageData(r.width,r.height>>1);return s.data.set(r.data.slice(r.width*(r.height>>1)*4)),lo.imgData2url(s)}}async function hx(n){const e=new ux(n),[t,i,r,s]=await co.getHeaders(e),a=new co.VirtualMemeorySpace(s);if(r.resourceDirectory.offset==0||r.resourceDirectory.size==0)return;await e.load(r.resourceDirectory.size,a.toRaw(r.resourceDirectory.offset));const o=e.readResources();function l(g){if(!g||!g.isDir)throw new Error("readOffsetSize entry is not dir.");const m=g.dir.entries[0];if(!m||m.isDir)throw new Error("readOffsetSize data entry is invalid.");return e.pointer=m.offset,{id:g.type,offset:e.readNumber("Uint32"),size:e.readNumber("Uint32"),codePage:e.readNumber("Uint32"),reserved:e.readNumber("Uint32")}}const c=o.entries.find(g=>g.type==3);if(!c||!c.isDir)return;const u=c.dir.entries.map(l),h=o.entries.find(g=>g.type==14);if(!h||!h.isDir)return;const f=(await Promise.all(h.dir.entries.map(l).map(async g=>{await e.load(g.size,a.toRaw(g.offset));const m=e.readBuffer(2),p=e.readNumber("Uint16"),E=e.readNumber("Uint16");function v(M){return M==0?255:M}let y=[];for(let M=0;M<E;M++)y.push({width:v(e.readNumber("Uint8")),height:v(e.readNumber("Uint8")),colorCount:e.readNumber("Uint8"),reserved:e.readBuffer(1),planes:e.readNumber("Uint16"),bitCount:e.readNumber("Uint16"),bytesInRes:e.readNumber("Uint32"),id:e.readNumber("Uint16")});return{reserved:m,type:p,count:E,entries:y}})))[0].entries.reduce((g,m)=>g===void 0||m.width>g.width&&m.height>g.height?m:g),_=u.find(g=>g.id==f.id);if(!_)throw new Error("Catastrophic error, Icon ID was not found.");return await e.load(_.size,a.toRaw(_.offset)),await dx(e.readBuffer(e.dataLeft))}const fx={namespace:"executable",priority:1,isValid:async n=>n.type==nt.File&&n.name.endsWith(".exe"),getIcon:async n=>{if(n.type==nt.File){const e=await hx(await n.blob());return e||"/asset-viewer/bootstrap-icons/filetype-exe.svg"}return null}};var ql=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.Protocol0=0]="Protocol0",n[n.Protocol1=1]="Protocol1",n[n.Protocol2=2]="Protocol2",n[n.Protocol3=3]="Protocol3",n[n.Protocol4=4]="Protocol4",n[n.Protocol5=5]="Protocol5",n))(ql||{}),Ya=(n=>(n[n.UNKNOWN=-1]="UNKNOWN",n[n.MARK=40]="MARK",n[n.STOP=46]="STOP",n[n.POP=48]="POP",n[n.POP_MARK=49]="POP_MARK",n[n.DUP=50]="DUP",n[n.FLOAT=70]="FLOAT",n[n.INT=73]="INT",n[n.BININT=74]="BININT",n[n.BININT1=75]="BININT1",n[n.LONG=76]="LONG",n[n.BININT2=77]="BININT2",n[n.NONE=78]="NONE",n[n.PERSID=80]="PERSID",n[n.BINPERSID=81]="BINPERSID",n[n.REDUCE=82]="REDUCE",n[n.STRING=83]="STRING",n[n.BINSTRING=84]="BINSTRING",n[n.SHORT_BINSTRING=85]="SHORT_BINSTRING",n[n.UNICODE=86]="UNICODE",n[n.BINUNICODE=88]="BINUNICODE",n[n.APPEND=97]="APPEND",n[n.BUILD=98]="BUILD",n[n.GLOBAL=99]="GLOBAL",n[n.DICT=100]="DICT",n[n.EMPTY_DICT=125]="EMPTY_DICT",n[n.APPENDS=101]="APPENDS",n[n.GET=103]="GET",n[n.BINGET=104]="BINGET",n[n.INST=105]="INST",n[n.LONG_BINGET=106]="LONG_BINGET",n[n.LIST=108]="LIST",n[n.EMPTY_LIST=93]="EMPTY_LIST",n[n.OBJ=111]="OBJ",n[n.PUT=112]="PUT",n[n.BINPUT=113]="BINPUT",n[n.LONG_BINPUT=114]="LONG_BINPUT",n[n.SETITEM=115]="SETITEM",n[n.TUPLE=116]="TUPLE",n[n.EMPTY_TUPLE=41]="EMPTY_TUPLE",n[n.SETITEMS=117]="SETITEMS",n[n.BINFLOAT=71]="BINFLOAT",n[n.PROTO=128]="PROTO",n[n.NEWOBJ=129]="NEWOBJ",n[n.EXT1=130]="EXT1",n[n.EXT2=131]="EXT2",n[n.EXT4=132]="EXT4",n[n.TUPLE1=133]="TUPLE1",n[n.TUPLE2=134]="TUPLE2",n[n.TUPLE3=135]="TUPLE3",n[n.NEWTRUE=136]="NEWTRUE",n[n.NEWFALSE=137]="NEWFALSE",n[n.LONG1=138]="LONG1",n[n.LONG4=139]="LONG4",n[n.BINBYTES=66]="BINBYTES",n[n.SHORT_BINBYTES=67]="SHORT_BINBYTES",n[n.SHORT_BINUNICODE=140]="SHORT_BINUNICODE",n[n.BINUNICODE8=141]="BINUNICODE8",n[n.BINBYTES8=142]="BINBYTES8",n[n.EMPTY_SET=143]="EMPTY_SET",n[n.ADDITEMS=144]="ADDITEMS",n[n.FROZENSET=145]="FROZENSET",n[n.NEWOBJ_EX=146]="NEWOBJ_EX",n[n.STACK_GLOBAL=147]="STACK_GLOBAL",n[n.MEMOIZE=148]="MEMOIZE",n[n.FRAME=149]="FRAME",n[n.BYTEARRAY8=150]="BYTEARRAY8",n[n.NEXT_BUFFER=151]="NEXT_BUFFER",n[n.READONLY_BUFFER=152]="READONLY_BUFFER",n))(Ya||{});class px{constructor(e,...t){q(this,"module");q(this,"args");q(this,"state");this.module=e,this.args=t}}class sd{constructor(e,t){q(this,"module");q(this,"name");this.module=e,this.name=t}make(...e){return new px(this,...e)}}const Co=class Co{constructor(){q(this,"stack",[])}append(e){this.stack.push(e)}pop(){return this.stack.pop()}get last(){return this.stack[this.stack.length-1]}set last(e){this.stack[this.stack.length-1]=e}popMark(){let e=[];for(var t=this.stack.length-1;t>=0;t--)if(this.stack[t]===Co.MARK){this.pop();break}else e.unshift(this.pop());return e}};q(Co,"MARK",Symbol("Mark"));let uo=Co;class mx{constructor(){q(this,"memo",[])}get(e){return this.memo[e]}set(e,t){this.memo[t]=e}append(e){this.memo.push(e)}get lastMemo(){return this.memo[this.memo.length-1]}}class Po extends Jt{constructor(t,i={}){super(t);q(this,"debug");q(this,"operTime",{});q(this,"downcastLongs");q(this,"protocol",-1);q(this,"stack",new uo);q(this,"memo",new mx);this.debug=i.debug??!1,this.downcastLongs=i.downcastLongs??!1}findClass(t,i){return new sd(t,i)}readOperation(){const t=this.debug?performance.now():0;if(this.eof)throw new Error("Depickler.readOperation: Reached end of pickle data without STOP opcode.");const i=this.readNumber("Uint8");switch(i){case 46:break;case 128:{if(this.protocol=this.readNumber("Uint8"),!(this.protocol in ql))throw new Error(`Depickler.readPicke: Unknown protocol. ${this.protocol}`);if(![2,3,4,5].includes(this.protocol))throw new Error(`Depickler.readPickle: Unsupported protocol. ${ql[this.protocol]}`);break}case 149:{this.readBigNumber("BigUint64");break}case 125:{this.stack.append({});break}case 148:{this.memo.append(this.stack.last);break}case 40:{this.stack.append(uo.MARK);break}case 140:{this.stack.append(this.readString(this.readNumber("Uint8"),"utf-8"));break}case 93:{this.stack.append([]);break}case 74:{this.stack.append(this.readNumber("Int32"));break}case 67:{const r=this.readNumber("Uint8"),s=new Uint8Array(this.readBuffer(r));this.stack.append(s);break}case 135:{this.stack.append([this.stack.pop(),this.stack.pop(),this.stack.pop()].reverse());break}case 97:{const r=this.stack.pop();this.stack.last.push(r);break}case 104:{const r=this.readNumber("Uint8");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 117:{const r=this.stack.popMark();if(r.length%2!=0)throw new Error("Depickler.readPickle: Can not set an odd number of items.");const s=this.stack.last;for(let a=0;a<r.length;a+=2)s[r[a+0]]=r[a+1];break}case 77:{this.stack.append(this.readNumber("Uint16"));break}case 113:{const r=this.readNumber("Uint8");this.memo.set(this.stack.last,r);break}case 88:{const r=this.readNumber("Uint32");this.stack.append(this.readString(r,"utf-8"));break}case 138:{const r=this.readNumber("Uint8"),s=this.readBigCustomNumber(r,!0);this.stack.append(this.downcastLongs?Number(s):s);break}case 85:{const r=this.readNumber("Uint8");this.stack.append(this.readString(r,"utf-8"));break}case 114:{const r=this.readNumber("Uint32");this.memo.set(this.stack.last,r);break}case 99:{const r=this.readUntilNewline(),s=this.readUntilNewline();this.stack.append(this.findClass(r,s));break}case 41:{this.stack.append([]);break}case 129:{const r=this.stack.pop(),s=this.stack.pop();this.stack.append(s.make(...r));break}case 78:{this.stack.append(null);break}case 75:{this.stack.append(this.readNumber("Uint8"));break}case 116:{this.stack.append([...this.stack.popMark()].reverse());break}case 134:{this.stack.append([this.stack.pop(),this.stack.pop()].reverse());break}case 98:{const r=this.stack.pop(),s=this.stack.last;s.state=r;break}case 137:{this.stack.append(!1);break}case 136:{this.stack.append(!0);break}case 101:{const r=this.stack.popMark();this.stack.last.push(...r);break}case 133:{this.stack.append([this.stack.pop()]);break}case 106:{const r=this.readNumber("Uint32");if(this.memo.get(r)===void 0)throw new Error(`Depickler.readPickle: Memo value not found at index ${r}`);this.stack.append(this.memo.get(r));break}case 115:{const r=this.stack.pop(),s=this.stack.pop();this.stack.last[s]=r;break}case 82:{const r=this.stack.pop(),s=this.stack.last;s instanceof sd?this.stack.last=s.make(...r):this.stack.last=s(...r);break}default:throw Ya[i]===void 0?new Error(`Depicker.readPickle: Unknown opcode. ${is.hex(i,1)}`):new Error(`Depicker.readPickle: Unimplemented opcode. ${Ya[i]}`)}if(this.debug){const r=performance.now()-t;this.operTime[i]=(this.operTime[i]??0)+r}return i}readPickle(){for(this.debug&&console.time("Depickle");this.readOperation()!=46;);if(this.debug){console.timeEnd("Depickle");const t=Object.fromEntries(Object.entries(this.operTime).map(r=>[Ya[parseInt(r[0])],r[1]])),i=Object.keys(t).reduce((r,s)=>Math.max(r,s.length),0);for(const[r,s]of Object.entries(t))console.log(`${r.padEnd(i," ")} with ${Math.round(s)}ms`)}return this.stack.stack}static depickle(t,i={}){return new Po(t,i).readPickle()}readUntilNewline(){let t=this.pointer;for(;this.view.getUint8(t++)!=10;);const i=this.readBufferFast(t-this.pointer-1);return this.pointer++,new TextDecoder("ascii").decode(i)}}const _x=34,gx="RPA-3.0";class vx{constructor(e,t,i,r){q(this,"type",nt.File);q(this,"viewer",null);q(this,"name");q(this,"parent");q(this,"_blob");q(this,"sections");this._blob=e,this.sections=t,this.name=i,this.parent=r}async blob(){return new Blob(this.sections.map(e=>this._blob.slice(e.offset,e.offset+e.length)))}async buffer(){return await(await this.blob()).arrayBuffer()}}class bx extends Jt{constructor(t){super();q(this,"blob");q(this,"blobPointer",0);q(this,"key",-1);this.blob=t}get blobLength(){return this.blob.size}get blobEof(){return this.blobPointer>=this.blobLength}get blobDataLeft(){return this.blobLength-this.blobPointer}getSlice(t,i=this.blobPointer){this.blobPointer=i;const r=this.blob.slice(this.blobPointer,this.blobPointer+t);return this.blobPointer+=t,r}async load(t,i=this.blobPointer){this.loadData(await this.getSlice(t,i).arrayBuffer())}decodeWithKey(t){return t<=4294967295?t^this.key:Number(BigInt(t)^BigInt(this.key))}async readHeader(){await this.load(_x);const t=this.readString(this.dataLeft);if(!t.endsWith(`
`))throw new Error("ArchiveReader.readHeader: Archive header does not end with newline.");const i=t.split(" ");if(i.length!=3)throw new Error("ArchiveReader.readHeader: Invalid header.");if(i[0]!=gx)throw new Error(`ArchiveReader.readHeader: Signature does not match. got: ${i[0]} expected: ${i[1]}`);const r=Number.parseInt(i[1],16);if(Number.isNaN(r))throw new Error("ArchiveReader.readHeader: Index offset is invalid.");if(this.key=Number.parseInt(i[2],16),Number.isNaN(this.key))throw new Error("ArchiveReader.readHeader: Key is invalid.");return r}async readArchive(){const t=await this.readHeader();this.blobPointer=t,await this.load(this.blobDataLeft);const i=this.buffer,r=qs.inflate(i),s=Po.depickle(r,{downcastLongs:!0}),a=new on.fsDirectory_Container("UNSET",null),o=s[0];for(const[l,c]of Object.entries(o)){const u=c.map(f=>({offset:this.decodeWithKey(f[0]),length:this.decodeWithKey(f[1])})),h=l.split("/").pop();if(h==null)throw new Error("Catastrophic error that should never happen.");const d=new vx(this.blob,u,h,null);await on.setDeep(a,l,d)}return a}}const xx={namespace:"renpy.archive",priority:10,isValid:async n=>n.type==nt.File&&n.name.endsWith(".rpa"),transform:async n=>{if(n.type!=nt.File)throw new Error("Tried to create renpy archive viewer with invalid entry type.");const t=await new bx(await n.blob()).readArchive();return t.name=n.name,t.parent=n.parent,t}};function yx(n){const e=n.module;if(e.module!==Oo.RenPy)throw new Error("parseRenPyClass: This function is only for parsing RenPy module classes.");switch(e.name){case"Init":return n.state[1].block.map(Ce).join(`
`);case"Define":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`define ${t[1].varname} ${t[1].operator} ${Ce(t[1].code)}
`:`define ${t[1].store.split(".").pop()??""}.${t[1].varname} ${t[1].operator} ${Ce(t[1].code)}
`}case"PyCode":{const t=n.state;let i;for(let r=0;r<t.length;r++){const s=t[r];if(i===void 0)typeof s=="string"&&(i=s);else{if(typeof s=="string")return s;if(!Array.isArray(s)&&typeof s!="number")return Ce(s)}}throw new Error("parseRenPyClass: Failed to parse PyCode.")}case"PyExpr":{const t=n.args;return t[3]??t[0]}case"Default":{const t=n.state,i=t[1].store.split(".").pop()??"";return i==""||i=="store"?`default ${t[1].varname} = ${Ce(t[1].code)}
`:`default ${t[1].store.split(".").pop()??""}.${t[1].varname} = ${Ce(t[1].code)}
`}case"Python":{const t=n.state,i=Ce(t[1].code);let r=[];for(let s=0;s!=-1;s=i.indexOf(`
`,s+1))r.push(s);return r.every(s=>s==0||s==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${rt(i)}
`}case"Return":return"";case"Label":{const t=n.state;let i="";for(const r of t[1].block)i+=Ce(r);return i=rt(i),`label ${t[1].name}:
${i}`}case"Screen":{const t=n.state;return Ce(t[1].screen)}case"ParameterInfo":return n.state.parameters.map(i=>`${i[1]==null?i[0]:`${i[0]}=${typeof i[1]=="string"?i[1]:Ce(i[1])}`}`).join(", ");case"Image":{const t=n.state;if(t[1].code!=null)return`image ${t[1].imgname.join(", ")} = ${Ce(t[1].code)}
`;if(t[1].atl!=null)return`image ${t[1].imgname.join(", ")}:
${rt(Ce(t[1].atl))}
`;throw new Error("parseRenPyClass: Invalid image.")}case"Style":{const t=n.state;return`style ${t[1].style_name}:
${rt(Object.entries(t[1].properties).map(i=>`${i[0]} ${Ce(i[1])}`).join(`
`))}
`}case"Transform":{const t=n.state;return`transform ${t[1].varname}${t[1].parameters==null?"":`(${Ce(t[1].parameters)})`}:
${rt(Ce(t[1].atl))}
`}case"Jump":return`jump ${n.state[1].target}
`;case"UserStatement":return`${n.state[1].line}
`;case"Say":{const t=n.state;return`${t[1].who===null?"":`${t[1].who} `}"${t[1].what}"
`}case"Show":return`show ${n.state[1].imspec[6].join(" ")}
`;case"With":{const t=n.state;if(t[1].expr=="None"){if(t[1].paired==null)throw new Error("parseRenPyClass: With without any args.");return`with ${Ce(t[1].paired)}`}else return`with ${typeof t[1].expr=="string"?t[1].expr:Ce(t[1].expr)}
`}case"If":{const t=n.state;let i="";for(let r=0;r<t[1].entries.length;r++){const s=t[1].entries[r];r==0?i+=`if ${typeof s[0]=="string"?s[0]:Ce(s[0])}:
${rt(s[1].map(Ce).join(`
`))}
`:s[0]!=null&&s[0]!="True"?i+=`elif ${typeof s[0]=="string"?s[0]:Ce(s[0])}:
${rt(s[1].map(Ce).join(`
`))}
`:i+=`else:
${rt(s[1].map(Ce).join(`
`))}
`}return i}case"Menu":{const t=n.state;let i=`menu${t[1].arguments==null?"":`(${Ce(t[1].arguments)})`}:
`;for(const r of t[1].items)if(i+=rt(`"${r[0]}"`),r[1]!="True"&&r[1]!=null&&(i+=" if ",typeof r[1]=="string"?i+=r[1]:i+=Ce(r[1])),r[2]==null)i+=`
`;else{i+=`:
`;for(const s of r[2])i+=`${rt(Ce(s),2)}
`}return i}case"Scene":return`scene ${n.state[1].imspec[6].join(" ")}
`;case"Hide":return`hide ${n.state[1].imspec[6].join(" ")}
`;case"While":{const t=n.state;return`while ${Ce(t[1].condition)}:
${rt(t[1].block.map(Ce).join(`
`))}
`}case"Pass":return`pass
`;case"Call":return`call ${n.state[1].label} from `;default:throw new Error(`parseRenPyClass: Unknown class "${e.name}"`)}}function Ex(n){const e=n.module;if(e.module!==Oo.RenPy_ATL)throw new Error("parseRenPyATLClass: This function is only for parsing RenPy_ATL module classes.");switch(e.name){case"RawBlock":return`${n.state.statements.map(Ce).join("")}`;case"RawMultipurpose":{const t=n.state;let i="";t.duration!="0"&&(i+=(typeof t.duration=="string"||typeof t.duration=="number"?t.duration:Ce(t.duration))+`
`);for(const r of t.expressions)i+=`${Ce(r[0])}
`;for(const r of t.properties)i+=`${r[0]} ${Ce(r[1])}
`;return i}case"RawRepeat":{const t=n.state;return`repeat${t.repeats==null?"":` ${typeof t.repeats=="number"?t.repeats:Ce(t.repeats)}`}
`}case"RawOn":{const t=n.state;let i="";for(const[r,s]of Object.entries(t.handlers))i+=`on ${r}:
${rt(Ce(s))}
`;return i}case"RawParallel":{const t=n.state;return`parallel:
${rt(t.blocks.map(Ce).join(`
`))}`}default:throw new Error(`parseRenPyATLClass: Unknown class "${e.name}"`)}}function Sx(n){const e=n.module;if(e.module!==Oo.RenPy_SL2)throw new Error("parseRenPySL2Class: This function is only for parsing RenPy_SL2 module classes.");switch(e.name){case"SLScreen":{const t=n.state;return`screen ${t.name}${t.parameters==null?"":`(${Ce(t.parameters)})`}:
${rt((t.tag==null?"":t.tag)+`
`+t.keyword.map(i=>`${i[0]} ${Ce(i[1])}
`).join(`
`)+t.children.map(Ce).join(""))}
`}case"SLDisplayable":{let t=function(a,o=`
`,l=""){return a.length==0?"":l+a.map(c=>`${c[0]} ${Ce(c[1])}`).join(o)},i=function(a){return a.map(Ce).join(" ")},r=function(a){return a.map(Ce).join(`
`)};const s=n.state;switch(`${s.displayable.module}:${s.displayable.name}`){case"renpy.sl2.sldisplayables:sl2add":return`add ${i(s.positional)} ${s.keyword.map(a=>`${a[0]} ${Ce(a[1])}`).join(" ")}
`;case"renpy.display.layout:Grid":return`grid ${i(s.positional)}:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.ui:_textbutton":return`textbutton ${i(s.positional)}:
${rt(t(s.keyword))}
`;case"renpy.display.layout:Null":return`null${t(s.keyword," "," ")}
`;case"renpy.display.layout:MultiBox":return`${s.style}${t(s.keyword," "," ")}:
${rt(r(s.children))}
`;case"renpy.text.text:Text":return`text ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.ui:_imagemap":return`imagemap:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.ui:_hotspot":return`${s.name}${i(s.positional)} ${t(s.keyword)}`;case"renpy.ui:_imagebutton":return`imagebutton:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.display.layout:Window":return`${s.name}${s.positional.length==0?"":` ${i(s.positional)}`}:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.display.behavior:Input":return`input ${t(s.keyword)}
`;case"renpy.sl2.sldisplayables:sl2viewport":return`viewport:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.sl2.sldisplayables:sl2vpgrid":return`vpgrid:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.ui:_label":return`label ${i(s.positional)}
`;case"renpy.ui:_key":return`key ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.display.behavior:Timer":return`timer ${i(s.positional)}${t(s.keyword," "," ")}
`;case"renpy.sl2.sldisplayables:sl2bar":return`bar:
${rt(t(s.keyword))}
${rt(r(s.children))}
`;case"renpy.display.behavior:Button":return`button ${i(s.positional)}${t(s.keyword," "," ")}:
${r(s.children)}`;case"renpy.display.behavior:OnEvent":return`on ${i(s.positional)}${t(s.keyword," "," ")}
`;default:throw new Error(`parseRenPySL2Class: Unsupported displayable module: ${s.displayable.module}:${s.displayable.name}`)}}case"SLPython":{const t=n.state,i=Ce(t.code);let r=[];for(let s=0;s!=-1;s=i.indexOf(`
`,s+1))r.push(s);return r.every(s=>s==0||s==i.length-1)?`$ ${i.replace(`
`,"")}
`:`init python:
${rt(i)}
`}case"SLIf":{const t=n.state;let i="";for(let r=0;r<t.entries.length;r++){const s=t.entries[r];r==0?i+=`if ${typeof s[0]=="string"?s[0]:Ce(s[0])}:
${rt(Ce(s[1]))}
`:s[0]!=null?i+=`elif ${typeof s[0]=="string"?s[0]:Ce(s[0])}:
${rt(Ce(s[1]))}
`:i+=`else:
${rt(Ce(s[1]))}
`}return i}case"SLBlock":{const t=n.state;let i="";for(const r of t.children)i+=Ce(r);for(const r of t.keyword)i+=`${r[0]} ${Ce(r[1])}
`;return i.length==0&&(i+=`pass
`),i}case"SLFor":{const t=n.state;return`for ${t.variable} in ${Ce(t.expression)}:
${rt(t.children.map(Ce).join(""))}`}case"SLUse":return`use ${n.state.target}`;case"SLTransclude":return`transclude
`;case"SLDefault":{const t=n.state;return`default ${t.variable} = ${Ce(t.expression)}`}default:throw new Error(`parseRenPySL2Class: Unknown class "${e.name}"`)}}const ad="RENPY RPC2";var hp=(n=>(n[n.Legacy=-1]="Legacy",n[n.End=0]="End",n[n.BeforeStaticTransforms=1]="BeforeStaticTransforms",n[n.AfterStaticTransforms=2]="AfterStaticTransforms",n))(hp||{});function wx(n){const e=new Jt(n);if(e.readString(ad.length,"ascii")!=ad){console.warn("decompileScript: Legacy format may not decompile correctly."),e.pointer=0;const s=e.readBuffer(e.length),a=qs.inflate(s);return[{slot:-1,offset:0,length:e.length,data:a}]}let i=[];for(;;){const s=e.readNumber("Uint32"),a=e.readNumber("Uint32"),o=e.readNumber("Uint32");if(s==0)break;i.push({slot:s,offset:a,length:o})}return i.map(s=>{e.pointer=s.offset;const a=e.readBuffer(s.length),o=qs.inflate(a);return{...s,data:o}})}function od(n){return wx(n)}var Oo=(n=>(n.RenPy="renpy.ast",n.RenPy_SL2="renpy.sl2.slast",n.RenPy_ATL="renpy.atl",n))(Oo||{});function rt(n,e=1){return n.split(`
`).map(t=>"    ".repeat(e)+t).join(`
`)}const Mx=100;let Sa=[];function Tx(n){const e=n.module;switch(e.module){case"renpy.ast":return yx(n);case"renpy.sl2.slast":return Sx(n);case"renpy.atl":return Ex(n);default:throw new Error(`parseClass: Unknown module. "${e.module}"`)}}function Ce(n){{Sa.push(n),Sa.length>Mx&&Sa.shift();try{return Tx(n)}catch(e){for(const t of Sa)console.log(t);throw e}}}function ld(n,e={}){const t=n.find(c=>c.slot==hp.BeforeStaticTransforms);if(t===void 0)throw new Error("decompileScript: Could not find script chunk.");const r=Po.depickle(t.data)[0],s=r[0];if(s.version!==5003e3)throw new Error(`decompileScript: Unknown header version. ${s.version}`);let a="";a+=`# Ren'Py decompiled script.
`,a+=`# Decompiled with renpy-asset-viewer
`,a+=`# Decompiled on ${new Date}
`,a+=`# Script Header:
`;for(const[c,u]of Object.entries(s))a+=`#     ${c}: ${u}
`;a+=`# Decompilation is in very early alpha, so please give feedback on bugs!
`,a+=`


`;let o="";const l=r[1];for(const c of l)o+=Ce(c),o+=`
`;return(e.cleanOutput??!0)&&(o=Ax(o)),a+o}function Ax(n){return n=n.replace(/\s+(?=(\n|$))/g,""),n}function Rx(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Cx(n){let e,t,i,r,s,a;const o=[Lx,Nx],l=[];function c(u,h){return h&1&&(e=null),h&1&&(t=null),e==null&&(e=!!u[0].name.endsWith(".rpyc")),e?0:(t==null&&(t=!!u[0].name.endsWith(".rpy")),t?1:-1)}return~(i=c(n,-1))&&(r=l[i]=o[i](n)),{c(){r&&r.c(),s=ot()},l(u){r&&r.l(u),s=ot()},m(u,h){~i&&l[i].m(u,h),we(u,s,h),a=!0},p(u,h){let d=i;i=c(u,h),i===d?~i&&l[i].p(u,h):(r&&(yi(),at(l[d],1,1,()=>{l[d]=null}),Ei()),~i?(r=l[i],r?r.p(u,h):(r=l[i]=o[i](u),r.c()),je(r,1),r.m(s.parentNode,s)):r=null)},i(u){a||(je(r),a=!0)},o(u){at(r),a=!1},d(u){u&&ae(s),~i&&l[i].d(u)}}}function Nx(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Ix,then:Dx,catch:kx,value:3,blocks:[,,,]};return vt(t=n[1].text(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].text())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function Lx(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Ox,then:Px,catch:Ux,value:2,blocks:[,,,]};return vt(t=n[1].arrayBuffer(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,a){n=s,r.ctx=n,a&1&&t!==(t=n[1].arrayBuffer())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function kx(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Dx(n){let e,t;return e=new ko({props:{language:Mc,code:n[3]}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=i[3]),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function Ix(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Ux(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Px(n){let e,t;return e=new ko({props:{language:Mc,code:ld(od(n[2]))}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.code=ld(od(i[2]))),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function Ox(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Bx(n){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Fx(n){let e,t,i,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Bx,then:Cx,catch:Rx,value:1,blocks:[,,,]};return vt(t=n[0].blob(),r),{c(){e=ot(),r.block.c()},l(s){e=ot(),r.block.l(s)},m(s,a){we(s,e,a),r.block.m(s,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e,i=!0},p(s,[a]){n=s,r.ctx=n,a&1&&t!==(t=n[0].blob())&&vt(t,r)||xn(r,n,a)},i(s){i||(je(r.block),i=!0)},o(s){for(let a=0;a<3;a+=1){const o=r.blocks[a];at(o)}i=!1},d(s){s&&ae(e),r.block.d(s),r.token=null,r=null}}}function zx(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Hx extends Gt{constructor(e){super(),Vt(this,e,zx,Fx,Bt,{entry:0})}}const Gx={namespace:"renpy.script",priority:2,isValid:async n=>n.type!=nt.File?!1:n.name.endsWith(".rpyc")||n.name.endsWith(".rpy"),createViewer:async(n,e)=>{if(n.type==nt.File)new Hx({target:e,props:{entry:n}});else throw new Error("Tried to create renpy.script viewer with directory.")}};var hn=(n=>(n[n.End=0]="End",n[n.Byte=1]="Byte",n[n.Short=2]="Short",n[n.Int=3]="Int",n[n.Long=4]="Long",n[n.Float=5]="Float",n[n.Double=6]="Double",n[n.Byte_Array=7]="Byte_Array",n[n.String=8]="String",n[n.List=9]="List",n[n.Compound=10]="Compound",n[n.Int_Array=11]="Int_Array",n[n.Long_Array=12]="Long_Array",n))(hn||{});function fp(n){const e=new Jt(n);e.endianness=Jt.BIG_ENDIAN;const t=i=>{switch(i){default:case 0:throw new Error("Malformed NBT data.");case 1:return{tag:i,value:e.readNumber("Int8")};case 2:return{tag:i,value:e.readNumber("Int16")};case 3:return{tag:i,value:e.readNumber("Int32")};case 4:return{tag:i,value:e.readBigNumber("BigInt64")};case 5:return{tag:i,value:e.readNumber("Float32")};case 6:return{tag:i,value:e.readNumber("Float64")};case 7:return{tag:i,value:new Int8Array(e.readBuffer(e.readNumber("Int32")))};case 8:return{tag:i,value:e.readString(e.readNumber("Uint16"),"utf-8")};case 9:{const r=e.readNumber("Int8"),s=e.readNumber("Int32"),a=new Array(s);for(let o=0;o<s;o++)a[o]=t(r);return{tag:i,listTag:r,value:a}}case 10:{let r={};for(;;){const s=e.readNumber("Uint8");if(s==0)break;const a=e.readString(e.readNumber("Uint16"),"utf-8");r[a]=t(s)}return{tag:i,value:r}}case 11:return{tag:i,value:new Int32Array(e.readArray(e.readNumber,e.readNumber("Int32"),"Int32"))};case 12:return{tag:i,value:new BigInt64Array(e.readArray(e.readBigNumber,e.readNumber("Int32"),"BigInt64"))}}};if(e.readNumber("Uint8")!=10)throw new Error("NBT data doesn't start with compound tag.");if(e.readNumber("Uint16")!=0)throw new Error("First NBT tag must have no name.");return t(10)}function Yl(n){switch(n.tag){default:case 0:throw new Error("failed to simplify nbt object.");case 1:case 2:case 3:case 4:case 5:case 6:return n.value;case 8:return n.value;case 9:return n.value.map(Yl);case 10:return Object.fromEntries(Object.entries(n.value).map(([e,t])=>[e,Yl(t)]));case 7:case 11:case 12:return n.value}}function cd(n,e,t){const i=n.slice();return i[2]=e[t],i}function ud(n,e,t){const i=n.slice();return i[2]=e[t],i}function dd(n,e,t){const i=n.slice();return i[1]=e[t][0],i[2]=e[t][1],i}function Vx(n){let e,t=Vi(n[0].value),i=[];for(let r=0;r<t.length;r+=1)i[r]=hd(cd(n,t,r));return{c(){e=qe("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=Ye(r,"DIV",{class:!0});var s=mt(e);for(let a=0;a<i.length;a+=1)i[a].l(s);s.forEach(ae),this.h()},h(){Se(e,"class","nbt-list svelte-jf5zdg")},m(r,s){we(r,e,s);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(r,s){if(s&1){t=Vi(r[0].value);let a;for(a=0;a<t.length;a+=1){const o=cd(r,t,a);i[a]?i[a].p(o,s):(i[a]=hd(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},i:L,o:L,d(r){r&&ae(e),No(i,r)}}}function Wx(n){let e,t,i=Vi(n[0].value),r=[];for(let a=0;a<i.length;a+=1)r[a]=fd(ud(n,i,a));const s=a=>at(r[a],1,1,()=>{r[a]=null});return{c(){e=qe("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ye(a,"DIV",{class:!0});var o=mt(e);for(let l=0;l<r.length;l+=1)r[l].l(o);o.forEach(ae),this.h()},h(){Se(e,"class","nbt-list svelte-jf5zdg")},m(a,o){we(a,e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(a,o){if(o&1){i=Vi(a[0].value);let l;for(l=0;l<i.length;l+=1){const c=ud(a,i,l);r[l]?(r[l].p(c,o),je(r[l],1)):(r[l]=fd(c),r[l].c(),je(r[l],1),r[l].m(e,null))}for(yi(),l=i.length;l<r.length;l+=1)s(l);Ei()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)je(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)at(r[o]);t=!1},d(a){a&&ae(e),No(r,a)}}}function $x(n){let e,t,i=Vi(Object.entries(n[0].value)),r=[];for(let a=0;a<i.length;a+=1)r[a]=pd(dd(n,i,a));const s=a=>at(r[a],1,1,()=>{r[a]=null});return{c(){e=qe("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ye(a,"DIV",{class:!0});var o=mt(e);for(let l=0;l<r.length;l+=1)r[l].l(o);o.forEach(ae),this.h()},h(){Se(e,"class","nbt-compound svelte-jf5zdg")},m(a,o){we(a,e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(a,o){if(o&1){i=Vi(Object.entries(a[0].value));let l;for(l=0;l<i.length;l+=1){const c=dd(a,i,l);r[l]?(r[l].p(c,o),je(r[l],1)):(r[l]=pd(c),r[l].c(),je(r[l],1),r[l].m(e,null))}for(yi(),l=i.length;l<r.length;l+=1)s(l);Ei()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)je(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)at(r[o]);t=!1},d(a){a&&ae(e),No(r,a)}}}function Xx(n){let e,t=n[0].value+"",i,r;return{c(){e=In('"'),i=In(t),r=In('"')},l(s){e=Un(s,'"'),i=Un(s,t),r=Un(s,'"')},m(s,a){we(s,e,a),we(s,i,a),we(s,r,a)},p(s,a){a&1&&t!==(t=s[0].value+"")&&Xi(i,t)},i:L,o:L,d(s){s&&(ae(e),ae(i),ae(r))}}}function Zx(n){let e=n[0].value+"",t;return{c(){t=In(e)},l(i){t=Un(i,e)},m(i,r){we(i,t,r)},p(i,r){r&1&&e!==(e=i[0].value+"")&&Xi(t,e)},i:L,o:L,d(i){i&&ae(t)}}}function hd(n){let e,t=n[2]+"",i,r;return{c(){e=qe("div"),i=In(t),r=_n(),this.h()},l(s){e=Ye(s,"DIV",{class:!0});var a=mt(e);i=Un(a,t),r=gn(a),a.forEach(ae),this.h()},h(){Se(e,"class","nbt-list-item svelte-jf5zdg")},m(s,a){we(s,e,a),Tt(e,i),Tt(e,r)},p(s,a){a&1&&t!==(t=s[2]+"")&&Xi(i,t)},d(s){s&&ae(e)}}}function fd(n){let e,t,i,r;return t=new Oc({props:{entry:n[2]}}),{c(){e=qe("div"),Qn(t.$$.fragment),i=_n(),this.h()},l(s){e=Ye(s,"DIV",{class:!0});var a=mt(e);ei(t.$$.fragment,a),i=gn(a),a.forEach(ae),this.h()},h(){Se(e,"class","nbt-list-item svelte-jf5zdg")},m(s,a){we(s,e,a),ti(t,e,null),Tt(e,i),r=!0},p(s,a){const o={};a&1&&(o.entry=s[2]),t.$set(o)},i(s){r||(je(t.$$.fragment,s),r=!0)},o(s){at(t.$$.fragment,s),r=!1},d(s){s&&ae(e),ni(t)}}}function pd(n){let e,t=n[1]+"",i,r,s,a,o;return s=new Oc({props:{entry:n[2]}}),{c(){e=qe("div"),i=In(t),r=In(": "),Qn(s.$$.fragment),a=_n(),this.h()},l(l){e=Ye(l,"DIV",{class:!0});var c=mt(e);i=Un(c,t),r=Un(c,": "),ei(s.$$.fragment,c),a=gn(c),c.forEach(ae),this.h()},h(){Se(e,"class","nbt-compound-kv svelte-jf5zdg")},m(l,c){we(l,e,c),Tt(e,i),Tt(e,r),ti(s,e,null),Tt(e,a),o=!0},p(l,c){(!o||c&1)&&t!==(t=l[1]+"")&&Xi(i,t);const u={};c&1&&(u.entry=l[2]),s.$set(u)},i(l){o||(je(s.$$.fragment,l),o=!0)},o(l){at(s.$$.fragment,l),o=!1},d(l){l&&ae(e),ni(s)}}}function qx(n){let e,t,i,r,s,a;const o=[Zx,Xx,$x,Wx,Vx],l=[];function c(u,h){return u[0].tag==hn.Byte||u[0].tag==hn.Short||u[0].tag==hn.Int||u[0].tag==hn.Long||u[0].tag==hn.Float||u[0].tag==hn.Double?0:u[0].tag==hn.String?1:u[0].tag==hn.Compound?2:u[0].tag==hn.List?3:u[0].tag==hn.Byte_Array||u[0].tag==hn.Int_Array||u[0].tag==hn.Long_Array?4:-1}return~(r=c(n))&&(s=l[r]=o[r](n)),{c(){e=qe("div"),t=qe("span"),i=_n(),s&&s.c(),this.h()},l(u){e=Ye(u,"DIV",{class:!0});var h=mt(e);t=Ye(h,"SPAN",{class:!0,style:!0}),mt(t).forEach(ae),i=gn(h),s&&s.l(h),h.forEach(ae),this.h()},h(){Se(t,"class","nbt-icon svelte-jf5zdg"),Qc(t,"background-position-y","-"+n[0].tag+"rem"),Se(e,"class","nbt-container svelte-jf5zdg")},m(u,h){we(u,e,h),Tt(e,t),Tt(e,i),~r&&l[r].m(e,null),a=!0},p(u,[h]){(!a||h&1)&&Qc(t,"background-position-y","-"+u[0].tag+"rem");let d=r;r=c(u),r===d?~r&&l[r].p(u,h):(s&&(yi(),at(l[d],1,1,()=>{l[d]=null}),Ei()),~r?(s=l[r],s?s.p(u,h):(s=l[r]=o[r](u),s.c()),je(s,1),s.m(e,null)):s=null)},i(u){a||(je(s),a=!0)},o(u){at(s),a=!1},d(u){u&&ae(e),~r&&l[r].d()}}}function Yx(n,e,t){let{entry:i}=e;return n.$$set=r=>{"entry"in r&&t(0,i=r.entry)},[i]}class Oc extends Gt{constructor(e){super(),Vt(this,e,Yx,qx,Bt,{entry:0})}}function jx(n){let e;return{c(){e=qe("div")},l(t){e=Ye(t,"DIV",{}),mt(e).forEach(ae)},m(t,i){we(t,e,i),n[2](e)},p:L,i:L,o:L,d(t){t&&ae(e),n[2](null)}}}function Kx(n,e,t){let{entry:i}=e,r;ps(async()=>{const a=fp(qs.ungzip(await i.buffer()));new Oc({target:r,props:{entry:a}})});function s(a){ts[a?"unshift":"push"](()=>{r=a,t(0,r)})}return n.$$set=a=>{"entry"in a&&t(1,i=a.entry)},[r,i,s]}class Jx extends Gt{constructor(e){super(),Vt(this,e,Kx,jx,Bt,{entry:1})}}const Qx={namespace:"minecraft.nbt",priority:2,isValid:async n=>{if(n.type!=nt.File||!n.name.includes(".dat"))return!1;const e=await n.blob();if(e.size==0)return!0;const t=await e.slice(0,2).arrayBuffer();return new DataView(t).getUint16(0,!1)==8075},createViewer:async(n,e)=>{if(n.type==nt.File)new Jx({target:e,props:{entry:n}});else throw new Error("Tried to create nbt viewer with directory.")}};var dt;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(dt||(dt={}));var md;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(md||(md={}));const _e=dt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),nr=n=>{switch(typeof n){case"undefined":return _e.undefined;case"string":return _e.string;case"number":return isNaN(n)?_e.nan:_e.number;case"boolean":return _e.boolean;case"function":return _e.function;case"bigint":return _e.bigint;case"symbol":return _e.symbol;case"object":return Array.isArray(n)?_e.array:n===null?_e.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?_e.promise:typeof Map<"u"&&n instanceof Map?_e.map:typeof Set<"u"&&n instanceof Set?_e.set:typeof Date<"u"&&n instanceof Date?_e.date:_e.object;default:return _e.unknown}},se=dt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Zn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return r(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,dt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}Zn.create=n=>new Zn(n);const ho=(n,e)=>{let t;switch(n.code){case se.invalid_type:n.received===_e.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case se.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,dt.jsonStringifyReplacer)}`;break;case se.unrecognized_keys:t=`Unrecognized key(s) in object: ${dt.joinValues(n.keys,", ")}`;break;case se.invalid_union:t="Invalid input";break;case se.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${dt.joinValues(n.options)}`;break;case se.invalid_enum_value:t=`Invalid enum value. Expected ${dt.joinValues(n.options)}, received '${n.received}'`;break;case se.invalid_arguments:t="Invalid function arguments";break;case se.invalid_return_type:t="Invalid function return type";break;case se.invalid_date:t="Invalid date";break;case se.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:dt.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case se.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case se.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case se.custom:t="Invalid input";break;case se.invalid_intersection_types:t="Intersection results could not be merged";break;case se.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case se.not_finite:t="Number must be finite";break;default:t=e.defaultError,dt.assertNever(n)}return{message:t}};let ey=ho;function jl(){return ey}const Kl=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};let o="";const l=i.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:e,defaultError:o}).message;return{...r,path:s,message:r.message||o}};function ge(n,e){const t=Kl({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,jl(),ho].filter(i=>!!i)});n.common.issues.push(t)}class tn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return Ge;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t)i.push({key:await r.key,value:await r.value});return tn.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return Ge;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const Ge=Object.freeze({status:"aborted"}),ty=n=>({status:"dirty",value:n}),ln=n=>({status:"valid",value:n}),_d=n=>n.status==="aborted",gd=n=>n.status==="dirty",fo=n=>n.status==="valid",Jl=n=>typeof Promise<"u"&&n instanceof Promise;var Ne;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Ne||(Ne={}));class Kn{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const vd=(n,e)=>{if(fo(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Zn(n.common.issues);return this._error=t,this._error}}};function He(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>a.code!=="invalid_type"?{message:o.defaultError}:typeof o.data>"u"?{message:i??o.defaultError}:{message:t??o.defaultError},description:r}}class et{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return nr(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new tn,ctx:{common:e.parent.common,data:e.data,parsedType:nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Jl(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},s=this._parseSync({data:e,path:r.path,parent:r});return vd(r,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nr(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Jl(r)?r:Promise.resolve(r));return vd(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:se.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new xi({schema:this,typeName:Ie.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Bi.create(this,this._def)}nullable(){return cs.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return qn.create(this,this._def)}promise(){return Ks.create(this,this._def)}or(e){return _o.create([this,e],this._def)}and(e){return go.create(this,e,this._def)}transform(e){return new xi({...He(this._def),schema:this,typeName:Ie.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Eo({...He(this._def),innerType:this,defaultValue:t,typeName:Ie.ZodDefault})}brand(){return new fy({typeName:Ie.ZodBranded,type:this,...He(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new rc({...He(this._def),innerType:this,catchValue:t,typeName:Ie.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Bo.create(this,e)}readonly(){return ac.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ny=/^c[^\s-]{8,}$/i,iy=/^[a-z][a-z0-9]*$/,ry=/[0-9A-HJKMNP-TV-Z]{26}/,sy=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,ay=/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,oy=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,ly=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,cy=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,uy=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):n.precision===0?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function dy(n,e){return!!((e==="v4"||!e)&&ly.test(n)||(e==="v6"||!e)&&cy.test(n))}class _i extends et{constructor(){super(...arguments),this._regex=(e,t,i)=>this.refinement(r=>e.test(r),{validation:t,code:se.invalid_string,...Ne.errToObj(i)}),this.nonempty=e=>this.min(1,Ne.errToObj(e)),this.trim=()=>new _i({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new _i({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new _i({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==_e.string){const s=this._getOrReturnCtx(e);return ge(s,{code:se.invalid_type,expected:_e.string,received:s.parsedType}),Ge}const i=new tn;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),ge(r,{code:se.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),ge(r,{code:se.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?ge(r,{code:se.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&ge(r,{code:se.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")ay.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"email",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")oy.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"emoji",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")sy.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"uuid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")ny.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"cuid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")iy.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"cuid2",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")ry.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"ulid",code:se.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),ge(r,{validation:"url",code:se.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"regex",code:se.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),ge(r,{code:se.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),ge(r,{code:se.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),ge(r,{code:se.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?uy(s).test(e.data)||(r=this._getOrReturnCtx(e,r),ge(r,{code:se.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="ip"?dy(e.data,s.version)||(r=this._getOrReturnCtx(e,r),ge(r,{validation:"ip",code:se.invalid_string,message:s.message}),i.dirty()):dt.assertNever(s);return{status:i.value,value:e.data}}_addCheck(e){return new _i({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Ne.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Ne.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Ne.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Ne.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Ne.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Ne.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Ne.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Ne.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...Ne.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Ne.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Ne.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Ne.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Ne.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Ne.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Ne.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Ne.errToObj(t)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}_i.create=n=>{var e;return new _i({checks:[],typeName:Ie.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...He(n)})};function hy(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class as extends et{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==_e.number){const s=this._getOrReturnCtx(e);return ge(s,{code:se.invalid_type,expected:_e.number,received:s.parsedType}),Ge}let i;const r=new tn;for(const s of this._def.checks)s.kind==="int"?dt.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),ge(i,{code:se.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?hy(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),ge(i,{code:se.not_finite,message:s.message}),r.dirty()):dt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ne.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ne.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ne.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ne.toString(t))}setLimit(e,t,i,r){return new as({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ne.toString(r)}]})}_addCheck(e){return new as({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Ne.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Ne.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Ne.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Ne.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Ne.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ne.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Ne.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ne.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ne.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&dt.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}as.create=n=>new as({checks:[],typeName:Ie.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...He(n)});class os extends et{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==_e.bigint){const s=this._getOrReturnCtx(e);return ge(s,{code:se.invalid_type,expected:_e.bigint,received:s.parsedType}),Ge}let i;const r=new tn;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:se.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):dt.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ne.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ne.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ne.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ne.toString(t))}setLimit(e,t,i,r){return new os({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ne.toString(r)}]})}_addCheck(e){return new os({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Ne.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Ne.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Ne.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Ne.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ne.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}os.create=n=>{var e;return new os({checks:[],typeName:Ie.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...He(n)})};class Ql extends et{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==_e.boolean){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.boolean,received:i.parsedType}),Ge}return ln(e.data)}}Ql.create=n=>new Ql({typeName:Ie.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...He(n)});class Ys extends et{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==_e.date){const s=this._getOrReturnCtx(e);return ge(s,{code:se.invalid_type,expected:_e.date,received:s.parsedType}),Ge}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return ge(s,{code:se.invalid_date}),Ge}const i=new tn;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),ge(r,{code:se.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),ge(r,{code:se.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):dt.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ys({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Ne.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Ne.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ys.create=n=>new Ys({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:Ie.ZodDate,...He(n)});class ec extends et{_parse(e){if(this._getType(e)!==_e.symbol){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.symbol,received:i.parsedType}),Ge}return ln(e.data)}}ec.create=n=>new ec({typeName:Ie.ZodSymbol,...He(n)});class po extends et{_parse(e){if(this._getType(e)!==_e.undefined){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.undefined,received:i.parsedType}),Ge}return ln(e.data)}}po.create=n=>new po({typeName:Ie.ZodUndefined,...He(n)});class mo extends et{_parse(e){if(this._getType(e)!==_e.null){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.null,received:i.parsedType}),Ge}return ln(e.data)}}mo.create=n=>new mo({typeName:Ie.ZodNull,...He(n)});class js extends et{constructor(){super(...arguments),this._any=!0}_parse(e){return ln(e.data)}}js.create=n=>new js({typeName:Ie.ZodAny,...He(n)});class Kr extends et{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ln(e.data)}}Kr.create=n=>new Kr({typeName:Ie.ZodUnknown,...He(n)});class Wi extends et{_parse(e){const t=this._getOrReturnCtx(e);return ge(t,{code:se.invalid_type,expected:_e.never,received:t.parsedType}),Ge}}Wi.create=n=>new Wi({typeName:Ie.ZodNever,...He(n)});class tc extends et{_parse(e){if(this._getType(e)!==_e.undefined){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.void,received:i.parsedType}),Ge}return ln(e.data)}}tc.create=n=>new tc({typeName:Ie.ZodVoid,...He(n)});class qn extends et{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==_e.array)return ge(t,{code:se.invalid_type,expected:_e.array,received:t.parsedType}),Ge;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(ge(t,{code:a?se.too_big:se.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(ge(t,{code:se.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(ge(t,{code:se.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new Kn(t,a,t.path,o)))).then(a=>tn.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new Kn(t,a,t.path,o)));return tn.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new qn({...this._def,minLength:{value:e,message:Ne.toString(t)}})}max(e,t){return new qn({...this._def,maxLength:{value:e,message:Ne.toString(t)}})}length(e,t){return new qn({...this._def,exactLength:{value:e,message:Ne.toString(t)}})}nonempty(e){return this.min(1,e)}}qn.create=(n,e)=>new qn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ie.ZodArray,...He(e)});function Zr(n){if(n instanceof Mt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=Bi.create(Zr(i))}return new Mt({...n._def,shape:()=>e})}else return n instanceof qn?new qn({...n._def,type:Zr(n.element)}):n instanceof Bi?Bi.create(Zr(n.unwrap())):n instanceof cs?cs.create(Zr(n.unwrap())):n instanceof bi?bi.create(n.items.map(e=>Zr(e))):n}class Mt extends et{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=dt.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==_e.object){const c=this._getOrReturnCtx(e);return ge(c,{code:se.invalid_type,expected:_e.object,received:c.parsedType}),Ge}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Wi&&this._def.unknownKeys==="strip"))for(const c in r.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const u=s[c],h=r.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Kn(r,h,r.path,c)),alwaysSet:c in r.data})}if(this._def.catchall instanceof Wi){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of o)l.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(c==="strict")o.length>0&&(ge(r,{code:se.unrecognized_keys,keys:o}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of o){const h=r.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Kn(r,h,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const h=await u.key;c.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>tn.mergeObjectSync(i,c)):tn.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return Ne.errToObj,new Mt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const l=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=Ne.errToObj(e).message)!==null&&o!==void 0?o:l}:{message:l}}}:{}})}strip(){return new Mt({...this._def,unknownKeys:"strip"})}passthrough(){return new Mt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Mt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Mt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ie.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Mt({...this._def,catchall:e})}pick(e){const t={};return dt.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new Mt({...this._def,shape:()=>t})}omit(e){const t={};return dt.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new Mt({...this._def,shape:()=>t})}deepPartial(){return Zr(this)}partial(e){const t={};return dt.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new Mt({...this._def,shape:()=>t})}required(e){const t={};return dt.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Bi;)s=s._def.innerType;t[i]=s}}),new Mt({...this._def,shape:()=>t})}keyof(){return pp(dt.objectKeys(this.shape))}}Mt.create=(n,e)=>new Mt({shape:()=>n,unknownKeys:"strip",catchall:Wi.create(),typeName:Ie.ZodObject,...He(e)});Mt.strictCreate=(n,e)=>new Mt({shape:()=>n,unknownKeys:"strict",catchall:Wi.create(),typeName:Ie.ZodObject,...He(e)});Mt.lazycreate=(n,e)=>new Mt({shape:n,unknownKeys:"strip",catchall:Wi.create(),typeName:Ie.ZodObject,...He(e)});class _o extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new Zn(o.ctx.common.issues));return ge(t,{code:se.invalid_union,unionErrors:a}),Ge}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const l of i){const c={...t,common:{...t.common,issues:[]},parent:null},u=l._parseSync({data:t.data,path:t.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(l=>new Zn(l));return ge(t,{code:se.invalid_union,unionErrors:o}),Ge}}get options(){return this._def.options}}_o.create=(n,e)=>new _o({options:n,typeName:Ie.ZodUnion,...He(e)});const ja=n=>n instanceof bo?ja(n.schema):n instanceof xi?ja(n.innerType()):n instanceof xo?[n.value]:n instanceof _r?n.options:n instanceof yo?Object.keys(n.enum):n instanceof Eo?ja(n._def.innerType):n instanceof po?[void 0]:n instanceof mo?[null]:null;class Bc extends et{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_e.object)return ge(t,{code:se.invalid_type,expected:_e.object,received:t.parsedType}),Ge;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(ge(t,{code:se.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ge)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=ja(s.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new Bc({typeName:Ie.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...He(i)})}}function nc(n,e){const t=nr(n),i=nr(e);if(n===e)return{valid:!0,data:n};if(t===_e.object&&i===_e.object){const r=dt.objectKeys(e),s=dt.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const l=nc(n[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(t===_e.array&&i===_e.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],l=nc(a,o);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===_e.date&&i===_e.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class go extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(_d(s)||_d(a))return Ge;const o=nc(s.value,a.value);return o.valid?((gd(s)||gd(a))&&t.dirty(),{status:t.value,value:o.data}):(ge(i,{code:se.invalid_intersection_types}),Ge)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}go.create=(n,e,t)=>new go({left:n,right:e,typeName:Ie.ZodIntersection,...He(t)});class bi extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==_e.array)return ge(i,{code:se.invalid_type,expected:_e.array,received:i.parsedType}),Ge;if(i.data.length<this._def.items.length)return ge(i,{code:se.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ge;!this._def.rest&&i.data.length>this._def.items.length&&(ge(i,{code:se.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new Kn(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>tn.mergeArray(t,a)):tn.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new bi({...this._def,rest:e})}}bi.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new bi({items:n,typeName:Ie.ZodTuple,rest:null,...He(e)})};class vo extends et{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==_e.object)return ge(i,{code:se.invalid_type,expected:_e.object,received:i.parsedType}),Ge;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new Kn(i,o,i.path,o)),value:a._parse(new Kn(i,i.data[o],i.path,o))});return i.common.async?tn.mergeObjectAsync(t,r):tn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof et?new vo({keyType:e,valueType:t,typeName:Ie.ZodRecord,...He(i)}):new vo({keyType:_i.create(),valueType:e,typeName:Ie.ZodRecord,...He(t)})}}class ic extends et{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==_e.map)return ge(i,{code:se.invalid_type,expected:_e.map,received:i.parsedType}),Ge;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,l],c)=>({key:r._parse(new Kn(i,o,i.path,[c,"key"])),value:s._parse(new Kn(i,l,i.path,[c,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Ge;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Ge;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}}}}ic.create=(n,e,t)=>new ic({valueType:e,keyType:n,typeName:Ie.ZodMap,...He(t)});class ls extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==_e.set)return ge(i,{code:se.invalid_type,expected:_e.set,received:i.parsedType}),Ge;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(ge(i,{code:se.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(ge(i,{code:se.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Ge;u.status==="dirty"&&t.dirty(),c.add(u.value)}return{status:t.value,value:c}}const o=[...i.data.values()].map((l,c)=>s._parse(new Kn(i,l,i.path,c)));return i.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,t){return new ls({...this._def,minSize:{value:e,message:Ne.toString(t)}})}max(e,t){return new ls({...this._def,maxSize:{value:e,message:Ne.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ls.create=(n,e)=>new ls({valueType:n,minSize:null,maxSize:null,typeName:Ie.ZodSet,...He(e)});class Us extends et{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_e.function)return ge(t,{code:se.invalid_type,expected:_e.function,received:t.parsedType}),Ge;function i(o,l){return Kl({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,jl(),ho].filter(c=>!!c),issueData:{code:se.invalid_arguments,argumentsError:l}})}function r(o,l){return Kl({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,jl(),ho].filter(c=>!!c),issueData:{code:se.invalid_return_type,returnTypeError:l}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Ks){const o=this;return ln(async function(...l){const c=new Zn([]),u=await o._def.args.parseAsync(l,s).catch(f=>{throw c.addIssue(i(l,f)),c}),h=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(h,s).catch(f=>{throw c.addIssue(r(h,f)),c})})}else{const o=this;return ln(function(...l){const c=o._def.args.safeParse(l,s);if(!c.success)throw new Zn([i(l,c.error)]);const u=Reflect.apply(a,this,c.data),h=o._def.returns.safeParse(u,s);if(!h.success)throw new Zn([r(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Us({...this._def,args:bi.create(e).rest(Kr.create())})}returns(e){return new Us({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new Us({args:e||bi.create([]).rest(Kr.create()),returns:t||Kr.create(),typeName:Ie.ZodFunction,...He(i)})}}class bo extends et{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}bo.create=(n,e)=>new bo({getter:n,typeName:Ie.ZodLazy,...He(e)});class xo extends et{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ge(t,{received:t.data,code:se.invalid_literal,expected:this._def.value}),Ge}return{status:"valid",value:e.data}}get value(){return this._def.value}}xo.create=(n,e)=>new xo({value:n,typeName:Ie.ZodLiteral,...He(e)});function pp(n,e){return new _r({values:n,typeName:Ie.ZodEnum,...He(e)})}class _r extends et{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return ge(t,{expected:dt.joinValues(i),received:t.parsedType,code:se.invalid_type}),Ge}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),i=this._def.values;return ge(t,{received:t.data,code:se.invalid_enum_value,options:i}),Ge}return ln(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return _r.create(e)}exclude(e){return _r.create(this.options.filter(t=>!e.includes(t)))}}_r.create=pp;class yo extends et{_parse(e){const t=dt.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==_e.string&&i.parsedType!==_e.number){const r=dt.objectValues(t);return ge(i,{expected:dt.joinValues(r),received:i.parsedType,code:se.invalid_type}),Ge}if(t.indexOf(e.data)===-1){const r=dt.objectValues(t);return ge(i,{received:i.data,code:se.invalid_enum_value,options:r}),Ge}return ln(e.data)}get enum(){return this._def.values}}yo.create=(n,e)=>new yo({values:n,typeName:Ie.ZodNativeEnum,...He(e)});class Ks extends et{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==_e.promise&&t.common.async===!1)return ge(t,{code:se.invalid_type,expected:_e.promise,received:t.parsedType}),Ge;const i=t.parsedType===_e.promise?t.data:Promise.resolve(t.data);return ln(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Ks.create=(n,e)=>new Ks({type:n,typeName:Ie.ZodPromise,...He(e)});class xi extends et{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ie.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{ge(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(a).then(o=>this._def.schema._parseAsync({data:o,path:i.path,parent:i})):this._def.schema._parseSync({data:a,path:i.path,parent:i})}if(r.type==="refinement"){const a=o=>{const l=r.refinement(o,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ge:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?Ge:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!fo(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>fo(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);dt.assertNever(r)}}xi.create=(n,e,t)=>new xi({schema:n,typeName:Ie.ZodEffects,effect:e,...He(t)});xi.createWithPreprocess=(n,e,t)=>new xi({schema:e,effect:{type:"preprocess",transform:n},typeName:Ie.ZodEffects,...He(t)});class Bi extends et{_parse(e){return this._getType(e)===_e.undefined?ln(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Bi.create=(n,e)=>new Bi({innerType:n,typeName:Ie.ZodOptional,...He(e)});class cs extends et{_parse(e){return this._getType(e)===_e.null?ln(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}cs.create=(n,e)=>new cs({innerType:n,typeName:Ie.ZodNullable,...He(e)});class Eo extends et{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===_e.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Eo.create=(n,e)=>new Eo({innerType:n,typeName:Ie.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...He(e)});class rc extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Jl(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Zn(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new Zn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}rc.create=(n,e)=>new rc({innerType:n,typeName:Ie.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...He(e)});class sc extends et{_parse(e){if(this._getType(e)!==_e.nan){const i=this._getOrReturnCtx(e);return ge(i,{code:se.invalid_type,expected:_e.nan,received:i.parsedType}),Ge}return{status:"valid",value:e.data}}}sc.create=n=>new sc({typeName:Ie.ZodNaN,...He(n)});class fy extends et{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class Bo extends et{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Ge:s.status==="dirty"?(t.dirty(),ty(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?Ge:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new Bo({in:e,out:t,typeName:Ie.ZodPipeline})}}class ac extends et{_parse(e){const t=this._def.innerType._parse(e);return fo(t)&&(t.value=Object.freeze(t.value)),t}}ac.create=(n,e)=>new ac({innerType:n,typeName:Ie.ZodReadonly,...He(e)});const py=(n,e={},t)=>n?js.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,c=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...c,fatal:l})}}):js.create();Mt.lazycreate;var Ie;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ie||(Ie={}));const my=(n,e={message:`Input not instance of ${n.name}`})=>py(t=>t instanceof n,e),So=_i.create,wi=as.create;sc.create;const _y=os.create;Ql.create;Ys.create;ec.create;po.create;mo.create;const gy=js.create;Kr.create;Wi.create;tc.create;const ol=qn.create,Rs=Mt.create;Mt.strictCreate;_o.create;Bc.create;go.create;bi.create;const vy=vo.create;ic.create;ls.create;Us.create;bo.create;const by=xo.create;_r.create;yo.create;Ks.create;xi.create;const oc=Bi.create;cs.create;xi.createWithPreprocess;Bo.create;const xy=Rs({Name:So(),Properties:oc(vy(So(),gy()))}),Rr={Name:"minecraft:air"},yy=Rs({DataVersion:wi().int().min(0),xPos:wi().int(),yPos:wi().int(),zPos:wi().int(),Status:by("full").or(So()),LastUpdate:_y().min(0n),sections:ol(Rs({Y:wi().int(),block_states:oc(Rs({palette:ol(xy),data:oc(my(BigInt64Array))}))})),block_entities:ol(Rs({x:wi().int(),y:wi().int(),z:wi().int(),id:So()}))});class wo{constructor(e){q(this,"data");q(this,"cx");q(this,"cz");q(this,"sections");this.data=yy.parse(e),this.cx=this.data.xPos,this.cz=this.data.zPos,this.sections=new Array(this.data.sections.length);for(let t=0;t<this.data.sections.length;t++)this.sections[t]={y:this.data.sections[t].Y*16,type:"unset"}}deserializeSection(e){if(this.sections[e].type!="unset")return;if(this.data.DataVersion<2529){console.warn(`Chunk ${this.cx} ${this.cz} with unsupported data version.`),this.sections[e]={y:this.sections[e].y,type:"empty"};return}const t=this.data.sections[e].block_states;if(t==null){this.sections[e]={y:this.sections[e].y,type:"empty"};return}const i=t.data;if(t.palette.length==0){this.sections[e]={y:this.sections[e].y,type:"fill",fill:Rr};return}if(t.palette.length==1||i==null){this.sections[e]={y:this.sections[e].y,type:"fill",fill:t.palette[0]};return}const r=new Array(4096),s=Math.max(Math.ceil(Math.log2(t.palette.length)),4),a=BigInt((1<<s)-1),o=Math.floor(64/s);for(let l=0;l<4096;l++){const c=Math.floor(l/o),u=(l-c*o)*s,h=Number(i[c]>>BigInt(u)&a);if(h>=t.palette.length)throw new Error(`Error while deserializing section, palette index {${h}} is outside of palette {${t.palette.length}}.`);r[l]=t.palette[h]}this.sections[e]={y:this.sections[e].y,type:"blocks",blocks:r}}getSection(e){return this.sections[e]==null?null:(this.sections[e].type=="unset"&&this.deserializeSection(e),this.sections[e])}static getBlockSectionIndex(e,t,i){return(t&15)<<8|(i&15)<<4|e&15}getBlock(e,t,i){if(e<0||e>=16||i<0||i>=16)return Rr;const r=this.sections.findIndex(a=>t>=a.y&&t<a.y+16),s=this.getSection(r);if(s==null)return Rr;switch(s.type){case"unset":throw new Error("Deserialization failed.");case"empty":return Rr;case"fill":return s.fill;case"blocks":{const a=wo.getBlockSectionIndex(e,t,i);return s.blocks[a]}}}forEachBlock(e){for(let t=0;t<this.sections.length;t++){const i=this.getSection(t);if(i==null)throw new Error("Failed to get section.");switch(i.type){case"unset":throw new Error("Deserialization failed.");case"empty":break;case"fill":{const r=i.fill;if(r.Name==Rr.Name)break;for(let s=0;s<16;s++)for(let a=0;a<16;a++)for(let o=0;o<16;o++)e(s,i.y+a,o,r);break}case"blocks":{for(let r=0;r<16;r++)for(let s=0;s<16;s++)for(let a=0;a<16;a++){const o=wo.getBlockSectionIndex(r,s,a),l=i.blocks[o];l.Name!=Rr.Name&&e(r,i.y+s,a,l)}break}}}}}const lc=32,wa=lc*lc,bd=4096;class Ey{constructor(e,t,i){q(this,"file");q(this,"rx");q(this,"rz");q(this,"offsets",new Uint32Array(wa));q(this,"lengths",new Uint8Array(wa));this.file=e,this.rx=t,this.rz=i}async init(){const e=new Jt(await(await this.file.blob()).slice(0,4*wa).arrayBuffer());e.endianness=Jt.BIG_ENDIAN;for(let t=0;t<wa;t++)this.offsets[t]=e.readNumber("Uint8")<<16|e.readNumber("Uint8")<<8|e.readNumber("Uint8"),this.lengths[t]=e.readNumber("Uint8")}async getChunk(e,t){const i=(e&31)+(t&31)*lc,r=this.offsets[i]*bd,s=this.lengths[i]*bd;if(r==0||s==0)return null;const a=new Jt(await(await this.file.blob()).slice(r,r+s).arrayBuffer());a.endianness=Jt.BIG_ENDIAN;const o=a.readNumber("Uint32");if(a.readNumber("Uint8")!=2)throw new Error("Invalid chunk compression method.");const c=Yl(fp(qs.inflate(a.readBuffer(o-1))));return new wo(c)}}class Sy{constructor(e){q(this,"dir");this.dir=e}async getRegion(e,t){const i=await on.getDeep(this.dir,`region/r.${e}.${t}.mca`);return i==null||i.type!=nt.File?null:new Ey(i,e,t)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="155",wy=0,xd=1,My=2,mp=1,Ty=2,di=3,$i=0,an=1,mi=2,Fi=0,Jr=1,yd=2,Ed=3,Sd=4,Ay=5,qr=100,Ry=101,Cy=102,wd=103,Md=104,Ny=200,Ly=201,ky=202,Dy=203,_p=204,gp=205,Iy=206,Uy=207,Py=208,Oy=209,By=210,Fy=0,zy=1,Hy=2,cc=3,Gy=4,Vy=5,Wy=6,$y=7,vp=0,Xy=1,Zy=2,zi=0,qy=1,Yy=2,jy=3,Ky=4,Jy=5,bp=300,us=301,ds=302,uc=303,dc=304,Fo=306,hc=1e3,kn=1001,fc=1002,Kt=1003,Td=1004,ll=1005,Sn=1006,Qy=1007,Js=1008,Hi=1009,eE=1010,tE=1011,zc=1012,xp=1013,Di=1014,Ii=1015,Qs=1016,yp=1017,Ep=1018,lr=1020,nE=1021,Dn=1023,iE=1024,rE=1025,cr=1026,hs=1027,sE=1028,Sp=1029,aE=1030,wp=1031,Mp=1033,cl=33776,ul=33777,dl=33778,hl=33779,Ad=35840,Rd=35841,Cd=35842,Nd=35843,oE=36196,Ld=37492,kd=37496,Dd=37808,Id=37809,Ud=37810,Pd=37811,Od=37812,Bd=37813,Fd=37814,zd=37815,Hd=37816,Gd=37817,Vd=37818,Wd=37819,$d=37820,Xd=37821,fl=36492,lE=36283,Zd=36284,qd=36285,Yd=36286,Tp=3e3,ur=3001,cE=3200,uE=3201,Ap=0,dE=1,dr="",Xe="srgb",Jn="srgb-linear",Rp="display-p3",pl=7680,hE=519,fE=512,pE=513,mE=514,_E=515,gE=516,vE=517,bE=518,xE=519,jd=35044,Kd="300 es",pc=1035,gi=2e3,Mo=2001;let wr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=Math.PI/180,mc=180/Math.PI;function sa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function yE(n,e){return(n%e+e)%e}function _l(n,e,t){return(1-t)*n+t*e}function Jd(n){return(n&n-1)===0&&n!==0}function _c(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],g=r[0],m=r[3],p=r[6],E=r[1],v=r[4],y=r[7],M=r[2],R=r[5],A=r[8];return s[0]=a*g+o*E+l*M,s[3]=a*m+o*v+l*R,s[6]=a*p+o*y+l*A,s[1]=c*g+u*E+h*M,s[4]=c*m+u*v+h*R,s[7]=c*p+u*y+h*A,s[2]=d*g+f*E+_*M,s[5]=d*m+f*v+_*R,s[8]=d*p+f*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ke;function Cp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Qd={};function Ps(n){n in Qd||(Qd[n]=!0,console.warn(n))}function Qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const EE=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),SE=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wE(n){return n.convertSRGBToLinear().applyMatrix3(SE)}function ME(n){return n.applyMatrix3(EE).convertLinearToSRGB()}const TE={[Jn]:n=>n,[Xe]:n=>n.convertSRGBToLinear(),[Rp]:wE},AE={[Jn]:n=>n,[Xe]:n=>n.convertLinearToSRGB(),[Rp]:ME},An={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Jn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=TE[e],r=AE[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Cr;class Np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=To("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bl(r[a].image)):s.push(bl(r[a]))}else s=bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Np.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class vn extends wr{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=kn,r=kn,s=Sn,a=Js,o=Dn,l=Hi,c=vn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=sa(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ur?Xe:dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xe?ur:Tp}set encoding(e){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Xe:dr}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=bp;vn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(f+1)/2,M=(p+1)/2,R=(u+d)/4,A=(h+g)/4,z=(_+m)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=z/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=z/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NE extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ur?Xe:dr),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends NE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kp extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LE extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),R=Math.atan2(M,p*E);m=Math.sin(m*R)/M,o=Math.sin(o*R)/M}const y=o*E;if(l=l*m+d*y,c=c*m+f*y,u=u*m+_*y,h=h*m+g*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,h=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new Y,eh=new aa;class oa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)ai.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ai)}else r.boundingBox===null&&r.computeBoundingBox(),Nr.copy(r.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Ma.subVectors(this.max,Es),Lr.subVectors(e.a,Es),kr.subVectors(e.b,Es),Dr.subVectors(e.c,Es),Mi.subVectors(kr,Lr),Ti.subVectors(Dr,kr),ji.subVectors(Lr,Dr);let t=[0,-Mi.z,Mi.y,0,-Ti.z,Ti.y,0,-ji.z,ji.y,Mi.z,0,-Mi.x,Ti.z,0,-Ti.x,ji.z,0,-ji.x,-Mi.y,Mi.x,0,-Ti.y,Ti.x,0,-ji.y,ji.x,0];return!yl(t,Lr,kr,Dr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Lr,kr,Dr,Ma))?!1:(Ta.crossVectors(Mi,Ti),t=[Ta.x,Ta.y,Ta.z],yl(t,Lr,kr,Dr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ai=new Y,Nr=new oa,Lr=new Y,kr=new Y,Dr=new Y,Mi=new Y,Ti=new Y,ji=new Y,Es=new Y,Ma=new Y,Ta=new Y,Ki=new Y;function yl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ki.fromArray(n,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kE=new oa,Ss=new Y,El=new Y;class Hc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(El)),this.expandByPoint(Ss.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new Y,Sl=new Y,Aa=new Y,Ai=new Y,wl=new Y,Ra=new Y,Ml=new Y;class DE{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Sl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Ai.dot(this.direction),l=-Ai.dot(Aa),c=Ai.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sl).addScaledVector(Aa,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),Ra.subVectors(i,e),Ml.crossVectors(wl,Ra);let a=this.direction.dot(Ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(Ai,Ra));if(l<0)return null;const c=o*this.direction.dot(wl.cross(Ai));if(c<0||l+c>a)return null;const u=-o*Ai.dot(Ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,_,g,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IE,e,UE)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ri.crossVectors(i,un),Ri.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ri.crossVectors(i,un)),Ri.normalize(),Ca.crossVectors(un,Ri),r[0]=Ri.x,r[4]=Ca.x,r[8]=un.x,r[1]=Ri.y,r[5]=Ca.y,r[9]=un.y,r[2]=Ri.z,r[6]=Ca.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],E=i[3],v=i[7],y=i[11],M=i[15],R=r[0],A=r[4],z=r[8],b=r[12],S=r[1],O=r[5],te=r[9],F=r[13],I=r[2],D=r[6],Z=r[10],C=r[14],k=r[3],W=r[7],j=r[11],U=r[15];return s[0]=a*R+o*S+l*I+c*k,s[4]=a*A+o*O+l*D+c*W,s[8]=a*z+o*te+l*Z+c*j,s[12]=a*b+o*F+l*C+c*U,s[1]=u*R+h*S+d*I+f*k,s[5]=u*A+h*O+d*D+f*W,s[9]=u*z+h*te+d*Z+f*j,s[13]=u*b+h*F+d*C+f*U,s[2]=_*R+g*S+m*I+p*k,s[6]=_*A+g*O+m*D+p*W,s[10]=_*z+g*te+m*Z+p*j,s[14]=_*b+g*F+m*C+p*U,s[3]=E*R+v*S+y*I+M*k,s[7]=E*A+v*O+y*D+M*W,s[11]=E*z+v*te+y*Z+M*j,s[15]=E*b+v*F+y*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+g*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],E=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,v=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,y=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,M=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,R=t*E+i*v+r*y+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(g*d*s-h*m*s-g*r*f+i*m*f+h*r*p-i*d*p)*A,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*A,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*A,e[4]=v*A,e[5]=(u*m*s-_*d*s+_*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*A,e[8]=y*A,e[9]=(_*h*s-u*g*s-_*i*f+t*g*f+u*i*p-t*h*p)*A,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*A,e[12]=M*A,e[13]=(u*g*r-_*h*r+_*i*d-t*g*d-u*i*m+t*h*m)*A,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,E=l*c,v=l*u,y=l*h,M=i.x,R=i.y,A=i.z;return r[0]=(1-(g+p))*M,r[1]=(f+y)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(f-y)*R,r[5]=(1-(d+p))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(_+v)*A,r[9]=(m-E)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/a,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=gi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(o===gi)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Mo)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,f=(i+r)*u;let _,g;if(o===gi)_=(a+s)*h,g=-2*h;else if(o===Mo)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new Y,Rn=new Ht,IE=new Y(0,0,0),UE=new Y(1,1,1),Ri=new Y,Ca=new Y,un=new Y,th=new Ht,nh=new aa;class la{constructor(e=0,t=0,i=0,r=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const ih=new Y,Ur=new aa,li=new Ht,Na=new Y,ws=new Y,OE=new Y,BE=new aa,rh=new Y(1,0,0),sh=new Y(0,1,0),ah=new Y(0,0,1),FE={type:"added"},oh={type:"removed"};class bn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Y,t=new la,i=new aa,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ke}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ws,Na,this.up):li.lookAt(Na,ws,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(li),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,BE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new Y(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new Y,ci=new Y,Tl=new Y,ui=new Y,Pr=new Y,Or=new Y,lh=new Y,Al=new Y,Rl=new Y,Cl=new Y;let La=!1;class Ln{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),ci.subVectors(i,t),Tl.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ci),l=Cn.dot(Tl),c=ci.dot(ci),u=ci.dot(Tl),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,r,s,a,o,l){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ui),l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),ci.subVectors(e,t),Cn.cross(ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Cn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return La===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),La=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,i),Or.subVectors(s,i),Al.subVectors(e,i);const l=Pr.dot(Al),c=Or.dot(Al);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,r);const u=Pr.dot(Rl),h=Or.dot(Rl);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Pr,a);Cl.subVectors(e,s);const f=Pr.dot(Cl),_=Or.dot(Cl);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Or,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return lh.subVectors(s,r),o=(h-u)/(h-u+(f-_)),t.copy(r).addScaledVector(lh,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Pr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zE=0;class ca extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Jr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_p,this.blendDst=gp,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pl,this.stencilZFail=pl,this.stencilZPass=pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,An.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=An.workingColorSpace){return this.r=e,this.g=t,this.b=i,An.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=An.workingColorSpace){if(e=yE(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Nl(a,s,e+1/3),this.g=Nl(a,s,e),this.b=Nl(a,s,e-1/3)}return An.toWorkingColorSpace(this,r),this}setStyle(e,t=Xe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){const i=Ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return An.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=Xe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=An.workingColorSpace){An.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=An.workingColorSpace){return An.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Xe){An.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==Xe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=i,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ka);const i=_l(Nn.h,ka.h,t),r=_l(Nn.s,ka.s,t),s=_l(Nn.l,ka.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new yt;yt.NAMES=Ip;class Up extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Y,Da=new _t;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jd,this.updateRange={offset:0,count:-1},this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Pp extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Op extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gi extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let HE=0;const En=new Ht,Ll=new bn,Br=new Y,dn=new oa,Ms=new oa,Pt=new Y;class Zi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Op:Pp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(dn.min,Ms.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,Ms.max),dn.expandByPoint(Pt)):(dn.expandByPoint(Ms.min),dn.expandByPoint(Ms.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),Pt.add(Br)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new Y,u[S]=new Y;const h=new Y,d=new Y,f=new Y,_=new _t,g=new _t,m=new _t,p=new Y,E=new Y;function v(S,O,te){h.fromArray(r,S*3),d.fromArray(r,O*3),f.fromArray(r,te*3),_.fromArray(a,S*2),g.fromArray(a,O*2),m.fromArray(a,te*2),d.sub(h),f.sub(h),g.sub(_),m.sub(_);const F=1/(g.x*m.y-m.x*g.y);isFinite(F)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(F),E.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(F),c[S].add(p),c[O].add(p),c[te].add(p),u[S].add(E),u[O].add(E),u[te].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,O=y.length;S<O;++S){const te=y[S],F=te.start,I=te.count;for(let D=F,Z=F+I;D<Z;D+=3)v(i[D+0],i[D+1],i[D+2])}const M=new Y,R=new Y,A=new Y,z=new Y;function b(S){A.fromArray(s,S*3),z.copy(A);const O=c[S];M.copy(O),M.sub(A.multiplyScalar(A.dot(O))).normalize(),R.crossVectors(z,O);const F=R.dot(u[S])<0?-1:1;l[S*4]=M.x,l[S*4+1]=M.y,l[S*4+2]=M.z,l[S*4+3]=F}for(let S=0,O=y.length;S<O;++S){const te=y[S],F=te.start,I=te.count;for(let D=F,Z=F+I;D<Z;D+=3)b(i[D+0]),b(i[D+1]),b(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Yn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new Ht,Ji=new DE,Ia=new Hc,uh=new Y,Fr=new Y,zr=new Y,Hr=new Y,kl=new Y,Ua=new Y,Pa=new _t,Oa=new _t,Ba=new _t,dh=new Y,hh=new Y,fh=new Y,Fa=new Y,za=new Y;class vi extends bn{constructor(e=new Zi,t=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(kl.fromBufferAttribute(h,e),a?Ua.addScaledVector(kl,u):Ua.addScaledVector(kl.sub(t),u))}t.add(Ua)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(Ia.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ia,uh)===null||Ji.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(ch.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,M=v;y<M;y+=3){const R=o.getX(y),A=o.getX(y+1),z=o.getX(y+2);r=Ha(this,p,e,i,c,u,h,R,A,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const E=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);r=Ha(this,a,e,i,c,u,h,E,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,M=v;y<M;y+=3){const R=y,A=y+1,z=y+2;r=Ha(this,p,e,i,c,u,h,R,A,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const E=m,v=m+1,y=m+2;r=Ha(this,a,e,i,c,u,h,E,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function GE(n,e,t,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===$i,o),l===null)return null;za.copy(o),za.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:n}}function Ha(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Fr),n.getVertexPosition(l,zr),n.getVertexPosition(c,Hr);const u=GE(n,e,t,i,Fr,zr,Hr,Fa);if(u){r&&(Pa.fromBufferAttribute(r,o),Oa.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),u.uv=Ln.getInterpolation(Fa,Fr,zr,Hr,Pa,Oa,Ba,new _t)),s&&(Pa.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),u.uv1=Ln.getInterpolation(Fa,Fr,zr,Hr,Pa,Oa,Ba,new _t),u.uv2=u.uv1),a&&(dh.fromBufferAttribute(a,o),hh.fromBufferAttribute(a,l),fh.fromBufferAttribute(a,c),u.normal=Ln.getInterpolation(Fa,Fr,zr,Hr,dh,hh,fh,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};Ln.getNormal(Fr,zr,Hr,h.normal),u.face=h}return u}class ua extends Zi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(u,3)),this.setAttribute("uv",new Gi(h,2));function _(g,m,p,E,v,y,M,R,A,z,b){const S=y/A,O=M/z,te=y/2,F=M/2,I=R/2,D=A+1,Z=z+1;let C=0,k=0;const W=new Y;for(let j=0;j<Z;j++){const U=j*O-F;for(let J=0;J<D;J++){const oe=J*S-te;W[g]=oe*E,W[m]=U*v,W[p]=I,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),h.push(J/A),h.push(1-j/z),C+=1}}for(let j=0;j<z;j++)for(let U=0;U<A;U++){const J=d+U+D*j,oe=d+U+D*(j+1),he=d+(U+1)+D*(j+1),ue=d+(U+1)+D*j;l.push(J,oe,ue),l.push(oe,he,ue),k+=6}o.addGroup(f,k,b),f+=k,d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const r in i)e[r]=i[r]}return e}function VE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bp(n){return n.getRenderTarget()===null?n.outputColorSpace:Jn}const WE={clone:fs,merge:jt};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=VE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fp extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Fp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ml*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Vr=1;class ZE extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new wn(Gr,Vr,e,t);r.layers=this.layers,this.add(r);const s=new wn(Gr,Vr,e,t);s.layers=this.layers,this.add(s);const a=new wn(Gr,Vr,e,t);a.layers=this.layers,this.add(a);const o=new wn(Gr,Vr,e,t);o.layers=this.layers,this.add(o);const l=new wn(Gr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new wn(Gr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class zp extends vn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qE extends gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?Xe:dr),this.texture=new zp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ua(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Fi});s.uniforms.tEquirect.value=t;const a=new vi(r,s),o=t.minFilter;return t.minFilter===Js&&(t.minFilter=Sn),new ZE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Dl=new Y,YE=new Y,jE=new Ke;class er{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dl.subVectors(i,t).cross(YE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jE.getNormalMatrix(e),r=this.coplanarPoint(Dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Hc,Ga=new Y;class Hp{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,a=new er){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],_=r[9],g=r[10],m=r[11],p=r[12],E=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-f,y-p).normalize(),i[1].setComponents(l+s,d+c,m+f,y+p).normalize(),i[2].setComponents(l+a,d+u,m+_,y+E).normalize(),i[3].setComponents(l-a,d-u,m-_,y-E).normalize(),i[4].setComponents(l-o,d-h,m-g,y-v).normalize(),t===gi)i[5].setComponents(l+o,d+h,m+g,y+v).normalize();else if(t===Mo)i[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function KE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;n.bindBuffer(h,c),f.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Gc extends Zi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-E,0),g.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const v=E+c*p,y=E+c*(p+1),M=E+1+c*(p+1),R=E+1+c*p;f.push(v,y,R),f.push(y,M,R)}this.setIndex(f),this.setAttribute("position",new Gi(_,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
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
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cS=`#ifdef USE_IRIDESCENCE
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
#endif`,uS=`#ifdef USE_BUMPMAP
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bS=`#define PI 3.141592653589793
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
} // validated`,xS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yS=`vec3 transformedNormal = objectNormal;
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
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",AS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
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
}`,BS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,FS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
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
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
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
#endif`,YS=`struct PhysicalMaterial {
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
}`,jS=`
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
#endif`,KS=`#if defined( RE_IndirectDiffuse )
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,QS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ew=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iw=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aw=`#if defined( USE_POINTS_UV )
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
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uw=`#ifdef USE_MORPHNORMALS
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
#endif`,dw=`#ifdef USE_MORPHTARGETS
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
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vw=`#ifdef USE_NORMALMAP
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
#endif`,bw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ww=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iw=`float getShadowMask() {
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
}`,Uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vw=`#ifdef USE_TRANSMISSION
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
#endif`,Ww=`#ifdef USE_TRANSMISSION
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
}`,iM=`#define DISTANCE
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
}`,rM=`#define DISTANCE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,fM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,_M=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,vM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,xM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,EM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:JE,alphahash_pars_fragment:QE,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:rS,aomap_pars_fragment:sS,begin_vertex:aS,beginnormal_vertex:oS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:dS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:fS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:_S,color_pars_vertex:gS,color_vertex:vS,common:bS,cube_uv_reflection_fragment:xS,defaultnormal_vertex:yS,displacementmap_pars_vertex:ES,displacementmap_vertex:SS,emissivemap_fragment:wS,emissivemap_pars_fragment:MS,colorspace_fragment:TS,colorspace_pars_fragment:AS,envmap_fragment:RS,envmap_common_pars_fragment:CS,envmap_pars_fragment:NS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:VS,envmap_vertex:kS,fog_vertex:DS,fog_pars_vertex:IS,fog_fragment:US,fog_pars_fragment:PS,gradientmap_pars_fragment:OS,lightmap_fragment:BS,lightmap_pars_fragment:FS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:HS,lights_pars_begin:GS,lights_toon_fragment:WS,lights_toon_pars_fragment:$S,lights_phong_fragment:XS,lights_phong_pars_fragment:ZS,lights_physical_fragment:qS,lights_physical_pars_fragment:YS,lights_fragment_begin:jS,lights_fragment_maps:KS,lights_fragment_end:JS,logdepthbuf_fragment:QS,logdepthbuf_pars_fragment:ew,logdepthbuf_pars_vertex:tw,logdepthbuf_vertex:nw,map_fragment:iw,map_pars_fragment:rw,map_particle_fragment:sw,map_particle_pars_fragment:aw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:lw,morphcolor_vertex:cw,morphnormal_vertex:uw,morphtarget_pars_vertex:dw,morphtarget_vertex:hw,normal_fragment_begin:fw,normal_fragment_maps:pw,normal_pars_fragment:mw,normal_pars_vertex:_w,normal_vertex:gw,normalmap_pars_fragment:vw,clearcoat_normal_fragment_begin:bw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:yw,iridescence_pars_fragment:Ew,opaque_fragment:Sw,packing:ww,premultiplied_alpha_fragment:Mw,project_vertex:Tw,dithering_fragment:Aw,dithering_pars_fragment:Rw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Lw,shadowmap_pars_vertex:kw,shadowmap_vertex:Dw,shadowmask_pars_fragment:Iw,skinbase_vertex:Uw,skinning_pars_vertex:Pw,skinning_vertex:Ow,skinnormal_vertex:Bw,specularmap_fragment:Fw,specularmap_pars_fragment:zw,tonemapping_fragment:Hw,tonemapping_pars_fragment:Gw,transmission_fragment:Vw,transmission_pars_fragment:Ww,uv_pars_fragment:$w,uv_pars_vertex:Xw,uv_vertex:Zw,worldpos_vertex:qw,background_vert:Yw,background_frag:jw,backgroundCube_vert:Kw,backgroundCube_frag:Jw,cube_vert:Qw,cube_frag:eM,depth_vert:tM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:rM,equirect_vert:sM,equirect_frag:aM,linedashed_vert:oM,linedashed_frag:lM,meshbasic_vert:cM,meshbasic_frag:uM,meshlambert_vert:dM,meshlambert_frag:hM,meshmatcap_vert:fM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:_M,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:bM,meshphysical_frag:xM,meshtoon_vert:yM,meshtoon_frag:EM,points_vert:SM,points_frag:wM,shadow_vert:MM,shadow_frag:TM,sprite_vert:AM,sprite_frag:RM},de={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zn={basic:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new yt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new yt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([de.points,de.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([de.common,de.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([de.sprite,de.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([de.common,de.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([de.lights,de.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};zn.physical={uniforms:jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Va={r:0,b:0,g:0};function CM(n,e,t,i,r,s,a){const o=new yt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(m,p){let E=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fo)?(u===void 0&&(u=new vi(new ua(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:fs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Xe,(h!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vi(new Gc(2,2),new vr({name:"BackgroundMaterial",uniforms:fs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Va,Bp(n)),i.buffers.color.setClear(Va.r,Va.g,Va.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function NM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(I,D,Z,C,k){let W=!1;if(a){const j=g(C,Z,D);c!==j&&(c=j,f(c.object)),W=p(I,C,Z,k),W&&E(I,C,Z,k)}else{const j=D.wireframe===!0;(c.geometry!==C.id||c.program!==Z.id||c.wireframe!==j)&&(c.geometry=C.id,c.program=Z.id,c.wireframe=j,W=!0)}k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,z(I,D,Z,C),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,D,Z){const C=Z.wireframe===!0;let k=o[I.id];k===void 0&&(k={},o[I.id]=k);let W=k[D.id];W===void 0&&(W={},k[D.id]=W);let j=W[C];return j===void 0&&(j=m(d()),W[C]=j),j}function m(I){const D=[],Z=[],C=[];for(let k=0;k<r;k++)D[k]=0,Z[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:C,object:I,attributes:{},index:null}}function p(I,D,Z,C){const k=c.attributes,W=D.attributes;let j=0;const U=Z.getAttributes();for(const J in U)if(U[J].location>=0){const he=k[J];let ue=W[J];if(ue===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),he===void 0||he.attribute!==ue||ue&&he.data!==ue.data)return!0;j++}return c.attributesNum!==j||c.index!==C}function E(I,D,Z,C){const k={},W=D.attributes;let j=0;const U=Z.getAttributes();for(const J in U)if(U[J].location>=0){let he=W[J];he===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(he=I.instanceColor));const ue={};ue.attribute=he,he&&he.data&&(ue.data=he.data),k[J]=ue,j++}c.attributes=k,c.attributesNum=j,c.index=C}function v(){const I=c.newAttributes;for(let D=0,Z=I.length;D<Z;D++)I[D]=0}function y(I){M(I,0)}function M(I,D){const Z=c.newAttributes,C=c.enabledAttributes,k=c.attributeDivisors;Z[I]=1,C[I]===0&&(n.enableVertexAttribArray(I),C[I]=1),k[I]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),k[I]=D)}function R(){const I=c.newAttributes,D=c.enabledAttributes;for(let Z=0,C=D.length;Z<C;Z++)D[Z]!==I[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function A(I,D,Z,C,k,W,j){j===!0?n.vertexAttribIPointer(I,D,Z,k,W):n.vertexAttribPointer(I,D,Z,C,k,W)}function z(I,D,Z,C){if(i.isWebGL2===!1&&(I.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const k=C.attributes,W=Z.getAttributes(),j=D.defaultAttributeValues;for(const U in W){const J=W[U];if(J.location>=0){let oe=k[U];if(oe===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),oe!==void 0){const he=oe.normalized,ue=oe.itemSize,xe=t.get(oe);if(xe===void 0)continue;const Pe=xe.buffer,ke=xe.type,lt=xe.bytesPerElement,Wt=i.isWebGL2===!0&&(ke===n.INT||ke===n.UNSIGNED_INT||oe.gpuType===xp);if(oe.isInterleavedBufferAttribute){const Ve=oe.data,G=Ve.stride,Ut=oe.offset;if(Ve.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)M(J.location+Le,Ve.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Le=0;Le<J.locationSize;Le++)y(J.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Le=0;Le<J.locationSize;Le++)A(J.location+Le,ue/J.locationSize,ke,he,G*lt,(Ut+ue/J.locationSize*Le)*lt,Wt)}else{if(oe.isInstancedBufferAttribute){for(let Ve=0;Ve<J.locationSize;Ve++)M(J.location+Ve,oe.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)y(J.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Ve=0;Ve<J.locationSize;Ve++)A(J.location+Ve,ue/J.locationSize,ke,he,ue*lt,ue/J.locationSize*Ve*lt,Wt)}}else if(j!==void 0){const he=j[U];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(J.location,he);break;case 3:n.vertexAttrib3fv(J.location,he);break;case 4:n.vertexAttrib4fv(J.location,he);break;default:n.vertexAttrib1fv(J.location,he)}}}}R()}function b(){te();for(const I in o){const D=o[I];for(const Z in D){const C=D[Z];for(const k in C)_(C[k].object),delete C[k];delete D[Z]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;const D=o[I.id];for(const Z in D){const C=D[Z];for(const k in C)_(C[k].object),delete C[k];delete D[Z]}delete o[I.id]}function O(I){for(const D in o){const Z=o[D];if(Z[I.id]===void 0)continue;const C=Z[I.id];for(const k in C)_(C[k].object),delete C[k];delete Z[I.id]}}function te(){F(),u=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function LM(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function kM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||e.has("OES_texture_float"),M=v&&y,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:R}}function DM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new er,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,v=E*4;let y=p.clippingState||null;l.value=y,y=u(_,d,v,f);for(let M=0;M!==v;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)a.copy(h[v]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function IM(n){let e=new WeakMap;function t(a,o){return o===uc?a.mapping=us:o===dc&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===uc||o===dc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qE(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class UM extends Fp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,ph=[.125,.215,.35,.446,.526,.582],ir=20,Il=new UM,mh=new yt;let Ul=null;const tr=(1+Math.sqrt(5))/2,Wr=1/tr,_h=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,tr,Wr),new Y(0,tr,-Wr),new Y(Wr,0,tr),new Y(-Wr,0,tr),new Y(tr,Wr,0),new Y(-tr,Wr,0)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ul=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul),e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Qs,format:Dn,colorSpace:Jn,depthBuffer:!1},r=vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(s)),this._blurMaterial=OM(s,e,t)}return r}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,i,r){const o=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(mh),u.toneMapping=zi,u.autoClear=!1;const f=new Up({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new vi(new ua,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(mh),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Wa(r,E*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===us||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Il)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_h[(r-1)%_h.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vi(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ir-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const p=[];let E=0;for(let A=0;A<ir;++A){const z=A/g,b=Math.exp(-z*z/2);p.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-Yr?r-v+Yr:0),R=4*(this._cubeSize-y);Wa(t,M,R,3*y,2*y),l.setRenderTarget(t),l.render(h,Il)}}function PM(n){const e=[],t=[],i=[];let r=n;const s=n-Yr+1+ph.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Yr?l=ph[a-n+Yr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*f),v=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,z=R>2?0:-1,b=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];E.set(b,g*_*R),v.set(d,m*_*R);const S=[R,R,R,R,R,R];y.set(S,p*_*R)}const M=new Zi;M.setAttribute("position",new Yn(E,g)),M.setAttribute("uv",new Yn(v,m)),M.setAttribute("faceIndex",new Yn(y,p)),e.push(M),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vh(n,e,t){const i=new gr(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function OM(n,e,t){const i=new Float32Array(ir),r=new Y(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function bh(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function xh(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function BM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===uc||l===dc,u=l===us||l===ds;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new gh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new gh(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function FM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zM(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let v=0,y=E.length;v<y;v+=3){const M=E[v+0],R=E[v+1],A=E[v+2];d.push(M,R,R,A,A,M)}}else if(_!==void 0){const E=_.array;g=_.version;for(let v=0,y=E.length/3-1;v<y;v+=3){const M=v+0,R=v+1,A=v+2;d.push(M,R,R,A,A,M)}}else return;const m=new(Cp(d)?Op:Pp)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function HM(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){n.drawElements(s,f,o,d*l),t.update(f,s,1)}function h(d,f,_){if(_===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,f,o,d*l,_),t.update(f,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function GM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function VM(n,e){return n[0]-e[0]}function WM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $M(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=f!==void 0?f.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let I=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let z=0;E===!0&&(z=1),v===!0&&(z=2),y===!0&&(z=3);let b=u.attributes.position.count*z,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*S*4*_),te=new kp(O,b,S,_);te.type=Ii,te.needsUpdate=!0;const F=z*4;for(let D=0;D<_;D++){const Z=M[D],C=R[D],k=A[D],W=b*S*4*D;for(let j=0;j<Z.count;j++){const U=j*F;E===!0&&(a.fromBufferAttribute(Z,j),O[W+U+0]=a.x,O[W+U+1]=a.y,O[W+U+2]=a.z,O[W+U+3]=0),v===!0&&(a.fromBufferAttribute(C,j),O[W+U+4]=a.x,O[W+U+5]=a.y,O[W+U+6]=a.z,O[W+U+7]=0),y===!0&&(a.fromBufferAttribute(k,j),O[W+U+8]=a.x,O[W+U+9]=a.y,O[W+U+10]=a.z,O[W+U+11]=k.itemSize===4?a.w:1)}}g={count:_,texture:te,size:new _t(b,S)},s.set(u,g),u.addEventListener("dispose",I)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<f;v++){const y=_[v];y[0]=v,y[1]=d[v]}_.sort(WM);for(let v=0;v<8;v++)v<f&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(VM);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=o[v],M=y[0],R=y[1];M!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+v)!==g[M]&&u.setAttribute("morphTarget"+v,g[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),r[v]=R,p+=R):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const E=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function XM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Vp=new vn,Wp=new kp,$p=new LE,Xp=new zp,yh=[],Eh=[],Sh=new Float32Array(16),wh=new Float32Array(9),Mh=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yh[r];if(s===void 0&&(s=new Float32Array(r),yh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function KM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Mh.set(i),n.uniformMatrix2fv(this.addr,!1,Mh),It(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),It(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Sh.set(i),n.uniformMatrix4fv(this.addr,!1,Sh),It(t,i)}}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function r1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function l1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Vp,r)}function c1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$p,r)}function u1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xp,r)}function d1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wp,r)}function h1(n){switch(n){case 5126:return ZM;case 35664:return qM;case 35665:return YM;case 35666:return jM;case 35674:return KM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return d1}}function f1(n,e){n.uniform1fv(this.addr,e)}function p1(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function m1(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function _1(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function g1(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v1(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b1(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x1(n,e){n.uniform1iv(this.addr,e)}function y1(n,e){n.uniform2iv(this.addr,e)}function E1(n,e){n.uniform3iv(this.addr,e)}function S1(n,e){n.uniform4iv(this.addr,e)}function w1(n,e){n.uniform1uiv(this.addr,e)}function M1(n,e){n.uniform2uiv(this.addr,e)}function T1(n,e){n.uniform3uiv(this.addr,e)}function A1(n,e){n.uniform4uiv(this.addr,e)}function R1(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vp,s[a])}function C1(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$p,s[a])}function N1(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xp,s[a])}function L1(n,e,t){const i=this.cache,r=e.length,s=zo(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Wp,s[a])}function k1(n){switch(n){case 5126:return f1;case 35664:return p1;case 35665:return m1;case 35666:return _1;case 35674:return g1;case 35675:return v1;case 35676:return b1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return E1;case 35669:case 35673:return S1;case 5125:return w1;case 36294:return M1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return L1}}class D1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=h1(t.type)}}class I1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=k1(t.type)}}class U1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function Th(n,e){n.seq.push(e),n.map[e.id]=e}function P1(n,e,t){const i=n.name,r=i.length;for(Pl.lastIndex=0;;){const s=Pl.exec(i),a=Pl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Th(t,c===void 0?new D1(o,n,e):new I1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new U1(o),Th(t,h)),t=h}}}class Ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);P1(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ah(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let O1=0;function B1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function F1(n){switch(n){case Jn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+B1(n.getShaderSource(e),a)}else return r}function z1(n,e){const t=F1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function H1(n,e){let t;switch(e){case qy:t="Linear";break;case Yy:t="Reinhard";break;case jy:t="OptimizedCineon";break;case Ky:t="ACESFilmic";break;case Jy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function G1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function V1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cs(n){return n!==""}function Ch(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace($1,Z1)}const X1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z1(n,e){let t=$e[e];if(t===void 0){const i=X1.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(q1,Y1)}function Y1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ty?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Q1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vp:e="ENVMAP_BLENDING_MULTIPLY";break;case Xy:e="ENVMAP_BLENDING_MIX";break;case Zy:e="ENVMAP_BLENDING_ADD";break}return e}function eT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tT(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=j1(t),c=K1(t),u=J1(t),h=Q1(t),d=eT(t),f=t.isWebGL2?"":G1(t),_=V1(s),g=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[f,kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?$e.tonemapping_pars_fragment:"",t.toneMapping!==zi?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=gc(a),a=Ch(a,t),a=Nh(a,t),o=gc(o),o=Ch(o,t),o=Nh(o,t),a=Lh(a),o=Lh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+a,y=E+p+o,M=Ah(r,r.VERTEX_SHADER,v),R=Ah(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,M),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(g).trim(),S=r.getShaderInfoLog(M).trim(),O=r.getShaderInfoLog(R).trim();let te=!0,F=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,M,R);else{const I=Rh(r,M,"vertex"),D=Rh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+I+`
`+D)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(S===""||O==="")&&(F=!1);F&&(this.diagnostics={runnable:te,programLog:b,vertexShader:{log:S,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(M),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new Ka(r,g)),A};let z;return this.getAttributes=function(){return z===void 0&&(z=W1(r,g)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}let nT=0;class iT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rT(e),t.set(e,i)),i}}class rT{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}}function sT(n,e,t,i,r,s,a){const o=new Dp,l=new iT,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,S,O,te,F){const I=te.fog,D=F.geometry,Z=b.isMeshStandardMaterial?te.environment:null,C=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),k=C&&C.mapping===Fo?C.image.height:null,W=_[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,U=j!==void 0?j.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let oe,he,ue,xe;if(W){const xt=zn[W];oe=xt.vertexShader,he=xt.fragmentShader}else oe=b.vertexShader,he=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);const Pe=n.getRenderTarget(),ke=F.isInstancedMesh===!0,lt=!!b.map,Wt=!!b.matcap,Ve=!!C,G=!!b.aoMap,Ut=!!b.lightMap,Le=!!b.bumpMap,Fe=!!b.normalMap,Ae=!!b.displacementMap,bt=!!b.emissiveMap,Ze=!!b.metalnessMap,le=!!b.roughnessMap,ht=b.anisotropy>0,it=b.clearcoat>0,ze=b.iridescence>0,T=b.sheen>0,x=b.transmission>0,$=ht&&!!b.anisotropyMap,re=it&&!!b.clearcoatMap,P=it&&!!b.clearcoatNormalMap,X=it&&!!b.clearcoatRoughnessMap,ie=ze&&!!b.iridescenceMap,ne=ze&&!!b.iridescenceThicknessMap,V=T&&!!b.sheenColorMap,be=T&&!!b.sheenRoughnessMap,Me=!!b.specularMap,Re=!!b.specularColorMap,ye=!!b.specularIntensityMap,Ee=x&&!!b.transmissionMap,Je=x&&!!b.thicknessMap,gt=!!b.gradientMap,N=!!b.alphaMap,fe=b.alphaTest>0,K=!!b.alphaHash,ce=!!b.extensions,me=!!D.attributes.uv1,ct=!!D.attributes.uv2,St=!!D.attributes.uv3;let Rt=zi;return b.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Rt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:he,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:ke,instancingColor:ke&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Jn,map:lt,matcap:Wt,envMap:Ve,envMapMode:Ve&&C.mapping,envMapCubeUVHeight:k,aoMap:G,lightMap:Ut,bumpMap:Le,normalMap:Fe,displacementMap:d&&Ae,emissiveMap:bt,normalMapObjectSpace:Fe&&b.normalMapType===dE,normalMapTangentSpace:Fe&&b.normalMapType===Ap,metalnessMap:Ze,roughnessMap:le,anisotropy:ht,anisotropyMap:$,clearcoat:it,clearcoatMap:re,clearcoatNormalMap:P,clearcoatRoughnessMap:X,iridescence:ze,iridescenceMap:ie,iridescenceThicknessMap:ne,sheen:T,sheenColorMap:V,sheenRoughnessMap:be,specularMap:Me,specularColorMap:Re,specularIntensityMap:ye,transmission:x,transmissionMap:Ee,thicknessMap:Je,gradientMap:gt,opaque:b.transparent===!1&&b.blending===Jr,alphaMap:N,alphaTest:fe,alphaHash:K,combine:b.combine,mapUv:lt&&g(b.map.channel),aoMapUv:G&&g(b.aoMap.channel),lightMapUv:Ut&&g(b.lightMap.channel),bumpMapUv:Le&&g(b.bumpMap.channel),normalMapUv:Fe&&g(b.normalMap.channel),displacementMapUv:Ae&&g(b.displacementMap.channel),emissiveMapUv:bt&&g(b.emissiveMap.channel),metalnessMapUv:Ze&&g(b.metalnessMap.channel),roughnessMapUv:le&&g(b.roughnessMap.channel),anisotropyMapUv:$&&g(b.anisotropyMap.channel),clearcoatMapUv:re&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:P&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:V&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(b.sheenRoughnessMap.channel),specularMapUv:Me&&g(b.specularMap.channel),specularColorMapUv:Re&&g(b.specularColorMap.channel),specularIntensityMapUv:ye&&g(b.specularIntensityMap.channel),transmissionMapUv:Ee&&g(b.transmissionMap.channel),thicknessMapUv:Je&&g(b.thicknessMap.channel),alphaMapUv:N&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Fe||ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:ct,vertexUv3s:St,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(lt||N),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,useLegacyLights:n._useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mi,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)S.push(O),S.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(E(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function E(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),b.push(o.mask)}function y(b){const S=_[b.type];let O;if(S){const te=zn[S];O=WE.clone(te.uniforms)}else O=b.uniforms;return O}function M(b,S){let O;for(let te=0,F=c.length;te<F;te++){const I=c[te];if(I.cacheKey===S){O=I,++O.usedTimes;break}}return O===void 0&&(O=new tT(n,S,b,s),c.push(O)),O}function R(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:z}}function aT(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function oT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ih(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,_,g,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||oT),i.length>1&&i.sort(d||Dh),r.length>1&&r.sort(d||Dh)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function lT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ih,n.set(i,[a])):r>=s.length?(a=new Ih,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new yt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function uT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dT=0;function hT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fT(n,e){const t=new cT,i=uT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,a=new Ht,o=new Ht;function l(u,h){let d=0,f=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,p=0,E=0,v=0,y=0,M=0,R=0,A=0,z=0;u.sort(hT);const b=h===!0?Math.PI:1;for(let O=0,te=u.length;O<te;O++){const F=u[O],I=F.color,D=F.intensity,Z=F.distance,C=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=I.r*D*b,f+=I.g*D*b,_+=I.b*D*b;else if(F.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(F.sh.coefficients[k],D);else if(F.isDirectionalLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const W=F.shadow,j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=C,r.directionalShadowMatrix[g]=F.shadow.matrix,y++}r.directional[g]=k,g++}else if(F.isSpotLight){const k=t.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(I).multiplyScalar(D*b),k.distance=Z,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,r.spot[p]=k;const W=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,W.updateMatrices(F),F.castShadow&&z++),r.spotLightMatrix[p]=W.matrix,F.castShadow){const j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[p]=j,r.spotShadowMap[p]=C,R++}p++}else if(F.isRectAreaLight){const k=t.get(F);k.color.copy(I).multiplyScalar(D),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),r.rectArea[E]=k,E++}else if(F.isPointLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*b),k.distance=F.distance,k.decay=F.decay,F.castShadow){const W=F.shadow,j=i.get(F);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=C,r.pointShadowMatrix[m]=F.shadow.matrix,M++}r.point[m]=k,m++}else if(F.isHemisphereLight){const k=t.get(F);k.skyColor.copy(F.color).multiplyScalar(D*b),k.groundColor.copy(F.groundColor).multiplyScalar(D*b),r.hemi[v]=k,v++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=_;const S=r.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==E||S.hemiLength!==v||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==R||S.numSpotMaps!==A)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+A-z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=z,S.directionalLength=g,S.pointLength=m,S.spotLength=p,S.rectAreaLength=E,S.hemiLength=v,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=R,S.numSpotMaps=A,r.version=dT++)}function c(u,h){let d=0,f=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const y=u[E];if(y.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Uh(n,e){const t=new fT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function pT(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Uh(n,e),t.set(s,[l])):a>=o.length?(l=new Uh(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mT extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
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
}`;function bT(n,e,t){let i=new Hp;const r=new _t,s=new _t,a=new zt,o=new mT({depthPacking:uE}),l=new _T,c={},u=t.maxTextureSize,h={[$i]:an,[an]:$i,[mi]:mi},d=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:gT,fragmentShader:vT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let p=this.type;this.render=function(M,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const z=n.getRenderTarget(),b=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const te=p!==di&&this.type===di,F=p===di&&this.type!==di;for(let I=0,D=M.length;I<D;I++){const Z=M[I],C=Z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const k=C.getFrameExtents();if(r.multiply(k),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,C.mapSize.y=s.y)),C.map===null||te===!0||F===!0){const j=this.type!==di?{minFilter:Kt,magFilter:Kt}:{};C.map!==null&&C.map.dispose(),C.map=new gr(r.x,r.y,j),C.map.texture.name=Z.name+".shadowMap",C.camera.updateProjectionMatrix()}n.setRenderTarget(C.map),n.clear();const W=C.getViewportCount();for(let j=0;j<W;j++){const U=C.getViewport(j);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),O.viewport(a),C.updateMatrices(Z,j),i=C.getFrustum(),y(R,A,C.camera,Z,this.type)}C.isPointLightShadow!==!0&&this.type===di&&E(C,A),C.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(z,b,S)};function E(M,R){const A=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gr(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,A,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,A,f,g,null)}function v(M,R,A,z){let b=null;const S=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)b=S;else if(b=A.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=b.uuid,te=R.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let I=F[te];I===void 0&&(I=b.clone(),F[te]=I),b=I}if(b.visible=R.visible,b.wireframe=R.wireframe,z===di?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=A}return b}function y(M,R,A,z,b){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===di)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const te=e.update(M),F=M.material;if(Array.isArray(F)){const I=te.groups;for(let D=0,Z=I.length;D<Z;D++){const C=I[D],k=F[C.materialIndex];if(k&&k.visible){const W=v(M,k,z,b);n.renderBufferDirect(A,null,te,W,M,C)}}}else if(F.visible){const I=v(M,F,z,b);n.renderBufferDirect(A,null,te,I,M,null)}}const O=M.children;for(let te=0,F=O.length;te<F;te++)y(O[te],R,A,z,b)}}function xT(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const fe=new zt;let K=null;const ce=new zt(0,0,0,0);return{setMask:function(me){K!==me&&!N&&(n.colorMask(me,me,me,me),K=me)},setLocked:function(me){N=me},setClear:function(me,ct,St,Rt,Si){Si===!0&&(me*=Rt,ct*=Rt,St*=Rt),fe.set(me,ct,St,Rt),ce.equals(fe)===!1&&(n.clearColor(me,ct,St,Rt),ce.copy(fe))},reset:function(){N=!1,K=null,ce.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,K=null,ce=null;return{setTest:function(me){me?Pe(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(me){fe!==me&&!N&&(n.depthMask(me),fe=me)},setFunc:function(me){if(K!==me){switch(me){case Fy:n.depthFunc(n.NEVER);break;case zy:n.depthFunc(n.ALWAYS);break;case Hy:n.depthFunc(n.LESS);break;case cc:n.depthFunc(n.LEQUAL);break;case Gy:n.depthFunc(n.EQUAL);break;case Vy:n.depthFunc(n.GEQUAL);break;case Wy:n.depthFunc(n.GREATER);break;case $y:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=me}},setLocked:function(me){N=me},setClear:function(me){ce!==me&&(n.clearDepth(me),ce=me)},reset:function(){N=!1,fe=null,K=null,ce=null}}}function a(){let N=!1,fe=null,K=null,ce=null,me=null,ct=null,St=null,Rt=null,Si=null;return{setTest:function(xt){N||(xt?Pe(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(xt){fe!==xt&&!N&&(n.stencilMask(xt),fe=xt)},setFunc:function(xt,On,qt){(K!==xt||ce!==On||me!==qt)&&(n.stencilFunc(xt,On,qt),K=xt,ce=On,me=qt)},setOp:function(xt,On,qt){(ct!==xt||St!==On||Rt!==qt)&&(n.stencilOp(xt,On,qt),ct=xt,St=On,Rt=qt)},setLocked:function(xt){N=xt},setClear:function(xt){Si!==xt&&(n.clearStencil(xt),Si=xt)},reset:function(){N=!1,fe=null,K=null,ce=null,me=null,ct=null,St=null,Rt=null,Si=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,p=!1,E=null,v=null,y=null,M=null,R=null,A=null,z=null,b=!1,S=null,O=null,te=null,F=null,I=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,C=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(k)[1]),Z=C>=1):k.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Z=C>=2);let W=null,j={};const U=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),oe=new zt().fromArray(U),he=new zt().fromArray(J);function ue(N,fe,K,ce){const me=new Uint8Array(4),ct=n.createTexture();n.bindTexture(N,ct),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let St=0;St<K;St++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(fe+St,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ct}const xe={};xe[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(cc),Ae(!1),bt(xd),Pe(n.CULL_FACE),Le(Fi);function Pe(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function ke(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function lt(N,fe){return f[N]!==fe?(n.bindFramebuffer(N,fe),f[N]=fe,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function Wt(N,fe){let K=g,ce=!1;if(N)if(K=_.get(fe),K===void 0&&(K=[],_.set(fe,K)),N.isWebGLMultipleRenderTargets){const me=N.texture;if(K.length!==me.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,St=me.length;ct<St;ct++)K[ct]=n.COLOR_ATTACHMENT0+ct;K.length=me.length,ce=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,ce=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,ce=!0);ce&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ve(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const G={[qr]:n.FUNC_ADD,[Ry]:n.FUNC_SUBTRACT,[Cy]:n.FUNC_REVERSE_SUBTRACT};if(i)G[wd]=n.MIN,G[Md]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(G[wd]=N.MIN_EXT,G[Md]=N.MAX_EXT)}const Ut={[Ny]:n.ZERO,[Ly]:n.ONE,[ky]:n.SRC_COLOR,[_p]:n.SRC_ALPHA,[By]:n.SRC_ALPHA_SATURATE,[Py]:n.DST_COLOR,[Iy]:n.DST_ALPHA,[Dy]:n.ONE_MINUS_SRC_COLOR,[gp]:n.ONE_MINUS_SRC_ALPHA,[Oy]:n.ONE_MINUS_DST_COLOR,[Uy]:n.ONE_MINUS_DST_ALPHA};function Le(N,fe,K,ce,me,ct,St,Rt){if(N===Fi){p===!0&&(ke(n.BLEND),p=!1);return}if(p===!1&&(Pe(n.BLEND),p=!0),N!==Ay){if(N!==E||Rt!==b){if((v!==qr||R!==qr)&&(n.blendEquation(n.FUNC_ADD),v=qr,R=qr),Rt)switch(N){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,A=null,z=null,E=N,b=Rt}return}me=me||fe,ct=ct||K,St=St||ce,(fe!==v||me!==R)&&(n.blendEquationSeparate(G[fe],G[me]),v=fe,R=me),(K!==y||ce!==M||ct!==A||St!==z)&&(n.blendFuncSeparate(Ut[K],Ut[ce],Ut[ct],Ut[St]),y=K,M=ce,A=ct,z=St),E=N,b=!1}function Fe(N,fe){N.side===mi?ke(n.CULL_FACE):Pe(n.CULL_FACE);let K=N.side===an;fe&&(K=!K),Ae(K),N.blending===Jr&&N.transparent===!1?Le(Fi):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const ce=N.stencilWrite;c.setTest(ce),ce&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function bt(N){N!==wy?(Pe(n.CULL_FACE),N!==O&&(N===xd?n.cullFace(n.BACK):N===My?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),O=N}function Ze(N){N!==te&&(Z&&n.lineWidth(N),te=N)}function le(N,fe,K){N?(Pe(n.POLYGON_OFFSET_FILL),(F!==fe||I!==K)&&(n.polygonOffset(fe,K),F=fe,I=K)):ke(n.POLYGON_OFFSET_FILL)}function ht(N){N?Pe(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function it(N){N===void 0&&(N=n.TEXTURE0+D-1),W!==N&&(n.activeTexture(N),W=N)}function ze(N,fe,K){K===void 0&&(W===null?K=n.TEXTURE0+D-1:K=W);let ce=j[K];ce===void 0&&(ce={type:void 0,texture:void 0},j[K]=ce),(ce.type!==N||ce.texture!==fe)&&(W!==K&&(n.activeTexture(K),W=K),n.bindTexture(N,fe||xe[N]),ce.type=N,ce.texture=fe)}function T(){const N=j[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){oe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function ye(N){he.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function Ee(N,fe){let K=h.get(fe);K===void 0&&(K=new WeakMap,h.set(fe,K));let ce=K.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(fe,N.name),K.set(N,ce))}function Je(N,fe){const ce=h.get(fe).get(N);u.get(fe)!==ce&&(n.uniformBlockBinding(fe,ce,N.__bindingPointIndex),u.set(fe,ce))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},W=null,j={},f={},_=new WeakMap,g=[],m=null,p=!1,E=null,v=null,y=null,M=null,R=null,A=null,z=null,b=!1,S=null,O=null,te=null,F=null,I=null,oe.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:ke,bindFramebuffer:lt,drawBuffers:Wt,useProgram:Ve,setBlending:Le,setMaterial:Fe,setFlipSided:Ae,setCullFace:bt,setLineWidth:Ze,setPolygonOffset:le,setScissorTest:ht,activeTexture:it,bindTexture:ze,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:$,texImage2D:be,texImage3D:Me,updateUBOMapping:Ee,uniformBlockBinding:Je,texStorage2D:ne,texStorage3D:V,texSubImage2D:re,texSubImage3D:P,compressedTexSubImage2D:X,compressedTexSubImage3D:ie,scissor:Re,viewport:ye,reset:gt}}function yT(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,x){return p?new OffscreenCanvas(T,x):To("canvas")}function v(T,x,$,re){let P=1;if((T.width>re||T.height>re)&&(P=re/Math.max(T.width,T.height)),P<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const X=x?_c:Math.floor,ie=X(P*T.width),ne=X(P*T.height);g===void 0&&(g=E(ie,ne));const V=$?E(ie,ne):g;return V.width=ie,V.height=ne,V.getContext("2d").drawImage(T,0,0,ie,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ie+"x"+ne+")."),V}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Jd(T.width)&&Jd(T.height)}function M(T){return o?!1:T.wrapS!==kn||T.wrapT!==kn||T.minFilter!==Kt&&T.minFilter!==Sn}function R(T,x){return T.generateMipmaps&&x&&T.minFilter!==Kt&&T.minFilter!==Sn}function A(T){n.generateMipmap(T)}function z(T,x,$,re,P=!1){if(o===!1)return x;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;return x===n.RED&&($===n.FLOAT&&(X=n.R32F),$===n.HALF_FLOAT&&(X=n.R16F),$===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(X=n.R8UI),$===n.UNSIGNED_SHORT&&(X=n.R16UI),$===n.UNSIGNED_INT&&(X=n.R32UI),$===n.BYTE&&(X=n.R8I),$===n.SHORT&&(X=n.R16I),$===n.INT&&(X=n.R32I)),x===n.RG&&($===n.FLOAT&&(X=n.RG32F),$===n.HALF_FLOAT&&(X=n.RG16F),$===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RGBA&&($===n.FLOAT&&(X=n.RGBA32F),$===n.HALF_FLOAT&&(X=n.RGBA16F),$===n.UNSIGNED_BYTE&&(X=re===Xe&&P===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)),(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(T,x,$){return R(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==Kt&&T.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function S(T){return T===Kt||T===Td||T===ll?n.NEAREST:n.LINEAR}function O(T){const x=T.target;x.removeEventListener("dispose",O),F(x),x.isVideoTexture&&_.delete(x)}function te(T){const x=T.target;x.removeEventListener("dispose",te),D(x)}function F(T){const x=i.get(T);if(x.__webglInit===void 0)return;const $=T.source,re=m.get($);if(re){const P=re[x.__cacheKey];P.usedTimes--,P.usedTimes===0&&I(T),Object.keys(re).length===0&&m.delete($)}i.remove(T)}function I(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const $=T.source,re=m.get($);delete re[x.__cacheKey],a.memory.textures--}function D(T){const x=T.texture,$=i.get(T),re=i.get(x);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray($.__webglFramebuffer[P]))for(let X=0;X<$.__webglFramebuffer[P].length;X++)n.deleteFramebuffer($.__webglFramebuffer[P][X]);else n.deleteFramebuffer($.__webglFramebuffer[P]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[P])}else{if(Array.isArray($.__webglFramebuffer))for(let P=0;P<$.__webglFramebuffer.length;P++)n.deleteFramebuffer($.__webglFramebuffer[P]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let P=0;P<$.__webglColorRenderbuffer.length;P++)$.__webglColorRenderbuffer[P]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[P]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let P=0,X=x.length;P<X;P++){const ie=i.get(x[P]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(x[P])}i.remove(x),i.remove(T)}let Z=0;function C(){Z=0}function k(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const $=i.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt($,T,x);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+x)}function U(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){lt($,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+x)}function J(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){lt($,T,x);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+x)}function oe(T,x){const $=i.get(T);if(T.version>0&&$.__version!==T.version){Wt($,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+x)}const he={[hc]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},ue={[Kt]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[ll]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Qy]:n.LINEAR_MIPMAP_NEAREST,[Js]:n.LINEAR_MIPMAP_LINEAR},xe={[fE]:n.NEVER,[xE]:n.ALWAYS,[pE]:n.LESS,[_E]:n.LEQUAL,[mE]:n.EQUAL,[bE]:n.GEQUAL,[gE]:n.GREATER,[vE]:n.NOTEQUAL};function Pe(T,x,$){if($?(n.texParameteri(T,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[x.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==kn||x.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,S(x.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,S(x.minFilter)),x.minFilter!==Kt&&x.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Kt||x.minFilter!==ll&&x.minFilter!==Js||x.type===Ii&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ke(T,x){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",O));const re=x.source;let P=m.get(re);P===void 0&&(P={},m.set(re,P));const X=W(x);if(X!==T.__cacheKey){P[X]===void 0&&(P[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),P[X].usedTimes++;const ie=P[T.__cacheKey];ie!==void 0&&(P[T.__cacheKey].usedTimes--,ie.usedTimes===0&&I(x)),T.__cacheKey=X,T.__webglTexture=P[X].texture}return $}function lt(T,x,$){let re=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=n.TEXTURE_3D);const P=ke(T,x),X=x.source;t.bindTexture(re,T.__webglTexture,n.TEXTURE0+$);const ie=i.get(X);if(X.version!==ie.__version||P===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ne=M(x)&&y(x.image)===!1;let V=v(x.image,ne,!1,u);V=ze(x,V);const be=y(V)||o,Me=s.convert(x.format,x.colorSpace);let Re=s.convert(x.type),ye=z(x.internalFormat,Me,Re,x.colorSpace);Pe(re,x,be);let Ee;const Je=x.mipmaps,gt=o&&x.isVideoTexture!==!0,N=ie.__version===void 0||P===!0,fe=b(x,V,be);if(x.isDepthTexture)ye=n.DEPTH_COMPONENT,o?x.type===Ii?ye=n.DEPTH_COMPONENT32F:x.type===Di?ye=n.DEPTH_COMPONENT24:x.type===lr?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:x.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===cr&&ye===n.DEPTH_COMPONENT&&x.type!==zc&&x.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Di,Re=s.convert(x.type)),x.format===hs&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,x.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=lr,Re=s.convert(x.type))),N&&(gt?t.texStorage2D(n.TEXTURE_2D,1,ye,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,ye,V.width,V.height,0,Me,Re,null));else if(x.isDataTexture)if(Je.length>0&&be){gt&&N&&t.texStorage2D(n.TEXTURE_2D,fe,ye,Je[0].width,Je[0].height);for(let K=0,ce=Je.length;K<ce;K++)Ee=Je[K],gt?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,K,ye,Ee.width,Ee.height,0,Me,Re,Ee.data);x.generateMipmaps=!1}else gt?(N&&t.texStorage2D(n.TEXTURE_2D,fe,ye,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,Me,Re,V.data)):t.texImage2D(n.TEXTURE_2D,0,ye,V.width,V.height,0,Me,Re,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){gt&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ye,Je[0].width,Je[0].height,V.depth);for(let K=0,ce=Je.length;K<ce;K++)Ee=Je[K],x.format!==Dn?Me!==null?gt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,Me,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ye,Ee.width,Ee.height,V.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,Me,Re,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ye,Ee.width,Ee.height,V.depth,0,Me,Re,Ee.data)}else{gt&&N&&t.texStorage2D(n.TEXTURE_2D,fe,ye,Je[0].width,Je[0].height);for(let K=0,ce=Je.length;K<ce;K++)Ee=Je[K],x.format!==Dn?Me!==null?gt?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,K,ye,Ee.width,Ee.height,0,Me,Re,Ee.data)}else if(x.isDataArrayTexture)gt?(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ye,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Me,Re,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,V.width,V.height,V.depth,0,Me,Re,V.data);else if(x.isData3DTexture)gt?(N&&t.texStorage3D(n.TEXTURE_3D,fe,ye,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Me,Re,V.data)):t.texImage3D(n.TEXTURE_3D,0,ye,V.width,V.height,V.depth,0,Me,Re,V.data);else if(x.isFramebufferTexture){if(N)if(gt)t.texStorage2D(n.TEXTURE_2D,fe,ye,V.width,V.height);else{let K=V.width,ce=V.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,ye,K,ce,0,Me,Re,null),K>>=1,ce>>=1}}else if(Je.length>0&&be){gt&&N&&t.texStorage2D(n.TEXTURE_2D,fe,ye,Je[0].width,Je[0].height);for(let K=0,ce=Je.length;K<ce;K++)Ee=Je[K],gt?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me,Re,Ee):t.texImage2D(n.TEXTURE_2D,K,ye,Me,Re,Ee);x.generateMipmaps=!1}else gt?(N&&t.texStorage2D(n.TEXTURE_2D,fe,ye,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Re,V)):t.texImage2D(n.TEXTURE_2D,0,ye,Me,Re,V);R(x,be)&&A(re),ie.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Wt(T,x,$){if(x.image.length!==6)return;const re=ke(T,x),P=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+$);const X=i.get(P);if(P.version!==X.__version||re===!0){t.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ie=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,V=[];for(let K=0;K<6;K++)!ie&&!ne?V[K]=v(x.image[K],!1,!0,c):V[K]=ne?x.image[K].image:x.image[K],V[K]=ze(x,V[K]);const be=V[0],Me=y(be)||o,Re=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),Ee=z(x.internalFormat,Re,ye,x.colorSpace),Je=o&&x.isVideoTexture!==!0,gt=X.__version===void 0||re===!0;let N=b(x,be,Me);Pe(n.TEXTURE_CUBE_MAP,x,Me);let fe;if(ie){Je&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,Ee,be.width,be.height);for(let K=0;K<6;K++){fe=V[K].mipmaps;for(let ce=0;ce<fe.length;ce++){const me=fe[ce];x.format!==Dn?Re!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,me.width,me.height,Re,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,me.width,me.height,Re,ye,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ee,me.width,me.height,0,Re,ye,me.data)}}}else{fe=x.mipmaps,Je&&gt&&(fe.length>0&&N++,t.texStorage2D(n.TEXTURE_CUBE_MAP,N,Ee,V[0].width,V[0].height));for(let K=0;K<6;K++)if(ne){Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,V[K].width,V[K].height,Re,ye,V[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,V[K].width,V[K].height,0,Re,ye,V[K].data);for(let ce=0;ce<fe.length;ce++){const ct=fe[ce].image[K].image;Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,ct.width,ct.height,Re,ye,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ee,ct.width,ct.height,0,Re,ye,ct.data)}}else{Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ye,V[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Re,ye,V[K]);for(let ce=0;ce<fe.length;ce++){const me=fe[ce];Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Re,ye,me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ee,Re,ye,me.image[K])}}}R(x,Me)&&A(n.TEXTURE_CUBE_MAP),X.__version=P.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ve(T,x,$,re,P,X){const ie=s.convert($.format,$.colorSpace),ne=s.convert($.type),V=z($.internalFormat,ie,ne,$.colorSpace);if(!i.get(x).__hasExternalTextures){const Me=Math.max(1,x.width>>X),Re=Math.max(1,x.height>>X);P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?t.texImage3D(P,X,V,Me,Re,x.depth,0,ie,ne,null):t.texImage2D(P,X,V,Me,Re,0,ie,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ht(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,P,i.get($).__webglTexture,0,le(x)):(P===n.TEXTURE_2D||P>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,P,i.get($).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(T,x,$){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let re=n.DEPTH_COMPONENT16;if($||ht(x)){const P=x.depthTexture;P&&P.isDepthTexture&&(P.type===Ii?re=n.DEPTH_COMPONENT32F:P.type===Di&&(re=n.DEPTH_COMPONENT24));const X=le(x);ht(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,re,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,re,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const re=le(x);$&&ht(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,x.width,x.height):ht(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const re=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let P=0;P<re.length;P++){const X=re[P],ie=s.convert(X.format,X.colorSpace),ne=s.convert(X.type),V=z(X.internalFormat,ie,ne,X.colorSpace),be=le(x);$&&ht(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,V,x.width,x.height):ht(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const re=i.get(x.depthTexture).__webglTexture,P=le(x);if(x.depthTexture.format===cr)ht(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===hs)ht(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Le(T){const x=i.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,T)}else if($){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]=n.createRenderbuffer(),G(x.__webglDepthbuffer[re],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),G(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(T,x,$){const re=i.get(T);x!==void 0&&Ve(re.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Le(T)}function Ae(T){const x=T.texture,$=i.get(T),re=i.get(x);T.addEventListener("dispose",te),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=x.version,a.memory.textures++);const P=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,ie=y(T)||o;if(P){$.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(o&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer[ne]=[];for(let V=0;V<x.mipmaps.length;V++)$.__webglFramebuffer[ne][V]=n.createFramebuffer()}else $.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){$.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)$.__webglFramebuffer[ne]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){const ne=T.texture;for(let V=0,be=ne.length;V<be;V++){const Me=i.get(ne[V]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ht(T)===!1){const ne=X?x:[x];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<ne.length;V++){const be=ne[V];$.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const Me=s.convert(be.format,be.colorSpace),Re=s.convert(be.type),ye=z(be.internalFormat,Me,Re,be.colorSpace,T.isXRRenderTarget===!0),Ee=le(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,$.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),G($.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,x,ie);for(let ne=0;ne<6;ne++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)Ve($.__webglFramebuffer[ne][V],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,V);else Ve($.__webglFramebuffer[ne],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);R(x,ie)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const ne=T.texture;for(let V=0,be=ne.length;V<be;V++){const Me=ne[V],Re=i.get(Me);t.bindTexture(n.TEXTURE_2D,Re.__webglTexture),Pe(n.TEXTURE_2D,Me,ie),Ve($.__webglFramebuffer,T,Me,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),R(Me,ie)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ne=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,re.__webglTexture),Pe(ne,x,ie),o&&x.mipmaps&&x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)Ve($.__webglFramebuffer[V],T,x,n.COLOR_ATTACHMENT0,ne,V);else Ve($.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ne,0);R(x,ie)&&A(ne),t.unbindTexture()}T.depthBuffer&&Le(T)}function bt(T){const x=y(T)||o,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,P=$.length;re<P;re++){const X=$[re];if(R(X,x)){const ie=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ne=i.get(X).__webglTexture;t.bindTexture(ie,ne),A(ie),t.unbindTexture()}}}function Ze(T){if(o&&T.samples>0&&ht(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,re=T.height;let P=n.COLOR_BUFFER_BIT;const X=[],ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=i.get(T),V=T.isWebGLMultipleRenderTargets===!0;if(V)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let be=0;be<x.length;be++){X.push(n.COLOR_ATTACHMENT0+be),T.depthBuffer&&X.push(ie);const Me=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Me===!1&&(T.depthBuffer&&(P|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(P|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ne.__webglColorRenderbuffer[be]),Me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ie])),V){const Re=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,$,re,0,0,$,re,P,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ne.__webglColorRenderbuffer[be]);const Me=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function le(T){return Math.min(h,T.samples)}function ht(T){const x=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(T){const x=a.render.frame;_.get(T)!==x&&(_.set(T,x),T.update())}function ze(T,x){const $=T.colorSpace,re=T.format,P=T.type;return T.isCompressedTexture===!0||T.format===pc||$!==Jn&&$!==dr&&($===Xe?o===!1?e.has("EXT_sRGB")===!0&&re===Dn?(T.format=pc,T.minFilter=Sn,T.generateMipmaps=!1):x=Np.sRGBToLinear(x):(re!==Dn||P!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),x}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=J,this.setTextureCube=oe,this.rebindTextures=Fe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ht}function ET(n,e,t){const i=t.isWebGL2;function r(s,a=dr){let o;if(s===Hi)return n.UNSIGNED_BYTE;if(s===yp)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return n.UNSIGNED_SHORT_5_5_5_1;if(s===eE)return n.BYTE;if(s===tE)return n.SHORT;if(s===zc)return n.UNSIGNED_SHORT;if(s===xp)return n.INT;if(s===Di)return n.UNSIGNED_INT;if(s===Ii)return n.FLOAT;if(s===Qs)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===nE)return n.ALPHA;if(s===Dn)return n.RGBA;if(s===iE)return n.LUMINANCE;if(s===rE)return n.LUMINANCE_ALPHA;if(s===cr)return n.DEPTH_COMPONENT;if(s===hs)return n.DEPTH_STENCIL;if(s===pc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sE)return n.RED;if(s===Sp)return n.RED_INTEGER;if(s===aE)return n.RG;if(s===wp)return n.RG_INTEGER;if(s===Mp)return n.RGBA_INTEGER;if(s===cl||s===ul||s===dl||s===hl)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ul)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===Rd||s===Cd||s===Nd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ad)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ld||s===kd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ld)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===kd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dd||s===Id||s===Ud||s===Pd||s===Od||s===Bd||s===Fd||s===zd||s===Hd||s===Gd||s===Vd||s===Wd||s===$d||s===Xd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Id)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$d)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===fl)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lE||s===Zd||s===qd||s===Yd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ST extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $a extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class MT extends vn{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Di),i===void 0&&u===hs&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class TT extends wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const E=[],v=[],y=new wn;y.layers.enable(1),y.viewport=new zt;const M=new wn;M.layers.enable(2),M.viewport=new zt;const R=[y,M],A=new ST;A.layers.enable(1),A.layers.enable(2);let z=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let J=E[U];return J===void 0&&(J=new Ol,E[U]=J),J.getTargetRaySpace()},this.getControllerGrip=function(U){let J=E[U];return J===void 0&&(J=new Ol,E[U]=J),J.getGripSpace()},this.getHand=function(U){let J=E[U];return J===void 0&&(J=new Ol,E[U]=J),J.getHandSpace()};function S(U){const J=v.indexOf(U.inputSource);if(J===-1)return;const oe=E[J];oe!==void 0&&(oe.update(U.inputSource,U.frame,c||a),oe.dispatchEvent({type:U.type,data:U.inputSource}))}function O(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",te);for(let U=0;U<E.length;U++){const J=v[U];J!==null&&(v[U]=null,E[U].disconnect(J))}z=null,b=null,e.setRenderTarget(m),f=null,d=null,h=null,r=null,p=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",O),r.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),p=new gr(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,oe=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?hs:cr,oe=g.stencil?lr:Di);const ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),p=new gr(d.textureWidth,d.textureHeight,{format:Dn,type:Hi,depthTexture:new MT(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(U){for(let J=0;J<U.removed.length;J++){const oe=U.removed[J],he=v.indexOf(oe);he>=0&&(v[he]=null,E[he].disconnect(oe))}for(let J=0;J<U.added.length;J++){const oe=U.added[J];let he=v.indexOf(oe);if(he===-1){for(let xe=0;xe<E.length;xe++)if(xe>=v.length){v.push(oe),he=xe;break}else if(v[xe]===null){v[xe]=oe,he=xe;break}if(he===-1)break}const ue=E[he];ue&&ue.connect(oe)}}const F=new Y,I=new Y;function D(U,J,oe){F.setFromMatrixPosition(J.matrixWorld),I.setFromMatrixPosition(oe.matrixWorld);const he=F.distanceTo(I),ue=J.projectionMatrix.elements,xe=oe.projectionMatrix.elements,Pe=ue[14]/(ue[10]-1),ke=ue[14]/(ue[10]+1),lt=(ue[9]+1)/ue[5],Wt=(ue[9]-1)/ue[5],Ve=(ue[8]-1)/ue[0],G=(xe[8]+1)/xe[0],Ut=Pe*Ve,Le=Pe*G,Fe=he/(-Ve+G),Ae=Fe*-Ve;J.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ae),U.translateZ(Fe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const bt=Pe+Fe,Ze=ke+Fe,le=Ut-Ae,ht=Le+(he-Ae),it=lt*ke/Ze*bt,ze=Wt*ke/Ze*bt;U.projectionMatrix.makePerspective(le,ht,it,ze,bt,Ze),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Z(U,J){J===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(J.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;A.near=M.near=y.near=U.near,A.far=M.far=y.far=U.far,(z!==A.near||b!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,b=A.far);const J=U.parent,oe=A.cameras;Z(A,J);for(let he=0;he<oe.length;he++)Z(oe[he],J);oe.length===2?D(A,y,M):A.projectionMatrix.copy(y.projectionMatrix),C(U,A,J)};function C(U,J,oe){oe===null?U.matrix.copy(J.matrixWorld):(U.matrix.copy(oe.matrixWorld),U.matrix.invert(),U.matrix.multiply(J.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0);const he=U.children;for(let ue=0,xe=he.length;ue<xe;ue++)he[ue].updateMatrixWorld(!0);U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=mc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let k=null;function W(U,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let he=!1;oe.length!==A.cameras.length&&(A.cameras.length=0,he=!0);for(let ue=0;ue<oe.length;ue++){const xe=oe[ue];let Pe=null;if(f!==null)Pe=f.getViewport(xe);else{const lt=h.getViewSubImage(d,xe);Pe=lt.viewport,ue===0&&(e.setRenderTargetTextures(p,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(p))}let ke=R[ue];ke===void 0&&(ke=new wn,ke.layers.enable(ue),ke.viewport=new zt,R[ue]=ke),ke.matrix.fromArray(xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&(A.matrix.copy(ke.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),he===!0&&A.cameras.push(ke)}}for(let oe=0;oe<E.length;oe++){const he=v[oe],ue=E[oe];he!==null&&ue!==void 0&&ue.update(he,J,c||a)}k&&k(U,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const j=new Gp;j.setAnimationLoop(W),this.setAnimationLoop=function(U){k=U},this.dispose=function(){}}}function AT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RT(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const y=v.program;i.uniformBlockBinding(E,y)}function c(E,v){let y=r[E.id];y===void 0&&(_(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",m));const M=v.program;i.updateUBOMapping(E,M);const R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const v=h();E.__bindingPointIndex=v;const y=n.createBuffer(),M=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=r[E.id],y=E.uniforms,M=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=y.length;R<A;R++){const z=y[R];if(f(z,R,M)===!0){const b=z.__offset,S=Array.isArray(z.value)?z.value:[z.value];let O=0;for(let te=0;te<S.length;te++){const F=S[te],I=g(F);typeof F=="number"?(z.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,b+O,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=F.elements[0],z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=F.elements[0],z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=F.elements[0]):(F.toArray(z.__data,O),O+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,v,y){const M=E.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const R=Array.isArray(M)?M:[M],A=[];for(let z=0;z<R.length;z++)A.push(R[z].clone());y[v]=A}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const R=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(M)?M:[M];for(let z=0;z<R.length;z++){const b=R[z];if(b.equals(A[z])===!1)return b.copy(A[z]),!0}}return!1}function _(E){const v=E.uniforms;let y=0;const M=16;let R=0;for(let A=0,z=v.length;A<z;A++){const b=v[A],S={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let te=0,F=O.length;te<F;te++){const I=O[te],D=g(I);S.boundary+=D.boundary,S.storage+=D.storage}if(b.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,A>0){R=y%M;const te=M-R;R!==0&&te-S.boundary<0&&(y+=M-R,b.__offset=y)}y+=S.storage}return R=y%M,R>0&&(y+=M-R),E.__size=y,E.__cache={},this}function g(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}function CT(){const n=To("canvas");return n.style.display="block",n}class Zp{constructor(e={}){const{canvas:t=CT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Xe,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const v=this;let y=!1,M=0,R=0,A=null,z=-1,b=null;const S=new zt,O=new zt;let te=null;const F=new yt(0);let I=0,D=t.width,Z=t.height,C=1,k=null,W=null;const j=new zt(0,0,D,Z),U=new zt(0,0,D,Z);let J=!1;const oe=new Hp;let he=!1,ue=!1,xe=null;const Pe=new Ht,ke=new _t,lt=new Y,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?C:1}let G=i;function Ut(w,H){for(let ee=0;ee<w.length;ee++){const B=w[ee],Q=t.getContext(B,H);if(Q!==null)return Q}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ce,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),G=Ut(H,w),G===null)throw Ut(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Le,Fe,Ae,bt,Ze,le,ht,it,ze,T,x,$,re,P,X,ie,ne,V,be,Me,Re,ye,Ee,Je;function gt(){Le=new FM(G),Fe=new kM(G,Le,e),Le.init(Fe),ye=new ET(G,Le,Fe),Ae=new xT(G,Le,Fe),bt=new GM(G),Ze=new aT,le=new yT(G,Le,Ae,Ze,Fe,ye,bt),ht=new IM(v),it=new BM(v),ze=new KE(G,Fe),Ee=new NM(G,Le,ze,Fe),T=new zM(G,ze,bt,Ee),x=new XM(G,T,ze,bt),be=new $M(G,Fe,le),ie=new DM(Ze),$=new sT(v,ht,it,Le,Fe,Ee,ie),re=new AT(v,Ze),P=new lT,X=new pT(Le,Fe),V=new CM(v,ht,it,Ae,x,d,l),ne=new bT(v,x,Fe),Je=new RT(G,bt,Fe,Ae),Me=new LM(G,Le,bt,Fe),Re=new HM(G,Le,bt,Fe),bt.programs=$.programs,v.capabilities=Fe,v.extensions=Le,v.properties=Ze,v.renderLists=P,v.shadowMap=ne,v.state=Ae,v.info=bt}gt();const N=new TT(v,G);this.xr=N,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(w){w!==void 0&&(C=w,this.setSize(D,Z,!1))},this.getSize=function(w){return w.set(D,Z)},this.setSize=function(w,H,ee=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,Z=H,t.width=Math.floor(w*C),t.height=Math.floor(H*C),ee===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(D*C,Z*C).floor()},this.setDrawingBufferSize=function(w,H,ee){D=w,Z=H,C=ee,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,H,ee,B){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,H,ee,B),Ae.viewport(S.copy(j).multiplyScalar(C).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,H,ee,B){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,H,ee,B),Ae.scissor(O.copy(U).multiplyScalar(C).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){Ae.setScissorTest(J=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(w=!0,H=!0,ee=!0){let B=0;if(w){let Q=!1;if(A!==null){const ve=A.texture.format;Q=ve===Mp||ve===wp||ve===Sp}if(Q){const ve=A.texture.type,De=ve===Hi||ve===Di||ve===zc||ve===lr||ve===yp||ve===Ep,Oe=V.getClearColor(),Be=V.getClearAlpha(),Qe=Oe.r,Ue=Oe.g,We=Oe.b;De?(f[0]=Qe,f[1]=Ue,f[2]=We,f[3]=Be,G.clearBufferuiv(G.COLOR,0,f)):(_[0]=Qe,_[1]=Ue,_[2]=We,_[3]=Be,G.clearBufferiv(G.COLOR,0,_))}else B|=G.COLOR_BUFFER_BIT}H&&(B|=G.DEPTH_BUFFER_BIT),ee&&(B|=G.STENCIL_BUFFER_BIT),G.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),P.dispose(),X.dispose(),Ze.dispose(),ht.dispose(),it.dispose(),x.dispose(),Ee.dispose(),Je.dispose(),$.dispose(),N.dispose(),N.removeEventListener("sessionstart",xt),N.removeEventListener("sessionend",On),xe&&(xe.dispose(),xe=null),qt.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=bt.autoReset,H=ne.enabled,ee=ne.autoUpdate,B=ne.needsUpdate,Q=ne.type;gt(),bt.autoReset=w,ne.enabled=H,ne.autoUpdate=ee,ne.needsUpdate=B,ne.type=Q}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function me(w){const H=w.target;H.removeEventListener("dispose",me),ct(H)}function ct(w){St(w),Ze.remove(w)}function St(w){const H=Ze.get(w).programs;H!==void 0&&(H.forEach(function(ee){$.releaseProgram(ee)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ee,B,Q,ve){H===null&&(H=Wt);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=Kp(w,H,ee,B,Q);Ae.setMaterial(B,De);let Be=ee.index,Qe=1;if(B.wireframe===!0){if(Be=T.getWireframeAttribute(ee),Be===void 0)return;Qe=2}const Ue=ee.drawRange,We=ee.attributes.position;let wt=Ue.start*Qe,At=(Ue.start+Ue.count)*Qe;ve!==null&&(wt=Math.max(wt,ve.start*Qe),At=Math.min(At,(ve.start+ve.count)*Qe)),Be!==null?(wt=Math.max(wt,0),At=Math.min(At,Be.count)):We!=null&&(wt=Math.max(wt,0),At=Math.min(At,We.count));const yn=At-wt;if(yn<0||yn===1/0)return;Ee.setup(Q,B,Oe,ee,Be);let ii,Ct=Me;if(Be!==null&&(ii=ze.get(Be),Ct=Re,Ct.setIndex(ii)),Q.isMesh)B.wireframe===!0?(Ae.setLineWidth(B.wireframeLinewidth*Ve()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(Q.isLine){let tt=B.linewidth;tt===void 0&&(tt=1),Ae.setLineWidth(tt*Ve()),Q.isLineSegments?Ct.setMode(G.LINES):Q.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else Q.isPoints?Ct.setMode(G.POINTS):Q.isSprite&&Ct.setMode(G.TRIANGLES);if(Q.isInstancedMesh)Ct.renderInstances(wt,yn,Q.count);else if(ee.isInstancedBufferGeometry){const tt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ho=Math.min(ee.instanceCount,tt);Ct.renderInstances(wt,yn,Ho)}else Ct.render(wt,yn)},this.compile=function(w,H){function ee(B,Q,ve){B.transparent===!0&&B.side===mi&&B.forceSinglePass===!1?(B.side=an,B.needsUpdate=!0,ha(B,Q,ve),B.side=$i,B.needsUpdate=!0,ha(B,Q,ve),B.side=mi):ha(B,Q,ve)}m=X.get(w),m.init(),E.push(m),w.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights),w.traverse(function(B){const Q=B.material;if(Q)if(Array.isArray(Q))for(let ve=0;ve<Q.length;ve++){const De=Q[ve];ee(De,w,B)}else ee(Q,w,B)}),E.pop(),m=null};let Rt=null;function Si(w){Rt&&Rt(w)}function xt(){qt.stop()}function On(){qt.start()}const qt=new Gp;qt.setAnimationLoop(Si),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(w){Rt=w,N.setAnimationLoop(w),w===null?qt.stop():qt.start()},N.addEventListener("sessionstart",xt),N.addEventListener("sessionend",On),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(H),H=N.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,H,A),m=X.get(w,E.length),m.init(),E.push(m),Pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),oe.setFromProjectionMatrix(Pe),ue=this.localClippingEnabled,he=ie.init(this.clippingPlanes,ue),g=P.get(w,p.length),g.init(),p.push(g),Xc(w,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(k,W),this.info.render.frame++,he===!0&&ie.beginShadows();const ee=m.state.shadowsArray;if(ne.render(ee,w,H),he===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(g,w),m.setupLights(v._useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let Q=0,ve=B.length;Q<ve;Q++){const De=B[Q];Zc(g,w,De,De.viewport)}}else Zc(g,w,H);A!==null&&(le.updateMultisampleRenderTarget(A),le.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,H),Ee.resetDefaultState(),z=-1,b=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Xc(w,H,ee,B){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){B&&lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pe);const De=x.update(w),Oe=w.material;Oe.visible&&g.push(w,De,Oe,ee,lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const De=x.update(w),Oe=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),lt.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),lt.copy(De.boundingSphere.center)),lt.applyMatrix4(w.matrixWorld).applyMatrix4(Pe)),Array.isArray(Oe)){const Be=De.groups;for(let Qe=0,Ue=Be.length;Qe<Ue;Qe++){const We=Be[Qe],wt=Oe[We.materialIndex];wt&&wt.visible&&g.push(w,De,wt,ee,lt.z,We)}}else Oe.visible&&g.push(w,De,Oe,ee,lt.z,null)}}const ve=w.children;for(let De=0,Oe=ve.length;De<Oe;De++)Xc(ve[De],H,ee,B)}function Zc(w,H,ee,B){const Q=w.opaque,ve=w.transmissive,De=w.transparent;m.setupLightsView(ee),he===!0&&ie.setGlobalState(v.clippingPlanes,ee),ve.length>0&&jp(Q,ve,H,ee),B&&Ae.viewport(S.copy(B)),Q.length>0&&da(Q,H,ee),ve.length>0&&da(ve,H,ee),De.length>0&&da(De,H,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function jp(w,H,ee,B){const Q=Fe.isWebGL2;xe===null&&(xe=new gr(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Qs:Hi,minFilter:Js,samples:Q?4:0})),v.getDrawingBufferSize(ke),Q?xe.setSize(ke.x,ke.y):xe.setSize(_c(ke.x),_c(ke.y));const ve=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(F),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const De=v.toneMapping;v.toneMapping=zi,da(w,ee,B),le.updateMultisampleRenderTarget(xe),le.updateRenderTargetMipmap(xe);let Oe=!1;for(let Be=0,Qe=H.length;Be<Qe;Be++){const Ue=H[Be],We=Ue.object,wt=Ue.geometry,At=Ue.material,yn=Ue.group;if(At.side===mi&&We.layers.test(B.layers)){const ii=At.side;At.side=an,At.needsUpdate=!0,qc(We,ee,B,wt,At,yn),At.side=ii,At.needsUpdate=!0,Oe=!0}}Oe===!0&&(le.updateMultisampleRenderTarget(xe),le.updateRenderTargetMipmap(xe)),v.setRenderTarget(ve),v.setClearColor(F,I),v.toneMapping=De}function da(w,H,ee){const B=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,ve=w.length;Q<ve;Q++){const De=w[Q],Oe=De.object,Be=De.geometry,Qe=B===null?De.material:B,Ue=De.group;Oe.layers.test(ee.layers)&&qc(Oe,H,ee,Be,Qe,Ue)}}function qc(w,H,ee,B,Q,ve){w.onBeforeRender(v,H,ee,B,Q,ve),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(v,H,ee,B,w,ve),Q.transparent===!0&&Q.side===mi&&Q.forceSinglePass===!1?(Q.side=an,Q.needsUpdate=!0,v.renderBufferDirect(ee,H,B,Q,w,ve),Q.side=$i,Q.needsUpdate=!0,v.renderBufferDirect(ee,H,B,Q,w,ve),Q.side=mi):v.renderBufferDirect(ee,H,B,Q,w,ve),w.onAfterRender(v,H,ee,B,Q,ve)}function ha(w,H,ee){H.isScene!==!0&&(H=Wt);const B=Ze.get(w),Q=m.state.lights,ve=m.state.shadowsArray,De=Q.state.version,Oe=$.getParameters(w,Q.state,ve,H,ee),Be=$.getProgramCacheKey(Oe);let Qe=B.programs;B.environment=w.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(w.isMeshStandardMaterial?it:ht).get(w.envMap||B.environment),Qe===void 0&&(w.addEventListener("dispose",me),Qe=new Map,B.programs=Qe);let Ue=Qe.get(Be);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===De)return Yc(w,Oe),Ue}else Oe.uniforms=$.getUniforms(w),w.onBuild(ee,Oe,v),w.onBeforeCompile(Oe,v),Ue=$.acquireProgram(Oe,Be),Qe.set(Be,Ue),B.uniforms=Oe.uniforms;const We=B.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=ie.uniform),Yc(w,Oe),B.needsLights=Qp(w),B.lightsStateVersion=De,B.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix);const wt=Ue.getUniforms(),At=Ka.seqWithValue(wt.seq,We);return B.currentProgram=Ue,B.uniformsList=At,Ue}function Yc(w,H){const ee=Ze.get(w);ee.outputColorSpace=H.outputColorSpace,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function Kp(w,H,ee,B,Q){H.isScene!==!0&&(H=Wt),le.resetTextureUnits();const ve=H.fog,De=B.isMeshStandardMaterial?H.environment:null,Oe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Jn,Be=(B.isMeshStandardMaterial?it:ht).get(B.envMap||De),Qe=B.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ue=!!ee.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),We=!!ee.morphAttributes.position,wt=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let yn=zi;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yn=v.toneMapping);const ii=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ct=ii!==void 0?ii.length:0,tt=Ze.get(B),Ho=m.state.lights;if(he===!0&&(ue===!0||w!==b)){const cn=w===b&&B.id===z;ie.setState(B,w,cn)}let Nt=!1;B.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ho.state.version||tt.outputColorSpace!==Oe||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||tt.envMap!==Be||B.fog===!0&&tt.fog!==ve||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ie.numPlanes||tt.numIntersection!==ie.numIntersection)||tt.vertexAlphas!==Qe||tt.vertexTangents!==Ue||tt.morphTargets!==We||tt.morphNormals!==wt||tt.morphColors!==At||tt.toneMapping!==yn||Fe.isWebGL2===!0&&tt.morphTargetsCount!==Ct)&&(Nt=!0):(Nt=!0,tt.__version=B.version);let qi=tt.currentProgram;Nt===!0&&(qi=ha(B,H,Q));let jc=!1,bs=!1,Go=!1;const Yt=qi.getUniforms(),Yi=tt.uniforms;if(Ae.useProgram(qi.program)&&(jc=!0,bs=!0,Go=!0),B.id!==z&&(z=B.id,bs=!0),jc||b!==w){if(Yt.setValue(G,"projectionMatrix",w.projectionMatrix),Fe.logarithmicDepthBuffer&&Yt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,bs=!0,Go=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const cn=Yt.map.cameraPosition;cn!==void 0&&cn.setValue(G,lt.setFromMatrixPosition(w.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Yt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Q.isSkinnedMesh)&&Yt.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(Q.isSkinnedMesh){Yt.setOptional(G,Q,"bindMatrix"),Yt.setOptional(G,Q,"bindMatrixInverse");const cn=Q.skeleton;cn&&(Fe.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Yt.setValue(G,"boneTexture",cn.boneTexture,le),Yt.setValue(G,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vo=ee.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0&&Fe.isWebGL2===!0)&&be.update(Q,ee,qi),(bs||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,Yt.setValue(G,"receiveShadow",Q.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Yi.envMap.value=Be,Yi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),bs&&(Yt.setValue(G,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&Jp(Yi,Go),ve&&B.fog===!0&&re.refreshFogUniforms(Yi,ve),re.refreshMaterialUniforms(Yi,B,C,Z,xe),Ka.upload(G,tt.uniformsList,Yi,le)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ka.upload(G,tt.uniformsList,Yi,le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Yt.setValue(G,"center",Q.center),Yt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Yt.setValue(G,"normalMatrix",Q.normalMatrix),Yt.setValue(G,"modelMatrix",Q.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const cn=B.uniformsGroups;for(let Wo=0,em=cn.length;Wo<em;Wo++)if(Fe.isWebGL2){const Kc=cn[Wo];Je.update(Kc,qi),Je.bind(Kc,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function Jp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Qp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,H,ee){Ze.get(w.texture).__webglTexture=H,Ze.get(w.depthTexture).__webglTexture=ee;const B=Ze.get(w);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=ee===void 0,B.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const ee=Ze.get(w);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,ee=0){A=w,M=H,R=ee;let B=!0,Q=null,ve=!1,De=!1;if(w){const Be=Ze.get(w);Be.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(G.FRAMEBUFFER,null),B=!1):Be.__webglFramebuffer===void 0?le.setupRenderTarget(w):Be.__hasExternalTextures&&le.rebindTextures(w,Ze.get(w.texture).__webglTexture,Ze.get(w.depthTexture).__webglTexture);const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const Ue=Ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?Q=Ue[H][ee]:Q=Ue[H],ve=!0):Fe.isWebGL2&&w.samples>0&&le.useMultisampledRTT(w)===!1?Q=Ze.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?Q=Ue[ee]:Q=Ue,S.copy(w.viewport),O.copy(w.scissor),te=w.scissorTest}else S.copy(j).multiplyScalar(C).floor(),O.copy(U).multiplyScalar(C).floor(),te=J;if(Ae.bindFramebuffer(G.FRAMEBUFFER,Q)&&Fe.drawBuffers&&B&&Ae.drawBuffers(w,Q),Ae.viewport(S),Ae.scissor(O),Ae.setScissorTest(te),ve){const Be=Ze.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Be.__webglTexture,ee)}else if(De){const Be=Ze.get(w.texture),Qe=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Qe)}z=-1},this.readRenderTargetPixels=function(w,H,ee,B,Q,ve,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){Ae.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Be=w.texture,Qe=Be.format,Ue=Be.type;if(Qe!==Dn&&ye.convert(Qe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ue===Qs&&(Le.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ue!==Hi&&ye.convert(Ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Ii&&(Fe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-B&&ee>=0&&ee<=w.height-Q&&G.readPixels(H,ee,B,Q,ye.convert(Qe),ye.convert(Ue),ve)}finally{const Be=A!==null?Ze.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(G.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(w,H,ee=0){const B=Math.pow(2,-ee),Q=Math.floor(H.image.width*B),ve=Math.floor(H.image.height*B);le.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,ee,0,0,w.x,w.y,Q,ve),Ae.unbindTexture()},this.copyTextureToTexture=function(w,H,ee,B=0){const Q=H.image.width,ve=H.image.height,De=ye.convert(ee.format),Oe=ye.convert(ee.type);le.setTexture2D(ee,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ee.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ee.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,B,w.x,w.y,Q,ve,De,Oe,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,B,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,B,w.x,w.y,De,Oe,H.image),B===0&&ee.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,H,ee,B,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,Be=ye.convert(B.format),Qe=ye.convert(B.type);let Ue;if(B.isData3DTexture)le.setTexture3D(B,0),Ue=G.TEXTURE_3D;else if(B.isDataArrayTexture)le.setTexture2DArray(B,0),Ue=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const We=G.getParameter(G.UNPACK_ROW_LENGTH),wt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),At=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES),Ct=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?G.texSubImage3D(Ue,Q,H.x,H.y,H.z,ve,De,Oe,Be,Qe,Ct.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ue,Q,H.x,H.y,H.z,ve,De,Oe,Be,Ct.data)):G.texSubImage3D(Ue,Q,H.x,H.y,H.z,ve,De,Oe,Be,Qe,Ct),G.pixelStorei(G.UNPACK_ROW_LENGTH,We),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,At),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Q===0&&B.generateMipmaps&&G.generateMipmap(Ue),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?le.setTextureCube(w,0):w.isData3DTexture?le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?le.setTexture2DArray(w,0):le.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){M=0,R=0,A=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xe?ur:Tp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Xe:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NT extends Zp{}NT.prototype.isWebGL1Renderer=!0;class LT extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class kT extends ca{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const $r=new la(0,0,0,"YXZ"),Xr=new Y,DT={type:"change"},IT={type:"lock"},UT={type:"unlock"},Ph=Math.PI/2;class PT extends wr{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=OT.bind(this),this._onPointerlockChange=BT.bind(this),this._onPointerlockError=FT.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Xr.setFromMatrixColumn(t.matrix,0),Xr.crossVectors(t.up,Xr),t.position.addScaledVector(Xr,e)}moveRight(e){const t=this.camera;Xr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Xr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function OT(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;$r.setFromQuaternion(i.quaternion),$r.y-=e*.002*this.pointerSpeed,$r.x-=t*.002*this.pointerSpeed,$r.x=Math.max(Ph-this.maxPolarAngle,Math.min(Ph-this.minPolarAngle,$r.x)),i.quaternion.setFromEuler($r),this.dispatchEvent(DT)}function BT(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(IT),this.isLocked=!0):(this.dispatchEvent(UT),this.isLocked=!1)}function FT(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}let Oh=0;class zT{constructor(){q(this,"destroyed",!1);q(this,"listeners",new Map)}addEventListener(e,t,i=!1){var r;if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");return this.listeners.has(e)||this.listeners.set(e,[]),(r=this.listeners.get(e))==null||r.push({callbackfn:t,once:i,id:Oh}),Oh++}removeEventListener(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");if(typeof arguments[0]=="number"){for(const e of this.listeners.values())for(let t=0;t<e.length;t++)if(e[t].id==arguments[0])return e.splice(t,1),!0;return!1}else{const e=arguments[0],t=arguments[1],i=arguments[2],r=this.listeners.get(e);if(r===void 0)return!1;for(let s=0;s<r.length;s++){const a=r[s];if(a.callbackfn===t&&a.once===i)return r.splice(s,1),!0}return!1}}dispatchEvent(e,...t){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");const i=this.listeners.get(e);i!==void 0&&i.forEach(r=>{r.callbackfn(...t),r.once&&this.removeEventListener(e,r.callbackfn,r.once)})}destroyDispatcher(){if(this.destroyed)throw new Error("Usage of event dispatcher after being destroyed.");this.destroyed=!0,this.listeners.forEach((e,t)=>{this.listeners.delete(t)})}}function Xa(n,e,t,i){return Math.sqrt((n-t)**2+(e-i)**2)}class HT extends zT{constructor(t,i,r){super();q(this,"world");q(this,"renderDistance");q(this,"unloadDistance");q(this,"chunks",[]);q(this,"regions",[]);q(this,"isUpdating",!1);this.world=t,this.renderDistance=i,this.unloadDistance=r}async getRegion(t,i){const r=this.regions.find(o=>o.rx==t&&o.rz==i);if(r!=null)return r;const s=await this.world.getRegion(t,i);if(s==null){const o={type:"empty",rx:t,rz:i};return this.regions.push(o),o}await s.init();const a={type:"loaded",rx:t,rz:i,data:s};return this.regions.push(a),a}async loadChunk(t,i){if(this.chunks.some(a=>a.cx==t&&a.cz==i))return;const r=await this.getRegion(Math.floor(t/32),Math.floor(i/32));if(r.type!="loaded")return;const s=await r.data.getChunk(t,i);if(s==null){this.chunks.push({type:"empty",cx:t,cz:i});return}this.chunks.push({type:"loaded",cx:t,cz:i,data:s}),this.dispatchEvent("loadchunk",s)}async update(t,i){if(this.isUpdating)return;this.isUpdating=!0,this.chunks=this.chunks.filter(s=>Xa(t,i,s.cx,s.cz)>this.unloadDistance?(s.type=="loaded"&&this.dispatchEvent("unloadchunk",s.data),!1):!0);let r=[];for(let s=-this.renderDistance;s<this.renderDistance;s++)for(let a=-this.renderDistance;a<this.renderDistance;a++){const o=t+s,l=i+a;Xa(t,i,o,l)>this.renderDistance||this.chunks.some(c=>c.cx==o&&c.cz==l)||r.push({cx:o,cz:l})}for(;r.length>0;){const s=r.reduce((a,o)=>a==null||Xa(t,i,o.cx,o.cz)<Xa(t,i,a.cx,a.cz)?o:a);r.splice(r.indexOf(s),1),await this.loadChunk(s.cx,s.cz)}this.isUpdating=!1}}function GT(n){let e,t,i,r;return{c(){e=_n(),t=qe("canvas"),this.h()},l(s){e=gn(s),t=Ye(s,"CANVAS",{class:!0}),mt(t).forEach(ae),this.h()},h(){Se(t,"class","svelte-rotshb")},m(s,a){we(s,e,a),we(s,t,a),n[5](t),i||(r=[Wn(document.body,"keydown",n[2]),Wn(document.body,"keyup",n[3]),Wn(t,"click",n[6])],i=!0)},p:L,i:L,o:L,d(s){s&&(ae(e),ae(t)),n[5](null),i=!1,Kh(r)}}}function VT(n,e,t){let{entry:i}=e,r,s,a,o=-1,l=-1,c,u,h,d,f=new Set;function _(E){f.add(E.code)}function g(E){f.delete(E.code)}ps(async()=>{const E=new Sy(i);c=new Zp({canvas:r,antialias:!0}),u=new LT,h=new wn(91,1,.1,2e3),t(1,d=new PT(h,r)),h.position.set(0,100,0);function v(O=1){let te=new Y,F=.1;const I=h.getWorldDirection(new Y),D=h.up,Z=new Y().crossVectors(I,D);f.has("KeyW")&&te.add(I),f.has("KeyS")&&te.addScaledVector(I,-1),f.has("KeyD")&&te.add(Z),f.has("KeyA")&&te.addScaledVector(Z,-1),f.has("Space")&&te.add(D),f.has("ControlLeft")&&te.addScaledVector(D,-1),h.position.addScaledVector(te.normalize(),F*O)}s=new ResizeObserver(()=>{t(0,r.width=r.clientWidth,r),t(0,r.height=r.clientHeight,r),c.setSize(r.width,r.height),h.aspect=r.width/r.height,h.updateProjectionMatrix()}),s.observe(r);function y(O){let te=[];O.forEachBlock((I,D,Z,C)=>{O.getBlock(I+1,D,Z).Name=="minecraft:air"&&te.push(I+1,D,Z,I+1,D+1,Z,I+1,D,Z+1,I+1,D+1,Z,I+1,D+1,Z+1,I+1,D,Z+1),O.getBlock(I-1,D,Z).Name=="minecraft:air"&&te.push(I,D+1,Z,I,D,Z,I,D,Z+1,I,D+1,Z+1,I,D+1,Z,I,D,Z+1),O.getBlock(I,D+1,Z).Name=="minecraft:air"&&te.push(I+1,D+1,Z,I,D+1,Z,I,D+1,Z+1,I+1,D+1,Z+1,I+1,D+1,Z,I,D+1,Z+1),O.getBlock(I,D-1,Z).Name=="minecraft:air"&&te.push(I,D,Z,I+1,D,Z,I,D,Z+1,I+1,D,Z,I+1,D,Z+1,I,D,Z+1),O.getBlock(I,D,Z+1).Name=="minecraft:air"&&te.push(I,D,Z+1,I+1,D,Z+1,I,D+1,Z+1,I+1,D,Z+1,I+1,D+1,Z+1,I,D+1,Z+1),O.getBlock(I,D,Z-1).Name=="minecraft:air"&&te.push(I+1,D,Z,I,D,Z,I,D+1,Z,I+1,D+1,Z,I+1,D,Z,I,D+1,Z)});const F=new Zi;return F.setAttribute("position",new Gi(te,3)),F}let M=[];a=new HT(E,8,10),a.addEventListener("loadchunk",O=>{const te=y(O);te.computeVertexNormals();const F=new vi(te,new kT);F.translateX(O.cx*16),F.translateZ(O.cz*16),u.add(F),M.push({mesh:F,chunk:O})}),a.addEventListener("unloadchunk",O=>{const te=M.find(F=>F.chunk==O);if(te==null)throw new Error("Error while unloading chunk.");te.mesh.clear(),te.mesh.removeFromParent(),M=M.filter(F=>F!=te)});let R,A;async function z(){const O=Math.floor(h.position.x/16),te=Math.floor(h.position.z/16);(O!=R||te!=A)&&(await a.update(O,te),R=O,A=te),clearTimeout(l),l=setTimeout(()=>z(),500)}z();let b=Date.now();async function S(){d.isLocked&&v(Date.now()-b),c.render(u,h),b=Date.now(),clearTimeout(o),o=setTimeout(()=>S(),1e3/60)}S()}),jh(()=>{a.destroyDispatcher(),u.clear(),d.dispose(),clearTimeout(l),clearTimeout(o),s.disconnect()});function m(E){ts[E?"unshift":"push"](()=>{r=E,t(0,r)})}const p=()=>d.lock();return n.$$set=E=>{"entry"in E&&t(4,i=E.entry)},[r,d,_,g,i,m,p]}class WT extends Gt{constructor(e){super(),Vt(this,e,VT,GT,Bt,{entry:4})}}const $T={namespace:"minecraft.world",priority:2,isValid:async n=>n.type!=nt.Directory||n.parent!=null&&n.parent.name!="saves"?!1:await n.get("level.dat")!==null,createViewer:async(n,e)=>{if(n.type==nt.Directory)new WT({target:e,props:{entry:n}});else throw new Error("Tried to create world viewer with file.")},getIcon:async n=>{if(n.type==nt.Directory){const e=await n.get("icon.png");return e==null?"/asset-viewer/bootstrap-icons/boxes.svg":e.type==nt.Directory?null:URL.createObjectURL(await e.blob())}return null}};function Bh(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t=n[2])||Se(e,"src",t),Se(e,"alt","Tab List Icon"),Se(e,"class","svelte-1txv76s")},m(i,r){we(i,e,r)},p(i,r){r&4&&!en(e.src,t=i[2])&&Se(e,"src",t)},d(i){i&&ae(e)}}}function XT(n){let e,t,i,r,s,a=n[2]&&Bh(n);return{c(){e=qe("div"),a&&a.c(),t=_n(),i=In(n[1]),this.h()},l(o){e=Ye(o,"DIV",{class:!0});var l=mt(e);a&&a.l(l),t=gn(l),i=Un(l,n[1]),l.forEach(ae),this.h()},h(){Se(e,"class","tab-list-item svelte-1txv76s"),pn(e,"selected",n[3])},m(o,l){we(o,e,l),a&&a.m(e,null),Tt(e,t),Tt(e,i),r||(s=Wn(e,"click",n[5]),r=!0)},p(o,[l]){o[2]?a?a.p(o,l):(a=Bh(o),a.c(),a.m(e,t)):a&&(a.d(1),a=null),l&2&&Xi(i,o[1]),l&8&&pn(e,"selected",o[3])},i:L,o:L,d(o){o&&ae(e),a&&a.d(),r=!1,s()}}}function ZT(n,e,t){let{id:i}=e,{name:r}=e,{icon:s=null}=e,{selected:a=!1}=e,{onSelect:o}=e;ps(()=>{a&&o(i)});const l=()=>o(i);return n.$$set=c=>{"id"in c&&t(0,i=c.id),"name"in c&&t(1,r=c.name),"icon"in c&&t(2,s=c.icon),"selected"in c&&t(3,a=c.selected),"onSelect"in c&&t(4,o=c.onSelect)},[i,r,s,a,o,l]}class qT extends Gt{constructor(e){super(),Vt(this,e,ZT,XT,Bt,{id:0,name:1,icon:2,selected:3,onSelect:4})}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),pi()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),pi()}get icon(){return this.$$.ctx[2]}set icon(e){this.$$set({icon:e}),pi()}get selected(){return this.$$.ctx[3]}set selected(e){this.$$set({selected:e}),pi()}get onSelect(){return this.$$.ctx[4]}set onSelect(e){this.$$set({onSelect:e}),pi()}}function YT(n){let e;return{c(){e=qe("div"),this.h()},l(t){e=Ye(t,"DIV",{class:!0}),mt(e).forEach(ae),this.h()},h(){Se(e,"class","tab-content-item svelte-195j8un"),pn(e,"selected",n[1])},m(t,i){we(t,e,i),n[3](e)},p(t,[i]){i&2&&pn(e,"selected",t[1])},i:L,o:L,d(t){t&&ae(e),n[3](null)}}}function jT(n,e,t){let{id:i}=e,{selected:r=!1}=e,{slot:s=null}=e;function a(o){ts[o?"unshift":"push"](()=>{s=o,t(0,s)})}return n.$$set=o=>{"id"in o&&t(2,i=o.id),"selected"in o&&t(1,r=o.selected),"slot"in o&&t(0,s=o.slot)},[s,r,i,a]}class KT extends Gt{constructor(e){super(),Vt(this,e,jT,YT,Bt,{id:2,selected:1,slot:0})}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),pi()}get selected(){return this.$$.ctx[1]}set selected(e){this.$$set({selected:e}),pi()}get slot(){return this.$$.ctx[0]}set slot(e){this.$$set({slot:e}),pi()}}const qp=dm();let Os;qp.subscribe(n=>Os=n);function Fh(n){Os.items.forEach(e=>{e.listItem.selected=e.id==n,e.contentItem.selected=e.id==n})}function vc(n,e){const t=jn.getID(),i=new qT({target:Os.listContainer,props:{name:n,icon:e,id:t,onSelect:Fh}}),r=new KT({target:Os.contentContainer,props:{id:t}});return Os.items.push({listItem:i,contentItem:r,id:t}),Fh(t),r.slot}let Ja=[];function Pn(n){Ja.push(n),Ja=Ja.sort((e,t)=>t.priority-e.priority)}async function bc(n){if(n.viewer==null){for(const e of Ja)if(await e.isValid(n)){n.viewer=e;break}if(n.viewer!=null&&(console.debug(`Found viewer "${n.viewer.namespace}" for "${on.getPath(n)}"`),n.viewer.transform)){const e=await n.viewer.transform(n);await on.transform(n,e)}}}async function Wc(n){const e=n.viewer;e!=null&&e.createViewer&&(console.debug(`Opening viewer for "${on.getPath(n)}"`,n),e.createViewer(n,vc(n.name,e.getIcon?await e.getIcon(n):null)))}async function Ao(n){const e=n.viewer;return e==null?null:e.getIcon?await e.getIcon(n):null}Pn(L_);Pn(B_);Pn($_);Pn(Ng);Pn(Bb);Pn(cx);Pn(fx);Pn(xx);Pn(Gx);Pn(Qx);Pn($T);function JT(n){return{c:L,l:L,m:L,p:L,d:L}}function QT(n){let e;function t(s,a){return s[2]==null?tA:eA}let i=t(n),r=i(n);return{c(){e=qe("div"),r.c(),this.h()},l(s){e=Ye(s,"DIV",{class:!0});var a=mt(e);r.l(a),a.forEach(ae),this.h()},h(){Se(e,"class","icon-container svelte-6m6qam")},m(s,a){we(s,e,a),r.m(e,null)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null)))},d(s){s&&ae(e),r.d()}}}function eA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t=n[2])||Se(e,"src",t),Se(e,"alt","File Icon"),Se(e,"class","svelte-6m6qam")},m(i,r){we(i,e,r)},p(i,r){r&1&&!en(e.src,t=i[2])&&Se(e,"src",t)},d(i){i&&ae(e)}}}function tA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t="/asset-viewer/bootstrap-icons/file-earmark.svg")||Se(e,"src",t),Se(e,"alt","File Icon"),Se(e,"class","svelte-6m6qam")},m(i,r){we(i,e,r)},p:L,d(i){i&&ae(e)}}}function nA(n){return{c:L,l:L,m:L,p:L,d:L}}function iA(n){let e,t,i,r,s,a=n[0].name+"",o,l,c,u={ctx:n,current:null,token:null,hasCatch:!1,pending:nA,then:QT,catch:JT,value:2};return vt(i=Ao(n[0]),u),{c(){e=qe("div"),t=qe("div"),u.block.c(),r=_n(),s=qe("div"),o=In(a),this.h()},l(h){e=Ye(h,"DIV",{class:!0});var d=mt(e);t=Ye(d,"DIV",{class:!0});var f=mt(t);u.block.l(f),r=gn(f),s=Ye(f,"DIV",{class:!0});var _=mt(s);o=Un(_,a),_.forEach(ae),f.forEach(ae),d.forEach(ae),this.h()},h(){Se(s,"class","name svelte-6m6qam"),Se(t,"class","title svelte-6m6qam"),Se(e,"class","container svelte-6m6qam")},m(h,d){we(h,e,d),Tt(e,t),u.block.m(t,u.anchor=null),u.mount=()=>t,u.anchor=r,Tt(t,r),Tt(t,s),Tt(s,o),l||(c=Wn(t,"click",n[1]),l=!0)},p(h,[d]){n=h,u.ctx=n,d&1&&i!==(i=Ao(n[0]))&&vt(i,u)||xn(u,n,d),d&1&&a!==(a=n[0].name+"")&&Xi(o,a)},i:L,o:L,d(h){h&&ae(e),u.block.d(),u.token=null,u=null,l=!1,c()}}}function rA(n,e,t){let{file:i}=e;const r=()=>Wc(i);return n.$$set=s=>{"file"in s&&t(0,i=s.file)},[i,r]}class sA extends Gt{constructor(e){super(),Vt(this,e,rA,iA,Bt,{file:0})}}function zh(n,e,t){const i=n.slice();return i[8]=e[t],i}function aA(n){return{c:L,l:L,m:L,p:L,d:L}}function oA(n){let e;function t(s,a){return s[11]==null?cA:lA}let i=t(n),r=i(n);return{c(){e=qe("div"),r.c(),this.h()},l(s){e=Ye(s,"DIV",{class:!0});var a=mt(e);r.l(a),a.forEach(ae),this.h()},h(){Se(e,"class","icon-container svelte-135cnfs")},m(s,a){we(s,e,a),r.m(e,null)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null)))},d(s){s&&ae(e),r.d()}}}function lA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t=n[11])||Se(e,"src",t),Se(e,"alt","Directory Icon"),Se(e,"class","svelte-135cnfs")},m(i,r){we(i,e,r)},p(i,r){r&2&&!en(e.src,t=i[11])&&Se(e,"src",t)},d(i){i&&ae(e)}}}function cA(n){let e;function t(s,a){return s[3]?s[0]?uA:dA:hA}let i=t(n),r=i(n);return{c(){r.c(),e=ot()},l(s){r.l(s),e=ot()},m(s,a){r.m(s,a),we(s,e,a)},p(s,a){i===(i=t(s))&&r?r.p(s,a):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&ae(e),r.d(s)}}}function uA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t="/asset-viewer/bootstrap-icons/archive.svg")||Se(e,"src",t),Se(e,"alt","Directory Archive Icon"),Se(e,"class","svelte-135cnfs")},m(i,r){we(i,e,r)},p:L,d(i){i&&ae(e)}}}function dA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t="/asset-viewer/bootstrap-icons/archive-fill.svg")||Se(e,"src",t),Se(e,"alt","Directory Collapsed Archive Icon"),Se(e,"class","svelte-135cnfs")},m(i,r){we(i,e,r)},p:L,d(i){i&&ae(e)}}}function hA(n){let e;function t(s,a){return s[0]?fA:pA}let i=t(n),r=i(n);return{c(){r.c(),e=ot()},l(s){r.l(s),e=ot()},m(s,a){r.m(s,a),we(s,e,a)},p(s,a){i!==(i=t(s))&&(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&ae(e),r.d(s)}}}function fA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t="/asset-viewer/bootstrap-icons/folder.svg")||Se(e,"src",t),Se(e,"alt","Directory Icon"),Se(e,"class","svelte-135cnfs")},m(i,r){we(i,e,r)},d(i){i&&ae(e)}}}function pA(n){let e,t;return{c(){e=qe("img"),this.h()},l(i){e=Ye(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){en(e.src,t="/asset-viewer/bootstrap-icons/folder-fill.svg")||Se(e,"src",t),Se(e,"alt","Directory Collapsed Icon"),Se(e,"class","svelte-135cnfs")},m(i,r){we(i,e,r)},d(i){i&&ae(e)}}}function mA(n){return{c:L,l:L,m:L,p:L,d:L}}function Hh(n){let e,t='<img src="/asset-viewer/bootstrap-icons/eye.svg" alt="Open Viewer Icon" class="svelte-135cnfs"/>',i,r;return{c(){e=qe("div"),e.innerHTML=t,this.h()},l(s){e=Ye(s,"DIV",{class:!0,"data-svelte-h":!0}),Jh(e)!=="svelte-1fphaay"&&(e.innerHTML=t),this.h()},h(){Se(e,"class","create-viewer-icon-container svelte-135cnfs")},m(s,a){we(s,e,a),i||(r=Wn(e,"click",n[6]),i=!0)},p:L,d(s){s&&ae(e),i=!1,r()}}}function Gh(n){let e,t,i=Vi(n[4]),r=[];for(let a=0;a<i.length;a+=1)r[a]=Vh(zh(n,i,a));const s=a=>at(r[a],1,1,()=>{r[a]=null});return{c(){e=qe("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=Ye(a,"DIV",{class:!0});var o=mt(e);for(let l=0;l<r.length;l+=1)r[l].l(o);o.forEach(ae),this.h()},h(){Se(e,"class","dir-entries svelte-135cnfs"),pn(e,"hidden",!n[0])},m(a,o){we(a,e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(a,o){if(o&16){i=Vi(a[4]);let l;for(l=0;l<i.length;l+=1){const c=zh(a,i,l);r[l]?(r[l].p(c,o),je(r[l],1)):(r[l]=Vh(c),r[l].c(),je(r[l],1),r[l].m(e,null))}for(yi(),l=i.length;l<r.length;l+=1)s(l);Ei()}(!t||o&1)&&pn(e,"hidden",!a[0])},i(a){if(!t){for(let o=0;o<i.length;o+=1)je(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)at(r[o]);t=!1},d(a){a&&ae(e),No(r,a)}}}function _A(n){let e,t;return e=new Yp({props:{dir:n[8]}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&16&&(s.dir=i[8]),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function gA(n){let e,t;return e=new sA({props:{file:n[8]}}),{c(){Qn(e.$$.fragment)},l(i){ei(e.$$.fragment,i)},m(i,r){ti(e,i,r),t=!0},p(i,r){const s={};r&16&&(s.file=i[8]),e.$set(s)},i(i){t||(je(e.$$.fragment,i),t=!0)},o(i){at(e.$$.fragment,i),t=!1},d(i){ni(e,i)}}}function Vh(n){let e,t,i,r;const s=[gA,_A],a=[];function o(l,c){return l[8].type==nt.File?0:l[8].type==nt.Directory?1:-1}return~(e=o(n))&&(t=a[e]=s[e](n)),{c(){t&&t.c(),i=ot()},l(l){t&&t.l(l),i=ot()},m(l,c){~e&&a[e].m(l,c),we(l,i,c),r=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(yi(),at(a[u],1,1,()=>{a[u]=null}),Ei()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),je(t,1),t.m(i.parentNode,i)):t=null)},i(l){r||(je(t),r=!0)},o(l){at(t),r=!1},d(l){l&&ae(i),~e&&a[e].d(l)}}}function Wh(n){var m,p;let e,t,i,r,s,a=n[1].name+"",o,l,c,u,h,d,f={ctx:n,current:null,token:null,hasCatch:!1,pending:mA,then:oA,catch:aA,value:11};vt(i=Ao(n[1]),f);let _=((p=(m=n[1])==null?void 0:m.viewer)==null?void 0:p.createViewer)&&Hh(n),g=n[4]&&n[2]&&Gh(n);return{c(){e=qe("div"),t=qe("div"),f.block.c(),r=_n(),s=qe("div"),o=In(a),l=_n(),_&&_.c(),c=_n(),g&&g.c(),this.h()},l(E){e=Ye(E,"DIV",{class:!0});var v=mt(e);t=Ye(v,"DIV",{class:!0});var y=mt(t);f.block.l(y),r=gn(y),s=Ye(y,"DIV",{class:!0});var M=mt(s);o=Un(M,a),M.forEach(ae),l=gn(y),_&&_.l(y),y.forEach(ae),c=gn(v),g&&g.l(v),v.forEach(ae),this.h()},h(){Se(s,"class","name svelte-135cnfs"),Se(t,"class","title svelte-135cnfs"),Se(e,"class","container svelte-135cnfs")},m(E,v){we(E,e,v),Tt(e,t),f.block.m(t,f.anchor=null),f.mount=()=>t,f.anchor=r,Tt(t,r),Tt(t,s),Tt(s,o),Tt(t,l),_&&_.m(t,null),Tt(e,c),g&&g.m(e,null),u=!0,h||(d=Wn(t,"click",n[7]),h=!0)},p(E,v){var y,M;n=E,f.ctx=n,v&2&&i!==(i=Ao(n[1]))&&vt(i,f)||xn(f,n,v),(!u||v&2)&&a!==(a=n[1].name+"")&&Xi(o,a),(M=(y=n[1])==null?void 0:y.viewer)!=null&&M.createViewer?_?_.p(n,v):(_=Hh(n),_.c(),_.m(t,null)):_&&(_.d(1),_=null),n[4]&&n[2]?g?(g.p(n,v),v&20&&je(g,1)):(g=Gh(n),g.c(),je(g,1),g.m(e,null)):g&&(yi(),at(g,1,1,()=>{g=null}),Ei())},i(E){u||(je(g),u=!0)},o(E){at(g),u=!1},d(E){E&&ae(e),f.block.d(),f.token=null,f=null,_&&_.d(),g&&g.d(),h=!1,d()}}}function vA(n){let e=n[5],t,i,r=Wh(n);return{c(){r.c(),t=ot()},l(s){r.l(s),t=ot()},m(s,a){r.m(s,a),we(s,t,a),i=!0},p(s,[a]){a&32&&Bt(e,e=s[5])?(yi(),at(r,1,1,L),Ei(),r=Wh(s),r.c(),je(r,1),r.m(t.parentNode,t)):r.p(s,a)},i(s){i||(je(r),i=!0)},o(s){at(r),i=!1},d(s){s&&ae(t),r.d(s)}}}function bA(n,e,t){let{dir:i}=e,r,{expanded:s=!1}=e,a=!1,o,l=0;ps(async()=>{i.parent==null&&(await bc(i),t(5,l++,l));const h=Object.values(await i.list());await Promise.all(h.map(async d=>{try{await bc(d)}catch(f){console.error(f)}})),t(4,o=Object.values(await i.list()).sort((d,f)=>d.name.localeCompare(f.name)+(f.type-d.type)*1e3))});const c=h=>{h.stopPropagation(),Wc(i)},u=()=>{t(0,s=!s)};return n.$$set=h=>{"dir"in h&&t(1,i=h.dir),"expanded"in h&&t(0,s=h.expanded)},n.$$.update=()=>{var h;n.$$.dirty&2&&t(3,r=((h=i.viewer)==null?void 0:h.transform)!=null),n.$$.dirty&5&&s&&!a&&t(2,a=!0)},[s,i,a,r,o,l,c,u]}class Yp extends Gt{constructor(e){super(),Vt(this,e,bA,vA,Bt,{dir:1,expanded:0})}}var nt=(n=>(n[n.File=1]="File",n[n.Directory=2]="Directory",n))(nt||{}),on;(n=>{function e(h){return h.parent==null?h.type==2?h:null:e(h)}n.root=e;function t(h){let d=h.name;for(;h.parent!=null;)h=h.parent,d=`${h.name}/${d}`;return d}n.getPath=t;function i(h){for(h=h.replace(/[\\\/]/g,"/");h.startsWith("/");)h=h.slice(1);for(;h.endsWith("/");)h=h.slice(0,-1);return h}n.fixPath=i;async function r(h,d){let f=i(d).split("/"),_=h;for(;f.length>1;){const m=f.shift();if(m==null)throw new Error("Catastrophic error that should never happen.");const p=await h.get(m);if(p==null||p.type!=2)return null;_=p}const g=f.shift();if(g==null)throw new Error("Catastrophic error that should never happen.");return await _.get(g)}n.getDeep=r;async function s(h,d,f){const _=i(d).split("/"),g=_.shift();if(g==null)throw new Error("setDeep empty path.");if(_.length==0)await h.set(g,f);else{let m=await h.get(g);if(m==null)m=new u(g,h),await h.set(g,m);else if(m.type!=2)throw new Error("setDeep encountered a file.");await s(m,_.join("/"),f)}}n.setDeep=s;async function a(h,d){if(h.parent==null)throw new Error("Could not transform, Entry has no parent.");return d==null?await h.parent.set(h.name,null):(d.viewer=h.viewer,d.name=h.name,d.parent=h.parent,await h.parent.set(h.name,d)),d}n.transform=a;async function o(h,d){let f=[h];for(;f.length>0;){const _=f.pop();if(_==null)break;const g=Object.entries(await _.list());for(const[m,p]of g){const E=n.getPath(p),v=await d(E,p),y=await _.get(m);y!=null&&y.type==2&&(v===void 0||v===!0)&&f.push(y)}}}n.forEachDeep=o;class l{constructor(d,f,_){q(this,"viewer",null);q(this,"type",1);q(this,"name");q(this,"parent");q(this,"_blob");this._blob=d,this.name=f,this.parent=_}async blob(){return this._blob}async buffer(){return await this._blob.arrayBuffer()}}n.fsFile_Blob=l;class c{constructor(d,f,_){q(this,"viewer",null);q(this,"type",1);q(this,"name");q(this,"parent");q(this,"url");q(this,"cachedBlob",null);this.url=d,this.name=_??this.url.slice(this.url.lastIndexOf("/")+1),this.parent=f}async blob(){return this.cachedBlob==null&&(this.cachedBlob=await(await fetch(this.url)).blob()),this.cachedBlob}async buffer(){return await(await this.blob()).arrayBuffer()}}n.fsFile_Fetch=c;class u{constructor(d,f){q(this,"viewer",null);q(this,"type",2);q(this,"name");q(this,"parent");q(this,"entries",{});this.name=d,this.parent=f}async list(){return{...this.entries}}async get(d){return this.entries[d]??null}async set(d,f){f==null?delete this.entries[d]:(f.parent=this,this.entries[d]=f)}}n.fsDirectory_Container=u})(on||(on={}));async function xA(n){const e=n.createReader();let t={},i=0;do{let r=await new Promise(s=>{e.readEntries(s)});i=r.length;for(const s of r)t[s.name]=s}while(i>0);return t}class $c{constructor(e,t="ROOT",i=null){q(this,"type",nt.Directory);q(this,"viewer",null);q(this,"evaluated",!1);q(this,"name");q(this,"parent");q(this,"transfer");q(this,"initialized",!1);q(this,"entries",{});this.transfer=e,this.name=t,this.parent=i}async init(){if(this.initialized)return;const e=await xA(this.transfer);this.entries={};for(const t in e){const i=e[t];if(i.isFile){const r=await new Promise(s=>i.file(s));this.entries[t]=new on.fsFile_Blob(r,t,this)}else if(i.isDirectory){const r=i;this.entries[t]=new $c(r,t,this)}}this.initialized=!0}async list(){return this.initialized||await this.init(),{...this.entries}}async get(e){return this.initialized||await this.init(),this.entries[e]??null}async set(e,t){this.initialized||await this.init(),t==null?delete this.entries[e]:(t.parent=this,this.entries[e]=t)}}function yA(n){let e,t,i=`<div class="dropzone-content svelte-r6lkz9"><div class="dropzone-text svelte-r6lkz9">File Dropzone
            <br/></div></div>`,r,s;return{c(){e=_n(),t=qe("div"),t.innerHTML=i,this.h()},l(a){e=gn(a),t=Ye(a,"DIV",{class:!0,"data-svelte-h":!0}),Jh(t)!=="svelte-16pzcnp"&&(t.innerHTML=i),this.h()},h(){Se(t,"class","file-dropzone svelte-r6lkz9"),pn(t,"visible",n[0])},m(a,o){we(a,e,o),we(a,t,o),r||(s=[Wn(document.body,"dragover",n[1]),Wn(document.body,"dragleave",n[2]),Wn(document.body,"drop",n[3])],r=!0)},p(a,[o]){o&1&&pn(t,"visible",a[0])},i:L,o:L,d(a){a&&(ae(e),ae(t)),r=!1,Kh(s)}}}function $h(n){return n==null?!1:n.types.length==1&&n.types[0]=="Files"}function EA(n,e,t){const i=Yh();let r=!1;function s(l){l.dataTransfer!=null&&$h(l.dataTransfer)&&(l.preventDefault(),t(0,r=!0))}function a(l){l.fromElement==null&&t(0,r=!1)}async function o(l){l.preventDefault(),t(0,r=!1);const c=l.dataTransfer;if(c==null||!$h(c))return;const u=c.items[0].webkitGetAsEntry();if(u!=null){if(u.isDirectory){const h=u;i("dropentry",new $c(h,h.name))}else if(u.isFile){const h=await new Promise(d=>u.file(d));i("dropentry",new on.fsFile_Blob(h,h.name,null))}}}return[r,s,a,o]}class SA extends Gt{constructor(e){super(),Vt(this,e,EA,yA,Bt,{})}}function wA(n){let e,t,i,r,s,a;return e=new SA({}),e.$on("dropentry",n[2]),{c(){Qn(e.$$.fragment),t=_n(),i=qe("div"),r=_n(),s=qe("div"),this.h()},l(o){ei(e.$$.fragment,o),t=gn(o),i=Ye(o,"DIV",{class:!0}),mt(i).forEach(ae),r=gn(o),s=Ye(o,"DIV",{class:!0}),mt(s).forEach(ae),this.h()},h(){Se(i,"class","tab-list-container svelte-b92idw"),Se(s,"class","tab-content-container")},m(o,l){ti(e,o,l),we(o,t,l),we(o,i,l),n[3](i),we(o,r,l),we(o,s,l),n[4](s),a=!0},p:L,i(o){a||(je(e.$$.fragment,o),a=!0)},o(o){at(e.$$.fragment,o),a=!1},d(o){o&&(ae(t),ae(i),ae(r),ae(s)),ni(e,o),n[3](null),n[4](null)}}}function MA(n,e,t){let i,r;ps(async()=>{qp.set({listContainer:i,contentContainer:r,items:[]}),new dp({target:vc("Information","/asset-viewer/bootstrap-icons/info-circle.svg"),props:{entry:new on.fsFile_Fetch("/docs/usage.md",null)}})});function s(c){new Yp({target:vc(c.name,"/asset-viewer/bootstrap-icons/folder-fill.svg"),props:{dir:c}})}async function a(c){var h,d;const u=c.detail;if(u.type==nt.Directory)s(u);else if(u.type==nt.File){if(await bc(u),!u.viewer)throw new Error("Dragged viewer has no viewer.");const f=await((d=(h=u.viewer).transform)==null?void 0:d.call(h,u))??u;f.name=u.name,f.parent=u.parent,f.type==nt.Directory?s(f):f.type==nt.File&&Wc(f)}}function o(c){ts[c?"unshift":"push"](()=>{i=c,t(0,i)})}function l(c){ts[c?"unshift":"push"](()=>{r=c,t(1,r)})}return[i,r,a,o,l]}class IA extends Gt{constructor(e){super(),Vt(this,e,MA,wA,Bt,{})}}export{IA as component,NA as universal};
