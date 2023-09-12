
import { fsUtils, type fsDirectory, type fsFile } from "$lib/FileSystem";
import { addTab } from "./Tabs";
import { Utils } from "./Utils";
import { viewerRegistry } from "./Viewers";



// TODO: Refactor this interface, it's dumb in its current state.
export interface Viewer {

    namespace: string;
    priority: number;

    isValid?: (entry: fsFile | fsDirectory) => Promise<boolean>;
    transform?: (entry: fsFile | fsDirectory) => Promise<fsFile | fsDirectory | null>;
    createViewer?: (entry: fsFile | fsDirectory, target: Element | Document | ShadowRoot) => Promise<void>;
    getIcon?: ((entry: fsFile | fsDirectory) => Promise<string | null>);

}

export interface Viewable {
    viewer: null | Viewer;
}



export async function findViewers(entry: fsFile | fsDirectory) {

    if(entry.viewer != null) return;

    let viewers = await viewerRegistry.getAllImports(entry);

    viewers = await Utils.asyncFilter(viewers, async viewer => viewer.isValid ? await viewer.isValid(entry) : true);

    const viewer = viewers.sort((a, b) => b.priority - a.priority).at(0);

    if(!viewer) return;

    entry.viewer = viewer;

    console.debug(`Found viewer "${entry.viewer.namespace}" for "${fsUtils.getPath(entry)}"`);

    if(entry.viewer.transform) {
        const transform = await entry.viewer.transform(entry);
        await fsUtils.transform(entry, transform);
    }

}



export async function openViewer(entry: fsFile | fsDirectory) {
    
    const viewer = entry.viewer;
    
    if(viewer == null) return;

    if(viewer.createViewer) {
    
        console.debug(`Opening viewer for "${fsUtils.getPath(entry)}"`, entry);

        viewer.createViewer(entry, addTab({
            name: entry.name,
            icon: viewer.getIcon ? await viewer.getIcon(entry) : null
        }));

    }

}

export async function viewerIcon(entry: fsFile | fsDirectory): Promise<string | null> {

    const viewer = entry.viewer;

    if(viewer == null) return null;

    if(viewer.getIcon) {
        return await viewer.getIcon(entry);
    }

    return null;

}


