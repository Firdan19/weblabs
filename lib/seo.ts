import type { Metadata } from "next";

const SEO: Metadata = {
  metadataBase: new URL("https://weblabs.id"),
  title: {
    default: "WEBLABS — Jasa Landing Page SEO-friendly",
    template: "%s | Weblabs.id",
  },
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
    card: "summary_large_image",
    images: ["/og/weblabs-og.jpg"],
  },
  alternates: {
    canonical: "https://weblabs.id/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default SEO;
