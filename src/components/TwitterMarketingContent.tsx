'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { GoPlus } from '@/lib/react-icons-go-shim';

export default function TwitterMarketingContent() {
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
    { name: 'Pinterest Marketing', href: '/ppc-services/pinterest-marketing' },
    { name: 'Quora Marketing', href: '/ppc-services/quora-marketing' },
    { name: 'Whatsapp Marketing', href: '/ppc-services/whatsapp-marketing' },
    { name: 'TikTok Ads', href: '/ppc-services/tiktok-advertising' },
    { name: 'Facebook Ads', href: '/ppc-services/facebook-advertising' },
    { name: 'Instagram Ads', href: '/ppc-services/instagram-advertising' }
  ];

  const keyFactors = [
    {
      title: 'Effective Tweets for Marketing',
      description: 'Crafting compelling tweets is the backbone of any successful Twitter marketing strategy. Our team has compiled various tips and tricks to help you create great tweets. This includes using engaging visuals such as images, videos, and GIFs to capture your audience\'s attention. Additionally, leveraging hashtags relevant to your content helps improve tweet visibility and reach. Keeping tweets concise and impactful within the character limit ensures your message resonates with your audience. Lastly, actively engaging with your audience through responses to mentions and messages fosters a sense of community and encourages further interaction.'
    },
    {
      title: 'Twitter Marketing Agency',
      description: 'Choosing our Twitter marketing agency guarantees exceptional service and outstanding results. Our strength lies in developing customized Twitter marketing strategies tailored to your business needs, ensuring you receive the best possible results. Our team comprises certified Twitter Ads experts with the expertise to create and optimize campaigns aligned with your business goals, driving maximum return on investment. We believe in transparency and accountability, so our reporting provides valuable insights into your Twitter performance, including engagement metrics and follower growth.'
    },
    {
      title: 'Strategic Content Creation',
      description: 'Our team of skilled content creators understands the power of compelling content in driving engagement. We specialize in developing informative, entertaining, and share-worthy content. From informative tweets to entertaining posts, we optimize your content to maximize engagement, thereby enhancing the effectiveness of your Twitter marketing strategy.'
    },
    {
      title: 'Engaging Visuals and User-Friendly Design',
      description: 'We recognize the significant impact that visuals can have on Twitter\'s marketing success. Our team of designers excels at creating engaging visuals, such as eye-catching infographics and custom images that capture your audience\'s attention. Moreover, we prioritize user-friendly design, ensuring your audience can easily engage with your brand. We create intuitive, optimized, visually appealing landing pages for a seamless user experience. Our Twitter marketing services are specifically designed to enhance your conversion rates through clear paths to action and compelling call-to-action.'
    }
  ];

  const benefits = [
    {
      title: 'Drive Engagement',
      description: 'With our expert Twitter marketing strategies, we aim to drive engagement by facilitating meaningful conversations and interactions with your audience. You can strengthen customer relationships and build a loyal community around your brand by fostering engagement.'
    },
    {
      title: 'Increase Followers',
      description: 'Our proven tactics attract relevant followers genuinely interested in your industry, products, or services. By employing strategies that resonate with your target audience, we help you expand your follower base, increasing your brand\'s reach and influence.'
    },
    {
      title: 'Boost Visibility with Hashtags',
      description: 'Incorporating a well-planned hashtag strategy into your tweets helps improve their visibility and reach. By leveraging relevant hashtags, we ensure that your tweets reach a wider audience, increasing the chances of attracting new followers and potential customers.'
    },
    {
      title: 'Gain Valuable Insights',
      description: 'Our comprehensive approach includes follower analysis, social listening, and detailed analytics and reporting. We gain valuable insights into audience preferences, trends, and growth opportunities by analyzing your followers and listening to social media conversations. Our reporting provides actionable data, enabling you to refine your Twitter marketing strategy and achieve better results.'
    }
  ];

  const faqs = [
    {
      question: 'What is Twitter Marketing?',
      answer: 'Twitter Marketing is the use of Twitter to promote a business, product, or service. It involves creating a strategic plan and crafting effective tweets to attract and engage an audience. It can be done by hiring a Twitter marketing agency or through executing campaigns independently with the right tools and approaches.'
    },
    {
      question: 'How does Twitter Marketing work?',
      answer: 'Twitter marketing is an effective strategy to reach more people, build relationships and promote your brand. Effective tweets should include engaging content such as videos, images, polls and links that provide added value. Some great examples of successful Twitter marketing campaigns are Pepsi\'s #LiveForNow campaign or Old Spice\'s #SmellLikeaManMan campaign.'
    },
    {
      question: 'What are the benefits of using Twitter for marketing?',
      answer: 'Twitter can be a powerful tool for marketing due to its high engagement rates, ability to reach large audiences, and use of effective tweets. With strategic hashtags and clever content, businesses can foster relationships with customers, while utilizing targeted ads to find more leads. #TwitterMarketing'
    },
    {
      question: 'How do I create a Twitter marketing strategy?',
      answer: 'Creating an effective Twitter marketing strategy involves crafting well-targeted, informative tweets that include a clear call-to-action. Share value-added content and use strategically placed hashtags to reach new audiences. Utilize analytics regularly to ensure your efforts are yielding desired results.'
    },
    {
      question: 'What types of content work best for Twitter marketing?',
      answer: 'Effective tweets for marketing should contain a combination of relevant and intriguing content, visuals, hashtags, and calls-to-action. Stay mindful of brand voice and posting frequency to ensure maximum reach.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Twitter Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Boost Your Brand's Online Presence and Engagement
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
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-600">
                  Services
                </h3>
                <ul className="space-y-2">
                  {ppcServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 font-medium"
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
                    src="https://images.unsplash.com/photo-1611605698335-8b1569810432"
                    alt="Twitter Marketing Services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Are you seeking to boost your brand's online presence and effectively engage with your 
                  target audience? Look no further! Our Twitter Marketing Services are specifically designed 
                  to take your brand's visibility to the next level using tailored and expert strategies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We understand that social media marketing, particularly Twitter marketing, can be daunting, 
                  but our team is here to simplify the process for you. With our comprehensive Twitter 
                  marketing strategies, we'll help you drive engagement, increase followers, and establish a 
                  strong online presence.
                </p>
              </div>

              {/* Key Factors */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
                <div className="space-y-6">
                  {keyFactors.map((factor, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
                    src="https://images.unsplash.com/photo-1551817958-11e0f7bbea4c"
                    alt="Twitter Marketing Strategy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1552581234-26160f608093"
                    alt="Social Media Engagement"
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
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Take advantage of the tremendous marketing potential that Twitter offers. Contact us 
                      today to discuss your Twitter marketing needs and unlock the full power of this dynamic 
                      platform. Let us create a Twitter marketing strategy that leaves a lasting impact on 
                      your audience, driving engagement, increasing followers, and propelling your brand's 
                      online presence to new heights.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outcomes Section */}
              <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Neat Outcome</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-blue-400">
                    <div className="text-5xl font-bold mb-3 text-blue-600">5350%</div>
                    <div className="text-lg font-semibold text-gray-800">Increase in website traffic</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-blue-500">
                    <div className="text-5xl font-bold mb-3 text-blue-600">223%</div>
                    <div className="text-lg font-semibold text-gray-800">Increase in conversion rates</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl border-4 border-cyan-500">
                    <div className="text-5xl font-bold mb-3 text-cyan-600">325%</div>
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
                          className={`text-2xl text-blue-600 transition-transform flex-shrink-0 ${
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
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg shadow-lg p-6 text-white mb-8 sticky top-4">
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
                  Contact us today to amplify your Twitter presence and drive meaningful conversions!
                </p>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a 
                      href="mailto:info@nspglobalservices.com"
                      className="text-blue-600 hover:text-blue-700 text-sm break-all"
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
