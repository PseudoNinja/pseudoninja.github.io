import type { Metadata } from "next";
import "./globals.css";
import { Applicaiton } from "./app";

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
            <body className="justify-center">
                <main>{children}</main>
            </body>
        </html>
    );
}
