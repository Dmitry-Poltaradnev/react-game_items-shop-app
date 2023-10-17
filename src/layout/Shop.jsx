import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";

export default function Shop() {
  const apeKey = `6356c020-9c0a12b0-5f527435-cf4a2344`;
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/items/list?lang=en", {
      headers: { Authorization: apeKey },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.items && setGoods(data.items);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
