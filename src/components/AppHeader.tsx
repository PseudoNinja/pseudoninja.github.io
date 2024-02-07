"use client";

import app from "@/app/app";
import React, { useState, useEffect } from "react";
import HeroImage from "@/components/HeroImage";

const AppHeader = () => {
    const [showSmallLogo, setShowSmallLogo] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const largeLogo = document.getElementById("large-logo");
            const largeLogoHeight =
                largeLogo != null ? largeLogo.offsetHeight : 0;

            if (scrollPosition >= largeLogoHeight) {
                setShowSmallLogo(true);
            } else {
                setShowSmallLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="app-header"
            className="app-header grow-0 p-4 bg-sky-500 text-white border-collapse border-none flex"
        >
            <h1 id="site-title" className="hidden">
                {app.title}
            </h1>
            <span id="welcome" className="text-2xl">
                {app.welcome}
            </span>
            <div className="spacer flex-1"></div>
            {showSmallLogo && <HeroImage id="app-header-logo" size={32} />}
        </header>
    );
};

export default AppHeader;
