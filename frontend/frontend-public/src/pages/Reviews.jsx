import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: "Ana Martínez",
    rating: 5,
    text: "Excelente calidad en los productos, y el empaque fue 100% ecológico. ¡Me encantó!",
  },
  {
    name: "Carlos Gómez",
    rating: 4,
    text: "Buena atención y productos sostenibles. Solo tardó un poco el envío.",
  },
  {
    name: "Luisa Hernández",
    rating: 5,
    text: "La ropa es hermosa y se nota el compromiso con el medio ambiente.",
  },
];

function Reviews() {
  return ( 
    <div className="reviews-container">
      <h1>Reseñas de Clientes</h1>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <div className="stars">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
