import { HistoryDataServiceFactory } from "@/services/HistoryDataService";
import history_data from "@data/history.json";
import app from "@/app/app";

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
                        <div className="date text-mako-700 mb-4">
                            <span className="date-start">
                                {new Date(project.when).toLocaleDateString(
                                    app.client_language,
                                    app.DateFormatter
                                )}
                            </span>

                            <span
                                className={
                                    project.end != null &&
                                    project.end.toTimeString() ==
                                        project.when.toTimeString()
                                        ? "hidden"
                                        : ""
                                }
                            >
                                <span className="date-seperator mx-1">-</span>
                                <span className="date-end">
                                    {project.end != null
                                        ? new Date(
                                              project.end
                                          ).toLocaleDateString(
                                              app.client_language,
                                              app.DateFormatter
                                          )
                                        : app.lang.translate("Present")}
                                </span>
                            </span>
                        </div>
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
