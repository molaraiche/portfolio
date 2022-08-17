import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const App = () => {
  
  const [upBtn, setUpBtn] = useState("hideBtn");
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <div className="box">
      <NavBar upBtn={upBtn} setUpBtn={setUpBtn} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div>
        <div className="container">
          <div id={upBtn} className="backtotopholder">
            <KeyboardArrowUpIcon onClick={topHandler} className="backtotop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
