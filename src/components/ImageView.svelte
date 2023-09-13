<script lang="ts">
    import { fsUtils } from "$lib/FileSystem";
    import { ImageUtils } from "$lib/ImageUtils";
    import { onMount } from "svelte";


    export let src: string;
    export let title: string | undefined = undefined;
    export let alt: string | undefined = undefined;
    export let size: number | undefined = undefined;

    let img: HTMLImageElement;
    let width: number = 0;
    let height: number = 0;

    onMount(async () => {
        
        await ImageUtils.awaitImageLoad(img);

        width = img.width;
        height = img.height;
        
    });

</script>

<style>

    /** I hate CSS, I give up trying to make this look pretty. */

    .image-container-container {
        padding: 20px;
    }

    * {
        color: white;
    }

    .image-container {
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
    }

    .image-info {
        display: flex;

        padding: 0px 0px 10px 0px;
    }

    .image-info > * {
        padding: 0px 10px 0px 10px;
    }

    .image {
        background-image: url(/transparent-background.png);
        background-attachment: fixed;
    }

</style>

<div class="image-container-container">
    
    <div class="image-container">
    
        <div class="image-info">
    
            <div class="image-size">
                {width}x{height}
            </div>
    
            {#if title}
                <div class="image-title">
                    {title}
                </div>
            {/if}
    
            {#if size}
                <div class="image-size">
                    {fsUtils.formatSize(size)}
                </div>
            {/if}
    
        </div>
    
        <img
            class="image"
            {src}
            {alt}
            bind:this={img}
        />
    
    </div>

</div>
