<script lang="ts">
    import { onMount } from "svelte";



    export let id: number;

    export let name: string;
    export let icon: string | null = null;

    export let selected: boolean = false;

    export let onSelect: (id: number) => void;

    onMount(() => {
        if(selected) {
            onSelect(id);
        }
    })

</script>

<svelte:options accessors/>

<style>

    .tab-list-item {
        padding: 5px 10px 5px 10px;
        margin: 0 2px 0 2px;
        border-bottom: 2px solid black;

        display: flex;

        cursor: pointer;
    }

    img {
        margin-right: 10px;
        max-height: 18px;
    }

    .selected {
        border-bottom: 2px solid blue;
    }

</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="tab-list-item"
    class:selected
    on:click={() => onSelect(id)}
>

    {#if icon}
        <img src={icon} alt="Tab List Icon">
    {/if}

    {name}

</div>
