import express from "express";
import promotionsController from "../controllers/promotionsController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(promotionsController.getpromotions)
  .post(promotionsController.createpromotions);

router
  .route("/:id")
  .put(promotionsController.updatepromotions)
  .delete(promotionsController.deletepromotions);

export default router;
