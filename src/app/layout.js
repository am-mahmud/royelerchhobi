import { Abel } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./lib/metadata";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  icons: {
    icon: "/assest/logo.png",
  },
  openGraph: {
    ...siteMetadata.openGraph,
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    images: siteMetadata.openGraph.images.map((img) => img.url),
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  name: "Royalerchhobi",
  url: siteMetadata.siteUrl,
  logo: `${siteMetadata.siteUrl}/assest/logo.png`,
  description: siteMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abel.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/futura-pt"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-white text-black">
        {children}
      </body>
    </html>
  );
}