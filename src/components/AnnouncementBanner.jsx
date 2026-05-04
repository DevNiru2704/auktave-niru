"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [show, setShow] = useState(true);
  const message = "Early bird registrations close in 7 days. Lock your slot before the portal closes.";

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && sessionStorage.getItem("auktave-banner-dismissed");
    if (dismissed) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="relative z-10 bg-ember text-ink border-b border-ember-deep overflow-hidden" data-testid="announcement-banner">
      <div className="flex items-center justify-between gap-4 px-5 lg:px-10">
        <div className="overflow-hidden flex-1">
          <div className="flex gap-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-8 animate-marquee whitespace-nowrap">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {message}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {message}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => { setShow(false); sessionStorage.setItem("auktave-banner-dismissed", "1"); }}
          aria-label="Dismiss banner"
          className="text-ink hover:text-bone shrink-0"
          data-testid="banner-dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
