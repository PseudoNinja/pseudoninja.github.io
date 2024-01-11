import Image from "next/image";

const Icon = ({ title = "", src = "", size = 0, color = "" }) => {
    return (
        <i className="icon-wrapper text-white">
            <Image
                className="icon"
                src={src}
                height={size}
                width={size}
                alt={title}
            />
        </i>
    );
};

export default Icon;
