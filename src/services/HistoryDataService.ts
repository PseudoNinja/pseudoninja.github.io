import history_data from "@data/history.json";

import Skill from "@/models/Skill";
import HistoryItem, { HistoryItemInterface } from "@/models/HistoryItem";
import WorkHistoryItem, {
    WorkHistoryItemInterface,
} from "@/models/WorkHistoryItem";

const BEGINNINGOFTIME: Date = new Date("09/15/2004");
const TODAY: Date = new Date();

interface HistoryDataInterface {
    workHistory: WorkHistoryItemInterface[];
    projects: HistoryItemInterface[];
}

class HistoryDataService {
    work: WorkHistoryItem[];
    projects: HistoryItem[];

    constructor(data: HistoryDataInterface) {
        this.work = data.workHistory.map((w) => new WorkHistoryItem(w));
        this.projects = data.projects.map((p) => new HistoryItem(p));
    }

    public getWorkHistoryItems = () => {
        return this.work;
    };

    public getProjectHistoryItems = () => {
        return this.projects;
    };

    private _getSkillsFrom = (historyCollection: HistoryItem[]): Skill[] => {
        let skills: Array<Skill> = new Array<Skill>();
        historyCollection.forEach((history_item) => {
            history_item.skills.forEach((skill: Skill) => {
                skill.firstUsed = history_item.start ?? BEGINNINGOFTIME;
                skill.lastUsed = history_item.end ?? TODAY;
            });

            skills = skills.concat(history_item.skills);
        });
        return skills;
    };

    public getWorkSkills = (): Skill[] => {
        return this._getSkillsFrom(this.work);
    };

    public getProjectSkills = (): Skill[] => {
        return this._getSkillsFrom(this.projects);
    };

    public getSkills = (): Skill[] => {
        let skills: Skill[] = [
            ...this.getProjectSkills(),
            ...this.getWorkSkills(),
        ];
        return skills;
    };

    public getDistinctSkills = (): Skill[] => {
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
    };

    public getCloudSkills = (): Skill[] => {
        const skills = this.getDistinctSkills();

        let max_weight: number = skills.reduce(
            (maxValue: number, skill: Skill): number => {
                const weight: number = skill.weight;
                return Math.max(maxValue, weight);
            },
            Number.MIN_SAFE_INTEGER
        );

        skills.forEach((skill) => {
            let ratio: number = Math.round((skill.weight / max_weight) * 6); // global ratio
            skill.weight = ratio;
        });

        return skills;
    };
}

class HistoryDataServiceFactory {
    public static GetHistoryDataService(
        data: HistoryDataInterface = history_data
    ) {
        return new HistoryDataService(data);
    }
}

export { HistoryDataService, HistoryDataServiceFactory };
