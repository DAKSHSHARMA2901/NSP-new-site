import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile SEO Services | Mobile-First Optimization',
  description: 'Expert mobile SEO services to optimize your website for mobile devices. Improve mobile rankings and user experience with NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/mobile-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/mobile-seo',
    title: 'Mobile SEO Services | Mobile-First Optimization',
    description: 'Expert mobile SEO services to optimize your website for mobile devices.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile SEO Services | Mobile-First Optimization',
    description: 'Expert mobile SEO services to optimize your website for mobile devices.',
  },
}

export default function MobileSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
