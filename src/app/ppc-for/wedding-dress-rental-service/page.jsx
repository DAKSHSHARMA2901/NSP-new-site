import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wedding dress rental service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wedding dress rental service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wedding dress rental service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wedding dress rental service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wedding-dress-rental-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wedding-dress-rental-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wedding dress rental service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wedding dress rental service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wedding dress rental service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wedding dress rental service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wedding-dress-rental-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Wedding dress rental service" />
        </>
    )
}

export default page