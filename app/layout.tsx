import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { FooterProvider } from "./components/footer";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Festiwal klocków w Katowicach – Let's Brick It Down",
    template: "%s - Let's Brick It Down!",
  },
  keywords: [
    "festiwal klocków",
    "Klocki Katowice",
    "wydarzenia Katowice",
    "LEGO festiwal",
    "klocki dla dzieci",
    "festiwal",
  ],
  description:
    "Wydarzenie zorientowane na edukacyjno-biznesowy aspekt klocków.",
  robots: "index, follow",
  metadataBase: new URL("https://letsbrickitdown.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Let's Brick It Down",
    description: "Festiwal klocków w Katowicach",
    url: "https://letsbrickitdown.vercel.app/",
    siteName: "Let's Brick It Down",
    images: [
      {
        url: "https://letsbrickitdown.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Banner Festiwalu Klocków",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festiwal klocków w Katowicach – Let's Brick It Down",
    description: "Weź udział w prelekcjach oraz turnieju budowania!",
    images: ["https://letsbrickitdown.vercel.app/opengraph-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} font-[700] min-h-screen flex flex-col justify-between max-w-screen `}
      >
        <Navbar />
        {children}
        <FooterProvider />
      </body>
    </html>
  );
}
