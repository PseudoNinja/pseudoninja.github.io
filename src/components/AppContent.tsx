"use client";

import { useEffect, useState } from "react";
import app from "@/app/app";
import HeroImage from "./HeroImage";
import Panel from "./Panel";
import SkillCloud from "./SkillCloud";
import WorkHistory from "./WorkHistory";
import ProjectHistory from "./ProjectHistory";

const AppContent = () => {
    const [showSmallLogo, setShowSmallLogo] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById("app-content");
            const scrollPosition =
                container != null ? container.offsetHeight : 0;
            const largeLogo = document.getElementById("app-content-logo");
            const smallLogo = document.getElementById("app-header-logo");
            const largeLogoHeight =
                largeLogo != null ? largeLogo.offsetHeight : 0;

            console.log("scrolling...", {
                position: scrollPosition,
                largeLogoHeight: largeLogoHeight,
            });
            if (scrollPosition >= largeLogoHeight) {
                setShowSmallLogo(true);
            } else {
                setShowSmallLogo(false);
            }
        };

        // Get a reference to the HTMLElement you want to add the scroll event to
        const scrollableElement = document.getElementById("your-element-id");

        // Add the scroll event listener to the element
        if (scrollableElement) {
            scrollableElement.addEventListener("scroll", handleScroll);
        }

        // Clean up the event listener on component unmount
        return () => {
            if (scrollableElement) {
                scrollableElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []); // Empty dependency array to ensure the effect runs once on mount
    return (
        <main
            id="app-content"
            className="app-content overflow-y-auto grow sm:grid-cols-8"
        >
            <div id="homepage-container" className="flex flex-col border-none">
                <div
                    id="hero-image-container"
                    className="bg-picton-blue-500 h-32 flex justify-center overflow-visible mb-20 sm:invisible sm:mb-0"
                >
                    <div className="bg-picton-blue-500 h-48 w-48 flex justify-center rounded-full sm:invisible">
                        <HeroImage id="app-content-logo" size={150} />
                    </div>
                </div>
                <Panel id="about" title={app.lang.translate("Who Am I")}>
                    <p>{app.description}</p>
                    <p>
                        {app.lang.translate(
                            "Eric is currently seeking a challenging leadership or Solutions Architect role where I can leverage my diverse skills and experience to make a significant impact."
                        )}
                    </p>
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
                <Panel id="skills" title={app.lang.translate("What I Do")}>
                    <SkillCloud />
                </Panel>
                <Panel
                    id="history"
                    title={app.lang.translate("Where I Have Been")}
                >
                    <WorkHistory />
                </Panel>
                <Panel
                    id="examples"
                    title={app.lang.translate("What I Have Done")}
                >
                    <ProjectHistory />
                </Panel>
            </div>
        </main>
    );
};

export default AppContent;
