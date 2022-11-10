import styles from "./SearchResult.module.scss";
import { products } from "../../products";
import { useState } from "react";
import Heart from "../../assets/Heart";

interface IProduct {
  id: number;
  title: string;
  actualPrice: number;
  listPrice: number;
  image: string;
  rating: { rate: number; count: number };
}

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const [filled, setFilled] = useState<boolean>(true);

  return (
    <div className={styles.product}>
      <div className={styles.wish} onClick={() => setFilled((prev) => !prev)}>
        <Heart filled={filled} />
      </div>
      <img src={product.image} alt={product.title} />
      <div className={styles.productInfo}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.prices}>
          <span className={styles.actualPrice}>Rs. {product.actualPrice}</span>
          <span className={styles.listPrice}>Rs. {product.listPrice}</span>
        </div>
        <div className={styles.rating}>
          <span className=""></span>
          <span>({product?.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const [data, setData] = useState<any>(products);

  return (
    <div className={styles.searchResult}>
      {data && data.map((product: any) => <ProductCard product={product} />)}
    </div>
  );
};

export default SearchResult;
