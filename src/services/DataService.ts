import { FileService } from "./FileService";

class DataService {
    data: Object = {};

    constructor(data: Object = {}) {
        this._parse(data);
    }

    private _parse(data: Object = {}) {
        this.data = data;
    }

    loadFromFile(filepath: string) {
        try {
            if (filepath.trim().length == 0) {
                throw new Error("filepath cannot be empty");
            }
            if (!FileService.FileExists(filepath)) {
                throw new Error("file does not exist");
            }

            let rawData: Object = FileService.Parse(filepath);
            this._parse(rawData);
        } catch (error) {
            console.error("DataService.loadFromFile() failed", error);
        }
    }

    isEmpty(): boolean {
        return Object.keys.length == 0;
    }
}

class DataServiceFactory {
    static GetDataService(data: Object = {}) {
        return new DataService(data);
    }

    static LoadDataServiceFromFile(filepath: string) {
        let dataService = new DataService();
        dataService.loadFromFile(filepath);
        return dataService;
    }
}

export { DataServiceFactory, DataService };
