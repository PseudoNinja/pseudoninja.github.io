import {
    LanguageDataService,
    LanguageDataServiceFactory,
} from "../services/LanguageDataService";

class Applicaiton {
    static DEFAULT_CLIENT_LANGUAGE = "en-US";

    client_language: string;
    lang: LanguageDataService;

    title: string;
    description: string;
    welcome: string;

    constructor(lang: string = Applicaiton.DEFAULT_CLIENT_LANGUAGE) {
        this.client_language = lang;
        this.lang = LanguageDataServiceFactory.GetLanguageDataService();

        this.title = this.lang.translate(
            "Eric Miller - Professional Problem Solver & People Leader"
        );
        this.description = this.lang.translate(
            "Eric Miller is a professional problem solver and people leader from Omaha, Nebraska. Eric is a Full-stack developer with over 20 years of experience as a Principal Software Engineer, Architect, and Development Manager."
        );
        this.welcome = this.lang.translate("Hello");
    }
}

const app = new Applicaiton();

export default app;
