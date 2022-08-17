import "../styles/Skills.min.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skillscontent">
          <h1>
            I am<span className="titleColor">Skilled</span> at
          </h1>
          <div className="skillsHolder">
            <img
              src={require("../assets/skills/html.svg").default}
              alt="html"
            />

            <img src={require("../assets/skills/css.svg").default} alt="css" />

            <img
              src={require("../assets/skills/javascript.svg").default}
              alt="javascript"
            />

            <img
              src={require("../assets/skills/react.svg").default}
              alt="react"
            />

            <img
              src={require("../assets/skills/sass.svg").default}
              alt="sass"
            />

            <img src={require("../assets/skills/git.svg").default} alt="git" />

            <img
              src={require("../assets/skills/redux.svg").default}
              alt="redux"
            />
            <img
              src={require("../assets/skills/cy.svg").default}
              alt="cypress"
            />
            <img
              src={require("../assets/skills/firebase.svg").default}
              alt="firebase"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
