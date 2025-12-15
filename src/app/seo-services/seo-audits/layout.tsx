import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional SEO Audit Services | Comprehensive Website Analysis',
  description: 'Get a comprehensive SEO audit from NSP Global Services. Identify technical issues, on-page problems, and opportunities to improve your search rankings.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/seo-audits',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/seo-audits',
    title: 'Professional SEO Audit Services | Comprehensive Website Analysis',
    description: 'Get a comprehensive SEO audit from NSP Global Services. Identify technical issues, on-page problems, and opportunities to improve your search rankings.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional SEO Audit Services | Comprehensive Website Analysis',
    description: 'Get a comprehensive SEO audit from NSP Global Services.',
  },
}

export default function SEOAuditsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
