import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Private Finance Interface",
    description: "Private route for internal finance operations.",
    path: "/finance",
    index: false
});

export default function FinanceLayout({ children }: { children: ReactNode }) {
    return children;
}
