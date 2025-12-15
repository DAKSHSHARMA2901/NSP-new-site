'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md'
import style from '../celebrity-seo/newservices.module.css'
import { GoPlus } from '@/lib/react-icons-go-shim'
import { MdCheckCircle } from 'react-icons/md'
import Link from 'next/link'
import Head from 'next/head';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: "What is on-page SEO?",
        paragraph: "On-page SEO refers to the practice of optimizing individual web pages in order to improve a website's search engine rankings. It involves focusing on both technical aspects, such as its structure and content, as well as off-page factors like link building and social media promotion."
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: "Why is on-page SEO important for my website?",
        paragraph: "On-page SEO is an important part of digital marketing and search engine optimization. It consists of several activities that improve a website's visibility in Google and other search engines, such as optimizing the content for keywords, creating optimized title tags, making use of meta descriptions, using URL structures according to SEO best practices, etc."
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: "What are the main elements of on-page SEO?",
        paragraph: "On-page SEO is an important strategy for digital marketing, and it refers to the process of optimizing individual webpages in order to improve a website's search engine ranking. It includes activities such as optimizing titles and meta descriptions, increasing keyword density, checking your site structure and content quality, using tags appropriately, building backlinks, developing a sitemap, writing optimized content and implementing Google Search Engine Optimisation (SEO)."
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: "How can I optimize my website for on-page SEO?",
        paragraph: "Optimizing your website for on-page SEO is key to any search engine optimization strategy. On-page SEO involves optimizing individual web pages in order to make them more visible and relevant to both users and search engines. Techniques include creating keyword rich titles, meta descriptions, alt tags, internal links, schema markup and more."
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: "What are the best practices for on-page SEO?",
        paragraph: "On-page SEO involves optimizing the content and code of a web page to ensure that it is visible in search engines. This can include optimizing titles, meta descriptions, headings and body text for target keywords; improving mobile usability; adding alt tags to images; providing internal links between pages, etc."
    }
]

export default function OnPageseo() {
    const [selection, setSelection] = useState<number | null>(null)
    const toggle = (i: number) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs
            .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
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
    return (
        <>
            <Head>
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/on-page-seo" />
                <meta property="og:title" content="Expert On-Page SEO Services | Drive Revenue Through Search" />
                <meta property="og:description" content="Our expert on-page SEO services are designed to boost your website's visibility, rankings, and revenue. Discover how we can drive success for your business." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Expert On-Page SEO Services | Drive Revenue Through Search" />
                <meta name="twitter:description" content="Our expert on-page SEO services are designed to boost your website's visibility, rankings, and revenue. Discover how we can drive success for your business." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Expert On-Page SEO Services | Drive Revenue Through Search</title>
                <meta name="description" content="Our expert on-page SEO services are designed to boost your website's visibility, rankings, and revenue. Discover how we can drive success for your business." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/on-page-seo" />
            </Head>
            <div className={style.container1}>
                <img src={'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop'} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="On-Page SEO Services" />
                <h1 className={style.title_OnPage_SEO} >On-Page SEO Services</h1>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop'} className={style.endImages1} alt="On-page SEO" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Services</h4>
                    <ul className={style.container2div2_ul}>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/link-building-services" className={style.container2_atag}>Link Building Services</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div4}>
                    <h4 className={style.container2div4_hfour}>Get A Quote</h4>
                    <form ref={form} onSubmit={sendEmail} className={style.container2div4_form}>
                        <input placeholder='Your Name' type="text" name="user_name" className={style.container2div4_input} />
                        <input placeholder='Your email' type="email" name="user_email" className={style.container2div4_input} />
                        <textarea name="message" placeholder='Enter your message' className={style.container2div4_textarea} cols={30} rows={10} />
                        <input type="submit" className={style.container2div4_btn} value="Send" />
                    </form>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Contact us today to create a customized on-page SEO strategy that drives revenue for your business.</p>
                    <div className={style.container2div6_icons}>
                        <div className={style.container2div6_icon}>
                            <MdEmail />
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
                        <span className={style.container2div10_span1}>5350%</span>
                        <span className={style.container2div10_span2}>Increase in website traffic</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>223%</span>
                        <span className={style.container2div10_span2}>Increase in conversion rates</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>325%</span>
                        <span className={style.container2div10_span2}>Increase in leads generation</span>
                    </div>
                </div>
                <main>
                <div className={style.container2div3}>
                    <h2 className={style.container2div3_hone}>Overview</h2>
                    <p className={style.container2div3_ptag}>On-page optimization is a crucial aspect of a successful SEO strategy. It involves implementing keyword research, content optimization, and site architecture to improve your website's visibility and search engine rankings. Focusing on on-page SEO can enhance your website's performance and attract more organic traffic.</p>
                </div>
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Keyword Research</h4>
                            <p className={style.container2div5_blog_p}>Conduct thorough keyword research to identify the phrases and terms your target audience is searching for. This helps you optimize your content with relevant keywords and improve its visibility in search results.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Content Optimization</h4>
                            <p className={style.container2div5_blog_p}>Ensure your website's content provides value to your audience while incorporating targeted keywords and phrases. By optimizing your content, you can improve its relevance and increase its chances of ranking higher in search engine results.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Site Architecture</h4>
                            <p className={style.container2div5_blog_p}>Create an intuitive and user-friendly structure that makes it easy for visitors to navigate your website. A well-organized site architecture enhances the user experience and helps search engine spiders crawl and index your pages effectively.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Technical Optimization</h4>
                            <p className={style.container2div5_blog_p}>Optimize your website's technical aspects, including speed, mobile-friendliness, and search engine compatibility. A technically optimized website performs better in search rankings and provides a seamless user experience.</p>
                        </div>
                    </div>
                </div>
                <div className={style.container2div7}>
                    <img src={'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="On-page SEO optimization" />
                    <img src={'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="SEO strategy" />
                </div>
                <div className={style.container2div8}>
                    <h3 className={style.container2div8_hthree}>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Increased Organic Traffic: </strong>By implementing on-page SEO practices, you can attract more organic traffic from search engines. Optimized content and improved search rankings make it easier for users to discover your website.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Improved Search Rankings: </strong>On-page SEO contributes to better search engine rankings, enhancing your website's visibility and increasing its chances of appearing in top search results. Higher rankings lead to more exposure and organic traffic.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Higher Conversion Rates: </strong>You can increase conversion rates by creating valuable and informative content that resonates with your audience. Engaging content that addresses the needs and interests of visitors helps convert them into leads and customers.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Brand Visibility: </strong>On-page SEO enhances your brand visibility through improved search rankings and increased organic traffic. It allows your brand to be seen by a wider audience, increasing brand recognition and credibility.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span>Invest in our comprehensive on-page SEO services to enhance your website's performance, increase organic traffic, and improve search rankings. Contact us now to get started and see the results of our efforts firsthand.</span>
                        </li>
                    </ul>
                </div>
                </main>
            </div>
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop'} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} onClick={() => { toggle(i) }}>
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
        </>
    )
}
