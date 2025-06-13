import { Map } from "lucide-react";
import React from "react";

const Zone = ({
  className,
  title,
  content,
}: {
  className?: string;
  title: string;
  content: string;
}) => {
  return (
    <div className={`${className}  border-4 drop-shadow-big h-full p-4 py-8`}>
      <h2 className="text-3xl pb-4">{title}</h2>
      <p className="text-base font-light overflow-hidden "> {content}</p>
    </div>
  );
};

const Zones = () => {
  return (
    <section className="min-h-[90vh] sm:max-h-[90vh] sm:h-[90vh] bg-[url('/zamora.jpg')] bg-cover bg-center bg-fixed  w-screen border-b-4 p-8 sm:p-6 ">
      <div className="relative z-10 flex flex-row items-center gap-4 pb-10 text-white">
        <div
          className=" h-24 w-24 bg-yellowprimary border-4 border-blackprimary flex flex-col items-center justify-center
         "
        >
          <Map className="w-12 h-12 text-black" />
        </div>
        <h1 className="text-6xl">STREFY WYDARZENIA</h1>
      </div>
      <div className="flex flex-col sm:grid grid-cols-3 h-2/3 w-full gap-8">
        <Zone
          className="bg-yellowprimary"
          title="STREFA PRELEKCJI"
          content="Choć klocki kojarzą się głównie z zabawą, są również skutecznym narzędziem rozwoju oraz nauki. W Strefie Prelekcji poznacie osoby, które zamieniły swoją klockową pasję w sposób na życie. Przekonacie się, jak można je wykorzystać  w edukacji, tworzeniu projektów, a nawet w biznesie!"
        />
        <Zone
          className="bg-purpleprimary text-white border-blackprimary"
          title="STREFA TURNIEJU"
          content="Jeśli jesteście miłośnikami rywalizacji, mamy coś dla was! W naszej Strefie Turnieju będziecie mogli się zmierzyć, budując w parach, na czas w aż 8 różnych motywach. Ważna będzie nie tylko kreatywność i wyobraźnia, ale również umiejętność pracy w zespole. Liczba miejsc jest ograniczona, dlatego zapisz się (to może być odnośnik do zapisów) już teraz!"
        />
        <Zone
          className="bg-redprimary text-black border-blackprimary"
          title="STREFA CHILLU"
          content="Aby złapać chwilę wytchnienia, wpadaj śmiało do Strefy Chillu! Będą tam na Ciebie czekać wygodne miejsca do relaksu oraz inne dodatkowe atrakcje. To idealne miejsce na odpoczynek i naładowanie baterii w spokojnej atmosferze."
        />
      </div>
    </section>
  );
};

export default Zones;
