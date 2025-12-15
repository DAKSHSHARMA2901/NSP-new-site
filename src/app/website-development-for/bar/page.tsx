"use client"
import React, { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BarWebsiteDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      title: "Custom Design",
      description:
        "Tailored to reflect your bar's unique atmosphere and brand identity.",
    },
    {
      title: "Online Reservations",
      description:
        "Integrated booking systems for seamless table or event reservations.",
    },
    {
      title: "Menu Showcase",
      description:
        "Display your food and drink menu with high-quality visuals and descriptions.",
    },
    {
      title: "Event Promotion",
      description:
        "Highlight upcoming events, live performances, or themed nights.",
    },
    {
      title: "SEO Optimization",
      description:
        "Help your bar rank higher on search engines to attract local customers.",
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website with your social media channels to boost engagement.",
    },
    {
      title: "Photo & Video Galleries",
      description:
        "Showcase your bar's ambiance, signature cocktails, and happy customers.",
    },
    {
      title: "Mobile-Friendly Design",
      description:
        "Ensure your website looks great and functions perfectly on any device.",
    },
    {
      title: "Secure Hosting & Maintenance",
      description:
        "Keep your website running smoothly with ongoing support.",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Share your vision, goals, and requirements with our team.",
    },
    {
      step: "2",
      title: "Design & Development",
      description: "We create a custom website tailored to your bar's brand and audience.",
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

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Years of experience in creating websites for bars and hospitality businesses.",
    },
    {
      title: "Custom Solutions",
      description: "Every website is uniquely designed to match your bar's personality.",
    },
    {
      title: "Results-Driven",
      description: "We focus on creating websites that attract customers and drive revenue.",
    },
    {
      title: "Affordable Packages",
      description: "High-quality websites at competitive prices.",
    },
    {
      title: "Dedicated Support",
      description: "Our team is here to assist you every step of the way.",
    },
  ]

  const pricing: Record<string, { price: string; features: string[]; highlight?: boolean }> = {
    Basic: {
      price: "$1,999",
      features: [
        "5-page responsive site",
        "Menu showcase",
        "Contact & location info",
        "Basic SEO setup",
        "30 days support",
      ],
    },
    Professional: {
      price: "$3,999",
      features: [
        "Up to 15 pages + blog",
        "Online reservations system",
        "Menu management",
        "Event calendar",
        "SEO & analytics integration",
        "Social media integration",
        "90 days support",
      ],
      highlight: true,
    },
    Enterprise: {
      price: "Custom",
      features: [
        "Unlimited pages",
        "Multi-location support",
        "Custom integrations",
        "Advanced booking features",
        "Photo & video galleries",
        "Priority maintenance",
        "1 year support",
      ],
    },
  }

  const portfolio = [
    { 
      title: "Urban Cocktail Lounge", 
      category: "Bar & Lounge Website", 
      image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854831/Gemini_Generated_Image_4f45lo4f45lo4f45_ghwbp4.png" 
    },
    { 
      title: "Craft Beer Taproom", 
      category: "Brewery Booking Platform", 
      image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_eqw45geqw45geqw4_r4ersx.png" 
    },
    { 
      title: "Speakeasy Bar", 
      category: "Premium Bar Experience", 
      image: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png" 
    },
  ]

  const faqs = [
    {
      q: "Do you handle online reservations and booking systems?",
      a: "Yes. We integrate robust booking systems that allow customers to reserve tables, book private events, and receive confirmations seamlessly.",
    },
    {
      q: "Can you showcase our menu and special offers?",
      a: "Absolutely. We create beautiful digital menus with high-quality visuals and can highlight daily specials, happy hours, and promotional events.",
    },
    {
      q: "How long does it take to build a bar website?",
      a: "A standard bar website takes 3-5 weeks. More complex sites with advanced booking systems and custom features typically take 6-10 weeks.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes. All our websites are fully responsive and optimized for mobile devices, ensuring a great experience on any screen size.",
    },
    {
      q: "Do you provide ongoing maintenance and support?",
      a: "Yes. We offer flexible maintenance plans to keep your site secure, updated, fast, and running smoothly.",
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
              Bar Website Development Services
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-amber-50 mb-4 leading-tight">
              Turn your bar's vibe into a digital experience that attracts customers, boosts reservations, and drives revenue
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8 leading-relaxed">
              In today's digital-first world, your bar's online presence is just as important as the drinks you serve. We specialize in creating stunning, user-friendly, and conversion-focused websites for bars of all types.
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
              <span className="text-amber-300 font-semibold uppercase tracking-wider mb-3 block">Why Your Bar Needs a Professional Website</span>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4 leading-tight">Attract More Customers & Build Trust</h2>
              <p className="text-amber-100/90 text-base md:text-lg leading-relaxed mb-6">
                A professional website showcases your bar's unique vibe, menu, and events to draw in more patrons. Make it easy for customers to book tables or private events online, promote special offers, and enhance your credibility in the competitive hospitality industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="500+" label="Bars Served" />
                <StatCard value="15+" label="Years Experience" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-700/50 shadow-xl">
              <Image
                src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_eqw45geqw45geqw4_r4ersx.png"
                alt="Bar website design preview"
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Our Bar Website Development Features</h2>
            <p className="text-amber-100/90">Comprehensive features designed to showcase your bar and drive revenue.</p>
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
            <p className="text-amber-100/90">Choose a package that fits your venue.</p>
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
            <p className="text-amber-100/90">A glimpse of bar sites we've delivered.</p>
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Why Choose NSP Global Services?</h2>
            <p className="text-amber-100/90">Your trusted partner for bar website development.</p>
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-950 via-stone-950 to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-3">Frequently asked questions</h2>
            <p className="text-amber-100/90">Everything you need to know about bar websites.</p>
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
          <Image src="https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761854812/Gemini_Generated_Image_3vdfho3vdfho3vdf_wqpovr.png" alt="Premium bar overlay" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/85 via-stone-950/85 to-yellow-950/85" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Ready to elevate your bar's online presence?</h2>
            <p className="text-amber-100/90 mb-8">Let's create a website that captures your bar's atmosphere and drives more customers through your doors.</p>
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