import type { Metadata } from "next";
import "./globals.css";
import app from "./app";
import HeroImage from "@/components/HeroImage";
import { useEffect, useState } from "react";

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
                {children}
            </body>
        </html>
    );
}
