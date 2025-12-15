'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MdEmail, MdCheckCircle } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import style from '../celebrity-seo/newservices.module.css'

const faqData = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What is eCommerce SEO?',
    paragraph: 'Ecommerce SEO is the process of optimizing an ecommerce website for search engine visibility. It involves a range of strategic practices such as keyword research, on-page optimization, link building and technical SEO to improve organic rankings. In order to optimize your ecommerce store for search engines, you should focus on creating original content that\'s tailored to customer needs, use relevant keywords in URLs and metadata, set up a blog with quality content related to your products and services, generate backlinks from other reliable websites and keep all images tagged properly.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'Why is eCommerce SEO important for online businesses?',
    paragraph: 'SEO for eCommerce websites is incredibly important for online businesses as it drives organic traffic to the website, increases visibility and rankings, boosts sales and strengthens brand credibility. It also helps optimize web pages, content and product descriptions; identify highly targeted keywords through keyword research; manage online reputation with technical SEO best practices; and use of effective tools to monitor progress.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What are the key elements of successful eCommerce SEO?',
    paragraph: 'Successful eCommerce SEO requires a robust strategy, keyword research, and technical optimization. Key elements of an effective SEO strategy include creating content focused on ecommerce products or services; optimizing product pages, category pages, and URL structures; using relevant keywords to generate organic traffic; gaining inbound links from reputable websites; and tracking analytics for continual improvement.'
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'How can I optimize my eCommerce site for search engines?',
    paragraph: 'Optimizing your eCommerce website for search engines requires a comprehensive strategy. Begin by conducting keyword research to uncover the best terms related to your products or services and use those in content, headings and meta tags. Use a site architecture that allows visitors to easily find what they\'re looking for, create unique product descriptions with optimized content and focus on technical SEO such as using structured data, establishing canonical URLs, speeding up page loading times, creating an XML sitemap and setting up an HTTPS connection.'
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What are some common eCommerce SEO mistakes to avoid?',
    paragraph: 'Common mistakes to avoid for successful eCommerce SEO include not having a strategy, failing to perform keyword research, inadequate technical SEO, improper URL structure, neglecting product and category pages optimization, using insufficient content and off-site promotion techniques.'
  }
]

export default function EcommerceSeo() {
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
      <Header />
      <div className={style.container1}>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop" 
          style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
          alt="E-Commerce SEO Services" 
        />
        <h1 className={style.title_Pininterest}>E-Commerce SEO Services</h1>
      </div>

      <div className={style.container2}>
        <aside className={style.sidebar}>
          <div className={style.container2div1}>
            <img 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=600&fit=crop" 
              className={style.endImages1} 
              alt="E-commerce SEO" 
            />
          </div>

          <div className={style.servicesMenu}>
            <h4 className={style.servicesMenuTitle}>Services</h4>
            <ul className={style.servicesList}>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/international-seo" className={style.serviceLink}>
                  International SEO
                </Link>
              </li>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/shopify-seo" className={style.serviceLink}>
                  Shopify SEO
                </Link>
              </li>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/franchise-seo" className={style.serviceLink}>
                  Franchise SEO
                </Link>
              </li>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/on-page-seo" className={style.serviceLink}>
                  On-Page SEO
                </Link>
              </li>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/technical-seo" className={style.serviceLink}>
                  Technical SEO
                </Link>
              </li>
              <li className={style.servicesListItem}>
                <Link href="/seo-services/google-analytics-services" className={style.serviceLink}>
                  Google Analytics services
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.quoteForm}>
            <h4 className={style.quoteFormTitle}>Get A Quote</h4>
            <form ref={form} onSubmit={sendEmail} className={style.formContainer}>
              <input 
                placeholder="Your Name" 
                type="text" 
                name="user_name" 
                className={style.formInput} 
                required 
              />
              <input 
                placeholder="Your email" 
                type="email" 
                name="user_email" 
                className={style.formInput} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Enter your message" 
                className={style.formTextarea} 
                cols={30} 
                rows={10} 
                required
              />
              <input type="submit" className={style.formButton} value="Send" />
            </form>
          </div>

          <div className={style.helpSection}>
            <h4 className={style.helpTitle}>Need Help?</h4>
            <p className={style.helpText}>
              Transform Your Ecommerce Site Into a High-Traffic, High-Authority, and Revenue-Generating Online Platform. Get a Free Website Audit Report Today!
            </p>
            <div className={style.contactInfo}>
              <div className={style.contactIcon}>
                <MdEmail size={24} />
              </div>
              <div className={style.contactDetails}>
                <span className={style.contactLabel}>Email Us</span>
                <p className={style.contactValue}>info@nspglobalservices.com</p>
              </div>
            </div>
          </div>

          <div className={style.performanceHighlights}>
            <h3 className={style.performanceTitle}>Performance Highlights</h3>
            <div className={style.performanceBox}>
              <span className={style.performanceNumber}>95%</span>
              <span className={style.performanceLabel}>Increase in website traffic</span>
            </div>
            <div className={style.performanceBox}>
              <span className={style.performanceNumber}>99%</span>
              <span className={style.performanceLabel}>Increase in conversion rates</span>
            </div>
            <div className={style.performanceBox}>
              <span className={style.performanceNumber}>96%</span>
              <span className={style.performanceLabel}>Increase in leads generation</span>
            </div>
          </div>
        </aside>

        <main className={style.mainContent}>
          <section className={style.overviewSection}>
            <h2 className={style.sectionTitle}>Overview</h2>
            <p className={style.paragraphText}>
              In the highly competitive e-commerce industry, search engine optimization (SEO) plays a crucial role in driving traffic, increasing visibility, and maximizing conversions. At NSP, we offer comprehensive e-commerce SEO services that help businesses achieve sustainable growth and profitability. We conduct extensive keyword research, optimize product and category pages, improve URL structures, and create high-quality content tailored to the target audience.
            </p>
          </section>

          <section className={style.keyFactorsSection}>
            <h2 className={style.sectionTitle}>Key Factors</h2>
            
            <div className={style.factorItem}>
              <div className={style.factorHeader}>
                <MdCheckCircle className={style.factorIcon} size={24} />
                <h4 className={style.factorTitle}>Comprehensive Website Audit and SEO Assessment</h4>
              </div>
              <p className={style.factorDescription}>
                Our SEO strategists conduct a thorough evaluation of your e-commerce site, analyzing its design infrastructure and content to enhance aesthetics and performance. This includes providing a free website audit report to identify areas for improvement.
              </p>
            </div>

            <div className={style.factorItem}>
              <div className={style.factorHeader}>
                <MdCheckCircle className={style.factorIcon} size={24} />
                <h4 className={style.factorTitle}>Keyword Research and Rankings</h4>
              </div>
              <p className={style.factorDescription}>
                We perform an in-depth study of your competitors and industry to identify marketing opportunities. Our focus is on "conversion keywords" that drive leads and maximize conversions, boosting your website's visibility and organic traffic.
              </p>
            </div>

            <div className={style.factorItem}>
              <div className={style.factorHeader}>
                <MdCheckCircle className={style.factorIcon} size={24} />
                <h4 className={style.factorTitle}>Compelling Product Descriptions and Web Copies</h4>
              </div>
              <p className={style.factorDescription}>
                Our team of skilled writers creates engaging product descriptions and web copies that captivate visitors' attention and entice them to make purchases. This enhances your product visibility and drives more sales.
              </p>
            </div>

            <div className={style.factorItem}>
              <div className={style.factorHeader}>
                <MdCheckCircle className={style.factorIcon} size={24} />
                <h4 className={style.factorTitle}>Blogging, Guest Posting, and Social Profile Building</h4>
              </div>
              <p className={style.factorDescription}>
                We develop keyword-rich blogs and guest posts to direct traffic to your e-commerce store. Additionally, we offer social profile-building services to enhance your brand presence on social media platforms, further expanding your reach and engagement.
              </p>
            </div>
          </section>

          <div className={style.container2div7}>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="E-commerce SEO Strategy" 
            />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="E-commerce Optimization" 
            />
          </div>

          <section className={style.benefitsSection}>
            <h3 className={style.sectionTitle}>Key Benefits</h3>
            <ul className={style.benefitsList}>
              <li className={style.benefitItem}>
                <div className={style.benefitContent}>
                  <strong className={style.benefitTitle}>Increased Traffic and Engagement: </strong>
                  <span className={style.benefitText}>
                    By implementing effective e-commerce SEO strategies, we help drive organic traffic to your website, resulting in increased checkouts, sales, and overall engagement with your target audience.
                  </span>
                </div>
              </li>
              <li className={style.benefitItem}>
                <div className={style.benefitContent}>
                  <strong className={style.benefitTitle}>Improved Brand Image and Awareness: </strong>
                  <span className={style.benefitText}>
                    Our SEO services enhance your website's visibility, making your brand more recognizable to a broader audience. This leads to increased brand awareness and improved online reputation.
                  </span>
                </div>
              </li>
              <li className={style.benefitItem}>
                <div className={style.benefitContent}>
                  <strong className={style.benefitTitle}>Customized Strategies for Long-Term Success: </strong>
                  <span className={style.benefitText}>
                    We utilize white-hat SEO techniques and customize our strategies to align with your specific business goals. This ensures long-term success and sustainable growth for your e-commerce store.
                  </span>
                </div>
              </li>
              <li className={style.benefitItem}>
                <div className={style.benefitContent}>
                  <strong className={style.benefitTitle}>Expert Guidance and Support: </strong>
                  <span className={style.benefitText}>
                    Whether you're a beginner or an experienced e-commerce business, our services cater to businesses of all sizes and levels of experience. We provide comprehensive guidance and support to help you navigate the complexities of e-commerce SEO.
                  </span>
                </div>
              </li>
              <li className={style.benefitItem}>
                <div className={style.benefitContent}>
                  <span className={style.benefitText}>
                    E-commerce SEO is crucial for the success of your online store in a competitive marketplace. With NSP's e-commerce SEO services, you can optimize your website for higher visibility, attract targeted traffic, and increase conversions. Our comprehensive approach, experienced team, and tailored strategies ensure that your e-commerce business thrives and achieves its growth potential.
                    <br /><br />
                    Contact us today to learn more about our e-commerce SEO services and how we can contribute to the success of your business.
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <div className={style.FAQS}>
        <div>
          <img 
            className={style.faq} 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=800&fit=crop" 
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
