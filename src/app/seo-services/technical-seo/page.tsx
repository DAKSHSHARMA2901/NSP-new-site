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
        statement: 'What is Technical SEO?',
        paragraph: 'Technical SEO is a type of search engine optimization (SEO) that focuses on the technical aspects of a website in order to help it rank higher in search results. It involves improving a website infrastructure, analyzing and fixing errors, optimizing site speed and performance, creating content silos for crawlers, managing redirects and broken links, making sure the site is mobile-friendly, and more.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Technical SEO important for website optimization?',
        paragraph: 'Technical SEO is a set of strategies and techniques used to optimize a website for search engines. It includes optimizing HTML code, content, meta tags, image labels and other elements that are invisible to the user but visible to search engines. Additionally, it involves creating an XML sitemap and configuring robots.txt files that help search engine bots crawl websites more effectively.'
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some key components of Technical SEO?',
        paragraph: 'Technical SEO is the process of optimizing a website in order to make its content more visible and accessible to search engines. It involves auditing a website structure and code, conducting keyword research, creating content that is optimized for search engine users, optimizing page speed and loading times, ensuring all images are optimized with proper labeling and alt text, setting up redirects for broken links or pages that have been moved or deleted, implementing an XML sitemap for crawlers to access important pages quickly, among other tasks.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does website speed affect Technical SEO?',
        paragraph: 'Website speed is an important factor to consider when performing a Technical SEO audit. Faster loading sites will rank higher in search engine results and also help to improve user experience. The quality of your website code, HTML tags, image alt attributes and other backend settings can all affect its loading speeds - so make sure to take these into account during your Technical SEO audit.'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is the role of XML sitemaps in Technical SEO?',
        paragraph: 'XML Sitemaps can provide search engine crawlers with information about the structure of your website, helping them crawl and index it better. Additionally, they provide a place to list out all the URLs you want to be crawled and indexed which allows for quick and thorough site audits ensuring that your on-page optimization is up to date. Therefore, XML sitemaps play an essential role when conducting a Technical SEO audit or review.'
    }
]

export default function Technicalseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/technical-seo" />
                <meta property="og:title" content="Technical SEO Services & Consultant for Improved Website Performance" />
                <meta property="og:description" content="Better technical SEO from an expert technical SEO agency & consultant - NSP. Our technical SEO services will increase traffic, leads, and sales. Check out our plans and prices right now!" />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Technical SEO Services & Consultant for Improved Website Performance" />
                <meta name="twitter:description" content="Better technical SEO from an expert technical SEO agency & consultant - NSP. Our technical SEO services will increase traffic, leads, and sales. Check out our plans and prices right now!" />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Technical SEO Services & Consultant for Improved Website Performance</title>
                <meta name="description" content='Better technical SEO from an expert technical SEO agency & consultant - NSP. Our technical SEO services will increase traffic, leads, and sales. Check out our plans and prices right now!' />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/technical-seo" />
            </Head>

            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=600&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Technical SEO Services" />
                <h1 className={style.title_Local_SEO}>Technical SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"} className={style.endImages1} alt="Technical SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul className={style.container2div2_ul}>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/on-page-seo" className={style.container2div2_atag}>On-Page SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/backlink-audit" className={style.container2div2_atag}>Backlink Audit</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/google-analytics-services" className={style.container2div2_atag}>Google Analytics</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/franchise-seo" className={style.container2div2_atag}>Franchise SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/celebrity-seo" className={style.container2div2_atag}>Celebrity SEO</Link>
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
                        <p className={style.container2div6_ptag}>Get Results with NSP Technical SEO Services Today.</p>
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
                            <span className={style.container2div10_span1}>350%</span>
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
                </aside>

                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.container2div3_hone}>Overview</h2>
                        <p className={style.container2div3_ptag}>
                            In today's competitive digital landscape, it's essential to stay ahead by implementing the latest technical on-page SEO tactics. Technical SEO is optimizing your website to ensure it is structured effectively for users and search engines. However, juggling technical optimization with your core business responsibilities can be challenging. That's where our experienced team of technical SEO consultants comes in.
                        </p>
                        <p className={style.container2div3_ptag}>
                            We provide expert assistance and support, allowing you to focus on your primary business operations while maximizing your website's profitability. NSP offers comprehensive technical SEO services to help businesses optimize their websites for improved search engine visibility and user experience. Our team of experts focuses on the technical aspects of SEO to ensure that your website is technically sound and performs at its best.
                        </p>
                    </div>
                    
                    <div className={style.container2div5}>
                        <h2 className={style.container2div5_hone}>Key Factors</h2>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Website Audit and Optimization</h4>
                                <p className={style.container2div5_blog_p}>
                                    We perform a thorough technical audit of your website to identify any issues affecting its performance. We optimize meta tags, header tags, URL structure, and site speed to improve search engine rankings and user experience.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Mobile Optimization</h4>
                                <p className={style.container2div5_blog_p}>
                                    With the increasing use of mobile devices, we ensure your website is fully optimized for mobile responsiveness. We optimize your site's design, layout, and functionality to provide a seamless experience for mobile users.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Site Structure and Navigation</h4>
                                <p className={style.container2div5_blog_p}>
                                    We analyze and optimize your website's structure and navigation to make it easier for search engines to crawl and index your content. We ensure your site has a clear hierarchy, logical organization, and user-friendly URLs.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Schema Markup Implementation</h4>
                                <p className={style.container2div5_blog_p}>
                                    We implement schema markup, a structured data markup language, to provide search engines with additional information about your website's content. This helps search engines understand your content better and may result in rich snippets in search results.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.container2div7}>
                        <img src={'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="Technical SEO Strategy" />
                        <img src={'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="Website Optimization" />
                    </div>
                    
                    <div className={style.container2div8}>
                        <h3 className={style.overview}>Key Benefits</h3>
                        <ul className={style.container2div8_ul}>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Improved Search Engine Rankings: </strong>
                                    Our technical SEO strategies help improve your website's visibility in search engine results. By optimizing various technical aspects, we increase the chances of your site ranking higher for relevant keywords, driving more organic traffic to your website.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Enhanced User Experience: </strong>
                                    A technically optimized website provides a better user experience. With improved site speed, mobile responsiveness, and easy navigation, visitors are likelier to stay on your site longer, engage with your content, and convert into customers.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Increased Organic Traffic: </strong>
                                    By optimizing your website's technical aspects, we attract more organic traffic from search engines. As your website becomes more visible and ranks higher in search results, you'll experience a steady increase in targeted traffic, resulting in more potential customers and leads.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Competitive Advantage: </strong>
                                    Investing in technical SEO gives you a competitive edge in the digital landscape. When your website is technically optimized, you stand out from competitors who may overlook these crucial factors. This can lead to higher online authority, brand credibility, and a stronger online presence.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    With NSP's technical SEO services, you can unlock the full potential of your website, improve search engine rankings, enhance user experience, and gain a competitive advantage in the online marketplace. By choosing NSP for your technical SEO needs, you can trust that our experts will deliver sustainable results. We offer a money-back guarantee on all our technical SEO services, giving you peace of mind and assurance that you are investing in a reliable and trustworthy provider.
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
