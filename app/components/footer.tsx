import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-screen h-[25vh] px-12 py-4 bg-purpleprimary text-white border-black border-t-4 flex flex-row items-start justify-between">
      {/*Links to pages */}
      <div className="flex flex-col gap-2 ">
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
      {/*Socials and client logo */}
      <div className="flex flex-col h-full w-1/5">
        {/*Logo */}
        <div className="relative h-1/2">
          <Image src="/paneuropa.svg" alt="paneuropa" fill />
        </div>
        {/*Socials */}
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="">
            <Image src="/website.svg" alt="" width={30} height={30} />
          </Link>
          <Link href="">
            <Image src="/facebook.svg" alt="" width={32} height={36} />
          </Link>

          <Link href="">
            <Image src="/linkedin.svg" alt="" width={32} height={36} />
          </Link>
          <Link href="">
            <Image src="/instagram.svg" alt="" width={32} height={32} />
          </Link>
          <Link href="">
            <Image src="/tiktok.svg" alt="" width={36} height={36} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-row items-center justify-center font-light">
        Bartłomiej Mazik 2025©
      </div>
    </div>
  );
};

export default Footer;
