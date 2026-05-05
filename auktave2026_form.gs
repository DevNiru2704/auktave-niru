function buildAUKTAVERegistrationForm() {
  const FORM_ID = "1XXswD_sk6R_H3viKQF5wvOoF_NgDiNkdPD-suKrRnBg";
  const form = FormApp.openById(FORM_ID);

  // Clear existing items
  form.getItems().forEach(item => form.deleteItem(item));

  // Form metadata
  form.setTitle("AUKTAVE 2026")
      .setDescription(
        "Welcome to AUKTAVE 2026, Amity University Kolkata's flagship technical fest.\n\n" +
        "This form registers you for one event across two days of innovation, debate, robotics, AI filmmaking, research showcases, and the 24-hour AI Hackathon.\n\n" +
        "Before you fill this form:\n" +
        "- Read the rules for your selected event on the official website.\n" +
        "- Ensure all team members are available for the event duration.\n" +
        "- Use your official college email IDs wherever asked.\n" +
        "- One submission per team. The team leader submits on behalf of the whole team.\n\n" +
        "Providing false or incomplete information may result in disqualification.\n" +
        "Submitting this form implies acceptance of all event rules and the AUKTAVE Code of Conduct.\n\n" +
        "For queries: info.auktave@gmail.com | Website: www.auktave.in"
      )
      .setCollectEmail(true)
      .setAllowResponseEdits(false)
      .setLimitOneResponsePerUser(false)
      .setShuffleQuestions(false);

  const addText = (title, required, helpText) => {
    const item = form.addTextItem().setTitle(title).setRequired(required);
    if (helpText) item.setHelpText(helpText);
    return item;
  };

  const addEmail = (title, required) => {
    return form.addTextItem()
      .setTitle(title)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().build())
      .setRequired(required);
  };

  const addPhone = (title, required) => {
    return form.addTextItem()
      .setTitle(title)
      .setValidation(FormApp.createTextValidation().requireTextMatchesPattern("^[+]?[0-9]{10,13}$").build())
      .setRequired(required);
  };

  const addMemberSection = (title, required, helpText) => {
    const header = form.addSectionHeaderItem().setTitle(title);
    if (helpText) header.setHelpText(helpText);
    addText("Full name", required);
    addEmail("Email", required);
    addPhone("Phone", required);
    addText("College and department", required);
  };

  // Section 1: Personal details
  form.addSectionHeaderItem()
      .setTitle("Section 1: Personal details")
      .setHelpText(
        "Fill in your own details as the primary registrant or team leader. " +
        "These details will be used for communication, certificates, and prizes."
      );

  addText("Full name", true, "As it should appear on your certificate.");
  addEmail("Email address", true);
  addPhone("Phone number", true);
  addText("College or university name", true);
  addText("Department or branch", true);
  form.addMultipleChoiceItem()
      .setTitle("Current year of study")
      .setChoiceValues([
        "1st Year",
        "2nd Year",
        "3rd Year",
        "4th Year",
        "Postgraduate (1st Year)",
        "Postgraduate (2nd Year)",
        "PhD or Research Scholar"
      ])
      .setRequired(true);
  addText("College or university city", true);
  form.addMultipleChoiceItem()
      .setTitle("Are you an outstation participant?")
      .setChoiceValues([
        "Yes - I need accommodation assistance",
        "No - I am local or have my own arrangements"
      ])
      .setRequired(true);
  addText("Student ID or roll number", true, "Bring your college ID card on the day.");

  // Section 2: Event selection
  form.addPageBreakItem()
      .setTitle("Section 2: Event selection")
      .setHelpText(
        "Choose the event you are registering for. Each event has its own dedicated section below.\n\n" +
        "If you want to participate in multiple events, submit a separate form for each event."
      );

  const eventSelector = form.addMultipleChoiceItem()
      .setTitle("Which event are you registering for?")
      .setHelpText("Select one event. Your answer will navigate you to the correct section.")
      .setRequired(true);

  // 24 Hour AI Hackathon
  const hackathonPage = form.addPageBreakItem()
      .setTitle("24 Hour AI Hackathon")
      .setHelpText(
        "Duration: 24 Hours | Team Size: 2-5 Members | Prize Pool: Rs. 50,000+\n" +
        "Venue: Incubation Center | Day 1 - 11:00 AM onwards\n\n" +
        "A 24-hour in-campus AI hackathon where teams build impactful solutions using AI. The event is track-based.\n\n" +
        "Key rules summary:\n" +
        "- Open to students from all colleges and universities with valid college ID.\n" +
        "- Teams of 2-5; each team must designate a Team Leader. Team cannot change after registration.\n" +
        "- Registration is valid only after all team members register before the deadline. No late registrations.\n" +
        "- Opening briefing, development phase, mid-evaluation checkpoint(s), and final judging.\n" +
        "- All work must be built during the hackathon. No pre-built projects or prior codebases.\n" +
        "- Open-source libraries are allowed with proper credit.\n" +
        "- Maintain a GitHub repo with no commits before the official start time.\n" +
        "- AI tools are allowed, but core logic must be original and explainable.\n" +
        "- Submission: working prototype, source code (GitHub preferred), README, and demo or presentation.\n" +
        "- Judging: innovation, functionality, technical implementation, UX, impact, presentation.\n" +
        "- Track-wise evaluation with a winner in each track.\n" +
        "- All team members must be present for final presentation and Q and A.\n" +
        "- Registration fee: Rs. 500 per team.\n" +
        "- Participants must stay at the venue for the full duration.\n\n" +
        "FAQ highlights:\n" +
        "- Track changes are allowed even on event day.\n" +
        "- Internet, power, and food are provided throughout the event.\n" +
        "- Certificates for all registered team members.\n" +
        "- No refunds for cancellations or no-shows unless decided by the organizers.\n" +
        "- Mentors and support will be available.\n\n" +
        "Coordinator: Aritra Sen | hackathon@auktave.in | +91 98300 00000"
      );

  form.addSectionHeaderItem().setTitle("Team information");
  addText("Team name", true, "Choose a unique team name. This will appear on event materials.");
  form.addListItem()
      .setTitle("Select track")
      .setHelpText(
        "AI for Healthcare, AI for Education, AI for Sustainability, AI for FinTech, Open Innovation in AI."
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
      .setTitle("Brief project idea (optional)")
      .setHelpText("100 words max. This is not binding.")
      .setRequired(false);

  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", true, "Required. Minimum team size is 2.");
  addMemberSection("Team member 3", false, "Optional");
  addMemberSection("Team member 4", false, "Optional");
  addMemberSection("Team member 5", false, "Optional");

  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "All team members are currently enrolled students and possess valid college IDs.",
        "Team composition will not change after registration.",
        "All work will be original and completed within the 24-hour window.",
        "We will maintain a GitHub repository with no commits before the official start time.",
        "We agree to the hackathon rules and AUKTAVE Code of Conduct.",
        "We understand that plagiarism or use of pre-built code leads to immediate disqualification.",
        "We understand the registration fee is Rs. 500 per team and is non-refundable unless decided by organizers.",
        "All team members will remain at the venue for the full duration of the hackathon."
      ])
      .setRequired(true);

  // Robotics Competition - selection page
  const roboticsPage = form.addPageBreakItem()
      .setTitle("Robotics Competition")
      .setHelpText(
        "Duration: 2.5 Hours | Team Size: 2-4 Members | Prize Pool: Rs. 40,000\n" +
        "Venue: Atrium | Day 2 - 11:00 AM to 1:30 PM\n\n" +
        "Choose one robotics sub-event: Robo Soccer, Maze Solver, or Drone Obstacle Course."
      );

  form.addSectionHeaderItem().setTitle("Select robotics sub-event");
  const roboticsSubeventSelector = form.addMultipleChoiceItem()
      .setTitle("Which sub-event are you registering for?")
      .setRequired(true);

  // Robotics sub-event sections
  const roboSoccerPage = form.addPageBreakItem()
      .setTitle("Robo Soccer")
      .setHelpText("Timed goals, tight control, zero tolerance for faults.");

  form.addSectionHeaderItem().setTitle("Team and bot details");
  addText("Team name", true);
  addText("Bot name", true);
  form.addMultipleChoiceItem()
      .setTitle("Primary control method")
      .setChoiceValues(["Bluetooth", "RF (Radio Frequency)"])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Will you be bringing a pre-built bot?")
      .setChoiceValues([
        "Yes - we will bring our own robot",
        "No - we plan to build at the hardware bay"
      ])
      .setRequired(true);
  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", true, "Required. Minimum team size is 2.");
  addMemberSection("Team member 3", false, "Optional");
  addMemberSection("Team member 4", false, "Optional");
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "Our bot complies with the 30 x 30 x 30 cm and under 3 kg specifications.",
        "We will use only Bluetooth or RF for wireless control. No tethered power.",
        "We agree to the Robotics Competition rules and AUKTAVE Code of Conduct.",
        "We understand that damaging the arena leads to disqualification."
      ])
      .setRequired(true);

  const mazeSolverPage = form.addPageBreakItem()
      .setTitle("Maze Solver")
      .setHelpText("Explore, learn, then sprint the shortest path.");

  form.addSectionHeaderItem().setTitle("Team and bot details");
  addText("Team name", true);
  addText("Bot name", true);
  form.addMultipleChoiceItem()
      .setTitle("Autonomous mode confirmation")
      .setChoiceValues([
        "Yes - the bot is fully autonomous",
        "No - the bot requires manual control"
      ])
      .setRequired(true);
  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", true, "Required. Minimum team size is 2.");
  addMemberSection("Team member 3", false, "Optional");
  addMemberSection("Team member 4", false, "Optional");
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "The robot is fully autonomous and complies with all size and voltage limits.",
        "We understand that camera-based vision and wireless communication are not allowed.",
        "We agree to the Maze Solver rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  const dronePage = form.addPageBreakItem()
      .setTitle("Drone Obstacle Course")
      .setHelpText(
        "Duration: 2 Hours | Team Size: 1-3 Members | Prize Pool: Rs. 10,000\n" +
        "Venue: Atrium | Day 2 - 11:00 AM to 1:30 PM\n\n" +
        "Registration fee: Rs. 400 per participant or team.\n" +
        "Required documents: photocopy of valid Government ID and photocopy of valid College or University or Work ID.\n" +
        "Enrollment letter (hard copy) is required at the entry gate.\n\n" +
        "Reporting time: at least 30 minutes before the start time. Late arrivals are not permitted."
      );

  form.addSectionHeaderItem().setTitle("Team and drone details");
  addText("Team name", true);
  addText("Drone name or model", true);
  form.addMultipleChoiceItem()
      .setTitle("Flight mode")
      .setChoiceValues(["FPV", "Line of sight"])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Have you read the checkpoint and restart rules?")
      .setChoiceValues(["Yes", "No"])
      .setRequired(true);
  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", false, "Optional");
  addMemberSection("Team member 3", false, "Optional");
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "We will bring photocopies of valid Government ID and College or University or Work ID.",
        "We will carry the enrollment letter as a hard copy for entry.",
        "We will report at least 30 minutes before the start time.",
        "We understand that missing obstacles or leaving the track requires a restart from the last checkpoint.",
        "We understand the 2 minute repair window applies only once per participant.",
        "We agree to the Drone Obstacle Course rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // Research and Project Expo
  const expoPage = form.addPageBreakItem()
      .setTitle("Research and Project Expo")
      .setHelpText(
        "Duration: 2 Hours | Team Size: 1-5 Members | Prize Pool: Rs. 25,000\n" +
        "Venue: Audi Lobby | Day 1 - 2:00 PM to 4:00 PM and Day 2 - 1:30 PM onwards\n\n" +
        "Showcase your research, capstone, or prototype to industry mentors and investors."
      );

  form.addSectionHeaderItem().setTitle("Project information");
  addText("Project title", true);
  form.addListItem()
      .setTitle("Project domain or category")
      .setChoiceValues([
        "Artificial Intelligence or Machine Learning",
        "Internet of Things (IoT)",
        "Robotics and Automation",
        "Web or App Development",
        "Cybersecurity",
        "Sustainability and Green Tech",
        "Healthcare Technology",
        "FinTech and Blockchain",
        "Data Science and Analytics",
        "Other"
      ])
      .setRequired(true);
  form.addParagraphTextItem()
      .setTitle("Project abstract")
      .setHelpText("Describe your project in 150 words or less.")
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Will you have a live demo?")
      .setChoiceValues([
        "Yes - fully functional live demo",
        "Yes - partial demo or proof of concept",
        "No - poster and presentation only"
      ])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Is this a research paper, capstone project, or prototype?")
      .setChoiceValues([
        "Published or under-review research paper",
        "Capstone or final year project",
        "Independent prototype or startup idea",
        "Other academic project"
      ])
      .setRequired(true);

  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", false, "Optional");
  addMemberSection("Team member 3", false, "Optional");
  addMemberSection("Team member 4", false, "Optional");
  addMemberSection("Team member 5", false, "Optional");

  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "The project is original and not plagiarised.",
        "Live demos will be functional and not mere simulations.",
        "We agree to the Expo rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // AUKTAVE Tech Debate
  const debatePage = form.addPageBreakItem()
      .setTitle("AUKTAVE Tech Debate")
      .setHelpText(
        "Duration: 1 Hour | Solo Participation | Prize Pool: Hoodies, Swag Kits, Certificates\n" +
        "Venue: Audi Seminar Hall | Day 1 - 4:00 PM to 5:00 PM\n\n" +
        "A knockout-style, technology-focused debate tournament with strict timekeeping."
      );

  form.addSectionHeaderItem().setTitle("Participant details");
  addText("Full name", true);
  addEmail("Email", true);
  addPhone("Phone", true);
  addText("College and department", true);
  form.addMultipleChoiceItem()
      .setTitle("Preferred side")
      .setHelpText("This is a preference - final assignment is at the organiser's discretion.")
      .setChoiceValues(["For (Proposition)", "Against (Opposition)", "No preference or open to either"])
      .setRequired(true);
  form.addParagraphTextItem()
      .setTitle("Topics of interest (optional)")
      .setHelpText("Name up to 3 tech topics you are confident debating.")
      .setRequired(false);
  form.addMultipleChoiceItem()
      .setTitle("Have you participated in a formal debate before?")
      .setChoiceValues([
        "Yes - college or inter-college level",
        "Yes - school level",
        "No - this is my first time"
      ])
      .setRequired(true);
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "I am a currently enrolled student with a valid college ID.",
        "I will participate without personal attacks or misconduct.",
        "I agree to the Tech Debate rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // AI Short Film Showcase
  const filmPage = form.addPageBreakItem()
      .setTitle("AI Short Film Showcase")
      .setHelpText(
        "Duration: 1 Hour (Screening) | Team Size: 1-3 Members | Prize Pool: Rs. 10,000\n" +
        "Venue: Auditorium | Finale Screening: May 22, 2026\n\n" +
        "Create a 1-3 minute short film where AI assists the visual, audio, or narrative process."
      );

  form.addSectionHeaderItem().setTitle("Team and film information");
  addText("Team or director name", true, "For solo entries, use your own name.");
  addText("Film title", true, "Working title is acceptable.");
  form.addListItem()
      .setTitle("Select theme pillar")
      .setChoiceValues([
        "The Unfiltered Lens: Freedom of Speech and Expression",
        "Echoes of the Past: Literature and History Come Alive",
        "The Domino Effect: Small Problems, Big Impact",
        "Beyond the Horizon: The Sci-Fi Frontier",
        "The Rising Voice: Youth as the Catalyst for Change"
      ])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Approximate film duration")
      .setChoiceValues([
        "Under 1 minute",
        "1-2 minutes",
        "2-3 minutes"
      ])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Submission format")
      .setChoiceValues(["MP4", "MOV"])
      .setRequired(true);
  form.addParagraphTextItem()
      .setTitle("AI tools you plan to use")
      .setHelpText("List all AI tools you intend to use. A one-page AI tech stack PDF is required later.")
      .setRequired(true);
  form.addParagraphTextItem()
      .setTitle("Short film synopsis")
      .setHelpText("Describe your film concept in 100 words or less.")
      .setRequired(true);
  addMemberSection("Team member 1", true, "Team leader or director");
  addMemberSection("Team member 2", false, "Optional");
  addMemberSection("Team member 3", false, "Optional");
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "Our film will be 1-3 minutes including credits, in MP4 or MOV at 1080p minimum.",
        "We will submit a one-page AI Tech Stack PDF listing all tools used.",
        "All content is original and does not contain defamatory or hate content.",
        "Human-led editing and pacing will be applied.",
        "We agree to the AI Short Film rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // B.Tech Final Year Presentations
  const btechPage = form.addPageBreakItem()
      .setTitle("B.Tech Final Year Presentations")
      .setHelpText(
        "Duration: 1.5 Hours | Team Size: 1-4 Members | Prize Pool: Rs. 30,000\n" +
        "Venue: Audi Lobby | Day 2 - 1:30 PM to 3:00 PM\n\n" +
        "Final year B.Tech students present capstone projects to a panel of academics and industry professionals."
      );

  form.addSectionHeaderItem().setTitle("Project information");
  addText("Project title", true);
  form.addListItem()
      .setTitle("Project domain")
      .setChoiceValues([
        "Artificial Intelligence or Machine Learning",
        "Internet of Things (IoT)",
        "Robotics and Automation",
        "Web or App Development",
        "Cybersecurity and Network Security",
        "Data Science and Analytics",
        "VLSI and Embedded Systems",
        "Healthcare Technology",
        "Renewable Energy and Sustainability",
        "Other"
      ])
      .setRequired(true);
  form.addParagraphTextItem()
      .setTitle("Project abstract")
      .setHelpText("Briefly describe the problem, methodology, and outcome. 150 words max.")
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Will you have a working prototype for demonstration?")
      .setChoiceValues([
        "Yes - fully functional prototype",
        "Yes - partial prototype or simulation",
        "No - presentation and slides only"
      ])
      .setRequired(true);
  form.addMultipleChoiceItem()
      .setTitle("Has this project been submitted for your final year evaluation?")
      .setChoiceValues([
        "Yes - this is our official capstone project",
        "No - this is an independent project",
        "Yes - and it has been published or presented at a conference"
      ])
      .setRequired(true);
  addMemberSection("Team member 1", true, "Team leader");
  addMemberSection("Team member 2", false, "Optional");
  addMemberSection("Team member 3", false, "Optional");
  addMemberSection("Team member 4", false, "Optional");
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "All team members are currently enrolled final year B.Tech students.",
        "The project is original work and not plagiarised.",
        "We will submit our slide deck 24 hours before the event.",
        "We agree to the presentation rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // IEEE Special Session
  const ieeePage = form.addPageBreakItem()
      .setTitle("IEEE Special Session")
      .setHelpText(
        "Duration: 1 Hour | Open to All | Certificates and IEEE SB AUK perks\n" +
        "Venue: Auditorium | Day 2 - 10:00 AM to 11:00 AM\n\n" +
        "Keynotes, technical talks, and a research paper showcase."
      );

  form.addSectionHeaderItem().setTitle("Attendee information");
  addText("Full name", true);
  addEmail("Email", true);
  addPhone("Phone", true);
  addText("College and department", true);
  form.addMultipleChoiceItem()
      .setTitle("Are you an IEEE SB AUK member?")
      .setHelpText("Members receive priority seating and exclusive swag.")
      .setChoiceValues([
        "Yes - I am a current IEEE SB AUK member",
        "Yes - I am an IEEE member (other chapter)",
        "No - I am not an IEEE member"
      ])
      .setRequired(true);
  addText("IEEE membership number (if applicable)", false);
  form.addMultipleChoiceItem()
      .setTitle("Primary area of interest")
      .setChoiceValues([
        "Artificial Intelligence and Machine Learning",
        "Signal Processing and Communications",
        "Power Systems and Energy",
        "Robotics and Control Systems",
        "Cybersecurity and Networks",
        "Data Science and Analytics",
        "Other or General Interest"
      ])
      .setRequired(true);
  form.addCheckboxItem()
      .setTitle("Declaration and consent")
      .setChoiceValues([
        "I understand seating is first come, first served.",
        "I will not record the session unless explicitly permitted.",
        "I agree to follow the session rules and AUKTAVE Code of Conduct."
      ])
      .setRequired(true);

  // Closing section
  const closingPage = form.addPageBreakItem()
      .setTitle("Final confirmation")
      .setHelpText("Almost done. Review and confirm before submitting.");

  form.addSectionHeaderItem().setTitle("Additional information");
  addText("How did you hear about AUKTAVE 2026?", false, "Examples: Instagram, notice board, friend, faculty.");
  form.addParagraphTextItem()
      .setTitle("Any questions or special requirements?")
      .setHelpText("Mention accessibility requirements, dietary restrictions, or other needs.")
      .setRequired(false);
  form.addCheckboxItem()
      .setTitle("Final declaration")
      .setChoiceValues([
        "All information provided in this form is accurate and complete.",
        "I have read and understood the rules of the event I am registering for.",
        "I agree to the AUKTAVE 2026 Code of Conduct and accept that violations may lead to disqualification.",
        "I consent to AUKTAVE using my name and project for promotional purposes with proper credit."
      ])
      .setRequired(true);

  // Wire up event selector
  eventSelector.setChoices([
    eventSelector.createChoice("24 Hour AI Hackathon", hackathonPage),
    eventSelector.createChoice("Robotics Competition", roboticsPage),
    eventSelector.createChoice("Research and Project Expo", expoPage),
    eventSelector.createChoice("AUKTAVE Tech Debate", debatePage),
    eventSelector.createChoice("AI Short Film Showcase", filmPage),
    eventSelector.createChoice("B.Tech Final Year Presentations", btechPage),
    eventSelector.createChoice("IEEE Special Session", ieeePage)
  ]);

  // Wire up robotics sub-event selector
  roboticsSubeventSelector.setChoices([
    roboticsSubeventSelector.createChoice("Robo Soccer", roboSoccerPage),
    roboticsSubeventSelector.createChoice("Maze Solver", mazeSolverPage),
    roboticsSubeventSelector.createChoice("Drone Obstacle Course", dronePage)
  ]);

  // Route to closing page after each event section
  hackathonPage.setGoToPage(closingPage);
  roboSoccerPage.setGoToPage(closingPage);
  mazeSolverPage.setGoToPage(closingPage);
  dronePage.setGoToPage(closingPage);
  expoPage.setGoToPage(closingPage);
  debatePage.setGoToPage(closingPage);
  filmPage.setGoToPage(closingPage);
  btechPage.setGoToPage(closingPage);
  ieeePage.setGoToPage(closingPage);

  Logger.log("AUKTAVE 2026 form built successfully: " + form.getEditUrl());
}
