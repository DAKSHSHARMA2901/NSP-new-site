import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Backlink Audit Services | Link Profile Analysis',
  description: 'Comprehensive backlink audit services to analyze and improve your link profile. Identify toxic links and build a healthy backlink strategy.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/backlink-audit',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/backlink-audit',
    title: 'Backlink Audit Services | Link Profile Analysis',
    description: 'Comprehensive backlink audit services to analyze and improve your link profile.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backlink Audit Services | Link Profile Analysis',
    description: 'Comprehensive backlink audit services to analyze and improve your link profile.',
  },
}

export default function BacklinkAuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
