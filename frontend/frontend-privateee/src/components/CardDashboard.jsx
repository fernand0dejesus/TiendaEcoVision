import React from "react";

const CardDashboard = ({ label, data }) => {
  let baseClass = "text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ";

  let className = "";
  if (label === "Empleados") {
    className = baseClass + "bg-gradient-to-r from-blue-500 to-blue-700";
  } else if (label === "Marcas") {
    className = baseClass + "bg-gradient-to-r from-green-500 to-green-700";
  } else if (label === "Modelos") {
    className = baseClass + "bg-gradient-to-r from-purple-500 to-purple-700";
  } else if (label === "Categorias") {
    className = baseClass + "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900";
  } else if (label === "Productos") {
    className = baseClass + "bg-gradient-to-r from-red-500 to-red-700";
  } else {
    className = baseClass + "bg-gradient-to-r from-gray-500 to-gray-700";
  }

  return (
    <div className={className}>
      <h2 className="text-xl font-bold">{label}</h2>
      <p className="text-4xl font-bold mt-4">{data}</p>
    </div>
  );
};

export default CardDashboard;
