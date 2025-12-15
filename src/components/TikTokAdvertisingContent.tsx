'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { GoPlus } from '@/lib/react-icons-go-shim';

export default function TikTokAdvertisingContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          message: formData.message,
          to_name: 'NSP Global Services',
        },
        'n--h-ZLHb25m5t0A1'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
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

  const ppcServices = [
    { name: 'Google Ads', href: '/ppc-services/google-ads-marketing' },
    { name: 'PPC Management', href: '/ppc-services/ppc-management-services' },
    { name: 'Facebook Ads', href: '/ppc-services/facebook-advertising' },
    { name: 'Instagram Ads', href: '/ppc-services/instagram-advertising' },
    { name: 'YouTube Ads', href: '/ppc-services/youtube-advertising' },
    { name: 'Twitter Ads', href: '/ppc-services/twitter-marketing' }
  ];

  const keyFactors = [
    {
      title: 'Strategic Campaign Planning',
      description: 'Our team develops customized TikTok advertising strategies tailored to your business goals, target audience, and budget to maximize campaign effectiveness.'
    },
    {
      title: 'Creative Ad Creation',
      description: 'We create engaging, trend-driven video content that resonates with TikTok\'s unique audience and captures attention in the fast-paced feed.'
    },
    {
      title: 'Precise Targeting Capabilities',
      description: 'Leverage TikTok\'s advanced targeting options including demographics, interests, behaviors, and custom audiences to reach your ideal customers.'
    },
    {
      title: 'Performance Tracking and Optimization',
      description: 'Continuous monitoring and data-driven optimization ensure your campaigns deliver maximum ROI and achieve your marketing objectives.'
    }
  ];

  const benefits = [
    {
      title: 'Increased Brand Awareness',
      description: 'Tap into TikTok\'s massive user base of over 1 billion active users to significantly expand your brand\'s reach and visibility among younger demographics.'
    },
    {
      title: 'Enhanced User Engagement',
      description: 'TikTok\'s highly engaging format drives exceptional interaction rates, with users spending an average of 52 minutes per day on the platform.'
    },
    {
      title: 'Cost-Effective Advertising',
      description: 'Achieve better ROI with TikTok\'s competitive advertising costs and high engagement rates compared to traditional social media platforms.'
    },
    {
      title: 'Viral Potential',
      description: 'TikTok\'s algorithm favors engaging content, giving your brand the potential to go viral and reach millions of users organically.'
    }
  ];

  const faqs = [
    {
      question: 'What is TikTok Advertising?',
      answer: 'TikTok Advertising is a form of social media marketing that leverages the popular short-form video platform to reach and engage with a massive, predominantly younger audience. With various ad formats including In-Feed Ads, TopView, Branded Hashtag Challenges, and Branded Effects, businesses can create immersive, engaging campaigns that drive brand awareness, traffic, and conversions.'
    },
    {
      question: 'How does TikTok Advertising work?',
      answer: 'TikTok Advertising works through the TikTok Ads Manager platform, where businesses can create campaigns, set targeting parameters, choose ad formats, and manage budgets. Ads are displayed to users based on their interests, behaviors, and demographics. The platform uses machine learning to optimize ad delivery and maximize campaign performance.'
    },
    {
      question: 'What types of TikTok ads are available?',
      answer: 'TikTok offers several ad formats: In-Feed Ads (appear in users\' "For You" feed), TopView Ads (full-screen ads when opening the app), Branded Hashtag Challenges (encourage user-generated content), Branded Effects (custom filters and stickers), and Collection Ads (showcase multiple products). Each format serves different marketing objectives and audience engagement goals.'
    },
    {
      question: 'How much does TikTok advertising cost?',
      answer: 'TikTok advertising costs vary based on campaign objectives, ad formats, and competition. The minimum campaign budget is typically $500, with a minimum daily budget of $50. TikTok uses a bidding system with options for Cost Per Mille (CPM), Cost Per Click (CPC), or Cost Per View (CPV). Our team helps optimize your budget for maximum ROI regardless of your investment level.'
    },
    {
      question: 'Who should use TikTok advertising?',
      answer: 'TikTok advertising is ideal for businesses targeting Gen Z and Millennial audiences (ages 16-34), which make up the majority of TikTok users. It\'s particularly effective for e-commerce, fashion, beauty, entertainment, food, and lifestyle brands. However, any business looking to reach a highly engaged audience with creative video content can benefit from TikTok advertising.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-pink-600 py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TikTok Advertising Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Capture Gen Z and Millennials with Viral Video Advertising
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar - Services Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-pink-600">
                  Services
                </h3>
                <ul className="space-y-2">
                  {ppcServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-pink-50 transition-colors text-gray-700 hover:text-pink-600 font-medium"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-2">
              
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                    alt="TikTok Advertising Services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  TikTok has revolutionized social media with its short-form video format, attracting over 1 billion 
                  monthly active users worldwide. As one of the fastest-growing social platforms, TikTok offers 
                  unprecedented opportunities for brands to connect with younger audiences in creative and authentic ways.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At NSP Global Services, we specialize in creating high-impact TikTok advertising campaigns that 
                  leverage the platform's unique features and viral potential. Our team of experts understands TikTok's 
                  culture, trends, and best practices to help your brand stand out and achieve remarkable results.
                </p>
              </div>

              {/* Key Factors */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
                <div className="space-y-6">
                  {keyFactors.map((factor, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-pink-50 to-gray-50 rounded-lg border border-pink-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{factor.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                    alt="TikTok Video Production"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                    alt="Social Media Strategy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="text-gray-800 text-lg">{benefit.title}: </strong>
                        <span className="text-gray-700">{benefit.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes Section */}
              <div className="bg-gradient-to-r from-black via-gray-900 to-pink-600 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-pink-400">Proven Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-white">5350%</div>
                    <div className="text-lg font-semibold text-white">Increase in engagement</div>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-white">223%</div>
                    <div className="text-lg font-semibold text-white">Increase in conversions</div>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-white">325%</div>
                    <div className="text-lg font-semibold text-white">Growth in brand awareness</div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                        <GoPlus
                          className={`text-2xl text-pink-600 transition-transform flex-shrink-0 ${
                            openFaq === index ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="p-4 pt-0 text-gray-700 leading-relaxed bg-gray-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </main>

            {/* Right Sidebar - Contact & Need Help */}
            <aside className="lg:col-span-1">
              
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-600 rounded-lg shadow-xl p-6 text-white mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4 text-white">Get A Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {status === 'success' && (
                    <div className="bg-green-500 text-white p-3 rounded-lg text-center text-sm">
                      Message sent successfully!
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="bg-red-500 text-white p-3 rounded-lg text-center text-sm">
                      Failed to send. Please try again.
                    </div>
                  )}
                </form>
              </div>

              {/* Need Help */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Ready to go viral on TikTok? Get in touch with our team today.
                </p>
                <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a 
                      href="mailto:info@nspglobalservices.com"
                      className="text-pink-600 hover:text-pink-700 text-sm break-all"
                    >
                      info@nspglobalservices.com
                    </a>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
