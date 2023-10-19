import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";

export default function Shop() {
  const apeKey = `6356c020-9c0a12b0-5f527435-cf4a2344`;
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

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
        {loading ? <Preloader /> : <GoodsList goods={goods} />}
      </main>
    </>
  );
}
