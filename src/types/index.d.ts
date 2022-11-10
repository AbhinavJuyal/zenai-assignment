interface IProduct {
  id: number;
  title: string;
  actualPrice: number;
  listPrice: number;
  image: string;
  rating: { rate: number; count: number };
  brand: string;
}

interface IProductCard {
  product: IProduct;
}
