
import { fsUtils, type fsDirectory, type fsFile } from "$lib/FileSystem";





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





export async function findViewer(entry: fsFile | fsDirectory): Promise<Viewer | null> {

    if(entry.viewer != null) return null;

    for(const viewer of viewerRegistry) {
        if(await viewer.isValid(entry)) {
            entry.viewer = viewer;
            break;
        }
    }

    if(entry.viewer != null) {
        
        console.debug(`Found viewer "${entry.viewer.namespace}" for "${fsUtils.getPath(entry)}"`);

        const transform = await entry.viewer.transform(entry);

        fsUtils.transform(entry, transform);

    }

    return entry.viewer;

}



let viewerContainer: Element;

viewerContainerStore.subscribe(elem => {
    viewerContainer = elem;
});

export function openViewer(entry: fsFile | fsDirectory) {
    
    console.debug(`Opening viewer for "${fsUtils.getPath(entry)}"`, entry);

    const viewer = entry.viewer;

    if(viewer == null) return;

    viewer.createViewer(entry, viewerContainer);

}





import TextViewer from "../viewers/basic/Text";
createNewViewer(TextViewer);

import ImageViewer from "../viewers/basic/Image";
import { viewerContainerStore } from "../../routes/stores";
createNewViewer(ImageViewer);


