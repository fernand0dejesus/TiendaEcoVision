// src/components/CardRopa.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './CardRopa.css';

/**
 * Componente CardRopa que muestra información completa de un producto de ropa.
 * @param {string} imgSrc - Imagen del producto.
 * @param {string} altText - Texto alternativo para la imagen.
 * @param {string} title - Nombre o título del producto.
 * @param {string} description - Descripción detallada del producto.
 * @param {number} price - Precio del producto.
 * @param {number} stock - Cantidad disponible en stock.
 * @param {boolean} isNew - Indica si el producto es nuevo.
 * @param {boolean} onSale - Indica si el producto está en oferta.
 */
function CardRopa({
  imgSrc,
  altText,
  title,
  description,
  price,
  stock,
  isNew,
  onSale,
}) {
  return (
    <div className="card-ropa">
      {/* Imagen del producto */}
      <div className="card-image-wrapper">
        <img src={imgSrc} alt={altText} className="card-image" />
        {/* Badges para etiquetas como "Nuevo" o "Oferta" */}
        <div className="badges">
          {isNew && <span className="badge new">Nuevo</span>}
          {onSale && <span className="badge sale">Oferta</span>}
        </div>
      </div>

      {/* Contenido textual del producto */}
      <div className="card-content">
        {/* Título o nombre del producto */}
        <h3 className="card-title">{title}</h3>

        {/* Descripción detallada */}
        <p className="card-description">{description}</p>

        {/* Precio */}
        <p className="card-price">${price.toFixed(2)}</p>

        {/* Stock disponible */}
        <p className={`card-stock ${stock > 0 ? 'in-stock' : 'out-stock'}`}>
          {stock > 0 ? `En stock: ${stock}` : 'Agotado'}
        </p>

        {/* Botón para agregar al carrito */}
        <button
          className="btn-add-cart"
          disabled={stock === 0}
          aria-disabled={stock === 0}
        >
          {stock === 0 ? 'No disponible' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}

// Validación de tipos para las props
CardRopa.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  isNew: PropTypes.bool,
  onSale: PropTypes.bool,
};

// Props por defecto para isNew y onSale
CardRopa.defaultProps = {
  isNew: false,
  onSale: false,
};

export default CardRopa;
