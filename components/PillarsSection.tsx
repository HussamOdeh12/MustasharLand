'use client';

import React from 'react';
import { useApp } from '@/lib/context';
import { ShieldCheck, CheckCircle2, Clock, Leaf } from 'lucide-react';

export default function PillarsSection() {
  const { t } = useApp();

  const pillars = [
    {
      icon: ShieldCheck,
      titleEn: 'Engineering Quality & Safety',
      titleAr: 'الجودة الهندسية والسلامة',
      descEn:
        'Upholding rigorous engineering principles, comprehensive quality assurance, and site safety standards across all project stages.',
      descAr:
        'الالتزام بالمبادئ الهندسية الصارمة، توكيد الجودة الشامل، وأعلى معايير السلامة المهنية في جميع مراحل العمل والموقع.',
    },
    {
      icon: CheckCircle2,
      titleEn: 'Rigorous & Reliable',
      titleAr: 'دقة وموثوقية في الأداء',
      descEn:
        'Thorough engineering reviews, sound structural calculations, and reliable project management delivering dependable results.',
      descAr:
        'مراجعات هندسية دقيقة، حسابات إنشائية مدروسة، وإدارة مشاريع موثوقة تضمن تحقيق أعلى مستويات الدقة والاعتمادية.',
    },
    {
      icon: Clock,
      titleEn: 'Responsive Client Service',
      titleAr: 'استجابة وتواصل فعّال',
      descEn:
        'Attentive technical coordination, prompt responses, and dedicated advisory for clients, authorities, and project stakeholders.',
      descAr:
        'تنسيق فني متواصل، استجابة سريعة، واستشارات هندسية مخصصة للعملاء والجهات المعنية والشركاء.',
    },
    {
      icon: Leaf,
      titleEn: 'Local Experience & Sustainable Solutions',
      titleAr: 'خبرة محلية وحلول مستدامة',
      descEn:
        'Deep understanding of the UAE built environment, climate considerations, and sustainable engineering practices.',
      descAr:
        'فهم عميق للبيئة العمرانية في دولة الإمارات، مراعاة العوامل والظروف المناخية، وتطبيق حلول هندسية مستدامة.',
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors"
      id="rigor"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#16A34A]" />
            <span className="font-sans text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              {t('Core Values', 'قيمنا ومبادئنا')}
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t(
              'Committed to Engineering Quality, Safety & Reliability',
              'التزام راسخ بالجودة الهندسية، السلامة، والموثوقية'
            )}
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-300 text-base">
            {t(
              'Guided by recognized engineering standards, local UAE experience, and professional dedication in every project.',
              'نسترشد بالمعايير الهندسية المعتمدة، الخبرة المحلية في دولة الإمارات، والالتزام المهني في كل مشروع.'
            )}
          </p>
        </div>

        {/* 4 Clean Spacious Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#16A34A]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white">
                  {t(pillar.titleEn, pillar.titleAr)}
                </h3>
                <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(pillar.descEn, pillar.descAr)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
