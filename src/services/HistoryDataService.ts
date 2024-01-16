import { HistoryItem } from "@/models/HistoryItem";
import {
    ProjectHistoryItem,
    ProjectHistoryItemData,
} from "@/models/ProjectHistoryItem";
import { Skill } from "@/models/Skill";
import { WorkHistoryItem, WorkHistoryItemData } from "@/models/WorkHistoryItem";
import history_data from "@data/history.json";

export interface HistoryData {
    workHistory: WorkHistoryItemData[];
    projects: ProjectHistoryItemData[];
}

class HistoryDataService {
    workHistory: WorkHistoryItem[];
    projects: ProjectHistoryItem[];

    constructor(data: HistoryData) {
        this.workHistory = data.workHistory.map((w) => new WorkHistoryItem(w));
        this.projects = data.projects.map((p) => new ProjectHistoryItem(p));
    }

    public getWorkHistoryItems(): WorkHistoryItem[] {
        return this.workHistory;
    }

    public getProjectHistoryItems(): ProjectHistoryItem[] {
        return this.projects;
    }

    public getSkills(distinct: boolean = false): Array<Skill> {
        let skills: Array<Skill> = new Array<Skill>();
        this.workHistory.forEach((history_item) => {
            skills = skills.concat(history_item.skills);
        });
        this.projects.forEach((history_item) => {
            skills = skills.concat(history_item.skills);
        });
        if (distinct) {
            skills = skills.filter(
                (value: any, index: any, array: string | any[]) => {
                    return array.indexOf(value) === index;
                }
            );
        }

        return skills;
    }
}

class HistoryDataServiceFactory {
    public static GetHistoryDataService(data: HistoryData = history_data) {
        return new HistoryDataService(data);
    }
}

export { HistoryDataService, HistoryDataServiceFactory };
