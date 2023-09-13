
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { parseMidi } from "$lib/midi/midi";
    import { MidiNote, MidiPlayer } from "$lib/midi/player";
    import { onDestroy, onMount } from "svelte";
    import OnRemoved from "../../OnRemoved.svelte";

    export let entry: fsFile;

    let player: MidiPlayer;
    let playerCurrentTick: number = 0;

    let sounds: SoundPlayer;

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

        sounds.stopAll();

        clearTimeout(playerTimeout);
    }



    class SoundPlayer {

        ctx: AudioContext = new AudioContext();

        sounds: { gain: GainNode, osc: OscillatorNode, note: MidiNote, channel: number, track: number }[] = [];

        static midiNoteToFreq(value: number): number {
            return 440 * (2 ** ((value - 69) / 12));
        }

        start(note: MidiNote, velocity: number, channel: number, track: number): void {
            const gain = this.ctx.createGain();
            gain.connect(this.ctx.destination);
            // Prevent audio popping.
            gain.gain.value = 0.0001;
            gain.gain.exponentialRampToValueAtTime(0.0005 * velocity, this.ctx.currentTime + 0.01);
            
            const osc = this.ctx.createOscillator();
            osc.connect(gain);
            osc.type = 'triangle';
            osc.frequency.value = SoundPlayer.midiNoteToFreq(note.value);
            osc.start();

            this.sounds.push({ gain, osc, note, channel, track });
        }

        stop(note: MidiNote, channel: number, track: number): void {

            const soundIndex = this.sounds.findIndex(s => s.note.value == note.value && s.channel == channel && s.track == track);

            if(soundIndex == -1) {
                return;
            }

            const sound = this.sounds.splice(soundIndex, 1)[0];

            const { gain, osc } = sound;

            // Prevent audio popping.
            gain.gain.setValueAtTime(gain.gain.value, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.1);

            setTimeout(() => {
                gain.disconnect();
                osc.stop();
                osc.disconnect();
            }, 100);

        }

        stopAll() {
            while(this.sounds.length > 0) {
                const sound = this.sounds[0];
                this.stop(sound.note, sound.channel, sound.track);
            }
        }

    }



    onMount(async () => {

        const parsed = parseMidi(await entry.buffer());
        player = new MidiPlayer(parsed);

        sounds = new SoundPlayer();

        player.addEventListener('note', async (note, velocity, channel, track) => {

            if(velocity > 0) {

                sounds.start(note, velocity, channel, track);

            } else {

                sounds.stop(note, channel, track);

            }

        });

    });

</script>

<OnRemoved on:remove={() => {
    stop();
    player.destroyDispatcher();
}} />

{#if player}

    {#if !playing}
        <button on:click={start}>Play</button>
    {:else}
        <button on:click={stop}>Pause</button>
    {/if}

    <progress value={Math.floor(playerCurrentTick / player.totalTicks * 100)} max={100}></progress>

{/if}
