export default function BasketItem(props) {
  const {
    name,
    id,
    total,
    quantity,
    removeFromBasket = Function.prototype,
    addItem = Function.prototype,
    removeItem = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      <div>
        {name} x
        <i onClick={() => removeItem(id)} class="material-icons basket-counter">
          remove
        </i>
        {quantity}
        <i onClick={() => addItem(id)} className="material-icons basket-counter">
          add
        </i>
        ={total * quantity}
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
