"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

{
  /*Footer provider secures homepage from double footer. Need this to use scroll snap type mandatory on homepage correctly */
}
export const FooterProvider = () => {
  const pathname = usePathname();
  return (
    <>{pathname !== "/" && pathname !== "/informacje" ? <Footer /> : <></>}</>
  );
};

const Footer = () => {
  return (
    <div
      className={`relative w-screen sm:h-[25vh] px-8 sm:px-12 py-6 bg-white text-black border-black border-t-4 flex flex-col sm:flex-row items-center overflow-y-hidden justify-between gap-6`}
    >
      {/*Links to pages */}
      <div className="flex flex-col items-center sm:items-start gap-2 text-xl sm:text-lg font-thin ">
        <Link href="/" className="transition duration-200 hover:text-gray-800">
          Strona główna
        </Link>
        <Link
          href="/informacje"
          className="transition duration-200 hover:text-gray-800"
        >
          Informacje
        </Link>
        <Link
          href="/onas"
          className="transition duration-200 hover:text-gray-800"
        >
          O nas
        </Link>
        <Link
          href="/regulamin"
          className="transition duration-200 hover:text-gray-800"
        >
          Regulamin
        </Link>
        <Link
          href="/kontakt"
          className="transition duration-200 hover:text-gray-800"
        >
          Kontakt
        </Link>
      </div>

      {/*Socials and logo */}
      <div className="flex flex-col justify-start sm:items-center  sm:w-1/5 gap-4 invert-100">
        {/* Logo */}
        <div className="relative h-20 ml-4 sm:h-24 w-full ">
          <Image
            src="/paneuropa.svg"
            alt="paneuropa"
            fill
            className="object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-4 pb-8">
          <a href="https://paneuropa.com.pl/">
            <Image src="/website.svg" alt="website" width={30} height={30} />
          </a>
          <a href="https://www.facebook.com/Paneuropa">
            <Image src="/facebook.svg" alt="facebook" width={32} height={36} />
          </a>
          <a href="https://www.linkedin.com/company/paneuropakatowice/">
            <Image src="/linkedin.svg" alt="linkedin" width={32} height={36} />
          </a>
          <a href="https://www.instagram.com/paneuropa_ue/">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="https://www.tiktok.com/@paneuropa_ue">
            <Image src="/tiktok.svg" alt="tiktok" width={36} height={36} />
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="absolute bottom-0 left-0 w-full text-center pb-2 text-xs sm:text-sm font-light pt-1">
        Bartłomiej Mazik 2025©
      </div>
    </div>
  );
};

export default Footer;
