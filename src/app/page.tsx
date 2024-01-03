import HeroImage from "@/components/HeroImage";

export default function HomePage() {
    return (
        <div id="homepage-container" className="flex flex-col border-none">
            <section
                id="heroImage-wrapper"
                className="bg-picton-blue-500 h-36 flex justify-center overflow-visible"
            >
                <HeroImage />
            </section>
            <section
                id="about"
                className="mt-20 justify-center bg-white-lilac-50 border-1 shadow-sm border-mako-500 p-4 m-4 rounded-md"
            >
                <h2 className="text-picton-blue-500 text-4xl text-center mb-4">
                    About Me
                </h2>
                <p className="mb-2">
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
            </section>
        </div>
    );
}
