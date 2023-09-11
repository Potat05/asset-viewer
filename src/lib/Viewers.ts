
import type { Viewer } from "$lib/Viewer";
import { ImportRegistry } from "$lib/ImportRegistry";
import { fsEntry, type fsDirectory, type fsFile } from "./FileSystem";
import { languageRegistry } from "./Languages";



export const viewerRegistry = new ImportRegistry<fsFile | fsDirectory, Viewer>();





// Text Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && [
        'txt',
        'gitignore',
        'npmrc',
        'license',
        'cfg',
        'properties',
        'url',
        'conf',
        'config'
    ].includes(entry.name.split('.').pop()?.toLowerCase() ?? '');
}, () => import("$lib/viewers/basic/text"));

// Code Viewer
viewerRegistry.addRegistryItem(async entry => {
    return entry.type == fsEntry.File && await languageRegistry.valid({ type: 'filename', filename: entry.name });
}, () => import("$lib/viewers/basic/code"));

// Markdown Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && entry.name.toLowerCase().endsWith('.md');
}, () => import("$lib/viewers/basic/markdown"));

// Image Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && [
        'png',
        'jpg',
        'jpeg',
        'jfif',
        'tiff',
        'webp',
        'gif',
        'svg',
        'bmp'
    ].includes(entry.name.split('.').pop() ?? '');
}, () => import("$lib/viewers/basic/image"));

// Video Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && [
        'mp4',
        'mov',
        'webm',
        'mkv'
    ].includes(entry.name.split('.').pop() ?? '');
}, () => import("$lib/viewers/basic/video"))

// Zip Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && entry.name.endsWith('.zip');
}, () => import("$lib/viewers/basic/zip"));






// Executable Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && entry.name.endsWith('.exe');
}, () => import("$lib/viewers/advanced/executable"));





// MIDI Viewer
viewerRegistry.addRegistryItem(entry => {
    if(entry.type != fsEntry.File) return false;
    return entry.name.endsWith('.mid') || entry.name.endsWith('.midi');
}, () => import("$lib/viewers/midi/midi"));





// Minecraft NBT Viewer
viewerRegistry.addRegistryItem(async entry => {
    if(entry.type != fsEntry.File) return false;
    if(!entry.name.includes('.dat')) return false;
    const blob = await entry.blob();
    if(blob.size == 0) return true;

    const ident = await blob.slice(0, 2).arrayBuffer();

    return (new DataView(ident).getUint16(0, false) == 0x1F8B);
}, () => import("$lib/viewers/minecraft/nbt"));

// Minecraft World Viewer
viewerRegistry.addRegistryItem(async entry => {
    if(entry.type != fsEntry.Directory) return false;

    if(entry.parent != null) {
        if(
            !entry.parent.name.includes(entry.name) &&
            entry.parent.name != 'saves'
        ) return false;
    }

    return await entry.get('level.dat') !== null;
}, () => import("$lib/viewers/minecraft/world"));





// Ren'Py Archive Viewer
viewerRegistry.addRegistryItem(entry => {
    return entry.type == fsEntry.File && entry.name.endsWith('.rpa');
}, () => import("$lib/viewers/renpy/archive"));

// Ren'Py Compiled Code Viewer
viewerRegistry.addRegistryItem(entry => {
    if(entry.type != fsEntry.File) return false;
    return entry.name.endsWith('.rpyc') || entry.name.endsWith('.rpy');
}, () => import("$lib/viewers/renpy/script"));





// Source Engine VTF Texture Viewer
viewerRegistry.addRegistryItem(async entry => {
    if(entry.type != fsEntry.File) return false;
    if(!entry.name.includes('.vtf')) return false;
    const blob = await entry.blob();
    if(blob.size == 0) return true;

    const ident = await blob.slice(0, 4).text();

    return (ident == 'VTF\0');
}, () => import("$lib/viewers/source-engine/vtf"));


