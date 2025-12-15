import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrity SEO Services | Personal Brand Optimization',
  description: 'Expert SEO services for celebrities, influencers, and public figures. Manage your online reputation and boost your personal brand visibility.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/celebrity-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/celebrity-seo',
    title: 'Celebrity SEO Services | Personal Brand Optimization',
    description: 'Expert SEO services for celebrities, influencers, and public figures.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrity SEO Services | Personal Brand Optimization',
    description: 'Expert SEO services for celebrities, influencers, and public figures.',
  },
}

export default function CelebritySEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
