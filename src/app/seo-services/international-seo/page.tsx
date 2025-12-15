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
    statement: 'What is International SEO?',
    paragraph: "International SEO is a digital marketing practice focusing on optimizing websites and content around relevant, targeted keywords so they can be shown in search engine results pages (SERPs) to users outside the website's country of origin."
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why is International SEO important?',
    paragraph: "International SEO is important as it helps your business reach customers outside of its home country. The most effective way to internationalize your SEO practices is to hire an International SEO agency or expert who can create a comprehensive plan tailored for your needs."
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How is International SEO different from traditional SEO?',
    paragraph: "International SEO is different from traditional SEO because it requires a special set of skills and knowledge in order to truly understand the international audience. Companies that specialize in international SEO should utilize global keyword research, local link building strategies, cross-border content marketing tactics, & multi-lingual campaigns tailored to each country."
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are some best practices for International SEO?',
    paragraph: "When it comes to international SEO, there are a few best practices to keep in mind. From ensuring that your website is correctly indexed for any language and targeted market, working with an international SEO expert or agency for localised strategies tailored for each country you're targeting, and finding the right global SEO company to get the job done."
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can I optimize my website for multiple languages and regions?',
    paragraph: "When it comes to optimizing your website for multiple languages and regions, you need to work with the world's best SEO company or one of the biggest SEO agencies. They will have International SEO Experts who can help create a tailored International SEO plan and strategies that are tailored to your business needs."
  }
]

export default function InternationalSEO() {
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
        <title>Drive Traffic and Leads: SEO for International Website</title>
        <meta name="description" content="Our SEO services for International Website drive targeted traffic and leads to boost your business. Get SEO Services in the International Website." />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/international-seo" />
        <meta property="og:title" content="Drive Traffic and Leads: SEO for International Website" />
        <meta property="og:description" content="Our SEO services for International Website drive targeted traffic and leads to boost your business. Get SEO Services in the International Website." />
        <meta property="og:site_name" content="NSP Global Services" />
        <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/nsp_global" />
        <meta name="twitter:title" content="Drive Traffic and Leads: SEO for International Website" />
        <meta name="twitter:description" content="Our SEO services for International Website drive targeted traffic and leads to boost your business. Get SEO Services in the International Website." />
        <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/international-seo" />
      </Head>
      <Header />

      <div className={style.container1}>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop" 
          style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
          alt="International SEO Services" 
        />
        <h1 className={style.title_Pininterest}>SEO Services for International Website</h1>
      </div>

      <div className={style.container2}>
        <aside className={style.sidebar}>
          <div className={style.container2div1}>
            <img 
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop" 
              className={style.endImages1} 
              alt="International SEO" 
            />
          </div>

          <div className={style.container2div2}>
            <h4 className={style.container2div2_hfour}>Services</h4>
            <ul className={style.container2div2_ul}>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/seo-consultancy" className={style.container2_atag}>
                  SEO Consultancy
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>
                  eCommerce SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/franchise-seo" className={style.container2_atag}>
                  Franchise SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/seo-audits" className={style.container2_atag}>
                  SEO Audits
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/celebrity-seo" className={style.container2_atag}>
                  Celebrity SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/shopify-seo" className={style.container2_atag}>
                  Shopify SEO
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.container2div4}>
            <h4 className={style.container2div2_hfour}>Get A Quote</h4>
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
              Contact us today to create a tailored international SEO strategy that will elevate your business to the next level!
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
        </aside>

        <main className={style.mainContent}>
          <div className={style.container2div3}>
            <h2 className={style.container2div3_hone}>Overview</h2>
            <p className={style.container2div3_ptag}>
              NSP Agency is a leading international SEO agency specializing in helping businesses expand globally through effective international SEO strategies. With a team of experienced multilingual SEO experts and a full-service approach, we tailor our services to meet the unique needs of businesses of all sizes.
            </p>
          </div>

          <div className={style.container2div5}>
            <h1 className={style.container2div5_hone}>Key Factors</h1>
            
            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} size={24} />
              <div>
                <h4 className={style.keyfactorHeading}>Experienced International SEO Experts</h4>
                <p className={style.container2div5_blog_p}>
                  Our team comprises multilingual SEO specialists with expertise in over 71 languages, allowing us to deliver customized international SEO strategies to reach your target audience worldwide.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} size={24} />
              <div>
                <h4 className={style.keyfactorHeading}>Full-Service Approach</h4>
                <p className={style.container2div5_blog_p}>
                  From Technical SEO to On-Page SEO, Off-Page SEO, and Content Marketing, we cover all aspects of international SEO to ensure comprehensive optimization.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} size={24} />
              <div>
                <h4 className={style.keyfactorHeading}>Localized Keyword Research</h4>
                <p className={style.container2div5_blog_p}>
                  Our native SEO specialists conduct detailed keyword research specific to each target market, ensuring your content is relevant and optimized for local search intent.
                </p>
              </div>
            </div>

            <div className={style.container2div5_blog}>
              <MdCheckCircle className={style.container2div5_icon} size={24} />
              <div>
                <h4 className={style.keyfactorHeading}>Multilingual Content Creation</h4>
                <p className={style.container2div5_blog_p}>
                  Our in-house team of multilingual copywriters creates content tailored to each local language and culture, maintaining the right tone of voice for your brand.
                </p>
              </div>
            </div>
          </div>

          <div className={style.container2div7}>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
              className={style.container2div5_img} 
              alt="International SEO Strategy" 
            />
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" 
              className={style.container2div5_img} 
              alt="Global SEO Services" 
            />
          </div>

          <div className={style.container2div8}>
            <h3 className={style.container2div8_hthree}>Key Benefits</h3>
            <ul className={style.container2div8_ul}>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Global Reach and Increased Traffic: </strong>
                    By optimizing your website for different regions, you can expand your reach, attract a broader audience, and increase traffic to your site.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Better Conversion and Sales: </strong>
                    Targeting specific markets through international SEO strategies helps you connect with your target audience, improve conversion rates, and generate more sales.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Cost-Effective and Scalable: </strong>
                    Partnering with an international SEO agency like NSP provides access to the latest tools and technologies, making it a cost-effective solution in the long run. Additionally, our services can be easily scaled to meet your growing business needs.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Proven Results and Expertise: </strong>
                    NSP Agency has a track record of delivering successful international SEO projects and has been recognized as one of the world's best SEO companies, providing you with the assurance of reliable expertise and results.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span>
                    Expanding your business globally requires effective international SEO strategies, and NSP Agency is here to help. With our experienced team, comprehensive approach, and a focus on delivering results, we can optimize your website for different regions, increase your visibility, and drive growth. Contact us today to unlock your international SEO potential and take your business to the next level.
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
                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => toggle(i)}>
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
