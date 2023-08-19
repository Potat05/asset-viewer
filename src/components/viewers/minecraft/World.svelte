
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { World } from "$lib/minecraft/world";
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



        let geometries: THREE.BufferGeometry[] = [];
        
        function placeBlock(x: number, y: number, z: number) {
            const cube = new THREE.BoxGeometry(1, 1, 1);

            cube.translate(x, y, z);

            geometries.push(cube);
        }

        for(let cx = 0; cx < 8; cx++) {
            for(let cz = 0; cz < 8; cz++) {

                const chunk = await region.getChunk(cx, cz);

                console.log('chunk', cx, cz);

                if(chunk == null) continue;

                chunk.forEachBlock((bx, by, bz, block) => {

                    if(bx > 0 && by > -64 && bz > 0 && bx < 15 && by < 319 && bz < 15) {

                        if(
                            chunk.getBlock(bx - 1, by, bz).Name == 'minecraft:air' ||
                            chunk.getBlock(bx + 1, by, bz).Name == 'minecraft:air' ||
                            chunk.getBlock(bx, by - 1, bz).Name == 'minecraft:air' ||
                            chunk.getBlock(bx, by + 1, bz).Name == 'minecraft:air' ||
                            chunk.getBlock(bx, by, bz - 1).Name == 'minecraft:air' ||
                            chunk.getBlock(bx, by, bz + 1).Name == 'minecraft:air'
                        ) {
                            placeBlock(bx + cx*16, by, bz + cz*16);
                        }

                    } else {
                        placeBlock(bx + cx*16, by, bz + cz*16);
                    }



                });

            }    
        }    


        const merged = mergeGeometries(geometries);

        geometries.forEach(geom => geom.dispose());
        geometries = [];

        const mesh = new THREE.Mesh(
            merged,
            new THREE.MeshNormalMaterial()
        );
        scene.add(mesh);

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
