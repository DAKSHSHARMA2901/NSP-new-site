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
    statement: 'What is Pinterest Marketing?',
    paragraph: 'Pinterest Marketing involves various services to help businesses grow their online presence. This includes pinterest management, pinterest marketing manager, pinterest advertising, and pin design services. You may also be charged for these services depending on your needs and budget.'
  },
  {
    id: 1,
    statement: 'How does Pinterest Marketing work?',
    paragraph: 'Pinterest marketing is the process of creating visuals, content and ad campaigns to promote a brand\'s products or services. It includes using Pinterest Advertising Services to increase visibility on the platform, hiring a Pinterest Marketing Manager to strategize campaigns, utilizing Pinterest Pin Design Services for creative visuals, as well as determining how much to charge for a comprehensive Pinterest Management Service.'
  },
  {
    id: 2,
    statement: 'What are the benefits of using Pinterest for marketing?',
    paragraph: 'Pinterest can be an invaluable marketing tool with the right management services. With expert pin design services and strategic account management, you can reach a vast audience and drive valuable ROI. To get started, consider hiring a pinterest marketing team to determine how much to charge for their services.'
  },
  {
    id: 3,
    statement: 'How do I create a Pinterest marketing strategy?',
    paragraph: 'To create an effective Pinterest marketing strategy, invest in professional Pinterest management services. Consider what to charge for the service, develop an eye-catching pin design, and engage with your audience.'
  },
  {
    id: 4,
    statement: 'What types of content work best for Pinterest marketing?',
    paragraph: 'Content that works best for Pinterest marketing is visual, engaging, and targeted. To charge for Pinterest management services, consider the amount of time each task will take to complete and research what other professionals in your industry charge. Additionally, offering a professional pin design service can increase revenue.'
  },
  {
    id: 5,
    statement: 'How much to charge for pinterest management?',
    paragraph: 'The cost of Pinterest Management and Pin Design Services varies greatly depending on the services required. Generally, the fee is based on a monthly retainer or a flat rate per pin design. Consider budgeting between $500-$3,000 per month to ensure quality Pinterest management and pin design services.'
  }
]

export default function PinterestMarketingContent() {
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
          src="https://images.unsplash.com/photo-1611926653670-1e4eb8577a85"
          alt="Pinterest Marketing Services"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-600/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Pinterest Marketing Services
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
                  <Link href="/ppc-services/google-ads-marketing" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/ppc-management-services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    PPC Management
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/whatsapp-marketing" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    Whatsapp Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/tiktok-advertising" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    TikTok Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/facebook-advertising" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    Facebook Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/instagram-advertising" className="text-sm text-gray-600 hover:text-red-600 transition-colors block py-1">
                    Instagram Ads
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
                  At our Pinterest Advertising Agency, we provide tailored solutions to help your brand excel on this influential social platform. Our dedicated team of experts crafts precise strategies, targeting, and creativity using analytics and proven methodologies. With a focus on customization, creativity, and knowledge, we are committed to driving your success on Pinterest.
                </p>
              </div>
            </section>

            {/* Key Factors Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                      alt="Comprehensive Services Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Comprehensive Pinterest Advertising Services</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We offer a full range of services, from strategy development to campaign execution, ensuring a holistic approach to maximize results.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5"
                      alt="Pin Design Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Specialized Pinterest Pin Design</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced team collaborates with you to create visually appealing and on-brand pins that captivate your target audience.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                      alt="Growth Strategies Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Full-Funnel Growth Strategies</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond advertising, we nurture customers, increase brand awareness, and enhance the buying experience.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                      alt="ROI Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Measurable ROI</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our data-driven approach enables us to deliver measurable results and optimize campaigns for optimal performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf"
                  alt="Pinterest Pin Design Examples"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                  alt="Pinterest Marketing Strategy"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </section>

            {/* Key Benefits Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Key Benefits</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Enhanced Brand Visibility: </strong>
                    <span className="text-gray-600">
                      Our tailored Pinterest marketing services increase brand exposure and attract a wider audience.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Engaging Visuals: </strong>
                    <span className="text-gray-600">
                      Our high-quality, aspirational pin designs capture attention and effectively showcase your products and services.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Value-Added Content: </strong>
                    <span className="text-gray-600">
                      We create rich and meaningful content that adds value to your customers, establishing your brand as a trusted authority.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Flexible Pricing Options: </strong>
                    <span className="text-gray-600">
                      Our responsive and flexible pricing options cater to businesses of all sizes and budgets, ensuring accessibility.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-600">
                      At our Pinterest Advertising Agency, we prioritize transparency, ethical practices, and client satisfaction. Our track record of success across various industries is a testament to our expertise. With clear pricing, customized solutions, and a data-driven creative approach, we have helped numerous businesses thrive on Pinterest.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-600">
                      In conclusion, our Pinterest Advertising Agency offers customized strategies, visually appealing designs, and comprehensive services to drive your brand's success on Pinterest. Experience measurable results, enhanced brand visibility, and engaging content by partnering with us. Contact us today to elevate your Pinterest marketing efforts to new heights.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Outcomes Section */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Neat Outcome</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-red-600 mb-3">5350%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in website traffic</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-red-700 mb-3">223%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in conversion rates</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-red-800 mb-3">325%</span>
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
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 text-sm rounded-md hover:bg-red-700 transition-colors font-medium"
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
              <div className="bg-red-50 rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Let's skyrocket your ROI with Pinterest Advertising services today!
                </p>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
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
                        className={`flex-shrink-0 text-red-600 transition-transform duration-300 ${
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
