// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import ordersRoutes from "./src/routes/orders.js"
import shipmentsRoutes from "./src/routes/"
//routes

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRoutes);
app.use("/api/customers",customersRoutes);
app.use("/api/orders",ordersRoutes);
app.use("/api/shipments", shipmentsRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
