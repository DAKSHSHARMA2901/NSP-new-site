import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Consultancy Services | Expert SEO Strategy',
  description: 'Professional SEO consulting services to develop winning search strategies. Get expert guidance and actionable insights from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/seo-consultancy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/seo-consultancy',
    title: 'SEO Consultancy Services | Expert SEO Strategy',
    description: 'Professional SEO consulting services to develop winning search strategies.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Consultancy Services | Expert SEO Strategy',
    description: 'Professional SEO consulting services to develop winning search strategies.',
  },
}

export default function SEOConsultancyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
