const MenuItem = (props: { title: string }) => {
    return (
        <li className="menu-item text-right">
            <a href={"#"}>{props.title}</a>
        </li>
    );
};

export default MenuItem;
