import type { EventType } from './types';

const site = 'https://auktave.co.in';

export const events: EventType[] = [
  {
    slug: "hackathon",
    name: "24 Hour AI Hackathon",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "200", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-21T11:00:00+05:30',
    endDate: '2026-05-22T11:00:00+05:30',
    tagline: "24 hours. Track-based AI innovation.",
    summary: "CATALYST 2K26 is a 24-hour in-campus AI hackathon that brings together innovators, developers, and problem-solvers to build impactful AI solutions. The event is track-based, so teams innovate within predefined AI domains.",
    duration: "24 Hours",
    teamSize: "2 - 5 Members",
    prizePool: "₹50,000+",
    highlight: true,
    registrationFee: "₹200 per head",
    coordinator: { name: "Sriparna Das", role: "Hackathon Lead", phone: "+91 8961086320", email: "info.auktave@gmail.com" },
    rules: [
      "Open to all students currently enrolled in a college or university; valid college ID required.",
      "Teams must have 2 to 5 members and designate a Team Leader as the primary contact.",
      "Each participant can be part of only one team; multiple teams from the same college are allowed.",
      "Registration is valid only after all team members register before the deadline; false information may lead to disqualification.",
      "No registrations are accepted after the deadline.",
      "This is a 24-hour offline hackathon. Teams choose one track at the start and build within the allotted time.",
      "All work must be completed during the hackathon; pre-built projects or prior codebases are not allowed.",
      "Open-source libraries and tools are allowed but must be properly credited.",
      "Teams must maintain a GitHub repository with no commits before the official start time; regular commits are encouraged.",
      "Plagiarism (code or idea) or unauthorized external help leads to immediate disqualification.",
      "AI tools are allowed for assistance, but core logic must be original and teams must explain their implementation.",
      "Submission must include a working prototype/PoC, source code (GitHub preferred), README/documentation, and a demo or presentation.",
      "Projects are judged on innovation, functionality, technical implementation, user experience, real-world impact, and presentation clarity.",
      "Evaluation is track-wise, with winners selected within each track only.",
      "All team members must be present for the final presentation and Q&A; judges' decisions are final.",
      "Professional conduct is required at all times; harassment or misconduct results in disqualification.",
      "Teams retain project ownership; organizers may showcase projects with proper credit.",
      "Participants must bring their own devices; basic facilities (power, internet, workspace) are provided.",
      "Organizers may modify rules if needed and participants must follow the schedule strictly.",
      "Judges' decisions are final and participation implies acceptance of all rules."
    ],
    tracks: ["AI for Healthcare", "AI for Education", "AI for Sustainability", "AI for FinTech"],
    sections: [
      {
        eyebrow: "/ Overview",
        title: "Event overview",
        items: [
          "A 24-hour in-campus AI hackathon focused on building impactful solutions with AI.",
          "Track-based format lets teams innovate within predefined AI domains."
        ]
      },
      {
        eyebrow: "/ Eligibility",
        title: "Who can participate",
        items: [
          "Open to all students currently enrolled in a college or university.",
          "Valid college ID is mandatory.",
          "Each participant can join only one team.",
          "Multiple teams from the same college are allowed."
        ]
      },
      {
        eyebrow: "/ Team Formation",
        title: "Build your team",
        items: [
          "Teams must have 2 to 5 members.",
          "Each team must designate a Team Leader as the primary contact.",
          "Team composition cannot be changed after registration."
        ]
      },
      {
        eyebrow: "/ Registration",
        title: "Registration rules",
        items: [
          "All participants must register through the official platform before the deadline.",
          "Registration is valid only after all team members are registered.",
          "Providing false or incomplete information may lead to disqualification.",
          "No registrations are accepted after the deadline."
        ]
      },
      {
        eyebrow: "/ Format",
        title: "Hackathon format",
        items: [
          "This is a 24-hour offline hackathon.",
          "Teams choose one track at the beginning of the event.",
          "Teams must develop their solution within the given time.",
          "The hackathon includes: Opening briefing, Development phase, Mid-evaluation checkpoint(s), Final presentation and judging."
        ]
      },
      {
        eyebrow: "/ Tracks",
        title: "AI domains",
        items: [
          "AI for Healthcare: diagnosis, prediction, medical assistance, healthcare accessibility.",
          "AI for Education: smart learning systems, personalized education, teaching automation.",
          "AI for Sustainability: climate solutions, energy optimization, waste management, environmental monitoring.",
          "AI for FinTech: fraud detection, smart finance tools, trading systems, financial inclusion."
        ]
      },
      {
        eyebrow: "/ Development",
        title: "Development rules",
        items: [
          "All work must be completed during the hackathon duration only.",
          "Use of pre-built projects, templates, or prior codebases is strictly prohibited.",
          "Teams are free to use any technology stack.",
          "Open-source libraries and tools are allowed but must be properly credited.",
          "Teams must maintain a GitHub repository with no commits before the official start time.",
          "Regular commits are encouraged.",
          "Any form of plagiarism (code or idea) leads to immediate disqualification."
        ]
      },
      {
        eyebrow: "/ AI Usage",
        title: "AI usage policy",
        items: [
          "AI tools (e.g., ChatGPT, Copilot) are allowed for assistance.",
          "Core logic must be original.",
          "Teams must understand and explain their implementation.",
          "Excessive reliance on AI without understanding may lead to penalties."
        ]
      },
      {
        eyebrow: "/ Submissions",
        title: "Submission requirements",
        items: [
          "A working prototype / proof of concept.",
          "Source code (GitHub repository preferred).",
          "A project description README/documentation.",
          "A demo or presentation."
        ]
      },
      {
        eyebrow: "/ Judging",
        title: "Judging criteria",
        items: [
          "Innovation and originality.",
          "Functionality and completion.",
          "Technical implementation.",
          "User experience and design.",
          "Real-world impact.",
          "Presentation and clarity."
        ]
      },
      {
        eyebrow: "/ Evaluation",
        title: "Track-wise evaluation",
        items: [
          "Projects are evaluated within their selected track.",
          "Each track has its own independent winner.",
          "Judges compare projects only within the same domain for fair evaluation."
        ]
      },
      {
        eyebrow: "/ Presentation",
        title: "Final presentation",
        items: [
          "Each team must present their solution to the judges.",
          "All team members must be present.",
          "Teams must demonstrate a working prototype.",
          "Teams must explain architecture and decisions.",
          "A Q&A round will follow.",
          "Judges' decisions are final."
        ]
      },
      {
        eyebrow: "/ Conduct",
        title: "Code of conduct",
        items: [
          "Maintain professional and respectful behavior.",
          "No harassment, discrimination, or misconduct.",
          "Follow instructions from organizers.",
          "Violations may lead to disqualification."
        ]
      },
      {
        eyebrow: "/ Disqualification",
        title: "Disqualification criteria",
        items: [
          "Plagiarism or copied work.",
          "Pre-built solutions.",
          "Rule violations.",
          "False information.",
          "Unauthorized external help.",
          "Missing mandatory submissions."
        ]
      },
      {
        eyebrow: "/ IP",
        title: "Intellectual property",
        items: [
          "Teams retain ownership of their projects.",
          "Organizers may showcase projects with proper credit.",
          "All external tools and resources must be credited."
        ]
      },
      {
        eyebrow: "/ Resources",
        title: "Resources and responsibilities",
        items: [
          "Participants must bring their own laptops/devices.",
          "Basic facilities (power, internet, workspace) will be provided.",
          "Participants are responsible for their setup and data."
        ]
      },
      {
        eyebrow: "/ General",
        title: "General rules",
        items: [
          "Organizers may modify rules if necessary.",
          "Participants must follow the schedule strictly.",
          "Judges' decisions are final.",
          "Participation implies acceptance of all rules."
        ]
      },
      {
        eyebrow: "/ FAQs",
        title: "Frequently asked questions",
        items: [
          "Is there any registration fee? Yes, the registration fee is ₹200 per team.",
          "Can we change our track after selecting it? Yes, teams can change their track even on the day of the event.",
          "Will basic facilities like internet, power, and food be provided? Yes, internet access, charging points, and food will be provided throughout the event.",
          "Are participants required to stay at the venue for the full duration? Yes, participants must remain at the venue for the entire duration of the hackathon.",
          "Will certificates be provided to all team members? Yes, certificates will be issued to all registered team members.",
          "What happens if a team cancels or does not show up? Will there be a refund? No refunds will be provided; refunds will only be issued if decided by the organizing team.",
          "Will mentors or support be available during the hackathon? Yes, support will be available to guide participants during the event.",
          "How will we receive detailed information? Detailed information will be shared with team leaders via email."
        ]
      }
    ]
  },
  {
    slug: "robotics",
    name: "Robotics Competition",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "200", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-22T11:00:00+05:30',
    endDate: '2026-05-22T13:30:00+05:30',
    tagline: "Three arenas. One robotics league.",
    summary: "Pick your battlefield: Robo Soccer, Line Follower, or Drone Obstacle Course. Register once, compete in one sub-event.",
    duration: "2.5 Hours",
    teamSize: "Varies by sub-event",
    prizePool: "₹30,000",
    highlight: true,
    coordinator: { name: "Riya Banerjee", role: "Robotics Lead", phone: "+91 98300 00001", email: "info.auktave@gmail.com" },
    subEvents: [
      {
        slug: "robo-soccer",
        name: "Robo Soccer",
        tagline: "Timed goals, tight control, zero tolerance for faults.",
        summary: "A team-based robotics football event with strict bot specs and multi-stage gameplay: prelims, knockouts, and finals.",
        duration: "2.5 Hours",
        teamSize: "2 - 4 Members",
        prizePool: "₹7,000",
        coordinator: { name: "Trishanjeet Das", role: "Field Coordinator", phone: "+91 9002309368", email: "info.auktave@gmail.com" },
        registrationFee: "₹300 per team",
        rules: [
          "This is a team event with 2 to 4 members per team.",
          "A team may comprise members from different colleges.",
          "No person shall be a member of multiple teams.",
          "Teams must showcase and get their bots measured as per specification before the match.",
          "No bots can be shared by two teams.",
          "Robots constructed using LEGO kits or its spare parts or any other readymade mechanism are not allowed.",
          "The bot can be wired or wireless.",
          "Use of pneumatics, hydraulics, lethal weapons like projectiles, acids, sharp cutters, strong electromagnets, tesla coil, fire, and EMP are strictly prohibited.",
          "Bots are not allowed to pick or hold the ball; if found faulty it may lead to disqualification.",
          "Intentional damage to the arena may lead to disqualification of the bot.",
          "The right spirit of participation is expected from every participant; disciplinary violations can lead to disqualification.",
          "The decision of the coordinators will be deemed final.",
          "Dimension of the bot should not exceed 30 cm x 30 cm (L x B).",
          "Weight of the bot must be below 3 kg with no tolerance.",
          "Maximum allowed voltage is 18V.",
          "Power of the bot should be fixed throughout the play; variable power is prohibited.",
          "For wired bots, pulling wires to alter the movement of the robots will not be tolerated and may lead to disqualification.",
          "The robot may have a ball-hitting mechanism, but the robot must comply with the dimension constraints throughout its performance.",
          "Touching the robot during the competition is strictly prohibited.",
          "Loose weights on the bot are not allowed.",
          "The length of wire attached with wired robots should be at least 5 m.",
          "Unnecessary attack on the opponent bot is not allowed."
        ],
        sections: [
          {
            eyebrow: "/ Event Details",
            title: "Prelims",
            items: [
              "The bot has to score a goal by passing through obstacles in the arena.",
              "For every goal scored, +50 points will be credited.",
              "For every obstacle touch, -10 points will be deducted.",
              "A total of 3 minutes will be given to the robot in the arena.",
              "Once the timer starts, it will stop after 3 minutes; no hand touch is allowed.",
              "Until the bot topples, the bot will be replaced.",
              "Technical time-out of 1 minute will be given.",
              "According to the scores, the top 8 or 16 teams will qualify for the next round."
            ]
          },
          {
            eyebrow: "/ Event Details",
            title: "Knockout",
            items: [
              "1v1 play between bots, chosen through a lottery system.",
              "The ball will be placed at the center of the arena; bots will be placed in the extreme opposite corners of the arena.",
              "A total of 6 minutes of gameplay with 3 minutes per half.",
              "A total of 2 minutes of repair timeout will be given to every team.",
              "In case of a tie, a golden goal wins.",
              "In case of deadlock between bots for 10 seconds, the position will be reset to original."
            ]
          },
          {
            eyebrow: "/ Event Details",
            title: "Final",
            items: [
              "1v1 play between two bots from the knockouts.",
              "The ball will be placed at the center of the arena; bots will be placed in the extreme opposite corners of the arena.",
              "A total of 8 minutes of gameplay with 4 minutes per half.",
              "A total of 2 minutes of repair timeout will be given to every team.",
              "In case of a tie, a golden goal wins.",
              "In case of deadlock between bots for 10 seconds, the position will be reset to original."
            ]
          }
        ]
      },
      {
        slug: "line-follower",
        name: "Line Follower",
        tagline: "Explore, learn, then sprint the shortest path.",
        summary: "Autonomous line-maze challenge with a Dry Run exploration phase and an Actual Run speed phase on the shortest path.",
        duration: "2.5 Hours",
        teamSize: "2 - 4 Members",
        prizePool: "₹7,000",
        coordinator: { name: "Md Saad", role: "Field Coordinator", phone: "+91 9875535575", email: "info.auktave@gmail.com" },
        registrationFee: "₹300 per team",
        rules: [
          "Design and program an autonomous robot to navigate a maze defined by a continuous black line on a flat 3 m x 3 m arena.",
          "Line width is 30 mm and line angle will be 90 degrees between adjacent black lines.",
          "The robot must analyse the maze during a Dry Run, then complete it via the shortest path in the fastest time during the Actual Run.",
          "Competition has two phases: Dry Run (Exploration Phase) and Actual Run (Speed Phase).",
          "Dry Run: Robot explores the maze from Start Zone to End Zone, crossing checkpoints and storing path data.",
          "Dry Run completion is mandatory to qualify for the Actual Run.",
          "Dry Run restart limit: maximum 3 restarts allowed (from last crossed checkpoint).",
          "Actual Run: Robot traverses the maze using the shortest path.",
          "Actual Run timer runs from organiser's signal until the red LED glows at the End Zone.",
          "Actual Run restart limit: maximum 3 restarts allowed (from Start Zone).",
          "Max dimensions: 220 mm x 220 mm x 220 mm (L x B x H).",
          "Onboard battery is mandatory; max voltage is 12V anywhere in the system.",
          "Mandatory red LED that clearly glows upon detecting the End Zone.",
          "Single switch start mechanism only.",
          "Valid institute ID card required for all team members.",
          "Spare bot permitted but must pass bot verification independently.",
          "Teams must report to the venue at least 30 minutes before their scheduled slot.",
          "Calibration window: 2 minutes before each run.",
          "Dry Run time limit: to be announced on the day of competition.",
          "Actual Run time limit: to be announced on the day of competition.",
          "Dispute window: must be raised in writing within 15 minutes of incident.",
          "Register the team and bot at the event venue upon arrival.",
          "Bot must pass verification and safety inspection before competing.",
          "Spare bot (if any) must also pass bot verification independently.",
          "All team members must carry valid institute ID cards at all times.",
          "Organisers reserve the right to modify rules; any changes will be communicated before the event.",
          "The maze layout is designed and controlled entirely by the organisers; participants will not have access to the maze map before the Dry Run.",
          "The Judging Panel's ruling is final and binding in all matters.",
          "Algorithm alteration after calibration begins is a disqualification.",
          "Use of camera-based vision, image processing, or AI-based systems is disallowed.",
          "Damage to arena surface, tape, or walls is disallowed.",
          "Exceeding restart limit in either run results in disqualification for that run.",
          "Use of onboard Wi-Fi or Bluetooth during runs is disallowed.",
          "Robot transmitting or receiving data during a match is disallowed.",
          "Manual control of robot at any time during runs is disallowed.",
          "Robot splitting into multiple units during a run is disallowed.",
          "Use of fully assembled competition-ready kits (e.g., LEGO) is disallowed.",
          "Penalties (non-disqualifying): manual intervention/touching the robot (-10 points per occurrence).",
          "Penalties (non-disqualifying): false start (robot moves before organiser's signal) (-10 points)."
        ],
        sections: [
          {
            eyebrow: "/ Scoring",
            title: "Score formula",
            items: [
              "TOTAL SCORE = (A + B + S + C) - P.",
              "A = Checkpoint score (Dry Run) — 25 points per checkpoint (max 4 checkpoints).",
              "B = Dry Run completion bonus — 30 points.",
              "S = Shortest Path bonus (Actual Run) — 30 points.",
              "C = Time bonus — Maximum Actual Run time minus time taken (in seconds).",
              "P = Total penalties deducted."
            ]
          },
          {
            eyebrow: "/ Deliverables",
            title: "What teams must bring",
            items: [
              "Fully built autonomous robot meeting all specifications.",
              "Onboard battery with max voltage of 12V.",
              "Mandatory red LED to indicate End Zone detection.",
              "Single switch start mechanism.",
              "Valid institute ID card for all team members.",
              "Spare bot allowed if it passes verification independently."
            ]
          },
          {
            eyebrow: "/ Schedule",
            title: "Timing and deadlines",
            items: [
              "Calibration window: 2 minutes before each run.",
              "Dry Run time limit: to be announced on the day of competition.",
              "Actual Run time limit: to be announced on the day of competition.",
              "Arrival requirement: at least 30 minutes before scheduled slot.",
              "Dispute window: must be raised in writing within 15 minutes of incident."
            ]
          },
          {
            eyebrow: "/ Submission",
            title: "On-site registration",
            items: [
              "Register the team and bot at the event venue upon arrival.",
              "Bot must pass verification and safety inspection before competing.",
              "Spare bot (if any) must also pass bot verification independently.",
              "All team members must carry valid institute ID cards at all times."
            ]
          },
          {
            eyebrow: "/ Permissions",
            title: "Copyright and authority",
            items: [
              "Organisers reserve the right to modify rules; any changes will be communicated before the event.",
              "The maze layout is designed and controlled entirely by the organisers; participants will not have access to the maze map before the Dry Run.",
              "The Judging Panel's ruling is final and binding in all matters."
            ]
          },
          {
            eyebrow: "/ Disqualification",
            title: "Disqualification criteria",
            items: [
              "Algorithm alteration after calibration begins.",
              "Use of camera-based vision, image processing, or AI-based systems.",
              "Damage to arena surface, tape, or walls.",
              "Exceeding restart limit in either run (disqualified for that run).",
              "Use of onboard Wi-Fi or Bluetooth during runs.",
              "Robot transmitting or receiving data during a match.",
              "Manual control of robot at any time during runs.",
              "Robot splitting into multiple units during a run.",
              "Use of fully assembled competition-ready kits (e.g., LEGO)."
            ]
          },
          {
            eyebrow: "/ Penalties",
            title: "Non-disqualifying penalties",
            items: [
              "Manual intervention/touching the robot: -10 points per occurrence.",
              "False start (robot moves before organiser's signal): -10 points.",
              "The Judging Panel's decision is final and binding."
            ]
          }
        ]
      },
      {
        slug: "drone-obstacle-course",
        name: "Drone Obstacle Course",
        tagline: "Fly tight gates and sharp turns.",
        summary: "A timed obstacle course where each drone must clear every obstacle and follow checkpoint rules with strict penalties.",
        duration: "2.5 Hours",
        teamSize: "1 - 5 Members",
        prizePool: "₹12,000",
        coordinator: { name: "Mizan-ur Rahman Mondal", role: "Field Coordinator", phone: "+91 7003670838", email: "info.auktave@gmail.com" },
        offers: { "@type": "Offer", price: "400", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
        registrationFee: "₹400 per team",
        rules: [
          "Open to students from all recognized colleges and universities; register via the official portal.",
          "Required documents: photocopy of valid Government ID and photocopy of valid College or University or Work ID.",
          "An enrollment letter will be issued after registration and must be presented as a hard copy at the entry gate.",
          "Registration fee is ₹400 per participant or team.",
          "Allowed drone categories: 3-inch, 5-inch, 330mm, 450mm, and 550mm frame classes.",
          "Participants must report at least 30 minutes prior to the event start time; late arrivals are not permitted.",
          "Each participant will be assigned a Point of Contact on arrival.",
          "The drone must pass through every obstacle; failure results in disqualification.",
          "If any obstacle is missed, participants must restart from the last checkpoint and the timer pauses during restart.",
          "If the drone veers off track, return to the last checkpoint and the timer pauses during return.",
          "One repair break of 2 minutes is allowed for a crash or malfunction; failure to recover results in disqualification.",
          "If a tie occurs, the participant with fewer penalties wins; equal penalties result in a rematch.",
          "Participants will be allotted a sequence number used as the competition order.",
          "Maintain professional and respectful behavior; offensive language or discrimination leads to disqualification.",
          "Grievances must be filed with the member in charge of this competition.",
          "Participants may be disqualified for late reporting, missing documents, code of conduct violations, or unfair means."
        ],
        sections: [
          {
            eyebrow: "/ Eligibility",
            title: "Eligibility and registration",
            items: [
              "Open to students from all recognized colleges and universities.",
              "Register via the official portal.",
              "Required documents: photocopy of valid Government ID and photocopy of valid College or University or Work ID.",
              "Enrollment letter must be presented as a hard copy at the entry gate.",
              "Registration fee is ₹400 per participant or team."
            ]
          },
          {
            eyebrow: "/ Entry",
            title: "Reporting and entry",
            items: [
              "Report at least 30 minutes before the start time.",
              "Late arrivals are not permitted.",
              "Each participant will be assigned a Point of Contact for assistance."
            ]
          },
          {
            eyebrow: "/ Format",
            title: "Competition format",
            items: [
              "The drone must pass through every obstacle; failure results in disqualification.",
              "If an obstacle is missed, restart from the last checkpoint and the timer pauses during restart.",
              "If the drone veers off track, return to the last checkpoint and the timer pauses during return.",
              "One repair break of 2 minutes is allowed for a crash or malfunction; failure to recover results in disqualification.",
              "If a tie occurs, fewer penalties wins; equal penalties result in a rematch."
            ]
          },
          {
            eyebrow: "/ Structure",
            title: "Competition structure",
            items: [
              "Participants are allotted a sequence number used as the competition order."
            ]
          },
          {
            eyebrow: "/ Conduct",
            title: "Code of conduct",
            items: [
              "Maintain professional and respectful behavior at all times.",
              "Offensive language, personal attacks, or discrimination lead to immediate disqualification.",
              "Grievances must be filed with the member in charge of this competition."
            ]
          },
          {
            eyebrow: "/ Disqualification",
            title: "Disqualification conditions",
            items: [
              "Late reporting.",
              "Failure to produce required documents.",
              "Violation of code of conduct.",
              "Use of unfair means or external assistance."
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "research-expo",
    name: "Research and Project Expo",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-21T14:00:00+05:30',
    endDate: '2026-05-21T16:00:00+05:30',
    tagline: "Innovate. Integrate. Inspire. - Emerging Trends in STEM",
    summary: "The Research Poster Competition is a platform for researchers, designers, and creative practitioners to showcase work that addresses social, environmental, and community-centred concerns through STEM.",
    duration: "2 Hours",
    teamSize: "1 - 4 Members",
    prizePool: "₹10,000",
    registrationFee: "₹200 per team",
    fieldCoordinators: [
      { name: "Md Saad", role: "Field Coordinator", phone: "+91 98300 00002", email: "info.auktave@gmail.com" },
      { name: "Khushi Mehta", role: "Field Coordinator", phone: "+91 79808 44018", email: "info.auktave@gmail.com" }
    ],
    rules: [
      "Submit digital copy of poster in PDF format only",
      "Include scanned copies of student ID card and govt. ID",
      "Subject line of email submission must include: \"Research Poster Competition - For Category [name]\"",
      "Late submissions will not be accepted.",
      "All entries must meet the specified format and size requirements to be eligible for screening"
    ],
    prizes: [
      "First Prize:  ₹3000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
      "Second Prize:  ₹2000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
      "Third Prize : ₹1000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
      "Participation certificate"
    ],
    sections: [
      {
        eyebrow: "/ Overview",
        title: "Research Poster Competition Guidelines",
        items: [
          "The Research Poster Competition is a platform for researchers, designers, and creative practitioners to showcase work that addresses social, environmental, and community-centred concerns through STEM.",
          "The competition celebrates work that demonstrates innovation, originality, and social impact.",
          "It serves as a forum for cross-disciplinary dialogue and aims to build networks among creative practitioners while contributing ideas that address pressing societal issues.",
          "Submissions should address present ongoing scientific discoveries, technological advancements, sustainable solutions or futuristic concepts through visually engaging posters.",
          "Participants are encouraged to combine creativity how community and public-oriented concerns are integrated into creative and research processes, or demonstrate how art and design practices can be more inclusive, disruptive, and transformative in society."
        ]
      },
      {
        eyebrow: "/ Eligibility & Participation",
        title: "Who can participate",
        items: [
          "Students pursuing degrees in STEM fields",
          "Students from any university or educational institution",
          "Individual or team submissions accepted",
          "The designated poster presenter must be available to discuss work during the exhibition period",
          "The presenter must be present at assigned location during designated presentation time slot",
          "Printed poster must be brought by presenter to the competition venue"
        ]
      },
      {
        eyebrow: "/ Submission Guidelines",
        title: "Entry process",
        items: [
          "Submit digital copy of poster in PDF format only",
          "Include scanned copies of student ID card and govt. ID",
          "Subject line of email submission must include: \"Research Poster Competition - For Category [name]\"",
          "Submit to official competition email address",
          "Submission Deadline: 18-05-2026",
          "Late submissions will not be accepted."
        ]
      },
      {
        eyebrow: "/ Poster Requirements",
        title: "What must appear on the poster",
        items: [
          "AUKTAVE 2026 at the top right of the poster",
          "Official AUKTAVE 2026 Logo",
          "Poster Title/Theme on the top left",
          "Relevant Category/Event Name on the top left",
          "“Prepared By” section containing Author Name(s), Institutional Affiliation, and Contact Information at the bottom right.",
          "Mention the above outside the border of the poster, as mentioned."
        ]
      },
      {
        eyebrow: "/ Poster Categories",
        title: "STEM research categories",
        items: [
          "1. Science Research",
          "Research projects in fundamental and applied sciences including:",
          "Physics",
          "Chemistry",
          "Biology",
          "Environmental Science",
          "Earth and Space Science",
          "Biotechnology",
          "Microbiology",
          "Mathematical Sciences"
        ]
      },
      {
        eyebrow: "/ Poster Categories",
        title: "Technology Research",
        items: [
          "2. Technology Research",
          "Research focused on computing, digital systems, and emerging technologies including:",
          "Artificial Intelligence and Machine Learning",
          "Data Science and Analytics",
          "Cybersecurity",
          "Internet of Things",
          "Software and Application Development",
          "Cloud Computing",
          "Human-Computer Interaction",
          "AR?VR and Simulation Technologies"
        ]
      },
      {
        eyebrow: "/ Poster Categories",
        title: "Engineering Research",
        items: [
          "3. Engineering Research",
          "Research and innovation in engineering disciplines including:",
          "Mechanical Engineering",
          "Electrical and Electronics Engineering",
          "Civil Engineering",
          "Robotics and Automation",
          "Embedded Systems",
          "Mechatronics",
          "Aerospace Engineering",
          "Renewable Energy Systems"
        ]
      },
      {
        eyebrow: "/ Poster Categories",
        title: "Mathematical and Computational Research",
        items: [
          "4. Mathematical and Computational Research",
          "Research involving mathematical modelling, computation and analytical methods, including:",
          "Applied Mathematics",
          "Statistical Modelling",
          "Computational Science",
          "Operations Research",
          "Optimization Techniques",
          "Numerical Methods",
          "Algorithm Design"
        ]
      },
      {
        eyebrow: "/ Poster Categories",
        title: "Inter-disciplinary STEM Research",
        items: [
          "5. Inter-disciplinary STEM Research",
          "Projects integrating multiple STEM domains to address real world challenges, including but not limited to:",
          "Smart Cities",
          "Sustainable Development",
          "Healthcare Technology",
          "Climate and Energy Solutions",
          "Agricultural Innovation",
          "Assistive Technologies",
          "STEM for social impact"
        ]
      },
      {
        eyebrow: "/ Poster Specifications",
        title: "Format and production requirements",
        items: [
          "Physical dimensions: 22 inches×28 inches",
          "Display limited to one side only",
          "Single poster per submission",
          "Title, author, co-author names, and institution must be clearly visible",
          "Resolution appropriate for printing at specified dimensions",
          "Design must be legible and clear when displayed at full size",
          "Participants responsible for poster printing costs",
          "Organizers do not provide printing services",
          "Ensure design is printer-ready and high resolution"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Content balance",
        items: [
          "25% text content",
          "45% graphics, images, and visualizations",
          "30% white space"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Text and readability",
        items: [
          "Minimize text; use concise, clear language",
          "Title banner must be legible from 6 feet away",
          "Body text must be legible from 3 feet away",
          "Avoid using all capital letters for body text",
          "Use title case for headings where appropriate"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Typography",
        items: [
          "Select 2 to 3 font families maximum",
          "Maintain consistent font sizing and styling throughout",
          "Ensure adequate contrast between text and background",
          "Use sans-serif fonts for headers for better visibility",
          "Consider readability on various display distances"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Colour scheme",
        items: [
          "Use 2 to 3 primary colours maximum",
          "Maintain consistency in colour usage throughout",
          "Ensure sufficient contrast for text accessibility"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Visual hierarchy and consistency",
        items: [
          "Organize content to flow logically from section to section",
          "Maintain consistent margins throughout",
          "Keep line spacing consistent",
          "Use uniform border colours, styles, and thickness",
          "Apply shading consistently",
          "Create clear sections for different content types"
        ]
      },
      {
        eyebrow: "/ Design & Content Guidelines",
        title: "Graphics and visualizations",
        items: [
          "Use high-resolution photographs and images wherever possible",
          "Include charts, graphs, and photography to illustrate data",
          "Avoid large tables of raw data; use visualizations instead",
          "Use visual representation tools appropriate to content type",
          "Ensure all graphics are clearly labelled and relevant",
          "Sketch diagrams and visual journey representations where applicable"
        ]
      },
      {
        eyebrow: "/ Evaluation Criteria",
        title: "Initial check",
        items: [
          "Layout",
          "1. Poor: Neither clean nor straightforward",
          "2. Sub-par: Much left to be desired/better",
          "3. Acceptable: Some left to be desired/better",
          "4. Superior: Information clean, straightforward, organized",
          "Science-based order (IMRAD)",
          "1. Poor: Much disorder/chaotic, no references",
          "2. Sub-par: Some disorder (or missing), no references",
          "3. Acceptable: Disorder and references or order without references",
          "4. Superior: Good order and one or more references",
          "Use of graphics",
          "1. Poor: Visually unpleasant",
          "2. Sub-par: Much left to be desired / better",
          "3. Acceptable: Some left to be desired / better",
          "4. Superior: Visually helpful, eye catching, pleasant to eyes",
          "Central message communicating (Wordy and / or busy)",
          "1. Poor: Very distracting and hard to review / understand (wall of text; very busy and/or very wordy)",
          "2. Sub-par: Distracting and hard to quickly review/understand (majority was text; busy and/or wordy)",
          "3. Acceptable: Decent communication (some wordiness but could be quickly reviewed/understood)",
          "4. Superior: Concise communication (neither busy nor wordy, use of bullet points, easy, and quick to review/understand)"
        ]
      },
      {
        eyebrow: "/ Evaluation Criteria",
        title: "Jury evaluation",
        items: [
          "Clarity (30% of score)",
          "Clear interpretation and presentation of theme",
          "How inclusive or transformative the work is for audiences",
          "Clear explanation of concept and content relationship to theme",
          "Originality (20% of score)",
          "Ideas presented",
          "Data sources and interpretation",
          "Conclusions and proposed solutions",
          "Uniqueness of approach and perspective",
          "Artistic techniques and formal qualities (for visual/performing arts)",
          "Creativity (20% of score)",
          "Unique perspective and research approach",
          "Innovative methodologies",
          "Creative presentation of content",
          "Originality of outcome (product, service, policy, system, event, etc.)",
          "Unique visual expression and imagination",
          "Application of materials, tools, and techniques",
          "Visual Representation (20% of score)",
          "Quality of data visualization and graphics",
          "Visual hierarchy and organization of content",
          "Continuity and flow throughout poster",
          "Graphics and design quality",
          "Visual representation of concept and narrative",
          "Overall composition and layout",
          "Impact (10% of score)",
          "Anticipated contribution and demonstrated need",
          "Functionality and emotional connection",
          "Potential for social impact",
          "Message clarity and transmission of ideas",
          "Aesthetic and social value"
        ]
      },
      {
        eyebrow: "/ Screening & Selection Process",
        title: "Shortlisting and jury panel",
        items: [
          "Emailed entries would be checked for guideline alliance and appropriateness",
          "Top 20 entries among all categories (total 50 entries maximum)",
          "Selection based on meeting guidelines and evaluation rubric",
          "Screening committee has discretion to reject entries not meeting requirements",
          "4 eminent experts constitute jury panel for final judging",
          "Jury evaluates posters and presentations",
          "Jury decision is final for all award determinations"
        ]
      },
      {
        eyebrow: "/ Presentation Requirements",
        title: "Exhibition and logistics",
        items: [
          "Specific campus and venue location provided in acceptance letter",
          "Designated presentation time slot assigned to each presenter",
          "Presenter must be present during assigned time slot",
          "Live discussion with jury members during presentation period",
          "Printed poster must be brought to venue",
          "Set-up time provided before presentation"
        ]
      },
      {
        eyebrow: "/ Submission Formats & Technical Specifications",
        title: "Files and documentation",
        items: [
          "Poster submission format: PDF",
          "High resolution at print-ready dimensions (300 DPI minimum recommended)",
          "Student ID card (scanned copy)",
          "any unexpired Government ID",
          "Subject line: \"Research Poster Competition - For Category [Category Name]\"",
          "Attach all required documents",
          "Use official submission email address provided by organizers"
        ]
      },
      {
        eyebrow: "/ Registration & Fees",
        title: "Cost and coverage",
        items: [
          "Registration Fees :  Rs. 200",
          "Poster printing costs borne entirely by participants",
          "Travel cost not covered by organizers",
          "Participants responsible for all production expenses"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Design best practices",
        items: [
          "Posters should stimulate discussion, not serve as full presentation",
          "Keep presentation accessible to viewers of varying background knowledge",
          "Use visual storytelling to engage diverse audiences",
          "Ensure design allows for standing space and interaction"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Content organization",
        items: [
          "Follow logical flow from introduction to conclusion",
          "Group related information together",
          "Use visual breaks between content sections",
          "Number or sequence information where helpful",
          "Highlight key findings and conclusions"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Image and photo quality",
        items: [
          "Use original, high-resolution photographs when possible",
          "Ensure images are relevant and directly support content",
          "Crop or frame images intentionally",
          "Provide captions for all images and visualizations",
          "Obtain necessary permissions for image use"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Accessibility considerations",
        items: [
          "Verify text and background colour contrast using accessibility tools",
          "Provide alternative text or captions for visual-only information",
          "Ensure fonts are legible for viewers at distance"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Testing and refinement",
        items: [
          "Complete design well before printing deadline",
          "Check for spelling and grammar errors",
          "Verify all citations and data accuracy"
        ]
      },
      {
        eyebrow: "/ General Guidelines & Tips",
        title: "Presentation preparation",
        items: [
          "Practice presenting within time constraints",
          "Prepare brief summary of key points",
          "Anticipate likely questions from audience",
          "Arrange supporting materials(handouts, samples), if any, in advance",
          "Arrive early to set up and familiarize with the environment"
        ]
      },
      {
        eyebrow: "/ Important Notes",
        title: "Eligibility and compliance",
        items: [
          "All entries must meet the specified format and size requirements to be eligible for screening",
          "Entries not received by submission deadline will not be reviewed",
          "Entries not meeting technical specifications may be rejected",
          "Participants must follow specific email subject line format for proper organization",
          "Competition organizers reserve right to photograph posters and presentations for documentation",
          "By submitting, participants agree to guidelines and decisions of screening committee and jury",
          "For questions regarding specific submissions or technical issues, contact organizers promptly",
          "Any form of plagiarism, inappropriate content, or violation of event guidelines may lead to disqualification.",
          "The decision of the organizing committee and judges shall be final."
        ]
      },
      {
        eyebrow: "/ Contact & Support",
        title: "Where to reach out",
        items: [
          "Submission process and technical requirements",
          "Registration and fee payment",
          "Poster design and content guidance",
          "Accessibility accommodations",
          "Schedule and venue logistics",
          "Award announcements and results",
          "Contact the competition organizing committee at the official email address provided during registration."
        ]
      }
    ]
  },
  {
    slug: "tech-debate",
    name: "AUKTAVE Tech Debate",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-21T16:00:00+05:30',
    endDate: '2026-05-21T17:00:00+05:30',
    tagline: "Argue. Reason. Persuade.",
    summary: "A knockout-style, technology-focused debate tournament (AI ethics, cybersecurity, emerging tech) with on-the-spot motions and strict timekeeping.",
    duration: "1 Hour",
    teamSize: "1 Member",
    prizePool: "Hoodies, Swag Kits, Certificates",
    coordinator: { name: "Mizan-ur Rahman Mondal", role: "Field Coordinator", phone: "+91 8240253854", email: "info.auktave@gmail.com" },
    registrationFee: "No registration fee",
    rules: [
      "Open to students from all recognized colleges and universities; register via the official portal.",
      "Required documents at entry: photocopy of valid Government ID and photocopy of valid College/University ID.",
      "Upon successful registration participants receive an Enrollment Letter to present at the gate.",
      "No registration fee.",
      "Participants must report to the venue at least 30 minutes prior to start; late arrivals will not be permitted.",
      "Each participant is assigned a Point of Contact (POC) on arrival.",
      "Knockout elimination format: winners advance until a final winner is determined.",
      "Strict timekeeping with warnings; penalties may apply for exceeding limits.",
      "Electronic devices are prohibited during debates; pen and paper allowed during preparation.",
      "Judges’ decisions are final and binding."
    ],
    sections: [
      {
        eyebrow: "/ Eligibility & Registration",
        title: "Who can participate and how to register",
        items: [
          "Open to students from all recognized colleges and universities.",
          "Complete registration through the official portal before the event.",
          "Bring photocopy of a valid Government ID and photocopy of a valid College/University ID.",
          "After registration, participants will receive an Enrollment Letter to present at the entry gate.",
          "No registration fee is required."
        ]
      },
      {
        eyebrow: "/ Reporting & Entry",
        title: "Arrival and check-in",
        items: [
          "Report to the venue at least 30 minutes prior to the event start time.",
          "Late arrivals will not be permitted under any circumstances.",
          "Each participant will be assigned a Point of Contact (POC) for assistance upon arrival."
        ]
      },
      {
        eyebrow: "/ Competition Format",
        title: "Tournament structure",
        items: [
          "Knockout (elimination) format.",
          "Each round is a one-on-one debate between two participants.",
          "Winners advance to the next round until a final winner is determined."
        ]
      },
      {
        eyebrow: "/ Debate Structure",
        title: "Per-match timings and flow",
        items: [
          "Topic announcement & preparation time: 2 minutes.",
          "Opening statement: 2 minutes per participant.",
          "Rebuttal round: 2 minutes per participant.",
          "Cross-questioning: 2 minutes (participants question each other).",
          "Closing statement: 1 minute per participant."
        ]
      },
      {
        eyebrow: "/ Topics",
        title: "Motion selection and sides",
        items: [
          "Topics will be technology-focused (AI ethics, cybersecurity, emerging technologies).",
          "Motions will be revealed on the spot to ensure fairness.",
          "Sides (For/Against) will be assigned randomly."
        ]
      },
      {
        eyebrow: "/ Judging Criteria",
        title: "How debates are scored",
        items: [
          "Content & Knowledge — 30%.",
          "Clarity & Structure of Arguments — 20%.",
          "Rebuttal Strength — 20%.",
          "Confidence & Delivery — 15%.",
          "Critical Thinking & Responsiveness — 15%.",
          "Judges’ decisions will be final and binding."
        ]
      },
      {
        eyebrow: "/ Code of Conduct",
        title: "Behavioural expectations",
        items: [
          "Maintain professional and respectful behaviour at all times.",
          "Use of offensive language, personal attacks, or discrimination will result in immediate disqualification.",
          "Arguments must remain topic-focused and evidence-based."
        ]
      },
      {
        eyebrow: "/ Use of Aids",
        title: "Permitted and prohibited aids",
        items: [
          "Electronic devices (phones, smartwatches, etc.) are strictly prohibited during the debate.",
          "Participants may use pen and paper for note-taking during preparation time."
        ]
      },
      {
        eyebrow: "/ Timekeeping",
        title: "Strict timing rules",
        items: [
          "Strict adherence to time limits is mandatory.",
          "A 30-second warning will be given before time ends.",
          "Exceeding time limits may result in penalties."
        ]
      },
      {
        eyebrow: "/ Prize Pool Worth",
        title: "Awards and prizes",
        items: [
          "Winners will receive hoodies, swag kits, and certificates of achievement.",
          "Prizes are provided as goodies; no registration fee for participants."
        ]
      },
      {
        eyebrow: "/ Event Duration & Flow",
        title: "Schedule and availability",
        items: [
          "Total event duration: 2 hours.",
          "Rounds will be conducted in quick succession.",
          "Participants must remain available throughout the event until elimination."
        ]
      },
      {
        eyebrow: "/ Tie-Breaker",
        title: "Rapid-fire tie-break rule",
        items: [
          "If a tie occurs, a rapid-fire question round will be conducted: 1 minute per participant.",
          "Judges will determine the winner based on this round."
        ]
      },
      {
        eyebrow: "/ Disqualification",
        title: "Disqualification conditions",
        items: [
          "Late reporting.",
          "Failure to produce required documents.",
          "Violation of the code of conduct.",
          "Use of unfair means or external assistance."
        ]
      }
    ],
  },
  {
    slug: "ai-film",
    name: "AI Short Film Showcase",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-22T15:00:00+05:30',
    endDate: '2026-05-22T16:00:00+05:30',
    tagline: "Prompt-to-premiere, but human-led.",
    summary: "Create a 1 to 3 minute short film where AI assists the visual, audio, or narrative process. A jury selects the Top 10 for a grand auditorium screening and live judging.",
    duration: "1 Hour",
    teamSize: "1 - 3 Members",
    prizePool: "₹10,000",
    coordinator: { name: "Sowhardya Biswas", role: "Field Coordinator", phone: "+91 9903404844", email: "info.auktave@gmail.com" },
    registrationFee: "₹50 per team. \nFree for AUK Students.\n(AUK Students have to upload ID card in form)",
    rules: [
      "Duration: 1 to 3 minutes including credits. Format: MP4 or MOV, 1080p minimum.",
      "Teams of 1 to 3 members.",
      "Registration fee is ₹200 per team.",
      "Participants must choose one official theme pillar.",
      "Submit a one-page AI Tech Stack PDF listing the tools used.",
      "Raw, unedited AI generations are discouraged; human-led editing and pacing are expected.",
      "All content must follow the university code of conduct; defamatory or hate content is disqualified."
    ],
    themes: [
      {
        title: "The Unfiltered Lens: Freedom of Speech & Expression",
        description: "Explore the power of the human voice and the impact of speaking one’s truth in the digital age."
      },
      {
        title: "Echoes of the Past: Literature & History Come Alive",
        description: "Reimagine historical icons or literary characters in the modern world through AI."
      },
      {
        title: "The Domino Effect: Small Problems, Big Impact",
        description: "Show how an overlooked everyday issue can trigger a massive chain reaction in society."
      },
      {
        title: "Beyond the Horizon: The Sci-Fi Frontier",
        description: "Showcase speculative futures, ethical AI dilemmas, and futuristic worlds."
      },
      {
        title: "The Rising Voice: Youth as the Catalyst for Change",
        description: "Celebrate how the next generation uses technology and human intelligence to lead change."
      }
    ],
    requirements: [
      "Video file: 1 to 3 minutes including credits, MP4 or MOV, 1080p minimum.",
      "One-page AI Tech Stack PDF listing all AI tools used.",
      "Human-led editing and pacing is required; raw AI outputs alone are not acceptable."
    ],
    selectionProcess: [
      "A preliminary jury selects the Top 10 films (Elite 10).",
      "Top 10 films are screened in the Amity University Kolkata Auditorium on May 22.",
      "An expert panel judges the Top 10 live to decide 1st, 2nd, and 3rd place winners.",
      "Audience Choice Award is decided via live poll during the screening."
    ],
    prizes: [
      "Grand Winner: ₹4,000 cash + winner’s trophy.",
      "Runner Up: ₹3,000 cash.",
      "Third Place: ₹2,000 cash.",
      "Top 10 Finalists receive a Special Mention certificate and goodies."
    ],
    toolkit: [
      "Scripting: Gemini Pro (free access via student ID or personal Pro account).",
      "Video/Visuals: Runway Gen-3, Luma Dream Machine, Pika Labs, Leonardo.ai, or Midjourney.",
      "Audio: Suno or Udio for music; ElevenLabs for voiceovers.",
      "Editing: CapCut or Adobe Premiere Pro for final human-led assembly."
    ],
    importantDates: [
      "Registrations open: May 6, 2026.",
      "Submission deadline: May 17, 2026.",
      "Top 10 announcement: May 20, 2026.",
      "Grand finale screening: May 22, 2026."
    ]
  },
  {
    slug: "btech-presentations",
    name: "B.Tech Final Year Presentations",
    image: `${site}/images/og/custom-og.png`,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${site}/register` },
    startDate: '2026-05-22T13:30:00+05:30',
    endDate: '2026-05-22T15:00:00+05:30',
    tagline: "Defend your thesis. Win the floor.",
    summary: "ASETK–ProjectXpo is an innovation and project demonstration event organized by the Amity School of Engineering and Technology (ASETK), Amity University Kolkata. This exclusive event recognizes outstanding technical projects and provides a professional platform for students to demonstrate projects before an external panel of experts.",
    duration: "1.5 Hours",
    coordinator: { name: "Humza Ahmad", role: "Field Coordinator", phone: "+91 8240253854", email: "info.auktave@gmail.com" },
    rules: [
      "Participation is strictly limited to students of Amity University Kolkata (AUK).",
      "Only B.Tech Final-Year Project Teams of ASETK are eligible to participate.",
      "Projects must be part of the official major project submission/evaluation process.",
      "Only projects securing a minimum of 80% marks during the project semester evaluation process will be considered eligible for ASETK–ProjectXpo selection.",
      "Eligible projects will undergo evaluation by an External Panel of Judges during the exhibition and demonstration round.",
      "Projects will be assessed on the basis of: technical implementation, working prototype/system design, innovation and originality, presentation quality, and societal relevance and impact.",
      "Assessment Criteria & Weightage: Poster Presentation (15 marks), Implementation / Working Prototype / Model / System Design (15 marks), Innovation / Novelty (10 marks), Societal Impact (10 marks). Total: 50 marks. Evaluated by: External Panel of Judges.",
      "A proper project poster must be displayed during evaluation.",
      "The project should be functional and demonstrable.",
      "Teams must be prepared to explain: Problem Statement, Methodology, Technical Architecture, Innovation Aspect, Practical Applications, and Future Scope.",
      "Teams must maintain professionalism throughout the event.",
      "Following the exhibition and evaluation process, the external jury panel will identify the Top 3 Outstanding Projects from among the shortlisted teams.",
      "The decision of the jury panel shall be final and binding.",
      "Winning teams will receive official Certificates of Excellence issued by the institute along with official awards: Best Project (Trophy, Memento, Physical Certificate), 2nd Prize / 1st Runner-Up (Trophy, Memento, Physical Certificate), 3rd Prize / 2nd Runner-Up (Trophy, Memento, Physical Certificate).",
      "Teams must report to the venue within the allotted reporting time.",
      "Participants are responsible for the safety and handling of their project equipment.",
      "Any form of plagiarism or misrepresentation may lead to disqualification.",
      "Teams must maintain discipline and professional conduct throughout the event.",
      "Judges reserve the right to question teams regarding technical implementation and originality.",
      "The organizing committee reserves the right to modify rules if necessary.",
      "Faculty Organizers: Dr. Abhishek Mukhopadhyay, Prof. Shaon Bandyopadhyay."
    ]
  },
  {
    slug: "ieee-session",
    name: "IEEE Special Session",
    startDate: '2026-05-22T10:00:00+05:30',
    endDate: '2026-05-22T11:00:00+05:30',
    tagline: "A signal from the standards bearers.",
    summary: "An exclusive IEEE SB AUK-curated session featuring keynotes, technical talks, and a research paper showcase. A trust mark for AUKTAVE 2K26.",
    duration: "1 Hour",
    teamSize: "Open to all",
    prizePool: "Certificates",
    registrationFee: "No registration fee",
    coordinator: { name: "Humza Ahmad", role: "Field Coordinator", phone: "+91 8240253854", email: "info.auktave@gmail.com" },
    rules: [
      "Speakers must submit a 150–300 word abstract at least 48 hours before the session.",
      "Talk length: 20 minutes presentation + 10 minutes Q&A (unless otherwise stated).",
      "Slides must be uploaded in PDF format at least 1 hour before the session to the organisers' portal.",
      "Presentations should be technical and educational; promotional or sales content is not permitted.",
      "Demonstrations that use AI tools must clearly list the tools and datasets used; attribution is required.",
      "Recording of sessions is allowed only with explicit permission from both the speaker and IEEE SB AUK; organisers may record for archival purposes.",
      "Q&A is moderated and strictly time-boxed to maintain schedule flow.",
      "Speakers should arrive 30 minutes prior for AV checks; organisers provide standard AV kit and technical support.",
      "Respectful, evidence-based discourse is required; offensive language or personal attacks may lead to removal from the session.",
      "Attendance certificates are issued post-session to registered attendees and IEEE SB AUK members as applicable."
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
  { time: "10:00AM - 11:00AM", title: "Inaugural Ceremony", venue: "Auditorium", note: "Inaugural address by VC, Registrar, Dean, HOI" },
  { time: "11:00 AM ONWARDS", title: "24 Hr Hackathon Start", venue: "Incubation Center", note: "Beginning of the 24hr hackathon" },
  { time: "11:00AM - 1:00PM", title: "Keynote Session", venue: "Auditorium", note: "Keynote speaking session by industry speakers" },
  { time: "1:00PM - 2:00PM", title: "Break", venue: "Audi Lobby", note: "Refreshments and lunch break" },
  { time: "2:00PM - 4:00PM", title: "Research & Project Expo", venue: "Audi Lobby", note: "Poster presentation of individual research and projects" },
  { time: "4:00PM - 5:00PM", title: "Tech Debate", venue: "Audi Seminar Hall", note: "A competitive debate about technology" }
];

export const day2 = [
  { time: "10:00AM - 11:00AM", title: "IEEE Introduction Session", venue: "Auditorium", note: "Introductory session on IEEE AUK SB" },
  { time: "11:00 AM", title: "24 Hr Hackathon End", venue: "Incubation Center", note: "End of the 24hr hackathon" },
  { time: "11:00 AM - 1:30PM", title: "Robotics Competition", venue: "Atrium", note: "A flagship robotics event" },
  { time: "1:30PM - 3:00PM", title: "B.Tech Final Year Presentation", venue: "Audi Lobby", note: "Project presentation by B.Tech final year students of ASET Kol." },
  { time: "3:00PM - 4:00PM", title: "AI Short Film Competition", venue: "Auditorium", note: "A clash of ideologies on AI short films" },
  { time: "4:00PM - 5:00PM", title: "Prize Distribution", venue: "Auditorium", note: "Closing ceremony of the event" }
];

export const faqs = [
  { q: "Who can register for AUKTAVE 2K26?", a: "Any student from a recognised college or university. Some events are restricted to B.Tech final year, mentioned in the event detail." },
  { q: "Is there an entry fee?", a: "Most events have a small participation fee that varies per event. The fee is shown on each event page during registration." },
  { q: "Can I participate in multiple events?", a: "Yes. We have built the schedule so most events do not overlap. Pick wisely if you are doing the Hackathon and a Day 2 event." },
  { q: "Do I need to bring my own laptop?", a: "Yes for the Hackathon, Expo, AI Film, and Presentations. Robotics and Debate do not require it." },
  { q: "Is accommodation provided?", a: "Hostel accommodation is available on request for outstation participants on a first come basis. Mention it in the registration." },
  { q: "What about food?", a: "Meals and snacks are provided across the 24 hour window for all registered participants." },
  { q: "How are winners decided?", a: "Independent jury per event. Decisions are final. Detailed rubrics are shared with finalists." }
];

export const stats = [
  { value: "48", label: "Hours of Chaos" },
  { value: "7", label: "Events to Explore" },
  { value: "500+", label: "Participants Expected" },
  { value: "₹1.5L+", label: "Total Prize Pool Worth" }
];
