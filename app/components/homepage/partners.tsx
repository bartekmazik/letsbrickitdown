import React from "react";
import { promises as fs } from "fs";
import { PartnerType } from "@/app/types/PartnerType";
import Image from "next/image";

async function Partners() {
  const file = await fs.readFile(
    process.cwd() + "/public/partners.json",
    "utf8"
  );
  const data: PartnerType[] = JSON.parse(file);

  return (
    <div className="min-h-[90vh] bg-purpleprimary w-screen p-8 sm:p-12">
      <h2 className="text-4xl mb-8">PARTNERZY STRATEGICZNI</h2>
      <div className="drop-shadow-big bg-white border-4 border-black mb-12">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {data
            .filter((partner) => partner.type === "strategic")
            .map((partner, i) => (
              <div
                key={i}
                className="p-4 bg-white   flex items-center justify-center"
              >
                <Image
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                  className="object-contain w-full sm:w-[20vw] h-[300px]  "
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            ))}
        </div>
      </div>
      <h2 className="text-4xl mb-8">PARTNERZY WYDARZENIA</h2>
      <div className="drop-shadow-big bg-white border-4 border-black mb-12">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {data
            .filter((partner) => partner.type === "normal")
            .map((partner, i) => (
              <div
                key={i}
                className="p-4 bg-white   flex items-center justify-center"
              >
                <Image
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                  className="object-contain w-full sm:w-[20vw] h-[300px]  "
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            ))}
        </div>
      </div>{" "}
      <h2 className="text-4xl mb-8">PARTNERZY MEDIALNI</h2>
      <div className="drop-shadow-big bg-white border-4 border-black mb-12">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {data
            .filter((partner) => partner.type === "medial")
            .map((partner, i) => (
              <div
                key={i}
                className="p-4 bg-white   flex items-center justify-center"
              >
                <Image
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                  className="object-contain w-full sm:w-[20vw] h-[300px]  "
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
