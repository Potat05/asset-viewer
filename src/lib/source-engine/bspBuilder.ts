import { fsUtils, type fsDirectory, fsEntry } from "$lib/FileSystem";
import type { BSPReader, Lump } from "./bspReader";
import * as THREE from "three";
import { VMT } from "./vmt";



interface BSPBuilderGetFacesOptions {
    /** @default false */
    reflectivity?: boolean;
    /** @default true */
    uvs?: boolean;
    /** @default true */
    displacements?: boolean;
}



export class BSPBuilder {
    public reader: BSPReader;
    public dir: fsDirectory;
    
    constructor(reader: BSPReader, dir: fsDirectory) {
        this.reader = reader;
        this.dir = dir;
    }
    


    public async getFaces(options: BSPBuilderGetFacesOptions = {}): Promise<THREE.BufferGeometry[][]> {
        // TODO: Choosing not to generate displacements in options still loads the displacement related lumps. 
        const vertices = await this.reader.getVertices();
        const edges = await this.reader.getEdges();
        const surfedges = await this.reader.getSurfEdges();
        const faces = await this.reader.getFaces();
        const texInfos = await this.reader.getTexInfos();
        const texDatas = await this.reader.getTexDatas();
        const dispInfos = await this.reader.getDispInfos();
        const dispVerts = await this.reader.getDispVerts();

        let matFaces: THREE.BufferGeometry[][] = [];

        for(const face of faces) {

            // Get face reflectivity
            const texInfo = texInfos[face.texInfo];
            const texData = texDatas[texInfo.texData];
            const reflectivity = texData.reflectivity;

            // Get face vertices
            let verts = [];

            for(let i = 0; i < face.numEdges; i++) {
                const surfedge = surfedges[face.firstEdge + i];
                const edge = edges[Math.abs(surfedge)];
                const vertex = vertices[edge[surfedge < 0 ? 1 : 0]];

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

                const dispInfo = dispInfos[face.dispInfo];
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
                        const dispVert = dispVerts[dispInfo.dispVertStart + dispVertIndex];

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

            // Construct face
            const geom = new THREE.BufferGeometry();
            geom.setAttribute('position', new THREE.Float32BufferAttribute(verts.map(vert => vert.toArray()).flat(), 3));
            if(options.reflectivity ?? false) {
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

            // Add face to list
            if(!matFaces[texData.nameStringTableID]) {
                matFaces[texData.nameStringTableID] = [];
            }
            matFaces[texData.nameStringTableID].push(geom);

        }

        return matFaces;

    }

    public async getMaterials(): Promise<(THREE.ShaderMaterial | null)[]> {
        const texStrings = await this.reader.getTexDataStrings();

        const materials = await Promise.all(texStrings.map(async materialPath => {
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
        const overlays = await this.reader.getOverlays();
        const texInfos = await this.reader.getTexInfos();
        const texDatas = await this.reader.getTexDatas();

        let matOverlays: THREE.BufferGeometry[][] = [];

        for(const overlay of overlays) {

            const size = new THREE.Vector3(100, 100, 100); // TODO - Get size of overlay


            // TODO - Use DecalGeometry to project onto overlay.faces

            const decal = new THREE.PlaneGeometry(size.x, size.y); // TODO - Texture is mirrored horizontally
            const up = new THREE.Vector3(0, 0, -1);
            const right = new THREE.Vector3().crossVectors(up, overlay.basisNormal);
            const projectionMatrix = new THREE.Matrix4().makeBasis(right, up, overlay.basisNormal);
            projectionMatrix.setPosition(overlay.origin.clone().add(overlay.basisNormal)); // Add normal to stop z-fighting
            decal.applyMatrix4(projectionMatrix);


            const texInfo = texInfos[overlay.texInfo];
            const texData = texDatas[texInfo.texData];

            if(!matOverlays[texData.nameStringTableID]) {
                matOverlays[texData.nameStringTableID] = [];
            }
            matOverlays[texData.nameStringTableID].push(decal);

        }

        return matOverlays;
    }
    
}

