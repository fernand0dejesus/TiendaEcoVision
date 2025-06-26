import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from "react-hot-toast";

const useDataModels = () => {
  const { authCokie } = useAuth();

  const [activeTab, setActiveTab] = useState("list");
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelName, setModelName] = useState("");
  const [id, setId] = useState("");

  const fetchModels = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/models", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${authCokie}`
        }
      });

      if (!response.ok) {
        throw new Error("Hubo un error al obtener las marcas");
      }

      const data = await response.json();
      setModels(data);
    } catch (error) {
      toast.error("Error al obtener los modelos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const saveModels = async (e) => {
    e.preventDefault();

    const trimmedName = modelName.trim();

    if (!trimmedName) {
      toast.error("El nombre del modelo es obligatorio");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      toast.error("El nombre solo puede contener letras y espacios");
      return;
    }

    const newModel = { name: trimmedName };

    try {
      const response = await fetch("http://localhost:4000/api/models", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCokie}`,
        },
        body: JSON.stringify(newModel),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Error al registrar el modelo");
        throw new Error(result.message);
      }

      toast.success("Modelo registrado exitosamente");
      fetchModels();
      setModelName("");
    } catch (error) {
      console.error("Error en saveModels:", error);
    }
  };

  const deleteModel = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/models/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCokie}`,
        },
      });

      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el modelo");
      }

      toast.success("Modelo eliminado");
      fetchModels();
    } catch (error) {
      toast.error("Error al eliminar el modelo");
      console.error(error);
    }
  };

  const updateModels = (model) => {
    setId(model._id);
    setModelName(model.name);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const trimmedName = modelName.trim();

    if (!trimmedName) {
      toast.error("El nombre del modelo es obligatorio");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      toast.error("El nombre solo puede contener letras y espacios");
      return;
    }

    const updatedModel = { name: trimmedName };

    try {
      const response = await fetch(`http://localhost:4000/api/models/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCokie}`,
        },
        body: JSON.stringify(updatedModel),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Error al actualizar el modelo");
        throw new Error(result.message);
      }

      toast.success("Modelo actualizado");
      setModelName("");
      setId("");
      setActiveTab("list");
      fetchModels();
    } catch (error) {
      console.error("Error en handleEdit:", error);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return {
    activeTab,
    setActiveTab,
    models,
    loading,
    modelName,
    setModelName,
    id,
    setId,
    fetchModels,
    saveModels,
    deleteModel,
    updateModels,
    handleEdit,
  };
};

export default useDataModels;
