import { Skill } from "./Skill";

export interface HistoryItemData {
    title: string;
    description: string;
    start: string;
    end: string | null;
    skills: string[] | null;
}

abstract class HistoryItem {
    title: string;
    description: string;
    when: Date;
    end: Date | null;

    skills: Skill[];

    constructor(data: HistoryItemData) {
        this.title = data.title;
        this.when = new Date(data.start);
        this.end = data.end != null ? new Date(data.end) : null;
        this.description = data.description;

        this.skills = new Array<Skill>();
        if (data.skills !== null) {
            this.skills = data.skills.map((m) => {
                return new Skill(
                    m,
                    this.when ?? new Date("09/15/2004"),
                    this.end ?? new Date()
                );
            });
        }
    }
}

export { HistoryItem };
