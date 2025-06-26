const modelsController = {};
import modelsModel from "../models/Models.js";

// READ: Obtener todos los modelos
modelsController.getModels = async (req, res) => {
  try {
    const models = await modelsModel.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving models", error: error.message });
  }
};

// READ: Obtener un modelo específico
modelsController.getModel = async (req, res) => {
  try {
    const model = await modelsModel.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json(model);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the model", error: error.message });
  }
};

// CREATE: Crear un nuevo modelo
modelsController.createModels = async (req, res) => {
  const { name, ...otherFields } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "El nombre es obligatorio" });
  }

  if (!/^[A-Za-z\s]+$/.test(name.trim())) {
    return res.status(400).json({ message: "El nombre solo puede contener letras y espacios" });
  }

  try {
    const newModel = new modelsModel({
      name: name.trim(),
      ...otherFields,
    });

    await newModel.save();
    res.json({ message: ["Model saved"] });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Error de validación", error: error.message });
    }

    if (error.code === 11000) {
      return res.status(400).json({ message: "Ya existe un modelo con ese nombre" });
    }

    res.status(400).json({ message: "Error creando el modelo", error: error.message });
  }
};

// UPDATE: Actualizar un modelo
modelsController.updateModels = async (req, res) => {
  const { name, ...otherFields } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "El nombre es obligatorio" });
  }

  if (!/^[A-Za-z\s]+$/.test(name.trim())) {
    return res.status(400).json({ message: "El nombre solo puede contener letras y espacios" });
  }

  try {
    const updatedModel = await modelsModel.findByIdAndUpdate(
      req.params.id,
      { name: name.trim(), ...otherFields },
      { new: true }
    );

    if (!updatedModel) {
      return res.status(404).json({ message: "Model not found" });
    }

    res.json({ message: ["Model updated"] });
  } catch (error) {
    res.status(400).json({ message: "Error updating model", error: error.message });
  }
};

// DELETE: Eliminar un modelo por ID
modelsController.deleteModels = async (req, res) => {
  try {
    const deletedModel = await modelsModel.findByIdAndDelete(req.params.id);
    if (!deletedModel) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: ["Model deleted"] });
  } catch (error) {
    res.status(400).json({ message: "Error deleting model", error: error.message });
  }
};

export default modelsController;
