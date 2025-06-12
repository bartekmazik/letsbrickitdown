import React from "react";

const Schedule = () => {
  return (
    <section className="h-[90vh] bg-yellowprimary w-screen border-b-4 border-blackprimary flex flex-col">
      <h1 className="text-6xl px-4 py-8 border-b-4 border-blackprimary">
        Harmonogram
      </h1>

      <div className="flex flex-col flex-grow bg-white">
        <div className="border-b-4 border-blackprimary bg-purpleprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">18:00</h2>
          <span className="text-3xl">Obiad</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-greenprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">18:30</h2>
          <span className="text-3xl">Networking</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-yellowprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">19:00</h2>
          <span className="text-3xl">Prelekcja</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-purpleprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">20:00</h2>
          <span className="text-3xl">Konkurs</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-purpleprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">20:00</h2>
          <span className="text-3xl">Konkurs</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-purpleprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">20:00</h2>
          <span className="text-3xl">Konkurs</span>
        </div>
        <div className="border-b-4 border-blackprimary bg-purpleprimary flex items-center gap-8 px-6 py-6">
          <h2 className="text-3xl font-bold">20:00</h2>
          <span className="text-3xl">Konkurs</span>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
