import{D as c}from"./2.ec27719f.js";import"./pako.esm.29d98458.js";var i=(r=>(r[r.End=0]="End",r[r.Byte=1]="Byte",r[r.Short=2]="Short",r[r.Int=3]="Int",r[r.Long=4]="Long",r[r.Float=5]="Float",r[r.Double=6]="Double",r[r.Byte_Array=7]="Byte_Array",r[r.String=8]="String",r[r.List=9]="List",r[r.Compound=10]="Compound",r[r.Int_Array=11]="Int_Array",r[r.Long_Array=12]="Long_Array",r))(i||{});function g(r){const e=new c(r);e.endianness=c.BIG_ENDIAN;const t=a=>{switch(a){default:case 0:throw new Error("Malformed NBT data.");case 1:return{tag:a,value:e.readNumber("Int8")};case 2:return{tag:a,value:e.readNumber("Int16")};case 3:return{tag:a,value:e.readNumber("Int32")};case 4:return{tag:a,value:e.readBigNumber("BigInt64")};case 5:return{tag:a,value:e.readNumber("Float32")};case 6:return{tag:a,value:e.readNumber("Float64")};case 7:return{tag:a,value:new Int8Array(e.readBuffer(e.readNumber("Int32")))};case 8:return{tag:a,value:e.readString(e.readNumber("Uint16"),"utf-8")};case 9:{const n=e.readNumber("Int8"),u=e.readNumber("Int32"),s=new Array(u);for(let o=0;o<u;o++)s[o]=t(n);return{tag:a,listTag:n,value:s}}case 10:{let n={};for(;;){const u=e.readNumber("Uint8");if(u==0)break;const s=e.readString(e.readNumber("Uint16"),"utf-8");n[s]=t(u)}return{tag:a,value:n}}case 11:return{tag:a,value:new Int32Array(e.readArray(e.readNumber,e.readNumber("Int32"),"Int32"))};case 12:return{tag:a,value:new BigInt64Array(e.readArray(e.readBigNumber,e.readNumber("Int32"),"BigInt64"))}}};if(e.readNumber("Uint8")!=10)throw new Error("NBT data doesn't start with compound tag.");if(e.readNumber("Uint16")!=0)throw new Error("First NBT tag must have no name.");return t(10)}function d(r){switch(r.tag){default:case 0:throw new Error("failed to simplify nbt object.");case 1:case 2:case 3:case 4:case 5:case 6:return r.value;case 8:return r.value;case 9:return r.value.map(d);case 10:return Object.fromEntries(Object.entries(r.value).map(([e,t])=>[e,d(t)]));case 7:case 11:case 12:return r.value}}export{i as T,g as c,d as s};
