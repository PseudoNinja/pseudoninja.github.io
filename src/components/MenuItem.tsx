"use client";

export default function MenuItem({
    title,
    action = () => {
        return;
    },
}) {
    return (
        <li className="menu-item text-right">
            <a onClick={action}>{title}</a>
        </li>
    );
}
