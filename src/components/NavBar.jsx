import { useState } from "react";
import "../styles/NavBar.css";
const NavBar = () => {
  const [burger, setBurger] = useState("");
  const burgerStyle = {
    transform: "translateX(0%)",
  };
  const burgerHandler = () => setBurger(burger === "" ? burgerStyle : "");
  return (
    <section className="head">
      <div className="container">
        <header>
          <a href="#home">
            <h1>molaraiche</h1>
          </a>
          <ul style={{ burger }} className="list">
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

          <div className="burger" onClick={burgerHandler}>
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
