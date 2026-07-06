// src/app/lib/metadata.js

export const siteMetadata = {
  title: {
    default: "Royalerchhobi | Creative Shop for Advertising & Communication",
    template: "%s | Royalerchhobi",
  },
  description:
    "Royalerchhobi is a Dhaka-based creative studio specializing in branding, web design, ad campaigns, packaging, and film production for brands across Bangladesh.",
  keywords: [
    "Royalerchhobi",
    "advertising agency Dhaka",
    "branding agency Bangladesh",
    "creative studio Dhaka",
    "ad campaign design",
    "packaging design Bangladesh",
    "web design agency Dhaka",
  ],
  siteUrl: "https://royalerchhobi.com", // replace with real domain
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Royalerchhobi",
    images: [
      {
        url: "/assest/og-image.jpg", // create a 1200x630 image for this
        width: 1200,
        height: 630,
        alt: "Royalerchhobi — Creative Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@royalerchhobi", // update or remove if no account
  },
};