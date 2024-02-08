import app from "@/app/app";
import VerticalMenu from "@/components/VerticalMenu";
import { ReactNode } from "react";

const AppMenu = (props: { children: ReactNode }) => {
    return (
        <div className="app-menu bg-opacity-90 bg-slate-500">
            <h2 className="app-menu-title">
                {app.lang.translate("Navigation")}
            </h2>
            <VerticalMenu>{props.children}</VerticalMenu>
        </div>
    );
};

export default AppMenu;
