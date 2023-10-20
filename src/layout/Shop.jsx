import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import Basket from "../components/BasketList";
import BasketList from "../components/BasketList";

export default function Shop() {
  const apeKey = `6356c020-9c0a12b0-5f527435-cf4a2344`;
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const showBasket = () => {
    setBasketShow(!isBasketShow);
  };

  const addToBasket = (item) => {
    console.log(item);
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/achievements?lang=en", {
      headers: { Authorization: apeKey },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.achievements && setGoods(data.achievements);
      });
    setLoading(false);
  }, []);
  return (
    <>
      <main className="content container">
        <Cart quantity={order.length} showBasket={showBasket} />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} addToBasket={addToBasket} />
        )}
        {isBasketShow && <BasketList order={order} showBasket={showBasket} />}
      </main>
    </>
  );
}
