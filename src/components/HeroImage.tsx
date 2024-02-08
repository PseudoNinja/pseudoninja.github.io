import Image from "next/image";
import app from "@/app/app";
import useSharedComponentLogic from "@/hooks/SharedComponentLogic";

const HeroImage = (props: { id: string; size: number }) => {
    const { create_id } = useSharedComponentLogic();
    return (
        <Image
            id={props.id.length > 0 ? props.id : create_id("hero-image-")}
            priority
            src="/hero-image.svg"
            height={props.size}
            width={props.size}
            alt={app.lang.translate(
                "A cartoon bust ninja with a round face, spikey yellow hair, white skin, and bright blue eyes"
            )}
        />
    );
};

export default HeroImage;
