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
  {
    name: "Mariana López",
    rating: 5,
    text: "Muy satisfecha con mi compra. Llegó rápido y todo venía perfectamente presentado.",
  },
  {
    name: "Jorge Ramírez",
    rating: 3,
    text: "Los productos son buenos, pero esperaba más opciones en tallas.",
  },
  {
    name: "Valentina Ortiz",
    rating: 4,
    text: "Buena relación calidad-precio. El empaque reciclado es un plus.",
  },
  {
    name: "Esteban Ruiz",
    rating: 5,
    text: "¡Increíble! Todo llegó tal cual como lo mostraban en las fotos.",
  },
  {
    name: "Camila Ríos",
    rating: 4,
    text: "Los productos son lindos y de buena calidad. Tardó un día más en llegar.",
  },
  {
    name: "Martín Torres",
    rating: 5,
    text: "Me encantó la experiencia de compra. Todo es muy amigable con el medio ambiente.",
  },
  {
    name: "Natalia Pérez",
    rating: 2,
    text: "Bonita idea, pero el producto no era lo que esperaba. Podrían mejorar la descripción.",
  },
];

function Reviews() {
  return ( 
    <div className="reviews-container">
      <div className="reviews-content">
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
    </div>
  );
}

export default Reviews;
