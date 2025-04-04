//Array de metodos (C R U D)
const promotionsController = {};
import promotionsModel from "../models/promotions.js";

// SELECT
promotionsController.getpromotions = async (req, res) => {
  const promotions = await promotionsModel.find().populate("idProduct").populate("idpromotion");
  res.json(promotions);
};

// INSERT
promotionsController.createpromotions = async (req, res) => {
  const { name, description, idProduct, idpromotion, discounPercentage } = req.body;
  const newpromotion = new promotionsModel({ name, description, idProduct, idpromotion, discounPercentage });
  await newpromotion.save();
  res.json({ message: "promotion saved" });
};

// DELETE
promotionsController.deletepromotions = async (req, res) => {
  const deletedpromotion = await promotionsModel.findByIdAndDelete(req.params.id);
  if (!deletedpromotion) {
    return res.status(404).json({ message: "promocion no encontrada" });
  }
  res.json({ message: "promotion deleted" });
};

// UPDATE
promotionsController.updatepromotions = async (req, res) => {
  // Solicito todos los valores
  const { name, description, idProduct, idpromotion, discounPercentage } = req.body;
  // Actualizo
  await promotionsModel.findByIdAndUpdate(
    req.params.id,
    {
      
name, description, idProduct, idpromotion, discounPercentage
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "promotion updated" });
};

export default promotionsController;
