import app from "@/app/app";
import HeroImage from "@/components/HeroImage";

const AppHeader = () => {
    return (
        <header
            id="app-header"
            className="app-header p-4 bg-sky-500 text-white border-collapse border-none flex grow-0 sm:grid-cols-4"
        >
            <h1 id="site-title" className="hidden">
                {app.title}
            </h1>
            <span id="welcome" className="text-2xl">
                {app.welcome}
            </span>
            <div className="spacer flex-1"></div>
            <div id="app-header-logo-wrapper" className="sm:invisible">
                <HeroImage id="app-header-logo" size={32} />
            </div>
        </header>
    );
};

export default AppHeader;
