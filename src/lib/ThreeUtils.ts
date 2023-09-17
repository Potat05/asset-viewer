
import * as THREE from "three"
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";



export namespace ThreeUtils {



    export class PointerLockMovementControls {

        public camera: THREE.Camera;
        public domElement: HTMLElement;

        public cameraControls: PointerLockControls;

        public get isLocked(): boolean {
            return this.cameraControls.isLocked;
        }

        public lock(): void {
            this.cameraControls.lock();
        }

        public keys: Set<string> = new Set();

        public moveSpeed: number = 1;

        constructor(camera: THREE.Camera, domElement: HTMLElement) {

            this.camera = camera;
            this.domElement = domElement;

            this.cameraControls = new PointerLockControls(this.camera, this.domElement);

            const click = () => {
                this.lock();
            }

            this.domElement.addEventListener('click', click);


            
            const keyDown = (ev: KeyboardEvent) => {
                this.keys.add(ev.code);
            }
            const keyUp = (ev: KeyboardEvent) => {
                this.keys.delete(ev.code);
            }

            const keyListenerElement = document.body;

            keyListenerElement.addEventListener('keydown', keyDown);
            keyListenerElement.addEventListener('keyup', keyUp);



            this.dispose = () => {

                this.domElement.removeEventListener('click', click);

                keyListenerElement.removeEventListener('keydown', keyDown);
                keyListenerElement.removeEventListener('keyup', keyUp);

                this.cameraControls.disconnect();
                this.cameraControls.dispose();
    
            }

        }

        public update(dt: number): void {
            let move = new THREE.Vector3();

            const forward = this.camera.getWorldDirection(new THREE.Vector3());
            const up = this.camera.up;
            const right = new THREE.Vector3().crossVectors(forward, up);

            if(this.keys.has('KeyW')) move.add(forward);
            if(this.keys.has('KeyS')) move.addScaledVector(forward, -1);
            if(this.keys.has('KeyD')) move.add(right);
            if(this.keys.has('KeyA')) move.addScaledVector(right, -1);
            if(this.keys.has('Space')) move.add(up);
            if(this.keys.has('ControlLeft')) move.addScaledVector(up, -1);

            this.camera.position.addScaledVector(move.normalize(), this.moveSpeed * dt);
        }

        public readonly dispose: () => void;

    }



    type CreateRendererWithControlsOptions = {
        canvas?: HTMLCanvasElement,
        antialias?: boolean,
        beforeRender?: () => void,
        afterRender?: () => void
    }

    export function createRendererWithControls(options: CreateRendererWithControlsOptions = {}) {

        const renderer = new THREE.WebGLRenderer({
            canvas: options.canvas ?? document.createElement('canvas'),
            antialias: options.antialias ?? true
        });

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(91, 1, 1, 20000);



        const observer = new ResizeObserver(() => {
            renderer.domElement.width = renderer.domElement.clientWidth;
            renderer.domElement.height = renderer.domElement.clientHeight;
            renderer.setSize(renderer.domElement.width, renderer.domElement.height);
            camera.aspect = renderer.domElement.width / renderer.domElement.height;
            camera.updateProjectionMatrix();
        });

        observer.observe(renderer.domElement);



        const controls = new PointerLockMovementControls(camera, renderer.domElement);
        camera.position.set(0, 100, 0);



        let rendering: boolean = true; // This is probably not needed, but just incase.
        let renderTimeout: number = -1;
        let lastRenderTime = Date.now();

        async function render() {
            if(!rendering) return;

            if(controls.isLocked) {
                controls.update(Date.now() - lastRenderTime);
            }
            renderer.render(scene, camera);

            lastRenderTime = Date.now();

            clearTimeout(renderTimeout);
            renderTimeout = setTimeout(() => render(), 1000 / 60);
        }

        render();



        function dispose() {
            renderer.dispose();
            scene.clear();
            controls.dispose();
            observer.disconnect();
            clearTimeout(renderTimeout);
            rendering = false;
        }

        return {
            renderer,
            scene,
            camera,
            controls,
            dispose
        }

    }

}


