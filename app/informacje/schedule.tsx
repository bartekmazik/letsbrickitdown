import { Calendar } from "lucide-react";

const scheduleParts = [1, 2, 3, 4, 5, 6];

const SchedulePart = () => {
  return (
    <div className="w-full p-4 bg-greenprimary border-4 border-blackprimary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
      <div className="flex flex-row items-center gap-2 text-lg sm:text-xl">
        <p>12:00</p>
        <h2>KONKURS</h2>
      </div>
      <div className="p-2 bg-yellowprimary border-4 border-blackprimary text-sm sm:text-base">
        SCENA GŁÓWNA
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section className="min-h-screen sm:h-[90vh] overflow-y-auto bg-purpleprimary w-full border-b-4 p-4 sm:p-6 border-blackprimary flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-black">
        <div className="h-20 w-20 sm:h-24 sm:w-24 bg-yellowprimary border-4 border-blackprimary flex items-center justify-center">
          <Calendar className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <h1 className="text-4xl sm:text-6xl text-white">HARMONOGRAM</h1>
      </div>

      <div className="flex flex-col gap-4 mb-20">
        {scheduleParts.map((part) => (
          <SchedulePart key={part} />
        ))}
      </div>
    </section>
  );
};

export default Schedule;
