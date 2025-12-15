'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { WEBSITE_DEV_LISTING } from '@/lib/paths';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MdEmail } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'

export default function CreativeDesign() {
    const form = useRef<HTMLFormElement>(null);
    const [selection, setSelection] = useState<number | null>(null);
    const [showFullContent, setShowFullContent] = useState(false);

    const faqData = [
        {
            id: 0,
            question: 'What is website design & development, and why is it important?',
            answer: 'Website design & development involves creating and building websites that combine visual appeal with functional programming. It\'s crucial because your website serves as your digital storefront, representing your brand 24/7 and often being the first interaction potential customers have with your business. A well-designed and developed website enhances credibility, improves user experience, and drives conversions.'
        },
        {
            id: 1,
            question: 'What are the key principles of effective website design?',
            answer: 'The key principles include responsive design (mobile-friendly), fast loading speeds, intuitive navigation, clear call-to-actions, consistent branding, accessibility, and user-centered design. These principles ensure that visitors can easily find information, complete desired actions, and have a positive experience across all devices.'
        },
        {
            id: 2,
            question: 'How long does it take to design and develop a website?',
            answer: 'Website development timelines vary based on complexity and requirements. A simple business website typically takes 4-6 weeks, while complex e-commerce sites or custom applications can take 8-16 weeks or more. Factors affecting timeline include number of pages, custom features, content preparation, feedback cycles, and integration requirements.'
        },
        {
            id: 3,
            question: 'What technologies and platforms do you use for web development?',
            answer: 'We use modern technologies including React, Next.js, Node.js, HTML5, CSS3, JavaScript, and various CMS platforms like WordPress, Shopify, and custom solutions. Our technology stack is chosen based on your specific needs, ensuring scalability, security, and performance optimization.'
        },
        {
            id: 4,
            question: 'Do you provide ongoing website maintenance and support?',
            answer: 'Yes, we offer comprehensive website maintenance and support services including regular updates, security monitoring, performance optimization, content updates, backup management, and technical support. Our maintenance plans ensure your website remains secure, fast, and up-to-date with the latest technologies.'
        },
        {
            id: 5,
            question: 'How do you ensure my website is SEO-friendly?',
            answer: 'We build SEO best practices into every website from the ground up, including clean code structure, fast loading speeds, mobile responsiveness, proper heading hierarchy, meta tags optimization, XML sitemaps, and schema markup. We also ensure your site is easily crawlable by search engines and follows Google\'s guidelines for better search rankings.'
        }
    ];

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
                    publicKey: 'n--h-ZLHb25m5t0A1',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert('Message sent successfully!');
                        form.current?.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        alert('Failed to send message. Please try again.');
                    },
                );
        }
    };

    const toggle = (i: number) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Website Design & Development Services
                            </h1>
                            <p className="text-xl md:text-2xl text-purple-100">
                                Elevate Your Brand with Our Expert Website Design & Development Services
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                            {/* Left Column - Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Overview */}
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        As a leading website design and development company, we specialize in creating powerful digital experiences that elevate brands and captivate audiences. Whether you're seeking a web design agency near you or a full-service development team to bring your vision to life, NSP is here to exceed your expectations. Our team of expert web designers and developers is dedicated to crafting unique and compelling websites that set your brand apart in today's competitive digital landscape.
                                    </p>
                                </div>

                                {/* Key Factors */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Factors</h2>
                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                            <div className="flex items-start mb-3">
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Responsive Website Design</h3>
                                            </div>
                                            <p className="text-gray-600">Your website is your digital storefront, and first impressions matter. Our responsive web design services combine aesthetics with functionality, ensuring a seamless user experience across all devices that keeps visitors engaged and converts them into loyal customers.</p>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                            <div className="flex items-start mb-3">
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Custom Web Development</h3>
                                            </div>
                                            <p className="text-gray-600">Build powerful, scalable web applications tailored to your business needs. From e-commerce platforms to custom management systems, we develop robust solutions that drive business growth and enhance user experiences.</p>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                            <div className="flex items-start mb-3">
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">E-commerce Development</h3>
                                            </div>
                                            <p className="text-gray-600">Launch your online store with our comprehensive e-commerce development services. We create secure, user-friendly shopping experiences that maximize conversions and provide seamless payment processing and inventory management.</p>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                            <div className="flex items-start mb-3">
                                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">Mobile App Development</h3>
                                            </div>
                                            <p className="text-gray-600">Extend your digital presence with native and cross-platform mobile applications. We develop intuitive, feature-rich mobile apps that provide exceptional user experiences and help you reach customers on their preferred devices.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Benefits */}
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                                    <ul className="space-y-4">
                                        {[
                                            {
                                                title: 'Technical Excellence',
                                                text: 'At NSP, technical excellence isn\'t just a buzzword; it\'s our driving force. Our team of expert web developers and designers is passionate about creating cutting-edge solutions, ensuring that your digital presence stands out in a crowded marketplace.'
                                            },
                                            {
                                                title: 'Tailored Solutions',
                                                text: 'As one of the top website design & development agencies, we understand that every business is unique. That\'s why we take a personalized approach to every project, crafting bespoke web solutions that perfectly align with your business goals and objectives.'
                                            },
                                            {
                                                title: 'Strategic Vision',
                                                text: 'Beyond aesthetics, our team brings a strategic mindset to every project. We go beyond surface-level design to understand your business goals, target audience, and competitive landscape, ensuring that our websites drive tangible results and business growth.'
                                            },
                                            {
                                                title: 'Full-Stack Development',
                                                text: 'From frontend design to backend development and everything in between, NSP offers a comprehensive suite of web development services to meet all your needs under one roof. Our integrated approach ensures seamless functionality across all components, delivering robust and scalable solutions.'
                                            },
                                            {
                                                title: 'Collaborative Partnership',
                                                text: 'We believe in the power of collaboration. When you choose NSP as your website design & development agency, you\'re not just hiring a service provider; you\'re gaining a trusted partner dedicated to your success. We work closely with you every step of the way, listening to your feedback and incorporating your vision into our solutions.'
                                            },
                                            {
                                                title: 'Proven Track Record',
                                                text: 'With a portfolio of successful projects and satisfied clients, NSP has established itself as a trusted name in the web development industry. Our track record speaks for itself, showcasing our ability to deliver high-quality websites and applications that exceed expectations and drive business growth.'
                                            }
                                        ].map((benefit, index) => (
                                            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">
                                                    <strong className="text-gray-900">{benefit.title}:</strong> {benefit.text}
                                                </span>
                                            </li>
                                        ))}
                                        <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                                            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">
                                                We pride ourselves on offering personalized website design & development services tailored to meet your unique business needs. Whether you need a new website, e-commerce platform, or complete digital transformation, we've got you covered. Get in touch with NSP Website Design & Development Services today and let's bring your digital vision to life!
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Stats */}
                                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-6">Neat Outcome</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">95%</div>
                                            <div className="text-purple-100">Increased Success Rate Per Month</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">90%</div>
                                            <div className="text-purple-100">Increased Success Rate Per Month</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">98%</div>
                                            <div className="text-purple-100">Increased Success Rate Per Month</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Sidebar */}
                            <div className="space-y-6">
                                {/* Services Menu */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Services</h4>
                                    <ul className="space-y-2">
                                        {[
                                            { name: 'E-commerce SEO', link: '/seo-services/ecommerce-seo' },
                                            { name: 'Small business SEO', link: '/seo-services/small-business-seo' },
                                            { name: 'Local SEO', link: '/seo-services/local-seo' },
                                            { name: 'Nationwide SEO', link: '/seo-services/nationwide-seo' },
                                            { name: 'Mobile SEO', link: '/seo-services/mobile-seo' },
                                            { name: 'Shopify SEO', link: '/seo-services/shopify-seo' }
                                        ].map((service, index) => (
                                            <li key={index}>
                                                <Link href={service.link} className="text-gray-700 hover:text-purple-600 hover:pl-2 transition-all flex items-center">
                                                    <span className="mr-2">→</span> {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact Form */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Get A Quote</h4>
                                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                        <input 
                                            type="text" 
                                            name="user_name"
                                            placeholder="Your Name" 
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        />
                                        <input 
                                            type="email" 
                                            name="user_email"
                                            placeholder="Your Email" 
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        />
                                        <textarea 
                                            name="message"
                                            placeholder="Enter your message" 
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        />
                                        <button 
                                            type="submit"
                                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Need Help */}
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h4>
                                    <p className="text-gray-700 mb-4">Trust NSP Website Design & Development Services for all your web development needs, and let us help you create a powerful digital presence.</p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-3">
                                            <MdEmail size={24} />
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-600">Email Us</span>
                                            <p className="font-semibold text-gray-900">info@nspglobalservices.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Content Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Link to Design Development For */}
                            <div className="mb-8 text-center">
                                <Link 
                                    href={WEBSITE_DEV_LISTING}
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Website Design & Development Services
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Design & Development Services at NSP Global Services</h2>
                                
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900">Importance of a Well-Designed Website</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Your website is more than just an online address; it's the face of your business and a powerful tool to establish credibility. A well-designed website creates the first impression, encourages user engagement, and helps convert visitors into loyal customers. At NSP Global Services, we understand the significance of exceptional design tailored to your unique business goals. Whether you're searching for "web designers near me" or seeking a trusted website design company, your search ends here.
                                    </p>

                                    {showFullContent && (
                                        <>
                                            <h3 className="text-xl font-bold text-gray-900">Types of Websites for Different Business Needs</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Every business is unique, and so are its website needs. From e-commerce platforms to informative corporate websites, we specialize in creating websites for all kinds of industries. Whether you need an agile, custom-made solution or ready-to-launch platforms like WordPress or Shopify, our website development company caters to small startups and large enterprises alike. Count on NSP Global Services to identify and deliver the perfect web solution for your business.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">Key Features of a High-Quality Website</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                What makes a website stand out? For us, it's a seamless blend of visual appeal, robust functionality, and optimized performance. A high-quality website should be responsive, meaning it works flawlessly across all devices, including mobiles, tablets, and desktops. It should load quickly, offer intuitive navigation, and include strong security features. At NSP, a leading web design agency, we ensure every project includes these essential features and more.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">Technologies Used in Web Development</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Staying updated with the latest web development tools is key to creating competitive websites. Our experts use advanced technologies such as ReactJS, WordPress, and Shopify to craft scalable, efficient, and interactive solutions. Whether it's custom coding for a design-intensive project, our team blends creativity and technical expertise to deliver innovative projects that set us apart as a premier website design and web development company.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">Web Design Trends in 2025</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Web design continues to evolve, and NSP Global Services ensures that your website is ahead of the curve. Dominant trends in 2025 include immersive user experiences, voice-powered interfaces, bold typography, and AI-driven personalization. Our team not only incorporates these trends but builds websites that adapt to changes over time, keeping your business relevant in an ever-competitive digital environment.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">Importance of UX/UI in Website Design</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                A great website isn't just about looks; it's about how it works. User Experience (UX) and User Interface (UI) design are at the core of our approach. By focusing on easy navigation, clean layouts, and interactive elements, we ensure that visitors enjoy every click on your site. Superior UX/UI enhances user retention and helps turn traffic into conversions, making our website design services essential for businesses that aim for excellence.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">SEO and Performance Optimization for Websites</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Building the website is step one; ensuring it reaches your target audience is the real challenge. This is where SEO (Search Engine Optimization) and performance optimization come in. NSP Global Services provides on-page and technical SEO practices so your site ranks on search engines and connects with potential customers looking for "web designers near me" or "web development company." Coupled with performance optimization, your website will deliver exceptional results.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">Website Maintenance & Support Services</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Creating a website is only the beginning. To ensure your site remains secure, up-to-date, and error-free, we offer comprehensive website maintenance and support services. From regular updates and backups to continuous monitoring and troubleshooting, our dedicated team ensures your site operates at peak performance. With ongoing support, your online presence remains robust, even as technology evolves.
                                            </p>

                                            <h3 className="text-xl font-bold text-gray-900">How to Choose the Right Web Design & Development Agency</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                With so many options available, choosing the right partner for your website design can feel overwhelming. Here's why NSP Global Services stands out: We combine years of experience with cutting-edge skills to deliver tailored solutions. Whether you need a professional website design or advanced e-commerce functionality, we have a proven track record of helping businesses succeed online. Trust NSP Global Services for all your website design and development needs. Our expert team is committed to turning your vision into reality. Contact us today and take your online presence to the next level!
                                            </p>
                                        </>
                                    )}

                                    <button
                                        onClick={() => setShowFullContent(!showFullContent)}
                                        aria-expanded={showFullContent}
                                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                                    >
                                        {showFullContent ? 'Read Less' : 'Read More'}
                                        <svg 
                                            className={`w-4 h-4 ml-2 transition-transform ${showFullContent ? 'rotate-180' : ''}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                                <p className="text-gray-600">Everything you need to know about our website design & development services</p>
                            </div>

                            <div className="space-y-4">
                                {faqData.map((faq) => (
                                    <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggle(faq.id)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                            <svg
                                                className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${selection === faq.id ? 'transform rotate-45' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                        {selection === faq.id && (
                                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                                <p className="text-gray-700">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                
            </div>
            <Footer />
        </>
    );
}