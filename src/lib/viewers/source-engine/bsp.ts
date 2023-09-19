import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
import { ThreeUtils } from "$lib/ThreeUtils";
import type { Viewer } from "$lib/Viewer";
import { BSP } from "$lib/source-engine/bsp";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";



// TODO: This is sorta jank, maybe do this differently?
type StoredTransformFsEntry = (fsFile | fsDirectory) & { old?: (fsFile | fsDirectory) };



const viewer: Viewer = {
    namespace: 'source-engine.bsp',
    priority: 2,
    createViewer: async (entry: StoredTransformFsEntry, target) => {

        if(entry.type == fsEntry.Directory) {

            const file = entry.old;
            
            if(!file || file.type == fsEntry.Directory) {
                throw new Error('Tried to create bsp viewer with transformed viewer that has no file.');
            }



            const bsp = new BSP(await file.blob());
            await bsp.readHeader();



            const {
                renderer,
                scene
            } = ThreeUtils.createRendererWithControls();

            const canvas = renderer.domElement;
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            target.appendChild(canvas);



            // TODO: Move building of meshes to separate thing.
            const vertices = await bsp.getVertices();
            const edges = await bsp.getEdges();
            const surfedges = await bsp.getSurfEdges();
            const faces = await bsp.getFaces();
            const texInfos = await bsp.getTexInfos();
            const texDatas = await bsp.getTexDatas();
            const dispInfos = await bsp.getDispInfos();
            const dispVerts = await bsp.getDispVerts();



            const geoms: THREE.BufferGeometry[] = [];

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

                if(face.dispInfo == -1) {
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
                    const orientation = verts.findIndex(vert => (dispInfo.startPosition.distanceTo(vert) < 0.1));

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
                geom.setAttribute('color', new THREE.Float32BufferAttribute(verts.map(() => reflectivity.toArray()).flat(), 3));
                geom.setIndex(indices);

                geoms.push(geom)

            }


            const merged = mergeGeometries(geoms);

            const mesh = new THREE.Mesh(merged, new THREE.MeshBasicMaterial({
                vertexColors: true
            }));

            mesh.rotateX(-Math.PI / 2);


            scene.add(mesh);

        } else {
            throw new Error('Tried to create bsp viewer with file.');
        }

    },
    transform: async entry => {
        
        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create bsp pakfile archive viewer with invalid entry type.');
        }

        const bsp = new BSP(await entry.blob());
        await bsp.readHeader();

        const pakfile = await bsp.getPakFile(entry.name, entry.parent);

        if(!pakfile) return null;

        const dir: StoredTransformFsEntry = pakfile;
        dir.old = entry;

        return dir;

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/boxes.svg";
    }
};

export default viewer;
