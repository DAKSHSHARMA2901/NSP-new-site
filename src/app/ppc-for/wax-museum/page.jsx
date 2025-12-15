import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wax museum Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wax museum paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wax museum Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wax museum paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wax-museum",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wax-museum",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wax museum Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wax museum Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wax museum paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wax museum paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wax-museum`} />
            </Head>
            <PaidMediaCaseStudy heading="Wax museum" />
        </>
    )
}

export default page