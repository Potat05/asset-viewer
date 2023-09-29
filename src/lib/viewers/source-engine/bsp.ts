import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
import { ThreeUtils } from "$lib/ThreeUtils";
import { TypeUtils } from "$lib/TypeUtils";
import type { Viewer } from "$lib/Viewer";
import { BSPBuilder } from "$lib/source-engine/bspBuilder";
import { BSPReader } from "$lib/source-engine/bspReader";
import { getSourceEngineAssetsDir } from "$lib/source-engine/dir";
import { VMT } from "$lib/source-engine/vmt";
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



            // Init renderer
            const {
                renderer,
                scene
            } = ThreeUtils.createRendererWithControls();

            const canvas = renderer.domElement;
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            target.appendChild(canvas);



            // BSPReader
            const reader = new BSPReader(await file.blob());
            await reader.readHeader();

            // Resource directory
            const base = fsUtils.root(entry);
            const resourceDir = (base && base != entry) ? await getSourceEngineAssetsDir(base, [ entry ]) : entry;

            // BSPBuilder
            const builder = new BSPBuilder(reader, resourceDir);


            // Meshes
            const materials = await builder.getMaterials();

            
            const group = new THREE.Group();
            
            const geomsLists = await builder.getFaces({ reflectivity: true });
            geomsLists.forEach((geoms, i) => {
                if(geoms.length == 0) return;

                const material = materials[i];

                const merged = mergeGeometries(geoms);

                const mesh = new THREE.Mesh(merged, material == null ? new THREE.MeshBasicMaterial({
                    vertexColors: true
                }) : material);

                group.add(mesh);

            });

            const overlaysList = await builder.getOverlays();
            overlaysList.forEach((overlays, i) => {
                if(overlays.length == 0) return;

                const material = materials[i];

                const merged = mergeGeometries(overlays);

                const mesh = new THREE.Mesh(merged, material == null ? new THREE.MeshBasicMaterial() : material);

                group.add(mesh);
            });

            group.rotateX(-Math.PI / 2);
            

            scene.add(group);

        } else {
            throw new Error('Tried to create bsp viewer with file.');
        }

    },
    transform: async entry => {
        
        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create bsp pakfile archive viewer with invalid entry type.');
        }

        const bsp = new BSPReader(await entry.blob());
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
