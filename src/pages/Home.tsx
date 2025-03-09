// src/Home.tsx
import Hero from "../components/Hero";
import MarqueePromo from "../components/MarqueePromo";
import About from "../components/About";
// import Services from "../components/Services";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueePromo />
      <About />
      {/* <Services /> */}
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
