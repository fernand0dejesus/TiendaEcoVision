import React from 'react';
import './Categorias.css';

import camisasImg from '../assets/camisas.jpg';
import pantalonesImg from '../assets/pantalones.jpeg';
import vestidosImg from '../assets/vestidos.jpg';
import accesoriosImg from '../assets/accesorios.jpg';

const categorias = [
  { nombre: "Camisas", descripcion: "Camisas ecológicas hechas con algodón orgánico.", imagen: camisasImg },
  { nombre: "Pantalones", descripcion: "Pantalones reciclados y cómodos para el uso diario.", imagen: pantalonesImg },
  { nombre: "Vestidos", descripcion: "Vestidos sostenibles con materiales biodegradables.", imagen: vestidosImg },
  { nombre: "Accesorios", descripcion: "Gorras, bolsos y más con impacto ambiental reducido.", imagen: accesoriosImg },
];

function Categorias() {
  return (
    <div className="categorias-container">
      <div className="categorias-content">
        <h1>Categorías</h1>
        <div className="categorias-list">
          {categorias.map((cat, idx) => (
            <div key={idx} className="categoria-card">
              <img src={cat.imagen} alt={cat.nombre} className="categoria-img" />
              <div className="categoria-info">
                <h3>{cat.nombre}</h3>
                <p>{cat.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorias;
