import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Waxing hair removal service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Waxing hair removal service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Waxing hair removal service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Waxing hair removal service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/waxing-hair-removal-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/waxing-hair-removal-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Waxing hair removal service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Waxing hair removal service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Waxing hair removal service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Waxing hair removal service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/waxing-hair-removal-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Waxing hair removal service" />
        </>
    )
}

export default page