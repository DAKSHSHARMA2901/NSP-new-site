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

const faqData = [
    {
        id: 0,
        statement: 'What is Local SEO?',
        paragraph: 'Local SEO is an effective form of search engine optimization (SEO) that helps local businesses, such as restaurants, cafes, fashion stores or salons, to be visible in local online searches. It involves making sure your website is optimized for searches related to "local search engine" and other keywords like "what is local seo", "google local search optimization" or "local effective SEO strategy involves incorporating relevant content based on popular queries to improve website visibility in search results.'
    },
    {
        id: 1,
        statement: 'Why is Local SEO important for local businesses?',
        paragraph: "Local SEO is an important tool for local businesses, as it helps them to increase visibility and grow in their local area. It enables businesses to target a specific region or area through the use of targeted keywords, content and services that are optimised for local search engine results. This allows them to rank higher locally and attract more customers. A good local SEO agency or company can help small businesses strengthen their online presence while building relationships with potential customers in the local area - something no other form of marketing can do."
    },
    {
        id: 2,
        statement: 'What are the key elements of successful Local SEO?',
        paragraph: "Local SEO involves optimizing a business website to appear higher on local search engine results, and can be a powerful tool for small businesses. It is crucial to have accurate and consistent listings across multiple platforms, gain positive customer reviews, develop quality local content, build backlinks from reputable sources, optimize meta-titles and descriptions, conduct keyword research related to the services offered in your area, ensure mobile friendly pages, monitor online reputation management activities and take advantage of Google My Business optimization."
    },
    {
        id: 3,
        statement: 'How can I optimize my website for Local SEO?',
        paragraph: "Optimizing your website for Local SEO is an important process. To get started, make sure to have a local SEO strategy in place and research keywords that are relevant to your business and location. Additionally, make sure you're listed on all major search engines, like Google My Business and Bing Maps. A good seo agency near me can also help you with creating content aimed at local consumers, setting up geo-targeting on custom campaigns, and building citations & linking them back to your website—all critical elements of a successful local SEO strategy."
    },
    {
        id: 4,
        statement: 'What are some common Local SEO mistakes to avoid?',
        paragraph: "Local SEO mistakes to avoid include not optimizing for local keywords, failing to claim directory listings and business profiles, overlooking negative reviews, lacking a local presence on social media networks, mismanaging citations & NAP consistency, and not investing in a professional SEO expert or agency near you. Investing in the right local SEO strategy from an affordable local SEO service can help your small business appear higher in the search engine results leading to increased visibility and more customers."
    },
    {
        id: 5,
        statement: 'How long does it take for Local SEO to produce results?',
        paragraph: "The amount of time it takes for local SEO to produce results depends on your goals, the size of your business, and the competitiveness of your industry. Generally speaking, results from a well-conceived and executed strategy can be seen in three to six months when partnering with an experienced grow local seo agency or local seo company which provides comprehensive services such as seo companies near me, seo agency near me and/or a seo expert near me. In addition, employing best practices for local SEO for small businesses is especially important given its competitive landscape."
    }
]

export default function LocalSEO() {
    const form = useRef<HTMLFormElement>(null);
    const [selection, setSelection] = useState<number | null>(null)

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
                <title>Best Local SEO Services That Drive Customers to Your Doorstep</title>
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/local-seo" />
                <meta property="og:title" content="Best Local SEO Services That Drive Customers to Your Doorstep" />
                <meta property="og:description" content='Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.' />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Best Local SEO Services That Drive Customers to Your Doorstep" />
                <meta name="twitter:description" content='Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.' />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <meta name="description" content='Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.' />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/local-seo" />
            </Head>
            <Header />
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=400&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Local SEO Services Banner" />
                <h1 className={style.title_Local_SEO} style={{ color: 'black' }}>Local SEO Services</h1>
            </div>
            <div className={style.container2}>
                <div className={style.sidebar}>
                    <div className={style.sidebarImage}>
                        <img src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop"} className={style.endImages1} alt="Local SEO Services" />
                    </div>
                    <div className={style.sidebarServices}>
                        <h4 className={style.sidebarTitle}>Services</h4>
                        <ul className={style.servicesList}>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/ecommerce-seo" className={style.serviceLink}>E-commerce SEO</Link>
                            </li>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/mobile-seo" className={style.serviceLink}>Mobile SEO</Link>
                            </li>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/shopify-seo" className={style.serviceLink}>Shopify SEO</Link>
                            </li>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/wordpress-seo" className={style.serviceLink}>WordPress SEO</Link>
                            </li>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/on-page-seo" className={style.serviceLink}>On-Page SEO</Link>
                            </li>
                            <li className={style.serviceItem}>
                                <Link href="/seo-services/technical-seo" className={style.serviceLink}>Technical SEO</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.sidebarQuote}>
                        <h4 className={style.quoteTitle}>Get A Quote</h4>
                        <form ref={form} onSubmit={sendEmail} className={style.quoteForm}>
                            <input placeholder='Your Name' type="text" name="user_name" className={style.formInput} />
                            <input placeholder='Your email' type="email" name="user_email" className={style.formInput} />
                            <textarea name="message" placeholder='Enter your message' className={style.formTextarea} cols={30} rows={10} />
                            <input type="submit" className={style.formButton} value="Send" />
                        </form>
                    </div>
                    <div className={style.sidebarHelp}>
                        <h4 className={style.helpTitle}>Need Help?</h4>
                        <p className={style.helpText}>Ready to Dominate the Market with Our Professional SEO Services? Request a Free Custom Strategy from Our Experts Now!</p>
                        <div className={style.helpContact}>
                            <div className={style.helpIcon}>
                                <MdEmail />
                            </div>
                            <div>
                                <span className={style.contactLabel}>Email Us</span>
                                <p className={style.contactValue}>info@nspglobalservices.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.sidebarOutcomes}>
                        <h3 className={style.outcomesTitle}>Neat Outcome</h3>
                        <div className={style.outcomeBox}>
                            <span className={style.outcomePercent}>95%</span>
                            <span className={style.outcomeLabel}>Increase in website traffic</span>
                        </div>
                        <div className={style.outcomeBox}>
                            <span className={style.outcomePercent}>99%</span>
                            <span className={style.outcomeLabel}>Increase in conversion rates</span>
                        </div>
                        <div className={style.outcomeBox}>
                            <span className={style.outcomePercent}>92%</span>
                            <span className={style.outcomeLabel}>Increase in leads generation</span>
                        </div>
                    </div>
                </div>
                <div className={style.mainContent}>
                    <div className={style.overview}>
                        <h2 className={style.sectionTitle}>Overview</h2>
                        <p className={style.overviewText}>Expanding the business and brand at the local level is now made easy with the help of local SEO. Local SEO will help you rank in your locality so that when people around you searches any keyword related to your business they will find you at the top. Building an online presence of a local business can be difficult as they are not unaware of this, which is why they lack customers that can easily be gained through local SEO, With the help of NSP Global Services&apos; expertise, we can easily help you to build an online presence by implementing relevant keywords, local SEO, content marketing strategy, and more at an affordable price.</p>
                    </div>
                    <div className={style.keyFactors}>
                        <h2 className={style.sectionTitle}>Key Factors</h2>
                        <div className={style.factorItem}>
                            <div className={style.factorHeader}>
                                <MdCheckCircle className={style.factorIcon} />
                                <h4 className={style.factorTitle}>Increased Online Visibility</h4>
                            </div>
                            <p className={style.factorText}>With Local SEO we can help you establish an online presence in your area so that you remain at the top of lists when people look for pertinent services.</p>
                        </div>
                        <div className={style.factorItem}>
                            <div className={style.factorHeader}>
                                <MdCheckCircle className={style.factorIcon} />
                                <h4 className={style.factorTitle}>Targeted Traffic</h4>
                            </div>
                            <p className={style.factorText}>Local SEO mostly only brings traffic that is likely to convert because they are the ones that looked for your services and are looking for the right one, so they are easy to convert into customers.</p>
                        </div>
                        <div className={style.factorItem}>
                            <div className={style.factorHeader}>
                                <MdCheckCircle className={style.factorIcon} />
                                <h4 className={style.factorTitle}>Increased Brand Awareness</h4>
                            </div>
                            <p className={style.factorText}>Through Local SEO, you can establish your brand at the local level and become the trusted and most preferred brand/business in your locality that will leave a great impact on your business.</p>
                        </div>
                        <div className={style.factorItem}>
                            <div className={style.factorHeader}>
                                <MdCheckCircle className={style.factorIcon} />
                                <h4 className={style.factorTitle}>Competitive Advantage</h4>
                            </div>
                            <p className={style.factorText}>With the help of local SEO, you are already one step ahead of other local competitors as when local people will search for something relatable, your website will appear at the top rather than theirs, which will ultimately lead to your benefit.</p>
                        </div>
                    </div>
                    <div className={style.container2div7}>
                        <img src={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Local SEO Service" />
                        <img src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Local SEO Strategy" />
                    </div>
                    <div className={style.keyBenefits}>
                        <h3 className={style.sectionTitle}>Key Benefits</h3>
                        <ul className={style.benefitsList}>
                            <li className={style.benefitItem}>
                                Local SEO will make your search engine ranking better in local queries.
                            </li>
                            <li className={style.benefitItem}>
                                When you&apos;re on the top of the search page, you&apos;ll probably have the highest conversion rates in your local areas.
                            </li>
                            <li className={style.benefitItem}>
                                Local SEO will create awareness of your brand in your local area.
                            </li>
                            <li className={style.benefitItem}>
                                With the help of local SEO, you&apos;ll get higher conversion rates and will be trusted as an authentic and reliable source.
                            </li>
                            <li className={style.benefitItem}>
                                The only option to make yourself stand out in your local area is with the implementation of local SEO and that&apos;s what we are having expertise in, so, what are you waiting for? Contact us now!
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop"} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
                    <div className={style.accordion}>
                        {faqData.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => { toggle(i) }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}><GoPlus size={24} /><h2 className={style.accodion_h2}>{element.statement}</h2></div>
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
