import React, { useState, useContext, createContext, useEffect } from "react";
import { products } from "../products";
import useIsFirstRender from "../utils/useIsFirstRender";

interface IResultContext {
  filter: IFilter;
  wrapSetFilter: (obj: any) => void;
  productData: IProduct[];
}

const ResultContext = createContext<IResultContext | null>(null);

interface Props {
  children: React.ReactNode;
}

interface IMinMax {
  min: number;
  max: number;
}

interface IFilter {
  brand: string[];
  range: IMinMax[];
  ratings: number[];
}

type IFilterKeys = keyof IFilter;

type IFilterValue = string | number | IMinMax;

const defFilterState: IFilter = {
  brand: [],
  range: [],
  ratings: [],
};

const isFilterKey = (key: string, filter: IFilter): key is IFilterKeys =>
  Object.keys(filter).includes(key);

export const ResultProvider: React.FC<Props> = ({ children }) => {
  const [filter, setFilter] = useState<IFilter>(defFilterState);
  const [productData, setProductData] = useState<IProduct[]>(products);
  const [search, setSearch] = useState<string>("");
  const isFirstRender = useIsFirstRender();

  const generateResult = () => {
    const filterProduct = (product: IProduct) => {
      const validFilter = {
        brand: false,
        range: false,
        ratings: false,
      };

      Object.entries(filter).forEach(([key, value], idx) => {
        if (!isFilterKey(key, filter)) return;

        // for brand
        let cond: (val: any) => boolean = (val) =>
          product.brand.toString().toLowerCase() ===
          val.toString().toLowerCase();

        if (key === "ratings") {
          cond = (val) => product.rating.rate.toString() === val.toString();
        }

        if (key === "range") {
          cond = (minmax: IMinMax) =>
            minmax.min <= product.listPrice && product.listPrice <= minmax.max;
        }

        if (value.length === 0) {
          validFilter[key] = true;
          return;
        }

        value.forEach((val: IFilterValue) => (validFilter[key] = cond(val)));
      });

      return Object.values(validFilter).reduce((prev, curr) => prev && curr);
    };

    const result = products.filter(filterProduct);
    // console.log("jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    console.log(result);
    return result;
  };

  useEffect(() => {
    if (isFirstRender) return;
    setProductData(() => generateResult());
  }, [filter]);

  const wrapSetFilter = (obj: HTMLInputElement) => {
    const { name, value, checked } = obj;
    if (!isFilterKey(name, filter)) return;
    let newVal: IFilterValue = value;
    let callback: (val: any) => boolean = (val) => val !== newVal;

    if (name === "range") {
      const start = value.split(" ")[0].toLowerCase();
      const end = value.split(" ").slice(-1)[0].toLowerCase();
      const min = start === "under" ? 0 : Number(start);
      const max = Number(end);
      newVal = { min, max };
      callback = (minmax: IMinMax) =>
        !(min === minmax.min && max === minmax.max);
    }

    const getUpdVal = (prev: IFilter) =>
      checked ? [...prev[name], newVal] : [...prev[name]].filter(callback);

    setFilter((prev: IFilter) => ({
      ...prev,
      [name]: getUpdVal(prev),
    }));
  };

  const value: IResultContext = {
    filter,
    wrapSetFilter,
    productData,
  };
  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

export const useResultCtx = () => useContext(ResultContext);
