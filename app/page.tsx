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
    </section>
  );
};

export default Homepage;
