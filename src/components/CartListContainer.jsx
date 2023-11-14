import { useContext } from "react";
import { CartContext } from "../context";
import { CartListItem } from "./CartListItem";
import { NumberHelpers } from "../helpers";


export const CartListContainer = () => {
  const {cart, addToCart, deleteFromCart, incrementItem, decrementItem } = useContext(CartContext);

  return (
    <>
      <h3 className="mt-4">Lista de Compras</h3>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-start">Producto</th>
            <th scope="col" className="text-end">Precio</th>
            <th scope="col" className="text-center">Cantidad</th>
            <th scope="col" className="text-end" style={{width: '150px'}}>Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => (
            <CartListItem 
                key={item.id} 
                index={index} 
                item={item} 
                addToCart={addToCart} 
                deleteFromCart={deleteFromCart}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
              />
          ))}
        </tbody>
        <tfoot>
          <tr >
            <th className="border-0"></th>
         
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">Subtotal</td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(cart.subtotal)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">IVA <small>({NumberHelpers.percentageFormat(cart.taxesPercentage)})</small></td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(cart.taxes)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end">Envio</td>
            <td className="text-end">{NumberHelpers.moneyFormat(cart.shippingCost)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0"><b>Total</b></td>
            <td className="text-end border-0"><b>{NumberHelpers.moneyFormat(cart.total)}</b></td>
            <td className="border-0"></td>
          </tr>
        </tfoot>
      </table>
      <div className="row">

      <div className="col-12">
        <button className="btn btn-primary" onClick={() => { console.log(cartList) }}>Enviar pedido</button>
      </div>

      </div>
  
    </>
  );
};
