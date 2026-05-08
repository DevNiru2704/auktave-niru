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

    return buildPageMetadata({
        title: `${event.name} | AUKTAVE Event`,
        description: event.summary,
        path: `/events/${event.slug}`,
        type: "article",
        keywords: [
            event.name,
            "AUKTAVE event",
            "AUKTAVE 2K26",
            event.tagline,
            "Amity University Kolkata"
        ]
    });
}

export default function EventSlugLayout({ children }: { children: ReactNode }) {
    return children;
}
