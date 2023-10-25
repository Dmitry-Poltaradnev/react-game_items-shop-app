import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";

export default function Shop() {
  const apeKey = `6356c020-9c0a12b0-5f527435-cf4a2344`;
  const { goods, loading, setGoods, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/achievements?lang=en", {
      headers: { Authorization: apeKey },
    })
      .then((responce) => responce.json())
      .then((data) => {
        setGoods(data.achievements);
      });
  }, []);
  return (
    <>
      <main className="content container">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow && <BasketList />}
        {alertName && <Alert />}
      </main>
    </>
  );
}
