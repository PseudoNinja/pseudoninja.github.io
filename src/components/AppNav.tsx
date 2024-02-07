import app from "@/app/app";

import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";

const AppNav = () => {
    return (
        <div id="app-nav-container">
        <MenuButton id="app-nav-button"
        className="mx-4"
        onClick={() => {
            console.log("boop");
            setShowMenu(!showMenu);
        }}
    />
        <nav>
            <MenuItem title={app.lang.translate("Who I Am")} />
            <MenuItem title={app.lang.translate("What I Do")} />
            <MenuItem title={app.lang.translate("Where I Have Been")} />
            <MenuItem title={app.lang.translate("Things I Have Done")} />
        </nav>
        </div>
    );
};

export default AppNav;
