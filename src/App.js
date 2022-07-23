import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
