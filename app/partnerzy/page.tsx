import { Metadata } from "next";
import React from "react";
import { promises as fs } from "fs";
import Image from "next/image";
import { PartnerType } from "@/app/types/PartnerType";

export const metadata: Metadata = {
  title: "Partnerzy",
};

async function Partnerzy() {
  const file = await fs.readFile(
    process.cwd() + "/public/partners.json",
    "utf8"
  );
  const data: PartnerType[] = JSON.parse(file);

  return (
    <section className="pt-[10vh] bg-purpleprimary min-h-screen ">
      {" "}
      <div className="p-6 h-full">
        <h1 className="text-3xl sm:text-5xl text-black pb-6 sm:pb-10 sm:px-6 sm:pt-6">
          PARTNERZY
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-8">
          {data.map((partner, i) => (
            <div
              key={i}
              className="p-4 bg-white sm:w-1/3 w-full   flex items-center justify-center"
            >
              <Image
                src={partner.imageUrl}
                alt={partner.imageAlt}
                className="object-contain w-full   h-[30vh] sm:h-[20vh]  "
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partnerzy;
