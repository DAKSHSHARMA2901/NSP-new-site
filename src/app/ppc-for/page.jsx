import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SeoForByChar from '@/components/SeoForByChar'

export const metadata = {
    title: 'PPC Services by Industry | NSP Global Services',
    description:
        'Explore PPC services tailored for your industry. Find specialized pay-per-click strategies that drive targeted traffic, quality leads, and measurable ROI.',
    alternates: {
        canonical: 'https://www.nspglobalservices.com/ppc-for',
    },
    openGraph: {
        type: 'website',
        url: 'https://www.nspglobalservices.com/ppc-for',
        title: 'PPC Services by Industry | NSP Global Services',
        description:
            'Explore PPC services tailored for your industry. Find specialized pay-per-click strategies that drive targeted traffic, quality leads, and measurable ROI.',
        siteName: 'NSP Global Services',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PPC Services by Industry | NSP Global Services',
        description:
            'Explore PPC services tailored for your industry. Find specialized pay-per-click strategies that drive targeted traffic, quality leads, and measurable ROI.',
    },
}

function page() {
    const paths = [
        '/ppc-for/alcohol',
        '/ppc-for/online-alcohol-stores',
        '/ppc-for/american-grocery-store',
        '/ppc-for/amusement-park-ride',
        '/ppc-for/water-purification-company',
        '/ppc-for/water-ski-shop',
        '/ppc-for/water-skiing-club',
        '/ppc-for/water-skiing-instructor',
        '/ppc-for/water-skiing-service',
        '/ppc-for/water-softening-equipment-supplier',
        '/ppc-for/water-testing-service',
        '/ppc-for/water-treatment-plant',
        '/ppc-for/water-treatment-supplier',
        '/ppc-for/water-utility-company',
        '/ppc-for/water-works',
        '/ppc-for/water-works-equipment-supplier',
        '/ppc-for/web-hosting-company',
        '/ppc-for/website-designer',
        '/ppc-for/wedding-bakery',
        '/ppc-for/wedding-buffet',
        '/ppc-for/wedding-chapel',
        '/ppc-for/wedding-dress-rental-service',
        '/ppc-for/wedding-photographer',
        '/ppc-for/wedding-planner',
        '/ppc-for/wedding-service',
        '/ppc-for/wedding-souvenir-shop',
        '/ppc-for/wedding-store',
        '/ppc-for/wedding-venue',
        '/ppc-for/weigh-station',
        '/ppc-for/weight-loss-service',
        '/ppc-for/weightlifting-area',
        '/ppc-for/well-drilling-contractor',
        '/ppc-for/wellness-center',
        '/ppc-for/wellness-hotel',
        '/ppc-for/wellness-program',
        '/ppc-for/wesleyan-church',
        '/ppc-for/western-apparel-store',
        '/ppc-for/whale-watching-tour-agency',
        '/ppc-for/wholesale-bakery',
        '/ppc-for/wholesale-drugstore',
        '/ppc-for/wholesale-florist',
        '/ppc-for/wholesale-food-store',
        '/ppc-for/wholesale-grocer',
        '/ppc-for/wholesale-jeweler',
        '/ppc-for/wholesale-market',
        '/ppc-for/wholesale-plant-nursery',
        '/ppc-for/wholesaler',
        '/ppc-for/wi-fi-spot',
        '/ppc-for/wildlife-park',
        '/ppc-for/wildlife-refuge',
        '/ppc-for/wildlife-rescue-service',
        '/ppc-for/willow-basket-manufacturer',
        '/ppc-for/wind-turbine-builder',
        '/ppc-for/window-cleaning-service',
        '/ppc-for/window-installation-service',
        '/ppc-for/window-supplier',
        '/ppc-for/window-tinting-service',
        '/ppc-for/window-treatment-store',
        '/ppc-for/wine-store',
        '/ppc-for/wine-wholesaler-and-importer',
        '/ppc-for/winemaking-supply-store',
        '/ppc-for/winery',
        '/ppc-for/wing-chun-school',
        '/ppc-for/womens-clothing-store',
        '/ppc-for/womens-college',
        '/ppc-for/womens-health-clinic',
        '/ppc-for/womens-organization',
        '/ppc-for/womens-personal-trainer',
        '/ppc-for/womens-shelter',
        '/ppc-for/womens-protection-service',
        '/ppc-for/wood-and-laminate-flooring-supplier',
        '/ppc-for/wood-floor-installation-service',
        '/ppc-for/wood-floor-refinishing-service',
        '/ppc-for/wood-frame-supplier',
        '/ppc-for/wood-stove-shop',
        '/ppc-for/wood-supplier',
        '/ppc-for/wood-working-class',
        '/ppc-for/woodworker',
        '/ppc-for/woodworking-supply-store',
        '/ppc-for/wool-store',
        '/ppc-for/work-clothes-store',
        '/ppc-for/workers-club',
        '/ppc-for/working-womens-hostel',
        '/ppc-for/shared-use-commercial-kitchen',
        '/ppc-for/sharpening-service',
        '/ppc-for/shed-builder',
        '/ppc-for/smoke-shop',
        '/ppc-for/snack-bar',
        '/ppc-for/snow-removal-service',
        '/ppc-for/toy-store',
        '/ppc-for/toyota-dealer',
        '/ppc-for/tractor-dealer',
        '/ppc-for/toy-manufacturer',
        '/ppc-for/waterproofing-service',
        '/ppc-for/wax-museum',
        '/ppc-for/wax-supplier',
        '/ppc-for/waxing-hair-removal-service',
        '/ppc-for/youth-club',
        '/ppc-for/youth-group',
        '/ppc-for/youth-hostel',
        '/ppc-for/youth-organization',
        '/ppc-for/youth-social-services-organization',
        '/ppc-for/zhejiang-restaurant',
        '/ppc-for/zoo',
        '/ppc-for/law-firms',
        '/ppc-for/dentists',
        '/ppc-for/financial-services',
        '/ppc-for/higher-education',
        '/ppc-for/startups',
        '/ppc-for/accountants',
        '/ppc-for/charities',
        '/ppc-for/distributors',
        '/ppc-for/events',
        '/ppc-for/fashion',
        '/ppc-for/food-industry',
        '/ppc-for/healthcare',
        '/ppc-for/local-businesses',
        '/ppc-for/manufacturers',
        '/ppc-for/non-profit',
        '/ppc-for/outdoor-companies',
        '/ppc-for/suppliers',
        '/ppc-for/insurance-agency',
        '/ppc-for/lawyers',
        '/ppc-for/ecommerce',
        '/ppc-for/attorneys',
        '/ppc-for/small-business',
        '/ppc-for/apartments',
        '/ppc-for/doctors',
        '/ppc-for/financial-services',
        '/ppc-for/hotels',
        '/ppc-for/real-estate-investors',
        '/ppc-for/contractors',
        '/ppc-for/plumbers',
        '/ppc-for/real-estate',
        '/ppc-for/industrial-companies',
        '/ppc-for/plastic-surgeons',
        '/ppc-for/realtors',
        '/ppc-for/banks',
        '/ppc-for/brand-awareness',
        '/ppc-for/divorce-attorney',
        '/ppc-for/divorce-lawyers',
        '/ppc-for/drug-rehabs',
        '/ppc-for/ecommerce-sites',
        '/ppc-for/flooring-companies',
        '/ppc-for/fmcg-brands',
        '/ppc-for/funeral-homes',
        '/ppc-for/home-services',
        '/ppc-for/insurance-brokers',
        '/ppc-for/lead-generation',
        '/ppc-for/luxury-hotels',
        '/ppc-for/moving-companies',
        '/ppc-for/packaging',
        '/ppc-for/plumbing-companies',
        '/ppc-for/recruiters',
        '/ppc-for/rehab-centers',
        '/ppc-for/self-storage',
        '/ppc-for/automotive-industry',
        '/ppc-for/pest-control-companies',
        '/ppc-for/aviation',
        '/ppc-for/portable-storage',
        '/ppc-for/appliance-repair',
        '/ppc-for/auto-dealers',
        '/ppc-for/business-consultants',
        '/ppc-for/locksmiths',
        '/ppc-for/mattress-company',
        '/ppc-for/painters',
        '/ppc-for/roofer',
        '/ppc-for/schools',
        '/ppc-for/senior-living',
        '/ppc-for/therapists',
        '/ppc-for/tile-service',
        '/ppc-for/travel-industry',
        '/ppc-for/universities',
        '/ppc-for/veterinarians',
        '/ppc-for/weight-loss',
        '/ppc-for/window-contractors',
        '/ppc-for/landscaping-companies',
        '/ppc-for/medical-clinics',
        '/ppc-for/medical-professionals',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo',
        '/ppc-for/zoo'
    ];

        const alphabet = 'ABCDEFGHJKLMNOPRSTUVWY'.split('')
        const totalServices = paths.length

        return (
            <>
                <Header />

                {/* Hero */}
                <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                PPC Services by Industry
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-8">
                                Find specialized PPC solutions for your industry. Drive qualified traffic,
                                improve conversion rates, and maximize ROI with expert management.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/ppc-services"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    View Main PPC Services
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Get Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{totalServices}+</div>
                                <div className="text-gray-600">Industries Served</div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                                <div className="text-gray-600">Campaign Monitoring</div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">ROI+</div>
                                <div className="text-gray-600">Average Return</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Sections */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Browse PPC Services by Industry
                            </h2>
                            <p className="text-lg text-gray-600">
                                Select your industry to learn more about our specialized PPC solutions
                            </p>
                        </div>

                        {alphabet.map((letter) => (
                            <SeoForByChar
                                key={letter}
                                char={letter}
                                paths={paths}
                                convertStrings="/ppc-for/"
                            />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-blue-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Don’t See Your Industry Listed?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            We work with businesses across all industries. Talk to us about your PPC goals—
                            we’ll tailor a strategy that performs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                            >
                                Get Free PPC Consultation
                            </Link>
                            <Link
                                href="/ppc-services"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                            >
                                View Main PPC Services
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
}

export default page
