import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props) {
  const { order, showBasket = Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div
      onClick={() => showBasket()}
      className="cart green accent-2 white-text "
    >
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
