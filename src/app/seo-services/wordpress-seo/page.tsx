'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone, MdCheckCircle } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import style from '../celebrity-seo/newservices.module.css'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link'
import Head from 'next/head';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is WordPress SEO?',
        paragraph: 'WordPress SEO is a combination of strategies and techniques that involve optimizing the content and coding of your website for search engine exposure. Whether you are an expert or just getting started, you can create best-practice-compliant content and improve your site ranking with helpful plugins such as Yoast SEO, All in One SEO Pack, The SEO Framework, SEOPress, Rank Math and Squirrly.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO important for my WordPress website?',
        paragraph: 'SEO (Search Engine Optimization) is an important factor for your WordPress website because it helps you to rank higher in the search engine results pages, increase visibility and ultimately drive more organic traffic to your site.'
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the main factors that affect SEO for WordPress websites?',
        paragraph: 'There are several key factors that affect SEO on WordPress websites. A great starting point is to ensure your website follows basic best practices, such as using a responsive design, having an optimized navigation menu, and integrating keywords into content. Additionally, installing a WordPress SEO plugin can help improve the site overall search engine rankings by providing access to various tools like optimization checklists and automatic XML sitemaps.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my WordPress website for SEO?',
        paragraph: 'Optimizing a WordPress website for SEO does not have to be difficult. Begin by making sure your website is properly indexed, use appropriate keywords and meta tags, include backlinks and optimize images; these are key steps all WordPress sites must take. To help make the process easier, you can also use an expert SEO plugin or tool for automation.'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the best SEO practices for WordPress websites?',
        paragraph: 'Optimizing your WordPress website for SEO requires attention to key factors such as using keywords, optimizing titles and descriptions, enabling social sharing and other forms of link building, optimizing images and content formatting. Additionally, installing a reliable SEO plugin like Yoast can help automate the process while expert SEOs may help bring more advanced processes into play.'
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take to see results from WordPress SEO?',
        paragraph: 'It depends on a variety of factors, including the website current SEO score. Generally speaking, though, with the right strategies and tools like expert SEO WordPress plugins and automatic WordPress SEO optimization techniques, you can start to see improvements in your website SERP within 3-4 months.'
    }
]

export default function Wordpressseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/wordpress-seo" />
                <meta property="og:title" content="WordPress SEO Services | Increase Traffic, Rankings, and ROI" />
                <meta property="og:description" content="Our WordPress SEO consultant specializes in optimizing your website for search engines. Boost rankings, traffic, and conversions with our expert guidance." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="WordPress SEO Services | Increase Traffic, Rankings, and ROI" />
                <meta name="twitter:description" content="Our WordPress SEO consultant specializes in optimizing your website for search engines. Boost rankings, traffic, and conversions with our expert guidance." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>WordPress SEO Services | Increase Traffic, Rankings, and ROI</title>
                <meta name="description" content='Our WordPress SEO consultant specializes in optimizing your website for search engines. Boost rankings, traffic, and conversions with our expert guidance.' />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/wordpress-seo" />
            </Head>

            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1920&h=600&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="WordPress SEO Services" />
                <h1 className={style.title_Local_SEO}>WordPress SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop"} className={style.endImages1} alt="WordPress SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul className={style.container2div2_ul}>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/on-page-seo" className={style.container2div2_atag}>On-Page SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/technical-seo" className={style.container2div2_atag}>Technical SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/shopify-seo" className={style.container2div2_atag}>Shopify SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/international-seo" className={style.container2div2_atag}>International SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/franchise-seo" className={style.container2div2_atag}>Franchise SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/luxury-seo" className={style.container2div2_atag}>Luxury SEO</Link>
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
                        <p className={style.container2div6_ptag}>Claim Your FREE WordPress SEO Audit Today</p>
                        <div className={style.container2div6_icons}>
                            <div className={style.container2div6_icon}>
                                <MdEmail style={{ fontSize: '22px' }} />
                            </div>
                            <div className={style.container2div6_span}>
                                <span>Email Us</span>
                                <p>info@nspglobalservices.com</p>
                            </div>
                        </div>
                        <div className={style.container2div6_icons}>
                            <div className={style.container2div6_icon}>
                                <MdPhone style={{ fontSize: '22px' }} />
                            </div>
                            <div className={style.container2div6_span}>
                                <span>Call Us</span>
                                <p>+1 (234) 567-890</p>
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
                            <span className={style.container2div10_span1}>99%</span>
                            <span className={style.container2div10_span2}>Increase in conversion rates</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>93%</span>
                            <span className={style.container2div10_span2}>Increase in leads generation</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.container2div3_hone}>Overview</h2>
                        <p className={style.container2div3_ptag}>
                            WordPress offers numerous advantages for website owners as the most popular Content Management System (CMS) in the world. However, more than simply having a WordPress site is required to ensure its visibility on search engines.
                        </p>
                        <p className={style.container2div3_ptag}>
                            That is where our WordPress SEO specialists come in. We go beyond the basics and provide custom-tailored SEO services to optimize your site for optimal search engine results. With our expertise, we can help you achieve improved rankings, increased traffic, enhanced user experience, robust engagement on social media, and a customized SEO strategy tailored to your specific business goals.
                        </p>
                    </div>
                    
                    <div className={style.container2div5}>
                        <h2 className={style.container2div5_hone}>Key Factors</h2>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Improved Rankings and Visibility</h4>
                                <p className={style.container2div5_blog_p}>
                                    Our expertise in WordPress SEO can significantly improve your website search engine rankings, increasing its visibility. This leads to more organic traffic, greater brand awareness, and a higher chance of online success.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Increased Traffic and Conversions</h4>
                                <p className={style.container2div5_blog_p}>
                                    With improved search rankings, your website attracts more potential customers, increasing traffic. This boost in traffic can lead to higher sales and conversions, maximizing your business growth potential.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Enhanced User Experience</h4>
                                <p className={style.container2div5_blog_p}>
                                    We optimize your WordPress site for a better user experience. By improving its speed, usability, and navigation, we ensure visitors have a seamless and enjoyable browsing experience. This boosts engagement and encourages users to take desired actions on your website.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Robust Engagement and Social Media Impact</h4>
                                <p className={style.container2div5_blog_p}>
                                    Our WordPress SEO services maximize the impact of your social media presence. By optimizing your website for social sharing and engagement, you increase the likelihood of receiving social media recommendations. This drives more traffic, boosts engagement, and enhances your brand credibility in the online space.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.container2div7}>
                        <img src={'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="WordPress Development" />
                        <img src={'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="WordPress Optimization" />
                    </div>
                    
                    <div className={style.container2div8}>
                        <h3 className={style.overview}>Key Benefits</h3>
                        <ul className={style.container2div8_ul}>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Keyword Research: </strong>
                                    We conduct in-depth keyword research to identify the most effective keywords and phrases relevant to your business and target audience. This helps optimize your content and increase its visibility in search engine results.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Content Optimization: </strong>
                                    We work closely with your team to develop high-quality, SEO-optimized content that aligns with the identified keywords. This includes optimizing titles, meta descriptions, header tags, and internal linking structures to improve your site visibility and ranking potential.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Off-Page Optimization: </strong>
                                    We implement a comprehensive off-page optimization strategy to enhance your site authority and reputation. This involves building high-quality backlinks, fostering social media engagement, and increasing your brand visibility through online channels.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Analytics and Reporting: </strong>
                                    We use advanced analytics tools to monitor your site performance. This allows us to track progress, identify areas for improvement, and make data-driven decisions to refine the SEO strategy. Regular reporting keeps you informed about the results and effectiveness of our efforts.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    If you are looking to boost your WordPress website, our WordPress SEO packages are what you need. You will receive detailed analytics and reports regularly to monitor progress and results. We offer bespoke packages and prioritize specific goals concerning your website. So why wait? Book a FREE consultation today and let us help your WordPress website to reach new heights.
                                </span>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
            
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop"} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} onClick={() => { toggle(i) }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>
                                        {element.icon}
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
