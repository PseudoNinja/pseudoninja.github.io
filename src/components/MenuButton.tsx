import Button from "./Button";
import app from "@/app/app";

const MenuButton = (props: { show_text: boolean }) => {
    return (
        <Button
            title={app.lang.translate("Menu")}
            icon="/icon-menu.svg"
            show_text={props.show_text}
            size={30}
        />
    );
};

export default MenuButton;
