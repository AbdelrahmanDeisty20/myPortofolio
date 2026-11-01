/**
 * Abdelrahman El-Deisty - Developer Portfolio & Product Lab
 * Centralized Data Layer & LocalStorage State Engine
 * Designed to seamlessly interface with future Laravel REST APIs.
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Abdelrahman Deisty",
    name_ar: "عبدالرحمن الديستي",
    title: "Software Engineer & Backend Developer",
    title_ar: "مهندس برمجيات ومطور Backend",
    tagline: "Software Engineer & Backend Developer building production-ready Laravel applications, REST APIs, server management, and system deployments.",
    tagline_ar: "مهندس برمجيات ومطور Backend متخصص في بناء تطبيقات لارافيل، وواجهات برمجة التطبيقات، والتعامل مع مختلف السيرفرات ونشر وإدارة الأنظمة البرمجية.",
    heroSubtitle: "I architect reliable backend systems and web applications — from high-throughput REST APIs and database design to server management and reliable production deployments.",
    heroSubtitle_ar: "أقوم بهندسة وبناء أنظمة برمجية وتطبيقات ويب معتمدة — بدءاً من واجهات REST API وقواعد البيانات، وحتى التعامل مع مختلف السيرفرات ونشر وإدارة البيئات والمشاريع البرمجية.",
    availabilityStatus: "Available for Remote Work & Projects",
    availabilityStatus_ar: "متاح للعمل عن بُعد (Remote) والمشاريع",
    availabilityType: "available", // 'available' | 'busy' | 'selective'
    location: "Cairo, Egypt / Remote Worldwide",
    location_ar: "القاهرة، مصر / متاح للعمل عن بُعد عالمياً",
    email: "abdulrahmaneldeisty@gmail.com",
    github: "https://github.com/AbdelrahmanDeisty20",
    linkedin: "https://linkedin.com/in/abdelrahman-el-deisty",
    twitter: "https://x.com/eldeisty_dev",
    resumeUrl: "./resume.html",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    yearsExperience: "2+",
    stats: [
      { id: "stat_1", value: "2+ Years", value_ar: "+2 سنة", label: "Software & Backend", label_ar: "هندسة البرمجيات والباك إند", detail: "Production Laravel & Server Deployment", detail_ar: "مشاريع بلارافيل وإدارة السيرفرات" },
      { id: "stat_2", value: "10+", value_ar: "+10", label: "Projects Shipped & Maintained", label_ar: "مشاريع تم إطلاقها وتعديلها", detail: "E-commerce, SaaS & REST APIs", detail_ar: "متاجر E-commerce، منصات SaaS، وواجهات APIs" },
      { id: "stat_3", value: "Laravel", value_ar: "Laravel", label: "Core Backend Stack", label_ar: "حزمة التقنيات الأساسية", detail: "REST APIs, Sanctum, Queues & MySQL", detail_ar: "REST APIs، Sanctum، Queues وقواعد MySQL" },
      { id: "stat_4", value: "100%", value_ar: "100%", label: "Production Focused", label_ar: "تركيز عملي وموثوق", detail: "Clean architecture & data integrity", detail_ar: "معمارية برمجية نظيفة ودقة في تكامل البيانات" }
    ],
    bioSummary: "I'm a backend-focused software engineer with a deep passion for building resilient, maintainable digital products. I specialize in the Laravel ecosystem, clean API design, and robust database architectures that solve tangible operational problems.",
    bioSummary_ar: "أنا مهندس برمجيات متخصص في البنية التحتية والأنظمة الخلفية، ولدي شغف عميق بتطوير منتجات رقمية متينة وقابلة للصيانة والتطوير. أتخصص في بيئة لارافيل، وتصميم واجهات برمجة التطبيقات النظيفة، وهيكلة قواعد بيانات متطورة تحل مشاكل العمل الفعلية.",
    bioFull: `I'm Abdelrahman Deisty, a software engineer who builds systems around real business workflows. My work centers on architecting clean backend architectures, secure RESTful APIs, high-performance database schemas, and tailored management dashboards.

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
    contactCta: { enabled: true, order: 8, title: "Conversion CTA" }
  },

  navigation: [
    { id: "nav_1", label: "Work", href: "./work.html", order: 1, enabled: true },
    { id: "nav_2", label: "Skills", href: "./skills.html", order: 2, enabled: true },
    { id: "nav_3", label: "Experience", href: "./experience.html", order: 3, enabled: true },
    { id: "nav_4", label: "Services", href: "./services.html", order: 4, enabled: true },
    { id: "nav_5", label: "About", href: "./about.html", order: 5, enabled: true },
    { id: "nav_7", label: "Resume", href: "./resume.html", order: 6, enabled: true },
    { id: "nav_8", label: "Contact", href: "./contact.html", order: 7, enabled: true }
  ],

  projects: [
    {
      id: "proj_bynona",
      slug: "bynona",
      title: "Bynona E-Commerce Platform",
      title_ar: "منصة بينونة للتجارة والتوزيع (B2B & B2C)",
      subtitle: "Dual Retail & Wholesale Commerce Engine with Custom-Coded Blade Dashboard & FCM Alerts",
      subtitle_ar: "محرك تجارة إلكترونية متكامل يدعم البيع بالتجزئة والجملة مع لوحة تحكم برمجية مخصصة (Custom Code)",
      category: "E-Commerce",
      category_ar: "تجارة إلكترونية / B2B",
      featured: true,
      status: "Live",
      status_ar: "مكتمل ويعمل (Live)",
      year: "2024 - 2025",
      role: "Backend Architect & Core Developer",
      role_ar: "مهندس برمجيات Backend ومصمم معمارية النظام",
      coverImage: "./assets/img/bynona_showcase.webp",
      thumbnail: "./assets/img/bynona_showcase.webp",
      description: "A full-scale commercial e-commerce backend built with Laravel, featuring dynamic dual pricing (Retail vs. Wholesale) via custom middleware, a completely custom-coded Blade administrative dashboard with bespoke KPI analytics, an extensible EAV-inspired product attributes and variants engine, recursive hierarchical category trees with cycle protection, transactional checkout pipelines with automated stock decrements, time-sensitive dual discount offers, Firebase Cloud Messaging (FCM HTTP v1) alerts, and bulk Excel/ZIP catalog import tooling.",
      description_ar: "منصة تجارة إلكترونية متكاملة للبيع بالتجزئة والتوزيع بالجملة (B2B & B2C) مبنية بلارافيل، تتميز بنظام تسعير مزدوج ذكي (قطاعي / جملة) عبر Middleware مخصص، ولوحة تحكم إدارية مخصصة برمجياً بالكامل (Custom Code عبر Blade) بمؤشرات أداء متطورة، ومحرك سمات وخصائص ديناميكية للمنتجات (Variant Attributes)، وشجرة تصنيفات متداخلة هرمية لا نهائية مع منع الحلقات التكرارية، ومسار دفع آمن بمعاملات بنكية مع حسم المخزون اللحظي، ونظام عروض وخصومات زمنية منفصلة لكل قناة بيع، وإشعارات فورية عبر Firebase FCM، واستيراد وتصدير كتالوج المنتجات عبر ملفات Excel وحزم الصور المضغوطة (ZIP).",
      shortDescription: "Enterprise B2B/B2C commerce backend with dual retail/wholesale pricing, custom-coded Blade dashboard, variant engine, and Firebase FCM.",
      shortDescription_ar: "نظام تجارة إلكترونية متقدم يدعم البيع بالتجزئة والجملة بنظام تسعير مزدوج، ولوحة تحكم برمجية مخصصة، وخصائص منتجات ديناميكية، ومعاملات دفع آمنة.",
      technologies: ["Laravel", "PHP 8.3", "Custom Blade Dashboard", "MySQL", "REST APIs", "Laravel Sanctum", "Firebase FCM", "Maatwebsite Excel"],
      liveUrl: "https://bynona.store/",
      githubUrl: "",
      isPrivate: false,
      metrics: {
        views: 1420,
        caseStudyOpens: 730,
        liveDemoClicks: 345,
        githubClicks: 210,
        inquiries: 24
      },
      examplesNotice: "Demo Notice: The screenshots displayed are real operational examples and interactive architecture models captured directly from the production admin console.",
      examplesNotice_ar: "ملاحظة توضيحية: لقطات الشاشات المعروضة هي نماذج وأمثلة تشغيلية حقيقية مأخوذة مباشرة من بيئة عمل لوحة التحكم الفعلية لإيضاح الواجهات وتدفق العمليات.",
      screenshots: [
        {
          title: "Executive KPIs & Sales Dashboard",
          title_ar: "لوحة مؤشرات الأداء والتحليلات البيانية والمبيعات",
          desc_ar: "رسوم بيانية تفاعلية بـ Chart.js ترصد منحنى المبيعات الشهري، وتوزيع الطلبات الأسبوعية، وعدد العملاء والمنتجات الأكثر مبيعاً.",
          desc: "Interactive Chart.js tracking monthly sales volumes, weekly order distribution, registered customer KPIs, and instant order count.",
          img: "./assets/img/bynona_dash_overview.webp",
          tag: "Analytics & KPIs"
        },
        {
          title: "Product Variants & Attribute Specification Engine",
          title_ar: "محرك خصائص ومتغيرات المنتجات (Variants Engine)",
          desc_ar: "واجهة إدارية مخصصة لضبط أسعار التجزئة، والمخزون الافتتاحي، ورفع صور المعرض، وإضافة سمات ومواصفات ديناميكية (ألوان ومقاسات وخامات).",
          desc: "Administrative form enabling retail pricing, opening stock thresholds, main and gallery media uploads, and dynamic custom physical attributes per variant.",
          img: "./assets/img/bynona_dash_variants.webp",
          tag: "Dynamic Variants"
        },
        {
          title: "Bilingual Product & Catalog Engine",
          title_ar: "إدارة الكتالوج وإدخال المنتجات ثنائية اللغة (AR / EN)",
          desc_ar: "واجهة إدخال وتعديل بيانات المنتجات مع دعم كامل للعناوين والوصف ثنائي اللغة، والربط بالماركات والتصنيفات وتحديد قنوات البيع.",
          desc: "Full administrative CRUD interface for bilingual product specifications (Arabic & English), brand and category mapping, and sales channel assignment.",
          img: "./assets/img/bynona_dash_catalog.webp",
          tag: "Catalog & Bilingual CRUD"
        },
        {
          title: "Category Matrix & Drag-and-Drop Reordering",
          title_ar: "إدارة شجرة الأقسام وإعادة الترتيب بالسحب والإفلات",
          desc_ar: "دليل إدارة الأقسام والتصنيفات مع إمكانية التعديل والحذف، وزر مخصص لإعادة ترتيب ظهور الأقسام والبنرات في التطبيق بالسحب والإفلات (AJAX).",
          desc: "Hierarchical category table with rapid CRUD, activation toggles, and dedicated drag-and-drop sort controller for home store display.",
          img: "./assets/img/bynona_dash_categories.webp",
          tag: "Category Tree"
        }
      ],
      problem: "Wholesale and retail businesses often struggle with unified platforms: B2B buyers require tiered bulk pricing and minimum order quantities (MOQs), while retail consumers demand standard single-unit purchases and promotions. Managing complex multi-variant products (sizes, colors, specs) alongside deep nested categories caused query bloat, data inconsistencies, and stock discrepancy errors during concurrent checkouts.",
      problem_ar: "واجهت الشركات صعوبة في دمج عمليات البيع بالجملة والتجزئة في منصة واحدة: يحتاج تجار الجملة إلى حد أدنى للكميات (MOQ) وأسعار مخفضة مخصصة، بينما يحتاج عملاء التجزئة إلى شراء بالقطعة وعروض ترويجية سريعة. كما أن المنتجات ذات الخصائص المتعددة (الألوان والمقاسات والمواصفات) مع التصنيفات الشجرية العميقة كانت تتسبب في ثقل الاستعلامات (N+1)، وتضارب كميات المخزون عند الدفع المتزامن.",
      solution: "Engineered a robust Laravel architecture featuring custom `PriceModeMiddleware` that inspects the `Price-Mode` header to seamlessly pivot between retail and wholesale pricing, discounts, and minimum order validation. Built an extensible attribute/property variant model (`properties` and `variantAttributes`), implemented recursive category tree resolution with cycle prevention in `ProductFilterController`, constructed a bespoke custom-coded Blade administration dashboard with 4-table join KPI analytics, wrapped checkout in atomic database transactions (`DB::beginTransaction`) with automated stock decrements and restoration upon order cancellation, and created bulk Excel + ZIP import pipelines.",
      solution_ar: "تطوير معمارية برمجية متماسكة بلارافيل تعتمد على Middleware مخصص (`PriceModeMiddleware`) للتبديل السلس بين وضعي البيع بالتجزئة والجملة وتطبيق الحد الأدنى والخصومات الخاصة بكل نوع تلقائياً. تصميم محرك خصائص وسمات ديناميكي للمتغيرات، وخوارزمية فك وحل شجرة الأقسام المتداخلة برمجياً مع منع التكرار اللانهائي، وبناء لوحة تحكم إدارية برمجية مخصصة بالكامل (Custom Code عبر Blade) دون الاعتماد على لوحات جاهزة، وتأمين عمليات الدفع وحسم المخزون ضمن معاملات قاعدة بيانات ذرية (DB::beginTransaction) مع الاسترجاع التلقائي للمخزون عند إلغاء الطلب، وبناء أداة استيراد المنتجات الكبيرة عبر ملفات Excel وفك ضغط حزم الصور ZIP.",
      responsibilities: [
        "Architected and implemented the `PriceModeMiddleware` ensuring transparent dynamic switching between retail and wholesale catalog pricing, cart validation, and order pipelines.",
        "Designed the dynamic variant attributes data model (`AttributeDefinition`, `AttributeValue`, `Property`) enabling rich multi-variant specs per product with isolated SKU inventory tracking.",
        "Engineered the recursive category hierarchy algorithm (`getAllCategoryIds`) with visited-node guards to prevent infinite loops during deep catalog filtering.",
        "Constructed transactional checkout workflows (`DB::beginTransaction`) with live inventory validation, safe decrementing, automated cart pruning, and complete stock restoration upon order cancellation.",
        "Built a 100% custom-coded Blade administrative dashboard (Custom Code without pre-packaged admin generators) featuring today's sales KPIs, multi-table joins for top-selling products, and dynamic category reordering.",
        "Integrated Firebase Cloud Messaging (FCM HTTP v1) via Google Service Account authentication for instant order updates and admin broadcast push notifications.",
        "Developed bulk Excel and ZIP product import/export tools (`ProductExcelController`), extracting zipped product galleries and associating images with newly generated product variants."
      ],
      responsibilities_ar: [
        "بناء وتطبيق Middleware مخصص (`PriceModeMiddleware`) لإدارة التسعير المزدوج (قطاعي / جملة) في الفهارس والسلة والدفع والتحقق من الحد الأدنى للطلب (MOQ).",
        "تصميم وهندسة محرك السمات والمتغيرات (`AttributeDefinition`, `AttributeValue`, `Property`) لدعم منتجات بمواصفات وألوان ومقاسات متعددة بمخزون وأسعار مستقلة.",
        "تطوير خوارزمية استعلام شجرة الأقسام الهرمية (`getAllCategoryIds`) مع حماية ضد الحلقات التكرارية لتصفية المنتجات في الأقسام الرئيسية والفرعية بكفاءة.",
        "تنفيذ مسار دفع ذري (`DB::beginTransaction`) يتحقق من المخزون اللحظي، ويخصم الكميات، وينظف السلة، ويعيد المخزون تلقائياً إلى المستودع عند إلغاء الطلب.",
        "تصميم وبرمجة لوحة تحكم إدارية مخصصة برمجياً بالكامل (Custom Code عبر Blade) تتضمن مؤشرات أداء يومية، واستعلامات متقدمة لأكثر المنتجات مبيعاً، ورسوماً بيانية للإيرادات.",
        "دمج خدمة إشعارات Firebase Cloud Messaging (FCM HTTP v1) بالاعتماد على Google Service Account لإرسال تنبيهات لحظية بتحديثات حالة الطلبات والحملات الإعلانية.",
        "بناء نظام استيراد وتصدير المنتجات الجماعي عبر Excel وملفات ZIP المضغوطة (`ProductExcelController`) لمعالجة آلاف المنتجات وربط الصور بمتغيراتها تلقائياً."
      ],
      architecture: [
        { layer: "Client Apps & Storefront", layer_ar: "تطبيقات الواجهة والمستخدم", desc: "Mobile Application & Web Storefront consuming RESTful APIs with Price-Mode and Accept-Language headers", desc_ar: "تطبيقات الهواتف الذكية وواجهة المتجر الإلكتروني تتصل بـ REST API مع ترويسات Price-Mode و Accept-Language" },
        { layer: "Custom Blade Admin Dashboard", layer_ar: "لوحة التحكم الإدارية (Custom Code Blade)", desc: "100% custom-coded administrative dashboard with bespoke KPI joins, drag-and-drop category sorting, and Excel+ZIP media unpacking", desc_ar: "لوحة تحكم إدارية برمجية مخصصة بالكامل (Custom Code عبر Blade) بكود مخصص دون حزم خارجية، تتضمن استعلامات ربط للمبيعات، وإعادة ترتيب الأقسام، واستيراد الإكسل والصور" },
        { layer: "Security, Auth & Pricing Gateway", layer_ar: "بوابة الأمان والتحقق والتسعير", desc: "Sanctum token scopes, OTP mobile verification, rate limiting, and PriceModeMiddleware context switching", desc_ar: "مصادقة Sanctum، والتحقق عبر OTP للهاتف، ومعدل الطلبات (Rate Limiting)، وتبديل سياق البيع عبر PriceModeMiddleware" },
        { layer: "Catalog & Recursive Filter Engine", layer_ar: "محرك الكتالوج والفلترة الشجرية", desc: "Recursive category tree resolver, dynamic variant attributes, and multi-facet filtering without N+1 queries", desc_ar: "محلل شجرة التصنيفات المتداخلة، وسمات المتغيرات الديناميكية، وفلترة متعددة الأبعاد خالية من مشاكل N+1" },
        { layer: "Transactional Checkout & Inventory", layer_ar: "مسار الدفع الذري وإدارة المخزون", desc: "Atomic DB transactions for order placement, instant stock decrements, and automated rollback upon cancellations", desc_ar: "معاملات ذرية (DB::beginTransaction) لإنشاء الطلبات وحسم المخزون فورياً مع استرجاعه تلقائياً عند الإلغاء" },
        { layer: "Integration & Persistence (MySQL)", layer_ar: "التكاملات وقاعدة البيانات (MySQL)", desc: "Firebase Cloud Messaging (FCM HTTP v1), normalized schema with compound indexes, and media storage paths", desc_ar: "إشعارات Firebase FCM الفورية، ومخطط علائقي منضبط مع مفاتيح خارجية وفهارس مركبة ومسارات تخزين الصور" }
      ],
      databaseSchema: [
        { table: "categories", relations: "self-referencing tree (parent_id), hasMany: products, sort_order", relations_ar: "شجرة أقسام هرمية ذاتية المرجع (parent_id)؛ متعدد: المنتجات، ترتيب العرض" },
        { table: "products", relations: "belongsTo: brand; hasMany: properties (variants)", relations_ar: "ينتمي إلى: العلامة التجارية (brand)؛ متعدد: خصائص ومتغيرات المنتج (properties)" },
        { table: "properties", relations: "belongsTo: product; hasMany: variantAttributes, offers; stock, retail_price, wholesale_price", relations_ar: "متغيرات المنتج: ينتمي إلى المنتج؛ متعدد: السمات، العروض؛ المخزون، وسعر التجزئة، وسعر الجملة" },
        { table: "attribute_definitions", relations: "hasMany: attribute_values (e.g. Color, Size, Storage)", relations_ar: "تعريف السمات الأساسية (اللون، المقاس، السعة التخزينية)؛ متعدد: القيم" },
        { table: "attribute_values", relations: "belongsTo: attribute_definition; belongsToMany: properties", relations_ar: "قيم السمات (أحمر، XL، 256GB)؛ علاقة متعدد لمتعدد مع المتغيرات" },
        { table: "orders", relations: "belongsTo: user, governorate; hasMany: items; status, total_price", relations_ar: "الطلبات: ينتمي إلى المستخدم والمحافظة؛ متعدد: عناصر الطلب؛ الحالة، إجمالي السعر" },
        { table: "orders_items", relations: "belongsTo: order, property; quantity, price, sale_type (retail/wholesale)", relations_ar: "عناصر الطلب: ينتمي للطلب والمتغير؛ الكمية، السعر، ونوع البيع (تجزئة/جملة)" },
        { table: "carts & cart_items", relations: "active cart per user; items track quantity and sale_type with live stock checks", relations_ar: "السلات النشطة لكل مستخدم مع تتبع الكميات ونوع البيع والتحقق اللحظي من المخزون" },
        { table: "offers", relations: "belongsTo: property/product; discount_retail, discount_wholesale, start, end dates", relations_ar: "العروض الترويجية: خصومات مخصصة للقطاعي والجملة مع تواريخ بدء وانتهاء زمنية" },
        { table: "user_fcm_tokens", relations: "belongsTo: user; device push notification tokens for Firebase v1", relations_ar: "توكنات أجهزة المستخدمين لإرسال إشعارات Firebase Cloud Messaging الفورية" }
      ],
      challenges: [
        {
          challenge: "Unified Catalog Serving Both Retail (B2C) and Wholesale (B2B) Channels with Distinct Business Rules.",
          challenge_ar: "توحيد منصة الكتالوج لتخدم عملاء التجزئة والتجار بالجملة في آن واحد بقواعد تسعير مختلفة.",
          solution: "Architected a custom `PriceModeMiddleware` that dynamically inspects the `Price-Mode` header, binding the active mode to the container. The cart and checkout engines enforce minimum order quantities (MOQ) for wholesale buyers while adjusting prices and applying dedicated wholesale discount campaigns.",
          solution_ar: "بناء `PriceModeMiddleware` يفحص ترويسة الطلب ويحقن نوع البيع في سياق التطبيق. يضبط النظام أسعار المنتجات ويطبق الحد الأدنى للطلب (MOQ) وحملات خصومات الجملة للتجار، مع إتاحة الشراء الفردي الحر لعملاء التجزئة."
        },
        {
          challenge: "Navigating and Filtering Complex Multi-Level Hierarchical Categories without Performance Degradation or Recursive Loops.",
          challenge_ar: "تصفية المنتجات داخل تصنيفات شجرية عميقة متعددة المستويات دون استنزاف موارد السيرفر أو الوقوع في حلقات تكرار.",
          solution: "Implemented an optimized recursive category resolution algorithm (`getAllCategoryIds`) guarded with a visited-node tracker in `ProductFilterController`. Combined this with clean Eloquent eager loading (`with(['brand', 'variants.variantAttributes', 'variants.offers'])`) ensuring sub-75ms response times across deep category trees.",
          solution_ar: "هندسة خوارزمية تتبعية (`getAllCategoryIds`) بمصفوفة حماية ضد الحلقات التكرارية لجلب جميع المنتجات في القسم المطلوب وأقسامه الفرعية بدقة، مع دمج التحميل المسبق (Eager Loading) للعلامات التجارية والسمات والعروض للقضاء على بطء الاستعلامات."
        },
        {
          challenge: "Maintaining Strict Stock Integrity During Concurrent Checkouts and Handling Order Cancellations.",
          challenge_ar: "ضمان دقة وسلامة المخزون عند الدفع المتزامن واسترجاع الكميات تلقائياً عند إلغاء الطلبات.",
          solution: "Enforced atomic database transactions (`DB::beginTransaction`) during checkout with immediate inventory decrements on variant records (`Property::decrement('stock')`). Implemented automated stock reversal and Soft-Delete restoration in `OrderController::cancelOrder` alongside instant Firebase push alerts.",
          solution_ar: "تأمين دورة الدفع بمعاملات ذرية (`DB::beginTransaction`) تخصم كميات المخزون فورياً من متغيرات المنتجات، مع برمجة آلية استرجاع المخزون واستعادة السجلات المحذوفة تلقائياً عند إلغاء المسؤول للطلب وإشعار العميل فورياً عبر Firebase."
        }
      ],
      results: "Delivered a high-performance commercial backend powering dual retail and wholesale commerce, with zero inventory discrepancy incidents, sub-75ms API response times, and automated catalog spreadsheet management.",
      results_ar: "تسليم بنية تحتية تجارية متكاملة وفعالة تدعم البيع بالتجزئة والجملة، بدون أي تضارب في المخزون، وبزمن استجابة فائق للـ API أقل من 75ms، مع أتمتة كاملة لإدارة الكتالوج والطلبات.",
      dashboard: {
        badge: "Custom-Coded Blade Engine",
        badge_ar: "كود Blade مخصص 100%",
        title: "Bynona Operations & Wholesale Management Dashboard",
        title_ar: "لوحة تحكم بينونة الإدارية المخصصة (Custom-Coded Blade Engine)",
        summary: "A 100% bespoke administrative control center engineered from scratch with native Laravel Blade, Bootstrap, and Chart.js without third-party admin generator bloat. Built specifically for high-speed wholesale arithmetic, dynamic category tree sorting, and raw 4-table SQL joins.",
        summary_ar: "لوحة تحكم إدارية برمجية مبنية ومصممة من الصفر بنسبة 100% باستخدام Laravel Blade وBootstrap وChart.js دون الاعتماد على أي حزم جاهزة أو مولدات لوحات تحكم. صُممت لتحقيق أعلى سرعة استجابة، وحسابات أرباح وتخفيضات الجملة المخصصة، ومعالجة حزم الصور والميديا مباشرة.",
        framework: "Laravel 11 + Blade Templates + Chart.js + MySQL Joins",
        framework_ar: "لارافيل 11 + قوالب Blade مخصصة + Chart.js + استعلامات MySQL مركبة",
        mockupImage: "./assets/img/bynona_dash_showcase.webp",
        modules: [
          {
            title: "Product Catalog Management (CRUD & Variants)",
            title_ar: "إدارة المنتجات والكتالوج (إضافة، تعديل، حذف، خصائص، مخزون)",
            desc: "Full administrative control over product creation, multi-image gallery uploads, category linking, and Soft Delete protection so historical order references remain intact.",
            desc_ar: "تحكم إداري كامل في إضافة وتعديل وحذف المنتجات، ورفع صور المعارض، وربطها بالتصنيفات، مع الحذف الآمن (Soft Deletes) للحفاظ على سلامة سجلات وفواتير الطلبات السابقة.",
            actions: [
              "إضافة منتجات جديدة مع تفاصيل الوصف والصور والمواصفات",
              "تعديل وتحديث بيانات المنتجات والأسعار والمخزون لحظياً",
              "حذف المنتجات بأمان (Soft Delete) لحماية سجلات وفواتير الطلبات السابقة",
              "إدارة السمات الديناميكية (الألوان، المقاسات، الخامات) لكل متغير مستقل",
              "ضبط مستويات المخزون وتعيين تنبيهات تلقائية عند اقتراب النفاد"
            ]
          },
          {
            title: "Dual-Pricing & Wholesale Margins",
            title_ar: "إدارة التسعير المزدوج وهوامش ربح الجملة",
            desc: "Dedicated control screens allowing operations managers to configure retail prices versus wholesale discount tiers and minimum order quantities (MOQ) per variant.",
            desc_ar: "شاشات تحكم مخصصة تتيح لمدير العمليات ضبط أسعار التجزئة مقابل أسعار الجملة المخفضة، وتحديد الحد الأدنى للكميات (MOQ) لكل متغير مستقل.",
            actions: [
              "تحديد سعر بيع القطاعي وسعر بيع الجملة لكل منتج ومتغير مستقل",
              "تعيين الحد الأدنى للكمية (MOQ) المطلوب شراؤها للاستفادة من أسعار الجملة",
              "إدارة فترات وهوامش الخصم لعملاء B2B والتجار"
            ]
          },
          {
            title: "Categories & Drag-and-Drop Sorting",
            title_ar: "إدارة شجرة الأقسام والترتيب بالسحب والإفلات",
            desc: "Hierarchical category tree management supporting unlimited sub-levels, category activation/deactivation, and interactive drag-and-drop homepage reordering via AJAX.",
            desc_ar: "إدارة شجرة التصنيفات الهرمية (رئيسية وفرعية) بلا حدود، وتفعيل أو إخفاء أي قسم، وإعادة ترتيب ظهور الأقسام والبنرات بالسحب والإفلات وحفظ فوري عبر AJAX.",
            actions: [
              "إضافة وتعديل وحذف التصنيفات الرئيسية والفرعية",
              "إعادة ترتيب ظهور الأقسام والبنرات في التطبيق بالسحب والإفلات فورياً",
              "تفعيل وتعطيل ظهور الأقسام والماركات التجارية بضغطة زر واحدة"
            ]
          },
          {
            title: "Orders & Fulfillment Pipeline",
            title_ar: "إدارة الطلبات والمبيعات والمخزون الراجع",
            desc: "Real-time order processing lifecycle from pending to delivered, distinguishing retail from wholesale invoices with automatic inventory reversal upon cancellation.",
            desc_ar: "متابعة دورة حياة الطلبات (جديد، قيد التجهيز، مشحون، مكتمل)، والتمييز بين فواتير التجزئة وفواتير الجملة، مع الاسترجاع التلقائي للمخزون عند الإلغاء.",
            actions: [
              "استعراض وتصفية الطلبات حسب الحالة (جديد، قيد التنفيذ، مكتمل، ملغي)",
              "تعديل حالة الشحن وتحديث مسار التوصيل للعميل فورياً",
              "طباعة فواتير البيع وبوالص الشحن",
              "إلغاء الطلب مع استرجاع كميات المخزون المحسومة تلقائياً إلى المستودع"
            ]
          },
          {
            title: "Bulk Excel Ingestion & ZIP Extraction",
            title_ar: "إدارة الاستيراد الجماعي بـ Excel وفك حزم الصور (ZIP)",
            desc: "Batch processing pipeline to import or bulk-update thousands of catalog products via Maatwebsite Excel spreadsheets while unzipping media bundles on the fly.",
            desc_ar: "معالجة جماعية لاستيراد وتحديث آلاف المنتجات والأسعار دفعة واحدة عبر ملفات Excel، وفك حزم الصور المضغوطة (ZIP) على السيرفر وربطها تلقائياً.",
            actions: [
              "رفع ملفات Excel لاستيراد أو تحديث آلاف الأصناف والأسعار دفعة واحدة",
              "رفع ملفات ZIP المضغوطة للصور وفكها وربطها بمتغيرات المنتجات تلقائياً",
              "سجل أخطاء تفاعلي لتصحيح الصفوف غير المكتملة في ملفات الإكسل"
            ]
          },
          {
            title: "Live KPI Analytics & Top Sellers",
            title_ar: "مؤشرات الأداء اللحظية وأكثر الأصناف مبيعاً",
            desc: "Interactive Chart.js visualizations tracking daily gross revenues, comparing retail vs. wholesale revenue split, with 4-table SQL joins for top seller items.",
            desc_ar: "رسوم بيانية تفاعلية بـ Chart.js تحسب إيرادات اليوم والشهر بدقة، وتفصل مبيعات التجزئة عن الجملة، مع تقارير للأصناف الأكثر مبيعاً باستعلامات SQL مركبة.",
            actions: [
              "رسوم بيانية للإيرادات اليومية والشهرية مفصولة بين قطاعي وجملة",
              "مؤشرات الأصناف الأكثر مبيعاً ومعدلات نفاد المخزون (4-Table Joins)",
              "إحصائيات إجمالية للطلبات المكتملة ومتوسط قيمة السلة الشرائية"
            ]
          }
        ],
        screenshots: [
          {
            title: "Executive KPIs & Sales Dashboard",
            title_ar: "لوحة مؤشرات الأداء والتحليلات البيانية والمبيعات",
            desc_ar: "رسوم بيانية تفاعلية بـ Chart.js ترصد منحنى المبيعات الشهري، وتوزيع الطلبات الأسبوعية، وعدد العملاء والمنتجات الأكثر مبيعاً.",
            desc: "Interactive Chart.js tracking monthly sales volumes, weekly order distribution, registered customer KPIs, and instant order count.",
            img: "./assets/img/bynona_dash_overview.webp",
            tag: "Analytics & KPIs"
          },
          {
            title: "Product Variants & Attribute Specification Engine",
            title_ar: "محرك خصائص ومتغيرات المنتجات (Variants Engine)",
            desc_ar: "واجهة إدارية مخصصة لضبط أسعار التجزئة، والمخزون الافتتاحي، ورفع صور المعرض، وإضافة سمات ومواصفات ديناميكية (ألوان ومقاسات وخامات).",
            desc: "Administrative form enabling retail pricing, opening stock thresholds, main and gallery media uploads, and dynamic custom physical attributes per variant.",
            img: "./assets/img/bynona_dash_variants.webp",
            tag: "Dynamic Variants"
          },
          {
            title: "Bilingual Product & Catalog Engine",
            title_ar: "إدارة الكتالوج وإدخال المنتجات ثنائية اللغة (AR / EN)",
            desc_ar: "واجهة إدخال وتعديل بيانات المنتجات مع دعم كامل للعناوين والوصف ثنائي اللغة، والربط بالماركات والتصنيفات وتحديد قنوات البيع.",
            desc: "Full administrative CRUD interface for bilingual product specifications (Arabic & English), brand and category mapping, and sales channel assignment.",
            img: "./assets/img/bynona_dash_catalog.webp",
            tag: "Catalog & Bilingual CRUD"
          },
          {
            title: "Category Matrix & Drag-and-Drop Reordering",
            title_ar: "إدارة شجرة الأقسام وإعادة الترتيب بالسحب والإفلات",
            desc_ar: "دليل إدارة الأقسام والتصنيفات مع إمكانية التعديل والحذف، وزر مخصص لإعادة ترتيب ظهور الأقسام والبنرات في التطبيق بالسحب والإفلات (AJAX).",
            desc: "Hierarchical category table with rapid CRUD, activation toggles, and dedicated drag-and-drop sort controller for home store display.",
            img: "./assets/img/bynona_dash_categories.webp",
            tag: "Category Tree"
          }
        ]
      }
    },
    {
      id: "proj_wasly",
      slug: "wasly",
      title: "Wasly Platform",
      title_ar: "منصة وصلي للخدمات المنزلية والتوصيل الفوري",
      subtitle: "On-Demand Home Services Booking Engine, Marketplace Delivery & Filament v5 Admin Dashboard",
      subtitle_ar: "منصة حجز خدمات وصيانة منزلية وتوصيل طلبات مع لوحة تحكم إدارية متقدمة بـ Filament",
      category: "Services & Delivery",
      category_ar: "خدمات وتوصيل فوري",
      featured: true,
      status: "Live",
      status_ar: "مكتمل ويعمل (Live)",
      year: "2024 - 2025",
      role: "Lead Backend Developer & System Architect",
      role_ar: "مهندس برمجيات Backend ومصمم معمارية النظام",
      coverImage: "./assets/img/wasly_showcase.webp",
      thumbnail: "./assets/img/wasly_showcase.webp",
      description: "An enterprise on-demand super-app backend combining scheduled home services booking (plumbing, electrical, cleaning, maintenance) with a multi-vendor delivery marketplace. Features an interactive Filament v5 Admin Panel with Filament Shield (RBAC) and Spatie Activitylog audit trails, a bidirectional appointment reschedule negotiation engine, shopping cart and checkout pipelines with dynamic coupon vouchers, and real-time Firebase Cloud Messaging (FCM) notifications.",
      description_ar: "منصة وتطبيق متكامل (Super-App) يدمج بين حجز الخدمات والصيانة المنزلية المجدولة (سباكة، كهرباء، نظافة، صيانة فنية) ومتجر إلكتروني متعدد التجار لطلب وتوصيل المنتجات. تتميز المنصة بلوحة تحكم إدارية متطورة مبنية بـ Filament v5 مع صلاحيات Filament Shield وسجلات تدقيق كاملة بـ Spatie Activitylog، ومحرك تفاوض ثنائي ذكي لإعادة جدولة المواعيد بين العميل ومقدم الخدمة، ومسار سلة ودفع إلكتروني متكامل مع نظام كوبونات الخصم، وتنبيهات فورية عبر Firebase FCM.",
      shortDescription: "On-demand home services booking and multi-vendor delivery engine featuring Filament v5 Admin Panel, reschedule negotiation, and Firebase FCM alerts.",
      shortDescription_ar: "محرك حجز خدمات وصيانة منزلية وتوصيل طلبات مع لوحة تحكم إدارية شاملة بـ Filament، ونظام إعادة جدولة ذكي، وإشعارات Firebase.",
      technologies: ["Laravel 12/13", "PHP 8.3", "Filament v5", "Filament Shield", "MySQL", "REST APIs", "Laravel Sanctum", "Firebase FCM", "Spatie Permissions", "Spatie Activitylog"],
      liveUrl: "https://wasly-two.vercel.app/",
      githubUrl: "",
      isPrivate: true,
      privateNotice: "Source code is private due to client commercial agreement. Technical architecture and case study details available below.",
      privateNotice_ar: "الكود المصدري محمي باتفاقية سرية تجارية للعميل. التفاصيل المعمارية ودراسة الحالة التقنية معروضة بالأسفل.",
      metrics: {
        views: 1150,
        caseStudyOpens: 620,
        liveDemoClicks: 290,
        githubClicks: 0,
        inquiries: 22
      },
      problem: "Managing simultaneous on-demand services (electricians, plumbers, cleaners) alongside physical e-commerce delivery requires two completely distinct operational models: time-slotted calendar appointments with provider availability versus immediate product inventory dispatch. Previous systems suffered from appointment scheduling collisions, difficult reschedule negotiations between customers and providers, and a lack of granular administrative control over multi-role permissions and audit logs.",
      problem_ar: "إدارة الحجوزات المنزلية الفورية (سباكة، كهرباء، صيانة) بالتزامن مع متجر إلكتروني لتوصيل السلع يتطلب نموذجين تشغيليين مختلفين تماماً: مواعيد تقويمية مجدولة حسب توفر الفنيين، مقابل مسار شراء فوري للسلع من المستودعات. كانت الأنظمة السابقة تعاني من تضارب مواعيد الفنيين، وصعوبة إعادة الجدولة والتفاوض على المواعيد البديلة، وغياب لوحة تحكم مركزية متطورة لإدارة الصلاحيات وتدقيق العمليات التشغيلية.",
      solution: "Architected a unified Laravel backend leveraging a decoupled Domain Service Layer (20+ dedicated service classes). Engineered a dynamic provider calendar engine (`AvailableDay` / `AvailableTime`) paired with a bidirectional reschedule negotiation state machine (`suggestReschedule` and `acceptReschedule`). Implemented a comprehensive Filament v5 Admin Control Center equipped with Filament Shield (Spatie RBAC), Filament Language Switch (AR/EN), Spatie Activitylog audit tracking, and real-time KPI overview widgets. Delivered instant Firebase Cloud Messaging push alerts for appointment updates and order dispatches.",
      solution_ar: "هندسة معمارية متكاملة بلارافيل تعتمد على طبقة خدمات مستقلة (أكثر من 20 Service مخصصة). برمجة محرك تقويم ومواعيد ديناميكي لمقدمي الخدمات مع آلة حالات ذكية للتفاوض الثنائي على إعادة جدولة المواعيد مع التحقق التلقائي من المواعيد البديلة. بناء لوحة تحكم مركزية متطورة بـ Filament v5 مدعومة بـ Filament Shield للصلاحيات الدقيقة، وتبديل اللغات الفوري، وسجلات Spatie Activitylog لتتبع كل حركة في النظام مع بطاقات إحصائيات حية، بالإضافة لدمج إشعارات Firebase FCM الفورية لكافة أطراف المنصة.",
      responsibilities: [
        "Architected a modular Domain Service Layer with 20+ specialized domain services isolating business logic from API controllers.",
        "Built the Home Services Booking Engine with dynamic calendar availability (`AvailableDay`, `AvailableTime`) and live slot allocation.",
        "Engineered the bidirectional appointment reschedule negotiation workflow (`suggestReschedule` and `acceptReschedule`) with state guards and automatic push alerts.",
        "Developed the comprehensive Filament v5 Admin Dashboard with custom KPI widgets (`StatsOverview`, `BookingsChart`, `OrdersChart`), multi-language toggle (Arabic/English), and granular role-based permissions via Filament Shield.",
        "Integrated Spatie Activitylog to maintain a tamper-proof audit trail of booking status transitions, order dispatches, and administrative overrides.",
        "Built the multi-vendor marketplace pipeline featuring product catalog management, cart handling, checkout with coupon validation, and regional delivery fee calculation (Governorates & Centers).",
        "Implemented Firebase Cloud Messaging (`kreait/firebase-php`) sending immediate push alerts for booking confirmations, reschedule proposals, and order lifecycle changes."
      ],
      responsibilities_ar: [
        "بناء وتصميم معمارية طبقة الخدمات (Domain Service Layer) بأكثر من 20 خدمة مستقلة لعزل منطق الأعمال تماماً عن الـ Controllers.",
        "تطوير محرك حجز الخدمات المنزلية بجدولة زمنية ديناميكية للمواعيد (`AvailableDay`, `AvailableTime`) وتخصيص المواعيد المتاحة لكل مقدم خدمة.",
        "برمجة دورة تفاوض ذكية لإعادة جدولة المواعيد (`suggestReschedule` و `acceptReschedule`) بين العميل ومقدم الخدمة مع حماية مسار الحالات وإشعارات فورية.",
        "تطوير لوحة تحكم إدارية متكاملة بـ Filament v5 مع بطاقات مؤشرات أداء حية (`StatsOverview`, `BookingsChart`, `OrdersChart`) وتبديل فوري للغات، ونظام صلاحيات متقدم بـ Filament Shield.",
        "دمج Spatie Activitylog لتسجيل وتدقيق كافة التغييرات على الحجوزات والطلبات والتدخلات الإدارية لحظة بلحظة.",
        "بناء مسار التجارة والتوصيل للمنتجات مع إدارة السلة، والتحقق من كوبونات الخصم، واحتساب رسوم التوصيل وفق المحافظات والمراكز الجغرافية.",
        "تكامل إشعارات Firebase Cloud Messaging الفورية عبر حزمة kreait لإرسال تنبيهات لحظية بتأكيد الحجوزات ومقترحات المواعيد وتحديثات الطلبات."
      ],
      architecture: [
        { layer: "Mobile Client & API Gateway", layer_ar: "تطبيقات الهواتف وبوابة الـ API", desc: "Customer & Provider Mobile Apps consuming Sanctum-authenticated REST APIs with SetLang middleware and multi-device session control", desc_ar: "تطبيقات العملاء ومقدمي الخدمة تتصل بواجهات REST مؤمنة بـ Sanctum مع ترويسة اللغة وإدارة الجلسات على أجهزة متعددة" },
        { layer: "Filament v5 Admin Panel", layer_ar: "لوحة التحكم الإدارية (Filament v5)", desc: "Enterprise operations center with Filament Shield RBAC, Filament Language Switch, and live KPI analytics widgets", desc_ar: "مركز إدارة العمليات مبني بـ Filament v5 مع صلاحيات Filament Shield وتبديل اللغات وبطاقات مؤشرات الأداء الحية" },
        { layer: "Domain Service Layer", layer_ar: "طبقة خدمات النطاق (Service Layer)", desc: "20+ single-responsibility domain services (BookingService, ProviderService, OrderService, CheckoutService, CouponService)", desc_ar: "أكثر من 20 كلاس خدمة مستقل يعزل منطق العمليات للحجوزات، والطلبات، والأسعار، والكوبونات" },
        { layer: "Booking & Reschedule Engine", layer_ar: "محرك الحجوزات وإعادة الجدولة", desc: "Calendar availability slot matching and bidirectional reschedule proposal negotiation state machine", desc_ar: "تخصيص المواعيد في التقويم وآلة حالات تفاوضية ثنائية لاقتراح وقبول المواعيد البديلة بين الطرفين" },
        { layer: "Audit Logging & Firebase FCM", layer_ar: "سجلات التدقيق وإشعارات Firebase", desc: "Spatie Activitylog event tracking and Firebase Cloud Messaging (FCM) live push alerts across mobile devices", desc_ar: "تسجيل كافة التغييرات والتدخلات بـ Spatie Activitylog وإرسال تنبيهات Firebase اللحظية على الأجهزة" },
        { layer: "Persistence (MySQL)", layer_ar: "قاعدة البيانات (MySQL)", desc: "Relational schema linking users, providers, home services, time slots, orders, coupons, and regional delivery zones", desc_ar: "مخطط علائقي منضبط يربط المستخدمين، ومقدمي الخدمات، والمواعيد، والطلبات، والكوبونات، والمناطق الجغرافية" }
      ],
      databaseSchema: [
        { table: "users & providers", relations: "User accounts, provider profiles, working hours, and operational center links", relations_ar: "حسابات المستخدمين، وملفات مقدمي الخدمات مع ساعات العمل ومناطق التغطية" },
        { table: "services & service_images", relations: "Catalog of home and technical services with base pricing and media previews", relations_ar: "كتالوج الخدمات المنزلية والصيانة مع الأسعار الأساسية ومعرض الصور" },
        { table: "available_days & available_times", relations: "Dynamic calendar slots per provider and service with time allocations", relations_ar: "مواعيد وأيام العمل المتاحة لكل مقدم خدمة مع الفترات الزمنية المحددة" },
        { table: "bookings", relations: "Appointments tracking status (pending, accepted, reschedule states, cancelled) and notes", relations_ar: "حجوزات الخدمات ومتابعة الحالات (معلق، مقبول، مقترح جدولة، ملغي) وملاحظات المشكلة" },
        { table: "products & product_images", relations: "Marketplace merchandise catalog associated with vendors and categories", relations_ar: "كتالوج منتجات المتاجر ومقدمي الخدمة مع التصنيفات والصور" },
        { table: "orders & order_items", relations: "Product delivery purchases with governorate routing and delivery addresses", relations_ar: "طلبات توصيل المنتجات مع تفاصيل العنوان والمحافظة وحالة الشحن" },
        { table: "carts & cart_items", relations: "Active user shopping carts with real-time quantity calculations", relations_ar: "سلات التسوق النشطة للمستخدمين مع حساب الإجماليات والكميات لحظياً" },
        { table: "coupons", relations: "Discount codes with expiry dates, minimum spend, and usage count limits", relations_ar: "كوبونات الخصم الترويجية مع تواريخ الصلاحية والحد الأدنى وحدود الاستخدام" },
        { table: "governorates & centers", relations: "Geographic routing hierarchy for delivery fee calculations and hub dispatching", relations_ar: "المحافظات والمراكز الجغرافية لتحديد نطاقات التغطية ورسوم الشحن والتوصيل" },
        { table: "reviews", relations: "4-tier rating model supporting reviews on Products, Services, Providers, and App", relations_ar: "نظام تقييم رباعي يدعم تقييم المنتجات، الخدمات، مقدمي الخدمة، وتجربة التطبيق" },
        { table: "activity_log", relations: "Spatie audit log tracking actor IDs, mutated fields, and event timelines", relations_ar: "سجل التدقيق البرمجي Spatie Activitylog لتتبع معرف المنفذ والحقول المعدلة" },
        { table: "app_notifications", relations: "In-app notification ledger and user device tokens for Firebase FCM alerts", relations_ar: "سجل الإشعارات الداخلي وتوكنات Firebase FCM لإرسال التنبيهات الفورية" }
      ],
      challenges: [
        {
          challenge: "Two-Way Reschedule Negotiation & Schedule Conflicts in On-Demand Home Services",
          challenge_ar: "التفاوض الثنائي على إعادة جدولة المواعيد ومنع تضارب الفترات الزمنية في الخدمات المنزلية",
          description: "Customers and technicians frequently encounter sudden schedule conflicts. Rigid booking systems force outright cancellations, creating operational friction and lost revenue.",
          challenge_ar: "يواجه العملاء والفنيون تغييرات طارئة في المواعيد؛ وتجبر الأنظمة الجامدة الأطراف على إلغاء الحجز بالكامل مما يسبب فقداناً للأرباح وتجربة سيئة.",
          solution: "Architected a stateful reschedule proposal engine in `BookingService`. Either party can suggest an alternate time slot (`AvailableTime::firstOrCreate`). The booking transitions into `reschedule_by_provider` or `reschedule_by_customer` without cancelling, and upon mutual acceptance, atomically commits the new slot within a DB transaction and dispatches an instant FCM notification.",
          solution_ar: "هندسة محرك اقتراح وإعادة جدولة ذكي داخل `BookingService`. يمكن لأي طرف اقتراح موعد بديل يدخل حالة تفاوض (`reschedule_by_provider` أو `reschedule_by_customer`) دون إلغاء الحجز، وعند موافقة الطرف الآخر يتم تحديث الموعد ذرياً في معاملة بنكية وإرسال إشعار فوري عبر Firebase."
        },
        {
          challenge: "Unifying High-Frequency Service Bookings with Physical E-Commerce Product Deliveries",
          challenge_ar: "دمج حجوزات الخدمات الفورية مع متجر إلكتروني لبيع وتوصيل السلع في منصة موحدة",
          description: "Service bookings require dynamic technician time-slot validation and problem descriptions, whereas product orders require cart mechanics, stock limits, coupon discounts, and regional delivery routing.",
          challenge_ar: "تتطلب حجوزات الخدمات مطابقة مواعيد الفنيين ووصف الأعطال، بينما تتطلب طلبات السلع سلة تسوق ومخزوناً، وحساب كوبونات الخصم، وتحديد رسوم الشحن حسب المحافظات والمراكز.",
          solution: "Decoupled logic into 20+ specialized domain services (`BookingService` vs. `CartService`, `CheckoutService`, and `CouponService`). This separation of concerns maintains clean architecture while allowing customer carts to checkout product orders seamlessly alongside service appointments.",
          solution_ar: "فصل منطق العمليات إلى أكثر من 20 خدمة مستقلة (`BookingService` منفصلة عن `CartService` و `CheckoutService` و `CouponService`). هذا العزل ضمن معمارية نظيفة تتيح للعميل طلب المنتجات وتطبيق الكوبونات وحجز الفنيين في نفس التطبيق بسلاسة تامة."
        },
        {
          challenge: "Building a Multi-Tenant Administrative Control Center with Granular RBAC and Complete Auditability",
          challenge_ar: "بناء لوحة تحكم إدارية متعددة الأدوار مع صلاحيات دقيقة وسجل تدقيق شامل للعمليات",
          description: "Operations teams needed complete visibility into orders, service bookings, provider approvals, and support messages, while enforcing strict permission barriers between team roles and logging every administrative action.",
          challenge_ar: "احتاج فريق العمليات إلى رؤية كاملة للحجوزات، والطلبات، واعتماد مقدمي الخدمات، مع ضرورة فرض حواجز صلاحيات صارمة بين الأدوار وتوثيق كل تغيير إداري.",
          solution: "Implemented an enterprise administrative dashboard using Filament v5 with Filament Shield (Spatie RBAC) for role-based permission matrices, Filament Language Switch for instant Arabic/English localization, Spatie Activitylog to record every model change and status mutation, and custom KPI widgets (`StatsOverview`, `BookingsChart`, `OrdersChart`).",
          solution_ar: "تطوير لوحة تحكم إدارية متقدمة بـ Filament v5 بالاعتماد على Filament Shield لإدارة صلاحيات الأدوار بدقة، وتبديل اللغات الفوري، وربطها بـ Spatie Activitylog لتسجيل كل تعديل إداري مع مؤشرات أداء ورسوم بيانية حية للإيرادات والحجوزات."
        }
      ],
      results: "Delivered an all-in-one on-demand platform managing hundreds of monthly home service appointments and marketplace deliveries with an intuitive Filament v5 control center, zero appointment collision errors, and instantaneous FCM push updates.",
      results_ar: "إطلاق ناجح لمنصة شاملة تدير مئات الحجوزات المنزلية ومبيعات المنتجات شهرياً، مع لوحة تحكم إدارية فائقة الكفاءة بـ Filament v5، وانعدام تام لتضارب المواعيد بفضل آلة التفاوض الذكية، وإشعارات فورية متزامنة عبر Firebase.",
      dashboard: {
        badge: "Filament v5 Panel",
        badge_ar: "لوحة Filament v5",
        title: "Wasly Enterprise Operations Center (Filament v5)",
        title_ar: "لوحة تحكم وصلي المركزية للعمليات (Filament v5 Admin Panel)",
        summary: "A high-performance operations and dispatch control center architected using Filament v5 on the modern TALL stack (Tailwind, Alpine, Laravel, Livewire). Designed for high concurrency service monitoring, technician calendar scheduling, and granular role-based security.",
        summary_ar: "مركز عمليات متقدم لإدارة وتوجيه الخدمات مبني باستخدام Filament v5 على بيئة TALL المتطورة. صُممت اللوحة للتعامل مع كثافة العمليات التشغيلية، ومراقبة تقويم الفنيين، والتفاوض على مواعيد الصيانة، مع نظام صلاحيات أمني دقيق متعدد المستويات.",
        framework: "Filament v5 + Filament Shield + Filament Language Switch + Spatie Activitylog",
        framework_ar: "لارافيل + Filament v5 + Filament Shield (RBAC) + Spatie Activitylog",
        mockupImage: "./assets/img/wasly_dash_showcase.webp",
        modules: [
          {
            title: "Marketplace & Products Catalog (CRUD & Inventory)",
            title_ar: "إدارة المنتجات والمتاجر (إضافة، تعديل، حذف، صور، مخزون)",
            desc: "Complete administrative control over marketplace merchandise, merchant assignments, dynamic price tags, and inventory replenishment with Soft Delete protection.",
            desc_ar: "تحكم إداري كامل في إضافة وتعديل وحذف المنتجات والمستلزمات، وربطها بالمتاجر والتصنيفات، مع الحذف الآمن (Soft Deletes) لحماية سجلات وفواتير الطلبات.",
            actions: [
              "إضافة منتجات ومستلزمات جديدة مع المواصفات والأسعار والأقسام",
              "تعديل وتحديث بيانات السلع والمخزون المتاح والخصومات لحظياً",
              "حذف السلع بأمان (Soft Delete) لمنع فقدان بيانات الطلبات والفواتير السابقة",
              "رفع وإدارة معارض صور المنتجات وتعيين الصورة الرئيسية",
              "متابعة وإدارة تقييمات ومراجعات العملاء للمنتجات مع إمكانية الحجب أو النشر"
            ]
          },
          {
            title: "Home Services & Technician Booking Hub",
            title_ar: "إدارة حجوزات الخدمات الفورية ومحرك إعادة الجدولة",
            desc: "Comprehensive scheduling and dispatch command center for home maintenance (plumbing, electricity, cleaning) with real-time slot locking and bidirectional reschedule negotiation.",
            desc_ar: "مركز عمليات متكامل لحجوزات الخدمات الفورية والصيانة المنزلية، وتعيين الفنيين، وإدارة دورة التفاوض الثنائي على المواعيد البديلة مع إشعارات FCM فورية.",
            actions: [
              "استعراض وفرز الحجوزات حسب الحالة (معلق، مقبول، قيد التنفيذ، مكتمل، ملغي)",
              "تعيين وتوجيه الفنيين المتخصصين للحجوزات وفق التوفر المكاني والزمني",
              "إدارة مقترحات إعادة الجدولة وقبول أو رفض المواعيد البديلة دون إلغاء الحجز",
              "إلغاء الحجوزات مع تدوين الأسباب وإشعار الأطراف تلقائياً عبر Firebase"
            ]
          },
          {
            title: "Service Providers & Technicians Directory",
            title_ar: "إدارة الفنيين ومقدمي الخدمات وساعات العمل",
            desc: "Full credentialing and availability management for technicians, covering KYC verification, working day/hour rules, and geographic dispatch zones.",
            desc_ar: "إدارة ملفات الفنيين والتحقق من الهويات، وضبط ساعات وأيام العمل (AvailableDay / AvailableTime)، وتحديد مراكز ونطاقات التغطية الجغرافية.",
            actions: [
              "إضافة واعتماد حسابات الفنيين ومراجعة تراخيص مزاولة المهنة",
              "تعديل وضبط جداول وأوقات الدوام المتاحة لكل فني أسبوعياً",
              "تحديد وتعديل مناطق ومراكز التغطية الجغرافية للفنيين",
              "إيقاف أو تجميد حسابات مقدمي الخدمات المخالفين للشروط التشغيلية"
            ]
          },
          {
            title: "Promotional Coupons & Discount Engine",
            title_ar: "إدارة كوبونات الخصم والعروض الترويجية",
            desc: "Rule-based coupon creation engine supporting percentage/fixed discounts, minimum basket thresholds, expiration triggers, and maximum usage counters.",
            desc_ar: "محرك ديناميكي لإنشاء وضبط كوبونات الخصم الترويجية بنسب مئوية أو مبالغ ثابتة مع قيود الاستخدام وصلاحية زمنية محددة.",
            actions: [
              "إنشاء كوبونات خصم جديدة وتحديد كود الخصم (Promo Code)",
              "تعديل وتحديد نوع الخصم (نسبة مئوية أو خصم مالي ثابت)",
              "ضبط شروط الكوبون: تاريخ البداية والانتهاء، والحد الأدنى للإنفاق، وحد أقصى للاستخدام",
              "حذف أو تعطيل الكوبونات المنتهية ومتابعة تقارير الاستخدام الفعلي"
            ]
          },
          {
            title: "Orders & Regional Delivery Dispatch",
            title_ar: "إدارة طلبات التوصيل والتوجيه الجغرافي",
            desc: "End-to-end merchandise order lifecycle from checkout to regional hub fulfillment, with dynamic delivery fee calculations based on governorates and centers.",
            desc_ar: "متابعة شاملة لطلبات الشراء من السلة حتى التوصيل، وتعيين مسؤولي التوصيل، وتحديث مسارات الشحن واحتساب رسوم التوصيل الجغرافية.",
            actions: [
              "متابعة وفرز طلبات الشراء وتعديل حالات الشحن والتسليم",
              "تحديد وتعديل تسعيرة التوصيل حسب المحافظات والمراكز الجغرافية",
              "طباعة الفواتير وبوالص الشحن وتتبع معلومات استلام العميل",
              "إلغاء الطلبات ومعالجة استرداد المبالغ وتحديث المخزون"
            ]
          },
          {
            title: "Role-Based Access Control (Filament Shield) & Audit Trails",
            title_ar: "منظومة الصلاحيات (Filament Shield) وسجلات التدقيق (Activitylog)",
            desc: "Granular multi-role security matrices isolating super-admins, service dispatchers, store managers, and accountants, combined with tamper-proof event logs.",
            desc_ar: "عزل صلاحيات دقيق بين المشرفين العامين ومسؤولي التوجيه ومدراء المتاجر والمحاسبين، مع سجل تدقيق يوثق كل تغيير بدقة ومقارنة Before/After.",
            actions: [
              "إنشاء وتعديل الأدوار والصلاحيات (Roles & Permissions) بمصفوفة Filament Shield",
              "تخصيص صلاحيات الوصول لكل مستخدم إداري بدقة (عرض فقط، إنشاء، تعديل، حذف)",
              "تتبع سجل النشاط والتدقيق (Spatie Activitylog) مع توثيق قيم ما قبل وما بعد التعديل",
              "تبديل فوري لواجهة لوحة التحكم بين العربية (RTL) والإنجليزية بنقرة واحدة"
            ]
          }
        ],
        screenshots: [
          {
            title: "Operations Hub & Real-time KPI Widgets",
            title_ar: "مركز العمليات وبطاقات مؤشرات الأداء الحية (StatsOverview)",
            desc_ar: "إحصائيات حية للمبيعات المكتملة، ومبيعات اليوم، وإجمالي الطلبات قيد الانتظار، وإجمالي الحجوزات بالجنيه المصري.",
            desc: "Real-time statistics covering completed sales, today's revenue, pending orders, and total service bookings in EGP.",
            img: "./assets/img/wasly_dash_overview.webp",
            tag: "Overview"
          },
          {
            title: "Marketplace Catalog & Excel Import/Export",
            title_ar: "إدارة كتالوج المنتجات والاستيراد والتصدير بـ Excel",
            desc_ar: "جدول المنتجات والمستلزمات مع التصفية بين منتجات الأدمن ومقدمي الخدمات، وخيارات الاستيراد والتصدير الجماعي بـ Excel/CSV.",
            desc: "Merchandise catalog data-table with multi-source filtering across admin & provider products and bulk Excel import/export.",
            img: "./assets/img/wasly_dash_products.webp",
            tag: "Products"
          },
          {
            title: "Home Services & Marketplace Categories",
            title_ar: "هيكل شجرة الأقسام وتصنيفات الخدمات والمنتجات",
            desc_ar: "تصنيف الخدمات (سوبر ماركت، خدمات منزلية، خضروات وفواكه، إلكترونيات) مع عداد الأقسام الفرعية ومؤشر الحالة النشطة.",
            desc: "Hierarchical category taxonomy for maintenance services and retail merchandise with subcategory counts and active switches.",
            img: "./assets/img/wasly_dash_categories.webp",
            tag: "Categories"
          },
          {
            title: "Verified Service Providers & Technicians Roster",
            title_ar: "دليل واعتماد مقدمي الخدمات والشركات والفنيين",
            desc_ar: "إدارة واعتماد مراكز السباكة والتكييف والنظافة والكهرباء، مع الصور التوضيحية وساعات العمل والمناطق التشغيلية.",
            desc: "Verified technician and service center registry managing credentialing, photo galleries, working hours, and operational dispatch hubs.",
            img: "./assets/img/wasly_dash_providers.webp",
            tag: "Providers"
          },
          {
            title: "Home Services Bookings & Appointments Hub",
            title_ar: "إدارة حجوزات الخدمات الفورية والمواعيد التقويمية",
            desc_ar: "متابعة وتوجيه طلبات الحجز الفورية برقم الطلب واسم العميل، وتعيين الفنيين، والتعامل مع مقترحات إعادة الجدولة.",
            desc: "Interactive appointments ledger monitoring booking status, customer identities, and technician schedule dispatching.",
            img: "./assets/img/wasly_dash_bookings.webp",
            tag: "Bookings"
          },
          {
            title: "Marketplace Orders & Regional Dispatch",
            title_ar: "إدارة وتتبع طلبات الشراء والتوصيل الفوري",
            desc_ar: "متابعة دورة حياة الطلبات (ORD)، وإجماليات الأسعار بالجنيه المصري، وتوجيه الشحن حسب المحافظات والمراكز.",
            desc: "Order processing pipeline with order codes, financial totals in EGP, delivery tracking, and regional dispatch fulfillment.",
            img: "./assets/img/wasly_dash_orders.webp",
            tag: "Orders"
          }
        ]
      }
    },
    {
      id: "proj_kcode",
      slug: "kcode",
      title: "KCODE E-Commerce",
      title_ar: "متجر KCODE للعناية الكورية",
      subtitle: "Korean Skincare & Smart Skin Assessment E-Commerce Platform",
      subtitle_ar: "متجر عناية كورية ومنصة تقييم ذكي للبشرة وتجارة إلكترونية",
      category: "E-Commerce",
      category_ar: "تجارة إلكترونية",
      featured: true,
      status: "Live",
      status_ar: "مكتمل ويعمل (Live)",
      year: "2026",
      role: "Full-Stack Backend Architect",
      role_ar: "مطور Backend ومصمم النظام (System Architect)",
      coverImage: "./assets/img/kcode_showcase.webp",
      thumbnail: "./assets/img/kcode_showcase.webp",
      description: "A specialized Korean beauty and derma skincare e-commerce platform built for the GCC market (Oman), featuring an algorithmic 4-step skin assessment questionnaire, multi-currency checkout, and high-performance product catalog caching.",
      description_ar: "منصة تجارة إلكترونية متخصصة في منتجات العناية بالبشرة الكورية لمنطقة الخليج (سلطنة عمان)، تشتمل على محرك تقييم ذكي للبشرة من 4 خطوات لمطابقة المكونات الفعالة، وبوابة دفع متعددة العملات مع كاشينج فائق السرعة للكتالوج.",
      shortDescription: "Korean skincare e-commerce platform with a 4-step smart skin diagnostic engine, routine matching, and regional logistics.",
      shortDescription_ar: "متجر إلكتروني للعناية الكورية مع محرك تشخيص وتقييم ذكي للبشرة وتوصيات روتين مخصصة.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Filament V3", "Redis", "REST APIs", "Sanctum", "Stripe", "AI Assistant", "Excel Sync"],
      liveUrl: "https://kcode-pied.vercel.app/",
      adminUrl: "https://kcodeskin.com/admin",
      githubUrl: "",
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
      responsibilities_ar: [
        "تصميم مخطط قواعد بيانات لكتالوج المنتجات مع وسم المكونات النشطة وتصنيف أنواع البشرة والعملات الإقليمية.",
        "بناء محرك تقييم ذكي من 4 خطوات لمطابقة المكونات الفعالة (PDRN، Retinol، Hyaluronic، Exosomes) مع طبيعة بشرة المستخدم.",
        "تطبيق طبقة كاشينج متطورة عبر Redis لتحقيق زمن استجابة أقل من 45ms لصفحات المنتجات تحت الضغط العالي.",
        "تكامل بوابات الدفع الإلكتروني بالبطاقات ومعالجة طلبات الدفع عند الاستلام مع دورة حياة تتبع الشحن في سلطنة عمان والخليج."
      ],
      architecture: [
        { layer: "Client Storefront", layer_ar: "واجهة المتجر الأمامية", desc: "Next.js / Vercel storefront communicating with REST API endpoints", desc_ar: "متجر مبني بـ Next.js يتصل بنقاط نهاية الـ REST API في الباك إند" },
        { layer: "Laravel Commerce Engine", layer_ar: "محرك تجارة لارافيل", desc: "Handles cart lifecycle, multi-currency pricing, and inventory reservation", desc_ar: "إدارة دورة حياة سلة الشراء، التسعير متعدد العملات، وحجز المخزون" },
        { layer: "Skin Diagnostic API", layer_ar: "واجهة تقييم وتشخيص البشرة", desc: "Evaluates questionnaire inputs and calculates ingredient suitability scores", desc_ar: "تحليل إجابات الاستبيان وحساب درجات توافق المكونات النشطة فورياً" },
        { layer: "Cache & Order Dispatch", layer_ar: "الكاش وإسناد الطلبات", desc: "Redis query cache and asynchronous webhook dispatch for payment & SMS notifications", desc_ar: "كاشينج استعلامات Redis وإرسال إشعارات الدفع والرسائل النصية بالخلفية" }
      ],
      databaseSchema: [
        { table: "products", relations: "hasMany: variants, ingredients; belongsTo: brand, category", relations_ar: "متعدد: المتغيرات، المكونات الفعالة؛ ينتمي إلى: البراند، التصنيف" },
        { table: "skin_assessments", relations: "hasMany: questions, answers; produces: routine_recommendations", relations_ar: "متعدد: الأسئلة، الإجابات؛ ينتج: توصيات روتين العناية المخصص" },
        { table: "orders", relations: "belongsTo: customer; hasMany: order_items, payment_transactions", relations_ar: "ينتمي إلى: العميل؛ متعدد: عناصر الطلب، معاملات الدفع" }
      ],
      challenges: [
        {
          challenge: "Calculating instant ingredient suitability across hundreds of catalog SKUs during skin quiz completion.",
          challenge_ar: "حساب درجات التوافق بين المكونات ومئات المنتجات فور إكمال اختبار البشرة دون بطء في الاستجابة.",
          solution: "Pre-indexed ingredient compatibility matrix in Redis hashes, enabling sub-20ms quiz evaluation without hitting relational database joins.",
          solution_ar: "فهرسة مصفوفة توافق المكونات مسبقاً في هياكل Redis Hashes مما أتاح تقييم الاختبار في أقل من 20ms دون الحاجة لعمليات Join معقدة بقاعدة البيانات."
        },
        {
          challenge: "Preventing inventory race conditions during flash discounts on viral skincare serums.",
          challenge_ar: "منع حالات التعارض في المخزون أثناء الخصومات الخاطفة على المنتجات الأكثر طلباً.",
          solution: "Applied pessimistic database locking (`lockForUpdate`) and Redis atomic decrements during checkout confirmation.",
          solution_ar: "استخدام القفل المتشائم لقواعد البيانات (lockForUpdate) مع عمليات الخصم الذري في Redis أثناء تأكيد الدفع."
        }
      ],
      results: "Sub-45ms catalog queries, zero overselling incidents, and an automated skin diagnostic funnel that boosts checkout conversion.",
      results_ar: "سرعة استجابة للكتالوج أقل من 45ms، وانعدام تام لأخطاء تعارض المخزون، مع مضاعفة معدلات التحويل بفضل محرك التقييم الذكي.",
      dashboard: {
        badge: "Filament V3 Commerce Panel",
        badge_ar: "لوحة تحكم Filament V3",
        title: "KCODE Skincare Commerce & AI Diagnostic Engine",
        title_ar: "لوحة تحكم متجر KCODE ومحرك الاستشارات والتشخيص الذكي (Filament Panel)",
        summary: "An advanced Korean skincare e-commerce control panel built on Laravel 11 and Filament V3, orchestrating a 218+ product catalog with SKU pricing in OMR, intelligent 4-step skin assessment quiz routines, AI skincare diagnostic consultations, promo coupon vouchers, customer rating matrices, and bi-directional Excel sync.",
        summary_ar: "لوحة تحكم متقدمة لمتجر العناية الكورية مبنية على Laravel 11 وFilament V3، تدير كتالوجاً يضم أكثر من 218 منتجاً بأسعار الريال العماني (OMR)، ونظام تقييم واختبار البشرة الذكي (Skin Assessment Quiz)، وسجلات استشارات الذكاء الاصطناعي لتشخيص الروتين المخصص، ومحرك أكواد الخصم والكوبونات، ومصفوفة تقييمات العملاء (2967+ تقييم)، والمزامنة ثنائية الاتجاه مع Excel.",
        framework: "Laravel 11 + Filament V3 + Livewire + Redis + OpenAI Engine",
        framework_ar: "لارافيل 11 + Filament V3 + Livewire + Redis + محرك الذكاء الاصطناعي",
        mockupImage: "./assets/img/kcode_dash_showcase.webp",
        url: "https://kcodeskin.com/admin",
        stats: [
          { label: "Active Derma Products", label_ar: "منتجات العناية الكورية", val: "218+", icon: "ri-shopping-bag-3-line" },
          { label: "AI Consultations", label_ar: "استشارات الذكاء الاصطناعي", val: "29+", icon: "ri-robot-2-line" },
          { label: "Customer Ratings", label_ar: "تقييمات ومراجعات العملاء", val: "2,967 (4/5 ⭐)", icon: "ri-star-smile-line" },
          { label: "Active Promo Coupons", label_ar: "أكواد الخصم النشطة", val: "16 Codes", icon: "ri-coupon-3-line" },
          { label: "Excel & Image Sync", label_ar: "مزامنة الكتالوج والصور", val: "Bi-directional", icon: "ri-file-excel-line" }
        ],
        modules: [
          {
            title: "218+ SKU Catalog with Excel Pipeline & Image Mapper",
            title_ar: "إدارة كتالوج المنتجات الكورية (218+ منتج) وربط الصور والإكسل",
            desc: "Comprehensive skincare catalog with SKU indexing, pricing in OMR, stock alerts (14 low stock warnings), best-seller flags, multi-image mapping, and bulk Excel import/export.",
            desc_ar: "كتالوج متكامل لمنتجات العناية بالبشرة الكورية مع فهارس الـ SKU، والتسعير بالريال العماني (OMR)، وتنبيهات نواقص المخزون (14 منتجاً أوشك على النفاد)، وعلامات المنتجات الأكثر مبيعاً، ومولد ربط الصور، واستيراد وتصدير جماعي عبر Excel.",
            actions: [
              "إدارة 218 منتج عناية كورية مع الأسعار الرسمية بالريال العماني وأكواد SKU والمخزون",
              "استيراد وتصدير بيانات المنتجات بالكامل عبر ملفات Excel وCSV بنقرة واحدة",
              "أداة ربط وتعيين الصور (Image Mapper) للربط التلقائي بين صور المنتجات وأكوادها",
              "مفتاح تحكم فوري (Toggle) لتمييز المنتجات الأكثر مبيعاً (Best Seller) في المتجر",
              "رصد فوري لمنتجات المخزون المنخفض (Low Stock) لمنع نفاد المنتجات الأكثر طلباً"
            ]
          },
          {
            title: "AI Skincare Diagnostic Engine & Consultation Logs",
            title_ar: "محرك استشارات وتشخيص البشرة بالذكاء الاصطناعي وسجلات المحادثة",
            desc: "Smart diagnostic logs tracking 29+ active AI consultations, analyzing customer skin profiles, concerns (dryness, acne, hyperpigmentation), and generating personalized day/night routine suggestions.",
            desc_ar: "سجل متقدم لإدارة استشارات الذكاء الاصطناعي (29+ جلسة استشارية)، يحلل مشاكل العملاء (جفاف الشتاء، روتين النضارة، الحبوب) ويقترح فورياً روتيناً صباحياً ومسائياً مخصصاً بمنتجات المتجر.",
            actions: [
              "استعراض وتحليل جلسات المحادثة الذكية بين العملاء ومساعد الذكاء الاصطناعي للبشرة",
              "تتبع استجابات الذكاء الاصطناعي والتوصيات الطبية بالمنتجات المتوافقة مع طبيعة البشرة",
              "الربط المباشر مع استبيان تقييم البشرة (87 اختباراً مكتملاً) لربط المكونات النشطة بالروتين",
              "تحليل شكاوى واحتياجات العملاء الأكثر تكراراً لتوجيه حملات المتجر والمنتجات الجديدة"
            ]
          },
          {
            title: "Order Lifecycle Ledger & Express Regional Dispatch",
            title_ar: "إدارة دورة حياة الطلبات ومعالجة الشحن الإقليمي السريع",
            desc: "Complete order management ledger tracking order codes (KCODE-20260820), customer contact numbers, order statuses (Accepted, Processing, Delivered), totals in OMR, and exportable financial logs.",
            desc_ar: "سجل متكامل لإدارة ومتابعة طلبات المتجر مع أرقام التتبع الرسمية (KCODE-20260820)، وبيانات الاتصال بالعملاء، وتحديث الحالات (مقبول، قيد التنفيذ، تم التوصيل)، والمبالغ الإجمالية، وتصدير السجلات إلى Excel.",
            actions: [
              "تتبع تفاصيل وفواتير طلبات العملاء بالريال العماني وإجمالي المبالغ المدفوعة",
              "تحديث حالات الطلب اللحظية (Approved، Processing، In Transit، Delivered)",
              "تصدير كشوفات الطلبات الإجمالية إلى ملفات Excel للتنسيق مع شركات الشحن والتوصيل",
              "متابعة خيارات الدفع الإلكتروني والدفع عند الاستلام مع مطابقة المبالغ المالية"
            ]
          },
          {
            title: "Promo Codes & Discount Vouchers Engine (16 Active)",
            title_ar: "محرك الكوبونات وأكواد الخصم والعروض الترويجية (16 كود فعال)",
            desc: "Flexible promotion engine managing 16 promo codes with percentage discounts, fixed OMR deductions, minimum spend conditions, usage quotas, and customer targeting.",
            desc_ar: "نظام عروض ترويجية متطور يدير 16 كود خصم نشط بنوعين: خصم نسبي مئوي (Percentage) أو خصم مالي محدد بالريال العماني (Fixed Amount)، مع حدود الاستخدام والتواريخ المستهدفة.",
            actions: [
              "إنشاء وإدارة أكواد الخصم الترويجية وتحديد نسبة الخصم أو القيمة الثابتة بالريال العماني",
              "تحديد فترات صلاحية الكوبونات والحدود القصوى لعدد مرات الاستخدام للعميل الواحد",
              "تفعيل وإيقاف الكوبونات فورياً عبر مفاتيح التحكم السريعة (Status Switch)",
              "ربط الخصومات بمنتجات محددة أو ماركات معينة أو تطبيقه على إجمالي سلة المشتريات"
            ]
          },
          {
            title: "Brand Directory & Verified Customer Rating Matrix (2,967+ Reviews)",
            title_ar: "دليل الماركات الكورية (22 براند) ومصفوفة مراجعات العملاء (4/5 ⭐)",
            desc: "Directory managing 22 premium Korean derma brands (ANUA, COSRX, Medicube, Beauty of Joseon...) paired with a social proof rating system containing 2,967+ verified reviews averaging 4/5 stars.",
            desc_ar: "إدارة دليل يضم 22 براند كوري رائد (مثل ANUA، COSRX، Medicube، Beauty of Joseon) مع شعاراتها ومنتجاتها، مدعوماً بنظام تقييمات موثق يضم 2,967 مراجعة بمعدل 4 من 5 نجوم.",
            actions: [
              "إدارة وتحديث بيانات وشعارات 22 علامة تجارية كورية متخصصة في مستحضرات العناية",
              "مراقبة تقييمات العملاء الموثقة (2,967 تقييم بمعدل 4/5) وفحص آراء المستخدمين",
              "ربط الماركات بالتصنيفات الرئيسية العشرة (غسول، سيروم، تونر، واقي شمس، كريمات)",
              "تصفية وفرز المنتجات بحسب البراند الأكثر مبيعاً والأعلى تقييماً من العملاء"
            ]
          }
        ],
        screenshots: [
          {
            title: "KCODE Operations Command Center & KPI Overview",
            title_ar: "مركز قيادة عمليات KCODE وبطاقات مؤشرات الأداء الحية",
            desc_ar: "لوحة مؤشرات متقدمة تعرض إجمالي الطلبات (19)، واستشارات الذكاء الاصطناعي (29)، والمنتجات (218)، والمخزون المنخفض، والعملاء، والكوبونات، ومتوسط التقييم (4/5 عبر 2,967 مراجعة).",
            desc: "Executive KPI dashboard highlighting orders (19), AI skincare consultations (29), products (218), low stock alerts (14), customer reviews (2,967 ratings at 4/5 stars), and coupons.",
            img: "./assets/img/kcode_dash_overview.webp",
            tag: "Overview"
          },
          {
            title: "Products Catalog & Bulk Excel/Image Mapping Tools",
            title_ar: "كتالوج المنتجات الكورية (218 منتج) وأدوات الإكسل والصور",
            desc_ar: "جدول بيانات تفصيلي لإدارة 218 منتج عناية كورية بالريال العماني (OMR) مع أكواد SKU وحالة المخزون، والمنتجات الأكثر مبيعاً، واستيراد وتصدير Excel، ومولد تعيين الصور.",
            desc: "High-density catalog managing 218 skincare items with OMR pricing, SKU tracking, stock quantities, best-seller toggles, Excel import/export, and image mapper tool.",
            img: "./assets/img/kcode_dash_products.webp",
            tag: "Products"
          },
          {
            title: "Orders Management & Regional Fulfillment Ledger",
            title_ar: "إدارة سجل الطلبات والشحن الإقليمي في سلطنة عمان",
            desc_ar: "سجل الطلبات المتكامل مع أكواد KCODE التتبعية، وأرقام هواتف العملاء، والحالات التشغيلية (Accepted، Pending)، والقيم المالية بالريال العماني، وأزرار التصدير.",
            desc: "Comprehensive order ledger with KCODE tracking numbers, customer phone contacts, fulfillment states, OMR order totals, and instant export tools.",
            img: "./assets/img/kcode_dash_orders.webp",
            tag: "Orders"
          },
          {
            title: "AI Skincare Diagnostic Consultations & Chat Histories",
            title_ar: "استشارات وتشخيص البشرة بالذكاء الاصطناعي وسجلات المحادثة",
            desc_ar: "سجل 29 جلسة استشارية ذكية أجراها العملاء مع مساعد الذكاء الاصطناعي، متضمناً تحليل طبيعة البشرة (جفاف، حبوب، نضارة) واقتراح الروتين المخصص بالمنتجات المتوافقة.",
            desc: "Logs of 29 AI skincare consultations analyzing customer concerns (winter barrier, acne, routines) and recommending active ingredient regimens.",
            img: "./assets/img/kcode_dash_ai_consultations.webp",
            tag: "AI Assistant"
          },
          {
            title: "Promo Codes & Discount Vouchers Engine (16 Active)",
            title_ar: "إدارة الكوبونات وأكواد الخصم والعروض الترويجية (16 كود فعال)",
            desc_ar: "جدول التحكم في 16 كود خصم نشط يدعم الخصومات المئوية والمبالغ الثابتة بالريال العماني مع حدود الاستخدام وتواريخ الصلاحية ومفاتيح التفعيل اللحظية.",
            desc: "Promotion management table orchestrating 16 active coupons with percentage or fixed OMR discounts, usage limits, validity schedules, and status switches.",
            img: "./assets/img/kcode_dash_coupons.webp",
            tag: "Coupons"
          },
          {
            title: "Korean Beauty Brands Directory (22 Brands)",
            title_ar: "دليل العلامات التجارية الكورية المعتمدة (22 براند كوري)",
            desc_ar: "دليل 22 علامة تجارية كورية رائدة (ANUA، COSRX، Medicube، Beauty of Joseon، Haruharu Wonder...) مع شعاراتها وتصنيفاتها ومنتجاتها المرتبطة.",
            desc: "Directory of 22 top Korean derma brands with brand logos, website linkages, and associated catalog SKU counts.",
            img: "./assets/img/kcode_dash_brands.webp",
            tag: "Brands"
          }
        ]
      }
    },
    {
      id: "proj_aqarmousa",
      slug: "aqarmousa",
      title: "AqarMousa Real Estate",
      title_ar: "عقار موسى — منصة العقارات وإدارة العملاء",
      subtitle: "Property Listing Engine & Lead Routing System",
      subtitle_ar: "محرك بحث عقاري ونظام توجيه وتوزيع العملاء المحتملين",
      category: "Real Estate",
      category_ar: "عقارات",
      featured: true,
      status: "Live",
      status_ar: "مكتمل ويعمل (Live)",
      year: "2024",
      role: "Backend Developer",
      role_ar: "مطور Backend",
      coverImage: "./assets/img/aqarmousa_showcase.webp",
      thumbnail: "./assets/img/aqarmousa_showcase.webp",
      description: "A property portal backend supporting multi-agent listings, compound query filtering (budget, location, amenities, property type), and automated lead distribution via WhatsApp Business API.",
      description_ar: "نظام خلفي لمنصة وساطة وإدارة عقارات تدعم تعدد الوسطاء، والبحث المركب المتقدم (الميزانية، الموقع، المزايا، نوع العقار)، مع أتمتة توزيع العملاء عبر WhatsApp Business API.",
      shortDescription: "High-volume property search backend with compound indexes and automated agent lead assignment.",
      shortDescription_ar: "محرك بحث عقاري عالي الأداء مع فهارس مركبة ونظام ذكي لأتمتة توزيع العملاء على الوسطاء.",
      technologies: ["Laravel 11", "PHP 8.3", "MySQL 8.0", "Filament V3", "REST APIs", "Redis Queues", "WhatsApp API", "Excel Sync"],
      liveUrl: "https://aqar-mousa.vercel.app/",
      adminUrl: "https://aqarmousa.com/admin/",
      githubUrl: "",
      isPrivate: true,
      privateNotice: "Commercial client project. Code private; technical case study provided.",
      privateNotice_ar: "مشروع تجاري لعميل. الكود محمي باتفاقية سرية، وتفاصيل دراسة الحالة متاحة.",
      metrics: {
        views: 890,
        caseStudyOpens: 420,
        liveDemoClicks: 175,
        githubClicks: 0,
        inquiries: 14
      },
      problem: "Complex multi-parameter property searches caused slow page renders, and customer leads were lost due to delayed agent assignments.",
      problem_ar: "كانت عمليات البحث العقاري متعددة الفلاتر تستغرق وقتاً طويلاً على قواعد البيانات، كما كان العملاء المهتمون يفقدون المتابعة بسبب التأخر اليدوي في تعيين الوسطاء العقاريين.",
      solution: "Implemented compound index strategies on high-frequency search facets and automated round-robin lead distribution sending WhatsApp notifications to sales agents.",
      solution_ar: "تطبيق استراتيجية فهارس مركبة (Compound Indexes) على معايير البحث الأكثر تكراراً، مع بناء نظام توزيع دوري آلي (Round-Robin) يرسل إشعارات فورية للوسطاء عبر WhatsApp API.",
      responsibilities: [
        "Optimized MySQL search queries across 15+ filter criteria using selective compound index strategy.",
        "Built background media processing queue that resizes, watermarks, and generates WebP thumbnails.",
        "Integrated WhatsApp Business API webhook for instant lead handoffs to sales agents.",
        "Constructed multi-agent listing permissions and automated lead assignment status tracking."
      ],
      responsibilities_ar: [
        "تحسين استعلامات البحث في MySQL عبر أكثر من 15 معيار تصفية باستخدام استراتيجية فهارس مركبة دقيقة.",
        "بناء طابور مهام خلفي لمعالجة الصور وتغيير أحجامها وإضافة العلامات المائية وضغطها إلى صيغة WebP.",
        "تكامل WhatsApp Business API عبر الويب هوك لإرسال تنبيهات فورية بالعملاء المهتمين إلى الوسطاء العقاريين.",
        "بناء نظام صلاحيات للوسطاء وتتبع مسار تعيين وتوزيع العملاء المحتملين تلقائياً."
      ],
      architecture: [
        { layer: "Public Search API", layer_ar: "واجهة البحث العامة", desc: "Facet-filtered property queries with cursor pagination", desc_ar: "استعلامات البحث العقاري متعدد الفلاتر مع الترقيم المستمر (Cursor Pagination)" },
        { layer: "Media Worker", layer_ar: "معالج الوسائط والصور", desc: "Queued background thumbnail generation and progressive WebP compression", desc_ar: "طابور مهام خلفي لإنشاء الصور المصغرة والضغط التلقائي لصيغة WebP" },
        { layer: "Lead Routing Service", layer_ar: "خدمة توجيه العملاء", desc: "Round-robin distribution with instant WhatsApp alert trigger", desc_ar: "توزيع دوري آلي (Round-Robin) مع تنبيهات فورية عبر واتساب" }
      ],
      databaseSchema: [
        { table: "properties", relations: "belongsTo: agent, location; hasMany: images, features", relations_ar: "ينتمي إلى: الوسيط، المنطقة؛ متعدد: الصور، المزايا والمرافق" },
        { table: "leads", relations: "belongsTo: property, assigned_agent; hasMany: interaction_logs", relations_ar: "ينتمي إلى: العقار، الوسيط المعين؛ متعدد: سجلات التفاعل" }
      ],
      challenges: [
        {
          challenge: "Large unoptimized gallery uploads crashed web requests on mobile submissions.",
          challenge_ar: "رفع الصور الكبيرة غير المحسنة من الهواتف كان يسبب تعطل طلبات الويب للمستخدمين.",
          solution: "Offloaded image processing to background queue workers with progressive WebP compression.",
          solution_ar: "ترحيل معالجة الصور إلى طوابير مهام خلفية غير متزامنة مع ضغط تصاعدي WebP."
        },
        {
          challenge: "High-concurrency facet filtering under peak campaign traffic caused table scan contention.",
          challenge_ar: "عمليات التصفية المتزامنة بكثافة أثناء الحملات الإعلانية كانت تسبب بطء فحص الجداول (Table Scans).",
          solution: "Designed compound B-Tree indexes covering (status, city_id, property_type, price) to execute queries entirely within index memory.",
          solution_ar: "تصميم فهارس B-Tree مركبة تغطي معايير البحث الأكثر استخداماً لتنفيذ الاستعلام بالكامل داخل ذاكرة الفهرس."
        }
      ],
      results: "Search query duration dropped by 70%, and lead response time decreased from 4 hours to under 3 minutes.",
      results_ar: "انخفاض زمن استجابة استعلامات البحث بنسبة 70%، وتقلص زمن الرد على العملاء المحتملين من 4 ساعات إلى أقل من 3 دقائق.",
      dashboard: {
        badge: "Filament V3 Admin Panel",
        badge_ar: "لوحة تحكم Filament V3",
        title: "Aqar Mousa Real Estate & Operations Control Center",
        title_ar: "لوحة تحكم عقار موسى المركزية لإدارة العقارات والمحتوى (Filament Panel)",
        description: "An enterprise-grade real estate management portal built on Laravel and Filament, orchestrating 108+ active properties and land parcels, field inspection booking requests, multi-lingual amenities taxonomy, user permission matrices, and Excel bi-directional data synchronization.",
        description_ar: "منصة إدارية متكاملة لإدارة الاستثمار والتطوير العقاري مبنية على Laravel وFilament، تدير أكثر من 108 وحدة وأرض مسجلة، وطلبات المعاينة الميدانية وحجوزات العقارات، وشجرة مرافق الأراضي والعقارات ثنائية اللغة، وصلاحيات المستخدمين، ومزامنة واستيراد/تصدير بيانات الكتالوج عبر Excel.",
        mockupImage: "./assets/img/aqarmousa_dash_showcase.webp",
        url: "https://aqarmousa.com/admin/",
        stats: [
          { label: "Registered Units", label_ar: "الوحدات المسجلة", val: "108+", icon: "ri-home-line" },
          { label: "Inspection Bookings", label_ar: "طلبات المعاينة", val: "3 Active", icon: "ri-calendar-check-line" },
          { label: "Property Amenities", label_ar: "مرافق الأراضي والعقارات", val: "10 Types", icon: "ri-sparkling-line" },
          { label: "Unique Visitors", label_ar: "الزوار الفعليين", val: "450+", icon: "ri-user-star-line" },
          { label: "Excel Pipeline", label_ar: "مزامنة البيانات", val: "Bi-directional", icon: "ri-file-excel-line" }
        ],
        modules: [
          {
            title: "Units & Properties Catalog with Bi-Directional Excel Pipeline",
            title_ar: "إدارة كتالوج الأراضي والوحدات العقارية والمزامنة مع Excel",
            desc: "Comprehensive catalog for residential, commercial, industrial, and agricultural properties with instant live switches, governorate filters, price breakdowns in EGP, and bulk Excel import/export.",
            desc_ar: "كتالوج متكامل لإدارة الأراضي والوحدات (سكنية، تجارية، صناعية، زراعية) مع فلاتر المحافظات، وتحديد نوع العرض (بيع/إيجار)، والأسعار بالجنيه المصري، ومفاتيح ظهور الوحدة الفورية، واستيراد وتصدير البيانات عبر Excel.",
            actions: [
              "إضافة وتعديل بيانات الأراضي والوحدات العقارية بمعرض صور كامل وأسعار دقيقة بالجنيه",
              "تحديد نوع العرض (بيع أو إيجار) وحالة الوحدة (متاحة، مباعة) وتصنيف القسم الجغرافي",
              "استيراد بيانات العقارات جماعياً عبر Excel (Import) وتحميل قالب الإكسيل المعتمد",
              "تصدير بيانات الكتالوج بالكامل إلى ملفات Excel بنقرة واحدة لأغراض التحليل والأرشفة",
              "مفتاح تحكم فوري (Live Toggle) لتفعيل أو إخفاء أي وحدة عقارية من الموقع مباشرة"
            ]
          },
          {
            title: "Field Inspection Bookings & Approval Management",
            title_ar: "إدارة طلبات المعاينة الميدانية ومواعيد زيارة العقارات",
            desc: "Interactive inspections ledger tracking customer visit appointments, assigned locations, and approval workflows for prospective property buyers.",
            desc_ar: "نظام تفاعلي متقدم لمتابعة وإدارة طلبات المعاينة الميدانية للوحدات والأراضي، وتحديد مواعيد الزيارات للعملاء المهتمين، وتحديث حالات الموافقة والاعتماد.",
            actions: [
              "استقبال طلبات المعاينة الميدانية وتتبع مواعيد الزيارات المحددة لكل عميل",
              "تحديد ومعاينة الوحدة العقارية المطلوبة وربطها ببيانات العميل الراغب في الشراء/الإيجار",
              "تحديث ومراجعة حالة طلب المعاينة (بانتظار الموافقة، معتمدة، مكتملة) مع التنبيهات",
              "متابعة مؤشرات المعاينات قيد الانتظار والمعاينات الإجمالية من بطاقات لوحة التحكم الحية"
            ]
          },
          {
            title: "Bilingual Land & Property Amenities Taxonomy",
            title_ar: "إدارة شجرة مرافق الأراضي والعقارات ثنائية اللغة (Arabic/English)",
            desc: "Taxonomy management for infrastructure and amenities (Water Network, Agricultural Irrigation, Security, Paved Roads, Building Permits, Fenced Land) with visual icon badges.",
            desc_ar: "إدارة شاملة لشجرة المرافق والمزايا الميدانية للعقارات والأراضي (شبكة مياه، مياه ري، أمن وحراسة، طريق ممهد، ترخيص بناء، سور محيط) مع الأسماء الإنجليزية والأيقونات التوضيحية.",
            actions: [
              "إنشاء وتعديل مرافق العقارات والأراضي مع دعم كامل للاسم العربي والاسم الإنجليزي",
              "ربط كل مرفق عقاري بأيقونة بصرية معتمدة تظهر في تفاصيل العقار على الموقع",
              "تخصيص المرافق وربطها بالوحدات العقارية لتسهيل الفلترة والبحث المتقدم للعملاء",
              "تعديل وحذف المرافق مع التحقق من ترابط قواعد البيانات وسلامة السجلات"
            ]
          },
          {
            title: "Real-time Operations KPI Widgets & Activity Monitoring",
            title_ar: "بطاقات مؤشرات الأداء الحية ومراقبة زيارات وسجلات الموقع",
            desc: "Executive dashboard widgets displaying registered units, user registrations, review health checks, inspection backlogs, and real-time visitor web traffic analytics.",
            desc_ar: "لوحة إحصائيات متقدمة تعرض إجمالي الوحدات (108 وحدة)، والمستخدمين المسجلين، والمراجعات، وطلبات المعاينة المعلقة، مع عدادات فورية للزوار الفعليين (450+) وإجمالي زيارات الصفحات (2260+).",
            actions: [
              "متابعة إجمالي الوحدات المسجلة والوحدات المعروضة في الوقت الفعلي",
              "مراقبة مؤشرات زوار الموقع الفعليين وزيارات الصفحات وسجلات نشاط العمليات",
              "رصد فوري لطلبات المعاينات قيد الانتظار لاعتمادها وتوجيه الوسطاء لمرافقة العميل",
              "فحص صحة التقييمات ورصد المراجعات الضعيفة لاتخاذ الإجراءات التشغيلية الفورية"
            ]
          },
          {
            title: "User Management & Role-Based Access Control (RBAC)",
            title_ar: "إدارة دليل المستخدمين والصلاحيات والأدوار الإدارية",
            desc: "Granular user roster managing administrators, sales agents, and prospective buyers with phone verification status, governorates, and role assignment matrices.",
            desc_ar: "سجل مستخدمين متكامل يدير حسابات المشرفين، والوسطاء، والمشترين، مع التحقق من أرقام الهواتف وتحديد المحافظات والصلاحيات الإدارية وتصدير البيانات.",
            actions: [
              "إدارة حسابات المستخدمين والمشرفين (Super Admin، مشتري، وسيط عقاري)",
              "تتبع أرقام الهواتف وحالة تفعيل الحسابات والبريد الإلكتروني والمحافظات المسجلة",
              "إسناد وتعديل الأدوار والصلاحيات لحماية العمليات الإدارية الحساسة",
              "تصدير سجل المستخدمين المعتمد إلى ملفات Excel بنقرة زر واحدة"
            ]
          }
        ],
        screenshots: [
          {
            title: "Operations Hub & Real-time Real Estate KPI Widgets",
            title_ar: "مركز العمليات وبطاقات مؤشرات الأداء العقاري الحية",
            desc_ar: "إحصائيات حية لعدد الوحدات المسجلة (108 وحدة)، والمستخدمين المسجلين، وطلبات المعاينة قيد الانتظار، وزوار الموقع الفعليين، وإجمالي زيارات الصفحات.",
            desc: "Real-time statistics covering registered property units (108 units), users, pending inspection requests, unique site visitors, and total page impressions.",
            img: "./assets/img/aqarmousa_dash_overview.webp",
            tag: "Overview"
          },
          {
            title: "Real Estate Units Catalog & Excel Bulk Pipeline",
            title_ar: "إدارة كتالوج الوحدات والعقارات واستيراد/تصدير Excel",
            desc_ar: "جدول بيانات تفصيلي لإدارة الأراضي السكنية والتجارية والصناعية والزراعية مع فلاتر المحافظة، ونوع العرض (بيع/إيجار)، والأسعار بالجنيه، ومفتاح ظهور الوحدة، وقوالب Excel.",
            desc: "Full property units ledger managing residential, commercial, industrial, and agricultural lands with governorate filters, pricing in EGP, status toggles, and Excel sync.",
            img: "./assets/img/aqarmousa_dash_units.webp",
            tag: "Units"
          },
          {
            title: "Property Inspections & Booking Management",
            title_ar: "إدارة طلبات المعاينة الميدانية وحجوزات العقارات",
            desc_ar: "متابعة وإدارة طلبات المعاينة الميدانية للوحدات والأراضي، وتحديد مواعيد الزيارات للعملاء المهتمين، وتحديث حالة الموافقة والاعتماد.",
            desc: "On-site property inspection appointments workflow tracking customer schedules, assigned unit details, and real-time approval status.",
            img: "./assets/img/aqarmousa_dash_inspections.webp",
            tag: "Inspections"
          },
          {
            title: "Land & Property Amenities Taxonomy",
            title_ar: "هيكل وتصنيف مرافق الأراضي والعقارات ثنائي اللغة",
            desc_ar: "إدارة شجرة المرافق والمزايا الميدانية (شبكة مياه، مياه ري، أمن وحراسة، طريق ممهد، ترخيص بناء، سور محيط) مع الترجمة الإنجليزية والأيقونات المخصصة.",
            desc: "Bilingual infrastructure facilities taxonomy (Water Network, Agricultural Irrigation, Security, Paved Roads, Building Permits) with custom badge icons.",
            img: "./assets/img/aqarmousa_dash_amenities.webp",
            tag: "Amenities"
          },
          {
            title: "Property Classification & Unit Types Taxonomy",
            title_ar: "هيكل تصنيف أنواع الوحدات وتصنيفات العقارات",
            desc_ar: "إدارة أنواع العقارات (أراضي سكنية، تجارية، زراعية، صناعية، فلل، شقق) وضبط خصائص العرض والفرز عبر النظام.",
            desc: "Property taxonomy hierarchy categorizing residential, commercial, agricultural, and industrial property archetypes.",
            img: "./assets/img/aqarmousa_dash_types.webp",
            tag: "Unit Types"
          },
          {
            title: "User Accounts & Role-Based Access Control",
            title_ar: "دليل المستخدمين وإدارة الصلاحيات والأدوار الإدارية",
            desc_ar: "إدارة حسابات المشرفين والوسطاء والمشترين، وتتبع أرقام الهواتف والمحافظات، مع صلاحيات الوصول وتصدير البيانات.",
            desc: "User management ledger managing administrators, buyers, phone verifications, governorates, and role assignment matrices with Excel export.",
            img: "./assets/img/aqarmousa_dash_users.webp",
            tag: "Users & Roles"
          }
        ]
      }
    },
    {
      id: "proj_pharmacare",
      slug: "pharmacare-pro",
      title: "PharmaCare Pro",
      title_ar: "نظام فارما كير لإدارة الصيدليات",
      subtitle: "Pharmacy Inventory & Batch Expiry Tracking System",
      subtitle_ar: "إدارة مخزون الأدوية وتتبع تواريخ الصلاحية والتشغيلات",
      category: "Healthcare",
      category_ar: "رعاية صحية ومخازن",
      featured: false,
      status: "Live",
      status_ar: "مكتمل ويعمل (Live)",
      year: "2024",
      role: "Backend & Internal Dashboard Developer",
      role_ar: "مطور Backend ولوحات تحكم",
      coverImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      description: "A pharmacy management backend handling batch number tracking, expiry date alerts, barcode scanning integration, and automated low-stock reorder triggers.",
      description_ar: "نظام خلفي لإدارة سلاسل الصيدليات يتعامل مع تتبع أرقام التشغيلات، وتنبيهات انتهاء الصلاحية المبكرة، وتكامل مسح الباركود، وإعادة الطلب التلقائي للأدوية التي قاربت على النفاد.",
      shortDescription: "Healthcare inventory system tracking batch numbers, expiration alerts, and barcode sales.",
      shortDescription_ar: "نظام مخزون صيدلاني لتتبع أرقام التشغيلات (Batches)، وتنبيهات انتهاء الصلاحية، والمبيعات بالباركود.",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Filament-inspired UI", "Barcode Integration"],
      liveUrl: "https://pharmacare-demo.eldeisty.dev",
      githubUrl: "",
      isPrivate: false,
      metrics: {
        views: 620,
        caseStudyOpens: 295,
        liveDemoClicks: 140,
        githubClicks: 85,
        inquiries: 9
      },
      problem: "Pharmacies losing revenue from expired medication batches and dispensing errors due to manual stock entry.",
      problem_ar: "خسارة الصيدليات لإيرادات كبيرة بسبب انتهاء صلاحية الأدوية على الأرفف وتكرار أخطاء الصرف اليدوي للأدوية المشابهة.",
      solution: "Engineered batch-level stock allocation (FIFO: First-In-First-Out) where POS checkouts automatically deduct from the earliest expiring batch.",
      solution_ar: "هندسة تخصيص المخزون وفق سياسة الوارد أولاً يُصرف أولاً (FIFO) بحيث يتم تلقائياً خصم المبيعات من التشغيلة الأقرب لانتهاء الصلاحية، مع واجهة فحص باركود فائقة السرعة.",
      responsibilities: [
        "Designed batch tracking schema linking barcodes to specific supplier shipments and expiration dates.",
        "Built low-stock threshold watcher dispatching automated reorder drafts to pharmacy managers.",
        "Implemented high-speed barcode lookup API averaging under 30ms response time."
      ],
      responsibilities_ar: [
        "تصميم هيكل بيانات لتتبع التشغيلات وربط الباركود بشحنات الموردين وتواريخ الصلاحية.",
        "بناء مراقب تلقائي للحد الأدنى من المخزون يرسل مسودات إعادة الطلب لمديري الصيدليات.",
        "برمجة واجهة برمجة تطبيقات لمسح الباركود بزمن استجابة أقل من 30ms."
      ],
      architecture: [
        { layer: "Barcode POS Endpoint", layer_ar: "واجهة مسح الباركود ونقاط البيع", desc: "High-speed cached lookup by EAN-13 barcode", desc_ar: "استعلام فائق السرعة عبر كاش الذاكرة باستخدام باركود EAN-13" },
        { layer: "FIFO Inventory Engine", layer_ar: "محرك مخزون الوارد أولاً يُصرف أولاً (FIFO)", desc: "Selects nearest expiry batch for dispensing", desc_ar: "اختيار وصرف التشغيلة الأقرب لتاريخ انتهاء الصلاحية تلقائياً" },
        { layer: "Stock Alert Cron", layer_ar: "مجدول مهام تنبيهات المخزون (Cron)", desc: "Daily evaluation of expiration windows (30/60/90 days)", desc_ar: "فحص يومي مؤتمت لنوافذ انتهاء الصلاحية (خلال 30 و 60 و 90 يوماً)" }
      ],
      databaseSchema: [
        { table: "medicines", relations: "hasMany: batches", relations_ar: "متعدد (hasMany): التشغيلات (batches)" },
        { table: "batches", relations: "batch_number, expiry_date, quantity, cost_price", relations_ar: "رقم التشغيلة، تاريخ الصلاحية، الكمية، سعر التكلفة" },
        { table: "dispensations", relations: "belongsTo: batch, prescription", relations_ar: "ينتمي إلى: التشغيلة، الروشتة الطبية" }
      ],
      challenges: [
        {
          challenge: "Rapid checkout during peak clinic hours required near-zero latency barcode scans.",
          challenge_ar: "البيع السريع في ساعات الذروة كان يتطلب استجابة فورية لمسح الباركود بزمن يقترب من الصفر.",
          solution: "Cached active inventory lookups in memory, batch-updating sales in atomic background DB transactions.",
          solution_ar: "تخزين بيانات الأدوية النشطة في الذاكرة المؤقتة، وتحديث المبيعات كحزم مجمعة ضمن معاملات بنكية ذرية في الخلفية."
        }
      ],
      results: "Virtually eliminated expired stock losses and reduced prescription fulfillment time by 45%.",
      results_ar: "القضاء شبه التام على خسائر الأدوية المنتهية الصلاحية وخفض زمن تجهيز وصرف الروشتات بنسبة 45%."
    }
  ],

  technologies: [
    // Backend
    { id: "tech_php", name: "PHP", category: "Backend", level: "Primary", experience: "2+ Years", icon: "code", featured: true, description: "Modern PHP 8.2 & 8.3: Type safety, Enums, Fibers, Attributes, and strict OOP design." },
    { id: "tech_laravel", name: "Laravel", category: "Backend", level: "Primary", experience: "2+ Years", icon: "layers", featured: true, description: "Full-spectrum Laravel: Eloquent ORM, Service Layer, Queues, Events, Middleware, and Artisan CLI." },
    { id: "tech_apis", name: "REST APIs", category: "Backend", level: "Primary", experience: "2+ Years", icon: "git-commit", featured: true, description: "API design, versioning, API Resources, rate limiting, and RFC 7807 error responses." },
    { id: "tech_sanctum", name: "Laravel Sanctum", category: "Backend", level: "Primary", experience: "2+ Years", icon: "shield", featured: true, description: "Token-based authentication, token ability scopes, SPA cookie sessions, and revocation." },
    { id: "tech_services", name: "Service Architecture", category: "Backend", level: "Primary", experience: "2+ Years", icon: "cpu", featured: true, description: "Decoupled domain business logic, single-responsibility services, and repository patterns." },
    { id: "tech_analysis", name: "System & Project Analysis", name_ar: "تحليل النظم والمشاريع", category: "Backend", level: "Primary", experience: "2+ Years", icon: "clipboard", featured: true, description: "Requirements gathering, architectural scoping, business workflow modeling, and system specification.", description_ar: "جمع المتطلبات، النمذجة الهيكلية لمسارات العمل، وتوصيف المعمارية البرمجية للأنظمة قبل التنفيذ." },
    { id: "tech_queues", name: "Queues & Jobs", category: "Backend", level: "Strong", experience: "2 Years", icon: "clock", featured: true, description: "Asynchronous processing, failure handling, Redis driver, and job chaining." },
    
    // Database
    { id: "tech_mysql", name: "MySQL", category: "Database", level: "Primary", experience: "2+ Years", icon: "database", featured: true, description: "Relational schema modeling, foreign keys, compound indexes, and ACID transactions." },
    { id: "tech_migrations", name: "Migrations & Seeders", category: "Database", level: "Primary", experience: "2+ Years", icon: "file-text", featured: false, description: "Repeatable schema lifecycles, zero-downtime column adjustments, and realistic test seeders." },
    { id: "tech_optimization", name: "Query Optimization", category: "Database", level: "Strong", experience: "2 Years", icon: "zap", featured: true, description: "EXPLAIN plan analysis, resolving N+1 queries via eager loading, and selective indexing." },
    { id: "tech_redis", name: "Redis", category: "Database", level: "Strong", experience: "1.5 Years", icon: "server", featured: false, description: "In-memory caching, queue transport, rate-limiting counters, and session storage." },

    // Admin & UI
    { id: "tech_filament", name: "Filament Admin", category: "Admin / UI", level: "Strong", experience: "1.5 Years", icon: "layout", featured: true, description: "Custom resource panels, table filters, bulk actions, and form schemas." },
    { id: "tech_blade", name: "Blade & AJAX", category: "Admin / UI", level: "Primary", experience: "2+ Years", icon: "monitor", featured: false, description: "Reusable Blade components, dynamic DOM manipulation, and JSON fetch calls." },
    { id: "tech_axios", name: "Axios", name_ar: "Axios (أكسيوس)", category: "Admin / UI", level: "Primary", experience: "2+ Years", icon: "send", featured: true, description: "Promise-based HTTP client for browser and Node.js, interceptors, request cancelation, and API handling.", description_ar: "مكتبة HTTP Client معتمدة على الوعود (Promises)، إعداد المعترضات (Interceptors)، وإدارة اتصالات الـ REST APIs بكفاءة." },
    { id: "tech_vanillajs", name: "Vanilla JavaScript", category: "Admin / UI", level: "Strong", experience: "2+ Years", icon: "terminal", featured: true, description: "ES6+, asynchronous DOM workflows, custom event buses, and client-side state." },
    { id: "tech_css", name: "Modern CSS", category: "Admin / UI", level: "Strong", experience: "2+ Years", icon: "palette", featured: false, description: "Flexbox, CSS Grid, custom properties, responsive breakpoints, and animations." },

    // Infrastructure & Hosting
    { id: "tech_servers", name: "Web Hosting & Deployment", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "server", featured: true, description: "Website deployment, hosting configuration, DNS management, SSL certificates, MySQL databases, and production environment setup.", description_ar: "نشر وتهيئة مواقع الويب على الاستضافات، إدارة النطاقات (DNS)، شهادات الأمان SSL، وإعداد وتأمين قواعد بيانات MySQL." },
    { id: "tech_git", name: "Git & GitHub", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "git-branch", featured: true, description: "Feature branching, pull requests, rebase workflows, and release tagging." },
    { id: "tech_postman", name: "Postman & OpenAPI", category: "Infrastructure", level: "Primary", experience: "2+ Years", icon: "check-circle", featured: false, description: "Collection testing, environment variables, pre-request scripts, and API docs." },
    { id: "tech_firebase", name: "Firebase (FCM)", category: "Infrastructure", level: "Strong", experience: "1.5 Years", icon: "bell", featured: true, description: "Push notification dispatching, device token registration, and topic messaging." },

    // AI & Integrations
    { id: "tech_gemini", name: "Gemini / AI APIs", category: "AI & Integrations", level: "Strong", experience: "1 Year", icon: "sparkles", featured: true, description: "Automated text extraction, semantic tagging, prompt engineering, and response validation." },
    { id: "tech_grok", name: "xAI Grok", name_ar: "xAI Grok", category: "AI & Integrations", level: "Strong", experience: "1 Year", icon: "sparkles", featured: true, description: "Integration with xAI Grok API for intelligent data extraction, real-time context analysis, and AI automation.", description_ar: "دمج واجهات xAI Grok لتحليل البيانات، والاستجابة اللحظية، وتطبيق حلول الذكاء الاصطناعي." },
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
        "Built complete backend systems for dual-pricing retail & wholesale commerce (Bynona) and on-demand logistics dispatching (Wasly).",
        "Engineered secure payment webhook pipelines handling multi-currency transactions with zero duplicate ledger records.",
        "Refactored legacy database schemas, introducing compound indexes and eager-loading optimizations to eliminate N+1 latency bottlenecks.",
        "Designed comprehensive Postman and OpenAPI documentation facilitating seamless integration with mobile and frontend engineering teams."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Redis", "Firebase", "Sanctum"],
      projects: ["Bynona", "Wasly", "AqarMousa", "PharmaCare Pro"]
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
      title_ar: "معمارية الباك إند وتطوير واجهات REST API",
      subtitle: "Robust, scalable foundations for web and mobile apps",
      subtitle_ar: "بنى تحتية قوية وقابلة للتوسع لتطبيقات الويب والموبايل",
      icon: "server",
      featured: true,
      description: "Clean RESTful APIs built with Laravel and PHP. Designed with strict input validation, token-based authentication (Sanctum), rate limiting, and predictable error handling.",
      description_ar: "واجهات برمجة تطبيقات نظيفة مبنية بلارافيل و PHP. مصممة بتحقق صارم من المدخلات، ومصادقة بالتوكنات (Sanctum)، ومحددات معدل الطلب (Rate Limiting).",
      deliverables: [
        "Fully documented RESTful API endpoints (Postman / OpenAPI)",
        "Authentication & Role-Based Authorization (RBAC)",
        "Scalable service and repository domain logic",
        "Optimized database schema with migrations and seeders"
      ],
      solvedProblems: "Eliminates spaghetti controllers, inconsistent JSON responses, and unauthenticated API vulnerability endpoints.",
      solvedProblems_ar: "القضاء على الكود الفوضوي في المتحكمات، واستجابات JSON غير المتناسقة، والثغرات غير المصادق عليها.",
      relatedProjects: ["Bynona", "Wasly", "KCODE"]
    },
    {
      id: "srv_saas",
      title: "SaaS Platform Engineering",
      title_ar: "هندسة وبناء منصات SaaS",
      subtitle: "Multi-tenant platforms, subscriptions & automation",
      subtitle_ar: "أنظمة متعددة المستأجرين، اشتراكات دورية وأتمتة العمليات",
      icon: "layers",
      featured: true,
      description: "Complete backend architectures for software-as-a-service products. Multi-tenant database isolation, subscription lifecycles, team workspaces, and background job queues.",
      description_ar: "معماريات متكاملة لمنتجات البرمجيات كخدمة: عزل قواعد البيانات للمشتركين، دورات حياة الاشتراكات والفواتير، ومساحات عمل الفرق مع طوابير المهام الخلفية.",
      deliverables: [
        "Multi-tenant data isolation architecture",
        "Subscription billing & webhook synchronization",
        "Asynchronous queue workers for heavy background tasks",
        "Transactional email & real-time notification integration"
      ],
      solvedProblems: "Solves multi-store data leakage risks, slow page renders during heavy processes, and messy payment reconciliation.",
      solvedProblems_ar: "حماية بيانات المستأجرين من التسرب، وحل بطء الصفحات أثناء العمليات الثقيلة، وتنظيم التسويات المالية.",
      relatedProjects: ["Bynona", "KCODE", "AqarMousa"]
    },
    {
      id: "srv_dashboards",
      title: "Admin Dashboards & Internal Tooling",
      title_ar: "لوحات التحكم الإدارية والأدوات الداخلية",
      subtitle: "Operational control centers for business teams",
      subtitle_ar: "مراكز تحكم تشغيلية متقدمة لفرق الأعمال والمبيعات",
      icon: "layout",
      featured: true,
      description: "Intuitive, high-utility management dashboards enabling operations, sales, and support teams to monitor metrics, audit transactions, and manage inventory seamlessly.",
      description_ar: "لوحات إدارة عملية تمكّن فرق التشغيل والمبيعات والدعم الفني من متابعة المؤشرات، ومراجعة المعاملات، وإدارة المخزون بسلاسة.",
      deliverables: [
        "Role-tailored management portals",
        "Advanced data tables with filtering, sorting & export",
        "Real-time operational metrics and visual analytics",
        "Audit logs tracking user state modifications"
      ],
      solvedProblems: "Removes reliance on manual spreadsheets, prevents unauthorized data edits, and gives leadership real-time operational clarity.",
      solvedProblems_ar: "الاستغناء عن جداول البيانات اليدوية المعرضة للخطأ، ومنع التعديلات غير المصرح بها، وتوفير رؤية تشغيلية واضحة للإدارة.",
      relatedProjects: ["PharmaCare Pro", "AqarMousa", "Wasly"]
    },
    {
      id: "srv_database",
      title: "Database Design & Query Optimization",
      title_ar: "تصميم قواعد البيانات وتحسين الاستعلامات",
      subtitle: "High-performance data models that scale gracefully",
      subtitle_ar: "نماذج بيانات عالية الأداء تتوسع بسلاسة وثبات",
      icon: "database",
      featured: false,
      description: "Normalization, indexing strategies, foreign key constraints, and query tuning for MySQL databases that experience high read/write loads.",
      description_ar: "التطبيع وقواعد الربط، واستراتيجيات الفهرسة، وقيود المفاتيح الخارجية، وضبط أداء استعلامات MySQL التي تواجه ضغط قراءة وكتابة كثيف.",
      deliverables: [
        "Optimized relational schema design (3NF)",
        "EXPLAIN plan analysis and compound indexing",
        "Elimination of N+1 query bottlenecks in ORM",
        "Database migration plans and seeders"
      ],
      solvedProblems: "Fixes sluggish queries, deadlocks during concurrent transactions, and messy unindexed tables.",
      solvedProblems_ar: "علاج الاستعلامات البطيئة، وحالات التعليق (Deadlocks) أثناء العمليات المتزامنة، والجداول غير المفهرسة.",
      relatedProjects: ["Wasly", "Bynona", "AqarMousa"]
    },
    {
      id: "srv_integrations",
      title: "Third-Party & Payment Integrations",
      title_ar: "تكامل بوابات الدفع والخدمات الخارجية",
      subtitle: "Connecting your backend to the modern web",
      subtitle_ar: "ربط نظامك الخلفي بالخدمات العالمية الحديثة",
      icon: "cpu",
      featured: false,
      description: "Seamless, idempotent integration of external APIs: Stripe, Paymob, Twilio SMS, Firebase Push Notifications, and AI services like Gemini and OpenAI.",
      description_ar: "تكامل آمن وموثوق مع واجهات برمجة التطبيقات: Stripe، Paymob، رسائل Twilio SMS، إشعارات Firebase، وواجهات الذكاء الاصطناعي مثل Gemini.",
      deliverables: [
        "Idempotent webhook handlers with replay defense",
        "Signed HMAC payload verification",
        "Automated retry mechanisms with exponential backoff",
        "Third-party rate-limit compliance"
      ],
      solvedProblems: "Stops lost webhook events, double charges, and unhandled third-party downtime.",
      solvedProblems_ar: "منع فقدان إشعارات الويب هوك، ومنع تكرار الخصم المالي، والتعامل الذكي مع انقطاع الخدمات الخارجية.",
      relatedProjects: ["Bynona", "Wasly", "AqarMousa"]
    }
  ],

  articles: [],

  codeSnippets: [
    {
      id: "code_1",
      title: "Dual-Pricing & Transactional Checkout Pipeline",
      subtitle: "Dynamic Retail/Wholesale resolution, live stock checks & atomic inventory decrement",
      language: "php",
      project: "Bynona E-Commerce Platform",
      description: "Inspects the `Price-Mode` header to dynamically pivot pricing, wholesale minimum order quantities (MOQ), and dual discounts, executing checkout in an atomic database transaction (`DB::beginTransaction`) with instant variant stock decrements.",
      code: `<?php

namespace App\\Http\\Controllers\\API;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\API\\CheckoutRequest;
use App\\Models\\{Cart, Order, Setting, Property};
use Illuminate\\Support\\Facades\\{Auth, DB};
use Illuminate\\Support\\Str;

class CheckoutController extends Controller
{
    /**
     * Executes atomic multi-item checkout with dynamic dual pricing (Retail / Wholesale)
     * and immediate inventory decrement across variant properties.
     */
    public function checkout(CheckoutRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();
        $priceMode = app('price_mode'); // 'retail' or 'wholesale'

        // Retrieve active cart with variants, attributes and active offers
        $cart = Cart::with(['items' => function ($q) use ($priceMode) {
            $q->withTrashed()
              ->where('sale_type', $priceMode)
              ->with(['offers', 'product', 'variantAttributes']);
        }])->where('user_id', $user->id)->where('status', 'active')->first();

        if (!$cart || $cart->items->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        $subtotal = 0;
        $productsToAdd = [];
        $now = now();

        foreach ($cart->items as $item) {
            $originalPrice = ($priceMode === 'wholesale') 
                ? ($item->wholesale_price ?? $item->price) 
                : ($item->retail_price ?? $item->price);

            // Channel-specific discount calculation (retail vs wholesale offer)
            $discountedPrice = $originalPrice;
            $offer = $item->offers->where('start', '<=', $now)->where('end', '>=', $now)->first();
            if ($offer) {
                $discount = ($priceMode === 'wholesale' && $offer->discount_wholesale > 0)
                    ? $offer->discount_wholesale
                    : ($offer->discount_retail ?? 0);
                $discountedPrice = round($originalPrice * (1 - $discount / 100), 2);
            }

            // Real-time stock verification
            if ($item->stock < $item->pivot->quantity) {
                return response()->json(['message' => "Insufficient stock for {$item->product->name}"], 422);
            }

            // Minimum order quantity enforcement for wholesale buyers
            if ($priceMode === 'wholesale' && $item->pivot->quantity < $item->min_quantity) {
                return response()->json(['message' => "Minimum quantity for wholesale is {$item->min_quantity}"], 422);
            }

            $productsToAdd[] = [
                'id'       => $item->id,
                'quantity' => $item->pivot->quantity,
                'price'    => $discountedPrice,
            ];
            $subtotal += $discountedPrice * $item->pivot->quantity;
        }

        // Atomic transaction to guarantee inventory and financial integrity
        DB::beginTransaction();
        try {
            $order = Order::create([
                'order_number'   => 'ORD-' . now()->format('YmdHis') . '-' . strtoupper(Str::random(4)),
                'user_id'        => $user->id,
                'user_name'      => $data['user_name'],
                'user_phone'     => $data['user_phone'],
                'user_address'   => $data['user_address'],
                'subtotal'       => $subtotal,
                'total_price'    => $subtotal,
                'status'         => 'pending',
                'governorate_id' => $data['governorate_id'],
            ]);

            foreach ($productsToAdd as $product) {
                $order->items()->syncWithoutDetaching([
                    $product['id'] => [
                        'quantity'  => $product['quantity'],
                        'price'     => $product['price'],
                        'sale_type' => $priceMode,
                    ]
                ]);

                // Atomically decrement live variant stock
                Property::withTrashed()->find($product['id'])->decrement('stock', $product['quantity']);
            }

            // Prune cart items for active channel
            DB::table('cart_items')
                ->where('cart_id', $cart->id)
                ->where('sale_type', $priceMode)
                ->delete();

            DB::commit();
            return response()->json(['message' => 'Order created successfully', 'order' => $order]);
        } catch (\\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }
}`
    },
    {
      id: "code_2",
      title: "Bidirectional Appointment Reschedule Negotiation Engine",
      subtitle: "Stateful reschedule proposal workflow between customer and provider",
      language: "php",
      project: "Wasly Platform",
      description: "Enables customers or technicians to suggest alternate time slots without cancelling appointments. Validates role permissions, transitions through negotiation states (`reschedule_by_customer` / `reschedule_by_provider`), and atomically commits approved dates in DB transactions.",
      code: `<?php

namespace App\\Services\\API\\General;

use App\\Models\\{Booking, AvailableTime};
use App\\Http\\Resources\\API\\GENERAL\\BookingResource;
use Illuminate\\Support\\Facades\\DB;

class BookingService
{
    /**
     * Proposes an alternate appointment slot without canceling the booking.
     * Accessible by both customer and technician with role-based state guards.
     */
    public function suggestReschedule(array $data): array
    {
        DB::beginTransaction();
        try {
            $user = auth()->user();
            $booking = Booking::with('service.provider')->findOrFail($data['booking_id']);

            $provider = $user->providers()->first();
            $isProvider = $provider && $provider->id == $booking->provider_id;
            $isCustomer = $user->id == $booking->user_id;

            if (!$isProvider && !$isCustomer) {
                return ['status' => false, 'message' => __('messages.unauthorized_action')];
            }

            // Ensure booking is in a state that permits reschedule negotiations
            $negotiableStates = ['accepted', 'pending', 'reschedule_by_provider', 'reschedule_by_customer'];
            if (!in_array($booking->status, $negotiableStates, true)) {
                return ['status' => false, 'message' => __('messages.cannot_reschedule_in_current_status')];
            }

            // Create or resolve slot record for proposed time
            $suggestedTime = AvailableTime::firstOrCreate([
                'available_day_id' => $data['suggested_day_id'],
                'service_id'       => $booking->service_id,
                'time'             => $data['suggested_time'],
            ]);

            // Transition booking to proposal state
            $booking->update([
                'suggested_date_id' => $data['suggested_date_id'] ?? null,
                'suggested_day_id'  => $data['suggested_day_id'],
                'suggested_time_id' => $suggestedTime->id,
                'reschedule_note'   => $data['reschedule_note'] ?? null,
                'status'            => $isProvider ? 'reschedule_by_provider' : 'reschedule_by_customer',
            ]);

            DB::commit();
            return [
                'status'  => true,
                'message' => __('messages.reschedule_suggested_successfully'),
                'data'    => BookingResource::make($booking->fresh())
            ];
        } catch (\\Throwable $e) {
            DB::rollBack();
            return ['status' => false, 'message' => $e->getMessage()];
        }
    }
}`
    },
    {
      id: "code_3",
      title: "Coupon Validation & Discount Engine",
      subtitle: "Multi-rule promotional code verification and cart calculation",
      language: "php",
      project: "KCODE E-Commerce",
      description: "Validates expiration dates, minimum order thresholds, and per-user usage limits before calculating dynamic fixed or percentage discounts.",
      code: `<?php

namespace App\\Services;

use App\\Models\\Coupon;
use App\\Models\\User;
use App\\Exceptions\\CouponException;

class CouponService
{
    /**
     * Validate promotional coupon rules and compute the discounted total.
     *
     * @throws CouponException
     */
    public function applyCoupon(string $code, float $cartTotal, User $user): array
    {
        $coupon = Coupon::where('code', strtoupper(trim($code)))
            ->where('is_active', true)
            ->first();

        if (! $coupon) {
            throw new CouponException('Invalid or expired coupon code.');
        }

        if ($coupon->expires_at && $coupon->expires_at->isPast()) {
            throw new CouponException('This coupon has already expired.');
        }

        if ($coupon->min_spend && $cartTotal < $coupon->min_spend) {
            throw new CouponException("Minimum spend of {$coupon->min_spend} is required.");
        }

        if ($coupon->usage_limit && $coupon->used_count >= $coupon->usage_limit) {
            throw new CouponException('Coupon usage limit has been reached.');
        }

        $userUsageCount = $coupon->usages()
            ->where('user_id', $user->id)
            ->count();

        if ($coupon->usage_per_user && $userUsageCount >= $coupon->usage_per_user) {
            throw new CouponException('You have reached the maximum allowed uses for this coupon.');
        }

        // Calculate fixed amount or percentage discount
        $discount = $coupon->type === 'percentage'
            ? ($cartTotal * ($coupon->value / 100))
            : $coupon->value;

        // Apply maximum discount cap if specified
        if ($coupon->max_discount && $discount > $coupon->max_discount) {
            $discount = $coupon->max_discount;
        }

        $discount = min($discount, $cartTotal);

        return [
            'coupon_id' => $coupon->id,
            'code' => $coupon->code,
            'discount_amount' => round($discount, 2),
            'final_total' => round($cartTotal - $discount, 2),
        ];
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
      { slug: "aqarmousa", name: "AqarMousa Real Estate", views: 890, caseStudyOpens: 420, demoClicks: 175, githubClicks: 0, conversionCount: 16 },
      { slug: "pharmacare-pro", name: "PharmaCare Pro", views: 620, caseStudyOpens: 295, demoClicks: 140, githubClicks: 85, conversionCount: 9 }
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
    { id: "med_4", title: "AqarMousa Real Estate Cover", url: "./assets/img/aqarmousa_showcase.webp", type: "Project Cover", dimensions: "1400x900", date: "2026-10-25" },
    { id: "med_5", title: "Profile Avatar", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", type: "Profile", dimensions: "600x600", date: "2026-10-22" }
  ],

  seo: {
    siteTitle: "Abdelrahman Deisty — Software Engineer & Backend Developer",
    siteDescription: "Software Engineer & Backend Developer building production-ready Laravel applications, high-performance REST APIs, and reliable server deployments.",
    keywords: "Software Engineer, Backend Developer, Laravel, PHP, REST API, MySQL, Servers, Deployment, SaaS, E-commerce, Cairo, Remote",
    author: "Abdelrahman Deisty",
    ogImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    twitterCard: "summary_large_image"
  }
};

const DB_STORAGE_KEY = 'eldeisty_portfolio_db_v17';
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
        try {
          localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(merged));
        } catch (e) {}
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
      data.profile.email = def.profile.email;
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

    // Projects sync
    if (Array.isArray(data.projects) && Array.isArray(def.projects)) {
      def.projects.forEach(defProj => {
        let p = data.projects.find(x => x.id === defProj.id || x.slug === defProj.slug);
        if (p) {
          ['title_ar', 'subtitle_ar', 'category_ar', 'shortDescription_ar', 'description_ar', 'role_ar', 'problem_ar', 'solution_ar', 'results_ar', 'status_ar', 'privateNotice_ar', 'status', 'year'].forEach(f => {
            if (defProj[f]) {
              p[f] = defProj[f];
            }
          });
          if (Array.isArray(defProj.responsibilities_ar)) {
            p.responsibilities_ar = defProj.responsibilities_ar;
          }
          if (Array.isArray(defProj.architecture)) {
            p.architecture = defProj.architecture;
          }
          if (Array.isArray(defProj.databaseSchema)) {
            p.databaseSchema = defProj.databaseSchema;
          }
          if (Array.isArray(defProj.challenges)) {
            p.challenges = defProj.challenges;
          }
          if (defProj.coverImage) p.coverImage = defProj.coverImage;
          if (defProj.thumbnail) p.thumbnail = defProj.thumbnail;
          if (defProj.featured !== undefined) p.featured = defProj.featured;
          if (defProj.liveUrl) p.liveUrl = defProj.liveUrl;
          if (defProj.adminUrl) p.adminUrl = defProj.adminUrl;
          if (defProj.technologies) p.technologies = JSON.parse(JSON.stringify(defProj.technologies));
          if (defProj.dashboard) p.dashboard = JSON.parse(JSON.stringify(defProj.dashboard));
          if (defProj.screenshots) p.screenshots = JSON.parse(JSON.stringify(defProj.screenshots));
          if (defProj.examplesNotice_ar) p.examplesNotice_ar = defProj.examplesNotice_ar;
          if (defProj.examplesNotice) p.examplesNotice = defProj.examplesNotice;
          p.githubUrl = defProj.githubUrl || '';
        } else {
          data.projects.push(JSON.parse(JSON.stringify(defProj)));
        }
      });
      data.projects = data.projects.filter(x => x.id !== 'proj_mizan' && x.slug !== 'mizan-pos');
    }

    // Technologies sync
    data.technologies = JSON.parse(JSON.stringify(def.technologies));

    // Code snippets sync
    data.codeSnippets = JSON.parse(JSON.stringify(def.codeSnippets));

    // Articles cleared
    data.articles = [];

    // Homepage sections and Navigation sync
    if (def.homepageSections) {
      data.homepageSections = JSON.parse(JSON.stringify(def.homepageSections));
    }
    if (def.navigation) {
      data.navigation = JSON.parse(JSON.stringify(def.navigation));
    }

    // Services sync
    if (Array.isArray(data.services) && Array.isArray(def.services)) {
      def.services.forEach(defSrv => {
        let s = data.services.find(x => x.id === defSrv.id);
        if (s) {
          ['title_ar', 'subtitle_ar', 'description_ar', 'solvedProblems_ar'].forEach(f => {
            if (defSrv[f]) s[f] = defSrv[f];
          });
        }
      });
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
      name: "Abdelrahman Deisty",
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
