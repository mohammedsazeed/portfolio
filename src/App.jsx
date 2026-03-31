import "./styles/components.css";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <>
      <div className="grain" />
      <CursorGlow />
      <ScrollProgress />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <CaseStudy />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
