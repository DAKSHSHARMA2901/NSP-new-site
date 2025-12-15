import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Shed builder Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Shed builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Shed builder Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Shed builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/shed-builder",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/shed-builder",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Shed builder Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Shed builder Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Shed builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Shed builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/shed-builder`} />
            </Head>
            <PaidMediaCaseStudy heading="Shed builder" />
        </>
    )
}

export default page