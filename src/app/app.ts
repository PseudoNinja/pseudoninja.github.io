import {
    LanguageDataService,
    LanguageDataServiceFactory,
} from "../services/LanguageDataService";

class Applicaiton {
    public static readonly DEFAULT_CLIENT_LANGUAGE = "en-US";

    client_language: string;
    lang: LanguageDataService;

    title: string;
    description: string;
    welcome: string;

    DateFormatter = {
        month: "short",
        year: "numeric",
    };

    constructor(lang: string = Applicaiton.DEFAULT_CLIENT_LANGUAGE) {
        this.client_language = lang;
        this.lang = LanguageDataServiceFactory.GetLanguageDataService();

        this.title = this.lang.translate(
            "Eric Miller - Full-Stack Engineer & People Leader"
        );
        this.description = this.lang.translate(
            "Eric Miller is a Full-stack Engineer with over 20 years of experience driving success across diverse industries. He is a Proven leader with 10 years of experience in building high-performing teams, delivering complex projects, and exceeding business goals."
        );
        this.welcome = this.lang.translate("Hello");
    }
}

const app = new Applicaiton();

export default app;
