import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us | MUSTASHAR LAND Engineering Consultancy',
  description: 'Connect with our engineering consultancy team in Abu Dhabi, UAE. Inquire about architectural design, structural engineering, supervision, or project management consultations.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | MUSTASHAR LAND Engineering Consultancy',
    description: 'Connect with our engineering consultancy team in Abu Dhabi, UAE. Inquire about architectural design, structural engineering, supervision, or project management consultations.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | MUSTASHAR LAND Engineering Consultancy',
    description: 'Connect with our engineering consultancy team in Abu Dhabi, UAE.',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Contact Us', url: `${SITE_URL}/contact` },
            ])
          ),
        }}
      />
      <ContactClient />
    </>
  );
}
