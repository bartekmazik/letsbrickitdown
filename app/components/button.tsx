import React from "react";

const Button = ({ className, text }: { className?: string; text: string }) => {
  return (
    <button
      className={`${className} bg-yellowprimary py-2 px-4 border-4 cursor-pointer border-blackprimary drop-shadow-small transition duration-200 hover:bg-[#ffde90] hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
