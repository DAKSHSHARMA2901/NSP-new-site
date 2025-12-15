import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FacebookAdvertisingContent from '@/components/FacebookAdvertisingContent'

export const metadata: Metadata = {
  title: 'Facebook Advertising Services: Maximize Your Social Reach | NSP Global Services',
  description: 'NSP provides Facebook ad and PPC management services to assist your business in fully utilising Facebook. Our Facebook Advertising Services drive results.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/facebook-advertising',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/facebook-advertising',
    title: 'Facebook Advertising Services: Maximize Your Social Reach',
    description: 'NSP provides Facebook ad and PPC management services to assist your business in fully utilising Facebook. Our Facebook Advertising Services drive results.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Facebook Advertising',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Advertising Services: Maximize Your Social Reach',
    description: 'NSP provides Facebook ad and PPC management services to assist your business in fully utilising Facebook. Our Facebook Advertising Services drive results.',
    images: ['https://www.nspglobalservices.com/logo.jpg'],
  },
}

export default function FacebookAdvertisingPage() {
  return (
    <>
      <Header />
      <FacebookAdvertisingContent />
      <Footer />
    </>
  )
}
