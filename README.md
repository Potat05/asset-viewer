# [asset-viewer](https://potat05.github.io/asset-viewer/)

https://potat05.github.io/asset-viewer/

View and extract a wide variety of file types inside the browser.

Drag and drop a directory onto the window.

## Develop

1. Clone this repository
2. Install dependencies `npm install`
3. Run development server `npm run dev -- --start`

## Viewers

* Basic
    * Text
    * Image
    * Video
    * Code
    * Zip Archive
    * Markdown
* Advanced
    * Executable (Icon)
* Midi
    * Midi player
* Games
    * Minecraft
        * NBT viewer
        * World Viewer
    * Ren'Py game engine
        * Archive
        * Compiled code

## TODO Viewers

* Basic
    * Zip64 Archive Support
* Minecraft
    * World with resource pack
* Source engine
    * Map viewer
    * Texture viewer
    * Model viewer
* Unity engine
    * (I don't know anything about Unity so fill this out later.)
* Executable (PE)
    * x86 disassembler with [iced-x86](https://www.npmjs.com/package/iced-x86)
* Midi sequence
    * Visualization
    * Soundfont 2

## TODO

* Use $lib/ImportRegistry to dynamically load viewers.

## Using These Things

[Svelte](https://svelte.dev/) as the framework.  
[Pako](https://www.npmjs.com/package/pako) the [zlib](https://www.zlib.net/) port for deflate compression.  
[Bootstrap](https://icons.getbootstrap.com/) for icons.  
[highlight.js](https://highlightjs.org/) for code highlighting.  
[three.js](https://threejs.org/), an easy to use 3D library.  
[Zod](https://zod.dev/) for schema validation.  
[Marked](https://marked.js.org/) for markdown rendering.  

## Huge Help

[PE-bear](https://github.com/hasherezade/pe-bear/), Easy to use UI to explore executable (PE) files.  
[Kaitai Struct](http://formats.kaitai.io), A lot of file format specifications with block diagrams.  
[CPython](https://github.com/python/cpython), Has Python implementations of various things.  
[McGill University MIDI Documentation](http://www.music.mcgill.ca/~ich/classes/mumt306/StandardMIDIfileformat.html), Documentation for the MIDI file format.
[Valve Developer Community](https://developer.valvesoftware.com/wiki/Main_Page), An absurd amount of great documentation on Source engine related stuff.
