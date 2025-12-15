'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link'
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import style from '../celebrity-seo/newservices.module.css';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What is Nationwide SEO?',
        paragraph: 'Nationwide SEO is a strategy that helps businesses reach the highest possible ranking in both local and national search engine result pages (SERPs). It involves optimizing content, researching competitor analysis, creating effective outreach campaigns and a tailored SEO strategy for each business. This includes evaluating its existing web traffic, competitor rankings, services packages offered by an SEO agency/expert, pricing models and targeted marketing campaigns to maximize organic search visibility. With the help of Nationwide SEO services, businesses can achieve their desired national online presence and web traffic in an effective manner.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why is Nationwide SEO important for businesses with a national or global audience?',
        paragraph: `Nationwide SEO is a key component for businesses seeking to reach a global or national audience, as it helps build visibility in all geographic regions. Through National Seo Services, companies can create tailored campaigns and web traffic, competitor analysis, rankings, marketing strategies and packages that are optimized for the national market. The right partnership with a national seo agency or expert will help give businesses the competitive edge they need to stand out online.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are the key elements of successful Nationwide SEO?',
        paragraph: `Having a comprehensive National SEO Campaign is the key to successful Nationwide SEO. To truly maximize success, your strategy should include relevant keyword research, competitor analysis and national rankings tracking. Furthermore, investing in national SEO packages with an expert and/or agency will help you develop effective strategies for optimizing content and marketing your website nationally. Finally, be sure to factor in cost when selecting the best National SEO company or agency for your needs.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How can I optimize my website for Nationwide SEO?',
        paragraph: `To optimize your website for Nationwide SEO, the first step is to conduct a comprehensive National Seo Competitor Analysis. This will help you understand where you rank in comparison to other websites and what strategies are effective at driving national web traffic. Next, devise a custom National Seo strategy specific to your website that includes best practices such as keyword research, content creation, link building and local citation submissions. Lastly, partner with an experienced national seo company or agency who can provide packages for both on-page and off-page optimization services plus any additional marketing needs you may have at a competitive pricing point.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are some common Nationwide SEO mistakes to avoid?',
        paragraph: `When undertaking a Nationwide SEO campaign, one of the most common mistakes is to rely solely on keyword placement while neglecting content quality. Additionally, it's important to have a comprehensive understanding of the latest national SEO trends and hiring an experienced national SEO expert can help you create better content, manage national SEO pricing effectively and develop effective national SEO marketing strategies. Furthermore, having a clear goal in mind when outsourcing your national search engine optimization services will provide greater clarity and precision with regards to outcome measurement.`
    }
]

export default function NationwideSEO() {
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
        emailjs
            .sendForm('service_xeikd6k', 'template_184dkpm', form.current!, {
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

    return (
        <>
            <Head>
                <title>Nationwide SEO Services | National Search Optimization Experts</title>
                <meta name="description" content="Take your business to new heights with our comprehensive Nationwide SEO services. Drive visibility, traffic, and conversions across the entire country." />
                <meta name="keywords" content="nationwide SEO, national SEO, nationwide search optimization, national rankings" />
            </Head>
            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Nationwide SEO Services" />
                <h1 className={style.title_Local_SEO}>Nationwide SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"} className={style.endImages1} alt="Nationwide SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h3>Services</h3>
                        <Link href="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        <Link href="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>E-commerce SEO</Link>
                        <Link href="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        <Link href="/seo-services/celebrity-seo" className={style.container2_atag}>Celebrity SEO</Link>
                        <Link href="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO</Link>
                    </div>
                    
                    <div className={style.container2div4}>
                        <h3>Get a Quote</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Your Name" required />
                            <input type="email" name="user_email" placeholder="Your Email" required />
                            <input type="tel" name="user_phone" placeholder="Your Phone" required />
                            <textarea name="message" placeholder="Your Message" rows={4} required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    
                    <div className={style.container2div6}>
                        <MdEmail size={40} />
                        <h3>Need Help?</h3>
                        <p>Expand your reach nationwide with our proven SEO strategies</p>
                    </div>
                    
                    <div className={style.container2div10}>
                        <h3>Our Outcomes</h3>
                        <div className={style.outcomeBox}>
                            <h4>95%</h4>
                            <p>National Visibility Increase</p>
                        </div>
                        <div className={style.outcomeBox}>
                            <h4>98%</h4>
                            <p>Organic Traffic Growth</p>
                        </div>
                        <div className={style.outcomeBox}>
                            <h4>93%</h4>
                            <p>Conversion Rate Improvement</p>
                        </div>
                    </div>
                </aside>
                
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2>Overview</h2>
                        <p>Take your business to new heights with our comprehensive Nationwide SEO services. Whether you&apos;re expanding from local to national markets or establishing a new nationwide presence, our expert team delivers tailored strategies that drive visibility, traffic, and conversions across the entire country. We combine advanced SEO techniques with in-depth market analysis to help you dominate national search results and outperform competitors in every region.</p>
                        
                        <h2>Key Factors</h2>
                        <p>We develop a robust nationwide SEO strategy that targets high-value search terms across different regions and demographics. Our approach includes competitive analysis, search volume research, and targeted copy/link building to ensure your content stays #1 nationwide.</p>
                    </div>
                
                    <div className={style.container2div5}>
                        <h3>Our Nationwide SEO Services Include:</h3>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Comprehensive Keyword Strategy</h4>
                                <p>Even when targeting a nationwide audience, location matters. We develop your website for multiple areas/cities-locations, creating tailored content to capture markets across diverse geographic regions.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Multi-Location Optimization</h4>
                                <p>Establishing nationwide authority requires a strategic link building campaign. We secure high-quality backlinks from authoritative publications and relevant directories to boost your credibility in every region.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Authority Building</h4>
                                <p>We develop strategies that create positive, objective solutions that create unprecedented content rankings that address the needs of diverse audiences across the country, conducting regional/SEO-optimized content that drives engagement and conversions at scale.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Content Scalability</h4>
                                <p>Ensuring nationwide establishment requires strategic investment. Our experts consistently curate audit to ensure each has been properly ranking. With Google&apos;s mobile-first indexing, the mobile version of your site is what Google uses for ranking. We ensure your mobile site performs exceptionally to capture traffic from both mobile and desktop users nationwide.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.container2div7}>
                        <img src={'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=424&h=324&fit=crop'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Nationwide SEO Service" />
                        <img src={"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=424&h=324&fit=crop"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="National SEO Strategy" />
                    </div>
                    
                    <div className={style.container2div8}>
                        <h3>Key Benefits:</h3>
                        <ul>
                            <li><strong>Expanded Market Reach:</strong> Nationwide SEO opens doors to customers across the entire country, by appealing to national search queries to multiple major cities, you accelerate brand visibility and discovery</li>
                            <li><strong>Competitive Advantage:</strong> Most businesses focus on local SEO, leaving significant vacuums in national results. By investing in a full-scale nationwide SEO strategy that maintains focus on top-of-funnel keywords, you'll see consistent branded in search rankings, leading to more traffic, leads, and revenue than your competitors.</li>
                            <li><strong>Scalable Growth:</strong> Building nationally establishes your business as an industry authority. When companies seek out partners or customers navigate to B2B platforms, your strong national rankings ensure you stand out as a premium, credible choice, which can lead to lucrative partnerships or expanded commercial opportunities.</li>
                            <li><strong>Brand Authority:</strong> Improved rankings lead to effective conversions. Our national SEO strategy not only drives traffic—it's focused on user intent so that visitor take action on your site, turning visitors into paying customers.</li>
                            <li><strong>Cost-Effective Marketing:</strong> Compared to traditional nationwide advertising and paid media campaigns, our organically earned rankings deliver steady ROI while building, making certain resources more cost-free over the long haul after the initial investment.</li>
                        </ul>
                    </div>
                </main>
            </div>
            
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop"} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2>Frequently Asked Questions</h2>
                    {data.map((item, i) => (
                        <div key={item.id} className={style.accordation}>
                            <div className={style.statement} onClick={() => toggle(i)}>
                                <p>{item.statement}</p>
                                <span className={selection === i ? style.iconRotated : ''}>{item.icon}</span>
                            </div>
                            {selection === i && (
                                <div className={style.paragraph}>
                                    <p>{item.paragraph}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </>
    )
}
