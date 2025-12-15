import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsMarquee from '@/components/ToolsMarquee';
import TrustedPartners from '@/components/TrustedPartners';
import ServicesSection from '@/components/ServicesSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProcessSteps from '@/components/ProcessSteps';
import PortfolioGallery from '@/components/PortfolioGallery';
import KeyBenefits from '@/components/KeyBenefits';
import WhyChoose from '@/components/WhyChoose';
import JoinAgency from '@/components/JoinAgency';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NSP Global Services - Expert SEO & Digital Marketing Agency',
  description: 'Transform your digital presence with our AI-powered SEO strategies. Join 140,000+ businesses achieving 60% ranking boosts and 30% traffic growth.',
  keywords: 'SEO services, digital marketing, PPC management, web development, search engine optimization, online marketing, social media marketing',
  alternates: {
    canonical: 'https://www.nspglobalservices.com',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com',
    title: 'NSP Global Services - Expert SEO & Digital Marketing Agency',
    description: 'Transform your digital presence with our AI-powered SEO strategies. Join 140,000+ businesses achieving 60% ranking boosts and 30% traffic growth.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSP Global Services - Expert SEO & Digital Marketing Agency',
    description: 'Transform your digital presence with our AI-powered SEO strategies. Join 140,000+ businesses achieving 60% ranking boosts and 30% traffic growth.',
    images: ['https://www.nspglobalservices.com/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <TrustedPartners />
        <StatsSection />
        <ServicesSection />
        <ExpertiseSection />
        <ProcessSteps />
        <PortfolioGallery />
        <KeyBenefits />
        <WhyChoose />
        <JoinAgency />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
