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
  title: "Let's Brick It Down!",
  description: "Festiwal klocków w innym stylu",
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
