"use client";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Zap, Trophy, Users, Clock, Sparkles, Lock, ChevronDown } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-bone/70 group-hover:text-signal transition-colors"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}
import GlitchText from "@/components/GlitchText";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
import EventPoster from "@/components/EventPoster";
// import PlayerScoreboard from "@/components/PlayerScoreboard"; // [scoreboard] disabled until approved
import { events, stats } from "@/lib/data";

type EventItem = (typeof events)[number];

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

function hashString(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

export default function HomePage() {
  const tickerTrackRef = useRef<HTMLDivElement | null>(null);
  const sponsorTickerTrackRef = useRef<HTMLDivElement | null>(null);
  const tickerRepeats = 6;
  const tickerItems = [
    <span key="a" className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> 48 hours of building</span>,
    <span key="b" className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> 7 events / 1 portal</span>,
    <span key="c" className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> First edition - history is hiring</span>,
    <span key="d" className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> IEEE SB AUK certified session</span>,
    <span key="e" className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> ₹1.5L+ in prizes</span>
  ];
  const sideEvents = events.filter((e) => !e.highlight);
  const featuredSideEvents: Array<EventItem | undefined> = [
    sideEvents.find((event) => event.slug === "research-expo"),
    ...sideEvents
      .filter((event) => event.slug !== "research-expo" && event.slug !== "ieee-session")
      .map((event) => ({ event, rank: hashString(`auktave:${event.slug}`) }))
      .sort((a, b) => a.rank - b.rank)
      .map(({ event }) => event)
  ];
  const visibleFeaturedSideEvents = featuredSideEvents.filter((event): event is EventItem => Boolean(event)).slice(0, 3);
  const sponsorTickerItems = Array.from({ length: 12 }).flatMap((_, i) => [
    <div
      key={`sponsor-logo-${i}`}
      className="card-upside min-w-36 sm:min-w-40 aspect-3/2 flex items-center justify-center group px-6"
    >
      <span className="font-mono text-xs text-bone/40 group-hover:text-ember transition-colors">LOGO_{String(i + 1).padStart(2, "0")}</span>
    </div>
  ]);

  useEffect(() => {
    const track = sponsorTickerTrackRef.current;
    if (!track) return;

    const repeatCount = 2;
    let distance = Math.max(track.scrollWidth / repeatCount, 1);
    const updateDistance = () => {
      distance = Math.max(track.scrollWidth / repeatCount, 1);
    };

    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(updateDistance)
      : null;

    observer?.observe(track);
    updateDistance();

    let frameId = 0;
    const speed = 24;

    const animate = (time: number) => {
      const offset = distance > 0 ? (time * speed / 1000) % distance : 0;
      track.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${-offset},0,0,1)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      track.style.transform = "";
    };
  }, []);

  useEffect(() => {
    const track = tickerTrackRef.current;
    if (!track) return;

    let distance = Math.max(track.scrollWidth / tickerRepeats, 1);
    const updateDistance = () => {
      distance = Math.max(track.scrollWidth / tickerRepeats, 1);
    };

    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(updateDistance)
      : null;

    observer?.observe(track);
    updateDistance();

    let frameId = 0;
    const speed = 42;

    const animate = (time: number) => {
      const offset = distance > 0 ? (time * speed / 1000) % distance : 0;
      track.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${-offset},0,0,1)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      track.style.transform = "";
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden vines-bg" data-testid="hero-section">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/12 backdrop-blur-[5px] saturate-110" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <span className="tag mb-6 inline-flex">
                <span className="w-1.5 h-1.5 bg-ember animate-pulse rounded-full" />
                May 21 - 22, 2026 / Amity University Kolkata
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="w-full max-w-2xl"
            >
              <Image
                src="/images/auktave_logo.png"
                alt="AUKTAVE"
                width={470}
                height={100}
                priority
                className="w-full h-auto"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className={`text-[24px] sm:text-2xl lg:text-3xl mt-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left text-bone tracking-tight ${bebasNeue.className}`}
            >
              Not All Experiments Stay in the Lab.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-10 flex w-full justify-center sm:justify-start flex-nowrap gap-2 sm:gap-4"
            >
              <Link href="/register" className="btn-signal shrink-0 px-3 py-2 text-[10px] sm:px-7 sm:py-3.5 sm:text-sm" data-testid="hero-register-cta">
                Register Now
              </Link>
              <Link href="/events" className="btn-ghost shrink-0 px-3 py-2 text-[10px] sm:px-6 sm:py-3.25 sm:text-sm" data-testid="hero-events-cta">
                Browse Events
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-ember/40 pl-4" data-testid={`hero-stat-${s.label.replace(/ /g, "-").toLowerCase()}`}>
                  <p className="headline text-3xl text-signal">{s.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <EventPoster
                src="/images/auktave_main_poster.jpeg"
                alt="AUKTAVE 2K26 main poster"
                width={1055}
                height={1490}
                priority
                className="max-w-md mx-auto lg:max-w-none"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/50 animate-bounce">
          <ChevronDown size={20} />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Descend</span>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-ember/20 bg-midnight/50 overflow-hidden py-5">
        <div className="marquee text-bone/40 font-display text-3xl">
          <div ref={tickerTrackRef} className="ticker-track">
            {Array.from({ length: tickerRepeats }).flatMap((_, repeatIndex) =>
              tickerItems.map((item) => (
                <span key={`${repeatIndex}-${item.key as string}`}>{item}</span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative py-24 px-5 lg:px-10" data-testid="about-teaser">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">/ Chapter 01</p>
            <GlitchText className="text-5xl lg:text-6xl mb-6">A Lab That Slipped Sideways</GlitchText>
          </div>
          <div className="lg:col-span-7">
            <p className="text-bone/70 text-lg leading-relaxed mb-6">
              AUKTAVE is the first edition TechFest of Amity University Kolkata, hosted by ASETK in partnership with the IEEE SB AUK Student Chapter. Two days. 24 hours of hackathon. Seven events competing for the same trophy of bragging rights.
            </p>
            <p className="text-bone/70 text-lg leading-relaxed mb-6">
              We borrowed a little tension from the upside down. We kept the engineering. The result is a TechFest that feels less like a conference and more like a controlled experiment that escaped the lab.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-signal font-mono text-sm uppercase tracking-[0.2em] hover:gap-4 transition-all" data-testid="about-readmore">
              Read the case file <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/40" data-testid="countdown-section">
        <div className="max-w-7xl mx-auto text-center">
          <p className="eyebrow mb-4">/ The Clock</p>
          <GlitchText className="text-5xl lg:text-7xl mb-12">Time Bends, Then Breaks</GlitchText>
          <Countdown />
          <p className="text-bone/50 mt-8 max-w-md mx-auto">AUKTAVE begins May 21, 2026 at 09:00 AM IST. The experiment starts. Be there.</p>
        </div>
      </section>

      {/* OUR SPONSORS */}
      <section className="py-24 px-5 lg:px-10" data-testid="sponsors-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">/ Our Backers</p>
            <GlitchText className="text-5xl lg:text-6xl mb-6">Sponsors & Partners</GlitchText>
            <p className="text-bone/70 text-lg max-w-2xl mx-auto">Current sponsor slots are open, so we are showing placeholder logo boxes for now. Open the full sponsorship page for the detailed packages.</p>
          </div>
          <div className="relative overflow-hidden mb-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-bg to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-bg to-transparent z-10" />
            <div className="marquee py-2">
              <div ref={sponsorTickerTrackRef} className="ticker-track gap-4">
                {sponsorTickerItems}
                {sponsorTickerItems}
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/sponsorship" className="btn-signal" data-testid="sponsors-know-more">
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* FLAGSHIP EVENTS SPOTLIGHTS */}
      {events.filter((e) => e.highlight).map((e) => (
        <section key={e.slug} className="relative py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/30" data-testid={`${e.slug}-spotlight`}>
          <div className="absolute inset-0 vines-bg pointer-events-none" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              {e.slug === "hackathon" ? (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.22em] text-ember shadow-[0_0_24px_rgba(255,92,71,0.16)]">
                  <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
                  CATALYST 2K26
                </div>
              ) : null}
              <p className="eyebrow mb-4">/ Flagship Event</p>
              <h2 className="headline text-6xl lg:text-8xl leading-[0.9] mb-6">
                {e.name.includes("Hackathon") ? (
                  <><span className="text-ember">24 Hour</span><br />Hackathon</>
                ) : e.name}
              </h2>
              <p className="text-bone/70 text-lg leading-relaxed max-w-2xl">
                {e.name.includes("Hackathon") ? `One day, no escape. ${e.summary} The hackathon is the spine of AUKTAVE 2K26 - but every event is a star.` : e.summary}
              </p>
              {e.tracks && e.tracks.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {e.tracks.map((t) => (
                    <span key={t} className="tag" data-testid={`track-${e.slug}-${t.replace(/[ /]/g, "-").toLowerCase()}`}>{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/events/${e.slug}`} className="btn-signal" data-testid={`${e.slug}-details-cta`}>View {e.name} Details</Link>
                {e.slug === "hackathon" ? (
                  <a
                    href="https://www.hackcatalyst.tech/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ghost"
                  >
                    Register Now
                  </a>
                ) : (
                  <Link href="/register" className="btn-ghost">Register Now</Link>
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-upside p-6 col-span-2"><Trophy className="text-signal mb-3" size={28} /><p className="headline text-4xl">{e.prizePool}</p><p className="text-bone/60 text-sm mt-1">Top prize for {e.name} winners</p></div>
                <div className="card-upside p-5"><Users className="text-ember mb-3" size={22} /><p className="headline text-2xl">{e.teamSize}</p><p className="text-bone/60 text-xs mt-1">Per team</p></div>
                <div className="card-upside p-5"><Clock className="text-ember mb-3" size={22} /><p className="headline text-2xl">{e.duration}</p><p className="text-bone/60 text-xs mt-1">Duration</p></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* EVENTS GRID */}
      <section className="py-24 px-5 lg:px-10" data-testid="events-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">/ Chapter 02</p>
              <GlitchText className="text-5xl lg:text-6xl">Pick Your Event</GlitchText>
            </div>
            <Link href="/events" className="btn-ghost self-start" data-testid="all-events-cta">All Events</Link>
          </div>
          <p className="eyebrow mb-4">/ Side Events</p>
          <div className="grid md:grid-cols-3 gap-5">
            {visibleFeaturedSideEvents.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section className="py-24 px-5 lg:px-10" data-testid="why-section">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-4">/ Chapter 03</p>
          <GlitchText className="text-5xl lg:text-6xl mb-12">Why Cross Over</GlitchText>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Trophy, title: "Real prize money", body: "Over ₹1.5L+ in cash, swag, and internship pipelines across all events." },
              { icon: Zap, title: "IEEE SB AUK certified", body: "An IEEE SB AUK Student Chapter session that adds an actual line to your CV." },
              { icon: Users, title: "Industry mentors", body: "Talk to founders, engineers, and academics from across India." },
              { icon: Sparkles, title: "First edition energy", body: "Be a part of the founding cohort. Edition one only happens once." },
              { icon: Lock, title: "Curated tracks", body: "AI, robotics, hardware, sustainability. No filler tracks just to bulk up." },
              { icon: ArrowRight, title: "Career launchpad", body: "Top performers get fast track interviews with our partner companies." }
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-upside p-6"
                data-testid={`why-card-${i}`}
              >
                <b.icon className="text-ember mb-4" size={26} />
                <h4 className="headline text-2xl mb-2">{b.title}</h4>
                <p className="text-bone/60 text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-5 lg:px-10 relative overflow-hidden" data-testid="final-cta">
        <div className="absolute inset-0 vines-bg pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-6 animate-flicker">/ Final Transmission</p>
          <h2 className="headline text-6xl lg:text-9xl leading-[0.85] mb-8">
            The lab is <span className="text-ember">unlocked</span>.<br />
            Are <span className="text-signal">you</span>?
          </h2>
          <p className="text-bone/70 text-lg max-w-xl mx-auto mb-10">
            Participants who registered last year said the wifi was strong and the coffee was stronger. There was no last year. This is edition one.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="btn-signal text-base" data-testid="final-register-cta">Register Now</Link>
            <Link href="/sponsorship" className="btn-ghost text-base">Become a Sponsor</Link>
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
      </section>
    </>
  );
}
