import { HistoryDataService } from "@/services/HistoryService";

export default function WorkHistory() {
    const historyService = new HistoryDataService();
    let history = historyService.getHistoryItems();
    return (
        <div className="workHistory">
            {history.map((wi, i) => {
                return (
                    <div className="workItem mb-5" key={wi}>
                        <h3 className="text-lg bold">{wi.what}</h3>
                        <span className="title block text-crimson-500">
                            {wi.where}
                        </span>
                        <span className="dates text-sm text-mako-500">
                            {wi.start} - {wi.end}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
