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

    public getSkills(): Array<Skill> {
        let skills: Array<Skill> = new Array<Skill>();
        this.workHistory.forEach((history_item) => {
            history_item.skills.forEach((skill) => {
                skill.firstUsed = history_item.when;
                skill.lastUsed = history_item.end ?? new Date();
            });

            skills = skills.concat(history_item.skills);
        });
        this.projects.forEach((history_item) => {
            history_item.skills.forEach((skill) => {
                skill.firstUsed = history_item.when;
                skill.lastUsed = history_item.end ?? new Date();
            });
            skills = skills.concat(history_item.skills);
        });

        return skills;
    }

    public getCloudSkills() {
        let skills = this.getSkills();
        let distinct = skills.reduce((accumulator: Skill[], current: Skill) => {
            if (!accumulator.some((skill) => skill.title === current.title)) {
                accumulator.push(current);
            }

            return accumulator;
        }, []);

        distinct.forEach((skill) => {
            skills
                .filter((f) => f.title === skill.title)
                .forEach((match) => {
                    skill.weight += match.weight;
                });
        });

        return distinct;
    }
}

class HistoryDataServiceFactory {
    public static GetHistoryDataService(data: HistoryData = history_data) {
        return new HistoryDataService(data);
    }
}

export { HistoryDataService, HistoryDataServiceFactory };
