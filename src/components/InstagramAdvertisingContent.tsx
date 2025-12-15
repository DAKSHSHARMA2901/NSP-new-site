'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link'
import Image from 'next/image'

const faqData = [
  {
    id: 0,
    statement: 'What is Instagram Advertising?',
    paragraph: 'Instagram Advertising is a method of paying for ads directly on the platform, which can reach a broader demographic. To get started, one must create an ad account with an Ads Manager and create an ad campaign by selecting goals, targeting audiences, writing content and setting up budgets.'
  },
  {
    id: 1,
    statement: 'How does Instagram Advertising work?',
    paragraph: 'Instagram Ads are managed through their Ads Manager platform, which allows you to create and manage campaigns for free. You can use their Ad Cost Calculator to get an estimate on how much your monthly budget should be, and track the performance of your ads.'
  },
  {
    id: 2,
    statement: 'What are the benefits of using Instagram Advertising for marketing?',
    paragraph: 'Instagram Advertising offers tremendous benefits to business owners. With the help of an Instagram Ads Manager and a cost calculator, you can easily strategize how to advertise on Instagram - either for free or with a set budget per month.'
  },
  {
    id: 3,
    statement: 'How do I create an Instagram ad campaign?',
    paragraph: 'Creating an Instagram ad campaign is easy with the Ads Manager. Use it to target specific audiences, control budgets and monitor results. Learn the basics for free on Insta - all you need to get started is a plan!'
  },
  {
    id: 4,
    statement: 'What targeting options are available for Instagram ads?',
    paragraph: 'With the Instagram Ads Manager, users can target their ads to reach users based on age, gender, location, interests and more. Free advertising on Instagram can also be achieved with organic content creation and promotions.'
  }
]

export default function InstagramAdvertisingContent() {
  const form = useRef<HTMLFormElement>(null)
  const [selection, setSelection] = useState<number | null>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!form.current) return

    emailjs
      .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
        publicKey: 'n--h-ZLHb25m5t0A1',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setSubmitStatus('success')
          form.current?.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
          setSubmitStatus('error')
        },
      )
  }

  const toggle = (i: number) => {
    if (selection === i) {
      return setSelection(null)
    }
    setSelection(i)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
          alt="Instagram Advertising Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-600/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Instagram Advertising Services
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Services Navigation */}
          <aside className="lg:col-span-1 order-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/ppc-services/facebook-advertising" className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1">
                    Facebook Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/instagram-advertising" className="text-sm text-purple-600 font-semibold block py-1">
                    Instagram Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/linkedin-marketing" className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1">
                    LinkedIn Paid Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/quora-marketing" className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1">
                    Quora Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/whatsapp-marketing" className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1">
                    Whatsapp Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/tiktok-advertising" className="text-sm text-gray-600 hover:text-purple-600 transition-colors block py-1">
                    TikTok Ads
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-2 order-2">
            {/* Overview Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to our leading Instagram Advertising Agency, where we specialize in helping businesses grow their brand and boost sales through effective Instagram advertising campaigns. With our experienced team of marketers and advertising specialists, we offer comprehensive services to enhance your Instagram presence and drive targeted traffic and conversions.
                </p>
              </div>
            </section>

            {/* Key Factors Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                      alt="Expert Team Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Expert Team</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our team consists of experienced marketers and advertising specialists who understand the intricacies of the Instagram platform. We have the knowledge and expertise to optimize your campaigns and achieve your goals effectively.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                      alt="Targeted Campaigns Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Targeted Campaigns</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We develop tailored Instagram advertising campaigns targeting your desired audience. By understanding your audience's interests and behavior, we create compelling content and ads that resonate with them, maximizing campaign effectiveness.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                      alt="Traffic Generation Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Website Traffic Generation</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our Instagram Advertising services focus on driving quality traffic to your website. Through strategic Instagram Shopping Ads and custom campaigns, we help increase your website visits and improve your return on investment (ROI).
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                      alt="Cost-Effectiveness Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Cost-Effectiveness</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We work within your budget to deliver impactful Instagram advertising campaigns. Our team leverages industry insights and data to provide cost-effective solutions that deliver results while optimizing your advertising spend.
                  </p>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                  alt="Instagram Marketing Analytics"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"
                  alt="Instagram Social Media Strategy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </section>

            {/* Key Benefits Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Expanded Reach: </strong>
                    <span className="text-gray-600">
                      With over a billion monthly active users on Instagram, our advertising services enable you to reach a large audience and expand your brand's visibility. We help you tap into this vast user base and connect with potential customers.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Increased Website Traffic: </strong>
                    <span className="text-gray-600">
                      We drive more traffic to your website by implementing effective Instagram advertising strategies. We help you attract users interested in your products or services by engaging ads and optimizing campaigns.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Measurable Results: </strong>
                    <span className="text-gray-600">
                      We believe in transparency and accountability. Our team tracks and analyzes the performance of your Instagram campaigns using tools like Google Analytics, providing you with actionable insights and measurable results. This data-driven approach allows us to refine and optimize your campaigns over time.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Strategic Process: </strong>
                    <span className="text-gray-600">
                      Our three-step process ensures the success of your Instagram advertising campaigns. We conduct thorough research and analysis to develop a customized strategy. We then create compelling campaigns aligned with your goals and regularly analyze and optimize their performance to maximize results.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-600">
                      Our Instagram Advertising Agency offers comprehensive services to help your business thrive on the platform. By leveraging our expertise, you can reach your target audience effectively, drive website traffic, achieve measurable results, and take your Instagram advertising to new heights.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Outcomes Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Neat Outcome</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-purple-600 mb-3">5350%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in website traffic</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-purple-600 mb-3">223%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in conversion rates</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-pink-600 mb-3">325%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in leads generation</span>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sidebar - Contact Form & Help */}
          <aside className="lg:col-span-1 order-3">
            <div className="space-y-6 sticky top-4">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-3">Get A Quote</h4>
                <form ref={form} onSubmit={sendEmail} className="space-y-3">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 px-4 text-sm rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-xs text-center">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-xs text-center">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>

              {/* Need Help Box */}
              <div className="bg-purple-50 rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Want to drive growth through Instagram advertising? Let us help you achieve that.
                </p>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <MdEmail className="text-white text-lg" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-800 mb-1">Email Us</span>
                    <p className="text-xs text-gray-600 break-all">info@nspglobalservices.com</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2"
                alt="FAQ Illustration"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((item, i) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-start justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 text-left pr-4">
                        {item.statement}
                      </h3>
                      <GoPlus
                        className={`flex-shrink-0 text-purple-600 transition-transform duration-300 ${
                          selection === i ? 'rotate-45' : ''
                        }`}
                        size={24}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        selection === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
