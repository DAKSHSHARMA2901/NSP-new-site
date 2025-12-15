import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Link Building Services | High-Quality Backlinks',
  description: 'Professional link building services to boost your domain authority. Ethical, white-hat link building strategies from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/link-building-services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/link-building-services',
    title: 'Link Building Services | High-Quality Backlinks',
    description: 'Professional link building services to boost your domain authority.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Building Services | High-Quality Backlinks',
    description: 'Professional link building services to boost your domain authority.',
  },
}

export default function LinkBuildingServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
