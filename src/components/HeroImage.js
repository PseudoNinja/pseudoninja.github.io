import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="hero-image-wrapper rounded-full bg-gray-200 justify-center flex-shrink">
            <Image
                priority
                src="/hero-image.svg"
                height={100}
                width={100}
                alt="Its kind of like a ninja."
            />
        </div>
    );
}
