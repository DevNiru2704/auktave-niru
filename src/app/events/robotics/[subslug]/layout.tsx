import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";

type LayoutProps = {
    children: ReactNode;
    params: Promise<{ subslug: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const { subslug } = await params;
    const robotics = events.find((item) => item.slug === "robotics");
    const subEvent = robotics?.subEvents?.find((item) => item.slug === subslug);

    if (!subEvent) {
        return buildPageMetadata({
            title: "Robotics Sub Event Not Found",
            description: "This robotics sub event could not be found.",
            path: `/events/robotics/${subslug}`,
            index: false
        });
    }

    const detailParts = [subEvent.tagline, subEvent.duration, subEvent.teamSize, subEvent.prizePool].filter(Boolean);
    const enrichedDescription = `${subEvent.summary} ${detailParts.join(" | ")}`.trim();

    return buildPageMetadata({
        title: `${subEvent.name} | Robotics | AUKTAVE`,
        description: enrichedDescription,
        path: `/events/robotics/${subEvent.slug}`,
        type: "article",
        keywords: [
            subEvent.name,
            "AUKTAVE robotics",
            "AUKTAVE 2K26",
            subEvent.tagline,
            subEvent.duration,
            subEvent.teamSize,
            subEvent.prizePool
        ].filter(Boolean) as string[]
    });
}

export default function RoboticsSubLayout({ children }: { children: ReactNode }) {
    return children;
}
