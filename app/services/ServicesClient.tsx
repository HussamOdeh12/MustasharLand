'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Building2,
  HardHat,
  Briefcase,
  Droplets,
  Map,
  Trees,
  Layers,
  Zap,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function ServicesPage() {
  const { isRtl, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const BreadcrumbSep = isRtl ? ArrowLeft : ChevronRight;

  const categories = [
    { id: 'all', labelEn: 'All Disciplines', labelAr: 'كافة التخصصات' },
    { id: 'structural', labelEn: 'Structure & Engineering', labelAr: 'الهندسة والإنشاءات' },
    { id: 'supervision', labelEn: 'Supervision & PMC', labelAr: 'الإشراف وإدارة المشاريع' },
    { id: 'infrastructure', labelEn: 'Infrastructure & Urban', labelAr: 'البنية التحتية والتخطيط' },
  ];

  const disciplines = [
    {
      id: 'civil-structural',
      category: 'structural',
      number: '01',
      icon: Building2,
      titleEn: 'Civil & Structural Engineering',
      titleAr: 'الهندسة المدنية والإنشائية',
      taglineEn: 'Structural analysis, foundation engineering, and reinforced concrete design.',
      taglineAr: 'تحليل إنشائي متقدم، تصميم الأساسات، وحسابات الخرسانة المسلحة.',
      descEn:
        'Our structural engineering practice delivers safe, cost-optimized, and resilient structural designs for villas, commercial developments, and facilities. We apply computational structural modeling to analyze load paths under recognized engineering standards.',
      descAr:
        'يقدم قسم الهندسة الإنشائية تصاميم آمنة واقتصادية للفلل السكنية، المباني التجارية، والمنشآت المتنوعة. نعتمد النمذجة الإنشائية المحوسبة لدراسة وتوزيع الأحمال وفق المرجعيات الهندسية المعتمدة.',
      deliverablesEn: [
        'Detailed Structural Calculations & Analysis Notes',
        'Foundation & Substructure Engineering',
        'Reinforced Concrete & Structural Steel Detailing',
        'Structural Modeling & Load Resisting Systems',
      ],
      deliverablesAr: [
        'المذكرات الحسابية الإنشائية والتحليل الرياضي',
        'تصميم الأساسات والقواعد الإنشائية',
        'مخططات تفاصيل تسليح الخرسانة والهياكل المعدنية',
        'النمذجة الإنشائية وأنظمة توزيع الأحمال',
      ],
      codesEn: 'ACI, ASTM, BS, EN Standards',
      codesAr: 'معايير ACI و ASTM و BS و EN المعتمدة',
    },
    {
      id: 'construction-supervision',
      category: 'supervision',
      number: '02',
      icon: HardHat,
      titleEn: 'Construction Supervision & QA/QC',
      titleAr: 'الإشراف الهندسي وضبط الجودة',
      taglineEn: 'Resident engineering presence, materials compliance, and site quality control.',
      taglineAr: 'إشراف مقيم في الموقع، فحص واعتماد المواد، والرقابة الفنية الميدانية.',
      descEn:
        'We provide resident engineering teams on-site to oversee construction works. From foundation preparation and structural rebar inspection to material test review and MEP works, our engineers verify adherence to approved drawings and project specifications.',
      descAr:
        'نوفر مهندسين مقيمين في مواقع المشاريع لمتابعة ومراقبة أعمال التنفيذ بدقة. من فحص تسليح العناصر الإنشائية واعتماد المواد إلى تدقيق الأعمال الكهروميكانيكية، نضمن مطابقة المقاول للمخططات المعتمدة والمواصفات الفنية.',
      deliverablesEn: [
        'Resident Site Engineer Daily & Weekly Inspection Reports',
        'Concrete Quality & Material Compliance Audits',
        'Non-Conformance Tracking & Quality Resolution',
        'Contractor Milestone Verification & Handover Documentation',
      ],
      deliverablesAr: [
        'تقارير المعاينة اليومية والأسبوعية للمهندس المقيم',
        'فحوصات جودة الخرسانة واعتماد عينات المواد',
        'متابعة ملاحظات ضبط الجودة وعدم المطابقة الفنية',
        'مراجعة إنجاز المقاول وتوثيق مراحل التسليم',
      ],
      codesEn: 'International & UAE Engineering Specifications',
      codesAr: 'المواصفات والمعايير الهندسية المعمول بها في الدولة',
    },
    {
      id: 'pmc',
      category: 'supervision',
      number: '03',
      icon: Briefcase,
      titleEn: 'Project Management & Technical Consultancy',
      titleAr: 'إدارة المشاريع والاستشارات الفنية',
      taglineEn: 'Project schedule control, BOQ evaluation, and comprehensive technical governance.',
      taglineAr: 'ضبط الجداول الزمنية، تدقيق جداول الكميات، وإدارة المشاريع الهندسية.',
      descEn:
        'Our project management team acts as the client’s trusted technical advisor throughout the development lifecycle. We establish structured project schedules, review tender documentation, verify BOQs, and monitor project milestones to prevent delays and cost overruns.',
      descAr:
        'يعمل فريق إدارة المشاريع كمستشار فني موثوق للمالك في كافة مراحل المشروع. نضع الجداول الزمنية المنضبطة، ندقق وثائق المناقصات وجداول الكميات (BOQ)، ونتابع مراحل الإنجاز لضمان سير العمل وفق الخطط والميزانيات المعتمدة.',
      deliverablesEn: [
        'Master Project Scheduling & Critical Path Review',
        'Tender Dossier Preparation & BOQ Evaluation',
        'Technical Progress Reporting & Coordination Meetings',
        'Cost Monitoring & Technical Documentation Management',
      ],
      deliverablesAr: [
        'إعداد الجداول الزمنية ومتابعة مسار الأنشطة',
        'إعداد وثائق المناقصات وتدقيق جداول الكميات (BOQ)',
        'تقارير المتابعة الفنية الدورية واجتماعات التنسيق',
        'متابعة التكاليف وإدارة الوثائق والمراسلات الهندسية',
      ],
      codesEn: 'International Project Management Practices',
      codesAr: 'الممارسات والمعايير العالمية لإدارة المشاريع',
    },
    {
      id: 'infrastructure-planning',
      category: 'infrastructure',
      number: '04',
      icon: Droplets,
      titleEn: 'Infrastructure Planning & Site Coordination',
      titleAr: 'تخطيط البنية التحتية والتنسيق الموقعي',
      taglineEn: 'Infrastructure layout planning, utility corridor coordination, and environmental site studies.',
      taglineAr: 'تخطيط البنية التحتية، تنسيق مسارات الخدمات، والدراسات البيئية والموقعية.',
      descEn:
        'We provide infrastructure planning and utility corridor coordination tailored to local site parameters. Our scope encompasses infrastructure layout planning, site grading, surface drainage concepts, and environmental impact assessments.',
      descAr:
        'نقدم خدمات تخطيط البنية التحتية وتنسيق مسارات الخدمات بما يتناسب مع طبيعة الموقع. يشمل نطاق عملنا التخطيط العام لشبكات الخدمات، دراسات مناسيب الأرض والتصريف السطحي، ودراسات تقييم الأثر البيئي.',
      deliverablesEn: [
        'Infrastructure Master Layout & Alignment Plans',
        'Utility Corridor Coordination & Spatial Allocation',
        'Site Grading & Surface Drainage Studies',
        'Environmental Impact Assessment & Technical Studies',
      ],
      deliverablesAr: [
        'المخططات العامة لتوزيع مسارات البنية التحتية',
        'تنسيق مسارات وحرم الخدمات التحتية بالموقع',
        'دراسات مناسيب الأرض والتصريف السطحي للمياه',
        'دراسات تقييم الأثر البيئي والدعم الفني الموقعي',
      ],
      codesEn: 'International & UAE Infrastructure Standards (ASTM, BS, EN)',
      codesAr: 'المعايير والمراجع الهندسية للبنية التحتية (ASTM, BS, EN)',
    },
    {
      id: 'urban-gis',
      category: 'infrastructure',
      number: '05',
      icon: Map,
      titleEn: 'Urban Planning & GIS Addressing Support',
      titleAr: 'التخطيط الحضري ونظم المعلومات الجغرافية (GIS)',
      taglineEn: 'Master land-use planning, GIS spatial mapping, and urban addressing support.',
      taglineAr: 'تخطيط استعمالات الأراضي، نظم المعلومات الجغرافية، والدعم الفني للعنونة الحضرية.',
      descEn:
        'Our urban planning specialists provide spatial development frameworks that optimize land utilization while aligning with municipal master plans. We incorporate GIS geospatial layers and support urban addressing and spatial organization.',
      descAr:
        'يقدم خبراؤنا في التخطيط العمراني دراسات لتخطيط الأراضي واستغلال المساحات بأعلى كفاءة مع الالتزام بالمخططات الهيكلية. ندمج طبقات نظم المعلومات الجغرافية (GIS) وندعم متطلبات العنونة والتنظيم المكاني.',
      deliverablesEn: [
        'Master Land-Use Planning & Circulation Networks',
        'GIS Spatial Data Integration & Geodatabase Support',
        'Plot Sub-Division & Spatial Organization Studies',
        'Right-of-Way & Infrastructure Corridor Planning',
      ],
      deliverablesAr: [
        'المخططات العامة لاستعمالات الأراضي وشبكات الحركة',
        'دمج البيانات المكانية ونظم المعلومات الجغرافية (GIS)',
        'دراسات تقسيم الأراضي والتوزيع المكاني للقطع',
        'تخطيط مسارات الطرق وحرم الخدمات العامة',
      ],
      codesEn: 'Regional Municipal Urban Planning Frameworks',
      codesAr: 'الأطر التخطيطية المعتمدة لدى بلديات الدولة',
    },
    {
      id: 'landscape-green',
      category: 'infrastructure',
      number: '06',
      icon: Trees,
      titleEn: 'Landscaping Supervision & Green Space Planning',
      titleAr: 'الإشراف على تنسيق الحدائق وتخطيط المساحات الخضراء',
      taglineEn: 'Sustainable landscape planning, micro-irrigation layout, and green space design.',
      taglineAr: 'تخطيط المساحات الخضراء المستدامة، شبكات الري الدقيق، والإشراف الموقعي.',
      descEn:
        'We engineer sustainable green spaces and provide landscaping supervision adapted to the UAE climate. Our designs focus on drought-tolerant indigenous plant selection, water-efficient micro-irrigation layouts, and functional pedestrian spaces.',
      descAr:
        'نقدم خدمات تخطيط المساحات الخضراء والإشراف الميداني على أعمال تنسيق الحدائق بما يتلاءم مع المناخ المحلي. نركز على اختيار النباتات المحلية المقاومة للجفاف، تصاميم شبكات الري المرشدة، وتوفير بيئات خارجية مريحة ومستدامة.',
      deliverablesEn: [
        'Hardscape Paving, Shading & Circulation Layouts',
        'Softscape Indigenous Plant Species Palette Selection',
        'Water-Efficient Micro-Irrigation Network Layouts',
        'Landscaping Site Supervision & Execution Quality Checks',
      ],
      deliverablesAr: [
        'مخططات المساحات الصلبة والمظلات ومسارات الحركة',
        'جداول اختيار النباتات المحلية الملائمة للبيئة',
        'مخططات شبكات الري بالتنقيط والأنظمة المرشدة للمياه',
        'الإشراف الميداني على أعمال الزراعة والتنفيذ في الموقع',
      ],
      codesEn: 'Sustainable Landscape Practices & Guidelines',
      codesAr: 'المعايير والممارسات المستدامة لتنسيق المساحات الخضراء',
    },
    {
      id: 'architectural-design',
      category: 'structural',
      number: '07',
      icon: Layers,
      titleEn: 'Architectural Design & Space Programming',
      titleAr: 'التصميم المعماري والتخطيط الفراغي',
      taglineEn: 'Contemporary architecture, functional spatial planning, and climate responsiveness.',
      taglineAr: 'عمارة عصرية تلائم المناخ، توزيع فراغي مدروس، وتصاميم متكاملة.',
      descEn:
        'Our architectural team combines contemporary design with functional space programming tailored to living and business needs. We consider solar orientation, thermal performance, and efficient spatial flow for villas, residential buildings, and commercial facilities.',
      descAr:
        'يجمع فريق التصميم المعماري بين الحلول الجمالية المعاصرة والتوزيع الفراغي الوظيفي الذي يلبي احتياجات العائلة والأعمال. ندرس توجيه المبنى والعزل الحراري لخلق منشآت أنيقة وعملية وموفرة للطاقة.',
      deliverablesEn: [
        'Architectural Conceptual Proposals & 3D Visualizations',
        'Detailed Space Programming & Floor Layout Plans',
        'Building Exterior Elevation & Facade Design',
        'Architectural Material Schedules & Technical Specifications',
      ],
      deliverablesAr: [
        'المقترحات المعمارية المبدئية والإظهار ثلاثي الأبعاد',
        'المخططات المعمارية التنفيذية والتوزيع الفراغي',
        'تصميم الواجهات الخارجية والتشطيبات المعمارية',
        'جداول توصيف المواد والمواصفات الفنية المعتمدة',
      ],
      codesEn: 'International Architectural Standards (ISO, BS)',
      codesAr: 'المعايير المعمارية العالمية (ISO, BS)',
    },
    {
      id: 'mep-engineering',
      category: 'structural',
      number: '08',
      icon: Zap,
      titleEn: 'MEP Design & Engineering Systems',
      titleAr: 'تصميم الأنظمة الكهروميكانيكية (MEP)',
      taglineEn: 'Integrated mechanical, electrical, and plumbing engineering design.',
      taglineAr: 'تصميم أنظمة التكييف والتهوية، شبكات الكهرباء، والأنظمة الصحية.',
      descEn:
        'We engineer integrated Mechanical, Electrical, and Plumbing (MEP) systems as a core component of engineering design. Our scope includes HVAC cooling calculations, electrical load distributions, internal water supply, and drainage layouts.',
      descAr:
        'نصمم الأنظمة الكهروميكانيكية المتكاملة كجزء أساسي من التصميم الهندسي للمباني. يشمل ذلك حسابات أحمال التكييف والتهوية (HVAC)، مخططات توزيع الأحمال الكهربائية، شبكات التغذية بالمياه، وأنظمة الصرف الداخلي.',
      deliverablesEn: [
        'HVAC Cooling Load Calculations & Ductwork Routing Plans',
        'Electrical Power & Lighting Distribution Schematics',
        'Domestic Water Supply & Internal Drainage Network Plans',
        'MEP Coordination Drawings & Systems Integration',
      ],
      deliverablesAr: [
        'حسابات أحمال التكييف والتهوية وتوزيع مجاري الهواء',
        'مخططات توزيع القوى والإنارة والأحمال الكهربائية',
        'شبكات التغذية بمياه الشرب والصرف الصحي الداخلي',
        'مخططات التنسيق الهندسي المتكامل للخدمات الكهروميكانيكية',
      ],
      codesEn: 'ASHRAE, ISO, BS Engineering Standards',
      codesAr: 'معايير ASHRAE و ISO و BS الهندسية المعتمدة',
    },
    {
      id: 'feasibility-licensing',
      category: 'supervision',
      number: '09',
      icon: FileCheck2,
      titleEn: 'Feasibility Studies & Technical Consultancy',
      titleAr: 'دراسات الجدوى الفنية والاستشارات الهندسية',
      taglineEn: 'Technical feasibility studies, site parameters review, and MEP/eNOC licensing system support.',
      taglineAr: 'دراسات الجدوى الفنية، تقييم بيانات الموقع، ودعم أنظمة تراخيص eNOC والكهروميكانيك.',
      descEn:
        'We provide technical feasibility studies, site appraisal, and engineering technical support involving MEP/eNOC licensing systems across the three regional municipalities: Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.',
      descAr:
        'نقدم دراسات الجدوى الفنية وتقييم محددات الأراضي، بالإضافة إلى الدعم الفني الهندسي لمعاملات وأنظمة تراخيص الكهروميكانيك ونظام عدم الممانعة الإلكتروني (eNOC) عبر البلديات الثلاث: أبوظبي، العين، والظفرة.',
      deliverablesEn: [
        'Technical Site Appraisal & Engineering Feasibility Reports',
        'MEP & eNOC Systems Technical Documentation',
        'Municipal Technical Requirements Review & Alignment',
        'Drawing Package Review & Technical Coordination',
      ],
      deliverablesAr: [
        'تقارير المعاينة الفنية الموقعية ودراسات الجدوى الهندسية',
        'إعداد وتدقيق الوثائق الفنية لأنظمة eNOC والكهروميكانيك',
        'مراجعة وتنسيق المخططات وفق المتطلبات البلدية الفنية',
        'التنسيق الفني الشامل لحزم المخططات الهندسية',
      ],
      codesEn: 'Regional Municipal Technical Frameworks',
      codesAr: 'الأطر والمتطلبات الفنية المعتمدة لدى بلديات الدولة',
    },
  ];

  const filteredDisciplines =
    selectedCategory === 'all'
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCategory);

  const deliverySteps = [
    {
      step: '01',
      titleEn: 'Assessment',
      titleAr: 'المعاينة والتقييم الفني',
      descEn: 'Plot boundary appraisal, site parameter review, municipal planning guidelines, and initial feasibility assessment.',
      descAr: 'فحص بيانات الأرض والمحددات التخطيطية، تدقيق تقارير الموقع، وإعداد دراسات الجدوى الفنية الأولية.',
    },
    {
      step: '02',
      titleEn: 'Design / Planning',
      titleAr: 'التصميم والتخطيط الهندسي',
      descEn: 'Multidisciplinary engineering design, structural calculations, architectural floor plans, and technical specifications.',
      descAr: 'إعداد التصاميم الهندسية المتكاملة، الحسابات الإنشائية، المخططات المعمارية، وتوصيف المواد الفنية.',
    },
    {
      step: '03',
      titleEn: 'Coordination / Supervision',
      titleAr: 'التنسيق والإشراف الميداني',
      descEn: 'Technical coordination involving MEP/eNOC licensing systems and diligent resident site supervision.',
      descAr: 'التنسيق الفني عبر أنظمة تراخيص الكهروميكانيك و(eNOC)، والإشراف الهندسي الميداني المقيم في الموقع.',
    },
    {
      step: '04',
      titleEn: 'Technical Delivery',
      titleAr: 'التسليم الفني المعتمد',
      descEn: 'Final technical inspections, verification of executed works against approved drawings, and complete documentation handover.',
      descAr: 'إجراء المعاينات الفنية النهائية، مطابقة الأعمال المنفذة بالمخططات المعتمدة، وتسليم الوثائق الهندسية المتكاملة.',
    },
  ];

  return (
    <main id="main-content" tabIndex={-1} className="relative w-full max-w-full min-h-screen overflow-x-hidden bg-[#F8FAFC]/50 dark:bg-[#0B1117] text-slate-800 dark:text-slate-200 flex flex-col antialiased transition-colors duration-200 outline-none">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#0B1117]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
            {t('Home', 'الرئيسية')}
          </Link>
          <BreadcrumbSep className="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold">
            {t('Disciplines & Services', 'التخصصات والخدمات')}
          </span>
        </div>
      </div>

      {/* Services Hero Header */}
      <section
        className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors"
        id="services-hero"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#DCFCE7] dark:bg-[#16A34A]/20 border border-[#86EFAC] dark:border-[#16A34A]/40 text-[#15803D] dark:text-[#4ADE80] font-sans text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t('MULTIDISCIPLINARY DISCIPLINES & SERVICES', 'التخصصات والخدمات الهندسية الشاملة')}</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {t(
                'Comprehensive Multidisciplinary Engineering & Consultancy',
                'استشارات وتصاميم هندسية متعددة التخصصات'
              )}
            </h1>

            <p className="font-body text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {t(
                'MUSTASHAR LAND provides full-scope multidisciplinary engineering consultancy across Abu Dhabi and the UAE, delivering specialized structural, architectural, MEP, supervision, and infrastructure solutions.',
                'تقدم شركة مستشار لاند استشارات هندسية شاملة ومتكاملة في أبوظبي ومختلف إمارات الدولة، وتشمل الحلول الإنشائية، المعمارية، الكهروميكانيكية، والإشراف الهندسي الميداني.'
              )}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
              <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">9</span>
              <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                {t('Core Disciplines', 'تخصصات هندسية رئيسية')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('Civil, MEP, PMC & Planning', 'إنشائي، كهروميكانيك، تخطيط')}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
              <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">100%</span>
              <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                {t('Emirati-Owned Firm', 'استشارات وطنية 100%')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('Established 2019 in Abu Dhabi', 'تأسست عام 2019 بأبوظبي')}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
              <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">QA/QC</span>
              <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                {t('Resident Site Supervision', 'إشراف مقيم وضبط جودة')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('Site audits & material checks', 'رقابة على الصب ومطابقة المواد')}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
              <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">Delivery</span>
              <span className="font-sans text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                {t('Technical Delivery', 'إنجاز وتسليم فني')}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('From assessment to handover', 'من المعاينة حتى التسليم')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/95 dark:bg-[#0B1117]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0" role="group" aria-label={t('Engineering discipline categories', 'أقسام التخصصات الهندسية')}>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  aria-pressed={active}
                  className={`min-h-[44px] px-4 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 ${
                    active
                      ? 'bg-[#16A34A] text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {t(cat.labelEn, cat.labelAr)}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0">
            <span>
              {t(
                `Showing ${filteredDisciplines.length} Disciplines`,
                `عرض ${filteredDisciplines.length} تخصصات`
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Main Disciplines Showcase Grid */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]/60 dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDisciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#16A34A]/50 transition-all flex flex-col justify-between shadow-sm group"
                >
                  <div className="space-y-5">
                    {/* Discipline Header with Icon and Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#16A34A] group-hover:bg-[#DCFCE7] dark:group-hover:bg-[#16A34A]/20 transition-colors shadow-sm">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                        {item.number}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#16A34A] transition-colors">
                        <Link href={`/services/${item.id}`} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
                          {t(item.titleEn, item.titleAr)}
                        </Link>
                      </h3>
                      <p className="font-body text-xs font-semibold text-[#16A34A] mt-1">
                        {t(item.taglineEn, item.taglineAr)}
                      </p>
                    </div>

                    {/* Detailed Description */}
                    <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(item.descEn, item.descAr)}
                    </p>

                    {/* Key Technical Deliverables */}
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-slate-900 dark:text-white block">
                        {t('Engineering Deliverables', 'المخرجات الهندسية')}
                      </span>
                      <ul className="space-y-1.5">
                        {(isRtl ? item.deliverablesAr : item.deliverablesEn).map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applicable Codes & Standards */}
                    <div className="pt-2">
                      <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                        {t('Standards & Codes', 'الكودات والمعايير')}
                      </span>
                      <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                        {t(item.codesEn, item.codesAr)}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      href={`/services/${item.id}`}
                      className="font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] inline-flex items-center gap-1.5 transition-colors min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                      aria-label={`${t('View details for', 'عرض تفاصيل')} ${t(item.titleEn, item.titleAr)}`}
                    >
                      <span>{t(`View ${item.titleEn}`, `عرض ${item.titleAr}`)}</span>
                      <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors min-h-[44px] py-2 px-2 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                      aria-label={`${t('Consult about', 'استشارة حول')} ${t(item.titleEn, item.titleAr)}`}
                    >
                      {t('Consult on Discipline', 'طلب استشارة')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 4-Phase Delivery Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#16A34A] font-bold">
              {t('PROJECT LIFECYCLE METHODOLOGY', 'منهجية إدارة وتنفيذ المشاريع')}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t(
                'Disciplined 4-Phase Engineering Delivery',
                'أربع مراحل هندسية محكمة لضمان نجاح مشروعك'
              )}
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t(
                'Every commission follows a structured roadmap that mitigates construction risks, expedites permits, and controls capital expenditures.',
                'يخضع كل مشروع لمسار تنفيذي منظم يقلل المخاطر الإنشائية، يسرع التراخيص، ويضبط التكاليف والميزانية.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-extrabold text-[#16A34A] block">
                    {st.step}
                  </span>
                  <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white">
                    {t(st.titleEn, st.titleAr)}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(st.descEn, st.descAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner Callout */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]/60 dark:bg-[#0B1117] transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="px-3 py-1 rounded bg-[#16A34A] text-white text-xs font-semibold uppercase tracking-wider inline-block">
                {t('DIRECT ENGINEERING CONSULTATION', 'استشارة هندسية مباشرة')}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                {t(
                  'Have a Project Brief or Land Plot in Abu Dhabi or the UAE?',
                  'هل لديك قطعة أرض أو فكرة مشروع في أبوظبي أو أي من إمارات الدولة؟'
                )}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t(
                  'Consult with our senior engineering leads to review your site parameters, zoning requirements, and initial structural options.',
                  'تواصل مباشرة مع كبار مهندسينا لدراسة بيانات الأرض، اشتراطات البناء البلدية، والمقترحات الإنشائية والمعمارية المناسبة.'
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-semibold tracking-wider uppercase transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                aria-label={t('Consult an Engineer on our contact page', 'استشر مهندساً عبر صفحة التواصل')}
              >
                <span>{t('Consult an Engineer', 'استشر مهندساً')}</span>
                <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs font-semibold tracking-wider uppercase border border-slate-700 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                aria-label={t('Learn About Our Firm on our about page', 'تعرف على الشركة عبر صفحة من نحن')}
              >
                <span>{t('Learn About Our Firm', 'تعرف على الشركة')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
