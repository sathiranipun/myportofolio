import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">

        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>

          <div className="itemContainer">
            <Person/>
            <span>+94 76 051 0056</span>
          </div>
          <div className="itemContainer">
            <Mail/>
            <span>sathiranipun.vsn@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
