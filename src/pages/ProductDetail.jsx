import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ProductDetail = () => {
  const { id_product } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id_product}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    return <p>chargement ...</p>;
  }

  return (
    <div className="flex-1">
      <div className="max-w-4xl mx-auto p-4 mt-8  min-h-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden min-h-[400px]">
          {/* Image du produit */}
          <img
            src={product?.images.at(0)}
            alt=""
            className="w-full h-auto object-cover"
          />

          {/* Détails du produit */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title} </h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold text-blue-600 mb-6">
                {product.price} €
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200 w-full">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
