import React from "react";
import { useParams } from "react-router";

const Product = () => {
  let { id_product } = useParams();

  return <div>Product {id_product}</div>;
};

export default Product;
