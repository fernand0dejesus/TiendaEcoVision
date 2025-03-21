//Array de metodos (C R U D)
const ordersController = {};
import ordersModel from "../models/orders.js";

// SELECT
ordersController.getorders = async (req, res) => {
  const orders = await ordersModel.find().populate("idCustomer").populate("idProduct");
  res.json(orders);
};

// INSERT
ordersController.createorders = async (req, res) => {
  const { idCustomer, idProduct, total, status, shipingAdress } = req.body;
  const newOrder = new ordersModel({ idCustomer, idProduct, total, status, shipingAdress });
  await newOrder.save();
  res.json({ message: "Order saved" });
};

// DELETE
ordersController.deleteorders = async (req, res) => {
  const deletedOrder = await ordersModel.findByIdAndDelete(req.params.id);
  if (!deletedOrder) {
    return res.status(404).json({ message: "orden no encontrada" });
  }
  res.json({ message: "Order deleted" });
};

// UPDATE
ordersController.updateorders = async (req, res) => {
  // Solicito todos los valores
  const { idCustomer, idProduct, total, status, shipingAdress } = req.body;
  // Actualizo
  await ordersModel.findByIdAndUpdate(
    req.params.id,
    {
      
idCustomer, idProduct, total, status, shipingAdress
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Order updated" });
};

export default ordersController;
