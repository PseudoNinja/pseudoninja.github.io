import { KeyValuePair } from "@/types/KeyValuePair";

/** Local Storage Obfuscation Service */
class StorageService {
    _storage: Storage;

    constructor(storage: Storage = new Storage()) {
        this._storage = storage;
    }

    /** Load Key Value Pair Data into storage
     * @param data {[KeyValuePair]} collection of string key value pairs
     * @param overwrite {boolean} overwrite existing data, defaults to `false`
     */
    load(data: Array<KeyValuePair>, overwrite: boolean = false): void {
        data.forEach((element) => {
            if (overwrite || !this.is(element.key)) {
                this.set(element.key, element.value);
            }
        });
    }

    /** Gets value assigned to key in storage
     * @param key {string} key to search storage for
     * @returns {string | null} if value is found it is returned as string else null indicates the key does not exists in storage
     */
    get(key: string): string | null {
        return this._storage.getItem(key);
    }

    /** store value in storage to key
     * @param key {string} key to assign value to in storage
     * @param value {string} value to be assiged to storage
     */
    set(key: string, value: string): void {
        this._storage.setItem(key, value);
    }

    /** Romove record from storage by key
     * @param key {string} Key to be removed from storage
     */
    remove(key: string): void {
        this._storage.removeItem(key);
    }

    /** Remove all values from Storage
     */
    clear(): void {
        this._storage.clear();
    }

    /** Determine if key exists in storage
     * @param key {string} Key to be determined if exists
     * @returns {boolean} true if key exists in storage; false if key does not exist in storage
     */
    is(key: string): boolean {
        return this.get(key) != null;
    }
}

/**
 * Local Storage Factory
 */
class StorageServiceFactory {
    /** Create new instance of Local Storage Service
     * @param storage {Storage} Storage Device to load into Local Storge Service; Defaults to browser local storage
     * @returns {StorageService}
     */
    static GetLocalStorageService(storage: Storage = localStorage) {
        return new StorageService(storage);
    }
}

export { StorageService, StorageServiceFactory };
