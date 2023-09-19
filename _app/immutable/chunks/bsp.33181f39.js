var _=Object.defineProperty;var W=(i,n,t)=>n in i?_(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var I=(i,n,t)=>(W(i,typeof n!="symbol"?n+"":n,t),t);import{f as G}from"./2.2ee3d51f.js";import{V as v,B as M,b as q,T as J,F as L,M as K,c as Q}from"./ThreeUtils.afd1abaa.js";import{B as Y}from"./BlobReader.86937414.js";import{r as $,d as ee,a as te}from"./zip.871f7a84.js";function R(i,n){const t=new DataView(i),e=t.getUint32(4,!0);if(e!=n)throw new Error("BSP decompressing lzma size does not match.");if(t.getUint32(8,!0)+17>i.byteLength)throw new Error("BSP decompressing lzma size does not match.");const h=ee(i.slice(12)),u=te(i.slice(17),h,e);if(e!=u.byteLength)throw new Error("BSP decompressing lzma size does not match.");return u}class H extends Y{constructor(t){super(t);I(this,"version",-1);I(this,"lumpDirEntries",[]);I(this,"revision",-1)}readLumpDirEntry(){return{offset:this.readNumber("Int32"),length:this.readNumber("Int32"),version:this.readNumber("Int32"),uncompressedLength:this.readNumber("Int32")}}async readHeader(){await this.load(8+32*64+4),this.assertMagic("VBSP"),this.version=this.readNumber("Uint32"),this.lumpDirEntries=this.readArray(this.readLumpDirEntry,64),this.revision=this.readNumber("Uint32")}lumpExists(t){if(t<0||t>=64)return!1;const e=this.lumpDirEntries[t];return e.length!=0||e.offset!=0}async getRawLumpBuffer(t){if(!this.lumpExists(t))return null;const e=this.lumpDirEntries[t],o=await this.blob.slice(e.offset,e.offset+e.length).arrayBuffer();return e.uncompressedLength===0?o:R(o,e.uncompressedLength)}async getRawLumpBlob(t){const e=this.lumpDirEntries[t];if(!e||e.length==0||e.offset==0)return null;const o=this.blob.slice(e.offset,e.offset+e.length);return e.uncompressedLength==0?o:new Blob([R(await o.arrayBuffer(),e.uncompressedLength)])}async loadLump(t){const e=await this.getRawLumpBuffer(t);this.loadData(e??new ArrayBuffer(0))}async getPakFile(t,e){const o=await this.getRawLumpBlob(40);return o==null?null:await $(o,t,e)}readVector(){return new v(this.readNumber("Float32"),this.readNumber("Float32"),this.readNumber("Float32"))}async getVertices(){return await this.loadLump(3),this.readArrayUntilEnd(this.readVector)}async getEdges(){return await this.loadLump(12),this.readArrayUntilEnd(()=>[this.readNumber("Uint16"),this.readNumber("Uint16")])}async getSurfEdges(){return await this.loadLump(13),this.readArrayUntilEnd(this.readNumber,"Int32")}async getFaces(){return await this.loadLump(7),this.readArrayUntilEnd(()=>({planeNum:this.readNumber("Uint16"),side:this.readNumber("Uint8"),onNode:this.readNumber("Uint8")==1,firstEdge:this.readNumber("Uint32"),numEdges:this.readNumber("Uint16"),texInfo:this.readNumber("Uint16"),dispInfo:this.readNumber("Int16"),surfaceFogVolumeID:this.readNumber("Uint16"),styles:[this.readNumber("Uint8"),this.readNumber("Uint8"),this.readNumber("Uint8"),this.readNumber("Uint8")],lightOffsets:this.readNumber("Uint32"),area:this.readNumber("Float32"),lightmapTextureMins:[this.readNumber("Int32"),this.readNumber("Int32")],lightmapTextureSize:[this.readNumber("Int32"),this.readNumber("Int32")],originalFace:this.readNumber("Uint32"),numPrimitives:this.readNumber("Uint16"),firstPrimitiveID:this.readNumber("Uint16"),smoothingGroups:this.readNumber("Uint32")}))}readDispSubEdgeNeighbor(){return{neighbor:this.readNumber("Uint16"),neighborOrientation:this.readNumber("Uint8"),span:this.readNumber("Uint8"),neighborSpan:this.readNumber("Uint8")}}readDispEdgeNeighbor(){return[this.readDispSubEdgeNeighbor(),this.readDispSubEdgeNeighbor()]}readDispCornerNeighbor(){return{neighbors:[this.readNumber("Int16"),this.readNumber("Int16"),this.readNumber("Int16"),this.readNumber("Int16")],numNeighbors:this.readNumber("Uint8")}}async getDispInfos(){return await this.loadLump(26),this.readArrayUntilEnd(()=>({startPosition:this.readVector(),dispVertStart:this.readNumber("Uint32"),dispTriStart:this.readNumber("Uint32"),power:this.readNumber("Uint32"),minTesselation:this.readNumber("Uint32"),smoothingAngle:this.readNumber("Float32"),contents:this.readNumber("Uint32"),mapFace:this.readNumber("Uint16"),lightmapAlphaStart:this.readNumber("Uint32"),lightmapSamplePositionStart:this.readNumber("Uint32"),edgeNeighbors:[this.readDispEdgeNeighbor(),this.readDispEdgeNeighbor(),this.readDispEdgeNeighbor(),this.readDispEdgeNeighbor()],cornerNeighbors:[this.readDispCornerNeighbor(),this.readDispCornerNeighbor(),this.readDispCornerNeighbor(),this.readDispCornerNeighbor()],allowedVerts:this.readBuffer(54)}))}async getDispVerts(){return await this.loadLump(33),this.readArrayUntilEnd(()=>({vec:this.readVector(),dist:this.readNumber("Float32"),alpha:this.readNumber("Float32")}))}readTextureVecs(){return[[this.readNumber("Float32"),this.readNumber("Float32"),this.readNumber("Float32"),this.readNumber("Float32")],[this.readNumber("Float32"),this.readNumber("Float32"),this.readNumber("Float32"),this.readNumber("Float32")]]}async getTexInfos(){return await this.loadLump(6),this.readArrayUntilEnd(()=>({textureVecs:this.readTextureVecs(),lightmapVecs:this.readTextureVecs(),flags:this.readNumber("Uint32"),texData:this.readNumber("Int32")}))}async getTexDatas(){return await this.loadLump(2),this.readArrayUntilEnd(()=>({reflectivity:this.readVector(),nameStringTableID:this.readNumber("Uint32"),width:this.readNumber("Uint32"),height:this.readNumber("Uint32"),view_width:this.readNumber("Uint32"),view_height:this.readNumber("Uint32")}))}}function re(i,n=!1){const t=i[0].index!==null,e=new Set(Object.keys(i[0].attributes)),o=new Set(Object.keys(i[0].morphAttributes)),h={},u={},y=i[0].morphTargetsRelative,m=new M;let f=0;for(let r=0;r<i.length;++r){const a=i[r];let c=0;if(t!==(a.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const s in a.attributes){if(!e.has(s))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+'. All geometries must have compatible attributes; make sure "'+s+'" attribute exists among all geometries, or in none of them.'),null;h[s]===void 0&&(h[s]=[]),h[s].push(a.attributes[s]),c++}if(c!==e.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". Make sure all geometries have the same number of attributes."),null;if(y!==a.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const s in a.morphAttributes){if(!o.has(s))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+".  .morphAttributes must be consistent throughout all geometries."),null;u[s]===void 0&&(u[s]=[]),u[s].push(a.morphAttributes[s])}if(n){let s;if(t)s=a.index.count;else if(a.attributes.position!==void 0)s=a.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". The geometry must have either an index or a position attribute"),null;m.addGroup(f,s,r),f+=s}}if(t){let r=0;const a=[];for(let c=0;c<i.length;++c){const s=i[c].index;for(let w=0;w<s.count;++w)a.push(s.getX(w)+r);r+=i[c].attributes.position.count}m.setIndex(a)}for(const r in h){const a=P(h[r]);if(!a)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" attribute."),null;m.setAttribute(r,a)}for(const r in u){const a=u[r][0].length;if(a===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[r]=[];for(let c=0;c<a;++c){const s=[];for(let N=0;N<u[r].length;++N)s.push(u[r][N][c]);const w=P(s);if(!w)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" morphAttribute."),null;m.morphAttributes[r].push(w)}}return m}function P(i){let n,t,e,o=-1,h=0;for(let f=0;f<i.length;++f){const r=i[f];if(r.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(n===void 0&&(n=r.array.constructor),n!==r.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=r.itemSize),t!==r.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(e===void 0&&(e=r.normalized),e!==r.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=r.gpuType),o!==r.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;h+=r.array.length}const u=new n(h);let y=0;for(let f=0;f<i.length;++f)u.set(i[f].array,y),y+=i[f].array.length;const m=new q(u,t,e);return o!==void 0&&(m.gpuType=o),m}const le={namespace:"source-engine.bsp",priority:2,createViewer:async(i,n)=>{if(i.type==G.Directory){const t=i.old;if(!t||t.type==G.Directory)throw new Error("Tried to create bsp viewer with transformed viewer that has no file.");const e=new H(await t.blob());await e.readHeader();const{renderer:o,scene:h}=J.createRendererWithControls(),u=o.domElement;u.style.width="100vw",u.style.height="100vh",n.appendChild(u);const y=await e.getVertices(),m=await e.getEdges(),f=await e.getSurfEdges(),r=await e.getFaces(),a=await e.getTexInfos(),c=await e.getTexDatas(),s=await e.getDispInfos(),w=await e.getDispVerts(),N=[];for(const U of r){const C=a[U.texInfo],j=c[C.texData].reflectivity;let g=[];for(let l=0;l<U.numEdges;l++){const d=f[U.firstEdge+l],E=m[Math.abs(d)],S=y[E[d<0?1:0]];g.push(S)}let D=[];if(U.dispInfo==-1)for(let l=0;l<g.length-2;l++)D.push(l+2,l+1,0);else{if(g.length!=4)throw new Error("BSP Invalid displacement.");const l=s[U.dispInfo],d=Math.pow(2,l.power),E=g.findIndex(b=>l.startPosition.distanceTo(b)<.1),S=g[(E+0)%4],O=g[(E+1)%4],Z=g[(E+2)%4],X=g[(E+3)%4];g=[];for(let b=0;b<d+1;b++)for(let p=0;p<d+1;p++){const A=b/d,V=p/d,T=b*(d+1)+p,B=w[l.dispVertStart+T],F=new v().lerpVectors(new v().lerpVectors(S,O,A),new v().lerpVectors(X,Z,A),V);F.add(new v().copy(B.vec).multiplyScalar(B.dist)),g.push(F)}for(let b=0;b<d;b++)for(let p=0;p<d;p++){const A=b*(d+1)+p,V=(b+1)*(d+1)+p,T=(b+1)*(d+1)+p+1,B=b*(d+1)+p+1;D.push(T,V,A,B,T,A)}}const x=new M;x.setAttribute("position",new L(g.map(l=>l.toArray()).flat(),3)),x.setAttribute("color",new L(g.map(()=>j.toArray()).flat(),3)),x.setIndex(D),N.push(x)}const k=re(N),z=new K(k,new Q({vertexColors:!0}));z.rotateX(-Math.PI/2),h.add(z)}else throw new Error("Tried to create bsp viewer with file.")},transform:async i=>{if(i.type!=G.File)throw new Error("Tried to create bsp pakfile archive viewer with invalid entry type.");const n=new H(await i.blob());await n.readHeader();const t=await n.getPakFile(i.name,i.parent);if(!t)return null;const e=t;return e.old=i,e},getIcon:async()=>"/asset-viewer/bootstrap-icons/boxes.svg"};export{le as default};
