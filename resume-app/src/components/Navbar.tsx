import { ReactComponent as Droplet } from "../assests/svgs/header/droplet.svg";
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
              <ul className="line-group">
                <li className="line">
                  <a href="/s">
                    <div style={{ width: "100%", height: "100%" }} />
                  </a>
                </li>
                <li className="line">
                  <a href="/s">
                    <div style={{ width: "100%", height: "100%" }} />
                  </a>
                </li>
                <li className="line">
                  <a href="#first">
                    <div style={{ width: "100%", height: "100%" }} />
                  </a>
                </li>
                <li className="line">
                  <a href="#second">
                    <div style={{ width: "100%", height: "100%" }} />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-bottom">
              <ul className="social-group">
                <li className="social">
                  <a href="#first">
                    <Droplet className="social-icon" />
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
