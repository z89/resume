import { ReactComponent as Brand } from "../svgs/header/brand.svg";
import {
  GitHub,
  Activity,
  Droplet,
  Book,
  Mail,
  Key,
  Move,
  RefreshCw,
} from "react-feather";
import { useState } from "react";
import Draggable from "react-draggable";

const Navigation = () => {
  const [move, setMove] = useState(false);

  const handleOnClick = (icon: string) => {
    switch (icon) {
      case "Move":
        setMove(!move);
        break;
      case "Droplet":
        console.log("drop!");
        break;
      default:
        console.log("switchin!");
    }
  };

  const navItemsArr = [
    { iconName: "Book", icon: () => <Book /> },
    { iconName: "Activity", icon: () => <Activity /> },
    { iconName: "Droplet", icon: () => <Droplet /> },
    { iconName: "Move", icon: () => <Move /> },
    { iconName: "RefreshCw", icon: () => <RefreshCw /> },
    { iconName: "GitHub", icon: () => <GitHub /> },
    { iconName: "Mail", icon: () => <Mail /> },
    { iconName: "Key", icon: () => <Key /> },
  ];

  const navItems = Object.values(navItemsArr).map((item, index) => {
    const Icon = item.icon;
    const iconName = item.iconName;

    return (
      <li className="nav-item">
        <div
          onClick={() => {
            handleOnClick(iconName);
          }}
          className={move ? "active nav-link" : "nav-link"}
        >
          <Icon key={index} />
        </div>
      </li>
    );
  });

  if (move) {
    return (
      <>
        <Draggable defaultClassNameDragging="dragging">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/#" className="brand-link">
                  <Brand className="brand" />
                </a>
              </li>
              {navItems}
            </ul>
          </nav>
        </Draggable>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/#" className="brand-link">
                <Brand className="brand" />
              </a>
            </li>
            {navItems}
          </ul>
        </nav>
      </>
    );
  }
};

export default Navigation;
