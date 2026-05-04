function buildAUKTAVERegistrationForm() {
  const FORM_ID = "1XXswD_sk6R_H3viKQF5wvOoF_NgDiNkdPD-suKrRnBg";
  const form = FormApp.openById(FORM_ID);

  // ── Clear existing items ──────────────────────────────────────────────────
  form.getItems().forEach(item => form.deleteItem(item));

  // ── Form metadata ─────────────────────────────────────────────────────────
  form.setTitle("AUKTAVE 2026")
      .setDescription(
        "Welcome to AUKTAVE 2026 — Amity University Kolkata's flagship technical fest.\n\n" +
        "This form registers you for one or more events across two days of innovation, " +
        "debate, robotics, AI filmmaking, research showcases, and the grand 24-hour AI Hackathon.\n\n" +
        "📌 BEFORE YOU FILL THIS FORM:\n" +
        "• Read the rules for your selected event on the official website.\n" +
        "• Ensure ALL team members are available for the event duration.\n" +
        "• Use your official college email IDs wherever asked.\n" +
        "• One submission per team. The Team Leader submits on behalf of the whole team.\n\n" +
        "⚠️ Providing false or incomplete information may result in disqualification.\n" +
        "✅ Submitting this form implies acceptance of all event rules and the AUKTAVE Code of Conduct.\n\n" +
        "For queries: contact@auktave.in | Website: www.auktave.in"
      )
      .setCollectEmail(true)
      .setAllowResponseEdits(false)
      .setLimitOneResponsePerUser(false)
      .setShuffleQuestions(false);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 0 — COMMON PARTICIPANT DETAILS
  // ══════════════════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
      .setTitle("Section 1: Personal Details")
      .setHelpText(
        "Fill in your own details as the primary registrant / Team Leader. " +
        "These details will be used for all official communication, certificates, and prizes."
      );

  form.addTextItem()
      .setTitle("Full Name")
      .setHelpText("As it should appear on your certificate.")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Email Address")
      .setHelpText("Preferably your college/university email. All updates will be sent here.")
      .setValidation(
        FormApp.createTextValidation()
          .requireTextIsEmail()
          .build()
      )
      .setRequired(true);

  form.addTextItem()
      .setTitle("Phone Number")
      .setHelpText("Active WhatsApp number. Format: +91XXXXXXXXXX")
      .setValidation(
        FormApp.createTextValidation()
          .requireTextMatchesPattern("^[+]?[0-9]{10,13}$")
          .build()
      )
      .setRequired(true);

  form.addTextItem()
      .setTitle("College / University Name")
      .setHelpText("Full official name of your institution.")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Department / Branch")
      .setHelpText("E.g., Computer Science & Engineering, Electronics, MBA.")
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("Current Year of Study")
      .setChoiceValues([
        "1st Year",
        "2nd Year",
        "3rd Year",
        "4th Year",
        "Postgraduate (1st Year)",
        "Postgraduate (2nd Year)",
        "PhD / Research Scholar"
      ])
      .setRequired(true);

  form.addTextItem()
      .setTitle("College / University City")
      .setHelpText("City where your institution is located.")
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("Are you an outstation participant?")
      .setChoiceValues(["Yes — I need accommodation assistance", "No — I am local / have my own arrangements"])
      .setRequired(true);

  form.addTextItem()
      .setTitle("Student ID / Roll Number")
      .setHelpText("Used for identity verification at the venue. Bring your college ID card on the day.")
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 1 — EVENT SELECTION
  // ══════════════════════════════════════════════════════════════════════════
  const eventPageBreak = form.addPageBreakItem()
      .setTitle("Section 2: Event Selection")
      .setHelpText(
        "Choose the event you are registering for. Each event has its own dedicated section below.\n\n" +
        "Note: If you wish to participate in multiple events, submit a separate form for each event."
      );

  const eventSelector = form.addMultipleChoiceItem()
      .setTitle("Which event are you registering for?")
      .setHelpText("Select one event. Your answer will navigate you to the correct section.")
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 2 — 24 HOUR AI HACKATHON
  // ══════════════════════════════════════════════════════════════════════════
  const hackathonPage = form.addPageBreakItem()
      .setTitle("24 Hour AI Hackathon")
      .setHelpText(
        "⏱ Duration: 24 Hours  |  👥 Team Size: 2–5 Members  |  💰 Prize Pool: Rs. 50,000+\n" +
        "📍 Venue: Incubation Center  |  📅 Day 1 – 11:00 AM onwards\n\n" +
        "A 24-hour in-campus AI hackathon where teams build impactful solutions inside predefined AI domains. " +
        "Pick one track at kickoff, build fast, and present a working prototype to the jury.\n\n" +
        "🔹 Key Rules:\n" +
        "• All work must be built during the hackathon. No pre-built codebases.\n" +
        "• Maintain a GitHub repository with no commits before the official start time.\n" +
        "• AI tools (e.g., Copilot, ChatGPT) are allowed for assistance — core logic must be original.\n" +
        "• Submission: Working prototype + GitHub repo + README + Demo/Presentation.\n" +
        "• Judging is track-wise. Each track has its own independent winner.\n\n" +
        "📩 Coordinator: Aritra Sen | hackathon@auktave.in | +91 98300 00000"
      );

  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Information");

  form.addTextItem()
      .setTitle("[Hackathon] Team Name")
      .setHelpText("Choose a unique team name. This will appear on all event materials.")
      .setRequired(true);

  form.addListItem()
      .setTitle("[Hackathon] Select Your Track")
      .setHelpText(
        "You must commit to one track at kickoff. Your project will be judged within this track only.\n" +
        "• AI for Healthcare: diagnosis, prediction, medical assistance, healthcare accessibility.\n" +
        "• AI for Education: smart learning systems, personalised education, teaching automation.\n" +
        "• AI for Sustainability: climate solutions, energy optimisation, waste management, environmental monitoring.\n" +
        "• AI for FinTech: fraud detection, smart finance tools, trading systems, financial inclusion.\n" +
        "• Open Innovation in AI: any innovative AI-based solution beyond the defined tracks."
      )
      .setChoiceValues([
        "AI for Healthcare",
        "AI for Education",
        "AI for Sustainability",
        "AI for FinTech",
        "Open Innovation in AI"
      ])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[Hackathon] Brief Project Idea / Concept (Optional)")
      .setHelpText("A short description of what your team plans to build. 100 words max. This is not binding.")
      .setRequired(false);

  // Team Leader
  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Leader (Member 1)");

  form.addTextItem().setTitle("[Hackathon] Leader Full Name").setRequired(true);
  form.addTextItem().setTitle("[Hackathon] Leader Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Hackathon] Leader Phone").setRequired(true);
  form.addTextItem().setTitle("[Hackathon] Leader College & Department").setRequired(true);

  // Member 2
  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Member 2")
      .setHelpText("Required. Minimum team size is 2.");
  form.addTextItem().setTitle("[Hackathon] Member 2 Full Name").setRequired(true);
  form.addTextItem().setTitle("[Hackathon] Member 2 Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Hackathon] Member 2 Phone").setRequired(true);
  form.addTextItem().setTitle("[Hackathon] Member 2 College & Department").setRequired(true);

  // Member 3
  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Member 3 (if applicable)")
      .setHelpText("Optional. Leave blank if your team has only 2 members.");
  form.addTextItem().setTitle("[Hackathon] Member 3 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 3 Email").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 3 Phone").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 3 College & Department").setRequired(false);

  // Member 4
  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Member 4 (if applicable)");
  form.addTextItem().setTitle("[Hackathon] Member 4 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 4 Email").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 4 Phone").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 4 College & Department").setRequired(false);

  // Member 5
  form.addSectionHeaderItem()
      .setTitle("Hackathon — Team Member 5 (if applicable)");
  form.addTextItem().setTitle("[Hackathon] Member 5 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 5 Email").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 5 Phone").setRequired(false);
  form.addTextItem().setTitle("[Hackathon] Member 5 College & Department").setRequired(false);

  form.addCheckboxItem()
      .setTitle("[Hackathon] Declaration & Consent")
      .setChoiceValues([
        "All team members are currently enrolled students and possess valid college IDs.",
        "All work will be original and completed within the 24-hour window.",
        "We have read and agree to the Hackathon rules and AUKTAVE Code of Conduct.",
        "We understand that plagiarism or use of pre-built code leads to immediate disqualification."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 3 — ROBOTICS COMPETITION
  // ══════════════════════════════════════════════════════════════════════════
  const roboticsPage = form.addPageBreakItem()
      .setTitle("Robotics Competition")
      .setHelpText(
        "⏱ Duration: 8 Hours  |  👥 Team Size: 2–4 Members  |  💰 Prize Pool: Rs. 40,000\n" +
        "📍 Venue: Atrium  |  📅 Day 2 – 11:00 AM to 1:30 PM\n\n" +
        "Line followers, combat bots, and autonomous navigation challenges. " +
        "Bring your bot or build one in our hardware bay.\n\n" +
        "🔹 Key Rules:\n" +
        "• Robot dimensions: max 30 × 30 × 30 cm. Weight: under 3 kg.\n" +
        "• Wireless control only — Bluetooth or RF. No tethered power.\n" +
        "• Three rounds: Line Follow → Obstacle Clear → Freestyle.\n" +
        "• Repair time of 5 minutes allowed between rounds.\n" +
        "• Damaging the arena results in disqualification.\n\n" +
        "📩 Coordinator: Riya Banerjee | robotics@auktave.in | +91 98300 00001"
      );

  form.addSectionHeaderItem()
      .setTitle("Robotics — Team & Bot Information");

  form.addTextItem()
      .setTitle("[Robotics] Team Name")
      .setRequired(true);

  form.addTextItem()
      .setTitle("[Robotics] Bot Name")
      .setHelpText("Give your robot a name. Used for announcements during the event.")
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Robotics] Bot Type")
      .setChoiceValues([
        "Line Follower",
        "Combat / Battle Bot",
        "Autonomous Navigation Bot",
        "Multi-purpose / Hybrid"
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Robotics] Primary Control Method")
      .setChoiceValues(["Bluetooth", "RF (Radio Frequency)"])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Robotics] Will you be bringing a pre-built bot?")
      .setChoiceValues([
        "Yes — we will bring our own robot",
        "No — we plan to build at the hardware bay"
      ])
      .setRequired(true);

  // Leader
  form.addSectionHeaderItem()
      .setTitle("Robotics — Team Leader (Member 1)");
  form.addTextItem().setTitle("[Robotics] Leader Full Name").setRequired(true);
  form.addTextItem().setTitle("[Robotics] Leader Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Robotics] Leader Phone").setRequired(true);

  // Member 2
  form.addSectionHeaderItem().setTitle("Robotics — Team Member 2").setHelpText("Required. Minimum team size is 2.");
  form.addTextItem().setTitle("[Robotics] Member 2 Full Name").setRequired(true);
  form.addTextItem().setTitle("[Robotics] Member 2 Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Robotics] Member 2 Phone").setRequired(true);

  // Member 3
  form.addSectionHeaderItem().setTitle("Robotics — Team Member 3 (if applicable)");
  form.addTextItem().setTitle("[Robotics] Member 3 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Robotics] Member 3 Email").setRequired(false);
  form.addTextItem().setTitle("[Robotics] Member 3 Phone").setRequired(false);

  // Member 4
  form.addSectionHeaderItem().setTitle("Robotics — Team Member 4 (if applicable)");
  form.addTextItem().setTitle("[Robotics] Member 4 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Robotics] Member 4 Email").setRequired(false);
  form.addTextItem().setTitle("[Robotics] Member 4 Phone").setRequired(false);

  form.addCheckboxItem()
      .setTitle("[Robotics] Declaration & Consent")
      .setChoiceValues([
        "Our bot complies with the 30×30×30 cm and under 3 kg specifications.",
        "We will use only Bluetooth or RF for wireless control. No tethered power.",
        "We agree to the Robotics Competition rules and AUKTAVE Code of Conduct.",
        "We understand that damaging the arena leads to disqualification."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 4 — RESEARCH & PROJECT EXPO
  // ══════════════════════════════════════════════════════════════════════════
  const expoPage = form.addPageBreakItem()
      .setTitle("Research & Project Expo")
      .setHelpText(
        "⏱ Duration: Day 1 + Day 2  |  👥 Team Size: 1–5 Members  |  💰 Prize Pool: Rs. 25,000\n" +
        "📍 Venue: Audi Lobby  |  📅 Day 1 – 2:00 PM to 4:00 PM & Day 2 – 1:30 PM onwards\n\n" +
        "Showcase your research, capstone, or prototype to industry mentors and investors at the AUKTAVE Expo Floor.\n\n" +
        "🔹 Key Rules:\n" +
        "• One booth per project. Posters, demos, and printed material are allowed.\n" +
        "• Each team gets a 5-minute walkthrough slot with judges.\n" +
        "• Power and table are provided. Bring your own laptops and props.\n" +
        "• Live demos must be functional — not just simulations.\n" +
        "• Originality and clarity score equally with technical depth.\n\n" +
        "📩 Coordinator: Soumya Dutta | expo@auktave.in | +91 98300 00002"
      );

  form.addSectionHeaderItem()
      .setTitle("Expo — Project & Team Information");

  form.addTextItem().setTitle("[Expo] Project Title").setRequired(true);

  form.addListItem()
      .setTitle("[Expo] Project Domain / Category")
      .setChoiceValues([
        "Artificial Intelligence / Machine Learning",
        "Internet of Things (IoT)",
        "Robotics & Automation",
        "Web / App Development",
        "Cybersecurity",
        "Sustainability & Green Tech",
        "Healthcare Technology",
        "FinTech & Blockchain",
        "Data Science & Analytics",
        "Other"
      ])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[Expo] Project Abstract")
      .setHelpText("Describe your project in 150 words or less. What problem does it solve? What is the approach?")
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Expo] Will you have a live demo?")
      .setChoiceValues([
        "Yes — fully functional live demo",
        "Yes — partial demo / proof of concept",
        "No — poster and presentation only"
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Expo] Is this a research paper, capstone project, or prototype?")
      .setChoiceValues([
        "Published / Under-review Research Paper",
        "Capstone / Final Year Project",
        "Independent Prototype / Startup Idea",
        "Other Academic Project"
      ])
      .setRequired(true);

  // Leader
  form.addSectionHeaderItem().setTitle("Expo — Team Leader (Member 1)");
  form.addTextItem().setTitle("[Expo] Leader Full Name").setRequired(true);
  form.addTextItem().setTitle("[Expo] Leader Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Expo] Leader Phone").setRequired(true);

  // Members 2–5
  [2, 3, 4, 5].forEach(i => {
    const required = false;
    form.addSectionHeaderItem().setTitle(`Expo — Team Member ${i} (if applicable)`);
    form.addTextItem().setTitle(`[Expo] Member ${i} Full Name`).setRequired(required);
    form.addTextItem().setTitle(`[Expo] Member ${i} Email`).setRequired(required);
    form.addTextItem().setTitle(`[Expo] Member ${i} Phone`).setRequired(required);
  });

  form.addCheckboxItem()
      .setTitle("[Expo] Declaration & Consent")
      .setChoiceValues([
        "The project is original and not plagiarised.",
        "Live demos will be functional and not mere simulations.",
        "We agree to the Expo rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 5 — TECH DEBATE
  // ══════════════════════════════════════════════════════════════════════════
  const debatePage = form.addPageBreakItem()
      .setTitle("Tech Debate")
      .setHelpText(
        "⏱ Duration: 3 Hours  |  👤 Solo Participation  |  💰 Prize Pool: Rs. 15,000\n" +
        "📍 Venue: Audi Seminar Hall  |  📅 Day 1 – 4:00 PM to 5:00 PM\n\n" +
        "Heated, structured, technical. Debate motions on AI ethics, open source, and the future of computing.\n\n" +
        "🔹 Key Rules:\n" +
        "• Solo participation only. Two sides: For and Against.\n" +
        "• Each speaker: 3 min opening + 2 min rebuttal + 1 min close.\n" +
        "• Motions revealed 30 minutes before each round.\n" +
        "• No personal attacks. Substantive, fact-based arguments only.\n" +
        "• Audience Q&A round in the finals.\n\n" +
        "📩 Coordinator: Vikram Roy | debate@auktave.in | +91 98300 00003"
      );

  form.addSectionHeaderItem()
      .setTitle("Tech Debate — Participant Information");

  form.addTextItem().setTitle("[Debate] Full Name").setRequired(true);
  form.addTextItem().setTitle("[Debate] Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Debate] Phone").setRequired(true);
  form.addTextItem().setTitle("[Debate] College & Department").setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Debate] Preferred Side")
      .setHelpText("This is a preference — final assignment is at the organiser's discretion.")
      .setChoiceValues(["For (Proposition)", "Against (Opposition)", "No preference / Open to either"])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[Debate] Topics of Interest (Optional)")
      .setHelpText(
        "Name up to 3 tech topics you are confident debating. Examples: AI Regulation, Open Source vs Proprietary, " +
        "Crypto & Web3, Surveillance Tech, Autonomous Weapons. This helps us design motions."
      )
      .setRequired(false);

  form.addMultipleChoiceItem()
      .setTitle("[Debate] Have you participated in a formal debate before?")
      .setChoiceValues(["Yes — college / inter-college level", "Yes — school level", "No — this is my first time"])
      .setRequired(true);

  form.addCheckboxItem()
      .setTitle("[Debate] Declaration & Consent")
      .setChoiceValues([
        "I am a currently enrolled student with a valid college ID.",
        "I will participate without personal attacks or misconduct.",
        "I agree to the Tech Debate rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 6 — AI SHORT FILM SHOWCASE
  // ══════════════════════════════════════════════════════════════════════════
  const filmPage = form.addPageBreakItem()
      .setTitle("AI Short Film Showcase")
      .setHelpText(
        "⏱ Duration: 4 Hours (Screening)  |  👥 Team Size: 1–3 Members  |  💰 Prize Pool: Rs. 10,000\n" +
        "📍 Venue: Auditorium  |  📅 Finale Screening: May 22, 2026\n\n" +
        "Create a 1–3 minute short film where AI assists the visual, audio, or narrative process. " +
        "A jury selects the Top 10 for a grand auditorium screening and live judging.\n\n" +
        "🔹 Key Dates:\n" +
        "• Registrations open: May 6, 2026\n" +
        "• Submission deadline: May 17, 2026\n" +
        "• Top 10 announcement: May 20, 2026\n" +
        "• Grand finale screening: May 22, 2026\n\n" +
        "🔹 Key Rules:\n" +
        "• Duration: 1–3 minutes including credits. Format: MP4 or MOV, 1080p minimum.\n" +
        "• Submit a one-page AI Tech Stack PDF listing the tools used.\n" +
        "• Human-led editing and pacing required. Raw unedited AI generations are discouraged.\n" +
        "• Must choose one official theme pillar.\n" +
        "• All content must follow the university code of conduct.\n\n" +
        "🏆 Prizes:\n" +
        "• Grand Winner: Rs. 4,000 + Trophy\n" +
        "• Runner Up: Rs. 3,000\n" +
        "• Third Place: Rs. 2,000\n" +
        "• Top 10 Finalists: Special Mention Certificate + Goodies\n" +
        "• Audience Choice Award (via live poll during screening)\n\n" +
        "📩 Coordinator: Ananya Ghosh | film@auktave.in | +91 98300 00004"
      );

  form.addSectionHeaderItem()
      .setTitle("AI Short Film — Team & Film Information");

  form.addTextItem()
      .setTitle("[Film] Team / Director Name")
      .setHelpText("For solo entries, this is your own name. For teams, provide a team / project name.")
      .setRequired(true);

  form.addTextItem()
      .setTitle("[Film] Film Title")
      .setHelpText("Working title is acceptable if the final title is not decided yet.")
      .setRequired(true);

  form.addListItem()
      .setTitle("[Film] Select Theme Pillar")
      .setHelpText(
        "You must choose one official theme. Your film will be evaluated within this theme.\n" +
        "• The Unfiltered Lens: freedom of speech and expression in the digital age.\n" +
        "• Echoes of the Past: historical icons or literary characters reimagined through AI.\n" +
        "• The Domino Effect: how a small overlooked problem triggers a massive chain reaction.\n" +
        "• Beyond the Horizon: speculative futures, ethical AI dilemmas, futuristic worlds.\n" +
        "• The Rising Voice: the next generation using technology to lead change."
      )
      .setChoiceValues([
        "The Unfiltered Lens: Freedom of Speech & Expression",
        "Echoes of the Past: Literature & History Come Alive",
        "The Domino Effect: Small Problems, Big Impact",
        "Beyond the Horizon: The Sci-Fi Frontier",
        "The Rising Voice: Youth as the Catalyst for Change"
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Film] Approximate Film Duration")
      .setChoiceValues([
        "Under 1 minute (short format)",
        "1–2 minutes",
        "2–3 minutes"
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[Film] Submission Format")
      .setChoiceValues(["MP4", "MOV"])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[Film] AI Tools You Plan to Use")
      .setHelpText(
        "List all AI tools you intend to use. E.g.:\n" +
        "• Scripting: Gemini Pro\n" +
        "• Visuals: Runway Gen-3, Luma Dream Machine, Midjourney\n" +
        "• Audio: Suno, ElevenLabs\n" +
        "• Editing: CapCut, Adobe Premiere Pro\n\n" +
        "You must submit a one-page AI Tech Stack PDF along with your film."
      )
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[Film] Short Film Synopsis")
      .setHelpText("Describe your film concept in 100 words or less. Theme + story idea + AI usage approach.")
      .setRequired(true);

  // Leader / Director
  form.addSectionHeaderItem().setTitle("AI Short Film — Director / Team Leader");
  form.addTextItem().setTitle("[Film] Leader Full Name").setRequired(true);
  form.addTextItem().setTitle("[Film] Leader Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[Film] Leader Phone").setRequired(true);
  form.addTextItem().setTitle("[Film] Leader College & Department").setRequired(true);

  // Member 2
  form.addSectionHeaderItem().setTitle("AI Short Film — Team Member 2 (if applicable)");
  form.addTextItem().setTitle("[Film] Member 2 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Film] Member 2 Email").setRequired(false);
  form.addTextItem().setTitle("[Film] Member 2 Phone").setRequired(false);

  // Member 3
  form.addSectionHeaderItem().setTitle("AI Short Film — Team Member 3 (if applicable)");
  form.addTextItem().setTitle("[Film] Member 3 Full Name").setRequired(false);
  form.addTextItem().setTitle("[Film] Member 3 Email").setRequired(false);
  form.addTextItem().setTitle("[Film] Member 3 Phone").setRequired(false);

  form.addCheckboxItem()
      .setTitle("[Film] Declaration & Consent")
      .setChoiceValues([
        "Our film will be 1–3 minutes including credits, in MP4 or MOV at 1080p minimum.",
        "We will submit a one-page AI Tech Stack PDF listing all tools used.",
        "All content is original and does not contain defamatory or hate content.",
        "Human-led editing and pacing will be applied — not raw AI outputs alone.",
        "We agree to the AI Short Film rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 7 — B.TECH FINAL YEAR PRESENTATIONS
  // ══════════════════════════════════════════════════════════════════════════
  const btechPage = form.addPageBreakItem()
      .setTitle("B.Tech Final Year Presentations")
      .setHelpText(
        "⏱ Duration: 6 Hours  |  👥 Team Size: 1–4 Members  |  💰 Prize Pool: Rs. 30,000\n" +
        "📍 Venue: Audi Lobby  |  📅 Day 2 – 1:30 PM to 3:00 PM\n\n" +
        "Final year B.Tech students present capstone projects to a panel of academics and industry professionals.\n\n" +
        "🔹 Key Rules:\n" +
        "• Open to final year B.Tech students from any college.\n" +
        "• Each team: 8 minutes presentation + 4 minutes Q&A.\n" +
        "• Slide deck must be submitted 24 hours before the event.\n" +
        "• Working prototypes are encouraged but not mandatory.\n" +
        "• Judged on novelty, execution, clarity, and impact.\n\n" +
        "📩 Coordinator: Prof. K. Mukherjee | presentations@auktave.in | +91 98300 00005"
      );

  form.addSectionHeaderItem()
      .setTitle("B.Tech Presentations — Project & Team Information");

  form.addTextItem().setTitle("[BTP] Project Title").setRequired(true);

  form.addListItem()
      .setTitle("[BTP] Project Domain")
      .setChoiceValues([
        "Artificial Intelligence / Machine Learning",
        "Internet of Things (IoT)",
        "Robotics & Automation",
        "Web / App Development",
        "Cybersecurity & Network Security",
        "Data Science & Analytics",
        "VLSI & Embedded Systems",
        "Healthcare Technology",
        "Renewable Energy & Sustainability",
        "Other"
      ])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle("[BTP] Project Abstract")
      .setHelpText("Briefly describe the problem, methodology, and outcome. 150 words max.")
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[BTP] Will you have a working prototype for demonstration?")
      .setChoiceValues([
        "Yes — fully functional prototype",
        "Yes — partial prototype / simulation",
        "No — presentation and slides only"
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[BTP] Has this project been submitted for your final year evaluation?")
      .setChoiceValues([
        "Yes — this is our official capstone project",
        "No — this is an independent project",
        "Yes — and it has been published / presented at a conference"
      ])
      .setRequired(true);

  // Leader
  form.addSectionHeaderItem().setTitle("B.Tech Presentations — Team Leader (Member 1)");
  form.addTextItem().setTitle("[BTP] Leader Full Name").setRequired(true);
  form.addTextItem().setTitle("[BTP] Leader Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[BTP] Leader Phone").setRequired(true);
  form.addTextItem().setTitle("[BTP] Leader College & Branch").setRequired(true);

  // Members 2–4
  [2, 3, 4].forEach(i => {
    form.addSectionHeaderItem().setTitle(`B.Tech Presentations — Team Member ${i} (if applicable)`);
    form.addTextItem().setTitle(`[BTP] Member ${i} Full Name`).setRequired(false);
    form.addTextItem().setTitle(`[BTP] Member ${i} Email`).setRequired(false);
    form.addTextItem().setTitle(`[BTP] Member ${i} Phone`).setRequired(false);
  });

  form.addCheckboxItem()
      .setTitle("[BTP] Declaration & Consent")
      .setChoiceValues([
        "All team members are currently enrolled final year B.Tech students.",
        "The project is original work and not plagiarised.",
        "We will submit our slide deck 24 hours before the event.",
        "We agree to the presentation rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 8 — IEEE SPECIAL SESSION
  // ══════════════════════════════════════════════════════════════════════════
  const ieeePage = form.addPageBreakItem()
      .setTitle("IEEE Special Session")
      .setHelpText(
        "⏱ Duration: 2 Hours  |  👤 Open to All  |  🏅 Certificates + IEEE SB AUK Perks\n" +
        "📍 Venue: Auditorium  |  📅 Day 2 – 10:00 AM to 11:00 AM\n\n" +
        "An exclusive IEEE SB AUK-curated session featuring keynotes, technical talks, and a research paper showcase. " +
        "A trust mark for AUKTAVE 2K26.\n\n" +
        "🔹 Key Information:\n" +
        "• Open seating — first come, first served.\n" +
        "• IEEE SB AUK members get priority registration and special swag.\n" +
        "• Recording in session is restricted unless stated.\n" +
        "• Q&A is strictly time-boxed and moderated.\n" +
        "• Attendance certificates issued post-session.\n\n" +
        "📩 Coordinator: IEEE SB AUK Chapter | ieee-sbauk@auktave.in | +91 98300 00006"
      );

  form.addSectionHeaderItem()
      .setTitle("IEEE Session — Attendee Information");

  form.addTextItem().setTitle("[IEEE] Full Name").setRequired(true);
  form.addTextItem().setTitle("[IEEE] Email").setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem().setTitle("[IEEE] Phone").setRequired(true);
  form.addTextItem().setTitle("[IEEE] College & Department").setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle("[IEEE] Are you an IEEE SB AUK Member?")
      .setHelpText("Members receive priority seating and exclusive swag.")
      .setChoiceValues([
        "Yes — I am a current IEEE SB AUK member",
        "Yes — I am an IEEE member (other chapter)",
        "No — I am not an IEEE member"
      ])
      .setRequired(true);

  form.addTextItem()
      .setTitle("[IEEE] IEEE Membership Number (if applicable)")
      .setHelpText("Leave blank if you are not an IEEE member.")
      .setRequired(false);

  form.addMultipleChoiceItem()
      .setTitle("[IEEE] Primary area of interest")
      .setHelpText("Helps us personalise your experience and networking at the session.")
      .setChoiceValues([
        "Artificial Intelligence & Machine Learning",
        "Signal Processing & Communications",
        "Power Systems & Energy",
        "Robotics & Control Systems",
        "Cybersecurity & Networks",
        "Data Science & Analytics",
        "Other / General Interest"
      ])
      .setRequired(true);

  form.addCheckboxItem()
      .setTitle("[IEEE] Declaration & Consent")
      .setChoiceValues([
        "I understand seating is first come, first served.",
        "I will not record the session unless explicitly permitted.",
        "I agree to follow the session rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // GLOBAL CLOSING SECTION
  // ══════════════════════════════════════════════════════════════════════════
  const closingPage = form.addPageBreakItem()
      .setTitle("Final Confirmation")
      .setHelpText("Almost done! Review and confirm before submitting.");

  form.addSectionHeaderItem()
      .setTitle("Additional Information");

  form.addTextItem()
      .setTitle("How did you hear about AUKTAVE 2026?")
      .setHelpText("E.g., Instagram, college notice board, friend, faculty, LinkedIn.")
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle("Any questions or special requirements?")
      .setHelpText(
        "If you have accessibility requirements, dietary restrictions, or other special needs, mention them here. " +
        "We will do our best to accommodate."
      )
      .setRequired(false);

  form.addCheckboxItem()
      .setTitle("Final Declaration")
      .setChoiceValues([
        "All information provided in this form is accurate and complete.",
        "I have read and understood the rules of the event I am registering for.",
        "I agree to the AUKTAVE 2026 Code of Conduct and accept that violations may lead to disqualification.",
        "I consent to AUKTAVE using my name and project for promotional purposes with proper credit."
      ])
      .setRequired(true);

  // ══════════════════════════════════════════════════════════════════════════
  // WIRE UP EVENT SELECTOR → SECTION NAVIGATION
  // ══════════════════════════════════════════════════════════════════════════
  eventSelector.setChoices([
    eventSelector.createChoice("24 Hour AI Hackathon",           hackathonPage),
    eventSelector.createChoice("Robotics Competition",           roboticsPage),
    eventSelector.createChoice("Research & Project Expo",        expoPage),
    eventSelector.createChoice("Tech Debate",                    debatePage),
    eventSelector.createChoice("AI Short Film Showcase",         filmPage),
    eventSelector.createChoice("B.Tech Final Year Presentations", btechPage),
    eventSelector.createChoice("IEEE Special Session",           ieeePage)
  ]);

  Logger.log("✅ AUKTAVE 2026 form built successfully: " + form.getEditUrl());
}
