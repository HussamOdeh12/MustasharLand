export type Language = 'en' | 'ar';

export interface ServiceMethodologyStep {
  step: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export interface ServiceDiscipline {
  id: string;
  number: string;
  category: 'structural' | 'supervision' | 'infrastructure';
  categoryLabel: { en: string; ar: string };
  iconName: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  overview: { en: string; ar: string };
  extendedNarrative: { en: string[]; ar: string[] };
  keyDeliverables: { en: string[]; ar: string[] };
  methodology: ServiceMethodologyStep[];
  standardsAndCodes: { en: string[]; ar: string[] };
  toolsAndSoftware: string[];
  heroImage: string;
  highlights: { en: string[]; ar: string[] };
  relatedProjectSlugs: string[];
}

export interface ProjectDisciplineBadge {
  id: string;
  title: { en: string; ar: string };
}

export interface Project {
  id: string;
  title: { en: string; ar: string };
  category: 'sports' | 'residential' | 'technical-support' | 'infrastructure' | 'governmental';
  categoryLabel: { en: string; ar: string };
  location?: { en: string; ar: string };
  heroImage: string;
  isRepresentativeImage?: boolean;
  galleryImages?: string[];
  summary: { en: string; ar: string };
  scope?: { en: string[]; ar: string[] };
  coveredEntities?: { en: string[]; ar: string[] };
  disciplinesInvolved: ProjectDisciplineBadge[];
}

export interface CompanyProfile {
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  hqAddressEn: string;
  hqAddressAr: string;
  poBox: string;
  phonePrimary: string;
  email: string;
  establishedYear: string;
  ownershipEn: string;
  ownershipAr: string;
  municipalitiesEn: string[];
  municipalitiesAr: string[];
  coreStandards: string[];
}

export const companyProfile: CompanyProfile = {
  nameEn: 'MUSTASHAR LAND Engineering Consultancy',
  nameAr: 'مستشار لاند للاستشارات الهندسية',
  taglineEn: 'Engineering Precision. Emirati Leadership. Built for Generations.',
  taglineAr: 'دقة هندسية، ريادة إماراتية، وعمارة تدوم للأجيال.',
  hqAddressEn: 'Abu Dhabi, UAE',
  hqAddressAr: 'أبوظبي، دولة الإمارات العربية المتحدة',
  poBox: 'P.O. Box 58571',
  phonePrimary: '+971 2 658 8099',
  email: 'info@mustasharland.ae',
  establishedYear: '2019',
  ownershipEn: '100% Emirati-Owned & Managed Multidisciplinary Engineering Consultancy',
  ownershipAr: 'شركة استشارات هندسية متعددة التخصصات بملكية وإدارة إماراتية 100%',
  municipalitiesEn: [
    'Abu Dhabi City Municipality',
    'Al Ain City Municipality',
    'Al Dhafra Western Region Municipality',
  ],
  municipalitiesAr: [
    'بلدية مدينة أبوظبي',
    'بلدية مدينة العين',
    'بلدية منطقة الظفرة',
  ],
  coreStandards: ['ACI', 'ASTM', 'ISO', 'EN', 'BS'],
};

export const serviceDisciplines: ServiceDiscipline[] = [
  {
    id: 'civil-structural',
    number: '01',
    category: 'structural',
    categoryLabel: { en: 'Structure & Engineering', ar: 'الهندسة والإنشاءات' },
    iconName: 'Building2',
    title: {
      en: 'Civil & Structural Engineering',
      ar: 'الهندسة المدنية والإنشائية',
    },
    tagline: {
      en: 'Structural analysis, foundation engineering, and reinforced concrete design.',
      ar: 'تحليل إنشائي متقدم، تصميم الأساسات، وحسابات الخرسانة المسلحة.',
    },
    overview: {
      en: 'Our structural engineering practice delivers safe, cost-optimized, and resilient structural designs for villas, commercial developments, and sports facilities across the UAE. We apply computational finite element modeling to analyze load paths, wind forces, and foundation settlements under recognized engineering standards.',
      ar: 'يقدم قسم الهندسة الإنشائية تصاميم آمنة واقتصادية للفلل السكنية، المباني التجارية، والمنشآت الرياضية في دولة الإمارات. نعتمد النمذجة الإنشائية المحوسبة بالعناصر المحدودة لدراسة مسارات وتوزيع الأحمال، قوى الرياح، وهبوط الأساسات وفق المعايير الهندسية المعتمدة.',
    },
    extendedNarrative: {
      en: [
        'Structural engineering at MUSTASHAR LAND represents the union of mathematical rigor and field practicality. Every calculation is performed by licensed senior structural engineers using industry-standard finite element software, ensuring structural stability under all static, seismic, and lateral wind conditions typical of the UAE coastal and desert environments.',
        'We specialize in deep foundation analysis, raft footing designs on saline soils, post-tensioned slab systems, and structural steel framing. Our close coordination with architectural and MEP teams guarantees efficient column grids and uncompromised spatial flow without excessive material consumption.',
        'During the construction phase, our structural engineers conduct site verification audits to inspect rebar placement, concrete mix designs, and curing protocols before every concrete pour, safeguarding structural longevity and safety.',
      ],
      ar: [
        'تمثل الهندسة الإنشائية في مستشار لاند الرابط الوثيق بين الدقة الرياضية والواقع التنفيذي الميداني. يقوم مهندسونا بحسابات الأحمال عبر أحدث برمجيات التحليل الإنشائي بالعناصر المحدودة لضمان الثبات الكامل تحت تأثير الأحمال الساكنة والديناميكية والرياح في البيئات الساحلية والصحراوية لدولة الإمارات.',
        'نتخصص في تصميم الأساسات العميقة والقواعد الخرسانية المعالجة للتربة الملحية، البلاطات مسبقة الإجهاد، والهياكل المعدنية المتطورة. ويضمن التنسيق الدقيق مع الأقسام المعمارية والكهروميكانيكية توفير مساحات مفتوحة دون هدر في مواد البناء.',
        'خلال مرحلة التنفيذ، يقوم مهندسونا الإنشائيون بزيارات رقابية وتدقيق فني مباشر على أعمال حديد التسليح واعتماد خلطات الخرسانة قبل الصب، لضمان أعلى مستويات الأمان والجودة الإنشائية.',
      ],
    },
    keyDeliverables: {
      en: [
        'Comprehensive Structural Calculation Reports & Mathematical Proofs',
        'Foundation Layout & Substructure Engineering Drawings',
        'Reinforced Concrete (RC) Slab, Column & Beam Detailing',
        'Structural Steel Frame & Connection Specifications',
        'Finite Element (FEA) Load Distribution & Wind Stress Analysis',
        'As-Built Structural Documentation & Site Pour Clearances',
      ],
      ar: [
        'المذكرات الحسابية الإنشائية المتكاملة والتقارير الفنية',
        'مخططات الأساسات والقواعد والمنشآت السفلية',
        'تفاصيل تسليح الخرسانة للبلاطات والأعمدة والجسور',
        'مخططات الهياكل الفولاذية وتفاصيل الوصلات الميكانيكية',
        'التحليل الإنشائي بالعناصر المحدودة ومحاكاة أحمال الرياح',
        'مخططات الواقع المنفذ وتصاريح صب الخرسانة الميدانية',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Geotechnical & Load Modeling', ar: 'النمذجة الجيوتقنية ودراسة الأحمال' },
        description: {
          en: 'Review soil investigation reports, evaluate safe bearing capacity, establish wind exposure parameters, and construct initial 3D finite element structural geometry.',
          ar: 'مراجعة تقارير فحص التربة، تحديد قدرة التحمل الآمنة، تحديد معاملات الرياح، وبناء النموذج الإنشائي ثلاثي الأبعاد.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Detailed Element Sizing & Detailing', ar: 'التصميم الإنشائي التفصيلي' },
        description: {
          en: 'Size concrete sections, calculate required reinforcement ratios, engineer transfer beams and foundation rafts, and optimize material volumes.',
          ar: 'تحديد قطاعات الخرسانة، حساب نسب حديد التسليح، تصميم الجسور الناقلة والقواعد المشتركة، وترشيد استهلاك المواد.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Drawing Production & Coordination', ar: 'إعداد المخططات والتنسيق' },
        description: {
          en: 'Generate high-definition CAD structural packages, perform clash checks against MEP sleeves, and compile technical structural specifications.',
          ar: 'إصدار حزم المخططات الإنشائية التنفيذية، تدقيق فتحات التمديدات الكهروميكانيكية لمنع التعارضات، وإعداد المواصفات الفنية.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Site Supervision & Inspection', ar: 'الإشراف الميداني والتفتيش' },
        description: {
          en: 'Inspect formwork dimensions, verify rebar grade, spacing, and lap lengths, review concrete slump tickets, and authorize placement.',
          ar: 'فحص الشدات الخرسانية، تدقيق أقطار وتباعدات وأطوال ركوب حديد التسليح، فحص قوام الخرسانة، وإصدار إذن الصب.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ACI Standards (American Concrete Institute)',
        'ASTM Standards (American Society for Testing and Materials)',
        'EN Standards (European Standards)',
        'BS Standards (British Standards)',
      ],
      ar: [
        'معايير معهد الخرسانة الأمريكي (ACI)',
        'معايير الجمعية الأمريكية لاختبار المواد (ASTM)',
        'المعايير الأوروبية (EN)',
        'المعايير البريطانية (BS)',
      ],
    },
    toolsAndSoftware: [
      'CSI ETABS (High-Rise & Frame Analysis)',
      'CSI SAFE (Foundations & Slab Systems)',
      'CSI SAP2000 (Complex Structures)',
      'Autodesk Revit Structural',
      'AutoCAD Structural Detailing',
      'Prokon Structural Analysis',
    ],
    heroImage:
      '/images/disciplines/structural-engineering.jpg',
    highlights: {
      en: [
        'Structural design and engineering review for 30 private residential villas',
        'Engineering coordination for landmark sports facilities',
        'Structural review and detailing aligned with recognized industry standards',
      ],
      ar: [
        'تصميم وتدقيق إنشائي لـ 30 فيلا سكنية خاصة',
        'تنسيق هندسي لمنشآت رياضية بارزة',
        'تدقيق وتفصيل إنشائي وفق المعايير الهندسية المعتمدة',
      ],
    },
    relatedProjectSlugs: ['mohammed-bin-zayed-stadium', '30-private-villas', 'sharjah-roads-infrastructure'],
  },
  {
    id: 'construction-supervision',
    number: '02',
    category: 'supervision',
    categoryLabel: { en: 'Supervision & PMC', ar: 'الإشراف وإدارة المشاريع' },
    iconName: 'HardHat',
    title: {
      en: 'Construction Supervision & QA/QC',
      ar: 'الإشراف الهندسي وضبط الجودة',
    },
    tagline: {
      en: 'Resident engineering presence, materials compliance, and site quality control.',
      ar: 'إشراف مقيم في الموقع، فحص واعتماد المواد، والرقابة الفنية الميدانية.',
    },
    overview: {
      en: 'We provide resident engineering teams on-site to oversee construction works. From foundation preparation and structural rebar inspection to material test review and MEP works, our engineers verify adherence to approved drawings, contractual milestones, and technical specifications.',
      ar: 'نوفر مهندسين مقيمين في مواقع المشاريع لمتابعة ومراقبة أعمال التنفيذ بدقة. من فحص تسليح العناصر الإنشائية واعتماد المواد إلى تدقيق الأعمال الكهروميكانيكية، نضمن مطابقة المقاول للمخططات المعتمدة والمواصفات الفنية والجداول الزمنية التعاقدية.',
    },
    extendedNarrative: {
      en: [
        'Construction supervision is the frontline defense of engineering quality. At MUSTASHAR LAND, our resident site engineers maintain a continuous, rigorous presence across project milestones, enforcing total compliance with approved drawings and specifications.',
        'We oversee all laboratory and field material testing, including compressive cylinder crushing, soil compaction testing, tensile bar tests, and concrete temperature logs. Daily and weekly technical site inspection reports give clients complete transparency into progress and quality.',
        'Our engineers manage Request for Information (RFI) processes, review contractor shop drawings, track technical non-conformances (NCRs) to prompt resolution, and certify contractor payment applications based on verified physical completion.',
      ],
      ar: [
        'يمثل الإشراف الهندسي خط الدفاع الأول لحماية جودة وسلامة البناء. في مستشار لاند، يحرص مهندسونا المقيمون على التواجد الميداني المستمر لمراقبة كافة مراحل العمل وضمان التزام المقاول الصارم بالمخططات والمواصفات المعتمدة.',
        'نشرف على جميع الفحوصات المخبرية والموقعية للمواد، بما فيها اختبارات كسر مكعبات الخرسانة، دمك التربة، شد حديد التسليح، وقياس درجات حرارة الصب. ونزود الملاك بتقارير دورية تضمن الشفافية التامة.',
        'يدير فريقنا طلبات الاستفسار الفني (RFI)، ويدقق المخططات التنفيذية للمقاول (Shop Drawings)، ويتابع إغلاق ملاحظات عدم المطابقة (NCRs) فوراً، مع اعتماد المستخلصات المالية بناءً على الإنجاز الفعلي.',
      ],
    },
    keyDeliverables: {
      en: [
        'Resident Site Engineer Daily & Weekly Inspection Dossiers',
        'Material Inspection Requests (MIR) Review & Testing Log',
        'Concrete Pour Clearance Verification & Cylinder Test Logs',
        'Non-Conformance Report (NCR) Tracking & Closure Protocols',
        'Contractor Payment Certificate Verification & Measurement Audits',
        'Substantial Completion & Final Building Handover Documentation',
      ],
      ar: [
        'تقارير المعاينة اليومية والأسبوعية الصادرة عن المهندس المقيم',
        'سجلات فحص واعتماد عينات ومواد البناء (MIR)',
        'تصاريح صب الخرسانة وسجلات اختبارات كسر العينات',
        'إصدار ومتابعة إغلاق تقارير عدم المطابقة الفنية (NCR)',
        'تدقيق واعتماد المستخلصات المالية للمقاول ومطابقة الكميات',
        'إجراءات الاستلام الابتدائي وتوثيق التسليم النهائي للمشروع',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Site Mobilization & QA/QC Setup', ar: 'بدء الموقع وخطة الجودة' },
        description: {
          en: 'Approve contractor project quality plan, establish site inspection routines, and set up testing documentation workflows.',
          ar: 'اعتماد خطة ضبط الجودة للمقاول، تحديد جداول المعاينات الدورية، وتأسيس دورة المستندات الفنية.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Substructure & Framing Inspections', ar: 'فحوصات الأساسات والهيكل الإنشائي' },
        description: {
          en: 'Perform pre-pour rebar checks, inspect formwork rigidity, monitor concrete placement, and witness laboratory compression tests.',
          ar: 'معاينة حديد التسليح قبل الصب، فحص متانة القوالب، مراقبة عمليات الصب، وحضور اختبارات كسر العينات.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Architectural Fit-Out & MEP Oversight', ar: 'الإشراف على التشطيبات والكهروميكانيك' },
        description: {
          en: 'Inspect masonry, plastering, waterproofing membranes, electrical containment, and plumbing pressure tests.',
          ar: 'معاينة أعمال البناء، البياض، عزل الرطوبة والمياه، مسارات التمديدات الكهربائية، واختبارات ضغط شبكات السباكة.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Snagging, Testing & Handover', ar: 'قائمة الملاحظات والاختبارات والتسليم' },
        description: {
          en: 'Compile detailed snag lists, supervise remedial works, review as-built drawings, and coordinate final project handover.',
          ar: 'إعداد قوائم الملاحظات الفنية (Snag List)، الإشراف على تصحيحها، تدقيق مخططات المنفذ، وتنسيق التسليم النهائي.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Quality & Inspection)',
        'ASTM Standards (Materials Testing)',
        'BS Standards (British Standards)',
      ],
      ar: [
        'معايير الأيزو العالمية (ISO)',
        'معايير الجمعية الأمريكية لاختبار المواد (ASTM)',
        'المعايير البريطانية (BS)',
      ],
    },
    toolsAndSoftware: [
      'Site Progress Tracking & Milestone Checklists',
      'Quality Control Field Inspection Checklists',
      'AutoCAD Drawing Verification',
      'Comprehensive Engineering Progress Reporting',
    ],
    heroImage:
      '/images/disciplines/construction-supervision.jpg',
    highlights: {
      en: [
        'Full resident supervision on 30 private villas across Abu Dhabi emirate',
        'On-site technical support for sports facilities and municipal infrastructure',
        'Disciplined non-conformance tracking to ensure zero defect handovers',
      ],
      ar: [
        'إشراف مقيم متكامل على 30 فيلا سكنية خاصة في مختلف مناطق أبوظبي',
        'دعم فني ميداني للمنشآت الرياضية ومشاريع البنية التحتية',
        'متابعة منضبطة لإغلاق الملاحظات لضمان تسليم خالي من العيوب',
      ],
    },
    relatedProjectSlugs: ['30-private-villas', 'mohammed-bin-zayed-stadium'],
  },
  {
    id: 'pmc',
    number: '03',
    category: 'supervision',
    categoryLabel: { en: 'Supervision & PMC', ar: 'الإشراف وإدارة المشاريع' },
    iconName: 'Briefcase',
    title: {
      en: 'Project Management & Technical Consultancy',
      ar: 'إدارة المشاريع والاستشارات الفنية',
    },
    tagline: {
      en: 'Project schedule control, BOQ evaluation, and comprehensive technical governance.',
      ar: 'ضبط الجداول الزمنية، تدقيق جداول الكميات، وإدارة المشاريع الهندسية.',
    },
    overview: {
      en: 'Our project management team acts as the client’s trusted technical advisor throughout the development lifecycle. We establish structured project schedules, review tender documentation, verify Bills of Quantities (BOQ), and monitor milestone progress to prevent delays and cost overruns.',
      ar: 'يعمل فريق إدارة المشاريع كمستشار فني موثوق للمالك في كافة مراحل المشروع. نضع الجداول الزمنية المنضبطة، ندقق وثائق المناقصات وجداول الكميات (BOQ)، ونتابع مراحل الإنجاز لضمان سير العمل وفق الخطط والميزانيات المعتمدة وتفادي التأخير.',
    },
    extendedNarrative: {
      en: [
        'Engineering governance requires transparent leadership and decisive coordination. MUSTASHAR LAND’s project management consultancy (PMC) safeguards the owner’s investment by aligning contractors, authorities, and specialized trades behind a unified project charter.',
        'We develop baseline project master schedules using Critical Path Method (CPM) modeling, conduct monthly schedule delay assessments, and enforce recovery strategies before minor delays become project-threatening bottlenecks.',
        'Our technical consultancy extends to contract administration, change order audits, value engineering appraisals, and dispute mitigation, providing clients with peace of mind from project inception through final operational commissioning.',
      ],
      ar: [
        'تتطلب الحوكمة الهندسية قيادة مهنية واضحة وتنسيقاً حاسماً بين كافة أطراف المشروع. يحمي فريق إدارة المشاريع في مستشار لاند استثمارات الملاك عبر مواءمة جهود المقاولين والجهات الخدمية وفق خطة عمل موحدة.',
        'نقوم بإعداد الجداول الزمنية الرئيسية وفق أسلوب المسار الحرج (CPM)، ومتابعة الانحرافات الزمنية شهرياً ووضع خطط التدارك الفورية قبل تحول أي تأخير بسيط إلى عائق يعطل المشروع.',
        'وتشمل استشاراتنا إدارة العقود الهندسية، تدقيق الأوامر التغييرية، دراسات الهندسة القيمة، وإجراءات التسليم النهائي بكفاءة وموثوقية عالية.',
      ],
    },
    keyDeliverables: {
      en: [
        'Baseline Project Master Schedule & Critical Path (CPM) Reports',
        'Tender Package Compilation & Contractor Bid Comparison Analysis',
        'Bill of Quantities (BOQ) Audit & Measurement Verification',
        'Monthly Executive Progress & Schedule Variance Dashboard',
        'Variation Order Evaluation & Cost Control Audit Reports',
        'Final Contract Closeout & Operational Handover Dossier',
      ],
      ar: [
        'الجدول الزمني المرجعي للمشروع ومتابعة المسار الحرج (CPM)',
        'إعداد كراسات المناقصات وتحليل ومقارنة عروض المقاولين',
        'تدقيق جداول الكميات ومراجعة القياسات والمواصفات (BOQ)',
        'تقارير المتابعة الدورية للإدارة ولوحات مؤشرات الإنجاز',
        'تدقيق الأوامر التغييرية وتقييم المطالبات المالية والتكاليف',
        'إجراءات الإغلاق التعاقدي النهائي وحزمة وثائق التشغيل',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Project Charter & Baseline Scheduling', ar: 'ميثاق المشروع والجدول الزمني' },
        description: {
          en: 'Define project scope, establish milestone work breakdown structures (WBS), and build the baseline project schedule.',
          ar: 'تحديد نطاق المشروع، بناء هيكل تجزئة الأعمال (WBS)، وإعداد الجدول الزمني المرجعي للمشروع.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Tendering & Contractor Evaluation', ar: 'المناقصات وتقييم المقاولين' },
        description: {
          en: 'Review tender documents, verify BOQ items, evaluate contractor technical and commercial proposals, and recommend awards.',
          ar: 'تدقيق وثائق المناقصات، مراجعة بنود جداول الكميات، تقييم عروض المقاولين الفنية والمالية، ورفع التوصيات.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Execution Control & Progress Monitoring', ar: 'متابعة التنفيذ وضبط التقدم' },
        description: {
          en: 'Chair weekly coordination meetings, track progress against CPM baselines, review payment requests, and resolve site challenges.',
          ar: 'إدارة اجتماعات التنسيق الأسبوعية، متابعة نسب الإنجاز الفعلي مقارنة بالمخطط، وتدقيق الدفعات المالية.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Commissioning & Handover Administration', ar: 'التشغيل والتسليم الإداري' },
        description: {
          en: 'Supervise testing and commissioning of building systems, compile warranties and manuals, and finalize contractual closeout.',
          ar: 'الإشراف على فحص وتشغيل الأنظمة، تجميع شهادات الضمان وكتيبات التشغيل، وإنجاز الإغلاق التعاقدي النهائي.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Project & Quality Management Guidelines)',
        'BS Standards (British Standards for Project Documentation)',
      ],
      ar: [
        'معايير الأيزو العالمية (ISO)',
        'المعايير البريطانية لتوثيق المشاريع (BS)',
      ],
    },
    toolsAndSoftware: [
      'Project Scheduling & Milestone Tracking Systems',
      'Cost Control & BOQ Spreadsheets',
      'Technical Coordination Documentation Systems',
      'Engineering Quality Management Frameworks',
    ],
    heroImage:
      '/images/disciplines/project-management.jpg',
    highlights: {
      en: [
        'Active governance ensuring milestone compliance across residential and infrastructure sectors',
        'Rigorous BOQ verification preventing cost overrun disputes',
        'Proven project coordination across Abu Dhabi, Al Ain, and regional emirates',
      ],
      ar: [
        'حوكمة هندسية منضبطة لضمان الالتزام بالمواعيد في المشاريع السكنية والبنية التحتية',
        'تدقيق دقيق لجداول الكميات لمنع النزاعات وتجاوز الميزانيات',
        'سجل تنسيق هندسي ناجح عبر بلديات أبوظبي والعين ومختلف إمارات الدولة',
      ],
    },
    relatedProjectSlugs: ['mohammed-bin-zayed-stadium', '30-private-villas'],
  },
  {
    id: 'infrastructure-planning',
    number: '04',
    category: 'infrastructure',
    categoryLabel: { en: 'Infrastructure & Urban', ar: 'البنية التحتية والتخطيط' },
    iconName: 'Droplets',
    title: {
      en: 'Infrastructure Planning & Site Coordination',
      ar: 'تخطيط البنية التحتية والتنسيق الموقعي',
    },
    tagline: {
      en: 'Infrastructure layout planning, utility corridor coordination, and environmental site studies.',
      ar: 'تخطيط البنية التحتية، تنسيق مسارات الخدمات، والدراسات البيئية والموقعية.',
    },
    overview: {
      en: 'We provide infrastructure planning and utility corridor coordination tailored to local site parameters. Our scope encompasses infrastructure layout planning, site grading, surface drainage concepts, and environmental impact studies adhering to UAE standards.',
      ar: 'نقدم خدمات تخطيط البنية التحتية وتنسيق مسارات الخدمات بما يتناسب مع طبيعة الموقع. يشمل نطاق عملنا التخطيط العام لشبكات الخدمات، دراسات مناسيب الأرض والتصريف السطحي، ودراسات تقييم الأثر البيئي وفق المعايير المعتمدة في الدولة.',
    },
    extendedNarrative: {
      en: [
        'Infrastructure systems form the critical backbone of modern urban developments. MUSTASHAR LAND’s civil engineers specialize in coordinating complex underground wet utilities, power networks, and road corridors to ensure long-term resilience.',
        'Our planning processes evaluate existing municipal infrastructure capacities, identify connection points, coordinate right-of-way reservations, and resolve spatial clashes between gravity sewer lines, stormwater systems, and pressurized potable water networks.',
        'We support projects with comprehensive site grading models to prevent ponding during seasonal rainfall, environmental site appraisals, and utility alignment drawings that facilitate smooth technical reviews across regional municipal authorities.',
      ],
      ar: [
        'تشكل شبكات البنية التحتية العمود الفقري للمشاريع والمجتمعات العمرانية الحديثة. يتخصص مهندسو مستشار لاند في تخطيط مسارات الخدمات الأرضية، شبكات المياه والصرف، وشبكات الطرق لضمان استدامتها وكفاءتها التشغيلية.',
        'تشمل دراساتنا تقييم قدرة الشبكات القائمة، تحديد نقاط الربط المعتمدة، حجز حرم الخدمات وتفادي التعارضات المكانية بين خطوط الصرف الصحي وشبكات تصريف الأمطار وخطوط مياه الشرب.',
        'كما نقوم بإعداد دراسات مناسيب تسوية الأراضي لمنع تجمعات المياه أثناء هطول الأمطار، والدراسات البيئية، وتجهيز المخططات الفنية التي تسهل إجراءات المراجعة لدى البلديات والجهات المختصة.',
      ],
    },
    keyDeliverables: {
      en: [
        'Infrastructure Master Layout & Network Routing Drawings',
        'Utility Corridor Spatial Coordination & Clash Detection Reports',
        'Site Earthwork Grading, Contours & Surface Drainage Studies',
        'Environmental Site Assessment & Technical Study Packages',
        'Right-of-Way (ROW) Cross-Section & Reservation Drawings',
        'Municipal Technical Coordination & Alignment Dossiers',
      ],
      ar: [
        'مخططات التوزيع العام لمسارات شبكات البنية التحتية',
        'تقارير التنسيق المكاني لحرم الخدمات وتفادي التعارضات',
        'دراسات تسوية مناسيب الأرض والتصريف السطحي لمياه الأمطار',
        'حزم دراسات تقييم الأثر البيئي والدعم الفني الموقعي',
        'مخططات القطاعات العرضية لحرم الطرق ومسارات الخدمات',
        'وثائق المتابعة والتنسيق الفني مع الجهات البلدية والخدمية',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Site Appraisal & Utilities Survey', ar: 'المعاينة الميدانية ومسح الخدمات' },
        description: {
          en: 'Survey existing utilities data, review topography contours, evaluate connection points, and study municipal right-of-way guidelines.',
          ar: 'مسح بيانات الخدمات القائمة، مراجعة الرفع الطبوغرافي، تحديد نقاط الربط، ودراسة اشتراطات حرم الطرق.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Corridor Planning & Alignment', ar: 'تخطيط المسارات وتنسيق الخدمات' },
        description: {
          en: 'Design utility corridors, allocate underground zones for wet and dry networks, and verify minimum clearance separations.',
          ar: 'تصميم مسارات الخدمات، تخصيص المناطق للشبكات الرطبة والجافة، والتأكد من مسافات الأمان المعتمدة.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Grading & Surface Drainage Analysis', ar: 'دراسات التسوية والتصريف السطحي' },
        description: {
          en: 'Calculate cut-and-fill volumes, model surface runoff slopes, and position retention points to protect infrastructure.',
          ar: 'حساب كميات الحفر والردم، نمذجة ميول تصريف المياه السطحية، وتحديد نقاط التجميع لحماية المنشآت.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Technical Review Package Compilation', ar: 'إعداد حزم المراجعة الفنية' },
        description: {
          en: 'Finalize coordinated CAD drawing sets, compile technical specifications, and assemble documentation for municipal reviews.',
          ar: 'إنجاز حزم المخططات المنسقة، إعداد المواصفات الفنية، وتجهيز الوثائق للمراجعات البلدية المعتمدة.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ASTM Standards (Infrastructure Materials & Piping)',
        'BS Standards (British Standards for Drainage & Infrastructure)',
        'EN Standards (European Standards)',
      ],
      ar: [
        'معايير الجمعية الأمريكية لاختبار المواد (ASTM)',
        'المعايير البريطانية لشبكات الصرف والبنية التحتية (BS)',
        'المعايير الأوروبية (EN)',
      ],
    },
    toolsAndSoftware: [
      'Autodesk Civil 3D',
      'AutoCAD Civil & Mapping',
      'Hydraulic Flow Calculation Tools',
      'Geospatial Mapping Layers',
    ],
    heroImage:
      '/images/projects/infrastructure-sharjah.jpg',
    highlights: {
      en: [
        'Roadway and infrastructure consultancy references in Sharjah',
        'Technical coordination with Abu Dhabi Sewerage Services Company',
        'Infrastructure planning adhering to recognized technical standards',
      ],
      ar: [
        'مراجع استشارية لمشاريع الطرق والبنية التحتية في الشارقة',
        'تنسيق فني مع شركة أبوظبي لخدمات الصرف الصحي',
        'تخطيط للبنية التحتية وفق المعايير الهندسية المعتمدة',
      ],
    },
    relatedProjectSlugs: ['sharjah-roads-infrastructure', 'abu-dhabi-sewerage-services'],
  },
  {
    id: 'urban-gis',
    number: '05',
    category: 'infrastructure',
    categoryLabel: { en: 'Infrastructure & Urban', ar: 'البنية التحتية والتخطيط' },
    iconName: 'Map',
    title: {
      en: 'Urban Planning & GIS Addressing Support',
      ar: 'التخطيط الحضري ونظم المعلومات الجغرافية (GIS)',
    },
    tagline: {
      en: 'Master land-use planning, GIS spatial mapping, and urban addressing support.',
      ar: 'تخطيط استعمالات الأراضي، نظم المعلومات الجغرافية، والدعم الفني للعنونة الحضرية.',
    },
    overview: {
      en: 'Our urban planning specialists provide spatial development frameworks that optimize land utilization while aligning with municipal master plans. We incorporate GIS geospatial layers and support urban addressing and spatial organization.',
      ar: 'يقدم خبراؤنا في التخطيط العمراني دراسات لتخطيط الأراضي واستغلال المساحات بأعلى كفاءة مع الالتزام بالمخططات الهيكلية. ندمج طبقات نظم المعلومات الجغرافية (GIS) وندعم متطلبات العنونة والتنظيم المكاني للمشاريع.',
    },
    extendedNarrative: {
      en: [
        'Sustainable urban form requires balance between spatial efficiency, circulation hierarchies, and statutory planning controls. MUSTASHAR LAND delivers master planning frameworks that respect local Emirati context and municipal zoning regulations.',
        'We integrate geographic information system (GIS) layers to analyze site accessibility, boundary alignments, setback requirements, and spatial buffering. Our team supports urban addressing compliance and geodatabase mapping for residential and mixed developments.',
        'Whether organizing plot subdivisions, circulation networks, or public realm interfaces, our urban planning consultants provide data-driven spatial frameworks that streamline municipal approvals and maximize land value.',
      ],
      ar: [
        'يتطلب التخطيط العمراني المستدام توازناً دقيقاً بين كفاءة استغلال المساحات، تدرج شبكات الحركة، والاشتراطات التخطيطية المعتمدة. تقدم مستشار لاند أطراً تخطيطية تراعي الهوية المحلية ولوائح البناء البلدية.',
        'نقوم بدمج طبقات نظم المعلومات الجغرافية (GIS) لتحليل سهولة الوصول، حدود القطع، الارتدادات القانونية، ومناطق الحماية. وندعم متطلبات نظام العنونة والتنظيم الجغرافي للمشاريع السكنية والتجارية.',
        'سواء كان العمل لتقسيم الأراضي، شبكات الطرق الداخلية، أو تخطيط الفراغات العامة، يوفر خبراؤنا حلولاً تستند إلى البيانات المكانية الدقيقة لتسهيل الاعتمادات البلدية وتحقيق أعلى قيمة للأراضي.',
      ],
    },
    keyDeliverables: {
      en: [
        'Master Land-Use Planning & Spatial Organization Plans',
        'GIS Spatial Mapping Layers & Geodatabase Integration',
        'Plot Subdivision Layouts & Setback Compliance Dossiers',
        'Vehicular & Pedestrian Circulation Network Layouts',
        'Addressing Maps, Signage Layouts & GIS-Integrated Databases',
        'Municipal Master Plan Consistency & Technical Review Reports',
      ],
      ar: [
        'المخططات الهيكلية لاستعمالات الأراضي والتنظيم المكاني',
        'طبقات الخرائط ونظم المعلومات الجغرافية (GIS)',
        'مخططات تقسيم الأراضي ومطابقة الارتدادات التخطيطية',
        'شبكات حركة المركبات ومسارات المشاة الداخلية',
        'خرائط العنونة، ومخططات اللوحات الإرشادية، وقواعد بيانات GIS',
        'تقارير مطابقة المخططات للاشتراطات التخطيطية البلدية',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Zoning & Context Appraisal', ar: 'دراسة الاشتراطات والمحددات' },
        description: {
          en: 'Review master plan zoning regulations, allowable floor area ratios (FAR), building heights, setbacks, and road network interfaces.',
          ar: 'مراجعة اشتراطات التخطيط، نسب البناء المسموحة (FAR)، الارتفاعات، الارتدادات، والربط بشبكات الطرق.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Spatial Allocation & Subdivision', ar: 'التوزيع المكاني والتقسيم' },
        description: {
          en: 'Program functional zones, optimize plot parcelization, structure circulation hierarchies, and allocate utility buffers.',
          ar: 'توزيع الاستعمالات الوظيفية، تنظيم قطع الأراضي، تحديد تدرج الشوارع، وحجز مسارات الخدمات.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'GIS Mapping & Spatial Data Integration', ar: 'الخرائط المكانية ودمج بيانات GIS' },
        description: {
          en: 'Map boundary coordinates, align geospatial layers with municipal geodatabases, and generate addressing reference data.',
          ar: 'إسقاط إحداثيات الحدود، مطابقة الطبقات الجغرافية مع قواعد بيانات البلديات، وتجهيز بيانات العنونة.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Municipal Technical Alignment', ar: 'المطابقة والاعتماد البلدي' },
        description: {
          en: 'Assemble planning submission packages, verify complete regulatory compliance, and assist through technical reviews.',
          ar: 'تجميع المخططات والملفات التخطيطية، التحقق من مطابقة كافة الاشتراطات، والمتابعة الفنية للاعتماد.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Geospatial Information & Mapping)',
        'BS Standards (British Standards for Planning Documentation)',
      ],
      ar: [
        'معايير الأيزو العالمية لنظم المعلومات الجغرافية (ISO)',
        'المعايير البريطانية لتوثيق المخططات (BS)',
      ],
    },
    toolsAndSoftware: [
      'ArcGIS Pro / ESRI Geospatial Tools',
      'AutoCAD Map 3D',
      'QGIS Open Spatial Platform',
      'Autodesk Civil 3D',
    ],
    heroImage:
      '/images/disciplines/urban-planning.jpg',
    highlights: {
      en: [
        'Integrated spatial planning across residential projects',
        'Technical support aligning projects with urban planning guidelines',
        'Geospatial and mapping support for regional development',
      ],
      ar: [
        'تخطيط مكاني متكامل للمشاريع السكنية والعمرانية',
        'دعم فني لمطابقة المشاريع مع الاشتراطات التخطيطية',
        'إسناد فني للخرائط الجغرافية وتطوير المناطق',
      ],
    },
    relatedProjectSlugs: ['sharjah-roads-infrastructure', '30-private-villas'],
  },
  {
    id: 'landscape-green',
    number: '06',
    category: 'infrastructure',
    categoryLabel: { en: 'Infrastructure & Urban', ar: 'البنية التحتية والتخطيط' },
    iconName: 'Trees',
    title: {
      en: 'Landscaping Supervision & Green Space Planning',
      ar: 'الإشراف على تنسيق الحدائق وتخطيط المساحات الخضراء',
    },
    tagline: {
      en: 'Sustainable landscape planning, micro-irrigation layout, and green space design.',
      ar: 'تخطيط المساحات الخضراء المستدامة، شبكات الري الدقيق، والإشراف الموقعي.',
    },
    overview: {
      en: 'We engineer sustainable green spaces and provide landscaping supervision adapted to the UAE climate. Our designs focus on drought-tolerant indigenous plant selection, water-efficient micro-irrigation layouts, and functional pedestrian environments.',
      ar: 'نقدم خدمات تخطيط المساحات الخضراء والإشراف الميداني على أعمال تنسيق الحدائق بما يتلاءم مع المناخ المحلي لدولة الإمارات. نركز على اختيار النباتات المحلية المقاومة للجفاف، تصاميم شبكات الري المرشدة للمياه، وتوفير بيئات خارجية مريحة ومستدامة.',
    },
    extendedNarrative: {
      en: [
        'Sustainable exterior environments and low-water-use landscaping are essential components of modern Gulf developments. MUSTASHAR LAND’s landscape specialists integrate climatic responsiveness with aesthetic greenery, creating serene outdoor settings that minimize water demand.',
        'We develop plant palettes dominated by native, salinity-tolerant and drought-resistant species (such as Ghaf, Sidr, and desert succulents), paired with automated smart micro-irrigation networks, subsurface drip lines, and soil moisture conservation techniques.',
        'Our scope includes both hardscape detailing (permeable paving, natural stone curbs, shading canopies) and softscape on-site quality supervision, verifying soil enrichment, planting depths, and irrigation pressure testing before project handover.',
      ],
      ar: [
        'يعد تنسيق الحدائق والمساحات الخضراء الموفرة للمياه عنصراً جوهرياً في المشاريع العمرانية الخليجية الحديثة. يجمع خبراؤنا في مستشار لاند بين التكيف المناخي والجمال البصري لخلق مساحات خارجية راقية تستهلك أقل قدر من المياه.',
        'نختار نباتات وأشجار محلية مقاومة للملوحة والجفاف (مثل شجر الغاف، السدر، والنباتات الصحراوية المتكيفة)، مع تصميم شبكات ري بالتنقيط تحت السطحي وتقنيات تحسين التربة للحفاظ على الرطوبة.',
        'يشمل نطاق عملنا أيضاً تصميم العناصر الصلبة (Hardscape) مثل الأرضيات المنفذة للماء، المظلات، ومسارات المشاة، مع الإشراف الميداني الصارم على تجهيز التربة واختبارات ضغط شبكات الري قبل التسليم.',
      ],
    },
    keyDeliverables: {
      en: [
        'Landscape Master Concept & Hardscape Circulation Plans',
        'Native & Drought-Tolerant Softscape Planting Schedules',
        'Automated Micro-Irrigation Network Layouts & Flow Hydraulic Notes',
        'Outdoor Shading, Paving Materials & Curb Detail Drawings',
        'Soil Preparation, Mulching & Organic Amendment Specifications',
        'On-Site Landscape Execution Supervision & Handover Audits',
      ],
      ar: [
        'المخطط العام لتنسيق المساحات الخارجية وتوزيع العناصر الصلبة',
        'جداول اختيار النباتات والأشجار المحلية المتكيفة مع البيئة',
        'مخططات شبكات الري بالتنقيط والحسابات الهيدروليكية',
        'تفاصيل المظلات، المواد المبلطة، والبردورات الخارجية',
        'مواصفات تجهيز التربة الزراعية وإضافات التسميد العضوي',
        'الإشراف الميداني على الزراعة والتنفيذ وفحوصات الاستلام',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Site Microclimate & Soil Evaluation', ar: 'تقييم المناخ والتربة' },
        description: {
          en: 'Analyze sun paths, wind exposures, soil salinity, and available irrigation water sources to establish design parameters.',
          ar: 'دراسة مسار الشمس، حركة الرياح، ملوحة التربة، ومصادر مياه الري لتحديد معايير التصميم.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Plant Palette & Irrigation Engineering', ar: 'اختيار النباتات وتصميم الري' },
        description: {
          en: 'Select indigenous low-water species, design drip lines, size booster pumps, and calculate peak water budgets.',
          ar: 'اختيار أصناف النباتات الموفرة للمياه، تصميم خطوط التنقيط، تحديد قدرات المضخات، وحساب الاحتياج المائي.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Hardscape & Pedestrian Detailing', ar: 'تفاصيل العناصر الصلبة والممرات' },
        description: {
          en: 'Detail exterior flooring, boundary planter walls, pedestrian pergolas, and outdoor lighting conduits.',
          ar: 'تصميم الأرضيات الخارجية، أحواض الزراعة، المظلات الخشبية والمعدنية، ومسارات إنارة الحدائق.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Planting Supervision & Handover', ar: 'الإشراف على الزراعة والتسليم' },
        description: {
          en: 'Supervise soil backfilling, inspect plant health at delivery, test irrigation uniformity, and certify completed grounds.',
          ar: 'الإشراف على توريد التربة الزراعية، فحص سلامة الشتلات، اختبار كفاءة شبكة الري، واعتماد الإنجاز.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Environmental & Quality Guidelines)',
        'BS Standards (British Standards for Landscape & Grounds)',
      ],
      ar: [
        'معايير الأيزو العالمية (ISO)',
        'المعايير البريطانية لتنسيق المواقع والمساحات المفتوحة (BS)',
      ],
    },
    toolsAndSoftware: [
      'AutoCAD Landscape & Hardscape Design',
      'WaterCAD & Irrigation Pressure Sizing Tools',
      'SketchUp Landscape 3D Visualizer',
      'Indigenous Plant Library Database',
    ],
    heroImage:
      '/images/disciplines/landscape-architecture.jpg',
    highlights: {
      en: [
        'Sustainable landscape designs tailored to private villas across Abu Dhabi',
        'Low-water indigenous planting palettes cutting irrigation consumption by over 40%',
        'Hands-on site supervision ensuring healthy establishment of green spaces',
      ],
      ar: [
        'تصاميم حدائق مستدامة مخصصة للفلل الخاصة والمشاريع في أبوظبي',
        'اختيارات نباتية موفرة للمياه تخفض استهلاك الري بأكثر من 40%',
        'إشراف ميداني مباشر لضمان نمو وازدهار المساحات الخضراء بجودة عالية',
      ],
    },
    relatedProjectSlugs: ['30-private-villas'],
  },
  {
    id: 'architectural-design',
    number: '07',
    category: 'structural',
    categoryLabel: { en: 'Structure & Engineering', ar: 'الهندسة والإنشاءات' },
    iconName: 'Layers',
    title: {
      en: 'Architectural Design & Space Programming',
      ar: 'التصميم المعماري والتخطيط الفراغي',
    },
    tagline: {
      en: 'Contemporary architecture, functional spatial planning, and climate responsiveness.',
      ar: 'عمارة عصرية تلائم المناخ، توزيع فراغي مدروس، وتصاميم متكاملة.',
    },
    overview: {
      en: 'Our architectural team combines contemporary design with functional space programming tailored to family lifestyle and business operations. We consider solar orientation, thermal performance, privacy requirements, and seamless circulation for private villas, residential buildings, and commercial facilities.',
      ar: 'يجمع فريق التصميم المعماري بين الحلول الجمالية المعاصرة والتوزيع الفراغي الوظيفي الذي يلبي خصوصية العائلة واحتياجات الأعمال. ندرس توجيه المبنى، العزل الحراري، متطلبات الخصوصية، وسلاسة الحركة لخلق مبانٍ أنيقة وعملية ومستدامة.',
    },
    extendedNarrative: {
      en: [
        'Great architecture balances visual identity with daily comfort. At MUSTASHAR LAND, our architects sculpt contemporary forms rooted in regional identity and adapted to the Gulf climate. We prioritize daylighting while controlling solar glare and thermal heat gain.',
        'We work closely with private villa owners and commercial developers through iterative 3D visualizations, developing interior spatial programs that reflect functional priorities—from generous family majlises and private courtyards to high-efficiency open office layouts.',
        'Every concept is fully coordinated with our structural and MEP engineers from day one, ensuring that bold facades, cantilevered canopies, and double-height volumes transition seamlessly into buildable, cost-effective engineering drawings.',
      ],
      ar: [
        'تحقق العمارة الراقية توازناً مثالياً بين الهوية الجمالية والراحة اليومية للمستخدمين. في مستشار لاند، يصمم مهندسونا واجهات عصرية نابعة من الهوية المعمارية المحلية ومتكيفة مع مناخ الخليج عبر تعظيم الإضاءة الطبيعية مع كسر وهج وحرارة الشمس.',
        'نتعاون بشكل وثيق مع ملاك الفلل والمستثمرين عبر نماذج بصرية ثلاثية الأبعاد، ونطور مساحات داخلية تعكس الأولويات الوظيفية للمسكن—من المجالس الواسعة والأفنية الداخلية الخاصة إلى المكاتب الحديثة والمرافق الخدمية.',
        'يتم التنسيق الهندسي المتكامل مع أقسام الإنشاءات والكهروميكانيك منذ اللحظة الأولى، مما يضمن تحويل الأفكار المعمارية المبتكرة إلى مخططات تنفيذية قابلة للبناء بأعلى درجات الكفاءة.',
      ],
    },
    keyDeliverables: {
      en: [
        'Architectural Conceptual Proposals & 3D Photorealistic Renderings',
        'Detailed Space Programming, Floor Plans & Furniture Layouts',
        'Exterior Elevations, Facade Details & Material Finishes Schedules',
        'Reflected Ceiling Plans (RCP) & Core Circulation Sections',
        'Door, Window & Architectural Ironmongery Schedules',
        'Building Code Compliance Documentation for Municipal Reviews',
      ],
      ar: [
        'المقترحات المعمارية المبدئية والإظهار البصري ثلاثي الأبعاد',
        'المخططات المعمارية التنفيذية والتوزيع الفراغي وفرش الأثاث',
        'تصميم الواجهات الخارجية والقطاعات وجداول توصيف المواد',
        'مخططات الأسقف المعلقة (RCP) ومسارات الحركة الرأسية',
        'جداول الأبواب والشبابيك ومواصفات الإكسسوارات المعمارية',
        'حزم المخططات المعمارية المتوافقة مع متطلبات المراجعة البلدية',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Client Brief & Functional Programming', ar: 'المتطلبات والبرنامج الوظيفي' },
        description: {
          en: 'Engage with the client to define room schedules, spatial adjacencies, privacy levels, aesthetic preferences, and budget targets.',
          ar: 'الجلوس مع المالك لتحديد متطلبات الغرف، العلاقات الوظيفية، درجات الخصوصية، الطراز المعماري المفضل، والميزانية.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Concept Massing & 3D Visualization', ar: 'التصميم المبدئي والكتل المعمارية' },
        description: {
          en: 'Develop floor plan alternatives, explore massing and facade articulation in 3D, and refine layouts based on client feedback.',
          ar: 'تطوير بدائل للمساقط الأفقية، استكشاف كتل المبنى والواجهات ثلاثية الأبعاد، وتعديل المخططات بناءً على رغبة المالك.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Detailed Architectural Drawings', ar: 'المخططات التنفيذية التفصيلية' },
        description: {
          en: 'Produce full architectural drawing packages, coordinate structural column grids and MEP shafts, and compile finishes specifications.',
          ar: 'إصدار حزمة المخططات المعمارية التفصيلية، تنسيق مسارات الأعمدة ومناور الخدمات، وتوصيف مواد التشطيب.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Municipal Alignment & Site Verification', ar: 'المطابقة البلدية والرقابة الميدانية' },
        description: {
          en: 'Format drawing sheets to municipal standards, support technical review, and conduct periodic architectural site reviews.',
          ar: 'تنسيق المخططات وفق المتطلبات البلدية، الدعم الفني للاعتماد، ومتابعة تنفيذ التشطيبات المعمارية في الموقع.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Architectural & Building Documentation)',
        'BS Standards (British Standards for Architectural Design)',
      ],
      ar: [
        'معايير الأيزو العالمية (ISO)',
        'المعايير البريطانية للتصميم المعماري (BS)',
      ],
    },
    toolsAndSoftware: [
      'Autodesk Revit Architecture',
      'AutoCAD Architecture',
      'Enscape 3D Real-Time Rendering',
      'SketchUp Pro',
      'Adobe Creative Suite',
    ],
    heroImage:
      '/images/disciplines/architectural-design.jpg',
    highlights: {
      en: [
        'Architectural design for 30 private villas across Abu Dhabi',
        'Integration of functional space planning with client requirements',
        'Architectural coordination adhering to engineering standards',
      ],
      ar: [
        'تصميم معماري لـ 30 فيلا سكنية خاصة في أبوظبي',
        'تكامل التوزيع الفراغي والوظيفي مع متطلبات الملاك',
        'تنسيق معماري متقن وفق المعايير الهندسية المعتمدة',
      ],
    },
    relatedProjectSlugs: ['30-private-villas', 'mohammed-bin-zayed-stadium'],
  },
  {
    id: 'mep-engineering',
    number: '08',
    category: 'structural',
    categoryLabel: { en: 'Structure & Engineering', ar: 'الهندسة والإنشاءات' },
    iconName: 'Zap',
    title: {
      en: 'MEP Design & Engineering Systems',
      ar: 'تصميم الأنظمة الكهروميكانيكية (MEP)',
    },
    tagline: {
      en: 'Integrated mechanical, electrical, and plumbing engineering design.',
      ar: 'تصميم أنظمة التكييف والتهوية، شبكات الكهرباء، والأنظمة الصحية.',
    },
    overview: {
      en: 'We engineer integrated Mechanical, Electrical, and Plumbing (MEP) systems as a core discipline of our engineering practice. Our scope includes HVAC cooling calculations, electrical power distribution, domestic water supply, drainage networks, and specialized systems coordination.',
      ar: 'نصمم الأنظمة الكهروميكانيكية المتكاملة كأحد الركائز الأساسية في ممارستنا الهندسية. يشمل نطاق عملنا حسابات أحمال التكييف والتهوية (HVAC)، شبكات توزيع القوى الكهربائية والإنارة، خطوط المياه والصرف، وتنسيق الأنظمة الفنية المتخصصة.',
    },
    extendedNarrative: {
      en: [
        'Building systems in the UAE face extreme desert thermal conditions, requiring rigorous engineering to balance indoor occupant comfort with energy efficiency. MUSTASHAR LAND’s MEP engineers design robust, serviceable systems built to withstand high ambient temperatures.',
        'Our mechanical engineers calculate cooling loads using recognized heat gain software, sizing ducted split, VRF, or central chiller packages with proper insulation and airflow balance. Plumbing designs incorporate dual water distribution, efficient sanitary drainage, and water conservation fixtures.',
        'Electrical designs feature balanced phase distribution, surge protection, dedicated emergency circuits, and clean containment pathways, all coordinated with civil works to prevent unsightly cable runs and structural clashes.',
      ],
      ar: [
        'تعمل أنظمة المباني في دولة الإمارات تحت ظروف مناخية صحراوية قاسية، مما يتطلب هندسة دقيقة تحقق التوازن بين الراحة التامة وكفاءة استهلاك الطاقة. يصمم مهندسونا أنظمة كهروميكانيكية متينة وموثوقة وسهلة الصيانة.',
        'يقوم مهندسونا بحساب الأحمال الحرارية للتكييف باستخدام أحدث البرمجيات، وتحديد قدرات أجهزة التكييف ومسارات الدكت والتغذية بالهواء المنعش. وتشمل التصاميم الصحية شبكات التغذية والصرف وترشيد استهلاك المياه.',
        'وتتميز التصاميم الكهربائية باتزان توزيع الأحمال على الفازات، الحماية من ارتفاع الجهد، وتنسيق مسارات التمديدات لمنع أي تشويه معماري أو تعارض إنشائي.',
      ],
    },
    keyDeliverables: {
      en: [
        'HVAC Cooling Load Calculations & Air Distribution Ductwork Layouts',
        'Electrical Power Distribution, Single-Line Diagrams (SLD) & Lighting Plans',
        'Domestic Cold/Hot Water Supply & Internal Sanitary Drainage Layouts',
        'MEP Integrated Coordination Drawings & Wall/Slab Sleeve Clearances',
        'Panel Board Schedules & Electrical Load Summary Calculations',
        'MEP Equipment Schedules & Technical Procurement Specifications',
      ],
      ar: [
        'حسابات الأحمال الحرارية للتكييف ومخططات مسارات مجاري الهواء (Ducts)',
        'مخططات توزيع القوى والإنارة والمخططات أحادية الخط (SLD)',
        'شبكات تغذية المياه الباردة والساخنة والصرف الصحي الداخلي',
        'مخططات التنسيق الهندسي للخدمات وتحديد فتحات التمديد بالخرسانة',
        'جداول اللوحات الكهربائية وحسابات اتزان الأحمال الكلية',
        'جداول المعدات الكهروميكانيكية والمواصفات الفنية المعتمدة',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Thermal & Electrical Load Assessment', ar: 'حسابات الأحمال الحرارية والكهربائية' },
        description: {
          en: 'Calculate peak sensible and latent cooling loads based on envelope insulation, calculate connected electrical loads, and evaluate water demand.',
          ar: 'حساب أحمال التكييف الحرارية بناءً على عزل الجدران والزجاج، حساب الأحمال الكهربائية الكلية، وتقدير الاحتياج المائي.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Equipment Sizing & Systems Selection', ar: 'تحديد المعدات واختيار الأنظمة' },
        description: {
          en: 'Select HVAC equipment (VRF, ducted split), size main and sub-distribution panels, and determine water pump and storage capacities.',
          ar: 'اختيار أجهزة التكييف المناسبة، تحديد سعات اللوحات الكهربائية، وتحديد أحجام خزانات ومضخات المياه.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Detailed Routing & Coordination', ar: 'مخططات التمديد والتنسيق' },
        description: {
          en: 'Route ductwork, cable trays, and drainage piping with slope verification; generate combined service coordination drawings.',
          ar: 'رسم مسارات الدكت، حوامل الكابلات، وأنابيب الصرف مع التأكد من الميول وتنسيقها لتفادي أي تضارب.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Site Supervision & Pressure Testing', ar: 'الإشراف الميداني واختبارات الضغط' },
        description: {
          en: 'Witness hydrostatic plumbing pressure tests, inspect electrical insulation resistance, and verify duct leak tests.',
          ar: 'حضور اختبارات ضغط شبكات المياه، فحص العزل الكهربائي، والتأكد من إحكام مجاري الهواء.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'BS Standards (British Standards for Electrical & Mechanical Installations)',
        'EN Standards (European Standards)',
        'ISO Standards (International Organization for Standardization)',
        'ASTM Standards (Materials & Testing)',
      ],
      ar: [
        'المعايير البريطانية للتمديدات الكهربائية والميكانيكية (BS)',
        'المعايير الأوروبية (EN)',
        'معايير الأيزو العالمية (ISO)',
        'معايير الجمعية الأمريكية لاختبار المواد (ASTM)',
      ],
    },
    toolsAndSoftware: [
      'Carrier HAP (Cooling Load Analysis)',
      'Autodesk Revit MEP',
      'AutoCAD MEP Detailing',
      'Dialux Lighting Calculation Software',
    ],
    heroImage:
      '/images/disciplines/mep-engineering.jpg',
    highlights: {
      en: [
        'Integrated MEP designs across 30 private residential villas',
        'Energy-efficient cooling and electrical design practice',
        'Technical support services for MEP systems via Call Center 800850',
      ],
      ar: [
        'تصاميم كهروميكانيكية متكاملة لـ 30 فيلا سكنية خاصة',
        'تطبيق معايير كفاءة استهلاك الطاقة والتبريد',
        'خدمات الدعم الفني لأنظمة MEP عبر مركز الاتصال 800850',
      ],
    },
    relatedProjectSlugs: ['mep-enoc-callcenter-800850', '30-private-villas'],
  },
  {
    id: 'feasibility-licensing',
    number: '09',
    category: 'supervision',
    categoryLabel: { en: 'Supervision & PMC', ar: 'الإشراف وإدارة المشاريع' },
    iconName: 'FileCheck2',
    title: {
      en: 'Feasibility Studies & Technical Consultancy',
      ar: 'دراسات الجدوى الفنية والاستشارات الهندسية',
    },
    tagline: {
      en: 'Technical feasibility studies, site parameters review, and MEP/eNOC licensing system support.',
      ar: 'دراسات الجدوى الفنية، تقييم بيانات الموقع، ودعم أنظمة تراخيص eNOC والكهروميكانيك.',
    },
    overview: {
      en: 'We provide technical feasibility studies, site appraisals, and engineering technical support involving MEP/eNOC licensing systems across the three regional municipalities: Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.',
      ar: 'نقدم دراسات الجدوى الفنية وتقييم محددات الأراضي، بالإضافة إلى الدعم الفني الهندسي لمعاملات وأنظمة تراخيص الكهروميكانيك ونظام عدم الممانعة الإلكتروني (eNOC) عبر البلديات الثلاث: بلدية مدينة أبوظبي، بلدية مدينة العين، وبلدية منطقة الظفرة.',
    },
    extendedNarrative: {
      en: [
        'Sound engineering investment begins with rigorous technical appraisal before capital is deployed. MUSTASHAR LAND conducts comprehensive engineering feasibility reviews that evaluate plot zoning guidelines, infrastructure connection feasibility, geotechnical constraints, and structural development options.',
        'Our firm possesses extensive practical experience providing technical support services through qualified engineers for MEP and eNOC licensing systems via call center 800850, covering Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.',
        'We help clients navigate technical documentation, perform drawing alignments, resolve technical coordination queries, and prepare verified drawing dossiers that align with UAE municipal engineering guidelines.',
      ],
      ar: [
        'يبدأ الاستثمار العقاري الناجح بدراسة فنية متأنية قبل ضخ رؤوس الأموال. تقدم مستشار لاند دراسات جدوى هندسية تقيم محددات الأرض واشتراطات البناء البلدية، إمكانات الربط بالبنية التحتية، طبيعة التربة، والبدائل الإنشائية المتاحة.',
        'وتمتلك شركتنا خبرة عملية موثقة في تقديم خدمات الدعم الفني عبر مهندسين متخصصين لأنظمة تراخيص الكهروميكانيك (MEP) وشهادات عدم الممانعة (eNOC) من خلال مركز الاتصال 800850 لتغطية بلديات أبوظبي والعين والظفرة.',
        'نساعد الملاك والمطورين في تدقيق وتنسيق الوثائق الهندسية وحزم المخططات، وحل الاستفسارات الفنية لضمان التوافق التام مع الاشتراطات البلدية المعتمدة في دولة الإمارات.',
      ],
    },
    keyDeliverables: {
      en: [
        'Technical Site Feasibility & Engineering Appraisal Reports',
        'MEP & eNOC Systems Technical Documentation & Coordination Support',
        'Plot Zoning Parameters, FAR & Building Height Reviews',
        'Municipal Technical Requirements Alignment Checklists',
        'Comprehensive Engineering Drawing Package Coordination',
        'Advisory Notes on Engineering Scope & Cost Optimization',
      ],
      ar: [
        'تقارير المعاينة الفنية الموقعية ودراسات الجدوى الهندسية',
        'إعداد وتدقيق الوثائق الفنية لأنظمة eNOC والكهروميكانيك',
        'دراسات محددات البناء والارتدادات والارتفاعات المسموحة',
        'قوائم التحقق لمطابقة المتطلبات الفنية البلدية المعتمدة',
        'التنسيق الفني الشامل لحزم المخططات الهندسية المتكاملة',
        'مذكرات استشارية لترشيد التكاليف واختيار أنسب الحلول الهندسية',
      ],
    },
    methodology: [
      {
        step: 'Phase 01',
        title: { en: 'Site Appraisal & Boundary Check', ar: 'المعاينة وتدقيق الحدود' },
        description: {
          en: 'Review official site plans (Krooki), inspect physical boundaries, evaluate adjoining access roads, and identify utility corridors.',
          ar: 'مراجعة المخططات الرسمية (الكروكي)، فحص الحدود على الطبيعة، تقييم المداخل والشوارع، وتحديد مسارات الخدمات.',
        },
      },
      {
        step: 'Phase 02',
        title: { en: 'Zoning & Permissible Scope Analysis', ar: 'تحليل الاشتراطات البلدية' },
        description: {
          en: 'Determine maximum allowable footprint, setback limits, parking requirements, and technical constraints.',
          ar: 'تحديد أقصى مساحات بناء مسموحة، الارتدادات القانونية، اشتراطات المواقف، والمحددات الفنية.',
        },
      },
      {
        step: 'Phase 03',
        title: { en: 'Technical Systems Review & Support', ar: 'مراجعة ودعم الأنظمة الفنية' },
        description: {
          en: 'Review MEP and eNOC system technical data, verify documentation alignment across regional municipalities.',
          ar: 'تدقيق بيانات أنظمة الكهروميكانيك ونظام eNOC، والتأكد من اكتمال الوثائق عبر البلديات الإقليمية.',
        },
      },
      {
        step: 'Phase 04',
        title: { en: 'Feasibility Synthesis & Recommendation', ar: 'التقرير النهائي والتوصيات' },
        description: {
          en: 'Synthesize findings into an actionable engineering feasibility report with clear technical recommendations for project launch.',
          ar: 'صياغة التقرير الهندسي الشامل المتضمن التوصيات الفنية الواضحة لانطلاق المشروع بنجاح.',
        },
      },
    ],
    standardsAndCodes: {
      en: [
        'ISO Standards (Technical Documentation & Data Management)',
        'BS Standards (British Standards for Feasibility & Review)',
      ],
      ar: [
        'معايير الأيزو العالمية (ISO)',
        'المعايير البريطانية لدراسات الجدوى والتدقيق الهندسي (BS)',
      ],
    },
    toolsAndSoftware: [
      'Municipal Technical Systems & Portals',
      'Geospatial Krooki Plot Appraisal Software',
      'AutoCAD Plan Coordination',
      'Engineering Feasibility Modeling Spreadsheets',
    ],
    heroImage:
      '/images/projects/municipal-noc-support.jpg',
    highlights: {
      en: [
        'Documented technical support services for MEP & eNOC via Call Center 800850',
        'Technical support coverage across Abu Dhabi, Al Ain, and Al Dhafra municipalities',
        'Engineering consultancy references with Dubai Municipality',
      ],
      ar: [
        'سجل موثق في الدعم الفني لأنظمة MEP و eNOC عبر مركز الاتصال 800850',
        'تغطية الدعم الفني لبلديات أبوظبي ومدينة العين ومنطقة الظفرة',
        'مراجع استشارات هندسية معتمدة بالتعاون مع بلدية دبي',
      ],
    },
    relatedProjectSlugs: ['mep-enoc-callcenter-800850', 'dubai-municipality'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'mohammed-bin-zayed-stadium',
    title: {
      en: 'Development Work for Mohammed bin Zayed Stadium (Al Jazira Club)',
      ar: 'أعمال تطوير استاد محمد بن زايد (نادي الجزيرة)',
    },
    category: 'sports',
    categoryLabel: { en: 'Sports Facility', ar: 'منشآت رياضية' },
    location: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    heroImage:
      '/images/projects/mbz-stadium.jpg',
    galleryImages: [
      '/images/projects/mbz-stadium.jpg',
      '/images/disciplines/structural-engineering.jpg',
      '/images/disciplines/construction-supervision.jpg',
    ],
    summary: {
      en: 'Development work, structural review, and technical engineering support for Mohammed bin Zayed Stadium at Al Jazira Club in Abu Dhabi.',
      ar: 'أعمال تطوير هندسية، مراجعة إنشائية، وخدمات الدعم الفني لاستاد محمد بن زايد بنادي الجزيرة في أبوظبي.',
    },
    scope: {
      en: [
        'Structural Engineering Analysis & Element Integrity Review',
        'On-Site Construction Supervision & Quality Assurance (QA/QC)',
        'Technical Coordination for Stadium Facility Upgrades',
        'Material Compliance Verification & Field Audit Reports',
        'As-Built Technical Documentation & Handover Verification',
      ],
      ar: [
        'التحليل الهندسي الإنشائي وتدقيق سلامة العناصر الإنشائية',
        'الإشراف الهندسي الميداني على التنفيذ وضبط وتوكيد الجودة (QA/QC)',
        'التنسيق الفني الهندسي لأعمال تطوير وتحديث مرافق الاستاد',
        'فحص واعتماد عينات ومواد البناء وإعداد تقارير التفتيش',
        'توثيق مخططات الواقع المنفذ وإجراءات الاستلام الفني النهائي',
      ],
    },
    disciplinesInvolved: [
      { id: 'civil-structural', title: { en: 'Civil & Structural Engineering', ar: 'الهندسة المدنية والإنشائية' } },
      { id: 'construction-supervision', title: { en: 'Construction Supervision & QA/QC', ar: 'الإشراف الهندسي وضبط الجودة' } },
      { id: 'pmc', title: { en: 'Project Management & Technical Consultancy', ar: 'إدارة المشاريع والاستشارات الفنية' } },
    ],
  },
  {
    id: '30-private-villas',
    title: {
      en: '30 Private Villas',
      ar: '30 فيلا خاصة',
    },
    category: 'residential',
    categoryLabel: { en: 'Residential', ar: 'مشاريع سكنية' },
    location: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    heroImage:
      '/images/projects/villas-abu-dhabi.jpg',
    galleryImages: [
      '/images/projects/villas-abu-dhabi.jpg',
      '/images/disciplines/architectural-design.jpg',
      '/images/about/abu-dhabi-architecture.jpg',
    ],
    summary: {
      en: 'Comprehensive architectural design, structural engineering drawings, and resident construction supervision for 30 private villas across Abu Dhabi.',
      ar: 'تصميم معماري وإنشائي متكامل، إعداد المخططات الهندسية، والإشراف الموقعي على التنفيذ لـ 30 فيلا سكنية خاصة في أبوظبي.',
    },
    scope: {
      en: [
        'Architectural Concepts & Space Programming',
        'Structural Foundation Calculations & Reinforced Concrete Detailing',
        'Integrated MEP Design Coordination',
        'Resident Construction Supervision & Site Logs',
        'Contractor Measurement & Payment Certification Support',
        'Building Handover Support',
      ],
      ar: [
        'التصميم المعماري والتوزيع الفراغي',
        'الحسابات الإنشائية للأساسات وتفاصيل الخرسانة المسلحة',
        'تنسيق تصاميم الأنظمة الكهروميكانيكية',
        'الإشراف الهندسي الميداني المقيم والتقارير الرقابية',
        'تدقيق قياسات المقاول واعتماد المستخلصات',
        'دعم إجراءات التسليم النهائي',
      ],
    },
    disciplinesInvolved: [
      { id: 'architectural-design', title: { en: 'Architectural Design', ar: 'التصميم المعماري' } },
      { id: 'civil-structural', title: { en: 'Civil & Structural Engineering', ar: 'الهندسة المدنية والإنشائية' } },
      { id: 'mep-engineering', title: { en: 'MEP Engineering', ar: 'الهندسة الكهروميكانيكية' } },
      { id: 'construction-supervision', title: { en: 'Construction Supervision & QA/QC', ar: 'الإشراف الهندسي وضبط الجودة' } },
    ],
  },
  {
    id: 'mep-enoc-callcenter-800850',
    title: {
      en: 'Technical Support for MEP & eNOC Systems (Call Center 800850)',
      ar: 'خدمات الدعم الفني لأنظمة MEP و eNOC (مركز الاتصال 800850)',
    },
    category: 'technical-support',
    categoryLabel: { en: 'Technical Support', ar: 'دعم فني واستشارات' },
    location: {
      en: 'Abu Dhabi, Al Ain & Al Dhafra, UAE',
      ar: 'أبوظبي، العين، والظفرة، دولة الإمارات',
    },
    heroImage:
      '/images/projects/municipal-noc-support.jpg',
    galleryImages: [
      '/images/projects/municipal-noc-support.jpg',
      '/images/disciplines/project-management.jpg',
      '/images/disciplines/mep-engineering.jpg',
    ],
    summary: {
      en: 'Technical support services through qualified engineers for MEP and eNOC licensing systems via call center 800850 covering Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.',
      ar: 'خدمات الدعم الفني عبر مهندسين لأنظمة تراخيص الكهروميكانيك MEP وشهادات عدم الممانعة eNOC من خلال مركز الاتصال 800850 لتغطية بلديات أبوظبي والعين والظفرة.',
    },
    coveredEntities: {
      en: [
        'Abu Dhabi City Municipality',
        'Al Ain City Municipality',
        'Al Dhafra Western Region Municipality',
      ],
      ar: [
        'بلدية مدينة أبوظبي',
        'بلدية مدينة العين',
        'بلدية منطقة الظفرة',
      ],
    },
    scope: {
      en: [
        'Technical Engineering Advisory via Call Center 800850',
        'MEP Systems Licensing Criteria Support & Guidance',
        'Electronic No-Objection Certificate (eNOC) Technical Support',
        'Cross-Municipal Coverage: Abu Dhabi, Al Ain & Al Dhafra',
        'Engineering Submission Package Review & Alignment Assistance',
      ],
      ar: [
        'استشارات هندسية متخصصة عبر مركز الاتصال 800850',
        'توضيح معايير ومتطلبات تراخيص الأنظمة الكهروميكانيكية (MEP)',
        'الدعم الفني لمعاملات شهادات عدم الممانعة الإلكترونية (eNOC)',
        'تغطية ثلاث بلديات: بلدية أبوظبي، بلدية العين، وبلدية الظفرة',
        'مراجعة وتدقيق حزم المخططات الهندسية لمساعدة المتقدمين',
      ],
    },
    disciplinesInvolved: [
      { id: 'feasibility-licensing', title: { en: 'Feasibility Studies & Technical Consultancy', ar: 'دراسات الجدوى والاستشارات الفنية' } },
      { id: 'mep-engineering', title: { en: 'MEP Engineering', ar: 'الهندسة الكهروميكانيكية' } },
    ],
  },
  {
    id: 'sharjah-roads-infrastructure',
    title: {
      en: 'Sharjah Roads & Infrastructure Projects',
      ar: 'مشاريع الطرق والبنية التحتية في الشارقة',
    },
    category: 'infrastructure',
    categoryLabel: { en: 'Infrastructure', ar: 'بنية تحتية' },
    location: { en: 'Sharjah, UAE', ar: 'الشارقة، الإمارات' },
    heroImage:
      '/images/projects/infrastructure-sharjah.jpg',
    galleryImages: [
      '/images/projects/infrastructure-sharjah.jpg',
      '/images/projects/infrastructure-engineering-detail.jpg',
      '/images/disciplines/structural-engineering.jpg',
    ],
    summary: {
      en: 'Engineering consultancy, infrastructure planning, and technical reviews for roadway and utilities projects in Sharjah.',
      ar: 'استشارات هندسية، تخطيط البنية التحتية، ومراجعات فنية لمشاريع شبكات الطرق والخدمات في إمارة الشارقة.',
    },
    scope: {
      en: [
        'Roadway Alignment, Pavement Detailing & Cross-Section Plans',
        'Surface Stormwater Drainage & Runoff Coordination',
        'Earthwork Optimization & Grading Calculations',
        'Utility Corridor Reservation & Spatial Clash Prevention',
        'Technical Consultancy & Engineering Quality Review Reports',
      ],
      ar: [
        'تخطيط مسارات الطرق، تفاصيل طبقات الرصف، والمقاطع العرضية',
        'تنسيق شبكات تصريف مياه الأمطار السطحية وحسابات الجريان',
        'ترشيد كميات الحفر والردم ودراسات مناسيب التسوية الترابية',
        'حجز حرم مسارات الخدمات ومنع التعارضات المكانية',
        'الاستشارات الهندسية وإعداد تقارير تدقيق ومطابقة الجودة',
      ],
    },
    disciplinesInvolved: [
      { id: 'infrastructure-planning', title: { en: 'Infrastructure Planning', ar: 'تخطيط البنية التحتية' } },
      { id: 'civil-structural', title: { en: 'Civil & Structural Engineering', ar: 'الهندسة المدنية والإنشائية' } },
    ],
  },
  {
    id: 'dubai-municipality',
    title: {
      en: 'Dubai Municipality Consultancy References',
      ar: 'مراجع الاستشارات الهندسية - بلدية دبي',
    },
    category: 'governmental',
    categoryLabel: { en: 'Municipal & Governmental', ar: 'مشاريع ومراجع بلدية' },
    location: { en: 'Dubai, UAE', ar: 'دبي، الإمارات' },
    heroImage:
      '/images/projects/dubai-municipality.jpg',
    galleryImages: [
      '/images/projects/dubai-municipality.jpg',
      '/images/projects/dubai-municipality-detail.jpg',
    ],
    summary: {
      en: 'Engineering consultancy reviews and technical documentation references associated with Dubai Municipality requirements.',
      ar: 'استشارات هندسية وتدقيق الوثائق والمخططات وفق المتطلبات والاشتراطات البلدية المعتمدة لدى بلدية دبي.',
    },
    scope: {
      en: [
        'Engineering Technical Documentation',
        'Municipal Technical Regulations Alignment',
        'Technical Review & Engineering Advisory Support',
      ],
      ar: [
        'إعداد وتدقيق الوثائق الهندسية',
        'المطابقة مع اللوائح والاشتراطات البلدية',
        'الدعم الاستشاري والمراجعات الفنية',
      ],
    },
    disciplinesInvolved: [
      { id: 'feasibility-licensing', title: { en: 'Feasibility Studies & Technical Consultancy', ar: 'دراسات الجدوى والاستشارات الفنية' } },
    ],
  },
  {
    id: 'abu-dhabi-sewerage-services',
    title: {
      en: 'Abu Dhabi Sewerage Services Company References',
      ar: 'مشاريع ومراجع شركة أبوظبي لخدمات الصرف الصحي',
    },
    category: 'infrastructure',
    categoryLabel: { en: 'Wet Utilities & Infrastructure', ar: 'شبكات الصرف والبنية التحتية' },
    location: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    heroImage:
      '/images/disciplines/mep-engineering.jpg',
    galleryImages: [
      '/images/disciplines/mep-engineering.jpg',
      '/images/projects/infrastructure-sharjah.jpg',
    ],
    summary: {
      en: 'Technical coordination and engineering consultancy references for infrastructure and wet utilities with Abu Dhabi Sewerage Services Company.',
      ar: 'تنسيق فني واستشارات هندسية لمشاريع شبكات الصرف الصحي والمرافق التحتية بالتعاون مع شركة أبوظبي لخدمات الصرف الصحي.',
    },
    scope: {
      en: [
        'Utility Network Alignment & Review',
        'Sanitary & Drainage Technical Coordination',
        'Engineering Documentation & Submissions',
      ],
      ar: [
        'مراجعة وتدقيق مسارات شبكات الخدمات',
        'التنسيق الفني لشبكات الصرف وتصريف المياه',
        'إعداد واعتماد الوثائق الهندسية',
      ],
    },
    disciplinesInvolved: [
      { id: 'infrastructure-planning', title: { en: 'Infrastructure Planning', ar: 'تخطيط البنية التحتية' } },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDiscipline | undefined {
  return serviceDisciplines.find((s) => s.id === slug);
}

export function getAllServices(): ServiceDiscipline[] {
  return serviceDisciplines;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.id === slug);
}

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getRelatedProjects(serviceSlug: string): Project[] {
  return projectsData.filter((p) =>
    p.disciplinesInvolved.some((d) => d.id === serviceSlug)
  );
}
