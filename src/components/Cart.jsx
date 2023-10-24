export default function Cart(props) {
  const { quantity = 0, showBasket = Function.prototype } = props;
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
