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
    statement: 'What is LinkedIn Marketing?',
    paragraph: 'LinkedIn Marketing is a suite of services offered by agencies and marketers that can help businesses reach their target customers through digital marketing strategies tailored for LinkedIn. It includes LinkedIn Ads, content creation, targeting, segmentation and more to help businesses build better relationships with potential customers.'
  },
  {
    id: 1,
    statement: 'How does LinkedIn Marketing work?',
    paragraph: 'LinkedIn Marketing provides a unique set of services to leverage business-to-business (B2B) marketing efforts. A specialized LinkedIn Marketing Agency can boost brand recognition, drive traffic to websites, and generate leads by tailored campaigns across digital marketing channels like LinkedIn Ads and organic networking on the platform.'
  },
  {
    id: 2,
    statement: 'What are the benefits of using LinkedIn for marketing?',
    paragraph: 'LinkedIn is one of the most powerful marketing tools and provides numerous benefits, such as increasing brand awareness, boosting reach & engagement, generating leads & sales opportunities, pinpoint targeting, automated campaigns, and much more.'
  },
  {
    id: 3,
    statement: 'How do I create a LinkedIn marketing strategy?',
    paragraph: 'Developing a successful LinkedIn marketing strategy involves leveraging the platform\'s powerful targeting capabilities, utilizing services from an experienced LinkedIn marketing agency, and optimizing for digital marketing objectives.'
  },
  {
    id: 4,
    statement: 'What types of content work best for LinkedIn marketing?',
    paragraph: 'When it comes to LinkedIn marketing, content that is highly engaging and relevant to B2B audiences is the key. Digital marketers should focus on creating high-quality, informative posts that help potential customers understand their product or service offering in order to drive greater business prospects.'
  }
]

export default function LinkedInMarketingContent() {
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
          src="https://images.unsplash.com/photo-1611944212129-29977ae1398c"
          alt="LinkedIn Marketing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            LinkedIn Marketing Services
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
                  <Link href="/ppc-services/pinterest-marketing" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
                    Pinterest Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/quora-marketing" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
                    Quora Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/whatsapp-marketing" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
                    Whatsapp Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/tiktok-advertising" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
                    TikTok Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/facebook-advertising" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
                    Facebook Ads
                  </Link>
                </li>
                <li>
                  <Link href="/ppc-services/instagram-advertising" className="text-sm text-gray-600 hover:text-blue-700 transition-colors block py-1">
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
                  Elevate your B2B business with our LinkedIn marketing services. We specialize in creating customized marketing strategies that align with your goals and objectives, leveraging the power of one of the largest professional platforms to drive lasting success. With data-driven insights, tailored audience targeting, and a professional appeal, our LinkedIn marketing agency can give you a competitive advantage and establish a strong brand presence on this popular platform.
                </p>
              </div>
            </section>

            {/* Key Factors Section */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Factors</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-700 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                      alt="Insight-Driven Strategies Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Insight-Driven Strategies</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We utilize data-driven insights to identify your target audience and craft personalized marketing strategies that resonate with them.
                  </p>
                </div>

                <div className="border-l-4 border-blue-700 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                      alt="Tailored Targeting Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Tailored Audience Targeting</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our LinkedIn marketing services offer granular targeting options to reach decision-makers in specific industries and regions or target specialized interests for maximum impact.
                  </p>
                </div>

                <div className="border-l-4 border-blue-700 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                      alt="Scalability Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Scalability</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    LinkedIn presents unparalleled opportunities for B2B marketing, and we can help you harness the platform's full potential to drive engagement, growth, and interest in your business.
                  </p>
                </div>

                <div className="border-l-4 border-blue-700 pl-6 py-2">
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                      alt="Professional Appeal Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-800">Professional Appeal</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    LinkedIn is the ideal platform to showcase your business's expertise and establish credibility in your industry. Our LinkedIn marketing agency will help position your brand as a thought leader.
                  </p>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                  alt="LinkedIn B2B Marketing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                  alt="Professional Networking Strategy"
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
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Competitive Advantage: </strong>
                    <span className="text-gray-600">
                      Our LinkedIn marketing services give you an edge over your rivals, helping you establish a strong brand presence on one of the world's most popular professional platforms.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Advanced Targeting Options: </strong>
                    <span className="text-gray-600">
                      With LinkedIn's vast data-rich environment, you can target audiences based on job title, function, industry, and location, ensuring your messaging reaches the right people.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Content Marketing Opportunities: </strong>
                    <span className="text-gray-600">
                      LinkedIn offers various content marketing options, allowing you to promote your content to a highly engaged audience and drive brand awareness.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Lead Generation: </strong>
                    <span className="text-gray-600">
                      LinkedIn provides tools for lead generation, including sponsored InMail, lead gen forms, and LinkedIn Sales Navigator, helping you capture valuable leads for your B2B business.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">In-house Creative Team: </strong>
                    <span className="text-gray-600">
                      Our experienced creative team will craft visually compelling content aligned with your brand's unique voice.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Dedicated Account Managers: </strong>
                    <span className="text-gray-600">
                      A dedicated account manager will collaborate closely with you to strategize, execute, and optimize your LinkedIn marketing efforts.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Transparent Approach: </strong>
                    <span className="text-gray-600">
                      We keep you informed at every stage of the marketing process, providing regular updates and detailed reports.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800">Expertise and Proven Results: </strong>
                    <span className="text-gray-600">
                      With years of industry knowledge and experience, our agency has helped clients improve B2B lead generation, conversion rates, and brand awareness through our expert LinkedIn marketing services.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-600">
                      LinkedIn offers exceptional opportunities for B2B companies to connect with their ideal audience and achieve success. By partnering with our LinkedIn marketing agency, you can leverage the platform's full potential, drive engagement, and build lasting connections using compelling, insight-driven marketing strategies.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Outcomes Section */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Neat Outcome</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-700 mb-3">5350%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in website traffic</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-800 mb-3">223%</span>
                  <span className="block text-lg font-semibold text-gray-700">Increase in conversion rates</span>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                  <span className="block text-5xl font-bold text-blue-900 mb-3">325%</span>
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
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-800 transition-colors font-medium"
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
                  Schedule your free consultation today and take the first step towards optimizing your LinkedIn presence.
                </p>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
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
                        className={`flex-shrink-0 text-blue-700 transition-transform duration-300 ${
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
