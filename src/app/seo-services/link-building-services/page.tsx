'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import style from '../celebrity-seo/newservices.module.css'
import SeoServiceBased from '@/components/SEOPricing/SeoServiceBased'
import EcommerceSEOPricing from '@/components/SEOPricing/EconnerceSEOPricing'
import SeoEnterprise from '@/components/SEOPricing/SeoEnterprise'

const faqData = [
    {
        id: 0,
        statement: 'What are link building services?',
        paragraph: 'Link building services are a core element of SEO. It involves the acquisition of web-based, inbound links to a website from other sites on the internet. Link building is a time consuming process and requires technical knowledge, so many businesses outsource this service by hiring an experienced link building agency.'
    },
    {
        id: 1,
        statement: 'Why is link building important for SEO?',
        paragraph: "Link building is an integral part of SEO and helps to increase traffic, improve search engine rankings, and build brand authority. It's a process that involves creating high-quality backlinks from other websites or online sources. Through link building, businesses can reach out to relevant audiences."
    },
    {
        id: 2,
        statement: 'What are the different types of link building services available?',
        paragraph: "Link building services are vital tools to help in SEO and digital marketing. Depending on your requirements, there are a variety of types available, including link building for agency, back link service, and best link building service. Many agencies offer affordable link building services that provide high-quality backlinks."
    },
    {
        id: 3,
        statement: 'How do link building services acquire backlinks for my website?',
        paragraph: "Link building services are an invaluable tool for many agencies. They usually acquire backlinks by researching and contacting websites that offer relevant content to your website. By creating content that is useful for others, link building services can acquire high-quality backlinks with great ease."
    },
    {
        id: 4,
        statement: 'What factors should I consider when choosing a link building service?',
        paragraph: "When choosing a link building service, it's important to keep in mind the type of link building you're looking for (what is link building?), and whether your needs align with what an agency or backlink service can provide. You should also consider their track record with other clients, their affordability, and the quality of their back links."
    }
]

export default function LinkBuildingServices() {
    const form = useRef<HTMLFormElement>(null);
    const [selection, setSelection] = useState<number | null>(null)
    // Pricing tabs: 1 - Service Based, 2 - Ecommerce, 3 - Enterprise
    const [pricingTab, setPricingTab] = useState<number>(1)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm('service_xeikd6k', 'template_184dkpm', form.current!, {
                publicKey: 'n--h-ZLHb25m5t0A1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const toggle = (i: number) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }

    return (
        <>
            <Head>
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/link-building-services" />
                <meta property="og:title" content="Drive Traffic and Leads: SEO for Link Building" />
                <meta property="og:description" content="Our SEO services for Link Building drive targeted traffic and leads to boost your business. Get SEO Services in the Link Building." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Drive Traffic and Leads: SEO for Link Building" />
                <meta name="twitter:description" content="Our SEO services for Link Building drive targeted traffic and leads to boost your business. Get SEO Services in the Link Building." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Drive Traffic and Leads: SEO for Link Building</title>
                <meta name="description" content="Our SEO services for Link Building drive targeted traffic and leads to boost your business. Get SEO Services in the Link Building." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/link-building-services" />
            </Head>
            <Header />
            <div className={style.container1}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
                  alt="Link Building Services Banner" 
                />
                <h1 className={style.title_Pininterest}>SEO Services for Link Building</h1>
            </div>

            <div className={style.container2}>
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img 
                          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" 
                          className={style.endImages1} 
                          alt="Link Building Services" 
                        />
                    </div>

                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul className={style.container2div2_ul}>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/seo-keywords-research" className={style.container2_atag}>SEO Keywords Research</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/nationwide-seo" className={style.container2_atag}>Nationwide SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={style.container2div4}>
                        <h4 className={style.container2div2_hfour}>Get A Quote</h4>
                        <form id="quote-form" ref={form} onSubmit={sendEmail} className={style.container2div4_form}>
                            <input 
                              placeholder="Your Name" 
                              type="text" 
                              name="user_name" 
                              className={style.container2div4_input} 
                              required 
                            />
                            <input 
                              placeholder="Your email" 
                              type="email" 
                              name="user_email" 
                              className={style.container2div4_input} 
                              required 
                            />
                            <textarea 
                              name="message" 
                              placeholder="Enter your message" 
                              className={style.container2div4_textarea} 
                              cols={30} 
                              rows={10} 
                              required
                            />
                            <input type="submit" className={style.container2div4_btn} value="Send" />
                        </form>
                    </div>

                    <div className={style.container2div6}>
                        <h4 className={style.container2div6_hfour}>Need Help?</h4>
                        <p className={style.container2div6_ptag}>
                          Sign Up Now and Dominate Your Industry with our Affordable Link Building Services
                        </p>
                        <div className={style.container2div6_icons}>
                            <div className={style.container2div6_icon}>
                                <MdEmail size={24} />
                            </div>
                            <div>
                                <span className={style.container2div6_span}>Email Us</span>
                                <p className={style.container2div6_ptag}>info@nspglobalservices.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.container2div10}>
                        <h3 className={style.container2div10_hthree}>Neat Outcome</h3>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>95%</span>
                            <span className={style.container2div10_span2}>Increase in website traffic</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>98%</span>
                            <span className={style.container2div10_span2}>Increase in conversion rates</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>99%</span>
                            <span className={style.container2div10_span2}>Increase in leads generation</span>
                        </div>
                    </div>
                </aside>

                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.container2div3_hone}>Overview</h2>
                        <p className={style.container2div3_ptag}>
                          In today&apos;s digital landscape, having a strong online presence is crucial for businesses to succeed. An effective link-building strategy is essential to stand out among the competition and improve search engine rankings. Our link-building agency specializes in providing affordable and customized link-building services that help businesses gain visibility and credibility online.
                        </p>
                    </div>

                    <div className={style.container2div5}>
                        <h1 className={style.container2div5_hone}>Key Factors</h1>
                        
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_icon} size={24} />
                            <div>
                                <h4 className={style.keyfactorHeading}>Affordable Link-Building Services</h4>
                                <p className={style.container2div5_blog_p}>
                                  Our link-building agency offers cost-effective solutions suitable for businesses of all sizes. We understand the importance of budget considerations and provide packages that meet your financial requirements without compromising quality.
                                </p>
                            </div>
                        </div>

                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_icon} size={24} />
                            <div>
                                <h4 className={style.keyfactorHeading}>Custom Link-Building Strategies</h4>
                                <p className={style.container2div5_blog_p}>
                                  We develop tailored link-building strategies for each client. With over 20 proven techniques, we create campaigns that align with your specific industry and target audience. This approach ensures that the backlinks we acquire are relevant, authoritative, and effective in boosting your website&apos;s visibility.
                                </p>
                            </div>
                        </div>

                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_icon} size={24} />
                            <div>
                                <h4 className={style.keyfactorHeading}>Expert Outreach Team</h4>
                                <p className={style.container2div5_blog_p}>
                                  Our agency has a dedicated outreach team with extensive experience building relationships with influential publishers. Through genuine and personalized outreach efforts, we establish connections and secure high-quality backlinks from authoritative websites in your industry. This manual approach emphasizes real relationships and earned trust.
                                </p>
                            </div>
                        </div>

                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_icon} size={24} />
                            <div>
                                <h4 className={style.keyfactorHeading}>Results-Driven Approach</h4>
                                <p className={style.container2div5_blog_p}>
                                  We prioritize the success of our clients&apos; link-building campaigns. Setting measurable goals and tracking performance ensures that our efforts generate tangible results. Improved search engine rankings, increased organic traffic, and enhanced online visibility are some of the outcomes we aim to achieve.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.container2div7}>
                        <img 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                          className={style.container2div5_img} 
                          alt="Link Building Service" 
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop" 
                          className={style.container2div5_img} 
                          alt="Link Building Strategy" 
                        />
                    </div>

                    <div className={style.container2div8}>
                        <h3 className={style.container2div8_hthree}>Key Benefits</h3>
                        <ul className={style.container2div8_ul}>
                            <li>
                                <div className={style.container2div8_li}>
                                    <span><strong className={style.keyfactorHeading}>Improved Search Engine Rankings: </strong>
                                      Our link-building services contribute to higher search engine rankings for your website. Backlinks from authoritative websites signal to search engines that your content is valuable and relevant, leading to improved visibility in search results. This increased exposure drives organic traffic and boosted your online presence.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={style.container2div8_li}>
                                    <span><strong className={style.keyfactorHeading}>Enhanced Credibility and Trustworthiness: </strong>
                                      Backlinks act as endorsements from reputable websites, bolstering the credibility and trustworthiness of your site. Search engines perceive these endorsements as votes of confidence, which can positively influence your online reputation and brand image.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={style.container2div8_li}>
                                    <span><strong className={style.keyfactorHeading}>Increased Organic Traffic: </strong>
                                      With improved search engine rankings, your website attracts more organic traffic. This traffic consists of highly targeted visitors actively searching for products or services related to your industry. As a result, you have a higher chance of converting these visitors into customers or clients.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={style.container2div8_li}>
                                    <span><strong className={style.keyfactorHeading}>Expert Guidance and Support: </strong>
                                      Our agency provides expert guidance throughout the link-building process. We offer comprehensive support, addressing any questions or concerns you may have. Additionally, we utilize engaging visuals to explain the strategies and benefits involved, ensuring you clearly understand the link-building process and its impact on your business.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className={style.container2div8_li}>
                                    <span>
                                      By leveraging our affordable services, customized strategies, expert outreach team, and results-driven approach, you can enjoy the benefits of improved search engine rankings, enhanced credibility, increased organic traffic, and expert support in optimizing your online presence.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>

            

            {/* Pricing Section (Tabbed - same design as SEO Services page) */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-10">
                        <p className="text-blue-600 uppercase tracking-wide font-semibold mb-2">Pricing Plans</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pick A Plan that Suits</h2>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-2 rounded-lg shadow-md">
                            <button
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${pricingTab === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setPricingTab(1)}
                                aria-pressed={pricingTab === 1}
                            >
                                SEO Services Based
                            </button>
                            <button
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${pricingTab === 2 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setPricingTab(2)}
                                aria-pressed={pricingTab === 2}
                            >
                                Ecommerce SEO Pricing
                            </button>
                            <button
                                className={`px-6 py-3 rounded-md font-semibold transition-colors ${pricingTab === 3 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setPricingTab(3)}
                                aria-pressed={pricingTab === 3}
                            >
                                Enterprise
                            </button>
                        </div>
                    </div>

                    <div className="text-center">
                        {pricingTab === 1 && <SeoServiceBased />}
                        {pricingTab === 2 && <EcommerceSEOPricing />}
                        {pricingTab === 3 && <SeoEnterprise />}
                    </div>

                    {/* Helper text to guide users to the quote form */}
                    <div className="text-center mt-10">
                        <Link href="#quote-form" className="inline-block text-blue-600 hover:text-blue-700 font-semibold">
                            Prefer a custom quote? Jump to the form →
                        </Link>
                    </div>
                </div>
            </div>

            <div className={style.FAQS}>
                <div>
                    <img 
                      className={style.faq} 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop" 
                      alt="FAQ" 
                    />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
                    <div className={style.accordion}>
                        {faqData.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => toggle(i)}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>
                                        <GoPlus style={{ marginTop: '28px' }} size={25} />
                                        <h2 className={style.accodion_h2}>{element.statement}</h2>
                                    </div>
                                </div>
                                <div className={selection === i ? `${style.contain} ${style.show}` : `${style.contain}`}>
                                    <p className={style.container_accordion_ptag}>{element.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
