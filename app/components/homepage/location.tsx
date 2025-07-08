"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { Building, Building2, MapPin } from "lucide-react";
import React from "react";

const Location = () => {
  const position = { lat: 50.26068073514783, lng: 19.04561660242226 };

  return (
    <section className=" min-h-[90vh] sm:max-h-[90vh] w-screen bg-yellowprimary p-8 sm:p-12 border-b-4">
      <h2 className="text-4xl  pb-20">MIEJSCE WYDARZENIA</h2>
      <div className="flex flex-col sm:grid grid-cols-2 gap-10 h-2/3">
        <div className="bg-white h-[50vh] drop-shadow-big border-4 p-8 sm:p-12 flex flex-col gap-6 sm:gap-12">
          {" "}
          <h2 className="text-2xl">Uniwersytet Ekonomiczny w Katowicach</h2>
          <div className="flex flex-col  gap-4">
            <div className="flex flex-row items-center justify-start gap-2">
              <Building width={32} height={32} />
              <p className="text-lg">Budynek CNTI</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <MapPin width={32} height={32} />
              <p className="text-lg">ul. Bogucicka 5</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <Building2 width={32} height={32} />
              <p className="text-lg">40-000 Katowice</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[50vh] drop-shadow-big border-4">
          <APIProvider
            apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          >
            <Map
              zoom={16}
              center={position}
              mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}
            >
              {" "}
              <AdvancedMarker position={position}>
                <Pin />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};

export default Location;
