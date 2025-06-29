import { Calendar, Clock, MapPin, Sparkle } from "lucide-react";
import React from "react";
import Button from "../button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-purpleprimary pt-24 sm:pt-[20vh] border-b-4 flex flex-col items-center overflow-hidden">
      {/* Top Right Logo */}
      <div className="hidden absolute right-4 bottom-4 w-24 h-24 sm:w-[15vw] sm:h-[15vh] text-xl font-thin sm:flex items-center justify-center invert">
        <div className="relative w-full h-full">
          <Image src="/paneuropa.svg" fill alt="logo PE" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl px-4 sm:px-8 flex flex-col items-center gap-8 sm:gap-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Zbudujmy coś wielkiego!
          </h1>
        </div>
        <div className="sm:hidden flex flex-col items-start justify-start gap-4">
          <div className="flex items-center gap-3 text-xl font-semibold sm:text-2xl">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8" /> 12.07.2025
          </div>
          <div className="flex items-center gap-3 text-xl font-semibold sm:text-2xl">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8" /> UE KATOWICE
          </div>
          <div className="flex items-center gap-3 text-xl font-semibold sm:text-2xl">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8" /> 12:00
          </div>
        </div>

        <Button
          href="/informacje"
          text="INFORMACJE"
          className="text-lg sm:text-2xl z-50"
        />

        {/* Rotated Bar */}
        <div className="w-[120vw] mt-8  flex gap-4 sm:gap-8 flex-wrap justify-center items-center py-4 sm:py-6 min-h-16 border-4 bg-white -rotate-3">
          <Sparkle className="w-8 h-8 sm:w-12 sm:h-12" fill="#ffde90" />
          <p className=" text-sm sm:text-xl">WSTĘP DARMOWY</p>
          <Sparkle className="w-8 h-8 sm:w-12 sm:h-12" fill="#ffde90" />
          <p className=" hidden sm:block text-sm sm:text-xl">
            CIEKAWE PRELEKCJE
          </p>
          <Sparkle
            className="hidden sm:block w-8 h-8 sm:w-12 sm:h-12"
            fill="#ffde90"
          />
          <p className="hidden sm:block text-sm sm:text-xl">12 LIPCA 2025</p>
          <Sparkle
            className=" hidden sm:block w-8 h-8 sm:w-12 sm:h-12"
            fill="#ffde90"
          />
        </div>

        {/* Description */}
        <div className="hidden px-4 sm:px-16 w-full sm:flex justify-center">
          <div className="text-base sm:text-xl max-w-2xl text-center font-thin">
            {`Zapraszamy na Let’s Brick It Down!, czyli wydarzenie dla osób
            zajmujących się`}{" "}
            <strong className="font-bold">klockami</strong>. Wydarzenie obejmuje
            turniej, prelekcje oraz strefę budowania.
          </div>
        </div>
      </div>

      {/* Optional Circle Image (for larger screens) */}
      {/* 
      <div className="hidden sm:flex absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="rounded-full w-64 h-64 sm:w-[30vw] sm:h-[30vw] overflow-hidden border-4 border-blackprimary drop-shadow-small bg-white">
          <Image src="/zamora.jpg" fill alt="circle" className="object-cover" />
        </div>
      </div> 
      */}
    </section>
  );
};

export default Hero;
