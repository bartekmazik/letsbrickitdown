import { Calendar, Dot, Info, MapPin, Ticket } from "lucide-react";
import Link from "next/link";
import React from "react";

const EventInformation = () => {
  return (
    <div className="relative w-1/2 h-full p-4  drop-shadow-big bg-redprimary border-4 border-blackprimary overflow-hidden">
      <div
        className="absolute inset-0  opacity-20 z-0"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="absolute inset-0 z-10 p-8 text-black  flex flex-col gap-6">
        <div className="flex flex-col gap-4 font-semibold">
          <h2 className="text-3xl font-bold">O WYDARZENIU</h2>
          <div className="flex flex-row items-center justify-start gap-4 text-2xl">
            <Calendar width={30} height={30} /> 12.07.2025
          </div>
          <div className="flex flex-row items-center justify-start gap-4 text-2xl">
            <MapPin width={30} height={30} /> UE KATOWICE
          </div>
          <div className="flex flex-row items-center justify-start gap-4 text-2xl">
            <Ticket width={30} height={30} /> WSTĘP DARMOWY
          </div>
        </div>
        <div className="flex flex-col gap-3 font-light">
          <h2 className="text-3xl font-bold">CO CIĘ CZEKA?</h2>

          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Dobra atmosfera i naprawdę dużo
            klocków!
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Inspirujące wystąpienia o klockowym
            biznesie i budowaniu kariery.
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Turniej budowania w aż 8 motywach!
          </div>
        </div>
      </div>
    </div>
  );
};

const ReasonsInformation = () => {
  return (
    <div className="relative w-1/2 h-full p-4  drop-shadow-big bg-greenprimary  border-4 border-blackprimary overflow-hidden">
      <div
        className="absolute inset-0  opacity-20 z-0"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="absolute inset-0 z-10 p-8 text-black  flex flex-col gap-4">
        <div className="flex flex-col gap-2 font-thin">
          <h2 className="text-3xl font-bold">DLACZEGO WARTO PRZYJŚĆ?</h2>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Spotkasz ludzi, którzy podobnie jak
            Ty kochają klocki!
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Wydarzenie jest dla każdego –
            niezależnie od wieku i stopnia zaawansowania
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Zarówno zdobędziesz przydatną wiedzę
            jak i przeżyjesz niezapomniane chwile!
          </div>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <h2 className="text-3xl font-bold">CO WYNIESIESZ Z WYDARZENIA?</h2>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Zupełnie nowe spojrzenie na klockowy
            świat
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Praktyczne wskazówki od ekspertów z
            branży klocków
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-lg">
            <Dot width={30} height={30} /> Niezapomniane chwile spędzone w
            świetnej atmosferze!
          </div>
        </div>
        <Link
          href="/"
          className="self-center py-3 px-6 text-white bg-black text-xl font-semibold rounded-lg hover:scale-105 transition-transform duration-300 "
        >
          SPRAWDŹ WYDARZENIE NA FACEBOOKU
        </Link>
      </div>
    </div>
  );
};

const Informations = () => {
  return (
    <div className="min-h-screen sm:min-h-[90vh] sm:h-[90vh] bg-white w-screen border-b-4 p-6 flex flex-col">
      <div className="relative w-full h-1/4  overflow-hidden flex flex-row items-center">
        <div className="relative z-10 flex flex-row items-center gap-4  text-black">
          <div
            className=" h-24 w-24 bg-yellowprimary border-4 border-blackprimary flex flex-col items-center justify-center
         "
          >
            <Info className="w-12 h-12" />
          </div>
          <h1 className="text-6xl">INFORMACJE O WYDARZENIU</h1>
        </div>
      </div>

      <div className="w-full h-3/4 flex flex-row gap-8">
        <EventInformation />
        <ReasonsInformation />
      </div>
    </div>
  );
};

export default Informations;
