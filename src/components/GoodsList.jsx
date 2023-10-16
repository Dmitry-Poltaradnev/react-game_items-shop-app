import React from "react";
import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
  const { goods = [] } = props;
  return (
    <div>
      {goods.map((good) => (
        <GoodsItem {...good} />
      ))}
    </div>
  );
}
