import Skill from "./Skill";

export interface HistoryItemInterface {
    title: string;
    description: string;
    start: string;
    end: string | null;
    skills: string[];
    thumbnail_src: string | null;
    thumbnail_alt: string | null;
}



const BEGINNINGOFTIME: Date = new Date("09/15/2004");
const TODAY: Date = new Date();

class HistoryItem {
    title: string;
    description: string;
    start: Date;
    end: Date;

    skills: Skill[];

    thumbnail_src: string | null;
    thumbnail_alt: string | null;

    constructor(data: HistoryItemInterface) {
        this.title = data.title;
        let startDate =
            data.start != null ? new Date(data.start) : BEGINNINGOFTIME;
        this.start = startDate;
        let endDate = data.end != null ? new Date(data.end) : TODAY;
        this.end = endDate;
        this.description = data.description;

        this.skills = data.skills.map(
            (skill) => new Skill(skill, startDate, endDate)
        );

        this.thumbnail_src = data.thumbnail_src;
        this.thumbnail_alt = data.thumbnail_alt;
    }
}



export default HistoryItem;
