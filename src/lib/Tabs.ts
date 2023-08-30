
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
};



export const TabsStore: Writable<Tabs> = writable();



let tabs: Tabs;
TabsStore.subscribe(t => tabs = t);



function selectTab(id: number) {
    tabs.items.forEach(item => {
        item.listItem.selected = (item.id == id);
        item.contentItem.selected = (item.id == id);
    });
}



/**
 * @returns Target to add tab content to.  
 */
export function addTab(name: string, icon: string | null): HTMLDivElement {

    const id = Utils.getID();

    const listItem = new TabListItem({
        target: tabs.listContainer,
        props: {
            name, icon, id, onSelect: selectTab
        }
    });

    const contentItem = new TabContentItem({
        target: tabs.contentContainer,
        props: {
            id
        }
    });

    tabs.items.push({ listItem, contentItem, id });

    selectTab(id);

    // @ts-ignore
    return contentItem.slot;

}


