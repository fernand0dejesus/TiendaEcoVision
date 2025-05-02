import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx'; // 👈 Importa Orders
import Footer from './components/Footer';
import Stores from './pages/Stores.jsx';
import Reviews from './pages/Reviews.jsx';
import Categorias from './pages/Categorias.jsx'; // ✅ importa
import Promotions from './pages/Promotions.jsx';  // ✅ Importa Promotions

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ordenes" element={<Orders />} /> {/* 👈 Usa Orders aquí */}
          <Route path="/stores" element={<Stores />} />
          <Route path="/resenas" element={<Reviews />} />
          <Route path="/categorias" element={<Categorias />} /> {/* ✅ ruta añadida */}
          <Route path="/promociones" element={<Promotions />} /> {/* Añade la ruta aquí */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> {/* El Footer va fuera de Routes para que se vea en todas las páginas */}
      </Router>
    </div>
  );
}

export default App;
