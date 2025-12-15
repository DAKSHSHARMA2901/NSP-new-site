import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Services for Online Alcohol Stores | Drive Traffic & Boost Sales',
  description:
    'Specialized SEO strategies for online liquor stores, wineries, breweries, and distilleries. Increase visibility, drive targeted traffic, and dominate search results with our proven SEO services.',
  openGraph: {
    title: 'SEO Services for Online Alcohol Stores | Drive Traffic & Boost Sales',
    description:
      'Specialized SEO strategies for online liquor stores, wineries, breweries, and distilleries. Increase visibility and drive sales with our expert SEO services.',
    url: 'https://www.nspglobalservices.com/seo-for/alcohol-stores',
    images: [
      {
        url: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1760735954/Gemini_Generated_Image_dfw3ardfw3ardfw3_cdgmr1.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services for Online Alcohol Stores',
      },
    ],
    siteName: 'NSP Global Services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-for/alcohol-stores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services for Online Alcohol Stores | Drive Traffic & Boost Sales',
    description:
      'Specialized SEO strategies for online liquor stores, wineries, breweries, and distilleries. Increase visibility and drive sales.',
    images: [
      'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1760735954/Gemini_Generated_Image_dfw3ardfw3ardfw3_cdgmr1.png',
    ],
  },
  keywords: [
    'alcohol store SEO',
    'liquor store SEO services',
    'winery SEO',
    'brewery SEO',
    'distillery SEO',
    'online alcohol sales SEO',
    'alcohol ecommerce SEO',
    'spirits website optimization',
    'wine shop SEO',
    'craft beer SEO',
    'alcohol retail SEO'
  ],
}

export default function AlcoholStoresSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
