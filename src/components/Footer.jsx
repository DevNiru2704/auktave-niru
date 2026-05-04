import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-ember/20 mt-24 bg-ink/80" data-testid="site-footer">
      <div className="absolute inset-0 vines-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="eyebrow mb-3">Transmission Index</p>
          <Image
            src="/images/auktave_logo.png"
            alt="AUKTAVE"
            width={286}
            height={71}
            priority={false}
            className="mb-4 h-auto max-w-full"
            style={{ width: "286px" }}
          />
          <p className="text-bone/70 max-w-md leading-relaxed">
            The first edition TechFest of Amity University Kolkata. 48 hours of building, breaking, and rebuilding inside the upside down of innovation.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="tag">Amity University Kolkata</span>
            <span className="tag signal">IEEE SB AUK Session</span>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-bone/70">
            <li><Link href="/" className="hover:text-ember transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-ember transition-colors">About</Link></li>
            <li><Link href="/events" className="hover:text-ember transition-colors">Events</Link></li>
            <li><Link href="/sponsorship" className="hover:text-ember transition-colors">Sponsorship</Link></li>
            <li><Link href="/register" className="hover:text-ember transition-colors">Register Now</Link></li>
            <li><Link href="/help" className="hover:text-ember transition-colors">Help</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Legal</p>
          <ul className="space-y-2 text-bone/70">
            <li><Link href="/privacy" className="hover:text-ember transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-ember transition-colors">Terms and Conditions</Link></li>
          </ul>
          <p className="eyebrow mt-8 mb-4">Signal</p>
          <ul className="space-y-2 text-bone/70 text-sm">
            <li>info.auktave@gmail.com</li>
            <li>Humza Ahmad - +91 8240253854</li>
            <li>Sriparna Das - +91 8961086320</li>
            <li>Major Arterial Road, New Town, Kolkata</li>
          </ul>
        </div>
      </div>
      <div className="divider-glow" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs font-mono uppercase tracking-[0.2em] text-bone/40">
        <p>(c) 2026 AUKTAVE - Amity University Kolkata. All rights reserved.</p>
        <p>Stay weird. Stay curious.</p>
      </div>
    </footer>
  );
}
