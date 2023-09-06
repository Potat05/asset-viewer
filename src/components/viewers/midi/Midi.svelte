
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { parseMidi } from "$lib/midi/midi";
    import { MidiNote, MidiPlayer } from "$lib/midi/player";
    import { onDestroy, onMount } from "svelte";

    export let entry: fsFile;

    let player: MidiPlayer;
    let playerCurrentTick: number = 0;

    let playing: boolean = false;

    let playerTimeout: number = -1;

    function playerStep() {
        if(!playing) return;

        playerCurrentTick = player.currentTick;
        const ms = player.tick();

        clearTimeout(playerTimeout);
        playerTimeout = setTimeout(() => playerStep(), ms);
    }

    function start() {
        playing = true;

        playerStep();
    }

    function stop() {
        playing = false;

        // forEach doesn't work here????
        while(sounds.length > 0) {
            const sound = sounds[0];
            stopSound(sound.note, sound.channel, sound.track);
        }

        clearTimeout(playerTimeout);
    }



    let ctx: AudioContext;

    let sounds: { gain: GainNode, osc: OscillatorNode, note: MidiNote, channel: number, track: number }[];

    function midiNoteToFreq(value: number): number {
        return 440 * (2 ** ((value - 69) / 12));
    }

    function startSound(note: MidiNote, velocity: number, channel: number, track: number) {

        const gain = ctx.createGain();
        gain.connect(ctx.destination);
        // Prevent audio popping.
        gain.gain.value = 0.0001;
        gain.gain.exponentialRampToValueAtTime(0.0005 * velocity, ctx.currentTime + 0.01);
        
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.type = 'triangle';
        osc.frequency.value = midiNoteToFreq(note.value);
        osc.start();

        sounds.push({ gain, osc, note, channel, track });

    }

    function stopSound(note: MidiNote, channel: number, track: number) {

        const soundIndex = sounds.findIndex(s => s.note.value == note.value && s.channel == channel && s.track == track);

        if(soundIndex == -1) {
            return;
        }

        const sound = sounds.splice(soundIndex, 1)[0];

        const { gain, osc } = sound;

        // Prevent audio popping.
        gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

        setTimeout(() => {
            gain.disconnect();
            osc.stop();
            osc.disconnect();
        }, 100);

    }



    onMount(async () => {

        const parsed = parseMidi(await entry.buffer());
        player = new MidiPlayer(parsed);

        ctx = new AudioContext();
        sounds = [];

        player.addEventListener('note', async (note, velocity, channel, track) => {

            if(velocity > 0) {

                startSound(note, velocity, channel, track)

            } else {

                stopSound(note, channel, track);

            }

        });

    });

    onDestroy(() => {
        // TODO - This doesn't work.
        stop();
        player.destroyDispatcher();
    });

</script>

{#if player}

    {#if !playing}
        <button on:click={start}>Play</button>
    {:else}
        <button on:click={stop}>Pause</button>
    {/if}

    <progress value={Math.floor(playerCurrentTick / player.totalTicks * 100)} max={100}></progress>

{/if}
