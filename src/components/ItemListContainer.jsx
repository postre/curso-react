import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context";
import { StringHelpers } from "../helpers";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();
  const { products, setCategoryId } = useContext(ProductContext);
  useEffect(() => {
    setCategoryId(categoryId);
  }, [categoryId]);



  return (
    <>
      

      <div className="container mb-5">
        <h3 className="mt-4">{categoryId ? StringHelpers.title(categoryId) : "Todos los productos"}</h3>
        <div className="row cart d-flex align-items-stretch">
          {products.map((product) => (
            <ItemList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
