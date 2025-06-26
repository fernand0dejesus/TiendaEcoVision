import React, { useEffect, useState } from "react";
import Title from "../components/Titles";
import useFetchProducts from "../hooks/useFetchProducts";
import CardCategorie from "../components/Categories/CardCategorie";

const Home = () => {
  const { products, categories } = useFetchProducts();

  console.log("categ desde home", categories);

  return (
    <div className="min-h-screen bg-rose-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 border border-stone-200">
        <div className="bg-gradient-to-r from-amber-100 to-stone-100 rounded-xl p-8 mb-6 text-center border border-amber-200">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2 tracking-wide">
            BIENVENIDO A ECOVISION
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-amber-700 tracking-wider">
            TU TIENDA DE MODA SOSTENIBLE
          </h2>
        </div>
        
        <p className="text-stone-700 mb-4 text-lg leading-relaxed">
          Descubre una nueva forma de vestir con estilo mientras cuidas el planeta. 
          Cada prenda cuenta una historia de sostenibilidad, ética y belleza consciente.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-200 p-4 mb-8 rounded-r-lg">
          <p className="text-stone-600 text-sm">
            <strong>Nuestra misión:</strong> Transformar la industria de la moda hacia 
            un futuro más sostenible, una prenda a la vez.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-stone-800 mb-4">
          Explora nuestras <span className="text-amber-600">categorías sostenibles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories?.map((item) => (
            <CardCategorie category={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;