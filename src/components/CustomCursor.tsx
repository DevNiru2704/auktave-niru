"use client";

import { useEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const requestRef = useRef<number | null>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
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

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        positionRef.current = { x: centerX, y: centerY };
        targetRef.current = { x: centerX, y: centerY };

        const updateHoverState = (event: PointerEvent) => {
            const target = event.target;
            const interactive = target instanceof Element && !!target.closest("a, button, [role='button'], input, textarea, select, summary");
            setHovering(interactive);
        };

        const onPointerMove = (event: PointerEvent) => {
            targetRef.current = { x: event.clientX, y: event.clientY };
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

        const animate = () => {
            positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.16;
            positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.16;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestRef.current = window.requestAnimationFrame(animate);
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerenter", onPointerEnter);
        window.addEventListener("pointerleave", onPointerLeave);
        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("blur", onWindowBlur);
        requestRef.current = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerenter", onPointerEnter);
            window.removeEventListener("pointerleave", onPointerLeave);
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("blur", onWindowBlur);
            if (requestRef.current) {
                window.cancelAnimationFrame(requestRef.current);
            }
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