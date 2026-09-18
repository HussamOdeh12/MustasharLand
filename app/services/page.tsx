import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Engineering Disciplines & Services | MUSTASHAR LAND Engineering Consultancy',
  description: 'Explore our multidisciplinary engineering services in Abu Dhabi: civil & structural engineering, architectural design, construction supervision, project management, infrastructure, and urban GIS.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Engineering Disciplines & Services | MUSTASHAR LAND Engineering Consultancy',
    description: 'Explore our multidisciplinary engineering services in Abu Dhabi: civil & structural engineering, architectural design, construction supervision, project management, infrastructure, and urban GIS.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Disciplines & Services | MUSTASHAR LAND Engineering Consultancy',
    description: 'Multidisciplinary engineering services in Abu Dhabi across design, supervision, and project management.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Services', url: `${SITE_URL}/services` },
            ])
          ),
        }}
      />
      <ServicesClient />
    </>
  );
}
