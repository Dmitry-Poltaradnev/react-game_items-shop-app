import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {
    order = [],
    showBasket = Function.prototypero,
    removeFromBasket = Function.prototype,
    removeItem = Function.prototype,
    addItem = Function.prototype,
  } = props;

  const totalScore = order.reduce((sum, elem) => {
    return sum + elem.total * elem.quantity;
  }, 0);

  return (
    <>
      {order.length ? (
        <ul className="collection  basket-list ">
          <li className="collection-item active">
            Basket
            <i onClick={showBasket} className="material-icons right close-icon">
              close
            </i>
          </li>
          {order.map((order) => (
            <BasketItem
              key={order.id}
              {...order}
              showBasket={showBasket}
              removeFromBasket={removeFromBasket}
              removeItem={removeItem}
              addItem={addItem}
            />
          ))}
          <li className="collection-item active">Total score: {totalScore}</li>
        </ul>
      ) : (
        <ul className="collection basket-list ">
          <li className="collection-item active">
            Basket is empty
            <i onClick={showBasket} className="material-icons right close-icon">
              close
            </i>
          </li>
        </ul>
      )}
    </>
  );
}
