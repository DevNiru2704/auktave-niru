"use client";
import { useEffect, useState } from "react";

export default function Countdown({ target = "2026-05-21T09:00:00+05:30" }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = new Date(target).getTime() - now.getTime();
      if (t <= 0) { setTime({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setTime({
        d: Math.floor(t / 86400000),
        h: Math.floor((t / 3600000) % 24),
        m: Math.floor((t / 60000) % 60),
        s: Math.floor((t / 1000) % 60)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const Cell = ({ value, label }) => (
    <div className="flex flex-col items-center" data-testid={`countdown-${label.toLowerCase()}`}>
      <div className="card-upside w-full px-4 py-6 sm:px-6 sm:py-8 text-center">
        <span className="headline text-5xl sm:text-6xl text-signal block leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="eyebrow mt-3">{label}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5 w-full max-w-2xl mx-auto" data-testid="countdown-timer">
      <Cell value={time.d} label="Days" />
      <Cell value={time.h} label="Hours" />
      <Cell value={time.m} label="Minutes" />
      <Cell value={time.s} label="Seconds" />
    </div>
  );
}
