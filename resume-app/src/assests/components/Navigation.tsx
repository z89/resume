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
        console.log("move toggle!");
        setMove(!move);
        break;
      case "Droplet":
        console.log("drop!");
        break;
      default:
        console.log("switchin!");
    }
  };

  const itemsArr = [
    {
      iconName: "Book",
      icon: () => <Book onMouseDown={() => console.log("I'm a book!")} />,
    },
    { iconName: "Activity", icon: () => <Activity /> },
    { iconName: "Droplet", icon: () => <Droplet /> },
    {
      iconName: "Move",
      icon: ({
        onMouseDown,
        onMouseUp,

        className,
      }: {
        onMouseDown: () => void;
        onMouseUp: () => void;

        className?: string;
      }) => (
        <Move
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          className={className}
          style={{ width: "auto" }}
        />
      ),
    },
    {
      iconName: "RefreshCw",
      icon: ({ className }: { className?: string }) => (
        <RefreshCw className={className} />
      ),
    },
    { iconName: "GitHub", icon: () => <GitHub /> },
    { iconName: "Mail", icon: () => <Mail /> },
    { iconName: "Key", icon: () => <Key /> },
  ];

  const navItems = Object.values(itemsArr).map((item, index) => {
    const Icon = item.icon;
    const iconName = item.iconName;

    return (
      <li key={index} className="nav-item">
        <div className={move ? "active nav-link" : "nav-link"}>
          <Icon
            onMouseDown={() => {
              console.log("down");
              handleOnClick(iconName);
            }}
            onMouseUp={() => console.log("up")}
          />
        </div>
      </li>
    );
  });

  function jsx() {
    return (
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
    );
  }

  if (move) {
    return (
      <>
        <Draggable allowAnyClick={true} defaultClassNameDragging="dragging">
          {jsx()}
        </Draggable>
      </>
    );
  } else {
    return <>{jsx()}</>;
  }
};

export default Navigation;
