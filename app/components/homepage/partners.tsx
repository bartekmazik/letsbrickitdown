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
      <h1 className="text-4xl mb-8">PARTNERZY</h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {data.map((partner, i) => (
          <div
            key={i}
            className="p-4 bg-white   flex items-center justify-center"
          >
            <Image
              src={partner.imageUrl}
              alt={partner.imageAlt}
              className="object-contain max-w-[20vw] h-[300px] w-auto "
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
