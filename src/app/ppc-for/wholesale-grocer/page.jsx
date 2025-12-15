import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesale grocer Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesale grocer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesale grocer Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesale grocer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesale-grocer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesale-grocer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesale grocer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesale grocer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesale grocer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesale grocer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesale-grocer`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesale grocer" />
        </>
    )
}

export default page