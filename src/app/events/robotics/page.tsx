"use client";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import EventPoster from "@/components/EventPoster";
import { events } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function RoboticsPage() {
    const robotics = events.find((e) => e.slug === "robotics");
    if (!robotics) return null;
    const subEvents = robotics.subEvents ?? [];

    return (
        <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="robotics-page">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone/60 hover:text-ember mb-8"
                    data-testid="back-to-events"
                >
                    <ArrowLeft size={14} /> Back to Events
                </Link>
                <div className="grid lg:grid-cols-12 gap-10 items-start mb-14">
                    <div className="lg:col-span-7">
                        <p className="eyebrow mb-4">/ Robotics</p>
                        <GlitchText as="h1" className="text-6xl lg:text-8xl mb-6">
                            {robotics.name}
                        </GlitchText>
                        <p className="text-bone/70 text-lg max-w-2xl mb-10">{robotics.summary}</p>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                            <div className="card-upside p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Duration</p>
                                <p className="headline text-2xl mt-1 text-bone">{robotics.duration}</p>
                            </div>
                            <div className="card-upside p-5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">Prize Pool</p>
                                <p className="headline text-2xl mt-1 text-signal">{robotics.prizePool}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <EventPoster
                            src="/images/robotics_competition_poster.jpeg"
                            alt="Robotics Competition poster"
                            width={1055}
                            height={1490}
                            priority
                            className="max-w-md mx-auto lg:max-w-none lg:sticky lg:top-28"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5" data-testid="robotics-sub-events">
                    {subEvents.map((subEvent, index) => (
                        <Link
                            key={subEvent.slug}
                            href={`/events/robotics/${subEvent.slug}`}
                            className="block card-upside p-7 h-full group"
                            data-testid={`robotics-sub-event-${subEvent.slug}`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="tag">Sub Event / {String(index + 1).padStart(2, "0")}</span>
                                <ArrowUpRight
                                    size={18}
                                    className="text-bone/40 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <h3 className="headline text-3xl mb-2 group-hover:text-signal transition-colors">
                                {subEvent.name}
                            </h3>
                            <p className="text-bone/60 mb-5 leading-relaxed">{subEvent.tagline}</p>
                            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-ember/10">
                                <div>
                                    <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Duration</p>
                                    <p className="text-sm text-bone mt-1">{subEvent.duration}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Team</p>
                                    <p className="text-sm text-bone mt-1">{subEvent.teamSize}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Prize</p>
                                    <p className="text-sm text-signal mt-1">{subEvent.prizePool}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
