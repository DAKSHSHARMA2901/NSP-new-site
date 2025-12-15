import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing for Online Alcohol Stores | Website & Marketing Services",
  description: "Sell More Spirits with our all-in-one website and marketing solution. We build your digital storefront and drive thirsty customers to your door. Get SEO, PPC, Social Media & Website Development.",
  keywords: [
    "online alcohol store marketing",
    "alcohol ecommerce website",
    "spirits digital marketing",
    "wine store SEO",
    "liquor store PPC",
    "alcohol social media marketing",
    "online liquor store website design",
    "craft beer digital marketing",
    "alcohol delivery app marketing",
    "wine ecommerce solutions"
  ],
  alternates: {
    canonical: "https://www.nspglobalservices.com/digital-marketing-for/online-alcohol-stores",
  },
  openGraph: {
    title: "Digital Marketing for Online Alcohol Stores | Website & Marketing Services",
    description: "Sell More Spirits with our all-in-one website and marketing solution. We build your digital storefront and drive thirsty customers to your door.",
    url: "https://www.nspglobalservices.com/digital-marketing-for/online-alcohol-stores",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing for Online Alcohol Stores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Online Alcohol Stores | Website & Marketing Services",
    description: "Sell More Spirits with our all-in-one website and marketing solution. We build your digital storefront and drive thirsty customers to your door.",
    images: ["https://res.cloudinary.com/dyzdnyq0d/image/upload/v1761856006/Gemini_Generated_Image_z3k07qz3k07qz3k0_idem2h.png"],
  },
};

export default function OnlineAlcoholStoresDigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
