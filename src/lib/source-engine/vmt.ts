
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
import * as zod from "zod";
import { KeyValues } from "./keyvalues";
import { VTF } from "./vtf";
import * as THREE from "three";



const MaterialBASE = zod.object({
    shader: zod.string()
});

const Material_LightMappedGeneric = zod.object({
    $basetexture: zod.string(),
    $translucent: zod.enum([ '0', '1' ]).transform(val => val == '1').default('0')
});



async function getTexture(dir: fsDirectory, path: string): Promise<THREE.Texture> {
    path = `materials/${path.toLowerCase()}.vtf`;

    const file = await dir.get(path);
    if(!file || file.type != fsEntry.File) {
        throw new Error(`Could not find texture "${path}"`);
    }

    const vtf = new VTF(await file.buffer());
    
    return vtf.getTHREETexture();
}

async function getShader(path: string, params: THREE.ShaderMaterialParameters): Promise<THREE.ShaderMaterial> {
    const vertFile = new fsUtils.fsFile_Fetch(`${path}.vert`, null);
    const fragFile = new fsUtils.fsFile_Fetch(`${path}.frag`, null);
    
    const vert = await (await vertFile.blob()).text();
    const frag = await (await fragFile.blob()).text();

    const shader = new THREE.ShaderMaterial({
        ...params,
        fragmentShader: frag,
        vertexShader: vert
    });

    return shader;

}



class VMT {

    file: fsFile;

    constructor(file: fsFile) {
        this.file = file;
    }

    keyValues: unknown | undefined;

    async getKeyValues(): Promise<unknown> {
        // Oh lord, I'm so sorry for what I have created.
        if(this.keyValues !== undefined) return this.keyValues;
        const str = await (await this.file.blob()).text();
        const parsed = KeyValues.parse(str, { lowerKeys: true });
        if(typeof parsed != 'object' || !parsed) {
            throw new Error('Failed to parse VMT.');
        }
        const keys = Object.keys(parsed);
        if(keys.length != 1) {
            throw new Error('Failed to parse VMT.');
        }
        const shader = keys[0];
        const values = Object.values(parsed);
        if(values.length != 1) {
            throw new Error('Failed to parse VMT.');
        }
        const params = values[0];
        if(typeof params != 'object' || !params) {
            throw new Error('Failed to parse VMT.');
        }
        this.keyValues = { shader, ...params };
        return this.keyValues;
    }

    async parse<Schema extends Zod.ZodType>(schema: Schema): Promise<zod.TypeOf<Schema>> {
        return schema.parse(await this.getKeyValues());
    }

    async getShader(dir: fsDirectory): Promise<THREE.ShaderMaterial> {
        
        const shader = (await this.parse(MaterialBASE)).shader.toLowerCase();

        switch(shader) {

            case 'lightmappedgeneric': {

                const params = await this.parse(Material_LightMappedGeneric);

                return getShader('source-engine/shaders/LightMappedGeneric', {
                    uniforms: {
                        u_basetexture: {
                            value: await getTexture(dir, params.$basetexture)
                        }
                    },
                    transparent: params.$translucent
                });

                break; }

            default: {

                throw new Error(`Unimplemented shader "${shader}"`);

                break; }

        }

    }

}


