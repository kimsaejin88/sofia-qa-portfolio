/*
 * Editable portfolio content. Cards share one renderer in app.js; update
 * project facts and copy here without changing their visual presentation.
 * Artwork is stored locally under assets/ and sourced from each project's
 * official Steam store page (sourcePage below).
 */
window.portfolioProjects = [
  {
    title: "Cash Cleaner Simulator",
    role: "QA Project Lead",
    period: "Aug 2025 – Aug 2026",
    platforms: ["PlayStation 5", "Xbox Series X|S", "PC · Windows GDK"],
    additionalExperience: "ASUS ROG Ally",
    projectType: "Multi-platform console porting, ongoing release support, patch and demo validation.",
    contribution: "Coordinated QA activities and testing priorities throughout the project, combining hands-on QA with team coordination. Supported build and patch validation, demo requirements, and platform compliance investigations. Also explored handheld-device workflows and requirements, including ASUS ROG Ally.",
    demonstrates: "QA ownership across a long-running multi-platform project, release support, team coordination, and platform compliance analysis.",
    image: "assets/cash-cleaner-simulator.jpg",
    imageAlt: "Official Cash Cleaner Simulator gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/2488370/Cash_Cleaner_Simulator/",
    accent: "#61d6e6",
    featured: true,
    caseStudy: null
  },
  {
    title: "The Spell Brigade",
    role: "QA Engineer",
    period: "Jan 2026 – May 2026",
    platforms: ["PlayStation 5"],
    projectType: "Console porting and localization compliance, with a focus on platform-specific health-warning requirements.",
    contribution: "Developed a repeatable method to identify required health-warning terminology in localized content and compare it against platform terminology lists. Reused this method on other projects.",
    demonstrates: "Localization compliance analysis, attention to platform-specific requirements, and turning a manual QA check into a reusable method.",
    image: "assets/the-spell-brigade.jpg",
    imageAlt: "Official The Spell Brigade gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/2904000/The_Spell_Brigade/",
    accent: "#ffcd55",
    featured: true,
    caseStudy: {
      title: "Reusable Localization Terminology Check",
      context: "The project required checking localized content against platform-specific terminology requirements.",
      challenge: "Identify and verify required health-warning terminology across localized content.",
      actions: "Developed a method for filtering relevant terminology and comparing it against platform terminology lists.",
      takeaway: "Created a repeatable checking approach that was subsequently reused on other projects."
    }
  },
  {
    title: "I Am Future: Cozy Apocalypse Survival",
    role: "QA Project Lead",
    period: "Feb 2025 – Aug 2025",
    platforms: ["PlayStation 5", "Xbox Series X|S", "Nintendo Switch"],
    projectType: "Multi-platform console porting and release support.",
    contribution: "Coordinated a three-person QA team, established testing workflows, delegated and prioritized tasks, and managed communication with the client and original development team. Combined project coordination with hands-on QA involvement.",
    demonstrates: "Practical QA leadership, task prioritization, workflow organization, and cross-team communication.",
    image: "assets/i-am-future.jpg",
    imageAlt: "Official I Am Future gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/1658040/I_Am_Future_Cozy_Apocalypse_Survival/",
    accent: "#83d891",
    featured: true,
    caseStudy: {
      title: "Establishing QA Team Workflows",
      context: "The project involved console porting across multiple platforms and required organized QA coordination.",
      challenge: "Establish a clear testing workflow and coordinate the work of a three-person QA team.",
      actions: "Organized testing workflows, delegated tasks, prioritized activities, and coordinated communication with the client and original development team.",
      takeaway: "Gained practical QA Project Lead experience, combining team coordination, communication, and hands-on testing."
    }
  },
  {
    title: "The Plucky Squire",
    role: "QA Engineer",
    period: "Jul 2024 – Feb 2025",
    platforms: ["PlayStation 5", "Xbox Series X|S", "Nintendo Switch"],
    projectType: "Multi-platform console porting, ongoing support, patches, and remastered release versioning.",
    contribution: "Supported console porting and release QA, worked with Nintendo Switch Lotcheck requirements, localization compliance, patch validation, and application versioning around the remastered release.",
    demonstrates: "Nintendo platform compliance, localization validation, and release-focused QA.",
    image: "assets/the-plucky-squire.jpg",
    imageAlt: "Official The Plucky Squire gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/1627570/The_Plucky_Squire/",
    accent: "#f3cb67",
    featured: false,
    caseStudy: null
  },
  {
    title: "Flock",
    role: "QA Engineer",
    period: "Feb 2024 – Jul 2024",
    platforms: ["PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Windows GDK"],
    projectType: "Cross-platform multiplayer porting and online functionality testing.",
    contribution: "Tested multiplayer networking, matchmaking, and connection/disconnection scenarios across platforms. Worked with patch versioning and documented a PlayStation 5 certification issue identified after the first submission.",
    demonstrates: "Multiplayer QA, online connectivity testing, cross-platform scenarios, and certification issue documentation.",
    image: "assets/flock.jpg",
    imageAlt: "Official Flock gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/1472930/Flock/",
    accent: "#ea85d7",
    featured: false,
    caseStudy: null
  },
  {
    title: "Little Nightmares",
    role: "QA Engineer",
    period: "Dec 2024 – Jul 2025",
    platforms: ["iOS", "Android"],
    projectType: "Mobile QA support and testing workflow setup.",
    contribution: "Worked as the project's sole tester and established a mobile QA workflow for unfamiliar platforms. Investigated device testing and debugging tools, then documented procedures and findings for future team use.",
    demonstrates: "Independent QA ownership, adaptability, tool investigation, and reusable documentation.",
    image: "assets/little-nightmares.jpg",
    imageAlt: "Official Little Nightmares gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/424840/Little_Nightmares/",
    accent: "#e2d47c",
    featured: false,
    caseStudy: null
  },
  {
    title: "Cartel Tycoon",
    role: "Junior QA Engineer",
    period: "Oct 2023 – Jan 2024",
    platforms: ["PlayStation 5", "Xbox Series X|S"],
    projectType: "Console porting and DLC testing.",
    contribution: "Supported console porting QA and DLC checks while learning platform-specific requirements. Documented testing procedures and organized project information and test workflows for the team.",
    demonstrates: "Foundation in console QA, platform-specific testing, DLC validation, and structured documentation.",
    image: "assets/cartel-tycoon.jpg",
    imageAlt: "Official Cartel Tycoon gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/1220140/Cartel_Tycoon/",
    accent: "#61d8c2",
    featured: false,
    caseStudy: null
  },
  {
    title: "Grind Survivors",
    role: "QA Engineer",
    period: "Nov 2024 – Jan 2025",
    platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
    projectType: "QA during active game development and multi-platform testing.",
    contribution: "Tested gameplay, stability, and performance while the game was evolving. Collaborated with game designers and updated QA documentation as features and requirements changed.",
    demonstrates: "Early-stage development QA, collaboration with game design, adaptability, and clear documentation.",
    image: "assets/grind-survivors.jpg",
    imageAlt: "Official Grind Survivors gameplay screenshot",
    sourcePage: "https://store.steampowered.com/app/3816930/Grind_Survivors/",
    accent: "#aa78ff",
    featured: false,
    caseStudy: null
  }
];
