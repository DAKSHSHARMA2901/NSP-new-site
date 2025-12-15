import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TikTokAdvertisingContent from '@/components/TikTokAdvertisingContent'

export const metadata: Metadata = {
  title: 'TikTok Advertising Services | Ignite Your Brand\'s Success',
  description: 'Supercharge your brand\'s reach with TikTok advertising services. Target your audience and boost conversions today.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/tiktok-advertising',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nspglobalservices.com/ppc-services/tiktok-advertising',
    title: 'TikTok Advertising Services | Ignite Your Brand\'s Success',
    description: 'Supercharge your brand\'s reach with TikTok advertising services. Target your audience and boost conversions today.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services TikTok Advertising'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Advertising Services | Ignite Your Brand\'s Success',
    description: 'Supercharge your brand\'s reach with TikTok advertising services. Target your audience and boost conversions today.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function TikTokAdvertisingPage() {
  return (
    <>
      <Header />
      <TikTokAdvertisingContent />
      <Footer />
    </>
  )
}
