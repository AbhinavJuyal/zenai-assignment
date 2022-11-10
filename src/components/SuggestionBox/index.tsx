import { MouseEventHandler, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

import styles from "./SuggestionBox.module.scss";
import { useGlobalCtx } from "../../context/GlobalContext";

interface ISuggestionBox {
  removeBox: () => void;
}

const SuggestionBox = ({ removeBox }: ISuggestionBox) => {
  const { products } = useGlobalCtx();

  return (
    <>
      <div className={styles.overlay} onClick={() => removeBox()}></div>
      <div className={styles.suggestions}>
        <div className={styles.trends}>
          <h4>Latest Trends</h4>
          <div className={styles.cards}>
            {products &&
              products.slice(0, 4).map((card, idx) => (
                <Link key={idx} to={`/search?value=${card.title}`}>
                  <div className={styles.card}>
                    <img src={card.image} alt="product-image" />
                    <p>{card.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.popularSuggestions}>
          <h4>Popular Suggestions</h4>
          <ul className={styles.items}>
            {products &&
              products.slice(4, 10).map((item, idx) => (
                <li key={idx}>
                  <Link to={`/search?value=${item.title}`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SuggestionBox;
