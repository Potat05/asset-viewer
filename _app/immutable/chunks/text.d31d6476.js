import{f as t}from"./2.ec27719f.js";import{C as i}from"./Code.1b98bb89.js";const a={namespace:"text",priority:0,isValid:async e=>{var r;return e.type==t.File&&["txt","gitignore","npmrc","license","cfg","properties","url","conf","config"].includes(((r=e.name.split(".").pop())==null?void 0:r.toLowerCase())??"")},createViewer:async(e,r)=>{if(e.type==t.File)new i({target:r,props:{entry:e,langname:"plaintext"}});else throw new Error("Tried to create text viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-text.svg"};export{a as default};
