export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  title: { en: string; ar: string };
  category: 'residential' | 'commercial' | 'infrastructure' | 'industrial' | 'hospitality';
  categoryLabel: { en: string; ar: string };
  location: { en: string; ar: string };
  year: string;
  bua: string;
  estidamaRating?: string;
  status: { en: string; ar: string };
  image: string;
  blueprintImage?: string;
  description: { en: string; ar: string };
  scope: { en: string[]; ar: string[] };
  highlights: { en: string[]; ar: string[] };
}

export interface Discipline {
  id: string;
  iconName: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
  software: string[];
  authorityCodes: string[];
}

export interface Testimonial {
  id: string;
  clientName: { en: string; ar: string };
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  text: { en: string; ar: string };
  rating: number;
}

export interface ContentData {
  company: {
    nameEn: string;
    nameAr: string;
    taglineEn: string;
    taglineAr: string;
    subtitleEn: string;
    subtitleAr: string;
    hqAddressEn: string;
    hqAddressAr: string;
    phonePrimary: string;
    phoneSecondary: string;
    email: string;
    inquiryEmail: string;
    website: string;
    establishedYear: string;
    licenseGrade: string;
    workingHoursEn: string;
    workingHoursAr: string;
  };
  metrics: {
    experienceYears: string;
    deliveredProjects: string;
    supervisedValueAED: string;
    permitApprovalRate: string;
  };
  disciplines: Discipline[];
  projects: Project[];
  testimonials: Testimonial[];
  faqs: {
    question: { en: string; ar: string };
    answer: { en: string; ar: string };
  }[];
}

export const siteContent: ContentData = {
  company: {
    nameEn: "MUSTASHAR LAND Engineering Consultancy",
    nameAr: "مستشار لاند للاستشارات الهندسية",
    taglineEn: "Architectural Grandeur. Structural Precision. Sustainable Legacy.",
    taglineAr: "عمارة ريادية. دقة إنشائية. واستدامة هندسية لمستقبل الإمارات.",
    subtitleEn: "Abu Dhabi's premier multidisciplinary engineering consultancy delivering world-class architectural design, structural engineering, MEP systems, and lead project supervision across the United Arab Emirates.",
    subtitleAr: "نخبة الاستشارات الهندسية المتكاملة في إمارة أبوظبي، نقدم حلولاً رائدة في التصميم المعماري، الهندسة الإنشائية، الكهروميكانيكية، والإشراف الفني الميداني وفق أعلى معايير الجودة والاستدامة.",
    hqAddressEn: "Aljazera Club, Gate No. 2, 3rd Floor, Al Muroor / Al Nawras Street, Al Etihad, Abu Dhabi, UAE",
    hqAddressAr: "نادي الجزيرة، بوابة رقم 2، الطابق الثالث، شارع المرور / النورس، الاتحاد، أبوظبي، الإمارات العربية المتحدة",
    phonePrimary: "+971 2 658 8099",
    phoneSecondary: "+971 2 658 8909",
    email: "info@mustasharland.ae",
    inquiryEmail: "projects@mustasharland.ae",
    website: "www.mustasharland.ae",
    establishedYear: "2019",
    licenseGrade: "Engineering Consultancy",
    workingHoursEn: "Monday - Friday: 8:00 AM - 5:30 PM (GST)",
    workingHoursAr: "من الاثنين إلى الجمعة: 8:00 صباحاً - 5:30 مساءً (توقيت الإمارات)",
  },
  metrics: {
    experienceYears: "2019",
    deliveredProjects: "Abu Dhabi",
    supervisedValueAED: "UAE",
    permitApprovalRate: "Verified",
  },
  disciplines: [
    {
      id: "architectural-design",
      iconName: "Compass",
      title: {
        en: "Architectural Design & Master Planning",
        ar: "التصميم المعماري والتخطيط العمراني",
      },
      tagline: {
        en: "Visionary forms sculpted for the modern Emirati landscape",
        ar: "رؤى معمارية متفردة تلائم البيئة والهوية الإماراتية العصرية",
      },
      description: {
        en: "From signature private estates in Saadiyat Island to iconic commercial high-rises in Al Reem, our architects combine bioclimatic Gulf design, cultural heritage, and parametric aesthetics.",
        ar: "من الفلل الفاخرة في جزيرة السعديات إلى الأبراج التجارية في جزيرة الريم، يجمع مهندسونا بين العمارة المناخية الخليجية، الأصالة المعمارية، وأحدث برمجيات النمذجة ثلاثية الأبعاد.",
      },
      deliverables: {
        en: [
          "Concept & Schematic Architecture (BIM LOD 350)",
          "Detailed Exterior Facade Engineering",
          "Space Programming & Spatial Layouts",
          "Comprehensive Estidama Pearl Architectural Modeling",
          "3D Photorealistic & Interactive VR Walkthroughs"
        ],
        ar: [
          "التصميم المعماري التخطيطي ونمذجة BIM (LOD 350)",
          "هندسة وتفاصيل الواجهات الخارجية المتطورة",
          "التوزيع الفراغي والتخطيط الداخلي المعماري",
          "نمذجة المباني المتوافقة مع معايير اللؤلؤة إستدامة",
          "عروض ثلاثية الأبعاد تفاعلية ومحاكاة الواقع الافتراضي"
        ]
      },
      software: ["Autodesk Revit", "Rhino 3D", "Enscape", "Autodesk Navisworks", "AutoCAD Architecture"],
      authorityCodes: ["DMT Abu Dhabi Building Code", "Estidama PBRS", "Abu Dhabi Urban Planning Guidelines"]
    },
    {
      id: "structural-engineering",
      iconName: "Building2",
      title: {
        en: "Structural Engineering & Deep Foundations",
        ar: "الهندسة الإنشائية وهندسة الأساسات العميقة",
      },
      tagline: {
        en: "Robust structural integrity with uncompromising mathematical precision",
        ar: "متانة إنشائية فائقة مصممة بأعلى درجات الدقة الحسابية",
      },
      description: {
        en: "Advanced analysis of concrete, post-tensioned slabs, steel superstructures, and deep piling foundations engineered to withstand seismic, wind, and saline coastal soil environments.",
        ar: "حسابات إنشائية متقدمة للخرسانة المسلحة، الأسقف مسبقة الإجهاد (Post-Tension)، الهياكل الفولاذية، وأنظمة الخوازيق العميقة المقاومة للرياح والزلازل وتربة السواحل الملحية.",
      },
      deliverables: {
        en: [
          "Finite Element Analysis (FEA) & Dynamic Wind Modeling",
          "Post-Tensioned & Reinforced Concrete Slab Design",
          "Deep Foundation, Piling & Shoring Systems",
          "Structural Value Engineering & Material Optimization",
          "Structural Integrity Audits & As-Built Inspections"
        ],
        ar: [
          "التحليل بالعناصر المحدودة ومحاكاة ديناميكية الرياح",
          "تصميم البلاطات الخرسانية مسبقة الإجهاد والمسلحة",
          "تصميم أنظمة الأساسات العميقة وتدعيم جوانب الحفر",
          "الهندسة القيمة وترشيد استهلاك حديد التسليح والخرسانة",
          "فحوصات السلامة الإنشائية ومطابقة المخططات المنفذة"
        ]
      },
      software: ["CSI ETABS", "CSI SAFE", "CSI SAP2000", "Prokon", "AutoCAD Structural Detailing"],
      authorityCodes: ["IBC / Abu Dhabi International Building Code", "ACI 318", "ASCE 7-16 Wind Standards"]
    },
    {
      id: "mep-engineering",
      iconName: "Cpu",
      title: {
        en: "MEP Engineering & Smart Building Automation",
        ar: "الهندسة الكهروميكانيكية والأنظمة الذكية",
      },
      tagline: {
        en: "High-efficiency systems engineered for peak Gulf desert climates",
        ar: "أنظمة كهروميكانيكية عالية الكفاءة مصممة خصيصاً لمناخ الخليج العربي",
      },
      description: {
        en: "Intelligent Mechanical, Electrical, and Plumbing engineering featuring thermal load optimization, district cooling integration, smart Building Management Systems (BMS), and solar PV.",
        ar: "تصميم هندسي متكامل لأنظمة التكييف والتهوية، أنظمة الكهرباء والتيار الخفيف، الصرف والتغذية، الربط بشبكات تبريد المناطق، وأنظمة إدارة المباني الذكية والطاقة الشمسية.",
      },
      deliverables: {
        en: [
          "HVAC & Thermal Heat Gain Optimization (HAP 5.1)",
          "Substations, Power Distribution & Emergency Generators",
          "Plumbing, Water Conservation & Graywater Recycling",
          "Fire Alarm, Suppression & Life-Safety Network Design",
          "Smart Home & Building Management System (BMS) Architecture"
        ],
        ar: [
          "تصميم أنظمة التكييف والتهوية وحساب الأحمال الحرارية",
          "محطات التحويل، شبكات توزيع الكهرباء والمولدات الاحتياطية",
          "أنظمة التغذية المائية، ترشيد المياه وإعادة تدوير المياه الرمادية",
          "أنظمة إنذار ومكافحة الحريق والسلامة المعتمدة من الدفاع المدني",
          "أنظمة التحكم الذكي وإدارة المباني المركزية (BMS)"
        ]
      },
      software: ["Carrier HAP", "Autodesk Revit MEP", "Dialux Evo", "Elite Fire", "SimScale CFD"],
      authorityCodes: ["ADDC Wiring Regulations", "Abu Dhabi Civil Defence NFPA Codes", "Estidama Water & Energy Codes"]
    },
    {
      id: "lead-consultancy",
      iconName: "ShieldCheck",
      title: {
        en: "Lead Consultancy & Construction Supervision",
        ar: "الاستشارات الرئيسية والإشراف الهندسي على التنفيذ",
      },
      tagline: {
        en: "Single-source technical governance from plot inception to final handover",
        ar: "إشراف هندسي وحوكمة فنية متكاملة من تسليم الموقع حتى شهادة الإنجاز",
      },
      description: {
        en: "Turnkey project leadership orchestrating all design disciplines, authority approvals, contractor pre-qualification, tendering oversight, and rigorous on-site quality control inspections.",
        ar: "إدارة هندسية شاملة تجمع كافة التخصصات الفنية، إدارة التراخيص، إعداد وثائق المناقصات، تقييم المقاولين، والإشراف الميداني الصارم لضمان الجودة ومطابقة المواصفات.",
      },
      deliverables: {
        en: [
          "Resident Engineer Site Supervision & QA/QC Audits",
          "Tender Package Preparation, BOQ & FIDIC Contract Administration",
          "Contractor Payment Certification & Variation Order Control",
          "Authority Milestone Inspections (Foundation, Structure, MEP)",
          "Building Completion Certificate (BCC) & Handover Dossier"
        ],
        ar: [
          "إشراف مقيم بالموقع وتطبيق برامج ضبط وتوكيد الجودة (QA/QC)",
          "إعداد وثائق المناقصات، جداول الكميات، وعقود الفيديك FIDIC",
          "تدقيق مستخلصات المقاولين وإدارة الأوامر التغييرية",
          "فحوصات مراحل البناء المعتمدة من بلدية أبوظبي",
          "استخراج شهادة إنجاز البناء (BCC) وإجراءات التسليم النهائي"
        ]
      },
      software: ["Primavera P6", "Procore", "Autodesk BIM 360", "Microsoft Project"],
      authorityCodes: ["DMT Engineering Practice Bylaws", "FIDIC Red Book", "Abu Dhabi Quality & Conformity Guidelines"]
    },
    {
      id: "infrastructure-stormwater",
      iconName: "Layers",
      title: {
        en: "Infrastructure, Utilities & Stormwater Drainage",
        ar: "البنية التحتية، المرافق، وتصريف مياه الأمطار",
      },
      tagline: {
        en: "Heavy civil infrastructure engineered for resilience and long-term sustainability",
        ar: "بنية تحتية هندسية عملاقة صممت لتحمل الظروف المناخية القاسية",
      },
      description: {
        en: "Turnkey infrastructure solutions including stormwater retention basins, flood mitigation systems, deep gravity sewer lines, potable water networks, and internal road networks.",
        ar: "حلول هندسية متكاملة لشبكات تصريف مياه الأمطار، خزانات التجميع والضخ، خطوط الصرف الصحي العميقة، شبكات المياه الصالحة للشرب، وتخطيط الطرق والمواقف.",
      },
      deliverables: {
        en: [
          "Stormwater Hydrology Modeling & Retention Basin Design",
          "Sewerage Network Gravity Flow Hydraulic Engineering",
          "Underground Utility Coordination & Clash Detection",
          "Road Alignment, Pavement Design & Traffic Impact Studies",
          "Dam & Flood Protection Infrastructure Solutions"
        ],
        ar: [
          "النمذجة الهيدرولوجية للأمطار وتصميم أحواض التجميع",
          "التصميم الهيدروليكي لشبكات الصرف الصحي بالانحدار",
          "تنسيق مسارات الخدمات تحت الأرض ومنع التعارضات",
          "تصميم الطرق والمواقف ودراسات التأثير المروري (TIS)",
          "هندسة السدود ومنشآت الحماية من مخاطر السيول"
        ]
      },
      software: ["Autodesk Civil 3D", "WaterCAD", "SewerCAD", "StormCAD", "ArcGIS"],
      authorityCodes: ["Abu Dhabi Sewerage Services (ADSSC)", "DMT Infrastructure Standards", "Abu Dhabi Civil Defence Water Supply"]
    },
    {
      id: "estidama-sustainability",
      iconName: "Leaf",
      title: {
        en: "Estidama & Sustainable Building Design",
        ar: "الاستدامة وتقييم اللؤلؤة (نظام إستدامة)",
      },
      tagline: {
        en: "Certified Pearl Rating compliance driving the UAE Net Zero 2050 journey",
        ar: "مهندسون معتمدون لنظام تقييم اللؤلؤة لدعم مبادرة الإمارات للحياد المناخي 2050",
      },
      description: {
        en: "Official Pearl Qualified Professionals (PQP) leading energy modeling, passive solar shading, low-flow water fixtures, local materials sourcing, and complete Estidama certification.",
        ar: "فريق معتمد من خبراء اللؤلؤة (PQP) لإجراء دراسات المحاكاة الحرارية للطاقة، التظليل الشمسي، كفاءة استهلاك المياه، واختيار المواد الصديقة للبيئة لضمان الحصول على شهادة إستدامة.",
      },
      deliverables: {
        en: [
          "Estidama Pearl Building Rating System (1, 2, 3 Pearl)",
          "Building Energy Modeling & Envelope Thermal Optimization",
          "Indoor Air Quality (IAQ) & Daylighting Simulation",
          "Construction Waste Management & Material Life-Cycle Assessment",
          "Net-Zero Readiness & Solar Photovoltaic Feasibility"
        ],
        ar: [
          "اعتماد نظام تقييم اللؤلؤة للمباني (درجة 1، 2، 3 لؤلؤة)",
          "محاكاة استهلاك الطاقة وتحسين العزل الحراري للغلاف الخارجي",
          "دراسات الإضاءة الطبيعية وجودة الهواء الداخلي",
          "إدارة النفايات الإنشائية وتقييم دورة حياة المواد",
          "حلول المباني خالية الانبعاثات والربط بالطاقة الشمسية"
        ]
      },
      software: ["IES VE", "DesignBuilder", "EnergyPlus", "Ecotect", "One Click LCA"],
      authorityCodes: ["Estidama PBRS v1.0", "Abu Dhabi Net Zero 2050 Framework", "Masdar City Sustainability Standards"]
    },
    {
      id: "permits-authority-approvals",
      iconName: "FileCheck",
      title: {
        en: "Government Permitting & MePS Approvals",
        ar: "تراخيص البناء واعتمادات الدوائر الحكومية (MePS)",
      },
      tagline: {
        en: "Fast-tracked statutory clearances with 100% first-pass authority success",
        ar: "تسريع استخراج تصاريح البناء عبر منصة تراخيص البناء الموحدة في أبوظبي",
      },
      description: {
        en: "End-to-end management of municipal submissions across Abu Dhabi MePS portal, Civil Defence life safety review, ADDC electrical & water NOCs, and environmental clearances.",
        ar: "إدارة ومتابعة المعاملات الهندسية عبر منصة MePS التابعة لدائرة البلديات والنقل، اعتمادات الدفاع المدني للسلامة والوقاية، شهادات عدم الممانعة من ADDC وتدوير.",
      },
      deliverables: {
        en: [
          "Abu Dhabi MePS Building Permit Application & Tracking",
          "Civil Defence Fire Safety Approval & NOC Clearances",
          "ADDC Electricity & Water Connection Approvals",
          "Tadweer Waste Management Plan Approval",
          "Building Completion Certificate (BCC) Coordination"
        ],
        ar: [
          "تقديم ومتابعة رخص البناء عبر منصة MePS أبوظبي",
          "اعتمادات المخططات الوقائية ومكافحة الحريق من الدفاع المدني",
          "شهادات عدم الممانعة لتوصيل الكهرباء والمياه من شركة ADDC",
          "اعتماد خطة إدارة النفايات من مركز إدارة النفايات (تدوير)",
          "التنسيق الميداني لاستخراج شهادة إنجاز البناء وتوصيل الخدمات"
        ]
      },
      software: ["Abu Dhabi MePS Portal", "Civil Defence Portal", "ADDC E-Services", "TAMM Government Platform"],
      authorityCodes: ["DMT Building Permit Regulations", "UAE Fire & Life Safety Code", "TAMM Integrated Municipal Services"]
    }
  ],
  projects: [
    {
      id: "al-dana-horizon-tower",
      title: {
        en: "Al Dana Horizon Commercial Tower",
        ar: "برج الأفق التجاري - الدانة",
      },
      category: "commercial",
      categoryLabel: {
        en: "Commercial High-Rise",
        ar: "أبراج تجارية شاهقة",
      },
      location: {
        en: "Al Reem Island, Abu Dhabi",
        ar: "جزيرة الريم، أبوظبي",
      },
      year: "2024",
      bua: "48,500 m² (522,000 sq.ft)",
      estidamaRating: "2 Pearls (PBRS)",
      status: {
        en: "Completed & Operational",
        ar: "منجز ومسّلم بالكامل",
      },
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "A landmark 34-storey commercial tower commanding panoramic views of the Arabian Gulf. Designed with high-performance double-glazed solar facades, automated post-tensioned floor plates, and intelligent BMS.",
        ar: "برج تجاري شاهق مكوّن من 34 طابقاً يتميز بإطلالة بانورامية ساحرة على مياه الخليج العربي، مع واجهات زجاجية مزدوجة معالجة حرارياً، أسقف مسبقة الإجهاد لتوفير مساحات مكتبية خالية من الأعمدة، وأنظمة تحكم ذكية.",
      },
      scope: {
        en: [
          "Full Lead Consultancy & Architectural Design",
          "Structural Analysis for Seismic & High-Wind Loads",
          "Central District Cooling & MEP Engineering",
          "Estidama 2-Pearl Sustainability Certification",
          "MePS Authority Permitting & Site Supervision"
        ],
        ar: [
          "الاستشارات الرئيسية المتكاملة والتصميم المعماري",
          "الحسابات الإنشائية لأحمال الرياح والزلازل للأبراج الشاهقة",
          "تصميم أنظمة التكييف والربط بنظام تبريد المناطق المركزي",
          "الحصول على اعتماد اللؤلؤة إستدامة (درجة لؤلؤتين)",
          "إدارة تراخيص منصة MePS والإشراف الهندسي المقيم"
        ]
      },
      highlights: {
        en: [
          "34 floors above ground + 4 basements",
          "32% energy savings vs baseline via high-efficiency chiller heat recovery",
          "Zero post-tensioned tendon failures during high-stress testing"
        ],
        ar: [
          "34 طابقاً فوق الأرض + 4 طوابق تحت الأرض للمواقف",
          "توفير 32% من استهلاك الطاقة مقارنة بالمباني القياسية",
          "تحقيق صفر ملاحظات أثناء اختبارات الشد للخرسانة مسبقة الإجهاد"
        ]
      }
    },
    {
      id: "saadiyat-royal-coastal-villa",
      title: {
        en: "Saadiyat Residential Coastal Villa Estate",
        ar: "فيلا السعديات الشاطئية الخاصة",
      },
      category: "residential",
      categoryLabel: {
        en: "Private Residential Estate",
        ar: "مبانٍ وفلل سكنية خاصة",
      },
      location: {
        en: "Saadiyat Cultural District, Abu Dhabi",
        ar: "المنطقة الثقافية، جزيرة السعديات، أبوظبي",
      },
      year: "2023",
      bua: "2,450 m² (26,400 sq.ft)",
      estidamaRating: "3 Pearls (PBRS - Villa)",
      status: {
        en: "Completed & Handed Over",
        ar: "تم الإنجاز والتسليم النهائي",
      },
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "An ultra-luxurious beachfront private residence integrating modern minimalist lines with privacy-centric Emirati courtyards, infinity pool engineering, and smart subterranean basement spa.",
        ar: "قصر شاطئي فاخر يدمج الخطوط المعمارية الحديثة مع الخصوصية العائلية الإماراتية العريقة، ويحتوي على مساحات مائية ممتدة، قبو ترفيهي متطور، وتقنيات تحكم منزلية ذكية بالكامل.",
      },
      scope: {
        en: [
          "Signature Architectural Concept & Interior Architecture",
          "Coastal Saline-Resistant Deep Piling & Structural Design",
          "Ultra-Quiet VRF Air Conditioning & Graywater Irrigation",
          "Private Substation & ADDC High-Voltage NOCs",
          "Comprehensive Full-Time Resident Supervision"
        ],
        ar: [
          "التصميم المعماري الحصري والتخطيط الداخلي",
          "تصميم الأساسات الخرسانية المعالجة لمقاومة ملوحة التربة الساحلية",
          "أنظمة تكييف متطورة فائقة الهدوء (VRF) وإعادة تدوير المياه",
          "محطة تحويل فرعية خاصة وتراخيص توصيل الكهرباء والمياه",
          "الإشراف الهندسي اليومي الكامل وضمان أعلى تشطيبات"
        ]
      },
      highlights: {
        en: [
          "Private underground gallery with hydraulic vehicle lift",
          "Achieved Estidama 3-Pearl rating for residential sustainability",
          "100% natural stone facade imported and installed with seismic subframes"
        ],
        ar: [
          "قبو خاص مجهز بمصعد هيدروليكي للسيارات الفارهة",
          "حيازة تصنيف 3 لآلئ في نظام إستدامة للفلل السكنية",
          "واجهات حجرية طبيعية مع أنظمة تثبيت ميكانيكية متطورة"
        ]
      }
    },
    {
      id: "yas-oasis-commercial-hub",
      title: {
        en: "Yas Oasis Lifestyle & Hospitality Complex",
        ar: "مجمع واحة ياس للضيافة والتسوق",
      },
      category: "hospitality",
      categoryLabel: {
        en: "Mixed-Use & Hospitality",
        ar: "ضيافة وتجاري متعدد الاستخدامات",
      },
      location: {
        en: "Yas Bay, Abu Dhabi",
        ar: "ياس باي، جزيرة ياس، أبوظبي",
      },
      year: "2024",
      bua: "32,000 m² (344,000 sq.ft)",
      estidamaRating: "2 Pearls (PBRS)",
      status: {
        en: "Under Final Fitout Supervision",
        ar: "قيد الإشراف على التشطيبات النهائية",
      },
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "A vibrant waterfront destination fusing boutique dining pavilions, open-air shaded promenades with passive cooling wind-catchers, and subterranean customer parking.",
        ar: "وجهة سياحية مائية فاخرة تجمع بين أرقى المطاعم والمتاجر وممرات المشاة المظللة المدعومة بملاقف هواء تراثية مطورة ومواقف سيارات سفلية متطورة.",
      },
      scope: {
        en: [
          "Masterplanning & Bioclimatic Architectural Design",
          "Large-Span Curved Steel Trusses & Shading Canopies",
          "Complex Kitchen Ventilation, Ecology Units & Gas Networks",
          "Traffic Impact Study (TIS) Approval by DMT",
          "Civil Defence Life-Safety Engineering & Evacuation Modeling"
        ],
        ar: [
          "المخطط العام والتصميم المعماري المتوافق مع المناخ",
          "هياكل فولاذية منحنية عريضة المدى ومظلات بيئية مبتكرة",
          "أنظمة تهوية المطابخ التجارية، وحدات معالجة الدخان وشبكات الغاز",
          "دراسة التأثير المروري المعتمدة من دائرة البلديات والنقل",
          "هندسة السلامة ونمذجة الإخلاء المعتمدة من الدفاع المدني"
        ]
      },
      highlights: {
        en: [
          "1,200 meters of pedestrian waterfront promenade",
          "38% reduction in outdoor perceived temperature via wind scoops",
          "Direct integration with Yas Bay marina boardwalk"
        ],
        ar: [
          "1,200 متر من الممشى المائي المشجر للمشاة",
          "تخفيض درجة الحرارة المحسوسة بمقدار 38% بفضل الملاقف الهوائية",
          "ربط هندسي مباشر مع رصيف مراسي ياس باي"
        ]
      }
    },
    {
      id: "ad-south-stormwater-masterplan",
      title: {
        en: "Abu Dhabi South Stormwater Drainage Masterplan",
        ar: "مشروع تصريف مياه الأمطار الاستراتيجي - جنوب أبوظبي",
      },
      category: "infrastructure",
      categoryLabel: {
        en: "Major Infrastructure",
        ar: "مشاريع البنية التحتية الكبرى",
      },
      location: {
        en: "Abu Dhabi Mainland & Suburbs",
        ar: "البر الرئيسي لمدينة أبوظبي وضواحيها",
      },
      year: "2023",
      bua: "28 km Network Span",
      status: {
        en: "Commissioned & Live",
        ar: "تم التشغيل والتسليم للجهات المعنية",
      },
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "Critical municipal stormwater drainage infrastructure engineered to eliminate urban flooding during severe seasonal cloudbursts. Features high-capacity microtunneling, detention basins, and pumping stations.",
        ar: "مشروع بنية تحتية استراتيجي لتصريف مياه الأمطار تم تصميمه لإنهاء تجمعات المياه أثناء المنخفضات الجوية، ويشمل خطوط أنفاق دقيقة (Microtunneling)، محطات ضخ هيدروليكية، وخزانات احتجاز.",
      },
      scope: {
        en: [
          "Hydraulic & Catchment Basin Hydrodynamic Simulation",
          "Reinforced Concrete Stormwater Retention Reservoirs",
          "Deep Pipe Jacking & Trenchless Microtunneling",
          "ADSSC, DMT & Environmental Agency Abu Dhabi Clearances",
          "Automated Supervisory Control and Data Acquisition (SCADA)"
        ],
        ar: [
          "النمذجة الهيدروليكية لمحاكاة تدفقات السيول ومسارات التصريف",
          "تصميم خزانات تجميع خرسانية مسلحة عالية السعة",
          "تنفيذ الأنابيب بتقنية الحفر النفقي الدقيق بدون حفر مفتوح",
          "اعتمادات شركة أبوظبي لخدمات الصرف الصحي وهيئة البيئة",
          "تصميم أنظمة المراقبة والتحكم الآلي عن بعد (SCADA)"
        ]
      },
      highlights: {
        en: [
          "Capable of evacuating 65,000 m³ of stormwater per hour",
          "Zero surface traffic disruption during pipe-jacking execution",
          "100% compliant with DMT 50-year storm flood return standards"
        ],
        ar: [
          "القدرة على تصريف 65,000 متر مكعب من المياه في الساعة",
          "عدم تعطيل حركة السير السطحية بفضل استخدام الحفر النفقي الموجه",
          "مطابقة كاملة لمعايير بلدية أبوظبي للأمطار المئوية (50-Year Return)"
        ]
      }
    },
    {
      id: "khalifa-city-medical-center",
      title: {
        en: "Khalifa City Prime Medical & Wellness Center",
        ar: "مركز خليفة الطبي التخصصي ومجمع الرعاية",
      },
      category: "commercial",
      categoryLabel: {
        en: "Healthcare Facility",
        ar: "منشآت طبية ورعاية صحية",
      },
      location: {
        en: "Khalifa City A, Abu Dhabi",
        ar: "مدينة خليفة (أ)، أبوظبي",
      },
      year: "2024",
      bua: "14,200 m² (152,000 sq.ft)",
      estidamaRating: "2 Pearls (PBRS)",
      status: {
        en: "Completed & Operational",
        ar: "منجز ومرخص بالكامل",
      },
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "Specialized clinical and surgical outpatient center engineered to strict Department of Health (DOH) standards. Includes positive-pressure surgical suites, medical gas piping networks, and lead-lined radiation shielding.",
        ar: "مركز طبي جراحي متقدم تم تصميمه وفق المعايير الصارمة لدائرة الصحة في أبوظبي (DOH)، ويضم غرف عمليات ذات ضغط إيجابي معزول، شبكات الغازات الطبية، وغرف الأشعة المبطنة بالرصاص.",
      },
      scope: {
        en: [
          "Healthcare Architecture & Medical Space Programming",
          "DOH & DMT Specialized Licensing Clearances",
          "HEPA Filtration, Cleanroom HVAC & Medical Gas Networks",
          "Vibration-Isolated Structural Slabs for MRI Scanners",
          "Emergency Power UPS & 100% Dual-Feed Reliability"
        ],
        ar: [
          "العمارة الطبية وتوزيع العيادات وفق متطلبات دائرة الصحة",
          "استخراج تراخيص دائرة الصحة ودائرة البلديات والنقل",
          "أنظمة تنقية الهواء الدقيقة HEPA وشبكات الغازات الطبية",
          "عزل الاهتزازات الإنشائية لأجهزة الرنين المغناطيسي والأشعة المقطعية",
          "أنظمة طوارئ كهربائية مزدوجة مع مولدات فورية بنسبة موثوقية 100%"
        ]
      },
      highlights: {
        en: [
          "12 state-of-the-art specialized medical clinics and day surgery",
          "First-pass inspection approval from Abu Dhabi Department of Health",
          "Zero acoustic transmission between imaging and consulting suites"
        ],
        ar: [
          "12 عيادة تخصصية متطورة وقسم لجراحة اليوم الواحد",
          "الحصول على اعتماد دائرة الصحة من الزيارة التفتيشية الأولى",
          "عزل صوتي تام بين أجنحة التشخيص الإشعاعي وغرف الأطباء"
        ]
      }
    },
    {
      id: "al-etihad-logistics-industrial-complex",
      title: {
        en: "Al Etihad Logistics & Advanced Manufacturing Hub",
        ar: "مجمع الاتحاد للخدمات اللوجستية والصناعات المتقدمة",
      },
      category: "industrial",
      categoryLabel: {
        en: "Industrial & Logistics",
        ar: "منشآت صناعية ولوجستية",
      },
      location: {
        en: "Industrial City of Abu Dhabi (ICAD), UAE",
        ar: "مدينة أبوظبي الصناعية (إيكاد)، أبوظبي",
      },
      year: "2023",
      bua: "38,000 m² (409,000 sq.ft)",
      status: {
        en: "Completed & Operational",
        ar: "تم التشغيل والتسليم",
      },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
      blueprintImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
      description: {
        en: "A massive high-bay logistics and advanced manufacturing facility engineered with 42-meter clear structural steel spans, heavy-duty floor slabs with 120 kN/m² point-load capacity, and automated fire deluge systems.",
        ar: "منشأة صناعية ولوجستية عملاقة تم تصميمها ببحور فولاذية عريضة تصل إلى 42 متراً بدون أعمدة وسيطة، وأرضيات خرسانية فائقة التحمل بجهد 120 كيلو نيوتن/م²، وأنظمة إطفاء مائي ورغوي متطورة.",
      },
      scope: {
        en: [
          "Industrial Structural Steel Engineering & Connection Detailing",
          "Heavy Heavy-Duty Concrete Slab on Grade with Steel Fibers",
          "Civil Defence Hazardous & High-Risk Fire Approvals",
          "ZonesCorp / KEZAD Authority Approvals & Permitting",
          "Turnkey Construction Supervision & As-Built Certification"
        ],
        ar: [
          "الهندسة الإنشائية للهياكل الفولاذية وتفاصيل الوصلات",
          "تصميم الأرضيات الخرسانية المسلحة بالألياف الفولاذية للأحمال الثقيلة",
          "اعتمادات الدفاع المدني للحرائق عالية الخطورة والمواد الكيميائية",
          "تراخيص كيزاد KEZAD وبلدية مصفح",
          "الإشراف الهندسي الشامل واستخراج شهادات إنجاز البناء"
        ]
      },
      highlights: {
        en: [
          "42-meter clear spans for automated robotic racking systems",
          "Heavy loading docks equipped with pneumatic levelers",
          "Rooftop solar PV structural provision for 1.8 MW installation"
        ],
        ar: [
          "بحور مفتوحة بعرض 42 متراً لتشغيل أنظمة التخزين الذكية المؤتمتة",
          "أرصفة تفريغ وشحن هيدروليكية مهيأة لأحدث أساطيل الشاحنات",
          "هيكل إنشائي مهيأ لتحمل منظومة خلايا شمسية بقدرة 1.8 ميجاواط"
        ]
      }
    }
  ],
  testimonials: [
    {
      id: "1",
      clientName: {
        en: "H.E. Saeed Al Mansoori",
        ar: "سعادة سعيد المنصوري",
      },
      role: {
        en: "Private Estate Owner",
        ar: "مالك قصر خاص",
      },
      company: {
        en: "Saadiyat Cultural District",
        ar: "جزيرة السعديات",
      },
      text: {
        en: "Mustashar Land transformed our vision into an architectural masterpiece. Their attention to structural durability, authority approvals with Abu Dhabi Municipality, and flawless Estidama compliance gave us total peace of mind.",
        ar: "قامت شركة مستشار لاند بتحويل رؤيتنا إلى تحفة معمارية استثنائية. دقة الحسابات الإنشائية وسرعة استخراج التراخيص من بلدية أبوظبي والتزامهم الصارم بنظام استدامة جعلت التجربة في غاية الاحترافية.",
      },
      rating: 5
    },
    {
      id: "2",
      clientName: {
        en: "Eng. Tariq Al Qasimi",
        ar: "م. طارق القاسمي",
      },
      role: {
        en: "Managing Director",
        ar: "المدير التنفيذي",
      },
      company: {
        en: "Horizon Heights Real Estate Investments",
        ar: "مجموعة هورايزون للاستثمار العقاري",
      },
      text: {
        en: "In our commercial tower project on Al Reem Island, Mustashar Land's lead consultancy team saved us months during the MePS permitting phase and reduced structural material waste by over 14% through value engineering.",
        ar: "خلال مشروع برجنا التجاري في جزيرة الريم، نجح فريق مستشار لاند في اختصار أشهر من مرحلة ترخيص MePS ووفر أكثر من 14% من تكاليف المواد الإنشائية عبر الهندسة القيمة دون أي مساس بالجودة.",
      },
      rating: 5
    },
    {
      id: "3",
      clientName: {
        en: "Mohammed Al Rumaithi",
        ar: "محمد الرميثي",
      },
      role: {
        en: "Chief Project Officer",
        ar: "رئيس قطاع المشاريع",
      },
      company: {
        en: "Gulf Infrastructure Developers",
        ar: "شركة الخليج لتطوير البنية التحتية",
      },
      text: {
        en: "Their technical rigor in stormwater hydraulic modeling and underground clash detection is second to none in Abu Dhabi. Highly recommended for complex civil and municipal infrastructure works.",
        ar: "كفاءتهم الهندسية العالية في النمذجة الهيدروليكية لشبكات تصريف مياه الأمطار ومنع تعارضات الخدمات الأرضية هي الأفضل في أبوظبي. نوصي بالتعامل معهم في كافة مشاريع البنية التحتية الكبرى.",
      },
      rating: 5
    }
  ],
  faqs: [
    {
      question: {
        en: "What is the typical timeline for obtaining an Abu Dhabi Building Permit (MePS)?",
        ar: "ما هي المدة الزمنية المعتادة لاستخراج رخصة البناء عبر منصة MePS في أبوظبي؟",
      },
      answer: {
        en: "For standard residential villas, full architectural, structural, and MEP approvals typically take 3 to 6 weeks once the concept design is finalized. For major commercial, high-rise, or industrial projects requiring Civil Defence and Environmental Agency reviews, approvals typically range from 6 to 12 weeks. Our dedicated authority liaisons ensure first-pass submissions to avoid delays.",
        ar: "بالنسبة للفلل السكنية الخاصة، يستغرق الاعتماد المعماري والإنشائي والكهروميكانيكي عادة ما بين 3 إلى 6 أسابيع بعد اعتماد المخطط المبدئي. أما بالنسبة للأبراج التجارية والمنشآت الصناعية التي تتطلب موافقات الدفاع المدني وهيئة البيئة، فتتراوح المدة بين 6 إلى 12 أسبوعاً. يحرص مهندسونا على تفادي أي ملاحظات لتسريع الاعتماد.",
      }
    },
    {
      question: {
        en: "How does Mustashar Land ensure compliance with the Abu Dhabi Estidama Pearl Rating?",
        ar: "كيف تضمن شركة مستشار لاند تحقيق متطلبات نظام تقييم اللؤلؤة (إستدامة)؟",
      },
      answer: {
        en: "Our in-house Pearl Qualified Professionals (PQP) integrate sustainability principles from the first sketch: optimizing building orientation, solar shading, high-efficiency insulation, water-saving fixtures, and renewable energy integration to guarantee 1-Pearl (mandatory) or 2/3-Pearl ratings.",
        ar: "يمتلك مكتبنا مهندسين معتمدين كخبراء لؤلؤة (PQP) يقومون بدمج معايير الاستدامة منذ المسودة الأولى: توجيه المبنى لمصادمة الشمس، كفاءة العزل الحراري، تقنيات ترشيد المياه، واستخدام الطاقة المتجددة لضمان نيل لؤلؤة واحدة (إلزامية) أو لؤلؤتين وثلاث لآلئ.",
      }
    },
    {
      question: {
        en: "What does the Construction Supervision service include?",
        ar: "ماذا تشمل خدمات الإشراف الهندسي على التنفيذ؟",
      },
      answer: {
        en: "Our supervision package includes assigning a certified Resident Engineer and QA/QC team to the site, conducting daily inspections of concrete pours, steel reinforcement, and MEP installations, reviewing contractor submittals, verifying material test reports, certifying payment certificates, and securing the final Building Completion Certificate (BCC).",
        ar: "تشمل خدمات الإشراف تعيين مهندس مقيم وفريق ضبط جودة بالموقع، إجراء الفحوصات الدورية لصب الخرسانات وحديد التسليح وتمديدات الكهروميكانيكا، تدقيق اعتماد المواد وفحوصات المختبرات، اعتماد المستخلصات المالية، واستخراج شهادة إنجاز البناء (BCC).",
      }
    },
    {
      question: {
        en: "Can Mustashar Land assist plot owners with contractor tendering and selection?",
        ar: "هل يقدم المكتب المساعدة لملاك الأراضي في طرح المناقصات واختيار المقاول المناسب؟",
      },
      answer: {
        en: "Yes. We prepare detailed Tender Packages including comprehensive Bills of Quantities (BOQ), technical specifications, and FIDIC contracts. We invite qualified Grade-A/B licensed contractors, perform rigorous technical and commercial bid evaluations, and recommend the best value partner.",
        ar: "نعم بالتأكيد. نقوم بإعداد كراسة المناقصة المتكاملة بما فيها جداول الكميات المفصلة (BOQ) والمواصفات الفنية وعقود الفيديك. نقوم بدعوة المقاولين المؤهلين والمصنفين، وإجراء تقييم فني ومالي دقيق لضمان اختيار أفضل سعر وأعلى جودة.",
      }
    }
  ]
};
