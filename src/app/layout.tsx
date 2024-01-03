import type { Metadata } from "next";
import "./globals.css";
import { Applicaiton } from "./app";
import HeroImage from "@/components/HeroImage";

const app = new Applicaiton();

export const metadata: Metadata = {
    title: app.title,
    description: app.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang={app.language}>
            <body className="flex justify-center overflow-hidden">
                <div
                    id="container"
                    className="w-5/6 md:w-1/2 flex flex-col overscroll-none"
                >
                    <header className="p-4">
                        <h1 id="site-title" className="hidden">
                            {app.title}
                        </h1>
                        <p id="tagline" className="hidden">
                            {app.tagline}
                        </p>
                        <span id="welcome" className="text-2xl">
                            {app.welcome}
                        </span>
                    </header>
                    <main className="">{children}</main>
                </div>
            </body>
        </html>
    );
}
