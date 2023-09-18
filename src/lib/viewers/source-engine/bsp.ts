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


            const geoms: THREE.BufferGeometry[] = [];

            for(const face of faces) {

                const verts = [];

                for(let i = 0; i < face.numEdges; i++) {
                    const surfedge = surfedges[face.firstEdge + i];
                    const edge = edges[Math.abs(surfedge)];
                    const vertex = vertices[edge[surfedge < 0 ? 1 : 0]];

                    verts.push(vertex);
                }

                const indices = [];
                for(let i = 0; i < verts.length-2; i++) {
                    indices.push(i+2, i+1, 0);
                }

                const geom = new THREE.BufferGeometry();
                geom.setAttribute('position', new THREE.Float32BufferAttribute(verts.map(vert => [ vert.x, vert.y, vert.z ]).flat(), 3));
                geom.setIndex(indices);

                geoms.push(geom)

            }


            const merged = mergeGeometries(geoms);

            const mesh = new THREE.Mesh(merged, new THREE.MeshNormalMaterial({
                flatShading: true
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
