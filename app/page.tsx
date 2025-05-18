"use client";
import { motion } from "framer-motion";
import Hero from "./homepage/hero";
import { useRef } from "react";
import Zones from "./homepage/zones";
import About from "./homepage/about";
import Location from "./homepage/location";
import Partners from "./homepage/partners";

const Homepage = () => {
  // const { scrollYProgress } = useScroll();

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
      <div ref={ref}>
        <Partners />
      </div>
    </motion.section>
  );
};

export default Homepage;
