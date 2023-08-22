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
* Advanced
    * Executable (Icon)
* Games
    * Minecraft
        * NBT viewer
        * World Viewer
    * Ren'Py game engine
        * Archive
        * Compiled code

## TODO Viewers

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

## TODO

* Github pages
* Dynamically load viewers
    * Instead of having every viewer loaded at once, have a list of file extensions and their viewers they go with then when a file is detected with one of those exensions load that viewer.

## Using These Things

[Svelte](https://svelte.dev/) as the framework.  
[Pako](https://www.npmjs.com/package/pako) the [zlib](https://www.zlib.net/) port for deflate compression.  
[Bootstrap](https://icons.getbootstrap.com/) for icons.  
[highlight.js](https://highlightjs.org/) for code highlighting.  
[three.js](https://threejs.org/), an easy to use 3D library.  
[Zod](https://zod.dev/) for schema validation.  

## Huge Help

[PE-bear](https://github.com/hasherezade/pe-bear/), Easy to use UI to explore executable (PE) files.  
[Kaitai Struct](http://formats.kaitai.io), A lot of file format specifications with block diagrams.  
[CPython](https://github.com/python/cpython), Has Python implementations of various things.  
