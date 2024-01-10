import type { Metadata } from "next";
import "./globals.css";
import { Applicaiton } from "./app";
import HeroImage from "@/components/HeroImage";

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
            <head>
                <link rel="manifest" href="manifest.json" />
            </head>
            <body className="flex justify-center overflow-hidden">
                <div
                    id="container"
                    className="w-full h-screen flex flex-col content-center overscroll-none"
                >
                    <header className="grow-0 p-4 bg-sky-500 text-white border-collapse border-none flex">
                        <h1 id="site-title" className="hidden">
                            {app.title}
                        </h1>
                        <p id="tagline" className="hidden">
                            {app.tagline}
                        </p>
                        <span id="welcome" className="text-2xl">
                            {app.welcome}
                        </span>
                        <div className="menu-container flex-right">
                            <button
                                type="button"
                                className="button border-2 border-white p-4 rounded-sm"
                            >
                                <i className="icon color-white">
                                    <svg
                                        viewBox="0 0 100 80"
                                        width="40"
                                        height="40"
                                    >
                                        <rect width="100" height="20"></rect>
                                        <rect
                                            y="30"
                                            width="100"
                                            height="20"
                                        ></rect>
                                        <rect
                                            y="60"
                                            width="100"
                                            height="20"
                                        ></rect>
                                    </svg>
                                    Menu
                                </i>
                            </button>
                        </div>
                    </header>
                    <main className="grow overflow-y-auto">{children}</main>
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
