"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { events } from "@/lib/data";
import GlitchText from "@/components/GlitchText";
import EventPoster from "../../../components/EventPoster";
import { Clock, Users, Trophy, Phone, Mail, FileDown, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";

type StatProps = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  value: string;
  accent?: boolean;
};

type EventSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
};

export default function EventDetailPage() {
  const params = useParams();
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();
  const siteUrl = "https://auktave.co.in";
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.summary,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: event.startDate ?? undefined,
    endDate: event.endDate ?? undefined,
    url: `${siteUrl}/events/${event.slug}`,
    image: Array.isArray(event.image) ? event.image : [event.image ?? `${siteUrl}/api/og?title=${encodeURIComponent(event.name)}&route=${encodeURIComponent(`/events/${event.slug}`)}`],
    location: {
      "@type": "Place",
      name: "Amity University Kolkata",
      address: "Amity University Kolkata, Major Arterial Road, Action Area II, New Town, Kolkata 700135"
    },
    organizer: {
      "@type": "Organization",
      name: "AUKTAVE 2K26",
      url: siteUrl,
      email: "info.auktave@gmail.com"
    }
  };
  const rules = event.rules ?? [];
  const isAmityExclusive = event.slug === "btech-presentations";
  const fieldCoordinators = "fieldCoordinators" in event && Array.isArray(event.fieldCoordinators)
    ? event.fieldCoordinators
    : event.coordinator
      ? [event.coordinator]
      : [];
  const posterBySlug = {
    hackathon: {
      src: "/images/hackathon_poster.png",
      alt: "24 Hour AI Hackathon poster",
      width: 1024,
      height: 1536,
    },
    "ai-film": {
      src: "/images/ai_short_film_poster.jpeg",
      alt: "AI Short Film Showcase poster",
      width: 1053,
      height: 1493,
    },
  } as const;
  const poster = event.slug in posterBySlug ? posterBySlug[event.slug as keyof typeof posterBySlug] : null;

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid={`event-detail-${event.slug}`}>
      <Script id={`ld-event-${event.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(eventJsonLd)}
      </Script>
      <div className="max-w-6xl mx-auto">
        <Link href="/events" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone/60 hover:text-ember mb-8" data-testid="back-to-events">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className={poster ? "lg:col-span-7" : "lg:col-span-8"}>
            <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">{event.name}</GlitchText>
            {event.slug === "hackathon" ? (
              <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.22em] text-ember shadow-[0_0_24px_rgba(255,92,71,0.18)]">
                <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
                CATALYST 2K26
              </div>
            ) : null}
            <p className="text-2xl text-bone/70 font-display max-w-2xl">{event.tagline}</p>
            <p className="mt-6 text-bone/70 leading-relaxed text-lg max-w-2xl">{event.summary}</p>

            {event.slug === "hackathon" && (
              <div className="mt-6 card-upside p-4">
                <p className="text-bone/70 text-sm leading-relaxed">
                  To register for the hackathon, please visit the official hackathon website. Click the Register Now
                  button to be redirected to the official hackathon website.
                </p>
              </div>
            )}

            {event.tracks && (
              <div className="mt-8">
                <p className="eyebrow mb-3">/ Tracks</p>
                <div className="flex flex-wrap gap-2">
                  {event.tracks.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            )}
          </div>

          {poster ? (
            <div className="lg:col-span-5">
              <EventPoster
                src={poster.src}
                alt={poster.alt}
                width={poster.width}
                height={poster.height}
                priority
                className="max-w-md mx-auto lg:max-w-none lg:sticky lg:top-28"
              />
            </div>
          ) : null}

          <div className="lg:col-span-4 space-y-4">
            <Stat icon={Clock} label="Duration" value={event.duration ?? ""} />
            {!isAmityExclusive && (
              <>
                <Stat icon={Users} label="Team Size" value={event.teamSize ?? ""} />
                <Stat icon={Trophy} label="Prize Pool Worth" value={event.prizePool ?? ""} accent />
              </>
            )}
            {isAmityExclusive ? (
              <div className="card-upside p-5 text-center border border-ember/20 bg-midnight/40" data-testid="event-exclusive-note">
                <p className="eyebrow mb-2">/ Registration</p>
                <p className="text-bone/80 leading-relaxed text-sm">
                  This event is exclusive to Amity University students and is not open through the public registration form.
                </p>
              </div>
                ) : event.slug === "ieee-session" ? null : event.slug === "hackathon" ? (
              <a
                href="https://www.hackcatalyst.tech/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-signal w-full block text-center mt-4"
                data-testid="event-register-cta"
              >
                Register Now
              </a>
            ) : (
              <Link href="/register" className="btn-signal w-full block text-center mt-4" data-testid="event-register-cta">
                Register Now
              </Link>
            )}
            {event.slug === "ieee-session" ? null : (
              <a
                href={
                  event.slug === "hackathon"
                    ? "/brochures/ai_hackathon_rulebook.pdf"
                    : event.slug === "ai-film"
                      ? "/brochures/AI Short Film Rulebook _20260506_223233_0000.pdf"
                      : event.slug === "tech-debate"
                        ? "/brochures/Tech Debate Rulebook _20260508_120243_0000.pdf"
                        : event.slug === "robotics"
                          ? "/brochures/Robotics%20Rulebook%20_20260509_111618_0000.pdf"
                          : "/brochures/event-rules.pdf"
                }
                download
                className="btn-ghost w-full flex items-center justify-center gap-2"
                data-testid="event-rules-download"
              >
                <FileDown size={16} /> Download Rulebook
              </a>
            )}
          </div>
        </div>

        {/* Rules */}
        <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-rules-section">
          <p className="eyebrow mb-4">/ Rules</p>
          <h2 className="headline text-3xl lg:text-4xl mb-6">Read before you cross over</h2>
          <ol className="space-y-4">
            {rules.map((r, i) => (
              <li key={i} className="flex gap-5 text-bone/80 leading-relaxed">
                <span className="font-mono text-ember text-sm pt-1 w-10 shrink-0">/{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{r}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Extra Sections */}
        {event.themes && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-themes-section">
            <p className="eyebrow mb-4">/ Official Themes</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">Pick one pillar</h2>
            <ol className="space-y-4">
              {event.themes.map((t: { title: string; description?: string }, i: number) => (
                <li key={t.title} className="flex gap-5 text-bone/80 leading-relaxed">
                  <span className="font-mono text-ember text-sm pt-1 w-10 shrink-0">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="text-bone">{t.title}</span>
                    {t.description ? <span className="text-bone/70"> — {t.description}</span> : null}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {event.requirements && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-requirements-section">
            <p className="eyebrow mb-4">/ Requirements</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">What you must submit</h2>
            <ul className="space-y-3 text-bone/80 leading-relaxed">
              {event.requirements.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.selectionProcess && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-selection-section">
            <p className="eyebrow mb-4">/ Selection & Awards</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">How winners are chosen</h2>
            <ul className="space-y-3 text-bone/80 leading-relaxed">
              {event.selectionProcess.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.prizes && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-prizes-section">
            <p className="eyebrow mb-4">/ Prize Pool Worth</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">What you can win</h2>
            <ul className="space-y-3 text-bone/80 leading-relaxed">
              {event.prizes.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.toolkit && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-toolkit-section">
            <p className="eyebrow mb-4">/ Suggested AI Toolkit</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">Optional tools</h2>
            <ul className="space-y-3 text-bone/80 leading-relaxed">
              {event.toolkit.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.importantDates && (
          <div className="card-upside p-8 lg:p-10 mb-10" data-testid="event-dates-section">
            <p className="eyebrow mb-4">/ Important Dates</p>
            <h2 className="headline text-3xl lg:text-4xl mb-6">Mark your calendar</h2>
            <ul className="space-y-3 text-bone/80 leading-relaxed">
              {event.importantDates.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.sections && (
          <div className="space-y-10" data-testid="event-sections">
            {event.sections.map((section: EventSection) => (
              <div key={section.title} className="card-upside p-8 lg:p-10">
                <p className="eyebrow mb-4">{section.eyebrow || "/ Details"}</p>
                <h2 className="headline text-3xl lg:text-4xl mb-6">{section.title}</h2>
                {section.description ? (
                  <p className="text-bone/70 leading-relaxed mb-6">{section.description}</p>
                ) : null}
                {(() => {
                  const title = section.title.toLowerCase();
                  const eyebrow = (section.eyebrow || "").toLowerCase();
                  const isFaqSection = title.includes("faq") || title.includes("frequently asked") || eyebrow.includes("faq");
                  return (
                    <ul className="space-y-3 text-bone/80 leading-relaxed">
                      {section.items.map((item) => {
                        const [question, ...rest] = isFaqSection ? item.split("?") : [item];
                        const answer = isFaqSection ? rest.join("?").trim() : "";
                        return (
                          <li key={item} className="flex gap-3">
                            <span className="text-ember">•</span>
                            {isFaqSection && answer ? (
                              <span className="flex-1">
                                <span className="text-bone block">{question.trim()}?</span>
                                <span className="text-bone/70 block mt-1">{answer}</span>
                              </span>
                            ) : (
                              <span>{item}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })()}
              </div>
            ))}
          </div>
        )}

        {/* Coordinator */}
        <div className="card-upside p-8 lg:p-10" data-testid="event-coordinator">
          <p className="eyebrow mb-4">/ Field Coordinator</p>
          <div className="space-y-6">
            {fieldCoordinators.map((coordinator) => (
              <div key={`${coordinator.name}-${coordinator.phone}`} className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="headline text-3xl">{coordinator.name}</h3>
                  <p className="text-ember font-mono text-xs uppercase tracking-[0.2em] mt-1">{coordinator.role}</p>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <a href={`tel:${coordinator.phone}`} className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors"><Phone size={14} /> {coordinator.phone}</a>
                  <a href={`mailto:${coordinator.email}`} className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors break-all"><Mail size={14} /> {coordinator.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="headline text-4xl mb-6">Ready to play?</h3>
          {isAmityExclusive ? (
            <div className="card-upside inline-flex max-w-2xl mx-auto px-6 py-4 border border-ember/20 bg-midnight/40" data-testid="event-bottom-exclusive-note">
              <p className="text-bone/80 leading-relaxed text-sm">
                This event is exclusive to Amity University students and is not open through the public registration form.
              </p>
            </div>
          ) : event.slug === "ieee-session" ? null : event.slug === "hackathon" ? (
            <a
              href="https://www.hackcatalyst.tech/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-signal"
              data-testid="event-bottom-cta"
            >
              Register Now
            </a>
          ) : (
            <Link href="/register" className="btn-signal" data-testid="event-bottom-cta">Register Now</Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent = false }: StatProps) {
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
