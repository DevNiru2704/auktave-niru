import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "AUKTAVE Schedule",
    description: "View the full two day schedule for AUKTAVE 2K26 including event timings, sessions, and venue timeline.",
    path: "/schedule",
    keywords: ["AUKTAVE schedule", "TechFest timeline", "AUKTAVE day 1", "AUKTAVE day 2"]
});

export default function ScheduleLayout({ children }: { children: ReactNode }) {
    return children;
}
