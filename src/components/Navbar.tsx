"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AnnouncementBanner from "./AnnouncementBanner";
import { useLenis } from "./LenisProvider";
import { useSplashGate } from "@/contexts/SplashGateContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/events", label: "Events" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/teams", label: "Teams" },
  { href: "/help", label: "Help" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  const { isGateActive } = useSplashGate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!lenis) return;

    if (open) {
      lenis.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [open, lenis]);

  // Hide navbar when splash gates are active
  if (isGateActive) {
    return null;
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1000]"
      data-testid="main-navbar"
    >
      <AnnouncementBanner />
      <div className={`transition-all duration-300 ${scrolled ? "bg-ink/55 backdrop-blur-md border-b border-ember/20" : "bg-linear-to-b from-ink/40 to-transparent"
        }`}>
        <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" data-testid="navbar-logo">
            <Image
              src="/images/auktave_logo.png"
              alt="AUKTAVE"
              width={143}
              height={35}
              priority
              className="h-7 lg:h-9 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={`uppercase font-mono text-xs tracking-[0.2em] transition-colors ${pathname === l.href ? "text-signal" : "text-bone/70 hover:text-ember"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/register" className="hidden md:inline-block btn-signal text-xs lg:text-sm" data-testid="nav-register-btn">
              Register Now
            </Link>
            {open ? (
              <button
                aria-label="Toggle menu"
                aria-expanded="true"
                aria-controls="mobile-menu"
                onClick={() => setOpen((s) => !s)}
                className="lg:hidden p-2 text-bone"
                data-testid="mobile-menu-toggle"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
                  <span className="block h-0.5 w-6 bg-bone transition-transform duration-300 ease-out translate-y-2 rotate-45" />
                  <span className="block h-0.5 w-6 bg-bone transition-all duration-300 ease-out opacity-0" />
                  <span className="block h-0.5 w-6 bg-bone transition-transform duration-300 ease-out -translate-y-2 -rotate-45" />
                </span>
              </button>
            ) : (
              <button
                aria-label="Toggle menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
                onClick={() => setOpen((s) => !s)}
                className="lg:hidden p-2 text-bone"
                data-testid="mobile-menu-toggle"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
                  <span className="block h-0.5 w-6 bg-bone transition-transform duration-300 ease-out translate-y-0" />
                  <span className="block h-0.5 w-6 bg-bone transition-all duration-300 ease-out opacity-100" />
                  <span className="block h-0.5 w-6 bg-bone transition-transform duration-300 ease-out translate-y-0" />
                </span>
              </button>
            )}
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`lg:hidden bg-ink/95 border-t border-ember/20 overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[90dvh] overflow-y-auto opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}`}
          data-testid="mobile-menu"
        >
          <ul className={`px-5 py-6 flex flex-col gap-4 transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="block uppercase font-mono text-sm tracking-[0.2em] text-bone/80 py-2 border-b border-ember/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/register" className="block btn-signal mt-2 text-center" data-testid="mobile-register-btn">
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
