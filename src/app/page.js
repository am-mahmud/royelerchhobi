import Navbar from "./components/sections/Navbar";
import SubHero from "./components/sections/SubHero";
import Services from "./components/sections/Services";
import Campaign from "./components/sections/Campaign";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Projects from "./components/sections/Projects";
import Videos from "./components/sections/Videos";
import Contact from "./components/sections/Contact";
import Galary from "./components/sections/Galary";
import Brands from "./components/sections/Brands";
import VideoHero from "./components/sections/VideoHero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <VideoHero />
      <SubHero />
      <Galary />
      <Projects />
      <Brands />
      {/* <Videos /> */}
      <Services />
      <Campaign />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}