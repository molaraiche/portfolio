import "../styles/About.css";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="aboutContent">
          <h1>
            <span className="titleColor">Background</span> info
          </h1>
          <p>
            Self-taught front end developer since Jan 2020, working with react
            JS, HTML & CSS vanilla JavaScript, using a lot of React ecosystems
            such as Redux, router, fetching data from API's and work with teams
            to make nice and fast web apps. I'm targeting to stick with front
            end development and be a talented front end Engineer.
          </p>
          <div className="resumeHolder">
            <a href="https://google.com" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
