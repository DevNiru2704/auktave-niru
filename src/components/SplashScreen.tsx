"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "./LenisProvider";

type SplashScreenProps = {
  onDismiss?: () => void;
};

export default function SplashScreen({ onDismiss }: SplashScreenProps) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 99) return p;
        return Math.min(99, p + Math.random() * 6 + 2);
      });
    }, 80);

    // Decouple splash completion from media/network readiness.
    const completeAt = setTimeout(() => setProgress(100), 2200);
    const hideAt = setTimeout(() => setShow(false), 2800);

    return () => {
      clearInterval(id);
      clearTimeout(completeAt);
      clearTimeout(hideAt);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (!lenis) return;

    if (show) {
      lenis.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Clear overflow first to allow scroll
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // Force a reflow to ensure styles are applied
      void document.documentElement.offsetHeight;

      // Re-enable Lenis and reset scroll position
      lenis.start();

      // Force Lenis to process the scroll state
      window.scrollTo(0, 0);
    }
  }, [show, lenis]);

  useEffect(() => {
    // Final fail-safe: splash should never block the homepage indefinitely.
    const forceHide = setTimeout(() => setShow(false), 7000);
    return () => clearTimeout(forceHide);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => onDismiss?.()}>
      {show && (
        <motion.div
          initial={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -8 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed inset-0 z-100 bg-ink flex flex-col items-center justify-center"
          data-testid="splash-screen"
        >
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
          <div className="absolute inset-0 vines-bg pointer-events-none" />
          <div className="relative text-center px-6">
            <p className="eyebrow mb-4 animate-flicker">Transmission Incoming</p>
            <h1 className="headline glitch-text text-4xl sm:text-6xl lg:text-7xl mb-3" data-text="ENTER THE UPSIDE DOWN">
              ENTER THE UPSIDE DOWN
            </h1>
            <p className="headline text-2xl sm:text-3xl text-ember mb-10">OF INNOVATION</p>

            <div className="w-72 sm:w-96 mx-auto">
              <div className="h-0.5 bg-ember/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-signal shadow-signal transition-all duration-150"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15 }}
                />
              </div>
              <div className="flex justify-between font-mono text-[10px] mt-3 tracking-[0.2em] text-bone/50">
                <span>SYNC {Math.floor(progress)}%</span>
                <span className="text-ember">HAWKINS LAB - 1986</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
