import { ReactComponent as Droplet } from "../assests/svgs/header/droplet.svg";
import { ReactComponent as GitHub } from "../assests/svgs/header/github.svg";
import { ReactComponent as Brand } from "../assests/svgs/header/brand.svg";

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
                <li className="social">
                  <a href="https://github.com/z89">
                    <GitHub style={{height: "25%"}} className="social-icon" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-bottom">
              <ul className="social-group">
                <li className="social">
                  <a href="#first">
                    <Droplet style={{height: "50%"}}className="social-icon" />
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
