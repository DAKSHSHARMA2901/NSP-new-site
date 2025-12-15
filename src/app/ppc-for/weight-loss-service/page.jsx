import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Weight loss service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Weight loss service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Weight loss service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Weight loss service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/weight-loss-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/weight-loss-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Weight loss service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Weight loss service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Weight loss service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Weight loss service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/weight-loss-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Weight loss service" />
        </>
    )
}

export default page