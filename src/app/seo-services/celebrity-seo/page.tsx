'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import style from './newservices.module.css'
import { GoPlus } from '@/lib/react-icons-go-shim'
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'What are Celebrity SEO Services, and how do they work?',
        paragraph: `Celebrity SEO services are specialized strategies designed to enhance the online visibility and reputation of public figures like actors, musicians, influencers, and athletes. These services include optimizing search engine rankings for official profiles, improving personal branding through tailored content, and managing online reputations. By targeting relevant keywords and curating positive content, these services ensure celebrities maintain a polished, professional digital presence while engaging effectively with their audience.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'Why do celebrities need SEO for their online presence?',
        paragraph: `Celebrities need SEO to control their digital narrative, protect their reputations, and connect more authentically with fans. With constant online scrutiny, misinformation and negative press can impact their public image. SEO for celebrities ensures positive, accurate information ranks higher in search results, amplifying achievements and personal branding. It also helps expand their reach, making it easier for the right audience to find them.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How long does it take to see results from Celebrity SEO strategies?',
        paragraph: `Results from celebrity SEO strategies typically start to show within 3 to 6 months, depending on factors like the current online presence, competition, and goals. While some improvements, like ranking for specific keywords, may appear sooner, long-term reputation building and branding require consistent effort and monitoring for lasting impact.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
        statement: 'How much do Celebrity SEO services typically cost?',
        paragraph: `The cost of celebrity SEO services can vary widely, depending on factors like the scope of services, industry competition, and specific needs. On average, prices range from a few thousand to tens of thousands of dollars per month for comprehensive strategies, including reputation management, content creation, and ongoing optimization. Custom pricing is often provided based on individual requirements.`
    }
]

export default function Celebrityseo() {
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
    const [showMore, setShowMore] = useState(false);
    
    const toggle = (i: number) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }

    const additionalContent = (
        <div className={style.additionalContent}>
            <div className={style.contentSection}>
                <h2 className={style.contentHeading}>How Our Celebrity SEO Strategy Works</h2>
                <p className={style.contentPara}>At NSP Global Services, we follow a streamlined yet personalized approach to deliver impactful results:</p>

                <div className={style.strategyPoint}>
                    <h3 className={style.subHeading}>Initial Assessment</h3>
                    <p className={style.contentPara}>We start with a detailed analysis of your online presence to identify gaps in visibility, reputation, and branding.</p>
                </div>

                <div className={style.strategyPoint}>
                    <h3 className={style.subHeading}>Keyword Optimization</h3>
                    <p className={style.contentPara}>Using precise keywords like "SEO for celebrities" and "personalized SEO plans for celebrities," we optimize your website, social profiles, and content.</p>
                </div>

                <div className={style.strategyPoint}>
                    <h3 className={style.subHeading}>Content Creation and Curation</h3>
                    <p className={style.contentPara}>Our team produces high-quality, engaging content to reflect your brand identity while addressing audience needs.</p>
                </div>

                <div className={style.strategyPoint}>
                    <h3 className={style.subHeading}>Ongoing Monitoring and Management</h3>
                    <p className={style.contentPara}>Our tools and experts continually monitor your search rankings and online mentions, adjusting strategies as needed.</p>
                </div>

                <div className={style.strategyPoint}>
                    <h3 className={style.subHeading}>Reputation Recovery</h3>
                    <p className={style.contentPara}>If negative content affects your image, we employ advanced tactics to mitigate its impact and restore your reputation.</p>
                </div>
            </div>

            <div className={style.contentSection}>
                <h2 className={style.contentHeading}>Online Reputation Management for Celebrities</h2>
                <p className={style.contentPara}>Maintaining control over your online image goes hand-in-hand with being a public figure. Online reputation management for celebrities involves responding proactively to criticism, addressing false information, and maintaining consistent messaging across platforms. With our expertise, we help minimize risks and promote a positive spotlight on your achievements.</p>
            </div>

            <div className={style.contentSection}>
                <h2 className={style.contentHeading}>Personal Branding Through SEO</h2>
                <p className={style.contentPara}>Building and strengthening your brand is crucial to remaining relevant in a competitive, fast-paced industry. Personal branding SEO integrates thoughtful keyword selection, content promotion, and optimization to enhance how you are perceived online. Whether you're launching a new project or reinforcing an established identity, we ensure your brand remains at the forefront.</p>
            </div>

            <div className={style.contentSection}>
                <h2 className={style.contentHeading}>Why Choose NSP Global Services for Celebrity SEO</h2>
                <p className={style.contentPara}>At NSP Global Services, we understand that celebrity SEO is not a one-size-fits-all approach. Our personalized SEO plans for celebrities are tailored to your unique goals, industry dynamics, and personal values. Here's why public figures choose us:</p>

                <div className={style.benefitCard}>
                    <h3 className={style.subHeading}>Expert Team</h3>
                    <p className={style.contentPara}>With years of experience in digital marketing for celebrities, we stay ahead of changing algorithms and trends.</p>
                </div>

                <div className={style.benefitCard}>
                    <h3 className={style.subHeading}>Proven Strategies</h3>
                    <p className={style.contentPara}>Our SEO strategies for public figures are backed by data, ensuring measurable and impactful results.</p>
                </div>

                <div className={style.benefitCard}>
                    <h3 className={style.subHeading}>Discreet and Reliable Service</h3>
                    <p className={style.contentPara}>We value privacy and confidentiality, delivering results without compromising your trust.</p>
                </div>

                <div className={style.benefitCard}>
                    <h3 className={style.subHeading}>Comprehensive Solutions</h3>
                    <p className={style.contentPara}>From keyword optimization to reputation management, we handle every aspect of your online presence.</p>
                </div>
            </div>

            <div className={style.popularSearches}>
                <h2 className={style.contentHeading}>Popular Searches:</h2>
                <div className={style.searchTags}>
                    <span className={style.tag}>OutSourcing SEO Service</span>
                    <span className={style.tag}>Digital Advertising Campaigns</span>
                    <span className={style.tag}>Nationwide SEO</span>
                    <span className={style.tag}>SEO Services for</span>
                    <span className={style.tag}>Celebrity SEO</span>
                    <span className={style.tag}>Luxury SEO</span>
                    <span className={style.tag}>Link Building Services</span>
                    <span className={style.tag}>SEO Competitor Analysis</span>
                    <span className={style.tag}>SEO Audit & Analysis</span>
                    <span className={style.tag}>International SEO</span>
                    <span className={style.tag}>SaaS SEO Services</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Head>
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/celebrity-seo" />
                <meta property="og:title" content="Celebrity SEO Services | Celebrity SEO Company​" />
                <meta property="og:description" content="NSP Global Services offers specialized SEO for celebrities—enhance your personal brand, control your image, and stay visible in search results." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Celebrity SEO Services | Celebrity SEO Company​" />
                <meta name="twitter:description" content="NSP Global Services offers specialized SEO for celebrities—enhance your personal brand, control your image, and stay visible in search results." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Celebrity SEO Services | Celebrity SEO Company​</title>
                <meta name="description" content="NSP Global Services offers specialized SEO for celebrities—enhance your personal brand, control your image, and stay visible in search results." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/celebrity-seo" />
            </Head>
            
            <Header />
            
            <div className={style.container1}>
                <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1746207313/WhatsApp_Image_2025-04-05_at_00.09.26_d6825555_f70qkq.jpg"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="Celebrity SEO Services" />
                <h1 className={style.title_Local_SEO}>Celebrity SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1746207313/WhatsApp_Image_2025-04-05_at_00.09.26_d6825555_f70qkq.jpg"} className={style.endImages1} alt="Celebrity SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul>
                            <li className={style.container2div2_li}>
                                <Link href="/services" className={style.container2_atag}>Digital Marketing</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services" className={style.container2_atag}>Search Engine Optimization</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/services" className={style.container2_atag}>Social Media Marketing</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/design-development" className={style.container2_atag}>Web Design & Development</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/services" className={style.container2_atag}>Business Strategy & Planning</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/services" className={style.container2_atag}>Critical Analysis</Link>
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
                        <p className={style.container2div6_ptag}>Elevate your brand and connect with your fans on a deeper level with our exclusive Celebrity SEO Services.</p>
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
                            <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>96%</span>
                            <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>99%</span>
                            <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                        </div>
                    </div>
                </aside>
                
                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.overview}>What is Celebrity SEO?</h2>
                        <p>Celebrity SEO is a tailored strategy designed to enhance the online presence of public figures, actors, musicians, athletes, and influencers. It focuses on improving search engine visibility, managing reputations, and ensuring positive and accurate information is available online. By leveraging advanced SEO techniques, celebrity SEO services help public figures connect with their fans while maintaining a polished digital image.</p>
                        
                        <h2 className={style.overview}>Online Reputation Management for Celebrities</h2>
                        <p>Maintaining control over your online image goes hand-in-hand with being a public figure. Online reputation management for celebrities involves responding proactively to criticism, addressing false information, and maintaining consistent messaging across platforms. With our expertise, we help minimize risks and promote a positive spotlight on your achievements.</p>
                        
                        <h2 className={style.overview}>Personal Branding Through SEO</h2>
                        <p>Building and strengthening your brand is crucial to remaining relevant in a competitive, fast-paced industry. Personal branding SEO integrates thoughtful keyword selection, content promotion, and optimization to enhance how you are perceived online. Whether you're launching a new project or reinforcing an established identity, we ensure your brand remains at the forefront.</p>
                    </div>
                
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Personalized SEO Strategies</h4>
                        </div>
                        <p>We understand that each celebrity has a distinct image and target audience. Our team of experts will work closely with you to develop a personalized SEO strategy that aligns with your brand values, objectives, and fanbase. From optimizing your social media profiles to creating compelling content, we ensure that your online presence reflects your unique personality and attracts dedicated followers.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Reputation Management</h4>
                        </div>
                        <p>As a celebrity, managing your online reputation is crucial. We employ comprehensive reputation management techniques to monitor and protect your brand image. From proactive social media monitoring to addressing the negative press, we safeguard your reputation and maintain a favorable public perception.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Content Optimization</h4>
                        </div>
                        <p>Engaging and high-quality content is essential for capturing your audience's attention. Our skilled writers and content strategists specialize in creating optimized content showcasing your talents, achievements, and personal insights. We ensure that your content aligns with relevant keywords, attracts organic traffic, and resonates with your fans.</p>
                    </div>
                    
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                            <h4 className={style.keyfactorHeading}>Fan Engagement and Social Media Optimization</h4>
                        </div>
                        <p>Building a strong connection with your fans is paramount. We optimize your social media profiles, implement engagement strategies, and facilitate meaningful interactions with your followers. We help you foster a loyal and dedicated fan base by actively engaging with your audience.</p>
                    </div>
                </div>
                
                <div className={style.container2div7}>
                    <img src={'https://res.cloudinary.com/dyzdnyq0d/image/upload/v1746207263/WhatsApp_Image_2025-04-05_at_00.09.26_896afbac_pwjmmw.jpg'} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="Celebrity SEO Service" />
                    <img src={"https://res.cloudinary.com/dyzdnyq0d/image/upload/v1737400430/20240130_223956_0005_awxsmx.png"} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="SEO Strategy" />
                </div>
                
                <div className={style.container2div8}>
                    <h3 className={style.overview}>Key Benefits of Our Celebrity SEO Services</h3>
                    <ul className={style.container2div8_ul}>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Enhanced Online Visibility:</strong> Our strategies ensure that your official profiles and content rank at the top of search engine results.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Reliable Reputation Management:</strong> We address misinformation and safeguard your digital identity by promoting accurate and positive content.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Personalized Branding Solutions:</strong> Through personal branding SEO, we craft a narrative that reflects your personality and values, solidifying your connection with fans.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Audience Engagement Boost:</strong> With SEO strategies for public figures, your content reaches the right audience to maximize engagement and fan base growth.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span><strong className={style.keyfactorHeading}>Customized Digital Marketing Approach:</strong> Combining celebrity SEO services with digital marketing for celebrities, we create an integrated solution tailored to your goals.</span>
                            </div>
                        </li>
                        <li>
                            <div className={style.container2div8_li}>
                                <span>Elevate your brand and connect with your fans on a deeper level with our exclusive Celebrity SEO Services.</span>
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
            
            <div className={style.readMoreSection}>
                {showMore && additionalContent}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className={style.readMoreButton}
                >
                    {showMore ? 'Show Less' : 'Read More'}
                </button>
            </div>
            
            <Footer />
        </>
    )
}
