import { Dice3, Handshake, Headphones } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen sm:min-h-[90vh]  sm:h-[90vh] w-screen border-b-4  flex flex-col justify-between ">
      <div className="border-b-4 p-8 py-18 sm:py-auto sm:p-12 h-1/2 flex flex-col bg-yellowprimary  gap-10">
        <h1 className="text-4xl  ">WYDARZENIE</h1>
        <p className="text-md font-thin pb-4 overflow-hidden break-words">
          <strong className="font-semibold">„Let’s Brick It Down!”</strong>
          {` to wydarzenie pełne akcji dla wszystkich fanów klocków. Czekają na Ciebie: emocjonujący turniej budowania, inspirujące prelekcje, warsztaty i strefa relaksu, gdzie złapiesz oddech. Chcemy pokazać, że klocki to nie tylko zabawa – to też świetne narzędzie do nauki i rozwijania 
pomysłów biznesowych. 
`}
        </p>
      </div>
      <div className="min-h-1/2 bg-purpleprimary flex flex-col py-12 sm:py-0 sm:gap-0 gap-12 sm:grid grid-cols-3 text-black ">
        <div className="sm:border-r-4 border-black flex flex-col gap-2 items-center justify-center">
          <Headphones width={92} height={92} />
          <h2 className="text-xl">Interesujące prelekcje</h2>
          <p className="text-md font-light w-2/3">
            {" "}
            Weź udział w interesujących prelekcjach na temat klocków LEGO
          </p>
        </div>
        <div className="sm:border-r-4 border-black flex flex-col gap-2 items-center justify-center">
          <Dice3 width={92} height={92} />
          <h2 className="text-xl">Weź udział w zawodach</h2>
          <p className="text-md font-light w-2/3">
            {" "}
            Kazdy ma okazje wygrac super mega fajna nagrode biorac udzial w
            turnieju budowania
          </p>
        </div>
        <div className=" flex flex-col gap-2 items-center justify-center">
          <Handshake width={92} height={92} />
          <h2 className="text-xl">Przyszlosc biznesu</h2>
          <p className="text-md font-light w-2/3">
            {" "}
            Nawiaz kontakty biznesowe i dowiedz się jak klocki mogą byc
            przydatnym narzedziem biznesowym w dzisiejszych czasach
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
