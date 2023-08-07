<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
    import { viewerRegistry } from "$lib/viewer/Viewer";
    import Directory from "../components/Directory.svelte";
    import Dropzone from "../components/Dropzone.svelte";



    let viewerContainer: HTMLDivElement;



    async function doStuff(dir: fsDirectory) {



        new Directory({
            target: viewerContainer,
            props: { dir }
        });



        // await fsUtils.forEachDeep(dir, async (path, entry) => {

        //     // console.log(`Evaluating "${path}"`);

            

        //     if(entry.viewer == null) {
        //         for(const viewer of viewerRegistry) {
        //             if(await viewer.isValid(entry)) {
        //                 entry.viewer = viewer;
        //                 break;
        //             }
        //         }

        //         if(entry.viewer != null) {

        //             const transform = await entry.viewer.transform(entry);

        //             fsUtils.transform(entry, transform);

        //         }

        //     }



        //     return true;

        // });



        // const file = await fsUtils.getDeep(dir, 'package.json');

        // file?.viewer?.createViewer(file, viewerContainer);


        console.log(dir);

    }


    function dropEntry(ev: { detail: fsFile | fsDirectory; }) {

        const directory = ev.detail;

        if(directory.type != fsEntry.Directory) {
            console.warn('Drop entry must be directory.');
            return;
        }

        doStuff(directory);

    }

</script>



<Dropzone
    on:dropentry={dropEntry}
/>



<div bind:this={viewerContainer}></div>


