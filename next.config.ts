import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Must be set for static export
    images: {
        unoptimized: true, // Required for next/image in static export
    },
    // Optional: Uncomment if deploying to a subdirectory (e.g., username.github.io/resume-site)
    // basePath: '/resume-site',
};

export default nextConfig;

// Debug logging
console.log("next.config.ts loaded with output:", nextConfig.output);
