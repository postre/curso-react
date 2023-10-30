import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services";
import { ProductAdapter } from "../../adapters";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((products) => {
      setProducts(ProductAdapter.productsAdapted(products));
    });
  }, []);

  return (
    <>
      <div className="container mb-5">
        <h3 className="mt-4">{categoryId}</h3>
        <div className="row cart d-flex align-items-stretch">
          {products.map((product) => (
            <ItemList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};