import { Abel } from "next/font/google";
import "./globals.css";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});

export const metadata = {
  title: "Royalerchhobi",
  description: "A creative shop for advertising & communication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abel.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/futura-pt"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-white text-black">
        {children}
      </body>
    </html>
  );
}
