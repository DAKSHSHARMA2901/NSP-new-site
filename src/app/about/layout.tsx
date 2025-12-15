import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NSP: Your Trusted Digital Marketing Partner | NSP Global Services',
  description: 'Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/about',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/about-us',
    title: 'About NSP: Your Trusted Digital Marketing Partner',
    description: 'Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NSP: Your Trusted Digital Marketing Partner',
    description: 'Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success.',
    images: ['https://www.nspglobalservices.com/logo.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
