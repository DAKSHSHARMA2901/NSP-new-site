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
        statement: 'What is Mobile SEO?',
        paragraph: `Mobile SEO focuses on optimizing websites to deliver a seamless and engaging experience for users accessing them from mobile devices. This includes making sure that the content is properly structured, improving navigation and page loading speed, and creating site designs that are optimized for smaller screens. Additionally, Google evaluates sites for its mobile-optimized criteria to help determine whether webpages appear in mobile search results. To increase visibility on Google's Mobile Search Results, ensure your site meets all the requirements of a mobile-optimized page by optimizing titles, meta descriptions, images and other content.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why is Mobile SEO important?',
        paragraph: `Mobile SEO is important because it is essential to optimize your website for mobile devices. Google indexes web pages and ranks them according to their mobile optimization, making sure that only the most optimized and user-friendly sites appear in the top search results on mobile devices. To ensure that your website is optimized for both desktop and mobile searches, use practices such as responsive design and optimize page speed, create relevant content, properly format text size, page titles etc., use alternative image formats like WebP or JPEG 2000 that are supported by all browsers, as well as analyze user behaviour through demographics and usage reports.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How is Mobile SEO different from Desktop SEO?',
        paragraph: `Mobile SEO is different from desktop SEO because it requires additional optimization techniques such as creating Google Mobile Optimized Pages, making sure that the website and its HTML code are mobile-friendly, and improving the loading speeds of mobile pages to appear higher in Google's mobile search results. These optimizations help websites improve their visibility in mobile search results and make them more competitive when people search for related topics on mobile devices.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are some best practices for Mobile SEO?',
        paragraph: `Mobile SEO is all about optimizing your website for users on smartphones and tablets so that they get the best user experience and can easily find your page in Google's mobile search results. There are several key areas to focus on - ensure your site is mobile-friendly, create content specifically designed for devices, optimize page titles & descriptions, use relevant keywords, speed up loading time and monitor mobile rankings. Following these best practices will keep you ahead of the competition in Google's mobile search results.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: `How does Google's Mobile-first indexing affect Mobile SEO?`,
        paragraph: `Mobile-first indexing is a change that Google has implemented in order to improve mobile search results. It means that when crawling websites, Google looks at the mobile version of a page instead of its desktop version as the primary source of information. This will mean improved relevancy, better click-through rates on mobile searches, and an increased focus on optimizing content for mobile, benchmarked through metrics such as page speed and user experience. Consequently, SEOs must now make sure their sites are optimized for both desktop and mobile devices if they want to rank higher in Google's SERPs for both kinds of searches.`
    }
]

export default function MobileSEO() {
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
                <title>Mobile SEO Services | Mobile-First Optimization Experts</title>
                <meta name="description" content="Professional Mobile SEO services to optimize your website for mobile devices. Improve mobile rankings, speed, and user experience." />
                <meta name="keywords" content="mobile SEO, mobile optimization, mobile-first indexing, responsive design" />
            </Head>
            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=400&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Mobile SEO Services" />
                <h1 className={style.title_Local_SEO}>Mobile SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop"} className={style.endImages1} alt="Mobile SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h3>Services</h3>
                        <Link href="/seo-services/small-business-seo" className={style.container2_atag}>Small Business SEO</Link>
                        <Link href="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        <Link href="/seo-services/backlink-audit" className={style.container2_atag}>Backlink Audit</Link>
                        <Link href="/seo-services/seo-audits" className={style.container2_atag}>SEO Audit</Link>
                        <Link href="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        <Link href="/seo-services/seo-keywords-research" className={style.container2_atag}>Keywords Research</Link>
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
                        <p>Boost Your Mobile SEO and Page Speed with Our Bespoke Services</p>
                    </div>
                    
                    <div className={style.container2div10}>
                        <h3>Our Outcomes</h3>
                        <div className={style.outcomeBox}>
                            <h4>95%</h4>
                            <p>Increase in Mobile Traffic</p>
                        </div>
                        <div className={style.outcomeBox}>
                            <h4>98%</h4>
                            <p>Better Mobile User Experience</p>
                        </div>
                        <div className={style.outcomeBox}>
                            <h4>92%</h4>
                            <p>Improved Mobile Rankings</p>
                        </div>
                    </div>
                </aside>
                
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2>Overview</h2>
                        <p>In today&apos;s mobile-first world, optimizing your website for mobile devices is no longer optional—it&apos;s essential. Our Mobile SEO services ensure your website delivers an exceptional user experience on smartphones and tablets while achieving top rankings in mobile search results.</p>
                        
                        <h2>Key Factors</h2>
                        <p>Our comprehensive mobile optimization strategy focuses on four critical areas that drive mobile search success:</p>
                    </div>
                
                    <div className={style.container2div5}>
                        <h3>Our Mobile SEO Services Include:</h3>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Mobile-First Design</h4>
                                <p>Responsive layouts that adapt seamlessly to any screen size, ensuring optimal viewing and interaction across all mobile devices.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Page Speed Optimization</h4>
                                <p>Lightning-fast loading times through image optimization, code minification, and advanced caching strategies for mobile networks.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Mobile Usability Enhancement</h4>
                                <p>Touch-friendly navigation, readable fonts, and optimized button sizes that create an intuitive mobile browsing experience.</p>
                            </div>
                        </div>
                        
                        <div className={style.factor}>
                            <MdCheckCircle className={style.checkIcon} />
                            <div>
                                <h4>Mobile-First Indexing Compliance</h4>
                                <p>Full compliance with Google&apos;s mobile-first indexing to ensure your mobile version ranks as well as your desktop site.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.container2div7}>
                        <img src={'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=424&h=324&fit=crop'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Mobile SEO Service" />
                        <img src={"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=424&h=324&fit=crop"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Mobile Optimization" />
                    </div>
                    
                    <div className={style.container2div8}>
                        <h3>Key Benefits:</h3>
                        <ul>
                            <li><strong>Increased Mobile Traffic:</strong> Capture more mobile searchers with optimized mobile presence</li>
                            <li><strong>Better User Experience:</strong> Reduced bounce rates through seamless mobile navigation</li>
                            <li><strong>Higher Conversion Rates:</strong> Mobile-optimized checkout and contact forms</li>
                            <li><strong>Competitive Advantage:</strong> Outrank competitors in mobile search results</li>
                            <li><strong>Future-Proof Strategy:</strong> Stay ahead as mobile usage continues to dominate</li>
                        </ul>
                    </div>
                </main>
            </div>
            
            <div className={style.FAQS}>
                <div>
                    <img className={style.faq} src={"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop"} alt="FAQ" />
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
