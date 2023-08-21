
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { Chunk, Region, World } from "$lib/minecraft/world";
    import * as THREE from "three";
    import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
    import { WorldLoader } from "$lib/minecraft/worldloader";

    export let entry: fsDirectory;

    let canvas: HTMLCanvasElement;

    let canvasResizeObserver: ResizeObserver;

    let loader: WorldLoader;

    let renderTimeout: number = -1;
    let chunksTimeout: number = -1;

    let renderer: THREE.Renderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let controls: PointerLockControls;

    let keys: Set<string> = new Set();

    function keyDown(ev: KeyboardEvent) {
        keys.add(ev.code);
    }

    function keyUp(ev: KeyboardEvent) {
        keys.delete(ev.code);
    }

    onMount(async () => {

        const world = new World(entry);



        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(91, 1, 0.1, 2000);
        controls = new PointerLockControls(camera, canvas);

        camera.position.set(0, 100, 0)

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






        canvasResizeObserver = new ResizeObserver(() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            renderer.setSize(canvas.width, canvas.height);
            camera.aspect = canvas.width / canvas.height;
            camera.updateProjectionMatrix();
        });
        canvasResizeObserver.observe(canvas);



        function getChunkGeom(chunk: Chunk): THREE.BufferGeometry {

            let vertices: number[] = [];

            chunk.forEachBlock((bx, by, bz, block) => {

                if(chunk.getBlock(bx + 1, by, bz).Name == 'minecraft:air') {
                    vertices.push(
                        bx + 1, by, bz,
                        bx + 1, by + 1, bz,
                        bx + 1, by, bz + 1,
                        bx + 1, by + 1, bz,
                        bx + 1, by + 1, bz + 1,
                        bx + 1, by, bz + 1
                    );
                }

                if(chunk.getBlock(bx - 1, by, bz).Name == 'minecraft:air') {
                    vertices.push(
                        bx, by + 1, bz,
                        bx, by, bz,
                        bx, by, bz + 1,
                        bx, by + 1, bz + 1,
                        bx, by + 1, bz,
                        bx, by, bz + 1
                    );
                }

                if(chunk.getBlock(bx, by + 1, bz).Name == 'minecraft:air') {
                    vertices.push(
                        bx + 1, by + 1, bz,
                        bx, by + 1, bz,
                        bx, by + 1, bz + 1,
                        bx + 1, by + 1, bz + 1,
                        bx + 1, by + 1, bz,
                        bx, by + 1, bz + 1
                    );
                }

                if(chunk.getBlock(bx, by - 1, bz).Name == 'minecraft:air') {
                    vertices.push(
                        bx, by, bz,
                        bx + 1, by, bz,
                        bx, by, bz + 1,
                        bx + 1, by, bz,
                        bx + 1, by, bz + 1,
                        bx, by, bz + 1
                    );
                }

                if(chunk.getBlock(bx, by, bz + 1).Name == 'minecraft:air') {
                    vertices.push(
                        bx, by, bz + 1,
                        bx + 1, by, bz + 1,
                        bx, by + 1, bz + 1,
                        bx + 1, by, bz + 1,
                        bx + 1, by + 1, bz + 1,
                        bx, by + 1, bz + 1
                    );
                }

                if(chunk.getBlock(bx, by, bz - 1).Name == 'minecraft:air') {
                    vertices.push(
                        bx + 1, by, bz,
                        bx, by, bz,
                        bx, by + 1, bz,
                        bx + 1, by + 1, bz,
                        bx + 1, by, bz,
                        bx, by + 1, bz
                    );
                }
            });

            const geom = new THREE.BufferGeometry();
            geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            return geom;

        }



        let loaded: { mesh: THREE.Mesh, chunk: Chunk }[] = [];

        loader = new WorldLoader(world, 8, 10);

        loader.addEventListener('loadchunk', chunk => {

            const geom = getChunkGeom(chunk);
            geom.computeVertexNormals();

            const mesh = new THREE.Mesh(geom, new THREE.MeshNormalMaterial());

            mesh.translateX(chunk.cx * 16);
            mesh.translateZ(chunk.cz * 16);

            scene.add(mesh);

            loaded.push({ mesh, chunk });
        });

        loader.addEventListener('unloadchunk', chunk => {

            const loadedChunk = loaded.find(v => v.chunk == chunk);

            if(loadedChunk == null) {
                throw new Error('Error while unloading chunk.');
            }

            loadedChunk.mesh.clear();
            loadedChunk.mesh.removeFromParent();

            loaded = loaded.filter(v => v != loadedChunk);

        });



        let lastChunkX: number;
        let lastChunkZ: number;

        async function updateChunksLoop() {

            const cx = Math.floor(camera.position.x / 16);
            const cz = Math.floor(camera.position.z / 16);

            if(cx != lastChunkX || cz != lastChunkZ) {
                await loader.update(cx, cz);
                lastChunkX = cx;
                lastChunkZ = cz;
            }

            clearTimeout(chunksTimeout)
            chunksTimeout = setTimeout(() => updateChunksLoop(), 500);
        }

        updateChunksLoop();




        async function render() {

            if(controls.isLocked) {
                updateControls();
            }
            renderer.render(scene, camera);

            clearTimeout(renderTimeout);
            renderTimeout = setTimeout(() => render(), 1000 / 60);
        }

        render();



    });





    onDestroy(() => {
        loader.destroyDispatcher();
        scene.clear();
        controls.dispose();
        clearTimeout(chunksTimeout);
        clearTimeout(renderTimeout);
        canvasResizeObserver.disconnect();
    });

</script>

<style>

    canvas {
        width: 100vw;
        height: 100vh;
    }

</style>

<svelte:body
    on:keydown={keyDown}
    on:keyup={keyUp}
/>

<canvas bind:this={canvas} on:click={() => controls.lock()}></canvas>
