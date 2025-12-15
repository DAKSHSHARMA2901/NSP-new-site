import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Pest control companies Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Pest control companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Pest control companies Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Pest control companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/pest-control-companies",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/pest-control-companies",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Pest control companies Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Pest control companies Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Pest control companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Pest control companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/pest-control-companies`} />
            </Head>
            <PaidMediaCaseStudy heading="Pest control companies" />
        </>
    )
}

export default page