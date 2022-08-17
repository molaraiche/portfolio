import "../styles/Home.min.css";
const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div>
          <h2>Hey, I am Mohamed,</h2>
          <p>passionate</p>
          <h1>Frontend Developer.</h1>
        </div>
        <div className="hireme">
          <a href="#contact" rel="noreferrer">
            Hire me
          </a>
          <a href="#projects" rel="noreferrer">
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
