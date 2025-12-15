'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import style from '../celebrity-seo/newservices.module.css'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is Shopify SEO?',
        paragraph: 'Shopify SEO is the process of optimizing your online store so that it can be found by customers and search engines. A successful Shopify SEO strategy should include a comprehensive checklist which includes elements like keyword research & targeting, content optimization and link building.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO important for my Shopify store?',
        paragraph: 'SEO is vital for any Shopify store, as it can help optimize the website and content to make sure potential customers can find and use the store. A thorough Shopify SEO checklist should include keyword research, page optimization, link building, content structure, etc.'
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the main factors that affect SEO for Shopify stores?',
        paragraph: 'When optimizing SEO for Shopify stores, there are several key factors to consider. These include creating optimized content, making sure your site is fast and mobile-friendly, researching relevant keywords, and improving link building strategies. Furthermore, utilizing a shopify seo checklist or working with an experienced shopify seo consultant can be of great help for achieving optimal results.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my Shopify store for SEO?',
        paragraph: 'Optimizing your Shopify store for SEO can be a daunting task, but there are simple steps you can take to ensure that it is ready for search engine optimization. Start by creating a Shopify SEO checklist which includes items like optimizing product titles and descriptions, setting up page redirects when necessary, utilizing alt-tags on images, researching relevant keywords related to your business, and hiring an experienced Shopify SEO agency or consultant if needed.'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the best SEO practices for Shopify stores?',
        paragraph: 'To ensure SEO success for your Shopify store, follow these best practices: create unique titles and meta descriptions; write compelling product descriptions; target long-tail keywords; optimize images file names and ALT tags; build quality backlinks from reputable websites; and ensure a fast loading website.'
    }
]

export default function Shopifyseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/shopify-seo" />
                <meta property="og:title" content="Shopify SEO Services | Boost Your E-commerce Store's Visibility" />
                <meta property="og:description" content="Drive more traffic and sales with our expert Shopify SEO services. Let us optimize your online store for higher rankings and profitability." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Shopify SEO Services | Boost Your E-commerce Store's Visibility" />
                <meta name="twitter:description" content="Drive more traffic and sales with our expert Shopify SEO services. Let us optimize your online store for higher rankings and profitability." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Shopify SEO Services | Boost Your E-commerce Store Visibility</title>
                <meta name="description" content="Drive more traffic and sales with our expert Shopify SEO services. Let us optimize your online store for higher rankings and profitability." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/shopify-seo" />
            </Head>
            <Header />
            <div className={style.container1}>
                <img src={'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&h=600&fit=crop'} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Shopify SEO Services" />
                <h1 className={style.title_Local_SEO}>Shopify SEO Services</h1>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=500&fit=crop'} className={style.endImages1} alt="Shopify store" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Services</h4>
                    <ul className={style.container2div2_ul}>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
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
                    <p className={style.container2div6_ptag}>Take Your Business to New Heights with Expert SEO Consulting Today!</p>
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
                    <p className={style.container2div3_ptag}>If you're looking to gain a competitive edge in the world of e-commerce, search engine optimization (SEO) consulting is the solution you need. With expert guidance from experienced SEO consultants, you'll have the tools you need to take your business's search rankings to new heights and generate increased revenue.</p>
                    <p className={style.container2div3_ptag}>At NSP, we specialize in providing top-tier Shopify SEO services that are tailored to each individual client's business goals and target audience. From a comprehensive SEO analysis to a custom-fit backlink strategy, we have the expertise to optimize your site and increase organic traffic.</p>
                </div>
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Custom-fit strategy</h4>
                            <p className={style.container2div5_blog_p}>We develop a bespoke SEO strategy that aligns with your specific business objectives and target audience. Understanding your unique needs allows us to create a tailored approach that maximizes your SEO potential.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Data-driven analysis</h4>
                            <p className={style.container2div5_blog_p}>Our thorough analysis of your website and competitors provides the necessary data to drive success. We examine vital metrics, keyword research, and industry trends to identify opportunities and create effective strategies.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Top-tier expertise</h4>
                            <p className={style.container2div5_blog_p}>With years of experience and a team of SEO experts, we deliver exceptional performance and ROI. Our consultants stay up-to-date with the latest SEO techniques and industry best practices, ensuring you receive cutting-edge solutions.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Improved website performance</h4>
                            <p className={style.container2div5_blog_p}>Our strong backlink strategy and optimized site speed enhance your website's performance and user experience. Building high-quality backlinks and optimizing technical aspects, we help your site load faster, rank higher, and provide a seamless browsing experience.</p>
                        </div>
                    </div>
                </div>
                <div className={style.container2div7}>
                    <img src={'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="E-commerce success" />
                    <img src={'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="Online store optimization" />
                </div>
                <div className={style.container2div8}>
                    <h3 className={style.container2div8_hthree}>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Increased organic traffic: </strong>Our SEO services attract more organic traffic to your website, leading to higher click-through rates and conversions. By optimizing your site's visibility in search engines, we drive targeted traffic that is more likely to convert into customers.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Improved search rankings: </strong>With our expertise, we help improve your search rankings and visibility. By implementing strategic on-page and off-page optimizations, we enhance your site's relevance and authority, making it more likely to appear at the top of search engine results.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Enhanced user experience: </strong>Our strategies focus on improving site speed, usability, and navigation, resulting in a better user experience. A well-optimized website ranks higher, engages visitors, encourages longer stays, and facilitates easy conversions.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Tangible results and ROI: </strong>Through engaging visuals and clear-cut reports, we demonstrate how our SEO consulting services drive actual results and ROI for your business. We provide detailed analytics, tracking the progress of your SEO campaign and showcasing the positive impact on your website's performance and revenue.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span>We are a leading marketing agency with years of experience delivering top-tier Shopify SEO services. Our experienced consultants have a well-established history of delivering outstanding results for our clients, and we are confident in our ability to achieve the same for you. Contact us today to learn more about our Shopify SEO consulting services and how they can benefit your e-commerce business. With our help, you'll be poised to take your online sales to new heights.</span>
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
            <Footer />
        </>
    )
}
