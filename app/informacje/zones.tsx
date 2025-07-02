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
    <div
      className={`${className}  border-4 drop-shadow-big flex flex-col min-h-72 p-4 py-8`}
    >
      <h2 className="text-2xl sm:text-3xl pb-4 sm:self-center">{title}</h2>
      <p className="text-base font-light overflow-hidden "> {content}</p>
    </div>
  );
};

const Zones = () => {
  return (
    <section className="min-h-[60vh]  bg-yellowprimary w-screen border-b-4 p-6  ">
      <div className="relative z-10 flex flex-row items-center pb-8 text-black">
        <div
          className=" h-24 w-24 bg-transparent hidden sm:flex flex-col items-center justify-center
         "
        >
          <Map className="w-16 h-16 text-black" />
        </div>
        <h1 className="text-3xl sm:text-5xl">STREFY WYDARZENIA</h1>
      </div>
      <div className="flex flex-col sm:grid grid-cols-3 h-2/3 w-full gap-8">
        <Zone
          className="bg-white"
          title="STREFA PRELEKCJI"
          content="Choć klocki kojarzą się głównie z zabawą, są również skutecznym narzędziem rozwoju oraz nauki. W Strefie Prelekcji poznasz osoby, które zamieniły swoją klockową pasję w sposób na życie. Przekonaj się, jak można je wykorzystać w edukacji, tworzeniu projektów, a nawet w biznesie!"
        />
        <Zone
          className="bg-white text-black border-blackprimary"
          title="STREFA TURNIEJU"
          content="Jeśli jesteś miłośnikiem rywalizacji, mamy coś dla Ciebie! Tutaj sprawdzisz, jak radzisz sobie z budowaniem pod presją czasu i konkretnym motywem. Zmierz się z innymi uczestnikami, pokaż swoją kreatywność i powalcz o tytuł mistrza budowania. Liczy się pomysł, szybkość i dobra zabawa! Zapisz się już teraz!"
        />
        <Zone
          className="bg-white text-black border-blackprimary"
          title="STREFA CHILLU"
          content="Potrzebujesz chwili dla siebie? W Strefie Chillu znajdziesz przestrzeń, w której możesz po prostu odpocząć i złapać oddech. Czekają na Ciebie wygodne pufy, planszówki dla tych, którzy lubią odrobinę rywalizacji na luzie, kreatywne aktywności i strefa VR. Odpocznij, zrelaksuj się i przekonaj się, że dobrą chwilę też można zbudować.
"
        />
      </div>
    </section>
  );
};

export default Zones;
