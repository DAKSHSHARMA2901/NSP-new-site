'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import style from '../celebrity-seo/newservices.module.css'

const faqData = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is SEO content writing?',
    paragraph: 'Content Writing is a type of Digital Marketing that uses words to create a compelling story. It includes Website Content Writing, Advertising Content Writing & Marketing Content Writer services in order to attract target audiences and convert them into customers. It also involves creating unique and quality content for your website as well as developing best content writing services to enhance visibility in Search Engines.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why is SEO content writing important for websites?',
    paragraph: 'SEO content writing is an essential part of digital marketing, as it helps websites rank higher in search engine results. It also provides website readers with valuable, informative content that can be used to advertise services and products. Content writing services can help businesses create quality content that could result in increased website traffic and website conversions.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does SEO content writing help in improving search engine rankings?',
    paragraph: 'SEO content writing helps improve search engine rankings by creating keyword-rich, optimized content that is engaging and informative which increases website visibility. This can be done through website content writing services, digital marketing content writing, advertisement content writing and hiring a professional content agency.'
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are the key elements of effective SEO content writing?',
    paragraph: 'Content writing for SEO is the practice of creating content that uses keywords and phrases in a way that maximizes its visibility on search engine results pages. This includes optimizing titles, tags, URLs, imagery and more. To start a content writing agency, you\'ll need an understanding of SEO principles as well as excellent written communication skills.'
  }
]

export default function KeywordSeo() {
  const [selection, setSelection] = useState<number | null>(null)
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm('service_xeikd6k', 'template_184dkpm', form.current, {
          publicKey: 'n--h-ZLHb25m5t0A1',
        })
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    }
  }

  const toggle = (i: number) => {
    if (selection === i) {
      return setSelection(null)
    }
    setSelection(i)
  }

  return (
    <>
      <Head>
        <title>Drive Traffic and Leads: SEO for Keywords Research</title>
        <meta name="description" content="Our SEO services for Keywords Research drive targeted traffic and leads to boost your business. Get SEO Services in the Keywords Research." />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/seo-keywords-research" />
        <meta property="og:title" content="Drive Traffic and Leads: SEO for Keywords Research" />
        <meta property="og:description" content="Our SEO services for Keywords Research drive targeted traffic and leads to boost your business. Get SEO Services in the Keywords Research." />
        <meta property="og:site_name" content="NSP Global Services" />
        <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/nsp_global" />
        <meta name="twitter:title" content="Drive Traffic and Leads: SEO for Keywords Research" />
        <meta name="twitter:description" content="Our SEO services for Keywords Research drive targeted traffic and leads to boost your business. Get SEO Services in the Keywords Research." />
        <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/seo-keywords-research" />
      </Head>
      <Header />

      <div className={style.container1}>
        <img 
          src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop" 
          style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
          alt="SEO Keywords Research Services" 
        />
        <h1 className={style.title_Pininterest}>SEO Services for Keywords Research</h1>
      </div>

      <div className={style.container2}>
        <div className={style.container2div1}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop" 
              className={style.endImages1} 
              alt="Keyword Research" 
            />
          </div>

          <div className={style.container2div2}>
            <h4 className={style.container2div2_hfour}>Services</h4>
            <ul className={style.container2div2_ul}>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/mobile-seo" className={style.container2_atag}>
                  Mobile SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/seo-consultancy" className={style.container2_atag}>
                  SEO Consultancy
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/shopify-seo" className={style.container2_atag}>
                  Shopify SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/wordpress-seo" className={style.container2_atag}>
                  WordPress SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/on-page-seo" className={style.container2_atag}>
                  On-Page SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/technical-seo" className={style.container2_atag}>
                  Technical SEO
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.container2div4}>
            <h4 className={style.container2div4_hfour}>Get A Quote</h4>
            <form ref={form} onSubmit={sendEmail} className={style.container2div4_form}>
              <input 
                placeholder="Your Name" 
                type="text" 
                name="user_name" 
                className={style.container2div4_input} 
                required 
              />
              <input 
                placeholder="Your email" 
                type="email" 
                name="user_email" 
                className={style.container2div4_input} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Enter your message" 
                className={style.container2div4_textarea} 
                cols={30} 
                rows={10} 
                required
              />
              <input type="submit" className={style.container2div4_btn} value="Send" />
            </form>
          </div>

          <div className={style.container2div6}>
            <h4 className={style.container2div6_hfour}>Need Help?</h4>
            <p className={style.container2div6_ptag}>
              Get started with NSP's expert SEO Keyword Research Services to maximize your digital potential and achieve measurable growth.
            </p>
            <div className={style.container2div6_icons}>
              <div className={style.container2div6_icon}>
                <MdEmail size={24} />
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
              <span className={style.container2div10_span2}>Increase in website traffic</span>
            </div>
            <div className={style.container2div10_box}>
              <span className={style.container2div10_span1}>98%</span>
              <span className={style.container2div10_span2}>Increase in conversion rates</span>
            </div>
            <div className={style.container2div10_box}>
              <span className={style.container2div10_span1}>99%</span>
              <span className={style.container2div10_span2}>Increase in leads generation</span>
            </div>
          </div>

        <main>
          <div className={style.container2div3}>
            <h2 className={style.container2div3_hone}>Overview</h2>
            <p className={style.container2div3_ptag}>
              Keyword research is a crucial aspect of digital marketing that can revolutionize your SEO strategy. It involves understanding what your target audience is searching for online and how they search for it. By gaining this insight, you can optimize your website content and digital campaigns to drive more traffic, conversions, and a higher return on investment (ROI).
            </p>
          </div>

          <div className={style.container2div5}>
            <h2 className={style.container2div5_hone}>Key Factors</h2>
            
            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} />
              <div>
                <h4 className={style.keyfactorHeading}>Comprehensive Research</h4>
                <p className={style.container2div5_blog_p}>
                  Our SEO experts utilize advanced tools and technologies to analyze keywords based on search volume, competition level, and relevance to your business. This ensures a thorough understanding of the keyword landscape.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} />
              <div>
                <h4 className={style.keyfactorHeading}>In-depth Analysis</h4>
                <p className={style.container2div5_blog_p}>
                  We go beyond basic keyword research and categorize keywords based on user intent and search volume. This granular analysis helps uncover valuable insights and opportunities for optimization.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} />
              <div>
                <h4 className={style.keyfactorHeading}>Competitor Analysis</h4>
                <p className={style.container2div5_blog_p}>
                  We identify keyword gaps and opportunities by conducting expert competitor analysis. This enables us to develop strategies that give your business a competitive edge in the digital landscape.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} />
              <div>
                <h4 className={style.keyfactorHeading}>Ongoing Tracking and Fine-tuning</h4>
                <p className={style.container2div5_blog_p}>
                  Our services include comprehensive tracking and continuous optimization of your campaign strategies. This ensures that your SEO efforts remain effective and aligned with your business goals.
                </p>
              </div>
            </div>
          </div>

          <div className={style.container2div7}>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=450&h=350&fit=crop" 
              className={style.container2div5_img} 
              alt="Keyword Research Strategy" 
            />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=450&h=350&fit=crop" 
              className={style.container2div5_img} 
              alt="SEO Analysis" 
            />
          </div>

          <div className={style.container2div8}>
            <h3 className={style.container2div8_hthree}>Key Benefits</h3>
            <ul className={style.container2div8_ul}>
              <li className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Increased Website Traffic: </strong>
                    By targeting relevant keywords, your website will attract more qualified traffic from search engines, leading to increased visibility and potential customers.
                  </span>
              </li>
              <li className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Improved Conversions: </strong>
                    Optimizing your website content and campaigns based on keyword research ensures that you deliver the right message to the right audience, increasing conversion rates.
                  </span>
              </li>
              <li className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Enhanced ROI: </strong>
                    Investing in SEO keyword research can provide a significant return on investment by driving organic traffic, improving conversions, and ultimately increasing revenue.
                  </span>
              </li>
              <li className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Expert Guidance: </strong>
                    With our proven track record and experienced team of SEO professionals, you can rely on our expertise to guide you through the keyword research process and help you achieve measurable growth and success.
                  </span>
              </li>
              <li className={style.container2div8_li}>
                  <span>
                    With NSP's SEO Keyword Research Services, you can unlock the full potential of your digital marketing strategy. We offer comprehensive research and analysis, actionable recommendations, and ongoing tracking to drive website traffic, conversions, and revenue—partner with us to leverage our expertise and cutting-edge technology for unparalleled success in the digital landscape. Join our satisfied customers and take your business to new heights today.
                  </span>
              </li>
            </ul>
          </div>
        </main>
      </div>

      <div className={style.FAQS}>
        <div>
          <img 
            className={style.faq} 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop" 
            alt="FAQ" 
          />
        </div>
        <div className={style.wrapper}>
          <h2 className={style.accordion_h2}>Frequently Asked Questions</h2>
          <div className={style.accordion}>
            {faqData.map((element, i) => (
              <div key={element.id}>
                <div 
                  className={style.title_1} 
                  onClick={() => toggle(i)}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>
                    {element.icon}
                    <h2 className={style.accodion_h2}>{element.statement}</h2>
                  </div>
                </div>
                <div className={selection === i ? `${style.contain} ${style.show}` : style.contain}>
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
