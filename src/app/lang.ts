/** Multi-Language Support Data Service **/

import { FileService } from "../services/FileService";

export interface LanguageData {
    title: string;
    description: string;
    tagline: string;
    heroImage_alt: string;
    welcome: string;
}

class LanguageDataService {
    static DEFAULT_LANGUAGE = "en-us";
    static DATA_PATH = "./data/";

    static GetLanguagePackFromFile(
        lang: string = LanguageDataService.DEFAULT_LANGUAGE
    ): LanguageData {
        let filepath = LanguageDataService.DATA_PATH + "lang." + lang + ".json";
        return <LanguageData>FileService.Parse(filepath);
    }
}

export { LanguageDataService };
