import { HistoryItem } from "@/models/HistoryItem";
import { Skill } from "@/models/Skill";
import history_data from "@data/history.json";

class HistoryDataService {
    _data: Array<HistoryItem>;

    constructor(data: Array<Object> = history_data) {
        this._data = new Array<HistoryItem>();
        this._parse(data);
    }

    private _parse(data: Array<Object>) {
        data.forEach((history_item) => {
            this._data.push(<HistoryItem>history_item);
        });
    }

    public getHistoryItems(): Array<HistoryItem> {
        return this._data;
    }

    public getSkills(): Array<Skill> {
        let skills: Array<Skill> = [];
        this._data.forEach((history_item) => {
            skills = skills.concat(history_item.skills);
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
