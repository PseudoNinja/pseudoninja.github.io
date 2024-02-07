import Icon from "@/components/Icon";

const Button = (props: {
    title: string;
    size: number;
    show_text: boolean;
    icon: string;
}) => {
    let showIcon: boolean = props.icon.length > 0;
    return (
        <button
            type="button"
            className={
                "border-2 border-white rounded-lg flex w-" +
                props.size +
                "px h-" +
                props.size +
                "px"
            }
        >
            {showIcon ? (
                <Icon title={props.title + " Icon"} src={props.icon} alt="" />
            ) : (
                ""
            )}
            {props.show_text ? props.title : ""}
        </button>
    );
};

export default Button;
