import React from "react";

export default function GoodsItem(props) {
  const { name, description, id, price } = props;
  const { icon_background } = props.images;

  return (
    <>
      <div className="item">
        <div className="card">
          <span className="title">{name}</span>
          <div className="card-image">
            <img src={icon_background} alt="item" />
            <div className="card-action">
              <button className="btn">Added to cart</button>
              <span className="right">{price}</span>
            </div>
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    </>
  );
}
