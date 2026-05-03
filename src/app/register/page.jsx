"use client";
import Image from "next/image";
import GlitchText from "@/components/GlitchText";

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdVYcsnAQUTt4p8o_rg2elyVahuHJb5P5TsQ-GieGIAtBwfTQ/viewform?usp=dialog";

export default function RegisterPage() {

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="register-page">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-4">/ EVENTS</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">Register Now</GlitchText>
        <p className="text-bone/70 text-lg max-w-2xl mb-3">
          Use the Google Form below to register for AUKTAVE 2K26. We will send confirmation to your email once your entry is processed.
        </p>
        {/* Google Forms Custom UI Section */}
        <div className="card-upside p-7 lg:p-10 mt-8 space-y-6" data-testid="register-form">
          {/* QR Code Placeholder */}
          <div>
            <label className="upside">Registration QR Code</label>
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-midnight/50 border border-ember/30 rounded p-8 flex flex-col items-center justify-center min-h-75 gap-4 hover:border-signal/60 transition-colors"
              data-testid="qr-placeholder"
            >
              <div className="relative w-full max-w-65 aspect-square">
                <Image
                  src="/images/auktave-qr.png"
                  alt="AUKTAVE registration QR code"
                  fill
                  className="object-contain"
                  sizes="260px"
                  priority
                />
              </div>
              <p className="font-mono text-xs text-bone/50 text-center uppercase tracking-wider">
                Scan to open the registration form
              </p>
            </a>
          </div>

          {/* Google Forms Embed Section */}
          <div className="border-t border-bone/10 pt-6">
            <label className="upside mb-4 block">Fill the Form</label>
            <p className="text-bone/70 text-sm mb-4">
              Click the QR code or link below to open the registration form in a new window.
            </p>
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal inline-block"
              data-testid="register-submit"
            >
              Register Now
            </a>
            <p className="text-xs font-mono text-bone/40 mt-4 uppercase tracking-[0.18em]">
              By submitting you agree to our terms. A confirmation email follows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
