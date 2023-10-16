import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";

export default function Shop() {
  const apeKey = `6356c020-9c0a12b0-5f527435-cf4a2344`;
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/shop?lang=en", {
      headers: { Authorization: apeKey },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
