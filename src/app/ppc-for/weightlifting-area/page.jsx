import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Weightlifting area Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Weightlifting area paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Weightlifting area Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Weightlifting area paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/weightlifting-area",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/weightlifting-area",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Weightlifting area Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Weightlifting area Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Weightlifting area paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Weightlifting area paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/weightlifting-area`} />
            </Head>
            <PaidMediaCaseStudy heading="Weightlifting area" />
        </>
    )
}

export default page