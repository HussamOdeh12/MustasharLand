import { companyProfile, ServiceDiscipline } from './content';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mustasharland.vercel.app';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: companyProfile.nameEn,
    alternateName: companyProfile.nameAr,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/og-mustashar-land.jpg`,
    foundingDate: companyProfile.establishedYear,
    telephone: companyProfile.phonePrimary,
    email: companyProfile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abu Dhabi',
      addressCountry: 'AE',
      postOfficeBoxNumber: '58571',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(service: ServiceDiscipline) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.id}/#service`,
    name: service.title.en,
    alternateName: service.title.ar,
    description: service.overview.en,
    provider: {
      '@type': 'ProfessionalService',
      name: companyProfile.nameEn,
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.id}`,
  };
}
