import "crypto";
import {
    HistoryDataService,
    HistoryDataServiceFactory,
} from "@/services/HistoryDataService";

const sizes = ["xs", "sm", "base", "lg", "xl", "2xl"];
const colors = [
    "text-picton-blue-300",
    "text-picton-blue-400",
    "text-picton-blue-500",
    "text-picton-blue-600",
    "text-picton-blue-700",
    "text-picton-blue-800",
    "text-crimson-300",
    "text-crimson-400",
    "text-crimson-500",
    "text-crimson-600",
    "text-crimson-700",
    "text-crimson-800",
];

function textSizeByWeight(weight = 0) {
    let size_key = Math.round(sizes.length * weight);
    return "text-" + sizes[size_key];
}

function randomColor() {
    let i = Math.floor(Math.random() * colors.length);
    return colors[i];
}

const SkillCloud = () => {
    let service: HistoryDataService =
        HistoryDataServiceFactory.GetHistoryDataService();
    let skills = service.getCloudSkills();
    return (
        <div className="skills-cloud">
            <ul className="flex list-none p-0 flex-wrap justify-center items-center leading-loose">
                {skills.map((skill, i) => {
                    let textSize = textSizeByWeight(skill.weight);
                    let textColor = randomColor();
                    let className = "px-2 py-1 " + textSize + " " + textColor;
                    return (
                        <li key={skill.title}>
                            <span className={className}>{skill.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SkillCloud;
