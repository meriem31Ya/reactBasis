import React from "react";
import Header from "../components/Header";

const Accueil = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bienvenue chez Simplon
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            On apprend React, c'est trop chouette !!.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-base hover:bg-blue-700 transition">
            En savoir plus
          </button>
        </div>
      </section>
    </>
  );
};

export default Accueil;
