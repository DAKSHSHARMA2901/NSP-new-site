import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Higher education Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Higher education paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Higher education Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Higher education paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/higher-education",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/higher-education",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Higher education Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Higher education Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Higher education paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Higher education paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/higher-education`} />
            </Head>
            <PaidMediaCaseStudy heading="Higher education" />
        </>
    )
}

export default page