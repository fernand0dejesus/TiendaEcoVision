EcoVision
Moda sostenible

Introducción
EcoVision es una tienda en línea especializada en la venta de productos de ropa ecologica. Inspirados en la necesidad de acercar la naturaleza a cada persona, creamos una plataforma accesible, segura y eficiente que permite a nuestros  clientes comprar camisas, pantalones y zapatos.

Objetivo del Proyecto
Desarrollar una plataforma web y móvil de comercio electrónico que facilite la visualización, compra y contratación de ropa ecologica , con una experiencia de usuario optimizada, moderna y ecológicamente responsable.

Equipo de Desarrollo 

Fernando de Jesus Hernandez Morales Coordinador


Tecnologías Utilizadas 

Front-End:
HTML5

CSS

JavaScript

React

Back-End:

Node.js

Express.js

Base de Datos:
MongoDB

Herramientas de Control de Versiones:
Git

GitHub

Dependencias Principales
(Estas se deben instalar para correr el proyecto)

npm install express
npm install cors
npm install mongoose
npm install dotenv
npm install nodemon -D
npm install react-router-dom
npm install react-icons
npm install framer-motion
Características Principales
Plataforma web y móvil para compra de productos a la moda sostenible.





Visión a Futuro
Integrar métodos de pago adicionales eficientes

Ampliacion de diferentes mercados .




---------------------------------------------------------------------------
Parte frontend-------------------
npm create vite@latest
-seleccionamos react y el "javaScript" el amarillito nos vamos a la carpeta del proyecto que se creo y hacemos

cd frontend
npm i
Configurar React Router.
Abre el archivo main.jsx.
Importa BrowserRouter desde react-router-dom y envuelve tu componente raíz con él:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
Crear las rutas
Abre el archivo App.jsx.
Importa Routes y Route desde react-router-dom y define tus rutas:
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
npm install react-router-dom
npm install react-hot-toast
npm install react-icons
npm install lucide-react
npm install sweetalert2
Ejecucion del frontend
npm run dev
sirve para crear rutas hacia otras paginas en App.jsx puedes eliminar el contenido de la funcion y se eliminara la plantilla que viene default quedaria algo asi:

import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
vamos a boostrap y vamos a download buscamos CDN via jsDelivr copiamos y pegamos en el index.html arriba de title

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

