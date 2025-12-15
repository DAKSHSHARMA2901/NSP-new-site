import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppMarketingContent from '@/components/WhatsAppMarketingContent'

export const metadata: Metadata = {
  title: 'WhatsApp Marketing Services | Boost Your Business with Messaging',
  description: 'Our WhatsApp marketing services drive engagement and conversions. Reach your audience where they are – on their phones.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/whatsapp-marketing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nspglobalservices.com/ppc-services/whatsapp-marketing',
    title: 'WhatsApp Marketing Services | Boost Your Business with Messaging',
    description: 'Our WhatsApp marketing services drive engagement and conversions. Reach your audience where they are – on their phones.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services WhatsApp Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Marketing Services | Boost Your Business with Messaging',
    description: 'Our WhatsApp marketing services drive engagement and conversions. Reach your audience where they are – on their phones.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function WhatsAppMarketingPage() {
  return (
    <>
      <Header />
      <WhatsAppMarketingContent />
      <Footer />
    </>
  )
}
