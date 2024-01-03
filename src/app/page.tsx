import HeroImage from "@/components/HeroImage";
import Panel from "@/components/Panel";
import SkillCloud from "@/components/SkillCloud";
import WorkHistory from "@/components/WorkHistory";

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
                <p>
                    Eric Miller is a professional problem solver and people
                    leader from Omaha Nebraska. Eric has spent the last 20 years
                    working in varying capacities of web and application
                    development with the last ten of that exclusively leading
                    successful teams in the Financial Technology (FINTECH)
                    space.
                </p>
                <p>
                    Outside of the office Eric is a family man who enjoys the
                    outdoors, tinkering, video games, and gardening.
                </p>
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
