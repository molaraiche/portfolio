const ProjectHolder = ({
  img,
  detailOne,
  detailTwo,
  detailThree,
  code,
  live,
}) => {
  return (
    <>
      <img
        src={img}
        style={{
          width: "100%",
          height: "auto",
          cursor: "pointer",
        }}
        alt="Crud App"
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ textAlign: "left", fontWeight: 600 }}>
          Technologies used :
        </span>
        <ul style={{ margin: "5px" }}>
          <li style={{ margin: "10px", listStyle: "circle" }}> {detailOne} </li>
          <li style={{ margin: "10px", listStyle: "circle" }}> {detailTwo}</li>
          <li style={{ margin: "10px", listStyle: "circle" }}>{detailThree}</li>
        </ul>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              background: "#73e1ff",
              color: "#222",
              margin: "0 10px",
              padding: "10px 20px",
              fontSize: "14px",
            }}
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
          <a
            style={{
              textDecoration: "none",
              background: "#73e1ff",
              color: "#222",
              margin: "0 10px",
              padding: "10px 20px",
              fontSize: "14px",
            }}
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectHolder;
