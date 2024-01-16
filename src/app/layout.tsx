import type { Metadata } from "next";
import "./globals.css";
import app from "./app";
import HeroImage from "@/components/HeroImage";

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
        <html lang={app.client_language}>
            <head>
                <link rel="manifest" href="manifest.json" />
            </head>
            <body className="flex justify-center overflow-hidden">
                <div
                    id="container"
                    className="w-full h-screen flex flex-col content-center overscroll-none"
                >
                    <aside className="grow-0 p-4 bg-sky-500 text-white border-collapse border-none flex">
                        <h1 id="site-title" className="hidden">
                            {app.title}
                        </h1>
                        <span id="welcome" className="text-2xl">
                            {app.welcome}
                        </span>
                        <div className="spacer flex-1"></div>
                        <div className="invisible">
                            <HeroImage size={32} />
                        </div>
                    </aside>
                    <main className="grow overflow-y-auto">{children}</main>
                    {/* <aside className="grow-0 p-4 bg-sky-500 text-white border-collapse border-none flex justify-center">
                        <MenuButton />
                    </aside> */}
                    {/* <footer
                        id="dashhboard-footer"
                        className="grow-0 p-4 bg-mako-700 flex justify-between rounded-t-lg"
                    >
                        <button
                            type="button"
                            className="w-20 h-20 rounded-full bg-white text-center"
                        >
                            <i className="icon"></i>
                            {app.lang.translate("LinkedIn")}
                        </button>
                        <button
                            type="button"
                            className="w-20 h-20 rounded-full bg-white"
                        >
                            <i className="icon"></i>
                            {app.lang.translate("Message")}
                        </button>
                        <button
                            type="button"
                            className="w-20 h-20 rounded-full bg-white"
                        >
                            <i className="icon"></i>
                            {app.lang.translate("GitHub")}
                        </button>
                        <button
                            type="button"
                            className="w-20 h-20 rounded-full bg-white"
                        >
                            <i className="icon"></i>
                            {app.lang.translate("X")}
                        </button>
                    </footer> */}
                </div>
            </body>
        </html>
    );
}
