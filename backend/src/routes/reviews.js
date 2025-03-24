import express from "express";
import reviewsController from "../controllers/reviewsController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(reviewsController.getreviews)
  .post(reviewsController.createreviews);

router
  .route("/:id")
  .put(reviewsController.updatereviews)
  .delete(reviewsController.deletereviews);

export default router;
