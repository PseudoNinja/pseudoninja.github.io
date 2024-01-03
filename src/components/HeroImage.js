import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="w-48 h-48 bg-picton-blue-500 rounded-full flex justify-center">
            <Image
                priority
                src="/hero-image.svg"
                height={150}
                width={150}
                alt="Its kind of like a ninja."
            />
        </div>
    );
}
