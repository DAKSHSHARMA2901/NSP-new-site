import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Distributors Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Distributors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Distributors Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Distributors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/distributors",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/distributors",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Distributors Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Distributors Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Distributors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Distributors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/distributors`} />
            </Head>
            <PaidMediaCaseStudy heading="Distributors" />
        </>
    )
}

export default page