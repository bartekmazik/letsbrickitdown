import React from "react";

const Location = () => {
  return (
    <section className=" h-screen w-screen bg-redprimary p-12 border-b-4">
      <h1 className="text-4xl text-white pb-20">Miejsce wydarzenia</h1>
      <div className="grid grid-cols-2 gap-10 h-2/3">
        <div className="bg-white drop-shadow-big border-4"> ABC</div>
        <div className="bg-white drop-shadow-big border-4"> ABC</div>
      </div>
    </section>
  );
};

export default Location;
