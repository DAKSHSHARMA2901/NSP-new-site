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
    statement: 'What is Google Ads?',
    paragraph: 'Google Ads is a powerful online advertising platform that works by placing text and display ads on the Google search engine results page (SERP). Advertisers set up campaigns with personalized keywords, location targeting, budgeting options, ad text and creative choices. Using these tools correctly can create effective google ads for any campaign.'
  },
  {
    id: 1,
    statement: 'How does Google Ads work?',
    paragraph: 'Google Ads is a type of PPC advertising platform that allows you to create ads and bid on keywords in order to drive traffic to your website. It includes features like search ads, display ads, video campaigns, app install campaigns, shopping ads, and remarketing campaigns.'
  },
  {
    id: 2,
    statement: 'What are the benefits of using Google Ads for marketing?',
    paragraph: 'Google Ads (formerly known as AdWords) offers a powerful tool for businesses to reach their target audience at the right time. The platform can be used to create effective campaigns around selected keywords and phrases, allowing companies to optimize ad spend and get maximum visibility in search engine results.'
  },
  {
    id: 3,
    statement: 'How much does it cost to advertise on Google Ads?',
    paragraph: 'Google Ads can be a cost-effective way to promote your business online. You just have to create effective campaigns, set up keyword research and target the audience correctly with search ads, display ads or shopping ads.'
  },
  {
    id: 4,
    statement: 'How do I set up a Google Ads campaign?',
    paragraph: 'Setting up a Google Ads campaign is more than just picking your keywords and budget. To create an effective strategy, you need to research the right keywords, understand auction dynamics, implement targeting options, set up conversion tracking and optimize with data-driven insights.'
  }
]

export default function GoogleAdsMarketingContent() {
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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Google Ads Marketing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Google Ads Marketing Services
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
                  <Link href="/ppc-services/facebook-advertising" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    Facebook Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/ppc-management-services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    PPC Management
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/instagram-advertising" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    Instagram Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/youtube-advertising" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    YouTube Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/twitter-marketing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    Twitter Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/linkedin-marketing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    LinkedIn Paid Ads
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
                  In today's digital era, having a robust online presence is crucial for business success. With Google receiving over 5.6 billion searches per day, it is vital to implement effective Google Ads marketing strategies to ensure high visibility and attract potential customers.
                </p>
                <p>
                  Our Google Ads agency specializes in creating customized campaigns that enhance online visibility and drive business growth. Our team of certified Google Ads experts excels in creating captivating advertisement campaigns, grabbing viewers' attention, and generating website traffic.
                </p>
              </div>
            </section>

            {/* Key Factors Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                      alt="Strategy Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Strategy and Techniques</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our Google Ads marketing service is built on proven advertising strategies and techniques that consistently deliver outstanding results for our clients. We employ various tactics, including headline optimization, comprehensive keyword research, precise audience targeting, persuasive ad copywriting, and advanced analytics tools. By utilizing these strategies, we ensure that your ad campaigns are compelling, targeted, and optimized for maximum performance.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                      alt="Google Ads Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Google Ads</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Understanding the Platform: Google Ads, formerly known as Google AdWords, is a powerful online advertising platform developed by Google. It allows businesses to display ads to users actively searching for products or services related to their business. By leveraging the pay-per-click model, businesses only pay when their ads are clicked, ensuring cost-effectiveness and a higher return on investment. This platform offers versatile ad formats, including search, display, shopping, and video ads, catering to various advertising goals and objectives.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                      alt="Functionality Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Functionality of Google Ads</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Google Ads analyzes users' search terms and displays relevant ads that match their search intent. This targeted approach lets businesses immediately connect with their desired audience, resulting in higher click-through rates, increased conversions, and improved ROI. Whether you aim to capture users actively searching for specific products or target potential customers across websites and apps, Google Ads offers a range of ad types to suit your advertising objectives.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                      alt="Beginners Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Google Ads for Beginners</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    If you're new to Google Ads, our agency provides comprehensive support to help you navigate and succeed on the platform. We guide you through defining clear advertising goals, creating a well-aligned campaign strategy, conducting in-depth keyword research, and continuously monitoring and optimizing your campaigns. Our expertise and guidance ensure that you quickly grasp the essentials of Google Ads and effectively utilize its features to drive results for your business.
                  </p>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
                  alt="Google Ads Dashboard Analytics"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f"
                  alt="Digital Marketing Strategy"
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
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Enhanced Reach and Visibility: </strong>
                    <span className="text-gray-600">
                      By leveraging our Google Ads marketing services, you can significantly improve your reach and visibility among your target audience. We ensure your ads are displayed to the right people at the right time, increasing brand visibility and attracting potential customers. You can optimize your advertising budget and achieve better results with improved click-through rates and conversions.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Increased Return on Investment (ROI): </strong>
                    <span className="text-gray-600">
                      Our expertise in ad creation, targeting techniques, and optimization enables us to deliver a higher return on investment for your Google Ads campaigns. By continuously monitoring and analyzing campaign performance, we make data-driven decisions to maximize your ROI. Our focus on driving results ensures that your advertising budget is effectively utilized and positively impacts your bottom line.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Brand Awareness and Loyalty: </strong>
                    <span className="text-gray-600">
                      Our customized ad campaigns help you build brand awareness and loyalty among your target audience. Compelling ad copy, impactful visuals, and strategic targeting create a strong brand presence. By consistently reaching your audience with engaging ads, you can create a lasting impression and foster loyalty towards your brand.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Expert Guidance and Support: </strong>
                    <span className="text-gray-600">
                      Our dedicated team of certified professionals is committed to your success. We provide comprehensive Google Ads audits to identify areas for improvement in your existing campaigns. Our experts offer bespoke ad creation, advanced targeting techniques, detailed reporting and analysis, and pricing models that prioritize your ROI. With our exceptional customer support, you can rely on us to guide you through every step of your Google Ads journey.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-600">
                      Partnering with our award-winning Google Ads agency brings numerous advantages to your business. Our expertise in strategy and techniques, deep understanding of the Google Ads platform, tailored campaigns for beginners, and the benefits of enhanced reach, increased ROI, brand awareness, and expert guidance ensure your success in the competitive digital landscape.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Outcomes Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Neat Outcome</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-600 mb-3">5350%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in website traffic</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-700 mb-3">223%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in conversion rates</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-800 mb-3">325%</span>
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
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-700 transition-colors font-medium"
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
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Book Your Free Google Ads Audit Today and Start Maximizing Your ROI with Our Expert Team!
                </p>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
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
                        className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
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
