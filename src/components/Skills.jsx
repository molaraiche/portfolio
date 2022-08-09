const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skillscontent">
          <h1>
            I am<span className="titleColor">Skilled</span> at
          </h1>
          <div className="skillsHolder">
            <div className="basics">
              <div className="html">
                <img
                  src={require("../assets/skills/html.svg").default}
                  alt="html"
                />
              </div>
              <div className="css">
                <img
                  src={require("../assets/skills/css.svg").default}
                  alt="css"
                />
              </div>
              <div className="js">
                <img
                  src={require("../assets/skills/javascript.svg").default}
                  alt="javascript"
                />
              </div>
            </div>
            <div className="libraries">
              <div className="react">
                <img
                  src={require("../assets/skills/react.svg").default}
                  alt="react"
                />
              </div>
              <div className="sass">
                <img
                  src={require("../assets/skills/sass.svg").default}
                  alt="sass"
                />
              </div>
              <div className="git">
                <img
                  src={require("../assets/skills/git.svg").default}
                  alt="git"
                />
              </div>
              <div className="redux">
                <img
                  src={require("../assets/skills/redux.svg").default}
                  alt="redux"
                />
              </div>
              <div className="cy">
                <img
                  src={require("../assets/skills/cy.svg").default}
                  alt="cy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
