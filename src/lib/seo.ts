import type { Metadata } from "next";

const SITE_URL = "https://auktave.co.in";
const INSTAGRAM_URL = "https://www.instagram.com/auktave_2026/";

type PageSeoOptions = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    type?: "website" | "article";
    index?: boolean;
    ogTitle?: string;
    twitterTitle?: string;
};

export function getSiteUrl() {
    return SITE_URL;
}

export function toAbsoluteUrl(path: string) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${normalized}`;
}

export function getSocialProfiles() {
    return [INSTAGRAM_URL];
}

export function buildOgImageUrl(title: string, path: string) {
    const params = new URLSearchParams({
        title,
        route: path
    });
    return `${SITE_URL}/api/og?${params.toString()}`;
}

export function buildPageMetadata({
    title,
    description,
    path,
    keywords = [],
    type = "website",
    index = true,
    ogTitle,
    twitterTitle
}: PageSeoOptions): Metadata {
    const ogImageUrl = buildOgImageUrl(title, path);
    const resolvedOgTitle = ogTitle || title;
    const resolvedTwitterTitle = twitterTitle || ogTitle || title;

    return {
        title,
        description,
        alternates: {
            canonical: path
        },
        keywords,
        openGraph: {
            title: resolvedOgTitle,
            description,
            url: toAbsoluteUrl(path),
            siteName: "AUKTAVE 2K26",
            locale: "en_IN",
            type,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${title} social preview`
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: resolvedTwitterTitle,
            description,
            images: [ogImageUrl]
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
