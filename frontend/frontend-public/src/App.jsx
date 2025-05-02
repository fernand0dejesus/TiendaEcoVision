// src/App.jsx
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx'; // 👈 Importa Orders
import Footer from './components/Footer';
import Stores from './pages/Stores.jsx';
import Reviews from './pages/Reviews.jsx';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/ordenes" element={<Orders />} /> {/* 👈 Usa Orders aquí */}
        <Route path="/stores" element={<Stores/>} />
        <Route path="/resenas" element={<Reviews/>} />
        <Route path="/categorias" element={<div>Categorías</div>} />
        <Route path="/promociones" element={<div>Promociones</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         
      </Routes>
      <Footer />
     </Router>

    </>
  );
}

export default App;
