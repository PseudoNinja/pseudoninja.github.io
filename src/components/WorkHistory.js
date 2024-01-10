import { HistoryDataService } from "@/services/HistoryDataService";
import { app } from "@/app/layout";

const dateFormatter = {
    month: "short",
    year: "numeric",
};

export default function WorkHistory() {
    const historyService = new HistoryDataService();
    let history = historyService.getHistoryItems();

    return (
        <div className="workHistory">
            {history.map((work_item) => (
                <div
                    className="workHistory-item border-b-2 my-4"
                    key={work_item.where + "_" + work_item.start}
                >
                    <header>
                        <h2 className="workHistory-item-title flex flex-col">
                            <span className="role text-2xl">
                                {work_item.what}
                            </span>
                            <span className="where text-lg">
                                {work_item.where}
                            </span>
                        </h2>
                        <div className="date text-mako-700 mb-4">
                            <span className="date-start">
                                {new Date(work_item.start).toLocaleDateString(
                                    app.language,
                                    dateFormatter
                                )}
                            </span>
                            <span className="date-seperator mx-1">-</span>
                            <span className="date-end">
                                {new Date(work_item.end).toLocaleDateString(
                                    app.language,
                                    dateFormatter
                                )}
                            </span>
                        </div>
                    </header>
                    <div className="content">{work_item.description}</div>

                    <div className="skills my-4">
                        <h3 className="text-lg">Skills</h3>
                        <ul className="flex flex-wrap">
                            {work_item.skills.map((skill) => (
                                <li className="mx-2" key={skill.title}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
