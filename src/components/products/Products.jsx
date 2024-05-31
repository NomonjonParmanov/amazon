import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?skip=2")
      .then((res) => setData(res.data.products));
  }, []);

  let product = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt={el.title} width={50} />
      <h2>{el.title}</h2>
      <h3>${el.price}</h3>
      <p>$50</p>
    </div>
  ));
  return <div className="container products">{product}</div>;
};

export default Products;
