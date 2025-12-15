'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import style from '../celebrity-seo/newservices.module.css'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What is an SEO audit?',
        paragraph: 'An SEO audit is a comprehensive evaluation of your website with the aim of improving its performance. It involves an analysis of both technical and non-technical aspects such as site structure, content optimization, internal linking, keyword research, competitive analysis and more.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why is an SEO audit important for my website?',
        paragraph: `A website audit or SEO audit is a process of thorough analysis and evaluation of a website to identify areas where improvements can be made in terms of content, performance, usability and technical aspects. This includes carrying out an effective website audit report which assesses everything from the overall structure to the number and quality of incoming links, loading time, compliance with standards, search engine optimization (SEO) techniques used on the site etc.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What does an SEO audit involve?',
        paragraph: `An SEO audit is a detailed evaluation of all the elements that affect a website's performance in search engine results. It involves looking at both technical factors and content-based factors, such as meta tags, keyword optimization, quality links, page loading speed, URLs structure, site architecture, mobile friendliness and more. It also includes analysis of off-page factors such as link building practices and social media visibility.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How often should I conduct an SEO audit for my website?',
        paragraph: `It is recommended to conduct an SEO audit for your website every 3-6 months, as it is essential to understand what changes have been made, spot any areas of improvement and identify if there are any components that need to be addressed.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Can I perform an SEO audit myself, or do I need to hire a professional?',
        paragraph: `You can perform an SEO audit yourself, but hiring a professional might be more advantageous. Doing so requires knowledge of what a website audit is, how to conduct an SEO audit, and which site audit tool or seo audit template to use such as Google Search Console or other tools like Moz Pro & Ahrefs.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are the key elements analyzed in an SEO audit?',
        paragraph: `An SEO audit is a comprehensive analysis of a website's performance in regards to search engine optimization and rankings. The key elements analyzed include content, technical factors, backlinks, SERP visibility and traffic trends. Additionally, site audits use tools such as Google Search Console and an SEO audit template to pinpoint areas for improvement.`
    }
]

export default function Auditseo() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm('service_xeikd6k', 'template_184dkpm', form.current as HTMLFormElement, {
                publicKey: 'n--h-ZLHb25m5t0A1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                },
            );
    };

    const [selection, setSelection] = useState<number | null>(null)
    
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/seo-audits" />
                <meta property="og:title" content="Drive Traffic and Leads: SEO for Website Audit" />
                <meta property="og:description" content="Our SEO services for Website Audit drive targeted traffic and leads to boost your business. Get SEO Services in the Website Audit." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Drive Traffic and Leads: SEO for Website Audit" />
                <meta name="twitter:description" content="Our SEO services for Website Audit drive targeted traffic and leads to boost your business. Get SEO Services in the Website Audit." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Drive Traffic and Leads: SEO for Website Audit</title>
                <meta name="description" content="Our SEO services for Website Audit drive targeted traffic and leads to boost your business. Get SEO Services in the Website Audit." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/seo-audits" />
            </Head>
            
            <Header />
            
            <div className={style.container1}>
                <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737399628/70_20240201_212957_0002_dqka52.png"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Website Audit Services" />
                <h1 className={style.title_Local_SEO}>Website Audit</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737399628/70_20240201_212957_0002_dqka52.png"} className={style.endImages1} alt="SEO Audit" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/youtube-seo" className={style.container2_atag}>YouTube SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/mobile-seo" className={style.container2_atag}>Mobile SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/wordpress-seo" className={style.container2_atag}>WordPress SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/google-analytics-services" className={style.container2_atag}>Google Analytics</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className={style.container2div4}>
                        <h4 className={style.container2div4_hfour}>Get A Quote</h4>
                        <form ref={form} onSubmit={sendEmail} className={style.container2div4_form}>
                            <input placeholder='Your Name' type="text" name="user_name" className={style.container2div4_input} required />
                            <input placeholder='Your email' type="email" name="user_email" className={style.container2div4_input} required />
                            <textarea name="message" placeholder='Enter your message' className={style.container2div4_textarea} cols={30} rows={10} required />
                            <input type="submit" className={style.container2div4_btn} value="Send" />
                        </form>
                    </div>
                    
                    <div className={style.container2div6}>
                        <h4 className={style.container2div6_hfour}>Need Help?</h4>
                        <p className={style.container2div6_ptag}>Take Your Website's Performance to the Next Level with Our SEO Auditing Services Today!</p>
                        <div className={style.container2div6_icons}>
                            <div className={style.container2div6_icon}>
                                <MdEmail />
                            </div>
                            <div>
                                <span>Email Us</span>
                                <p>info@nspglobalservices.com</p>
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
                
                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.overview}>Overview</h2>
                        <p>Is your website optimized for search engines? Our company offers top-notch SEO auditing services to help you take your website performance to the next level. A website audit is a detailed and thorough analysis of a website's performance, structure, and content to identify issues and areas that can be improved to enhance the user's experience and increase its online visibility. Our comprehensive audit covers technical aspects, on-page optimization, user experience, and more.</p>
                    </div>
                
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Technical Analysis</h4>
                        </div>
                        <p>We conduct a thorough examination of your website's technical elements, including website speed, mobile-friendliness, crawlability, and indexing. By addressing technical issues, we ensure that search engines can effectively crawl and index your site, improving its visibility.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>On-Page Optimization</h4>
                        </div>
                        <p>Our experts analyze your website's content, structure, metadata, and keyword usage to ensure it aligns with SEO best practices. By optimizing on-page elements, we help search engines understand your website's relevance and improve its rankings.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>User Experience Evaluation</h4>
                        </div>
                        <p>We assess the user experience factors of your website, including navigation, accessibility, and website speed. By enhancing user experience, we aim to increase engagement, reduce bounce rates, and improve conversions.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Backlink Profile Analysis</h4>
                        </div>
                        <p>We review your website's backlink profile to identify high-quality, authoritative, and potentially toxic or low-quality links. By optimizing your backlink profile, we enhance your website's credibility and visibility in search engine rankings.</p>
                    </div>
                </div>
                
                <div className={style.container2div7}>
                    <img src={'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737399631/71_20240201_212957_0003_edkwzb.png'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="SEO Audit Service" />
                    <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737399635/69_20240201_212957_0001_zmi7ym.png"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Website Analysis" />
                </div>
                
                <div className={style.container2div8}>
                    <h3 className={style.overview}>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Enhanced Visibility:</strong> Our SEO audit uncovers opportunities to improve your website's visibility in search engine results. By addressing technical issues, optimizing content, and improving user experience, we help you climb the rankings and attract more organic traffic.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Improved User Experience:</strong> By optimizing your website's structure, navigation, and load times, we enhance the overall user experience. This increases engagement, longer visit durations, and improved conversion rates.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Targeted Optimization:</strong> Our audit provides valuable insights into your website's performance and areas for improvement. We ensure that your website aligns with search engine algorithms and user expectations by targeting specific aspects such as keywords, metadata, and content relevancy.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Actionable Recommendations:</strong> Our audit report analyses your website's strengths, weaknesses, and optimization opportunities. We offer clear recommendations and prioritize action items, empowering you to make informed decisions and implement effective SEO strategies.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span>Our SEO auditing services help you unlock the full potential of your website by optimizing its technical aspects, content, and user experience. You can maximize your website's performance and drive long-term success with enhanced visibility, improved user engagement, and actionable recommendations. Contact us today to take your SEO efforts to the next level and achieve your digital marketing goals.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                </main>
            </div>
            
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1746207263/WhatsApp_Image_2025-04-05_at_00.09.26_896afbac_pwjmmw.jpg"} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => { toggle(i) }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>{element.icon}<h2 className={style.accodion_h2}>{element.statement}</h2></div>
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
