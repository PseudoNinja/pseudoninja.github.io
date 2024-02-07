"use client";

import app from "@/app/app";
import MenuButton from "@/components/MenuButton";
import VerticalMenu from "@/components/VerticalMenu";
import { ReactNode, useState } from "react";

const AppMenu = (props:{ children:ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="app-menu bg-opacity-90 bg-slate-500">
           
            <VerticalMenu>
                {props.children}
            </VerticalMenu>
        </div>
    );
}


export default AppMenu;