import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Terms And Conditions | AUKTAVE",
    description: "Review AUKTAVE 2K26 terms and conditions for eligibility, conduct, refunds, liability, and participation guidelines.",
    path: "/terms",
    keywords: ["AUKTAVE terms", "event terms and conditions", "TechFest guidelines"]
});

export default function TermsLayout({ children }: { children: ReactNode }) {
    return children;
}
