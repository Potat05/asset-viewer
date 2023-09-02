
<script lang="ts">
    import "highlight.js/styles/atom-one-dark.css";

</script>

<svelte:head>

    <style>

        body {
            padding: 0;
            margin: 0;
            background-color: #111;

            overflow-x: hidden;
        }

    </style>

    <title>Asset Viewer</title>

</svelte:head>

<style>
    .app {
        width: 100vw;
        height: 100vh;
    }
</style>

<div class="app">
    <slot />
</div>
