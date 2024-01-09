/** Multi-Language Support Data Service **/

import { FileService } from "./FileService";

const DEFAULT_LANGUAGE = "en-us";
const DEFAULT_DATA_PATH = "data/";

export interface LanguageData {
    [key: string]: string;
}

class LanguageDataService {
    language_pack: LanguageData;

    constructor(
        language: string = DEFAULT_LANGUAGE,
        data_path: string = DEFAULT_DATA_PATH
    ) {
        let language_file_path = data_path + "lang." + language + ".json";
        if (!FileService.FileExists(language_file_path)) {
            // if doesnt exist, use default while file is generated
            language_file_path =
                data_path + "lang." + DEFAULT_LANGUAGE + ".json";
        }

        this.language_pack = this._loadLanguagePackFromFile(language_file_path);
    }

    private _loadLanguagePackFromFile(
        language_file_path: string = DEFAULT_LANGUAGE
    ): LanguageData {
        return <LanguageData>FileService.Parse(language_file_path);
    }

    translate(original: string): string {
        let value = this.language_pack[original];
        if (value == null) {
            value = original;
        }
        return value;
    }
}

export { LanguageDataService };
