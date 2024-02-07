import { ReactNode } from "react";

const VerticalMenu = (props: { children: ReactNode }) => {
    return (
        <nav className="nav nav-vertical">
            <ul>{props.children}</ul>
        </nav>
    );
};

export default VerticalMenu;
