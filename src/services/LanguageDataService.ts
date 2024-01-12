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
    _data: Array<LanguageRecord> = new Array<LanguageRecord>();

    translate(
        str: string,
        to: Language,
        from: Language = DEFAULT_LANGUAGE
    ): string {
        let translated: string = str;
        if (from != to) {
            let record: LanguageRecord = this._data.filter(
                (f) => f[from] === str
            )[0];
            translated = record[to];
        }
        return translated;
    }
}

class LanguageDataServiceFactory {
    static GetLanguageDataService(data: Array<LanguageRecord> = languageData) {
        return new LanguageDataService(data);
    }
}

export { LanguageDataService, LanguageDataServiceFactory };
