"use client";
import { motion, useScroll } from "framer-motion";
import Hero from "./homepage/hero";
import { useRef } from "react";
import Zones from "./homepage/zones";
import About from "./homepage/about";
import Location from "./homepage/location";

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  const ref = useRef(null);

  return (
    <motion.section>
      <div ref={ref}>
        <Hero />
      </div>
      <div ref={ref}>
        <About />
      </div>
      <div ref={ref}>
        <Zones />
      </div>
      <div ref={ref}>
        <Location />
      </div>
    </motion.section>
  );
};

export default Homepage;
