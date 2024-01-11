import MenuIcon from "@/components/MenuIcon";

import app from "@/app/app";

const MenuButton = ({ show_text = false }) => {
    return (
        <button
            type="button"
            className="border border-white-lilac-50 rounded-lg px-2 py-2 flex"
        >
            <MenuIcon className="fill-white-lilac-50" size="24px" />
            <span
                className={
                    "menu-button-label color-white-lilac-50 pl-2" +
                    (!show_text ? " hidden" : "")
                }
            >
                {app.lang.translate("Menu")}
            </span>
        </button>
    );
};

export default MenuButton;
