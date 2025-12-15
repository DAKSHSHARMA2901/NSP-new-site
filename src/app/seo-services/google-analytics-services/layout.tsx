import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Analytics Services | Expert Setup & Consulting',
  description: 'Professional Google Analytics setup, configuration, and consulting services. Track your website performance and make data-driven decisions with NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/google-analytics-services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/google-analytics-services',
    title: 'Google Analytics Services | Expert Setup & Consulting',
    description: 'Professional Google Analytics setup, configuration, and consulting services.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Analytics Services | Expert Setup & Consulting',
    description: 'Professional Google Analytics setup, configuration, and consulting services.',
  },
}

export default function GoogleAnalyticsServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
