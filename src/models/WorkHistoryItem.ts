import { HistoryItem, HistoryItemData } from "./HistoryItem";

export interface WorkHistoryItemData extends HistoryItemData {
    where: string;
}

class WorkHistoryItem extends HistoryItem {
    where: string;

    constructor(data: WorkHistoryItemData) {
        super(data);
        this.where = data.where;
    }
}

export { WorkHistoryItem };
