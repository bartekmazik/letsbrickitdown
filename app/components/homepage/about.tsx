import { Dice3, Handshake, Headphones } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen sm:min-h-[90vh]  sm:h-[90vh] w-screen border-b-4  flex flex-col justify-between ">
      <div className="border-b-4 p-8 py-18 sm:py-auto sm:p-12 h-1/2 flex flex-col bg-yellowprimary  gap-10">
        <h2 className="text-4xl  ">WYDARZENIE</h2>
        <p className="text-md font-thin pb-4 overflow-hidden break-words">
          <strong className="font-semibold">„Let’s Brick It Down!”</strong>
          {` to wyjątkowy projekt, który  ma pokazać, że klocki to coś więcej niż tylko zabawa - to także narzędzie do nauki, inspiracja do działania i możliwości rozwoju własnego biznesu.
To wydarzenie pełne kreatywności, pasji i pozytywnej energii – stworzone z myślą o wszystkich, którzy kochają klocki – niezależnie od wieku! Znajdziesz tu przestrzeń pełną pasji, spotkań z ekspertami oraz dobrej rywalizacji. Uczestnicy będą mogli dowiedzieć się, jak wygląda praca w klockowej branży oraz jak z pozoru prosta zabawa może stać się sposobem na życie.
Projekt skierowany jest do wszystkich - dzieci, młodzieży i dorosłych - każdy znajdzie coś dla siebie!
Dołącz do naszego wydarzenia i przekonaj się, że klocki mogą odmienić życie! 

`}
        </p>
      </div>
      <div className="min-h-1/2 bg-purpleprimary flex flex-col py-12 sm:py-0 sm:gap-0 gap-12 sm:grid grid-cols-3 text-black ">
        <div className="sm:border-r-4 border-black flex flex-col gap-2 items-center justify-center">
          <Headphones width={92} height={92} />
          <h2 className="text-xl">Interesujące prelekcje</h2>
          <p className="text-md font-light w-2/3">
            {" "}
            Odkryj, jak klocki LEGO mogą realnie odmienić Twoje życie. Poznaj
            historie osób, które zbudowały na nich swoją pasję i biznes, i
            dowiedz się, jak wykorzystać klocki w nauce czy biznesie.
          </p>
        </div>
        <div className="sm:border-r-4 border-black flex flex-col gap-2 items-center justify-center">
          <Dice3 width={92} height={92} />
          <h2 className="text-xl">Weź udział w zawodach</h2>
          <p className="text-md font-light w-2/3">
            {" "}
            Wskocz do gry o tytuł mistrza konstrukcji! Zmierz się z innymi
            uczestnikami i pokaż jak radzisz sobie z budowaniem pod presją
            czasu. Liczy się pomysł, kreatywność i dobra zabawa.
          </p>
        </div>
        <div className=" flex flex-col gap-2 items-center justify-center">
          <Handshake width={92} height={92} />
          <h2 className="text-xl">Strefa chillu</h2>
          <p className="text-md font-light w-2/3">
            Zbuduj sobie chwilę wytchnienia! Znajdziesz tutaj planszówki —
            idealne dla fanów luźnej rywalizacji oraz wiele innych atrakcji.
            Wpadnij też do strefy VR! To idealne miejsce, by naładować baterie,
            zanim wrócisz do akcji!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
