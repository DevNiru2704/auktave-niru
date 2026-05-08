import GlitchText from "@/components/GlitchText";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="terms-page">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-4">/ Legal</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-8">Terms and Conditions</GlitchText>
        <div className="space-y-5 text-bone/75 leading-relaxed">
          <p>By registering for AUKTAVE 2K26 you agree to the following terms.</p>
          <h3 className="headline text-2xl text-bone mt-8">Eligibility</h3>
          <p>Participants must be enrolled students of a recognised college or university. Some events have specific eligibility mentioned on the event detail pages.</p>
          <h3 className="headline text-2xl text-bone mt-8">Conduct</h3>
          <p>Disrespectful behaviour, harassment, plagiarism, or property damage results in immediate disqualification and may be referred to your institution.</p>
          <h3 className="headline text-2xl text-bone mt-8">Refunds</h3>
          <p>Registration fees are non refundable once your registration is confirmed. In the rare case of event cancellation by the organisers, refunds will be processed within 14 working days.</p>
          <h3 className="headline text-2xl text-bone mt-8">Intellectual Property</h3>
          <p>All projects and submissions remain the intellectual property of the participants. Organisers and IEEE SB AUK retain a non exclusive license to feature content for promotional purposes.</p>
          <h3 className="headline text-2xl text-bone mt-8">Liability</h3>
          <p>Participants attend at their own risk. Organisers are not liable for personal property loss, injury, or damage incurred during the event.</p>
          <h3 className="headline text-2xl text-bone mt-8">Changes</h3>
          <p>The schedule, prize pool, and rules may be updated to maintain fairness. Material changes will be communicated via email and the website.</p>
          <p>Last updated: May 2026.</p>
        </div>
      </div>
    </div>
  );
}
