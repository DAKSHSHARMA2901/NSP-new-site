import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPC for Online Alcohol Stores | Google Ads Management Services',
  description:
    'Maximize ROI with expert PPC management for online alcohol stores. Specialized Google Ads campaigns for wines, beers, and spirits. Drive targeted traffic and boost sales.',
  openGraph: {
    title: 'PPC for Online Alcohol Stores | Google Ads Management Services',
    description:
      'Expert PPC management for online alcohol stores. Drive sales with targeted Google Ads campaigns for wines, beers, and premium spirits.',
    url: 'https://www.nspglobalservices.com/ppc-for/online-alcohol-stores',
    images: [
      {
        url: 'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png',
        width: 1200,
        height: 630,
        alt: 'PPC for Online Alcohol Stores',
      },
    ],
    siteName: 'NSP Global Services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-for/online-alcohol-stores',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC for Online Alcohol Stores | Google Ads Management Services',
    description:
      'Expert PPC management for online alcohol stores. Drive sales with targeted Google Ads campaigns.',
    images: [
      'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png',
    ],
  },
  keywords: [
    'alcohol store PPC',
    'online liquor store Google Ads',
    'wine store PPC management',
    'beer store advertising',
    'spirits Google Ads',
    'alcohol ecommerce PPC',
    'liquor shopping ads',
    'craft beer PPC',
    'wine shop advertising',
    'alcohol retail PPC services'
  ],
}

export default function OnlineAlcoholStoresPPCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
