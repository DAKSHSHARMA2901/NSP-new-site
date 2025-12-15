"use client"
import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AlcoholWebsiteDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      title: "Industry Expertise",
      description:
        "We specialize in website development for alcohol sellers, understanding the unique challenges of compliance, age verification, and shipping regulations.",
    },
    {
      title: "Compliance-First Approach",
      description:
        "Our websites are built to meet all federal, state, and local regulations, ensuring your business operates smoothly and legally.",
    },
    {
      title: "E-Commerce Excellence",
      description:
        "From secure payment gateways to inventory management and shipping integrations, we build robust e-commerce platforms that drive sales.",
    },
    {
      title: "Mobile-First Design",
      description:
        "With over half of online traffic coming from mobile devices, we ensure your website delivers a flawless experience on any screen size.",
    },
    {
      title: "SEO & Analytics Integration",
      description:
        "Our websites are optimized for search engines, helping your brand rank higher and attract more customers. Plus, we integrate analytics tools to track performance.",
    },
    {
      title: "Rich Media Storytelling",
      description:
        "Showcase your brand's heritage, craftsmanship, and products with high-quality visuals, videos, and interactive elements.",
    },
    {
      title: "Proven Track Record",
      description:
        "With years of experience and a portfolio of successful projects, we've helped numerous alcohol brands elevate their online presence.",
    },
    {
      title: "Ongoing Support",
      description:
        "We don't just build your website and leave. Our maintenance plans ensure your site stays secure, fast, and up-to-date.",
    },
    {
      title: "Results-Driven Approach",
      description:
        "Our focus is on creating websites that not only look great but also deliver measurable results, from increased traffic to higher conversions.",
    },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Starter: {
      price: "$2,499",
      features: [
        "5-page responsive website",
        "Age verification system",
        "Mobile-first design",
        "Basic SEO setup",
        "30 days support",
      ],
    },
    Professional: {
      price: "$4,999",
      features: [
        "Up to 15 pages + blog",
        "E-commerce integration",
        "Advanced age verification",
        "Booking system for tastings/tours",
        "SEO & analytics integration",
        "90 days support",
      ],
      highlight: true,
    },
    Enterprise: {
      price: "Custom",
      features: [
        "Unlimited pages & features",
        "Multi-location support",
        "Custom API integrations",
        "Advanced e-commerce features",
        "Ongoing maintenance & updates",
        "1 year priority support",
      ],
    },
  }

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Share your vision, goals, and requirements with our team.",
    },
    {
      step: "2",
      title: "Design & Development",
      description: "We create a custom website tailored to your alcohol brand and audience.",
    },
    {
      step: "3",
      title: "Review & Feedback",
      description: "You review the draft, and we make any necessary adjustments.",
    },
    {
      step: "4",
      title: "Launch",
      description: "Your website goes live, optimized for performance and search engines.",
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "We provide maintenance and updates to keep your site fresh and functional.",
    },
  ]

  const portfolio = [
    { title: "Highland Whiskey Co.", category: "Distillery Website", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png" },
    { title: "Vineyard Estate", category: "Winery E‑Commerce", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_nswtcnswtcnswtcn_tujcvc.png" },
    { title: "Craft Brewery Tours", category: "Booking Platform", image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png" },
  ]

  const faqs = [
    {
      q: "Do you handle age verification and alcohol compliance?",
      a: "Yes. We implement robust age‑gating aligned with federal/state rules while keeping UX smooth.",
    },
    {
      q: "Can you integrate direct‑to‑consumer e‑commerce?",
      a: "Absolutely. We configure inventory, taxes, shipping restrictions, and secure payments.",
    },
    {
      q: "How long does it take?",
      a: "A focused site takes ~4‑6 weeks. Full e‑commerce with custom features typically 8‑12 weeks.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes. Flexible plans keep your site secure, compliant, and fast.",
    },
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

      {/* Hero - deep brown/amber gradient */}
      <section suppressHydrationWarning className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-amber-300 text-xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.35em] mb-8 bg-amber-950/30 px-10 py-5 rounded-full border-2 border-amber-400 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20">
              Alcohol Brand Web Design
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-amber-50 mb-4 leading-tight">
              Crafting Digital Experiences for Alcohol Brands
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8 leading-relaxed">
              Your alcohol brand deserves a website as premium as your products. We build compliant, conversion-focused websites that captivate and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-amber-300 font-semibold uppercase tracking-wider mb-3 block">Your Digital Partner</span>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4 leading-tight">Your Digital Partner for Alcohol Brands</h2>
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed mb-6">
                We bridge the gap between tradition and technology, helping alcohol brands like wineries, distilleries, and breweries create stunning, regulation-compliant websites. Our solutions are tailored to showcase your craft, engage your audience, and drive sales—whether you're selling fine wine, craft beer, or premium whiskey.
              </p>
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed mb-6">
                With a focus on seamless user experiences and measurable results, we empower your brand to stand out in a competitive market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="15+" label="Years Experience" />
                <StatCard value="500+" label="Brands Served" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-700/50 shadow-xl">
              <Image
                src="/drink2.png"
                alt="Craft distillery website design preview"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Tailored Solutions for Every Alcohol Brand: Wine, Whiskey, and Beyond</h2>
            <p className="text-amber-100/90">Comprehensive features designed specifically for the alcohol industry.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Investment plans</h2>
            <p className="text-amber-100/90">Choose a package that fits your ambitions.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Our craft in action</h2>
            <p className="text-amber-100/90">A glimpse of brand sites we’ve delivered.</p>
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

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">How It Works</h2>
            <p className="text-amber-100/90">Our streamlined process to bring your vision to life.</p>
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Frequently asked questions</h2>
            <p className="text-amber-100/90">Everything you need to know about alcohol brand websites.</p>
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

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="absolute inset-0 -z-10">
          <Image src="/drink1.png" alt="Premium spirits overlay" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/85 via-stone-950/85 to-yellow-950/85" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to elevate your digital presence?</h2>
            <p className="text-amber-100/90 mb-8">Let’s craft a site that captures your brand’s essence and drives results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-7 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.03] border border-amber-400"
              >
                Start Your Project Today
              </a>
              <a
                href="/website-development-for"
                className="inline-flex items-center justify-center border border-amber-400 text-amber-50 font-bold px-7 py-4 rounded-xl hover:bg-amber-600/20 transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore More Services
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
        {price !== "Custom" && <span className="text-amber-100/80 ml-2 font-semibold">one‑time</span>}
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