import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "About AUKTAVE 2K26",
    description: "Read the case file of AUKTAVE 2K26, the first edition TechFest at Amity University Kolkata where innovation meets the upside down.",
    path: "/about",
    ogTitle: "Discover The Story Of AUKTAVE 2K26",
    twitterTitle: "Discover The Story Of AUKTAVE",
    keywords: ["About AUKTAVE", "Amity TechFest", "AUKTAVE story", "AS ETK", "IEEE SB AUK"]
});

export default function AboutLayout({ children }: { children: ReactNode }) {
    return children;
}
