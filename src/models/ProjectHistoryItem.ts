import { HistoryItem, HistoryItemData } from "./HistoryItem";

export interface ProjectHistoryItemData extends HistoryItemData {
    thumbnail_src: string;
    thumbnail_alt: string;
}

class ProjectHistoryItem extends HistoryItem {
    thumbnail_src: string;
    thumbnail_alt: string;

    constructor(data: ProjectHistoryItemData) {
        super(data);
        this.thumbnail_src = data.thumbnail_src;
        this.thumbnail_alt = data.thumbnail_alt;
    }
}

export { ProjectHistoryItem };
