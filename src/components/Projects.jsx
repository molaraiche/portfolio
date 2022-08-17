import { useEffect, useState } from "react";
import "../styles/Projects.css";
import Project from "./Project";

const Projects = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <section id="projects">
      <div className="container">
        <div className="projectsContent">
          <h1>
            My<span className="titleColor">Work</span>
          </h1>
          <div className="prjcts">
            <div className="projectsHolder">
              {datas.map((data) => (
                <Project
                  key={data.id}
                  img={data.poster}
                  project={data.project}
                  detailOne={data.Details.detailOne}
                  detailTwo={data.Details.detailTwo}
                  detailThree={data.Details.detailThree}
                  code={data.code}
                  live={data.live}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
