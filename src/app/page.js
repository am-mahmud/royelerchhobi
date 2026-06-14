import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SubHero from "./components/sections/SubHero";
import Services from "./components/sections/Services";
import Campaign from "./components/sections/Campaign";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Projects from "./components/sections/Projects";
import Videos from "./components/sections/Videos";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SubHero />
      <Projects />
      <Videos />
      <Services />
      <Campaign />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}