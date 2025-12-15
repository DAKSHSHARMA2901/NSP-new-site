import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get In Touch with NSP Global Services',
  description: 'Contact NSP Global Services for expert digital marketing solutions. Reach out to our team for SEO, PPC, web development, and more. Available 24/7 to help your business grow.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/contact',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/contact',
    title: 'Contact Us - Get In Touch with NSP Global Services',
    description: 'Contact NSP Global Services for expert digital marketing solutions. Reach out to our team for SEO, PPC, web development, and more.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get In Touch with NSP Global Services',
    description: 'Contact NSP Global Services for expert digital marketing solutions. Reach out to our team for SEO, PPC, web development, and more.',
    images: ['https://www.nspglobalservices.com/logo.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
