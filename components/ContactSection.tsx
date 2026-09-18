'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';

export default function ContactSection() {
  const { isRtl, t } = useApp();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#172033]/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="relative bg-slate-900 dark:bg-slate-950 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl w-full">
          {/* Subtle decorative geometric background glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#16A34A]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#DCFCE7]">
                {t('Engineering Inquiries', 'استفسارات هندسية')}
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {t(
                'Have an Engineering Project in Mind?',
                'هل لديك مشروع هندسي ترغب في تطويره؟'
              )}
            </h2>

            <p className="font-body text-slate-300 text-sm sm:text-lg leading-relaxed">
              {t(
                'Connect with our engineering team in Abu Dhabi for project inquiries, technical consultancy, structural reviews, and feasibility studies across the UAE.',
                'تواصل مع فريقنا الهندسي في أبوظبي للاستفسارات عن المشاريع، الاستشارات الفنية، المراجعات الإنشائية، ودراسات الجدوى في دولة الإمارات.'
              )}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-lg bg-[#16A34A] text-white font-sans text-sm font-semibold tracking-wide shadow-md hover:bg-[#15803D] transition-all w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                href="/contact"
                id="contact-request-consultation-btn"
              >
                <span>{t('Contact Us', 'تواصل معنا')}</span>
                <ArrowForward className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
              </Link>

              <a
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-lg bg-slate-800/80 text-white font-sans text-sm font-semibold border border-slate-700 hover:bg-slate-800 transition-all w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                href="tel:+97126588099"
                id="contact-call-desk-btn"
                aria-label={t('Call our Abu Dhabi office: +971 2 658 8099', 'اتصل بمكتبنا في أبوظبي: +971 2 658 8099')}
              >
                <Phone className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                <span dir="ltr">+971 2 658 8099</span>
              </a>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-slate-300">
              <span>
                {t('Abu Dhabi, UAE', 'أبوظبي، الإمارات العربية المتحدة')}
              </span>
              <span aria-hidden="true">•</span>
              <span>P.O. Box 58571</span>
              <span aria-hidden="true">•</span>
              <a
                href="mailto:info@mustasharland.ae"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
                aria-label={t('Send email to info@mustasharland.ae', 'إرسال بريد إلكتروني إلى info@mustasharland.ae')}
              >
                info@mustasharland.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
