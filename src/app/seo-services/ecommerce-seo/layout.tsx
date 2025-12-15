import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce SEO | Best E-Commerce SEO Company',
  description: 'NSP is the best ecommerce SEO agency that can help you get your e-commerce website ranked at the top of Google. We are Ecommerce SEO specialists with extensive experience and can assist you in achieving top positions on Google SERPs.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/ecommerce-seo',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/ecommerce-seo',
    title: 'E-Commerce SEO | Best E-Commerce SEO Company',
    description: 'NSP is the best ecommerce SEO agency that can help you get your e-commerce website ranked at the top of Google. We are Ecommerce SEO specialists with extensive experience and can assist you in achieving top positions on Google SERPs.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services - E-Commerce SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce SEO | Best E-Commerce SEO Company',
    description: 'NSP is the best ecommerce SEO agency that can help you get your e-commerce website ranked at the top of Google. We are Ecommerce SEO specialists with extensive experience and can assist you in achieving top positions on Google SERPs.',
    images: ['https://www.nspglobalservices.com/logo.jpg'],
  },
};

export default function EcommerceSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
