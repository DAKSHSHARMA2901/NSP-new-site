import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Automotive industry Paid Media Services & Expert Online Advertising Solutions",
  description: "Discover top-tier Automotive industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
  openGraph: {
    title: "Automotive industry Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Automotive industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    url: "https://www.nspglobalservices.com/ppc-for/automotive-industry",
  },
  alternates: {
    canonical: "https://www.nspglobalservices.com/ppc-for/automotive-industry",
  },
};
function page() {
    return (
        <>
            <Head>
                <title>Automotive industry Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Automotive industry Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Automotive industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Automotive industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/automotive-industry`} />
            </Head>
            <PaidMediaCaseStudy heading="Automotive industry" />
        </>
    )
}

export default page