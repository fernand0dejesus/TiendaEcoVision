// src/pages/Home.jsx
import './Home.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

function Home() {
  return (
    <div className="home-container">
      <header className="top-bar">
        <nav className="menu">
          <ul>
            <li>Ropa</li>
            <li>Ordenes</li>
            <li>Envíos</li>
            <li>Reseñas</li>
            <li>Categorías</li>
            <li>Promociones</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Busca aquí los artículos que tú necesitas..." />
          <span className="icon">♻️</span>
        </div>
      </header>

      <main className="image-section">
        <div className="row">
          <img src={img1} alt="Producto eco" />
          <img src={img2} alt="Etiqueta ecológica" />
        </div>

        <div className="divider" />

        <div className="row">
          <img src={img3} alt="Etiquetas recicladas" />
          <img src={img4} alt="Etiqueta en prenda" />
        </div>
      </main>

      <footer className="footer">
        <span className="logo">ECO <strong>Vision</strong></span>
      </footer>
    </div>
  );
}

export default Home;
