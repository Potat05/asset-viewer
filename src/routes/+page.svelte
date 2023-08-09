<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import Directory from "../components/Directory.svelte";
    import Dropzone from "../components/Dropzone.svelte";
    import { viewerContainerStore } from "./stores";



    let viewerContainer: HTMLDivElement;



    onMount(() => {
        viewerContainerStore.set(viewerContainer);
    });



    function dropEntry(ev: { detail: fsFile | fsDirectory; }) {

        const dir = ev.detail;

        if(dir.type != fsEntry.Directory) {
            console.warn('Drop entry must be directory.');
            return;
        }
        
        console.log(dir);

        new Directory({
            target: viewerContainer,
            props: { dir }
        });

    }

</script>



<Dropzone
    on:dropentry={dropEntry}
/>



<div bind:this={viewerContainer}></div>


