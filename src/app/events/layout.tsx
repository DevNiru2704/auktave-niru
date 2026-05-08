import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Events At AUKTAVE 2K26",
    description: "Explore all AUKTAVE 2K26 events including Hackathon, Robotics, Research Expo, Tech Debate, AI Film, and more.",
    path: "/events",
    keywords: ["AUKTAVE events", "TechFest events", "Hackathon", "Robotics", "AI Film", "Research Expo"]
});

export default function EventsLayout({ children }: { children: ReactNode }) {
    return children;
}
