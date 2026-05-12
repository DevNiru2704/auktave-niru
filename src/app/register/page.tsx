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
              By submitting, you agree to our <a href="/terms" className="text-ember underline hover:text-ember/80 transition-colors">Terms and Condition</a>, <a href="/privacy" className="text-ember underline hover:text-ember/80 transition-colors">Privacy Policy</a> and General Rules and Guidelines. A confirmation email follows.
            </p>
          </div>
        </div>

        <div className="card-upside p-7 lg:p-10 mt-10" data-testid="general-rules">
          <p className="eyebrow mb-4">/ AUKTAVE 2026</p>
          <h2 className="headline text-3xl lg:text-4xl mb-6">AUKTAVE 2026 - General Rules &amp; Guidelines</h2>
          <div className="space-y-6 text-bone/80 leading-relaxed">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">1. Code of Conduct</p>
              <p>• All participants, volunteers, and attendees must maintain professional and respectful behavior at all times.</p>
              <p>• Any form of misconduct, harassment, discrimination, or disruptive behavior will lead to immediate disqualification and removal from the premises.</p>
              <p>• Participants must follow instructions issued by the organizing committee, volunteers, and security personnel.</p>
              <p>• Participants, volunteers and attendees must maintain a formal attire throughout the event.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">2. Registration &amp; Identity</p>
              <p>• Entry is permitted only through valid registration pass.</p>
              <p>• Participants must carry:</p>
              <p>o Valid College/University ID.</p>
              <p>o Government-issued Photo ID.</p>
              <p>o Event Pass issued after registration of event.</p>
              <p>• ID badges issued during the event must be worn at all times inside the venue.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">3. Reporting &amp; Punctuality</p>
              <p>• Participants must report at 9am on both the days.</p>
              <p>• Late entries will not be entertained.</p>
              <p>• The event schedule must be strictly followed as per the official timeline.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">4. Event Participation Rules</p>
              <p>• Each participant/team may participate in multiple events, unless scheduling conflicts or specified otherwise.</p>
              <p>• Teams must adhere to event-specific rules provided separately.</p>
              <p>• Decisions made by judges and organizing committee are final and binding.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">5. Use of Equipment &amp; Resources</p>
              <p>• Participants are responsible for their own devices, laptops, and equipment unless specified.</p>
              <p>• Any damage to university property or event infrastructure will result in penalties.</p>
              <p>• Unauthorized access to restricted areas, systems, or equipment is strictly prohibited.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">6. Security &amp; Safety</p>
              <p>• The event is managed under dedicated Security and Discipline Committees.</p>
              <p>• Participants must comply with all safety protocols and emergency procedures.</p>
              <p>• Carrying dangerous, illegal, or prohibited items is strictly forbidden.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">7. Dress Code &amp; Decorum</p>
              <p>• Participants are expected to maintain decent and appropriate attire.</p>
              <p>• Any clothing or display that is offensive or inappropriate will not be allowed.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">8. Media &amp; Photography</p>
              <p>• The event will be photographed and recorded.</p>
              <p>• By participating, individuals consent to media usage for promotional purposes.</p>
              <p>• Unauthorized commercial recording or streaming is not permitted.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">9. Intellectual Property</p>
              <p>• Participants retain rights to their work.</p>
              <p>• However, AUKTAVE/Amity/IEEE may use submissions for:</p>
              <p>o Showcasing</p>
              <p>o Promotion</p>
              <p>o Documentation (with proper credit)</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">10. Food &amp; Logistics</p>
              <p>• Food arrangements will be managed by the Food &amp; Logistics Committee.</p>
              <p>• Participants must use designated areas for eating and maintain cleanliness.</p>
              <p>• Smoking drinking or consumption of any types of controlled or restricted substance inside campus is strictly prohibited.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">11. Discipline &amp; Penalties</p>
              <p>• Violations may result in:</p>
              <p>o Warning</p>
              <p>o Point deduction</p>
              <p>o Disqualification</p>
              <p>o Removal from venue</p>
              <p>• Severe misconduct may be reported to the participant’s institution.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">12. Liability Disclaimer</p>
              <p>• Organizers are not responsible for loss/damage of personal belongings.</p>
              <p>• Participants are advised to take care of their valuables.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">13. Amendments</p>
              <p>• The organizing committee reserves the right to:</p>
              <p>o Modify rules</p>
              <p>o Update schedule</p>
              <p>o Take necessary decisions for smooth execution</p>
            </div>



            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">14. School Participants &amp; Group Registrations</p>
              <p>• School delegations must present a valid School Photo ID for every student and produce it when requested by event staff or security.</p>
              <p>• All school students attending AUKTAVE 2026 must be accompanied by a designated faculty member from their institution. The faculty member is responsible for the supervision, conduct, and wellbeing of the delegation for the duration of their visit.</p>
              <p>• The designated faculty member must remain on-site while their students are present and be reachable at the contact details provided during registration.</p>
              <p>• Prior to or at the time of registration, school delegations must submit a roster listing the total number of students attending, each student’s full name and mobile telephone number, and the assigned faculty member’s full name, official designation, institutional email address, and mobile telephone number.</p>
              <p>• Students must remain within the area allocated to their school by the organisers and are not permitted to enter restricted or unauthorised zones without express permission from event staff.</p>
              <p>• Students will not be permitted to leave the campus during scheduled programme hours unless accompanied by their designated faculty member and after informing event staff. Any early departures must be coordinated with the organisers in advance.</p>
              <p>• The designated faculty member should carry records of parental consent for minor participants if required by their institution; organisers reserve the right to request proof of consent at any time.</p>
              <p>• The organising committee reserves the right to refuse entry, remove a delegation from the venue, or disqualify participants if supervision, safety, or conduct requirements are not met.</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/50 mb-2">15. Agreement Clause</p>
              <p>• Participation in AUKTAVE 2026 implies acceptance of all rules and guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
