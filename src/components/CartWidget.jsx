import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context";
import { useContext } from "react";
import { NumberHelpers } from "../helpers";

export const CartWidget = () => {

  const { cart } = useContext (CartContext)



  return (
    
      
<>
      <div className="dropdown">
        <button type="button" className="btn btn-warning me-2" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <FaCartShopping className="me-3" />
          <span>{cart.items.length}</span>
        </button>
        <div className="" aria-labelledby="dropdownMenuButton1">
          <div className="dropdown-menu text-muted">
              <div className="row p-2">
                <div className="col-6 text-end"><small>Total:</small></div>
                <div className="col-6">{NumberHelpers.moneyFormat(cart.total)}</div>
              </div>
      
              <div className="row border-top mt-2">
                {
                  cart.items.map((item) => <div className="col-12" key={item.id}>
                  {item.title}
                </div>)
                }
                
              </div>

                <div className="row">
                  <div className="col-12">
                    <Link to="/cart">
                      <button className="btn btn-primary">
                          ir al carro
                      </button>
                    </Link>
                  </div>
                </div>
              
          </div>
         
        </div>
      </div>


    </>
  );
};
