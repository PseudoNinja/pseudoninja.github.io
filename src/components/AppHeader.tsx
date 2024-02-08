import app from "@/app/app";
import HeroImage from "@/components/HeroImage";
import AppNav from "./AppNav";
import Button from "./Button";

const AppHeader = () => {
    return (
        <header
            id="app-header"
            className="app-header p-4 bg-sky-500 text-white border-collapse border-none flex grow-0 sm:flex-grow sm:w-1/12 sm:flex-col"
        >
            <span id="welcome" className="text-2xl">
                {app.lang.translate("Hello,")}
            </span>
            <div
                id="app-header-large-logo-wrapper"
                className="hidden sm:visible"
            >
                <HeroImage id="app-header-large-logo" size={150} />
            </div>

            <h1 id="site-title" className="hidden">
                {app.title}
            </h1>
            <div className="spacer flex-1"></div>
            <div id="app-header-logo-wrapper" className="sm:hidden">
                <HeroImage id="app-header-small-logo" size={32} />
            </div>
        </header>
    );
};

export default AppHeader;
