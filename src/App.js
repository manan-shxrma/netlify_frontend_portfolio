
import Navbar from "./navbar"
import Topsec from "./topsec"
import About from "./aboutme"
import Skills from "./skills";
import Education from "./education"
import Contact from "./contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Topsec />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
