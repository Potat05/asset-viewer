
import type { fsDirectory, fsFile } from "$lib/FileSystem";





export interface Viewer {

    namespace: string;
    priority: number;

    isValid: (entry: fsFile | fsDirectory) => Promise<boolean>;
    transform: (entry: fsFile | fsDirectory) => Promise<fsFile | fsDirectory | null>;
    createViewer: (entry: fsFile | fsDirectory, target: Element | Document | ShadowRoot) => Promise<void>;
    
}



export let viewerRegistry: Viewer[] = [];



export function createNewViewer(viewer: Viewer) {
    viewerRegistry.push(viewer);

    viewerRegistry = viewerRegistry.sort((a, b) => b.priority - a.priority);
}



// TODO - Is this needed?
import NoneViewer from "../viewers/None";
createNewViewer(NoneViewer);



import TextViewer from "../viewers/basic/Text";
createNewViewer(TextViewer);


