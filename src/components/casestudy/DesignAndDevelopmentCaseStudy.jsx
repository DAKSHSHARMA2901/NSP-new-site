
'use client'
import React, { useState } from 'react'
import { GoChevronRight, GoPlus } from '@/lib/react-icons-go-shim'
import Header from '../Header';
import Footer from '../Footer';
import Newreadmorebutton from '../../components/Newreadmorebutton';
import WebdesignPricing from '../../components/pricing/WebdesignPricing';
import EcommercePricing from '../../components/pricing/EcommercePricing';
import WebApplicationPricing from '../../components/pricing/WebApplicationPricing';
import OnlineMarketPlacePricing from '../../components/pricing/OnlineMarketPlacePricing';

const DesignAndDevelopmentCaseStudy = (props) => {
    const [logged, setLogged] = useState(1);

    const Alltoggle = () => setLogged(1)
    const WebDesigntoggle = () => setLogged(2)
    const Developmenttoggle = () => setLogged(3)
    const Marketingtoggle = () => setLogged(4)

    const data = [
        {
            id: 0,
            icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
            statement: `What is design and development for ${props.heading}?`,
            paragraph: `Design and development for ${props.heading} involves creating custom websites and applications tailored specifically to meet the unique needs of the ${props.heading} industry. Our comprehensive approach includes user experience design, responsive web development, and industry-specific functionality that drives results and enhances online presence.`
        },
        {
            id: 1,
            icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
            statement: `Why choose professional web design for ${props.heading}?`,
            paragraph: `Professional web design for ${props.heading} ensures your business stands out in a competitive market. We understand the specific requirements and challenges of the ${props.heading} industry, creating websites that not only look great but also convert visitors into customers and support your business goals.`
        },
        {
            id: 2,
            icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
            statement: `What technologies do we use for ${props.heading} websites?`,
            paragraph: `We leverage cutting-edge technologies including React.js, Next.js, WordPress, Shopify, and custom development frameworks to create powerful, scalable websites for ${props.heading}. Our technology stack ensures fast loading times, excellent SEO performance, and seamless user experiences across all devices.`
        },
        {
            id: 3,
            icon: <GoPlus style={{ marginTop: '15px' }} size={25} />,
            statement: `How long does it take to develop a website for ${props.heading}?`,
            paragraph: `The timeline for developing a website for ${props.heading} varies based on complexity and requirements. Typically, a standard business website takes 4-6 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed project timelines during our consultation process.`
        }
    ];

    const paragraph = `We specialize in creating exceptional web design and development solutions specifically tailored for ${props.heading}. Our comprehensive approach combines creative design with robust functionality to deliver websites that not only look stunning but also drive business results.

Our expertise in ${props.heading} web design encompasses everything from initial concept and wireframing to final deployment and ongoing maintenance. We understand the unique challenges and opportunities within the ${props.heading} industry, allowing us to create websites that truly resonate with your target audience and support your business objectives.

Whether you need a simple informational website, a complex e-commerce platform, or a custom web application, our team has the skills and experience to bring your vision to life. We use the latest technologies and best practices to ensure your website is fast, secure, and optimized for search engines.

Our design process is collaborative and transparent, involving you at every step to ensure the final product exceeds your expectations. From responsive design that works flawlessly on all devices to user experience optimization that converts visitors into customers, we handle every aspect of your web presence with professionalism and expertise.`;


    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)'}}>
                        Custom Web Design for {props.heading}
                    </h1>
                    <p className="text-white text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                        Professional web design and development services tailored specifically for the {props.heading} industry
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Design & Development Services</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive web solutions designed to elevate your {props.heading} business online
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Responsive Web Design</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Create stunning, mobile-first websites that provide exceptional user experiences across all devices and screen sizes for your {props.heading} business.
                        </p>
                        <div className="flex items-center text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                            <GoChevronRight className="mr-1" />
                            <span className="font-medium">Learn More</span>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Build powerful, scalable web applications using modern technologies like React.js, Next.js, and Node.js tailored for {props.heading} requirements.
                        </p>
                        <div className="flex items-center text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                            <GoChevronRight className="mr-1" />
                            <span className="font-medium">Learn More</span>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Develop robust online stores with secure payment processing, inventory management, and customer account features perfect for {props.heading} businesses.
                        </p>
                        <div className="flex items-center text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                            <GoChevronRight className="mr-1" />
                            <span className="font-medium">Learn More</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Our Process</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Create Your {props.heading} Website</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We analyze your {props.heading} business requirements, target audience, and goals to create a comprehensive project roadmap.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Prototyping</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Create wireframes and visual designs that reflect your brand and provide optimal user experience for {props.heading} visitors.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Development & Testing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Build your website using modern technologies, ensuring fast performance, security, and compatibility across all devices.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch & Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deploy your website and provide ongoing maintenance, updates, and support to ensure continued success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our {props.heading} Web Design Services?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We deliver exceptional results through industry expertise, cutting-edge technology, and dedication to your success
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                                <p className="text-gray-600">Deep understanding of {props.heading} industry requirements and best practices.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
                                <p className="text-gray-600">Responsive designs that work perfectly on all devices and screen sizes.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Optimized</h3>
                                <p className="text-gray-600">Built-in SEO best practices to help your {props.heading} website rank higher.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Loading</h3>
                                <p className="text-gray-600">Optimized for speed and performance to reduce bounce rates and improve user experience.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                                <p className="text-gray-600">Enterprise-grade security measures and reliable hosting solutions.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                                <p className="text-gray-600">Comprehensive maintenance and support to keep your website running smoothly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Pricing Plans</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Perfect Plan for Your {props.heading} Website</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Flexible pricing options designed to meet the specific needs and budget of your {props.heading} business
                        </p>
                    </div>
                    
                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-2 rounded-lg shadow-sm flex space-x-2">
                            <button 
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    logged === 1 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                onClick={Alltoggle}
                            >
                                Web Design
                            </button>
                            <button 
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    logged === 2 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                onClick={WebDesigntoggle}
                            >
                                E-commerce
                            </button>
                            <button 
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    logged === 3 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                onClick={Developmenttoggle}
                            >
                                Web Application
                            </button>
                            <button 
                                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                                    logged === 4 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                onClick={Marketingtoggle}
                            >
                                Online Marketplaces
                            </button>
                        </div>
                    </div>
                    
                    <div className="transition-all duration-300">
                        {logged === 1 ? <WebdesignPricing /> : 
                         logged === 2 ? <EcommercePricing /> : 
                         logged === 3 ? <WebApplicationPricing /> : 
                         <OnlineMarketPlacePricing />}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your {props.heading} Business Online?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's discuss your project and create a website that drives results for your {props.heading} business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Free Consultation
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            View Our Portfolio
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ/Read More Section */}
            <div className="max-w-7xl mx-auto py-16 px-4" id='readmore'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions About {props.heading} Web Design
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get answers to common questions about our web design and development services for {props.heading} businesses
                    </p>
                </div>
                <Newreadmorebutton text={paragraph} maxLength={400} QuesAns={data} />
            </div>
            <Footer />
        </>
    )
}

export default DesignAndDevelopmentCaseStudy
