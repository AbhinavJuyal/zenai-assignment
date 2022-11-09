import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import styles from "./SuggestionBox.module.scss";

import { products as cards } from "../../products.js";

const SuggestionBox = () => {
  const [popularSuggestions, setPopularSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const suggestions: string[] = new Array(5)
      .fill("")
      .map(() => faker.commerce.productName());
    setPopularSuggestions(suggestions);
  }, []);

  return (
    <div className={styles.suggestions}>
      <div className={styles.trends}>
        <h4>Latest Trends</h4>
        <div className={styles.cards}>
          {cards &&
            cards.slice(0, 4).map((card) => (
              <div className={styles.card}>
                <img src={card.image} alt="product-image" />
                <p className="">{card.title}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.popularSuggestions}>
        <h4>Popular Suggestions</h4>
        <ul className={styles.items}>
          {popularSuggestions &&
            popularSuggestions.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default SuggestionBox;
