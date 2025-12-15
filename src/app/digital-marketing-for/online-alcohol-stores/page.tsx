"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function OnlineAlcoholStoresDigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const benefits = [
    {
      title: "Boost Your Sales with a Stunning Online Store",
      description: "Our custom-built websites are designed to convert visitors into customers with seamless user experiences and compelling design.",
      icon: "🚀"
    },
    {
      title: "Attract More Local Customers, Instantly",
      description: "Dominate local search results and get discovered by customers actively searching for alcohol in your area.",
      icon: "📍"
    },
    {
      title: "Simplify Your Growth with an All-in-One Solution",
      description: "Website, SEO, ads, and social media—all managed by one expert team focused on your success.",
      icon: "⚡"
    },
    {
      title: "Outrank Your Competition",
      description: "Strategic SEO and paid advertising ensure you appear first when customers search for spirits, wine, and beer online.",
      icon: "🏆"
    }
  ]

  const services = [
    {
      title: "Website Development",
      description: "We build fast, secure, and visually appealing websites tailored for online alcohol sellers. An effective site helps you attract, engage, and convert customers with ease.",
      icon: "💻",
      features: ["Mobile-Responsive Design", "E-commerce Integration", "Fast Load Times", "Secure Payment Processing"]
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "We get your business to the top of Google when local customers search for alcohol. Our strategies increase your organic visibility so you're the first option they see.",
      icon: "🔍",
      features: ["Keyword Research", "On-Page Optimization", "Local SEO", "Content Strategy"]
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "We run targeted ad campaigns to reach customers actively looking to buy alcohol now. This approach drives immediate, high-intent traffic directly to your online store.",
      icon: "🎯",
      features: ["Google Ads Management", "Shopping Campaigns", "Retargeting Ads", "Performance Tracking"]
    },
    {
      title: "Social Media Marketing",
      description: "We build your brand and engage your community on platforms like Instagram and Facebook. Our team creates compelling content and promotions that turn followers into customers.",
      icon: "📱",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Influencer Partnerships"]
    }
  ]

  const whyChooseUs = [
    {
      title: "Industry-Specific Expertise",
      description: "We understand the unique challenges and regulations of the alcohol industry and tailor our strategies accordingly."
    },
    {
      title: "Websites That Sell",
      description: "Our designs aren't just beautiful—they're built to convert visitors into paying customers."
    },
    {
      title: "Proven Marketing Strategies",
      description: "We use data-driven tactics that have helped countless alcohol businesses grow their online presence and sales."
    },
    {
      title: "A Focus on Measurable Results",
      description: "You'll receive regular reports showing traffic, conversions, and sales so you can track your ROI."
    }
  ]

  const faqs = [
    {
      question: "How long does it take to build a new website for my alcohol business?",
      answer: "Most sites are launched within 4–8 weeks, depending on your needs and the complexity of features required."
    },
    {
      question: "What kind of digital marketing services will work best for an online alcohol store?",
      answer: "SEO, PPC ads, and Social Media Marketing are ideal for driving traffic and building your brand. We'll create a custom strategy based on your specific goals and target audience."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing depends on your goals and the scope of services. We'll provide a clear, detailed proposal after a quick consultation to understand your needs."
    },
    {
      question: "How will I know if my investment is paying off?",
      answer: "You get regular reports showing traffic, conversions, and sales, so you can track results and see the direct impact of our marketing efforts on your bottom line."
    }
  ]

  const ctaButtons = [
    "Get Your Free Consultation",
    "Start Selling More Today",
    "Grow My Alcohol Business",
    "Request a Free Proposal",
    "Boost My Online Sales",
    "Get My Custom Website Plan"
  ]

  return (
    <>
      {/* Hello Bar */}
      <div suppressHydrationWarning className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-4 px-4 text-center sticky top-0 z-[100] shadow-lg">
        <p className="text-base md:text-lg font-bold">
          Get a Free website with SEO—let's make magic! 
          <a href="/contact" className="ml-3 underline hover:text-orange-200 transition-colors font-bold">
            Contact Us →
          </a>
        </p>
      </div>
      
      <Header />

      {/* Hero Section */}
  <section suppressHydrationWarning className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950" />
        <div className="container mx-auto px-4">
          <div suppressHydrationWarning className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.35em] mb-8 bg-amber-950/30 px-10 py-5 rounded-full border-2 border-amber-400 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20">
              Complete Digital Marketing Services
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-amber-50 mb-4 leading-tight">
              Sell More Spirits: Your All-in-One Website & Marketing Solution
            </h2>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-4 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-amber-500/50 text-lg"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section suppressHydrationWarning className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-50 mb-4">Key Benefits</h2>
            <p className="text-xl text-amber-100/90">
              Everything you need to dominate your market and grow your online alcohol business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-8 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-amber-50 mb-3">{benefit.title}</h3>
                <p className="text-amber-100/90 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Complete Digital Marketing Offerings */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-50 mb-4">
              Our Complete Digital Marketing Offerings
            </h2>
            <p className="text-xl text-amber-100/90">
              Comprehensive solutions to elevate your online alcohol store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-8 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-amber-50 mb-3">{service.title}</h3>
                <p className="text-amber-100/90 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-amber-50">
                      <svg
                        className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.535a1 1 0 011.414-1.414l3.01 3.01 6.657-6.657a1 1 0 011.333-.181z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-50 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-amber-100/90">
              Partner with experts who understand your industry and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-7 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl"
              >
                <h3 className="text-xl font-bold text-amber-50 mb-3">{reason.title}</h3>
                <p className="text-amber-100/90 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-50 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-100/90">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm rounded-2xl border border-amber-700/50 overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-amber-900/20 transition-colors"
                >
                  <span className="text-xl font-bold text-amber-50 pr-8">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-amber-400 transition-transform flex-shrink-0 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-amber-100/90 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-50 mb-6">
              Ready to Grow Your Online Alcohol Business?
            </h2>
            <p className="text-xl text-amber-100/90 mb-10">
              Let's build your digital presence and drive more sales. Choose the best option for you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ctaButtons.map((button, i) => (
                <a
                  key={i}
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-6 py-4 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                >
                  {button}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
