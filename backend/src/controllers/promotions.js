//Array de metodos (C R U D)
const categoriesController = {};
import categoriesModel from "../models/categories.js";

// SELECT
categoriesController.getcategories = async (req, res) => {
  const categories = await categoriesModel.find().populate("idProduct").populate("idCategorie");
  res.json(categories);
};

// INSERT
categoriesController.createcategories = async (req, res) => {
  const { name, description, idProduct, idCategorie, discounPercentage } = req.body;
  const newcategorie = new categoriesModel({ name, description, idProduct, idCategorie, discounPercentage });
  await newcategorie.save();
  res.json({ message: "categorie saved" });
};

// DELETE
categoriesController.deletecategories = async (req, res) => {
  const deletedcategorie = await categoriesModel.findByIdAndDelete(req.params.id);
  if (!deletedcategorie) {
    return res.status(404).json({ message: "orden no encontrada" });
  }
  res.json({ message: "categorie deleted" });
};

// UPDATE
categoriesController.updatecategories = async (req, res) => {
  // Solicito todos los valores
  const { name, description, idProduct, idCategorie, discounPercentage } = req.body;
  // Actualizo
  await categoriesModel.findByIdAndUpdate(
    req.params.id,
    {
      
name, description, idProduct, idCategorie, discounPercentage
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "categorie updated" });
};

export default categoriesController;
