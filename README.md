# MUSTASHAR LAND Engineering Consultancy

> **Official bilingual corporate portfolio website for MUSTASHAR LAND Engineering Consultancy (مستشار لاند للاستشارات الهندسية)**, a multidisciplinary engineering consultancy based in Abu Dhabi, United Arab Emirates.

- **Production URL:** [https://mustasharland.vercel.app](https://mustasharland.vercel.app)
- **Planned Custom Domain:** [https://mustasharland.ae](https://mustasharland.ae)

---

## Overview

This repository contains the production source code for the official bilingual corporate website of **MUSTASHAR LAND Engineering Consultancy**. Established in 2019 in Abu Dhabi, MUSTASHAR LAND is a 100% Emirati-owned multidisciplinary engineering consultancy providing architectural design, civil and structural engineering, project management (PMC), and construction supervision across the UAE.

The web application is designed to deliver a modern, high-performance digital presence with full bilingual English/Arabic localization, bidirectional layout switching (LTR/RTL), dark/light theme preferences, rich structured content, and comprehensive search engine optimization (SEO).

### Core Highlights
- **Location & Jurisdiction:** Abu Dhabi, UAE — covering Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.
- **Language Support:** English (`en`) and Arabic (`ar`) with native typography, full translations, and bidirectional layout handling (`dir="ltr"` / `dir="rtl"`).
- **Theme Support:** Dark mode default with high-contrast light mode toggle and persistent browser storage.
- **Responsive Engineering:** Fluid layouts optimized across mobile (>=320px), tablet, laptop, and ultra-wide displays.
- **Domain Coverage:** Detailed technical service pages, multi-sector project portfolios, company profile, and interactive inquiry routing.

---

## Key Features

### Architecture & Framework
- **Next.js 15 App Router:** Utilizes React Server Components (RSC) and client component leaves for optimized performance and minimal client-side JavaScript footprint.
- **TypeScript Strict Mode:** 100% type-safe codebase with comprehensive interfaces for engineering disciplines, project portfolios, and company metadata.
- **Tailwind CSS v4:** Modern utility styling with CSS variable integration, smooth color transitions, and zero runtime CSS overhead.
- **Static Generation (`output: 'standalone'`):** Prerendered static pages across all corporate routes for near-instant Time to First Byte (TTFB).

### Internationalization & Accessibility
- **Instant English / Arabic Switching:** Global state context (`AppProvider`) orchestrating bilingual copy without page reloads or layout shift.
- **Dynamic RTL / LTR Mirroring:** Layouts automatically mirror navigation bars, grid orders, typography alignments, and chevron directions.
- **WCAG 2.2 AA Oriented:**
  - High-contrast color ratios (slate/emerald palette matching corporate identity).
  - Accessible touch targets (`min-h-[44px]` on all interactive elements).
  - Keyboard accessible with skip-to-content navigation (`#main-content`).
  - Clear `:focus-visible` focus rings (`ring-2 ring-[#16A34A]`).
  - Screen-reader labels (`aria-label`, `aria-hidden`, `role="dialog"`).
  - Reduced-motion consideration in CSS transitions.

### SEO & Structured Data
- **Metadata API:** Dynamic titles, descriptions, and OpenGraph/Twitter card tags for every individual route.
- **Dynamic Sitemap (`/sitemap.xml`):** Generates all 20 public indexable URLs with change frequencies and priority scores.
- **Robots Directive (`/robots.txt`):** Dynamic robots file pointing to canonical sitemap endpoints.
- **Schema.org JSON-LD:**
  - `ProfessionalService` organization schema.
  - `BreadcrumbList` navigational hierarchy markup.
  - `Service` schema on all discipline detail pages.

### Media & Font Optimization
- **Next/Image Optimization:** Responsive image sizing (`deviceSizes`, `imageSizes`), modern AVIF/WebP formats, and 30-day edge caching headers.
- **Zero Layout Shift Typography:** Next.js Google Font integration (`Plus Jakarta Sans` for English display, `Inter` for body text, and `Cairo` for Arabic typography).

---

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| **Next.js** | `15.4.9` | Application framework (App Router, SSR/SSG, Metadata, Sitemap) |
| **React** | `19.2.1` | UI component library & hooks |
| **React DOM** | `19.2.1` | DOM rendering engine |
| **TypeScript** | `5.9.3` | Type safety and domain model definitions |
| **Tailwind CSS** | `4.1.11` | Utility-first styling framework |
| **@tailwindcss/postcss** | `4.1.11` | PostCSS plugin for Tailwind v4 engine |
| **@tailwindcss/typography** | `0.5.19` | Typographic formatting for long-form content |
| **Lucide React** | `0.553.0` | Clean, accessible vector UI icons |
| **Motion** | `12.23.24` | Animation utilities (`motion/react`) |
| **ESLint** | `9.39.1` | Static code analysis and linting (`eslint-config-next 16.0.8`) |
| **PostCSS / Autoprefixer** | `8.5.6` / `10.4.21` | CSS transformation and vendor prefixing |
| **Vercel** | — | Production edge hosting & deployment platform |

---

## Project Structure

```
.
├── app/                               # Next.js App Router root
│   ├── about/                         # Company profile, leadership, and vision
│   │   ├── AboutClient.tsx
│   │   └── page.tsx
│   ├── contact/                       # Contact details, map coordinates & inquiry form
│   │   ├── ContactClient.tsx
│   │   └── page.tsx
│   ├── projects/                      # Projects showcase & dynamic detail routes
│   │   ├── [slug]/                    # Individual project case study pages
│   │   │   ├── ProjectDetailClient.tsx
│   │   │   └── page.tsx
│   │   ├── ProjectsClient.tsx
│   │   └── page.tsx
│   ├── services/                      # Engineering disciplines & dynamic detail routes
│   │   ├── [slug]/                    # Individual engineering discipline pages
│   │   │   ├── ServiceDetailClient.tsx
│   │   │   └── page.tsx
│   │   ├── ServicesClient.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css                    # Tailwind CSS v4 imports & theme variables
│   ├── layout.tsx                     # Root layout with HTML/Body, fonts, AppProvider & Schema.org
│   ├── not-found.tsx                  # Bilingual custom 404 error page
│   ├── page.tsx                       # Homepage assembling hero, pillars, disciplines, projects, & contact
│   ├── robots.ts                      # Dynamic robots.txt generation
│   └── sitemap.ts                     # Dynamic sitemap.xml indexing 20 public routes
├── components/                        # Reusable client & UI components
│   ├── AboutSection.tsx               # Homepage overview & corporate credentials
│   ├── BrandLogo.tsx                  # SVG brand mark & typography
│   ├── ContactSection.tsx             # Interactive inquiry form & office details
│   ├── Footer.tsx                     # Bilingual footer, quick links, and license info
│   ├── Hero.tsx                       # Headline, metric counters, and CTAs
│   ├── Navbar.tsx                     # Navigation header, language switch & theme toggle
│   ├── PillarsSection.tsx             # Four core corporate pillars
│   ├── ProjectsSection.tsx            # Featured portfolio cards
│   └── ServicesSection.tsx            # Featured discipline cards
├── lib/                               # Data models, contexts, and helper utilities
│   ├── content.ts                     # Canonical bilingual content (services, projects, profile)
│   ├── context.tsx                    # React Context for language (en/ar) and theme (light/dark)
│   ├── safe-polyfill-nomodule.js      # Sandbox runtime safety polyfill
│   ├── structured-data.ts             # Schema.org JSON-LD generators
│   └── utils.ts                       # Class merging helper (`cn`)
├── public/                            # Static assets served at root
│   ├── assets/                        # Logos and vector resources
│   └── images/                        # Optimized project, hero, discipline, and OG images
│       ├── about/
│       ├── disciplines/
│       ├── hero/
│       ├── og/
│       └── projects/
├── scripts/                           # Build-time optimization & polyfill scripts
│   └── patch-polyfills.js             # Polyfill compatibility patcher
├── metadata.json                      # AI Studio platform configuration
├── next.config.ts                     # Next.js build, image domains, and Webpack configuration
├── package.json                       # Project dependencies and script declarations
├── postcss.config.mjs                 # PostCSS setup with Tailwind v4
└── tsconfig.json                      # TypeScript configuration
```

---

## Routes & Pages

The application delivers **20 public indexable URLs** generated statically:

### 1. Primary Static Pages (5 routes)
| Route | Description | Template / Component |
| --- | --- | --- |
| `/` | Homepage (Hero, Pillars, Services, Portfolio, Contact) | `app/page.tsx` |
| `/about` | Corporate Profile, Emirati Leadership & Municipalities | `app/about/page.tsx` |
| `/services` | Engineering Disciplines Index & Categorized Grid | `app/services/page.tsx` |
| `/projects` | Complete Projects Showcase & Category Filter | `app/projects/page.tsx` |
| `/contact` | Office Location, Direct Lines, P.O. Box & Consultation Form | `app/contact/page.tsx` |

### 2. Engineering Discipline Detail Pages (9 routes under `/services/[slug]`)
| Slug | Discipline Title (EN) | Discipline Title (AR) | Category |
| --- | --- | --- | --- |
| `civil-structural` | Civil & Structural Engineering | الهندسة المدنية والإنشائية | Structure & Engineering |
| `construction-supervision` | Construction Supervision & QA/QC | الإشراف الهندسي وضبط الجودة | Supervision & Quality |
| `pmc` | Project Management & Technical Consultancy | إدارة المشاريع والاستشارات الفنية | Supervision & Quality |
| `infrastructure-planning` | Infrastructure Planning & Engineering | تخطيط وهندسة البنية التحتية | Infrastructure & Planning |
| `urban-gis` | Urban Design & GIS Spatial Studies | التصميم الحضري والدراسات المكانية | Infrastructure & Planning |
| `landscape-green` | Sustainable Landscape & Green Buildings | تنسيق المواقع والعمارة المستدامة | Infrastructure & Planning |
| `architectural-design` | Architectural Design & Space Planning | التصميم المعماري والتخطيط الفراغي | Structure & Engineering |
| `mep-engineering` | MEP Engineering Coordination | الهندسة الكهروميكانيكية (MEP) | Structure & Engineering |
| `feasibility-licensing` | Feasibility Studies & Technical Consultancy | دراسات الجدوى والاستشارات الفنية | Supervision & Quality |

### 3. Project Detail Pages (6 routes under `/projects/[slug]`)
| Slug | Project Title (EN) | Project Title (AR) | Sector |
| --- | --- | --- | --- |
| `mohammed-bin-zayed-stadium` | Development Work for Mohammed bin Zayed Stadium (Al Jazira Club) | أعمال تطوير استاد محمد بن زايد (نادي الجزيرة) | Sports Facility |
| `30-private-villas` | 30 Private Villas | 30 فيلا خاصة | Residential |
| `mep-enoc-callcenter-800850` | Technical Support for MEP & eNOC Systems (Call Center 800850) | خدمات الدعم الفني لأنظمة MEP و eNOC (مركز الاتصال 800850) | Technical Support |
| `sharjah-roads-infrastructure` | Sharjah Roads & Infrastructure Projects | مشاريع الطرق والبنية التحتية في الشارقة | Infrastructure |
| `dubai-municipality` | Dubai Municipality Consultancy References | مراجع الاستشارات الهندسية - بلدية دبي | Municipal & Governmental |
| `abu-dhabi-sewerage-services` | Abu Dhabi Sewerage Services Company References | مشاريع ومراجع شركة أبوظبي لخدمات الصرف الصحي | Wet Utilities & Infrastructure |

---

## Local Development

### Prerequisites
- **Node.js:** `v20.x` or higher recommended
- **Package Manager:** `npm` (v10+ recommended)

### Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/mustasharland/mustashar-land-consultancy.git
cd mustashar-land-consultancy
npm install
```

### Development Server
Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `next dev` | Starts the Next.js development server on port 3000 |
| `build` | `node scripts/patch-polyfills.js && next build && node scripts/patch-polyfills.js` | Generates the optimized standalone production build |
| `start` | `next start` | Starts the Next.js production server |
| `lint` | `eslint .` | Runs ESLint to validate syntax, types, and imports |
| `clean` | `next clean` | Cleans the `.next` cache directory |
| `postinstall` | `node scripts/patch-polyfills.js` | Automatically patches polyfill chunks after `npm install` |

---

## Production Build & Deployment

### Building for Production
To create an optimized production build:

```bash
npm run build
```

This compiles TypeScript, generates all 20 static pages, builds trace files, and creates the standalone output directory ready for containerization or Vercel deployment.

### Vercel Deployment
This project is configured for direct deployment on Vercel:
1. Connect the GitHub repository to your Vercel team account.
2. The framework preset is automatically detected as **Next.js**.
3. Set the optional environment variable `NEXT_PUBLIC_SITE_URL` if deploying to a custom domain (e.g. `https://mustasharland.ae`). Default fallback is `https://mustasharland.vercel.app`.
4. Deploy.

---

## Company Contact Information

**MUSTASHAR LAND Engineering Consultancy**  
*مستشار لاند للاستشارات الهندسية*

- **Headquarters:** Abu Dhabi, United Arab Emirates
- **P.O. Box:** 58571, Abu Dhabi, UAE
- **Telephone:** +971 2 658 8099
- **Email:** [info@mustasharland.ae](mailto:info@mustasharland.ae)
- **Website:** [https://mustasharland.vercel.app](https://mustasharland.vercel.app)
