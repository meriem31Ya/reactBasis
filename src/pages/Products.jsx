import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { getData } from "../services/getProducts";

const Products = () => {
  // fetch mes données
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const refSearch = useRef(null);

  useEffect(() => {
    const response = async () => {
      const pathname = search ? `/?title=${search}` : "";
      const data = await getData(pathname);
      setProducts(data);
      setisLoading(false);
    };
    response();
  }, [search]);

  const handleSubmit = () => {
    const value = refSearch.current.value;
    setSearch(value);
  };

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
        <>
          <div className="flex items-center justify-center">
            <input
              ref={refSearch}
              type="text"
              placeholder="rechercher .."
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Rechercher
            </button>
          </div>
          <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
            {products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
