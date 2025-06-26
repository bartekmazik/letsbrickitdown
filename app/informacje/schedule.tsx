import { Calendar } from "lucide-react";

const scheduleParts = [1, 2, 3, 4, 5, 6];

const SchedulePart = () => {
  return (
    <div className="w-full p-4 bg-white border-4 border-blackprimary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
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
    <section className="min-h-screen sm:h-[90vh]  bg-purpleprimary w-full border-b-4 p-6  border-blackprimary flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-black pb-4">
        <div className="h-20 w-20 sm:h-24 sm:w-24 hidden sm:flex items-center justify-center">
          <Calendar className="w-16 h-16 sm:w-16 sm:h-16" />
        </div>
        <h1 className="text-3xl sm:text-5xl text-black">HARMONOGRAM</h1>
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
