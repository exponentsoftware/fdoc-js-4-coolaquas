import Header from "../Shared_modules/Header/Header";
import HeroBaner from "../Shared_modules/Hero_Baner/Hero_Baner";
import About from "../Shared_modules/About/About";
import Projects from "../Shared_modules/Projects/Projects";
import Highlight from "../Shared_modules/Highlight/Highlight";
import Skills from "../Shared_modules/Skills/Skills";
import Experience from "../Shared_modules/Experience/Experience";
import Footer from "../Shared_modules/Footer/Footer";
function portfolio2() {
  return (
    <>
      <Header comp="p2" />
      <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <HeroBaner comp="p2" />
        <About comp="p2" />
        <Projects comp="p2" />
        <Highlight comp="p2" />
        <Skills comp="p2" />
        <Experience comp="p2" />
        <Footer comp="p2" />
      </div>
    </>
  );
}

export default portfolio2;
