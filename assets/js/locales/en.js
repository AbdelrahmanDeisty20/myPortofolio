/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * English Localization Dictionary (en)
 */

window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
  // Brand & Header
  brand: {
    name: "Abdelrahman El-Deisty",
    role: "Software Engineer & Backend Developer",
    portalTitle: "Portfolio CMS",
    portalSubtitle: "Content Management Command Center"
  },

  // Navigation
  nav: {
    projects: "Work",
    articles: "Notes",
    work: "Work",
    skills: "Skills",
    experience: "Experience",
    services: "Services",
    about: "About",
    notes: "Notes",
    resume: "Resume",
    contact: "Contact",
    search: "Search",
    dashboard: "Dashboard",
    signIn: "Sign In",
    signOut: "Sign Out",
    backHome: "Back to Homepage",
    backProjects: "Back to all projects",
    backNotes: "Back to all notes",
    publicSite: "Public Site"
  },

  // Common UI & Actions
  common: {
    filterAll: "All Projects",
    swipeHint: "Swipe horizontally to explore cards →",
    searchPlaceholder: "Search tech, name, problem...",
    filter: "Filter",
    viewWork: "View Selected Work",
    exploreProjects: "Explore All Projects & Case Studies",
    caseStudy: "Case Study",
    viewCaseStudy: "View Case Study",
    liveDemo: "Live Demo",
    github: "GitHub",
    privateProject: "Private Project",
    privateCode: "Private Code",
    all: "All",
    allProjects: "All Projects",
    allCategories: "All Categories",
    allStatuses: "All Statuses",
    showingProjects: "Showing {count} production project{s}",
    showingAll: "Showing all projects",
    readArticle: "Read Article",
    allArticles: "All Articles",
    printCv: "Print CV",
    downloadPdf: "Download PDF",
    startConversation: "Start a Conversation",
    contactMe: "Contact Me",
    sendMessage: "Send Message",
    discussArticle: "Discuss this Article with Abdelrahman",
    inspect: "Inspect",
    filterPlaceholder: "Search tech, name, problem...",
    noResults: "No matching items found",
    close: "Close",
    save: "Save Changes",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    copy: "Copy",
    duplicate: "Duplicate",
    preview: "Preview",
    featured: "Featured",
    live: "Live",
    inDev: "In Development",
    archived: "Archived",
    quickNav: "Quick Navigation",
    shortcutEsc: "ESC",
    shortcutCtrlK: "Ctrl K",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    themeSystem: "System Theme"
  },

  
  // Projects Page
  projects: {
    badge: "Case Studies & Production Code",
    title: "Selected Projects",
    desc: "Production systems architected for real clients, SaaS startups, and high-volume business workflows. Explore technical architecture, database schemas, and implementation responsibilities.",
    statusLive: "Live",
    statusDev: "In Development",
    showing: "Showing {count} production projects",
    showingAll: "Showing all projects",
    none: "No matching projects found",
    noneDesc: "Try loosening your search terms or clearing active filters.",
    reset: "Reset Filters",
    clickCardHint: "Click any card to read full technical case study"
  },

  // Experience Page
  experience: {
    badge: "Career Journey",
    title: "Work & Production Experience",
    desc: "Concrete engineering roles, real responsibilities, and delivered systems.",
    responsibilities: "Key Responsibilities & Deliverables:",
    noRecords: "No experience entries recorded."
  },

  // Hero Section
  hero: {
    availability: "Available for Remote Work & Projects",
    title: "Abdelrahman El-Deisty",
    subtitle: "Software Engineer & Backend Developer",
    tagline: "Software Engineer & Backend Developer building production-ready Laravel applications, high-throughput REST APIs, and Hostinger (hPanel) deployments.",
    terminalTitle: "eldeisty@production-server:~",
    ctaPrimary: "View Selected Work",
    ctaContact: "Contact Me",
    ctaResume: "Resume",
    ctaGithub: "GitHub"
  },

  // Proof Section
  proof: {
    sectionLabel: "High-Value Facts",
    stat1Value: "2+ Years",
    stat1Label: "Software & Backend",
    stat1Detail: "Production Laravel & Hostinger systems",
    stat2Value: "10+",
    stat2Label: "Projects Shipped & Maintained",
    stat2Detail: "SaaS, APIs & Business Dashboards",
    stat3Value: "Laravel",
    stat3Label: "Core Backend Stack",
    stat3Detail: "REST APIs, Sanctum, Queues & MySQL",
    stat4Value: "100%",
    stat4Label: "Production Focused",
    stat4Detail: "Clean architecture & data integrity"
  },

  // Sections Headings
  sections: {
    featuredLabel: "Engineering Portfolio",
    featuredTitle: "Selected Production Work",
    featuredDesc: "Real-world systems, SaaS backends, and logistics dispatchers architected for reliability, concurrency, and scale.",
    skillsLabel: "Technical Competencies",
    skillsTitle: "Core Technical Stack",
    skillsDesc: "Technologies I use to build scalable systems. Categorized by honest production proficiency.",
    codeLabel: "Code Architecture",
    codeTitle: "Behind the Code",
    codeDesc: "Clean, production-focused patterns: pessimistic row locking, deterministic state machines, and spatial queries.",
    philosophyLabel: "Engineering Methodology",
    philosophyTitle: "How I Build Systems",
    philosophyDesc: "Systems engineering that prioritizes business workflows, data integrity, and maintainability.",
    notesLabel: "Knowledge Sharing",
    notesTitle: "Engineering Notes",
    notesDesc: "Practical architecture notes on Laravel, database query optimization, and resilient API design.",
    ctaTitle: "Building a Laravel backend, SaaS, or API platform?",
    ctaDesc: "Let's discuss your system architecture, data models, and business logic requirements."
  },

  // Philosophy Steps
  philosophy: {
    step1Title: "Understand Business Workflows",
    step1Desc: "Analyze domain rules, actor permissions, transaction boundaries, and operational bottlenecks before writing code.",
    step2Title: "Design Normalized Relational Models",
    step2Desc: "Craft 3NF database schemas, enforce foreign key integrity, and establish compound indexes on high-frequency query paths.",
    step3Title: "Architect Decoupled Domain Services",
    step3Desc: "Keep controllers thin. Encapsulate business logic in isolated, single-responsibility services and transactional pipelines.",
    step4Title: "Build Secure, Versioned REST APIs",
    step4Desc: "Strict Form Request validation, Sanctum token ability scopes, consistent API Resources, and rate limiting.",
    step5Title: "Handle Edge Cases & Concurrency",
    step5Desc: "Employ database locking, idempotent webhook handling, and deterministic state machine transitions to eliminate race conditions.",
    step6Title: "Optimize Database & Caching",
    step6Desc: "Inspect EXPLAIN plans, eliminate N+1 queries with eager loading, and leverage Redis for rate limits and taxonomy caching."
  },

  // Case Study Page
  caseStudy: {
    backToProjects: "Back to all projects",
    role: "Role",
    timeline: "Timeline",
    primaryStack: "Primary Stack",
    directLinks: "Direct Links",
    clientNda: "Client NDA",
    overview: "Overview",
    problem: "The Business Problem",
    solution: "The Engineering Solution",
    responsibilities: "My Personal Responsibilities",
    responsibilitiesIntro: "To maintain full transparency, here is exactly what I architected and implemented personally on this system:",
    architecture: "Technical Architecture",
    architectureDesc: "The data flow pipeline and architectural tiers implemented for this project:",
    database: "Selected Database Relationships",
    databaseDesc: "High-level schema structure demonstrating relational boundaries and index design:",
    challenges: "Technical Challenges Overcome",
    challengeLabel: "Challenge",
    solutionLabel: "Resolution",
    results: "Operational Outcomes",
    techUsed: "Technologies Used",
    confidentialityTitle: "Confidentiality Notice",
    confidentialityNotice: "Source code is private due to client commercial agreement. Architecture overview and case study details are provided for technical evaluation.",
    similarTitle: "Building something similar?",
    similarDesc: "Need a resilient Laravel backend, high-volume API dispatcher, or customized management dashboard?",
    talkArchitecture: "Let's Talk Architecture",
    exploreOther: "Explore Other Work",
    notFoundTitle: "Project Case Study Not Found",
    notFoundDesc: "The requested project record is not published or has been moved."
  },

  // About Page
  about: {
    pageLabel: "Engineering Profile",
    pageTitle: "A Software Engineer's Product Lab",
    pageDesc: "Building systems around real business workflows — not just passing tests locally, but handling edge cases, concurrency, and real-world scale.",
    whoTitle: "Who I Am",
    enjoyTitle: "What I Enjoy Building",
    saasItem: "Multi-tenant SaaS Engines: Partitioned databases, subscription billing synchronization, and transactional isolation.",
    logisticsItem: "Logistics & Dispatch APIs: Geospatial radius driver matching, state machine order lifecycles, and push alert triggers.",
    dashboardsItem: "Internal Dashboards: High-utility control panels enabling teams to manage orders, inventory, and audit histories.",
    webhooksItem: "Resilient Webhook Handlers: Idempotent processing pipelines with cryptographic signature verification and queue retries.",
    quickFacts: "Quick Facts",
    location: "Location",
    locationVal: "Cairo, Egypt / Remote Worldwide",
    mindset: "Engineering Mindset",
    mindsetVal: "Product-oriented, defensive programming, clean architecture",
    lookingTitle: "Looking for an Engineer?",
    lookingDesc: "Whether you need to architect a new SaaS backend, optimize sluggish database queries, or build custom REST endpoints.",
    eightPrinciples: "How I Build: 8 Core Principles",
    eightPrinciplesDesc: "A structured engineering methodology from concept to production maintenance."
  },

  // Experience Page
  experience: {
    pageLabel: "Career Journey",
    pageTitle: "Work & Production Experience",
    pageDesc: "Concrete engineering roles, real responsibilities, and delivered projects. Editable anytime from the private dashboard.",
    keyDeliverables: "Key Responsibilities & Deliverables:"
  },

  // Skills Page
  skills: {
    pageLabel: "Technical Stack & Competencies",
    pageTitle: "Production Skills & Tools",
    pageDesc: "Honest, production-grounded proficiency levels. Click on any technology to inspect related projects and real-world implementation details.",
    proficiencyLevel: "Proficiency Level",
    productionExp: "Production Experience",
    builtWith: "Projects Built With",
    internalUse: "Used across internal tooling and foundation modules."
  },

  // Services Page
  services: {
    pageLabel: "Engineering Capabilities",
    pageTitle: "What I Can Build For You",
    pageDesc: "I build systems around real business workflows. Here are the core backend domains I specialize in for founders, engineering teams, and growing companies.",
    whatItSolves: "What It Solves:",
    deliverables: "Key Deliverables:",
    requestQuote: "Request Quote"
  },

  // Articles Page
  articles: {
    pageLabel: "Engineering Notes",
    pageTitle: "Articles & System Design Insights",
    pageDesc: "Documenting solutions to real backend problems: race condition prevention, spatial MySQL indexing, and clean service-layer design.",
    discuss: "Discuss this Article with Abdelrahman"
  },

  // Resume Page
    resume: {
    syncNotice: "Official Curriculum Vitae (2-Page Backend Engineering Profile)",
    printCv: "Print CV",
    downloadPdf: "Download PDF",
    viewPdf: "Open PDF",
    page1: "Page 1 / 2",
    page2: "Page 2 / 2",
    viewFull: "Full Resolution",
    scrollHint: "← Scroll horizontally or use buttons to navigate both pages →"
  },

  // Contact Page
  contact: {
    pageLabel: "Start a Conversation",
    pageTitle: "Let's Discuss Your System",
    pageDesc: "Available for contract opportunities, SaaS platform builds, API architectures, and backend consulting.",
    directComm: "Direct Communication",
    directCommDesc: "Whether you have a specific RFP ready or want to bounce system architecture ideas around, feel free to reach out directly.",
    directEmail: "Direct Email",
    responseTime: "Response Time",
    responseNote: "I typically respond to project inquiries within 24 business hours.",
    yourName: "Your Name *",
    namePlaceholder: "e.g. Tarek Mansour",
    emailAddr: "Email Address *",
    emailPlaceholder: "e.g. tarek@company.com",
    company: "Company / Organization",
    companyPlaceholder: "e.g. NovaTech Solutions",
    projectType: "Project Type",
    saasOpt: "SaaS Platform Architecture",
    backendOpt: "Laravel Backend / API",
    dashboardOpt: "Custom Management Dashboard",
    dbOpt: "Database Tuning & Scalability",
    contractOpt: "Contract / Full-Time Engineering",
    otherOpt: "Other Collaboration",
    budgetRange: "Estimated Budget Range (Optional)",
    budgetSelect: "Select budget range (optional)",
    overviewLabel: "Project Overview & Objectives *",
    overviewPlaceholder: "Tell me about what you are building, timeline expectations, and core technical requirements...",
    sendButton: "Send via WhatsApp",
    sendingButton: "Opening WhatsApp...",
    successTitle: "Inquiry Prepared for WhatsApp!",
    successDesc: "Your project details are prepared and WhatsApp is opening now. You can also click below to chat directly with Abdelrahman.",
    openWhatsappDirect: "Open WhatsApp Chat",
    sendAnother: "Send Another Inquiry"
  },

  // Search & 404
  searchPage: {
    pageLabel: "Omni Index",
    pageTitle: "Search Everything",
    pageDesc: "Instant full-text query matching across production projects, case studies, technical articles, and skills.",
    placeholder: "Search by technology (e.g. Laravel, MySQL), project name, or topic...",
    popularQueries: "Popular queries:",
    resultsCount: "Found {count} result{s} for \"{query}\"",
    noResultsTitle: "No records matched \"{query}\"",
    noResultsDesc: "Try searching for a core competency such as PHP, MySQL, Redis, or Bynona."
  },
  notFound: {
    badge: "HTTP 404 NOT_FOUND",
    title: "Route Not Dispatched",
    desc: "This route doesn't exist in the routing table. Perhaps the controller was never registered or the endpoint was deprecated.",
    exception: "NotFoundHttpException: The URI requested did not match any active web or API endpoints in routes/web.php.",
    backHome: "Back to Homepage",
    viewWork: "View Selected Work"
  },

  // Footer
  footer: {
    desc: "Software Engineer & Backend Developer specializing in production Laravel applications, REST APIs, and Hostinger (hPanel) server deployment.",
    navTitle: "Navigation",
    resourcesTitle: "Resources",
    adminTitle: "Administration",
    dashboardCms: "Portfolio CMS Dashboard",
    copyright: "© 2026 Abdelrahman El-Deisty. Engineered with clean architecture and vanilla web standards."
  },

  // Dashboard Translations
  dashboard: {
    overview: "Dashboard",
    projects: "Projects",
    articles: "Articles",
    skillsStack: "Skills & Stack",
    experience: "Experience",
    services: "Services",
    profileBio: "Profile & Bio",
    homepageSections: "Homepage Sections",
    navigationMenu: "Navigation Menu",
    analyticsFunnel: "Analytics & Funnel",
    inboxMessages: "Inbox Messages",
    mediaLibrary: "Media Library",
    seoSocial: "SEO & Social Cards",
    activityLog: "Activity Log",
    previewPortfolio: "Preview Portfolio",
    newProject: "New Project",
    totalProjects: "Total Projects",
    notesCount: "Engineering Notes",
    clientInquiries: "Client Inquiries",
    uniqueVisitors: "Unique Portfolio Visitors",
    quickActions: "Quick Management Actions:",
    projectInterest: "Project Interest & Conversion",
    recentInquiries: "Recent Inquiries (Inbox)",
    activityStream: "Activity Stream",
    storageStatus: "Storage & Integration Status",
    environment: "Environment: Frontend Reactive Engine",
    livePreviewModal: "Live Portfolio Preview"
  }
};
