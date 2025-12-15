import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wood working class Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wood working class paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wood working class Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wood working class paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wood-working-class",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wood-working-class",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wood working class Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wood working class Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wood working class paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wood working class paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wood-working-class`} />
            </Head>
            <PaidMediaCaseStudy heading="Wood working class" />
        </>
    )
}

export default page