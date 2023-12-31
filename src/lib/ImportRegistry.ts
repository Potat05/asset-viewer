


type RegistryValidateFn<ValidateType> = (value: ValidateType) => (Promise<boolean> | boolean);
type RegistryImportFn<ImportType> = () => Promise<{ default: ImportType }>;

type RegistryItem<ValidateType, ImportType, ExtraData, IsImportSet extends boolean> = {
    isValid: RegistryValidateFn<ValidateType>,
    importfn: RegistryImportFn<ImportType>,
    import: IsImportSet extends true ? ImportType : (null | ImportType),
    extra: ExtraData
}



export class ImportRegistry<ValidateType, ImportType, ExtraData = void> {
    
    public items: RegistryItem<ValidateType, ImportType, ExtraData, false>[] = [];

    private async itemImport(item: RegistryItem<ValidateType, ImportType, ExtraData, false>): Promise<RegistryItem<ValidateType, ImportType, ExtraData, true>> {

        if(item.import === null) {
            item.import = (await item.importfn()).default;
        }

        return item as unknown as RegistryItem<ValidateType, ImportType, ExtraData, true>;

    }

    public async get(value: ValidateType): Promise<RegistryItem<ValidateType, ImportType, ExtraData, true> | null> {

        for(const item of this.items) {

            if(await item.isValid(value)) {

                return await this.itemImport(item);

            }

        }

        return null;

    }

    public async getImport(value: ValidateType): Promise<ImportType | null> {
        return (await this.get(value))?.import ?? null;
    }

    public async getAll(value: ValidateType): Promise<RegistryItem<ValidateType, ImportType, ExtraData, true>[]> {

        let items = [];

        for(const item of this.items) {

            if(await item.isValid(value)) {

                items.push(await this.itemImport(item));

            }

        }

        return items;

    }

    public async getAllImports(value: ValidateType): Promise<ImportType[]> {
        return (await this.getAll(value)).map(item => item.import);
    }

    public async valid(value: ValidateType): Promise<boolean> {

        for(const item of this.items) {
            if(item.isValid(value)) {
                return true;
            }
        }

        return false;

    }

    public addRegistryItem(isValid: (value: ValidateType) => (Promise<boolean> | boolean), importfn: () => Promise<{ default: ImportType }>, extra: ExtraData): void {
        this.items.push({
            isValid,
            importfn,
            import: null,
            extra: extra
        });
    }

}


