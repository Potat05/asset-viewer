import{D as g,f as b}from"./2.2ee3d51f.js";import{D as k}from"./depickle.d2d28c97.js";import{p as y}from"./pako.esm.29d98458.js";import{C as $}from"./Code.1e625fdb.js";function v(n){const i=n.module;if(i.module!==d.RenPy)throw new Error("parseRenPyClass: This function is only for parsing RenPy module classes.");switch(i.name){case"Init":return n.state[1].block.map(a).join(`
`);case"Define":{const e=n.state,r=e[1].store.split(".").pop()??"";return r==""||r=="store"?`define ${e[1].varname} ${e[1].operator} ${a(e[1].code)}
`:`define ${e[1].store.split(".").pop()??""}.${e[1].varname} ${e[1].operator} ${a(e[1].code)}
`}case"PyCode":{const e=n.state;let r;for(let s=0;s<e.length;s++){const t=e[s];if(r===void 0)typeof t=="string"&&(r=t);else{if(typeof t=="string")return t;if(!Array.isArray(t)&&typeof t!="number")return a(t)}}throw new Error("parseRenPyClass: Failed to parse PyCode.")}case"PyExpr":{const e=n.args;return e[3]??e[0]}case"Default":{const e=n.state,r=e[1].store.split(".").pop()??"";return r==""||r=="store"?`default ${e[1].varname} = ${a(e[1].code)}
`:`default ${e[1].store.split(".").pop()??""}.${e[1].varname} = ${a(e[1].code)}
`}case"Python":{const e=n.state,r=a(e[1].code);let s=[];for(let t=0;t!=-1;t=r.indexOf(`
`,t+1))s.push(t);return s.every(t=>t==0||t==r.length-1)?`$ ${r.replace(`
`,"")}
`:`init python:
${o(r)}
`}case"Return":return"";case"Label":{const e=n.state;let r="";for(const s of e[1].block)r+=a(s);return r=o(r),`label ${e[1].name}:
${r}`}case"Screen":{const e=n.state;return a(e[1].screen)}case"ParameterInfo":return n.state.parameters.map(r=>`${r[1]==null?r[0]:`${r[0]}=${typeof r[1]=="string"?r[1]:a(r[1])}`}`).join(", ");case"Image":{const e=n.state;if(e[1].code!=null)return`image ${e[1].imgname.join(", ")} = ${a(e[1].code)}
`;if(e[1].atl!=null)return`image ${e[1].imgname.join(", ")}:
${o(a(e[1].atl))}
`;throw new Error("parseRenPyClass: Invalid image.")}case"Style":{const e=n.state;return`style ${e[1].style_name}:
${o(Object.entries(e[1].properties).map(r=>`${r[0]} ${a(r[1])}`).join(`
`))}
`}case"Transform":{const e=n.state;return`transform ${e[1].varname}${e[1].parameters==null?"":`(${a(e[1].parameters)})`}:
${o(a(e[1].atl))}
`}case"Jump":return`jump ${n.state[1].target}
`;case"UserStatement":return`${n.state[1].line}
`;case"Say":{const e=n.state;return`${e[1].who===null?"":`${e[1].who} `}"${e[1].what}"
`}case"Show":return`show ${n.state[1].imspec[6].join(" ")}
`;case"With":{const e=n.state;if(e[1].expr=="None"){if(e[1].paired==null)throw new Error("parseRenPyClass: With without any args.");return`with ${a(e[1].paired)}`}else return`with ${typeof e[1].expr=="string"?e[1].expr:a(e[1].expr)}
`}case"If":{const e=n.state;let r="";for(let s=0;s<e[1].entries.length;s++){const t=e[1].entries[s];s==0?r+=`if ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(t[1].map(a).join(`
`))}
`:t[0]!=null&&t[0]!="True"?r+=`elif ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(t[1].map(a).join(`
`))}
`:r+=`else:
${o(t[1].map(a).join(`
`))}
`}return r}case"Menu":{const e=n.state;let r=`menu${e[1].arguments==null?"":`(${a(e[1].arguments)})`}:
`;for(const s of e[1].items)if(r+=o(`"${s[0]}"`),s[1]!="True"&&s[1]!=null&&(r+=" if ",typeof s[1]=="string"?r+=s[1]:r+=a(s[1])),s[2]==null)r+=`
`;else{r+=`:
`;for(const t of s[2])r+=`${o(a(t),2)}
`}return r}case"Scene":return`scene ${n.state[1].imspec[6].join(" ")}
`;case"Hide":return`hide ${n.state[1].imspec[6].join(" ")}
`;case"While":{const e=n.state;return`while ${a(e[1].condition)}:
${o(e[1].block.map(a).join(`
`))}
`}case"Pass":return`pass
`;case"Call":return`call ${n.state[1].label} from `;default:throw new Error(`parseRenPyClass: Unknown class "${i.name}"`)}}function R(n){const i=n.module;if(i.module!==d.RenPy_ATL)throw new Error("parseRenPyATLClass: This function is only for parsing RenPy_ATL module classes.");switch(i.name){case"RawBlock":return`${n.state.statements.map(a).join("")}`;case"RawMultipurpose":{const e=n.state;let r="";e.duration!="0"&&(r+=(typeof e.duration=="string"||typeof e.duration=="number"?e.duration:a(e.duration))+`
`);for(const s of e.expressions)r+=`${a(s[0])}
`;for(const s of e.properties)r+=`${s[0]} ${a(s[1])}
`;return r}case"RawRepeat":{const e=n.state;return`repeat${e.repeats==null?"":` ${typeof e.repeats=="number"?e.repeats:a(e.repeats)}`}
`}case"RawOn":{const e=n.state;let r="";for(const[s,t]of Object.entries(e.handlers))r+=`on ${s}:
${o(a(t))}
`;return r}case"RawParallel":{const e=n.state;return`parallel:
${o(e.blocks.map(a).join(`
`))}`}default:throw new Error(`parseRenPyATLClass: Unknown class "${i.name}"`)}}function P(n){const i=n.module;if(i.module!==d.RenPy_SL2)throw new Error("parseRenPySL2Class: This function is only for parsing RenPy_SL2 module classes.");switch(i.name){case"SLScreen":{const e=n.state;return`screen ${e.name}${e.parameters==null?"":`(${a(e.parameters)})`}:
${o((e.tag==null?"":e.tag)+`
`+e.keyword.map(r=>`${r[0]} ${a(r[1])}
`).join(`
`)+e.children.map(a).join(""))}
`}case"SLDisplayable":{let e=function(l,c=`
`,f=""){return l.length==0?"":f+l.map(p=>`${p[0]} ${a(p[1])}`).join(c)},r=function(l){return l.map(a).join(" ")},s=function(l){return l.map(a).join(`
`)};const t=n.state;switch(`${t.displayable.module}:${t.displayable.name}`){case"renpy.sl2.sldisplayables:sl2add":return`add ${r(t.positional)} ${t.keyword.map(l=>`${l[0]} ${a(l[1])}`).join(" ")}
`;case"renpy.display.layout:Grid":return`grid ${r(t.positional)}:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_textbutton":return`textbutton ${r(t.positional)}:
${o(e(t.keyword))}
`;case"renpy.display.layout:Null":return`null${e(t.keyword," "," ")}
`;case"renpy.display.layout:MultiBox":return`${t.style}${e(t.keyword," "," ")}:
${o(s(t.children))}
`;case"renpy.text.text:Text":return`text ${r(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.ui:_imagemap":return`imagemap:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_hotspot":return`${t.name}${r(t.positional)} ${e(t.keyword)}`;case"renpy.ui:_imagebutton":return`imagebutton:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.layout:Window":return`${t.name}${t.positional.length==0?"":` ${r(t.positional)}`}:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.behavior:Input":return`input ${e(t.keyword)}
`;case"renpy.sl2.sldisplayables:sl2viewport":return`viewport:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.sl2.sldisplayables:sl2vpgrid":return`vpgrid:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_label":return`label ${r(t.positional)}
`;case"renpy.ui:_key":return`key ${r(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.display.behavior:Timer":return`timer ${r(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.sl2.sldisplayables:sl2bar":return`bar:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.behavior:Button":return`button ${r(t.positional)}${e(t.keyword," "," ")}:
${s(t.children)}`;case"renpy.display.behavior:OnEvent":return`on ${r(t.positional)}${e(t.keyword," "," ")}
`;default:throw new Error(`parseRenPySL2Class: Unsupported displayable module: ${t.displayable.module}:${t.displayable.name}`)}}case"SLPython":{const e=n.state,r=a(e.code);let s=[];for(let t=0;t!=-1;t=r.indexOf(`
`,t+1))s.push(t);return s.every(t=>t==0||t==r.length-1)?`$ ${r.replace(`
`,"")}
`:`init python:
${o(r)}
`}case"SLIf":{const e=n.state;let r="";for(let s=0;s<e.entries.length;s++){const t=e.entries[s];s==0?r+=`if ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(a(t[1]))}
`:t[0]!=null?r+=`elif ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(a(t[1]))}
`:r+=`else:
${o(a(t[1]))}
`}return r}case"SLBlock":{const e=n.state;let r="";for(const s of e.children)r+=a(s);for(const s of e.keyword)r+=`${s[0]} ${a(s[1])}
`;return r.length==0&&(r+=`pass
`),r}case"SLFor":{const e=n.state;return`for ${e.variable} in ${a(e.expression)}:
${o(e.children.map(a).join(""))}`}case"SLUse":return`use ${n.state.target}`;case"SLTransclude":return`transclude
`;case"SLDefault":{const e=n.state;return`default ${e.variable} = ${a(e.expression)}`}default:throw new Error(`parseRenPySL2Class: Unknown class "${i.name}"`)}}const m="RENPY RPC2";var h=(n=>(n[n.Legacy=-1]="Legacy",n[n.End=0]="End",n[n.BeforeStaticTransforms=1]="BeforeStaticTransforms",n[n.AfterStaticTransforms=2]="AfterStaticTransforms",n))(h||{});function S(n){const i=new g(n);if(i.readString(m.length,"ascii")!=m){console.warn("decompileScript: Legacy format may not decompile correctly."),i.pointer=0;const t=i.readBuffer(i.length),l=y.inflate(t);return[{slot:-1,offset:0,length:i.length,data:l}]}let r=[];for(;;){const t=i.readNumber("Uint32"),l=i.readNumber("Uint32"),c=i.readNumber("Uint32");if(t==0)break;r.push({slot:t,offset:l,length:c})}return r.map(t=>{i.pointer=t.offset;const l=i.readBuffer(t.length),c=y.inflate(l);return{...t,data:c}})}function C(n){return S(n)}var d=(n=>(n.RenPy="renpy.ast",n.RenPy_SL2="renpy.sl2.slast",n.RenPy_ATL="renpy.atl",n))(d||{});function o(n,i=1){return n.split(`
`).map(e=>"    ".repeat(i)+e).join(`
`)}const j=100;let u=[];function L(n){const i=n.module;switch(i.module){case"renpy.ast":return v(n);case"renpy.sl2.slast":return P(n);case"renpy.atl":return R(n);default:throw new Error(`parseClass: Unknown module. "${i.module}"`)}}function a(n){{u.push(n),u.length>j&&u.shift();try{return L(n)}catch(i){for(const e of u)console.log(e);throw i}}}function E(n,i={}){const e=n.find(p=>p.slot==h.BeforeStaticTransforms);if(e===void 0)throw new Error("decompileScript: Could not find script chunk.");const s=k.depickle(e.data)[0],t=s[0];if(t.version!==5003e3)throw new Error(`decompileScript: Unknown header version. ${t.version}`);let l="";l+=`# Ren'Py decompiled script.
`,l+=`# Decompiled with renpy-asset-viewer
`,l+=`# Decompiled on ${new Date}
`,l+=`# Script Header:
`;for(const[p,w]of Object.entries(t))l+=`#     ${p}: ${w}
`;l+=`# Decompilation is in very early alpha, so please give feedback on bugs!
`,l+=`


`;let c="";const f=s[1];for(const p of f)c+=a(p),c+=`
`;return(i.cleanOutput??!0)&&(c=T(c)),l+c}function T(n){return n=n.replace(/\s+(?=(\n|$))/g,""),n}const B={namespace:"renpy.script",priority:2,createViewer:async(n,i)=>{if(n.type!=b.File)throw new Error("Tried to create renpy.script viewer with directory.");n.name.endsWith(".rpyc")?new $({target:i,props:{code:E(C(await n.buffer())),langname:"python"}}):n.name.endsWith(".rpy")&&new $({target:i,props:{code:await(await n.blob()).text(),langname:"python"}})}};export{B as default};
