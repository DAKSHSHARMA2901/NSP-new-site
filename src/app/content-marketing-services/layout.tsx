import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Drive Engagement & Growth',
  description: 'Drive engagement, strategy & growth with SEO-optimized content creation. Expert content marketing services from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/content-marketing-services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/content-marketing-services',
    title: 'Content Marketing Services | Drive Engagement & Growth',
    description: 'Drive engagement, strategy & growth with SEO-optimized content creation. Expert content marketing services from NSP Global Services.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing Services | Drive Engagement & Growth',
    description: 'Drive engagement, strategy & growth with SEO-optimized content creation. Expert content marketing services from NSP Global Services.',
  },
}

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
