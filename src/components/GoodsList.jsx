import React from "react";
import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;
  if (!goods.length) {
    return <h3>Nothin hear</h3>;
  }
  return (
    <div className="items">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
