import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Robotics Competition | AUKTAVE",
    description: "Enter the robotics league at AUKTAVE 2K26 with Robo Soccer, Maze Solver, and Drone Obstacle Course.",
    path: "/events/robotics",
    keywords: ["AUKTAVE robotics", "Robo Soccer", "Maze Solver", "Drone Obstacle Course", "Robotics competition Kolkata"],
    type: "article"
});

export default function RoboticsLayout({ children }: { children: ReactNode }) {
    return children;
}
