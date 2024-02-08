/** Multi-Language Support Data Service **/

import { DataService } from "./DataService";

import languageData from "@data/lang.json";

enum Language {
    ENGLISH = "en",
    CHINENSE_SIMPLIFIED = "zh-Hans",
    CHINESE_TRADITIONAL = "zh-TW",
    SPANISH = "es",
    ARABIC = "ar",
    PORTUGUESE = "pt",
    INDONESIAN = "id",
    FRENCH = "fr",
    JAPANESE = "ja",
    RUSSIAN = "ru",
    GERMAN = "de",
}

const DEFAULT_LANGUAGE = Language.ENGLISH;

interface LanguageRecord {
    en: string;
    "zh-Hans": string;
    "zh-TW": string;
    es: string;
    ar: string;
    pt: string;
    id: string;
    fr: string;
    ja: string;
    ru: string;
    de: string;
}
class LanguageDataService extends DataService {
    _data: Array<LanguageRecord>;
    _client_language: Language;

    constructor(
        data: Array<LanguageRecord> = new Array<LanguageRecord>(),
        language: Language = DEFAULT_LANGUAGE
    ) {
        super();
        this._data = data;
        this._client_language = language;
    }
    translate(
        str: string,
        to: Language = this._client_language,
        from: Language = DEFAULT_LANGUAGE
    ): string {
        let translated: string = str;
        if (from != to) {
            let record: LanguageRecord = this._data.filter(
                (f) => f[from] === str
            )[0];
            if (record !== undefined) {
                translated = record[to];
            }
        }
        return translated;
    }
}

class LanguageDataServiceFactory {
    static GetLanguageDataService(
        data: Array<LanguageRecord> = languageData,
        client_language: string = <string>DEFAULT_LANGUAGE
    ) {
        let language: Language = client_language as Language;
        return new LanguageDataService(data, language);
    }
}

export { LanguageDataService, LanguageDataServiceFactory };
