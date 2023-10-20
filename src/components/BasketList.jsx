import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const { order = [], showBasket = Function.prototypero } = props;
  return (
    <>
      {order.length ? (
        <ul className="collection  basket-list ">
          <li className="collection-item active">Basket</li>
          {order.map((order) => (
            <BasketItem key={order.id} {...order} showBasket={showBasket} />
          ))}
          <li className="collection-item active">Common price</li>
        </ul>
      ) : (
        <ul className="collection basket-list ">
          <li className="collection-item active">
            Basket is empty{" "}
            <i onClick={showBasket} className="material-icons right">
              close
            </i>
          </li>
        </ul>
      )}
    </>
  );
}
