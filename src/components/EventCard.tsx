"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { events } from "@/lib/data";

type EventItem = (typeof events)[number];

type EventCardProps = {
  event: EventItem;
  index?: number;
};

export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      data-testid={`event-card-${event.slug}`}
    >
      <Link href={`/events/${event.slug}`} className="block card-upside p-7 h-full group">
        <div className="flex items-center justify-between mb-6">
          <span className={`tag ${event.highlight ? "signal" : ""}`}>
            {event.highlight ? <><Zap size={12} /> Flagship Event</> : `Event / ${String(index + 1).padStart(2, "0")}`}
          </span>
          <ArrowUpRight size={18} className="text-bone/40 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <h3 className="headline text-3xl mb-2 group-hover:text-signal transition-colors">
          {event.name}
        </h3>
        <p className="text-bone/60 mb-5 leading-relaxed">{event.tagline}</p>
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-ember/10">
          <div>
            <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Duration</p>
            <p className="text-sm text-bone mt-1">{event.duration}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Team</p>
            <p className="text-sm text-bone mt-1">{event.teamSize}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-bone/40 uppercase tracking-[0.18em]">Prize</p>
            <p className="text-sm text-signal mt-1">{event.prizePool}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
