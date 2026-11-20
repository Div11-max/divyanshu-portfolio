import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Publications from "./components/Publications";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;