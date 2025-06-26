import React, { useState, useEffect } from "react";
import Title from "../components/Titles";
import CardProduct from "../components/Products/CardProduct";
import { useParams } from "react-router-dom";
import useDataProducts from "../components/Products/hooks/useDataProducts";

const Products = () => {
  const {
    addToCart,
    filteredProducts,
    selectedCategory,
    categories,
    setSelectedCategory,
    productsCart,
    setProductsCart,
  } = useDataProducts();

  return (
    <div className="min-h-screen bg-rose-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 border border-stone-200">
        <div className="bg-gradient-to-r from-amber-100 to-stone-100 rounded-xl p-8 mb-6 text-center border border-amber-200">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2 tracking-wide">
            MODA CONSCIENTE
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-amber-700 tracking-wider">
            & ESTILO SOSTENIBLE
          </h2>
        </div>
        <p className="text-stone-700 mb-4 text-lg leading-relaxed">
          Descubre nuestra colección de moda ética y sostenible. Cada pieza está 
          cuidadosamente seleccionada para ofrecerte estilo consciente que respeta 
          el medio ambiente y apoya la producción responsable.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-200 p-4 mb-8 rounded-r-lg">
          <p className="text-stone-600 text-sm">
            ✨ <strong>Compromiso sostenible:</strong> Materiales orgánicos, procesos eco-friendly 
            y condiciones laborales justas en cada producto de nuestra tienda.
          </p>
        </div>

        <div className="mb-6">
          <label className="mr-2 font-semibold text-stone-700">
            Filtrar por categoría:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-300"
          >
            <option value="Todas">Todas las categorías</option>
            {categories.map((categorie) => (
              <option key={categorie._id} value={categorie._id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-semibold text-stone-800 mb-4">
          Productos en la categoría:{" "}
          <span className="text-amber-600">
            {categories.find((cat) => cat._id === selectedCategory)?.name ||
              "Todas"}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-500 text-lg">
                No hay productos disponibles en esta categoría.
              </p>
              <p className="text-stone-400 text-sm mt-2">
                Explora otras categorías para descubrir más opciones sostenibles.
              </p>
            </div>
          ) : (
            filteredProducts.map((item) => (
              <CardProduct
                product={item}
                key={item._id}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;