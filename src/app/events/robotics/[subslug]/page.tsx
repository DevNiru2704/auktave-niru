"use client";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { events } from "@/lib/data";
import GlitchText from "@/components/GlitchText";
import { Clock, Users, Trophy, Phone, Mail, ArrowLeft, FileDown } from "lucide-react";
import Script from "next/script";

type StatProps = {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    label: string;
    value: string;
    accent?: boolean;
};

export default function RoboticsSubEventPage() {
    const params = useParams();
    const robotics = events.find((e) => e.slug === "robotics");
    const subEvent = robotics?.subEvents?.find((s) => s.slug === params.subslug);

    if (!robotics || !subEvent) return notFound();
    const siteUrl = "https://auktave.co.in";
    const routePath = `/events/robotics/${subEvent.slug}`;
    const eventJsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: subEvent.name,
        description: subEvent.summary,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        startDate: "2026-05-22T11:00:00+05:30",
        endDate: "2026-05-22T13:30:00+05:30",
        url: `${siteUrl}${routePath}`,
        image: [`${siteUrl}/api/og?title=${encodeURIComponent(subEvent.name)}&route=${encodeURIComponent(routePath)}`],
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

    return (
        <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid={`robotics-sub-event-${subEvent.slug}`}>
            <Script id={`ld-robotics-${subEvent.slug}`} type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(eventJsonLd)}
            </Script>
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/events/robotics"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone/60 hover:text-ember mb-8"
                    data-testid="back-to-robotics"
                >
                    <ArrowLeft size={14} /> Back to Robotics
                </Link>

                <div className="grid lg:grid-cols-12 gap-10 mb-14">
                    <div className="lg:col-span-8">
                        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">
                            {subEvent.name}
                        </GlitchText>
                        <p className="text-2xl text-bone/70 font-display max-w-2xl">{subEvent.tagline}</p>
                        <p className="mt-6 text-bone/70 leading-relaxed text-lg max-w-2xl">{subEvent.summary}</p>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                        <Stat icon={Clock} label="Duration" value={subEvent.duration ?? ""} />
                        <Stat icon={Users} label="Team Size" value={subEvent.teamSize ?? ""} />
                        <Stat icon={Trophy} label="Prize Pool Worth" value={subEvent.prizePool ?? ""} accent />
                        <Link href="/register" className="btn-signal w-full block text-center mt-4" data-testid="robotics-register-cta">
                            Register Now
                        </Link>
                        <a
                            href="/brochures/Robotics%20Rulebook%20_20260509_111618_0000.pdf"
                            download
                            className="btn-ghost w-full flex items-center justify-center gap-2"
                            data-testid="robotics-rules-download"
                        >
                            <FileDown size={16} /> Download Rulebook
                        </a>
                    </div>
                </div>

                {subEvent.rules && (
                    <div className="card-upside p-8 lg:p-10 mb-10" data-testid="robotics-rules-section">
                        <p className="eyebrow mb-4">/ Rules</p>
                        <h2 className="headline text-3xl lg:text-4xl mb-6">Read before you cross over</h2>
                        <ol className="space-y-4">
                            {subEvent.rules.map((rule: string, i: number) => (
                                <li key={i} className="flex gap-5 text-bone/80 leading-relaxed">
                                    <span className="font-mono text-ember text-sm pt-1 w-10 shrink-0">/{String(i + 1).padStart(2, "0")}</span>
                                    <span className="flex-1">{rule}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {subEvent.sections && (
                    <div className="space-y-10" data-testid="robotics-sections">
                        {subEvent.sections.map((section: any) => (
                            <div key={section.title} className="card-upside p-8 lg:p-10">
                                <p className="eyebrow mb-4">{section.eyebrow || "/ Details"}</p>
                                <h2 className="headline text-3xl lg:text-4xl mb-6">{section.title}</h2>
                                <ul className="space-y-3 text-bone/80 leading-relaxed">
                                    {section.items.map((item: any) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-ember">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                <div className="card-upside p-8 lg:p-10 mt-10" data-testid="robotics-coordinator">
                    <p className="eyebrow mb-4">/ Field Coordinator</p>
                    <div className="grid sm:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="headline text-3xl">{subEvent.coordinator!.name}</h3>
                            <p className="text-ember font-mono text-xs uppercase tracking-[0.2em] mt-1">{subEvent.coordinator!.role}</p>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <a
                                href={`tel:${subEvent.coordinator!.phone}`}
                                className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors"
                            >
                                <Phone size={14} /> {subEvent.coordinator!.phone}
                            </a>
                            <a
                                href={`mailto:${subEvent.coordinator!.email}`}
                                className="flex items-center gap-3 text-bone/70 hover:text-signal transition-colors break-all"
                            >
                                <Mail size={14} /> {subEvent.coordinator!.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <h3 className="headline text-4xl mb-6">Ready to play?</h3>
                    <Link href="/register" className="btn-signal" data-testid="robotics-bottom-cta">
                        Register Now
                    </Link>
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
