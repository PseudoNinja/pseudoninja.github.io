import { LanguageData, LanguageDataService } from "./lang";

class Applicaiton {
    static DEFAULT_LANGUAGE = "en-US";

    language: string;
    language_pack: LanguageData | null = null;

    title: string = "Loading ...";
    description: string = "";
    tagline: string = "";
    welcome: string = "";

    constructor(language: string = Applicaiton.DEFAULT_LANGUAGE) {
        this.language = language;
        this.language_pack =
            LanguageDataService.GetLanguagePackFromFile(language);

        this.title = this.language_pack.title;
        this.description = this.language_pack.description;
        this.tagline = this.language_pack.tagline;
        this.welcome = this.language_pack.welcome;
    }
}

export { Applicaiton };
