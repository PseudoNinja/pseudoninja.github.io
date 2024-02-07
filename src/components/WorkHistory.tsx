import { HistoryDataServiceFactory } from "@/services/HistoryDataService";
import app from "@/app/app";
import history_data from "@data/history.json";

export default function WorkHistory() {
    let historyDataService =
        HistoryDataServiceFactory.GetHistoryDataService(history_data);
    let work_history = historyDataService.getWorkHistoryItems();
    return (
        <div className="workHistory">
            {work_history.map((work_item) => (
                <div
                    className="workHistory-item border-b-2 my-4"
                    key={work_item.where + "_" + work_item.when}
                >
                    <header>
                        <h2 className="workHistory-item-title flex flex-col">
                            <span className="role text-2xl">
                                {work_item.title}
                            </span>
                            <span className="where text-lg">
                                {work_item.where}
                            </span>
                        </h2>
                        <div className="date text-mako-700 mb-4">
                            <span className="date-start">
                                {new Date(work_item.when).toLocaleDateString(
                                    app.client_language,
                                    app.DateFormatter
                                )}
                            </span>
                            <span className="date-seperator mx-1">-</span>
                            <span className="date-end">
                                {new Date(work_item.end).toLocaleDateString(
                                    app.client_language,
                                    app.DateFormatter
                                )}
                            </span>
                        </div>
                    </header>
                    <div className="content">{work_item.description}</div>

                    <div className="skills my-4">
                        <h3 className="text-lg">Skills</h3>
                        <ul className="flex flex-wrap">
                            {work_item.skills.map((skill) => (
                                <li
                                    className="mx-2"
                                    key={work_item.title + "_" + skill.title}
                                >
                                    {skill.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
