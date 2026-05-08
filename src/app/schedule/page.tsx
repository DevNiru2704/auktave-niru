"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import { day1, day2 } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-signal"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

type ScheduleEntry = {
    title: string;
    time: string;
    venue?: string;
    note: string;
};

type ScheduleColumnProps = {
    day: string;
    date: string;
    entries: ScheduleEntry[];
    accent: "ember" | "signal";
};

export default function SchedulePage() {
    return (
        <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="schedule-page">
            <div className="max-w-6xl mx-auto">
                <p className="eyebrow mb-4">/ Schedule</p>
                <GlitchText as="h1" className="text-6xl lg:text-8xl mb-8">The 48 Hour Timeline</GlitchText>
                <p className="text-bone/70 text-lg lg:text-xl max-w-3xl leading-relaxed mb-10">
                    Everything you need to know about the AUKTAVE 2K26 schedule across the two-day event.
                </p>

                <div className="mb-10">
                    <a href="/brochures/EVENT_SCHEDULE_AUKTAVE_2026.pdf" download className="btn-signal inline-flex items-center gap-2" data-testid="download-schedule">
                        Download Schedule
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    <ScheduleColumn day="Day 01" date="May 21, 2026" entries={day1} accent="ember" />
                    <ScheduleColumn day="Day 02" date="May 22, 2026" entries={day2} accent="signal" />
                </div>

                <div className="flex flex-wrap gap-4">
                    <Link href="/about" className="btn-signal">Learn More About AUKTAVE</Link>
                    <Link href="/events" className="btn-ghost">Browse Events</Link>
                    <Link href="/register" className="btn-ghost">Register Now</Link>
                </div>

                {/* Follow us section */}
                <div className="mt-20 text-center card-upside p-12">
                  <div className="flex justify-center mb-4">
                    <InstagramIcon />
                  </div>
                  <p className="eyebrow mb-4">/ Stay Connected</p>
                  <h3 className="headline text-3xl mb-6">Follow us on Instagram</h3>
                  <a
                    href="https://www.instagram.com/auktave_2026?igsh=MTVuYWVxcTgyMGRjYQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-signal font-mono text-sm uppercase tracking-[0.2em] hover:gap-4 transition-all"
                  >
                    @auktave_2026
                    <span className="text-ember">↗</span>
                  </a>
                </div>
            </div>
        </div>
    );
}

function ScheduleColumn({ day, date, entries, accent }: ScheduleColumnProps) {
    const accentClass = accent === "ember" ? "text-ember" : "text-signal";
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-upside p-7" data-testid={`schedule-${day.replace(/ /g, "-").toLowerCase()}`}>
            <div className="flex items-baseline justify-between mb-6">
                <h3 className={`headline text-3xl ${accentClass}`}>{day}</h3>
                <span className="font-mono text-xs text-bone/50 uppercase tracking-[0.18em]">{date}</span>
            </div>
            <ul className="space-y-5">
                {entries.map((e, i) => (
                    <li key={e.title} className="flex gap-5 group">
                        <span className={`font-mono text-xs ${accentClass} pt-1 w-44 md:w-52 shrink-0 uppercase tracking-[0.08em]`}>{e.time}</span>
                        <span className="w-px bg-bone/10 group-hover:bg-ember/40 transition-colors" />
                        <div className="flex-1">
                            <p className="font-display text-lg font-bold">{e.title}</p>
                            {e.venue && <p className="text-bone/60 text-[10px] font-mono uppercase tracking-[0.16em] mt-1">Venue - {e.venue}</p>}
                            <p className="text-bone/50 text-[11px] mt-2 uppercase tracking-[0.08em] leading-relaxed">{e.note}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
