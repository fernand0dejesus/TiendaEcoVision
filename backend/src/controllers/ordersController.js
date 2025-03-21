//Array de metodos (C R U D)
const ordersController = {};
import ordersModel from "../models/orders.js";

// SELECT
ordersController.getorders = async (req, res) => {
  const orders = await productsModel.find().populate("idCostumers");
  res.json(orders);
};

// INSERT
ordersController.createorders = async (req, res) => {
  const { idCustomers, idProduct, total, status, shipingAdress } = req.body;
  const newOrder = new ordersModel({ idCustomers, idProduct, total, status, shipingAdress });
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
  const { idCustomers, idProduct, total, status, shipingAdress } = req.body;
  // Actualizo
  await ordersModel.findByIdAndUpdate(
    req.params.id,
    {
      
idCustomers, idProduct, total, status, shipingAdress
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Order updated" });
};

export default ordersController;
