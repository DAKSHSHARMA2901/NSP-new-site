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
        statement: 'What is a backlink audit?',
        paragraph: 'A backlink audit is an important component of any SEO (Search Engine Optimization) strategy. It involves analyzing your backlink profile and website to identify any toxic or spammy links, as well as optimizing the quality of existing inbound links and identifying gaps in your link building efforts. This can be done manually using a link building audit tool or through automated services that scan and analyze the entire backlink profile.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why is a backlink audit important for SEO?',
        paragraph: `A backlink audit is an essential part of any SEO, as it helps you understand the strength and nature of your website's backlink profile. It enables you to detect and eliminate potentially toxic links, build more natural backlinks, increase your domain authority score, monitor link building campaigns progress, and boosts overall SEO performance.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How do I conduct a backlink audit?',
        paragraph: `An SEO link audit involves the comprehensive analysis of your backlink profile to identify potential toxic and low-quality links. Additionally, it includes a website and backlink audit which aims to review existing link placements and uncover new opportunities for website promotion.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are the key metrics to consider when evaluating backlinks?',
        paragraph: `A backlink audit is an important part of a successful SEO strategy, and it involves assessing the quality of a website's backlinks. An audit should include analyzing the link profile for potentially toxic links, tracking new and lost backlinks over time, and organizing them into different relevant categories.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How can I identify and remove toxic or spammy backlinks?',
        paragraph: `When it comes to identifying and removing toxic or spammy backlinks, a thorough SEO audit of your website's backlink profile is essential. A seo link audit and a backlink profile audit can help you identify any potentially harmful links as well as inaccurate information in your backlink portfolio.`
    }
]

export default function BacklinkAuditseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/backlink-audit" />
                <meta property="og:title" content="Backlink Audit Experts: Your Path to Quality Links" />
                <meta property="og:description" content="Our SEO professionals at NSP Online offer Backlink Audit and Toxic Link Removal Services with proven outcomes. 100% Money-Back Guarantee." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Backlink Audit Experts: Your Path to Quality Links" />
                <meta name="twitter:description" content="Our SEO professionals at NSP Online offer Backlink Audit and Toxic Link Removal Services with proven outcomes. 100% Money-Back Guarantee." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Backlink Audit Experts: Your Path to Quality Links</title>
                <meta name="description" content="Our SEO professionals at NSP Online offer Backlink Audit and Toxic Link Removal Services with proven outcomes. 100% Money-Back Guarantee." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/backlink-audit" />
            </Head>
            
            <Header />
            
            <div className={style.container1}>
                <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737400365/17_20230824_180026_0001_a90a6d.png"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Backlink Audit Services" />
                <h1 className={style.title_Local_SEO}>Backlink Audit Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737400365/17_20230824_180026_0001_a90a6d.png"} className={style.endImages1} alt="Backlink Audit" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul>
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
                                <Link href="/seo-services/youtube-seo" className={style.container2_atag}>YouTube SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/small-business-seo" className={style.container2_atag}>Small Business SEO</Link>
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
                        <p className={style.container2div6_ptag}>Book a call with our expert SEO team and take control of your backlink profile today!</p>
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
                </aside>
                
                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.overview}>Overview</h2>
                        <p>If you want to enhance your website's search engine ranking and address any issues with your backlink profile, our backlink audit services are here to help. Our SEO experts will thoroughly analyze your backlink profile, identify missing backlinks, remove penalty-prone ones, and update your campaign to ensure SEO success.</p>
                    </div>
                
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Detailed Analysis</h4>
                        </div>
                        <p>Our backlink audit provides invaluable insights and analysis for every SEO campaign. We review each link's quality, relevance, and authority, distinguishing between high-quality and poor-quality links.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Customized Strategy</h4>
                        </div>
                        <p>Based on factors such as technical audit, backlink data, domain type, link type, anchor text, and disavowing sites, we develop a tailored backlink analysis strategy unique to your business. We compare your data with your competitors to give you a competitive edge.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>In-depth Profiling</h4>
                        </div>
                        <p>Our backlink audit includes an in-depth analysis of your backlink profile, enabling you to understand your website's link profile better. We identify the right backlinks to enhance your website's credibility and visibility while recommending the removal or disavowal of low-quality links.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Comprehensive Packages</h4>
                        </div>
                        <p>Our backlink audit service packages offer a range of essential features, including link detox & disavow, GSC, AHREF's & SEM Rush data, Domain Authority Score, Page Authority Score, Source URL, Source Page Title, Source Domain, Target URL, Anchor Type, Link Type, Follow/No Follow, Toxic Score, Moz Spam Score, Link detox & Disavow document, and TLD Type. These packages are built upon the foundation of your analysis to deliver optimal results.</p>
                    </div>
                </div>
                
                <div className={style.container2div7}>
                    <img src={'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737399965/16_20230824_180026_0000_kkpcof.png'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Backlink Analysis" />
                    <img src={'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737400231/18_20230824_180026_0002_t4ivln.png'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Link Building" />
                </div>
                
                <div className={style.container2div8}>
                    <h3 className={style.overview}>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Enhanced SEO Knowledge:</strong> Our backlink audit services provide in-depth knowledge of backlink SEO, empowering you to make informed decisions and take control of your website's rankings.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Dedicated Account Manager:</strong> You'll have a dedicated account manager who will guide you through the entire backlink audit process, ensuring your needs are met, and questions are answered.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Improved Rankings and Traffic:</strong> By identifying and removing toxic links, our audit helps improve your search engine rankings, boost your domain authority, and increase organic traffic to your website.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Expertise and Experience:</strong> Our team consists of experienced and certified SEO experts providing backlink audit services for years. You can trust their expertise to deliver comprehensive and effective results.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span>In conclusion, conducting a thorough backlink audit is crucial for improving your website's search engine rankings. Identifying and removing toxic links can enhance your domain authority, increase organic traffic, and improve your website performance. Don't hesitate to contact our expert SEO team today to discuss your options and improve your backlink profile for higher rankings.</span>
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
