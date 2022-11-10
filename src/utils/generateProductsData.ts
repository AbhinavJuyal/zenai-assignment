import { faker } from "@faker-js/faker";
import images, { imgLimit } from "../assets/products";

const randomize = (limit = 100) => Math.random() * limit;

const randomBrand = () => (randomize() >= 50 ? "H&M" : "Mango");

const randomCount = () => Math.floor(randomize()) + randomize();

const randomRate = () => Math.floor(randomize(5));

const randomImg = () => images[Math.floor(randomize(imgLimit))];

export const genProductsData = (count: number = 20) =>
  new Array(count).fill(0).map((_, id) => {
    const actualPrice = Number(faker.commerce.price());
    const listPrice = Number(actualPrice) * 0.75;
    return {
      id: id + 1,
      title: faker.commerce.productName(),
      actualPrice,
      listPrice,
      category: faker.commerce.department(),
      shortName: faker.commerce.product,
      brand: randomBrand(),
      image: randomImg(),
      rating: {
        rate: randomRate(),
        count: randomCount(),
      },
    };
  });
