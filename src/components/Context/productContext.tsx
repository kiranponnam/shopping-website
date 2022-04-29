import React, { createContext, FC, useEffect, useState } from "react";
import faker from "faker";
import axios from "axios";

export const ProductListContext = createContext<any>("");
export const CartListContext = createContext<any>("");
export const GlobalLoaderContext = createContext<any>("");

export const getSessionData = () => {
  let session = sessionStorage.getItem("userData");
  if (session) {
    try {
      const data = JSON.parse(atob(session));
      return data;
    } catch (e: any) {
      return;
    }
  }
  return;
};

export const ProductListProvider: FC<any> = (props: any) => {
  // const ProductList = [...Array(50)].map(() => ({
  //   id: faker.random.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  // }));
  const [productList, setProductList] = useState<any>([]);
  const [cartList, setCartList] = useState<any>([]);
  const [isLoading, setGlobalLoading] = useState<boolean>(false);

  useEffect(() => {
    setGlobalLoading(true);
    axios
      .get("https://626045a592df0bc0f34244de.mockapi.io/api/v1/products")
      .then((response: any) => {
        if (response?.data) {
          setProductList(response?.data);
          setGlobalLoading(false);
        }
      });
  }, []);

  return (
    <React.Fragment>
      <ProductListContext.Provider value={[productList, setProductList]}>
        <CartListContext.Provider value={[cartList, setCartList]}>
          <GlobalLoaderContext.Provider value={[isLoading, setGlobalLoading]}>
              {props?.children}
          </GlobalLoaderContext.Provider>
        </CartListContext.Provider>
      </ProductListContext.Provider>
    </React.Fragment>
  );
};
