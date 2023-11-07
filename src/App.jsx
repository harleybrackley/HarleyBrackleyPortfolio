import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <footer>Contact</footer>
    </>
  );
}

export default App;
