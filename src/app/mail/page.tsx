"use client";
import React from "react";

export default function MailEmbedPage() {
    return (
        <div className="pt-32 pb-6 px-4 lg:px-10 bg-transparent" data-testid="mail-embed-page">
            <div className="max-w-7xl mx-auto">
                <p className="eyebrow mb-4">/ Developer</p>
                <h1 className="headline text-4xl mb-6">Mail (Developer Only)</h1>
            </div>

            <div className="w-full">
                <iframe
                    src="/website_mail/index.html"
                    title="Website Mail"
                    className="w-full h-[calc(100vh-9rem)] border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; geolocation; microphone; camera; payment; usb;"
                />
            </div>
        </div>
    );
}
