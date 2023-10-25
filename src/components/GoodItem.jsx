import { ShopContext } from "../context";
import { useContext } from "react";

export default function GoodItem(props) {
  const { name, id, description, total, image } = props;

  const { addToBasket } = useContext(ShopContext);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name} />
          <span className="title">{name}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <span className="totalScore">{total} : Points for achievement</span>
          <button
            onClick={() => addToBasket({ id, name, total, image })}
            className="waves-effect waves-light btn test"
          >
            Push for add score
          </button>
        </div>
      </div>
    </>
  );
}
