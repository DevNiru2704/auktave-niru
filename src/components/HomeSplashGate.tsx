"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import AudioEntryGate from "@/components/AudioEntryGate";
import { useSplashGate } from "@/contexts/SplashGateContext";

export default function HomeSplashGate() {
    const pathname = usePathname();
    const hasSeenSplash = useRef(false);
    const [showSplash, setShowSplash] = useState(false);
    const [showGate, setShowGate] = useState(false);
    const { setIsGateActive } = useSplashGate();

    useEffect(() => {
        if (pathname !== "/") {
            setShowGate(false);
            setShowSplash(false);
            setIsGateActive(false);
            return;
        }

        const choice = sessionStorage.getItem("auktave-audio-choice");
        if (!choice) {
            setShowGate(true);
            setShowSplash(false);
            setIsGateActive(true);
            return;
        }

        if (!hasSeenSplash.current) {
            hasSeenSplash.current = true;
            setShowSplash(true);
            setIsGateActive(true);
            return;
        }

        setShowSplash(false);
        setIsGateActive(false);
    }, [pathname, setIsGateActive]);

    if (showGate) {
        return (
            <AudioEntryGate
                onSelect={() => {
                    setShowGate(false);
                    setIsGateActive(false);
                    if (!hasSeenSplash.current) {
                        hasSeenSplash.current = true;
                        setShowSplash(true);
                        setIsGateActive(true);
                    }
                }}
            />
        );
    }

    if (!showSplash) return null;

    return <SplashScreen onDismiss={() => {
        setShowSplash(false);
        setIsGateActive(false);
    }} />;
}