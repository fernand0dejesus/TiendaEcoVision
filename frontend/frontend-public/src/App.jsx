// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ordenes" element={<div>Órdenes</div>} />
        <Route path="/envios" element={<div>Envíos</div>} />
        <Route path="/resenas" element={<div>Reseñas</div>} />
        <Route path="/categorias" element={<div>Categorías</div>} />
        <Route path="/promociones" element={<div>Promociones</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
