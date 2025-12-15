import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Ecommerce sites Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Ecommerce sites paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Ecommerce sites Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Ecommerce sites paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/ecommerce-sites",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/ecommerce-sites",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Ecommerce sites Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Ecommerce sites Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Ecommerce sites paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Ecommerce sites paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/ecommerce-sites`} />
            </Head>
            <PaidMediaCaseStudy heading="Ecommerce sites" />
        </>
    )
}

export default page