'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PPC_FOR } from '@/lib/paths';
import emailjs from '@emailjs/browser';
import { GoPlus } from '@/lib/react-icons-go-shim';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export default function PPCServicesContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'basic' | 'premium' | 'enterprise'>('basic');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFullProcess, setShowFullProcess] = useState(false);
  const [showMoreIntro, setShowMoreIntro] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_xeikd6k',
        'template_184dkpm',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'NSP Global Services',
        },
        'n--h-ZLHb25m5t0A1'
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const pricingPlans: Record<'basic' | 'premium' | 'enterprise', PricingPlan> = {
    basic: {
      name: 'Basic',
      price: '$499/month',
      features: [
        'Google Ads campaign setup',
        'Keyword research & selection',
        'Ad copywriting (up to 10 ads)',
        'Monthly performance reports',
        'Basic landing page optimization',
        'Email support',
        'Budget: Up to $2,000/month'
      ]
    },
    premium: {
      name: 'Premium',
      price: '$999/month',
      featured: true,
      features: [
        'Everything in Basic, plus:',
        'Multi-platform campaigns (Google, Facebook, Instagram)',
        'Advanced keyword research',
        'A/B testing for ads',
        'Conversion tracking setup',
        'Bi-weekly performance reports',
        'Dedicated account manager',
        'Priority support',
        'Budget: Up to $5,000/month'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Everything in Premium, plus:',
        'Comprehensive multi-channel campaigns',
        'Advanced analytics & insights',
        'Custom landing pages',
        'Monthly strategy sessions',
        '24/7 support',
        'Dedicated team of specialists',
        'Unlimited ad variations',
        'Budget: $5,000+/month'
      ]
    }
  };

  const ppcServices = [
    {
      title: 'Google Ads Marketing',
      description: 'Reach customers actively searching for your products or services with targeted Google Ads campaigns.',
      icon: '🎯',
      link: '/ppc-services/google-ads-marketing'
    },
    {
      title: 'Facebook Advertising',
      description: 'Connect with your target audience on the world\'s largest social media platform with engaging Facebook ads.',
      icon: '📘',
      link: '/ppc-services/facebook-advertising'
    },
    {
      title: 'Instagram Advertising',
      description: 'Capture attention with visually stunning Instagram ads that drive engagement and conversions.',
      icon: '📸',
      link: '/ppc-services/instagram-advertising'
    },
    {
      title: 'LinkedIn Marketing',
      description: 'Target professionals and B2B audiences with precision LinkedIn advertising campaigns.',
      icon: '💼',
      link: '/ppc-services/linkedin-marketing'
    },
    {
      title: 'Pinterest Marketing',
      description: 'Inspire and convert shoppers with eye-catching Pinterest ads that drive traffic and sales.',
      icon: '📌',
      link: '/ppc-services/pinterest-marketing'
    },
    {
      title: 'PPC Management Services',
      description: 'Full-service PPC management across all platforms to maximize your advertising ROI.',
      icon: '📊',
      link: '/ppc-services/ppc-management-services'
    },
    {
      title: 'Quora Marketing',
      description: 'Engage with knowledge-seekers and decision-makers through targeted Quora advertising campaigns.',
      icon: '❓',
      link: '/ppc-services/quora-marketing'
    },
    {
      title: 'TikTok Advertising',
      description: 'Capture the attention of Gen Z and millennials with engaging TikTok video ads.',
      icon: '🎵',
      link: '/ppc-services/tiktok-advertising'
    },
    {
      title: 'Twitter Marketing',
      description: 'Join real-time conversations and drive engagement with strategic Twitter advertising.',
      icon: '🐦',
      link: '/ppc-services/twitter-marketing'
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Connect with customers directly through personalized WhatsApp business messaging campaigns.',
      icon: '💬',
      link: '/ppc-services/whatsapp-marketing'
    },
    {
      title: 'YouTube Advertising',
      description: 'Drive results with engaging video ads on the world\'s second-largest search engine.',
      icon: '▶️',
      link: '/ppc-services/youtube-advertising'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We analyze your business, competitors, and target audience to create a data-driven PPC strategy.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Our experts set up optimized campaigns with keyword research, ad creation, and targeting configuration.'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'We launch your campaigns and continuously monitor performance to ensure optimal results.'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Based on data insights, we refine and scale your campaigns for maximum ROI and growth.'
    }
  ];

  const faqs = [
    {
      question: 'What is PPC advertising?',
      answer: 'PPC (Pay-Per-Click) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked. It\'s a way to buy visits to your site rather than earning them organically. Popular PPC platforms include Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads.'
    },
    {
      question: 'How much should I budget for PPC advertising?',
      answer: 'PPC budgets vary based on industry, competition, and goals. We recommend starting with at least $1,000-$2,000 per month for small businesses, but optimal budgets can range from $2,000 to $10,000+ monthly depending on your market and objectives. We\'ll help determine the right budget during our consultation.'
    },
    {
      question: 'How quickly will I see results from PPC?',
      answer: 'Unlike SEO, PPC can deliver immediate results. You can start seeing traffic and conversions within days of launching your campaign. However, optimal performance typically requires 30-90 days of testing, optimization, and refinement to maximize ROI.'
    },
    {
      question: 'What platforms do you manage PPC campaigns on?',
      answer: 'We manage PPC campaigns across all major platforms including Google Ads (Search, Display, Shopping, YouTube), Facebook Ads, Instagram Ads, LinkedIn Ads, Pinterest Ads, Twitter Ads, TikTok Ads, and more. We recommend platforms based on where your target audience is most active.'
    },
    {
      question: 'How do you measure PPC success?',
      answer: 'We track key metrics including click-through rate (CTR), conversion rate, cost per click (CPC), cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI. We provide detailed reports showing how your campaigns perform against your business goals.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No, we offer flexible month-to-month contracts. While we recommend at least 3-6 months for optimal results and proper campaign optimization, you\'re not locked into lengthy commitments. We earn your business every month through results.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Boost Your ROI with Expert PPC Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Drive targeted traffic, increase conversions, and grow your business with data-driven PPC strategies from NSP Global Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free PPC Consultation
              </a>
              <a 
                href="#pricing"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                View Pricing Plans
              </a>
              <Link 
                href={PPC_FOR}
                className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg transition-all hover:bg-blue-50"
              >
                Browse PPC by Industry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Campaigns Managed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Campaign Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar - Services Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">PPC Services</h3>
                <nav className="space-y-2">
                  {ppcServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href={PPC_FOR}
                    className="block p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 border-t pt-3"
                  >
                    <span className="mr-2">📚</span>
                    PPC Services by Industry
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-2">
              
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Professional PPC Management That Drives Results
                </h2>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="PPC Services Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At NSP Global Services, we specialize in creating and managing high-performance PPC campaigns 
                  that deliver measurable results. Our team of certified PPC experts combines data-driven 
                  strategies with creative excellence to maximize your advertising ROI across all major platforms.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Whether you're looking to increase brand awareness, drive qualified traffic, or boost 
                  conversions, our comprehensive PPC services are designed to help you achieve your business 
                  goals efficiently and cost-effectively.
                </p>
                {showMoreIntro && (
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <h3 className="text-xl font-semibold text-gray-900">What Makes Our PPC Different</h3>
                    <p>
                      We build conversion-first campaigns with tight keyword clusters, compelling ad copy, and focused landing pages. Our team implements granular tracking (CPC, CPA, ROAS) and ties outcomes to your CRM or analytics so every dollar is accountable.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">Platforms We Specialize In</h3>
                    <p>
                      Google Search, Display, Shopping, Performance Max, YouTube, plus Meta (Facebook & Instagram), LinkedIn, TikTok, Pinterest, X, and Quora. We pick channels based on audience fit and cost efficiency, not hype.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">Optimization Approach</h3>
                    <p>
                      Weekly experiments, A/B tests on ads and LPs, negative keywords hygiene, audience layering, and budget reallocation from underperformers to winners. You’ll get clear recommendations, not just reports.
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setShowMoreIntro((v) => !v)}
                  className="mt-4 inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  aria-expanded={showMoreIntro}
                >
                  {showMoreIntro ? 'Read Less' : 'Read More'}
                  <svg className={`w-4 h-4 ml-2 transition-transform ${showMoreIntro ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* PPC Services Grid */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our PPC Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ppcServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-blue-500"
                    >
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Our PPC Process</h2>
                <div className="space-y-6">
                  {processSteps.slice(0, showFullProcess ? processSteps.length : 2).map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900 text-xl">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-blue-100">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {!showFullProcess && (
                  <button
                    onClick={() => setShowFullProcess(true)}
                    className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Show Full Process
                  </button>
                )}
              </div>

              {/* Pricing Section */}
              <div id="pricing" className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Choose Your PPC Plan
                </h2>
                
                {/* Pricing Tabs */}
                <div className="flex justify-center mb-8 gap-4">
                  <button
                    onClick={() => setActiveTab('basic')}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      activeTab === 'basic'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => setActiveTab('premium')}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      activeTab === 'premium'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Premium ⭐
                  </button>
                  <button
                    onClick={() => setActiveTab('enterprise')}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      activeTab === 'enterprise'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Enterprise
                  </button>
                </div>

                {/* Pricing Card */}
                <div className={`border-2 rounded-lg p-8 ${
                  pricingPlans[activeTab].featured ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {pricingPlans[activeTab].name}
                    </h3>
                    <div className="text-4xl font-bold text-blue-600">
                      {pricingPlans[activeTab].price}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pricingPlans[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact-form"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                        <GoPlus
                          className={`text-2xl text-blue-600 transition-transform flex-shrink-0 ${
                            openFaq === index ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </main>

            {/* Right Sidebar - Contact Form */}
            <aside id="contact-form" className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-6 text-white sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="mb-6 text-blue-100">
                  Ready to boost your ROI with professional PPC management? Contact us for a free consultation.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your PPC goals..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Request Consultation'}
                  </button>
                  
                  {status === 'success' && (
                    <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                      Message sent successfully! We'll contact you soon.
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="bg-red-500 text-white p-3 rounded-lg text-center">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>

                <div className="mt-6 pt-6 border-t border-blue-500">
                  <p className="text-sm text-blue-100 mb-2">Or call us directly:</p>
                  <p className="text-xl font-bold">+447436220544</p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Advertising?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with NSP Global Services and experience the power of expert PPC management. 
            Let's drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Campaign Today
            </a>
            <Link 
              href="/seo-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all"
            >
              Explore SEO Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
