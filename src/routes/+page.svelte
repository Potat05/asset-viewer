<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import Directory from "../components/Directory.svelte";
    import Dropzone from "../components/Dropzone.svelte";
    import { tabsStore } from "./stores";
    import TabListItem from "../components/TabListItem.svelte";
    import TabContentItem from "../components/TabContentItem.svelte";
    import Viewer_Markdown from "../components/viewers/basic/Markdown.svelte";
    import { findViewers, openViewer } from "$lib/Viewer";
    import { fsDirectory_DataTransferDirectory } from "$lib/DataTransferDirectory";



    let tabsListContainer: HTMLDivElement;
    let tabsContentContainer: HTMLDivElement;

    let tabsListItems: TabListItem[] = [];
    let tabsContentItems: TabContentItem[] = [];





    onMount(async () => {

        tabsStore.set({
            listContainer: tabsListContainer,
            contentContainer: tabsContentContainer,
            listItems: tabsListItems,
            contentItems: tabsContentItems
        });



        const infoEntry = new fsUtils.fsFile_Fetch('/docs/usage.md', null);
        await findViewers(infoEntry);
        openViewer(infoEntry);

    });



    function onSelect(id: number) {
        tabsListItems.forEach(tabListItem => {
            tabListItem.selected = (tabListItem.id == id);
        });
        tabsContentItems.forEach(tabContentItem => {
            tabContentItem.selected = (tabContentItem.id == id);
        });
    }



    function openDirectory(dir: fsDirectory) {
        
        const tabListItem = new TabListItem({
            target: tabsListContainer,
            props: {
                name: dir.name,
                icon: '/asset-viewer/bootstrap-icons/folder-fill.svg',
                onSelect,
                selected: true
            }
        });

        const tabContentItem = new TabContentItem({
            target: tabsContentContainer,
            props: {
                // @ts-ignore
                id: tabListItem.id,
                selected: true
            }
        });

        new Directory({
            // @ts-ignore
            target: tabContentItem.slot,
            props: {
                dir: dir
            }
        });

        tabsListItems.push(tabListItem);
        tabsContentItems.push(tabContentItem);

    }



    async function dropEntry(ev: { detail: fsFile | fsDirectory; }) {

        const entry = ev.detail;

        if(entry.type == fsEntry.Directory) {

            openDirectory(entry);

        } else if(entry.type == fsEntry.File) {

            await findViewers(entry);

            if(!entry.viewer) {
                throw new Error('Dragged viewer has no viewer.');
            }

            const newEntry = await entry.viewer.transform?.(entry) ?? entry;
            newEntry.name = entry.name;
            newEntry.parent = entry.parent;

            if(newEntry.type == fsEntry.Directory) {
                openDirectory(newEntry);
            } else if(newEntry.type == fsEntry.File) {
                openViewer(newEntry);
            }

        }

    }

</script>



<Dropzone
    on:dropentry={dropEntry}
/>



<style>

    .tab-list-container {
        background-color: #222;
        color: white;
        display: flex;
    }

</style>



<div
    class="tab-list-container"
    bind:this={tabsListContainer}
/>

<div
    class="tab-content-container"
    bind:this={tabsContentContainer}
/>
