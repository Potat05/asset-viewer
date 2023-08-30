<script lang="ts">

    export let id: number;
    // Remove annoying warning.
    id;

    export let selected: boolean = false;

    export let slot: HTMLDivElement | null = null;

</script>

<svelte:options accessors/>

<style>

    :not(.selected) {
        display: none;
    }

</style>

<div
    class="tab-content-item"
    class:selected
    bind:this={slot}
/>
