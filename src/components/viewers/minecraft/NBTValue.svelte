<script lang="ts">
    import { TAGS, type Tag } from "$lib/minecraft/nbt";

    export let entry: Tag[keyof Tag];

    // TODO: Clean this up a lot, The CSS in this is absolute trash.
    // I'm too lazy to even try to make it look good so here is just the template of it with the icons.

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

    .nbt-list {
        display: flex;
        flex-direction: column;
        margin-left: 32px;
    }

    .nbt-list-item {
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

    {:else if entry.tag == TAGS.List}

        <div class="nbt-list">

            {#each entry.value as value}

                <div class="nbt-list-item">
                    <svelte:self entry={value} />
                </div>

            {/each}

        </div>

    {:else if entry.tag == TAGS.Byte_Array || entry.tag == TAGS.Int_Array || entry.tag == TAGS.Long_Array}

        <div class="nbt-list">

            {#each entry.value as value}

                <div class="nbt-list-item">
                    {value}
                </div>

            {/each}

        </div>

    {/if}

</div>