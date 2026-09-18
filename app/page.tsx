'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import PillarsSection from '@/components/PillarsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative w-full max-w-full min-h-screen overflow-x-hidden bg-[#F8FAFC]/50 dark:bg-[#0B1117] text-slate-800 dark:text-slate-200 flex flex-col antialiased transition-colors duration-200">
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
