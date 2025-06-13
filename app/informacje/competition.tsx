import { CircleSmall, Puzzle, Trophy, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const Competition = () => {
  return (
    <section className="h-[90vh] snap-start overflow-y-scroll  bg-white  w-screen  px-6 pt-6 pb-20">
      <div className=" flex flex-row items-center gap-4 pb-10 text-black">
        <div
          className=" h-24 w-24 bg-yellowprimary border-4 border-blackprimary  flex flex-col items-center justify-center
         "
        >
          <Trophy className="w-12 h-12 " />
        </div>
        <h1 className="text-6xl">INFORMACJE O TURNIEJU</h1>
      </div>
      <div className="min-h-[80vh]  p-6 w-full border-4 drop-shadow-big border-blackprimary bg-greenprimary flex flex-col gap-8">
        {/*Info about competition */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">
            Gotowi na odrobinę emocji i zdrowej rywalizacji?
          </h2>
          <p className="font-thin text-lg">
            Aby sprawdzić swoje umiejętności w budowaniu, wpadajcie do Strefy
            Turnieju! Aby rozwiać wasze wątpliwości, przygotowaliśmy kilka
            najważniejszych informacji:
          </p>
        </div>
        {/*Two blocks with info */}
        <div className="h-1/4 w-full flex flex-row justify-between gap-12">
          <div className="h-full drop-shadow-small w-full bg-white border-4 flex flex-row items-center px-4 py-8 text-xl gap-2">
            <Users className="w-10 h-10 " /> Budujemy w parach – we dwójkę
            zawsze raźniej!
          </div>
          <div className="h-full drop-shadow-small w-full bg-white border-4 flex flex-row items-center px-4 py-8 text-xl gap-2">
            <Puzzle className="w-10 h-10 " /> Klocki zapewnia organizator!
          </div>
        </div>
        {/*Categories */}
        <div className="h-full drop-shadow-small w-full bg-redprimary border-4 flex flex-col  px-4 py-8 text-xl gap-4">
          <h3>Dwie kategorie wiekowe i limity czasowe:</h3>
          <div className="flex flex-row items-center gap-2 text-lg font-thin">
            <CircleSmall className="w-4 h-4 " fill="black" /> 6-10 lat, 1,5
            godziny budowania
          </div>
          <div className="flex flex-row items-center gap-2 text-lg font-thin">
            <CircleSmall className="w-4 h-4 " fill="black" /> 11+, 2 godziny
            budowania
          </div>
        </div>
        {/*Tasks info */}
        <div className="h-full drop-shadow-small w-full bg-yellowprimary border-4 flex flex-col  px-4 py-8 text-lg gap-4 font-thin">
          Waszym zadaniem będzie zbudowanie konstrukcji w jednym z 8 motywów,
          który zostanie wylosowany podczas wydarzenia (motywy ujawniamy z
          czasem, dlatego śledźcie nasze social media). Liczy się spryt,
          kreatywność, ale przede wszystkim – dobra zabawa!
        </div>
        {/*Limited places */}
        <div className="h-full drop-shadow-small w-full bg-purpleprimary border-blackprimary text-white border-4 flex flex-col items-center px-4 py-8 text-3xl gap-4">
          LICZBA MIEJSC JEST OGRANICZONA!
        </div>
        {/*Sign up button */}
        <Link
          href="/"
          className="self-center py-6 px-8 text-white bg-black text-xl font-semibold rounded-lg hover:scale-105 transition-transform duration-300 "
        >
          ZAPISZ SIĘ NA TURNIEJ
        </Link>
      </div>
    </section>
  );
};

export default Competition;
