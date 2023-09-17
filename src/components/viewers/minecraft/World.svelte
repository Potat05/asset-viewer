
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { Chunk, Region, World } from "$lib/minecraft/world";
    import * as THREE from "three";
    import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
    import { WorldLoader } from "$lib/minecraft/worldloader";
    import { ThreeUtils } from "$lib/ThreeUtils";

    export let entry: fsDirectory;

    let canvas: HTMLCanvasElement;

    let loader: WorldLoader;

    let chunksTimeout: number = -1;

    let stopRenderer: () => void;

    onMount(async () => {

        const world = new World(entry);



        const {
            scene,
            camera,
            controls,
            dispose
        } = ThreeUtils.createRendererWithControls({
            canvas
        });

        controls.moveSpeed = 0.1;

        stopRenderer = dispose;



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

    });





    onDestroy(() => {
        stopRenderer();

        loader.destroyDispatcher();
        clearTimeout(chunksTimeout);
    });

</script>

<style>

    canvas {
        width: 100vw;
        height: 100vh;
    }

</style>

<canvas bind:this={canvas}></canvas>
