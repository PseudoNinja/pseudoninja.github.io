class DataService {
    _data: Object[];

    constructor(data: Array<Object> = new Array<Object>()) {
        this._data = data;
    }

    get(): Array<Object> {
        return this._data;
    }
}

class DataServiceFactory {
    static GetDataService(data: Array<Object>) {
        return new DataService(data);
    }
}

export { DataService, DataServiceFactory };
