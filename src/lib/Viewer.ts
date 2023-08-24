
import { fsUtils, type fsDirectory, type fsFile } from "$lib/FileSystem";
import TabListItem from "../components/TabListItem.svelte";
import TabContentItem from "../components/TabContentItem.svelte";
import { tabsStore } from "../routes/stores";




export interface Viewer {

    namespace: string;
    priority: number;

    isValid: (entry: fsFile | fsDirectory) => Promise<boolean>;
    transform?: (entry: fsFile | fsDirectory) => Promise<fsFile | fsDirectory | null>;
    createViewer?: (entry: fsFile | fsDirectory, target: Element | Document | ShadowRoot) => Promise<void>;
    getIcon?: ((entry: fsFile | fsDirectory) => Promise<string | null>);

}

export interface Viewable {
    viewer: null | Viewer;
}



export let viewerRegistry: Viewer[] = [];



export function createNewViewer(viewer: Viewer) {
    viewerRegistry.push(viewer);

    viewerRegistry = viewerRegistry.sort((a, b) => b.priority - a.priority);
}





export async function findViewers(entry: fsFile | fsDirectory) {

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
            await fsUtils.transform(entry, transform);
        }

    }

}



let tabs: {
    listContainer: HTMLDivElement;
    contentContainer: HTMLDivElement;
    listItems: TabListItem[]
    contentItems: TabContentItem[];
};

tabsStore.subscribe(t => tabs = t);

function onSelect(id: number) {
    tabs.listItems.forEach(tabListItem => {
        tabListItem.selected = (tabListItem.id == id);
    });
    tabs.contentItems.forEach(tabContentItem => {
        tabContentItem.selected = (tabContentItem.id == id);
    });
}

export async function openViewer(entry: fsFile | fsDirectory) {
    
    const viewer = entry.viewer;
    
    if(viewer == null) return;

    if(viewer.createViewer) {
    
        console.debug(`Opening viewer for "${fsUtils.getPath(entry)}"`, entry);




        
        const tabListItem = new TabListItem({
            target: tabs.listContainer,
            props: {
                name: entry.name,
                icon: viewer.getIcon ? await viewer.getIcon(entry) : null,
                onSelect,
                selected: true
            }
        });

        const tabContentItem = new TabContentItem({
            target: tabs.contentContainer,
            props: {
                // @ts-ignore
                id: tabListItem.id,
                selected: true
            }
        });

        // @ts-ignore
        viewer.createViewer(entry, tabContentItem.slot);

        tabs.listItems.push(tabListItem);
        tabs.contentItems.push(tabContentItem);

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





import TextViewer from "./viewers/basic/text";
createNewViewer(TextViewer);

import ImageViewer from "./viewers/basic/image";
createNewViewer(ImageViewer);

import VideoViewer from "./viewers/basic/video";
createNewViewer(VideoViewer);

import CodeViewer from "./viewers/basic/code";
createNewViewer(CodeViewer);

import ZipViewer from "./viewers/basic/zip";
createNewViewer(ZipViewer);



import ExecutableViewer from "./viewers/advanced/executable";
createNewViewer(ExecutableViewer);



import RenPyArchiveViewer from "./viewers/renpy/archive";
createNewViewer(RenPyArchiveViewer);

import RenPyScriptViewer from "./viewers/renpy/script";
createNewViewer(RenPyScriptViewer);



import MinecraftNBTViewer from "./viewers/minecraft/nbt";
createNewViewer(MinecraftNBTViewer);

import MinecraftWorldViewer from "./viewers/minecraft/world";
createNewViewer(MinecraftWorldViewer);
