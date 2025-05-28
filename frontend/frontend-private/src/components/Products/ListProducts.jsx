import React from "react";
import ProductCard from "./ProductCard";
/*const products = [{    _id: "1",
    name: "Laptop Lenovo ThinkPad",
    description: "Potente laptop para trabajo y estudio.",
    price: 15000,
    stock: 10,
    discount: 15,
    image: "https://via.placeholder.com/400x300?text=Producto",
    brand: { name: "Lenovo" },
    model: { name: "ThinkPad X1" },
    category: { name: "Laptops" }
}]*/


const ListProduct = ({ products, deleteCategory, updateCategories }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {products?.length===0 && <div className="text-center text-gray-500">No hay datos...</div>}

        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteCategory={deleteCategory}
            updateCategories={updateCategories}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;