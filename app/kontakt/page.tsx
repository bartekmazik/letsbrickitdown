import { Contact, MapPin } from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
};

const ContactInfo = () => {
  return (
    <div className="h-full w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-col gap-6 p-6 text-black">
      <div className="flex flex-row items-center text-xl sm:text-2xl gap-2">
        <Contact />
        DANE KONTAKOWE
      </div>
      <div className="flex flex-col gap-4 text-md sm:text-xl font-thin">
        <p>Email: mateusz.zamora2@edu.uekat.pl</p>
        <p>Telefon: 518 040 356</p>
      </div>
      <div className="flex flex-row items-center text-md sm:text-xl gap-2">
        ZNAJDZIESZ NAS RÓWNIEZ TUTAJ
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start invert  gap-4 pb-8">
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
          <Image src="/instagram.svg" alt="instagram" width={32} height={32} />
        </a>
        <a href="https://www.tiktok.com/@paneuropa_ue">
          <Image src="/tiktok.svg" alt="tiktok" width={36} height={36} />
        </a>
      </div>
    </div>
  );
};

const ContactLocation = () => {
  return (
    <div className="h-full w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-col gap-6 p-6 text-black">
      <div className="flex flex-row items-center text-xl sm:text-2xl gap-2">
        <MapPin />
        ADRES BIURA ORGANIZACJI
      </div>
      <div className="flex flex-col gap-4 text-md sm:text-xl font-thin">
        <p>Uniwersytet Ekonomiczny w Katowicach</p>
        <p>ul. Bogucicka 5</p>
        <p>40-000 Katowice</p>
      </div>
    </div>
  );
};

const Kontakt = () => {
  return (
    <section className="pt-[10vh] bg-purpleprimary sm:h-screen ">
      {" "}
      <div className="p-6 h-full">
        <h1 className="text-3xl sm:text-5xl text-black pb-6">KONTAKT</h1>
        <div className="w-full h-1/2 flex flex-col sm:flex-row items-start justify-between gap-8">
          <ContactInfo />
          <ContactLocation />
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
