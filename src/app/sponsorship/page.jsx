"use client";
import GlitchText from "@/components/GlitchText";
import Link from "next/link";
import { sponsors } from "@/lib/data";
import { FileDown, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorshipPage() {
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="sponsorship-page">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow mb-4">/ Become a Signal</p>
        <GlitchText as="h1" className="text-6xl lg:text-8xl mb-6">Sponsorship</GlitchText>
        <p className="text-bone/70 text-lg max-w-3xl leading-relaxed mb-12">
          AUKTAVE 2K26 is the first edition TechFest at Amity University Kolkata - which means founding sponsor status is on the table for exactly one cohort. Plug your brand into 1500+ engineering students, 7 curated events, and a full IEEE SB AUK certified session.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a href="/brochures/sponsorship-brochure.pdf" download className="btn-signal flex items-center gap-2" data-testid="download-brochure">
            <FileDown size={16} /> Download Sponsorship Brochure
          </a>
          <a href="/brochures/sponsorship-proposal.pdf" download className="btn-ghost flex items-center gap-2" data-testid="download-proposal">
            <FileDown size={16} /> Download Sponsorship Proposal
          </a>
        </div>

        {/* Logos placeholder grid */}
        <div className="mb-20" data-testid="current-sponsors">
          <p className="eyebrow mb-6">/ Current Backers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="card-upside aspect-3/2 flex items-center justify-center group">
                <span className="font-mono text-xs text-bone/40 group-hover:text-ember transition-colors">LOGO_{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <p className="eyebrow mb-6">/ Tiers</p>
        <GlitchText as="h2" className="text-4xl lg:text-5xl mb-10">Pick your altitude</GlitchText>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.tier}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-upside p-6 flex flex-col lg:scale-105 border-signal/40"
              data-testid={`sponsor-tier-${s.tier.replace(/ /g, "-").toLowerCase()}`}
            >
              <p className="eyebrow mb-2">/ Tier 0{i + 1}</p>
              <h3 className="headline text-2xl mb-3">{s.tier}</h3>
              <p className="headline text-3xl mb-5 text-signal">{s.price}</p>
              {s.description && <p className="text-sm text-bone/70 leading-relaxed mb-5">{s.description}</p>}
              <ul className="space-y-2 mb-6 flex-1">
                {s.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-bone/70"><Check size={14} className="text-signal mt-1 shrink-0" /> {p}</li>
                ))}
              </ul>
              <a href="mailto:info.auktave@gmail.com" className="btn-signal text-center text-xs">
                Pitch Us
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 card-upside p-8 lg:p-12 text-center">
          <Mail className="text-signal mx-auto mb-4" size={28} />
          <h3 className="headline text-3xl lg:text-4xl mb-3">Want a custom collab?</h3>
          <p className="text-bone/70 max-w-xl mx-auto mb-6">
            Workshops, prize sponsorships, recruitment booths, hackathon prompts - we are open to ideas that match your brand. Drop us a line.
          </p>
          <a href="mailto:info.auktave@gmail.com" className="btn-signal inline-block">info.auktave@gmail.com</a>
          <p className="text-bone/70 mt-4">Humza Ahmad - +91 8240253854</p>
          <p className="text-bone/70">Sriparna Das - +91 8961086320</p>
        </div>
      </div>
    </div>
  );
}
