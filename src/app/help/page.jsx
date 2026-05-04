"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import GlitchText from "@/components/GlitchText";
import { events, faqs } from "@/lib/data";
import { ChevronDown, MapPin, Phone, Mail, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function HelpPage() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    form.append("access_key", WEB3FORMS_KEY);
    form.append("subject", "AUKTAVE 2K26 - Help / Contact Form");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const data = await res.json();
      if (data.success) { setStatus("success"); e.target.reset(); }
      else { setStatus("error"); setErrorMsg(data.message || "Failed."); }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error.");
    }
  }

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="help-page">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow mb-4">/ Signal Booster</p>
        <GlitchText as="h1" className="text-6xl lg:text-8xl mb-6">Help / Contact</GlitchText>
        <p className="text-bone/70 text-lg max-w-2xl mb-16">
          Stuck somewhere between dimensions? Drop a transmission. We answer faster than the demogorgons can hear.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          {/* Contact form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="card-upside p-10 text-center" data-testid="help-success">
                <CheckCircle2 className="text-signal mx-auto mb-4" size={42} />
                <h3 className="headline text-3xl mb-2">Signal received</h3>
                <p className="text-bone/70">We will respond within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="btn-ghost mt-6">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-upside p-7 lg:p-9 space-y-5" data-testid="help-form">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="upside">Name *</label>
                    <input name="name" required className="upside" data-testid="help-name" />
                  </div>
                  <div>
                    <label className="upside">Email *</label>
                    <input name="email" type="email" required className="upside" data-testid="help-email" />
                  </div>
                </div>
                <div>
                  <label className="upside">Phone *</label>
                  <input name="phone" required className="upside" data-testid="help-phone" />
                </div>
                <div>
                  <label className="upside">Event</label>
                  <select name="event" className="upside" data-testid="help-event">
                    <option value="">General Query</option>
                    {events.map((e) => <option key={e.slug} value={e.name}>{e.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="upside">Message *</label>
                  <textarea name="message" required rows={5} className="upside" data-testid="help-message" />
                </div>
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                {status === "error" && (
                  <div className="border border-ember/50 bg-ember/10 p-3 flex items-start gap-2 text-sm">
                    <AlertTriangle size={16} className="text-ember mt-0.5" /> <span>{errorMsg}</span>
                  </div>
                )}
                <button type="submit" disabled={status === "loading"} className="btn-signal w-full flex items-center justify-center gap-2 disabled:opacity-60" data-testid="help-submit">
                  {status === "loading" ? <><Loader2 className="animate-spin" size={16} /> Sending</> : "Send Transmission"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5 space-y-4">
            <InfoCard icon={Mail} label="Email" value="info.auktave@gmail.com" href="mailto:info.auktave@gmail.com" />
            <div className="card-upside p-5 flex gap-4 items-start">
              <div className="w-10 h-10 border border-ember/40 flex items-center justify-center text-ember shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="eyebrow mb-1">Phone</p>
                <p className="text-bone">Humza Ahmad - +91 8240253854</p>
                <p className="text-bone mt-1">Sriparna Das - +91 8961086320</p>
              </div>
            </div>
            <InfoCard icon={MapPin} label="Address" value="Amity University Kolkata, Major Arterial Road, Action Area II, New Town, Kolkata 700135" />
            <div className="card-upside h-72 overflow-hidden" data-testid="help-map">
              <MapView />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div data-testid="faq-section">
          <p className="eyebrow mb-4">/ Rules</p>
          <GlitchText as="h2" className="text-5xl lg:text-6xl mb-10">FAQ / Field Manual</GlitchText>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="card-upside" data-testid={`faq-item-${i}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full p-5 lg:p-6 flex items-center justify-between gap-4 text-left">
                  <span className="font-display font-bold text-lg lg:text-xl">{f.q}</span>
                  <ChevronDown size={20} className={`shrink-0 text-ember transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 lg:px-6 pb-6 text-bone/70 leading-relaxed border-t border-ember/15 pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper href={href} className="card-upside p-5 flex gap-4 items-start group">
      <div className="w-10 h-10 border border-ember/40 flex items-center justify-center text-ember shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="eyebrow mb-1">{label}</p>
        <p className="text-bone group-hover:text-signal transition-colors break-all">{value}</p>
      </div>
    </Wrapper>
  );
}
