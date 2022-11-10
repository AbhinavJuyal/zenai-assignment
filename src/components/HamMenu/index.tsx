import { useState } from "react";
import Close from "../../assets/Close";
import List from "../../assets/List";
import Filters from "../Filters";
import styles from "./HamMenu.module.scss";

const HamMenu = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className={styles.icon} onTouchStart={() => setShow(true)}>
        <List />
      </div>
      {show && (
        <div className={styles.menu}>
          <div onClick={() => setShow(false)}>
            <Close />
          </div>
          <Filters />
        </div>
      )}
    </>
  );
};

export default HamMenu;
