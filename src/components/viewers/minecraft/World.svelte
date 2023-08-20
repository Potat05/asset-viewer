
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { Chunk, Region, World } from "$lib/minecraft/world";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

    export let entry: fsDirectory;

    let canvas: HTMLCanvasElement;

    let canvasResizeObserver: ResizeObserver;

    let renderTimeout: number = -1;

    let renderer: THREE.Renderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let controls: OrbitControls;

    onMount(async () => {

        console.clear();

        const world = new World(entry);



        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(91, 1, 0.1, 2000);
        controls = new OrbitControls(camera, canvas);

        camera.position.set(0, 16, 16);
        controls.update();



        canvasResizeObserver = new ResizeObserver(() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            renderer.setSize(canvas.width, canvas.height);
            camera.aspect = canvas.width / canvas.height;
            camera.updateProjectionMatrix();
        });
        canvasResizeObserver.observe(canvas);





        type LoadedChunk = {
            cx: number;
            cz: number;
            mesh: THREE.Mesh | null;
        }

        type LoadedRegion = {
            rx: number;
            rz: number;
            region: Region | null;
        }

        let loadedChunks: LoadedChunk[] = [];

        let loadedRegions: LoadedRegion[] = [];



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

        async function getRegion(rx: number, rz: number): Promise<LoadedRegion> {

            const loadedRegion = loadedRegions.find(reg => reg.rx == rx && reg.rz == rz);

            if(loadedRegion != null) return loadedRegion;

            const region = await world.getRegion(rx, rz);
            await region?.init();
            loadedRegions.push({ rx, rz, region });

            return { rx, rz, region };

        }

        async function loadChunk(cx: number, cz: number) {

            if(loadedChunks.some(chunk => chunk.cx == cx && chunk.cz == cz)) return;

            const loadedRegion = await getRegion(Math.floor(cx / 32), Math.floor(cz / 32));

            if(loadedRegion.region == null) {
                loadedChunks.push({ cx, cz, mesh: null });
                return;
            }

            const chunk = await loadedRegion.region.getChunk(cx, cz);

            if(chunk == null) {
                loadedChunks.push({ cx, cz, mesh: null });
                return;
            }

            const geom = getChunkGeom(chunk);
            geom.computeVertexNormals();

            const mesh = new THREE.Mesh(
                geom,
                new THREE.MeshNormalMaterial()
            );

            mesh.translateX(cx * 16);
            mesh.translateZ(cz * 16);

            scene.add(mesh);

            loadedChunks.push({ cx, cz, mesh });

        }

        async function updateChunks() {
            const x = Math.floor(camera.position.x);
            const z = Math.floor(camera.position.z);

            const cx = Math.floor(x / 16);
            const cz = Math.floor(z / 16);

            const radius = 5;
            for(let dcx = -radius; dcx < radius; dcx++) {
                for(let dcz = -radius; dcz < radius; dcz++) {
                    if(Math.sqrt(dcx ** 2 + dcz ** 2) < radius) {
                        await loadChunk(cx + dcx, cz + dcz);
                    }
                }
            }
        }





        let lastChunkX = 0;
        let lastChunkZ = 0;
        async function render() {

            const cx = Math.floor(camera.position.x / 16);
            const cz = Math.floor(camera.position.z / 16);

            if(cx != lastChunkX || cz != lastChunkZ) {
                await updateChunks();
                lastChunkX = cx;
                lastChunkZ = cz;
            }
            
            renderer.render(scene, camera);

            clearTimeout(renderTimeout);
            renderTimeout = setTimeout(() => render(), 1000 / 60);
        }

        render();



    });





    onDestroy(() => {
        scene.clear();
        controls.dispose();
        clearInterval(renderTimeout);
        canvasResizeObserver.disconnect();
    });

</script>

<style>

    canvas {
        width: 100vw;
        height: 100vh;
    }

</style>

<canvas bind:this={canvas}></canvas>
