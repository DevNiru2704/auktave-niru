"use client";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-32 pb-24 px-5 lg:px-10 vines-bg flex items-center" data-testid="not-found-page">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4 animate-flicker">/ Hawkins / Sector 7</p>
        <h1 className="headline text-[28vw] sm:text-[18vw] lg:text-[14rem] leading-none text-ember">
          <span className="glitch-text" data-text="404">404</span>
        </h1>
        <GlitchText as="h2" className="text-3xl lg:text-5xl mt-2 mb-6">Something went wrong in Hawkins</GlitchText>
        <p className="text-bone/70 max-w-md mx-auto mb-10 text-lg">
          This page slipped into the upside down and never came back. Let us pull you back to safety.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-signal" data-testid="404-home-cta">Return Home</Link>
          <Link href="/events" className="btn-ghost">Browse Events</Link>
        </div>
      </div>
    </div>
  );
}
