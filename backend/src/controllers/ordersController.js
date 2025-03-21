//Array de metodos (C R U D)
const ordersController = {};
import ordersModel from "../models/orders.js";

// SELECT
ordersController.getorders = async (req, res) => {
  const orders = await productsModel.find();
  res.json(orders);
};

// INSERT
ordersController.createorders = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const newOrder = new ordersModel({ name, description, price, stock });
  await newOrder.save();
  res.json({ message: "Order saved" });
};

// DELETE
ordersController.deleteorders = async (req, res) => {
  const deletedOrder = await productsModel.findByIdAndDelete(req.params.id);
  if (!deletedOrder) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({ message: "Order deleted" });
};

// UPDATE
ordersController.updateorders = async (req, res) => {
  // Solicito todos los valores
  const { name, description, price, stock } = req.body;
  // Actualizo
  await ordersModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      price,
      stock,
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Order updated" });
};

export default ordersController;
