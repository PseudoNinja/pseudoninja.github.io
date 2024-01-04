import { DataService } from "./DataService";
import { Skill } from "@/models/Skill";

import historyData from "../../data/history.json";

const HISTORY_FILE_PATH = "history.json";

interface HistoryItem {
    what: string;
    where: string;
    start: Date;
    end: Date;
    description: string;
    skills: Array<Skill>;
}

class HistoryDataService extends DataService {
    constructor() {
        super();
        this.data = historyData;
    }

    public getHistoryItems(): Array<HistoryItem> {
        return <Array<HistoryItem>>this.data;
    }

    public getSkills(): Array<Skill> {
        let skills: Array<Skill> = [];
        let historyItems: Array<HistoryItem> = this.getHistoryItems();
        historyItems.forEach((historyItem) => {
            skills = skills.concat(historyItem.skills);
        });
        return skills;
    }

    public getSkillCloudData(): Array<Skill> {
        let skills: Array<Skill> = this.getSkills().filter(
            (value, index, array) => {
                return array.indexOf(value) === index;
            }
        );

        return skills;
    }
}

export { HistoryDataService };
