import Ambient from "./components/Ambient";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  // Watches every .reveal / .reveal-stagger element once, on mount.
  useReveal();

  return (
    <>
      <Ambient />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
