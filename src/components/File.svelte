
<script lang="ts">
    import { fsUtils, type fsFile } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import { viewerContainerStore } from "../routes/stores";
    import { viewerRegistry } from "$lib/viewer/Viewer";

    export let file: fsFile;

    let viewerContainer: Element;

    viewerContainerStore.subscribe(elem => {
        viewerContainer = elem;
    });

    function open() {

        console.debug(`Opened "${fsUtils.getPath(file)}"`, file);

        const viewer = file.viewer;

        if(viewer == null) return;

        viewer.createViewer(file, viewerContainer);

    }



    
    onMount(async () => {

        console.debug(`Finding viewer for "${fsUtils.getPath(file)}"`);

        if(file.viewer == null) {
            for(const viewer of viewerRegistry) {
                if(await viewer.isValid(file)) {
                    file.viewer = viewer;
                    break;
                }
            }

            if(file.viewer != null) {

                const transform = await file.viewer.transform(file);

                fsUtils.transform(file, transform);

            }

        }

    });

</script>



<style>

</style>



<div class="file-container">

    <button on:click={open}>{file.name}</button>

</div>
