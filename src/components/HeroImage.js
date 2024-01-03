import Image from "next/image";

export default function HeroImage() {
    return (
        <Image
            src="/../public/hero-image.png"
            height={100}
            width={100}
            alt="Sort of a ninja"
        />
    );
}
