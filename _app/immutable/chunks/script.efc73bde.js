import{D as b,f as y}from"./2.ec27719f.js";import{D as k}from"./depickle.72866d05.js";import{p as $}from"./pako.esm.29d98458.js";import{C as m}from"./Code.f6462e66.js";function v(r){const i=r.module;if(i.module!==d.RenPy)throw new Error("parseRenPyClass: This function is only for parsing RenPy module classes.");switch(i.name){case"Init":return r.state[1].block.map(a).join(`
`);case"Define":{const e=r.state,n=e[1].store.split(".").pop()??"";return n==""||n=="store"?`define ${e[1].varname} ${e[1].operator} ${a(e[1].code)}
`:`define ${e[1].store.split(".").pop()??""}.${e[1].varname} ${e[1].operator} ${a(e[1].code)}
`}case"PyCode":{const e=r.state;let n;for(let s=0;s<e.length;s++){const t=e[s];if(n===void 0)typeof t=="string"&&(n=t);else{if(typeof t=="string")return t;if(!Array.isArray(t)&&typeof t!="number")return a(t)}}throw new Error("parseRenPyClass: Failed to parse PyCode.")}case"PyExpr":{const e=r.args;return e[3]??e[0]}case"Default":{const e=r.state,n=e[1].store.split(".").pop()??"";return n==""||n=="store"?`default ${e[1].varname} = ${a(e[1].code)}
`:`default ${e[1].store.split(".").pop()??""}.${e[1].varname} = ${a(e[1].code)}
`}case"Python":{const e=r.state,n=a(e[1].code);let s=[];for(let t=0;t!=-1;t=n.indexOf(`
`,t+1))s.push(t);return s.every(t=>t==0||t==n.length-1)?`$ ${n.replace(`
`,"")}
`:`init python:
${o(n)}
`}case"Return":return"";case"Label":{const e=r.state;let n="";for(const s of e[1].block)n+=a(s);return n=o(n),`label ${e[1].name}:
${n}`}case"Screen":{const e=r.state;return a(e[1].screen)}case"ParameterInfo":return r.state.parameters.map(n=>`${n[1]==null?n[0]:`${n[0]}=${typeof n[1]=="string"?n[1]:a(n[1])}`}`).join(", ");case"Image":{const e=r.state;if(e[1].code!=null)return`image ${e[1].imgname.join(", ")} = ${a(e[1].code)}
`;if(e[1].atl!=null)return`image ${e[1].imgname.join(", ")}:
${o(a(e[1].atl))}
`;throw new Error("parseRenPyClass: Invalid image.")}case"Style":{const e=r.state;return`style ${e[1].style_name}:
${o(Object.entries(e[1].properties).map(n=>`${n[0]} ${a(n[1])}`).join(`
`))}
`}case"Transform":{const e=r.state;return`transform ${e[1].varname}${e[1].parameters==null?"":`(${a(e[1].parameters)})`}:
${o(a(e[1].atl))}
`}case"Jump":return`jump ${r.state[1].target}
`;case"UserStatement":return`${r.state[1].line}
`;case"Say":{const e=r.state;return`${e[1].who===null?"":`${e[1].who} `}"${e[1].what}"
`}case"Show":return`show ${r.state[1].imspec[6].join(" ")}
`;case"With":{const e=r.state;if(e[1].expr=="None"){if(e[1].paired==null)throw new Error("parseRenPyClass: With without any args.");return`with ${a(e[1].paired)}`}else return`with ${typeof e[1].expr=="string"?e[1].expr:a(e[1].expr)}
`}case"If":{const e=r.state;let n="";for(let s=0;s<e[1].entries.length;s++){const t=e[1].entries[s];s==0?n+=`if ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(t[1].map(a).join(`
`))}
`:t[0]!=null&&t[0]!="True"?n+=`elif ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(t[1].map(a).join(`
`))}
`:n+=`else:
${o(t[1].map(a).join(`
`))}
`}return n}case"Menu":{const e=r.state;let n=`menu${e[1].arguments==null?"":`(${a(e[1].arguments)})`}:
`;for(const s of e[1].items)if(n+=o(`"${s[0]}"`),s[1]!="True"&&s[1]!=null&&(n+=" if ",typeof s[1]=="string"?n+=s[1]:n+=a(s[1])),s[2]==null)n+=`
`;else{n+=`:
`;for(const t of s[2])n+=`${o(a(t),2)}
`}return n}case"Scene":return`scene ${r.state[1].imspec[6].join(" ")}
`;case"Hide":return`hide ${r.state[1].imspec[6].join(" ")}
`;case"While":{const e=r.state;return`while ${a(e[1].condition)}:
${o(e[1].block.map(a).join(`
`))}
`}case"Pass":return`pass
`;case"Call":return`call ${r.state[1].label} from `;default:throw new Error(`parseRenPyClass: Unknown class "${i.name}"`)}}function R(r){const i=r.module;if(i.module!==d.RenPy_ATL)throw new Error("parseRenPyATLClass: This function is only for parsing RenPy_ATL module classes.");switch(i.name){case"RawBlock":return`${r.state.statements.map(a).join("")}`;case"RawMultipurpose":{const e=r.state;let n="";e.duration!="0"&&(n+=(typeof e.duration=="string"||typeof e.duration=="number"?e.duration:a(e.duration))+`
`);for(const s of e.expressions)n+=`${a(s[0])}
`;for(const s of e.properties)n+=`${s[0]} ${a(s[1])}
`;return n}case"RawRepeat":{const e=r.state;return`repeat${e.repeats==null?"":` ${typeof e.repeats=="number"?e.repeats:a(e.repeats)}`}
`}case"RawOn":{const e=r.state;let n="";for(const[s,t]of Object.entries(e.handlers))n+=`on ${s}:
${o(a(t))}
`;return n}case"RawParallel":{const e=r.state;return`parallel:
${o(e.blocks.map(a).join(`
`))}`}default:throw new Error(`parseRenPyATLClass: Unknown class "${i.name}"`)}}function P(r){const i=r.module;if(i.module!==d.RenPy_SL2)throw new Error("parseRenPySL2Class: This function is only for parsing RenPy_SL2 module classes.");switch(i.name){case"SLScreen":{const e=r.state;return`screen ${e.name}${e.parameters==null?"":`(${a(e.parameters)})`}:
${o((e.tag==null?"":e.tag)+`
`+e.keyword.map(n=>`${n[0]} ${a(n[1])}
`).join(`
`)+e.children.map(a).join(""))}
`}case"SLDisplayable":{let e=function(l,c=`
`,f=""){return l.length==0?"":f+l.map(p=>`${p[0]} ${a(p[1])}`).join(c)},n=function(l){return l.map(a).join(" ")},s=function(l){return l.map(a).join(`
`)};const t=r.state;switch(`${t.displayable.module}:${t.displayable.name}`){case"renpy.sl2.sldisplayables:sl2add":return`add ${n(t.positional)} ${t.keyword.map(l=>`${l[0]} ${a(l[1])}`).join(" ")}
`;case"renpy.display.layout:Grid":return`grid ${n(t.positional)}:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_textbutton":return`textbutton ${n(t.positional)}:
${o(e(t.keyword))}
`;case"renpy.display.layout:Null":return`null${e(t.keyword," "," ")}
`;case"renpy.display.layout:MultiBox":return`${t.style}${e(t.keyword," "," ")}:
${o(s(t.children))}
`;case"renpy.text.text:Text":return`text ${n(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.ui:_imagemap":return`imagemap:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_hotspot":return`${t.name}${n(t.positional)} ${e(t.keyword)}`;case"renpy.ui:_imagebutton":return`imagebutton:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.layout:Window":return`${t.name}${t.positional.length==0?"":` ${n(t.positional)}`}:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.behavior:Input":return`input ${e(t.keyword)}
`;case"renpy.sl2.sldisplayables:sl2viewport":return`viewport:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.sl2.sldisplayables:sl2vpgrid":return`vpgrid:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.ui:_label":return`label ${n(t.positional)}
`;case"renpy.ui:_key":return`key ${n(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.display.behavior:Timer":return`timer ${n(t.positional)}${e(t.keyword," "," ")}
`;case"renpy.sl2.sldisplayables:sl2bar":return`bar:
${o(e(t.keyword))}
${o(s(t.children))}
`;case"renpy.display.behavior:Button":return`button ${n(t.positional)}${e(t.keyword," "," ")}:
${s(t.children)}`;case"renpy.display.behavior:OnEvent":return`on ${n(t.positional)}${e(t.keyword," "," ")}
`;default:throw new Error(`parseRenPySL2Class: Unsupported displayable module: ${t.displayable.module}:${t.displayable.name}`)}}case"SLPython":{const e=r.state,n=a(e.code);let s=[];for(let t=0;t!=-1;t=n.indexOf(`
`,t+1))s.push(t);return s.every(t=>t==0||t==n.length-1)?`$ ${n.replace(`
`,"")}
`:`init python:
${o(n)}
`}case"SLIf":{const e=r.state;let n="";for(let s=0;s<e.entries.length;s++){const t=e.entries[s];s==0?n+=`if ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(a(t[1]))}
`:t[0]!=null?n+=`elif ${typeof t[0]=="string"?t[0]:a(t[0])}:
${o(a(t[1]))}
`:n+=`else:
${o(a(t[1]))}
`}return n}case"SLBlock":{const e=r.state;let n="";for(const s of e.children)n+=a(s);for(const s of e.keyword)n+=`${s[0]} ${a(s[1])}
`;return n.length==0&&(n+=`pass
`),n}case"SLFor":{const e=r.state;return`for ${e.variable} in ${a(e.expression)}:
${o(e.children.map(a).join(""))}`}case"SLUse":return`use ${r.state.target}`;case"SLTransclude":return`transclude
`;case"SLDefault":{const e=r.state;return`default ${e.variable} = ${a(e.expression)}`}default:throw new Error(`parseRenPySL2Class: Unknown class "${i.name}"`)}}const h="RENPY RPC2";var w=(r=>(r[r.Legacy=-1]="Legacy",r[r.End=0]="End",r[r.BeforeStaticTransforms=1]="BeforeStaticTransforms",r[r.AfterStaticTransforms=2]="AfterStaticTransforms",r))(w||{});function S(r){const i=new b(r);if(i.readString(h.length,"ascii")!=h){console.warn("decompileScript: Legacy format may not decompile correctly."),i.pointer=0;const t=i.readBuffer(i.length),l=$.inflate(t);return[{slot:-1,offset:0,length:i.length,data:l}]}let n=[];for(;;){const t=i.readNumber("Uint32"),l=i.readNumber("Uint32"),c=i.readNumber("Uint32");if(t==0)break;n.push({slot:t,offset:l,length:c})}return n.map(t=>{i.pointer=t.offset;const l=i.readBuffer(t.length),c=$.inflate(l);return{...t,data:c}})}function C(r){return S(r)}var d=(r=>(r.RenPy="renpy.ast",r.RenPy_SL2="renpy.sl2.slast",r.RenPy_ATL="renpy.atl",r))(d||{});function o(r,i=1){return r.split(`
`).map(e=>"    ".repeat(i)+e).join(`
`)}const j=100;let u=[];function L(r){const i=r.module;switch(i.module){case"renpy.ast":return v(r);case"renpy.sl2.slast":return P(r);case"renpy.atl":return R(r);default:throw new Error(`parseClass: Unknown module. "${i.module}"`)}}function a(r){{u.push(r),u.length>j&&u.shift();try{return L(r)}catch(i){for(const e of u)console.log(e);throw i}}}function E(r,i={}){const e=r.find(p=>p.slot==w.BeforeStaticTransforms);if(e===void 0)throw new Error("decompileScript: Could not find script chunk.");const s=k.depickle(e.data)[0],t=s[0];if(t.version!==5003e3)throw new Error(`decompileScript: Unknown header version. ${t.version}`);let l="";l+=`# Ren'Py decompiled script.
`,l+=`# Decompiled with renpy-asset-viewer
`,l+=`# Decompiled on ${new Date}
`,l+=`# Script Header:
`;for(const[p,g]of Object.entries(t))l+=`#     ${p}: ${g}
`;l+=`# Decompilation is in very early alpha, so please give feedback on bugs!
`,l+=`


`;let c="";const f=s[1];for(const p of f)c+=a(p),c+=`
`;return(i.cleanOutput??!0)&&(c=T(c)),l+c}function T(r){return r=r.replace(/\s+(?=(\n|$))/g,""),r}const B={namespace:"renpy.script",priority:2,isValid:async r=>r.type!=y.File?!1:r.name.endsWith(".rpyc")||r.name.endsWith(".rpy"),createViewer:async(r,i)=>{if(r.type!=y.File)throw new Error("Tried to create renpy.script viewer with directory.");r.name.endsWith(".rpyc")?new m({target:i,props:{code:E(C(await r.buffer())),langname:"python"}}):r.name.endsWith(".rpy")&&new m({target:i,props:{code:await(await r.blob()).text(),langname:"python"}})}};export{B as default};
