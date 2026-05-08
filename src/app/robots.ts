import type { MetadataRoute } from "next";

const siteUrl = "https://auktave.in";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/mail", "/finance", "/video-test"]
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl
    };
}
