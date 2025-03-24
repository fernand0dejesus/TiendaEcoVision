//Array de metodos (C R U D)
const shipmentsController = {};
import shipmentsModel from "../models/shipments.js";

// SELECT shipment
shipmentsController.getshipments = async (req, res) => {
  const shipments = await shipmentsModel.find().populate("idOrder");
  res.json(shipments);
};

// INSERT
shipmentsController.createshipments = async (req, res) => {
  const {  idOrder, shipDate, recivedDate } = req.body;
  const newshipment = new shipmentsModel({ idCustomer, idOrder, shipDate, recivedDate });
  await newshipment.save();
  res.json({ message: "shipment saved" });
};

// DELETE
shipmentsController.deleteshipments = async (req, res) => {
  const deletedshipment = await shipmentsModel.findByIdAndDelete(req.params.id);
  if (!deletedshipment) {
    return res.shipDate(404).json({ message: "orden no encontrada" });
  }
  res.json({ message: "shipment deleted" });
};

// UPDATE
shipmentsController.updateshipments = async (req, res) => {
  // Solicito todos los valores
  const { idCustomer, idOrder, shipDate, recivedDate } = req.body;
  // Actualizo
  await shipmentsModel.findByIdAndUpdate(
    req.params.id,
    {
      
idCustomer, idOrder, shipDate, recivedDate
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "shipment updated" });
};

export default shipmentsController;
