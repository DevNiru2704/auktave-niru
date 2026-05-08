import type { MetadataRoute } from "next";
import { events } from "@/lib/data";
import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();

const staticPublicRoutes = [
    "",
    "/about",
    "/events",
    "/events/robotics",
    "/help",
    "/privacy",
    "/register",
    "/schedule",
    "/sponsorship",
    "/teams",
    "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = staticPublicRoutes.map((route, index) => ({
        url: `${siteUrl}${route || "/"}`,
        lastModified: now,
        changeFrequency: index === 0 ? "daily" : "weekly",
        priority: index === 0 ? 1 : route === "/events" ? 0.95 : 0.75
    }));

    const eventEntries: MetadataRoute.Sitemap = events
        .map((event) => ({
            url: `${siteUrl}/events/${event.slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: event.highlight ? 0.9 : 0.8
        }));

    const robotics = events.find((event) => event.slug === "robotics");
    const roboticsEntries: MetadataRoute.Sitemap =
        robotics?.subEvents?.map((subEvent) => ({
            url: `${siteUrl}/events/robotics/${subEvent.slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.85
        })) ?? [];

    return [...staticEntries, ...eventEntries, ...roboticsEntries];
}
