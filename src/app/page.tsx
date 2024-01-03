import HeroImage from "@/components/HeroImage";
import Button from "@/components/Button";

export default function HomePage() {
    return (
        <div id="homepage-container" className="flex flex-col">
            <section
                id="jump"
                className="bg-sky-500 rounded-xl h-36 flex-shrink-0"
            >
                <span className="font-handwritten">Eric Miller</span>
            </section>
            <section id="about" className="m-10 flex justify-center">
                <h2 className="text-sky-500 text-4xl">About Me</h2>
            </section>
        </div>
    );
}
