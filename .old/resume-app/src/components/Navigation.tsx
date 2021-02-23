import { ReactComponent as Brand } from "../assests/svgs/header/brand.svg";
import { GitHub, Activity, Droplet, Send, Book, Mail } from "react-feather";
import { Nav, Navbar } from "react-bootstrap";

const iconWidth = 1.5;

const Navigation = () => {
  return (
    <>
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
                  <Droplet
                    strokeWidth={iconWidth}
                    className="droplet social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/z89">
                  <Activity
                    strokeWidth={iconWidth}
                    className="activity social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/z89">
                  <Send strokeWidth={iconWidth} className="send social-icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/z89">
                  <Book strokeWidth={iconWidth} className="book social-icon" />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-bottom">
            <ul className="options-group">
              <li>
                <a href="https://github.com/z89">
                  <GitHub
                    strokeWidth={iconWidth}
                    className="github option-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/z89">
                  <Mail strokeWidth={iconWidth} className="mail option-icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Navbar id="small-navbar" expand="lg" className="nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ul>
              <li className="menu-half">
                <Navbar.Brand href="#home">
                  <Brand className="brand" />
                </Navbar.Brand>
              </li>

              <li className="menu-half">
                <Nav.Link href="#home">
                  <Droplet
                    strokeWidth={iconWidth}
                    className="github social-icon"
                  />
                </Nav.Link>
              </li>
              <li className="menu-half">
                <Nav.Link href="#link">Link</Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
