
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onDestroy, onMount } from "svelte";
    import { World } from "$lib/minecraft/world";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

    export let entry: fsDirectory;

    let canvas: HTMLCanvasElement;

    let canvasResizeObserver: ResizeObserver;

    let renderAnimFrame: number = -1;

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
        const chunk = await region.getChunk(0, 0);
        if(!chunk) return;



        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(91, 1, 0.1, 2000);
        controls = new OrbitControls(camera, canvas);

        camera.position.set(0, 16, 16);
        controls.update();



        function createGrid(facing: 'up' | 'north' | 'east', pos: THREE.Vector3) {

            const grid = new THREE.GridHelper(16, 16);

            switch(facing) {
                case 'north': {
                    grid.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)));
                    break; }
                case 'east': {
                    grid.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(Math.PI / 2, 0, Math.PI / 2)));
                    break; }
            }

            grid.applyMatrix4(new THREE.Matrix4().makeTranslation(pos));

            scene.add(grid);

        }

        createGrid('up', new THREE.Vector3(7.5, -0.5, 7.5));
        createGrid('north', new THREE.Vector3(7.5, 7.5, -0.5));
        createGrid('east', new THREE.Vector3(-0.5, 7.5, 7.5));

        createGrid('up', new THREE.Vector3(7.5, 15.5, 7.5));
        createGrid('north', new THREE.Vector3(7.5, 7.5, 15.5));
        createGrid('east', new THREE.Vector3(15.5, 7.5, 7.5));

        scene.add(new THREE.AxesHelper(15));



        canvasResizeObserver = new ResizeObserver(() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            renderer.setSize(canvas.width, canvas.height);
            camera.aspect = canvas.width / canvas.height;
            camera.updateProjectionMatrix();
        });
        canvasResizeObserver.observe(canvas);



        function render() {
            renderAnimFrame = requestAnimationFrame(() => render());

            renderer.render(scene, camera);
        }

        render();



        function placeBlock(x: number, y: number, z: number, color: THREE.ColorRepresentation = 'white') {
            const cube = new THREE.BoxGeometry(1, 1, 1);

            cube.translate(x, y, z);
            
            const mesh = new THREE.Mesh(
                cube,
                new THREE.MeshBasicMaterial({ color })
            );

            scene.add(mesh);
        }

        placeBlock(0, 0, 0, 'red');
        placeBlock(15, 15, 15, 'red');

        chunk.forEachBlock((bx, by, bz, block) => {
            if(block.Name != 'minecraft:air') {
                console.log('Place', bx, by + 64, bz);
                placeBlock(bx, by + 64, bz);
            }
        });

    });

    onDestroy(() => {
        scene.clear();
        controls.dispose();
        cancelAnimationFrame(renderAnimFrame);
        canvasResizeObserver.disconnect();
    })

</script>

<style>

    canvas {
        width: 100vw;
        height: 100vh;
    }

</style>

<canvas bind:this={canvas}></canvas>
