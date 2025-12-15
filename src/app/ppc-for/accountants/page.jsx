import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: 'Accountants Paid Media Services & Expert Online Advertising Solutions',
    description: "Discover top-tier Accountants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    alternates: {
        canonical: 'https://www.nspglobalservices.com/ppc-services-for/accountants',
    },
    openGraph: {
        title: 'Accountants Paid Media Services & Expert Online Advertising Solutions',
        description: "Discover top-tier Accountants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: 'https://www.nspglobalservices.com/ppc-services-for/accountants',
    },
}
function page() {
    return (
        <>
            <Head>
                <title>Accountants Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Accountants Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Accountants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Accountants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/accountants`} />
            </Head>
            <PaidMediaCaseStudy heading="Accountants" />
        </>
    )
}

export default page