import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Youth club Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Youth club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Youth club Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Youth club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/youth-club",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/youth-club",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Youth club Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Youth club Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Youth club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Youth club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/youth-club`} />
            </Head>
            <PaidMediaCaseStudy heading="Youth club" />
        </>
    )
}

export default page