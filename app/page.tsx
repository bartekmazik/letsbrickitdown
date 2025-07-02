import Hero from "./components/homepage/hero";

import About from "./components/homepage/about";
import Location from "./components/homepage/location";
import Partners from "./components/homepage/partners";
import Footer from "./components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strona główna",
};

const Homepage = () => {
  return (
    <section>
      <Hero />
      <About />
      <Location />
      <Partners />
      <Footer />
    </section>
  );
};

export default Homepage;
