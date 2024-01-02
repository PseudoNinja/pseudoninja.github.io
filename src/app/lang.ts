/** Multi-Language Support Data Service **/

import { FileService } from "./file";

export interface LanguageData {
    title: string;
    description: string;
}

class LanguageDataService {
    static DEFAULT_LANGUAGE = "en-us";
    static DATA_PATH = "../data/";

    data: LanguageData;

    constructor(lang: string = LanguageDataService.DEFAULT_LANGUAGE) {
        let filepath = LanguageDataService.DATA_PATH + "lang." + lang + ".json";
        this.data = <LanguageData>FileService.Parse(filepath);
    }
}

export { LanguageDataService };
