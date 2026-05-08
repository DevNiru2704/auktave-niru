import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Organizing Committee | AUKTAVE",
    description: "Meet the organizing committee leading AUKTAVE 2K26 across coordination, technology, media, security, logistics, and sponsorship.",
    path: "/teams",
    keywords: ["AUKTAVE team", "organizing committee", "Amity techfest coordinators"]
});

export default function TeamsLayout({ children }: { children: ReactNode }) {
    return children;
}
