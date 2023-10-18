export default function Cart(props) {
  const { quantity, handleBasketShow = Function.prototype } = props;
  return (
    <div onClick={handleBasketShow} className="cart deep-orange white-text">
      <i className="material-icons ">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
