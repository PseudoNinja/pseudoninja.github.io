import { HistoryDataServiceFactory } from "@/services/HistoryDataService";
import history_data from "@data/history.json";

export default function ProjectHistory() {
    let historyDataService =
        HistoryDataServiceFactory.GetHistoryDataService(history_data);
    let project_history = historyDataService.getProjectHistoryItems();
    return (
        <div className="project-history-container">
            {project_history.map((project) => (
                <div
                    className="project-history-item border-b-2 my-4"
                    key={"project-" + project.title}
                >
                    <header>
                        <h2 className="project-history-item-title flex flex-col">
                            <span className="role text-2xl">
                                {project.title}
                            </span>
                        </h2>
                    </header>
                    <div className="content">{project.description}</div>

                    <div className="skills my-4">
                        <h3 className="text-lg">Skills</h3>
                        <ul className="flex flex-wrap">
                            {project.skills.map((skill) => (
                                <li
                                    className="mx-2"
                                    key={project.title + "_" + skill.title}
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
