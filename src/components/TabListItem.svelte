<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();



    export let id: number;

    export let name: string;
    export let icon: string | null = null;

    export let selected: boolean = false;

</script>

<svelte:options accessors/>

<style>

    .tab-list-item {
        padding: 5px 10px 5px 10px;
        margin: 0 2px 0 2px;
        border-bottom: 2px solid black;

        display: flex;
        align-items: center;

        cursor: pointer;
    }

    .tab-icon {
        margin-right: 10px;
        max-height: 18px;
        padding: 2px;
    }

    .tab-remove-container {
        margin-left: 10px;
        max-height: 14px;
    }

    .tab-remove-container:hover {
        background-color: black;
        outline: 2px #111 solid;
    }

    .tab-remove-icon {
        max-height: 14px;
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
    on:click={() => dispatch('tab_select', id)}
>

    {#if icon}
        <img
            class="tab-icon"
            src={icon}
            alt="Tab List Icon"
        >
    {/if}

    {name}

    <div
        class="tab-remove-container"
        on:click={ev => {
            ev.stopPropagation();
            dispatch('tab_close', id);
        }}
    >
        <img
            class="tab-remove-icon"
            src="/asset-viewer/bootstrap-icons/x-lg.svg"
            alt="Remove Tab Icon"
        >
    </div>

</div>
