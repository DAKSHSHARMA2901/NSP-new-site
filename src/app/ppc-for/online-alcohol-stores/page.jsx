"use client"

import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function OnlineAlcoholStoresPPCPage() {
  const benefits = [
    { title: "Instant Visibility", description: "Get your online alcohol store in front of potential customers immediately." },
    { title: "Targeted Reach", description: "Reach customers actively searching for wines, beers, spirits, and more." },
    { title: "Boost Sales", description: "Convert clicks into purchases with optimized campaigns." },
    { title: "Promote Special Offers", description: "Highlight discounts, new arrivals, and seasonal promotions." },
    { title: "Cost-Effective Marketing", description: "Pay only for clicks from interested buyers, maximizing your ROI." },
  ]

  const features = [
    { title: "Keyword Research & Strategy", description: "Identify high-performing keywords specific to the alcohol industry." },
    { title: "Ad Copywriting", description: "Craft compelling ad copy that highlights your store's unique offerings, discounts, and delivery options." },
    { title: "Campaign Setup & Management", description: "Set up and optimize Google Ads campaigns tailored to your store's goals." },
    { title: "Shopping Ads for Alcohol Products", description: "Showcase your products directly in Google Shopping results with high-quality images and pricing." },
    { title: "Location Targeting", description: "Focus on customers in regions where you're licensed to sell and deliver alcohol." },
    { title: "Performance Tracking & Reporting", description: "Monitor ad performance with detailed reports on clicks, impressions, and conversions." },
  ]

  const whyChooseUs = [
    { title: "Alcohol Industry Expertise", description: "We understand the unique compliance requirements and regulations." },
    { title: "Proven Results", description: "Our campaigns have helped numerous alcohol stores increase sales." },
    { title: "Custom Solutions", description: "Every campaign is tailored to your specific business goals." },
    { title: "Transparent Reporting", description: "You'll always know how your campaigns are performing." },
    { title: "Dedicated Support", description: "Our team is here to assist you every step of the way." },
  ]

  const pricing = {
    Starter: {
      price: "$499/month",
      note: "(plus ad spend)",
      features: [
        "Keyword research (up to 10 keywords)",
        "Campaign setup and management",
        "Ad copywriting (up to 3 ads)",
        "Monthly performance report"
      ]
    },
    Growth: {
      price: "$999/month",
      note: "(plus ad spend)",
      features: [
        "Keyword research (up to 20 keywords)",
        "Campaign setup and management",
        "Ad copywriting (up to 5 ads)",
        "Shopping ads setup for alcohol products",
        "Bi-weekly performance reports"
      ],
      highlight: true
    },
    Premium: {
      price: "$2,999/month",
      note: "(plus ad spend)",
      features: [
        "Keyword research (up to 50 keywords)",
        "Campaign setup and management",
        "Ad copywriting (up to 10 ads)",
        "Advanced shopping ads setup and optimization",
        "A/B testing for ad performance",
        "Weekly performance reports",
        "Dedicated account manager"
      ]
    },
  }

  const portfolio = [
    { title: "Premium Wine Store", category: "Shopping Ads", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png" },
    { title: "Craft Beer Retailer", category: "Search Campaigns", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_eqw45geqw45geqw4_r4ersx.png" },
    { title: "Spirits Marketplace", category: "Performance Max", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png" },
  ]

  return (
    <>
      <Header />

      <section suppressHydrationWarning className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5 bg-amber-950/30 px-5 py-2 rounded-full border border-amber-500/30">Results-Driven PPC for Alcohol Stores</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-50 mb-5 leading-tight">Maximize your ROI with expertly managed pay-per-click campaigns</h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">We specialize in creating and managing Google Ads campaigns tailored specifically for online alcohol stores. Whether you're selling fine wines, craft beers, or premium spirits, our PPC strategies ensure your store reaches the right customers at the right time.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section suppressHydrationWarning className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Benefits of PPC for Online Alcohol Stores</h2>
            <p className="text-amber-100/90">Drive targeted traffic and increase sales with strategic paid advertising.</p>
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

      {/* Our Google Ads Services */}
      <section suppressHydrationWarning className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Our Google Ads Services for Online Alcohol Stores</h2>
            <p className="text-amber-100/90">Comprehensive PPC management tailored for the alcohol industry.</p>
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
            <p className="text-amber-100/90">Choose a plan that fits your business goals and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([name, plan]) => (
              <PricingCard key={name} name={name} price={plan.price} note={plan.note} features={plan.features} highlighted={!!plan.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Why Choose Us?</h2>
            <p className="text-amber-100/90">Your trusted partner for alcohol store PPC management.</p>
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
      <section id="portfolio" className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Success Stories</h2>
            <p className="text-amber-100/90">See how we've helped alcohol stores drive sales with PPC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border-4 border-amber-700/50 hover:border-amber-500 transition-colors shadow-xl">
                <Image src={item.image} alt={item.title} width={560} height={360} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-amber-50 text-xl font-bold">{item.title}</h3>
                  <p className="text-amber-100/90">{item.category}</p>
                </div>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to boost your online alcohol store sales?</h2>
            <p className="text-amber-100/90 mb-8">Let's create a PPC strategy that drives traffic, increases conversions, and maximizes your ROI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Get Started Today
              </a>
              <a
                href="/ppc-services"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore More PPC Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function PricingCard({ name, price, note, features, highlighted = false }) {
  return (
    <div className={`rounded-xl p-7 border transition-all duration-300 ${highlighted ? "bg-gradient-to-br from-amber-800/80 to-orange-800/70 border-amber-500 ring-2 ring-amber-400 shadow-xl" : "bg-stone-900/60 border-amber-600/50 shadow-md hover:shadow-lg"}`}>
      {highlighted && (
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">Most Popular</div>
      )}
      <h3 className="text-xl font-bold text-amber-50 mb-2">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{price}</span>
      </div>
      {note && <p className="text-amber-100/80 text-sm mb-5 font-semibold">{note}</p>}
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-amber-50">
            <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.535a1 1 0 011.414-1.414l3.01 3.01 6.657-6.657a1 1 0 011.333-.181z" clipRule="evenodd" /></svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className={`block text-center font-bold px-5 py-3 rounded-lg border transition-colors ${highlighted ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-500 hover:from-amber-700 hover:to-orange-700" : "text-amber-50 border-amber-500 hover:bg-amber-800/30"}`}>Get Started</a>
    </div>
  )
}
