import { LanguageDataService } from "../services/LanguageDataService";

class Applicaiton {
    static DEFAULT_LANGUAGE = "en-US";

    language: string;
    lang: LanguageDataService;

    title: string = "Loading ...";
    description: string = "";
    tagline: string = "";
    welcome: string = "";

    constructor(language: string = Applicaiton.DEFAULT_LANGUAGE) {
        this.language = language;
        this.lang = new LanguageDataService(language);

        this.title = this.lang.translate("title");
        this.description = this.lang.translate("description");
        this.tagline = this.lang.translate("tagline");
        this.welcome = this.lang.translate("welcome");
    }
}

const app = new Applicaiton();

export default app;
