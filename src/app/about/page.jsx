"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import { day1, day2 } from "@/lib/data";
import { Building2, Cpu, Eye, GraduationCap, Telescope } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="about-page">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">/ The File</p>
        <GlitchText as="h1" className="text-6xl lg:text-8xl mb-8">About AUKTAVE</GlitchText>
        <p className="text-bone/70 text-lg lg:text-xl max-w-3xl leading-relaxed mb-16">
          AUKTAVE 2K26 is the first edition TechFest at Amity University Kolkata. We turned the campus into a controlled experiment: 48 hours, 7 events, and one running theme - what happens when innovation slips into a parallel reality and crawls back changed.
        </p>

        <div className="grid lg:grid-cols-3 gap-5 mb-20">
          {[
            { icon: Building2, title: "Organized by ASETK", body: "Amity School of Engineering and Technology, Kolkata. Faculty supervision, student execution." },
            { icon: Cpu, title: "Co-Organised by IEEE SB AUK", body: "The IEEE SB AUK at Amity University Kolkata curates the technical sessions and adds the official IEEE stamp." },
            { icon: Telescope, title: "Built for builders", body: "Hackers, researchers, founders, and people who like to break things to understand them." }
          ].map((it) => (
            <div key={it.title} className="card-upside p-7" data-testid={`about-card-${it.title.replace(/ /g, "-").toLowerCase()}`}>
              <it.icon className="text-ember mb-4" size={26} />
              <h3 className="headline text-2xl mb-2">{it.title}</h3>
              <p className="text-bone/60 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="eyebrow mb-3">/ Vision</p>
            <h2 className="headline text-4xl mb-4">Innovation that disturbs the room</h2>
            <p className="text-bone/70 leading-relaxed">
              We do not want a TechFest where everyone walks away with the same group photo. We want one where a project goes home with you, an idea keeps you up, and a connection gets made that pays off three years later. AUKTAVE is built to leave a residue.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">/ Who should register</p>
            <h2 className="headline text-4xl mb-4">Participants, not spectators</h2>
            <ul className="text-bone/70 space-y-3 list-none">
              <li className="flex gap-3"><span className="text-ember">/01</span> Engineering and tech students from any college, any year</li>
              <li className="flex gap-3"><span className="text-ember">/02</span> B.Tech final years with capstone projects looking for industry feedback</li>
              <li className="flex gap-3"><span className="text-ember">/03</span> Designers and builders working on AI films, hardware, or short demos</li>
              <li className="flex gap-3"><span className="text-ember">/04</span> Founders and indie hackers shipping things on the side</li>
              <li className="flex gap-3"><span className="text-ember">/05</span> Anyone curious enough to walk into a corrupted dimension on purpose</li>
            </ul>
          </div>
        </div>

        {/* Schedule */}
        <p className="eyebrow mb-4">/ Schedule</p>
        <GlitchText as="h2" className="text-5xl lg:text-6xl mb-10">The 48 Hour Timeline</GlitchText>
        <div className="mb-10">
          <a href="/brochures/EVENT_SCHEDULE_AUKTAVE_2026.pdf" download className="btn-signal inline-flex items-center gap-2" data-testid="download-schedule">
            Download Schedule
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <ScheduleColumn day="Day 01" date="May 21, 2026" entries={day1} accent="ember" />
          <ScheduleColumn day="Day 02" date="May 22, 2026" entries={day2} accent="signal" />
        </div>

        {/* About Amity */}
        <div className="card-upside p-8 lg:p-12">
          <p className="eyebrow mb-3">/ The Host</p>
          <h2 className="headline text-4xl lg:text-5xl mb-5">Amity University Kolkata</h2>
          <p className="text-bone/70 leading-relaxed mb-4">
            Amity University Kolkata is part of the Amity Education Group, ranked among the top private universities in India. The Kolkata campus, located in Major Arterial Road, New Town, hosts ASETK and a fast growing IEEE Student Chapter. AUKTAVE is the campus first homegrown TechFest at scale, designed to put the Kolkata campus on the national tech map.
          </p>
          <p className="text-bone/70 leading-relaxed mb-4">
            Visit the official Amity University Kolkata website for campus details and updates.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://kolkata.amity.edu" target="_blank" rel="noreferrer" className="btn-signal">
              Visit Official Website
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link href="/events" className="btn-signal">Browse Events</Link>
          <Link href="/register" className="btn-ghost">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

function ScheduleColumn({ day, date, entries, accent }) {
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
