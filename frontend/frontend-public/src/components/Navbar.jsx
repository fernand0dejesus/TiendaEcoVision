// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌿 EcoVision</div>

      <ul className="nav-links">
        <li><Link to="/">Ropa</Link></li>
        <li><Link to="/ordenes">Órdenes</Link></li>
        <li><Link to="/stores">Envíos</Link></li>
        <li><Link to="/resenas">Reviews</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
        <li><Link to="/promociones">Promociones</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>

      <input
        type="text"
        placeholder="Busca aquí los artículos que tú necesitas..."
        className="search-box"
      />
    </nav>
  );
}

export default Navbar;
