import { useState, useEffect } from "react";
import "./Header.scss";
function Header({ comp }) {
  const [isHeaderChange, setisHeaderChange] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  const listenScrollEvent = () => {
    window.scrollY > 477 ? setisHeaderChange(true) : setisHeaderChange(false);
  };
  return (
    <div className={`HeaderContainer ${comp} ${isHeaderChange && "scrolled"}`}>
      <div className="logo">Lorem</div>
      <div className="header__right">
        <div className="">
          <ul>
            <li>About</li>
            <li>Project</li>
            <li>Skills</li>
            <li>Experience</li>
          </ul>
        </div>
        <div className="">
          <button className={`btn-pill ${comp}`}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
