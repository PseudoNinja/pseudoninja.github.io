import HistoryItem, { HistoryItemInterface } from "./HistoryItem";

export interface WorkHistoryItemInterface extends HistoryItemInterface {
    where: string;
}

class WorkHistoryItem extends HistoryItem {
    where: string;

    constructor(data: WorkHistoryItemInterface) {
        super(data);
        this.where = data.where;
    }
}

export default WorkHistoryItem;
