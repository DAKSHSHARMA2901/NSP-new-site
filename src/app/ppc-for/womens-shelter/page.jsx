import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Womens shelter Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Womens shelter paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Womens shelter Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Womens shelter paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/womens-shelter",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/womens-shelter",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Womens shelter Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Womens shelter Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Womens shelter paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Womens shelter paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/womens-shelter`} />
            </Head>
            <PaidMediaCaseStudy heading="Womens shelter" />
        </>
    )
}

export default page