import HeroImage from "@/components/HeroImage";
import Panel from "@/components/Panel";
import SkillCloud from "@/components/SkillCloud";
import WorkHistory from "@/components/WorkHistory";
import { app } from "./layout";

export default function HomePage() {
    return (
        <div id="homepage-container" className="flex flex-col border-none">
            <section
                id="heroImage-wrapper"
                className="bg-picton-blue-500 h-36 flex justify-center overflow-visible mb-20"
            >
                <HeroImage />
            </section>
            <Panel id="about" title="Who I Am">
                <p>{app.lang.translate("about")}</p>
                <h3 className="text-xl my-4">
                    {app.lang.translate("Key Strengths")}
                </h3>
                <ul className="ml-10 list-disc">
                    <li>
                        <span className="font-bold mr-1">
                            {app.lang.translate("visionary leadership")}
                        </span>
                        {app.lang.translate(
                            "Motivate and empower teams to achieve their full potential."
                        )}
                    </li>
                    <li>
                        <span className="font-bold mr-1">
                            {app.lang.translate("Creative Problem-Solving")}
                        </span>
                        {app.lang.translate(
                            "Develop innovative solutions to complex challenges."
                        )}
                    </li>
                    <li>
                        <span className="font-bold mr-1">
                            {app.lang.translate("Technical Expertise")}
                        </span>
                        {app.lang.translate(
                            "Extensive experience in software development, web architecture, and cloud technologies."
                        )}
                    </li>
                    <li>
                        <span className="font-bold mr-1">
                            {app.lang.translate("Agile Methodologies")}
                        </span>
                        {app.lang.translate(
                            "Adept at leading teams in Scrum and other agile methodologies."
                        )}
                    </li>
                    <li>
                        <span className="font-bold mr-1">
                            {app.lang.translate("People Management")}
                        </span>
                        {app.lang.translate(
                            "Build strong relationships and foster a positive work environment."
                        )}
                    </li>
                </ul>
                <h3 className="text-xl my-4">
                    {app.lang.translate("Highlights")}
                </h3>
                <ul className="ml-10 list-disc">
                    <li>
                        {app.lang.translate(
                            "Reduced production bugs by 40% and increased velocity by 30% at Orion Advisor Technology as Application Development Leader."
                        )}
                    </li>
                    <li>
                        {app.lang.translate(
                            "Spearheaded the development of a $7 million enterprise application at RSI Medical Staffing, increasing staff performance by 30% and recovering $1.7 million in lost revenue."
                        )}
                    </li>
                    <li>
                        {app.lang.translate(
                            "Successfully led two high-performing high-profile development teams simultaneously of 20 members at Orion."
                        )}
                    </li>
                    <li>
                        {app.lang.translate(
                            "I mentored a team of 12 engineers at Moody`s Analytics while successfully managing a web application used by 800+ clients globally."
                        )}
                    </li>
                </ul>
            </Panel>
            <Panel id="skills" title="What I Do">
                <SkillCloud />
            </Panel>
            <Panel id="history" title="Where I've Been">
                <WorkHistory />
            </Panel>
        </div>
    );
}
