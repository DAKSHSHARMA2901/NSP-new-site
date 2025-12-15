import { redirect } from "next/navigation"

export default function Page() {
  redirect("/digital-marketing-for/online-alcohol-stores")
}

/*
"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const dynamic = "force-static"

export default function AlcoholSEOForPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    { title: "Technical SEO", description: "Crawlability, CWV and internal linking for product and story pages." },
    { title: "On‑page optimization", description: "Metadata, headings and copy tuned to spirits and varietals." },
    { title: "Local discovery", description: "GBP, citations and location pages for tastings and tours." },
    { title: "Content & authority", description: "Editorial plans, recipes and heritage storytelling with digital PR." },
    { title: "Schema & snippets", description: "Product, event and organization schema for richer results." },
    { title: "Analytics & growth", description: "Dashboards and rank tracking tied to bookings and orders." },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Starter: { price: "$799/mo", features: ["Tech + on‑page audit", "Core page fixes", "Local profile optimization", "Monthly report"] },
    Growth: { price: "$1,499/mo", features: ["Content + links", "Location pages + citations", "Schema implementation", "Monthly strategy"], highlight: true },
    Enterprise: { price: "Custom", features: ["Multi‑brand", "International SEO", "Digital PR", "Dedicated strategist"] },
  }

  const portfolio = [
    { title: "Highland Whiskey Co.", category: "Organic Growth", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png" },
    { title: "Vineyard Estate", category: "Local Visibility", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png" },
    { title: "Craft Brewery", category: "Content + PR", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png" },
  ]

  return (
    <>
      <Header />

      <section suppressHydrationWarning className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5 bg-amber-950/30 px-5 py-2 rounded-full border border-amber-500/30">Alcohol SEO Services</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-50 mb-5 leading-tight">Sustainable organic growth for premium spirits</h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">Win visibility for tastings, tours and DTC orders with technical foundations and compelling content.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Foundations that compound</h2>
            <p className="text-amber-100/90">SEO tailored to regulated alcohol brands and their audiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-900/40 via-stone-900/40 to-yellow-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/50 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-amber-50 mb-2">{f.title}</h3>
                <p className="text-amber-100/90">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <Footer />
    </>
  )
}

function PricingCard({ name, price, features, highlighted = false }: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-xl p-7 border transition-all duration-300 ${highlighted ? "bg-gradient-to-br from-amber-800/80 to-orange-800/70 border-amber-500 ring-2 ring-amber-400 shadow-xl" : "bg-stone-900/60 border-amber-600/50 shadow-md hover:shadow-lg"}`}>
      {highlighted && (<div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-3">Most Popular</div>)}
      <h3 className="text-xl font-bold text-amber-50 mb-2">{name}</h3>
      <div className="mb-5">
        <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{price}</span>
        {price.endsWith("/mo") && <span className="text-amber-100/80 ml-2 font-semibold">monthly</span>}
      import { redirect } from "next/navigation"

      export default function Page() {
        redirect("/digital-marketing-for/online-alcohol-stores")
      }
            <span>{f}</span>
*/
