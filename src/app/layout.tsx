import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioController from "@/components/AudioController";
import HomeSplashGate from "@/components/HomeSplashGate";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import { SplashGateProvider } from "@/contexts/SplashGateContext";
import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events, faqs, sponsors, stats } from "@/lib/data";
import { getSocialProfiles } from "@/lib/seo";

const baseUrl = "https://auktave.co.in";
const homeOgTitle = "Enter The Upside Down Of Innovation";
const homeOgImage = `${baseUrl}/images/og/custom-og.png`;

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
    title: homeOgTitle,
    description: "The Ultimate Tech Resonance. Step into the upside down of innovation at Amity University Kolkata.",
    type: "website",
    locale: "en_IN",
    siteName: "AUKTAVE 2K26",
    url: baseUrl,
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "Enter The Upside Down Of Innovation social preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: homeOgTitle,
    description: "The Ultimate Tech Resonance",
    images: [homeOgImage]
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
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
    sameAs: getSocialProfiles(),
    creator: {
      "@type": "Organization",
      name: "AUKTAVE Organizing Committee"
    }
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AUKTAVE 2K26",
    url: baseUrl,
    license: `${baseUrl}/terms`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/events?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const eventHighlightsLd = events.map((event: import('@/lib/types').EventType) => {
    const ev: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name,
      description: event.summary,
      url: `${baseUrl}/events/${event.slug}`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Amity University Kolkata",
        address: "Amity University Kolkata, Major Arterial Road, Action Area II, New Town, Kolkata 700135"
      },
      organizer: {
        "@type": "Organization",
        name: "AUKTAVE 2K26",
        url: baseUrl
      }
    };
    if (event.startDate) ev.startDate = event.startDate;
    if (event.endDate) ev.endDate = event.endDate;
    if (event.performer) ev.performer = event.performer;
    if (event.image) ev.image = event.image;
    if (event.offers) ev.offers = event.offers;
    return ev;
  });
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
  const statsLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "AUKTAVE 2K26 event overview",
    description: "A high level summary of the AUKTAVE 2K26 TechFest including event scale and participation figures.",
    hasPart: stats.map((item) => ({
      "@type": "PropertyValue",
      propertyID: item.label,
      value: item.value
    }))
  };
  const sponsorLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AUKTAVE 2K26 sponsorship tiers",
    itemListElement: sponsors.map((sponsor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: sponsor.tier,
        price: sponsor.price,
        priceCurrency: "INR"
      }
    }))
  };

  return (
    <html lang="en">
      <body className="bg-ink text-bone grain vignette" data-testid="root-body">
        <LenisProvider>
          <SplashGateProvider>
            <HomeSplashGate />
            <CustomCursor />
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
            <AudioController />
          </SplashGateProvider>
        </LenisProvider>
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteLd)}
        </Script>
        <Script id="ld-events" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(eventHighlightsLd)}
        </Script>
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqLd)}
        </Script>
        <Script id="ld-stats" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(statsLd)}
        </Script>
        <Script id="ld-sponsors" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(sponsorLd)}
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
        <Script id="pwa-meta" strategy="afterInteractive">{`(function(){
          try{
            var m=document.createElement('meta');m.name='apple-mobile-web-app-capable';m.content='yes';document.head.appendChild(m);
            var s=document.createElement('meta');s.name='apple-mobile-web-app-status-bar-style';s.content='black-translucent';document.head.appendChild(s);
            var t=document.createElement('meta');t.name='mobile-web-app-capable';t.content='yes';document.head.appendChild(t);
            var l=document.createElement('link');l.rel='apple-touch-icon';l.href='/apple-touch-icon.png';document.head.appendChild(l);
          }catch(e){console.warn('pwa meta injection failed',e)}
        })();`}</Script>
        <Script id="vh-fix" strategy="afterInteractive">{`(function(){
          function setAppHeight(){
            var h = window.innerHeight || document.documentElement.clientHeight || 0;
            document.documentElement.style.setProperty('--app-height', h + 'px');
          }
          setAppHeight();
          window.addEventListener('resize', setAppHeight, { passive: true });
          window.addEventListener('orientationchange', setAppHeight, { passive: true });
          if (window.visualViewport){
            window.visualViewport.addEventListener('resize', setAppHeight, { passive: true });
          }
        })();`}</Script>
        <Script id="sw-register" strategy="afterInteractive">{`(function(){
          if('serviceWorker' in navigator){
            var refreshing = false;
            var bannerEl = null;
            function showUpdateBanner(){
              if (bannerEl) return;
              var banner = document.createElement('div');
              banner.setAttribute('data-sw-update-banner', 'true');
              banner.className = 'card-upside sw-update-banner';

              var text = document.createElement('div');
              text.className = 'sw-update-banner__text';
              text.innerText = 'A new signal just landed. Update the site?';

              var actions = document.createElement('div');
              actions.className = 'sw-update-banner__actions';

              var updateBtn = document.createElement('button');
              updateBtn.type = 'button';
              updateBtn.className = 'btn-signal sw-update-banner__btn';
              updateBtn.innerText = 'Update';

              var dismissBtn = document.createElement('button');
              dismissBtn.type = 'button';
              dismissBtn.className = 'btn-ghost sw-update-banner__btn sw-update-banner__btn--ghost';
              dismissBtn.innerText = 'Later';

              dismissBtn.addEventListener('click', function(){
                if (bannerEl && bannerEl.parentNode){
                  bannerEl.parentNode.removeChild(bannerEl);
                  bannerEl = null;
                }
              });

              actions.appendChild(updateBtn);
              actions.appendChild(dismissBtn);
              banner.appendChild(text);
              banner.appendChild(actions);
              document.body.appendChild(banner);
              bannerEl = banner;
              return updateBtn;
            }

            navigator.serviceWorker.addEventListener('controllerchange', function(){
              if (refreshing) return;
              refreshing = true;
              window.location.reload();
            });
            navigator.serviceWorker.register('/sw.js').then(function(reg){
              function promptForUpdate(){
                if (!reg.waiting) return;
                var updateBtn = showUpdateBanner();
                if (updateBtn){
                  updateBtn.addEventListener('click', function(){
                    reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                  }, { once: true });
                }
              }
              if (reg.waiting){
                promptForUpdate();
              }
              reg.addEventListener('updatefound', function(){
                var newWorker = reg.installing;
                if (!newWorker) return;
                newWorker.addEventListener('statechange', function(){
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller){
                    promptForUpdate();
                  }
                });
              });
            }).catch(function(err){
              console.warn('Service worker registration failed:', err);
            });
          }
        })();`}</Script>
      </body>
    </html>
  );
}
