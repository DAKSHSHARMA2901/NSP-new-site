import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Business consultants Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Business consultants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Business consultants Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Business consultants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/business-consultants",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/business-consultants",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Business consultants Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Business consultants Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Business consultants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Business consultants paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/business-consultants`} />
            </Head>
            <PaidMediaCaseStudy heading="Business consultants" />
        </>
    )
}

export default page