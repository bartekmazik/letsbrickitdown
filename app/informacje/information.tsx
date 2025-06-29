import { Calendar, Dot, Info, MapPin, Ticket } from "lucide-react";
import React from "react";

const EventInformation = () => {
  return (
    <div className="relative w-full sm:w-1/2 min-h-full p-4 drop-shadow-big bg-white border-4 border-blackprimary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="relative z-10 p-6 text-black flex flex-col gap-6">
        <div className="flex flex-col gap-4 font-semibold">
          <h2 className="text-2xl sm:text-3xl font-bold">O WYDARZENIU</h2>
          <div className="flex items-center gap-3 text-lg sm:text-2xl">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8" /> 12.07.2025
          </div>
          <div className="flex items-center gap-3 text-lg sm:text-2xl">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8" /> UE KATOWICE
          </div>
          <div className="flex items-center gap-3 text-lg sm:text-2xl">
            <Ticket className="w-6 h-6 sm:w-8 sm:h-8" /> WSTĘP DARMOWY
          </div>
        </div>
        <div className="flex flex-col gap-3 font-light">
          <h2 className="text-2xl sm:text-3xl font-bold">CO CIĘ CZEKA?</h2>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="min-w-6 min-h-6" /> Dobra atmosfera i naprawdę dużo
            klocków!
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg text-pretty">
            <Dot className="min-w-6 min-h-6" /> Inspirujące wystąpienia o
            klockowym biznesie i budowaniu kariery.
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="min-w-6 min-h-6" /> Turniej budowania w aż 8
            motywach!
          </div>
        </div>
      </div>
    </div>
  );
};

const ReasonsInformation = () => {
  return (
    <div className="relative w-full sm:w-1/2 h-full p-4 drop-shadow-big bg-white border-4 border-blackprimary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="relative z-10 p-6 text-black flex flex-col gap-6">
        <div className="flex flex-col gap-2 font-thin">
          <h2 className="text-2xl sm:text-3xl font-bold">
            DLACZEGO WARTO PRZYJŚĆ?
          </h2>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Spotkasz ludzi, którzy podobnie jak Ty
            kochają klocki!
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Dla każdego – niezależnie od wieku i
            doświadczenia.
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Przydatna wiedza i niezapomniane chwile!
          </div>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <h2 className="text-2xl sm:text-3xl font-bold">
            CO WYNIESIESZ Z WYDARZENIA?
          </h2>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Nowe spojrzenie na świat klocków.
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Praktyczne wskazówki od ekspertów.
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-lg">
            <Dot className="w-6 h-6" /> Świetna atmosfera i dobre wspomnienia!
          </div>
        </div>
        <a
          href="https://fb.me/e/5At0enIRf"
          className="mt-4 self-center py-3 px-6 text-white bg-black text-base sm:text-xl font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
        >
          SPRAWDŹ WYDARZENIE NA FACEBOOKU
        </a>
      </div>
    </div>
  );
};

const Informations = () => {
  return (
    <div className="w-full h-full bg-purpleprimary border-b-4 p-6 flex flex-col">
      {/* Header */}
      <div className="relative w-full mb-6 flex flex-col sm:flex-row items-center justify-start gap-2 text-black">
        <div className="hidden sm:flex h-20 w-20  items-center justify-center">
          <Info className="w-16 h-16" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold">
          INFORMACJE O WYDARZENIU
        </h1>
      </div>

      {/* Main content */}
      <div className="h-full flex flex-col sm:flex-row gap-6 pb-6">
        <EventInformation />
        <ReasonsInformation />
      </div>
    </div>
  );
};

export default Informations;
