'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ContentMarketingServices() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqData = [
        {
            id: 0,
            question: 'What does a content marketing services agency do?',
            answer: 'A content marketing agency creates and implements strategies designed to produce engaging, valuable content that attracts, educates, and converts target audiences into customers.'
        },
        {
            id: 1,
            question: 'How can a content marketing agency help my business grow?',
            answer: 'By building brand awareness, driving targeted website traffic, enhancing SEO efforts, and generating leads, a content marketing agency can help your business achieve measurable growth.'
        },
        {
            id: 2,
            question: 'What types of content do content marketing agencies create?',
            answer: 'Agencies produce various types of content, including blogs, videos, social media posts, infographics, eBooks, case studies, and more, tailored to your business goals.'
        },
        {
            id: 3,
            question: 'How do I choose the right content marketing agency for my business?',
            answer: 'Look for an agency with industry experience, proven results, customized strategies, and alignment with your brand\'s voice and objectives.'
        },
        {
            id: 4,
            question: 'What industries do content marketing agencies specialize in?',
            answer: 'Content marketing agencies typically serve diverse industries such as technology, healthcare, SaaS, e-commerce, finance, and more, using tailored strategies for each sector.'
        }
    ];

    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Content Marketing Services
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100">
                                Drive Engagement, Strategy & Growth with SEO-Optimized Content Creation
                            </p>
                        </div>
                    </div>
                </section>

                {/* Service Cards Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Content Marketing Card */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
                                <p className="text-gray-600 mb-4">NSP Global Services is a leading digital marketing agency that specializes in content marketing for startups and small businesses. We have a team of content marketing experts who have worked with clients across various industries and niches.</p>
                                <a href="#readmore" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                                    Read More <span className="ml-1">→</span>
                                </a>
                            </div>

                            {/* PPC Services Card */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">PPC Services</h3>
                                <p className="text-gray-600 mb-4">PPC is one of the most effective and efficient ways to reach your target audience and grow your business online. It would help to have a trusted and reliable PPC agency like NSP Global Services to handle your PPC campaigns.</p>
                                <Link href="/ppc-services" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                                    Read More <span className="ml-1">→</span>
                                </Link>
                            </div>

                            {/* SEO Advertising Card */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Advertising</h3>
                                <p className="text-gray-600 mb-4">We are NSP Global Services, a digital marketing agency that specializes in SEO. We help businesses of all sizes and industries improve their visibility, traffic, and conversions on search engines.</p>
                                <Link href="/seo-services" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                                    Read More <span className="ml-1">→</span>
                                </Link>
                            </div>

                            {/* Creative Agency Card */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Agency</h3>
                                <p className="text-gray-600 mb-4">Unlock your brand's creative potential with our innovative and strategic creative services. Our talented team of designers, writers, and strategists will collaborate closely with you to bring your vision to life.</p>
                                <Link href="/design-development" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                                    Read More <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-blue-600 font-semibold mb-2">PROCESS</p>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow your business with strategic content marketing</h2>
                                <p className="text-gray-600 text-lg">Content marketing is the art and science of creating and distributing valuable, relevant, and engaging content for your target audience. Content marketing helps you attract, educate, and convert prospects into loyal customers.</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        <Link href="/content-marketing-services/seo-content-writing" className="hover:text-blue-600">SEO Content Marketing</Link>
                                    </h3>
                                    <p className="text-gray-600">We create content that is optimized for search engines and users, using keyword research, <Link href="/seo-services/on-page-seo" className="text-blue-600 hover:underline">on-page SEO</Link>, off-page SEO, and <Link href="/seo-services/technical-seo" className="text-blue-600 hover:underline">technical SEO</Link>. We also conduct SEO audits to identify and fix any issues that may affect your site's ranking and visibility.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Content Audit</h3>
                                    <p className="text-gray-600">We analyze your existing content and identify gaps, opportunities, and areas for improvement. We also provide recommendations on how to optimize your content for SEO, readability, and conversion.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Content Calendar</h3>
                                    <p className="text-gray-600">We create a content calendar that outlines the topics, formats, and deadlines for your content production. We also help you schedule and publish your content across various channels and platforms.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Content Distribution</h3>
                                    <p className="text-gray-600">We help you reach and engage your target audience by distributing your content through email, social media, paid ads, and other relevant channels. We also monitor and measure the impact of your content distribution on your traffic, leads, and sales.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">5</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Content Repurposing</h3>
                                    <p className="text-gray-600">We help you extend the lifespan and value of your content by repurposing it into different formats and mediums. For example, we can turn a blog post into a video, an ebook into a webinar, or a case study into a podcast.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-blue-600 font-semibold mb-2">Pricing Plans</p>
                                <h2 className="text-4xl font-bold text-gray-900">Pick A Plan that Suits</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Basic Plan */}
                                <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">BASIC</h3>
                                        <div className="mb-4">
                                            <span className="text-5xl font-bold text-gray-900">$149</span>
                                            <span className="text-gray-600">/month</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Writers with 0-2 years experience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Ideal for SEO Content</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Preferred for Blogs and Product Descriptions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Limited research</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Content proofreading</span>
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Signup Now
                                    </Link>
                                </div>

                                {/* Standard Plan */}
                                <div className="bg-blue-50 rounded-lg p-8 shadow-xl border-2 border-blue-600 relative">
                                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                        POPULAR
                                    </div>
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">STANDARD</h3>
                                        <div className="mb-4">
                                            <span className="text-5xl font-bold text-gray-900">$299</span>
                                            <span className="text-gray-600">/month</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Writers with 3-5 years experience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Deeper research and niche topics</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Ideal for educating your audience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Editing and plagiarism checks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Two rounds of revisions</span>
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Signup Now
                                    </Link>
                                </div>

                                {/* Elite Plan */}
                                <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">ELITE</h3>
                                        <div className="mb-4">
                                            <span className="text-5xl font-bold text-gray-900">$499</span>
                                            <span className="text-gray-600">/month</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Our most experienced Writers</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Ideal for building Thought Leadership</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Editing and plagiarism checks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Build your own separate pool of favourite Writers</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Two rounds of revisions</span>
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Signup Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xl mb-4">We Are Here For You</p>
                            <h2 className="text-4xl font-bold mb-6">Let's Get Back to Work</h2>
                            <p className="text-xl text-blue-100 mb-8">Reach out to us today, and Let's start crafting your success story together.</p>
                            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Detailed Content Section */}
                <section id="readmore" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto prose prose-lg">
                            <h2>Content Marketing Services at NSP Global Services</h2>
                            <p>Content marketing is a game-changer in the digital world, serving as the foundation for building meaningful connections with your audience. It's about creating valuable, targeted, and engaging content to attract, inform, and convert your prospects into loyal customers. With the rise of online competition, businesses need strategic content marketing services to stand out. Whether you're a startup or a global enterprise, effective content marketing plays a crucial role in driving traffic, improving brand visibility, and fostering long-term growth. NSP Global Services helps you stay ahead by delivering tailored solutions that achieve measurable results.</p>

                            <h2>Why Choose NSP Global Services?</h2>
                            <p>NSP Global Services isn't just another content marketing agency; we are your strategic partner in growing your business. With a team of industry-experienced experts, we create impactful content that resonates with your audience. From being a social media content creation agency to offering a complete range of services as a content writing agency, we deliver unmatched flexibility and expertise. When you choose NSP, you gain access to data-driven strategies, tailored b2b content strategies, and a creative approach that aligns with your goals. We pride ourselves on being pioneers in crafting innovative digital marketing content.</p>

                            <h2>Driving Business Growth with NSP Global Services</h2>
                            <p>Your content marketing strategy needs to do more than just exist; it needs to work actively to grow your business. That's where NSP Global Services comes in. We specialize in creating comprehensive campaigns that integrate SEO-friendly content, targeted social media strategies, and engaging storytelling. Whether you're looking for a SaaS content marketing agency or exploring new ways to engage clients through content marketing in digital marketing, we design solutions that drive measurable results. Our goal is simple—to help you achieve higher website traffic, increased lead generation, and stronger brand loyalty.</p>

                            <h2>Key Benefits of Our Content Marketing Services</h2>
                            <p>Choosing NSP Global Services for your content marketing needs gives you access to a wide range of benefits, including:</p>
                            <ul>
                                <li><strong>Custom Content Creation</strong> - From blogs to videos, we craft content that highlights your brand's unique voice.</li>
                                <li><strong>SEO Optimization</strong> - As an experienced <a href="https://www.nspglobalservices.com/seo-services">SEO content agency</a>, we ensure your content ranks well on search engines.</li>
                                <li><strong>Targeted Social Media Management</strong> - With our expertise as a social media content agency, we distribute your content effectively to engage your audience.</li>
                                <li><strong>Scalable Strategies</strong> - Whether you're a small business or a growing enterprise, our approaches evolve alongside your requirements.</li>
                                <li><strong>Comprehensive Support</strong> - From planning to execution and analytics, we handle every aspect of your campaign.</li>
                            </ul>
                            <p>Our structured approach ensures your content is both impactful and actionable across all platforms, making us a top choice among content creation agencies.</p>

                            <h2>Why NSP Global Services Stands Out</h2>
                            <p>At NSP Global Services, we believe in combining creativity with b2b content strategy. Our distinct approach is what sets us apart:</p>
                            <ul>
                                <li><strong>Industry Expertise</strong> - Having worked across various industries, we bring deep insights and adaptability to each project.</li>
                                <li><strong>Holistic Services</strong> - From being your go-to social media content creation agency to delivering robust b2b content strategies, we cover it all.</li>
                                <li><strong>Measurable Results</strong> - Our digital marketing content strategies are data-backed and focused on achieving your business goals.</li>
                                <li><strong>Client-Centric Approach</strong> - We understand that every brand is unique, which is why our content marketing agency tailors solutions to fit your specific needs.</li>
                            </ul>
                            <p>If you're ready to elevate your online presence and drive meaningful results, NSP Global Services is here to make it happen. Contact us today to learn how we can transform your business with our content marketing services.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-blue-600 font-semibold mb-2">Frequently Asked Questions</p>
                                <h2 className="text-4xl font-bold text-gray-900">All that Need to Know</h2>
                            </div>

                            <div className="space-y-4">
                                {faqData.map((faq) => (
                                    <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 pr-8">{faq.id + 1}. {faq.question}</span>
                                            <svg
                                                className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${openFaq === faq.id ? 'transform rotate-45' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                        {openFaq === faq.id && (
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