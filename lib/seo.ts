// lib/seo.ts
import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "WEBLABS — Jasa Landing Page SEO-friendly",
  description:
    "Spesialis landing page premium: cepat, mobile-first, dan SEO-friendly.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://weblabs.id/",
    siteName: "WEBLABS",
    images: [
      {
        url: "/og/weblabs-og.jpg",
        width: 1200,
        height: 630,
        alt: "WEBLABS Landing Page SEO-friendly",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    { rel: "canonical", href: "https://weblabs.id/" },
    { rel: "icon", href: "/favicon.ico" },
  ],
};

export default config;
