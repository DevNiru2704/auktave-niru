export const events = [
  {
    slug: "hackathon",
    name: "AUKTAVE Hackathon",
    tagline: "48 hours. Zero sleep. One breakthrough.",
    summary: "The flagship game. Build something the lab will not believe. Solo or teams of up to 4 dive into product, AI, hardware, and impact tracks for 48 straight hours.",
    duration: "48 Hours",
    teamSize: "1 - 4 Members",
    prizePool: "Rs. 1,50,000+",
    highlight: true,
    coordinator: { name: "Aritra Sen", role: "Hackathon Lead", phone: "+91 98300 00000", email: "hackathon@auktave.in" },
    rules: [
      "Teams of 1 to 4 members. Cross-college teams are allowed.",
      "All code must be written within the 48 hour window. Pre-existing libraries and assets are fine if disclosed.",
      "Submissions require a working demo, GitHub link, and a 3 minute pitch video.",
      "Plagiarism, AI-only generation without modification, or using paid solutions disqualifies the entry.",
      "Teams must be present for the final pitch round. No remote submissions for finals.",
      "Judges decisions are final and binding."
    ],
    tracks: ["Open Innovation", "AI / ML", "Hardware + IoT", "Sustainability", "Edutech"]
  },
  {
    slug: "robotics",
    name: "Robotics Arena",
    tagline: "Engineering with consequences.",
    summary: "Line followers, combat bots, and autonomous navigation challenges. Bring your bot or build one in our hardware bay.",
    duration: "8 Hours",
    teamSize: "2 - 4 Members",
    prizePool: "Rs. 40,000",
    coordinator: { name: "Riya Banerjee", role: "Robotics Lead", phone: "+91 98300 00001", email: "robotics@auktave.in" },
    rules: [
      "Robots must fit a 30 x 30 x 30 cm dimension and weigh under 3 kg.",
      "Wireless control via Bluetooth or RF only. No tethered power.",
      "Three rounds: line follow, obstacle clear, free style.",
      "Damaging the arena results in disqualification.",
      "Repair time of 5 minutes is allowed between rounds."
    ]
  },
  {
    slug: "research-expo",
    name: "Research and Project Expo",
    tagline: "Show your experiment to the world.",
    summary: "Showcase your research, capstone, or prototype to industry mentors and investors at the AUKTAVE Expo Floor.",
    duration: "Day 1 + Day 2",
    teamSize: "1 - 5 Members",
    prizePool: "Rs. 25,000",
    coordinator: { name: "Soumya Dutta", role: "Expo Lead", phone: "+91 98300 00002", email: "expo@auktave.in" },
    rules: [
      "One booth per project. Posters, demos, and printed material allowed.",
      "Each team gets a 5 minute walkthrough slot with judges.",
      "Power and table provided. Bring your own laptops and props.",
      "Live demos must be functional, not just simulations.",
      "Originality and clarity score equally with technical depth."
    ]
  },
  {
    slug: "tech-debate",
    name: "Tech Debate",
    tagline: "Argue like a developer reviewing PRs.",
    summary: "Heated, structured, technical. Debate motions on AI ethics, open source, and the future of computing.",
    duration: "3 Hours",
    teamSize: "1 Member",
    prizePool: "Rs. 15,000",
    coordinator: { name: "Vikram Roy", role: "Debate Lead", phone: "+91 98300 00003", email: "debate@auktave.in" },
    rules: [
      "Solo participation. Two sides: for and against.",
      "Each speaker gets 3 minutes opening, 2 minutes rebuttal, 1 minute close.",
      "Motions revealed 30 minutes before each round.",
      "No personal attacks. Substantive, fact-based arguments only.",
      "Audience question round in the finals."
    ]
  },
  {
    slug: "ai-film",
    name: "AI Short Film Showcase",
    tagline: "Storytelling, but the cast is silicon.",
    summary: "Curated screening and competition for short films generated, edited, or augmented with AI tools.",
    duration: "4 Hours",
    teamSize: "1 - 3 Members",
    prizePool: "Rs. 20,000",
    coordinator: { name: "Ananya Ghosh", role: "Film Lead", phone: "+91 98300 00004", email: "film@auktave.in" },
    rules: [
      "Films between 60 and 240 seconds.",
      "AI tools must be disclosed in credits. No deepfakes of real public figures.",
      "Submissions in MP4 (H.264), 1080p preferred.",
      "Original soundtracks or licensed audio only.",
      "Public screening followed by jury and audience vote."
    ]
  },
  {
    slug: "btech-presentations",
    name: "B.Tech Final Year Presentations",
    tagline: "Defend your thesis. Win the floor.",
    summary: "Final year B.Tech students present capstone projects to a panel of academics and industry pros.",
    duration: "6 Hours",
    teamSize: "1 - 4 Members",
    prizePool: "Rs. 30,000",
    coordinator: { name: "Prof. K. Mukherjee", role: "Academic Lead", phone: "+91 98300 00005", email: "presentations@auktave.in" },
    rules: [
      "Open to final year B.Tech students from any college.",
      "Each team gets 8 minutes presentation + 4 minutes Q&A.",
      "Slide deck submitted 24 hours before the event.",
      "Working prototypes are encouraged but not mandatory.",
      "Judging on novelty, execution, clarity, and impact."
    ]
  },
  {
    slug: "ieee-session",
    name: "IEEE Special Session",
    tagline: "A signal from the standards bearers.",
    summary: "An exclusive IEEE-curated session featuring keynotes, technical talks, and a research paper showcase. A trust mark for AUKTAVE 2K26.",
    duration: "2 Hours",
    teamSize: "Open to all",
    prizePool: "Certificates + IEEE perks",
    coordinator: { name: "IEEE AUK Chapter", role: "Society Liaison", phone: "+91 98300 00006", email: "ieee@auktave.in" },
    rules: [
      "Open seating, first come first served.",
      "IEEE members get priority registration and special swag.",
      "Recording in session is restricted unless stated.",
      "Q&A is strictly time-boxed and moderated.",
      "Attendance certificates issued post session."
    ]
  }
];

export const sponsors = [
  {
    tier: "TITLE SPONSOR",
    price: "₹25,000",
    perks: [
      "Naming rights",
      "Speaking opportunity at inaugural",
      "Logo on all creatives, certificates & media",
      "Dedicated video branding & Presentation Slot",
      "3 premium standees"
    ]
  },
  {
    tier: "POWERED BY",
    price: "₹15,000",
    perks: [
      "Prominent logo placement",
      "Event mentions & announcements",
      "Branding on official creatives",
      "Video branding slot",
      "2 standees"
    ]
  },
  {
    tier: "SPONSORED BY",
    price: "₹10,000",
    perks: ["Logo on promotional materials", "Event-level branding", "Certificate branding", "1 standee"]
  },
  {
    tier: "CO-SPONSORED BY",
    price: "₹5,000",
    perks: ["Logo on selected creatives", "EMCEE mentions", "Certificate branding"]
  },
  {
    tier: "PARTNERS",
    price: "₹2,000",
    perks: ["Logo on posters & screens", "On-ground recognition", "Basic promotional visibility"]
  },
  {
    tier: "IN-KIND SPONSORSHIP",
    price: "NA",
    description:
      "We welcome collaborations in the form of products, services, or logistical support. Examples: Food & Beverage, Merchandise, Media Coverage, Hydration, etc.",
    perks: ["Branding equivalent to contribution", "Product/service integration", "Event"]
  }
];

export const day1 = [
  { time: "09:00", title: "Inauguration", note: "Vice Chancellor address + lamp lighting" },
  { time: "10:30", title: "Hackathon Begins", note: "48 hour clock starts" },
  { time: "12:00", title: "Industry Keynote", note: "Headline talk on the future of computing" },
  { time: "14:00", title: "Research and Project Expo", note: "Floor opens to public" },
  { time: "17:00", title: "Tech Debate", note: "Open motion battles" },
  { time: "20:00", title: "Night Snacks + Jam Session", note: "Hackers stay caffeinated" }
];

export const day2 = [
  { time: "09:00", title: "IEEE Special Session", note: "Standards, papers, and signal" },
  { time: "11:00", title: "Robotics Arena", note: "Combat + line follow rounds" },
  { time: "13:00", title: "B.Tech Final Year Presentations", note: "Capstone defense" },
  { time: "15:00", title: "AI Short Film Showcase", note: "Public screening + voting" },
  { time: "18:00", title: "Hackathon Final Pitches", note: "Top 10 to jury" },
  { time: "20:00", title: "Prize Distribution + Closing", note: "We go quiet, but the lab stays open" }
];

export const faqs = [
  { q: "Who can register for AUKTAVE 2K26?", a: "Any student from a recognised college or university. Some events are restricted to B.Tech final year, mentioned in the event detail." },
  { q: "Is there an entry fee?", a: "Most events have a small participation fee that varies per event. The fee is shown on each event page during registration." },
  { q: "Can I participate in multiple events?", a: "Yes. We have built the schedule so most events do not overlap. Pick wisely if you are doing the Hackathon and a Day 2 event." },
  { q: "Do I need to bring my own laptop?", a: "Yes for the Hackathon, Expo, AI Film, and Presentations. Robotics and Debate do not require it." },
  { q: "Is accommodation provided?", a: "Hostel accommodation is available on request for outstation participants on a first come basis. Mention it in the registration." },
  { q: "What about food?", a: "Meals and snacks are provided across the 48 hour window for all registered participants." },
  { q: "How are winners decided?", a: "Independent jury per event. Decisions are final. Detailed rubrics are shared with finalists." }
];

export const stats = [
  { value: "48", label: "Hours of Chaos" },
  { value: "7", label: "Games to Play" },
  { value: "1500+", label: "Players Expected" },
  { value: "Rs. 3L+", label: "Total Prize Pool" }
];
