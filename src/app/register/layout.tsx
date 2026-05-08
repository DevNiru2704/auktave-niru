import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Register For AUKTAVE 2K26",
    description: "Register for AUKTAVE 2K26 events through the official form and review participation rules before entering the arena.",
    path: "/register",
    ogTitle: "Register Now For AUKTAVE 2K26",
    twitterTitle: "Register Now For AUKTAVE 2K26",
    keywords: ["AUKTAVE registration", "register techfest", "AUKTAVE 2K26 form", "Amity event registration"]
});

export default function RegisterLayout({ children }: { children: ReactNode }) {
    return children;
}
