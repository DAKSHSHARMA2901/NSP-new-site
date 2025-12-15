'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { GoPlus } from '@/lib/react-icons-go-shim';

export default function QuoraMarketingContent() {
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
    { name: 'PPC Management', href: '/ppc-services/ppc-management-services' },
    { name: 'Facebook Ads', href: '/ppc-services/facebook-advertising' },
    { name: 'Google Ads', href: '/ppc-services/google-ads-marketing' },
    { name: 'Instagram Ads', href: '/ppc-services/instagram-advertising' },
    { name: 'YouTube Ads', href: '/ppc-services/youtube-advertising' },
    { name: 'TikTok Ads', href: '/ppc-services/tiktok-advertising' }
  ];

  const keyFactors = [
    {
      title: 'Targeting',
      description: 'Quora has a highly engaged user base of over 300 million monthly active users, and we use advanced targeting methods to ensure your ads are seen by the right audience.'
    },
    {
      title: 'Expertise',
      description: 'Our team of certified Quora advertising experts have a proven track record of delivering successful campaigns for clients across a wide range of industries.'
    },
    {
      title: 'Transparency',
      description: 'We believe in transparency and provide our clients with detailed reports on the performance of their campaigns, so you always know how your advertising dollars are being spent.'
    },
    {
      title: 'Results-Driven',
      description: 'We are focused on delivering results for our clients, and we use data-driven insights to optimize campaigns and maximize ROI.'
    }
  ];

  const benefits = [
    {
      title: 'Expertise',
      description: 'Our team of certified Quora advertising experts have extensive experience in creating and managing campaigns for a variety of industries. We stay up-to-date on the latest trends and best practices to ensure your campaigns are always optimized for success.'
    },
    {
      title: 'Customization',
      description: 'We understand that every business is unique, and we tailor our Quora advertising services to meet your specific needs. Whether you\'re looking to increase brand awareness or drive conversions, we have the expertise to create a campaign that will help you achieve your goals.'
    },
    {
      title: 'Data-Driven',
      description: 'We use advanced analytics and data-driven insights to optimize your campaigns for maximum ROI. By continuously monitoring and adjusting your campaigns, we are able to deliver results that exceed your expectations.'
    },
    {
      title: 'Transparency',
      description: 'We believe in transparency and provide our clients with detailed reports on the performance of their campaigns. You will always know how your advertising dollars are being spent and the results they are generating.'
    }
  ];

  const faqs = [
    {
      question: 'What is Quora Marketing?',
      answer: 'Quora marketing is a type of digital marketing that leverages the power of the popular question-and-answer platform to reach potential customers. Through targeted campaigns, businesses can use Quora ads to increase brand awareness and drive conversions. NSP Global Services provides comprehensive Quora marketing services, including strategy development, ad creation, campaign management, and more.'
    },
    {
      question: 'How can Quora Marketing help my business?',
      answer: 'Quora marketing can help your business by increasing brand visibility, driving quality traffic to your website, and engaging with a highly active community of users. With over 300 million monthly visitors, Quora provides excellent opportunities to reach your target audience through both organic content and paid advertising.'
    },
    {
      question: 'What types of Quora ads are available?',
      answer: 'Quora offers several ad formats including text ads, image ads, and promoted answers. Each format serves different purposes and can be optimized for specific campaign goals such as brand awareness, traffic generation, or lead conversion. Our team will help you choose the most effective ad types for your business objectives.'
    },
    {
      question: 'How much does Quora advertising cost?',
      answer: 'Quora advertising costs vary based on your campaign objectives, targeting parameters, and competition. The platform operates on a bidding system with options for CPM (cost per thousand impressions) or CPC (cost per click) pricing. We work with clients of all budgets to create cost-effective campaigns that deliver strong ROI.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-orange-600 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quora Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Engage Knowledge-Seekers and Decision-Makers with Targeted Quora Ads
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
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-red-600">
                  Services
                </h3>
                <ul className="space-y-2">
                  {ppcServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-red-50 transition-colors text-gray-700 hover:text-red-600 font-medium"
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
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293"
                    alt="Quora Marketing Services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Quora is one of the fastest-growing Q&A platforms on the internet, with over 300 million monthly 
                  active users. It's a unique space where people come to ask questions, share knowledge, and 
                  engage with content that matters to them.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At NSP Global Services, we understand the power of Quora marketing and can help your business 
                  tap into this highly engaged audience. Our Quora advertising services are designed to help you 
                  reach your target audience, increase brand awareness, and drive conversions.
                </p>
              </div>

              {/* Key Factors */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
                <div className="space-y-6">
                  {keyFactors.map((factor, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Quora Advertising Strategy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                    alt="Digital Marketing Analytics"
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
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 rounded-lg shadow-lg p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Neat Outcome</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-red-600">5350%</div>
                    <div className="text-lg font-semibold text-gray-700">Increase in website traffic</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-red-600">223%</div>
                    <div className="text-lg font-semibold text-gray-700">Increase in conversion rates</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-orange-600">325%</div>
                    <div className="text-lg font-semibold text-gray-700">Increase in leads generation</div>
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
                          className={`text-2xl text-red-600 transition-transform flex-shrink-0 ${
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
              <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg shadow-lg p-6 text-white mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Get A Quote</h3>
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
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
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
                    {status === 'sending' ? 'Sending...' : 'Send'}
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
                  Ready to tap into Quora's engaged audience? Get in touch with us now.
                </p>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a 
                      href="mailto:info@nspglobalservices.com"
                      className="text-red-600 hover:text-red-700 text-sm break-all"
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
