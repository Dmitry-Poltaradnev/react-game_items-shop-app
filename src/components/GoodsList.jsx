import GoodItem from "./GoodItem";
import { ShopContext } from "../context";
import { useContext } from "react";
export default function GoodsList() {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} />
      ))}
    </div>
  );
}
