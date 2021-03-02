import { ReactComponent as Brand } from "../svgs/header/brand.svg";
import { GitHub, Activity, Droplet, Send, Mail } from "react-feather";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/#" className="nav-link">
              <Brand />
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              <Droplet />
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              <Activity />
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              <Send />
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              <Mail />
            </a>
          </li>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              <GitHub />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
