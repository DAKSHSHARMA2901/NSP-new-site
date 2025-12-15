import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Self storage Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Self storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Self storage Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Self storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/self-storage",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/self-storage",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Self storage Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Self storage Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Self storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Self storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/self-storage`} />
            </Head>
            <PaidMediaCaseStudy heading="Self storage" />
        </>
    )
}

export default page