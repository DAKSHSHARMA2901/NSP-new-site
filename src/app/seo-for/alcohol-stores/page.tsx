"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AlcoholStoresSEOForPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const benefits = [
    { title: "Increase Visibility", description: "Appear on the first page of search results when customers search for alcohol online." },
    { title: "Drive Targeted Traffic", description: "Attract customers actively searching for products you sell." },
    { title: "Boost Sales", description: "Convert more visitors into customers with optimized product pages." },
    { title: "Stay Ahead of Competitors", description: "Outrank your competition and capture more market share." },
    { title: "Build Trust and Credibility", description: "A higher search ranking signals reliability and quality to customers." },
  ]

  const features = [
    { title: "Keyword Research & Strategy", description: "Identify high-performing keywords specific to the alcohol industry." },
    { title: "On-Page Optimization", description: "Optimize product pages, meta tags, and content for search engines." },
    { title: "Technical SEO", description: "Improve website speed, mobile responsiveness, and overall user experience." },
    { title: "Content Marketing", description: "Create engaging blogs, product descriptions, and landing pages." },
    { title: "Local SEO", description: "Optimize for local searches and manage Google My Business profiles for visibility." },
    { title: "Link Building", description: "Build high-quality backlinks from reputable websites in the alcohol and lifestyle niches." },
    { title: "Analytics & Reporting", description: "Track your website's performance with detailed monthly reports." },
  ]

  const processSteps = [
    { step: "1", title: "Free SEO Audit", description: "We analyze your current website performance and identify opportunities." },
    { step: "2", title: "Customized Strategy", description: "We create a tailored SEO plan based on your goals and target audience." },
    { step: "3", title: "Implementation", description: "Our team executes the strategy with on-page, technical, and content optimizations." },
    { step: "4", title: "Monitoring & Reporting", description: "Track progress with detailed monthly reports and performance metrics." },
    { step: "5", title: "Ongoing Optimization", description: "Continuous improvements to maintain and improve your rankings." },
  ]

  const whyChooseUs = [
    { title: "Industry Expertise", description: "We understand the unique challenges of marketing alcohol online, including compliance and regulations." },
    { title: "Proven Results", description: "Our SEO strategies have helped numerous alcohol brands achieve top rankings and increased sales." },
    { title: "Tailored Solutions", description: "Every business is unique, and we create custom strategies to meet your specific goals." },
    { title: "Transparent Reporting", description: "You'll always know how your SEO campaign is performing with detailed reports." },
    { title: "Dedicated Support", description: "Our team is here to answer your questions and provide ongoing guidance." },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Starter: {
      price: "$699/month",
      features: [
        "Keyword research (up to 10 keywords)",
        "On-page optimization for 5 pages",
        "Monthly performance report",
        "Basic technical SEO fixes",
      ],
    },
    Growth: {
      price: "$1,299/month",
      features: [
        "Keyword research (up to 20 keywords)",
        "On-page optimization for 10 pages",
        "Monthly performance report",
        "Advanced technical SEO fixes",
        "2 blog posts per month",
        "Local SEO optimization",
      ],
      highlight: true,
    },
    Premium: {
      price: "$2,999/month",
      features: [
        "Keyword research (up to 50 keywords)",
        "On-page optimization for 20+ pages",
        "Monthly performance report",
        "Comprehensive technical SEO fixes",
        "4 blog posts per month",
        "Local SEO optimization",
        "Link building (10 high-quality backlinks/month)",
        "Dedicated account manager",
      ],
    },
  }

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

      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.35em] mb-8 bg-amber-950/30 px-10 py-5 rounded-full border-2 border-amber-400 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20">SEO Services for Online Alcohol Stores</span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-amber-50 mb-4 leading-tight">Drive Traffic, Boost Sales, and Dominate Search Results</h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">In the competitive world of online alcohol sales, standing out is essential. We specialize in SEO strategies tailored for online liquor stores, wineries, breweries, and distilleries.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section suppressHydrationWarning className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Benefits of SEO for Online Alcohol Stores</h2>
            <p className="text-amber-100/90">Maximize your online presence and revenue with targeted SEO strategies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-amber-50 mb-2">{b.title}</h3>
                <p className="text-amber-100/90">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Showcase Section */}
      <section suppressHydrationWarning className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-amber-300 font-semibold uppercase tracking-wider mb-3 block">Specialized SEO for Alcohol Industry</span>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4 leading-tight">Your Partner in Online Alcohol Sales Success</h2>
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed mb-6">
                We understand the unique challenges of marketing alcohol online—from compliance requirements to age verification and shipping restrictions. Our SEO strategies are designed to navigate these complexities while maximizing your online visibility.
              </p>
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed mb-6">
                Whether you're an online liquor store, winery, brewery, or distillery, we'll help you reach customers actively searching for your products and convert them into loyal buyers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="200+" label="Alcohol Brands" />
                <StatCard value="350%" label="Avg Traffic Increase" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-700/50 shadow-xl">
              <Image
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png"
                alt="Online alcohol store SEO services"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Services */}
      <section suppressHydrationWarning className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Our SEO Services Include</h2>
            <p className="text-amber-100/90">Comprehensive SEO solutions tailored for the alcohol industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-amber-50 mb-2">{f.title}</h3>
                <p className="text-amber-100/90">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Pricing Packages</h2>
            <p className="text-amber-100/90">Choose a plan that fits your business needs and growth goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([name, plan]) => (
              <PricingCard key={name} name={name} price={plan.price} features={plan.features} highlighted={!!plan.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">How It Works</h2>
            <p className="text-amber-100/90">Our proven process to boost your online visibility and sales.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-50 mb-2">{item.title}</h3>
                    <p className="text-amber-100/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Why Choose Us?</h2>
            <p className="text-amber-100/90">Your trusted partner for alcohol industry SEO success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-amber-50 mb-2">{item.title}</h3>
                <p className="text-amber-100/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Success Stories</h2>
            <p className="text-amber-100/90">See how we've helped alcohol brands dominate search results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative rounded-2xl overflow-hidden border-4 border-amber-700/50 hover:border-amber-500 transition-colors shadow-xl">
              <Image 
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png" 
                alt="Premium Whiskey Brand SEO" 
                width={560} 
                height={360} 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-amber-50 text-xl font-bold">Premium Whiskey Brand</h3>
                <p className="text-amber-100/90">450% increase in organic traffic</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden border-4 border-amber-700/50 hover:border-amber-500 transition-colors shadow-xl">
              <Image 
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png" 
                alt="Online Wine Store SEO" 
                width={560} 
                height={360} 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-amber-50 text-xl font-bold">Online Wine Store</h3>
                <p className="text-amber-100/90">320% growth in online sales</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden border-4 border-amber-700/50 hover:border-amber-500 transition-colors shadow-xl">
              <Image 
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png" 
                alt="Craft Brewery SEO" 
                width={560} 
                height={360} 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-amber-50 text-xl font-bold">Craft Brewery</h3>
                <p className="text-amber-100/90">Top 3 rankings for key terms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/85 via-stone-950/85 to-yellow-950/85" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to dominate search results?</h2>
            <p className="text-amber-100/90 mb-8">Let's create an SEO strategy that drives traffic, boosts sales, and grows your online alcohol business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Get Your Free SEO Audit
              </a>
              <a
                href="/seo-services"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore More SEO Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-amber-900/40 to-stone-900/40 p-5 rounded-xl shadow-md border border-amber-700/50">
      <div className="text-3xl font-extrabold text-amber-200">{value}</div>
      <div className="text-amber-100/90 font-semibold">{label}</div>
    </div>
  )
}

function PricingCard({ name, price, features, highlighted = false }: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-xl p-7 border transition-all duration-300 ${highlighted ? "bg-gradient-to-br from-amber-800/80 to-orange-800/70 border-amber-500 ring-2 ring-amber-400 shadow-xl" : "bg-stone-900/60 border-amber-600/50 shadow-md hover:shadow-lg"}`}>
      {highlighted && (<div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">Most Popular</div>)}
      <h3 className="text-xl font-bold text-amber-50 mb-2">{name}</h3>
      <div className="mb-5">
        <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{price}</span>
        {(price.includes("/month") || price.includes("/mo")) && <span className="text-amber-100/80 ml-2 font-semibold">monthly</span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-amber-50">
            <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.535a1 1 0 011.414-1.414l3.01 3.01 6.657-6.657a1 1 0 011.333-.181z" clipRule="evenodd" /></svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className={`block text-center font-bold px-5 py-3 rounded-lg border transition-colors ${highlighted ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-500 hover:from-amber-700 hover:to-orange-700" : "text-amber-50 border-amber-500 hover:bg-amber-800/30"}`}>Get Started</a>
    </div>
  )
}
