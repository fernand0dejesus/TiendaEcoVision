// src/pages/Home.jsx

import React from 'react';
import './Home.css';
import CardRopa from '../components/CardRopa';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

function Home() {
  return (
    <div className="home-container">
      <header className="top-bar">
        {/* ... menú y barra de búsqueda ... */}

        <h1>Ropa</h1>
        <h1>Ropa</h1>
        <h1>Ropa</h1>

      </header>
     

      <main className="image-section">
        {/* Primera fila de productos */}
        <div className="row">
          <CardRopa
            imgSrc={img1}
            altText="Camiseta algodón orgánico"
            title="Camiseta Orgánica Eco"
            description="Camiseta 100% algodón orgánico, suave y transpirable. Ideal para uso diario."
            price={29.99}
            stock={12}
            isNew={true}
            onSale={false}
          />
          <CardRopa
            imgSrc={img2}
            altText="Etiqueta reciclada"
            title="Etiqueta Ecológica"
            description="Etiqueta hecha con papel reciclado y tintas ecológicas."
            price={2.5}
            stock={50}
            isNew={false}
            onSale={true}
          />
        </div>

        <div className="divider" />

        {/* Segunda fila de productos */}
        <div className="row">
          <CardRopa
            imgSrc={img3}
            altText="Material reciclado"
            title="Material Reciclado"
            description="Prenda confeccionada con materiales 100% reciclados, cuidando el planeta."
            price={45.0}
            stock={0} // Sin stock para probar estado agotado
            isNew={false}
            onSale={false}
          />
          <CardRopa
            imgSrc={img4}
            altText="Diseño sostenible"
            title="Diseño Sostenible"
            description="Prenda con diseño ético y sostenible, fabricada localmente."
            price={39.99}
            stock={7}
            isNew={true}
            onSale={true}
          />
        </div>
      </main>

      
        {/* ... pie de página ... */}
    </div>
  );
}

export default Home;
