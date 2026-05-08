import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";

type LayoutProps = {
    children: ReactNode;
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const { slug } = await params;
    const event = events.find((item) => item.slug === slug);

    if (!event) {
        return buildPageMetadata({
            title: "Event Not Found",
            description: "This event could not be found in the AUKTAVE timeline.",
            path: `/events/${slug}`,
            index: false
        });
    }

    const detailParts = [event.tagline, event.duration, event.teamSize, event.prizePool].filter(Boolean);
    const enrichedDescription = `${event.summary} ${detailParts.join(" | ")}`.trim();

    return buildPageMetadata({
        title: `${event.name} | AUKTAVE Event`,
        description: enrichedDescription,
        path: `/events/${event.slug}`,
        type: "article",
        keywords: [
            event.name,
            "AUKTAVE event",
            "AUKTAVE 2K26",
            event.tagline,
            event.duration,
            event.teamSize,
            event.prizePool,
            "Amity University Kolkata"
        ].filter(Boolean) as string[]
    });
}

export default function EventSlugLayout({ children }: { children: ReactNode }) {
    return children;
}
