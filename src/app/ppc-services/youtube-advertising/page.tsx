import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import YouTubeAdvertisingContent from '@/components/YouTubeAdvertisingContent'

export const metadata: Metadata = {
  title: 'YouTube Advertising Services | Drive Results with Our Expert Team',
  description: 'NSP, as a full-service YouTube advertising agency, can supply everything your company needs to advertise on YouTube, from campaign creation to ad creation.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/youtube-advertising',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nspglobalservices.com/ppc-services/youtube-advertising',
    title: 'YouTube Advertising Services | Drive Results with Our Expert Team',
    description: 'NSP, as a full-service YouTube advertising agency, can supply everything your company needs to advertise on YouTube, from campaign creation to ad creation.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services YouTube Advertising'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Advertising Services | Drive Results with Our Expert Team',
    description: 'NSP, as a full-service YouTube advertising agency, can supply everything your company needs to advertise on YouTube, from campaign creation to ad creation.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function YouTubeAdvertisingPage() {
  return (
    <>
      <Header />
      <YouTubeAdvertisingContent />
      <Footer />
    </>
  )
}
