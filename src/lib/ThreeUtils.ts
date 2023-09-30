
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



    /**
     * @see "three/examples/jsm/geometries/DecalGeometry"  
     * Copied from THREE DecalGeometry but made less worse.  
     */
    export class DecalGeometry extends THREE.BufferGeometry {

        constructor(decalGeometries: THREE.BufferGeometry[], position: THREE.Vector3, orientation: THREE.Vector3 | THREE.Euler, size: THREE.Vector3) {
            super();

            // buffers

            const vertices: number[] = [];
            const normals: number[] = [];
            const uvs: number[] = [];

            // helpers

            const plane = new THREE.Vector3();

            // this matrix represents the transformation of the decal projector
            const projectorMatrix = new THREE.Matrix4();
            if(orientation instanceof THREE.Euler) {
                projectorMatrix.makeRotationFromEuler(orientation);
                projectorMatrix.setPosition(position);
            } else {
                const forward = orientation;
                const up = new THREE.Vector3( 0, 0, 1 );
                const right = new THREE.Vector3().crossVectors(up, forward);
                projectorMatrix.makeBasis(right, up, forward);
                projectorMatrix.setPosition(position);
            }

            const projectorMatrixInverse = new THREE.Matrix4();
            projectorMatrixInverse.copy(projectorMatrix).invert();

            // generate buffers

            generate();

            // build geometry

            this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
            this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

            function generate() {

                let decalVertices: DecalVertex[] = [];

                const vertex = new THREE.Vector3();
                const normal = new THREE.Vector3();

                if(!Array.isArray(decalGeometries)) {
                    decalGeometries = [ decalGeometries ];
                }
                
                for(let geometry of decalGeometries) {

                    // handle different geometry types
                    
                    const positionAttribute = geometry.attributes.position;
                    const normalAttribute = geometry.attributes.normal;
        
                    // first, create an array of 'DecalVertex' objects
                    // three consecutive 'DecalVertex' objects represent a single face
                    //
                    // this data structure will be later used to perform the clipping
        
                    if(geometry.index != null) {
        
                        // indexed BufferGeometry
        
                        const index = geometry.index;
        
                        for(let i = 0; i < index.count; i++) {

                            vertex.fromBufferAttribute(positionAttribute, index.getX(i));
                            normal.fromBufferAttribute(normalAttribute, index.getX(i));
        
                            pushDecalVertex(decalVertices, vertex, normal);
        
                        }
        
                    } else {
        
                        // non-indexed BufferGeometry
        
                        for (let i = 0; i < positionAttribute.count; i++) {
        
                            vertex.fromBufferAttribute(positionAttribute, i);
                            normal.fromBufferAttribute(normalAttribute, i);
        
                            pushDecalVertex(decalVertices, vertex, normal);
        
                        }
        
                    }
                    
                }

                // second, clip the geometry so that it doesn't extend out from the projector

                decalVertices = clipGeometry(decalVertices, plane.set(1, 0, 0));
                decalVertices = clipGeometry(decalVertices, plane.set(-1, 0, 0));
                decalVertices = clipGeometry(decalVertices, plane.set(0, 1, 0));
                decalVertices = clipGeometry(decalVertices, plane.set(0, -1, 0));
                decalVertices = clipGeometry(decalVertices, plane.set(0, 0, 1));
                decalVertices = clipGeometry(decalVertices, plane.set(0, 0, -1));

                // third, generate final vertices, normals and uvs

                for (let i = 0; i < decalVertices.length; i++) {

                    const decalVertex = decalVertices[i];

                    // create texture coordinates (we are still in projector space)

                    uvs.push(
                        0.5 + ( decalVertex.position.x / size.x ),
                        0.5 + ( decalVertex.position.y / size.y )
                    );

                    // transform the vertex back to world space

                    decalVertex.position.applyMatrix4( projectorMatrix );

                    // now create vertex and normal buffer data

                    vertices.push( decalVertex.position.x, decalVertex.position.y, decalVertex.position.z );
                    normals.push( decalVertex.normal.x, decalVertex.normal.y, decalVertex.normal.z );

                }

            }

            function pushDecalVertex(decalVertices: DecalVertex[], vertex: THREE.Vector3, normal: THREE.Vector3) {

                // transform to projector space

                vertex.applyMatrix4(projectorMatrixInverse);

                decalVertices.push(new DecalVertex( vertex.clone(), normal.clone()));

            }

            function clipGeometry(inVertices: DecalVertex[], plane: THREE.Vector3): DecalVertex[] {

                const outVertices = [];

                const s = 0.5 * Math.abs(size.dot( plane));

                // a single iteration clips one face,
                // which consists of three consecutive 'DecalVertex' objects

                for (let i = 0; i < inVertices.length; i += 3) {

                    let total = 0;
                    let nV1: DecalVertex | undefined = undefined;
                    let nV2: DecalVertex | undefined = undefined;
                    let nV3: DecalVertex | undefined = undefined;
                    let nV4: DecalVertex | undefined = undefined;

                    const d1 = inVertices[i + 0].position.dot(plane) - s;
                    const d2 = inVertices[i + 1].position.dot(plane) - s;
                    const d3 = inVertices[i + 2].position.dot(plane) - s;

                    const v1Out = d1 > 0;
                    const v2Out = d2 > 0;
                    const v3Out = d3 > 0;

                    // calculate, how many vertices of the face lie outside of the clipping plane

                    total = (v1Out ? 1 : 0) + (v2Out ? 1 : 0) + (v3Out ? 1 : 0);

                    switch(total) {

                        case 0: {
                            // the entire face lies inside of the plane, no clipping needed

                            outVertices.push(inVertices[i]);
                            outVertices.push(inVertices[i + 1]);
                            outVertices.push(inVertices[i + 2]);

                            break; }

                        case 1: {

                            // one vertex lies outside of the plane, perform clipping

                            if(v1Out) {

                                nV1 = inVertices[i + 1];
                                nV2 = inVertices[i + 2];
                                nV3 = clip(inVertices[i], nV1, plane, s);
                                nV4 = clip(inVertices[i], nV2, plane, s);

                            }

                            if(v2Out) {

                                nV1 = inVertices[i];
                                nV2 = inVertices[i + 2];
                                nV3 = clip(inVertices[i + 1], nV1, plane, s);
                                nV4 = clip(inVertices[i + 1], nV2, plane, s);

                                outVertices.push(nV3);
                                outVertices.push(nV2.clone());
                                outVertices.push(nV1.clone());

                                outVertices.push(nV2.clone());
                                outVertices.push(nV3.clone());
                                outVertices.push(nV4);

                                break;

                            }

                            if(v3Out) {

                                nV1 = inVertices[i];
                                nV2 = inVertices[i + 1];
                                nV3 = clip(inVertices[i + 2], nV1, plane, s);
                                nV4 = clip(inVertices[i + 2], nV2, plane, s);

                            }

                            if(!nV1 || !nV2 || !nV3 || !nV4) {
                                throw new Error('Failed to construct decal.');
                            }

                            outVertices.push(nV1.clone());
                            outVertices.push(nV2.clone());
                            outVertices.push(nV3);

                            outVertices.push(nV4);
                            outVertices.push(nV3.clone());
                            outVertices.push(nV2.clone());

                            break; }

                        case 2: {

                            // two vertices lies outside of the plane, perform clipping

                            if(!v1Out) {

                                nV1 = inVertices[i].clone();
                                nV2 = clip(nV1, inVertices[i + 1], plane, s);
                                nV3 = clip(nV1, inVertices[i + 2], plane, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);

                            }

                            if(!v2Out) {

                                nV1 = inVertices[i + 1].clone();
                                nV2 = clip(nV1, inVertices[i + 2], plane, s);
                                nV3 = clip(nV1, inVertices[i], plane, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);

                            }

                            if(!v3Out) {

                                nV1 = inVertices[i + 2].clone();
                                nV2 = clip(nV1, inVertices[i], plane, s);
                                nV3 = clip(nV1, inVertices[i + 1], plane, s);
                                outVertices.push(nV1);
                                outVertices.push(nV2);
                                outVertices.push(nV3);

                            }

                            break; }

                        case 3: {

                            // the entire face lies outside of the plane, so let's discard the corresponding vertices

                            break; }

                    }

                }

                return outVertices;

            }

            function clip(v0: DecalVertex, v1: DecalVertex, p: THREE.Vector3, s: number): DecalVertex {

                const d0 = v0.position.dot(p) - s;
                const d1 = v1.position.dot(p) - s;

                const s0 = d0 / (d0 - d1);

                const v = new DecalVertex(
                    new THREE.Vector3(
                        v0.position.x + s0 * (v1.position.x - v0.position.x),
                        v0.position.y + s0 * (v1.position.y - v0.position.y),
                        v0.position.z + s0 * (v1.position.z - v0.position.z)
                    ),
                    new THREE.Vector3(
                        v0.normal.x + s0 * (v1.normal.x - v0.normal.x),
                        v0.normal.y + s0 * (v1.normal.y - v0.normal.y),
                        v0.normal.z + s0 * (v1.normal.z - v0.normal.z)
                    )
                );

                // need to clip more values (texture coordinates)? do it this way:
                // intersectpoint.value = a.value + s * (b.value - a.value);

                return v;

            }

        }

	}

    
    class DecalVertex {

        position: THREE.Vector3;
        normal: THREE.Vector3;

        constructor(position: THREE.Vector3, normal: THREE.Vector3) {
            this.position = position;
            this.normal = normal;
        }

        clone() {
            return new DecalVertex(this.position.clone(), this.normal.clone());
        }

    }


}


