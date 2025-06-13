import React from "react";
import Informations from "./information";
import Zones from "./zones";
import Schedule from "./schedule";
import Footer from "../components/footer";
import Competition from "./competition";

const Informacje = () => {
  return (
    <div className="h-screen pt-[10vh] bg-greenprimary sm:overflow-y-scroll sm:snap-y sm:snap-mandatory scroll-smooth no-scrollbar">
      <div className="snap-end">
        <Informations />
      </div>
      <div className="snap-end">
        <Zones />
      </div>
      <div className="snap-end">
        <Schedule />
      </div>
      <div className="snap-end">
        <Competition />
      </div>
      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
};

export default Informacje;
