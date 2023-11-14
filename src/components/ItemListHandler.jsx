import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";

export const ItemListHandler = ({ deleteFromCart, addToCart, incrementItem, decrementItem, count, added, addButton }) => {
  return (
    <>
      <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
        <button className="btn btn-default btn-sm border" onClick={decrementItem}>
          <FaMinus />
        </button>
        <button className="btn btn-default btn-sm border" style={{width: '40px'}}>{count}</button>
        <button className="btn btn-default btn-sm border" onClick={incrementItem}>
          <FaPlus />
        </button>
      </div>
      {addButton ? (
        <button className={`btn btn-${added ? "success" : "secondary"} w-100 mt-1 btn-sm`} onClick={addToCart}>
          <FaCartShopping /> <small>{added ? "Actualizar" : "Agregar"}</small>
        </button>
      ) : (
        ""
      )}
    </>
  );
};
