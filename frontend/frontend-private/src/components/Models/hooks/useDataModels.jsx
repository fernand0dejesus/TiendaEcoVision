import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from "react-hot-toast";
const useDataModels = () => {   
 //codigo de las funciones
  const { authCokie } = useAuth();
  //estado para manejar el tab activo
  const [activeTab, setActiveTab] = useState("list");
  //estado para almacenar la información de los coleccions que devuelve el api
  const [models, setModels] = useState([]);
  //estado para manejar loading
  const [loading, setLoading] = useState(false);
  //estado para manejar el nombre del coleccion y id al editar un coleccion
  const [modelName, setModelName] = useState("");
  const [id, setId] = useState("");

  //funcion para consultar los coleccions
  const fetchModels = async () => {
    const response = await fetch("http://localhost:4000/api/models", {
      method: "GET",
     // credentials: "include",
        headers: {
      'Authorization': `Bearer ${authCokie}`
    }
    });
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las marcas");
    }

    const data = await response.json();
    setModels(data);
    setLoading(false);
  };

  // funcion para guardar un nuevo coleccion
  const saveModels = async (e) => {
    e.preventDefault();

    const newModel = {
      name: modelName,
      
    };

    const response = await fetch("http://localhost:4000/api/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
           
      'Authorization': `Bearer ${authCokie}`
          },
     // credentials: "include",
      body: JSON.stringify(newModel),
    });

    if (!response.ok) {
      throw new Error("Hubo un error al registrar el empleado");
    }

    //const data = await response.json();

    toast.success("coleccion registrado exitosamente");
    fetchModels();
    setModelName("");
  };

  // useEffect para cargar los coleccions al cargar la página
  useEffect(() => {
    fetchModels();
  }, []);

  //funcion para eliminar un coleccion
  const deleteModel = async (id) => {
    const response = await fetch(`http://localhost:4000/api/models/${id}`, {
      method: "DELETE",
      
      headers: {
        "Content-Type": "application/json",
      },
      //credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el coleccion");
    }

    // const data = await response.json();

    toast.success("coleccion Eliminado");
    fetchModels();
  };

  //funcion para tomar la información de un coleccion al editar
  const updateModels = async (model) => {
    setId(model._id);
    setModelName(model.name);
    setActiveTab("form");
  };

  //funcion para editar un coleccion
  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedModel = {
      name: modelName,
    };
    const response = await fetch(`http://localhost:4000/api/models/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      
      },
      credentials: "include",
      body: JSON.stringify(updatedModel),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la coleccion");
    }
    toast.success("coleccion actualizado");
    setModelName("");
    setId(""); // Limpiar el ID
    setActiveTab("list");
    fetchModels();
  };

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
    handleEdit
  };
}

export default useDataModels;



