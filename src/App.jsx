import "./App.css";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";
import "./Components/Header.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("intro");

  function handleSectionChange(section) {
    console.log(section);
    setSelectedSection(section);
  }

  return (
    <>
      {/* <Header /> */}
      <section className="header-wrapper">
        <h1 className="HB">HB</h1>
        <ul className="nav-bar">
          <li
            className="nav-bar-links"
            onClick={() => handleSectionChange("intro")}
          >
            Intro
          </li>
          <li
            className="nav-bar-links"
            onClick={() => handleSectionChange("projects")}
          >
            Projects
          </li>
          <li
            className="nav-bar-links"
            onClick={() => handleSectionChange("skills")}
          >
            Skills
          </li>
          <li
            className="nav-bar-links"
            onClick={() => handleSectionChange("contact")}
          >
            Contact
          </li>
        </ul>
      </section>
      {selectedSection === "intro" && <Intro />}
      {selectedSection === "projects" && <Projects />}
      {selectedSection === "skills" && <Skills />}
      {selectedSection === "contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;

// Hover button icons
