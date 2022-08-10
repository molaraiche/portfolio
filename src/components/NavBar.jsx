import { useState } from "react";
import "../styles/NavBar.css";
const NavBar = () => {
  const [nav, setNav] = useState("close");
  const [colorChanger, setColorChanger] = useState("nothing");
  const navHandler = () => setNav(nav === "close" ? "open" : "close");

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChanger("colorize");
    } else {
      setColorChanger("nothing");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <section id={colorChanger} className="head">
      <div className="container">
        <header>
          <a href="#home">
            <h1>molaraiche</h1>
          </a>
          <ul id={nav} className="list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="burger" onClick={navHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="closeMenu">
            <i className="fa-solid fa-x"></i>
          </div>
        </header>
      </div>
    </section>
  );
};

export default NavBar;
