import app from "@/app/app";

import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";

const AppNav = () => {
    return (
        <nav id="app-nav" className="hidden flex flex-col sm:visible">
            <MenuItem title={app.lang.translate("Who I Am")} />
            <MenuItem title={app.lang.translate("What I Do")} />
            <MenuItem title={app.lang.translate("Where I Have Been")} />
            <MenuItem title={app.lang.translate("Things I Have Done")} />
        </nav>
    );
};

export default AppNav;
