import { Hero } from "../../components/Hero";
import SpaceBackground from "../../components/SpaceBackground";
import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { Footer } from "../../components/Footer";
export function Home(){
  return (
    <div className="relative min-h-screen max-w-screen w-full">
        <SpaceBackground/>
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}