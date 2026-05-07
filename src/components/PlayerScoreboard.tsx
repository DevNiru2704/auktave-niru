"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Activity } from "lucide-react";

const COUNTER_NS = "auktave-2k26";
const COUNTER_KEY = "players";
const BASELINE = 1187;
const TARGET = 500;
const COUNTER_BASE = "https://abacus.jasoncameron.dev";

export async function incrementScoreboard() {
  try {
    await fetch(`${COUNTER_BASE}/hit/${COUNTER_NS}/${COUNTER_KEY}`, { cache: "no-store" });
  } catch { }
}

function useAnimatedNumber(target: number, duration: number = 1600): [React.RefObject<HTMLDivElement | null>, number] {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return [ref, value];
}

export default function PlayerScoreboard({ variant = "full" }) {
  const [count, setCount] = useState(BASELINE);
  const [loaded, setLoaded] = useState(false);
  const total = count;
  const [ref, animated] = useAnimatedNumber(total);

  useEffect(() => {
    let cancelled = false;
    fetch(`${COUNTER_BASE}/get/${COUNTER_NS}/${COUNTER_KEY}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (typeof data.value === "number") {
          setCount(BASELINE + data.value);
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
    return () => { cancelled = true; };
  }, []);

  const pct = Math.min(100, Math.round((total / TARGET) * 100));
  const slotsLeft = Math.max(0, TARGET - total);

  if (variant === "compact") {
    return (
      <div ref={ref} className="card-upside p-6" data-testid="scoreboard-compact">
        <div className="flex items-center justify-between mb-3">
          <p className="eyebrow inline-flex items-center gap-2"><Activity size={11} className="text-ember animate-pulse" /> Live Feed / Hawkins</p>
          <span className="font-mono text-[10px] tracking-[0.18em] text-bone/50 uppercase">
            {loaded ? "SYNCED" : "BOOTING"}
          </span>
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between"><span className="text-bone/50">PORTAL</span><span className="text-signal">OPEN</span></div>
          <div className="flex justify-between items-baseline">
            <span className="text-bone/50">PARTICIPANTS</span>
            <span className="text-bone tabular-nums">
              <span className="headline text-2xl text-signal">{animated.toLocaleString("en-IN")}</span>
              <span className="text-bone/50 ml-1">/ {TARGET.toLocaleString("en-IN")}</span>
            </span>
          </div>
          <div className="h-0.75 bg-ember/15 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-linear-to-r from-ember to-signal shadow-signal"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
          <div className="flex justify-between"><span className="text-bone/50">SIGNAL</span><span className="text-ember">SCRAMBLED</span></div>
          <div className="flex justify-between"><span className="text-bone/50">PRIZE POOL WORTH</span><span className="text-signal">₹1.5L+</span></div>
          <div className="flex justify-between"><span className="text-bone/50">IEEE SB AUK LINK</span><span className="text-ember animate-flicker">CONNECTED</span></div>
        </div>
        <div className="mt-4 loading-bar" />
        <p className="font-mono text-[10px] mt-3 text-bone/40">
          {slotsLeft > 0 ? `${slotsLeft.toLocaleString("en-IN")} slots before the portal closes.` : "Portal capacity reached. Waitlist only."}
        </p>
      </div>
    );
  }

  return (
    <section ref={ref} className="relative py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/30 overflow-hidden" data-testid="scoreboard-section">
      <div className="absolute inset-0 vines-bg pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4 inline-flex items-center gap-2"><Activity size={12} className="text-ember animate-pulse" /> / Live Counter</p>
          <h2 className="headline text-5xl lg:text-7xl leading-[0.9] mb-5">
            Participants locked into the <span className="text-ember">grid</span>
          </h2>
          <p className="text-bone/70 leading-relaxed max-w-md">
            Live count from the AUKTAVE portal. Every successful registration increments the grid in real time. The first 500 enter. After that, only static.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="card-upside p-7 lg:p-10" data-testid="scoreboard-card">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <p className="eyebrow mb-2"><Users size={11} className="inline mr-1" /> Total Participants</p>
                <p className="headline text-7xl lg:text-8xl text-signal tabular-nums leading-none" data-testid="scoreboard-count">
                  {animated.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-right sm:text-right">
                <p className="eyebrow mb-1">Capacity</p>
                <p className="headline text-3xl text-bone/70">/ {TARGET.toLocaleString("en-IN")}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember mt-2 animate-flicker">
                  {pct}% Full
                </p>
              </div>
            </div>

            <div className="h-3 bg-midnight border border-ember/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-linear-to-r from-ember via-glow to-signal shadow-[0_0_24px_rgba(255,230,0,0.4)]"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
                data-testid="scoreboard-bar"
              />
              {/* Markers */}
              <div className="absolute top-0 bottom-0 left-1/4 w-px bg-ink/60" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-ink/60" />
              <div className="absolute top-0 bottom-0 left-3/4 w-px bg-ink/60" />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-ember/10">
              <Stat label="Slots Left" value={slotsLeft.toLocaleString("en-IN")} accent />
              <Stat label="Status" value={pct >= 90 ? "Critical" : pct >= 60 ? "Filling Fast" : "Open"} />
              <Stat label="Last Sync" value={loaded ? "Just now" : "..."} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">{label}</p>
      <p className={`headline text-xl mt-1 ${accent ? "text-signal" : "text-bone"}`}>{value}</p>
    </div>
  );
}
