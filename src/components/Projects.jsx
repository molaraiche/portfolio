import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../styles/Projects.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  padding: "10px",
  alignItem: "center",
  flexDirection: "column",
  justifyContent: "center",
};
const Projects = () => {
  const [openProjectOne, setOpenProjectOne] = useState(false);
  const [openProjectTwo, setOpenProjectTwo] = useState(false);
  const [openProjectThree, setOpenProjectThree] = useState(false);
  const handleOpenOne = () => setOpenProjectOne(true);
  const handleCloseOne = () => setOpenProjectOne(false);
  const handleOpenTwo = () => setOpenProjectTwo(true);
  const handleCloseTwo = () => setOpenProjectTwo(false);
  const handleOpenThree = () => setOpenProjectThree(true);
  const handleCloseThree = () => setOpenProjectThree(false);
  return (
    <section id="projects">
      <div className="container">
        <div className="projectsContent">
          <h1>
            My<span className="titleColor">Work</span>
          </h1>
          <div className="prjcts">
            <div className="projectsHolder">
              <div className="partOne">
                <div className="r" onClick={handleOpenOne}></div>
                <div className="l" onClick={handleOpenThree}></div>
              </div>
              <div className="partTwo" onClick={handleOpenTwo}></div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openProjectOne}
        onClose={handleCloseOne}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="https://via.placeholder.com/600X400" alt="" />
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
          <div className="details">
            <a href="."> code</a>
            <a href="."> Live Preview</a>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openProjectTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="https://via.placeholder.com/600X400" alt="" />
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
          <div className="details">
            <a href="."> code</a>
            <a href="."> Live Preview</a>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openProjectThree}
        onClose={handleCloseThree}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src="https://via.placeholder.com/600X400" alt="" />
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
          <div className="details">
            <a href="."> code</a>
            <a href="."> Live Preview</a>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Projects;
