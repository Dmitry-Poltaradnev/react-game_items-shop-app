export default function BasketItem(props) {
  const { name, id, total, quantity } = props;
  return (
    <li className="collection-item">
      <div>
        {name} x {quantity} = {total}
        <a href="#!" className="secondary-content">
          <span className="material-icons">close</span>
        </a>
      </div>
    </li>
  );
}
