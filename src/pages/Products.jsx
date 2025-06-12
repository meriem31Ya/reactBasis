import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Products = () => {
  // fetch mes données
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
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
      }
    };
    fetchProducts();
    //    appel api une vérif ect
  }, []);

  return (
        {
            isLoading ? (<div> Loading products ...</div>):

            //  afficher les produits 

        }


  );
};

export default Products;
