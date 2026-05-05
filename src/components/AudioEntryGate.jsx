"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CHOICE_KEY = "auktave-audio-choice";

export default function AudioEntryGate({ onSelect }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const choice = sessionStorage.getItem(CHOICE_KEY);
        if (choice) {
            onSelect?.(choice);
            return;
        }
        setShow(true);
    }, [onSelect]);

    const handleSelect = (choice) => {
        sessionStorage.setItem(CHOICE_KEY, choice);
        if (choice === "on") {
            sessionStorage.setItem("auktave-audio-playing", "1");
            sessionStorage.setItem("auktave-audio-muted", "0");
        } else {
            sessionStorage.setItem("auktave-audio-playing", "0");
            sessionStorage.setItem("auktave-audio-muted", "1");
        }
        setShow(false);
        onSelect?.(choice);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-100 bg-ink flex items-center justify-center"
                    data-testid="audio-entry-gate"
                >
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 vines-bg pointer-events-none" />
                    <div className="relative px-6 w-full max-w-2xl">
                        <div className="card-upside p-7 sm:p-10 text-center">
                            <p className="eyebrow mb-4">/ Audio Gate</p>
                            <div className="flex justify-center mb-5">
                                <Image
                                    src="/images/auktave_logo.png"
                                    alt="AUKTAVE"
                                    width={260}
                                    height={56}
                                    priority
                                    className="w-full max-w-60 h-auto"
                                />
                            </div>
                            <h1 className="headline text-3xl sm:text-4xl lg:text-5xl mb-4">Enter the Upside Down</h1>
                            <p className="text-bone/70 text-base sm:text-lg mb-8">Choose your entry mode. You can toggle audio later from the corner control.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    type="button"
                                    className="btn-signal"
                                    onClick={() => handleSelect("on")}
                                    data-testid="enter-with-audio"
                                >
                                    Enter with Audio
                                </button>
                                <button
                                    type="button"
                                    className="btn-ghost"
                                    onClick={() => handleSelect("off")}
                                    data-testid="enter-without-audio"
                                >
                                    Enter Without Audio
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
