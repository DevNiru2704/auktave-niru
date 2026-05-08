"use client";
import GlitchText from "@/components/GlitchText";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";

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

export default function EventsPage() {
  const hackathon = events.find((e) => e.slug === "hackathon");
  const flagshipEvents = events.filter((e) => e.highlight);
  const sideEvents = events.filter((e) => !e.highlight);
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="events-page">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow mb-4">/ Roster</p>
        <GlitchText as="h1" className="text-6xl lg:text-8xl mb-6">Events</GlitchText>
        <p className="text-bone/70 text-lg max-w-2xl mb-14">
          Seven events. One arena. Pick the ones that match your edge. The Hackathon is the headline, but every event has the same prestige and prizes proportional to the challenge.
        </p>

        <div className="mb-14" data-testid="featured-hackathon">
          <p className="eyebrow mb-4">/ Flagship Events</p>
          <div className="grid md:grid-cols-2 gap-5">
            {flagshipEvents.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>

        <p className="eyebrow mb-4">/ Side Events</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sideEvents.map((e, i) => (
            <EventCard key={e.slug} event={e} index={i} />
          ))}
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
