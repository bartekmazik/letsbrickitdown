import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";
import Button from "../components/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[100vh] pt-[10vh] border-b-4 flex flex-row justify-between items-start">
      {/*Left container */}
      <div className="w-full sm:w-1/2 h-full bg-greenprimary sm:border-r-4 p-8 sm:p-12 pb-24 flex flex-col items-start justify-start gap-16 sm:justify-between">
        <div className="flex flex-col">
          <h1 className="text-6xl sm:text-7xl">Zbudujmy coś razem</h1>
          <p className="sm:hidden font-light">
            Wydarzenie dla osób zajmujących się klockami
          </p>
        </div>
        <div className="relative flex flex-col items-start justify-start gap-8">
          <div className="flex flex-row items-center justify-start gap-2 text-2xl">
            <Calendar width={40} height={40} /> 12.07.2025
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-2xl">
            <Clock width={40} height={40} /> 17:00
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-2xl">
            <MapPin width={40} height={40} /> UE Katowice
          </div>
        </div>
        <Button text="INFORMACJE" className="text-2xl z-50" />
      </div>
      {/*Right container */}
      <div className="hidden sm:block w-1/2 h-full bg-purpleprimary">
        tu bedzie obrazek
      </div>
      {/*Center brick */}
      <div className="absolute flex flex-row items-end sm:items-center pb-5 justify-center w-full h-full">
        <Image src="/brick.svg" alt="brick" width={180} height={180} />
      </div>
    </section>
  );
};

export default Hero;
