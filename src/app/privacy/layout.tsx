import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Privacy Policy | AUKTAVE",
    description: "Read the AUKTAVE 2K26 privacy policy for data collection, usage, security, and participant rights.",
    path: "/privacy",
    keywords: ["AUKTAVE privacy", "privacy policy", "Amity TechFest policy"]
});

export default function PrivacyLayout({ children }: { children: ReactNode }) {
    return children;
}
