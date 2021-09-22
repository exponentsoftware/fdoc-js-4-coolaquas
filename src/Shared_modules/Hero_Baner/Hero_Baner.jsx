import "./Hero_Baner.scss";
function Hero_Baner({ comp }) {
  return (
    <div className={`Hero_Baner ${comp}`}>
      <div>
        {comp === "p1" && <h5>I am Designer.</h5>}
        <h1>Lorem Ipsum</h1>
      </div>
    </div>
  );
}

export default Hero_Baner;
