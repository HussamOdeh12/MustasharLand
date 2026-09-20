import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/lib/context';
import { SITE_URL } from '@/lib/structured-data';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1117' },
  ],
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
    template: '%s | MUSTASHAR LAND Engineering Consultancy',
  },
  description: 'Multidisciplinary engineering consultancy based in Abu Dhabi, UAE. Delivering architectural design, civil & structural engineering, project management, and construction supervision since 2019.',
  keywords: [
    'Mustashar Land',
    'مستشار لاند للاستشارات الهندسية',
    'Engineering Consultancy Abu Dhabi',
    'استشارات هندسية أبوظبي',
    'Civil & Structural Engineering',
    'Construction Supervision QA/QC',
    'Project Management PMC',
    'Engineering Consultancy UAE',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
    description: 'Premier multidisciplinary engineering consultancy based in Abu Dhabi, UAE. Architectural design, civil & structural engineering, and construction supervision.',
    url: SITE_URL,
    siteName: 'MUSTASHAR LAND Engineering Consultancy',
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
    images: [
      {
        url: '/images/og/og-mustashar-land.jpg',
        width: 1200,
        height: 630,
        alt: 'MUSTASHAR LAND Engineering Consultancy Abu Dhabi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUSTASHAR LAND Engineering Consultancy',
    description: 'Premier multidisciplinary engineering consultancy based in Abu Dhabi, UAE.',
    images: [
      '/images/og/og-mustashar-land.jpg',
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`w-full max-w-full overflow-x-hidden ${plusJakarta.variable} ${inter.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var t = localStorage.getItem('mustasharland-theme');
    if (t === 'dark' || (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    var l = localStorage.getItem('mustashar_lang');
    if (l === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    }
  } catch(e) {}
})();`,
          }}
        />
      </head>
      <body
        className="w-full max-w-full min-h-screen overflow-x-hidden font-body bg-[#F8FAFC]/60 text-slate-700 antialiased selection:bg-[#DCFCE7] selection:text-[#14532D] dark:bg-[#0B1117] dark:text-[#C1C7CF] transition-colors duration-200"
        suppressHydrationWarning
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
