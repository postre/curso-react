import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { NumberHelpers } from "../helpers";
import { ItemListHandler } from "./ItemListHandler";

export const CartListItem = ({ item, index, addToCart, deleteFromCart, incrementItem, decrementItem}) => {
  const [count, setCount] = useState(item.quantity);

  const handleAddToCart = (item) => {
    if (count == 0) {
      handleDeleteFromCart(item);
      return;
    }
    addToCart(item, count);
  };
  const handleDeleteFromCart = () => {
    deleteFromCart(item);
  };

  const handleIncrementItem = () => {
    setCount(count + 1);
    incrementItem(item);
  };
  const handleDecrementItem = () => {
    
    if (count-1==0) {
      handleDeleteFromCart(item);
      return;
    }
    setCount(count - 1);
    decrementItem(item)
    
  };


  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="text-start">
        <b>{item.title}</b>
        <br />
        <small>
          {item.brand} | {item.category}<br />
        </small>
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.price)}</td>
      <td className="text-center" align="center">
        <div className="row">
          <div className="col-6 offset-3">
            <ItemListHandler
              className=""
              deleteFromCart={handleDeleteFromCart}
              addToCart={null}
              incrementItem={handleIncrementItem}
              decrementItem={handleDecrementItem}
              count={count}
              added={false}
              addButton={false}
            />
          </div>
        </div>
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.price * count)}</td>
      <td className="text-center">
        <button className="btn btn-danger btn-sm">
          <FaTrash onClick={handleDeleteFromCart} />
      
        </button>
      </td>
    </tr>
  );
};
