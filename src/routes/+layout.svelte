
<script lang="ts">
    import atomOneDark from "svelte-highlight/styles/atom-one-dark"

</script>

<svelte:head>

    {@html atomOneDark}

    <style>

        body {
            padding: 0;
            margin: 0;
            background-color: #111;
        }

    </style>

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
