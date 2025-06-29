import React from "react";
import Informations from "./information";
import Zones from "./zones";
// import Schedule from "./schedule";
import Footer from "../components/footer";
import Competition from "./competition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informacje",
};

const Informacje = () => {
  return (
    <div className="min-h-screen pt-[10vh] bg-purpleprimary scroll-smooth no-scrollbar">
      <Informations />

      <Zones />

      {/* <Schedule /> */}

      <Competition />

      <Footer />
    </div>
  );
};

export default Informacje;
