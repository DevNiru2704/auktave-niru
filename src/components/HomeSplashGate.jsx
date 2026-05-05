"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import AudioEntryGate from "@/components/AudioEntryGate";

export default function HomeSplashGate() {
    const pathname = usePathname();
    const hasSeenSplash = useRef(false);
    const [showSplash, setShowSplash] = useState(false);
    const [showGate, setShowGate] = useState(false);

    useEffect(() => {
        if (pathname !== "/") {
            setShowGate(false);
            setShowSplash(false);
            return;
        }

        const choice = sessionStorage.getItem("auktave-audio-choice");
        if (!choice) {
            setShowGate(true);
            setShowSplash(false);
            return;
        }

        if (!hasSeenSplash.current) {
            hasSeenSplash.current = true;
            setShowSplash(true);
            return;
        }

        setShowSplash(false);
    }, [pathname]);

    if (showGate) {
        return (
            <AudioEntryGate
                onSelect={() => {
                    setShowGate(false);
                    if (!hasSeenSplash.current) {
                        hasSeenSplash.current = true;
                        setShowSplash(true);
                    }
                }}
            />
        );
    }

    if (!showSplash) return null;

    return <SplashScreen onDismiss={() => setShowSplash(false)} />;
}