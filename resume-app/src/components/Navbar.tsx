import { ReactComponent as Brand } from "../assests/svgs/header/brand.svg";
import { GitHub, AtSign, Droplet } from "react-feather";

const iconWidth = 1.5;

const Navbar = () => {
  return (
    <>
      <div id="header">
        <div id="navbar">
          <ul>
            <li className="nav-top">
              <a href="index.html">
                <Brand className="brand" />
              </a>
            </li>
            <li className="nav-middle">
              <ul className="social-group">
                <li>
                  <a href="https://github.com/z89">
                    <GitHub
                      strokeWidth={iconWidth}
                      style={{ top: "39%" }}
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/z89">
                    <AtSign
                      strokeWidth={iconWidth}
                      style={{ top: "61%" }}
                      className="social-icon"
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-bottom">
              <ul className="options-group">
                <li>
                  <a href="#first">
                    <Droplet
                      strokeWidth={iconWidth}
                      style={{ height: "60%" }}
                      className="option-icon"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
