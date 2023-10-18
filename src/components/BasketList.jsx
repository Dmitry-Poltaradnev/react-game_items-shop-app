import BasketItem from "./BasketItem";
export default function BasketList(props) {
  const { order = [] } = props;
  return (
    <ul className="collection">
      <li className="collection-item">Cart</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}

      <li className="collection-item">Common price</li>
    </ul>
  );
}
