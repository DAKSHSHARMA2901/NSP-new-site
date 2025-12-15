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
        statement: 'What is YouTube SEO?',
        paragraph: 'YouTube SEO is a process of optimizing both on-page and off-page elements to make your YouTube videos more visible in the organic search results. This includes using techniques such as setting titles, tags, descriptions, and other relevant transcripts; promotion of content; building relationships with influencers; conducting keyword research for further optimization; implementing backlinks to improve ranking among other strategies.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is YouTube SEO important?',
        paragraph: 'YouTube SEO is an essential part of getting your content seen. It involves optimizing the relevant keywords that people may search for to find your video or channel, as well as ensuring your videos are optimized and have a good user engagement rate.'
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is YouTube SEO different from traditional SEO?',
        paragraph: 'YouTube SEO is different from traditional SEO because it involves optimizing for the algorithms of a search engine, YouTube own. It also requires factors specific to video content, such as including relevant keywords in titles and descriptions, using thumbnails that are aesthetically pleasing and eye-catching, increasing watch time by creating longer videos with subtitles and transcripts, promoting on social media channels to gain followers and channel subscribers, etc.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some best practices for YouTube SEO?',
        paragraph: 'When it comes to YouTube SEO, there are some key best practices you will want to keep in mind. Start by optimizing your channel — use relevant keywords, include an interesting and informative description, be sure to optimize titles and descriptions for each video on the channel. Additionally, create consistent content with engaging videos based off of keyword research, link back to other videos or channels as much as possible and leverage playlists for ranking purposes. Finally, do not forget about tagging; use important search engine optimization tags in order to get more organic reach for your channel or video. Utilizing all of these strategies can help to substantially improve your YouTube rankings and gain a larger viewership!'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my video titles and descriptions for YouTube SEO?',
        paragraph: 'Optimizing your YouTube video titles and descriptions for SEO is key to improving your ranking in search results. Start by including relevant keywords within the title, description, and tags that are related to your content. Additionally, utilizing backlinks to other videos or external sources can also help increase visibility with search engine algorithms. Finally, make sure you are consistently creating quality content and engaging with viewers on a regular basis - this will set you up for success!'
    }
]

export default function Youtubeseo() {
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
                <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/youtube-seo" />
                <meta property="og:title" content="Expert YouTube SEO Company | Rank Higher and Grow Your Channel" />
                <meta property="og:description" content="NSP provides affordable YouTube SEO Services online. Our YouTube optimisation services assist your company (and its channel) in increasing views, likes, comments, and subscribers while also increasing brand awareness." />
                <meta property="og:site_name" content="NSP Global Services" />
                <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://twitter.com/nsp_global" />
                <meta name="twitter:title" content="Expert YouTube SEO Company | Rank Higher and Grow Your Channel" />
                <meta name="twitter:description" content="NSP provides affordable YouTube SEO Services online. Our YouTube optimisation services assist your company (and its channel) in increasing views, likes, comments, and subscribers while also increasing brand awareness." />
                <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
                <title>Expert YouTube SEO Company | Rank Higher and Grow Your Channel</title>
                <meta name="description" content='NSP provides affordable YouTube SEO Services online. Our YouTube optimisation services assist your company (and its channel) in increasing views, likes, comments, and subscribers while also increasing brand awareness.' />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/youtube-seo" />
            </Head>

            <Header />
            
            <div className={style.container1}>
                <img src={"https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1920&h=600&fit=crop"} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="YouTube SEO Services" />
                <h1 className={style.title_Local_SEO}>YouTube SEO Services</h1>
            </div>
            
            <div className={style.container2}>
                {/* Sidebar */}
                <aside className={style.sidebar}>
                    <div className={style.container2div1}>
                        <img src={"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"} className={style.endImages1} alt="YouTube SEO" />
                    </div>
                    
                    <div className={style.container2div2}>
                        <h4 className={style.container2div2_hfour}>Services</h4>
                        <ul className={style.container2div2_ul}>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/international-seo" className={style.container2div2_atag}>International SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/seo-consultancy" className={style.container2div2_atag}>SEO Consultancy</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/shopify-seo" className={style.container2div2_atag}>Shopify SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/on-page-seo" className={style.container2div2_atag}>On-Page SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/technical-seo" className={style.container2div2_atag}>Technical SEO</Link>
                            </li>
                            <li className={style.container2div2_li}>
                                <Link href="/seo-services/link-building-services" className={style.container2div2_atag}>Link Building Services</Link>
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
                        <p className={style.container2div6_ptag}>Are you prepared to elevate your YouTube channel to new heights? Let us chat.</p>
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
                            <span className={style.container2div10_span2}>Increase in video views</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>223%</span>
                            <span className={style.container2div10_span2}>Increase in subscriber growth</span>
                        </div>
                        <div className={style.container2div10_box}>
                            <span className={style.container2div10_span1}>325%</span>
                            <span className={style.container2div10_span2}>Increase in engagement rates</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={style.mainContent}>
                    <div className={style.container2div3}>
                        <h2 className={style.container2div3_hone}>Overview</h2>
                        <p className={style.container2div3_ptag}>
                            YouTube is undeniably one of the most popular social media platforms, with a user base of over 2 billion active monthly users worldwide. Amid this cut-throat competition, optimizing your videos for YouTube search engine optimization (SEO) is crucial to cut through the noise and get your content noticed.
                        </p>
                        <p className={style.container2div3_ptag}>
                            In the highly competitive world of online video content, optimizing your videos for YouTube search engine optimization (SEO) is essential to stand out and gain visibility. Our YouTube SEO services provide a comprehensive solution to all your video optimization needs, saving you time and effort while maximizing your reach and engagement. Our YouTube SEO services offer a turn-key solution, handling all aspects of video optimization. This allows you to focus on other essential elements of your business while we optimize your videos.
                        </p>
                    </div>
                    
                    <div className={style.container2div5}>
                        <h2 className={style.container2div5_hone}>Key Factors</h2>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Comprehensive Video Optimization</h4>
                                <p className={style.container2div5_blog_p}>
                                    Our team covers all aspects of video optimization, including keyword research and optimizing video thumbnails, titles, descriptions, and tags. We leave no stone unturned to ensure your videos rank higher in YouTube search results.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Video Production Services</h4>
                                <p className={style.container2div5_blog_p}>
                                    We offer video production services to help you create engaging and compelling videos for your channel. Quality content plays a vital role in attracting and retaining viewers.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Strategic Keyword Research</h4>
                                <p className={style.container2div5_blog_p}>
                                    We conduct in-depth keyword research to identify target keywords and optimize your video content accordingly. This includes optimizing video thumbnails, titles, descriptions, and tags to increase visibility and click-through rates.
                                </p>
                            </div>
                        </div>
                        <div className={style.container2div5_blog}>
                            <MdCheckCircle className={style.container2div5_blog_icon} />
                            <div>
                                <h4 className={style.container2div5_blog_h4}>Data-driven Analysis and Reporting</h4>
                                <p className={style.container2div5_blog_p}>
                                    This allows you to make informed decisions, understand audience behaviour, and refine your video marketing approach. We provide comprehensive analytics to track your channel performance and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={style.container2div7}>
                        <img src={'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="YouTube Content Creation" />
                        <img src={'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=424&h=324&fit=crop'} className={style.container2div5_img} alt="Video Marketing" />
                    </div>
                    
                    <div className={style.container2div8}>
                        <h3 className={style.overview}>Key Benefits</h3>
                        <ul className={style.container2div8_ul}>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Expanded Outreach: </strong>
                                    This expands your outreach and helps you engage with a broader community. We have a dedicated team specializing in various aspects of video optimization. With their expertise, you can expect significant improvements in your channel visibility, reach, and engagement.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Increased Engagement: </strong>
                                    Optimized videos increase engagement, including increased views, likes, comments, and subscriptions. This boosts your channel credibility and encourages further interaction.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Improved Brand Image and Awareness: </strong>
                                    Successful YouTube SEO services increase your visibility to a broader audience, enhancing your brand image and awareness. It also drives traffic to your website, further strengthening your online presence.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    <strong>Transparent Reporting and Analytics: </strong>
                                    We provide comprehensive reporting on our efforts and results, keeping you informed about the progress and growth of your YouTube channel. This transparency allows you to track the effectiveness of our services.
                                </span>
                            </li>
                            <li className={style.container2div8_li}>
                                <MdCheckCircle className={style.container2div8_icon} />
                                <span>
                                    With our YouTube SEO services, you can unlock the full potential of your YouTube channel. Our experienced team of experts will optimize your videos, improve visibility, and drive engagement. Whether it is keyword research, video production, or channel optimization, we have you covered. Contact us today for a free consultation and take your YouTube presence to new heights.
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
