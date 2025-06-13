import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Products = () => {
  // fetch mes données
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  console.log(products);

  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        console.log({ data });
        setProducts(data);
        setisLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner />
          <h1 className="text-2xl font-bold text-center my-4">
            Loading Products...
          </h1>
        </div>
      ) : (
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
