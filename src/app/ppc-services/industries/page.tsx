'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PPCServicesByChar from '@/components/PPCServicesByChar';

export default function PPCIndustriesPage() {
    const paths = [
        '/ppc-services/american-grocery-store',
        '/ppc-services/amusement-park-ride',
        '/ppc-services/water-purification-company',
        '/ppc-services/water-ski-shop',
        '/ppc-services/water-skiing-club',
        '/ppc-services/water-skiing-instructor',
        '/ppc-services/water-skiing-service',
        '/ppc-services/water-softening-equipment-supplier',
        '/ppc-services/water-testing-service',
        '/ppc-services/water-treatment-plant',
        '/ppc-services/water-treatment-supplier',
        '/ppc-services/water-utility-company',
        '/ppc-services/water-works',
        '/ppc-services/water-works-equipment-supplier',
        '/ppc-services/web-hosting-company',
        '/ppc-services/website-designer',
        '/ppc-services/wedding-bakery',
        '/ppc-services/wedding-buffet',
        '/ppc-services/wedding-chapel',
        '/ppc-services/wedding-dress-rental-service',
        '/ppc-services/wedding-photographer',
        '/ppc-services/wedding-planner',
        '/ppc-services/wedding-service',
        '/ppc-services/wedding-souvenir-shop',
        '/ppc-services/wedding-store',
        '/ppc-services/wedding-venue',
        '/ppc-services/weigh-station',
        '/ppc-services/weight-loss-service',
        '/ppc-services/weightlifting-area',
        '/ppc-services/well-drilling-contractor',
        '/ppc-services/wellness-center',
        '/ppc-services/wellness-hotel',
        '/ppc-services/wellness-program',
        '/ppc-services/wesleyan-church',
        '/ppc-services/western-apparel-store',
        '/ppc-services/whale-watching-tour-agency',
        '/ppc-services/wholesale-bakery',
        '/ppc-services/wholesale-drugstore',
        '/ppc-services/wholesale-florist',
        '/ppc-services/wholesale-food-store',
        '/ppc-services/wholesale-grocer',
        '/ppc-services/wholesale-jeweler',
        '/ppc-services/wholesale-market',
        '/ppc-services/wholesale-plant-nursery',
        '/ppc-services/wholesaler',
        '/ppc-services/wi-fi-spot',
        '/ppc-services/wildlife-park',
        '/ppc-services/wildlife-refuge',
        '/ppc-services/wildlife-rescue-service',
        '/ppc-services/willow-basket-manufacturer',
        '/ppc-services/wind-turbine-builder',
        '/ppc-services/window-cleaning-service',
        '/ppc-services/window-installation-service',
        '/ppc-services/window-supplier',
        '/ppc-services/window-tinting-service',
        '/ppc-services/window-treatment-store',
        '/ppc-services/wine-store',
        '/ppc-services/wine-wholesaler-and-importer',
        '/ppc-services/winemaking-supply-store',
        '/ppc-services/winery',
        '/ppc-services/wing-chun-school',
        '/ppc-services/womens-clothing-store',
        '/ppc-services/womens-college',
        '/ppc-services/womens-health-clinic',
        '/ppc-services/womens-organization',
        '/ppc-services/womens-personal-trainer',
        '/ppc-services/womens-shelter',
        '/ppc-services/womens-protection-service',
        '/ppc-services/wood-and-laminate-flooring-supplier',
        '/ppc-services/wood-floor-installation-service',
        '/ppc-services/wood-floor-refinishing-service',
        '/ppc-services/wood-frame-supplier',
        '/ppc-services/wood-stove-shop',
        '/ppc-services/wood-supplier',
        '/ppc-services/wood-working-class',
        '/ppc-services/woodworker',
        '/ppc-services/woodworking-supply-store',
        '/ppc-services/wool-store',
        '/ppc-services/work-clothes-store',
        '/ppc-services/workers-club',
        '/ppc-services/working-womens-hostel',
        '/ppc-services/shared-use-commercial-kitchen',
        '/ppc-services/sharpening-service',
        '/ppc-services/shed-builder',
        '/ppc-services/smoke-shop',
        '/ppc-services/snack-bar',
        '/ppc-services/snow-removal-service',
        '/ppc-services/toy-store',
        '/ppc-services/toyota-dealer',
        '/ppc-services/tractor-dealer',
        '/ppc-services/toy-manufacturer',
        '/ppc-services/waterproofing-service',
        '/ppc-services/wax-museum',
        '/ppc-services/wax-supplier',
        '/ppc-services/waxing-hair-removal-service',
        '/ppc-services/youth-club',
        '/ppc-services/youth-group',
        '/ppc-services/youth-hostel',
        '/ppc-services/youth-organization',
        '/ppc-services/youth-social-services-organization',
        '/ppc-services/zhejiang-restaurant',
        '/ppc-services/zoo',
        '/ppc-services/law-firms',
        '/ppc-services/dentists',
        '/ppc-services/financial-services',
        '/ppc-services/higher-education',
        '/ppc-services/startups',
        '/ppc-services/accountants',
        '/ppc-services/charities',
        '/ppc-services/distributors',
        '/ppc-services/events',
        '/ppc-services/fashion',
        '/ppc-services/food-industry',
        '/ppc-services/healthcare',
        '/ppc-services/local-businesses',
        '/ppc-services/manufacturers',
        '/ppc-services/non-profit',
        '/ppc-services/outdoor-companies',
        '/ppc-services/suppliers',
        '/ppc-services/insurance-agency',
        '/ppc-services/lawyers',
        '/ppc-services/ecommerce',
        '/ppc-services/attorneys',
        '/ppc-services/small-business',
        '/ppc-services/apartments',
        '/ppc-services/doctors',
        '/ppc-services/hotels',
        '/ppc-services/real-estate-investors',
        '/ppc-services/contractors',
        '/ppc-services/plumbers',
        '/ppc-services/real-estate',
        '/ppc-services/industrial-companies',
        '/ppc-services/plastic-surgeons',
        '/ppc-services/realtors',
        '/ppc-services/banks',
        '/ppc-services/brand-awareness',
        '/ppc-services/divorce-attorney',
        '/ppc-services/divorce-lawyers',
        '/ppc-services/drug-rehabs',
        '/ppc-services/ecommerce-sites',
        '/ppc-services/flooring-companies',
        '/ppc-services/fmcg-brands',
        '/ppc-services/funeral-homes',
        '/ppc-services/home-services',
        '/ppc-services/insurance-brokers',
        '/ppc-services/lead-generation',
        '/ppc-services/luxury-hotels',
        '/ppc-services/moving-companies',
        '/ppc-services/packaging',
        '/ppc-services/plumbing-companies',
        '/ppc-services/recruiters',
        '/ppc-services/rehab-centers',
        '/ppc-services/self-storage',
        '/ppc-services/automotive-industry',
        '/ppc-services/pest-control-companies',
        '/ppc-services/aviation',
        '/ppc-services/portable-storage',
        '/ppc-services/appliance-repair',
        '/ppc-services/auto-dealers',
        '/ppc-services/business-consultants',
        '/ppc-services/locksmiths',
        '/ppc-services/mattress-company',
        '/ppc-services/painters',
        '/ppc-services/roofer',
        '/ppc-services/schools',
        '/ppc-services/senior-living',
        '/ppc-services/therapists',
        '/ppc-services/tile-service',
        '/ppc-services/travel-industry',
        '/ppc-services/universities',
        '/ppc-services/veterinarians',
        '/ppc-services/weight-loss',
        '/ppc-services/window-contractors',
        '/ppc-services/landscaping-companies',
        '/ppc-services/medical-clinics',
        '/ppc-services/medical-professionals'
    ];

    const alphabet = 'ABCDEFGHJKLMNOPRSTUVWY'.split('');
    
    // Calculate total services
    const totalServices = paths.length;

    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            PPC Services by Industry
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Find specialized PPC solutions for your specific industry or business type
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/ppc-services"
                                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                            >
                                View All PPC Services
                            </Link>
                            <Link 
                                href="/contact"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gray-50">
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
            </div>

            {/* Industry Services */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Browse PPC Services by Industry
                        </h2>
                        <p className="text-lg text-gray-600">
                            Select your industry to learn more about our specialized PPC solutions
                        </p>
                    </div>

                    {alphabet.map((letter) => (
                        <PPCServicesByChar 
                            key={letter} 
                            char={letter} 
                            paths={paths} 
                            convertStrings="/ppc-services/" 
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Don't See Your Industry Listed?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        We work with businesses across all industries. Contact us to discuss your specific PPC needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Get Free PPC Consultation
                        </Link>
                        <Link 
                            href="/ppc-services"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            View Main PPC Services
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
