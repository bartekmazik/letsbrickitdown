import React from "react";
import Button from "../components/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas",
};

const Organisator = ({
  imageUrl,
  imageAlt,
  name,
  role,
}: {
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="h-3/4 bg-white w-full drop-shadow-small text-black border-4 border-blackprimary flex flex-col items-center gap-2 p-4">
      <div className="w-full h-2/3 relative aspect-square border-4">
        <Image src={imageUrl} fill alt={imageAlt} className="object-cover" />
      </div>
      <h3 className="text-xl">{name}</h3>
      <p className="text-lg font-thin text-center">{role}</p>
    </div>
  );
};

const Organisators = () => {
  return (
    <div className="p-6 sm:h-screen flex flex-col">
      {" "}
      <h1 className="text-3xl sm:text-5xl text-black pb-6 sm:pb-10">
        ORGANIZATORZY
      </h1>
      <div className="flex flex-col sm:flex-row justify-between w-full gap-6 h-3/4">
        <Organisator
          imageAlt="mateusz koordynator glowny"
          imageUrl="/organisators/mateusz.jpg"
          name="Mateusz Zamora"
          role="Koordynator Główny"
        />
        <Organisator
          imageAlt="kasia koordynator kzp"
          imageUrl="/organisators/kasia.png"
          name="Katarzyna Paliga"
          role="Koordynatorka Kontaktu z Partnerami"
        />{" "}
        <Organisator
          imageAlt="kuba koordynator harmonogramu"
          imageUrl="/organisators/kuba.jpg"
          name="Jakub Ściegienny"
          role="Koordynator Harmonogramu i Logistyki"
        />{" "}
        <Organisator
          imageAlt="marcel koordynator promocji"
          imageUrl="/organisators/marcel.jpg"
          name="Marcel Gruner"
          role="Koordynator Promocji"
        />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="pt-[10vh] bg-purpleprimary  ">
      {" "}
      <div className="p-6 sm:h-screen">
        <h1 className="text-3xl sm:text-5xl text-black pb-6 sm:pb-10 sm:px-6 sm:pt-6">
          O ORGANIZACJI
        </h1>
        <div className="sm:h-3/4 w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-col sm:flex-row justify-between gap-6 p-6 text-black">
          <div className="flex flex-col gap-6 w-full sm:w-1/2">
            <h2 className="flex flex-row items-center text-2xl gap-2">
              CZYM JEST PANEUROPA?
            </h2>
            <span className="flex flex-col gap-4 text-md sm:text-xl w-full sm:w-3/4 font-thin">
              Paneuropa to grupa otwartych na świat i ambitnych studentów, dla
              których słowo “wyzwanie” nie jest straszne. Od 25 lat z pasją
              realizują liczne projekty, zarówno biznesowe, jak i związane z ich
              indywidualnymi zainteresowaniami. Na ich koncie są projekty
              zakończone sukcesem, takie jak: Tupot małych łapek, Młodzi mimo
              wieku, czy też Bieg Bohaterów.
            </span>
            <Button
              text="STRONA ORGANIZACJI"
              className="w-fit text-lg self-center sm:self-auto"
              href="https://paneuropa.com.pl/"
            />
          </div>
          <div className="relative hidden sm:block border-4 w-1/2 h-full border-black">
            <Image
              src="/about/paneuropa.jpg"
              fill
              alt="paneuropaImage"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Organisators />
    </section>
  );
};

export default AboutUs;
