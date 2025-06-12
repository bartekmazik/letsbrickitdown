"use client";
import { motion } from "framer-motion";
import Hero from "./homepage/hero";

import About from "./homepage/about";
import Location from "./homepage/location";
import Partners from "./homepage/partners";
import Footer from "./components/footer";

const Homepage = () => {
  return (
    <motion.section className="sm:h-screen sm:overflow-y-scroll sm:snap-y sm:snap-mandatory scroll-smooth no-scrollbar ">
      <div className="snap-end ">
        <Hero />
      </div>
      <div className="snap-end">
        <About />
      </div>
      <div className="snap-end ">
        <Location />
      </div>
      <div className="snap-end ">
        <Partners />
      </div>
      <div className="snap-end ">
        <Footer />
      </div>
    </motion.section>
  );
};

export default Homepage;
