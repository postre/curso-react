import { useContext, useEffect, useState } from "react";
import { ItemListHandler } from "../components";
import { CartContext } from "../context";
import { NumberHelpers } from "../helpers";
import { FaCartShopping } from "react-icons/fa6";

export const ItemList = ({ product }) => {
  const { cart, addToCart, deleteFromCart, isInCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(undefined);
  const [count, setCount] = useState(0);


  const handleAddToCart = () => {
    if (count === 0) {
      handleDeleteFromCart();
      return;
    }

    addToCart(product, count);
  };
  const handleDeleteFromCart = () => {
    deleteFromCart(product);
  };

  const incrementItem = () => {
    setCount(count + 1);
  };

  const decrementItem = () => {
    if (count < 1) return;
    setCount(count - 1);
  };

  useEffect(() => {
      const isIncart = isInCart(product.id);
      setInCart(isIncart);
      setCount(isIncart ? isIncart.quantity : 0);
  }, [cart])
  

  return (
    <>
      <div className="col-md-4 mt-4 ">

      
        <div className="card card-product h-100">
          <img src={product.thumbnail} className="img-fluid product-img" />

          <div className="card-body border-top item-list">

                <div className={inCart ? 'added-icon' : 'added-icon-out' } >
                  <FaCartShopping />
                </div>
  
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
                  incrementItem={incrementItem}
                  decrementItem={decrementItem}
                  count={count}
                  added={inCart}
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
