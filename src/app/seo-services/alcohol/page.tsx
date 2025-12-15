"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = "force-static"

export default function AlcoholSEOServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      title: "Technical SEO Audit",
      description:
        "Crawlability, indexation, Core Web Vitals and site architecture tuned for product and story pages.",
    },
    {
      title: "On‑Page Optimization",
      description:
        "Metadata, headings and internal linking tailored to spirits, varietals and tasting experiences.",
    },
    {
      title: "Local SEO for Taprooms",
      description:
        "Google Business Profiles, citations and local landing pages for tastings, tours and retail partners.",
    },
    {
      title: "Content & Authority",
      description:
        "Editorial calendars, recipe content, heritage storytelling and digital PR to earn quality links.",
    },
    {
      title: "Schema & Rich Snippets",
      description:
        "Product, event, organization and HowTo schema to enhance visibility.",
    },
    {
      title: "Analytics & Growth",
      description:
        "Dashboards, rank tracking and goal measurement to guide continuous improvement.",
    },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Starter: {
      price: "$799/mo",
      features: [
        "Technical + on‑page audit",
        "Core page optimizations",
        "Local profile optimization",
        "Monthly report",
        "Basic content plan",
      ],
    },
    Growth: {
      price: "$1,499/mo",
      features: [
        "Content + link acquisition",
        "Location pages + citations",
        "Schema implementation",
        "Rank + revenue dashboards",
        "Monthly strategy call",
      ],
      highlight: true,
    },
    Enterprise: {
      price: "Custom",
      features: [
        "Multi‑site or multi‑brand",
        "International SEO",
        "Digital PR + advanced content",
        "Dedicated strategist",
        "Priority support",
      ],
    },
  }

  const portfolio = [
    {
      title: "Highland Whiskey Co.",
      category: "Organic Growth",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png",
    },
    {
      title: "Vineyard Estate",
      category: "Local Visibility",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png",
    },
    {
      title: "Craft Brewery",
      category: "Content + PR",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png",
    },
  ]

  const faqs = [
    {
      q: "When will we see SEO results?",
      a: "Foundational fixes yield early lifts within 6–8 weeks; sustained growth typically compounds over 3–6 months.",
    },
    {
      q: "Do you create content for regulated industries?",
      a: "Yes. We follow industry and platform guidelines to produce compliant, brand‑safe content.",
    },
    {
      q: "Is local SEO included?",
      a: "Local discovery is core for tasting rooms and tours. We optimize GBP, citations and local landing pages.",
    },
    {
      q: "How do you measure success?",
      a: "We track rankings, organic sessions, conversions (bookings, orders) and assisted revenue.",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        suppressHydrationWarning
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5 bg-amber-950/30 px-5 py-2 rounded-full border border-amber-500/30">
              Alcohol SEO Services
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-50 mb-5 leading-tight">
              Sustainable organic growth for premium spirits brands
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8 leading-relaxed">
              Win visibility for tastings, tours and DTC orders with technical foundations and compelling content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Get SEO Plan
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                See Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Foundations that compound</h2>
            <p className="text-amber-100/90">SEO tailored to regulated alcohol brands and their audiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1"
              >
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">SEO retainers</h2>
            <p className="text-amber-100/90">Plans to match your pace and ambition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([name, plan]) => (
              <PricingCard key={name} name={name} price={plan.price} features={plan.features} highlighted={!!plan.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Featured work</h2>
            <p className="text-amber-100/90">Examples of alcohol brand SEO initiatives.</p>
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">FAQs</h2>
            <p className="text-amber-100/90">What alcohol brands ask us most.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-stone-900/70 rounded-xl border border-amber-600/40 shadow-md overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4"
                >
                  <span className="font-semibold text-amber-50">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-amber-400 transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 11V6a1 1 0 112 0v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5z" />
                  </svg>
                </button>
                <div className={`px-5 pb-4 transition-[max-height,opacity] duration-300 ease-in-out ${openFaq === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-amber-100/90">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to grow organically?</h2>
            <p className="text-amber-100/90 mb-8">Get a practical roadmap to win rankings and revenue.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Request SEO Plan
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                View Retainers
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function PricingCard({
  name,
  price,
  features,
  highlighted = false,
}: {
  name: string
  price: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-7 border transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-br from-amber-800/80 to-orange-800/70 border-amber-500 ring-2 ring-amber-400 shadow-xl"
          : "bg-stone-900/60 border-amber-600/50 shadow-md hover:shadow-lg"
      }`}
    >
      {highlighted && (
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-amber-50 mb-2">{name}</h3>
      <div className="mb-5">
        <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{price}</span>
        {price.endsWith("/mo") && <span className="text-amber-100/80 ml-2 font-semibold">monthly</span>}
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-amber-50">
            <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.535a1 1 0 011.414-1.414l3.01 3.01 6.657-6.657a1 1 0 011.333-.181z" clipRule="evenodd" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`block text-center font-bold px-5 py-3 rounded-lg border transition-colors ${
          highlighted
            ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-500 hover:from-amber-700 hover:to-orange-700"
            : "text-amber-50 border-amber-500 hover:bg-amber-800/30"
        }`}
      >
        Get Started
      </a>
    </div>
  )
}
