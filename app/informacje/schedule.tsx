import { Calendar } from "lucide-react";

const scheduleParts = [1, 2, 3, 4, 5, 6];

const SchedulePart = () => {
  return (
    <div className="w-full p-4 bg-greenprimary border-4 border-blackprimary flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2 text-xl">
        <p>12:00</p>
        <h2>KONKURS</h2>
      </div>
      <div className="p-2 bg-yellowprimary border-4 border-blackprimary">
        SCENA GŁOWNA
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section className="h-[90vh] overflow-y-scroll bg-purpleprimary w-screen border-b-4 p-6 border-blackprimary flex flex-col gap-4">
      <div className=" flex flex-row items-center gap-4  text-black">
        <div
          className=" h-24 w-24 bg-yellowprimary border-4 border-blackprimary  flex flex-col items-center justify-center
         "
        >
          <Calendar className="w-12 h-12 " />
        </div>
        <h1 className="text-6xl text-white">HARMONOGRAM</h1>
      </div>
      <div className="h-4/5 w-full  flex flex-col gap-4 mb-20">
        {scheduleParts.map((part) => (
          <SchedulePart key={part} />
        ))}
      </div>
    </section>
  );
};

export default Schedule;
