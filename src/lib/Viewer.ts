
import { fsUtils, type fsDirectory, type fsFile } from "$lib/FileSystem";
import { viewerContainerStore } from "../routes/stores";





export interface Viewer {

    namespace: string;
    priority: number;

    isValid: (entry: fsFile | fsDirectory) => Promise<boolean>;
    transform: ((entry: fsFile | fsDirectory) => Promise<fsFile | fsDirectory | null>) | null;
    createViewer: ((entry: fsFile | fsDirectory, target: Element | Document | ShadowRoot) => Promise<void>) | null;
    
}



export let viewerRegistry: Viewer[] = [];



export function createNewViewer(viewer: Viewer) {
    viewerRegistry.push(viewer);

    viewerRegistry = viewerRegistry.sort((a, b) => b.priority - a.priority);
}





export async function findViewer(entry: fsFile | fsDirectory) {

    if(entry.viewer != null) return;

    for(const viewer of viewerRegistry) {
        if(await viewer.isValid(entry)) {
            entry.viewer = viewer;
            break;
        }
    }

    if(entry.viewer != null) {
        
        console.debug(`Found viewer "${entry.viewer.namespace}" for "${fsUtils.getPath(entry)}"`);

        if(entry.viewer.transform) {
            const transform = await entry.viewer.transform(entry);
            fsUtils.transform(entry, transform);
        }

    }

}



let viewerContainer: Element;

viewerContainerStore.subscribe(elem => {
    viewerContainer = elem;
});

export function openViewer(entry: fsFile | fsDirectory) {
    
    console.debug(`Opening viewer for "${fsUtils.getPath(entry)}"`, entry);

    const viewer = entry.viewer;

    if(viewer == null) return;

    viewer.createViewer?.(entry, viewerContainer);

}





import TextViewer from "./viewers/basic/text";
createNewViewer(TextViewer);

import ImageViewer from "./viewers/basic/image";
createNewViewer(ImageViewer);



import RenPyArchiveViewer from "./viewers/renpy/archive";
createNewViewer(RenPyArchiveViewer);
