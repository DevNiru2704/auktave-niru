"use client";

import { useEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const mobileLike = window.matchMedia("(pointer: coarse), (hover: none), (max-width: 767px)").matches;

        if (mobileLike) {
            return;
        }

        setActive(true);
        document.body.classList.add("custom-cursor-active");

        const setCursorPosition = (x: number, y: number) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
        };

        const updateHoverState = (event: PointerEvent) => {
            const target = event.target;
            const interactive = target instanceof Element && !!target.closest("a, button, [role='button'], input, textarea, select, summary");
            setHovering(interactive);
        };

        const onPointerMove = (event: PointerEvent) => {
            setCursorPosition(event.clientX, event.clientY);
            updateHoverState(event);
            setVisible(true);
        };

        const onPointerEnter = () => setVisible(true);

        const onPointerLeave = () => {
            setHovering(false);
            setVisible(false);
        };

        const onPointerDown = (event: PointerEvent) => {
            updateHoverState(event);
            setVisible(true);
        };

        const onWindowBlur = () => setVisible(false);

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerenter", onPointerEnter);
        window.addEventListener("pointerleave", onPointerLeave);
        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("blur", onWindowBlur);

        setCursorPosition(window.innerWidth / 2, window.innerHeight / 2);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerenter", onPointerEnter);
            window.removeEventListener("pointerleave", onPointerLeave);
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("blur", onWindowBlur);
            document.body.classList.remove("custom-cursor-active");
        };
    }, []);

    if (!active) return null;

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${hovering ? "custom-cursor-hovering" : ""} ${visible ? "" : "custom-cursor-hidden"}`}
            aria-hidden="true"
        >
            <MousePointer2 className="custom-cursor-icon" size={22} strokeWidth={2.25} />
        </div>
    );
}