import "./Experience.scss";
function Experience() {
  return (
    <div className="experience">
      <p className="title">My Experience</p>
      <p className="description">
        <div className="left__sec">
          {[0, 1, 2, 3].map((x) => (
            <p>
              {" "}
              Lorem Ipsum there are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour
            </p>
          ))}
        </div>
        <div className="right__sec">
          {[0, 1, 2, 3].map((x) => (
            <p>
              {" "}
              Lorem Ipsum there are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour
            </p>
          ))}
        </div>
      </p>
    </div>
  );
}

export default Experience;
