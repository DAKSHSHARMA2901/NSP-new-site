import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Womens health clinic Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Womens health clinic paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Womens health clinic Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Womens health clinic paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/womens-health-clinic",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/womens-health-clinic",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Womens health clinic Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Womens health clinic Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Womens health clinic paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Womens health clinic paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/womens-health-clinic`} />
            </Head>
            <PaidMediaCaseStudy heading="Womens health clinic" />
        </>
    )
}

export default page