import "./Skills.scss";
function Skills({ comp }) {
  return (
    <div className="skill">
      <p className="title">My Skills</p>
      <p className="subtitle">
        Lorem Ipsum there are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in some form, by
        injected humour
      </p>
      <p className="progress__container">
        {[0, 1, 2, 3].map((x) => {
          let perc = Math.floor(Math.random() * 100);
          return (
            <div className="single__progress">
              <div className="label">
                <div className="title">Test Title</div>
                <div className="percent">{perc}%</div>
              </div>
              <div className="progressbar">
                <progress className={`${comp}`} value={`${perc}`} max="100" />
              </div>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Skills;
