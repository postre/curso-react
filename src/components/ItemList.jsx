import { NumberHelpers } from "../helpers";
import { ItemListHandler } from "../components";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context";

export const ItemList = ({ product }) => {
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count == 0) {
      handleDeleteFromCart();
      return;
    }
    setAdded(true);
    addToCart(product, count);
  };
  const handleDeleteFromCart = () => {
    setAdded(false);
    deleteFromCart(product.id);
  };

  const addsItem = () => {
    setCount(count + 1);
  };
  const lessItem = () => {
    if (count < 1) return;
    setCount(count - 1);
  };



  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card card-product h-100">
          <img src={product.thumbnail} className="img-fluid product-img" />

          <div className="card-body border-top">
            <small>{product.category}</small>
            <h5 className="card-title">{product.title}</h5>
            {/* <p>{brand}</p> */}
            <div className="text-truncate-container">
              <p className="card-text">{product.description}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
                <h4>{NumberHelpers.moneyFormat(product.price)}</h4>
              </div>
              <div className="col-6">
                <ItemListHandler
                  deleteFromCart={handleDeleteFromCart}
                  addToCart={handleAddToCart}
                  addsItem={addsItem}
                  lessItem={lessItem}
                  count={count}
                  added={added}
                  addButton={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
