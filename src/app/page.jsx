"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Trophy, Users, Clock, Sparkles, Lock, ChevronDown } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import GlitchText from "@/components/GlitchText";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
// import PlayerScoreboard from "@/components/PlayerScoreboard"; // [scoreboard] disabled until approved
import { events, stats } from "@/lib/data";

export default function HomePage() {
  const hackathon = events.find((e) => e.slug === "hackathon");
  const others = events.filter((e) => e.slug !== "hackathon");

  return (
    <>
      <SplashScreen />

      {/* HERO */}
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden vines-bg" data-testid="hero-section">
        <div className="absolute inset-0 z-[-10] pointer-events-none">
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
        </div>
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <span className="tag mb-6 inline-flex">
                <span className="w-1.5 h-1.5 bg-ember animate-pulse rounded-full" />
                Mar 14 - 16, 2026 / Amity University Kolkata
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="headline text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85]"
            >
              <span className="glitch-text" data-text="AUK">AUK</span>
              <span className="text-ember glitch-text" data-text="TAVE">TAVE</span>
            </motion.h1>

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
                Enter the Game
              </Link>
              <Link href="/events" className="btn-ghost" data-testid="hero-events-cta">
                Browse the Games
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
                <div className="flex justify-between"><span className="text-bone/50">PLAYERS</span><span className="text-bone">1,247 / 1,500</span></div>
                <div className="flex justify-between"><span className="text-bone/50">PRIZE POOL</span><span className="text-signal">Rs. 3,00,000+</span></div>
                <div className="flex justify-between"><span className="text-bone/50">IEEE LINK</span><span className="text-ember animate-flicker">CONNECTED</span></div>
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
            <span key={`b${i}`} className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> 7 games / 1 portal</span>,
            <span key={`c${i}`} className="flex items-center gap-3"><Sparkles className="text-ember" size={20} /> First edition - history is hiring</span>,
            <span key={`d${i}`} className="flex items-center gap-3"><Sparkles className="text-signal" size={20} /> IEEE certified session</span>,
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
              AUKTAVE is the first edition TechFest of Amity University Kolkata, hosted by ASETK in partnership with the IEEE Student Chapter. Three days. 48 hours of hackathon. Seven games competing for the same trophy of bragging rights.
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

      {/* HACKATHON SPOTLIGHT */}
      <section className="relative py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/30" data-testid="hackathon-spotlight">
        <div className="absolute inset-0 vines-bg pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">/ Headline Game</p>
            <h2 className="headline text-6xl lg:text-8xl leading-[0.9] mb-6">
              The <span className="text-ember">48 Hour</span><br />Hackathon
            </h2>
            <p className="text-bone/70 text-lg leading-relaxed max-w-2xl">
              Two days, no escape. {hackathon?.summary} The hackathon is the spine of AUKTAVE 2K26 - but every game is a star.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {hackathon?.tracks.map((t) => (
                <span key={t} className="tag" data-testid={`hackathon-track-${t.replace(/[ /]/g, "-").toLowerCase()}`}>{t}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/events/hackathon" className="btn-signal" data-testid="hackathon-details-cta">View Hackathon Details</Link>
              <Link href="/register" className="btn-ghost">Enter the Game</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-upside p-6 col-span-2"><Trophy className="text-signal mb-3" size={28} /><p className="headline text-4xl">Rs. 1.5L+</p><p className="text-bone/60 text-sm mt-1">Top prize for Hackathon winners</p></div>
              <div className="card-upside p-5"><Users className="text-ember mb-3" size={22} /><p className="headline text-2xl">1 - 4</p><p className="text-bone/60 text-xs mt-1">Per team</p></div>
              <div className="card-upside p-5"><Clock className="text-ember mb-3" size={22} /><p className="headline text-2xl">48 hrs</p><p className="text-bone/60 text-xs mt-1">Of pure build</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-24 px-5 lg:px-10" data-testid="events-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">/ Chapter 02</p>
              <GlitchText className="text-5xl lg:text-6xl">Pick Your Game</GlitchText>
            </div>
            <Link href="/events" className="btn-ghost self-start" data-testid="all-events-cta">All Games</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[hackathon, ...others].slice(0, 6).map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIZES + COUNTDOWN */}
      <section className="py-24 px-5 lg:px-10 border-y border-ember/15 bg-midnight/40" data-testid="countdown-section">
        <div className="max-w-7xl mx-auto text-center">
          <p className="eyebrow mb-4">/ The Clock</p>
          <GlitchText className="text-5xl lg:text-7xl mb-12">Time Bends, Then Breaks</GlitchText>
          <Countdown />
          <p className="text-bone/50 mt-8 max-w-md mx-auto">The portal opens March 14, 2026 at 09:00 IST. After that, it is too late to be early.</p>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section className="py-24 px-5 lg:px-10" data-testid="why-section">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-4">/ Chapter 03</p>
          <GlitchText className="text-5xl lg:text-6xl mb-12">Why Cross Over</GlitchText>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Trophy, title: "Real prize money", body: "Over Rs. 3,00,000 in cash, swag, and internship pipelines across all games." },
              { icon: Zap, title: "IEEE certified", body: "An IEEE Student Chapter session that adds an actual line to your CV." },
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
            Players who registered last year said the wifi was strong and the coffee was stronger. There was no last year. This is edition one.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="btn-signal text-base" data-testid="final-register-cta">Enter the Game</Link>
            <Link href="/sponsorship" className="btn-ghost text-base">Become a Sponsor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
