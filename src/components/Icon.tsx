import Image from "next/image";

const Icon = (props: { title: string; src: string; alt: string }) => {
    return (
        <i className="icon-wrapper text-white">
            <Image
                className="icon"
                src={props.src}
                alt={props.alt.length > 0 ? props.alt : props.title}
            />
        </i>
    );
};

export default Icon;
