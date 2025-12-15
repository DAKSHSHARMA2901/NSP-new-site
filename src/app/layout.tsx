// /src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResourceHints from "@/components/ResourceHints";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'NSP Global Services - Expert SEO & Digital Marketing Agency',
  description: 'Transform your digital presence with our AI-powered SEO strategies. Join 140,000+ businesses achieving 60% ranking boosts and 30% traffic growth.',
  keywords: 'SEO services, digital marketing, PPC management, web development, search engine optimization, online marketing',
  authors: [{ name: 'NSP Global Services' }],
  openGraph: {
    title: 'NSP Global Services - Expert SEO & Digital Marketing',
    description: 'Boost your rankings and drive more traffic with our proven SEO strategies',
    type: 'website',
    locale: 'en_US',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSP Global Services - Expert SEO & Digital Marketing',
    description: 'Boost your rankings and drive more traffic with our proven SEO strategies',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'x-dns-prefetch-control': 'on',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NSP Global Services',
    description: 'Expert SEO & Digital Marketing Agency providing AI-powered strategies for business growth',
    url: 'https://nspglobalservices.com',
    logo: 'https://nspglobalservices.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+447436220544',
      contactType: 'customer service',
      availableLanguage: 'English'
    },

    sameAs: [
      'https://www.facebook.com/nspglobalservices',
      'https://www.linkedin.com/company/nspglobalservices',
      'https://twitter.com/nspglobalservices'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search Engine Optimization to boost rankings and organic traffic'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PPC Management',
            description: 'Pay-per-click advertising campaign management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom website design and development services'
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager - paste your GTM ID below */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-5N3ZBVPQ'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5N3ZBVPQ');`,
          }}
        />
      </head>

      <body className={`${inter.className} font-sans antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5N3ZBVPQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          ></iframe>
        </noscript>

        <ResourceHints />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
