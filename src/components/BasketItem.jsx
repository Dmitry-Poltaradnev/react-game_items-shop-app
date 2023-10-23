export default function BasketItem(props) {
  const {
    name,
    id,
    total,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      <div>
        {name} x {quantity} = {total * quantity}
        <a href="#!" className="secondary-content">
          <span
            onClick={() => removeFromBasket(id)}
            className="material-icons basket-delete "
          >
            close
          </span>
        </a>
      </div>
    </li>
  );
}
