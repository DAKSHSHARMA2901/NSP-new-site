import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Startups Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Startups paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Startups Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Startups paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/startups",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/startups",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Startups Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Startups Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Startups paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Startups paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/startups`} />
            </Head>
            <PaidMediaCaseStudy heading="Startups" />
        </>
    )
}

export default page