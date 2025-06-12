import { Trophy } from "lucide-react";
import React from "react";
const Advantage = ({
  className,
  title,
  content,
}: {
  className?: string;
  title: string;
  content: string;
}) => {
  return (
    <div
      className={`${className}  border-4 drop-shadow-big h-full p-4 py-8 flex flex-col`}
    >
      <Trophy className="w-1/3 h-1/3 self-center" />
      <h2 className="text-xl pb-4 self-center">{title}</h2>
      <p className="text-sm font-light overflow-hidden "> {content}</p>
    </div>
  );
};

const Advantages = () => {
  return (
    <section className="min-h-[90vh] sm:max-h-[90vh]  sm:h-[90vh] w-screen  p-8 sm:p-12 ">
      <h1 className="text-6xl pb-20 text-white">Dlaczego warto?</h1>
      <div className="flex flex-col sm:grid grid-cols-3 h-2/3 w-full gap-8">
        <Advantage
          className="bg-yellowprimary"
          title="STREFA WYSTAWCÓW"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
        <Advantage
          className="bg-purpleprimary text-white border-blackprimary"
          title="STREFA WYSTAWCÓW"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
        <Advantage
          className="bg-redprimary text-black border-blackprimary"
          title="STREFA WYSTAWCÓW"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
      </div>
    </section>
  );
};

export default Advantages;
