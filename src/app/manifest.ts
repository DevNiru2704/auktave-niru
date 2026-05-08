import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "AUKTAVE 2K26",
        short_name: "AUKTAVE",
        description: "AUKTAVE 2K26 TechFest at Amity University Kolkata.",
        start_url: "/",
        display: "standalone",
        background_color: "#050505",
        theme_color: "#050505",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon"
            }
        ]
    };
}
