// src/pages/Orders.jsx
import './Orders.css';
import Footer from '../components/Footer';  // Asegúrate de importar el Footer correctamente

function Orders() {
  return (
    <div className="orders-page">
      <div className="orders-content">
        <div className="orders-box">
          <h2>Mis Órdenes</h2>
          <div className="order-item">
            <strong>Orden #12345</strong><br />
            Estado: En proceso<br />
            Fecha: 29/04/2025
          </div>
          <div className="order-item">
            <strong>Orden #12344</strong><br />
            Estado: Enviada<br />
            Fecha: 20/04/2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
