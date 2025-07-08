import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Regulamin",
};

async function Regulamin() {
  return (
    <section className="pt-[10vh] bg-purpleprimary min-h-screen ">
      {" "}
      <div className="p-6 h-full">
        <h1 className="text-3xl sm:text-5xl text-black pb-6 sm:pb-10 sm:px-6 sm:pt-6">
          REGULAMIN
        </h1>
        <div className="flex flex-wrap flex-col justify-center items-start gap-8 sm:pb-10 sm:px-6 sm:pt-6">
          <a
            href="/docs/zgoda.pdf"
            target="_blank"
            className="border-4 min-w-full sm:min-w-1/3 bg-white border-black drop-shadow-small p-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            Zgoda opiekuna na udział w wydarzeniu
          </a>
          <a
            href="/docs/regulamin.pdf"
            target="_blank"
            className="border-4 min-w-full sm:min-w-1/3 bg-white border-black drop-shadow-small p-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            Regulamin wydarzenia
          </a>
          <a
            href="/docs/rodo.pdf"
            target="_blank"
            className="border-4 min-w-full sm:min-w-1/3 bg-white border-black drop-shadow-small p-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            Klauzula RODO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Regulamin;
