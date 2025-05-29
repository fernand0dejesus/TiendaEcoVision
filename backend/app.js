// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import ordersRoutes from "./src/routes/orders.js"
import shipmentsRoutes from "./src/routes/shipments.js"
import reviewsRoutes from "./src/routes/reviews.js";
import categoriesRoutes from "./src/routes/categories.js";
import promotionsRoutes from "./src/routes/promotions.js";


import cors from "cors";
import employeesRoutes from "./routes/employees.js";

import loginRoutes from "./routes/login.js";
import registerClientRoutes from "./routes/registerClient.js";
import registerEmployeesRoutes from "./routes/registerEmployee.js";
import logoutRoutes from "./routes/logout.js";
import dotenv from "dotenv";

import clientsRoutes from "./routes/clients.js";
dotenv.config();


// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // Dominio del cliente
    credentials: true, // Permitir envío de cookies y credenciales
  })
);
app.use(express.json());
app.use(cookieParser());
import { validateAuthToken } from "./middlewares/validateAuthToken.js";

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
app.use("/api/reviews", reviewsRoutes);
app.use("/api/categories",categoriesRoutes);
app.use("/api/promotions", promotionsRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/clients", clientsRoutes);



// Rutas publicas que no necesitan haber iniciado sesión
app.use("/api/login", loginRoutes);
app.use("/api/registerClients", registerClientRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
// Exporto la constante para poder usar express en otros archivos
export default app;
 