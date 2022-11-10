import React, { useState, useContext, createContext, useEffect } from "react";
import { genProductsData } from "../utils/generateProductsData";

interface IGlobalContext {
  products: IProduct[];
}

interface Props {
  children: React.ReactNode;
}

const defGlobalState: IGlobalContext = {
  products: genProductsData(),
};

const GlobalContext = createContext<IGlobalContext>(defGlobalState);

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const value: IGlobalContext = { ...defGlobalState };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalCtx = () => useContext(GlobalContext);
