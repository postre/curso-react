import { FaCartShopping, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context";
import { useContext } from "react";
import { NumberHelpers } from "../helpers";

export const CartWidget = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-warning me-2"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-haspopup="true" 
          aria-expanded="false"
        >
          <FaCartShopping className="me-3" />
          <span>{cart.items.length}</span>
        </button>

        <div
          aria-labelledby="dropdownMenuButton1"
          className="dropdown-menu p-0 cart-dropdown"
          style={{ width: "400px" }}
        >
          <ul className="list-group row" role="menu">
            
            {cart.items.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="row">
                  <div className="col-10">
                    <b>{item.title}</b>
                    <br />
                    {item.price}
                  </div>
                  <div className="col-2 text-end">
                    <button className="btn btn-sm btn-danger">
                      <FaTrash onClick={() => deleteFromCart(item)} />
                    </button>
                  </div>
                </div>
              </li>
            ))}

            <li className="list-group-item">
              <div className="row">

                <div className="col-6 text-end"></div>
                <div className="col-6 text-end">
                  <b className="me-2">Subtotal:</b> {NumberHelpers.moneyFormat(cart.subtotal)}
                  <br />
                  <b className="me-2">IVA <small>({NumberHelpers.percentageFormat(cart.taxesPercentage)})</small>:</b> 
                  {NumberHelpers.moneyFormat(cart.taxes)}
                  <br />
                  <b className="me-2">Envio:</b> {NumberHelpers.moneyFormat(cart.shippingCost)}
                  <hr />
                  <h5>{NumberHelpers.moneyFormat(cart.total)}</h5>
                </div>

              </div>
            </li>
            <li className="list-group-item">
              <Link to="/cart">
                <button className="btn btn-primary w-100">ir al carro</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
