import styles from "./SearchResult.module.scss";
import { useState } from "react";
import Heart from "../../assets/Heart";
import { useResultCtx } from "../../context/ResultContext";
import ReactStars from "react-stars";

const ProductCard = ({ product }: IProductCard) => {
  const [filled, setFilled] = useState<boolean>(false);

  return (
    <div className={styles.product}>
      <div className={styles.wish} onClick={() => setFilled((prev) => !prev)}>
        <Heart filled={filled} />
      </div>
      <div className={styles.imgCover}>
        <img src={product.image} alt={product.title} />
        <button type="button" className={styles.viewProduct}>
          View Product
        </button>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.prices}>
          <span className={styles.actualPrice}>Rs. {product.actualPrice}</span>
          <span className={styles.listPrice}>Rs. {product.listPrice}</span>
        </div>
        <div className={styles.rating}>
          <span>
            <ReactStars
              count={5}
              value={product.rating.rate}
              edit={false}
              half={false}
              size={16}
              color2={"#ffd700"}
            />
          </span>
          <span>({product?.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const resultCtx = useResultCtx();

  return (
    <div className={styles.searchResult}>
      {resultCtx?.productData &&
        resultCtx?.productData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default SearchResult;
