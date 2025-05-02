// src/pages/Promotions.jsx
import './Promotions.css';

function Promotions() {
  const discounts = [
    { title: "Descuento de Primavera", description: "¡Aprovecha un 30% de descuento en toda la tienda durante este mes de primavera!" },
    { title: "Envío Gratis en Pedidos Mayores a $50", description: "Obtén envío gratuito en tus compras superiores a $50. ¡No dejes pasar esta oferta!" },
    { title: "2x1 en Ropa de Invierno", description: "Compra una prenda de ropa de invierno y recibe una gratis. Solo por tiempo limitado." },
    { title: "50% Off en Calzado Deportivo", description: "¡Lleva tus zapatillas favoritas con un 50% de descuento por tiempo limitado!" },
    { title: "10% de Descuento Extra con Código", description: "Usa el código EXTRADESCUENTO y obtén un 10% adicional en tu compra." },
    { title: "3x2 en Accesorios", description: "Compra 2 accesorios y llévate un tercero gratis." },
    { title: "Descuento en Ropa de Niños", description: "30% de descuento en toda la ropa infantil hasta agotar existencias." },
    { title: "Compra y Gana un Cupón de $10", description: "Por cada compra superior a $60, recibe un cupón de $10 para tu próxima compra." },
    { title: "Descuento de Verano", description: "Recibe hasta 40% de descuento en la colección de verano." },
    { title: "Envío Rápido 24 Horas", description: "Aprovecha envío rápido en todas las compras, ¡llega al día siguiente!" },
    { title: "Descuento en Productos Eco-Friendly", description: "¡Compra productos ecológicos con hasta un 25% de descuento!" },
    { title: "15% de Descuento en Compras de $100", description: "Obtén un 15% de descuento en compras superiores a $100." },
    { title: "4x3 en Productos de Belleza", description: "Lleva 4 productos de belleza por el precio de 3." },
    { title: "Bolsos a Precio Especial", description: "Compra 1 bolso y llévate el segundo con un 40% de descuento." },
    { title: "Descuento de Navidad", description: "Durante este diciembre, disfruta de descuentos de hasta un 60% en productos seleccionados." }
  ];

  return (
    <div className="promotions-page">
      <h2>Promociones Especiales</h2>
      <div className="promotions-container">
        {discounts.map((promo, index) => (
          <div className="promotion-item" key={index}>
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <button className="promo-btn">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotions;
