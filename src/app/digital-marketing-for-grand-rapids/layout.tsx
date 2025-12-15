import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing for Grand Rapids | Local SEO & PPC Services',
  description: 'Professional digital marketing services in Grand Rapids. Boost your local presence with our SEO, PPC, and content marketing solutions.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/digital-marketing-for-grand-rapids',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/digital-marketing-for-grand-rapids',
    title: 'Digital Marketing for Grand Rapids | Local SEO & PPC Services',
    description: 'Professional digital marketing services in Grand Rapids. Boost your local presence with our SEO, PPC, and content marketing solutions.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing for Grand Rapids | Local SEO & PPC Services',
    description: 'Professional digital marketing services in Grand Rapids. Boost your local presence with our SEO, PPC, and content marketing solutions.',
  },
}

export default function DigitalMarketingGrandRapidsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
