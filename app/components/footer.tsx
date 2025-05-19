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
  return <>{pathname !== "/" ? <Footer /> : <></>}</>;
};

const Footer = () => {
  return (
    <div
      className={`relative w-screen sm:h-[25vh] px-8 sm:px-12 py-4 bg-purpleprimary text-white border-black border-t-4 flex flex-col sm:flex-row items-start sm:items-center overflow-y-hidden justify-between gap-6`}
    >
      {/*Links to pages */}
      <div className="flex flex-col gap-2 text-xl sm:text-lg font-thin ">
        <Link
          href="/"
          className="transition duration-200 hover:text-greenprimary"
        >
          Strona główna
        </Link>
        <Link
          href="/"
          className="transition duration-200 hover:text-greenprimary"
        >
          Informacje
        </Link>
        <Link
          href="/"
          className="transition duration-200 hover:text-greenprimary"
        >
          O nas
        </Link>
        <Link
          href="/"
          className="transition duration-200 hover:text-greenprimary"
        >
          Partnerzy
        </Link>
        <Link
          href="/"
          className="transition duration-200 hover:text-greenprimary"
        >
          Kontakt
        </Link>
      </div>

      {/*Socials and logo */}
      <div className="flex flex-col justify-start sm:items-center  sm:w-1/5 gap-4">
        {/* Logo */}
        <div className="relative h-16 sm:h-24 w-full ">
          <Image
            src="/paneuropa.svg"
            alt="paneuropa"
            fill
            className="object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-4 pb-8">
          <Link href="">
            <Image src="/website.svg" alt="website" width={30} height={30} />
          </Link>
          <Link href="">
            <Image src="/facebook.svg" alt="facebook" width={32} height={36} />
          </Link>
          <Link href="">
            <Image src="/linkedin.svg" alt="linkedin" width={32} height={36} />
          </Link>
          <Link href="">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </Link>
          <Link href="">
            <Image src="/tiktok.svg" alt="tiktok" width={36} height={36} />
          </Link>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="absolute bottom-0 left-0 w-full text-center text-xs sm:text-sm font-light pt-1">
        Bartłomiej Mazik 2025©
      </div>
    </div>
  );
};

export default Footer;
