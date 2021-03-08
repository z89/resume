import Brand from "../public/svgs/brand.svg";
import {
  Book,
  Activity,
  Droplet,
  Move,
  GitBranch,
  GitHub,
  Mail,
  Key,
} from "react-feather";
import { useState } from "react";
import Draggable from "react-draggable";
import Link from "next/link";
import useWindowDimensions from "./windowDimensions";

const Navigation = () => {
  const [move, setMove] = useState(false);
  const { width } = useWindowDimensions();

  const menuItems = [
    {
      iconName: "Book",
      iconLink: "/portfolio",
      icon: ({
        onMouseDown,
        onMouseUp,
      }: {
        onMouseDown: () => void;
        onMouseUp: () => void;
      }) => <Book onMouseDown={onMouseDown} onMouseUp={onMouseUp} />,
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

  const handleOnClick = (icon: string) => {
    switch (icon) {
      case "Move":
        setMove(!move);
        break;
      case "Book":
        console.log("you clicked a book!");
        break;
      default:
        console.log("nothing detected!");
    }
  };

  const generateItems = Object.values(menuItems).map((item, index) => {
    const Icon = item.icon;
    const iconLink = item.iconLink;
    const iconName = item.iconName;

    return (
      <li key={index} className="nav-item">
        <Link href={iconLink}>
          <a className={move ? "active nav-link" : "nav-link"}>
            <Icon
              onMouseDown={() => {
                handleOnClick(iconName);
              }}
              onMouseUp={() => console.log("button press finished!")}
            />
          </a>
        </Link>
      </li>
    );
  });

  function tsx() {
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
          {generateItems}
        </ul>
      </nav>
    );
  }

  if (move && width > 1000) {
    return (
      <>
        <Draggable allowAnyClick={true} defaultClassNameDragging="dragging">
          {tsx()}
        </Draggable>
      </>
    );
  } else {
    return <>{tsx()}</>;
  }
};

export default Navigation;
