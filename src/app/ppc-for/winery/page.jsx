import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Winery Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Winery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Winery Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Winery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/winery",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/winery",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Winery Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Winery Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Winery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Winery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/winery`} />
            </Head>
            <PaidMediaCaseStudy heading="Winery" />
        </>
    )
}

export default page