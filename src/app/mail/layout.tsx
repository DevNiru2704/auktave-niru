import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Private Mail Interface",
    description: "Private route for internal mail operations.",
    path: "/mail",
    index: false
});

export default function MailLayout({ children }: { children: ReactNode }) {
    return children;
}
