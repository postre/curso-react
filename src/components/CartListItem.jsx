import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { NumberHelpers } from "../helpers";
import { ItemListHandler } from "./ItemListHandler";

export const CartListItem = ({ item, index, addToCart, deleteFromCart, addsItem, lessItem}) => {
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

  const handleAddsItem = () => {
    setCount(count + 1);
    addsItem(item);
  };
  const handleLessItem = () => {
    
    if (count-1==0) {
      handleDeleteFromCart(item);
      return;
    }
    setCount(count - 1);
    lessItem(item)
    
  };


  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="text-start">
        <b>{item.title}</b>
        <br />
        <small>
          {item.brand} | {item.category}
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
              addsItem={handleAddsItem}
              lessItem={handleLessItem}
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
