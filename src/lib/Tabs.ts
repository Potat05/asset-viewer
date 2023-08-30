
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
    tabs.selected = id;
    tabs.items.forEach(item => {
        item.listItem.selected = (item.id == tabs.selected);
        item.contentItem.selected = (item.id == tabs.selected);
    });
}

function closeTab(id: number) {
    tabs.items = tabs.items.filter(item => {
        if(item.id != id) return true;

        item.listItem.$destroy();
        item.contentItem.$destroy();

        return false;
    });

    if(tabs.selected == id) {
        // TODO: Don't select first tab, Select the tab before the one that was deleted.
        selectTab(tabs.items[0].id ?? null)
    }
}



/**
 * @returns Target to add tab content to.  
 */
export function addTab(name: string, icon: string | null, autoSelect: boolean = true): HTMLDivElement {

    const id = Utils.getID();

    const listItem = new TabListItem({
        target: tabs.listContainer,
        props: {
            name, icon, id
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

    if(autoSelect || tabs.selected == null) {
        selectTab(id);
    }

    // @ts-ignore
    return contentItem.slot;

}


