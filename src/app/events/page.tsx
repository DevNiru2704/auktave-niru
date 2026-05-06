"use client";
import GlitchText from "@/components/GlitchText";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";

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
      </div>
    </div>
  );
}
