import Icon from "./Icon";

import React from "react";

const Button = (
    { size = 0, title = "", icon_src = "", show_text = false },
    children
) => {
    return (
        <button
            type="button"
            className={
                "border-2 border-white rounded-lg flex w-fit h-" + size + "px"
            }
        >
            {icon_src.length > 0 ? (
                <Icon title={title} src={icon_src} size={size - 8} />
            ) : (
                ""
            )}
            <span className={"icon-label" + !show_text ? " invisible" : ""}>
                {title}
            </span>
            {children}
        </button>
    );
};

export default Button;
