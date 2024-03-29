import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "picton-blue": {
                    "50": "#f0faff",
                    "100": "#e0f5fe",
                    "200": "#bae8fd",
                    "300": "#7dd5fc",
                    "400": "#38bcf8",
                    "500": "#0ea5e9",
                    "600": "#028ac7",
                    "700": "#0370a1",
                    "800": "#075e85",
                    "900": "#0c506e",
                    "950": "#083549",
                },
                gallery: {
                    "50": "#f8f8f8",
                    "100": "#ebebeb",
                    "200": "#dcdcdc",
                    "300": "#bdbdbd",
                    "400": "#989898",
                    "500": "#7c7c7c",
                    "600": "#656565",
                    "700": "#525252",
                    "800": "#464646",
                    "900": "#3d3d3d",
                    "950": "#292929",
                },
                mako: {
                    "50": "#f7f8f8",
                    "100": "#eeeef0",
                    "200": "#d9dade",
                    "300": "#b7b9c2",
                    "400": "#9093a0",
                    "500": "#727685",
                    "600": "#5c5f6d",
                    "700": "#474954",
                    "800": "#41434b",
                    "900": "#393a41",
                    "950": "#26272b",
                },
                crimson: {
                    "50": "#fff1f2",
                    "100": "#fee5e7",
                    "200": "#fdced3",
                    "300": "#faa7af",
                    "400": "#f77585",
                    "500": "#ef445f",
                    "600": "#d62246",
                    "700": "#b9173c",
                    "800": "#9b1638",
                    "900": "#851636",
                    "950": "#4a0719",
                },
                "cod-gray": {
                    "50": "#f4f6f7",
                    "100": "#e4e8e9",
                    "200": "#cbd3d6",
                    "300": "#a7b3b9",
                    "400": "#7b8c95",
                    "500": "#60707a",
                    "600": "#525f68",
                    "700": "#475157",
                    "800": "#3f454b",
                    "900": "#383d41",
                    "950": "#090a0b",
                },
                'white-lilac': {
                  '50': '#f8f8ff',
                  '100': '#e9e9fe',
                  '200': '#d6d6fe',
                  '300': '#b8b5fd',
                  '400': '#948bfa',
                  '500': '#715cf6',
                  '600': '#5e3aed',
                  '700': '#4f28d9',
                  '800': '#4221b6',
                  '900': '#381d95',
                  '950': '#201065',
              },
              
            },
        },
    },
    plugins: [],
};
export default config;
