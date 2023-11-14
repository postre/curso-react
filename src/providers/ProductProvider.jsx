import { useEffect, useState } from "react";
import { ProductAdapter } from "../adapters";
import { ProductContext } from "../context";
import { getProducts } from "../services";

export const ProductProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState('');
  const [products, setProducts] = useState([]);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });


  useEffect(() => {
    setFadeProp({ fade: "fade-in" });
    getProducts(categoryId).then((products) => {
      setProducts(ProductAdapter.productsAdapted(products));
      setFadeProp({ fade: "fade-out" });
    });
  }, [categoryId]);

  return <ProductContext.Provider value={{ products, setCategoryId, fadeProp, setFadeProp }} >{children}</ProductContext.Provider>;
};
