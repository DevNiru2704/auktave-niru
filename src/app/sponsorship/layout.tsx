import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Sponsorship Opportunities | AUKTAVE",
    description: "Explore AUKTAVE 2K26 sponsorship tiers, brochure, and custom collaboration opportunities with Amity University Kolkata TechFest.",
    path: "/sponsorship",
    keywords: ["AUKTAVE sponsorship", "TechFest sponsor", "student event branding", "Amity Kolkata sponsorship"]
});

export default function SponsorshipLayout({ children }: { children: ReactNode }) {
    return children;
}
