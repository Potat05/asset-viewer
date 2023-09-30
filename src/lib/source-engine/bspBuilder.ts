import { fsUtils, type fsDirectory, fsEntry } from "$lib/FileSystem";
import type { BSPReader, Lump } from "./bspReader";
import * as THREE from "three";
import { VMT } from "./vmt";
import { ThreeUtils } from "$lib/ThreeUtils";



interface BSPBuilderGetFacesOptions {
    /** @default false */
    reflectivity?: boolean;
    /** @default true */
    uvs?: boolean;
    /** @default true */
    displacements?: boolean;
    /** @default true */
    generateNormals?: boolean;
}



export class BSPBuilder {
    public reader: BSPReader;
    public dir: fsDirectory;
    
    constructor(reader: BSPReader, dir: fsDirectory) {
        this.reader = reader;
        this.dir = dir;
    }

    vertices?: Awaited<ReturnType<BSPReader['getVertices']>>;
    edges?: Awaited<ReturnType<BSPReader['getEdges']>>;
    surfedges?: Awaited<ReturnType<BSPReader['getSurfEdges']>>;
    faces?: Awaited<ReturnType<BSPReader['getFaces']>>;
    texInfos?: Awaited<ReturnType<BSPReader['getTexInfos']>>;
    texDatas?: Awaited<ReturnType<BSPReader['getTexDatas']>>;
    dispInfos?: Awaited<ReturnType<BSPReader['getDispInfos']>>;
    dispVerts?: Awaited<ReturnType<BSPReader['getDispVerts']>>;
    texStrings?: Awaited<ReturnType<BSPReader['getTexDataStrings']>>;
    overlays?: Awaited<ReturnType<BSPReader['getOverlays']>>;



    public async getFace(index: number, options: BSPBuilderGetFacesOptions = {}): Promise<THREE.BufferGeometry> {
        // TODO: Only load necessary lumps for the options provided.
        if(!this.vertices) this.vertices = await this.reader.getVertices();
        if(!this.edges) this.edges = await this.reader.getEdges();
        if(!this.surfedges) this.surfedges = await this.reader.getSurfEdges();
        if(!this.faces) this.faces = await this.reader.getFaces();
        if(!this.texInfos) this.texInfos = await this.reader.getTexInfos();
        if(!this.texDatas) this.texDatas = await this.reader.getTexDatas();
        if(!this.dispInfos) this.dispInfos = await this.reader.getDispInfos();
        if(!this.dispVerts) this.dispVerts = await this.reader.getDispVerts();

        const face = this.faces[index];

        // Get face vertices
        let verts = [];

        for(let i = 0; i < face.numEdges; i++) {
            const surfedge = this.surfedges[face.firstEdge + i];
            const edge = this.edges[Math.abs(surfedge)];
            const vertex = this.vertices[edge[surfedge < 0 ? 1 : 0]];

            verts.push(vertex);
        }

        let indices: number[] = [];

        if(face.dispInfo == -1 || !(options.displacements ?? true)) {
            // Not displacement

            // Generate indices
            for(let i = 0; i < verts.length-2; i++) {
                indices.push(i+2, i+1, 0);
            }

        } else {
            // Compute displacement geometry

            if(verts.length != 4) {
                throw new Error('BSP Invalid displacement.');
            }

            const dispInfo = this.dispInfos[face.dispInfo];
            const size = Math.pow(2, dispInfo.power);

            // Generate vertices
            const closest = verts.reduce((closest, vert) => {
                if(closest === undefined) return vert;
                return (vert.distanceTo(dispInfo.startPosition) < closest.distanceTo(dispInfo.startPosition)) ? vert : closest;
            });
            const orientation = verts.findIndex(vert => vert == closest);

            const v0 = verts[(orientation + 0) % 4];
            const v1 = verts[(orientation + 1) % 4];
            const v2 = verts[(orientation + 2) % 4];
            const v3 = verts[(orientation + 3) % 4];

            verts = [];

            for(let i = 0; i < size + 1; i++) {
                for(let j = 0; j < size + 1; j++) {
                    const u = i / size;
                    const v = j / size;

                    const dispVertIndex = i * (size + 1) + j;
                    const dispVert = this.dispVerts[dispInfo.dispVertStart + dispVertIndex];

                    const vertex = new THREE.Vector3().lerpVectors(
                        new THREE.Vector3().lerpVectors(v0, v1, u),
                        new THREE.Vector3().lerpVectors(v3, v2, u),
                        v
                    );

                    vertex.add(new THREE.Vector3().copy(dispVert.vec).multiplyScalar(dispVert.dist));

                    verts.push(vertex);

                }
            }

            // Generate indices
            for(let i = 0; i < size; i++) {
                for(let j = 0; j < size; j++) {
                    const i0 = i * (size+1) + j;
                    const i1 = (i+1) * (size+1) + j;
                    const i2 = (i+1) * (size+1) + j+1;
                    const i3 = i * (size+1) + j+1;

                    indices.push(
                        i2, i1, i0,
                        i3, i2, i0
                    );
                }
            }

        }

        // Construct geometry
        const texInfo = this.texInfos[face.texInfo];
        const texData = this.texDatas[texInfo.texData];

        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.Float32BufferAttribute(verts.map(vert => vert.toArray()).flat(), 3));
        if(options.reflectivity ?? false) {
            const reflectivity = texData.reflectivity;
            geom.setAttribute('color', new THREE.Float32BufferAttribute(verts.map(() => reflectivity.toArray()).flat(), 3));
        }
        geom.setIndex(indices);

        if(options.uvs ?? true) {
            // Get face UVs
            const s = new THREE.Vector3(texInfo.textureVecs[0][0], texInfo.textureVecs[0][1], texInfo.textureVecs[0][2]);
            const t = new THREE.Vector3(texInfo.textureVecs[1][0], texInfo.textureVecs[1][1], texInfo.textureVecs[1][2]);
            const xOffset = texInfo.textureVecs[0][3];
            const yOffset = texInfo.textureVecs[1][3];

            const uvs: THREE.Vector2[] = verts.map(vert => {
                return new THREE.Vector2(
                    (s.dot(vert) + xOffset) / texData.width,
                    (t.dot(vert) + yOffset) / texData.height
                );
            });

            geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs.map(uv => uv.toArray()).flat(), 2));
        }

        if(options.generateNormals ?? true) {
            geom.computeVertexNormals();
        }

        return geom;

    }

    public async getFaces(options: BSPBuilderGetFacesOptions = {}): Promise<THREE.BufferGeometry[][]> {
        if(!this.faces) this.faces = await this.reader.getFaces();
        if(!this.texInfos) this.texInfos = await this.reader.getTexInfos();
        if(!this.texDatas) this.texDatas = await this.reader.getTexDatas();

        let matFaces: THREE.BufferGeometry[][] = [];

        for(let i = 0; i < this.faces.length; i++) {
            const geom = await this.getFace(i, options);

            const face = this.faces[i];
            const texInfo = this.texInfos[face.texInfo];
            const texData = this.texDatas[texInfo.texData];

            // Add face to list
            if(!matFaces[texData.nameStringTableID]) {
                matFaces[texData.nameStringTableID] = [];
            }
            matFaces[texData.nameStringTableID].push(geom);

        }

        return matFaces;

    }

    public async getMaterials(): Promise<(THREE.ShaderMaterial | null)[]> {
        if(!this.texStrings) this.texStrings = await this.reader.getTexDataStrings();

        const materials = await Promise.all(this.texStrings.map(async materialPath => {
            materialPath = `materials/${materialPath.toLowerCase()}`;
            if(!materialPath.endsWith('.vmt')) materialPath += '.vmt';
            
            const vmtFile = await fsUtils.getDeep(this.dir, materialPath);
            if(!vmtFile || vmtFile.type != fsEntry.File) {
                console.warn(`Could not find material file "${materialPath}"`);
                return null;
            }

            const vmt = new VMT(vmtFile);

            try {
                return await vmt.getShader(this.dir);
            } catch(err) {
                console.error(err);
                console.warn(`Failed to get shader "${materialPath}"`);
                return null;
            }

        }));

        return materials;

    }

    public async getOverlays(): Promise<THREE.BufferGeometry[][]> {
        if(!this.overlays) this.overlays = await this.reader.getOverlays();
        if(!this.texInfos) this.texInfos = await this.reader.getTexInfos();
        if(!this.texDatas) this.texDatas = await this.reader.getTexDatas();

        let matOverlays: THREE.BufferGeometry[][] = [];

        for(const overlay of this.overlays) {

            // Geometry to project onto.
            let projectGeoms: THREE.BufferGeometry[] = [];
            for(let i = 0; i < overlay.faceCount; i++) {
                const faceIndex = overlay.faces[i];
                const face = await this.getFace(faceIndex, { displacements: true, reflectivity: false, uvs: false, generateNormals: true });
                projectGeoms.push(face);
            }

            // Project overlay.
            const size = new THREE.Vector3(100, -100, 100); // TODO - Get size of overlay
            const decal = new ThreeUtils.DecalGeometry(projectGeoms, overlay.origin, overlay.basisNormal, size);

            // Fix z-fighting.
            // TODO - Use a different way to fix z-fighting.
            decal.translate(overlay.basisNormal.x, overlay.basisNormal.y, overlay.basisNormal.z);



            const texInfo = this.texInfos[overlay.texInfo];
            const texData = this.texDatas[texInfo.texData];

            if(!matOverlays[texData.nameStringTableID]) {
                matOverlays[texData.nameStringTableID] = [];
            }
            matOverlays[texData.nameStringTableID].push(decal);

        }

        return matOverlays;
    }
    
}
