'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import { HiCheckCircle } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

const faqData = [
  {
    id: 0,
    statement: 'What is Facebook Advertising?',
    answer:
      'Facebook Advertising is a form of digital marketing that allows businesses to promote their products or services on the Facebook platform. It enables businesses to reach a vast audience and target specific demographics, interests, and behaviors.',
  },
  {
    id: 1,
    statement: 'How does Facebook Advertising work?',
    answer:
      'Facebook Advertising works by creating ad campaigns and targeting specific audiences based on their demographics, interests, and behaviors. Advertisers can set budgets, define objectives, and choose ad formats such as image ads, video ads, carousel ads, and more.',
  },
  {
    id: 2,
    statement: 'What are the benefits of Facebook Advertising?',
    answer:
      'Facebook Advertising offers several benefits, including reaching a large audience, precise targeting options, cost-effectiveness, measurable results, increased brand visibility, and the ability to engage with potential customers.',
  },
  {
    id: 3,
    statement: 'How can I target my audience on Facebook?',
    answer:
      'Facebook provides various targeting options, including demographic targeting (age, gender, location), interest targeting (hobbies, activities), behavioral targeting (online behavior, purchase history), and custom audience targeting (retargeting website visitors, email lists).',
  },
  {
    id: 4,
    statement: 'What is the cost of Facebook Advertising?',
    answer:
      'The cost of Facebook Advertising varies based on factors such as ad objectives, targeting options, competition, and ad quality. Advertisers can set a daily or lifetime budget and bid on ad placements. Costs can range from a few dollars to thousands, depending on the campaign.',
  },
  {
    id: 5,
    statement: 'How can I measure the success of my Facebook Ads?',
    answer:
      'Facebook provides comprehensive ad metrics and insights through the Ads Manager dashboard. You can track metrics such as reach, impressions, clicks, conversions, engagement, and return on ad spend (ROAS) to measure the success and effectiveness of your Facebook Ads.',
  },
]

export default function FacebookAdvertisingContent() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_xeikd6k',
        'template_184dkpm',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_name: 'NSP Global Services',
        },
        'n--h-ZLHb25m5t0A1'
      )
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600">
        <div className="relative z-10 container mx-auto px-4">
          <Image
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
            alt="Facebook Advertising Services"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            priority
          />
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Facebook Advertising Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Reach Your Target Audience with Precision Facebook Ads
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
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-purple-600">
                  PPC Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/ppc-services/google-ads-marketing"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      Google Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ppc-services/instagram-advertising"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      Instagram Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ppc-services/linkedin-marketing"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      LinkedIn Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ppc-services/pinterest-marketing"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      Pinterest Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ppc-services/tiktok-advertising"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      TikTok Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ppc-services/youtube-advertising"
                      className="block p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-600 font-medium"
                    >
                      YouTube Ads
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Facebook Advertising is a powerful tool for businesses to reach and engage with their target
                  audience. With over 2.8 billion monthly active users, Facebook provides a massive platform to
                  showcase your products or services to potential customers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At NSP Global Services, we specialize in creating highly targeted and effective Facebook
                  advertising campaigns that drive results. Our team of experts will work closely with you to
                  develop a customized strategy that aligns with your business goals and maximizes your return on
                  investment (ROI).
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-2xl text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800 text-lg">Precise Targeting: </strong>
                      <span className="text-gray-700">
                        Reach your ideal customers based on demographics, interests, behaviors, and more.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-2xl text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800 text-lg">Cost-Effective: </strong>
                      <span className="text-gray-700">
                        Set your own budget and only pay for the results you want, whether it's clicks,
                        impressions, or conversions.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-2xl text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800 text-lg">Measurable Results: </strong>
                      <span className="text-gray-700">
                        Track your campaign performance in real-time with detailed analytics and insights.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-2xl text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800 text-lg">Brand Visibility: </strong>
                      <span className="text-gray-700">
                        Increase awareness of your brand and stay top-of-mind with potential customers.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-2xl text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800 text-lg">Engagement: </strong>
                      <span className="text-gray-700">
                        Interact with your audience through comments, messages, and reactions.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Facebook Advertising Analytics"
                    width={424}
                    height={324}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                    alt="Social Media Marketing"
                    width={424}
                    height={324}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Our Approach */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Strategy Development</h3>
                      <p className="text-gray-700">
                        We analyze your business, target audience, and competitors to create a comprehensive Facebook
                        advertising strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ad Creation</h3>
                      <p className="text-gray-700">
                        Our creative team designs compelling ad copy and visuals that capture attention and drive action.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Campaign Launch</h3>
                      <p className="text-gray-700">
                        We set up your campaigns with precise targeting, budgeting, and bidding strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Optimization & Reporting</h3>
                      <p className="text-gray-700">
                        We continuously monitor and optimize your campaigns while providing transparent reporting on performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcomes Section */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-lg shadow-lg p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Proven Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-purple-600">250%</div>
                    <div className="text-lg font-semibold text-gray-700">Average ROAS</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-purple-600">3.5M+</div>
                    <div className="text-lg font-semibold text-gray-700">People Reached</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <div className="text-5xl font-bold mb-3 text-purple-600">180%</div>
                    <div className="text-lg font-semibold text-gray-700">Conversion Increase</div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqData.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 pr-4">{faq.statement}</span>
                        <GoPlus
                          className={`text-2xl text-purple-600 transition-transform flex-shrink-0 ${
                            openFaq === faq.id ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      {openFaq === faq.id && (
                        <div className="p-4 pt-0 text-gray-700 leading-relaxed bg-gray-50">{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </main>

            {/* Right Sidebar - Contact & Need Help */}
            <aside className="lg:col-span-1">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 text-white mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Get A Quote</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
                <p className="text-gray-600 mb-4">Our team is here to answer your questions about Facebook advertising.</p>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg mb-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <MdEmail className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email Us</p>
                    <a href="mailto:info@nspglobalservices.com" className="text-purple-600 hover:text-purple-700 text-sm break-all">
                      info@nspglobalservices.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <MdPhone className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700 text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
