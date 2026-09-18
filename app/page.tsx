import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import PillarsSection from '@/components/PillarsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { getOrganizationSchema, SITE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
  description: 'Multidisciplinary engineering consultancy based in Abu Dhabi, UAE. Delivering architectural design, civil & structural engineering, project management, and construction supervision since 2019.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
    description: 'Multidisciplinary engineering consultancy based in Abu Dhabi, UAE. Delivering architectural design, civil & structural engineering, project management, and construction supervision since 2019.',
    url: SITE_URL,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="relative w-full max-w-full min-h-screen overflow-x-hidden bg-[#F8FAFC]/50 dark:bg-[#0B1117] text-slate-800 dark:text-slate-200 flex flex-col antialiased transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PillarsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
