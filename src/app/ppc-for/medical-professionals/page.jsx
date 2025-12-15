import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Medical professionals Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Medical professionals paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Medical professionals Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Medical professionals paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/medical-professionals",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/medical-professionals",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Medical professionals Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Medical professionals Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Medical professionals paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Medical professionals paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/medical-professionals`} />
            </Head>
            <PaidMediaCaseStudy heading="Medical professionals" />
        </>
    )
}

export default page