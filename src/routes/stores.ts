
import { writable, type Writable } from "svelte/store";
import type TabListItem from "../components/TabListItem.svelte";
import type TabContentItem from "../components/TabContentItem.svelte";



export const tabsStore: Writable<{
    listContainer: HTMLDivElement;
    contentContainer: HTMLDivElement;
    listItems: TabListItem[]
    contentItems: TabContentItem[];
}> = writable();
