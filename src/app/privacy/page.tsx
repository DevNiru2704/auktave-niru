import GlitchText from "@/components/GlitchText";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="privacy-page">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-4">/ Legal</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-8">Privacy Policy</GlitchText>
        <div className="prose prose-invert max-w-none space-y-5 text-bone/75 leading-relaxed">
          <p><strong>First Created:</strong> 04/05/2026</p>
          <p><strong>Effective Date:</strong> 04/05/2026</p>
          <p><strong>Last Updated:</strong> 09/05/2026</p>

          <p>
            Welcome to AUKTAVE ("we", "our", or "us"), hosted by ASETK at Amity University Kolkata.
            This Privacy Policy explains how we collect, use, disclose, and protect your information when you
            use our website and related registration, contact, and event participation services.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">1. Information We Collect</h3>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, college/institution, year/department, team details, and other information you voluntarily submit through forms.</li>
            <li><strong>Event and Transaction Information:</strong> Registration selections, participation details, uploaded proofs (if requested), and communication records.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device data, pages visited, and approximate usage analytics.</li>
            <li><strong>Local Device Preferences:</strong> Browser local/session storage values used for UI preferences such as audio state and banner visibility.</li>
          </ul>

          <h3 className="headline text-2xl text-bone mt-8">2. How We Use Your Information</h3>
          <p>We use collected information to:</p>
          <ul>
            <li>Process registrations and verify participation eligibility.</li>
            <li>Send confirmations, event updates, schedule notices, and operational announcements.</li>
            <li>Coordinate event logistics, evaluation, certificates, and prize distribution.</li>
            <li>Respond to support requests and communications.</li>
            <li>Improve site reliability, content relevance, and user experience.</li>
            <li>Detect abuse, fraud, or policy violations and maintain platform safety.</li>
          </ul>

          <h3 className="headline text-2xl text-bone mt-8">3. Legal Basis and Consent</h3>
          <p>
            Where applicable, we process data based on your consent, our legitimate interests in operating and
            improving AUKTAVE, and/or contractual necessity for event administration. You may withdraw consent
            for optional communications at any time.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">4. Cookies and Tracking Technologies</h3>
          <p>We may use cookies, local storage, and analytics technologies to:</p>
          <ul>
            <li>Remember preferences and improve session continuity.</li>
            <li>Understand usage patterns and measure website performance.</li>
            <li>Improve navigation, accessibility, and feature quality.</li>
          </ul>
          <p>You can control cookies and storage behavior through your browser settings.</p>

          <h3 className="headline text-2xl text-bone mt-8">5. Sharing and Disclosure</h3>
          <p>We do not sell personal data. We may share information with:</p>
          <ul>
            <li>Trusted service providers (such as form-processing and analytics partners) under confidentiality obligations.</li>
            <li>Organizing partners involved in event execution, only as necessary for operations.</li>
            <li>Law enforcement or competent authorities when legally required or necessary to protect rights, safety, and integrity.</li>
          </ul>

          <h3 className="headline text-2xl text-bone mt-8">6. Data Retention</h3>
          <p>
            We retain personal information only for as long as needed to fulfill event operations, legal,
            compliance, dispute-resolution, and security purposes. Data that is no longer required is deleted
            or anonymized where feasible.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">7. Data Security</h3>
          <p>
            We use reasonable technical and organizational safeguards to protect your information from
            unauthorized access, loss, misuse, or disclosure. However, no internet transmission or storage
            mechanism can be guaranteed 100% secure.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">8. Your Rights</h3>
          <p>Depending on applicable law, you may have rights to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of data, subject to lawful exceptions.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Opt out of optional promotional communications.</li>
          </ul>
          <p>To exercise rights, contact us at: <a href="mailto:info.auktave@gmail.com">info.auktave@gmail.com</a>.</p>

          <h3 className="headline text-2xl text-bone mt-8">9. Third-Party Links</h3>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy
            practices, security, or content of third-party services.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">10. Children&apos;s Privacy</h3>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal data from
            children under 13. If you believe such information has been provided, please contact us promptly.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">11. Changes to This Policy</h3>
          <p>
            We may revise this Privacy Policy periodically. Updated versions will be posted on this page with
            a revised date. Continued use of the website after updates indicates acceptance of the revised policy.
          </p>

          <h3 className="headline text-2xl text-bone mt-8">12. Contact Us</h3>
          <p>If you have questions about this Privacy Policy or data handling practices, contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:info.auktave@gmail.com">info.auktave@gmail.com</a></p>
          <p><strong>Website:</strong> <a href="https://auktave.co.in" target="_blank" rel="noreferrer noopener">auktave.co.in</a></p>
        </div>
      </div>
    </div>
  );
}
