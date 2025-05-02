import './Stores.css';
import metroImg from '../assets/metroImg.jpg';
import cascadasImg from '../assets/cascadasImg.jpeg';
import escalonImg from '../assets/escalonImg.jpg';

function Stores() {
  return (
    <div className="stores-container">
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

      <main className="stores-list">
        {/* Metrocentro Card */}
        <div className="store-card">
          <img src={metroImg} alt="Metrocentro" />
          <div className="store-info">
            <h4>METROCENTRO EL SALVADOR, SAN SALVADOR MEJICANOS</h4>
            <p>Centro Comercial Metrocentro, Nivel 2, Local #201<br />San Salvador, El Salvador</p>
            <p>Lun a Dom: 09:00 - 20:00 hrs.</p>
            <p><strong>📞</strong> 2260-4049</p>
            <button>Visítanos</button>
          </div>
        </div>

        {/* Cascadas Card */}
        <div className="store-card">
          <img src={cascadasImg} alt="Cascadas" />
          <div className="store-info">
            <h4>CASCADAS - TIENDA - 642</h4>
            <p>HIPERMALL "LAS CASCADAS" LOCAL HIPE RAÍZ AV.UNIÓN<br />Carretera Panamericana, La Libertad C.P. 99999</p>
            <p>Lun a Vie: 08:00 - 21:00 hrs. / Sáb y Dom: 09:00 - 21:00 hrs.</p>
            <p><strong>📞</strong> 2243-0800</p>
            <button>Visítanos</button>
          </div>
        </div>

        {/* Escalón Card */}
        <div className="store-card">
          <img src={escalonImg} alt="Escalón" />
          <div className="store-info">
            <h4>EXPRESS (Escalón) - TIENDA - 643</h4>
            <p>Paseo General Escalón entre 83 y 85 Av. Sur No.1323<br />CD. de San Salvador C.P. 55555</p>
            <p>Lun a Vie: 08:00 - 20:00 hrs. / Sáb y Dom: 09:00 - 18:00 hrs.</p>
            <p><strong>📞</strong> 2264-5220</p>
            <button>Visítanos</button>
          </div>
        </div>

        {/* Nueva Card - Galerías */}
        <div className="store-card">
          <img src={metroImg} alt="Galerías" /> {/* Puedes cambiar la imagen */}
          <div className="store-info">
            <h4>GALERÍAS - TIENDA - 644</h4>
            <p>Centro Comercial Galerías, Local G-12<br />San Salvador, El Salvador</p>
            <p>Lun a Dom: 10:00 - 20:00 hrs.</p>
            <p><strong>📞</strong> 2261-7171</p>
            <button>Visítanos</button>
          </div>
        </div>

        {/* Nueva Card - Multiplaza */}
        <div className="store-card">
          <img src={cascadasImg} alt="Multiplaza" /> {/* Puedes cambiar la imagen */}
          <div className="store-info">
            <h4>MULTIPLAZA - TIENDA - 645</h4>
            <p>Centro Comercial Multiplaza, Nivel Terraza<br />Antiguo Cuscatlán, La Libertad</p>
            <p>Lun a Dom: 09:30 - 21:00 hrs.</p>
            <p><strong>📞</strong> 2245-1212</p>
            <button>Visítanos</button>
          </div>
        </div>
      </main>

      
      
    </div>
  );
}

export default Stores;