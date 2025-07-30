import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Eric Miller - IT Leader",
    description:
        "Eric Miller is a seasoned tech leader and full-stack engineer with over 20 years of experience driving impactful projects in finance, healthcare, and defense. Based in Omaha, NE, he’s led high-performing teams at places like A-S Medication Solutions and Moody’s Analytics, delivering complex software solutions using tools like .NET, React, AWS, and Azure while mastering Agile practices. Known for turning around critical initiatives, like a decade-delayed project at A-S, Eric blends strategic vision with hands-on expertise. Outside work, he’s a dedicated family man with two teenage kids, a Midwest native, and a passionate volunteer with Team Rubicon, aiding communities in crisis.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
