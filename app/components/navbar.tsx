"use client";
import React, { useState } from "react";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const mobileMenuVariant = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const Sidebar = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
  return (
    <motion.div
      variants={mobileMenuVariant}
      className="fixed top-0 left-0 h-screen w-screen bg-whiteprimary flex flex-col p-4"
      initial="closed"
      animate="opened"
      exit="closed"
    >
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>ZAMKNIJ</button>
      </div>

      <div className="flex flex-col items-center justify-center text-2xl gap-12 flex-grow">
        <Link
          href="/informacje"
          onClick={() => setIsOpen(false)}
          className="transition duration-200 hover:text-yellowprimary"
        >
          Informacje
        </Link>
        <Link
          href="/onas"
          onClick={() => setIsOpen(false)}
          className="transition duration-200 hover:text-yellowprimary"
        >
          O nas
        </Link>
        <Link
          href="/regulamin"
          onClick={() => setIsOpen(false)}
          className="transition duration-200 hover:text-yellowprimary"
        >
          Regulamin
        </Link>
        <Link
          href="/kontakt"
          onClick={() => setIsOpen(false)}
          className="transition duration-200 hover:text-yellowprimary"
        >
          Kontakt
        </Link>
      </div>

      <p className="text-center font-thin">{`Let's Brick It Down 2025©`}</p>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="w-screen fixed z-100 h-[10vh] shadow-lg  border-b-4 md:gap-16 xl:gap-0  bg-white flex flex-row items-center justify-between md:justify-start xl:justify-between px-8"
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
    >
      <Link href="/" className="relative w-36 lg:w-48 h-full">
        <Image src="/logo.svg" fill alt="logo" />
      </Link>
      <div
        className="sm:flex flex-row items-center justify-start text-lg text-nowrap xl:text-xl gap-6 lg:gap-12 hidden 
      "
      >
        <Link
          href="/informacje"
          className="transition duration-200 hover:text-yellowstrong"
        >
          Informacje
        </Link>
        <Link
          href="/onas"
          className="transition duration-200 hover:text-yellowstrong"
        >
          O nas
        </Link>
        <Link
          href="/regulamin"
          className="transition duration-200 hover:text-yellowstrong"
        >
          Regulamin
        </Link>
        <Link
          href="/kontakt"
          className="transition duration-200 hover:text-yellowstrong"
        >
          Kontakt
        </Link>
      </div>
      <Button
        className="w-fit hidden lg:flex"
        href="/informacje/#competition"
        text={"ZAPISZ SIĘ NA TURNIEJ"}
      />
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <MenuIcon />
      </button>
    </motion.nav>
  );
};

export default Navbar;
