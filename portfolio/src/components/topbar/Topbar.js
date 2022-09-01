import "./topbar.scss";
import { GoPerson, GoMail } from "react-icons/go";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            kattis.
          </a>
          <div className="itemContainer">
            <GoPerson className="icon" />
            <span>+46 123 456</span>
          </div>
          <div className="itemContainer">
            <GoMail className="icon" />
            <span>kattis@mail.se</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
