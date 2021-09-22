import Header from "../Shared_modules/Header/Header";
import HeroBaner from "../Shared_modules/Hero_Baner/Hero_Baner";
import About from "../Shared_modules/About/About";
import Projects from "../Shared_modules/Projects/Projects";
import Highlight from "../Shared_modules/Highlight/Highlight";
import Skills from "../Shared_modules/Skills/Skills";
import Experience from "../Shared_modules/Experience/Experience";
import Footer from "../Shared_modules/Footer/Footer";
function portfolio1() {
  return (
    <>
      <Header comp="p1" />
      <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <HeroBaner comp="p1" />
        <About comp="p1" />
        <Projects comp="p1" />
        <Highlight comp="p1" />
        <Skills comp="p1" />
        <Experience comp="p1" />
        <Footer comp="p1" />
      </div>
    </>
  );
}

export default portfolio1;
