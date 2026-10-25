/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * Centralized Data Layer & LocalStorage State Engine
 * Designed to seamlessly interface with future Laravel REST APIs.
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Abdelrahman El-Deisty",
    name_ar: "عبدالرحمن الديستي",
    title: "Software Engineer & Backend Developer",
    title_ar: "مهندس برمجيات ومطور Backend",
    tagline: "Software Engineer & Backend Developer building production-ready Laravel applications, REST APIs, server management, and system deployments.",
    tagline_ar: "مهندس برمجيات ومطور Backend متخصص في بناء تطبيقات لارافيل، وواجهات برمجة التطبيقات، والتعامل مع مختلف السيرفرات ونشر وإدارة الأنظمة الإنتاجية.",
    heroSubtitle: "I architect reliable backend systems and web applications — from high-throughput REST APIs and database design to server management and reliable production deployments.",
    heroSubtitle_ar: "أقوم بهندسة وبناء أنظمة برمجية وتطبيقات ويب معتمدة — بدءاً من واجهات REST API وقواعد البيانات، وحتى التعامل مع مختلف السيرفرات ونشر وإدارة البيئات الإنتاجية.",
    availabilityStatus: "Available for Remote Work & Projects",
    availabilityStatus_ar: "متاح للعمل عن بُعد (Remote) والمشاريع",
    availabilityType: "available", // 'available' | 'busy' | 'selective'
    location: "Cairo, Egypt / Remote Worldwide",
    location_ar: "القاهرة، مصر / متاح للعمل عن بُعد عالمياً",
    email: "contact@eldeisty.dev",
    github: "https://github.com/Abdelrahman-El-Deisty",
    linkedin: "https://linkedin.com/in/abdelrahman-el-deisty",
    twitter: "https://x.com/eldeisty_dev",
    resumeUrl: "./resume.html",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    yearsExperience: "2+",
    stats: [
      { id: "stat_1", value: "2+ Years", value_ar: "+2 سنة", label: "Software & Backend", label_ar: "هندسة البرمجيات والباك إند", detail: "Production Laravel & Server Deployment", detail_ar: "أنظمة إنتاجية بلارافيل وإدارة السيرفرات" },
      { id: "stat_2", value: "10+", value_ar: "+10", label: "Projects Shipped & Maintained", label_ar: "مشاريع تم إطلاقها وتعديلها", detail: "E-commerce, SaaS & REST APIs", detail_ar: "متاجر E-commerce، منصات SaaS، وواجهات APIs" },
      { id: "stat_3", value: "Laravel", value_ar: "Laravel", label: "Core Backend Stack", label_ar: "حزمة التقنيات الأساسية", detail: "REST APIs, Sanctum, Queues & MySQL", detail_ar: "REST APIs، Sanctum، Queues وقواعد MySQL" },
      { id: "stat_4", value: "100%", value_ar: "100%", label: "Production Focused", label_ar: "تركيز إنتاجي عملي", detail: "Clean architecture & data integrity", detail_ar: "معمارية برمجية نظيفة ودقة في تكامل البيانات" }
    ],
    bioSummary: "I'm a backend-focused software engineer with a deep passion for building resilient, maintainable digital products. I specialize in the Laravel ecosystem, clean API design, and robust database architectures that solve tangible operational problems.",
    bioSummary_ar: "أنا مهندس برمجيات متخصص في البنية التحتية والأنظمة الخلفية، ولدي شغف عميق بتطوير منتجات رقمية متينة وقابلة للصيانة والتطوير. أتخصص في بيئة لارافيل، وتصميم واجهات برمجة التطبيقات النظيفة، وهيكلة قواعد بيانات متطورة تحل مشاكل العمل الفعلية.",
    bioFull: `I'm Abdelrahman El-Deisty, a software engineer who builds systems around real business workflows. My work centers on architecting clean backend architectures, secure RESTful APIs, high-performance database schemas, and tailored management dashboards.

Rather than just writing code that passes tests in local environments, I focus on how software behaves under real production workloads — managing edge cases, optimizing query execution plans, handling idempotent third-party webhooks, and crafting clean developer-facing and client-facing interfaces.

When partnering with founders or engineering teams, my goal is always to deliver software that is maintainable, well-documented, and ready to scale.`,
    bioFull_ar: `أنا عبد الرحمن الديستي، مهندس برمجيات يبني حلولاً وأنظمة متكاملة تدور حول مسارات الأعمال الحقيقية. يركز عملي على بناء وتصميم البنى التحتية النظيفة للأنظمة الخلفية، وواجهات RESTful البرمجية الآمنة، ومخططات قواعد البيانات فائقة الأداء، ولوحات التحكم المخصصة لإدارة العمليات.

بدلاً من مجرد كتابة كود يجتاز الاختبارات محلياً، أركز على سلوك الأنظمة تحت ضغط التشغيل الفعلي في بيئات الإنتاج — إدارة الحالات الاستثنائية، وتحسين خطط استعلام قواعد البيانات، والتعامل بحرفية مع إشعارات الويب هوك لمنع التكرار المالي، وبناء واجهات واضحة وموثقة للمطورين وفرق العمل.

عند العمل مع رواد الأعمال وفرق الهندسة البرمجية، يكون هدفي دائماً تقديم برمجيات عالية الجودة، موثقة بالكامل، وجاهزة للتوسع والنمو المستمر.`
  },

  homepageSections: {
    hero: { enabled: true, order: 1, title: "Hero Introduction" },
    quickProof: { enabled: true, order: 2, title: "Quick Proof Metrics" },
    featuredWork: { enabled: true, order: 3, title: "Selected Production Work" },
    techStack: { enabled: true, order: 4, title: "Core Technical Stack" },
    codeShowcase: { enabled: true, order: 5, title: "Behind the Code" },
    engineeringPhilosophy: { enabled: true, order: 6, title: "How I Build" },
    services: { enabled: true, order: 7, title: "What I Can Build" },
    articles: { enabled: true, order: 8, title: "Engineering Notes" },
    contactCta: { enabled: true, order: 9, title: "Conversion CTA" }
  },

  navigation: [
    { id: "nav_1", label: "Work", href: "./work.html", order: 1, enabled: true },
    { id: "nav_2", label: "Skills", href: "./skills.html", order: 2, enabled: true },
    { id: "nav_3", label: "Experience", href: "./experience.html", order: 3, enabled: true },
    { id: "nav_4", label: "Services", href: "./services.html", order: 4, enabled: true },
    { id: "nav_5", label: "About", href: "./about.html", order: 5, enabled: true },
    { id: "nav_6", label: "Notes", href: "./articles.html", order: 6, enabled: true },
    { id: "nav_7", label: "Resume", href: "./resume.html", order: 7, enabled: true },
    { id: "nav_8", label: "Contact", href: "./contact.html", order: 8, enabled: true }
  ],

  projects: [
    {
      id: "proj_bynona",
      slug: "bynona",
      title: "Bynona",
      subtitle: "Multi-Vendor E-Commerce & Inventory SaaS Engine",
      category: "SaaS",
      featured: true,
      status: "Live",
      year: "2024 - 2025",
      role: "Lead Backend Architect",
      coverImage: "./assets/img/bynona_showcase.webp",
      thumbnail: "./assets/img/bynona_showcase.webp",
      description: "A production multi-store e-commerce platform featuring multi-warehouse inventory tracking, asynchronous order processing pipelines, and a headless REST API for client applications.",
      shortDescription: "Scalable multi-vendor commerce backend with inventory locking and asynchronous checkout pipelines.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Redis", "REST APIs", "Sanctum", "Firebase FCM", "Stripe Webhooks"],
      liveUrl: "https://bynona-demo.eldeisty.dev",
      githubUrl: "https://github.com/Abdelrahman-El-Deisty/bynona-engine",
      isPrivate: false,
      metrics: {
        views: 1420,
        caseStudyOpens: 730,
        liveDemoClicks: 345,
        githubClicks: 210,
        inquiries: 24
      },
      problem: "Traditional off-the-shelf commerce backends suffered from race-condition overselling during flash promotions, slow category search queries across nested hierarchies, and unhandled webhook duplicates during payment processing.",
      solution: "Engineered a custom Laravel service layer utilizing pessimistic database locking for inventory reservation during checkout sessions, Redis caching for category taxonomies, and idempotent webhook handlers that guarantee exact-once financial ledger recording.",
      responsibilities: [
        "Architected clean relational schema with normalized catalogs, polymorphic pricing tiers, and warehouse partition tables.",
        "Built 40+ RESTful API endpoints secured with Laravel Sanctum token scopes for web and mobile clients.",
        "Implemented transactional checkout state machine preventing double charges and race conditions.",
        "Integrated Firebase Cloud Messaging (FCM) for real-time order dispatch notifications to vendor dashboards.",
        "Constructed automated invoice PDF generator running on queued background jobs to avoid blocking HTTP requests."
      ],
      architecture: [
        { layer: "Client Apps", desc: "Mobile Application & Web Storefront (Consumes REST API)" },
        { layer: "API Gateway / Sanctum", desc: "Rate limiting, Bearer authentication, Token capability scopes" },
        { layer: "Laravel Service Layer", desc: "OrderStateMachine, InventoryReservationService, PaymentWebhookHandler" },
        { layer: "Queues & Events", desc: "Redis / Database queue workers for invoice dispatch and Firebase push alerts" },
        { layer: "Persistence (MySQL)", desc: "InnoDB engine, transaction isolation, indexed compound queries" }
      ],
      databaseSchema: [
        { table: "stores", relations: "hasMany: products, orders, warehouses" },
        { table: "products", relations: "belongsTo: store; hasMany: variants, stocks" },
        { table: "orders", relations: "belongsTo: user, store; hasMany: order_items, transactions" },
        { table: "order_items", relations: "belongsTo: order, product_variant" },
        { table: "transactions", relations: "belongsTo: order; polymorphic ledger entry" },
        { table: "webhook_logs", relations: "idempotency_key UNIQUE, payload JSON" }
      ],
      challenges: [
        {
          challenge: "Preventing race conditions when multiple users purchase the last inventory item simultaneously.",
          solution: "Implemented pessimistic row locking (`DB::transaction` with `lockForUpdate()`) combined with a 10-minute Redis reservation lease before committing the transaction."
        },
        {
          challenge: "Heavy catalog filtering (attributes, brands, price ranges, in-stock status) causing high database latency.",
          solution: "Restructured query builder pipelines with composite indexes (`store_id`, `is_active`, `category_id`, `price`) and cached top-level facet aggregations."
        }
      ],
      results: "Successfully handled concurrent flash traffic with zero duplicate orders and reduced average API response time from 380ms to under 65ms on standard cloud instances."
    },
    {
      id: "proj_wasly",
      slug: "wasly",
      title: "Wasly Delivery Engine",
      subtitle: "On-Demand Logistics & Spatial Driver Dispatch API",
      category: "Backend",
      featured: true,
      status: "Live",
      year: "2024",
      role: "Backend Engineer",
      coverImage: "./assets/img/wasly_showcase.webp",
      thumbnail: "./assets/img/wasly_showcase.webp",
      description: "A high-performance logistics backend coordinating delivery dispatches, dynamic driver radius matching using MySQL spatial queries, and real-time state synchronization.",
      shortDescription: "High-throughput delivery dispatcher API with spatial radius driver matching and SMS verification.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL Spatial", "REST APIs", "Twilio SMS", "Firebase", "Queue Workers"],
      liveUrl: "https://wasly-demo.eldeisty.dev",
      githubUrl: "",
      isPrivate: true,
      privateNotice: "Source code is private due to client commercial agreement. Technical architecture and case study details available below.",
      metrics: {
        views: 980,
        caseStudyOpens: 512,
        liveDemoClicks: 180,
        githubClicks: 0,
        inquiries: 18
      },
      problem: "Dispatching courier drivers required real-time geographic distance calculations across hundreds of active drivers without choking database CPU, alongside rigid order lifecycle validation.",
      solution: "Employed MySQL Spatial Point columns (`ST_Distance_Sphere`) indexed with spatial R-trees, coupled with a deterministic Order State Machine ensuring courier orders can only transition through validated states (Created -> Dispatched -> In Transit -> Delivered).",
      responsibilities: [
        "Engineered proximity-based driver assignment algorithms with configurable maximum radius search fallbacks.",
        "Constructed finite state machine preventing invalid order updates (e.g. delivering an unpicked package).",
        "Created secure webhook endpoints processing SMS verification status from Twilio.",
        "Built responsive dispatcher management portal for operations teams."
      ],
      architecture: [
        { layer: "Mobile Driver & Client", desc: "Sends periodic GPS coordinate pings via authenticated REST" },
        { layer: "Spatial Query Engine", desc: "MySQL ST_Distance_Sphere + Bounding Box optimizations" },
        { layer: "Order State Machine", desc: "Guarantees linear state transitions and audit logging" },
        { layer: "SMS / Notification Gateway", desc: "Twilio OTP verification & Firebase push alerts" }
      ],
      databaseSchema: [
        { table: "drivers", relations: "hasOne: current_location (POINT), hasMany: trips" },
        { table: "orders", relations: "belongsTo: customer; belongsTo: driver; hasMany: status_logs" },
        { table: "geofences", relations: "polygon geometry with surge pricing multipliers" }
      ],
      challenges: [
        {
          challenge: "Calculating distance between customer and dozens of drivers per second overloaded query execution.",
          solution: "Applied bounding-box pre-filtering (`MBRContains`) to eliminate out-of-range candidates before computing exact spherical trigonometric distances."
        }
      ],
      results: "Reduced driver match dispatch latency to < 120ms with 99.8% on-time assignment rates during trial runs."
    },
    {
      id: "proj_kcode",
      slug: "kcode",
      title: "KCODE E-Commerce",
      title_ar: "متجر KCODE للعناية الكورية",
      subtitle: "Korean Skincare & Smart Skin Assessment E-Commerce Platform",
      subtitle_ar: "متجر عناية كورية ومنصة تقييم ذكي للبشرة وتجارة إلكترونية",
      category: "E-Commerce",
      featured: true,
      status: "Live",
      year: "2025",
      role: "Full-Stack Backend Architect",
      coverImage: "./assets/img/kcode_showcase.webp",
      thumbnail: "./assets/img/kcode_showcase.webp",
      description: "A specialized Korean beauty and derma skincare e-commerce platform built for the GCC market (Oman), featuring an algorithmic 4-step skin assessment questionnaire, multi-currency checkout, and high-performance product catalog caching.",
      description_ar: "منصة تجارة إلكترونية متخصصة في منتجات العناية بالبشرة الكورية لمنطقة الخليج (سلطنة عمان)، تشتمل على محرك تقييم ذكي للبشرة من 4 خطوات لمطابقة المكونات الفعالة، وبوابة دفع متعددة العملات مع كاشينج فائق السرعة للكتالوج.",
      shortDescription: "Korean skincare e-commerce platform with a 4-step smart skin diagnostic engine, routine matching, and regional logistics.",
      shortDescription_ar: "متجر إلكتروني للعناية الكورية مع محرك تشخيص وتقييم ذكي للبشرة وتوصيات روتين مخصصة.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Redis", "REST APIs", "Sanctum", "Stripe"],
      liveUrl: "https://kcode-pied.vercel.app",
      githubUrl: "https://github.com/Abdelrahman-El-Deisty/kcode-core",
      isPrivate: false,
      metrics: {
        views: 860,
        caseStudyOpens: 440,
        liveDemoClicks: 210,
        githubClicks: 145,
        inquiries: 12
      },
      problem: "Customers often struggle to navigate extensive Korean skincare catalogs to find formulas matching their specific skin concerns and active ingredients, causing decision fatigue and cart abandonment.",
      problem_ar: "يواجه العملاء صعوبة في اختيار منتجات العناية الكورية المناسبة لطبيعة بشرتهم ومكوناتها النشطة، مما يؤدي إلى تردد في الشراء وزيادة معدلات التخلي عن سلة التسوق.",
      solution: "Engineered a high-performance e-commerce backend integrated with an algorithmic 4-step skin assessment questionnaire that cross-references user concerns against product ingredient matrices, generating instant tailored routines alongside multi-currency GCC checkout.",
      solution_ar: "بناء نظام خلفي فائق الأداء لمتجر إلكتروني مرتبط باختبار ذكي من 4 خطوات يحلل طبيعة البشرة ويربطها بمصفوفة توافق المكونات النشطة لتقديم روتين مخصص فورياً، مع دعم الدفع الإقليمي والشحن السريع.",
      responsibilities: [
        "Architected relational product catalog schemas with ingredient tagging, skin-type indexing, and regional currency pricing.",
        "Constructed a 4-step algorithmic skin evaluation engine matching active ingredients (PDRN, Retinol, Hyaluronic, Exosomes) to user profiles.",
        "Implemented Redis-cached product query layers achieving sub-45ms catalog response times under peak traffic.",
        "Integrated secure card payment webhooks and cash-on-delivery order lifecycle tracking across Oman and GCC regions."
      ],
      architecture: [
        { layer: "Client Storefront", desc: "Next.js / Vercel storefront communicating with REST API endpoints" },
        { layer: "Laravel Commerce Engine", desc: "Handles cart lifecycle, multi-currency pricing, and inventory reservation" },
        { layer: "Skin Diagnostic API", desc: "Evaluates questionnaire inputs and calculates ingredient suitability scores" },
        { layer: "Cache & Order Dispatch", desc: "Redis query cache and asynchronous webhook dispatch for payment & SMS notifications" }
      ],
      databaseSchema: [
        { table: "products", relations: "hasMany: variants, ingredients; belongsTo: brand, category" },
        { table: "skin_assessments", relations: "hasMany: questions, answers; produces: routine_recommendations" },
        { table: "orders", relations: "belongsTo: customer; hasMany: order_items, payment_transactions" }
      ],
      challenges: [
        {
          challenge: "Calculating instant ingredient suitability across hundreds of catalog SKUs during skin quiz completion.",
          solution: "Pre-indexed ingredient compatibility matrix in Redis hashes, enabling sub-20ms quiz evaluation without hitting relational database joins."
        },
        {
          challenge: "Preventing inventory race conditions during flash discounts on viral skincare serums.",
          solution: "Applied pessimistic database locking (`lockForUpdate`) and Redis atomic decrements during checkout confirmation."
        }
      ],
      results: "Sub-45ms catalog queries, zero overselling incidents, and an automated skin diagnostic funnel that boosts checkout conversion.",
      results_ar: "سرعة استجابة للكتالوج أقل من 45ms، وانعدام تام لأخطاء تعارض المخزون، مع مضاعفة معدلات التحويل بفضل محرك التقييم الذكي."
    },
    {
      id: "proj_mizan",
      slug: "mizan",
      title: "Mizan FinTech Accounting",
      subtitle: "Double-Entry Ledger & Invoicing Engine",
      category: "FinTech",
      featured: true,
      status: "Live",
      year: "2024",
      role: "Backend Architect",
      coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      description: "An auditable double-entry accounting engine for regional SMBs, offering automated tax calculations, recurring invoice schedules, and immutable ledger entries.",
      shortDescription: "Strict double-entry financial ledger with recurring billing and automated balance verification.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Service Layer", "PDF Engine", "REST API"],
      liveUrl: "https://mizan-demo.eldeisty.dev",
      githubUrl: "",
      isPrivate: true,
      privateNotice: "Proprietary financial system. Source code is under client NDA. Architecture overview provided for evaluation.",
      metrics: {
        views: 740,
        caseStudyOpens: 390,
        liveDemoClicks: 160,
        githubClicks: 0,
        inquiries: 14
      },
      problem: "Small businesses frequently face bookkeeping discrepancies from single-entry systems that allow unrecorded edits, resulting in failed tax reconciliations.",
      solution: "Engineered strict double-entry architecture where ledger entries are append-only and immutable. Every transaction mandates balanced debits and credits, backed by cryptographic checksum audit trails.",
      responsibilities: [
        "Architected immutable double-entry chart of accounts with strict database check constraints.",
        "Created automated recurring invoice cron jobs with graceful failure retry logic.",
        "Implemented multi-currency conversion with historical exchange rate snapshots.",
        "Built detailed financial statement endpoints (Balance Sheet, Profit & Loss, Trial Balance)."
      ],
      architecture: [
        { layer: "Financial API", desc: "Transactional endpoints for invoice creation and payment receipts" },
        { layer: "Ledger Service Layer", desc: "Mandates total debits equal total credits before saving" },
        { layer: "Audit Trail Provider", desc: "Records actor ID, timestamp, and immutable snapshot of row state" }
      ],
      databaseSchema: [
        { table: "accounts", relations: "type (asset, liability, equity, revenue, expense)" },
        { table: "journal_entries", relations: "hasMany: journal_items (debit / credit)" },
        { table: "invoices", relations: "belongsTo: customer; hasOne: journal_entry" }
      ],
      challenges: [
        {
          challenge: "Guaranteeing financial balance consistency under concurrent multi-user entries.",
          solution: "Enforced database-level triggers and application service checks verifying SUM(debit) == SUM(credit) within atomic DB transactions."
        }
      ],
      results: "100% mathematical balance verification across thousands of active journal records with zero discrepancy logs."
    },
    {
      id: "proj_pharmacare",
      slug: "pharmacare-pro",
      title: "PharmaCare Pro",
      subtitle: "Pharmacy Inventory & Batch Expiry Tracking System",
      category: "Healthcare",
      featured: false,
      status: "Live",
      year: "2024",
      role: "Backend & Internal Dashboard Developer",
      coverImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      description: "A pharmacy management backend handling batch number tracking, expiry date alerts, barcode scanning integration, and automated low-stock reorder triggers.",
      shortDescription: "Healthcare inventory system tracking batch numbers, expiration alerts, and barcode sales.",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Filament-inspired UI", "Barcode Integration"],
      liveUrl: "https://pharmacare-demo.eldeisty.dev",
      githubUrl: "https://github.com/Abdelrahman-El-Deisty/pharmacare-pro",
      isPrivate: false,
      metrics: {
        views: 620,
        caseStudyOpens: 295,
        liveDemoClicks: 140,
        githubClicks: 85,
        inquiries: 9
      },
      problem: "Pharmacies losing revenue from expired medication batches and dispensing errors due to manual stock entry.",
      solution: "Engineered batch-level stock allocation (FIFO: First-In-First-Out) where POS checkouts automatically deduct from the earliest expiring batch.",
      responsibilities: [
        "Designed batch tracking schema linking barcodes to specific supplier shipments and expiration dates.",
        "Built low-stock threshold watcher dispatching automated reorder drafts to pharmacy managers.",
        "Implemented high-speed barcode lookup API averaging under 30ms response time."
      ],
      architecture: [
        { layer: "Barcode POS Endpoint", desc: "High-speed cached lookup by EAN-13 barcode" },
        { layer: "FIFO Inventory Engine", desc: "Selects nearest expiry batch for dispensing" },
        { layer: "Stock Alert Cron", desc: "Daily evaluation of expiration windows (30/60/90 days)" }
      ],
      databaseSchema: [
        { table: "medicines", relations: "hasMany: batches" },
        { table: "batches", relations: "batch_number, expiry_date, quantity, cost_price" },
        { table: "dispensations", relations: "belongsTo: batch, prescription" }
      ],
      challenges: [
        {
          challenge: "Rapid checkout during peak clinic hours required near-zero latency barcode scans.",
          solution: "Cached active inventory lookups in memory, batch-updating sales in atomic background DB transactions."
        }
      ],
      results: "Virtually eliminated expired stock losses and reduced prescription fulfillment time by 45%."
    },
    {
      id: "proj_aqarmousa",
      slug: "aqarmousa",
      title: "AqarMousa Real Estate",
      subtitle: "Property Listing Engine & Lead Routing System",
      category: "Real Estate",
      featured: false,
      status: "Live",
      year: "2024",
      role: "Backend Developer",
      coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      description: "A property portal backend supporting multi-agent listings, compound query filtering (budget, location, amenities, property type), and automated lead distribution.",
      shortDescription: "High-volume property search backend with compound indexes and automated agent lead assignment.",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Image Optimization Queue", "WhatsApp API"],
      liveUrl: "https://aqarmousa-demo.eldeisty.dev",
      githubUrl: "",
      isPrivate: true,
      privateNotice: "Commercial client project. Code private; technical case study provided.",
      metrics: {
        views: 590,
        caseStudyOpens: 280,
        liveDemoClicks: 110,
        githubClicks: 0,
        inquiries: 7
      },
      problem: "Complex multi-parameter property searches caused slow page renders, and customer leads were lost due to delayed agent assignments.",
      solution: "Implemented compound index strategies on high-frequency search facets and automated round-robin lead distribution sending WhatsApp notifications to sales agents.",
      responsibilities: [
        "Optimized MySQL search queries across 15+ filter criteria using selective index strategy.",
        "Built background media processing queue that resizes, watermarks, and generates WebP thumbnails.",
        "Integrated WhatsApp Business API webhook for instant lead handoffs."
      ],
      architecture: [
        { layer: "Public Search API", desc: "Facet-filtered property queries with cursor pagination" },
        { layer: "Media Worker", desc: "Queued background thumbnail generation and watermarking" },
        { layer: "Lead Routing Service", desc: "Round-robin distribution with instant WhatsApp alert trigger" }
      ],
      databaseSchema: [
        { table: "properties", relations: "belongsTo: agent, location; hasMany: images, features" },
        { table: "leads", relations: "belongsTo: property, assigned_agent" }
      ],
      challenges: [
        {
          challenge: "Large unoptimized gallery uploads crashed web requests on mobile submissions.",
          solution: "Offloaded image processing to background queue workers with progressive WebP compression."
        }
      ],
      results: "Search query duration dropped by 70%, and lead response time decreased from 4 hours to under 3 minutes."
    }
  ],

  technologies: [
    // Backend
    { id: "tech_php", name: "PHP", category: "Backend", level: "Primary", experience: "2+ Years", icon: "code", featured: true, description: "Modern PHP 8.2 & 8.3: Type safety, Enums, Fibers, Attributes, and strict OOP design." },
    { id: "tech_laravel", name: "Laravel", category: "Backend", level: "Primary", experience: "2+ Years", icon: "layers", featured: true, description: "Full-spectrum Laravel: Eloquent ORM, Service Layer, Queues, Events, Middleware, and Artisan CLI." },
    { id: "tech_apis", name: "REST APIs", category: "Backend", level: "Primary", experience: "2+ Years", icon: "git-commit", featured: true, description: "API design, versioning, API Resources, rate limiting, and RFC 7807 error responses." },
    { id: "tech_sanctum", name: "Laravel Sanctum", category: "Backend", level: "Primary", experience: "2+ Years", icon: "shield", featured: true, description: "Token-based authentication, token ability scopes, SPA cookie sessions, and revocation." },
    { id: "tech_services", name: "Service Architecture", category: "Backend", level: "Primary", experience: "2+ Years", icon: "cpu", featured: true, description: "Decoupled domain business logic, single-responsibility services, and repository patterns." },
    { id: "tech_queues", name: "Queues & Jobs", category: "Backend", level: "Strong", experience: "2 Years", icon: "clock", featured: true, description: "Asynchronous processing, failure handling, Redis driver, and job chaining." },
    
    // Database
    { id: "tech_mysql", name: "MySQL", category: "Database", level: "Primary", experience: "2+ Years", icon: "database", featured: true, description: "Relational schema modeling, foreign keys, compound indexes, and ACID transactions." },
    { id: "tech_migrations", name: "Migrations & Seeders", category: "Database", level: "Primary", experience: "2+ Years", icon: "file-text", featured: false, description: "Repeatable schema lifecycles, zero-downtime column adjustments, and realistic test seeders." },
    { id: "tech_optimization", name: "Query Optimization", category: "Database", level: "Strong", experience: "2 Years", icon: "zap", featured: true, description: "EXPLAIN plan analysis, resolving N+1 queries via eager loading, and selective indexing." },
    { id: "tech_redis", name: "Redis", category: "Database", level: "Strong", experience: "1.5 Years", icon: "server", featured: false, description: "In-memory caching, queue transport, rate-limiting counters, and session storage." },

    // Admin & UI
    { id: "tech_filament", name: "Filament Admin", category: "Admin / UI", level: "Strong", experience: "1.5 Years", icon: "layout", featured: true, description: "Custom resource panels, table filters, bulk actions, and form schemas." },
    { id: "tech_blade", name: "Blade & AJAX", category: "Admin / UI", level: "Primary", experience: "2+ Years", icon: "monitor", featured: false, description: "Reusable Blade components, dynamic DOM manipulation, and JSON fetch calls." },
    { id: "tech_vanillajs", name: "Vanilla JavaScript", category: "Admin / UI", level: "Strong", experience: "2+ Years", icon: "terminal", featured: true, description: "ES6+, asynchronous DOM workflows, custom event buses, and client-side state." },
    { id: "tech_css", name: "Modern CSS", category: "Admin / UI", level: "Strong", experience: "2+ Years", icon: "palette", featured: false, description: "Flexbox, CSS Grid, custom properties, responsive breakpoints, and animations." },

    // Infrastructure & Servers
    { id: "tech_servers", name: "Web & Linux Servers", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "server", featured: true, description: "Server deployment and configuration, Linux environments, DNS management, SSL certificates, MySQL, and scheduled background workers." },
    { id: "tech_git", name: "Git & GitHub", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "git-branch", featured: true, description: "Feature branching, pull requests, rebase workflows, and release tagging." },
    { id: "tech_postman", name: "Postman & OpenAPI", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "check-circle", featured: false, description: "Collection testing, environment variables, pre-request scripts, and API docs." },
    { id: "tech_firebase", name: "Firebase (FCM)", category: "Infrastructure", level: "Strong", experience: "1.5 Years", icon: "bell", featured: true, description: "Push notification dispatching, device token registration, and topic messaging." },

    // AI & Integrations
    { id: "tech_gemini", name: "Gemini / AI APIs", category: "AI & Integrations", level: "Strong", experience: "1 Year", icon: "sparkles", featured: true, description: "Automated text extraction, semantic tagging, prompt engineering, and response validation." },
    { id: "tech_payments", name: "Stripe & Paymob", category: "AI & Integrations", level: "Strong", experience: "1.5 Years", icon: "credit-card", featured: true, description: "Checkout sessions, card tokenization, and signed webhook signature verification." },
    { id: "tech_webhooks", name: "Idempotent Webhooks", category: "AI & Integrations", level: "Primary", experience: "2 Years", icon: "repeat", featured: true, description: "Duplicate replay defense, signature checks, payload storage, and replay workers." }
  ],

  experience: [
    {
      id: "exp_1",
      role: "Backend Developer (Freelance & Product Architect)",
      company: "Independent Client Collaborations",
      period: "2024 - Present",
      location: "Remote",
      description: "Architecting and shipping tailored backend solutions, SaaS platforms, and custom REST APIs for regional founders, agencies, and businesses.",
      responsibilities: [
        "Built complete backend systems for multi-vendor commerce (Bynona) and logistics dispatching (Wasly).",
        "Engineered secure payment webhook pipelines handling multi-currency transactions with zero duplicate ledger records.",
        "Refactored legacy database schemas, introducing compound indexes and eager-loading optimizations to eliminate N+1 latency bottlenecks.",
        "Designed comprehensive Postman and OpenAPI documentation facilitating seamless integration with mobile and frontend engineering teams."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Redis", "Firebase", "Sanctum"],
      projects: ["Bynona", "Wasly", "Mizan", "PharmaCare Pro"]
    },
    {
      id: "exp_2",
      role: "Software Engineer (Backend Focus)",
      company: "Contract & Engineering Projects",
      period: "2023 - 2024",
      location: "Hybrid / Remote",
      description: "Developed administrative tooling, internal management dashboards, and specialized business logic engines for small-to-medium enterprise operations.",
      responsibilities: [
        "Developed custom role-based management dashboards utilizing Filament and custom Blade components.",
        "Implemented transactional order workflows with automated invoice generation and email/SMS triggers.",
        "Integrated third-party APIs including Twilio SMS, Paymob payments, and external shipping carrier webhooks.",
        "Conducted code reviews emphasizing clean architecture, Form Request validation, and Eloquent model isolation."
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Blade", "Filament", "Git", "Twilio"],
      projects: ["AqarMousa", "PharmaCare Pro"]
    }
  ],

  services: [
    {
      id: "srv_backend",
      title: "Backend Architecture & API Development",
      subtitle: "Robust, scalable foundations for web and mobile apps",
      icon: "server",
      featured: true,
      description: "Clean RESTful APIs built with Laravel and PHP. Designed with strict input validation, token-based authentication (Sanctum), rate limiting, and predictable error handling.",
      deliverables: [
        "Fully documented RESTful API endpoints (Postman / OpenAPI)",
        "Authentication & Role-Based Authorization (RBAC)",
        "Scalable service and repository domain logic",
        "Optimized database schema with migrations and seeders"
      ],
      solvedProblems: "Eliminates spaghetti controllers, inconsistent JSON responses, and unauthenticated API vulnerability endpoints.",
      relatedProjects: ["Bynona", "Wasly", "KCODE"]
    },
    {
      id: "srv_saas",
      title: "SaaS Platform Engineering",
      subtitle: "Multi-tenant platforms, subscriptions & automation",
      icon: "layers",
      featured: true,
      description: "Complete backend architectures for software-as-a-service products. Multi-tenant database isolation, subscription lifecycles, team workspaces, and background job queues.",
      deliverables: [
        "Multi-tenant data isolation architecture",
        "Subscription billing & webhook synchronization",
        "Asynchronous queue workers for heavy background tasks",
        "Transactional email & real-time notification integration"
      ],
      solvedProblems: "Solves multi-store data leakage risks, slow page renders during heavy processes, and messy payment reconciliation.",
      relatedProjects: ["Bynona", "KCODE", "Mizan"]
    },
    {
      id: "srv_dashboards",
      title: "Admin Dashboards & Internal Tooling",
      subtitle: "Operational control centers for business teams",
      icon: "layout",
      featured: true,
      description: "Intuitive, high-utility management dashboards enabling operations, sales, and support teams to monitor metrics, audit transactions, and manage inventory seamlessly.",
      deliverables: [
        "Role-tailored management portals",
        "Advanced data tables with filtering, sorting & export",
        "Real-time operational metrics and visual analytics",
        "Audit logs tracking user state modifications"
      ],
      solvedProblems: "Removes reliance on manual spreadsheets, prevents unauthorized data edits, and gives leadership real-time operational clarity.",
      relatedProjects: ["PharmaCare Pro", "Mizan", "Wasly"]
    },
    {
      id: "srv_database",
      title: "Database Design & Query Optimization",
      subtitle: "High-performance data models that scale gracefully",
      icon: "database",
      featured: false,
      description: "Normalization, indexing strategies, foreign key constraints, and query tuning for MySQL databases that experience high read/write loads.",
      deliverables: [
        "Optimized relational schema design (3NF)",
        "EXPLAIN plan analysis and compound indexing",
        "Elimination of N+1 query bottlenecks in ORM",
        "Database migration plans and seeders"
      ],
      solvedProblems: "Fixes sluggish queries, deadlocks during concurrent transactions, and messy unindexed tables.",
      relatedProjects: ["Wasly", "Bynona", "AqarMousa"]
    },
    {
      id: "srv_integrations",
      title: "Third-Party & Payment Integrations",
      subtitle: "Connecting your backend to the modern web",
      icon: "cpu",
      featured: false,
      description: "Seamless, idempotent integration of external APIs: Stripe, Paymob, Twilio SMS, Firebase Push Notifications, and AI services like Gemini and OpenAI.",
      deliverables: [
        "Idempotent webhook handlers with replay defense",
        "Signed HMAC payload verification",
        "Automated retry mechanisms with exponential backoff",
        "Third-party rate-limit compliance"
      ],
      solvedProblems: "Stops lost webhook events, double charges, and unhandled third-party downtime.",
      relatedProjects: ["Bynona", "Wasly", "Mizan"]
    }
  ],

  articles: [
    {
      id: "art_1",
      slug: "designing-resilient-webhook-handlers-laravel",
      title: "Designing Resilient & Idempotent Webhook Handlers in Laravel 11",
      category: "Architecture",
      date: "October 14, 2024",
      readTime: "6 min read",
      tags: ["Laravel", "Webhooks", "Security", "MySQL"],
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Webhooks are inherently unreliable — networks drop, providers retry duplicate events, and workers crash. Here is how to architect an idempotent webhook processing pipeline in Laravel.",
      status: "Published",
      content: `## The Reality of Webhooks in Production

When integrating payment gateways like Stripe or Paymob, assuming that each webhook arrives exactly once is a recipe for catastrophic financial bugs. In real production environments:

1. Networks experience transient timeouts, prompting the gateway to retry the exact same event.
2. Concurrent retries can trigger race conditions that double-credit a user account or dispatch multiple shipping orders.
3. Heavy webhook payloads can tie up web server workers if processed synchronously.

Here is the exact architectural pattern I implement to guarantee **idempotency, security, and zero dropped events**.

---

### Step 1: Immediate Signature Verification

Before touching the database or payload, verify the cryptographic signature using the shared webhook secret:

\`\`\`php
public function handle(Request $request): JsonResponse
{
    $signature = $request->header('X-Signature');
    $secret = config('services.gateway.webhook_secret');

    $computed = hash_hmac('sha256', $request->getContent(), $secret);

    if (! hash_equals($computed, $signature)) {
        abort(401, 'Invalid signature.');
    }

    // Proceed to idempotent queueing...
}
\`\`\`

Using \`hash_equals()\` prevents timing attacks that could reveal secret length through byte-comparison latency.

---

### Step 2: The Idempotency Key Gatekeeper

Never execute business logic directly in the HTTP request. Instead, persist the raw incoming webhook to an immutable log table with a \`UNIQUE\` constraint on the provider's event ID:

\`\`\`php
$log = WebhookLog::firstOrCreate(
    ['event_id' => $payload['id']],
    [
        'provider' => 'stripe',
        'event_type' => $payload['type'],
        'payload' => $payload,
        'status' => 'pending',
    ]
);

if (! $log->wasRecentlyCreated) {
    // We already received this exact event! Return 200 immediately to stop provider retries.
    return response()->json(['status' => 'already_received']);
}
\`\`\`

Because \`event_id\` is indexed with a unique database constraint, even two requests hitting parallel PHP processes at the exact same millisecond will fail gracefully without running logic twice.

---

### Step 3: Offload to Asynchronous Queues

Respond with \`200 OK\` to the gateway immediately, then push a background job:

\`\`\`php
ProcessWebhookJob::dispatch($log->id);

return response()->json(['status' => 'queued']);
\`\`\`

This guarantees your web server never hangs, external timeouts are avoided, and any transient worker failure will benefit from Laravel's built-in queue retry mechanics.`,
      relatedProjects: ["bynona", "mizan"]
    },
    {
      id: "art_2",
      slug: "mysql-spatial-queries-delivery-fleet",
      title: "Optimizing MySQL Spatial & Bounding Box Queries for High-Volume Delivery Fleets",
      category: "Database",
      date: "September 28, 2024",
      readTime: "8 min read",
      tags: ["MySQL", "Spatial", "Performance", "APIs"],
      coverImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Calculating geodesic distance across hundreds of moving couriers can easily exhaust database CPU. Here is how we achieved sub-15ms radius searches using MySQL spatial indexing.",
      status: "Published",
      content: `## The Proximity Dilemma

In on-demand delivery platforms like Wasly, matching an incoming pickup order with the nearest available drivers requires evaluating distances continuously:

$$d = 2r \\arcsin\\left(\\sqrt{\\sin^2\\left(\\frac{\\Delta\\phi}{2}\\right) + \\cos(\\phi_1)\\cos(\\phi_2)\\sin^2\\left(\\frac{\\Delta\\lambda}{2}\\right)}\\right)$$

Computing this Haversine formula on every row during a \`SELECT\` query forces MySQL to execute a full table scan, calculating expensive trigonometric floating-point operations for thousands of drivers.

At 50 active couriers, it passes tests. At 1,000 couriers with multiple dispatch requests per second, CPU spikes to 100%.

---

### The Solution: Minimum Bounding Box (MBR) + Spatial R-Trees

MySQL 8.0 provides native spatial geometry types with high-performance R-tree spatial indexes:

\`\`\`sql
ALTER TABLE drivers ADD location POINT NOT NULL SRID 4326;
ALTER TABLE drivers ADD SPATIAL INDEX(location);
\`\`\`

Instead of calculating exact spherical distances across the entire world, we first filter candidates using a **Minimum Bounding Box (MBR)**:

\`\`\`php
$bbox = $this->calculateBoundingBox($pickupLat, $pickupLng, $radiusKm);

$drivers = Driver::query()
    ->whereRaw("MBRContains(ST_GeomFromText(?), location)", [$bbox->toWkt()])
    ->where('is_online', true)
    ->where('status', 'available')
    ->selectRaw("id, name, ST_Distance_Sphere(location, ST_GeomFromText(?)) as distance_meters", [
        "POINT({$pickupLng} {$pickupLat})"
    ])
    ->orderBy('distance_meters')
    ->limit(10)
    ->get();
\`\`\`

---

### The Result

By using the bounding box to prune 98% of candidate drivers using the R-tree index, exact spherical distance is only evaluated for the small handful of drivers genuinely inside the candidate sector.

Query latency dropped from **260ms to 12ms**, allowing the dispatch server to comfortably handle real-time geolocation matching.`,
      relatedProjects: ["wasly"]
    },
    {
      id: "art_3",
      slug: "service-layer-pattern-vs-fat-models",
      title: "The Service Layer Pattern: Scaling Beyond Fat Models in Laravel Applications",
      category: "Architecture",
      date: "August 19, 2024",
      readTime: "7 min read",
      tags: ["Laravel", "Clean Code", "Design Patterns", "PHP"],
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Where should business logic actually live? Exploring how decoupling business rules into dedicated domain Services keeps controllers lean, models clean, and testing painless.",
      status: "Published",
      content: `## The 'Fat Model, Skinny Controller' Trap

When starting with Laravel, the common community advice is "Keep controllers thin, put logic in your models." While this works for simple CRUD applications, in enterprise systems it leads directly to the **God Model** anti-pattern.

Your \`Order\` model quickly swells to 1,500 lines containing:
- PDF generation
- Payment gateway API calls
- Stock reservation locks
- Push notification triggers
- Tax rate calculation algorithms

When an entity model handles both database persistence and complex multi-service business orchestrations, unit testing becomes a nightmare of endless mocks.

---

### Introducing the Single-Responsibility Service

In my architectures, controllers are strictly responsible for:
1. Validating input via Form Requests
2. Passing sanitized DTOs (Data Transfer Objects) to a Service
3. Formatting the response via API Resources

The **Service** owns the domain workflow:

\`\`\`php
class CheckoutService
{
    public function __construct(
        protected InventoryManager $inventory,
        protected PaymentGateway $payments,
        protected InvoiceGenerator $invoices
    ) {}

    public function process(OrderDTO $dto): Order
    {
        return DB::transaction(function () use ($dto) {
            // 1. Reserve stock with pessimistic lock
            $this->inventory->reserveItems($dto->items);

            // 2. Create unconfirmed order record
            $order = Order::createFromDTO($dto);

            // 3. Charge customer payment source
            $charge = $this->payments->charge($dto->paymentToken, $order->total);

            // 4. Mark order paid & trigger background jobs
            $order->markAsPaid($charge->transactionId);
            
            event(new OrderSuccessfullyPlaced($order));

            return $order;
        });
    }
}
\`\`\`

### Key Benefits Observed in Production
- **Testability**: You can test \`CheckoutService\` in isolation without booting full HTTP requests.
- **Reusability**: The exact same checkout logic can be triggered from an API controller, an Artisan console command, or a background queue worker without duplicating code.
- **Maintainability**: If your payment gateway rules change, you touch one targeted service rather than an 800-line controller.`,
      relatedProjects: ["bynona", "mizan"]
    }
  ],

  codeSnippets: [
    {
      id: "code_1",
      title: "Pessimistic Locking & Inventory Reservation",
      subtitle: "Preventing race-condition overselling during concurrent checkouts",
      language: "php",
      project: "Bynona E-Commerce",
      description: "Uses DB transaction locking (`lockForUpdate`) combined with atomic inventory verification to guarantee that two simultaneous shoppers cannot purchase the final stock unit.",
      code: `<?php

namespace App\\Services;

use App\\Models\\ProductVariant;
use App\\Exceptions\\InsufficientStockException;
use Illuminate\\Support\\Facades\\DB;

class InventoryReservationService
{
    /**
     * Atomically reserves requested quantities with pessimistic database locking.
     *
     * @throws InsufficientStockException
     */
    public function reserve(array $items): void
    {
        DB::transaction(function () use ($items) {
            foreach ($items as $item) {
                // Lock the variant record for update to prevent concurrent read race
                $variant = ProductVariant::where('id', $item['variant_id'])
                    ->lockForUpdate()
                    ->firstOrFail();

                if ($variant->stock_quantity < $item['quantity']) {
                    throw new InsufficientStockException(
                        "Variant [{$variant->sku}] has only {$variant->stock_quantity} units available."
                    );
                }

                // Decrement stock and assign to pending reservation
                $variant->decrement('stock_quantity', $item['quantity']);
                $variant->increment('reserved_quantity', $item['quantity']);
            }
        });
    }
}`
    },
    {
      id: "code_2",
      title: "Deterministic Order State Machine",
      subtitle: "Strict lifecycle transitions with transition audit logging",
      language: "php",
      project: "Wasly Logistics",
      description: "Guarantees that delivery orders cannot bypass valid sequential states (e.g. transitioning directly from Pending to Delivered without assigned driver).",
      code: `<?php

namespace App\\StateMachines;

use App\\Models\\Order;
use App\\Enums\\OrderStatus;
use InvalidArgumentException;

class OrderStateMachine
{
    protected array $allowedTransitions = [
        OrderStatus::PENDING->value => [
            OrderStatus::DISPATCHED->value,
            OrderStatus::CANCELLED->value
        ],
        OrderStatus::DISPATCHED->value => [
            OrderStatus::PICKED_UP->value,
            OrderStatus::CANCELLED->value
        ],
        OrderStatus::PICKED_UP->value => [
            OrderStatus::IN_TRANSIT->value
        ],
        OrderStatus::IN_TRANSIT->value => [
            OrderStatus::DELIVERED->value,
            OrderStatus::FAILED->value
        ]
    ];

    public function transition(Order $order, OrderStatus $targetStatus, ?string $actorId = null): void
    {
        $current = $order->status->value;
        $target = $targetStatus->value;

        if (! in_array($target, $this->allowedTransitions[$current] ?? [], true)) {
            throw new InvalidArgumentException(
                "Invalid transition: Cannot move order from [{$current}] to [{$target}]."
            );
        }

        $order->status = $targetStatus;
        $order->save();

        $order->statusLogs()->create([
            'from_status' => $current,
            'to_status' => $target,
            'actor_id' => $actorId,
            'transitioned_at' => now(),
        ]);
    }
}`
    },
    {
      id: "code_3",
      title: "High-Performance Spatial Query Scope",
      subtitle: "MySQL spatial distance filtering for couriers",
      language: "php",
      project: "Wasly Logistics",
      description: "Encapsulates bounding box pre-filtering and exact spherical distance calculation into an Eloquent query scope.",
      code: `<?php

namespace App\\Models\\Scopes;

use Illuminate\\Database\\Eloquent\\Builder;

trait HasSpatialProximityScope
{
    /**
     * Scope query to find couriers within a radial distance in kilometers.
     */
    public function scopeNearby(Builder $query, float $lat, float $lng, float $radiusKm = 10.0): Builder
    {
        // 1 degree latitude ~ 111.045 km
        $latDelta = $radiusKm / 111.045;
        $lngDelta = $radiusKm / (111.045 * cos(deg2rad($lat)));

        $minLat = $lat - $latDelta;
        $maxLat = $lat + $latDelta;
        $minLng = $lng - $lngDelta;
        $maxLng = $lng + $lngDelta;

        $envelopeWkt = "POLYGON(({$minLng} {$minLat}, {$maxLng} {$minLat}, {$maxLng} {$maxLat}, {$minLng} {$maxLat}, {$minLng} {$minLat}))";

        return $query
            ->whereRaw("MBRContains(ST_GeomFromText(?), location)", [$envelopeWkt])
            ->selectRaw(
                "*, ST_Distance_Sphere(location, ST_GeomFromText(?)) as distance_meters",
                ["POINT({$lng} {$lat})"]
            )
            ->whereRaw("ST_Distance_Sphere(location, ST_GeomFromText(?)) <= ?", [
                "POINT({$lng} {$lat})",
                $radiusKm * 1000
            ])
            ->orderBy('distance_meters');
    }
}`
    }
  ],

  contactMessages: [
    {
      id: "msg_1",
      name: "Tarek Mansour",
      email: "tarek@novatech-solutions.com",
      company: "NovaTech Solutions",
      projectType: "SaaS Platform",
      budget: "$5,000 - $10,000",
      message: "Hi Abdelrahman, we reviewed your Bynona case study. We are building a multi-tenant logistics platform and need a lead backend developer to architect our REST APIs and queue workflows in Laravel. Are you available for contract?",
      date: "2026-10-22T14:32:00Z",
      status: "New", // 'New' | 'Read' | 'Replied' | 'Archived'
      starred: true
    },
    {
      id: "msg_2",
      name: "Sarah Jenkins",
      email: "s.jenkins@apexcommerce.io",
      company: "Apex Commerce Ltd",
      projectType: "Backend Development",
      budget: "$3,000 - $5,000",
      message: "We need an experienced Laravel engineer to audit our checkout webhook architecture and fix intermittent race conditions during high-volume sales. Your article on idempotent webhooks was spot on.",
      date: "2026-10-21T09:15:00Z",
      status: "Read",
      starred: false
    },
    {
      id: "msg_3",
      name: "Omar El-Sayed",
      email: "omar@aqarplus.me",
      company: "AqarPlus",
      projectType: "Admin Dashboard & API",
      budget: "$2,000 - $3,000",
      message: "Looking for someone to build a custom internal CRM and property listing API with role permissions. Would love to schedule an introductory call.",
      date: "2026-10-19T18:40:00Z",
      status: "Replied",
      starred: true
    }
  ],

  analytics: {
    overview: {
      totalVisitors: 8420,
      uniqueVisitors: 4190,
      pageViews: 19850,
      avgSessionDuration: "3m 42s",
      bounceRate: "28.4%",
      resumeDownloads: 342,
      githubProfileClicks: 512,
      contactInquiries: 38
    },
    visitorsOverTime: [
      { date: "Oct 17", visitors: 420, views: 980 },
      { date: "Oct 18", visitors: 580, views: 1320 },
      { date: "Oct 19", visitors: 710, views: 1640 },
      { date: "Oct 20", visitors: 650, views: 1480 },
      { date: "Oct 21", visitors: 890, views: 2150 },
      { date: "Oct 22", visitors: 940, views: 2280 },
      { date: "Oct 23", visitors: 1040, views: 2510 }
    ],
    trafficSources: [
      { source: "GitHub Referrals", percentage: 38, count: 3200 },
      { source: "Direct / Portfolio URL", percentage: 29, count: 2440 },
      { source: "LinkedIn", percentage: 21, count: 1768 },
      { source: "Twitter / X", percentage: 8, count: 673 },
      { source: "Search Engines", percentage: 4, count: 339 }
    ],
    deviceBreakdown: [
      { device: "Desktop", percentage: 68 },
      { device: "Mobile", percentage: 28 },
      { device: "Tablet", percentage: 4 }
    ],
    projectInterest: [
      { slug: "bynona", name: "Bynona E-Commerce", views: 1420, caseStudyOpens: 730, demoClicks: 345, githubClicks: 210, conversionCount: 24 },
      { slug: "wasly", name: "Wasly Delivery Engine", views: 980, caseStudyOpens: 512, demoClicks: 180, githubClicks: 0, conversionCount: 18 },
      { slug: "kcode", name: "KCODE E-Commerce", views: 860, caseStudyOpens: 440, demoClicks: 210, githubClicks: 145, conversionCount: 12 },
      { slug: "mizan", name: "Mizan FinTech", views: 740, caseStudyOpens: 390, demoClicks: 160, githubClicks: 0, conversionCount: 14 },
      { slug: "pharmacare-pro", name: "PharmaCare Pro", views: 620, caseStudyOpens: 295, demoClicks: 140, githubClicks: 85, conversionCount: 9 },
      { slug: "aqarmousa", name: "AqarMousa Real Estate", views: 590, caseStudyOpens: 280, demoClicks: 110, githubClicks: 0, conversionCount: 7 }
    ]
  },

  activityLogs: [
    { id: "act_1", action: "Published Article", detail: "Published 'Designing Resilient & Idempotent Webhook Handlers in Laravel 11'", timestamp: "2026-10-23T16:20:00Z", user: "Abdelrahman" },
    { id: "act_2", action: "Updated Project", detail: "Added architecture diagram and benchmark metrics to Bynona case study", timestamp: "2026-10-23T14:05:00Z", user: "Abdelrahman" },
    { id: "act_3", action: "Updated Availability", detail: "Availability status updated to 'Available for selected opportunities'", timestamp: "2026-10-22T19:30:00Z", user: "Abdelrahman" },
    { id: "act_4", action: "New Contact Message", detail: "Received inquiry from Tarek Mansour (NovaTech Solutions)", timestamp: "2026-10-22T14:32:00Z", user: "System" },
    { id: "act_5", action: "Updated Resume", detail: "Updated 2026 technical stack and experience bullet points", timestamp: "2026-10-21T11:15:00Z", user: "Abdelrahman" }
  ],

  mediaLibrary: [
    { id: "med_1", title: "Bynona Cover", url: "./assets/img/bynona_showcase.webp", type: "Project Cover", dimensions: "1400x900", date: "2026-10-25" },
    { id: "med_2", title: "Wasly Fleet Cover", url: "./assets/img/wasly_showcase.webp", type: "Project Cover", dimensions: "1400x900", date: "2026-10-25" },
    { id: "med_3", title: "KCODE E-Commerce Cover", url: "./assets/img/kcode_showcase.webp", type: "Project Cover", dimensions: "1400x900", date: "2026-10-25" },
    { id: "med_4", title: "Mizan FinTech Cover", url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80", type: "Project Cover", dimensions: "1200x800", date: "2026-10-21" },
    { id: "med_5", title: "Profile Avatar", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", type: "Profile", dimensions: "600x600", date: "2026-10-22" }
  ],

  seo: {
    siteTitle: "Abdelrahman El-Deisty — Software Engineer & Backend Developer",
    siteDescription: "Software Engineer & Backend Developer building production-ready Laravel applications, high-performance REST APIs, and reliable server deployments.",
    keywords: "Software Engineer, Backend Developer, Laravel, PHP, REST API, MySQL, Servers, Deployment, SaaS, E-commerce, Cairo, Remote",
    author: "Abdelrahman El-Deisty",
    ogImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    twitterCard: "summary_large_image"
  }
};

const DB_STORAGE_KEY = 'eldeisty_portfolio_db_v8';
const DB_SESSION_KEY = 'eldeisty_dashboard_auth';

class PortfolioDB {
  constructor() {
    this.data = this.load();
    window.addEventListener('storage', (e) => {
      if (e.key === DB_STORAGE_KEY) {
        this.data = this.load();
        this.emitChange('*');
      }
    });
  }

  load() {
    try {
      const stored = localStorage.getItem(DB_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure all top-level keys exist by shallow merging with defaults
        const merged = Object.assign({}, DEFAULT_PORTFOLIO_DATA, parsed);
        this.migrateArabicFields(merged);
        return merged;
      }
    } catch (e) {
      console.warn("Error reading localStorage, using defaults:", e);
    }
    this.save(DEFAULT_PORTFOLIO_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }

  migrateArabicFields(data) {
    if (!data) return;
    const def = DEFAULT_PORTFOLIO_DATA;
    // Profile
    if (def.profile && data.profile) {
      if (data.profile.tagline_ar && data.profile.tagline_ar.includes('هوستينجر')) {
        data.profile.tagline_ar = def.profile.tagline_ar;
      }
      if (data.profile.heroSubtitle_ar && data.profile.heroSubtitle_ar.includes('هوستينجر')) {
        data.profile.heroSubtitle_ar = def.profile.heroSubtitle_ar;
      }
      if (data.profile.tagline && data.profile.tagline.includes('Hostinger')) {
        data.profile.tagline = def.profile.tagline;
      }
      if (data.profile.heroSubtitle && data.profile.heroSubtitle.includes('Hostinger')) {
        data.profile.heroSubtitle = def.profile.heroSubtitle;
      }
      ['name_ar', 'title_ar', 'tagline_ar', 'heroSubtitle_ar', 'availabilityStatus_ar', 'location_ar', 'bioSummary_ar', 'bioFull_ar'].forEach(f => {
        if (!data.profile[f] && def.profile[f]) data.profile[f] = def.profile[f];
      });
      if (Array.isArray(data.profile.stats) && Array.isArray(def.profile.stats)) {
        data.profile.stats.forEach((s, i) => {
          if (def.profile.stats[i]) {
            if (!s.label_ar) s.label_ar = def.profile.stats[i].label_ar;
            if (!s.detail_ar || s.detail_ar.includes('هوستينجر') || s.id === 'stat_2') s.detail_ar = def.profile.stats[i].detail_ar;
            if (!s.detail || s.detail.includes('Hostinger') || s.id === 'stat_2') s.detail = def.profile.stats[i].detail;
            if (!s.value_ar) s.value_ar = def.profile.stats[i].value_ar;
          }
        });
      }
    }
  }

  static getLocalized(item, field) {
    if (!item) return '';
    const lang = (window.I18n && typeof window.I18n.getLanguage === 'function' ? window.I18n.getLanguage() : (window.I18n && window.I18n.lang ? window.I18n.lang : 'en')) || 'en';
    if (lang === 'ar') {
      if (item[field + '_ar']) return item[field + '_ar'];
      if (item[field] && typeof item[field] === 'object' && item[field].ar) return item[field].ar;
    }
    if (item[field + '_en']) return item[field + '_en'];
    if (item[field] && typeof item[field] === 'object' && item[field].en) return item[field].en;
    return item[field] || '';
  }

  getLocalized(item, field) {
    return PortfolioDB.getLocalized(item, field);
  }

  _oldGetLocalized(item, field) {
    if (!item) return '';
    const lang = (window.I18n && window.I18n.getLanguage()) || 'en';
    if (lang === 'ar') {
      if (item[field + '_ar']) return item[field + '_ar'];
      if (item[field] && typeof item[field] === 'object' && item[field].ar) return item[field].ar;
    }
    if (item[field + '_en']) return item[field + '_en'];
    if (item[field] && typeof item[field] === 'object' && item[field].en) return item[field].en;
    return item[field] || '';
  }

  save(dataToSave) {
    try {
      this.data = dataToSave || this.data;
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.data));
      this.emitChange('*');
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }
  }

  emitChange(collection) {
    window.dispatchEvent(new CustomEvent('portfolio-db-updated', {
      detail: { collection, timestamp: Date.now() }
    }));
  }

  get(collection) {
    return this.data[collection] || null;
  }

  set(collection, value) {
    this.data[collection] = value;
    this.save();
    this.emitChange(collection);
  }

  getById(collection, id) {
    const list = this.get(collection);
    if (!Array.isArray(list)) return null;
    return list.find(item => item.id === id) || null;
  }

  getBySlug(collection, slug) {
    const list = this.get(collection);
    if (!Array.isArray(list)) return null;
    return list.find(item => item.slug === slug) || null;
  }

  create(collection, item) {
    if (!Array.isArray(this.data[collection])) {
      this.data[collection] = [];
    }
    if (!item.id) {
      item.id = 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    }
    this.data[collection].unshift(item);
    this.save();
    this.logActivity(`Created in ${collection}`, item.title || item.name || item.id, collection, item.id);
    return item;
  }

  update(collection, id, updates) {
    if (!Array.isArray(this.data[collection])) return false;
    const idx = this.data[collection].findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.data[collection][idx] = Object.assign({}, this.data[collection][idx], updates);
    this.save();
    const entity = this.data[collection][idx];
    this.logActivity(`Updated in ${collection}`, entity.title || entity.name || id, collection, id);
    return entity;
  }

  delete(collection, id) {
    if (!Array.isArray(this.data[collection])) return false;
    const idx = this.data[collection].findIndex(i => i.id === id);
    if (idx === -1) return false;
    const removed = this.data[collection].splice(idx, 1)[0];
    this.save();
    this.logActivity(`Deleted from ${collection}`, removed.title || removed.name || id, collection, id);
    return true;
  }

  logActivity(action, detail, entityType = "General", entityId = "") {
    if (!Array.isArray(this.data.activityLogs)) {
      this.data.activityLogs = [];
    }
    const log = {
      id: 'act_' + Date.now(),
      action,
      detail,
      timestamp: new Date().toISOString(),
      user: "Abdelrahman",
      entityType,
      entityId
    };
    this.data.activityLogs.unshift(log);
    if (this.data.activityLogs.length > 50) {
      this.data.activityLogs.pop();
    }
    this.save();
  }

  reset() {
    localStorage.removeItem(DB_STORAGE_KEY);
    this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    this.save(this.data);
    this.logActivity("System Reset", "Reset portfolio database to default seed state");
  }

  // Authentication Helpers (Mock Dashboard Session)
  isAuthenticated() {
    try {
      const sess = localStorage.getItem(DB_SESSION_KEY);
      if (!sess) return false;
      const parsed = JSON.parse(sess);
      return Boolean(parsed && parsed.email);
    } catch (e) {
      return false;
    }
  }

  login(email, password, remember = true) {
    // Demo mock authentication
    // Default demo: admin@eldeisty.dev / admin2026 or any credentials in demo mode
    const session = {
      email,
      name: "Abdelrahman El-Deisty",
      role: "Owner / Lead Architect",
      loggedInAt: new Date().toISOString(),
      remember
    };
    localStorage.setItem(DB_SESSION_KEY, JSON.stringify(session));
    this.logActivity("Dashboard Login", `User ${email} signed into the portfolio dashboard`);
    return { success: true, session };
  }

  logout() {
    localStorage.removeItem(DB_SESSION_KEY);
    this.logActivity("Dashboard Logout", "User signed out from dashboard");
  }

  getSession() {
    try {
      return JSON.parse(localStorage.getItem(DB_SESSION_KEY));
    } catch (e) {
      return null;
    }
  }
}

// Global Singleton Instance
window.PortfolioDB = new PortfolioDB();
window.PortfolioDB.getLocalized = PortfolioDB.getLocalized.bind(PortfolioDB);
PortfolioDB.prototype.getLocalized = function(item, field) { return PortfolioDB.getLocalized(item, field); };

// Universal HTML Sanitizer
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
window.escapeHtml = escapeHtml;

// Universal Toast Engine
const Toast = window.Toast || {
  container: null,
  getContainer() {
    if (!this.container) {
      this.container = document.querySelector('.toast-container');
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
      }
    }
    return this.container;
  },
  show(message, type = 'info', duration = 3500) {
    const container = this.getContainer();
    const toast = document.createElement('div');
    toast.className = 'toast';
    let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan, #38BDF8)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    if (type === 'success') {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'error') {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    }
    toast.innerHTML = `${icon}<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }
};
window.Toast = Toast;
