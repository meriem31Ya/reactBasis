import React from "react";
import { Link } from "react-router";

const Card = ({ product }) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src={
            product.images.at(0) ? product.images.at(0) : "../assets/react.svg"
          }
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {product.category.name}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900 overflow-hidden h-8">
            {product.title}
          </h5>
        </a>
        <p className="mt-2 text-base text-gray-600 overflow-hidden h-20">
          {product.description}
        </p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {product.price}$
            </span>
          </p>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          voir le produit
        </Link>
      </div>
    </div>
  );
};

export default Card;
