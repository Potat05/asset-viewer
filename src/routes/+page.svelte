<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import Directory from "../components/Directory.svelte";
    import Dropzone from "../components/Dropzone.svelte";
    import { tabsStore } from "./stores";
    import TabListItem from "../components/TabListItem.svelte";
    import TabContentItem from "../components/TabContentItem.svelte";
    import Viewer_Markdown from "../components/viewers/basic/Markdown.svelte";



    let tabsListContainer: HTMLDivElement;
    let tabsContentContainer: HTMLDivElement;

    let tabsListItems: TabListItem[] = [];
    let tabsContentItems: TabContentItem[] = [];





    onMount(() => {

        tabsStore.set({
            listContainer: tabsListContainer,
            contentContainer: tabsContentContainer,
            listItems: tabsListItems,
            contentItems: tabsContentItems
        });



        const tabListItem = new TabListItem({
            target: tabsListContainer,
            props: {
                name: 'Information',
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

        new Viewer_Markdown({
            // @ts-ignore
            target: tabContentItem.slot,
            props: {
                entry: new fsUtils.fsFile_Fetch('/docs/usage.md', null)
            }
        });

        tabsListItems.push(tabListItem);
        tabsContentItems.push(tabContentItem);

    });



    function onSelect(id: number) {
        tabsListItems.forEach(tabListItem => {
            tabListItem.selected = (tabListItem.id == id);
        });
        tabsContentItems.forEach(tabContentItem => {
            tabContentItem.selected = (tabContentItem.id == id);
        });
    }



    function dropEntry(ev: { detail: fsFile | fsDirectory; }) {

        const dir = ev.detail;

        if(dir.type != fsEntry.Directory) {
            console.warn('Drop entry must be directory.');
            return;
        }



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
                dir
            }
        });

        tabsListItems.push(tabListItem);
        tabsContentItems.push(tabContentItem);

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
