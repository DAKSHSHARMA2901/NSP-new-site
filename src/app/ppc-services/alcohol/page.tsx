"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = "force-static"

export default function AlcoholPPCServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      title: "Alcohol-Compliant Strategy",
      description:
        "Campaign structures, geo-targeting and age gating aligned with platform policies for alcohol brands.",
    },
    {
      title: "High-Intent Keyword Targeting",
      description:
        "Match types, negatives, and query sculpting to focus budget on buyers vs. browsers.",
    },
    {
      title: "Conversion-Focused Landing Pages",
      description:
        "Fast, persuasive pages with clear calls-to-action for tastings, tours, and online orders.",
    },
    {
      title: "Advanced Tracking & Analytics",
      description:
        "Server-side tracking, enhanced conversions and event tagging for accurate ROAS.",
    },
    {
      title: "Creative Testing",
      description:
        "Iterative ad testing (copy, headlines, visuals) to improve CTR and reduce CPCs.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Weekly performance snapshots and monthly deep-dives with actionable recommendations.",
    },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Starter: {
      price: "$999/mo",
      features: [
        "Campaign setup or cleanup",
        "Keyword + negative lists",
        "1 landing page template",
        "Basic conversion tracking",
        "Weekly snapshots",
      ],
    },
    Growth: {
      price: "$1,999/mo",
      features: [
        "Full-funnel campaigns (Search/Performance Max)",
        "A/B ad + landing page tests",
        "Advanced tracking + dashboards",
        "Shopping/e‑commerce where allowed",
        "Monthly strategy call",
      ],
      highlight: true,
    },
    Scale: {
      price: "Custom",
      features: [
        "Multi-location + multi-brand",
        "Custom BI dashboards",
        "Audience research + creatives",
        "Dedicated strategist",
        "Priority support",
      ],
    },
  }

  const portfolio = [
    {
      title: "Highland Whiskey Co.",
      category: "Lead Gen + Online Orders",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png",
    },
    {
      title: "Vineyard Estate",
      category: "Tour Bookings",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png",
    },
    {
      title: "Craft Brewery",
      category: "Taproom Awareness",
      image:
        "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png",
    },
  ]

  const faqs = [
    {
      q: "Can alcohol brands advertise on Google and Meta?",
      a: "Yes, with restrictions that vary by country/region. We implement compliant geo-targeting, age gating and policy-safe creatives.",
    },
    {
      q: "How fast can we see results?",
      a: "Most accounts reach stable performance within 2–4 weeks after structured testing and negative list maturation.",
    },
    {
      q: "Do you build landing pages?",
      a: "Yes. We design and test landing pages optimized for tastings, tours, and DTC orders.",
    },
    {
      q: "Which platforms do you manage?",
      a: "Google Ads (Search, PMax), Microsoft Ads, and where permitted: Meta, YouTube, Programmatic.",
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
              Alcohol PPC Management
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-50 mb-5 leading-tight">
              Profitable, compliant PPC for distilleries, wineries and breweries
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8 leading-relaxed">
              Turn intent into revenue with campaigns built for regulations, speed and measurable ROAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Get PPC Proposal
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                See Results
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Built for performance and policy</h2>
            <p className="text-amber-100/90">Everything required to scale compliant, high-ROAS campaigns.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Management plans</h2>
            <p className="text-amber-100/90">Simple retainers that grow with your spend and goals.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Recent wins</h2>
            <p className="text-amber-100/90">A snapshot of alcohol brand results we’ve delivered.</p>
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
            <p className="text-amber-100/90">Your PPC questions, answered.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to grow with PPC?</h2>
            <p className="text-amber-100/90 mb-8">Get a strategy tailored to your alcohol brand and markets.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Request Proposal
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                View Plans
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
