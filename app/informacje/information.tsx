import { ArrowBigDown } from "lucide-react";
import React from "react";

const Information = ({
  text,
  href,
  description,
}: {
  text: string;
  href: string;
  description: string;
}) => {
  return (
    <div className="relative w-1/3 h-full p-4 cursor-pointer bg-yellowprimary hover:bg-purpleprimary transition-colors duration-500 border-4 border-blackprimary overflow-hidden">
      <div
        className="absolute inset-0  opacity-20 z-0"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="absolute inset-0 z-10 p-4 text-black hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">{text}</h2>
          <span className="font-thin">{description}</span>
        </div>
        <ArrowBigDown className="self-center" width={48} height={48} />
      </div>
    </div>
  );
};

const Informations = () => {
  return (
    <div className="min-h-screen sm:min-h-[90vh] sm:h-[90vh] w-screen border-b-4 flex flex-col">
      {/* Top Section with Fixed Background */}
      <div className="relative w-full h-1/3 bg-black bg-[url('/zamora.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
        <div className="relative z-10 flex flex-col gap-4 p-6 text-white">
          <h1 className="text-6xl">O wydarzeniu</h1>
          <p className="text-xl">
            Poznaj informacje o wydarzeniu których nie znałeś
          </p>
        </div>
        {/* Optional: Add a black overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>

      <div className="w-full h-2/3 flex flex-row">
        <Information text="STREFY" href="" description="costamblalalala" />
        <Information text="HARMONOGRAM" href="" description="costamblalalala" />
        <Information
          text="DLACZEGO WARTO?"
          href=""
          description="costamblalalala"
        />
      </div>
    </div>
  );
};

export default Informations;
