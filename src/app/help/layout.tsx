import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Help And Contact | AUKTAVE",
    description: "Send your query to the AUKTAVE 2K26 team, browse field manual FAQs, and locate the event venue at Amity University Kolkata.",
    path: "/help",
    ogTitle: "Need Help At AUKTAVE 2K26",
    twitterTitle: "Need Help At AUKTAVE",
    keywords: ["AUKTAVE help", "AUKTAVE contact", "TechFest FAQ", "Amity Kolkata event contact"]
});

export default function HelpLayout({ children }: { children: ReactNode }) {
    return children;
}
