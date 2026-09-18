'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useApp } from '@/lib/context';
import { companyProfile } from '@/lib/content';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  HelpCircle,
  FileText,
} from 'lucide-react';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const { isRtl, t } = useApp();
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    {
      id: 'general',
      labelEn: 'General Project Consultation',
      labelAr: 'استشارة هندسية عامة',
    },
    {
      id: 'project-management',
      labelEn: 'Project Management Consultancy (PMC)',
      labelAr: 'إدارة المشاريع الهندسية (PMC)',
    },
    {
      id: 'structural-engineering',
      labelEn: 'Civil & Structural Engineering',
      labelAr: 'الهندسة المدنية والإنشائية',
    },
    {
      id: 'infrastructure-planning',
      labelEn: 'Infrastructure & Wet Utilities',
      labelAr: 'البنية التحتية وشبكات المياه والصرف',
    },
    {
      id: 'urban-gis',
      labelEn: 'Urban Planning & GIS Addressing',
      labelAr: 'التخطيط الحضري ونظم المعلومات الجغرافية',
    },
    {
      id: 'landscape-green',
      labelEn: 'Landscape & Green Space Planning',
      labelAr: 'تنسيق الحدائق والمساحات الخضراء المستدامة',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('Full name is required', 'الاسم الكامل مطلوب');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('Email address is required', 'البريد الإلكتروني مطلوب');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t('Please enter a valid email address', 'يرجى إدخال بريد إلكتروني صحيح');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('Phone number is required', 'رقم الهاتف مطلوب');
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = t('Please enter a valid phone number', 'يرجى إدخال رقم هاتف صحيح');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('Inquiry message is required', 'يرجى كتابة تفاصيل الاستفسار');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t(
        'Please provide at least 10 characters',
        'يرجى كتابة 10 أحرف على الأقل لشرح الاستفسار'
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate professional transmission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B1117] transition-colors">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 pb-20">
          {/* Breadcrumb Bar */}
        <div className="border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0F172A]/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link
              href="/"
              className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-1 px-0.5"
              id="breadcrumb-home"
            >
              {t('Home', 'الرئيسية')}
            </Link>
            <ChevronIcon className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span className="font-semibold text-slate-900 dark:text-white">
              {t('Contact Us', 'اتصل بنا')}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-12 sm:pb-16 border-b border-slate-100 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] text-xs font-bold tracking-wide">
                <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t('Corporate Engineering Office', 'المكتب الهندسي الرئيسي')}</span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {t(
                  'Connect with Our Engineering Office in Abu Dhabi',
                  'تواصل مع مكتبنا الهندسي في أبوظبي'
                )}
              </h1>

              <p className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {t(
                  'Submit your project parameters, schedule a technical consultation, or reach our multidisciplinary engineering team in Abu Dhabi directly.',
                  'شاركنا تفاصيل مشروعك، أو احجز استشارة هندسية تخصصية، أو تواصل مباشرة مع فريقنا الهندسي المتكامل في أبوظبي.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Info Cards & Contact Form */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Verified Information & Corporate Facts */}
              <div className="lg:col-span-5 space-y-8">
                {/* Office Identity Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16A34A]/10 text-[#16A34A] text-xs font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t('100% Emirati-Owned & Managed', 'ملكية وإدارة إماراتية 100%')}</span>
                    </div>
                    <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {t(companyProfile.nameEn, companyProfile.nameAr)}
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(
                        'Multidisciplinary engineering consultancy established in 2019 in Abu Dhabi, providing project management, civil and structural engineering, infrastructure, urban GIS planning, and landscape solutions.',
                        'شركة استشارات هندسية متعددة التخصصات تأسست عام 2019 في أبوظبي، تقدم خدمات إدارة المشاريع، الهندسة المدنية والإنشائية، البنية التحتية، التخطيط الحضري ونظم GIS، وتنسيق المساحات الخضراء.'
                      )}
                    </p>
                  </div>

                  {/* Verified Contact Details Matrix */}
                  <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    {/* Location */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-[#16A34A] shrink-0">
                        <MapPin className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          {t('Location & Post Office', 'الموقع وصندوق البريد')}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                          {t(companyProfile.hqAddressEn, companyProfile.hqAddressAr)}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400 block">
                          {t(`P.O. Box ${companyProfile.poBox.replace('P.O. Box ', '')}`, companyProfile.poBox)}
                        </span>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-[#16A34A] shrink-0">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          {t('Direct Telephone', 'الهاتف المباشر')}
                        </span>
                        <a
                          href={`tel:${companyProfile.phonePrimary.replace(/\s+/g, '')}`}
                          className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors inline-block font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-1 min-h-[44px] flex items-center"
                          dir="ltr"
                          id="contact-phone-link"
                          aria-label={t('Call our Abu Dhabi office directly at +971 2 658 8099', 'اتصل بمكتبنا في أبوظبي على الرقم +971 2 658 8099')}
                        >
                          {companyProfile.phonePrimary}
                        </a>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">
                          {t('Direct telephone connection', 'اتصال هاتفي مباشر')}
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-[#16A34A] shrink-0">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          {t('Inquiries & Technical Proposals', 'البريد الإلكتروني')}
                        </span>
                        <a
                          href={`mailto:${companyProfile.email}`}
                          className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors inline-block font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-1 min-h-[44px] flex items-center"
                          id="contact-email-link"
                          aria-label={t('Send email to info@mustasharland.ae', 'إرسال بريد إلكتروني إلى info@mustasharland.ae')}
                        >
                          {companyProfile.email}
                        </a>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">
                          {t('Official project correspondence', 'المراسلات الهندسية الرسمية')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Advisory Card */}
                <div className="p-7 rounded-3xl bg-slate-900 text-white space-y-4">
                  <div className="flex items-center gap-2 text-[#4ADE80]">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">
                      {t('Engineering Advisory', 'الاستشارات الهندسية')}
                    </span>
                  </div>
                  <h3 className="font-sans text-lg font-bold">
                    {t(
                      'Direct Technical Review by Senior Engineers',
                      'مراجعة فنية مباشرة من كبار المهندسين'
                    )}
                  </h3>
                  <p className="font-body text-xs text-slate-300 leading-relaxed">
                    {t(
                      'All client inquiries are reviewed with technical rigor. We assess site parameters, municipal guidelines, and discipline requirements to formulate clear engineering next steps.',
                      'تتم دراسة كافة الاستفسارات والمخططات بدقة هندسية شاملة لمراجعة معايير الموقع، متطلبات التراخيص، والحلول الإنشائية الأمثل.'
                    )}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#4ADE80] hover:underline min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                      id="contact-explore-services-link"
                    >
                      <span>{t('Explore Engineering Disciplines', 'استعراض التخصصات الهندسية')}</span>
                      <ArrowIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50/80 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  {isSubmitted ? (
                    <div className="py-8 text-center space-y-6 animate-fadeIn" id="contact-success-container" role="status" aria-live="polite">
                      <div className="w-16 h-16 rounded-full bg-[#DCFCE7] dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                      </div>

                      <div className="space-y-2 max-w-md mx-auto">
                        <h3 className="font-sans text-2xl font-bold text-slate-900 dark:text-white">
                          {t('Consultation Request Prepared', 'تم تجهيز طلب الاستشارة')}
                        </h3>
                        <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {t(
                            `Thank you, ${formData.name}. Your inquiry details have been saved. You can transmit them directly via official email draft or call our Abu Dhabi office at +971 2 658 8099.`,
                            `شكراً لك ${formData.name}. تم تجهيز بيانات طلبك بنجاح. يمكنك إرسالها مباشرة عبر مسودة البريد الرسمي أو الاتصال بمكتبنا في أبوظبي على الرقم +971 2 658 8099.`
                          )}
                        </p>
                      </div>

                      {/* Direct action links */}
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={`tel:${companyProfile.phonePrimary.replace(/\s+/g, '')}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                        >
                          <Phone className="w-4 h-4" aria-hidden="true" />
                          <span dir="ltr">{companyProfile.phonePrimary}</span>
                        </a>

                        <a
                          href={`mailto:${companyProfile.email}?subject=${encodeURIComponent(
                            `Project Inquiry - ${formData.name} (${formData.company || 'Private'})`
                          )}&body=${encodeURIComponent(
                            `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
                          )}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-sans text-xs font-bold tracking-wider hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          <span>{t('Open Email Draft', 'فتح مسودة البريد')}</span>
                        </a>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="min-h-[44px] px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                        >
                          {t('Send Another Inquiry', 'إرسال استفسار آخر')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6" id="contact-inquiry-form" aria-label={t('Consultation Request Form', 'نموذج طلب استشارة هندسية')}>
                      <div className="space-y-1.5">
                        <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {t('Project Consultation Request', 'طلب استشارة هندسية')}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {t(
                            'Please complete the details below. Required fields are marked with an asterisk (*).',
                            'يرجى تعبئة البيانات أدناه. الحقول المطلوبة مشار إليها بنجمة (*).'
                          )}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name Field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-name"
                            className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between"
                          >
                            <span>{t('Full Name', 'الاسم الكامل')} *</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            autoComplete="name"
                            required
                            aria-required="true"
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'contact-name-error' : undefined}
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: undefined });
                            }}
                            placeholder={t('e.g. Eng. Khalid Al Mansoori', 'مثال: م. خالد المنصوري')}
                            className={`w-full min-h-[44px] px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all ${
                              errors.name
                                ? 'border-red-500 dark:border-red-500'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                          />
                          {errors.name && (
                            <p id="contact-name-error" role="alert" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Company Field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-company"
                            className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300"
                          >
                            <span>{t('Company / Organization', 'الجهة / الشركة')}</span>
                            <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mx-1">
                              ({t('Optional', 'اختياري')})
                            </span>
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            autoComplete="organization"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder={t('e.g. Development Co. / Private Client', 'مثال: شركة تطوير / عميل فردي')}
                            className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-email"
                            className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300"
                          >
                            <span>{t('Email Address', 'البريد الإلكتروني')} *</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            required
                            aria-required="true"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'contact-email-error' : undefined}
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            placeholder={t('name@example.com', 'name@example.com')}
                            className={`w-full min-h-[44px] px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all ${
                              errors.email
                                ? 'border-red-500 dark:border-red-500'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                          />
                          {errors.email && (
                            <p id="contact-email-error" role="alert" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-phone"
                            className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300"
                          >
                            <span>{t('Phone / Mobile Number', 'رقم الهاتف / المتحرك')} *</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            aria-required="true"
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: undefined });
                            }}
                            placeholder={t('+971 50 000 0000', '+971 50 000 0000')}
                            className={`w-full min-h-[44px] px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all ${
                              errors.phone
                                ? 'border-red-500 dark:border-red-500'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                            dir="ltr"
                          />
                          {errors.phone && (
                            <p id="contact-phone-error" role="alert" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Service / Inquiry Type Field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-service"
                          className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300"
                        >
                          <span>{t('Service / Inquiry Type', 'نوع الخدمة أو الاستفسار')}</span>
                        </label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all cursor-pointer"
                        >
                          <option value="">
                            {t('Select an Engineering Discipline or General Inquiry', 'اختر التخصص الهندسي أو استفسار عام')}
                          </option>
                          {inquiryOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {t(opt.labelEn, opt.labelAr)}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-message"
                          className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between"
                        >
                          <span>{t('Project Brief / Message', 'تفاصيل المشروع أو الاستفسار')} *</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          required
                          aria-required="true"
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'contact-message-error' : undefined}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: undefined });
                          }}
                          placeholder={t(
                            'Please describe your project location, scope of work, timeline objectives, or specific engineering questions...',
                            'يرجى وصف موقع المشروع، نطاق الأعمال المطلوب، والأهداف الفنية أو أي استفسارات هندسية محددة...'
                          )}
                          className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all resize-y ${
                            errors.message
                              ? 'border-red-500 dark:border-red-500'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.message && (
                          <p id="contact-message-error" role="alert" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Action */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[44px] px-8 py-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 text-white font-sans text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                          id="contact-submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                              <span>{t('Transmitting Request...', 'جارٍ الإرسال...')}</span>
                            </>
                          ) : (
                            <>
                              <span>{t('Submit Consultation Request', 'إرسال طلب الاستشارة')}</span>
                              <Send className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
