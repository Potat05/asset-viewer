<script lang="ts">
    import { Utils } from "$lib/Utils";
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher();

    let elem: HTMLDivElement;

    let removeDetectID: string = Utils.getID().toString();

    onMount(() => {

        const observer = new MutationObserver(() => {
            if(document.body.querySelector(`[RemoveDetector="${removeDetectID}"]`) == null) {
                observer.disconnect();
                dispatcher('remove');
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true
        });

        elem.setAttribute('RemoveDetector', removeDetectID);

    });

</script>

<div
    bind:this={elem}
/>
