import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProjectHolder from "./ProjectHolder";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 700,
  width: "80%",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const projectStyle = {
  height: "auto",
  width: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Project = ({
  img,
  project,
  detailOne,
  detailTwo,
  detailThree,
  code,
  live,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div style={projectStyle}>
        <img
          style={{
            width: "100%",
            height: "auto",
            cursor: "pointer",
          }}
          src={img}
          alt="project poster"
          onClick={handleOpen}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <button
              onClick={handleClose}
              style={{
                background: "#73e1ff",
                border: "none",
                padding: "15px",
                cursor: "pointer",
              }}>
              X
            </button>
          </div>
          <Typography
            textAlign={"center"}
            margin={4}
            fontWeight={600}
            id="modal-modal-title"
            variant="h6"
            component="h2">
            {project}
          </Typography>
          <ProjectHolder
            img={img}
            detailOne={detailOne}
            detailTwo={detailTwo}
            detailThree={detailThree}
            code={code}
            live={live}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Project;
