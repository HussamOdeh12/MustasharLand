import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServices } from '@/lib/content';
import ServiceDetailClient from './ServiceDetailClient';
import { getServiceSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | MUSTASHAR LAND Engineering Consultancy',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${service.title.en} | MUSTASHAR LAND Engineering Consultancy`;
  const description = service.overview.en;
  const canonicalUrl = `${SITE_URL}/services/${service.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: service.title.en, url: `${SITE_URL}/services/${service.id}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
