'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { GoPlus } from '@/lib/react-icons-go-shim';

export default function YouTubeAdvertisingContent() {
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
    { name: 'Pinterest Marketing', href: '/ppc-services/pinterest-marketing' },
    { name: 'Quora Marketing', href: '/ppc-services/quora-marketing' },
    { name: 'WhatsApp Marketing', href: '/ppc-services/whatsapp-marketing' },
    { name: 'TikTok Ads', href: '/ppc-services/tiktok-advertising' }
  ];

  const keyFactors = [
    {
      title: 'Expertise and Experience',
      description: 'Our team of professional marketing specialists brings extensive knowledge and experience in digital marketing and video production, ensuring the creation of effective YouTube advertising campaigns.'
    },
    {
      title: 'Customization and Flexibility',
      description: 'Each business has unique requirements. That\'s why we offer customized YouTube advertising solutions that cater to your specific goals and budget.'
    },
    {
      title: 'Comprehensive Approach',
      description: 'Our tried and tested approach to YouTube advertising covers all aspects, including discovery and research, strategy and planning, content production, audience targeting, creative optimization, and scaling. This comprehensive approach ensures steady and consistent brand growth.'
    },
    {
      title: 'Engaging Visuals',
      description: 'We emphasize the importance of captivating visuals in YouTube advertising. With our in-house creative team, we provide end-to-end video production services that deliver visually stunning and audience-centric video ads.'
    }
  ];

  const benefits = [
    {
      title: 'Measurable Results',
      description: 'Our custom-made YouTube advertising campaigns are designed to deliver measurable results. We focus on achieving your objectives, whether increasing brand awareness, driving website traffic, or generating leads, and provide transparent reporting and insights to track your campaign\'s success.'
    },
    {
      title: 'Affordable and Agile',
      description: 'We offer an affordable and agile business model suitable for businesses of all sizes. With a small core team of marketing specialists and access to top freelance marketers and videographers, we provide cost-effective solutions without compromising quality.'
    },
    {
      title: 'Optimization and Growth',
      description: 'Our expertise in YouTube advertising allows us to optimize your campaigns for maximum impact. Continuously monitoring and refining your strategy ensures steady and consistent brand growth over time.'
    },
    {
      title: 'Trusted and Certified',
      description: 'We have a proven track record of successful campaigns as a trusted YouTube advertising agency. We have received industry recognition, media features, and certifications as Google partners, solidifying our expertise in YouTube advertising.'
    }
  ];

  const faqs = [
    {
      question: 'What is YouTube Advertising?',
      answer: 'YouTube Advertising is a form of digital marketing that can help businesses increase their reach and visibility. It involves leveraging the power of YouTube\'s vast network to create impactful ad campaigns that target audiences across different demographics. A good Youtube agency or growth agency can provide full services including strategic planning, creative production, media buying, analytics measurement & optimization and more to maximize your ROI.'
    },
    {
      question: 'How does YouTube Advertising work?',
      answer: 'YouTube Advertising works with the help of a Youtube Agency, Growth Agency or Marketing Services that create an effective digital marketing strategy to promote your product and reach new audiences. By utilizing TV ad making companies, you can give powerful advertisements on YouTube and maximize your ROI.'
    },
    {
      question: 'What are the benefits of using YouTube Advertising for marketing?',
      answer: 'YouTube Advertising offers great marketing potential with the ability to target specific audiences and access in-depth analytics. Working with a Youtube Marketing Agency or Youtube Growth Agency can help you take full advantage of YouTube\'s extensive advertising services, marketing capabilities, and digital media expertise for maximum success.'
    },
    {
      question: 'How do I create a YouTube ad campaign?',
      answer: 'Creating a successful YouTube ad campaign requires strategy and expertise. Consider working with a specialized Youtube marketing agency or digital marketing specialists to develop an effective plan tailored to your goals, leveraging their knowledge of the platform, SEO, content creation and TV ad making companies.'
    },
    {
      question: 'What types of YouTube ads are available?',
      answer: 'YouTube ads come in many different forms, including skippable and non-skippable video ads, display ads, overlay ads, bumper ads, sponsored cards and more. With the help of a YouTube marketing agency or growth agency like ours you can get the full range of services for your YouTube marketing needs.'
    },
    {
      question: 'Can I target specific audiences with my YouTube ads?',
      answer: 'Yes, you can target specific audiences with your YouTube ads by hiring a Youtube marketing agency that offers services such as digital marketing and TV ad making. They can help you maximize the reach of your campaigns by using detailed audience targeting which resonates with your target customer base.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-gray-900 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              YouTube Advertising Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Drive Results with Our Expert Video Marketing Team
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
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                    alt="YouTube Advertising Services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  YouTube is the world's second-largest search engine, with over 2 billion monthly active 
                  users. As a result, it's an incredibly powerful platform for businesses looking to promote 
                  their products or services to a wide and engaged audience. However, standing out from the 
                  competition can be challenging.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That's where NSP, a YouTube advertising agency, comes in. With over a decade of experience 
                  in digital marketing and video production, we specialize in creating custom YouTube 
                  advertising campaigns that deliver a high return on investment for businesses. From video 
                  production to media buying and campaign optimization, we offer comprehensive online video 
                  advertising solutions tailored to your needs.
                </p>
              </div>

              {/* Key Factors */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
                <div className="space-y-6">
                  {keyFactors.map((factor, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-red-50 to-gray-50 rounded-lg border border-red-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
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
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
                    alt="YouTube Video Production"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551818255-e6e10975bc17"
                    alt="Video Marketing Strategy"
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
                  <li className="flex items-start gap-3 pt-4 border-t border-gray-200">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      NSP is the YouTube advertising agency you can rely on to help your business achieve its 
                      goals through effective and measurable YouTube advertising campaigns. With our skilled 
                      team of marketing specialists, comprehensive approach, engaging visuals, and track record 
                      of success, we are here to unleash the power of YouTube advertising for your business. 
                      Contact us today to get started.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcomes Section */}
              <div className="bg-gradient-to-r from-red-600 via-red-700 to-gray-900 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Neat Outcome</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-red-400">
                    <div className="text-5xl font-bold mb-3 text-red-600">5350%</div>
                    <div className="text-lg font-semibold text-gray-800">Increase in website traffic</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-red-500">
                    <div className="text-5xl font-bold mb-3 text-red-700">223%</div>
                    <div className="text-lg font-semibold text-gray-800">Increase in conversion rates</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-gray-700">
                    <div className="text-5xl font-bold mb-3 text-gray-800">325%</div>
                    <div className="text-lg font-semibold text-gray-800">Increase in leads generation</div>
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
              <div className="bg-gradient-to-br from-red-600 to-gray-900 rounded-lg shadow-lg p-6 text-white mb-8 sticky top-4">
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
                  Ready to unleash the power of YouTube advertising? Get in touch with us now.
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
