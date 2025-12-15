'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MdCall, MdCheckCircle } from 'react-icons/md'
import { GoPlus } from '@/lib/react-icons-go-shim'
import style from '../celebrity-seo/newservices.module.css'

const faqData = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What is franchise SEO?',
    paragraph: 'Franchise SEO is an ongoing marketing process to help a franchise business increase their visibility in search engine results. It includes services such as keyword optimization, content creation, link building and more that are tailored to the needs of each franchise location.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'Why is franchise SEO important for my business?',
    paragraph: 'Franchise SEO is essential for your business as it helps you to drive more traffic and create better brand awareness across all your franchise locations. A good franchise SEO company offers specialized services tailored specifically for franchises, with packages for optimized marketing and optimization services.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'How does franchise SEO differ from regular SEO?',
    paragraph: 'Franchise SEO strategies differ from conventional SEO since they are designed to help franchisors drive local, regional and national traffic. Franchise SEO services include targeted campaigns tailored to the needs of each individual franchise as well as packages that help all franchises succeed through a combination of digital marketing, website optimization and search engine optimization (SEO).'
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '15px' }} size={20} />,
    statement: 'What are the key elements of a successful franchise SEO strategy?',
    paragraph: 'An effective franchise SEO strategy should include a knowledgeable and professional SEO company, comprehensive marketing plans tailored to the specific needs of the franchise, services that support brand identity and business objectives, applicable packages for optimization, and strategic optimization programs for franchises.'
  }
]

export default function FranchiseSeo() {
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
        <title>Franchise SEO Services: Increase the Visibility of Your Brand</title>
        <meta name="description" content="Our franchise SEO services drive local success. Boost rankings, attract customers, and grow your franchise network today." />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nspglobalservices.com/seo-services/franchise-seo" />
        <meta property="og:title" content="Franchise SEO Services: Increase the Visibility of Your Brand" />
        <meta property="og:description" content="Our franchise SEO services drive local success. Boost rankings, attract customers, and grow your franchise network today." />
        <meta property="og:site_name" content="NSP Global Services" />
        <meta property="og:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/nsp_global" />
        <meta name="twitter:title" content="Franchise SEO Services: Increase the Visibility of Your Brand" />
        <meta name="twitter:description" content="Our franchise SEO services drive local success. Boost rankings, attract customers, and grow your franchise network today." />
        <meta name="twitter:image" content="https://www.nspglobalservices.com/static/media/logo.6776e717038ae31bd390.jpg" />
        <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/franchise-seo" />
      </Head>
      <Header />

      <div className={style.container1}>
        <img 
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=400&fit=crop" 
          style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} 
          alt="Franchise SEO Services" 
        />
        <h1 className={style.title_Pininterest}>Franchise SEO Services</h1>
      </div>

      <div className={style.container2}>
        <aside className={style.sidebar}>
          <div className={style.container2div1}>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop" 
              className={style.endImages1} 
              alt="Franchise SEO" 
            />
          </div>

          <div className={style.container2div2}>
            <h4 className={style.container2div2_hfour}>Services</h4>
            <ul>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/celebrity-seo" className={style.container2_atag}>
                  Celebrity SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/luxury-seo" className={style.container2_atag}>
                  Luxury SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/ecommerce-seo" className={style.container2_atag}>
                  eCommerce SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/small-business-seo" className={style.container2_atag}>
                  Small Business SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/local-seo" className={style.container2_atag}>
                  Local SEO
                </Link>
              </li>
              <li className={style.container2div2_li}>
                <Link href="/seo-services/nationwide-seo" className={style.container2_atag}>
                  Nationwide SEO
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
              Ready to Dominate the Franchise Market with Our Professional SEO Services? Request a Free Custom Strategy from Our Experts Now!
            </p>
            <div className={style.container2div6_icons}>
              <div className={style.container2div6_icon}>
                <MdCall />
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
              As a leading franchise SEO company, we understand franchisors' and franchisees' unique challenges and goals in today's competitive digital landscape. With a comprehensive and customized approach, we optimize various elements of your online presence, including website structure, content, and local listings, to ensure maximum visibility in search engine results. By partnering with us, you can expect a team of experienced professionals dedicated to delivering results and improving your franchise's online reputation and brand authority.
            </p>
            <p>
              Franchise SEO offers numerous benefits, such as increased online visibility, targeted traffic, improved brand authority, and higher conversion rates. Our franchise SEO services are the ideal solution if you want to boost your franchise business's online presence and drive more sales and leads. Contact us today to discuss your franchise SEO needs and unlock the full potential of your online presence.
            </p>
          </div>

          <div className={style.container2div5}>
            <h2 className={style.container2div5_hone}>Key Factors</h2>
            
            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Tailored SEO Strategies</h4>
              </div>
              <p>
                We understand the unique needs of franchisors and franchisees. Our experts develop customized SEO strategies specifically designed to address the challenges faced by franchise businesses, ensuring maximum impact and results.
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Complete SEO Coverage</h4>
              </div>
              <p>
                Our services encompass all aspects of SEO, including on-page optimization, technical code auditing, off-page optimization, and local listing management.
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Expertise and Knowledge</h4>
              </div>
              <p>
                Our team comprises seasoned professionals with extensive experience in franchise marketing, SEO, and digital marketing. With their expertise, we ensure that your SEO campaigns are executed flawlessly and yield outstanding results.
              </p>
            </div>

            <div className={style.container2div5_blog}>
              <div className={style.container2div5_img}>
                <MdCheckCircle size={50} color="#007bff" style={{ marginBottom: '10px' }} />
                <h4 className={style.keyfactorHeading}>Proven Track Record</h4>
              </div>
              <p>
                We take pride in our track record of success. Numerous satisfied franchise clients from various industries have benefited from our services, witnessing substantial improvements in online visibility, customer engagement, and revenue growth.
              </p>
            </div>
          </div>

          <div className={style.container2div7}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="Franchise SEO Strategy" 
            />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" 
              style={{ height: '324px', width: '424px', borderRadius: '8px' }} 
              alt="Franchise Growth" 
            />
          </div>

          <div className={style.container2div8}>
            <h3 className={style.overview}>Key Benefits</h3>
            <ul className={style.container2div8_ul}>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Dominate Search Engine Rankings: </strong>
                    Our franchise SEO services are aimed at helping you achieve top rankings in search engine results. By optimizing your website, content, and online presence, we ensure that your brand stands out among competitors and attracts more organic traffic.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Increased Organic Traffic: </strong>
                    With improved visibility and search engine rankings, you can expect a significant increase in organic traffic to your franchise website. This targeted traffic translates into higher-quality leads and a greater opportunity for conversions.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Enhanced Online Reputation and Brand Authority: </strong>
                    Our SEO strategies improve visibility and enhance your franchise business's online reputation and brand authority. A strong online presence establishes trust and credibility, making customers more likely to choose your franchise over competitors.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span><strong className={style.keyfactorHeading}>Transparent Reporting and Analytics: </strong>
                    We believe in transparency and provide real-time reporting and analytics through our Insite dashboard. You'll have access to comprehensive data and insights, allowing you to track the progress of your SEO campaigns and measure their impact on your business.
                  </span>
                </div>
              </li>
              <li>
                <div className={style.container2div8_li}>
                  <span>
                    If you want to boost your franchise business's online visibility, generate quality leads, and establish market dominance, our franchise SEO services are the ideal solution. Please request a free custom strategy from our experts today and experience the difference our innovative SEO campaigns can make for your franchise.
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=800&fit=crop" 
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
