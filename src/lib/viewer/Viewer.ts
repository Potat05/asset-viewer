
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


