import Image from "next/image";
import app from "@/app/app";

export default function HeroImage({ size = 100 }) {
    return (
        <Image
            priority
            src="/hero-image.svg"
            height={size}
            width={size}
            alt={app.lang.translate(
                "A cartoon bust ninja with a round face, spikey yellow hair, white skin, and bright blue eyes"
            )}
        />
    );
}
