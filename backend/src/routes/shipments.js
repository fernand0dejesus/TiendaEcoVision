import express from "express";
import shipmentsController from "../controllers/shipmentsController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(shipmentsController.getshipments)
  .post(shipmentsController.createshipments);

router
  .route("/:id")
  .put(shipmentsController.updateshipments)
  .delete(shipmentsController.deleteshipments);

export default router;
