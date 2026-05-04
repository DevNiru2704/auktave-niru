"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Trophy, Users, Clock, Sparkles, Lock, ChevronDown } from "lucide-react";
import GlitchText from "@/components/GlitchText";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
// import PlayerScoreboard from "@/components/PlayerScoreboard"; // [scoreboard] disabled until approved
import { events, stats, sponsors } from "@/lib/data";

function hashString(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

export default function HomePage() {
  const sideEvents = events.filter((e) => !e.highlight);
  const featuredSideEvents = [
    sideEvents.find((event) => event.slug === "research-expo"),
    ...sideEvents
      .filter((event) => event.slug !== "research-expo" && event.slug !== "ieee-session")
      .map((event) => ({ event, rank: hashString(`auktave:${event.slug}`) }))
      .sort((a, b) => a.rank - b.rank)
      .map(({ event }) => event)
  ].filter(Boolean).slice(0, 3);

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
              className="text-xl sm:text-2xl lg:text-3xl mt-6 max-w-2xl text-bone/80 font-display tracking-tight"
            >
              Not All Experiments Stay in the Lab.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/register" className="btn-signal" data-testid="hero-register-cta">
                Register Now
              </Link>
              <Link href="/events" className="btn-ghost" data-testid="hero-events-cta">
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

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="card-upside p-6 transform rotate-1"
            >
              <p className="eyebrow mb-3">Live Feed / Hawkins</p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between"><span className="text-bone/50">PORTAL</span><span className="text-signal">OPEN</span></div>
                <div className="flex justify-between"><span className="text-bone/50">SIGNAL</span><span className="text-ember">SCRAMBLED</span></div>
                <div className="flex justify-between"><span className="text-bone/50">PARTICIPANTS</span><span className="text-bone">1,247 / 1,500</span></div>
                <div className="flex justify-between"><span className="text-bone/50">PRIZE POOL</span><span className="text-signal">Rs. 3,00,000+</span></div>
                <div className="flex justify-between"><span className="text-bone/50">IEEE SB AUK LINK</span><span className="text-ember animate-flicker">CONNECTED</span></div>
              </div>
              <div className="mt-5 loading-bar" />
              <p className="font-mono text-[10px] mt-3 text-bone/40">Transmission stable. Scroll to descend.</p>
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
          {Array.from({ length: 2 }).flatMap((_, i) => [
            <span key={`a${i}`} className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> 48 hours of building</span>,
            <span key={`b${i}`} className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> 7 events / 1 portal</span>,
            <span key={`c${i}`} className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> First edition - history is hiring</span>,
            <span key={`d${i}`} className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> IEEE SB AUK certified session</span>,
            <span key={`e${i}`} className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> Rs. 3,00,000+ in prizes</span>
          ])}
        </div>
      </section>

      {/* SCOREBOARD - disabled until first draft approved */}
      {/* <PlayerScoreboard /> */}

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
            <p className="text-bone/70 text-lg max-w-2xl mx-auto">Proud sponsors helping us power the first edition of AUKTAVE. Join the crew.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="card-upside aspect-3/2 flex items-center justify-center group"
                data-testid={`sponsor-placeholder-${i}`}
              >
                <span className="font-mono text-xs text-bone/40 group-hover:text-ember transition-colors">LOGO_{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/sponsorship" className="btn-signal" data-testid="sponsors-know-more">
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* HEADLINE EVENTS SPOTLIGHTS */}
      {events.filter((e) => e.highlight).map((e) => (
        <section key={e.slug} className="relative py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/30" data-testid={`${e.slug}-spotlight`}>
          <div className="absolute inset-0 vines-bg pointer-events-none" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">/ Headline Event</p>
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
                <Link href="/register" className="btn-ghost">Register Now</Link>
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
            {featuredSideEvents.map((e, i) => (
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
              { icon: Trophy, title: "Real prize money", body: "Over Rs. 3,00,000 in cash, swag, and internship pipelines across all events." },
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
        </div>
      </section>
    </>
  );
}
