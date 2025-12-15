import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Toyota dealer Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Toyota dealer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Toyota dealer Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Toyota dealer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/toyota-dealer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/toyota-dealer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Toyota dealer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Toyota dealer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Toyota dealer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Toyota dealer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/toyota-dealer`} />
            </Head>
            <PaidMediaCaseStudy heading="Toyota dealer" />
        </>
    )
}

export default page