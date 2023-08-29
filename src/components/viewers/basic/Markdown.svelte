
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import * as marked from "marked";
    import { onDestroy, onMount } from "svelte";

    export let entry: fsFile;

    let container: HTMLDivElement;

    let observer: MutationObserver;

    onMount(() => {

        observer = new MutationObserver(() => {

            // Allow hrefs to header selectors inside the readme.

            const idSelectors: NodeListOf<HTMLHeadingElement> = container.querySelectorAll('h1, h2, h3, h4, h5, h6');

            idSelectors.forEach(selector => {
                selector.id = selector.innerText.toLowerCase();
            });

        });

        observer.observe(container, { childList: true });

    });
    
    onDestroy(() => {
        observer?.disconnect();
    });

</script>

<style>

    .markdown-container {
        background-color: #282c34;
        color: #abb2bf;
        overflow-x: auto;
        width: 100vw;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .markdown-scroll {
        display: inline-block;
        max-width: 100vw;
    }

    /* I'm so sorry. */
    .markdown-container :global(h1), .markdown-container :global(h2), .markdown-container :global(h3), .markdown-container :global(h4), .markdown-container :global(h5), .markdown-container :global(h6) {
        color: white;
    }

    .markdown-container :global(pre) {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }

    .markdown-container :global(a) {
        color: #2f81f7;
        text-decoration-color: #2f81f7;
    }

</style>

<div class="markdown-container">
    <div class="markdown-scroll" bind:this={container}>
        {#await entry.blob() then blob}
            {#await blob.text() then text}
                {@html marked.parse(text)}
            {/await}
        {/await}
    </div>
</div>