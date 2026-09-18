import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | MUSTASHAR LAND Engineering Consultancy Abu Dhabi',
  description:
    'Contact MUSTASHAR LAND Engineering Consultancy (مستشار لاند للاستشارات الهندسية) in Abu Dhabi, UAE. Request an engineering consultation, project inquiry, or technical advisory.',
  openGraph: {
    title: 'Contact Us | MUSTASHAR LAND Engineering Consultancy',
    description:
      'Get in touch with MUSTASHAR LAND Engineering Consultancy in Abu Dhabi, UAE. Inquire about architectural design, structural engineering, and project management consultancy services.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
