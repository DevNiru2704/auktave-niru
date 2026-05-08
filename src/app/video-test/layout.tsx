import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Private Video Test",
    description: "Private route for internal video rendering checks.",
    path: "/video-test",
    index: false
});

export default function VideoTestLayout({ children }: { children: ReactNode }) {
    return children;
}
