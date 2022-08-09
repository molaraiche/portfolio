const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="projectsContent">
          <h1>
            My<span className="titleColor">Work</span>
          </h1>
          <div className="prjcts">
            <a
              href="./pages/projects.html"
              target="_blank"
              rel="noreferrer"
              className="seeAll"
            >
              see all
            </a>
            <div className="projectsHolder">
              <div className="partOne">
                <div className="r">
                  <label htmlFor="">
                    <a href="https://google.com" rel="noreferrer">
                      more details
                    </a>
                  </label>
                </div>
                <div className="l">
                  <label htmlFor="">
                    <a href="https://google.com" rel="noreferrer">
                      more details
                    </a>
                  </label>
                </div>
              </div>
              <div className="partTwo">
                <label htmlFor="">
                  <a href="https://google.com" rel="noreferrer">
                    more details
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
