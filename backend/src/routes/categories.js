import express from "express";
import categoriesController from "../controllers/categoriesController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getcategories)
  .post(categoriesController.createcategories);

router
  .route("/:id")
  .put(categoriesController.updatecategories)
  .delete(categoriesController.deletecategories);

export default router;
