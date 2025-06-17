import React from "react";
import Button from "../components/button";
import Image from "next/image";

const Organisator = () => {
  return (
    <div className="h-3/4 bg-white w-full drop-shadow-small text-black border-4 border-blackprimary flex flex-col items-center gap-2 p-4">
      <div className="w-full h-2/3 relative aspect-square border-4">
        <Image
          src="/zamora.jpg"
          fill
          alt="organisator"
          className="object-cover"
        />
      </div>
      <h3 className="text-xl">ZAMORA</h3>
      <p>Koordynator czegos</p>
    </div>
  );
};

const Organisators = () => {
  return (
    <div className="px-6 h-screen flex flex-col gap-4">
      {" "}
      <h1 className="text-6xl text-black pb-10 px-6 pt-6">ORGANIZATORZY</h1>
      <div className="flex flex-row justify-between w-full gap-6 h-3/4">
        <Organisator />
        <Organisator />
        <Organisator />
        <Organisator />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="pt-[10vh] bg-greenprimary min-h-screen ">
      {" "}
      <div className="p-6 h-screen">
        <h1 className="text-6xl text-black pb-10 px-6 pt-6">O ORGANIZACJI</h1>
        <div className="h-3/4 w-full drop-shadow-big bg-white border-4 border-blackprimary flex flex-row justify-between gap-6 p-6 text-black">
          <div className="flex flex-col gap-6 w-1/2">
            <h2 className="flex flex-row items-center text-2xl gap-2">
              CZYM JEST PANEUROPA?
            </h2>
            <span className="flex flex-col gap-4 text-xl w-3/4 font-thin">
              Paneuropa to grupa otwartych na świat i ambitnych studentów, dla
              których słowo “wyzwanie” nie jest straszne. Od 25 lat z pasją
              realizują liczne projekty, zarówno biznesowe, jak i związane z ich
              indywidualnymi zainteresowaniami. Na ich koncie są projekty
              zakończone sukcesem, takie jak: Tupot małych łapek, Młodzi mimo
              wieku, czy też Bieg Bohaterów.
            </span>
            <Button
              href="/"
              variant="yellow"
              text="STRONA ORGANIZACJI"
              className="w-fit text-lg"
            />
          </div>
          <div className="relative border-4 w-1/2 h-full border-black">
            <Image
              src="/zamora.jpg"
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
