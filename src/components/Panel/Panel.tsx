import React, { MouseEventHandler, useState } from "react";
import ArrowDown from "../../assets/ArrowDown";
import styles from "./Panel.module.scss";

interface IPanel {
  children?: React.ReactNode;
  title?: string;
}

const Panel = ({ children, title }: IPanel) => {
  const [show, setShow] = useState<boolean>(true);

  const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
    setShow((prev) => !prev);
  };

  const showContent = {
    height: "auto",
  };

  return (
    <>
      <div className={styles.panelTitle} onClick={handleOnClick}>
        <span>{title}</span>
        <span>
          <ArrowDown />
        </span>
      </div>
      <div className="content">{children}</div>
    </>
  );
};

export default Panel;
