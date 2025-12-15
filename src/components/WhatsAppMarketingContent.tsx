'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { GoPlus } from '@/lib/react-icons-go-shim';

export default function WhatsAppMarketingContent() {
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
    { name: 'TikTok Ads', href: '/ppc-services/tiktok-advertising' },
    { name: 'Twitter Ads', href: '/ppc-services/twitter-marketing' },
    { name: 'LinkedIn Paid Ads', href: '/ppc-services/linkedin-marketing' },
    { name: 'Google Ads', href: '/ppc-services/google-ads-marketing' },
    { name: 'Facebook Ads', href: '/ppc-services/facebook-advertising' },
    { name: 'Instagram Ads', href: '/ppc-services/instagram-advertising' }
  ];

  const keyFactors = [
    {
      title: 'Effective Message Design',
      description: 'Our WhatsApp marketing agency specializes in crafting highly effective messages to captivate your audience. We create compelling content that grabs their attention and encourages engagement. By tailoring the messages to resonate with your target customers, we ensure that your offerings are presented in the most persuasive way possible.'
    },
    {
      title: 'Extensive Research',
      description: 'Before launching any campaign, we conduct thorough research to identify potential leads for your services. By analyzing industry-specific data and insights, we can precisely target the right audience for your business. This personalized approach helps establish a strong connection with your recipients and increases the likelihood of conversions.'
    },
    {
      title: 'Reach a Larger Consumer Base',
      description: 'With WhatsApp\'s massive user base of over 2 billion active users, we can help you reach a larger audience faster than traditional marketing methods. By leveraging the platform\'s popularity, we expand your business\'s visibility and attract potential WhatsApp customers.'
    },
    {
      title: 'Rich-Media Presentations',
      description: 'We enhance your WhatsApp campaigns with visually appealing and interactive content. Our team utilizes rich-media elements such as images, videos, and catalogs to showcase your products or services confidently. By creating an immersive and memorable experience for your audience, we ensure that your brand stands out and leaves a lasting impression.'
    }
  ];

  const benefits = [
    {
      title: 'Empower Business Growth',
      description: 'Our WhatsApp marketing services are designed to drive sales and revenue growth for your business. By leveraging the power of WhatsApp, we help you expand your customer base, increase brand awareness, and strengthen your market presence. This empowers your business to grow and outperform competitors in your industry.'
    },
    {
      title: 'Reach a Larger Audience in Less Time',
      description: 'Our targeted messaging and efficient techniques help you connect with a broader audience in less time. Our bulk messaging capabilities allow you to simultaneously send multiple messages to a large contact list, saving valuable time and effort. This ensures that your message reaches as many potential customers as possible, maximizing your reach and impact.'
    },
    {
      title: 'Cost-Effective Marketing Solution',
      description: 'Our WhatsApp marketing services offer a cost-effective solution with a high return on investment. Compared to traditional marketing channels, WhatsApp marketing delivers better results at a fraction of the cost.'
    },
    {
      title: 'Positive Impact on Audience Engagement',
      description: 'We enhance audience engagement with your brand by delivering compelling and relevant content. Our rich-media presentations captivate your audience, encouraging interaction and fostering trust. This leads to stronger customer relationships, increased loyalty, and improved long-term engagement with your brand.'
    }
  ];

  const faqs = [
    {
      question: 'What is WhatsApp Marketing?',
      answer: 'WhatsApp Marketing is the process of using bulk messaging services and specialized tools to send massive amounts of relevant messages to target audiences on the popular messaging platform. A WhatsApp marketing agency or a bulk WhatsApp service provider will use various software and tools such as WA Bulk Message Sender, WhatsApp Multiple Message Senders, and create personalized marketing messages for maximum engagement.'
    },
    {
      question: 'How does WhatsApp Marketing work?',
      answer: 'WhatsApp Marketing is a powerful tool that can help businesses reach their goals. It involves the use of bulk Whatsapp messages sent to targeted customers through an agency or service provider. This makes it easier to send multiple messages, increase visibility, and improve engagement with potential customers.'
    },
    {
      question: 'What are the benefits of using WhatsApp for marketing?',
      answer: 'WhatsApp provides a powerful marketing platform that offers numerous benefits, such as sending bulk messages to large audiences quickly and affordably with its multiple message sender feature, targeting specific groups or individuals for custom messaging campaigns, expanding visibility of your brand or service, and utilizing various automation tools.'
    },
    {
      question: 'Is WhatsApp Marketing suitable for all types of businesses?',
      answer: 'Yes, WhatsApp Marketing is suitable for all types of businesses. With bulk messaging services, agencies to manage the messages, multiple message sending capabilities and more - it is a great tool for reaching out to customers quickly and efficiently.'
    },
    {
      question: 'How can I build a WhatsApp marketing strategy?',
      answer: 'A successful WhatsApp marketing strategy requires finding a reliable service provider who can deliver bulk messages to your target audience, create engaging messages, and track results. Ensure you work with an experienced WhatsApp marketing agency to get the most out of your campaigns.'
    },
    {
      question: 'Can I send promotional messages to customers on WhatsApp?',
      answer: 'Yes, you can send promotional messages to customers via WhatsApp with the help of bulk WhatsApp marketing services. Such services allow businesses to send personalized and automated messages over a secure platform for maximum customer engagement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 via-green-600 to-teal-600 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WhatsApp Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Boost Your Business with Direct Messaging Marketing
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
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-green-600">
                  Services
                </h3>
                <ul className="space-y-2">
                  {ppcServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-green-50 transition-colors text-gray-700 hover:text-green-600 font-medium"
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
                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da"
                    alt="WhatsApp Marketing Services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  WhatsApp has emerged as a powerful marketing tool with a vast user base of over 2 billion 
                  worldwide. WhatsApp marketing has become a crucial strategy for businesses to capture their 
                  target audience's attention and drive growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our WhatsApp marketing agency specializes in providing effective and engaging services that 
                  help businesses expand their reach and connect with potential customers. From bulk messaging 
                  to engaging content creation, we offer comprehensive solutions to leverage the potential of 
                  WhatsApp for marketing purposes.
                </p>
              </div>

              {/* Key Factors */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
                <div className="space-y-6">
                  {keyFactors.map((factor, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
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
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                    alt="WhatsApp Business Marketing"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                    alt="Mobile Marketing Strategy"
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
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 2.277-.632 4.403-1.732 6.217" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      As a reputable WhatsApp marketing agency, we prioritize transparency, reliability, and 
                      customer satisfaction. Our track record of delivering innovative and results-driven 
                      strategies speaks for itself. Experience the benefits firsthand by partnering with us and 
                      unlocking the power of WhatsApp marketing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      Contact us today to harness the potential of WhatsApp marketing and elevate your business 
                      to new heights.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcomes Section */}
              <div className="bg-gradient-to-r from-green-600 via-green-700 to-teal-600 rounded-lg shadow-lg p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Neat Outcome</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-green-600">5350%</div>
                    <div className="text-lg font-semibold text-gray-700">Increase in website traffic</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-green-700">223%</div>
                    <div className="text-lg font-semibold text-gray-700">Increase in conversion rates</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-teal-600">325%</div>
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
                          className={`text-2xl text-green-600 transition-transform flex-shrink-0 ${
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
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg shadow-lg p-6 text-white mb-8 sticky top-4">
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
                  Try our WhatsApp bulk marketing service today!
                </p>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a 
                      href="mailto:info@nspglobalservices.com"
                      className="text-green-600 hover:text-green-700 text-sm break-all"
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
