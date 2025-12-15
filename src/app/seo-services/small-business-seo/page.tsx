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
        statement: 'What is Small Business SEO?',
        paragraph: 'Small Business SEO is an organic marketing strategy that improves the visibility of small businesses online, helping them reach their target audience more efficiently. It typically involves optimizing the website for relevant keywords and phrases, incorporating local SEO to show up on local searches, creating quality content and link building strategies to improve domain authority, and implementing various techniques like page speed optimization. Small business owners can also benefit from using specialized tools such as a/b testing or heatmaps in order to see where people are clicking when they visit their website. Ultimately, it is important for small businesses to invest in a comprehensive SEO plan that encompasses all of these tactics, positioning them ahead of their competition.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Small Business SEO important for local businesses?',
        paragraph: 'Small Business SEO (Search Engine Optimization) is essential for local businesses as it helps customers easily find your business online by optimizing your website visibility in search engine rankings. Local SEO specifically includes tactics to help small businesses appear higher on Google searches, attract more customers using geo-targeted keywords, and optimize their online profiles on directories such as Yelp or Facebook. It also offers multiple benefits like improving brand presence, increasing website traffic and user engagement, providing valuable insights into customer behaviour, etc. Utilizing a combination of the best small business SEO services with a well-crafted SEO checklist will have an exponential impact on the success of any local business.'
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of successful Small Business SEO?',
        paragraph: 'Small Business SEO is critical for any company looking to rank higher in search engine results. Local SEO for small businesses, such as optimizing website content for local searches, should be at the top of the list. Providing quality and relevant content, leveraging white hat techniques like link building, and staying current on best practices through professional small business SEO services are key elements necessary to success. Additionally, creating a comprehensive small business SEO checklist provides structure and guidance while reaping the benefits associated with having customers find your business online.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my small business website for search engines?',
        paragraph: 'Optimizing your small business website for search engines is essential as it can help you gain visibility, increase your customer base and boost revenue. When planning out a local SEO strategy, consider creating content that appeals to the kind of people who would be interested in what you have to offer. Hire an experienced Small Business SEO Services provider who will analyze and improve your website visibility on SERPs. Also incorporate a checklist of important elements such as link building, keyword research, page optimization, etc., for best results.'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some common Small Business SEO mistakes to avoid?',
        paragraph: 'Small Business SEO (Search Engine Optimization) is a critical part of success in any business. Unfortunately, there are common mistakes that can be made when it comes to SEO optimization. These include not utilizing local SEO for small businesses, neglecting the importance of using small business SEO services, not understanding the benefits of SEO for small businesses, skipping over creating a comprehensive small business SEO checklist and failing to utilize best practices for small business SEO strategies. Getting professional advice on how to avoid these mistakes could save your company time and money in the long run.'
    }
]

export default function SmallBussinesseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/small-business-seo" />
                <meta property="og:title" content="Small Business SEO Services: Rank Higher, Sell More" />
                <meta property="og:description" content="Our Small Business SEO services drive results. Gain visibility, attract customers, and thrive online with tailored strategies." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Small Business SEO Services: Rank Higher, Sell More" />
                <meta name="twitter:description" content="Our Small Business SEO services drive results. Gain visibility, attract customers, and thrive online with tailored strategies." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Small Business SEO Services: Rank Higher, Sell More</title>
                <meta name="description" content="Our Small Business SEO services drive results. Gain visibility, attract customers, and thrive online with tailored strategies." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/small-business-seo" />
            </Head>
            <Header />
            <div className={style.container1}>
                <img src={'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop'} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Small Business SEO Services" />
                <h1 className={style.title_OnPage_SEO} id={style.smallbussinesseo}>Small Business SEO Services</h1>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop'} className={style.endImages1} alt="Small business" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Services</h4>
                    <ul className={style.container2div2_ul}>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services" className={style.container2_atag}>SEO Service</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/ppc-services" className={style.container2_atag}>PPC Service</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/nationwide-seo" className={style.container2_atag}>NationWide SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/mobile-seo" className={style.container2_atag}>Mobile SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link href="/seo-services/seo-keywords-research" className={style.container2_atag}>Keyword SEO</Link>
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
                    <p className={style.container2div6_ptag}>Request a free SEO consultation</p>
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
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>85%</span>
                        <span className={style.container2div10_span2}>Customer Satisfaction Rate</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>200%</span>
                        <span className={style.container2div10_span2}>Average ROI Increase</span>
                    </div>
                </div>
                <main>
                <div className={style.container2div3}>
                    <h2 className={style.container2div3_hone}>Boost Your Small Business with Professional SEO Services</h2>
                    <p className={style.container2div3_ptag}>Search engine optimization is the basic thing you need to build an online presence of your brand. With the help of NSP Global Services, a search engine optimization company, you can master this fundamental yet very complex thing. We will help you by giving you the keywords that are relevant to your business, that will make your reach even wider than before, drive more traffic to your website, rank your website on the google, generate more leads and even more than that.</p>
                    <p className={style.container2div3_ptag}>SEO solutions are nothing, but a ladder to reach at the top of the Google's ranking. By using SEO, NSP Global Services will make a better image of your website, brand, business and will walk with you at every step of success.</p>
                </div>
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Website Audit & SEO Assessment</h4>
                            <p className={style.container2div5_blog_p}>Are you eager to elevate your small business to new heights? If yes, then you need to make sure that your website is visible to people searching for the products or services that you offer. With our small business SEO services, we can help you in this regard by conducting a website audit and an SEO assessment to ensure that your website is well optimized for the search engines.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>SEO Keyword Research and Rankings</h4>
                            <p className={style.container2div5_blog_p}>If you want to ensure that your website is visible to potential customers, you need to have your website optimized for the right keywords. Our SEO experts will conduct a comprehensive keyword research and analyze the rankings of your keywords on leading search engines such as Google, Yahoo, and Bing. With this data, we can help you devise an effective SEO strategy to help your website rank higher.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Content Creation & Marketing</h4>
                            <p className={style.container2div5_blog_p}>Content is one of the most important factors in SEO, so it is important to ensure that the content on your website is well-written and SEO-optimized. Our team of expert writers will create high-quality content that is optimized for search engines and appeals to your potential customers. We will also help you market this content to get more traction and visibility.</p>
                        </div>
                    </div>
                    <div className={style.container2div5_blog}>
                        <MdCheckCircle className={style.container2div5_icon} />
                        <div>
                            <h4 className={style.keyfactorHeading}>Videos/Infographics</h4>
                            <p className={style.container2div5_blog_p}>Videos and infographics are one of the most effective ways to promote your business, as it is a visual way of conveying your message to potential customers. Our team of graphic designers and video editors can create stunning visuals that can help you get more conversions and sales.</p>
                        </div>
                    </div>
                </div>
                <div className={style.container2div7}>
                    <img src={'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="Business growth" />
                    <img src={'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=450&h=350&fit=crop'} className={style.container2div5_img} alt="SEO strategy" />
                </div>
                <div className={style.container2div8}>
                    <h3 className={style.container2div8_hthree}>Benefit of SEO for Small Business</h3>
                    <ul className={style.container2div8_ul}>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Enhance Your Online Visibility: </strong>With the right combination of on-page and off-page SEO, you can rank higher on search engine result pages (SERPs) and get more clicks and traffic. The more visible you are, the more potential customers you can attract to your site.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Build Credibility and Brand Authority: </strong>Establishing a strong online presence through SEO also helps build credibility and authority in your industry. This builds trust with your customers, who are more likely to buy from a business they feel confident in.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Target Local Customers: </strong>Local SEO is critical for small businesses, as it targets customers in your local area who are searching for products or services like yours. By optimizing for regional keywords and creating local citations, our small business SEO services help you attract local customers and grow your business.</span>
                        </li>
                        <li className={style.container2div8_li}>
                            <span><strong className={style.keyfactorHeading}>Maximize Your ROI: </strong>SEO is a long-term, sustainable investment in your online marketing efforts, with a strong possibility of providing outsized returns in terms of lead generation and sales.</span>
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
