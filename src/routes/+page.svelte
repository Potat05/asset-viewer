<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import Directory from "../components/Directory.svelte";
    import Dropzone from "../components/Dropzone.svelte";
    import Viewer_Markdown from "../components/viewers/basic/Markdown.svelte";
    import { findViewers, openViewer } from "$lib/Viewer";
    import { TabsStore, addTab } from "$lib/Tabs";



    let tabsListContainer: HTMLDivElement;
    let tabsContentContainer: HTMLDivElement;



    onMount(async () => {

        TabsStore.set({
            listContainer: tabsListContainer,
            contentContainer: tabsContentContainer,
            items: [],
            selected: null
        });



        new Viewer_Markdown({
            target: addTab({
                name: 'Information',
                icon: '/asset-viewer/bootstrap-icons/info-circle.svg',
                closable: false
            }),
            props: {
                entry: new fsUtils.fsFile_Fetch('/asset-viewer/docs/usage.md', null)
            }
        });

    });



    function openDirectory(dir: fsDirectory) {

        new Directory({
            target: addTab({
                name: dir.name,
                icon: '/asset-viewer/bootstrap-icons/folder-fill.svg'
            }),
            props: {
                dir
            }
        });

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
            newEntry.viewer = entry.viewer;

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
