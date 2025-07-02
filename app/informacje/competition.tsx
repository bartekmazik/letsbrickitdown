import { CircleSmall, Puzzle, Trophy, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoriesChild = [
  "Bajki",
  "Zawód przyszłości",
  "Zamki",
  "Kosmos",
  "Podwodny świat",
];
const CategoriesOlder = [
  "Fantasy",
  "Hobby",
  "Zabytki",
  "Kosmos",
  "Podwodny świat",
];

const Competition = () => {
  return (
    <section
      className="bg-purpleprimary w-full p-6 pb-20 scroll-mt-20"
      id="competition"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pb-8 text-black">
        <div className="h-20 w-20 sm:h-24 sm:w-24  hidden sm:flex items-center justify-center">
          <Trophy className="w-16 sm:h-16" />
        </div>
        <h1 className="text-3xl sm:text-5xl">INFORMACJE O TURNIEJU</h1>
      </div>

      <div className="min-h-[80vh] w-full p-4 sm:p-6 border-4 drop-shadow-big border-blackprimary bg-yellowprimary flex flex-col gap-8">
        {/* Info about competition */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl">
            Gotowi na odrobinę emocji i zdrowej rywalizacji?
          </h2>
          <p className="font-thin text-base sm:text-lg">
            Aby sprawdzić swoje umiejętności w budowaniu, wpadajcie do Strefy
            Turnieju! Aby rozwiać wasze wątpliwości, przygotowaliśmy kilka
            najważniejszych informacji:
          </p>
        </div>

        {/* Two blocks with info */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12">
          <div className="drop-shadow-small w-full bg-white border-4 flex items-center px-4 py-6 text-base sm:text-xl gap-2">
            <Users className="w-8 h-8 sm:w-10 sm:h-10" />
            Budujemy w parach – we dwójkę zawsze raźniej!
          </div>
          <div className="drop-shadow-small w-full bg-white border-4 flex items-center px-4 py-6 text-base sm:text-xl gap-2">
            <Puzzle className="w-8 h-8 sm:w-10 sm:h-10" />
            Klocki zapewnia organizator!
          </div>
        </div>

        {/* Categories */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-12">
          <div className="drop-shadow-small w-full bg-white border-4 flex flex-col px-4 py-6 sm:py-8 text-base sm:text-xl gap-4">
            <h3>Dwie kategorie wiekowe i limity czasowe:</h3>
            <div className="flex items-center gap-2 text-sm sm:text-lg font-thin">
              <CircleSmall className="w-4 h-4" fill="black" /> 6-10 lat - 1,5
              godziny budowania
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-lg font-thin">
              <CircleSmall className="w-4 h-4" fill="black" /> 11+ - 2 godziny
              budowania
            </div>
          </div>

          {/* Tasks info */}
          <div className="drop-shadow-small w-full bg-white border-4 flex flex-col px-4 py-6 sm:py-8 text-sm sm:text-lg gap-4 font-thin">
            Waszym zadaniem będzie zbudowanie konstrukcji w jednym z 8 motywów,
            który zostanie wylosowany podczas wydarzenia (motywy ujawniamy z
            czasem, dlatego śledźcie nasze social media). Liczy się spryt,
            kreatywność, ale przede wszystkim – dobra zabawa!
          </div>
        </div>
        {/* Building styles */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-12">
          <div className="drop-shadow-small w-full bg-white border-4 flex flex-col px-4 py-6 sm:py-8 text-base sm:text-xl gap-4">
            <h3>Motywy budowania w kategorii 6-10 lat:</h3>
            {CategoriesChild.map((category, i) => (
              <div
                className="flex items-center gap-2 text-sm sm:text-lg font-thin"
                key={i}
              >
                <CircleSmall className="w-4 h-4" fill="black" /> {category}
              </div>
            ))}
          </div>

          {/* Tasks info */}
          <div className="drop-shadow-small w-full bg-white border-4 flex flex-col px-4 py-6 sm:py-8 text-base sm:text-xl gap-4">
            <h3>Motywy budowania w kategorii powyżej 11 lat:</h3>
            {CategoriesOlder.map((category, i) => (
              <div
                className="flex items-center gap-2 text-sm sm:text-lg font-thin"
                key={i}
              >
                <CircleSmall className="w-4 h-4" fill="black" /> {category}
              </div>
            ))}
          </div>
        </div>

        {/* Limited places */}
        <div className="drop-shadow-small w-full bg-white border-blackprimary text-black border-4 flex flex-col items-center px-4 py-6 sm:py-8 text-2xl sm:text-3xl gap-4 text-center">
          LICZBA MIEJSC JEST OGRANICZONA!
        </div>

        {/* Sign up button */}
        <Link
          href="https://forms.gle/gHvFA3R9s9ECPivMA"
          className="self-center py-4 px-6 sm:py-6 sm:px-8 text-white bg-black text-lg sm:text-xl font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
        >
          ZAPISZ SIĘ NA TURNIEJ
        </Link>
      </div>
    </section>
  );
};

export default Competition;
