import { randomInt } from "crypto";
import { HistoryDataService } from "@/services/HistoryDataService";

function randomTextSize() {
    let sizes = ["xs", "sm", "base", "lg", "xl"];
    let i = randomInt(0, sizes.length);
    return "text-" + sizes[i];
}

Array.prototype.shuffle = function () {
    return this.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

function randomColor() {
    let colors = [
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
    let i = randomInt(0, colors.length);
    return colors[i];
}

export default function SkillCloud() {
    let service = new HistoryDataService();
    let skills = service.getSkillCloudData();
    let shuffled = skills.shuffle();
    return (
        <div className="">
            <ul className="flex list-none p-0 flex-wrap justify-center items-center leading-loose">
                {shuffled.map((skill, i) => {
                    let textSize = randomTextSize();
                    let textColor = randomColor();
                    let className = "px-2 py-1 " + textSize + " " + textColor;
                    return (
                        <li key={skill}>
                            <span className={className}>{skill}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
