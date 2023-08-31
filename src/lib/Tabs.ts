
import { writable, type Writable } from "svelte/store";
import TabListItem from "../components/TabListItem.svelte";
import TabContentItem from "../components/TabContentItem.svelte";
import { Utils } from "./Utils";



type Tabs = {
    listContainer: HTMLDivElement;
    contentContainer: HTMLDivElement;
    items: {
        id: number;
        listItem: TabListItem;
        contentItem: TabContentItem;
    }[];
    selected: number | null;
};



export const TabsStore: Writable<Tabs> = writable();



let tabs: Tabs;
TabsStore.subscribe(t => tabs = t);



function selectTab(id: number | null) {

    if(tabs.items.every(item => item.id != id)) {
        throw new Error('Attempted to select invalid tab.');
    }

    tabs.selected = id;
    tabs.items.forEach(item => {
        item.listItem.selected = (item.id == tabs.selected);
        item.contentItem.selected = (item.id == tabs.selected);
    });
}

function closeTab(id: number) {

    const closeIndex = tabs.items.findIndex(item => item.id == id);

    if(closeIndex == -1) {
        throw new Error('Attempted to close invalid tab.');
    }

    if(tabs.selected == id) {
        selectTab(tabs.items[closeIndex - 1].id);
    }

    const removed = tabs.items.splice(closeIndex, 1);

    removed.forEach(rem => {
        rem.listItem.$destroy();
        rem.contentItem.$destroy();
    });

}





interface AddTabOptions {
    name: string;
    icon: string | null;
    /**
     * @default true  
     */
    autoSelect?: boolean;
    /**
     * @default true  
     */
    closable?: boolean;
}



/**
 * @returns Target to add tab content to.  
 */
export function addTab(options: AddTabOptions): HTMLDivElement {

    const id = Utils.getID();

    const listItem = new TabListItem({
        target: tabs.listContainer,
        props: {
            name: options.name, icon: options.icon, id, closable: (options.closable ?? true)
        }
    });

    listItem.$on('tab_select', ev => {
        selectTab(ev.detail);
    });

    listItem.$on('tab_close', ev => {
        closeTab(ev.detail);
    });

    const contentItem = new TabContentItem({
        target: tabs.contentContainer,
        props: {
            id
        }
    });

    tabs.items.push({ listItem, contentItem, id });

    if((options.autoSelect ?? true) || tabs.selected == null) {
        selectTab(id);
    }

    const slot = contentItem.slot;

    if(!slot) {
        throw new Error('Failed to create slot for tab.');
    }

    return slot;

}


