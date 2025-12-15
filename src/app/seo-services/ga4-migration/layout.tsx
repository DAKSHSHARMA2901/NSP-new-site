import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GA4 Migration Services | Google Analytics 4 Setup',
  description: 'Professional GA4 migration services. Seamlessly transition from Universal Analytics to Google Analytics 4 with expert setup and configuration.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/ga4-migration',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/ga4-migration',
    title: 'GA4 Migration Services | Google Analytics 4 Setup',
    description: 'Professional GA4 migration services. Seamlessly transition to Google Analytics 4.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA4 Migration Services | Google Analytics 4 Setup',
    description: 'Professional GA4 migration services.',
  },
}

export default function GA4MigrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
