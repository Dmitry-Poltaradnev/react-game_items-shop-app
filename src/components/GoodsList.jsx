import GoodItem from "./GoodItem";

export default function GoodsList(props) {
  const { addToBasket = Function.prototype, goods = [] } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
