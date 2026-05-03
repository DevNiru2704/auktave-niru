"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { events } from "@/lib/data";
import GlitchText from "@/components/GlitchText";
import { Clock, Users, Trophy, Phone, Mail, FileDown, ArrowLeft, Zap } from "lucide-react";
import { notFound } from "next/navigation";

export default function EventDetailPage() {
  const params = useParams();
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid={`event-detail-${event.slug}`}>
      <div className="max-w-6xl mx-auto">
        <Link href="/events" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone/60 hover:text-ember mb-8" data-testid="back-to-events">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-8">
            <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">{event.name}</GlitchText>
            <p className="text-2xl text-bone/70 font-display max-w-2xl">{event.tagline}</p>
            <p className="mt-6 text-bone/70 leading-relaxed text-lg max-w-2xl">{event.summary}</p>

            {event.tracks && (
              <div className="mt-8">
                <p className="eyebrow mb-3">/ Tracks</p>
                <div className="flex flex-wrap gap-2">
                  {event.tracks.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Stat icon={Clock} label="Duration" value={event.duration} />
            <Stat icon={Users} label="Team Size" value={event.teamSize} />
            <Stat icon={Trophy} label="Prize Pool" value={event.prizePool} accent />
            <Link href="/register" className="btn-signal w-full block text-center mt-4" data-testid="event-register-cta">
              Register Now
            </Link>
            <a
              href="/brochures/event-rules.pdf"
              download
              className="btn-ghost w-full flex items-center justify-center gap-2"
              data-testid="event-rules-download"
            >
              <FileDown size={16} /> Download Rules PDF
            </a>
          </div>
        </div>

        {/* Rules */}
        <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-rules-section">
          <p className="eyebrow mb-4">/ Rules</p>
          <h2 className="headline text-3xl lg:text-4xl mb-6">Read before you cross over</h2>
          <ol className="space-y-4">
            {event.rules.map((r, i) => (
              <li key={i} className="flex gap-5 text-bone/80 leading-relaxed">
                <span className="font-mono text-ember text-sm pt-1 w-10 shrink-0">/{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{r}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Coordinator */}
        <div className="card-upside p-8 lg:p-10" data-testid="event-coordinator">
          <p className="eyebrow mb-4">/ Field Coordinator</p>
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="headline text-3xl">{event.coordinator.name}</h3>
              <p className="text-ember font-mono text-xs uppercase tracking-[0.2em] mt-1">{event.coordinator.role}</p>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <a href={`tel:${event.coordinator.phone}`} className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors"><Phone size={14} /> {event.coordinator.phone}</a>
              <a href={`mailto:${event.coordinator.email}`} className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors break-all"><Mail size={14} /> {event.coordinator.email}</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="headline text-4xl mb-6">Ready to play?</h3>
          <Link href="/register" className="btn-signal" data-testid="event-bottom-cta">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div className="card-upside p-5">
      <div className="flex items-start gap-3">
        <Icon className={accent ? "text-signal" : "text-ember"} size={20} />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">{label}</p>
          <p className={`headline text-2xl mt-1 ${accent ? "text-signal" : "text-bone"}`}>{value}</p>
        </div>
      </div>
    </div>
  );
}
