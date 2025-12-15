import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bar Website Development Services | Custom Bar & Lounge Web Design',
  description:
    'Professional website development for bars, pubs, and lounges. Custom design, online reservations, menu showcase, event promotion, and SEO optimization to attract more customers and drive revenue.',
  openGraph: {
    title: 'Bar Website Development Services | Custom Bar & Lounge Web Design',
    description:
      'Professional website development for bars, pubs, and lounges. Custom design, online reservations, menu showcase, and SEO optimization.',
    url: 'https://www.nspglobalservices.com/website-development-for/bar',
    images: [
      {
        url: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_eqw45geqw45geqw4_r4ersx.png',
        width: 1200,
        height: 630,
        alt: 'Bar Website Development Services',
      },
    ],
    siteName: 'NSP Global Services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/website-development-for/bar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Website Development Services | Custom Bar & Lounge Web Design',
    description:
      'Professional website development for bars, pubs, and lounges. Custom design, online reservations, menu showcase, and SEO optimization.',
    images: [
      'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_eqw45geqw45geqw4_r4ersx.png',
    ],
  },
  keywords: [
    'bar website development',
    'pub web design',
    'lounge website',
    'cocktail bar website',
    'nightclub website design',
    'bar online reservations',
    'hospitality web design',
    'bar menu website',
    'event promotion website',
    'bar booking system',
    'restaurant bar website'
  ],
}

export default function BarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
