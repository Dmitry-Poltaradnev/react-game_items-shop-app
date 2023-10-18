import React from "react";

export default function GoodsItem(props) {
  console.log(props);

  const {
    displayAssets,
    mainId: displayName,
    displayName: name,
    price,
    displayDescription: description,
    addToBasket = Function.prototype,
  } = props;

  return (
    <>
      <div className="item">
        <div className="card">
          <span className="title">{name}</span>
          <div className="card-image">
            <img src={displayAssets[0].full_background} alt={displayName} />
            <div className="card-action">
              <button onClick={() => addToBasket(name, price)} className="btn">
                Added to cart
              </button>
              <span className="right">{price.regularPrice}</span>
            </div>
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    </>
  );
}
