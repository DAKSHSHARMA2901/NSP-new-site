import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube SEO Services | Video Optimization Experts',
  description: 'Professional YouTube SEO services to rank your videos higher. Optimize titles, descriptions, tags, and grow your channel with NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/youtube-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/youtube-seo',
    title: 'YouTube SEO Services | Video Optimization Experts',
    description: 'Professional YouTube SEO services to rank your videos higher.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube SEO Services | Video Optimization Experts',
    description: 'Professional YouTube SEO services to rank your videos higher.',
  },
}

export default function YouTubeSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
