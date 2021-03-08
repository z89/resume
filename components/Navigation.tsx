import Brand from "../public/svgs/brand.svg";
import {
  GitHub,
  Activity,
  Droplet,
  Book,
  Mail,
  Key,
  Move,
  GitBranch,
} from "react-feather";
import { useState } from "react";
import Draggable from "react-draggable";
import Link from "next/link";

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
      iconLink: "/portfolio",
      icon: () => <Book onMouseDown={() => console.log("I'm a book!")} />,
    },
    { iconName: "Activity", iconLink: "/activity", icon: () => <Activity /> },
    { iconName: "Droplet", iconLink: "/#", icon: () => <Droplet /> },
    {
      iconName: "Move",
      iconLink: "/#",
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
      iconName: "GitBranch",
      iconLink: "https://github.com/z89/resume/tree/gh-pages",
      icon: () => <GitBranch />,
    },
    {
      iconName: "GitHub",
      iconLink: "https://github.com/z89/",
      icon: () => <GitHub />,
    },
    {
      iconName: "Mail",
      iconLink: "/contact",
      icon: () => <Mail />,
    },
    {
      iconName: "Key",
      iconLink: "/pgp",
      icon: () => <Key />,
    },
  ];

  const navItems = Object.values(itemsArr).map((item, index) => {
    const Icon = item.icon;
    const iconLink = item.iconLink;
    const iconName = item.iconName;

    return (
      <li key={index} className="nav-item">
        <Link href={iconLink}>
          <a className={move ? "active nav-link" : "nav-link"}>
            <Icon
              onMouseDown={() => {
                console.log("down");
                handleOnClick(iconName);
              }}
              onMouseUp={() => console.log("up")}
            />
          </a>
        </Link>
      </li>
    );
  });

  function jsx() {
    return (
      <nav className="navbar">
        <ul className={move ? "navbar-nav navbar-hover" : "navbar-nav"}>
          <li className="nav-item">
            <Link href="/">
              <a className="brand-link">
                <Brand style={{ width: "100%" }} className="brand" />
              </a>
            </Link>
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
