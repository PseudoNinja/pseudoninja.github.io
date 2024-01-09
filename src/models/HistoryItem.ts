import { Skill } from "./Skill";

interface HistoryItem {
    what: string;
    where: string;
    start: Date;
    end: Date | null;
    description: string;
    skills: Array<Skill>;
}

class HistoryItem {
    what: string;
    where: string;
    start: Date;
    end: Date | null;
    description: string;
    skills: Array<Skill>;

    constructor(
        what: string,
        where: string,
        start: Date,
        end: Date | null,
        description: string,
        skills: Array<Skill> = new Array<Skill>()
    ) {
        this.what = what;
        this.where = where;
        this.start = start;
        this.end = end;
        this.description = description;
        this.skills = skills;
    }
}

export { HistoryItem };
