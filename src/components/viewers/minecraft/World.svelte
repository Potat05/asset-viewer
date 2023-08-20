
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { Chunk, World } from "$lib/minecraft/world";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
    import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

    export let entry: fsDirectory;

    let canvas: HTMLCanvasElement;

    let canvasResizeObserver: ResizeObserver;

    let renderInterval: number = -1;

    let renderer: THREE.Renderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let controls: OrbitControls;

    onMount(async () => {

        console.clear();

        const world = new World(entry);
        const region = await world.getRegion(0, 0);
        if(!region) return;
        await region.init();



        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(91, 1, 0.1, 2000);
        controls = new OrbitControls(camera, canvas);

        camera.position.set(0, 16, 16);
        controls.update();



        // function createGrid(facing: 'up' | 'north' | 'east', pos: THREE.Vector3) {

        //     const grid = new THREE.GridHelper(16, 16);

        //     switch(facing) {
        //         case 'north': {
        //             grid.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)));
        //             break; }
        //         case 'east': {
        //             grid.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(Math.PI / 2, 0, Math.PI / 2)));
        //             break; }
        //     }

        //     grid.applyMatrix4(new THREE.Matrix4().makeTranslation(pos));

        //     scene.add(grid);

        // }

        // createGrid('up', new THREE.Vector3(7.5, -0.5, 7.5));
        // createGrid('north', new THREE.Vector3(7.5, 7.5, -0.5));
        // createGrid('east', new THREE.Vector3(-0.5, 7.5, 7.5));

        // createGrid('up', new THREE.Vector3(7.5, 15.5, 7.5));
        // createGrid('north', new THREE.Vector3(7.5, 7.5, 15.5));
        // createGrid('east', new THREE.Vector3(15.5, 7.5, 7.5));

        // scene.add(new THREE.AxesHelper(15));



        canvasResizeObserver = new ResizeObserver(() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            renderer.setSize(canvas.width, canvas.height);
            camera.aspect = canvas.width / canvas.height;
            camera.updateProjectionMatrix();
        });
        canvasResizeObserver.observe(canvas);



        function render() {
            renderer.render(scene, camera);
        }

        renderInterval = setInterval(() => render(), 1000 / 60);



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


        
        for(let cx = 0; cx < 8; cx++) {
            for(let cz = 0; cz < 8; cz++) {

                const chunk = await region.getChunk(cx, cz);

                console.log('chunk', cx, cz);

                if(chunk == null) continue;

                const geom = getChunkGeom(chunk);
                geom.computeVertexNormals();

                const mesh = new THREE.Mesh(
                    geom,
                    new THREE.MeshNormalMaterial()
                );

                mesh.translateX(cx * 16);
                mesh.translateZ(cz * 16);

                scene.add(mesh);

            }
        }

    });





    onDestroy(() => {
        scene.clear();
        controls.dispose();
        clearInterval(renderInterval);
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
