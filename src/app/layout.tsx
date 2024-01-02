import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageDataService } from "./lang";

const inter = Inter({ subsets: ["latin"] });

const lang: LanguageDataService = new LanguageDataService(navigator.language);

export const metadata: Metadata = {
    title: lang.data.title, // 'Eric Miller - Professional Problem Solver & People Leader',
    description: lang.data.description, //'Eric Miller is a professional problem solver and people leader from Omaha, Nebraska. Eric is a Full-stack developer with over 20 years of experience.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang={navigator.language}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
