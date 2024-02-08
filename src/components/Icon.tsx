import Image from "next/image";

const Icon = (props: { title: string; src: string; alt: string, size:number }) => {
    return (
        <i className="icon-wrapper text-white">
            <Image
                className="icon"
                src={props.src}
                alt={props.alt.length > 0 ? props.alt : props.title}
                width={props.size}
                height={props.size}
            />
        </i>
    );
};

export default Icon;
