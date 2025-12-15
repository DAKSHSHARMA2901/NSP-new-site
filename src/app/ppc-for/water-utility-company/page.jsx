import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water utility company Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water utility company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water utility company Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water utility company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-utility-company",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-utility-company",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water utility company Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water utility company Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water utility company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water utility company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-utility-company`} />
            </Head>
            <PaidMediaCaseStudy heading="Water utility company" />
        </>
    )
}

export default page