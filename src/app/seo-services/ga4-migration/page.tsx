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
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What is GA4 (Google Analytics 4) migration?',
    paragraph: 'Google Analytics 4 (GA4) migration is the process of transitioning from Universal Analytics to GA4 for digital marketing purposes. It can involve using a GA4 migration checklist, creating a GA4 migration plan, and utilizing a variety of GA4 setup and migration tools to ensure successful implementation.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'Why should I consider migrating to GA4?',
    paragraph: 'Google Analytics 4 (GA4) is the evolution of Universal Analytics and offers multiple advantages for digital marketing professionals. It includes more advanced features, better data accuracy, and improved tracking capabilities which are essential for good decision-making when it comes to running effective campaigns.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'How is GA4 different from Universal Analytics?',
    paragraph: 'Google Analytics 4 (GA4) is the successor of Universal Analytics, designed to help businesses capture and analyze data in a more efficient way. With features such as multi-platform support, increased reliability and an enhanced user experience, GA4 is the perfect solution for managing digital marketing campaigns & understanding customer behavior.'
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What data will be migrated during the GA4 migration process?',
    paragraph: 'During GA4 migration, a broad range of data will be migrated from Google Universal Analytics (GA) to the new Analytics 4 platform. This includes user properties and events, custom dimensions and metrics, e-commerce data, funnels & cohorts as well as remarketing audiences and more.'
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'How can I start the GA4 migration for my website?',
    paragraph: 'The best way to migrate from Universal Analytics to Google Analytics 4 (GA4) is by following the GA4 migration checklist, utilizing a migration plan and/or leveraging a specialized GA4 migration tool. This ensures a smooth transition while keeping your digital marketing analytics on track.'
  }
]

export default function Ga4Migration() {
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
        <title>Drive Traffic and Leads: SEO for GA4 Migration</title>
        <meta name="description" content="Our SEO services for GA4 Migration drive targeted traffic and leads to boost your business. Get SEO Services in the GA4 Migration." />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/ga4-migration" />
        <meta property="og:title" content="Drive Traffic and Leads: SEO for GA4 Migration" />
        <meta property="og:description" content="Our SEO services for GA4 Migration drive targeted traffic and leads to boost your business. Get SEO Services in the GA4 Migration." />
        <meta property="og:site_name" content="NSP Global Services" />
        <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/nsp_global" />
        <meta name="twitter:title" content="Drive Traffic and Leads: SEO for GA4 Migration" />
        <meta name="twitter:description" content="Our SEO services for GA4 Migration drive targeted traffic and leads to boost your business. Get SEO Services in the GA4 Migration." />
        <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/ga4-migration" />
      </Head>
      <Header />

      <div className={style.container1}>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" 
          style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
          alt="GA4 Migration Services" 
        />
        <h1 className={style.title_Pininterest}>SEO Services for GA4 Migration</h1>
      </div>

      <div className={style.container2}>
        <aside className={style.sidebar}>
          <div className={style.container2div1}>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop" 
              className={style.endImages1} 
              alt="GA4 Migration" 
            />
          </div>

          <div className={style.container2div2}>
            <h4 className={style.container2div2_hfour}>Services</h4>
            <ul>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/technical-seo" className={style.container2_atag}>
                  Technical SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/seo-keywords-research" className={style.container2_atag}>
                  SEO Keywords Research
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/link-building-services" className={style.container2_atag}>
                  Link Building
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/backlink-audit" className={style.container2_atag}>
                  Backlink Audit
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/seo-audits" className={style.container2_atag}>
                  SEO Audits
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/google-analytics-services" className={style.container2_atag}>
                  Google Analytics
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
              Reimagine Your Tracking with GA4
            </p>
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

        <main className={style.mainContent}>
          <div className={style.container2div3}>
            <h2 className={style.overview}>Overview</h2>
            <p>
              Google Analytics 4 is a revolutionary tracking solution that provides a new way to understand and analyze visitor behaviour on your website. Using event and session-based tracking, Google Analytics 4 offers enhanced insights into how visitors interact with your site. It's time to upgrade your tracking methods and gain a comprehensive understanding of how people are using your website today.
            </p>
          </div>

          <div className={style.container2div5}>
            <h2 className={style.container2div5_hone}>Key Factors</h2>
            
            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Universal Analytics to GA4 Migration</h4>
              </div>
              <p>
                Switch from Universal Analytics to Google Analytics 4 and unlock the benefits. Our migration checklist ensures a swift and accurate transfer of your data. We provide a migration plan and tools to facilitate a seamless transition.
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Transform Your Business</h4>
              </div>
              <p>
                Google Analytics 4 empowers you to track the success of your website and make informed decisions that can drive transformative changes to your business. With precise data and insights into visitor behaviour, you can optimize your website's performance and increase your return on investment (ROI).
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Early Preparation</h4>
              </div>
              <p>
                Preparing for the migration to Google Analytics 4 is crucial now. On July 1st, 2023, Google Universal Analytics (UA) will become obsolete, losing valuable website data. By taking proactive steps, you can stay ahead of the curve and ensure a continuous flow of essential data.
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Our Expert Assistance</h4>
              </div>
              <p>
                We offer comprehensive guidance and support to prepare you for the Google Analytics account migration. Our experienced team will ensure a smooth transition and provide insights on leveraging the latest features in Google Analytics 4 to maximize the potential of your data.
              </p>
            </div>
          </div>

          <div className={style.container2div7}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="GA4 Analytics Dashboard" 
            />
            <img 
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="GA4 Migration Process" 
            />
          </div>

          <div className={style.container2div8}>
            <h3 className={style.overview}>Key Benefits</h3>
            <ul className={style.container2div8_ul}>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Enhanced Analysis Techniques with GA4 Explorations: </strong>
                    Dive deep into user behaviour data with GA4 Explorations. Create custom segments, explore machine learning insights, and test hypotheses to identify trends and optimize your landing pages based on accurate insights.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Advanced Machine Learning and Predictive Modeling: </strong>
                    Leverage GA4's built-in machine learning capabilities to gain precise and comprehensive insights into user behaviour. Predictive modelling lets you anticipate user needs and adjust content and messaging in real-time for improved engagement.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Privacy-Centric Data Model: </strong>
                    GA4 prioritizes privacy by design. It collects and analyzes data while ensuring compliance with privacy regulations like GDPR. Adjust data retention settings, utilize Google's Consent Mode, and easily manage data deletion requests while extracting valuable insights from user behaviour data.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Four Phases of Implementation: </strong>
                    Follow a structured process for optimizing your landing page with user behaviour data. This includes initial planning/discovery, architecture and implementation, quality assurance, and deployment. You can achieve optimal performance by addressing key variables such as design, messaging, and user experience.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span>
                    In summary, Google Analytics 4 offers a range of powerful features and approaches to optimize your landing pages and transform your business. With advanced analysis techniques, machine learning capabilities, privacy-centric design, and a systematic implementation process, GA4 empowers you to make data-driven decisions and unlock the full potential of your website data.
                    <br /><br />
                    Take the Leap to GA4 and Unlock the Potential of Your Data!
                  </span>
                </div>
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
                  style={{ backgroundColor: 'white', height: '90px' }} 
                  onClick={() => toggle(i)}
                >
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
