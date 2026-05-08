import type { Metadata } from "next";

const SITE_URL = "https://auktave.in";
const OG_IMAGE = "/images/auktave_logo.png";

type PageSeoOptions = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    type?: "website" | "article";
    index?: boolean;
};

export function getSiteUrl() {
    return SITE_URL;
}

export function toAbsoluteUrl(path: string) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${normalized}`;
}

export function buildPageMetadata({
    title,
    description,
    path,
    keywords = [],
    type = "website",
    index = true
}: PageSeoOptions): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: path
        },
        keywords,
        openGraph: {
            title,
            description,
            url: toAbsoluteUrl(path),
            siteName: "AUKTAVE 2K26",
            locale: "en_IN",
            type,
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: "AUKTAVE 2K26 official banner"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE]
        },
        robots: {
            index,
            follow: index,
            nocache: !index,
            googleBot: {
                index,
                follow: index,
                "max-image-preview": "large",
                "max-snippet": index ? -1 : 0,
                "max-video-preview": index ? -1 : 0
            }
        }
    };
}
