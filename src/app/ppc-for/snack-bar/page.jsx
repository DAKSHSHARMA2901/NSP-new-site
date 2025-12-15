import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Snack bar Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Snack bar paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Snack bar Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Snack bar paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/snack-bar",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/snack-bar",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Snack bar Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Snack bar Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Snack bar paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Snack bar paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/snack-bar`} />
            </Head>
            <PaidMediaCaseStudy heading="Snack bar" />
        </>
    )
}

export default page