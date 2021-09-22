import "./Projects.scss";
function Projects({ comp }) {
  return (
    <div className={`project ${comp}`}>
      <p className="project__heading">My Projects</p>
      <p style={{ width: "50%" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </p>
      <p className="card__section">
        {[0, 1, 2].map((x) => (
          <div className={`card ${comp}`}>
            <div className="title">Project {x + 1}</div>
            <div className="description">
              If you are going to use a passage of Lorem Ipsum.
            </div>
            <div className="demo__btn">
              <button className={`btn-pill ${comp}`}>View Demo</button>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Projects;
