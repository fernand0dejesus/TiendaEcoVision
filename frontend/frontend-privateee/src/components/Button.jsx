import React from "react";

const Button = ({ label, actionButton, colorClass, type = "button" }) => {
  let className =
    "px-6 py-3 rounded-full font-bold tracking-wide transition duration-300 shadow-md transform hover:scale-105 ";

  if (colorClass === "primary") {
    className += "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110";
  } else if (colorClass === "secondary") {
    className += "bg-gradient-to-r from-green-400 to-green-600 text-white hover:brightness-110";
  } else if (colorClass === "danger") {
    className += "bg-gradient-to-r from-red-500 to-red-700 text-white hover:brightness-110";
  } else if (colorClass === "warning") {
    className += "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:brightness-110";
  } else if (colorClass === "whatsapp") {
    className += "bg-gradient-to-r from-emerald-400 to-emerald-600 text-white hover:brightness-110";
  } else {
    className += "bg-gray-400 text-white hover:bg-gray-600";
  }

  return (
    <button
      type={type}
      className={className}
      onClick={actionButton}
    >
      {label}
    </button>
  );
};

export default Button;
