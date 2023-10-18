export default function BasketItem(props) {
  const { id, name, price = 0, quantity = 0 } = props;
  return (
    <li className="collection-item active">
      {name} X{quantity} = {price}
      <span className="secondary-content">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
}
