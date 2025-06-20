import { Contact, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="h-full w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-col gap-6 p-6 text-black">
      <div className="flex flex-row items-center text-2xl gap-2">
        <Contact />
        DANE KONTAKOWE
      </div>
      <div className="flex flex-col gap-4 text-xl font-thin">
        <p>Email: email.com</p>
        <p>Telefon: 534343434</p>
      </div>
      <div className="flex flex-row items-center text-xl gap-2">
        ZNAJDZIESZ NAS RÓWNIEZ TUTAJ
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start invert  gap-4 pb-8">
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
          <Image src="/instagram.svg" alt="instagram" width={32} height={32} />
        </Link>
        <Link href="">
          <Image src="/tiktok.svg" alt="tiktok" width={36} height={36} />
        </Link>
      </div>
    </div>
  );
};

const ContactLocation = () => {
  return (
    <div className="h-full w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-col gap-6 p-6 text-black">
      <div className="flex flex-row items-center text-2xl gap-2">
        <MapPin />
        ADRES BIURA ORGANIZACJI
      </div>
      <div className="flex flex-col gap-4 text-xl font-thin">
        <p>Uniwersytet Ekonomiczny w Katowicach</p>
        <p>ul. Bogucicka 5</p>
        <p>40-000 Katowice</p>
      </div>
    </div>
  );
};

const Kontakt = () => {
  return (
    <section className="pt-[10vh] bg-greenprimary h-screen ">
      {" "}
      <div className="p-6 h-full">
        <h1 className="text-6xl text-black p-6 pb-10">KONTAKT</h1>
        <div className="w-full h-1/2 flex flex-row items-start justify-between gap-8">
          <ContactInfo />
          <ContactLocation />
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
