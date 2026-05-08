import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioController from "@/components/AudioController";
import HomeSplashGate from "@/components/HomeSplashGate";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const baseUrl = "https://auktave.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AUKTAVE 2K26 | Enter The Upside Down Of Innovation",
    template: "%s | AUKTAVE 2K26"
  },
  description: "AUKTAVE 2K26 is the first edition TechFest of Amity University Kolkata. Explore 48 hours of builds, 7 events, and a Stranger Things inspired innovation arena.",
  applicationName: "AUKTAVE 2K26",
  keywords: ["AUKTAVE", "AUKTAVE 2K26", "Amity University Kolkata", "TechFest 2026", "Hackathon Kolkata", "Robotics Competition", "IEEE SB AUK"],
  authors: [{ name: "AUKTAVE Organizing Committee" }],
  creator: "AUKTAVE Organizing Committee",
  publisher: "Amity University Kolkata",
  category: "Technology Event",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AUKTAVE 2K26 | Enter The Upside Down Of Innovation",
    description: "Not all experiments stay in the lab. Step into the upside down of innovation at Amity University Kolkata.",
    type: "website",
    locale: "en_IN",
    siteName: "AUKTAVE 2K26",
    url: baseUrl,
    images: [
      {
        url: "/images/auktave_logo.png",
        width: 1200,
        height: 630,
        alt: "AUKTAVE 2K26 official banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AUKTAVE 2K26",
    description: "Not all experiments stay in the lab.",
    images: ["/images/auktave_logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AUKTAVE 2K26",
    url: baseUrl,
    email: "info.auktave@gmail.com",
    sameAs: ["https://www.instagram.com/auktave_2k26/"]
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AUKTAVE 2K26",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/events?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className="bg-ink text-bone grain vignette" data-testid="root-body">
        <LenisProvider>
          <HomeSplashGate />
          <CustomCursor />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <AudioController />
        </LenisProvider>
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteLd)}
        </Script>
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
