import "./intro.scss";
import { IoIosArrowDown } from "react-icons/io";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Kattis_git.png" alt="lego" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kattis</h1>
          <h3>
            Freelance<span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <IoIosArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
