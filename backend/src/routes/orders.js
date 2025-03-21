import express from "express";
import customersController from "../controllers/ordersController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(ordersController.getorders)
  .post(ordersController.createorders);

router
  .route("/:id")
  .put(ordersController.updateorders)
  .delete(ordersController.deleteorders);

export default router;
