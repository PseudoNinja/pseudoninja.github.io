import type { Metadata } from "next";
import "./globals.css";
import { Applicaiton } from "./app";
import HeroImage from "@/components/HeroImage";
import Button from "@/components/Button";

export const app = new Applicaiton();

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
                    className="w-full h-screen flex flex-col content-center overscroll-none"
                >
                    <header className="grow-0 p-4 bg-sky-500 text-white border-collapse border-none">
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
                    <main className="grow overflow-y-auto">{children}</main>
                    <footer
                        id="dashhboard-footer"
                        className="grow-0 p-4 bg-mako-700 flex justfiy-center rounded-t-lg"
                    >
                        <button>{app.lang.translate("LinkedIn")}</button>
                        <button>{app.lang.translate("call me")}</button>
                        <button>{app.lang.translate("GitHub")}</button>
                        <button>{app.lang.translate("Twitter")}</button>
                    </footer>
                </div>
            </body>
        </html>
    );
}
