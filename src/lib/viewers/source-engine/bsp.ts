import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { BSP } from "$lib/source-engine/bsp";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";



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



            // Init renderer
            const canvas = document.createElement('canvas');
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(91, 1 / 1, 1, 20000);
            const controls = new PointerLockControls(camera, canvas);

            camera.position.set(0, 100, 0)



            let keys: Set<string> = new Set();

            function updateControls(dt: number = 1) {
                let move = new THREE.Vector3();
                let speed = 1;

                const forward = camera.getWorldDirection(new THREE.Vector3());
                const up = camera.up;
                const right = new THREE.Vector3().crossVectors(forward, up);

                if(keys.has('KeyW')) move.add(forward);
                if(keys.has('KeyS')) move.addScaledVector(forward, -1);
                if(keys.has('KeyD')) move.add(right);
                if(keys.has('KeyA')) move.addScaledVector(right, -1);
                if(keys.has('Space')) move.add(up);
                if(keys.has('ControlLeft')) move.addScaledVector(up, -1);

                camera.position.addScaledVector(move.normalize(), speed * dt);
            }

            function keyDown(ev: KeyboardEvent) {
                keys.add(ev.code);
            }
        
            function keyUp(ev: KeyboardEvent) {
                keys.delete(ev.code);
            }

            document.body.addEventListener('keydown', keyDown);
            document.body.addEventListener('keyup', keyUp);

            canvas.addEventListener('click', () => controls.lock());



            new ResizeObserver(() => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                renderer.setSize(canvas.width, canvas.height);
                camera.aspect = canvas.width / canvas.height;
                camera.updateProjectionMatrix();
            }).observe(canvas);



            // Create scene
            const vertices = await bsp.getVertices();

            const geom = new THREE.BufferGeometry();
            geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices.map(vert => [ vert.x, vert.y, vert.z ]).flat(), 3));

            const mesh = new THREE.Points(geom, new THREE.PointsMaterial({
                size: 5,
                color: 'white'
            }));

            mesh.rotateX(Math.PI / 2);

            scene.add(mesh);



            // Render loop
            setInterval(() => {

                if(controls.isLocked) {
                    updateControls(1000 / 60);
                }

                renderer.render(scene, camera);

            }, 1000 / 60);

            target.appendChild(canvas);

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
