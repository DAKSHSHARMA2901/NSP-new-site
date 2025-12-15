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
        statement: 'What is SEO consultancy?',
        paragraph: 'SEO Consultancy is a type of internet marketing consulting where an expert provides services and strategies that are designed to help increase the chances of a website appearing higher in search engine results. It involves researching relevant keywords, link building, optimizing content and developing online presence as part of an overall backlink strategy.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why is SEO important for businesses?',
        paragraph: `SEO (Search Engine Optimization) is an essential tool for businesses as it helps to improve their visibility and rankings in search engine results, resulting in increased website traffic. SEO consulting services provide advice on topics such as developing a keyword strategy, creating backlinks, optimizing website content and user experience, ensuring mobile friendliness of websites and engaging local audiences.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How can SEO consultancy help my business?',
        paragraph: `SEO consulting services can help your business maximize the results from its digital marketing strategies. A professional SEO consultant can provide website audits and analysis, keyword research, backlink strategy consulting, on-page optimization, content marketing and more. Working with a top SEO expert gives you access to specialized knowledge and expertise to ensure that your business gets an edge in highly competitive digital markets.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How much does SEO consultancy cost?',
        paragraph: `SEO Consultancy costs depend on a variety of factors including the size and scope of your business, the level of competition you face, the complexity of your website, and other related services such as keyword research, backlink strategy consulting, copywriting or content marketing. Generally speaking, rates for an experienced SEO consultant/expert will range from $100 to upwards up $300 per hour but can be higher if additional specialized services such as best seo expert or top seo experts are needed.`
    }
]

export default function Consultancyseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/seo-consultancy" />
                <meta property="og:title" content="SEO Consultants Services to Increase Your Organic Traffic" />
                <meta property="og:description" content="Hire the top SEO consultant Services that provide the greatest SEO services to assist your business in growing. Outsource your SEO to the best SEO company - NSP." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="SEO Consultants Services to Increase Your Organic Traffic" />
                <meta name="twitter:description" content="Hire the top SEO consultant Services that provide the greatest SEO services to assist your business in growing. Outsource your SEO to the best SEO company - NSP." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>SEO Consultants Services to Increase Your Organic Traffic</title>
                <meta name="description" content='Hire the top SEO consultant Services that provide the greatest SEO services to assist your business in growing. Outsource your SEO to the best SEO company - NSP.' />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/seo-consultancy" />
            </Head>
            
            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="SEO Consultants Services" />
                <h1 className={style.title_Local_SEO}>SEO Consultants Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"} className={style.endImages1} alt="SEO Consultancy" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
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
                        <p className={style.container2div6_ptag}>Speak with Our Award-winning SEO Specialists Today!</p>
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
                        <p>NSP is a leading SEO consultancy offering comprehensive services to help businesses improve their online visibility, drive high-value traffic, and achieve their marketing goals. Our award-winning SEO consultants provide tailored solutions, from ad-hoc consultancy to ongoing support, to ensure optimal results and return on investment (ROI).</p>
                    </div>
                
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Customized Approach</h4>
                        </div>
                        <p>We take a personalized approach to SEO consultancy, understanding your specific needs and preferences. Whether you require a one-time SEO audit, training and coaching, or ongoing support, our experts tailor the services to match your objectives and budget.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Expertise and Multichannel Strategies</h4>
                        </div>
                        <p>With our extensive experience in SEO, internet marketing, and digital PR, we bring joined-up thinking and leverage the latest trends and tools to maximize your online visibility and brand awareness. We employ data-driven analysis and holistic frameworks to develop strategies that deliver results across multiple channels.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Comprehensive Services</h4>
                        </div>
                        <p>Our SEO consultancy services cover various vital areas to address your needs and goals. From conducting detailed SEO audits and providing customized training to offering one-off consultancy sessions and ongoing support, we have the expertise to enhance your SEO performance and ROI.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Transparent Pricing and Deliverables</h4>
                        </div>
                        <p>We believe in transparency and upfront communication. Our pricing models are affordable and flexible, designed to suit businesses of all sizes. We clearly outline our fees and deliverables, ensuring you know exactly what to expect from our SEO consultancy services.</p>
                    </div>
                </div>
                
                <div className={style.container2div7}>
                    <img src={'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=424&h=324&fit=crop'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="SEO Strategy" />
                    <img src={'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=424&h=324&fit=crop'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="SEO Consulting" />
                </div>
                
                <div className={style.container2div8}>
                    <h3 className={style.overview}>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Enhanced Rankings and Organic Traffic:</strong> By leveraging our expertise and tailored strategies, you can expect improved search engine rankings and increased organic traffic to your website. This leads to higher click-through rates, conversions, and revenue growth.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Improved Website Performance:</strong> Our SEO consultancy services focus on optimizing your website's technical aspects, backlink strategy, and content to enhance its performance and user experience. This results in better search engine rankings, increased engagement, and improved website authority.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Customized Training and Support:</strong> We provide comprehensive SEO training and coaching to equip you and your team with the necessary skills and knowledge. Our experts guide you through the best practices, techniques, and tools, enabling you to implement effective SEO strategies independently.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Measurable Results and ROI:</strong> Our data-driven approach ensures that the progress and success of your SEO campaigns are measurable. We provide clear-cut reports, metrics, and analysis, allowing you to track the effectiveness of our services and witness the tangible results and return on investment.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span>By partnering with NSP for your SEO consultancy needs, you can access industry-leading expertise, customized strategies, and a results-oriented approach. We aim to help you improve your rankings, drive high-value traffic, and achieve long-term success in the ever-evolving digital landscape. Contact our award-winning SEO specialists today and unlock the full potential of your online presence.</span>
                            </div>
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
