var P=Object.defineProperty;var _=(t,i,e)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var o=(t,i,e)=>(_(t,typeof i!="symbol"?i+"":i,e),e);import{U,a as z,f as D,N as k,D as A}from"./2.ec27719f.js";import{B as v}from"./BlobReader.c87703e6.js";import{i as E}from"./pako.esm.29d98458.js";class R{constructor(i){o(this,"data");o(this,"pos");this.data=new Uint8Array(U.getBuffer(i)),this.pos=0}readByte(){return this.data[this.pos++]}}class Z{constructor(i,e){o(this,"windowBuffer");o(this,"pos",0);o(this,"streamPos",0);o(this,"outputPos",0);this.windowSize=i,this.outputBuffer=e,this.windowBuffer=new Uint8Array(this.windowSize)}flush(){let i=this.pos-this.streamPos;i!==0&&(this.outputBuffer.set(this.windowBuffer.subarray(0,i),this.outputPos),this.outputPos+=i,this.pos>=this.windowSize&&(this.pos=0),this.streamPos=this.pos)}copyBlock(i,e){let r=this.pos-i-1;for(r<0&&(r+=this.windowSize);e--;)r>=this.windowSize&&(r=0),this.windowBuffer[this.pos++]=this.windowBuffer[r++],this.pos>=this.windowSize&&this.flush()}putByte(i){this.windowBuffer[this.pos++]=i,this.pos>=this.windowSize&&this.flush()}getByte(i){let e=this.pos-i-1;return e<0&&(e+=this.windowSize),this.windowBuffer[e]}}class T{constructor(i){o(this,"code",0);o(this,"range",-1);this.stream=i;for(let e=0;e<5;e++)this.code=this.code<<8|this.stream.readByte()}decodeDirectBits(i){var e=0,r;for(let s=0;s<i;s++)this.range>>>=1,r=this.code-this.range>>>31,this.code-=this.range&r-1,e=e<<1|1-r,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8);return e}decodeBit(i,e){var r=i[e],s=(this.range>>>11)*r;return(this.code^2147483648)<(s^2147483648)?(this.range=s,i[e]+=2048-r>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),0):(this.range-=s,this.code-=s,i[e]-=r>>>5,this.range&4278190080||(this.code=this.code<<8|this.stream.readByte(),this.range<<=8),1)}}function b(t){return U.initArray(t,()=>1024)}class N{constructor(i){o(this,"models");this.numBitLevels=i,this.models=b(1<<this.numBitLevels)}decode(i){for(var e=1,r=this.numBitLevels;r--;)e=e<<1|i.decodeBit(this.models,e);return e-(1<<this.numBitLevels)}reverseDecode(i){for(var e=1,r=0,s=0,a;s<this.numBitLevels;++s)a=i.decodeBit(this.models,e),e=e<<1|a,r|=a<<s;return r}}function x(t,i,e,r){for(var s=1,a=0,d=0,n;d<r;++d)n=e.decodeBit(t,i+s),s=s<<1|n,a|=n<<d;return a}class S{constructor(i){o(this,"choice",b(2));o(this,"lowCoder");o(this,"midCoder");o(this,"highCoder",new N(8));this.numPosStates=i,this.lowCoder=U.initArray(this.numPosStates,()=>new N(3)),this.midCoder=U.initArray(this.numPosStates,()=>new N(3))}decode(i,e){return i.decodeBit(this.choice,0)===0?this.lowCoder[e].decode(i):i.decodeBit(this.choice,1)===0?8+this.midCoder[e].decode(i):16+this.highCoder.decode(i)}}class F{constructor(){o(this,"decoders",b(768))}decodeNormal(i){let e=1;do e=e<<1|i.decodeBit(this.decoders,e);while(e<256);return e&255}decodeWithMatchByte(i,e){let r=1,s,a;do if(s=e>>7&1,e<<=1,a=i.decodeBit(this.decoders,(1+s<<8)+r),r=r<<1|a,s!==a){for(;r<256;)r=r<<1|i.decodeBit(this.decoders,r);break}while(r<256);return r&255}}class I{constructor(i,e){o(this,"posMask",0);o(this,"coders");this.numPosBits=i,this.numPrevBits=e,this.posMask=(1<<this.numPosBits)-1;const r=1<<this.numPrevBits+this.numPosBits;this.coders=U.initArray(r,()=>new F)}getDecoder(i,e){return this.coders[((i&this.posMask)<<this.numPrevBits)+((e&255)>>>8-this.numPrevBits)]}}class G{constructor(i){o(this,"isMatchDecoders",b(192));o(this,"isRep0LongDecoders",b(192));o(this,"isRepDecoders",b(12));o(this,"isRepG0Decoders",b(12));o(this,"isRepG1Decoders",b(12));o(this,"isRepG2Decoders",b(12));o(this,"posDecoders",b(114));o(this,"posSlotDecoder",U.initArray(4,()=>new N(6)));o(this,"posAlignDecoder",new N(4));o(this,"lenDecoder");o(this,"repLenDecoder");o(this,"literalDecoder");o(this,"dictionarySize",-1);o(this,"dictionarySizeCheck",-1);o(this,"posStateMask",0);if(this.dictionarySize=i.dictionarySize,this.dictionarySize==0)throw new Error("LZMA decoder initialized with invalid dictionary size.");this.dictionarySizeCheck=Math.max(this.dictionarySize,1);const e=i.lc,r=i.lp,s=i.pb,a=1<<s;if(!(e<=8&&r<=4&&s<=4))throw new Error("LZMA decoder initialized with invalid properties.");this.literalDecoder=new I(r,e),this.lenDecoder=new S(a),this.repLenDecoder=new S(a),this.posStateMask=a-1}decodeBody(i,e,r){let s=0,a=0,d=0,n=0,c=0,u=0,f=0,w,p,h,B,m,g;const l=new T(i);if(e.byteLength<r)throw new Error("LZMA decoder read body with invalid size.");const y=new Z(Math.max(this.dictionarySizeCheck,4096),e);for(;r<0||u<r;)if(w=u&this.posStateMask,l.decodeBit(this.isMatchDecoders,(s<<4)+w)===0)p=this.literalDecoder.getDecoder(u++,f),s>=7?f=p.decodeWithMatchByte(l,y.getByte(a)):f=p.decodeNormal(l),y.putByte(f),s=s<4?0:s-(s<10?3:6);else{if(l.decodeBit(this.isRepDecoders,s)===1)h=0,l.decodeBit(this.isRepG0Decoders,s)===0?l.decodeBit(this.isRep0LongDecoders,(s<<4)+w)===0&&(s=s<7?9:11,h=1):(l.decodeBit(this.isRepG1Decoders,s)===0?B=d:(l.decodeBit(this.isRepG2Decoders,s)===0?B=n:(B=c,c=n),n=d),d=a,a=B),h===0&&(h=2+this.repLenDecoder.decode(l,w),s=s<7?8:11);else if(c=n,n=d,d=a,h=2+this.lenDecoder.decode(l,w),s=s<7?7:10,m=this.posSlotDecoder[h<=5?h-2:3].decode(l),m>=4){if(g=(m>>1)-1,a=(2|m&1)<<g,m<14)a+=x(this.posDecoders,a-m-1,l,g);else if(a+=l.decodeDirectBits(g-4)<<4,a+=this.posAlignDecoder.reverseDecode(l),a<0){if(a===-1)break;return!1}}else a=m;if(a>=u||a>=this.dictionarySizeCheck)return!1;y.copyBlock(a,h),u+=h,f=y.getByte(0)}return y.flush(),!0}}function W(t){const i=new DataView(U.getBuffer(t));let e=i.getUint8(0);const r=e%9;e=~~(e/9);const s=e%5,a=~~(e/5),d=i.getUint32(1,!0);return{lc:r,lp:s,pb:a,dictionarySize:d}}function K(t,i,e){const r=new R(t),s=new Uint8Array(e);if(!new G(i).decodeBody(r,s,e))throw new Error("LZMA failed decompressing.");return s.buffer}var M=(t=>(t[t.none=0]="none",t[t.shrunk=1]="shrunk",t[t.reduced_1=2]="reduced_1",t[t.reduced_2=3]="reduced_2",t[t.reduced_3=4]="reduced_3",t[t.reduced_4=5]="reduced_4",t[t.imploded=6]="imploded",t[t.deflated=8]="deflated",t[t.enhanced_deflated=9]="enhanced_deflated",t[t.pkware_dcl_imploded=10]="pkware_dcl_imploded",t[t.bzip2=12]="bzip2",t[t.lzma=14]="lzma",t[t.ibm_terse=18]="ibm_terse",t[t.ibm_lz77_z=19]="ibm_lz77_z",t[t.zstandard=93]="zstandard",t[t.mp3=94]="mp3",t[t.xz=95]="xz",t[t.jpeg=96]="jpeg",t[t.wavpack=97]="wavpack",t[t.ppmd=98]="ppmd",t[t.aex_encryption_marker=99]="aex_encryption_marker",t))(M||{});class L{constructor(i,e,r,s=null){o(this,"viewer",null);o(this,"type",D.File);o(this,"name");o(this,"parent");o(this,"zip");o(this,"options");o(this,"loadedBlob",null);this.zip=i,this.options=e,this.name=r,this.parent=s}async blob(){if(this.loadedBlob!=null)return this.loadedBlob;let i,e,r,s;if(this.options.type=="fileheader")i=this.options.compressionMethod,e=this.options.offset,r=this.options.compressedSize,s=this.options.uncompressedSize;else if(this.options.type=="centralfileheader"){const d=new v(this.zip);await d.load(30,this.options.offsetToLocalHeader),d.assertMagic("PK"),d.assertMagic(1027,"Uint16"),d.readNumber("Uint16"),d.readNumber("Uint16"),i=d.readNumber("Uint16"),d.readNumber("Uint32"),d.readNumber("Uint32"),r=d.readNumber("Uint32"),s=d.readNumber("Uint32");const n=d.readNumber("Uint16"),c=d.readNumber("Uint16");await d.load(n+c),d.readString(n,"utf-8"),d.readBuffer(c),e=d.blobPointer}else throw new Error("Zip file invalid options.");i!=0&&console.debug(`Decompressing file ${this.name} with ${M[i]??k.hex(i,2)} compression method`);const a=this.zip.slice(e,e+r);switch(i){case 0:{this.loadedBlob=a;break}case 8:{const d=await a.arrayBuffer(),n=E(d);this.loadedBlob=new Blob([n]);break}case 14:{const d=await a.arrayBuffer(),n=new A(d);n.readNumber("Uint8"),n.readNumber("Uint8");const c=n.readNumber("Uint16"),u=n.readBuffer(c),f=K(n.readBuffer(n.dataLeft),W(u),s);this.loadedBlob=new Blob([f]);break}default:throw new Error("Unknown zip file compression method.")}if(this.loadedBlob==null)throw new Error("Could not decompress zip file.");return this.loadedBlob}async buffer(){return await(await this.blob()).arrayBuffer()}}async function O(t){const r=[{start:Math.max(0,t.size-128),end:t.size},{start:Math.max(0,t.size-65558),end:t.size}],s=19280|1541<<16;for(const a of r){const d=t.slice(a.start,a.end),n=new DataView(await d.arrayBuffer());for(let c=n.byteLength-4;c>0;c--)if(n.getUint32(c,!0)==s)return t.size-(a.end-a.start)+c}return-1}async function $(t){const i=await t.blob(),e=new v(i),r=new z.fsDirectory_Container(t.name,t.parent),s=await O(await t.blob());if(s==-1)for(console.warn("Reading ZIP file without central directory.");!e.blobEof;){await e.load(4),e.assertMagic("PK");const a=e.readNumber("Uint16");switch(a){case 513:{await e.load(42),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint32"),e.readNumber("Uint32"),e.readNumber("Uint32"),e.readNumber("Uint32");const d=e.readNumber("Uint16"),n=e.readNumber("Uint16"),c=e.readNumber("Uint16");e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint32"),e.readNumber("Uint32"),await e.load(d+n+c),e.readString(d,"utf-8"),e.readBuffer(n),e.readString(c,"utf-8");break}case 1027:{await e.load(26),e.readNumber("Uint16"),e.readNumber("Uint16");const d=e.readNumber("Uint16");e.readNumber("Uint32"),e.readNumber("Uint32");const n=e.readNumber("Uint32"),c=e.readNumber("Uint32"),u=e.readNumber("Uint16"),f=e.readNumber("Uint16");await e.load(u+f);const w=e.readString(u,"utf-8");e.readBuffer(f),e.blobPointer;const p=w.split("/").pop();if(p==null)throw new Error("Failed to read filename in zip file.");if(n>0){const h=new L(i,{type:"fileheader",compressionMethod:d,offset:e.blobPointer,compressedSize:n,uncompressedSize:c},p);await z.setDeep(r,w,h)}e.blobPointer+=n;break}case 2055:{e.blobPointer+=12;break}case 1541:return r;default:throw new Error(`Invalid ZIP section type. ${a} at ${e.blobPointer-2}`)}}else{await e.load(22,s),e.assertMagic("PK"),e.assertMagic(1541,"Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16");const a=e.readNumber("Uint32"),d=e.readNumber("Uint32"),n=e.readNumber("Uint16");for(await e.load(n),e.readString(e.dataLeft),await e.load(a,d);!e.eof;){e.assertMagic("PK"),e.assertMagic(513,"Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint32"),e.readNumber("Uint32");const c=e.readNumber("Uint32");e.readNumber("Uint32");const u=e.readNumber("Uint16"),f=e.readNumber("Uint16"),w=e.readNumber("Uint16");e.readNumber("Uint16"),e.readNumber("Uint16"),e.readNumber("Uint32");const p=e.readNumber("Uint32"),h=e.readString(u,"utf-8");e.readBuffer(f),e.readString(w,"utf-8");const B=h.split("/").pop();if(B==null)throw new Error("Failed to read filename in zip file.");if(c>0){const m=new L(i,{type:"centralfileheader",offsetToLocalHeader:p},B);await z.setDeep(r,h,m)}}}return r}const q={namespace:"zip",priority:1,isValid:async t=>t.type==D.File&&t.name.endsWith(".zip"),transform:async t=>{if(t.type!=D.File)throw new Error("Tried to create zip archive viewer with invalid entry type.");return await $(t)}};export{q as default};
