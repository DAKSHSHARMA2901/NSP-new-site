import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Small business Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Small business paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Small business Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Small business paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/small-business",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/small-business",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Small business Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Small business Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Small business paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Small business paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/small-business`} />
            </Head>
            <PaidMediaCaseStudy heading="Small business" />
        </>
    )
}

export default page