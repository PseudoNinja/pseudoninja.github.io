import { LanguageData, LanguageDataService } from "./lang";

class Applicaiton {
    static DEFAULT_LANGUAGE = "en-US";

    language: string;
    language_pack: LanguageData | null = null;

    title: string = "Loading ...";
    description: string = "";

    constructor(language: string = Applicaiton.DEFAULT_LANGUAGE) {
        this.language = language;
        this.language_pack =
            LanguageDataService.GetLanguagePackFromFile(language);

        this.title = this.language_pack.title;
        this.description = this.language_pack.description;
    }
}

export { Applicaiton };
