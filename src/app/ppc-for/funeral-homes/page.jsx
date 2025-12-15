import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Funeral homes Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Funeral homes paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Funeral homes Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Funeral homes paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/funeral-homes",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/funeral-homes",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Funeral homes Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Funeral homes Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Funeral homes paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Funeral homes paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/funeral-homes`} />
            </Head>
            <PaidMediaCaseStudy heading="Funeral homes" />
        </>
    )
}

export default page