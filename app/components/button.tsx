import Link from "next/link";
import React from "react";

const Button = ({
  className,
  text,
  href = "/",
}: {
  className?: string;
  text: string;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      scroll={true}
      className={`${className} bg-yellowprimary py-2 px-4 border-4 text-nowrap cursor-pointer border-blackprimary drop-shadow-small transition duration-200 hover:bg-[#ffde90] hover:scale-105`}
    >
      {text}
    </Link>
  );
};

export default Button;
