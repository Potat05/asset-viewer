<script lang="ts">
    import { TAGS, type Tag } from "$lib/minecraft/nbt";

    export let entry: Tag[keyof Tag];

</script>



<style>

    * {
        color: white;
    }

    .nbt-container {
        display: flex;
    }

    .nbt-icon {
        display: block;
        background-image: url("/minecraft/nbt-atlas.png");
        background-size: cover;
        width: 1rem;
        height: 1rem;
    }

    .nbt-compound {
        display: flex;
        flex-direction: column;
        margin-left: 32px;
    }

    .nbt-compound-kv {
        display: flex;
    }

</style>

<div class="nbt-container">

    <span class="nbt-icon" style="background-position-y: -{entry.tag}rem;"></span>

    {#if entry.tag == TAGS.Byte || entry.tag == TAGS.Short || entry.tag == TAGS.Int || entry.tag == TAGS.Long || entry.tag == TAGS.Float || entry.tag == TAGS.Double}

        {entry.value}

    {:else if entry.tag == TAGS.String}

        "{entry.value}"

    {:else if entry.tag == TAGS.Compound}

        <div class="nbt-compound">

            {#each Object.entries(entry.value) as [ key, value ]}
            
                <div class="nbt-compound-kv">
                    {key}: <svelte:self entry={value}/>
                </div>

            {/each}

        </div>

    {/if}

</div>