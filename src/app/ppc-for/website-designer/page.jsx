import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Website designer Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Website designer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Website designer Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Website designer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/website-designer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/website-designer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Website designer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Website designer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Website designer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Website designer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/website-designer`} />
            </Head>
            <PaidMediaCaseStudy heading="Website designer" />
        </>
    )
}

export default page