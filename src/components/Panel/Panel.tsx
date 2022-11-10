import React, { MouseEventHandler, useState } from "react";
import ArrowDown from "../../assets/ArrowDown";
import "./Panel.scss";

interface IPanel {
  children?: React.ReactNode;
  title?: string;
}

const Panel = ({ children, title }: IPanel) => {
  const [show, setShow] = useState<boolean>(false);

  const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
    setShow((prev) => !prev);
  };

  const showContent = {
    height: "auto",
  };

  return (
    <div className={"panel" + " " + (show ? "active" : "")}>
      <div
        className={"panelTitle" + " " + (show ? "" : "active")}
        onClick={handleOnClick}
      >
        <span className="title">{title}</span>
        <span className="arrow">
          <ArrowDown />
        </span>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Panel;
